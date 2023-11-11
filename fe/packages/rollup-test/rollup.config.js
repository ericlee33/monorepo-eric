const {nodeResolve} = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const ts = require('@rollup/plugin-typescript');

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'];

module.exports = [{
  input: 'src/main.ts',

  output: [
    {
      file: './dist/bundle0.js',
      format: 'commonjs',
    },
    // {
    //   file: 'bundle1.js',
    //   format: 'umd',
    // },
    // {
    //   file: 'bundle2.js',
    //   format: 'amd',
    // },
  ],
  plugins: [
    // nodeResolve({ extensions }),
    // babel({
    //   extensions,
    // }),
    ts(),
    commonjs(),
  ],
}]