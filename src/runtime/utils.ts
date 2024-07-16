import { H3Event } from 'h3';
import onChange from 'on-change';

import { changedSymbol, clearedSymbol, unstorageKeySymbol } from '../constants';
import type { PartialH3EventContextSession } from '../types/session';
import { setupH3EventContextSession } from '../utils';

export const clearH3EventContextSession = (event: H3Event) => {
	onChange.unsubscribe(event.context.session);
	setupH3EventContextSession(
		event,
		{
			[changedSymbol]: true,
			[clearedSymbol]: true,
			[unstorageKeySymbol]: event.context.session[unstorageKeySymbol]
		},
		(event) => delete event.context.session[clearedSymbol]
	);
};

export const popH3EventContextSession = <K extends keyof PartialH3EventContextSession>(event: H3Event, key: K) => {
	const value = event.context.session[key];
	delete event.context.session[key];
	return value;
};
