// Vite configuration file for Baydar & Baydar project
// Configures build, plugins, and server settings

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { createServer } from 'http';

// Middleware to set cache headers for static assets
const setCacheHeaders = (req, res, next) => {
  const cacheableExtensions = ['.webp', '.png', '.ttf', '.js', '.css'];
  const url = req.url;

  if (cacheableExtensions.some(ext => url.endsWith(ext))) {
    res.setHeader('Cache-Control', 'max-age=31536000, immutable');
  }

  next();
};

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
    // Enable hot module replacement
    hmr: true,
    // Open the browser automatically when the server starts
    open: true,
    // Ensures proper routing for BrowserRouter
    historyApiFallback: true,
    setupMiddlewares: (middlewares, server) => {
      middlewares.use(setCacheHeaders);
      return middlewares;
    },
  },

  // Added optimization options for better performance
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
