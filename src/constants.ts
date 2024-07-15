import type { PluginOptions } from './types/options';

export const changedSymbol = Symbol();
export const clearedSymbol = Symbol();
export const defaultOptions: Readonly<Required<PluginOptions>> = {
	enabled: true,
	maxAge: 86400,
	storage: {
		data: { driver: 'memory' },
		token: { driver: 'cookie' }
	}
};

export const unstorageKeySymbol = Symbol();
