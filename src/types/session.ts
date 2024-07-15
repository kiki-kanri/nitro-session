import type { changedSymbol, clearedSymbol, unstorageKeySymbol } from '../constants';

export interface H3EventContextSession {
	[changedSymbol]?: true;
	[clearedSymbol]?: true;
	[unstorageKeySymbol]?: string;
}

export type PartialH3EventContextSession = Partial<H3EventContextSession>;
