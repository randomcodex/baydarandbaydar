import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import compression from 'vite-plugin-compression';

const setCacheHeaders = (req, res, next) => {
  const cacheableExtensions = [
    '.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico',
    '.ttf', '.woff', '.woff2', '.eot',
    '.js', '.css',
    '.json'
  ];
  const url = req.url;

  if (cacheableExtensions.some(ext => url.endsWith(ext))) {
    res.setHeader('Cache-Control', 'max-age=31536000, immutable');
  }

  next();
};

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  
  return {
    base: '/',
    plugins: [
      react(),
      !isDev && compression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      !isDev && compression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
    ].filter(Boolean),
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false,
        },
      },
      outDir: 'dist',
      emptyOutDir: true,
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: isDev,
      chunkSizeWarningLimit: 1000,
      reportCompressedSize: !isDev,
      assetsInlineLimit: 4096,
    },
    server: {
      hmr: true,
      open: true,
      port: 3000,
      strictPort: false,
      cors: true,
      historyApiFallback: {
        disableDotRule: true,
      },
      setupMiddlewares: (middlewares, server) => {
        middlewares.use(setCacheHeaders);
        return middlewares;
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      esbuildOptions: {
        target: 'esnext',
      }
    },
    css: {
      devSourcemap: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    esbuild: {
      jsxInject: isDev ? `import React from 'react'` : undefined,
    },
  };
});
