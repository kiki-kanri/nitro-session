import consola from 'consola';
import { cloneDeep, merge } from 'lodash-es';
import type { NitroApp } from 'nitropack';

import { changedSymbol, clearedSymbol, defaultOptions } from './constants';
import { DataHandler } from './handlers/data';
import CookieTokenHandler from './handlers/token/cookie';
import HeaderTokenHandler from './handlers/token/header';
import type { PluginOptions } from './types/options';
import type { PartialH3EventContextSession } from './types/session';
import { setupH3EventContextSession } from './utils';

export const registerHooks = async (nitroApp: NitroApp, options: Required<PluginOptions>) => {
	const dataHandler = await DataHandler.createInstance(options);
	let tokenHandler;
	if (options.storage?.token?.driver === 'cookie') tokenHandler = new CookieTokenHandler(options.storage.token.options, options.maxAge);
	else if (options.storage?.token?.driver === 'header') tokenHandler = new HeaderTokenHandler(options.storage?.token?.options);
	else throw new Error('Invalid token storage driver');
	nitroApp.hooks.hook('beforeResponse', async (event) => {
		if (!event.context.session[changedSymbol] || !event.path.startsWith('/api')) return;
		if (event.context.session[clearedSymbol]) {
			const token = tokenHandler.get(event);
			if (token) await dataHandler.delete(token);
			tokenHandler.delete(event);
		} else {
			const token = await dataHandler.setAndGetToken(event.context.session);
			if (token) tokenHandler.set(event, token);
		}
	});

	nitroApp.hooks.hook('request', async (event) => {
		if (!event.path.startsWith('/api')) return;
		const token = tokenHandler.get(event);
		let sessionData: PartialH3EventContextSession | undefined;
		if (token) {
			sessionData = await dataHandler.get(token);
			if (!sessionData) {
				await dataHandler.delete(token);
				tokenHandler.delete(event);
			}
		}

		setupH3EventContextSession(event, sessionData || {});
	});
};

export default async (nitroApp: NitroApp, options?: PluginOptions) => {
	const pluginOptions = merge(defaultOptions, cloneDeep(options || {}));
	if (!pluginOptions.enabled) return consola.info('Nitro session disabled.');
	consola.info('Initializing Nitro session...');
	consola.info(`Nitro session configured data with '${pluginOptions.storage?.data?.driver}' driver.`);
	consola.info(`Nitro session configured token with '${pluginOptions.storage?.token?.driver}' driver.`);
	await registerHooks(nitroApp, pluginOptions);
	consola.success('Nitro session initialization successful.');
};
