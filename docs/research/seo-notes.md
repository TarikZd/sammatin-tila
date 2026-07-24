# SEO Notes — Sammatin tila

## Current SEO State

The existing website has significant SEO gaps:

- **Title tags**: Basic but not optimized for search intent
- **Meta descriptions**: Present on some pages but not all
- **Hreflang tags**: Not implemented
- **Sitemap.xml**: Not present
- **Robots.txt**: Not present
- **Schema.org**: Not implemented
- **OpenGraph**: Not implemented
- **Twitter Cards**: Not implemented
- **Page load**: Fast (static HTML) but no optimization (no WebP, no lazy loading)

## Target Keywords

### Primary (Finnish)
- Ylöjärvi lypsykarjatila
- luomuliha Ylöjärvi
- maaseutuloma Tampere
- mökki vuokraus Tampere
- hirsimökki vuokraus Pirkanmaa
- lähiruoka Ylöjärvi
- Kotieläintila vierailu Tampere
- jauheliha suoraan tilalta
- maatilamatkailu Pirkanmaa

### Primary (English)
- farm stay near Tampere
- log cabin rental Tampere Finland
- Finnish cottage holiday Pirkanmaa
- local beef farm Ylöjärvi
- dairy farm visit Tampere
- self-service farm shop Finland
- summer cabin Näsijärvi
- agritourism Tampere

### Long-Tail
- hiljainen järvimökki lapsille Ylöjärvi
- maatilan lihakaupat itsepalvelu Tampere
- lypsykarjatilalla yöpyminen Pirkanmaa
- Näsijärvi mökki vuokraus 6 henkilölle
- perhemökki Tampereen lähellä

## Structured Data (Schema.org)

### For Farm (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sammatin tila",
  "image": "https://www.sammatintila.fi/",
  "url": "https://www.sammatintila.fi",
  "telephone": "+358443782223",
  "email": "tila@sammatintila.fi",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sammatintie 36",
    "postalCode": "34110",
    "addressLocality": "LAKIALA",
    "addressCountry": "FI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 61.6402,
    "longitude": 23.5161
  },
  "businessDays": "Mo-Su",
  "agriculturalOperation": "DairyFarming",
  "priceRange": "€€"
}
```

### For Cabins
```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Hauenmaa",
  "image": "https://www.sammatintila.fi/",
  "telephone": "+358405124741",
  "email": "info@sammatintila.fi",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sammatintie 36",
    "postalCode": "34110",
    "addressLocality": "LAKIALA",
    "addressCountry": "FI"
  },
  "numberOfRooms": 2,
  "petsAllowed": false,
  "smokingAllowed": false,
  "amenityFeature": ["Sauna", "Bicycles", "Terrace", "Gas grill"],
  "checkinTime": "14:00",
  "checkoutTime": "12:00"
}
```

### Breadcrumb
Apply BreadcrumbList structured data to every page.

## Technical SEO Plan

### Sitemap
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.sammatintila.fi/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.sammatintila.fi/farm</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.sammatintila.fi/cabins</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.sammatintila.fi/cabins/hauenmaa</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sammatintila.fi/cabins/matikka</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sammatintila.fi/cabins/villakko</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sammatintila.fi/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

### Hreflang
```html
<link rel="alternate" hreflang="fi" href="https://www.sammatintila.fi/" />
<link rel="alternate" hreflang="en" href="https://www.sammatintila.fi/en" />
<link rel="alternate" hreflang="x-default" href="https://www.sammatintila.fi/" />
```

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://www.sammatintila.fi/sitemap.xml
```

## Image SEO
- All images should use descriptive filenames (e.g., `hauenmaa-lake-view.webp`)
- WebP format with original JPEG/PNG source
- Alt texts in both FI and EN (canonical image per page)
- Blurred placeholder (low-res WebP or base64) for lazy loading
- Hero images: preload with `fetchpriority="high"`

## Performance Targets
- Lighthouse: 95+ on all categories
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.0s
- Cumulative Layout Shift: 0
- First Input Delay: < 50ms
- Fully responsive: 320px to 1440px+

## Accessibility
- WCAG AA compliance target
- All images need alt text
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast ratios >= 4.5:1 for text
- Focus states for keyboard navigation
- Skip-to-content link
- ARIA labels where needed

## OpenGraph / Social Cards
```html
<meta property="og:title" content="Sammatin tila" />
<meta property="og:description" content="Lypsykarjatila ja lomamökit Ylöjärvellä | Dairy farm and holiday cabins in Ylöjärvi" />
<meta property="og:url" content="https://www.sammatintila.fi" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.sammatintila.fi/og-image.webp" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sammatin tila" />
<meta name="twitter:description" content="Lypsykarjatila ja lomamökit Ylöjärvellä | Dairy farm and holiday cabins in Ylöjärvi" />
<meta name="twitter:image" content="https://www.sammatintila.fi/og-image.webp" />
```
