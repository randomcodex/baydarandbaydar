// Vite configuration file for Baydar & Baydar project
// Configures build, plugins, and server settings

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  // Base public path for the project
  base: '/',

  // Plugins used in the project
  plugins: [react()],

  build: {
    // Rollup options for input files
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    // Output directory for build files
    outDir: 'dist',
    // Clears the output directory before building
    emptyOutDir: true,
  },

  server: {
    // Enables SPA fallback for development server
    historyApiFallback: true, // Ensures SPA fallback to index.html in development and production
  },

  buildEnd() {
    // Copies sitemap.xml to the dist directory
    copyFileSync(resolve(__dirname, 'sitemap.xml'), resolve(__dirname, 'dist', 'sitemap.xml'));
    // Creates a 404.html file as a copy of index.html
    copyFileSync(resolve(__dirname, 'dist', 'index.html'), resolve(__dirname, 'dist', '404.html'));
  },
});
