# Changelog

## v1.2.1

[compare changes](https://github.com/kiki-kanri/nitro-session/compare/v1.2.0...v1.2.1)

### 📖 Documentation

- Update README ([d734633](https://github.com/kiki-kanri/nitro-session/commit/d734633))

### 🏡 Chore

- Add main, module, and types fields to package.json ([37b3491](https://github.com/kiki-kanri/nitro-session/commit/37b3491))
- Update tsconfig.json ([a2bccce](https://github.com/kiki-kanri/nitro-session/commit/a2bccce))

### ❤️ Contributors

- kiki-kanri

## v1.2.0

[compare changes](https://github.com/kiki-kanri/nitro-session/compare/v1.1.2...v1.2.0)

### 🚀 Enhancements

- Add CJS format to build output ([beb319d](https://github.com/kiki-kanri/nitro-session/commit/beb319d))

### 🏡 Chore

- Update keywords list in package.json ([22a818d](https://github.com/kiki-kanri/nitro-session/commit/22a818d))

### ❤️ Contributors

- kiki-kanri

## v1.1.2

[compare changes](https://github.com/kiki-kanri/nitro-session/compare/v1.1.1...v1.1.2)

### 📦 Build

- Switch build process to Rollup ([1e9bc8b](https://github.com/kiki-kanri/nitro-session/commit/1e9bc8b))

### ❤️ Contributors

- kiki-kanri

## v1.1.1

[compare changes](https://github.com/kiki-kanri/nitro-session/compare/v1.1.0...v1.1.1)

### 🏡 Chore

- Add engines field to package.json with Node.js >=18 ([737eb5c](https://github.com/kiki-kanri/nitro-session/commit/737eb5c))

### ❤️ Contributors

- kiki-kanri

## v1.1.0

[compare changes](https://github.com/kiki-kanri/nitro-session/compare/v1.0.1...v1.1.0)

### 🚀 Enhancements

- Invalidate session if request IP does not match IP in session data ([01cebfe](https://github.com/kiki-kanri/nitro-session/commit/01cebfe))
- Add more available unstorage drivers ([6f7b475](https://github.com/kiki-kanri/nitro-session/commit/6f7b475))

### 💅 Refactors

- Change type-only imports to import type ([01deb56](https://github.com/kiki-kanri/nitro-session/commit/01deb56))

### 📖 Documentation

- Update README ([a923a2a](https://github.com/kiki-kanri/nitro-session/commit/a923a2a))

### 🏡 Chore

- Update .gitignore ([72cf877](https://github.com/kiki-kanri/nitro-session/commit/72cf877))
- Remove non-.d.ts files from types folder after build ([c75ee5f](https://github.com/kiki-kanri/nitro-session/commit/c75ee5f))
- Upgrade dependencies ([b278854](https://github.com/kiki-kanri/nitro-session/commit/b278854))

### ❤️ Contributors

- kiki-kanri

## v1.0.1

> [!IMPORTANT]
> If you are using the `registerHooks` function exported by this package, please replace it with `registerHooksAndSetupCachedHandlers`.

[compare changes](https://github.com/kiki-kanri/nitro-session/compare/v1.0.0...v1.0.1)

### 💅 Refactors

- Move data handler assignment to registerHooks function ([fb90944](https://github.com/kiki-kanri/nitro-session/commit/fb90944))

### 📖 Documentation

- Fix incorrect examples in README ([01d4bea](https://github.com/kiki-kanri/nitro-session/commit/01d4bea))

### ❤️ Contributors

- kiki-kanri

## v1.0.0

[compare changes](https://github.com/kiki-kanri/nitro-session/compare/v0.2.0...v1.0.0)

### 🚀 Enhancements

- Add runtime utilities ([3f7051b](https://github.com/kiki-kanri/nitro-session/commit/3f7051b))
- Make session activation path check configurable via parameter for paths starting with /api ([09a5b18](https://github.com/kiki-kanri/nitro-session/commit/09a5b18))
- Add type exports for h3, nitropack, `H3EventContextSession` in entry point ([5af1ea8](https://github.com/kiki-kanri/nitro-session/commit/5af1ea8))
- **entry:** Export all session types ([1213a31](https://github.com/kiki-kanri/nitro-session/commit/1213a31))

### 📖 Documentation

- **runtime:** Add comments and examples to utils ([7e79ab3](https://github.com/kiki-kanri/nitro-session/commit/7e79ab3))
- Update README ([15cc4c3](https://github.com/kiki-kanri/nitro-session/commit/15cc4c3))
- Add comments to some properties in options ([eb21471](https://github.com/kiki-kanri/nitro-session/commit/eb21471))

### 🏡 Chore

- Update build script ([767d2f6](https://github.com/kiki-kanri/nitro-session/commit/767d2f6))
- Update dependencies and modify export method of utils in playground ([853a81a](https://github.com/kiki-kanri/nitro-session/commit/853a81a))
- **playground:** Modify some code in playground ([d160119](https://github.com/kiki-kanri/nitro-session/commit/d160119))
- Update description and keywords in package.json ([957ee25](https://github.com/kiki-kanri/nitro-session/commit/957ee25))

### ❤️ Contributors

- kiki-kanri

## v0.2.0

[compare changes](https://github.com/kiki-kanri/nitro-session/compare/v0.1.0...v0.2.0)

### 🚀 Enhancements

- Add script for building and publishing ([ec0b0a2](https://github.com/kiki-kanri/nitro-session/commit/ec0b0a2))
- Add session utilities for runtime ([b147fb6](https://github.com/kiki-kanri/nitro-session/commit/b147fb6))
- Add playground related files ([ac08ae8](https://github.com/kiki-kanri/nitro-session/commit/ac08ae8))

### 🩹 Fixes

- Correct maxAge assignment error when creating DataHandler ([2ab7b53](https://github.com/kiki-kanri/nitro-session/commit/2ab7b53))

### 💅 Refactors

- Rename types/index.ts to types/nitropack.ts ([b564b6b](https://github.com/kiki-kanri/nitro-session/commit/b564b6b))
- Make some parameters optional in data handler's constructor ([e6a6530](https://github.com/kiki-kanri/nitro-session/commit/e6a6530))
- Change runtimeConfig acquisition to parameter passing during initialization and modify plugin entry point in dev mode ([bb2cc8f](https://github.com/kiki-kanri/nitro-session/commit/bb2cc8f))
- Remove prepack script from package.json ([2934e13](https://github.com/kiki-kanri/nitro-session/commit/2934e13))
- Update export settings in package.json ([4773a27](https://github.com/kiki-kanri/nitro-session/commit/4773a27))
- Modify initialization process ([6659819](https://github.com/kiki-kanri/nitro-session/commit/6659819))
- Dynamically import modules using helper function ([ad15b52](https://github.com/kiki-kanri/nitro-session/commit/ad15b52))

### 📖 Documentation

- Add README ([8f8bee6](https://github.com/kiki-kanri/nitro-session/commit/8f8bee6))

### 🏡 Chore

- Change prepare script to prepack in package.json ([2f61a71](https://github.com/kiki-kanri/nitro-session/commit/2f61a71))
- Change method for clearing dist folder before build ([701738a](https://github.com/kiki-kanri/nitro-session/commit/701738a))

### ❤️ Contributors

- kiki-kanri

## v0.1.0

### 🚀 Enhancements

- Add required dependencies ([1ffc858](https://github.com/kiki-kanri/nitro-session/commit/1ffc858))
- Add constants and types ([c53a240](https://github.com/kiki-kanri/nitro-session/commit/c53a240))
- Add `CookieTokenHandler` and `HeaderTokenHandler` ([531c819](https://github.com/kiki-kanri/nitro-session/commit/531c819))
- Add `setupH3EventContextSession` utility ([099901d](https://github.com/kiki-kanri/nitro-session/commit/099901d))
- Add MongoDB option to data storage drivers in unstorage ([0e74bb7](https://github.com/kiki-kanri/nitro-session/commit/0e74bb7))
- Add data handlers ([6df2850](https://github.com/kiki-kanri/nitro-session/commit/6df2850))
- Initial completion of core functionality ([908adcd](https://github.com/kiki-kanri/nitro-session/commit/908adcd))
- Add changelogen dependency and bumplog script ([442835a](https://github.com/kiki-kanri/nitro-session/commit/442835a))

### 💅 Refactors

- Rename parameters in `setupH3EventContextSession` ([5bcfdaa](https://github.com/kiki-kanri/nitro-session/commit/5bcfdaa))
- Change `defaultStorageOptions` to `defaultOptions` ([1422603](https://github.com/kiki-kanri/nitro-session/commit/1422603))

### 🏡 Chore

- Add base files ([e9804fd](https://github.com/kiki-kanri/nitro-session/commit/e9804fd))
- Update .gitignore ([3d21169](https://github.com/kiki-kanri/nitro-session/commit/3d21169))
- Remove defu and ioredis dependencies, add lodash-es ([4f6224a](https://github.com/kiki-kanri/nitro-session/commit/4f6224a))
- Update package.json ([b85cd6e](https://github.com/kiki-kanri/nitro-session/commit/b85cd6e))

### ❤️ Contributors

- kiki-kanri
