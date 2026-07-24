# Release Checklist — v1.0.0-rc1

## Pre-release

- [ ] `npm run build` succeeds with no errors
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] No `console.log` or debug statements remain
- [ ] No unused imports or dead code
- [ ] All placeholder content replaced with real text
- [ ] Real phone numbers, emails, addresses verified
- [ ] Social media links point to real accounts
- [ ] All image paths verified (none missing or broken)

## Responsive

- [ ] 320px width — no horizontal overflow
- [ ] 768px width — tablet layout correct
- [ ] 1024px width — desktop layout correct
- [ ] 1920px width — no stretching or gaps
- [ ] Mobile navigation menu opens/closes correctly
- [ ] Lightbox works at all breakpoints

## Accessibility

- [ ] Skip-to-content link visible on focus (Tab from page load)
- [ ] Tab order follows visual order through all sections
- [ ] All form inputs have associated `<label>` elements
- [ ] Social media links have `aria-label`
- [ ] Lightbox has `role="dialog"` and `aria-modal`
- [ ] Keyboard navigation: Enter activates links and buttons
- [ ] Escape closes mobile menu and lightbox
- [ ] Focus indicators visible on all interactive elements
- [ ] Color contrast meets WCAG AA
- [ ] Page has a correct heading hierarchy (h1 → h2 → h3)

## SEO

- [ ] robots.txt present and correct
- [ ] sitemap.xml present with correct URLs
- [ ] Title and meta description set
- [ ] OpenGraph tags correct
- [ ] Twitter Card tags correct
- [ ] Canonical URL set
- [ ] hreflang tags present
- [ ] Schema.org JSON-LD validates (https://validator.schema.org)
- [ ] Favicon and apple-touch-icon present
- [ ] site.webmanifest present

## Performance

- [ ] Lighthouse score ≥ 95 for all categories (desktop)
- [ ] All images are WebP format
- [ ] Hero image is preloaded
- [ ] Fonts loaded with `font-display: swap`
- [ ] No render-blocking resources (except critical)
- [ ] Bundle size reasonable (< 500 KB gzip)

## Documentation

- [ ] README.md updated
- [ ] CHANGELOG.md updated
- [ ] Release notes drafted

## Deployment

- [ ] Production branch tagged: `v1.0.0-rc1`
- [ ] Deployed to production URL
- [ ] Post-deployment smoke test passed
- [ ] DNS and SSL verified
- [ ] Cloudflare Pages (or host) configured
