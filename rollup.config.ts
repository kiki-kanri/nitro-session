import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import del from 'rollup-plugin-delete';
import nodeExternals from 'rollup-plugin-node-externals';

export default defineConfig({
	input: ['./src/index.ts', './src/runtime/utils.ts'],
	output: {
		dir: './dist',
		entryFileNames: '[name].mjs',
		exports: 'named',
		externalLiveBindings: false,
		format: 'esm',
		generatedCode: {
			arrowFunctions: true,
			constBindings: true,
			objectShorthand: true
		},
		interop: 'compat',
		preserveModules: true,
		preserveModulesRoot: './src'
	},
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
