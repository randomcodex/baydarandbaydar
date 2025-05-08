import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    historyApiFallback: true, // Ensures SPA fallback to index.html
  },
  // Hook to copy sitemap.xml to dist directory after build
  buildEnd() {
    copyFileSync(resolve(__dirname, 'sitemap.xml'), resolve(__dirname, 'dist', 'sitemap.xml'));
  },
});
