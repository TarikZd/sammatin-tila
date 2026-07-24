# Deployment Checklist

## Pre-Deployment

- [ ] `npm run build` succeeds
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] All links are valid (internal and external)
- [ ] All image paths resolve correctly
- [ ] robots.txt present and configured
- [ ] sitemap.xml present with correct URLs
- [ ] Canonical URL points to production domain
- [ ] All SEO tags reference production URLs (not localhost)
- [ ] No hardcoded development URLs

## Hosting Configuration

- [ ] Static file hosting configured (Cloudflare Pages, Netlify, Vercel, etc.)
- [ ] SPA redirect rule: all routes → index.html (for potential future multi-page)
- [ ] Custom domain configured (DNS A/AAAA or CNAME)
- [ ] SSL/TLS certificate active
- [ ] Cache headers configured (immutable for hashed assets)
- [ ] Brotli or Gzip compression enabled
- [ ] HSTS header set (if required)

## Post-Deployment

- [ ] Site loads at production URL
- [ ] SSL padlock visible in browser
- [ ] Language switch works
- [ ] All sections render correctly
- [ ] Contact form submits (frontend validation only)
- [ ] Social media links open in new tabs
- [ ] Gallery loads and lightbox works
- [ ] Mobile navigation works
- [ ] Lighthouse test: ≥ 90 all categories
- [ ] Google Search Console: sitemap submitted
- [ ] Bing Webmaster Tools: sitemap submitted
- [ ] Schema.org test: pass (validator.schema.org)

## Monitoring

- [ ] Analytics added (if applicable)
- [ ] Uptime monitoring configured (if applicable)
- [ ] Form submission monitoring (if backend connected)
- [ ] Error tracking configured (if applicable)

## Rollback

- [ ] Previous build archived or tagged in git
- [ ] Quick rollback procedure documented (hosting-specific)
- [ ] DNS TTL set appropriately (300 seconds for quick rollback)
