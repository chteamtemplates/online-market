# Trendora — Changelog

All notable changes to the Trendora template are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · Versioning: [SemVer](https://semver.org/).

---

## [1.0.0] — Initial Release

### Added
- 7 fully-designed pages: home, shop, product detail, checkout, offers, contact, about
- Full design system in `style.css` (1,500+ lines): design tokens, typography, components, layout
- Vanilla JS store engine in `store.js` (850+ lines):
  - Product catalog (16 sample products with images, ratings, reviews, variants)
  - Live filtering by category / price / color / sale
  - Live search
  - Sort dropdown (default / new / price ↑ / price ↓ / rating)
  - Sliding cart drawer with quantity controls
  - Wishlist with localStorage persistence
  - Multi-step checkout form with validation
  - Promo code engine (3 promo types: percent / fixed / shipping)
  - Order success view with auto-generated order ID
- 3 working promo codes: `TRENDORA10` (10% off), `SUMMER25` (25% off), `FREESHIP` (free shipping)
- Free shipping rule: orders ≥ $100 ship free automatically
- Toast notification system (success / info / error)
- Countdown timer on offers page
- FAQ accordion on contact page
- Image gallery with thumbnail switcher on product page
- Related products section on product page
- Mobile-first responsive design (320px → 4K)
- RTL support (`dir="rtl"` ready)
- SEO: Open Graph tags, JSON-LD structured data, `sitemap.xml`, `robots.txt`, semantic HTML
- Accessibility: ARIA labels, keyboard navigation, focus states, semantic landmarks
- Favicon (SVG)
- Documentation HTML (`documentation.html`)
- Customization guide (`CUSTOMIZATION.md`)
- README with full feature list and setup instructions
- License (Regular + Extended)

### Tech specs
- HTML5, CSS3 (custom properties + grid + flexbox), Vanilla JS (ES6+)
- Zero dependencies (no npm packages, no CDN scripts, no build tools)
- Total size: < 200 KB (HTML + CSS + JS)
- Tested in: Chrome, Firefox, Safari, Edge (latest 2 versions)
- W3C valid HTML/CSS

---

## Roadmap (planned for future versions)

### [1.1.0] — Variants & Polish
- Add product variant images (color swatches change main image)
- Add quick view modal on product cards
- Add "Recently viewed" section
- Add Stripe Checkout integration guide

### [1.2.0] — Backend Integrations
- Shopify Storefront API adapter
- Snipcart adapter
- Foxy adapter
- Stripe Payment Links integration

### [1.3.0] — Extra Pages
- Blog index + blog post pages
- Lookbook gallery page
- Order tracking page
- Account/login page (UI only)

### [1.4.0] — Internationalization
- Built-in i18n system with `lang/*.json` files
- Pre-built translations: English, Arabic, French, Spanish

---

## How updates work

If you bought Trendora on **Gumroad** or **Lemon Squeezy**, you'll get an email when a new version drops.

If you bought on **ThemeForest**, you can re-download the latest version anytime from your Envato downloads page.

All updates are **free for life** — once you buy, you own every future version.
