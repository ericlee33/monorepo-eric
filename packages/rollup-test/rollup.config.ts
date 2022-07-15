import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'commonjs',
    sourcemap : true
  },
  plugins: [
    resolve(),
    commonjs()
  ]
})