# Generic Content Model

This document describes the content architecture and how to adapt it for any farm, restaurant, hotel, tourism business, or small local business.

---

## Architecture Overview

```
src/
├── lib/
│   └── types.ts          ← Content type definitions (interfaces)
├── content/
│   ├── fi.ts             ← Finnish translation (Content object)
│   └── en.ts             ← English translation (Content object)
├── hooks/
│   └── useLang.tsx        ← Language context & switcher
└── lib/
    └── utils.ts           ← getContent(lang) → Content
```

The business-specific content is entirely contained in `src/content/fi.ts` and `src/content/en.ts`. Components read from these files via `useContent()`.

---

## To Adapt for a New Business

### 1. Edit Content Files

Open `src/content/fi.ts` (and `src/content/en.ts`). Replace each field:

```
site.title       → Your business name
site.description → Your SEO description
hero.title       → Your headline
hero.subtitle    → Your subtitle
about.intro      → Paragraphs about your business
about.values     → Your core values (title + body pairs)
history.events   → Your timeline milestones
products.*       → Your products/services categories + items
cabins.*         → Your accommodations (or remove section)
gallery.images   → Your photo gallery
visit.*          → Your location + directions
contact.*        → Your contact details + form labels
footer.*         → Your copyright + social links
```

### 2. Replace Images (Optional)

Put WebP images in `/public/images/`. Update paths in content files.

### 3. Replace the Logo

Update `navigation.logo` in both content files.

### 4. Update SEO Metadata

- `site.url` — your domain
- `site.ogImage` — Open Graph image path
- `site.keywords` — your SEO keywords

Update `index.html`:
- `<title>` tag
- `og:title`, `og:description`, `og:url`, `og:image`
- `twitter:*` meta tags
- Schema.org JSON-LD blocks (replace business-specific fields)
- `canonical` URL

### 5. Create robots.txt + sitemap.xml

Replace URL references with your domain.

---

## Section Guide

### Navigation
- `logo` — business name or brand text
- `links` — array of `{ label, href }` for nav items
- `langSwitch` — text for language toggle button

### Hero
- `title` — main headline (h1)
- `subtitle` — supporting text
- `cta` — call-to-action button text
- `image` — hero background image URL
- `imageAlt` — alt text for hero image

### About
- `intro` — array of paragraph strings
- `highlight` — `{ number, label }` for a stat/badge (e.g., "20+ years")
- `values` — array of `{ title, body }` pairs
- `image` + `imageAlt` — main about image

### History
- `events` — array of `{ year, description }` sorted chronologically

### Products
- `subtitle` — section subtitle
- `categories` — array of `{ title, items[] }` where items have `{ name, description, image, imageAlt }`
- `note` — callout text (e.g., "24/7 self-service shop")
- `dairySection` — a dedicated highlight with `{ title, body[], breeds, production }` — rename or remove per business

### Cabins (Accommodations)
- Rename to "Accommodations" or "Rooms" for other businesses
- `cabins[]` — array with `{ name, tagline, description[], capacity, size, built, layout[], amenities[], extras[], restrictions[], image, bookingUrl, contactPhone }`
- `commonInfo` — shared rules: `{ linens, firewood, cleaning, noPets, noSmoking, noOpenFire, noTent }`

### Gallery
- `images` — array of `{ src, alt, caption? }`

### Visit (Location)
- `address` — street address
- `coordinates` — `{ lat, lng }`
- `distances` — array of `{ destination, duration }` for travel times
- `mapEmbedUrl` — Google Maps embed URL

### Contact
- `subtitle` — section subtitle
- `farm` — primary contact: `{ name, phone, email, address? }`
- `cabins` — secondary contact (rename per business)
- `form` — contact form labels: `{ title, nameLabel, namePlaceholder, emailLabel, ... }`
- `openingHours` — hours text
- `note` — additional info text

### Footer
- `copyright` — copyright string
- `social` — array of `{ label, url, icon }` where icon is "facebook" | "instagram" | "email"
- `links` — array of `{ label, href }` for footer nav

---

## Removing a Section

To remove a section from the page:

1. In `src/App.tsx`, delete the `<Component />` line
2. In `src/lib/types.ts`, remove the corresponding interface field from `Content`
3. In both content files, delete the corresponding data
4. Clean up imports

Example: removing "History":
- Remove `<History />` from App.tsx
- Remove `history: History;` from Content interface
- Remove `history: { ... }` from fi.ts and en.ts
- Remove `import History from "./components/History"` from App.tsx

---

## Adding a New Section

1. Define the interface in `src/lib/types.ts` and add it to `Content`
2. Add data to both `src/content/fi.ts` and `src/content/en.ts`
3. Create the component in `src/components/`
4. Import and render in `src/App.tsx`

---

## Schema.org JSON-LD

Update `index.html` with appropriate schema types:

| Business Type | Schema.org Type |
|--------------|-----------------|
| Farm | `LocalBusiness` |
| Restaurant | `Restaurant` |
| Hotel | `Hotel` or `LodgingBusiness` |
| Retail store | `Store` |
| Service business | `LocalBusiness` |

Replace in `index.html`:
- Business name
- Address, phone, email
- Coordinates
- SameAs (social profiles)
- Logo URL
