import type { NitroApp as NitroAppA } from 'nitro/types';
// @ts-expect-error Ignore this error.
import type { NitroApp as NitroAppB } from 'nitropack';
// @ts-expect-error Ignore this error.
import type { NitroApp as NitroAppC } from 'nitropack/types';
// @ts-expect-error Ignore this error.
import type { NitroApp as NitroAppD } from 'nitropack-nightly/types';

import type { PluginOptions } from './options';

export type NitroApp = (unknown extends NitroAppA ? never : NitroAppA) extends never ? (unknown extends NitroAppB ? never : NitroAppB) extends never ? (unknown extends NitroAppC ? never : NitroAppC) extends never ? NitroAppD : NitroAppC : NitroAppB : NitroAppA;

declare module 'nitro/types' {
	export interface NitroRuntimeConfig {
		nitroSession?: PluginOptions;
	}
}

// @ts-expect-error Ignore this error.
declare module 'nitropack' {
	export interface NitroRuntimeConfig {
		nitroSession?: PluginOptions;
	}
}

// @ts-expect-error Ignore this error.
declare module 'nitropack/types' {
	export interface NitroRuntimeConfig {
		nitroSession?: PluginOptions;
	}
}

// @ts-expect-error Ignore this error.
declare module 'nitropack-nightly/types' {
	export interface NitroRuntimeConfig {
		nitroSession?: PluginOptions;
	}
}
