import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/abc': {
				target: 'http://localhost:8888/',
				changeOrigin: true,
			},
		},
	},
});
