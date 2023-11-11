import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import ts from '@rollup/plugin-typescript'

const extensions = [
  '.ts', '.tsx', 
'.js', '.jsx', '.es6', '.es', '.mjs']
export default defineConfig({
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
    resolve({ extensions }),
    babel({
      extensions
    }),
    // ts(),
    commonjs(),
  ],
});
