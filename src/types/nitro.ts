import type { PluginOptions } from './options';

declare module 'nitro/types' {
	export interface NitroRuntimeConfig {
		nitroSession?: PluginOptions;
	}
}

// @ts-expect-error
declare module 'nitropack' {
	export interface NitroRuntimeConfig {
		nitroSession?: PluginOptions;
	}
}

// @ts-expect-error
declare module 'nitropack-nightly/types' {
	export interface NitroRuntimeConfig {
		nitroSession?: PluginOptions;
	}
}
