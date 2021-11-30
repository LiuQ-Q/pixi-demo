const path = require('path');
const html = require('@rollup/plugin-html');
const livereload = require('rollup-plugin-livereload');
const commomjs = require('@rollup/plugin-commonjs');
const serve = require('rollup-plugin-serve');
const image = require('rollup-plugin-img');
const { defineConfig } = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const DIST_DIR = path.join(__dirname, '../.dev');

export default defineConfig({
    input: path.join(__dirname, '../src/wall-component/index.js'),
    output: {
        dir: DIST_DIR,
        sourcemap: 'inline',
        format: 'umd',
        name: 'room'
    },
    plugins: [
        nodeResolve({
            browser: true,
            preferBuiltins: false
        }),
        serve({ host: '0.0.0.0', port: 3000, contentBase: DIST_DIR }),
        livereload({ watch: DIST_DIR }),
        html(),
        commomjs(),
        image({
            limit: 10000
        })
    ]
});