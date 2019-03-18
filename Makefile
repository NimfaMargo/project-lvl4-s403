install:
	install-deps install-flow-typed
install-deps:
	npm install
start:
	npx nodemon --exec npx babel-node server/bin/slack.js
publish:
	npm publish
build:
	rm -rf dist
	npm run build
lint:
	npx eslint .
fix:
	npx eslint . --fix
test:
	npm test
