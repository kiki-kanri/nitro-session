import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import type { OutputOptions } from 'rollup';
import del from 'rollup-plugin-delete';
import nodeExternals from 'rollup-plugin-node-externals';

const generateOutputOptions = (format: 'cjs' | 'esm'): OutputOptions => ({
	dir: './dist',
	entryFileNames: `[name].${format === 'cjs' ? 'cjs' : 'mjs'}`,
	exports: 'named',
	externalLiveBindings: false,
	format,
	generatedCode: {
		arrowFunctions: true,
		constBindings: true,
		objectShorthand: true
	},
	interop: 'compat',
	preserveModules: true,
	preserveModulesRoot: './src'
});

export default defineConfig({
	input: ['./src/index.ts', './src/runtime/utils.ts'],
	output: [generateOutputOptions('cjs'), generateOutputOptions('esm')],
	plugins: [
		del({ targets: './dist' }),
		nodeExternals({
			include: [
				'cookie-es',
				'h3',
				'ohash'
			]
		}),
		nodeResolve(),
		typescript({ tsconfig: './tsconfig.build.json' })

	]
});
