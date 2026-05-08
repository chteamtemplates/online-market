/* ==========================================================================
   TRENDORA — Premium E-Commerce Template
   Version: 3.0
   --------------------------------------------------------------------------
   File: store.js
   Description: All shop logic — products data, cart, wishlist, rendering,
                filters, search, sort, checkout helpers, UI utilities.

   Sections:
     1. Product Catalog (PRODUCTS array — edit to customize your shop)
     2. Promo Codes
     3. SVG Icon Library
     4. Cart State (LocalStorage)
     5. Wishlist State (LocalStorage)
     6. Currency Formatter
     7. UI Renderers (cart drawer, wishlist, product cards)
     8. Filtering / Sorting / Search
     9. Toast Notifications
     10. Boot — DOM ready
   ========================================================================== */

/* -------------------------------------------------------------------------- */
/* 1. PRODUCT CATALOG                                                         */
/*    Replace, edit, or extend this array to customize the shop.              */
/*    Image URLs use Unsplash for free demo photos. Swap with your own.       */
/*    Each product supports a `gallery` array for the detail page.            */
/* -------------------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: 1,
    name: 'Classic Beige Trench Coat',
    brand: 'Trendora Classic',
    price: 189,
    oldPrice: null,
    category: 'Men',
    badge: 'New',
    color: '#C4A882',
    rating: 4.8,
    reviews: 124,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Crafted from luxurious Italian wool, this timeless trench coat brings refined elegance to every formal occasion. Tailored fit, premium lining, signature gold buttons.'
  },
  {
    id: 2,
    name: 'Elegant Black Tailored Suit',
    brand: 'Trendora Elite',
    price: 249,
    oldPrice: 349,
    category: 'Men',
    badge: 'Sale',
    color: '#2C2C2A',
    rating: 4.9,
    reviews: 86,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'A modern silhouette suit cut for business, weddings, and gala nights. Pure wool blend with subtle texture and impeccable shoulder structure.'
  },
  {
    id: 3,
    name: 'Luxury Italian Leather Bag',
    brand: 'Trendora Classic',
    price: 219,
    oldPrice: null,
    category: 'Accessories',
    badge: 'Best Seller',
    color: '#4A4038',
    rating: 4.7,
    reviews: 198,
    stock: 24,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Hand-stitched genuine Italian leather. Spacious interior with multiple compartments. A statement piece that ages beautifully with use.'
  },
  {
    id: 4,
    name: 'Premium Cashmere Scarf',
    brand: 'Trendora Elite',
    price: 79,
    oldPrice: null,
    category: 'Accessories',
    badge: 'New',
    color: '#B4B2A9',
    rating: 4.6,
    reviews: 47,
    stock: 36,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Soft 100% Mongolian cashmere in classic neutral tones. Lightweight warmth, hand-finished edges, sustainably sourced.'
  },
  {
    id: 5,
    name: 'Classic Evening Dress',
    brand: 'Trendora Dame',
    price: 175,
    oldPrice: 229,
    category: 'Women',
    badge: 'Sale',
    color: '#1a1a2e',
    rating: 4.9,
    reviews: 156,
    stock: 6,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'A refined floor-length evening gown for galas and special events. Sculpted bodice, flowing skirt, French silk lining.'
  },
  {
    id: 6,
    name: 'Handcrafted Leather Oxford',
    brand: 'Trendora Classic',
    price: 149,
    oldPrice: null,
    category: 'Shoes',
    badge: 'New',
    color: '#3D2B1F',
    rating: 4.7,
    reviews: 92,
    stock: 18,
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Goodyear-welted Oxford shoes in full-grain leather. Comfortable molded sole, classic broguing, timeless polish.'
  },
  {
    id: 7,
    name: 'Modern Luxury Abaya',
    brand: 'Trendora Dame',
    price: 169,
    oldPrice: null,
    category: 'Women',
    badge: 'Best Seller',
    color: '#1C1C1C',
    rating: 4.8,
    reviews: 213,
    stock: 14,
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'A modern interpretation of the traditional silhouette. Premium flowing fabric, subtle hand embroidery, elegant in every setting.'
  },
  {
    id: 8,
    name: 'Gold Classic Wristwatch',
    brand: 'Trendora Elite',
    price: 349,
    oldPrice: 449,
    category: 'Accessories',
    badge: 'Sale',
    color: '#C9A84C',
    rating: 4.9,
    reviews: 167,
    stock: 9,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&auto=format&fit=crop',
    ],
    desc: '40mm 18K gold-plated case with sapphire crystal and Italian leather strap. Sapphire-back automatic movement, 5 ATM water resistance.'
  },
  {
    id: 9,
    name: 'Floral Summer Dress',
    brand: 'Trendora Dame',
    price: 89,
    oldPrice: null,
    category: 'Women',
    badge: 'New',
    color: '#C4785A',
    rating: 4.5,
    reviews: 64,
    stock: 22,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Lightweight floral midi for summer outings, brunches, and beach days. Breathable cotton blend, sustainable production.'
  },
  {
    id: 10,
    name: 'White Leather Sneakers',
    brand: 'Trendora Classic',
    price: 119,
    oldPrice: 145,
    category: 'Shoes',
    badge: 'Sale',
    color: '#E8E5DE',
    rating: 4.6,
    reviews: 142,
    stock: 28,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Sleek minimalist sneakers in soft full-grain leather. Cushioned insole, signature gold-tone heel tab, casual-meets-smart styling.'
  },
  {
    id: 11,
    name: 'Cashmere Roll-Neck Sweater',
    brand: 'Trendora Classic',
    price: 139,
    oldPrice: null,
    category: 'Men',
    badge: 'New',
    color: '#3F3F3F',
    rating: 4.7,
    reviews: 58,
    stock: 16,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Pure cashmere roll-neck for refined autumn layering. Ultra-soft fibers, fitted shape, easy care.'
  },
  {
    id: 12,
    name: 'Silk Pearl Necklace',
    brand: 'Trendora Elite',
    price: 159,
    oldPrice: null,
    category: 'Accessories',
    badge: null,
    color: '#F2EBE0',
    rating: 4.8,
    reviews: 78,
    stock: 20,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Hand-strung freshwater pearls on natural silk. Adjustable length, gold-plated clasp, presented in a velvet gift box.'
  },
  {
    id: 13,
    name: 'Tailored Linen Shirt',
    brand: 'Trendora Classic',
    price: 79,
    oldPrice: 99,
    category: 'Men',
    badge: 'Sale',
    color: '#E0DACB',
    rating: 4.5,
    reviews: 49,
    stock: 32,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Pure European linen shirt for breezy summer wear. Mother-of-pearl buttons, slim modern fit, breathable comfort.'
  },
  {
    id: 14,
    name: 'Heeled Leather Sandals',
    brand: 'Trendora Dame',
    price: 129,
    oldPrice: null,
    category: 'Shoes',
    badge: 'New',
    color: '#B79376',
    rating: 4.6,
    reviews: 33,
    stock: 11,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Elegant 7cm-heeled sandals in butter-soft leather. Adjustable ankle strap, padded sole, all-day comfort.'
  },
  {
    id: 15,
    name: 'Silk Statement Earrings',
    brand: 'Trendora Elite',
    price: 69,
    oldPrice: null,
    category: 'Accessories',
    badge: null,
    color: '#D4AF37',
    rating: 4.7,
    reviews: 91,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1535632066274-36d731154e5d?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1535632066274-36d731154e5d?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'Lightweight gold-plated statement earrings. Hypoallergenic, secure butterfly backs, gift-ready packaging.'
  },
  {
    id: 16,
    name: 'Wool Pleated Trousers',
    brand: 'Trendora Dame',
    price: 119,
    oldPrice: 159,
    category: 'Women',
    badge: 'Sale',
    color: '#5C5C5C',
    rating: 4.6,
    reviews: 44,
    stock: 17,
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80&auto=format&fit=crop',
    ],
    desc: 'High-waisted pleated wool trousers with a tailored fit. Side pockets, hidden zip, flowing drape.'
  }
];

/* -------------------------------------------------------------------------- */
/* 2. PROMO CODES                                                             */
/* -------------------------------------------------------------------------- */
const PROMO_CODES = {
  TRENDORA10: { type: 'percent', value: 0.10, label: '10% off your order' },
  SUMMER25:   { type: 'percent', value: 0.25, label: '25% off summer collection' },
  FREESHIP:   { type: 'shipping', value: 0,    label: 'Free shipping' }
};

