# Sammatin tila

Lypsykarjatila ja lomamökit Ylöjärvellä. Perhemaatilamme tarjoaa naudanlihaa, maitoa ja kolme tunnelmallista lomamökkiä järven rannalla.

> **Ammattimainen verkkosivusto** — moderni, nopea, saavutettava ja hakukoneoptimoitu.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build** | Vite 6 |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Language** | TypeScript strict mode |
| **Image format** | WebP + LQIP placeholders |
| **Deployment** | Cloudflare Pages |

---

## Project Structure

```
sammatin-tila-website/
├── public/
│   ├── images/          # WebP images + placeholders (27 images)
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
│
├── src/
│   ├── components/      # One React component per section
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── History.tsx
│   │   ├── Products.tsx
│   │   ├── Cabins.tsx
│   │   ├── Gallery.tsx
│   │   ├── Location.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   ├── content/         # Bilingual content files
│   │   ├── fi.ts
│   │   └── en.ts
│   │
│   ├── hooks/
│   │   └── useLang.tsx  # Language context + toggle + html lang
│   │
│   ├── lib/
│   │   ├── types.ts     # TypeScript interfaces for all content
│   │   └── utils.ts     # useContent() hook, animation variants
│   │
│   ├── App.tsx          # Root: skip-link, <main>, 11 sections
│   ├── main.tsx         # Entry point
│   └── index.css        # Design system + component utilities
│
├── docs/
│   ├── research/        # Business research and references
│   ├── design-system.md
│   ├── portfolio-case-study.md
│   ├── release-checklist.md
│   ├── release-notes.md
│   ├── roadmap.md
│   └── maintenance.md
│
├── CHANGELOG.md
├── README.md
└── package.json
```

---

## Performance

| Metric | Value |
|--------|-------|
| Total JS | 377 KB (117 KB gzip) |
| Total CSS | 40 KB (7 KB gzip) |
| HTML | 6 KB |
| Images | 27 WebP (avg 50-100 KB) |
| Font | Inter (Google Fonts, preconnected) |
| Lighthouse | ≥ 90 across all categories |

### Optimizations

- All images: WebP format with LQIP placeholders
- Hero image: `fetchPriority="high"` for fastest LCP
- Gallery images: lazy loading via `loading="lazy"`
- CSS: Tailwind v4 with automatic unused-style removal
- Framer Motion: respects `prefers-reduced-motion`
- Animations: GPU-accelerated CSS transforms only
- Responsive: 320px to 1920px with Tailwind breakpoints

---

## Accessibility

- Skip-to-content link as first tabbable element
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`
- Single `<h1>` per page, hierarchical heading structure
- ARIA labels on icon-only buttons (social links, navigation toggle, lightbox)
- Lightbox: `role="dialog"`, `aria-modal="true"`, keyboard navigation
- Mobile menu: accessible toggle, Escape to close
- All images: Finnish alt text
- Form: visible labels, validation errors with `role="alert"`
- Dynamic `<html lang>` attribute updated with language switch
- Focus indicators visible on all interactive elements
- WCAG AA compliant

---

## SEO

- robots.txt with sitemap reference
- sitemap.xml with hreflang alternates (fi / en / x-default)
- Open Graph tags: title, description, image, locale, type, URL, site_name
- Twitter Card: summary_large_image
- Schema.org JSON-LD:
  - LocalBusiness + LodgingBusiness (accommodations)
  - BreadcrumbList (navigation path)
  - Organization (logo, social profiles)
- hreflang tags for bilingual support
- Canonical URL
- Apple touch icon + webmanifest for PWA
- All structured data validates at schema.org

---

## Deployment

```bash
# Install dependencies
npm install

# Development
npm run dev           # http://localhost:5173

# Type checking
npx tsc --noEmit

# Production build
npm run build         # outputs to dist/

# Preview build
npm run preview

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist/
```

Host the `dist/` folder on any static hosting provider:
- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- Any S3-compatible static host

---

## License

All rights reserved. Content and images © Sammatin tila Oy.

The source code structure and component architecture are available for reference. Reuse of business-specific content (text, images, brand assets) requires permission from Sammatin tila Oy.
