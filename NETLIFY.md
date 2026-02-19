# Netlify Deployment Guide

## Build Configuration

Defined in `netlify.toml`:

| Setting | Value |
|---------|-------|
| Build command | `npm ci && npm run build:netlify` |
| Publish directory | `dist` |
| Node version | 20 |
| NPM version | 10 |
| Build processing | Skipped (`skip_processing = true` — Vite handles all optimization) |

### Build Pipeline

The `build:netlify` script runs: `vite build` → `generate:sitemap` → `generate:critical`

1. Vite compiles TypeScript via SWC and bundles with Rollup
2. Tree-shaking, code splitting, ESBuild minification
3. Brotli + Gzip precompression of all output files
4. Modulepreload `<link>` tags injected into HTML
5. PWA service worker generated via Workbox
6. XML sitemap generated from route definitions
7. Critical CSS extracted and inlined

### Build Scripts

| Script | Purpose |
|--------|---------|
| `npm run build` | `tsc` type check + Vite build |
| `npm run build:netlify` | Vite build + sitemap + critical CSS (used by Netlify) |
| `npm run build:production` | Vite build + sitemap |
| `npm run build:safe` | `npm ci` + full netlify build |

## Deploy Contexts

Configured in `netlify.contexts.toml`:

| Context | Build Command | `VITE_SITE_URL` |
|---------|--------------|-----------------|
| Production | `npm run build:netlify` | `https://baydarandbaydar.com` |
| Deploy preview | `npm run build:netlify` | `$DEPLOY_PRIME_URL` |
| Branch deploy | `npm run build:netlify` | `$DEPLOY_PRIME_URL` |

## Environment Variables

Set in `netlify.toml` build environment:

```
VITE_SITE_URL=https://baydarandbaydar.com
VITE_API_BASE_URL=https://api.baydarandbaydar.com
VITE_COMPANY_EMAIL=baydarandbaydar@gmail.com
VITE_COMPANY_PHONE=+90 533 869 2852
VITE_GOOGLE_ANALYTICS_ID=
VITE_FACEBOOK_APP_ID=
```

## Caching & Headers

### Security Headers (all routes)

```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Cache Strategy

| Resource | Cache-Control | Rationale |
|----------|--------------|-----------|
| Root `/` | `max-age=300, stale-while-revalidate=600` | Short cache, quick revalidation |
| HTML files | `max-age=0, must-revalidate` | Always fetch latest |
| `/assets/*` (JS, CSS) | `max-age=31536000, immutable` | Content-hashed filenames |
| Fonts (woff2, ttf) | `max-age=31536000, immutable` | Rarely change |
| Images (png, jpg, webp, svg) | `max-age=31536000, immutable` | Content-hashed |

Font preload hint is configured for the root route:
```
Link: </assets/fonts/AbhayaLibre-Regular.ttf>; rel=preload; as=font; type=font/ttf; crossorigin
```

## Edge Functions

| Path | Function | File |
|------|----------|------|
| `/api/location` | `geolocation` | `netlify/edge-functions/geolocation.ts` |
| `/api/rum` | `rum` | `netlify/edge-functions/rum.ts` |

## Redirects

| Rule | Purpose |
|------|---------|
| `/* → /index.html` (200) | SPA client-side routing fallback |
| `/images/* → /.netlify/images?url=:splat` (200) | Netlify image optimization proxy |

The SPA redirect is also backed by `public/_redirects` as a fallback.

## Continuous Deployment

- Push to `main` triggers production deployment automatically
- Pull requests generate deploy previews with unique URLs
- Feature branches get branch deploy URLs

## PWA

PWA is enabled in production builds only (disabled during `npm run dev`):

- `registerType: 'autoUpdate'` — service worker auto-activates new versions
- Workbox runtime caching: NetworkFirst for HTML, StaleWhileRevalidate for JS/CSS, CacheFirst for images
- Manifest with app icons for iOS, Android, and Windows

## Local Development

```bash
npm install
npm run dev          # Dev server at localhost:3000
npm run preview      # Preview production build locally
```

The dev server runs without PWA service worker to ensure clean HMR.

## Troubleshooting

**Build fails on Netlify**: Check build logs. Ensure Node 20 is set. Run `npm run build:netlify` locally to reproduce.

**404 on page refresh**: Verify both `netlify.toml` redirects and `public/_redirects` are present. Publish directory must be `dist`.

**Stale content after deploy**: Clear browser service worker (DevTools → Application → Service Workers → Unregister). The `autoUpdate` service worker should handle this automatically, but manual clearing may be needed after major changes.

**Missing environment variables**: All `VITE_*` variables must be set before build time — they are compiled into the bundle by Vite.

## Useful Links

- [Netlify Dashboard](https://app.netlify.com)
- [Deploy Settings](https://app.netlify.com/sites/baydarandbaydar/settings/deploys)
- [Environment Variables](https://app.netlify.com/sites/baydarandbaydar/settings/env)
- [Function Logs](https://app.netlify.com/sites/baydarandbaydar/logs/functions)
