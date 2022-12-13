import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  input: 'src/main.js',
  
  output: [
    {
      file: 'bundle0.js',
      format: 'commonjs',
    },
    {
      file: 'bundle1.js',
      format: 'umd',
    },
    {
      file: 'bundle2.js',
      format: 'amd',
    },
  ],
  plugins: [resolve(), commonjs()],
});
