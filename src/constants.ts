import type { DataHandler } from './handlers/data';

export const cachedHandlers: { data?: DataHandler } = {};
export const changedSymbol = Symbol();
export const clearedSymbol = Symbol();
export const defaultOptions = {
	enabled: true,
	maxAge: 86400,
	storage: {
		data: { driver: 'memory' },
		token: { driver: 'cookie' }
	}
} as const;

export const unstorageKeySymbol = Symbol();
