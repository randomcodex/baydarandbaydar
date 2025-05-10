// Vite configuration file for Baydar & Baydar project
// Configures build, plugins, and server settings

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

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

  server: {},

  buildEnd() {},
});
