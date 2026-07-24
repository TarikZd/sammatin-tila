# Template Extraction — Reusable Architecture

This document identifies every reusable part of the Sammatin tila website project and explains how to extract it for future digital modernization projects.

---

## 1. Layout System

### Reusable Components

| Component | Reuse Strategy |
|-----------|---------------|
| `content-section` (max-w-6xl centered wrapper) | Unchanged — works for any business website |
| `section-padding` (py-20 md:py-28 lg:py-32) | Unchanged — design token, change spacing via Tailwind config |
| `section-heading` (text-3xl sm:text-4xl lg:text-5xl) | Unchanged — typography token |

### Extraction

Create `src/styles/layout.css` (or keep in `index.css`) with these utility classes. They are pure CSS utility classes, not React-specific, so they work with any framework.

---

## 2. Component Library

### Navigation
- **File:** `src/components/Navigation.tsx`
- **Reuse:** Fully reusable. Replace `c.navigation.*` with props or a generic content object. The scroll-aware background, mobile menu toggle, underline hover effect, and language switch are business-agnostic.
- **Extraction:** Replace `useContent()` with a `navItems` prop and `logo` prop.

### Hero
- **File:** `src/components/Hero.tsx`
- **Reuse:** Mostly reusable. The gradient overlay, animated scroll indicator, badge row, CTA button, and responsive text scale are generic. Badge content must be sourced from content data.
- **Extraction:** Accept `title`, `subtitle`, `cta`, `image`, `badges: string[]`, `link` as props.

### Timeline
- **File:** `src/components/History.tsx`
- **Reuse:** Fully reusable. The vertical timeline with year badges works for any "history", "process", or "milestones" use case.
- **Extraction:** Accept `events: { year: string; description: string }[]` as a prop.

### Contact Form
- **File:** `src/components/Contact.tsx`
- **Reuse:** Form UI is generic. Validation, submission, and error handling can be extended. The success/error states and focus ring styling are reusable.
- **Extraction:** Accept `formLabels` object as a prop. Add an `onSubmit` callback.

### Gallery
- **File:** `src/components/Gallery.tsx`
- **Reuse:** The CSS columns masonry layout and keyboard-navigable lightbox are fully reusable.
- **Extraction:** Accept `images: { src: string; alt: string; caption?: string }[]` as a prop.

### Product/Service Cards
- **File:** `src/components/Products.tsx`
- **Reuse:** The category-split layout with image cards, horizontal rule dividers, and a centered highlight card work for any catalog or service listing.
- **Extraction:** Replace "products" with "services" or "items" in naming. Accept a generic items array.

### Cabin/Card Grid
- **File:** `src/components/Cabins.tsx`
- **Reuse:** The brochure-style cards with image overlays, amenity pills, restrictions list, and bottom CTA are reusable for any "listing" pattern.
- **Extraction:** Generalize to "listings" or "cards". Amenities, extras, and restrictions become generic string arrays.

### Location/Map
- **File:** `src/components/Location.tsx`
- **Reuse:** The map embed + distance cards pattern works for any business location.
- **Extraction:** Accept `address`, `coordinates`, `embedUrl`, and `distances` as props.

### Footer
- **File:** `src/components/Footer.tsx`
- **Reuse:** The social icon map (Facebook, Instagram, Mail) and footer nav pattern are generic. Replace SVG icon components with a reusable `SocialIcon` component.
- **Extraction:** Accept `socialLinks` and `footerLinks` as props.

### About
- **File:** `src/components/About.tsx`
- **Reuse:** The image + text grid with value cards pattern works for any "about" section.
- **Extraction:** Generic "hero image", "intro paragraphs", "value items" props.

---

## 3. Language System

### Reusable Parts
- **Language context:** `src/hooks/useLang.tsx` — the provider + context pattern is reusable as-is.
- **Content model:** `src/lib/types.ts` — the `Content` interface defines the data shape. Replace fields per business.
- **Content files:** `src/content/fi.ts`, `src/content/en.ts` — the two-file pattern with full content objects is reusable.

### Extraction
- Rename `Content` to `BusinessContent`.
- Keep the `Lang` type, `LangProvider`, `useLang()`, `useContent()`, `useToggleLang()` hooks unchanged.

---

## 4. SEO Utilities

### Reusable Parts
- **index.html:** The `<head>` structure (OpenGraph, Twitter Card, Schema.org JSON-LD) is fully reusable with placeholder variables.
- **Schema.org types:** LocalBusiness, LodgingBusiness, BreadcrumbList, Organization.
- **hreflang pattern**
- **robots.txt + sitemap.xml structure**

### Extraction
Create `src/seo/config.ts` with: `siteUrl`, `siteName`, `defaultTitle`, `defaultDescription`, `ogImage`, `twitterHandle`.

---

## 5. Image Pipeline

### Reusable Parts
- **WebP conversion workflow:** Use `sharp` or `squoosh` CLI for batch conversion.
- **Placeholder generation:** 40px-wide low-quality WebP files.
- **Responsive sizes:** `*-480.webp`, `*-768.webp`, `*-hero.webp` naming convention.
- **Image paths:** `/images/{name}.webp` and `/images/{name}-placeholder.webp`.

### Extraction
Create a `scripts/` folder with:
- `scripts/optimize-images.js` — batch WebP conversion
- `scripts/generate-placeholders.js` — batch placeholder generation
- `scripts/responsive-sizes.js` — responsive width variants

---

## 6. Design Tokens

### Reusable Parts

| Token | Current Value | Notes |
|-------|--------------|-------|
| `--color-cream` | `#f5f0e8` | Background, warm base |
| `--color-forest` | `#2d4a32` | Primary, headings, CTA |
| `--color-forest-light` | `#3d5a42` | Hover state |
| `--color-bark` | `#8b6f5c` | Accent, icons, dividers |
| `--color-bark-light` | `#a0826e` | Hover state |
| `--color-stone` | `#6b655a` | Body text |
| `--color-charcoal` | `#2a2825` | Dark backgrounds |
| `--color-mint` | `#5a8f6a` | Success states |
| Font | Inter (Google Fonts) | Clean, Scandinavian, versatile |

### Extraction
Move all design tokens to `tailwind.config.js` (or `tailwind.config.ts`). Currently they're inline hex values used via `@theme` in `index.css`. This pattern is reusable.

---

## 7. Animation System

### Reusable Parts
Framer Motion variant objects defined in component files:

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};
```

### Extraction
Create `src/lib/animations.ts` and export these as named exports. All components import from a single source.

---

## 8. Build & Config

| File | Reuse |
|------|-------|
| `vite.config.ts` | Fully reusable for Vite + React + TypeScript |
| `tsconfig.json` | Fully reusable with strict mode |
| `package.json` | Reusable dependencies + build scripts |
| `tailwind.config.ts` | Reusable with custom colors/spacing |

---

## Summary: Extraction Priority

1. **Copy directly (zero changes):** Layout utilities, animation objects, language hooks, SEO `<head>` structure, robots.txt, sitemap.xml
2. **Copy with minor deparameterization:** All 10 components (add props instead of useContent()), contact form (add onSubmit), gallery (add images prop)
3. **Create from scratch (template):** Content files, image pipeline scripts, color palette, favicon, brand assets
