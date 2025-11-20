## Deployment Verification Checklist

Use this checklist immediately after each production deployment. Perform tests in: (1) Desktop Chrome Incognito, (2) Mobile Chrome DevTools throttled 4G / mid CPU, (3) Instagram in‑app browser (if accessible), (4) WebPageTest external region.

### 1. Connectivity & Delivery
- DNS: `nslookup baydarandbaydar.com` response < 100ms local, < 300ms remote.
- TLS: Waterfall shows single 200 (no redirect chain). Certificate chain length <= 3.
- Protocol: All requests served over HTTP/2 (or HTTP/3 if enabled later).

### 2. Response & Caching
- Root `/` headers: `Cache-Control: public, max-age=300, stale-while-revalidate=600` present.
- Static assets (JS/CSS/images) show `Cache-Control: public, max-age=31536000, immutable`.
- Brotli or Gzip encoding active on JS/CSS/HTML.

### 3. Performance Metrics (RUM & Lab)
- TTFB Cold (< 600ms) then Warm (< 200ms) — verify via RUM logs (`/api/rum`) & DevTools.
- LCP under 2.5s mobile (Hero title or main content). Confirm via Performance panel & WebPageTest.
- Blur placeholder appears before high‑res hero image.
- No layout shift caused by late hero image (CLS stable < 0.05).

### 4. Asset Loading
- `<link rel="modulepreload">` tags present for entry & key chunks in `<head>`.
- Critical CSS inline: hero section styled before JS execution.
- Fonts: No prolonged FOIT; fallback displayed until font load (future improvement if needed).
- Image set chooses correct resolution (check Network: width matches expectation for DPR).

### 5. Functional Smoke Tests
- Navigation between pages works (Home → Portfolio → Vision → IGM → 404 route).
- Buttons (e.g., "View Selection") navigate and scroll reset works.
- Edge `geolocation` endpoint `/api/location` returns JSON 200 with expected structure.
- RUM beacon `/api/rum` returns `{ status: 'ok' }` and logs appear in Netlify function logs.

### 6. SEO & Metadata
- `sitemap.xml` reachable and lists expected canonical URLs.
- `robots.txt` exists and is correct for production.
- Meta tags: `description`, Open Graph, Twitter, Canonical all present & correct.
- Structured data (Organization JSON-LD) loads without console errors.

### 7. Monitoring & Guardrails
- Size-limit CI passed (vendor/motion/index bundles & CSS within thresholds).
- No unexpected large new chunks > manual warning limit.
- Console free of errors/warnings in production build.

### 8. Accessibility Spot Check
- Keyboard navigation cycles through interactive elements in logical order.
- Images with semantic relevance have alt text (future audits deeper).

### 9. Security Headers
- `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` present as configured.
- No mixed content warnings.

### 10. Rollback Procedure
If any metric regresses critically (TTFB spike, LCP > 4s, errors):
1. Revert Git commit (`git revert <commit_sha>`), push to main to trigger new deploy.
2. Or in Netlify dashboard: select previous successful deploy and click "Rollback".
3. Verify rollback using checklist again.

### 11. Post-Deploy Reporting (Optional)
- Capture a WebPageTest report snapshot + Lighthouse JSON.
- Archive RUM metrics sample (first 50 sessions) for trend comparison.
- Log summary in CHANGELOG or deployment notes.

### Future Enhancements (Not Yet Implemented)
- Early Hints (103) for JS/CSS.
- Self-hosted, subset fonts with `font-display: swap`.
- Persist RUM metrics to external analytics store.
- Edge SSR or streaming (if dynamic content expands).

---
Keep this file updated when new performance or deployment features are introduced.