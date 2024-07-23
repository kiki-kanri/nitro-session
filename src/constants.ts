export const changedSymbol = Symbol();
export const clearedSymbol = Symbol();
export const defaultOptions = Object.freeze({
	enabled: true,
	maxAge: 86400,
	storage: {
		data: { driver: 'memory' },
		token: { driver: 'cookie' }
	},
	strictIpValidation: false
} as const);

export const unstorageKeySymbol = Symbol();
