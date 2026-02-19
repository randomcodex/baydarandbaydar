import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imagetools } from 'vite-imagetools'
import compression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  const injectModulePreload = (): Plugin => ({
    name: 'inject-modulepreload',
    apply: 'build',
    enforce: 'post',
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
    },
  })

  return {
    plugins: [
      react(),
      imagetools(),
      compression({ algorithm: 'brotliCompress', ext: '.br', deleteOriginFile: false }),
      compression({ algorithm: 'gzip', ext: '.gz', deleteOriginFile: false }),
      injectModulePreload(),
      isProd &&
        VitePWA({
          registerType: 'autoUpdate',
          injectRegister: 'auto',
          includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
          manifest: {
            name: 'Baydar & Baydar',
            short_name: 'Baydar & Baydar',
            description: 'Italia. Qualità. Vino.',
            start_url: '/',
            scope: '/',
            display: 'standalone',
            background_color: '#000000',
            theme_color: '#8B0000',
            icons: [
              { src: '/AppImages/ios/180.png', sizes: '180x180', type: 'image/png' },
              {
                src: '/AppImages/android/android-launchericon-192-192.png',
                sizes: '192x192',
                type: 'image/png',
              },
              {
                src: '/AppImages/android/android-launchericon-512-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
              },
            ],
          },
          workbox: {
            navigateFallback: '/index.html',
            runtimeCaching: [
              {
                urlPattern: ({ request }) => request.destination === 'document',
                handler: 'NetworkFirst',
                options: { cacheName: 'html-cache' },
              },
              {
                urlPattern: ({ request }) =>
                  request.destination === 'script' || request.destination === 'style',
                handler: 'StaleWhileRevalidate',
                options: { cacheName: 'asset-cache' },
              },
              {
                urlPattern: ({ request, url }) => {
                  if (url.pathname.includes('og.png') || url.pathname.includes('og.jpg')) {
                    return false
                  }
                  return request.destination === 'image'
                },
                handler: 'CacheFirst',
                options: {
                  cacheName: 'image-cache',
                  expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
                },
              },
            ],
          },
        }),
    ],
    base: '/',
    esbuild: isProd ? { drop: ['console', 'debugger'] } : { drop: ['debugger'] },
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
          silenceDeprecations: ['import'],
          additionalData: `@use "@/styles/base/_mixins.scss" as *;`,
        },
      },
      devSourcemap: false,
      postcss: {
        plugins: [],
      },
    },
    server: {
      port: 3000,
      host: true,
      open: true,
      hmr: {
        overlay: true,
      },
      watch: {
        usePolling: false,
        ignored: ['**/node_modules/**', '**/.git/**'],
      },
      strictPort: false,
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
