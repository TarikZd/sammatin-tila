# Changelog

## [1.0.0-rc1] - 2026-07-24

Initial release candidate.

### Added

- Complete single-page website for Sammatin tila
- Sections: Hero, About, History, Products, Cabins, Gallery, Location, Contact, Footer
- Finnish and English language support with client-side toggle
- Responsive design (320px–1920px+)
- Dark/light SEO metadata: OpenGraph, Twitter Card, Schema.org (LocalBusiness, LodgingBusiness, BreadcrumbList, Organization)
- WebP image assets with lazy loading
- CSS columns masonry gallery with keyboard-navigable lightbox
- Scroll-reveal animations via Framer Motion
- Interactive form (frontend-only placeholder for future backend)
- Skip-to-content link for keyboard accessibility
- robots.txt, sitemap.xml, site.webmanifest
- hreflang annotation and dynamic `lang` attribute

### Technical

- React 19 + TypeScript with strict type checking
- Vite 6 build tooling
- Tailwind CSS v4 design system utilities
- `tsc --noEmit` zero errors
- Production build verified clean
- 27 WebP image assets with placeholders
