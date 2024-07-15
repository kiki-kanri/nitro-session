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
	enabled?: boolean;
	maxAge?: number;
	storage?: {
		data?: DataStorageOptions;
		token?: TokenStorageOptions;
	};
}

interface UseUnstorageDataStorageOptions {
	key?: {
		length?: number;
		prefix?: string;
	};
}

export namespace DataStorageOptions {
	export interface CookieOrHeader {
		driver: 'cookie/header';
		options: {
			encodingOptions?: AESCipherEncodingOptions;
			encryptionMode?: 'cbc' | 'cfb' | 'cfb1' | 'cfb8' | 'ctr' | 'ofb';
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
		options?: CookieSerializeOptions & { name?: string };
	}

	export interface Header {
		driver: 'header';
		options?: {
			setName?: string;
			name?: string;
		};
	}
}