/* -------------------------------------------------------------------------- */
/* 3. SVG ICON LIBRARY                                                        */
/*    Returns an inline SVG string for the requested icon name.               */
/* -------------------------------------------------------------------------- */
const ICONS = {
  bag:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7V5a4 4 0 0 1 8 0v2"/><path d="M3 7h14l-1.2 13.4a2 2 0 0 1-2 1.6H6.2a2 2 0 0 1-2-1.6L3 7Z"/></svg>',
  cart:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h2l2 14h13l2-9H6"/><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/></svg>',
  heart:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/></svg>',
  heartFill:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/></svg>',
  search:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  user:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  star:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/></svg>',
  starHalf: '<svg viewBox="0 0 24 24"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#half)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/></svg>',
  starOutline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/></svg>',
  close:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  arrowR:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  truck:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17V5h12v12"/><path d="M15 9h4l3 4v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  refresh:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 21v-5h5"/></svg>',
  shield:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  award:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m9 14-2 7 5-3 5 3-2-7"/></svg>',
  check:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 10 17l9-9"/></svg>',
  filter:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18"/><path d="M6 12h12"/><path d="M10 19h4"/></svg>',
  pin:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  phone:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 5.1 1 1 0 0 1 3 4h4.1a1 1 0 0 1 1 .8l1 4a1 1 0 0 1-.3 1l-2.2 2.2a16 16 0 0 0 6.4 6.4l2.2-2.2a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .8 1Z"/></svg>',
  mail:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m2 7 10 7 10-7"/></svg>',
  chat:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 1 1-3.4-6.5L21 4l-1.5 3.4A8 8 0 0 1 21 12Z"/><path d="M9 11h6M9 14h4"/></svg>',
  ig:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>',
  fb:       '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V9Z"/></svg>',
  tw:       '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 5.6a8 8 0 0 1-2.3.6 4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.6 1 4 4 0 0 0-6.8 3.7A11.4 11.4 0 0 1 3 4.7a4 4 0 0 0 1.2 5.4 4 4 0 0 1-1.8-.5v.05a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.07 4 4 0 0 0 3.7 2.8 8 8 0 0 1-5 1.7A11.4 11.4 0 0 0 8.5 20c7.4 0 11.5-6.2 11.5-11.5v-.5A8 8 0 0 0 21 5.6Z"/></svg>',
  pin2:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6 2 4 6 4 9.5c0 3 2 5 3.5 5l-1 5.5h2L11 16c.4 0 .8.07 1 .07 6 0 8-4 8-7.5C20 5.6 17.5 2 12 2Z"/></svg>',
  zoom:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>',
  share:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 11 7.6-3.6M8.2 13l7.6 3.6"/></svg>',
  gift:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9"/><path d="M12 8v13"/><path d="M12 8a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z"/><path d="M12 8a3 3 0 1 0 3-3 3 3 0 0 0-3 3Z"/></svg>',
  leaf:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-4 3-7 8-9 6 0 9 3 9 9a7 7 0 0 1-7 7"/><path d="M3 21c4-4 8-7 12-7"/></svg>',
  scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m20 4-9.5 9.5"/><path d="m20 20-9.5-9.5"/></svg>'
};

