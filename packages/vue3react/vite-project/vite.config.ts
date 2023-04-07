import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 在开发模式下需要把react()关掉
    // https://github.com/umijs/qiankun/issues/1257
    // react(),
    qiankun('react-app', {
      // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
  ],
});
