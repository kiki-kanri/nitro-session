import type { PluginOptions } from './types/options';

export const changedSymbol = Symbol();
export const clearedSymbol = Symbol();
export const defaultStorageOptions: Readonly<Required<NonNullable<PluginOptions['storage']>>> = { data: { driver: 'memory' }, token: { driver: 'cookie' } };
export const unstorageKeySymbol = Symbol();
