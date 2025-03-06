import type { H3Event } from 'h3';
import { merge } from 'lodash-es';
import { AesCipher } from 'node-ciphers';
import { Buffer } from 'node:buffer';

import type { DataStorageOptions } from '../../types/options';

import type { StoredData } from './';

export class CookieOrHeaderDataHandler {
    #cipher: AesCipher.Cbc | AesCipher.Cfb | AesCipher.Cfb1 | AesCipher.Cfb8 | AesCipher.Ctr | AesCipher.Ofb;

    constructor(options?: DataStorageOptions.CookieOrHeader['options']) {
        const aesModeToCipherClassMap = {
            cbc: AesCipher.Cbc,
            cfb: AesCipher.Cfb,
            cfb1: AesCipher.Cfb1,
            cfb8: AesCipher.Cfb8,
            ctr: AesCipher.Ctr,
            ofb: AesCipher.Ofb,
        } as const;

        if (options?.encryptionMode && !aesModeToCipherClassMap[options.encryptionMode]) throw new Error(`Invalid cookie/header data encryption mode: ${options.encryptionMode}`);
        if (!options?.key) throw new Error('No cookie/header data encryption key provided');
        const isKeyLengthValid = [
            16,
            24,
            32,
        ].includes(Buffer.from(options.key, options.encodingOptions?.key).byteLength);
        if (!isKeyLengthValid) throw new Error('Invalid cookie/header data encryption key length');
        this.#cipher = new aesModeToCipherClassMap[options.encryptionMode || 'ctr'](
            options.key,
            merge(
                {
                    decryptInput: 'base64',
                    encryptOutput: 'base64',
                    iv: 'base64',
                },
                options.encodingOptions,
            ),
        );
    }

    delete(_: string) {}

    get(_: H3Event, token: string) {
        const separatorIndex = token.lastIndexOf(':');
        if (separatorIndex !== -1) return this.#cipher.decryptToJson<StoredData>(token.slice(0, separatorIndex), token.slice(separatorIndex + 1));
    }

    setOrProcessAndGetToken(_: H3Event, data: StoredData) {
        const encryptResult = this.#cipher.encryptJson(data);
        if (encryptResult) return `${encryptResult.data}:${encryptResult.iv}`;
    }
}

export default CookieOrHeaderDataHandler;
