import { defineConfig } from 'ts-project-builder';

export default defineConfig({
    builtInInputPluginOptions: {
        nodeExternal: { devDeps: true },
        typescript: { tsconfig: './tsconfig.build.json' },
    },
});
