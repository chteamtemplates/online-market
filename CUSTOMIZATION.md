# Customization Guide

Trendora is built with **vanilla HTML, CSS, and JavaScript** — no build step,
no dependencies. Open any `.html` file in your browser and the entire shop
runs locally. This guide walks you through the most common customizations.

---

## 1. Brand Colors

All brand colors live in CSS variables at the top of `style.css`:

```css
:root {
  --gold: #B8935A;       /* primary brand accent */
  --gold-light: #D4B584;
  --gold-dark: #8B6F3E;
  --ink: #1A1A1A;        /* primary dark */
  --bg: #FFFFFF;
  --bg-soft: #FAF8F3;
  /* ... */
}
```

Change these values once and the entire site updates.

## 2. Logo

The logo is text-only (no image required). Edit the markup in every page:

```html
<a href="index.html" class="logo">Trend<span>o</span>ra</a>
```

Or replace it with your own SVG/image:

```html
<a href="index.html" class="logo">
  <img src="my-logo.svg" alt="My Brand" height="32">
</a>
```

## 3. Products

All products live in the `PRODUCTS` array at the top of `store.js`. Each entry
follows this shape:

```javascript
{
  id: 1,
  name: 'Classic Beige Trench Coat',
  brand: 'Trendora Classic',
  price: 189,
  oldPrice: null,                    // or a number for sale price
  category: 'Men',                   // 'Men' | 'Women' | 'Shoes' | 'Accessories'
  badge: 'New',                      // 'New' | 'Sale' | 'Best Seller' | null
  color: '#C4A882',                  // fallback color block if image fails
  rating: 4.8,                       // out of 5
  reviews: 124,
  stock: 12,
  image: 'https://.../photo.jpg',
  gallery: ['url1', 'url2'],         // optional product detail gallery
  desc: 'Crafted from luxurious...'
}
```

Add, remove, or edit entries — the home page, shop, product detail, and offers
pages all reload automatically from this single source.

### Local images

To use your own images, create an `images/` folder and reference them:

```javascript
image: 'images/coat-1.jpg',
gallery: ['images/coat-1.jpg', 'images/coat-2.jpg']
```

## 4. Currency

By default, prices are formatted with the `$` symbol via the `formatPrice()`
function in `store.js`:

```javascript
function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}
```

Replace with `€`, `£`, `¥`, or use `Intl.NumberFormat` for locale-aware
formatting:

```javascript
function formatPrice(amount) {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
}
```

## 5. Promo Codes

Edit the `PROMO_CODES` object near the top of `store.js`:

```javascript
const PROMO_CODES = {
  TRENDORA10: { type: 'percent', value: 0.10, label: '10% off' },
  WELCOME20:  { type: 'percent', value: 0.20, label: '20% welcome bonus' },
  FREESHIP:   { type: 'shipping', value: 0,    label: 'Free shipping' }
};
```

## 6. Connect a Real Backend

This template is **frontend-only**. Cart and orders persist in the browser via
LocalStorage. To accept real orders, replace the form submission handler in
`checkout.html` with an API call:

```javascript
document.getElementById('co-form').onsubmit = async (e) => {
  e.preventDefault();
  const orderData = {
    customer: { /* read fields */ },
    items: cart,
    total: getCartTotal()
  };
  const response = await fetch('https://your-api.com/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  // ... handle response
};
```

Popular options for backends without a server:

- **Formspree** (`formspree.io`) — turn the contact form into real emails.
- **Netlify Forms** — works automatically when deployed on Netlify.
- **Stripe Checkout** — replace `Confirm Order` with a Stripe redirect.
- **Shopify Buy SDK** — connect the cart to a Shopify backend.

## 7. RTL (Right-to-Left) Languages

Add `dir="rtl"` to the `<html>` tag for Arabic, Hebrew, etc. The CSS already
includes RTL overrides for the cart drawer and shop sidebar:

```html
<html lang="ar" dir="rtl">
```

## 8. Deploy

The template is a static site. Pick any hosting:

### GitHub Pages
1. Push the repo to GitHub.
2. *Settings → Pages → Deploy from branch → main / (root)*.
3. Visit `https://username.github.io/repo/`.

### Netlify
Drag-and-drop the project folder onto [app.netlify.com](https://app.netlify.com).

### Vercel
```bash
npx vercel --prod
```

### cPanel / FTP
Upload all files to your `public_html/` folder.

## 9. SEO Checklist

- [ ] Update `<title>` and `<meta name="description">` per page.
- [ ] Replace `https://trendora.example.com` in `sitemap.xml` and Open Graph
      tags with your real domain.
- [ ] Replace the JSON-LD `Store` block in `index.html` with your real store
      details.
- [ ] Submit your `sitemap.xml` to Google Search Console.

## 10. Performance Tips

- Compress your product images (use WebP, max 200 KB each).
- Add `loading="lazy"` to all `<img>` tags below the fold (already applied).
- Minify `style.css` and `store.js` for production.
- Enable Gzip/Brotli on your web server.

---

Need help? Email `support@trendora.com` or open an issue on the repo.
