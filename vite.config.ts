import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Ensure proper handling of TypeScript files
    loader: 'tsx',
    include: /src\/.*\.[tj]sx?$/,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@ui': resolve(__dirname, './src/ui'),
      '@pages': resolve(__dirname, './src/pages'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@utils': resolve(__dirname, './src/utils'),
      '@styles': resolve(__dirname, './src/styles'),
      '@animations': resolve(__dirname, './src/animations'),
      '@store': resolve(__dirname, './src/store'),
      '@lib': resolve(__dirname, './src/lib'),
      '@config': resolve(__dirname, './src/config'),
      '@router': resolve(__dirname, './src/router'),
      '@assets': resolve(__dirname, './src/assets'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api', 'import', 'mixed-decls'],
        additionalData: `@import "@/styles/base/_variables.scss"; @import "@/styles/base/_mixins.scss";`,
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true, // Auto-launch browser on server start
    hmr: {
      port: 3000,
      overlay: true, // Enable HMR overlay for better debugging
    },
    watch: {
      usePolling: false, // Disable polling to reduce resource usage
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    strictPort: false,
    // Prevent caching issues during development
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
    // Force correct MIME types
    middlewareMode: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps for production builds
    rollupOptions: {
      output: {
        // Optimize chunk file names for better caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      treeshake: {
        moduleSideEffects: false,
      },
    },
    // Optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
      mangle: {
        safari10: true,
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})
