#!/bin/bash

npm run build &&
	cp ./LICENSE ./package.json ./README.md ./dist &&
	cd ./dist &&
	npm publish
