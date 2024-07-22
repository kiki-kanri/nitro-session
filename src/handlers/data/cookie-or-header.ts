import { merge } from 'lodash';
import { AESCipher } from 'node-ciphers';

import type { DataStorageOptions } from '../../types/options';
import type { StoredData } from './';

export class CookieOrHeaderDataHandler {
	#cipher: AESCipher.CBC | AESCipher.CFB | AESCipher.CFB1 | AESCipher.CFB8 | AESCipher.CTR | AESCipher.OFB;

	constructor(options?: DataStorageOptions.CookieOrHeader['options']) {
		const aesModeToCipherClassMap = {
			cbc: AESCipher.CBC,
			cfb: AESCipher.CFB,
			cfb1: AESCipher.CFB1,
			cfb8: AESCipher.CFB8,
			ctr: AESCipher.CTR,
			ofb: AESCipher.OFB
		} as const;

		if (options?.encryptionMode && !aesModeToCipherClassMap[options.encryptionMode]) throw new Error(`Invalid cookie/header data encryption mode: ${options.encryptionMode}`);
		if (!options?.key) throw new Error('No cookie/header data encryption key provided');
		// prettier-ignore
		if (![16, 24, 32].includes(Buffer.from(options.key, options.encodingOptions?.key).byteLength)) throw new Error('Invalid cookie/header data encryption key length');
		this.#cipher = new aesModeToCipherClassMap[options.encryptionMode || 'ctr'](
			options.key,
			merge(
				{
					decryptInput: 'base64',
					encryptOutput: 'base64',
					iv: 'base64'
				},
				options.encodingOptions
			)
		);
	}

	delete(_: string) {}

	get(token: string) {
		const separatorIndex = token.lastIndexOf(':');
		if (separatorIndex !== -1) return this.#cipher.decryptToJSON<StoredData>(token.slice(0, separatorIndex), token.slice(separatorIndex + 1));
	}

	setOrProcessAndGetToken(data: StoredData) {
		const encryptResult = this.#cipher.encryptJSON(data);
		if (encryptResult) return `${encryptResult.data}:${encryptResult.iv}`;
	}
}

export default CookieOrHeaderDataHandler;
