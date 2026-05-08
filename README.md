# Trendora — Premium E-Commerce HTML Template

A polished, production-ready luxury fashion store template built with
**vanilla HTML, CSS, and JavaScript** — zero dependencies, zero build steps.
Open any `.html` file in your browser and the entire shop just runs.

> **Version 3.0** · Last updated: 2026

---

## ✨ Features

- **7 Pages** — Home, Shop, Product Detail, Offers, Checkout, About, Contact
- **16 Demo Products** with real photography, multi-image galleries, and
  ratings out of the box
- **Persistent Cart & Wishlist** via LocalStorage — survives reloads, syncs
  across pages, no backend required
- **Smart Search** with live filtering by category, price range, and sale
- **Sortable Catalog** — newest, price low/high, top rated
- **Animated Cart Drawer** with quantity controls and shipping calculator
- **Fully Responsive** — mobile-first, tested down to 320 px
- **Real Product Photos** loaded from Unsplash (replace with your own)
- **Promo Codes** — `TRENDORA10`, `SUMMER25`, `FREESHIP` with full validation
- **Countdown Timer** on the offers page
- **Form Validation** with inline error messages
- **Multi-step Checkout** with order summary + payment method picker
- **SEO Ready** — Open Graph tags, Twitter Cards, JSON-LD, sitemap, robots.txt
- **Accessible** — semantic HTML, ARIA labels, focus rings, keyboard nav
- **RTL Support** — drop `dir="rtl"` on `<html>` for Arabic, Hebrew, Persian
- **Custom SVG Icons** — no FontAwesome, no Heroicons dependency
- **Print Stylesheet** — receipts and product pages print cleanly

## 🖼️ Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, categories, featured products, testimonials, newsletter |
| Shop | `products.html` | Sidebar filters, search bar, sort, full grid |
| Product | `product.html` | Image gallery, options, add-to-cart, related items |
| Offers | `offers.html` | Countdown, sale items, copyable promo codes |
| About | `about.html` | Brand story, values, stats |
| Contact | `contact.html` | Contact info, message form, FAQ accordion |
| Checkout | `checkout.html` | Multi-step form, payment options, order summary |

## 🚀 Quick Start

```bash
# 1. Clone or download this folder
git clone https://github.com/your-username/trendora.git

# 2. Open in your browser
cd trendora && open index.html
```

That's it. No `npm install`, no Webpack, no build pipeline. Edit the files
directly.

### Hosting

The template is **100% static** — host anywhere:

- **GitHub Pages** · *Settings → Pages → Deploy from branch*
- **Netlify** · drag-and-drop the folder onto [app.netlify.com](https://app.netlify.com)
- **Vercel** · `npx vercel --prod`
- **cPanel / FTP** · upload to `public_html/`

## 🎨 Customization

Every brand element lives in CSS variables. Change once, see it everywhere.

```css
:root {
  --gold: #B8935A;       /* primary accent */
  --ink: #1A1A1A;        /* dark text */
  --bg: #FFFFFF;
  --bg-soft: #FAF8F3;
}
```

Add or edit products in the `PRODUCTS` array at the top of `store.js`:

```javascript
{
  id: 1,
  name: 'Classic Beige Trench Coat',
  brand: 'Trendora Classic',
  price: 189,
  oldPrice: null,
  category: 'Men',
  badge: 'New',
  rating: 4.8,
  reviews: 124,
  stock: 12,
  image: 'https://.../photo.jpg',
  gallery: ['url1', 'url2', 'url3'],
  desc: 'Crafted from luxurious Italian wool…'
}
```

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for the complete guide — covering
currencies, RTL, real backends (Stripe, Shopify, Formspree), local images,
SEO, and deployment.

## 📁 Project Structure

```
trendora/
├── index.html          # Home page
├── products.html       # Shop / catalog
├── product.html        # Product detail
├── offers.html         # Sale + promo codes
├── checkout.html       # Multi-step checkout
├── contact.html        # Contact form + FAQ
├── about.html          # Brand story
├── style.css           # Complete design system (≈45 KB)
├── store.js            # All shop logic, cart, wishlist, filters (≈25 KB)
├── favicon.svg         # SVG favicon
├── robots.txt
├── sitemap.xml
├── README.md
├── LICENSE.md
└── CUSTOMIZATION.md
```

## 📦 Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| HTML | Vanilla, semantic | Zero framework lock-in. Edit by hand. |
| CSS | Vanilla, CSS variables | Single design-token file. No preprocessor needed. |
| JS | Vanilla, ES6+ | No bundler. Loads instantly. |
| Fonts | Cormorant Garamond + Inter | Free Google Fonts, paired for elegance |
| Icons | Custom SVG | Inline, no external library |
| Images | Unsplash | Free for commercial use; swap with your own |

## 🌐 Browser Support

Works in every modern browser:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari iOS 14+
- ✅ Chrome Android 90+

## 📜 License

Premium template — one personal or commercial project per license. Re-sale
or redistribution as a template/theme is not permitted. See [LICENSE.md](LICENSE.md)
for full terms.

## 💬 Support

Need help customizing? `support@trendora.com`

Built with ❤ by **Trendora Studio**.
