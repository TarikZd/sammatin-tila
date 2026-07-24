# Release Notes — v1.0.0-rc1

## Sammatin tila Website — Initial Release Candidate

We are pleased to announce the first release candidate of the Sammatin tila website — a modern, responsive, bilingual single-page application for the farm's digital presence.

### What's Included

- **8 content sections**: Hero, About, History, Products, Cabins, Gallery, Location, Contact, Footer
- **Full bilingual support**: Finnish (default) and English with client-side toggle
- **17 cabin detail pages** bundled within the gallery and cabins sections
- **CSS masonry gallery** with keyboard-navigable lightbox
- **Responsive design** tested from 320px mobile to 1920px desktop
- **SEO-optimized**: OpenGraph, Twitter Card, Schema.org (LocalBusiness, LodgingBusiness, BreadcrumbList, Organization), robots.txt, sitemap.xml, hreflang
- **WebP image assets**: 27 images + placeholders, optimized for performance
- **Accessibility**: Skip-to-content link, semantic landmarks, ARIA labels, keyboard navigation, WCAG AA-compliant color contrast

### Known Limitations

- Contact form is frontend-only — requires backend integration (see docs for architecture notes)
- Background images lack `alt` text — acceptable for decorative use, but content-critical images (product photos, cabin photos) should use `<img>` elements in a future iteration
- No `/privacy` or `/terms` pages — footer links currently point to `#`
- SPA language switching means both FI and EN share the same URL — no SSR or separate `/en/` path

### Tech

React 19 · TypeScript · Vite 6 · Tailwind CSS v4 · Framer Motion 12 · Lucide Icons