function icon(name) { return ICONS[name] || ''; }

/* -------------------------------------------------------------------------- */
/* 4. CART STATE (LocalStorage)                                               */
/* -------------------------------------------------------------------------- */
let cart = JSON.parse(localStorage.getItem('trendora_cart') || '[]');

function saveCart() {
  localStorage.setItem('trendora_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ ...product, qty });
  saveCart();
  showToast('Added to your bag', 'success');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function updateQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else saveCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

/* -------------------------------------------------------------------------- */
/* 5. WISHLIST STATE                                                          */
/* -------------------------------------------------------------------------- */
let wishlist = JSON.parse(localStorage.getItem('trendora_wishlist') || '[]');

function saveWishlist() {
  localStorage.setItem('trendora_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function isInWishlist(id) {
  return wishlist.includes(id);
}

function toggleWishlist(id) {
  if (isInWishlist(id)) {
    wishlist = wishlist.filter(x => x !== id);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    showToast('Saved to wishlist', 'success');
  }
  saveWishlist();
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', isInWishlist(id));
    btn.innerHTML = isInWishlist(id) ? icon('heartFill') : icon('heart');
  });
}

function updateWishlistUI() {
  document.querySelectorAll('.wish-count').forEach(el => {
    const c = wishlist.length;
    el.textContent = c ? c : '';
  });
}

/* -------------------------------------------------------------------------- */
/* 6. CURRENCY FORMATTER                                                      */
/* -------------------------------------------------------------------------- */
function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}

