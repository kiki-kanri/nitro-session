import type { H3Event } from 'h3';
import onChange from 'on-change';

import { changedSymbol } from './constants';
import type { PartialH3EventContextSession } from './types/session';

export const setupH3EventContextSession = (event: H3Event, sessionData: PartialH3EventContextSession, onChangeCallback?: (event: H3Event) => void) => {
	event.context.session = onChange(
		sessionData,
		() => {
			event.context.session[changedSymbol] = true;
			onChangeCallback?.(event);
			onChange.unsubscribe(event.context.session);
		},
		{ ignoreSymbols: true }
	);
};
