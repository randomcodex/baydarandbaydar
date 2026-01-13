# Baydar & Baydar – Italia. Qualità. Vino.

Modern, performance‑optimized React + Vite site. Includes advanced build optimizations, real user performance monitoring (RUM), and deployment hardening.

## 🚀 Live Site

- **Production**: [https://baydarandbaydar.com](https://baydarandbaydar.com)
- **Staging**: [https://baydarandbaydar.netlify.app](https://baydarandbaydar.netlify.app)

## 🛠 Technology Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite 5 (SWC, ESBuild minification)
- **Styling**: SCSS (critical CSS inline + code‑split)
- **Animations**: Framer Motion
- **Routing**: React Router (lazy loaded chunks)
- **State**: Zustand (minimal slice usage)
- **Images**: `vite-imagetools` (responsive WebP/AVIF + blur placeholders)
- **Performance**: Modulepreload injection, Brotli + Gzip precompression, tree‑shaking, size-limit CI guard
- **RUM**: Inline beacon + Netlify Edge Function endpoint (`/api/rum`)
- **Deployment**: Netlify (Edge Functions, custom caching strategy)

## 📁 Project Structure

```
baydarandbaydar/
├── public/                    # Static assets
│   ├── _redirects            # Netlify SPA redirects
│   ├── assets/               # Images, fonts, icons
│   └── manifest.json         # PWA manifest
├── src/                      # Source code
│   ├── components/           # Reusable UI components
│   ├── pages/               # Page components (Home, Portfolio, etc.)
│   ├── ui/                  # Base UI components (Button, Card, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── styles/              # SCSS styles
│   ├── animations/          # Framer Motion animations
│   ├── config/              # Environment & configuration
│   └── router/              # React Router setup
├── netlify/                 # Netlify-specific files
│   └── edge-functions/      # Edge functions
├── scripts/                 # Build scripts
└── netlify.toml            # Netlify configuration
```

## 🏗 Development Setup

### Prerequisites
- Node.js 20+
- npm 10+

### Installation
```bash
# Clone the repository
git clone https://github.com/randomcodex/baydarandbaydar.git
cd baydarandbaydar

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
# Development
npm run dev              # Start dev server at localhost:3000
npm run dev:open         # Start dev server and open browser

# Building
npm run build            # Build for production
npm run build:production # Build for production + generate sitemap
npm run build:netlify    # Full build with type checking
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking

# Utilities
npm run clean            # Clean dist folder
npm run generate:sitemap # Generate XML sitemap
npm run analyze          # Analyze bundle size
```

## 🚀 Deployment

### Netlify Configuration

The project is configured for automatic deployment on Netlify:

- **Build Command**: `npm install && npm run build:production`
- **Publish Directory**: `dist`
- **Node Version**: `20`

### Environment Variables

Set these in Netlify dashboard:

```env
NODE_ENV=production
VITE_SITE_URL=https://baydarandbaydar.com
VITE_API_BASE_URL=https://api.baydarandbaydar.com
VITE_COMPANY_EMAIL=baydarandbaydar@gmail.com
VITE_COMPANY_PHONE=+90 533 869 2852
VITE_GOOGLE_ANALYTICS_ID=YOUR_GA_ID
```

### Build / Optimization Pipeline

1. Install dependencies via `npm ci` (Netlify) ensuring lockfile integrity
2. TypeScript compile for type safety (no emit changes to dist artifacts)
3. Vite build with:
	- Rollup tree‑shaking (`preset: 'smallest'`)
	- Code splitting (lazy routes) + manual vendor/motion chunks
	- Dual compression output (Brotli `.br` + Gzip `.gz`)
	- Modulepreload tags injection for entry & hot chunks
4. Critical CSS extraction (inline minimal hero/layout + remaining async CSS)
5. Responsive image generation (WebP + AVIF) with hashed filenames
6. Sitemap generation (`scripts/generate-sitemap.js`)
7. Size-limit check (CI enforcement) preventing regressions
8. Deploy to Netlify edge CDN (short root cache; long immutable assets)

### Key Enhancements Implemented

- ✅ Tree‑shaking (`sideEffects` & Rollup config)
- ✅ ESBuild minification (dropping `console` / `debugger` in prod)
- ✅ Route‑level lazy loading via `React.lazy` + `Suspense`
- ✅ Critical CSS inlined (hero baseline layout)
- ✅ Responsive images (640 / 1280 / 1920) + AVIF alternatives
- ✅ Blur placeholder (32px highly compressed) for fast first paint
- ✅ DPR‑aware hero background selection logic
- ✅ Brotli + Gzip precompression
- ✅ Modulepreload injection post‑build
- ✅ RUM beacon (TTFB / DCL / LCP) for Instagram & Facebook WebViews
- ✅ Edge function endpoints: `geolocation`, `rum`
- ✅ Size-limit guard + GitHub Action workflow
- ✅ Adjusted caching: root `max-age=300, stale-while-revalidate=600`, assets immutable

## 🎨 Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid/Flexbox
- **Performance Optimized**: Lazy loading, code splitting, optimized assets
- **SEO Ready**: Meta tags, structured data, XML sitemap
- **Accessibility**: WCAG compliant with proper ARIA labels
- **PWA Ready**: Service worker and manifest for app-like experience
- **Security**: Content Security Policy and security headers

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `netlify.toml` - Netlify deployment configuration  
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `public/_redirects` - SPA routing fallback

## 📊 Performance & Monitoring

| Aspect | Approach |
|--------|---------|
| JS Discovery | Modulepreload injection for entry + key chunks |
| Tree‑shaking | Rollup `preset: 'smallest'`, `moduleSideEffects: 'no-external'` |
| Image Strategy | Responsive WebP/AVIF, blur placeholder, DPR selection |
| Compression | Prebuilt Brotli + Gzip, long-term immutable caching |
| CSS | Critical inline + code-split remainder |
| RUM | Beacon posting metrics to `/api/rum` (Edge Function logs) |
| Bundle Guard | `size-limit` CI thresholds (vendor/motion/index js & css) |

### Collecting RUM Data
Access Netlify Function logs to view `[RUM]` entries or enhance `/api/rum` for persistent storage (e.g., external analytics service). Payload includes: `ttfb`, `domInteractive`, `domContentLoaded`, `lcp`, timestamp.

### Measuring Cold Navigation Latency
Use `curl -w '%{time_starttransfer}\n' -o /dev/null -s https://baydarandbaydar.com` twice; first hit shows edge cold start, second validates caching.

### Recommended External Checks
- WebPageTest (mobile Chrome, Istanbul/Izmir/Cyprus region) for TTFB & LCP
- DNS propagation & latency (use `dig +trace baydarandbaydar.com`)
- SSL certificate chain (ensure minimal intermediates)

### Future Improvements (Optional)
- Early Hints (HTTP 103) for main JS/CSS
- Placeholder LCP element targeting for more accurate reporting
- Font subsetting & self‑hosting with `font-display: swap`
- Blur-up transition fade on hero replacement

## 📋 Deployment Verification Checklist

After each deploy (cold incognito load + Instagram WebView):

1. DNS Resolution: `nslookup baydarandbaydar.com` (≤100ms local, ≤300ms remote)
2. TLS Handshake: Check Chrome DevTools waterfall (cert chain < 3 hops)
3. Redirect Chain: Confirm direct 200 (no unexpected 301/302)
4. TTFB: ≤600ms first cold, ≤200ms subsequent (RUM + DevTools)
5. First Paint: Blur placeholder visible quickly (<800ms on 4G)
6. LCP Element: Hero title paint ≤2500ms mobile
7. Critical CSS: No FOIT/FOUT beyond acceptable flash
8. JS Chunks: Modulepreload links present in `<head>`
9. Image Variants: Correct resolution chosen (inspect network widths)
10. Cache Headers: Root short max-age; assets immutable long-term
11. Edge Functions: `/api/geolocation` & `/api/rum` return 200
12. Sitemap & Robots: `sitemap.xml` accessible; `robots.txt` valid
13. SEO Tags: Meta/OG/Twitter tags present; canonical correct
14. Error Boundary: Force a route error (dev) still renders fallback
15. Size-limit: CI passes; no threshold regression
16. Rollback Procedure: Revert commit or redeploy previous build from Netlify UI if metrics degrade

Record metrics & compare with prior baseline before marking deploy healthy.

## 🐛 Troubleshooting

### Common Issues

**Green Screen on Deployment**:
- Check browser console for JavaScript errors
- Verify all environment variables are set in Netlify
- Ensure build completed successfully

**Build Failures**:
- Verify Node.js version is 20+ in Netlify settings
- Check that all dependencies are properly installed
- Review Netlify build logs for specific errors

**404 Errors**:
- SPA redirects configured in both `netlify.toml` and `_redirects`
- Ensure publish directory is set to `dist`

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

---

**Baydar & Baydar** - Italia. Qualità. Vino.