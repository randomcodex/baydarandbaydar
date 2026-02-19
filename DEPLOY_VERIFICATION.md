# Deployment Verification Checklist

Run this checklist after each production deployment. Test in: (1) Desktop Chrome Incognito, (2) Mobile Chrome DevTools throttled 4G, (3) Instagram in-app browser if accessible.

## 1. Connectivity & Delivery

- [ ] DNS resolves: `nslookup baydarandbaydar.com` (< 100ms local, < 300ms remote)
- [ ] TLS handshake clean — single 200 response, no redirect chain, cert chain ≤ 3
- [ ] All requests served over HTTP/2

## 2. Response & Caching

- [ ] Root `/` headers: `Cache-Control: public, max-age=300, stale-while-revalidate=600`
- [ ] HTML: `Cache-Control: public, max-age=0, must-revalidate`
- [ ] Static assets (JS/CSS/fonts/images): `Cache-Control: public, max-age=31536000, immutable`
- [ ] Brotli or Gzip encoding active on JS/CSS/HTML responses

## 3. Performance Metrics

- [ ] TTFB cold < 600ms, warm < 200ms (verify via RUM logs at `/api/rum` + DevTools)
- [ ] LCP < 2.5s mobile (hero content)
- [ ] CLS < 0.05 (no layout shift from late images)
- [ ] Blur placeholder appears before high-res hero image loads
- [ ] `<link rel="modulepreload">` tags present in `<head>` for entry + key chunks

## 4. Asset Loading

- [ ] Critical CSS inlined — hero section styled before JS execution
- [ ] Fonts load without prolonged FOIT (Abhaya Libre with `font-display: swap`)
- [ ] Images: correct resolution served for device DPR (check Network panel)
- [ ] CSS code-split per route (separate CSS files for Portfolio, Vision, IGM, etc.)

## 5. Functional Smoke Tests

- [ ] Navigation works: Home → Portfolio → Vision → IGM → 404
- [ ] Browser back/forward navigation works correctly
- [ ] Page scroll resets on route change
- [ ] Edge function `/api/location` returns JSON 200
- [ ] RUM beacon `/api/rum` returns `{ status: 'ok' }`
- [ ] Error boundary renders fallback on forced error

## 6. SEO & Metadata

- [ ] `sitemap.xml` reachable and lists canonical URLs
- [ ] `robots.txt` present and correct
- [ ] Meta tags present: `description`, Open Graph, Twitter Card, canonical
- [ ] No console errors from structured data

## 7. Security Headers

- [ ] `X-Frame-Options: DENY`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] No mixed-content warnings

## 8. Bundle Size

- [ ] `size-limit` CI thresholds pass:
  - vendor JS < 145 KB
  - motion JS < 105 KB
  - index JS < 36 KB
  - index CSS < 48 KB
- [ ] No unexpected large new chunks

## 9. PWA

- [ ] Service worker registered in production
- [ ] `manifest.webmanifest` accessible
- [ ] Workbox runtime caching active (html: NetworkFirst, assets: StaleWhileRevalidate, images: CacheFirst)

## 10. Accessibility Spot Check

- [ ] Keyboard navigation cycles through interactive elements logically
- [ ] Meaningful images have alt text
- [ ] Focus indicators visible

## 11. Rollback Procedure

If any metric regresses critically (TTFB spike, LCP > 4s, JS errors):

1. **Git revert**: `git revert <commit_sha>` → push to main → triggers redeploy
2. **Or Netlify UI**: Select previous successful deploy → click "Rollback"
3. Re-run this checklist against the rolled-back deploy

---

Update this file when new deployment features or checks are added.