import type { PluginOptions } from './options';

declare module 'nitropack' {
	export interface NitroRuntimeConfig {
		nitroSession?: PluginOptions;
	}
}
