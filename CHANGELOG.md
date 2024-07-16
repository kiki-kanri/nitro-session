# Changelog

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
