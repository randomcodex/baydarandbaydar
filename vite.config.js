import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'gsap', 'aos', 'lottie-react'],
          charts: ['@amcharts/amcharts5', '@amcharts/amcharts5-geodata'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});