/* -------------------------------------------------------------------------- */
/* 7. UI RENDERERS                                                            */
/* -------------------------------------------------------------------------- */

/* --- Star rating helper --- */
function renderStars(rating) {
  let html = '';
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  for (let i = 0; i < full; i++) html += icon('star');
  if (half) html += icon('starHalf');
  for (let i = full + (half ? 1 : 0); i < 5; i++) html += icon('starOutline');
  return html;
}

/* --- Product image helper (with fallback color block) --- */
function productImg(p, classExtra = '') {
  if (p.image) {
    return `<img src="${p.image}" alt="${p.name}" loading="lazy" class="${classExtra}"
      onerror="this.outerHTML='<div class=&quot;product-color-fallback&quot; style=&quot;background:${p.color}&quot;>${p.name}</div>'">`;
  }
  return `<div class="product-color-fallback ${classExtra}" style="background:${p.color}">${p.name}</div>`;
}

/* --- Cart item small image --- */
function cartItemImg(item) {
  if (item.image) {
    return `<div class="cart-item-img"><img src="${item.image}" alt="${item.name}" loading="lazy"
      onerror="this.outerHTML='<div class=&quot;product-color-fallback&quot; style=&quot;background:${item.color}&quot;></div>'"></div>`;
  }
  return `<div class="cart-item-img"><div class="product-color-fallback" style="background:${item.color}"></div></div>`;
}

/* --- Cart drawer renderer --- */
function updateCartUI() {
  document.querySelectorAll('.cart-count').forEach(el => {
    const c = getCartCount();
    el.textContent = c ? c : '';
  });
  renderCartDrawer();
}

