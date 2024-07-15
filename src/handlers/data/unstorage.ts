import consola from 'consola';
import { nanoid } from 'nanoid';
import { createStorage, prefixStorage } from 'unstorage';
import type { Storage } from 'unstorage';

import { unstorageKeySymbol } from '../../constants';
import type { DataStorageOptions } from '../../types/options';
import type { PartialH3EventContextSession } from '../../types/session';

export class UnstorageDataHandler {
	#keyLength: number;
	#storage: Storage;

	private constructor(keyLength: number, storage: Storage) {
		this.#keyLength = keyLength;
		this.#storage = storage;
	}

	static async createInstance(options: Exclude<DataStorageOptions, DataStorageOptions.CookieOrHeader>) {
		const keyLength = options.key?.length || 24;
		if (keyLength < 24) throw new Error('The unstorage key length must be 24 or more');
		let storage;
		if (options.driver === 'memory') storage = createStorage({ driver: (await import('unstorage/drivers/memory')).default() });
		else {
			try {
				const driver = (await import(`unstorage/drivers/${options.driver}`)).default;
				storage = prefixStorage(createStorage({ driver: driver(options.options) }), options.key?.prefix || 'session');
			} catch (error) {
				consola.error(error);
				throw new Error(`Failed to import or create unstorage driver '${options.driver}', please check if the relevant dependency is installed and the driver is supported and set the correct options.`);
			}
		}

		return new this(keyLength, storage);
	}

	async delete(key: string) {
		try {
			await this.#storage.removeItem(key);
		} catch (error) {
			consola.error(error);
		}
	}

	async get(key: string) {
		try {
			const data = await this.#storage.getItem<[number, PartialH3EventContextSession]>(key);
			if (data) return (data[1][unstorageKeySymbol] = key), data;
		} catch (error) {
			consola.error(error);
		}
	}

	async setOrProcessAndGetToken(data: [number, PartialH3EventContextSession]) {
		try {
			const key = data[1][unstorageKeySymbol] || (data[1][unstorageKeySymbol] = nanoid(this.#keyLength));
			await this.#storage.setItem(key, data);
			return key;
		} catch (error) {
			consola.error(error);
		}
	}
}

export default UnstorageDataHandler;
