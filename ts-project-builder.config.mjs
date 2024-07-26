import { defineConfig } from 'ts-project-builder';

export default defineConfig({
	builtInInputPluginOptions: {
		nodeExternal: {
			include: [
				'cookie-es',
				'h3',
				'ohash'
			]
		},
		typescript: { tsconfig: './tsconfig.build.json' }
	}
});
