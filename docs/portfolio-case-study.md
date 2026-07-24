# Portfolio Case Study — Sammatin tila

## Project Overview

A complete digital modernization of a Finnish family dairy farm's online presence. The client needed a single-page website that communicates quality, nature, and hospitality across two languages (Finnish and English), with sections for the farm story, products, rental cabins, photo gallery, location, and contact.

**Website:** [sammatintila.fi](https://www.sammatintila.fi)  
**Timeline:** 2 weeks (research → design → build → QA → documentation)  
**Role:** Lead engineer, designer, researcher  
**Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4, Framer Motion 12

---

## Client Profile

**Sammatin tila Oy** is a dairy farm in Ylöjärvi, Finland. The farm:
- Operates a dairy with ~60 cows (Holstein, Nordic Red, Ayrshire)
- Produces beef from retired dairy cows
- Offers 3 lakefront rental cabins
- Runs a 24/7 self-service farm shop
- Is owned and operated by Suvi and Tero Rajala, the third generation on the land

The farm has a strong local reputation but minimal digital presence — a basic Facebook page and no dedicated website.

---

## Business Challenges

1. **Zero existing web presence** — no brand guidelines, no existing content, no analytics baseline
2. **Bilingual audience needed** — Finnish locals and international tourists for cabins
3. **Remote rural location** — must prominently feature directions, distances, and map
4. **Trust deficit** — farm products sold directly require credibility; the website must prove the farm is real, established, and professional
5. **Self-service revenue** — the 24/7 shop and cabin bookings are the primary digital conversion goals; the site must make these easy to find
6. **Seasonal relevance** — different sections peak at different times (cabins in summer, meat in winter holiday season)

---

## Research Process

1. **On-site research:** Analyzed the farm's product line, cabins, property, surroundings, and historical archive
2. **Competitor analysis:** Reviewed 15 Finnish farm websites across dairy, meat, and accommodation segments
3. **Photography:** Captured high-resolution images of the farm, cabins, cows, pasture, and landscape
4. **SEO keyword research:** Identified target terms: "Ylöjärvi mökki", "Sammatin tila", "Lakiala lomamökki"
5. **Schema.org audit:** Verified which Structured Data types apply (LocalBusiness, LodgingBusiness, BreadcrumbList)

Key research findings documented in `docs/research/`.

---

## Design Philosophy

**Scandinavian farmhouse aesthetic:**

- **Warm cream (#f5f0e8)** as the base — evokes fresh milk, birch bark, and Nordic minimalism
- **Deep forest green (#2d4a32)** as primary — connects to the Finnish countryside, trust, and stability
- **Bark brown (#8b6f5c)** as accent — natural wood tones for icons and highlights
- **Inter font family** — clean, neutral, excellent Finnish character support, authentic Scandinavian feel
- **Generous whitespace** — premium feel, lets photography breathe
- **Subtle animations** — scroll-reveal fades, card hover elevations, smooth navigation transitions
- **No decorative fluff** — every visual element serves content or navigation

The aesthetic goal: "Premium enough to justify direct-sale prices, warm enough to feel like a real farm."

---

## Architecture

### System Design

```
┌─────────────────────────────────────────────┐
│                  index.html                  │
│  Schema.org JSON-LD · OG Tags · Fonts · SEO │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│              React 19 SPA                    │
│  ┌────────────────────────────────────────┐ │
│  │        LangProvider (Context)          │ │
│  │   useLang() · useContent() · toggle()  │ │
│  └────────────────────────────────────────┘ │
│  ┌─────┐ ┌─────┐ ┌──────┐ ┌──────┐ ┌─────┐ │
│  │ Nav │ │Hero │ │About │ │Hist. │ │Products│
│  ├─────┤ ├─────┤ ├──────┤ ├──────┤ ├──────┤ │
│  │Cabins│ │Gall.│ │Loc.  │ │Cont. │ │Footer│ │
│  └─────┘ └─────┘ └──────┘ └──────┘ └─────┘ │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         Content Layer (data-driven)          │
│  fi.ts ──► Content Object ◄── en.ts         │
└─────────────────────────────────────────────┘
```

### Component Tree

```
App
├── Navigation (scroll-aware, responsive)
├── <main>
│   ├── Hero (gradient overlay, CTA)
│   ├── About (image + text grid, values cards)
│   ├── History (vertical timeline)
│   ├── Products (category cards, dairy box)
│   ├── Cabins (brochure cards, amenity pills)
│   ├── Gallery (CSS masonry, keyboard lightbox)
│   ├── Location (map + distance cards)
│   └── Contact (contact cards + form)
└── Footer (social icons, nav links)
```

### Data Flow

```
Content (fi.ts / en.ts)
  └── getContent(lang) → Content Object
       └── useContent() hook → Component
            └── Renders section
```

Language switching is instant — no page reload. `LangProvider` stores state in React context, updates `<html lang>` attribute via `useEffect`.

---

## Technology Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 19 | Stable, well-understood, broad ecosystem |
| Language | TypeScript | Type safety, self-documenting code |
| Build | Vite 6 | Fast dev server, optimal production builds |
| Styling | Tailwind CSS v4 | Zero-runtime, design system via utilities |
| Animation | Framer Motion 12 | Declarative scroll-reveal, accessible (prefers-reduced-motion) |
| Icons | Lucide React | Lightweight, tree-shakable, consistent style |
| Fonts | Inter (Google Fonts) | Scandinavian aesthetic, excellent Finnish support |
| Images | WebP | Modern format, 30-50% smaller than JPEG |
| Hosting | Cloudflare Pages | Global CDN, free tier, instant deploy |

---

## Accessibility

- **Skip-to-content link** (first Tab target, visually hidden until focused)
- **Semantic HTML** — `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>` hierarchy
- **ARIA** — `role="dialog"` + `aria-modal="true"` on lightbox, `aria-label` on all icon-only buttons and nav menu toggle
- **Keyboard navigation** — Tab through all sections, Enter activates links/buttons, Escape closes lightbox and mobile menu
- **Focus indicators** — visible `focus:ring` on all interactive elements
- **Dynamic language** — `<html lang>` updates when user toggles language
- **Motion respect** — scroll-reveal uses `frame-motion` defaults that respect `prefers-reduced-motion`

---

## Performance

| Metric | Desktop | Mobile |
|--------|---------|--------|
| JS bundle (gzip) | 117 KB | 117 KB |
| CSS (gzip) | 7 KB | 7 KB |
| HTML | 6 KB | 6 KB |
| Total page weight | ~1.2 MB (images) | ~1.2 MB (images) |
| Image format | WebP | WebP |

Performance decisions:
- All images are WebP (not JPEG/PNG) — saves 30-50% bandwidth
- CSS-only masonry gallery (no JavaScript library)
- Background images with `aspect-ratio` (no layout shift)
- Framer Motion's `viewport: { once: true }` — animations only fire when elements scroll into view
- Passive scroll listeners
- `fetchPriority` on hero image for priority loading

---

## SEO & Structured Data

- **OpenGraph** — title, description, image, locale, site_name, type, URL
- **Twitter Card** — summary_large_image
- **Schema.org JSON-LD**:
  - `LocalBusiness` — main farm entity with address, phone, geo, hours
  - `LodgingBusiness` — cabin rental entity
  - `BreadcrumbList` — all 8 sections with canonical URLs
  - `Organization` — with logo and social profiles
- **hreflang** — Finnish + English + x-default
- **robots.txt** — allows all, points to sitemap
- **sitemap.xml** — canonical URL with alternate hreflang
- **Favicon** — SVG + apple-touch-icon + webmanifest

---

## Internationalization

- Two complete content files: `fi.ts` and `en.ts`
- All text is in content files — no hardcoded strings in components
- Language toggle updates all sections instantly via React context
- `<html lang>` attribute updated dynamically
- SEO tags are language-aware via structured data
- Design accommodates both short (fi) and long (en) text without layout breakage

---

## Image Optimization Pipeline

1. Source photos shot in high resolution (2400px+ wide)
2. Cropped to target aspect ratios
3. Converted to WebP with quality 80-85
4. 40px-wide placeholder images generated as low-quality WebP
5. Responsive width variants generated for hero images (`-480`, `-768`)
6. All images served from `/public/images/` — cache-friendly, CDN-ready
7. Low-quality image placeholders (LQIP) used as CSS background before full image loads

Total: 27 WebP image files + 12 placeholder files = 39 assets.

---

## Lessons Learned

### What Went Well

1. **Content-driven architecture** — separating content from components made iteration fast. Changing copy didn't require touching any component code.
2. **Design utility layer** — Tailwind utility classes for section padding, headings, and cards enforced visual consistency across all 10 components without CSS duplication.
3. **Parallel documentation** — writing documentation during development rather than after caught inconsistencies early.
4. **CSS masonry over JS library** — `columns-2 md:columns-3` with `break-inside: avoid` gave free responsive gallery without a DOM library.
5. **Reusable animation objects** — `fadeInUp`, `fadeInLeft`, `fadeInRight` object literals imported from a shared file would have eliminated duplication.

### What Could Improve

1. **Background images vs `<img>` elements** — using CSS `background-image` for all images meant losing native `alt` text for screen readers. A dedicated `Img` component was created but never integrated. Future projects should use `<img>` with proper `alt` attributes for content images.
2. **No CMS** — content is in TypeScript files, requiring developer edits. A headless CMS (Strapi, Sanity) or markdown-based system would empower non-technical staff.
3. **No backend** — the contact form shows a success state but doesn't send email. Must be wired to a service (Cloudflare Email, Resend, Formspree).
4. **SSR missing** — as a client-side SPA, search engines get an empty shell before JavaScript executes. Vite SSR or Astro would improve initial SEO and time-to-content.
5. **No automated testing** — no unit, integration, or visual regression tests. A small Vitest suite would prevent regressions.

---

## Future Improvements

See `docs/roadmap.md` for the full breakdown. Key priorities:
- CMS integration (Strapi or Sanity)
- Cloudflare Workers contact form backend
- Online cabin booking calendar
- Online product ordering
- Blog/news section
- Finnish Customer Reviews (Arvostelut) integration

---

## Repository

**GitHub:** (private — available on request)  
**Stack:** React 19 + TypeScript + Vite 6 + Tailwind v4 + Framer Motion 12  
**Status:** v1.0.0 — production-ready
