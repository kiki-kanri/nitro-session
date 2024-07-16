import type { PluginOptions } from '../../types/options';
import type { PartialH3EventContextSession } from '../../types/session';
import CookieOrHeaderDataHandler from './cookie-or-header';
import UnstorageDataHandler from './unstorage';

export class DataHandler {
	#handler: CookieOrHeaderDataHandler | UnstorageDataHandler;
	#maxAgeMilliseconds: number;

	private constructor(handler: CookieOrHeaderDataHandler | UnstorageDataHandler, maxAge: number) {
		this.#handler = handler;
		this.#maxAgeMilliseconds = maxAge * 1000;
	}

	static async createInstance(options: PluginOptions) {
		let handler;
		if (options.storage?.data?.driver === 'cookie/header') handler = new CookieOrHeaderDataHandler(options.storage.data.options);
		else handler = await UnstorageDataHandler.createInstance(options.storage?.data || { driver: 'memory' });
		return new this(handler, options.maxAge ?? 86400);
	}

	async delete(token: string) {
		await this.#handler.delete(token);
	}

	async get(token: string) {
		const data = await this.#handler.get(token);
		if (data && data[0] + this.#maxAgeMilliseconds >= Date.now()) return data[1];
	}

	async setAndGetToken(data: PartialH3EventContextSession) {
		return await this.#handler.setOrProcessAndGetToken([Date.now(), data]);
	}
}

export default DataHandler;
