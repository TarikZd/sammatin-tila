# Research Summary — Sammatin tila

## Overview

Sammatin tila is a dairy farm (lypsykarjatila) in Ylöjärvi, Pirkanmaa, Finland. The farm operates as Sammatin tila Oy (business ID 2749244-7, founded 2016). It combines dairy production, direct beef sales through a 24/7 self-service shop, and seasonal cabin rentals.

## Business Details

| Field | Value |
|-------|-------|
| Name | Sammatin tila (Sammatin tila Oy) |
| Business ID | 2749244-7 |
| Founded | 2003 (as farm business), 2016 (as Oy) |
| Location | Sammatintie 36, 34110 LAKIALA, Ylöjärvi |
| Coordinates | 61.6402, 23.5161 |
| Main production | Dairy (lypsykarja) |
| Land | 130 hectares |
| Barn | Free-stall (pihatto), built 2007 |
| Young animal barn | Built 1997 |
| Milking | Robotic |
| Main breed | Ayrshire, Holstein-Friesian, also Western Finnish cattle (länsisuomenkarja) and kyyttö |
| Milk production | 9,004 L/cow/year (2018) |
| Revenue | 1.96 million € (Finder) |
| Operating profit | 162,000 € (Asiakastieto) |
| Equity ratio | 39% |
| Employees | 4 permanent + 7-8 seasonal (summer) |
| CEO | Esa Juhani Korte |
| Owner/Entrepreneur | Suvi Rajala |

## Secondary Products & Services

1. **Beef sales** — 24/7 self-service shop selling own beef: minced meat (jauheliha), roasts (paistit), fillets (fileet). Also milk.
2. **Cabin rentals** — 3 log cabins for summer season: Hauenmaa, Matikka, Villakko
3. **Animal place rentals** — Rents animal spaces to other producers

## Contact

- **Farm phone**: 044 378 2223
- **Cabin phone**: 040-5124741 (Mirjami Rajala)
- **Email (farm)**: tila@sammatintila.fi
- **Email (cabins)**: info@sammatintila.fi
- **Website**: https://www.sammatintila.fi

## Social Media

- **Facebook** (new): https://www.facebook.com/100070412076358 (1,197 likes)
- **Facebook** (old/legacy): https://www.facebook.com/266643367115866
- **Instagram**: @sammatintila

## Key People

### Suvi Rajala
- Took over the family farm at age 20 (around 2003)
- Awarded "Nuori Yrittäjä 2016" (Young Entrepreneur 2016) by Ylöjärven Yrittäjät
- Elected to Suomen Yrittäjien ruokavaliokunta (food committee) for term 2025–2026
- Also works as an automation technician and tax expert through Wikli Group Oy
- Spoke at Salo Maatalousfoorumi 2026 on farm succession planning
- Described as cost-conscious, hands-on (repairs equipment herself), not highly social but values employees

### Mirjami Rajala
- Contact person for cabin rentals
- Phone: 040-5124741

## Recent News

### Ylinen Rehabilitation Centre Purchase (2024–2025)
- Sammatin tila Oy (75%) and Nimetön Oy (25%) purchased the former Ylinen rehabilitation centre in Ylöjärvi
- Purchase price: 396,270 € (with 35,000 € compensation for contaminated soil)
- About 20 buildings on ~19 hectares on the shores of Näsijärvi
- Buildings mostly from 1960s/70s; protected manor house from 1920s
- Three development ideas:
  1. Renewable energy (solar, not wind)
  2. Data center hosting
  3. Daycare in the protected manor building
- Suvi Rajala stated they have private investors and may move to bank financing later

## Site Structure (Current)

The current website is a simple static HTML site built by Whitestone Oy (copyright 2009). Key pages:

| Page | URL | Status |
|------|-----|--------|
| Home | / | ✓ |
| Farm intro | /Maatilanesittely.html | ✓ |
| Hauenmaa cabin | /Hauenmaa.html | ✓ |
| Matikka cabin | /Matikka.html | ✓ |
| Villakko cabin | /Villakko.html | ✓ |
| Pricing | /hinnasto.html | ✗ 404 |
| Online store | /verkkokauppa | ✗ 404 |
| English | /en | ✗ 404 |
| Russian | /ru | ✗ 404 |
| German | /ge | ✗ 404 |
| Booking calendar | /kalenteri/ | ✗ 404 (PHP app) |

Language flags (FI, EN, RU, DE) are shown in the navigation of cabin pages but only FI has working content.

## Competitors / Similar Farms (for reference)

- Arvilan tila (luomunautaa)
- Tahlo (Maatila Tahlo, Ylöjärvi)
- Perkkión tila
- Tenhon tila

## Online Reviews

- MapQuest: 3 reviews (incl. a Spanish-German family who stayed 10 days in a log cabin)
- Facebook: 1,197 likes, 51 talking about this, 11 were here
- WorldPlaces listing exists

## Notes for Website Redesign

- **No online store**: The verkkokauppa page returns 404 — beef is sold only through the physical self-service shop
- **No multi-language content**: EN/RU/DE pages return 404 — the new site should build proper FI + EN content
- **No pricing page**: hinnasto.html returns 404 — cabin prices may need to be requested from the owner
- **No cabin listing page**: /vuokrattavat-mokit returns 404 — this should be a proper landing page in the redesign
- **Booking calendar is a PHP app**: The /kalenteri/ directory appears to be a third-party booking calendar (PHP-based). The new site should not attempt to replace this — link to the existing calendar URL
- **WhatsApp**: The farm appears on findglocal with a WhatsApp share button but doesn't have an official WhatsApp contact channel
