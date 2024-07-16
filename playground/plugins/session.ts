import nitroSession from '../../src';
import type {} from '../../src/types/h3';
import type {} from '../../src/types/nitropack';

export default defineNitroPlugin((nitroApp) => nitroSession(nitroApp, useRuntimeConfig().nitroSession));
