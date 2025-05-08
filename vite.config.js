import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/baydarandbaydar/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    historyApiFallback: true, // Ensures SPA fallback to index.html
  },
});
