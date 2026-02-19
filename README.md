# Baydar & Baydar – Italia. Qualità. Vino.

Modern, performance-optimized React + Vite website for an Italian wine import company. Features advanced build optimizations, real user performance monitoring (RUM), PWA support, and Netlify edge deployment.

## Live Site

- **Production**: [https://baydarandbaydar.com](https://baydarandbaydar.com)
- **Staging**: [https://baydarandbaydar.netlify.app](https://baydarandbaydar.netlify.app)

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript 5.9 |
| Bundler | Vite 5 (SWC compiler, ESBuild minification) |
| Styling | SCSS with `modern-compiler` API, CSS custom properties, code-split per route |
| Animations | Framer Motion 10 |
| Routing | React Router 6 (lazy-loaded route chunks) |
| State | Zustand 4 |
| Images | `vite-imagetools` (responsive WebP/AVIF) |
| Compression | Brotli + Gzip precompression via `vite-plugin-compression` |
| PWA | `vite-plugin-pwa` (production only, Workbox runtime caching) |
| RUM | Inline beacon + Netlify Edge Function (`/api/rum`) |
| Deployment | Netlify (Edge Functions, tiered caching, `npm ci` builds) |

## Project Structure

```
baydarandbaydar/
├── public/                    # Static assets served as-is
│   ├── _headers              # Netlify header overrides
│   ├── _redirects            # SPA fallback redirect
│   ├── manifest.json         # PWA manifest
│   ├── robots.txt            # Search engine directives
│   ├── sitemap.xml           # XML sitemap
│   ├── AppImages/            # PWA icons (iOS, Android, Windows)
│   └── assets/
│       ├── fonts/            # Abhaya Libre font files
│       └── images/           # Static images (header, portfolio, social, etc.)
├── src/
│   ├── animations/           # Framer Motion animation configs
│   ├── components/           # Feature components (Hero, Portfolio, Footer, etc.)
│   ├── config/               # Environment & app configuration
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Route page components (Home, Portfolio, Vision, IGM, 404)
│   ├── router/               # React Router routes
│   ├── styles/               # Global SCSS (variables, mixins, reset, utilities)
│   ├── types/                # TypeScript type definitions
│   ├── ui/                   # Base UI components (Button, Card, Container, Grid, etc.)
│   └── utils/                # Utility functions (SEO, performance, debounce, etc.)
├── netlify/
│   └── edge-functions/       # Netlify Edge Functions (geolocation, rum)
├── scripts/                  # Build scripts (sitemap generation, etc.)
├── netlify.toml              # Netlify build & deploy configuration
├── netlify.contexts.toml     # Deploy context overrides (preview, branch, production)
├── vite.config.ts            # Vite build configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Development

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
git clone https://github.com/randomcodex/baydarandbaydar.git
cd baydarandbaydar
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` with HMR enabled. PWA/service worker is disabled during development to prevent interference.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 3000) |
| `npm run dev:open` | Dev server + auto-open browser |
| `npm run build` | TypeScript check + Vite production build |
| `npm run build:netlify` | Vite build + sitemap generation + critical CSS |
| `npm run build:production` | Vite build + sitemap generation |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint check |
| `npm run lint:fix` | ESLint auto-fix |
| `npm run format` | Prettier format all files |
| `npm run type-check` | TypeScript type check (no emit) |
| `npm run clean` | Remove `dist/` directory |
| `npm run analyze` | Build + bundle size analysis |
| `npm run generate:sitemap` | Regenerate XML sitemap |
| `npm run push` | Git commit + push via PowerShell script |

## Build Pipeline

1. **Install** — `npm ci` (lockfile integrity on CI)
2. **Type check** — `tsc` (no emit, catches type errors before build)
3. **Vite build** — SWC compilation, Rollup bundling with:
   - Tree-shaking (`preset: 'smallest'`, `moduleSideEffects: 'no-external'`)
   - Code splitting: lazy route chunks + manual `vendor` (React) and `motion` (Framer Motion) chunks
   - ESBuild minification (`console` and `debugger` dropped in production)
   - Dual precompression (Brotli `.br` + Gzip `.gz`)
   - Modulepreload `<link>` injection for entry + top chunks
   - CSS code-splitting per route
4. **Critical CSS** — Inline above-the-fold styles via `critical`
5. **Sitemap** — Auto-generated from route definitions
6. **PWA** — Service worker generated via Workbox (production builds only)
7. **Size-limit** — CI guard thresholds for vendor/motion/index bundles and CSS

### SCSS Architecture

- Global mixins are injected into every SCSS file via Vite `additionalData` (`@use` syntax)
- CSS custom properties defined in `_variables.scss` and applied via `:root`
- Component SCSS files are imported directly by their `.tsx` files (no centralized re-export)
- Sass `modern-compiler` API with `@import` deprecation silenced during migration

## Deployment

### Netlify Configuration

Defined in `netlify.toml`:

| Setting | Value |
|---------|-------|
| Build command | `npm ci && npm run build:netlify` |
| Publish directory | `dist` |
| Node version | 20 |
| NPM version | 10 |
| Build processing | Skipped (Vite handles optimization) |

### Deploy Contexts

Configured in `netlify.contexts.toml`:

- **Production**: `VITE_SITE_URL=https://baydarandbaydar.com`
- **Deploy preview**: `VITE_SITE_URL=$DEPLOY_PRIME_URL`
- **Branch deploy**: `VITE_SITE_URL=$DEPLOY_PRIME_URL`

### Environment Variables

Set in `netlify.toml` and/or Netlify dashboard:

```
VITE_SITE_URL=https://baydarandbaydar.com
VITE_API_BASE_URL=https://api.baydarandbaydar.com
VITE_COMPANY_EMAIL=baydarandbaydar@gmail.com
VITE_COMPANY_PHONE=+90 533 869 2852
VITE_GOOGLE_ANALYTICS_ID=
VITE_FACEBOOK_APP_ID=
```

### Caching Strategy

| Resource | Cache-Control |
|----------|--------------|
| Root `/` | `public, max-age=300, stale-while-revalidate=600` |
| HTML | `public, max-age=0, must-revalidate` |
| JS/CSS/fonts/images | `public, max-age=31536000, immutable` |

### Edge Functions

| Endpoint | Function | Purpose |
|----------|----------|---------|
| `/api/location` | `geolocation` | Returns visitor geolocation data |
| `/api/rum` | `rum` | Collects real user metrics (TTFB, LCP, DCL) |

### Security Headers

Applied globally via `netlify.toml`:

- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Features

- **Responsive Design** — Mobile-first with CSS Grid/Flexbox
- **Performance** — Lazy-loaded routes, code splitting, precompressed assets, modulepreload hints
- **SEO** — Meta/OG/Twitter tags, structured data, XML sitemap, `robots.txt`
- **PWA** — Service worker + manifest for installable app experience (production only)
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation
- **Error Handling** — React Error Boundary with fallback UI

## Performance Monitoring

| Metric | Approach |
|--------|---------|
| JS Discovery | Modulepreload injection for entry + key chunks |
| Tree-shaking | Rollup `preset: 'smallest'` |
| Image Strategy | Responsive WebP/AVIF with DPR-aware selection |
| Compression | Prebuilt Brotli + Gzip with immutable caching |
| CSS | Critical inline + code-split per route |
| RUM | Beacon to `/api/rum` Edge Function |
| Bundle Guard | `size-limit` CI thresholds |

### RUM Data

Access Netlify Function logs to view `[RUM]` entries. Payload: `ttfb`, `domInteractive`, `domContentLoaded`, `lcp`, timestamp.

### Quick Latency Check

```bash
curl -w '%{time_starttransfer}\n' -o /dev/null -s https://baydarandbaydar.com
```

Run twice — first hit shows edge cold start, second validates caching.

## Troubleshooting

**Build fails with type errors**: Run `npm run type-check` locally first. Ensure TypeScript 5.9+ is installed.

**404 on page refresh**: SPA redirects are configured in both `netlify.toml` and `public/_redirects`. Verify publish directory is `dist`.

**Dev server keeps refreshing**: Kill stale Node processes on port 3000, clear browser service worker cache (DevTools > Application > Service Workers > Unregister).

**SCSS deprecation warnings**: The project uses Sass `modern-compiler` API. Only the `import` deprecation is silenced during the `@import` to `@use` migration.

## License

MIT

---

**Baydar & Baydar** — Italia. Qualità. Vino.