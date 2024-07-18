import consola from 'consola';
import { cloneDeep, merge } from 'lodash-es';
import type { NitroApp } from 'nitropack';

import { cachedHandlers, changedSymbol, clearedSymbol, defaultOptions } from './constants';
import { DataHandler } from './handlers/data';
import CookieTokenHandler from './handlers/token/cookie';
import HeaderTokenHandler from './handlers/token/header';
import type { PluginOptions } from './types/options';
import type { PartialH3EventContextSession } from './types/session';
import { setupH3EventContextSession } from './utils';

export const initialization = async (framework: 'Nitro' | 'Nuxt', options?: PluginOptions) => {
	consola.info(`Initializing ${framework} session...`);
	const pluginOptions = merge(defaultOptions, cloneDeep(options || {}));
	if (!pluginOptions.enabled) return consola.info(`${framework} session disabled.`);
	consola.info(`${framework} session configured data with '${pluginOptions.storage.data.driver}' driver.`);
	consola.info(`${framework} session configured token with '${pluginOptions.storage.token.driver}' driver.`);
	const handlers = await createHandlers(pluginOptions);
	cachedHandlers.data = handlers.dataHandler;
	return { handlers, pluginOptions };
};

export const registerHooks = async (nitroApp: NitroApp, options: Required<PluginOptions>, onlyApi?: boolean, handlers?: { dataHandler: DataHandler; tokenHandler: CookieTokenHandler | HeaderTokenHandler }) => {
	if (!handlers) handlers = await createHandlers(options);
	nitroApp.hooks.hook('beforeResponse', async (event) => {
		if (!event.context.session[changedSymbol] || (onlyApi && !event.path.startsWith('/api'))) return;
		if (event.context.session[clearedSymbol]) {
			const token = handlers.tokenHandler.get(event);
			if (token) await handlers.dataHandler.delete(token);
			handlers.tokenHandler.delete(event);
		} else {
			const token = await handlers.dataHandler.setAndGetToken(event.context.session);
			if (token) handlers.tokenHandler.set(event, token);
		}
	});

	nitroApp.hooks.hook('request', async (event) => {
		if (onlyApi && !event.path.startsWith('/api')) return;
		const token = handlers.tokenHandler.get(event);
		let sessionData: PartialH3EventContextSession | undefined;
		if (token) {
			sessionData = await handlers.dataHandler.get(token);
			if (!sessionData) {
				await handlers.dataHandler.delete(token);
				handlers.tokenHandler.delete(event);
			}
		}

		setupH3EventContextSession(event, sessionData || {});
	});
};

async function createHandlers(options: Required<PluginOptions>) {
	const dataHandler = await DataHandler.createInstance(options);
	let tokenHandler;
	if (options.storage?.token?.driver === 'cookie') tokenHandler = new CookieTokenHandler(options.storage.token.options, options.maxAge);
	else if (options.storage?.token?.driver === 'header') tokenHandler = new HeaderTokenHandler(options.storage?.token?.options);
	else throw new Error('Invalid token storage driver');
	return { dataHandler, tokenHandler };
}

export default async (nitroApp: NitroApp, options?: PluginOptions) => {
	const initializationResult = await initialization('Nitro', options);
	if (!initializationResult) return;
	await registerHooks(nitroApp, initializationResult.pluginOptions, false, initializationResult.handlers);
	consola.success('Nitro session initialization successful.');
};
