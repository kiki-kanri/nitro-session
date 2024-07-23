declare module 'h3' {
	interface H3EventContext {
		_nitroSessionChanged?: true;
		_nitroSessionCleared?: true;
		_nitroSessionUnstorageKey?: string;
	}
}

export {};
