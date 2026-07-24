# Roadmap

## Short-Term (v1.1.0–v1.3.0)

### CMS Integration (v1.1.0)
- Replace hardcoded `src/content/` files with a headless CMS
- Options: Sanity, Strapi, Decap CMS (Git-based), or Cloudflare D1
- Benefit: client can edit text, images, pricing without code
- Effort: medium (depends on CMS choice)

### Contact Form Backend (v1.1.0)
- Connect contact form to an email backend
- Options: EmailJS, Formspree, Cloudflare Email Workers, Resend
- Add reCAPTCHA v3 for spam prevention
- Add success/error states with backend feedback
- Send confirmation email to submitter
- Effort: low-medium

### Cookie Consent Banner (v1.2.0)
- GDPR-compliant cookie consent popup
- Required before adding analytics or marketing cookies
- Options: react-cookie-consent, Osano, Cookiebot
- Track consent state in localStorage
- Effort: low

### Analytics (v1.2.0)
- Privacy-focused analytics
- Options: Plausible, Umami, Fathom, Cloudflare Web Analytics
- Goal tracking: contact form submits, CTA clicks, social link clicks
- Effort: low

### Break even redesign / pricing (v1.3.0)
- Replace pillar cards with mixed-visual section
- Add price indicators or actual prices
- Break-even concept needs clearer visual language
- Effort: medium

---

## Medium-Term (v2.0.0+)

### Cabin Booking System
- Real-time availability calendar
- Direct booking with payment (Stripe)
- Seasonal pricing rules
- Cancellation policy display
- Booking confirmation emails
- Effort: high (full-stack feature)

### Online Store
- Add-to-cart functionality
- Product variants (cuts, sizes, bundles)
- Shipping calculator
- Order tracking
- Inventory management
- Effort: high (full-stack feature)

### Blog / News Section
- News about the business (new products, events, seasons)
- SEO benefit (fresh content)
- RSS feed
- Category and tag system
- Effort: medium

### Multi-page Architecture
- Split SPA into SSR/SSG pages (Next.js, Astro, or Remix)
- Per-page meta tags and structured data
- Faster initial load (no JS bundle for simple pages)
- Better SEO for subpages
- Effort: high (framework migration)

---

## Long-Term (v3.0.0+)

### AI Assistant
- Chat widget for visitor questions
- Trained on business data (products, pricing, FAQ, history)
- Answer availability, pricing, booking questions
- Human handoff for complex queries
- Effort: very high (requires AI infrastructure)

### Customer Reviews
- Google Reviews or Trustpilot integration
- Review submission form on site
- Review gallery on homepage
- Rating schema for rich search results
- Effort: medium

### Multilingual Expansion
- Add Swedish, Russian, German (if relevant to tourism area)
- Add language detection for automatic redirect
- Translation management system
- Effort: medium-high (per language)

### Progressive Web App
- Offline support via service worker
- Add-to-home-screen prompt
- Push notifications (new products, booking reminders)
- Effort: medium

### Virtual Tour / 360° Photos
- Panoramic photography of the shop and surroundings
- Embed Matterport or similar viewer
- Google Street View integration
- Effort: medium
