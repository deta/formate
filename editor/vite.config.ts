import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				rewrite: (path) => path.replace(/^\/api/, ''),
				changeOrigin: false,
				secure: false
			},
			'/ffff': {
				target: 'http://localhost:8081/',
				rewrite: (path) => path.replace(/^\/f/, ''),
				changeOrigin: false,
				secure: false
			}
		}
	}
});