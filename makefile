# Paths
webpack_build := webpack/webpack.config.js
webpack_dev := webpack/webpack.dev.js

# NPX functions
tsc := node_modules/.bin/tsc
webpack := node_modules/.bin/webpack
webpack_dev_server := node_modules/.bin/webpack-dev-server
mocha := node_modules/.bin/mocha

main:
	@echo "[INFO] Starting Application With Webpack"
	@$(webpackDev) --config webpack/webpack.dev.js --open

build:
	@echo "[INFO] Building Application With Webpack"
	@$(webpack) --config webpack/webpack.config.js

clean:
ifeq ($(OS), Windows_NT)
else
	@echo "[INFO] Cleaning"
	@rm -rf dist
endif

install:
	@echo "[INFO] Install Dependence From NPM"
	@npm install
	@npm install --only=dev