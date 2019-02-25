/**
 * @author WMXPY
 * @namespace Webpack
 * @description Development
 */

const SudooWebpack = require("@sudoo/webpack-react").SudooWebpack;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const APP_DIR = path.resolve(__dirname, '..', 'src');
const TSCONFIG_PATH = path.resolve(__dirname, '..', 'typescript', 'tsconfig.dev.json');
const COMMON_SASS_DIR = path.resolve(__dirname, '..', 'style', 'common');
const FAVICON_DIR = path.resolve(__dirname, '..', 'public', 'favicon.png');
const MANIFEST_DIR = path.resolve(__dirname, '..', 'public', 'manifest.json');

module.exports = SudooWebpack.create({
    APP_DIR,
    BUILD_DIR,
    COMMON_SASS_DIR,
    TSCONFIG_PATH,
    APP_ENTRY_FILE_NAME: 'index.tsx',
}, {
    title: 'Hello',
    plugins: [
        new CopyWebpackPlugin([{
            from: FAVICON_DIR,
            to: BUILD_DIR,
        }, {
            from: MANIFEST_DIR,
            to: BUILD_DIR,
        }], {}),
    ],
}).development(8080);