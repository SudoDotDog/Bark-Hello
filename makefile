build := typescript/tsconfig.build.json
dev := typescript/tsconfig.dev.json

# NPX functions
ifeq ($(OS), Windows_NT)
	tsc := .\node_modules\.bin\tsc
	mocha := .\node_modules\.bin\mocha
	dev-server := .\node_modules\.bin\webpack-dev-server
	webpack := .\node_modules\.bin\webpack
else
	tsc := node_modules/.bin/tsc
	mocha := node_modules/.bin/mocha
	webpackDev := node_modules/.bin/webpack-dev-server
	webpack := node_modules/.bin/webpack
endif

retriever:
	@echo "[INFO] Starting Application With Webpack"
	@$(webpackDev) --config webpack/webpack.dev.js --open

build:
	@echo "[INFO] Building Application With Webpack"
	@$(webpack) --config webpack/webpack.config.js

help:
	@echo ""
	@echo " ┌────────────── Retriever Makefile Helps ────────────────────────────────────────────┐ "
	@echo " ┝━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┥ "
	@echo " │ Command      │                                                                     │ "
	@echo " ┝━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┥ "
	@echo " │ make         │ Run application                                                     │ "
	@echo " │ make clean   │ Clean up                                                            │ "
	@echo " │ make install │ Install dependence                                                  │ "
	@echo " └──────────────┴─────────────────────────────────────────────────────────────────────┘ "
	@echo ""

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