#!/bin/bash

cd $(dirname "$(readlink -f "$0")")
pnpm run build && cp ./LICENSE ./package.json ./README.md ./dist && cd ./dist && rm -rf ./types/*.*js && npm publish
