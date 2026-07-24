# Image Inventory — Sammatin tila

## Source URLs (Current Site)

All images are hosted on the current site at `http://www.sammatintila.fi/` (or `https://sammatintila.fi/`).

### Shared/Banner Images

| Path | Used On | Description | Est. Type |
|------|---------|-------------|-----------|
| `/img/maatilayleiskuva.jpg` | All pages (header banner) | Farm aerial/overview shot | Landscape |
| `/lehmat.png` | Homepage (inline) | Cows in pasture/barn | Landscape |
| `/img/maatila.jpg` | Homepage (farm card) | Farm exterior/field | Landscape |
| `/img/vuokramokit.jpg` | Homepage (cabins card) | Cabin exterior | Landscape |

### Farm Intro Page

| Path | Used On | Description | Est. Type |
|------|---------|-------------|-----------|
| `/images/yritys.jpg` | Maatilanesittely.html | Company/owner photo | Portrait |
| `/images/maatila_1_new.jpg` | Maatilanesittely.html | Farm scene (cows/feed) | Landscape |
| `/images/maatila_2.jpg` | Maatilanesittely.html | Farm scene (pasture/field) | Landscape |
| `/images/maatila_3.jpg` | Maatilanesittely.html | Farm scene (landscape) | Landscape |

### Villakko Cabin Page

| Path | Used On | Description | Est. Type |
|------|---------|-------------|-----------|
| `/images/julkisivu.jpg` | Villakko.html | Cabin exterior (front facade) | Landscape |
| `/images/sisalta.jpg` | Villakko.html | Interior view 1 | Landscape |
| `/images/sisalta2.jpg` | Villakko.html | Interior view 2 | Landscape |
| `/images/sisalta3.jpg` | Villakko.html | Interior view 3 | Landscape |

### Language Flag Icons

| Path | Description |
|------|-------------|
| `/img/flag_finnish.jpg` | FI flag icon (25x17) |
| `/img/flag_russian.jpg` | RU flag icon (25x17) |
| `/img/flag_english.jpg` | EN flag icon (25x17) |
| `/img/flag_german.jpg` | GE flag icon (25x17) |

### Hauenmaa & Matikka Galleries (Dynamic)

The Hauenmaa and Matikka cabin pages use a JavaScript-based gallery system (`wmanage-banner`) where images are loaded dynamically. Gallery IDs:
- Hauenmaa: `banner_14461_gallery`
- Matikka: `banner_14462_gallery`

The actual image URLs are NOT in the static HTML — they're loaded dynamically. Potential locations for gallery data:
- JavaScript variables/data files in the `/shared/` or `/scripts/` directory
- Server-side JSON endpoint
- Database-driven through the Whitestone CMS

**Note**: These images need to be downloaded by visiting the actual page in a browser or inspecting the network requests.

## Total Image Count (Confirmed)

**Confirmed images**: 13 unique source images (excluding 4 flag icons)
**Gallery images**: Unknown (estimate ~10-15 per cabin gallery)

## Proposed WebP Targets for New Site

For the redesign, all images will be converted to WebP format with the following naming convention:

### Hero (Preloaded, fetchpriority=high)
| New Filename | Source | Purpose | Est. Size |
|-------------|--------|---------|-----------|
| `hero-farm.webp` | `/img/maatilayleiskuva.jpg` | Homepage hero — farm landscape | 1920×800 |
| `hero-cabins.webp` | `/img/vuokramokit.jpg` | Cabins index hero — cabin by lake | 1920×800 |
| `hero-hauenmaa.webp` | Gallery | Hauenmaa cabin hero | 1200×600 |
| `hero-matikka.webp` | Gallery | Matikka cabin hero | 1200×600 |
| `hero-villakko.webp` | `/images/julkisivu.jpg` | Villakko cabin hero | 1200×600 |

### Content Images (Lazy loaded, blurred placeholder)
| New Filename | Source | Page | Orientation |
|-------------|--------|------|-------------|
| `farm-overview.webp` | `/img/maatilayleiskuva.jpg` | Farm intro | Landscape |
| `farm-cows.webp` | `/lehmat.png` | Homepage/farm | Landscape |
| `farm-building.webp` | `/img/maatila.jpg` | Homepage | Landscape |
| `farm-owner.webp` | `/images/yritys.jpg` | Farm intro | Portrait |
| `farm-feed.webp` | `/images/maatila_1_new.jpg` | Farm intro | Landscape |
| `farm-pasture.webp` | `/images/maatila_2.jpg` | Farm intro | Landscape |
| `farm-landscape.webp` | `/images/maatila_3.jpg` | Farm intro | Landscape |
| `villakko-exterior.webp` | `/images/julkisivu.jpg` | Villakko page | Landscape |
| `villakko-interior-1.webp` | `/images/sisalta.jpg` | Villakko page | Landscape |
| `villakko-interior-2.webp` | `/images/sisalta2.jpg` | Villakko page | Landscape |
| `villakko-interior-3.webp` | `/images/sisalta3.jpg` | Villakko page | Landscape |
| `hauenmaa-interior-*.webp` | Gallery | Hauenmaa gallery | Mixed |
| `hauenmaa-exterior-*.webp` | Gallery | Hauenmaa gallery | Mixed |
| `matikka-interior-*.webp` | Gallery | Matikka gallery | Mixed |
| `matikka-exterior-*.webp` | Gallery | Matikka gallery | Mixed |

### Additional Images Needed (Not on Current Site)
| Image | Content | Source |
|-------|---------|--------|
| `self-service-shop.webp` | Farm shop interior | Current site or new photo |
| `beef-products.webp` | Meat product display | Current site or new photo |
| `og-image.webp` | OpenGraph share image | 1200×630 crop of hero or farm |

## Download & Processing Pipeline

1. Download all known images from `http://www.sammatintila.fi/` URLs
2. Visit gallery pages in browser to capture Hauenmaa & Matikka gallery image URLs
3. Convert all to WebP (quality 80-85, lossy)
4. Generate 32×32 blurred placeholder versions (WebP, quality 20)
5. Store in `public/images/` directory with the new naming convention
6. Create CSS `background-image` with base64 blur + lazy-load pattern

## Gallery Image Discovery

To get Hauenmaa and Matikka gallery image URLs, we need to:
1. Open the page in a headless browser
2. Let JavaScript execute and load the gallery images
3. Intercept network requests to capture image URLs
4. Or check the Whitestone CMS data files in `/shared/` directory

This step requires either the Apify browser tool or manual inspection.
