# Design System

## Colors

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#f5f0e8` | Page background, card backgrounds, navigation |
| `forest` | `#2d4a32` | Primary color, headings, main CTA, section heading underline |
| `forest-light` | `#3d5a42` | Hover state for forest elements |
| `bark` | `#8b6f5c` | Accent, icons, dividers, value card bars |
| `bark-light` | `#a0826e` | Hover state for bark elements |
| `stone` | `#6b655a` | Body text |
| `charcoal` | `#2a2825` | Footer background, dark elements |
| `white/40` | `rgba(255,255,255,0.4)` | Some section backgrounds for texture |
| `mint` | `#5a8f6a` | Success states, form confirmation |

### Opacity Variants

```
forest/5   — very subtle tint for card borders
forest/10  — light tint for subtle backgrounds
forest/20  — medium tint for hover borders
forest/30  — visible tint for border elements
forest/50  — semi-transparent overlay
forest/70  — strong overlay (hero gradient)
cream/10   — subtle badge backgrounds on hero
cream/50   — input field backgrounds
cream/60   — secondary text on dark backgrounds
cream/70   — medium text on dark backgrounds
cream/80   — near-white text on dark backgrounds
cream/85   — subtitle text on hero
cream/95   — navigation background at scroll
bark/20    — shadow glow for button hovers
```

---

## Typography

### Font Family

- **Family:** Inter (sans-serif)
- **Source:** Google Fonts (preconnected in `<head>`)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Scale

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| h1 (hero) | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` | Bold | Hero headline only |
| Section heading | `text-3xl sm:text-4xl lg:text-5xl` | Bold | Section titles |
| Card heading | `text-lg` | Semibold | Product names, cabin names |
| Body | `text-sm` | Regular | Descriptions, paragraphs |
| Small | `text-xs` | Medium | Badges, pills, form labels, captions |
| Nav link | `text-sm` | Regular | Navigation items |
| Year badge | `text-xs` | Bold | Timeline year circles |
| Pills | `text-xs` | Medium | Amenity pills, dairy section pills |

### Line Height

- Headings: `leading-tight` or `leading-none`
- Body text: `leading-relaxed`

---

## Spacing

### Section Padding

```css
.section-padding {
  padding-top: 5rem;      /* py-20 */
  padding-bottom: 5rem;
}

/* md: */ {
  padding-top: 7rem;      /* md:py-28 */
  padding-bottom: 7rem;
}

/* lg: */ {
  padding-top: 8rem;      /* lg:py-32 */
  padding-bottom: 8rem;
}
```

### Content Width

```css
.content-section {
  max-width: 72rem;       /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;  /* px-5 */
  padding-right: 1.25rem;
}
```

### Component Spacing

- Between sections: handled by `section-padding`
- Between cards: `gap-6` (1.5rem) in grids
- Between items in a card: `gap-3` or `space-y-3`
- Between heading and content: `mb-10` to `mb-16`
- Between section heading and grid: `mb-14`
- Horizontal rule + label gap: `gap-3`

---

## Components

### Buttons

| Variant | Classes | Usage |
|---------|---------|-------|
| Primary (hero CTA) | `px-8 py-3 bg-bark text-cream rounded-full text-sm font-medium hover:bg-bark-light hover:shadow-lg` | Hero CTA |
| Secondary | `px-4 py-2.5 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-light hover:shadow-lg` | Form submit, contact |
| Outline | `px-3 py-1.5 text-xs font-medium border border-forest/30 text-forest rounded-full hover:bg-forest hover:text-cream` | Language toggle |
| Ghost icon | `p-2 text-stone hover:text-forest rounded-full hover:bg-forest/5` | Social links |

All buttons: `transition-all duration-300`

### Cards

| Variant | Classes | Usage |
|---------|---------|-------|
| Default | `rounded-xl border border-forest/5 shadow-sm bg-cream p-6` | About values, cabin info |
| Hover | `card-hover` adds `hover:shadow-md hover:-translate-y-0.5` | Any card with hover interaction |
| Highlight | `bg-forest/5 border border-forest/10 rounded-xl` | Callout boxes, note cards |

### Form Inputs

- Shape: `rounded-lg` (8px radius)
- Border: `border border-forest/10`
- Background: `bg-cream/50`
- Text: `text-charcoal`
- Placeholder: `placeholder:text-stone/40`
- Focus: `focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30`
- Padding: `px-4 py-2.5`
- Transition: `transition-all duration-200`

### Pills

```css
.pill {
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: rgba(139, 111, 92, 0.08);
  color: #8b6f5c;
  border-radius: 9999px;
}
```

### Navigation

- Desktop: inline links with underline hover effect
- Mobile: toggle button with slide-down overlay
- Background: `bg-cream/80` (transparent) → `bg-cream/95 backdrop-blur-md shadow-sm` (scrolled)
- Height: `h-16 md:h-18`

---

## Icons

- **Source:** Lucide React (tree-shakable)
- **Common icons:** `ChevronDown`, `Menu`, `X`, `Phone`, `Mail`, `MapPin`, `Clock`, `AlertCircle`, `Send`, `Store`, `Milk`, `ChevronLeft`, `ChevronRight`, `Users`, `Ruler`, `Hammer`, `Check`
- **Social:** Custom inline SVG components for Facebook, Instagram
- **Icon size:** 14-16px in cards, 18-28px for feature icons, 24-32px for gallery navigation
- **Container:** Icons inside rounded-full `w-8 h-8` backgrounds in contact cards

---

## Animations

### Scroll Reveal

Three reusable variants, defined per component file:

```
fadeInUp:   opacity 0→1, y 24→0, 0.5s easeOut
fadeInLeft: opacity 0→1, x -30→0, 0.6s easeOut
fadeInRight: opacity 0→1, x 30→0, 0.6s easeOut
```

All use `viewport: { once: true }` — animation fires once when element scrolls into view.

### Hover

- Card elevation: `hover:shadow-md hover:-translate-y-0.5`
- Image zoom: `hover:scale-105` on inner div (duration: 500-700ms)
- Button shadow: `hover:shadow-lg hover:shadow-bark/20`
- Link underline: `after:scale-x-0 hover:after:scale-x-100`

### Micro-interactions

- Scroll indicator: y-axis bounce, 2s loop, easeInOut
- Lightbox: scale 0.92→1, 0.25s
- Mobile menu: height: 0→auto, opacity 0→1, 0.3s
- Success state: opacity 0→1, y 10→0, 0.3s
- Navigation: background transition, 0.3s

### Performance

- All animations use CSS transforms (GPU-accelerated)
- Framer Motion respects `prefers-reduced-motion` by default
- No parallax, 3D transforms, or particle effects

---

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Default | < 768px | Single column, stacked layout |
| `md:` | ≥ 768px | Tablet, 2-3 column grids appear |
| `lg:` | ≥ 1024px | Desktop, larger padding and text |

### Responsive Patterns

- **Grids:** `grid md:grid-cols-2 md:grid-cols-3 md:grid-cols-5` — always single column on mobile
- **Text:** Hero h1 scales from `text-4xl` (320px) to `text-7xl` (1280px+)
- **Navigation:** Hamburger menu on mobile, inline links on `md:`
- **Spacing:** Section padding increases from `py-20` to `py-28` (md) to `py-32` (lg)
- **Images:** `columns-2 md:columns-3` for gallery masonry
- **Cards:** `flex-col md:flex-row` for horizontal layouts
