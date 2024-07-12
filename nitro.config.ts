//https://nitro.unjs.io/config
export default defineNitroConfig({
	alias: { '@': '~/' },
	noPublicDir: true,
	plugins: ['../src'],
	serveStatic: false,
	srcDir: './playground',
	sourceMap: false,
	typescript: {
		strict: true,
		tsConfig: {
			compilerOptions: {
				baseUrl: '../../',
				noImplicitOverride: true,
				noUncheckedIndexedAccess: true,
				noUnusedLocals: true,
				noUnusedParameters: true,
				paths: { '@/*': ['./playground/*'] }
			}
		}
	}
});
