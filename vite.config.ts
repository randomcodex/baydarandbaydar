import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imagetools } from 'vite-imagetools'
import compression from 'vite-plugin-compression'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  const injectModulePreload = (): Plugin => ({
    name: 'inject-modulepreload',
    apply: 'build',
    enforce: 'post', // literal keeps correct narrow type
    generateBundle(_, bundle) {
      const html = bundle['index.html'] as any
      if (!html) return
      const all = Object.values(bundle) as any[]
      const entries = all.filter(f => f.type === 'chunk' && f.isEntry)
      const others = all.filter(f => f.type === 'chunk' && !f.isEntry)
      const selected = [...entries, ...others.slice(0, 4)]
      const tags = selected
        .filter(c => c.fileName.endsWith('.js'))
        .map(c => `<link rel="modulepreload" href="/${c.fileName}" crossorigin>`)
        .join('')
      html.source = html.source.replace('</head>', `${tags}</head>`)
    }
  })

  return {
    plugins: [
      react(),
      imagetools(),
      compression({ algorithm: 'brotliCompress', ext: '.br', deleteOriginFile: false }),
      compression({ algorithm: 'gzip', ext: '.gz', deleteOriginFile: false }),
      injectModulePreload()
    ],
    base: '/',
    esbuild: isProd ? { drop: ['console','debugger'] } : { drop: ['debugger'] },
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
    devSourcemap: false,
    postcss: {
      plugins: []
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    hmr: {
      port: 3000,
      overlay: true,
    },
    watch: {
      usePolling: false,
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    strictPort: false,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
    middlewareMode: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
      treeshake: {
        preset: 'smallest',
        moduleSideEffects: 'no-external',
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },
    minify: 'esbuild',
    target: 'es2020',
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    assetsInlineLimit: 4096,
    emptyOutDir: true,
  },
  }
})
