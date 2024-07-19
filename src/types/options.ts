import type { CookieSerializeOptions } from 'cookie-es';
import type { AESCipherEncodingOptions } from 'node-ciphers';
import type { FSStorageOptions } from 'unstorage/drivers/fs';
import type { FSStorageOptions as FSLiteStorageOptions } from 'unstorage/drivers/fs-lite';
import type { LRUDriverOptions } from 'unstorage/drivers/lru-cache';
import type { MongoDbOptions } from 'unstorage/drivers/mongodb';
import type { RedisOptions } from 'unstorage/drivers/redis';

export type DataStorageOptions =
	| DataStorageOptions.CookieOrHeader
	| ((DataStorageOptions.Fs | DataStorageOptions.FsLite | DataStorageOptions.LruCache | DataStorageOptions.Memory | DataStorageOptions.MongoDB | DataStorageOptions.Redis) & UseUnstorageDataStorageOptions);

export type TokenStorageOptions = TokenStorageOptions.Cookie | TokenStorageOptions.Header;

export interface PluginOptions {
	/**
	 * @default true
	 */
	enabled?: boolean;

	/**
	 * Session expiration time in seconds.
	 *
	 * If the token driver is set to cookie, this value will be used as the `maxAge` option for the cookie.
	 *
	 * @default 86400
	 */
	maxAge?: number;

	/**
	 * Options for storing session data and token.
	 */
	storage?: {
		/**
		 * @default { driver: 'memory' }
		 */
		data?: DataStorageOptions;

		/**
		 * @default { driver: 'cookie' }
		 */
		token?: TokenStorageOptions;
	};
}

interface UseUnstorageDataStorageOptions {
	/**
	 * Options related to keys for storing data in unstorage drivers.
	 */
	key?: {
		/**
		 * For security reasons, this value must not be less than 24.
		 *
		 * @default 24
		 */
		length?: number;

		/**
		 * @default 'session'
		 */
		prefix?: string;
	};
}

export namespace DataStorageOptions {
	export interface CookieOrHeader {
		driver: 'cookie/header';

		/**
		 * Options for data encryption and decryption.
		 */
		options: {
			/**
			 * The encoding used for encryption, decryption, and handling keys.
			 *
			 * @default
			 * {
			 *   decryptInput: 'base64',
			 *   decryptOutput: 'utf8',
			 *   encryptInput: 'utf8',
			 *   encryptOutput: 'base64',
			 *   key: 'utf8',
			 *   iv: 'base64'
			 * }
			 */
			encodingOptions?: AESCipherEncodingOptions;
			encryptionMode?: 'cbc' | 'cfb' | 'cfb1' | 'cfb8' | 'ctr' | 'ofb';

			/**
			 * The key used for encryption, with a length of 16, 24, or 32 bytes.
			 *
			 * The byte length may vary with the same input depending on the encoding type set in `encodingOptions.key`.
			 */
			key: string;
		};
	}

	export interface Fs {
		driver: 'fs';
		options?: FSStorageOptions;
	}

	export interface FsLite {
		driver: 'fs-lite';
		options?: FSLiteStorageOptions;
	}

	export interface LruCache {
		driver: 'lru-cache';
		options?: LRUDriverOptions;
	}

	export interface Memory {
		driver: 'memory';
	}

	export interface MongoDB {
		driver: 'mongodb';
		options: MongoDbOptions;
	}

	export interface Redis {
		driver: 'redis';
		options?: RedisOptions;
	}
}

export namespace TokenStorageOptions {
	export interface Cookie {
		driver: 'cookie';
		/**
		 * @default
		 * {
		 *   httpOnly: true,
		 *   name: 'session',
		 *   path: '/',
		 *   sameSite: 'lax',
		 *   secure: true
		 * }
		 */
		options?: CookieSerializeOptions & {
			/**
			 * The cookie name for storing the token.
			 *
			 * @default 'session'
			 */
			name?: string;
		};
	}

	export interface Header {
		driver: 'header';
		options?: {
			/**
			 * The key for retrieving the token header when receiving a request.
			 *
			 * @default 'session'
			 */
			name?: string;

			/**
			 * The key for setting the token header when returning a response.
			 *
			 * @default 'set-session'
			 */
			setName?: string;
		};
	}
}
