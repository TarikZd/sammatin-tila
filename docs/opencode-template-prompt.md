# OpenCode Template Prompt — Digital Modernization for Small Businesses

This document is a generalized version of the workflow used to build the Sammatin tila website. It can be reused for any farm, restaurant, hotel, tourism business, or small local business.

---

## How to Use

1. Copy this file to a new project directory
2. Replace `[BUSINESS_NAME]`, `[BUSINESS_TYPE]`, and other placeholders
3. Run the phases sequentially within OpenCode
4. Each phase produces deliverables before the next begins

---

## Template Prompt

```
# [BUSINESS_NAME] — Digital Modernization

## Business Profile

- **Name:** [BUSINESS_NAME]
- **Type:** [BUSINESS_TYPE] (farm / restaurant / hotel / tourism / retail / service)
- **Location:** [CITY, COUNTRY]
- **Established:** [YEAR]
- **Owner/Operator:** [NAME(S)]
- **Languages:** [PRIMARY_LANG], [SECONDARY_LANG] (if bilingual)
- **Existing web presence:** [URL or "none"]
- **Unique selling points:** [3-5 key differentiators]

## Scope

A complete single-page website with:
- Hero section with photography
- About / story section
- History / timeline
- Products or services
- Accommodations (if applicable)
- Photo gallery
- Location with map
- Contact form
- Footer with social links
- Bilingual support (if needed)

## Design Direction

[SCANDINAVIAN / MEDITERRANEAN / RUSTIC / MODERN / PREMIUM]

Brand colors:
- Primary: [#HEX]
- Background: [#HEX]
- Accent: [#HEX]

Font preference: [GOOGLE FONT NAME]

## Phases

### Phase 1 — Research
1. Read all docs/research/*.md if they exist
2. Search web for [BUSINESS_NAME] to find existing mentions
3. Search web for similar businesses (3-5 competitors)
4. Search web for SEO keywords related to [BUSINESS_TYPE] in [CITY, COUNTRY]
5. Verify all business details with provided information
6. Document everything in docs/research/

### Phase 2 — Design System
1. Define colors, spacing, typography, and animation language
2. Create Tailwind utility classes for section padding, headings, cards
3. Document in docs/design-system.md

### Phase 3 — Content
1. Create bilingual content files (if applicable) in src/content/
2. Define TypeScript interfaces in src/lib/types.ts
3. All text in content files — zero hardcoded strings in components
4. Document content model in docs/generic-content-model.md

### Phase 4 — Component Development
1. Create each section component in order:
   - Navigation (scroll-aware, mobile menu)
   - Hero (gradient overlay, badges, CTA)
   - About (image + text grid, values)
   - History (vertical timeline)
   - Products/Services (category cards)
   - Accommodations (brochure cards, if applicable)
   - Gallery (masonry, lightbox)
   - Location (map + distances)
   - Contact (contact cards + form)
   - Footer (social icons, links)
2. Use scroll-reveal animations via Framer Motion
3. All images as WebP with LQIP placeholders
4. Responsive from 320px to 1920px

### Phase 5 — SEO & Accessibility
1. OpenGraph, Twitter Card, Schema.org JSON-LD
2. hreflang tags (if bilingual)
3. robots.txt, sitemap.xml
4. Favicon, apple-touch-icon, webmanifest
5. Skip-to-content link
6. ARIA labels on all interactive elements
7. Keyboard navigation for gallery lightbox
8. Dynamic <html lang> attribute
9. Form labels and validation

### Phase 6 — Release Candidate (RC1)
1. Responsive review (320-1920px)
2. Visual consistency audit
3. Accessibility review (WCAG AA)
4. SEO review
5. Performance review (Lighthouse 95+)
6. Code quality — remove dead code, TODOs, console.log
7. Content review — verify all facts, grammar, URLs
8. Cross-browser review
9. Final UX walkthrough
10. Documentation — README, CHANGELOG, case study
11. Release checklist
12. Version tag (v1.0.0-rc1)

### Phase 7 — Project Closure
1. Final repository audit
2. Template extraction documentation
3. Portfolio case study
4. Reusable checklists
5. Design system documentation
6. Roadmap
7. GitHub preparation
8. Final quality audit
9. Release v1.0.0

## Architecture

React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion

```
src/
├── components/    ← One component per section
├── content/       ← Content files per language
├── hooks/         ← Language context + toggle
├── lib/           ← Types, utilities, animations
├── App.tsx        ← Root component
└── index.css      ← Design system + Tailwind
```

All business-specific content is in src/content/. Components are reusable across businesses. Only the content layer changes.

## Key Constraints

- No complex animations (parallax, 3D, WebGL)
- All images as WebP
- CSS-only solutions preferred over JS libraries
- All text in content files, not components
- TypeScript strict mode
- Lighthouse ≥ 90 across all categories
```

---

## After Template Completion

1. Replace all `docs/checklists/*.md` with business-specific versions
2. Update `docs/portfolio-case-study.md` with actual business details
3. Update `CHANGELOG.md` with real version history
4. Add business logo and branded favicon
5. Deploy to hosting platform
6. Submit sitemap to Google Search Console