function renderCartDrawer() {
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!body) return;

  if (!cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        ${icon('bag')}
        <p>Your bag is empty</p>
        <a href="products.html" class="btn btn-primary">Start Shopping</a>
      </div>`;
    if (footer) footer.classList.remove('show');
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      ${cartItemImg(item)}
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <a href="product.html?id=${item.id}" class="cart-item-name">${item.name}</a>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-qty">
          <button onclick="updateQty(${item.id}, -1)" aria-label="Decrease">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, 1)" aria-label="Increase">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');

  if (footer) {
    footer.classList.add('show');
    const subtotal = getCartTotal();
    const shipping = subtotal >= 100 ? 0 : 15;
    footer.innerHTML = `
      <div class="cart-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
      <div class="cart-row"><span>Shipping</span><span>${shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
      <div class="cart-row total"><span>Total</span><span>${formatPrice(subtotal + shipping)}</span></div>
      <div class="cart-actions">
        <a href="checkout.html" class="btn btn-primary btn-block">Checkout ${icon('arrowR')}</a>
        <button class="btn btn-ghost btn-block" onclick="toggleCart()">Continue Shopping</button>
      </div>
    `;
  }
}

/* --- Toggle cart drawer --- */
function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer) return;
  drawer.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

/* --- Product card renderer (used in grids) --- */
function renderProductCard(p) {
  const inWish = isInWishlist(p.id);
  const badge = p.badge ? `<span class="badge ${p.badge.toLowerCase().replace(' ','-')}">${p.badge}</span>` : '';
  const oldPrice = p.oldPrice ? `<span class="old">${formatPrice(p.oldPrice)}</span>` : '';
  const save = p.oldPrice ? `<span class="save">-${Math.round((1 - p.price / p.oldPrice) * 100)}%</span>` : '';
  return `
    <div class="product-card">
      <div class="product-img">
        <a href="product.html?id=${p.id}">${productImg(p)}</a>
        <div class="product-badges">${badge}</div>
        <div class="product-quick">
          <button data-wish="${p.id}" class="${inWish ? 'active' : ''}"
            aria-label="Add to wishlist" onclick="toggleWishlist(${p.id})">
            ${inWish ? icon('heartFill') : icon('heart')}
          </button>
        </div>
        <div class="product-actions">
          <button onclick="addToCart(${p.id})">${icon('bag')} Add to Bag</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <a href="product.html?id=${p.id}" class="product-name">${p.name}</a>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span>(${p.reviews})</span>
        </div>
        <div class="product-price">${formatPrice(p.price)} ${oldPrice} ${save}</div>
      </div>
    </div>
  `;
}

function renderProducts(list, gridId = 'products-grid') {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `
      <div class="no-results">
        ${icon('search')}
        <h3>No products found</h3>
        <p>Try adjusting your filters or search terms.</p>
      </div>`;
    return;
  }
  grid.innerHTML = list.map(renderProductCard).join('');

  const countEl = document.querySelector('.results-count');
  if (countEl) {
    countEl.textContent = `${list.length} ${list.length === 1 ? 'product' : 'products'}`;
  }
}

/* -------------------------------------------------------------------------- */
/* 8. FILTERING / SORTING / SEARCH                                            */
/* -------------------------------------------------------------------------- */
const ShopState = {
  category: 'All',
  sort: 'default',
  search: '',
  saleOnly: false,
  priceMax: 500
};

function applyFilters() {
  let result = [...PRODUCTS];

  // Category
  if (ShopState.category !== 'All') {
    result = result.filter(p => p.category === ShopState.category);
  }

  // Sale only
  if (ShopState.saleOnly) {
    result = result.filter(p => p.oldPrice);
  }

  // Search
  if (ShopState.search) {
    const q = ShopState.search.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // Price max
  result = result.filter(p => p.price <= ShopState.priceMax);

  // Sort
  switch (ShopState.sort) {
    case 'low':    result.sort((a, b) => a.price - b.price); break;
    case 'high':   result.sort((a, b) => b.price - a.price); break;
    case 'new':    result.sort((a, b) => b.id - a.id); break;
    case 'rating': result.sort((a, b) => b.rating - a.rating); break;
  }

  renderProducts(result);
}

/* -------------------------------------------------------------------------- */
/* 9. TOAST NOTIFICATIONS                                                     */
/* -------------------------------------------------------------------------- */
function showToast(msg, variant = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = '';
  if (variant) toast.classList.add(variant);
  toast.innerHTML = `${variant === 'success' ? icon('check') : ''}<span>${msg}</span>`;
  // Force reflow then animate in
  void toast.offsetWidth;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* -------------------------------------------------------------------------- */
/* 10. BOOT — DOM READY                                                       */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  updateWishlistUI();

  // Inject SVG icons in placeholders with [data-icon]
  document.querySelectorAll('[data-icon]').forEach(el => {
    el.innerHTML = icon(el.dataset.icon);
  });

  // Auto-init products grid (shop page)
  if (document.getElementById('products-grid')) {
    applyFilters();

    // Wire filter sidebar / toolbar
    const cat = document.getElementById('filter-cat');
    const sort = document.getElementById('sort-select');
    const sale = document.getElementById('filter-sale');
    const search = document.getElementById('search-input');
    const price = document.getElementById('price-range');
    const priceLabel = document.getElementById('price-label');

    cat?.addEventListener('change', e => { ShopState.category = e.target.value; applyFilters(); });
    sort?.addEventListener('change', e => { ShopState.sort = e.target.value; applyFilters(); });
    sale?.addEventListener('change', e => { ShopState.saleOnly = e.target.checked; applyFilters(); });
    search?.addEventListener('input', e => { ShopState.search = e.target.value; applyFilters(); });
    price?.addEventListener('input', e => {
      ShopState.priceMax = parseInt(e.target.value);
      if (priceLabel) priceLabel.textContent = '$0 — $' + e.target.value;
      applyFilters();
    });

    // Sidebar category list (clickable)
    document.querySelectorAll('[data-cat]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('[data-cat]').forEach(x => x.classList.remove('active'));
        el.classList.add('active');
        ShopState.category = el.dataset.cat;
        applyFilters();
      });
    });

    // Mobile filter drawer
    const sidebar = document.querySelector('.shop-sidebar');
    document.querySelector('.mobile-filter-btn')?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
    });
  }

  // FAQ accordion (works on contact + product pages)
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });

  // Mobile nav toggle
  document.querySelectorAll('.hamburger').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.mobile-nav')?.classList.toggle('open');
    });
  });
});
