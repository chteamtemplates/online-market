# Trendora — Seller Checklist

A step-by-step playbook for listing **Trendora** on digital marketplaces and starting to make sales. Follow it top-to-bottom for the fastest launch.

---

## Phase 1 — Pre-launch (1–2 days)

### 1. Set up a live demo
Buyers won't pay without seeing the product live. Pick one:

- [ ] **GitHub Pages** (free, takes 2 min):
  ```
  Settings → Pages → Source: Deploy from branch → main / root → Save
  ```
  Or use the auto-deploy workflow already included in `.github/workflows/pages.yml` — every push to `main` auto-deploys.

- [ ] **Netlify Drop** (free, drag & drop the folder onto netlify.com/drop)

- [ ] **Vercel** (free, `vercel deploy`)

Save the demo URL — you'll need it everywhere.

### 2. Capture marketing visuals (1 hour)
Take **at least 6 screenshots**, ideally:
- Hero of home page (desktop)
- Shop page with filters
- Product detail page with gallery
- Sliding cart drawer open
- Checkout 3-step form
- Mobile view (use Chrome DevTools → iPhone 14 Pro)

Recommended size for ThemeForest preview: **590 × 300 px** (thumbnail) and **590 × full-height** (preview page).

Free mockup tools:
- [smartmockups.com](https://smartmockups.com) — drop your screenshot, get device mockups
- [shotsnapp.com](https://shotsnapp.com) — quick browser mockups
- Figma → use the free "Browser Mockup" community templates

### 3. Record a 30–60 second walkthrough video
Use OBS, Loom, or your phone screen recording. Show:
1. Home page hero (3s)
2. Shop page filtering (8s)
3. Open a product, change variants (8s)
4. Add to cart, open cart drawer (5s)
5. Go to checkout, apply promo code, submit (10s)

Export as MP4 (≤ 50 MB). Upload to YouTube **unlisted** for embedding.

### 4. Write your seller bio
2–3 sentences. Example:
> *"Web designer & developer building premium ecommerce templates for indie brands. Every template I sell is hand-crafted, fully commented, and tested end-to-end. Free updates for life."*

---

## Phase 2 — Launch on Gumroad (fastest, same-day money)

Gumroad is the lowest-friction path: you can be selling in **30 minutes**.

### Steps
1. [ ] Create account at [gumroad.com](https://gumroad.com)
2. [ ] Click **+ New product** → **Digital product**
3. [ ] Title: `Trendora — Premium Fashion E-Commerce Template (HTML/CSS/JS)`
4. [ ] Price: **$19** (launch promo, will go to $29 after 30 days)
5. [ ] Upload `trendora-store.zip` (the sale package zip from this folder)
6. [ ] Cover: 1280 × 720 PNG with screenshot + tagline
7. [ ] Description: paste from `marketing-copy.md` → "Gumroad description"
8. [ ] Add a **demo URL** field
9. [ ] Add tags: `html template`, `ecommerce`, `fashion`, `vanilla javascript`, `responsive`
10. [ ] Enable **Pay what you want** (optional) with $19 minimum
11. [ ] Publish.

### After publishing
- Share the link on Twitter, Reddit (r/webdev, r/SideProject, r/Entrepreneur), Hacker News (Show HN), LinkedIn, Indie Hackers, Product Hunt (schedule for Tuesday).

---

## Phase 3 — Submit to ThemeForest (highest revenue, slowest)

ThemeForest has the largest buyer base for HTML templates but takes 1–2 weeks to approve.

### Pre-submission checklist
- [ ] Live preview URL works (HTTPS required)
- [ ] No console errors when navigating any page
- [ ] All links work (no 404s)
- [ ] All images have `alt` attributes
- [ ] All forms validate
- [ ] Mobile responsive on iPhone SE (375px)
- [ ] Documentation HTML is included (`documentation.html`)
- [ ] License files included (`LICENSE.md` + `LICENSE-EXTENDED.md`)
- [ ] Cover image: 590 × 300 px (thumbnail)
- [ ] Preview page: 590 × 3000 px or longer (the long screenshot showing all pages)
- [ ] At least 5 inline preview screenshots

### Steps
1. [ ] Become an Envato author at [themeforest.net](https://themeforest.net) → **Become an author**
2. [ ] Click **Upload** → **Site Templates** → **Specialty Pages** → **Retail**
3. [ ] Title: `Trendora — Premium Fashion E-Commerce HTML Template`
4. [ ] Price: $14 (Regular) / $99 (Extended)
5. [ ] Tags (max 15): paste from `seo-keywords.md`
6. [ ] Description: paste from `marketing-copy.md` → "ThemeForest item description"
7. [ ] Upload `trendora-store.zip`, cover image, preview page, 5+ inline screenshots
8. [ ] Submit for review

### Common rejection reasons (and how to avoid)
- ❌ **Outdated jQuery / unused libraries** → Trendora has none, you're safe.
- ❌ **Console errors** → run DevTools Console, fix any warnings before submitting.
- ❌ **Inconsistent design** → keep typography + spacing consistent across pages.
- ❌ **Missing documentation** → include `documentation.html` (we did).
- ❌ **License headers missing** → both license files included.

---

## Phase 4 — List on Lemon Squeezy (best for tax handling)

Lemon Squeezy auto-handles VAT, sales tax, and global tax compliance. Great for international sales.

1. [ ] Sign up at [lemonsqueezy.com](https://lemonsqueezy.com)
2. [ ] Create a store
3. [ ] **+ New Product** → **Digital download**
4. [ ] Title, description (from `marketing-copy.md`), price ($19–$29)
5. [ ] Upload zip
6. [ ] Customize checkout page colors to match Trendora (gold accent)
7. [ ] Publish

---

## Phase 5 — Promote (continuous)

### Reddit (free, high traffic)
- r/webdev — *"Show: I built a fashion ecommerce template with vanilla JS, no framework"*
- r/SideProject — *"Launched my first template on Gumroad — feedback welcome"*
- r/Entrepreneur — *"Quit my job to sell templates — here's my first one"*

⚠️ Read each subreddit's self-promotion rules. Most allow self-promo if you contribute first.

### Hacker News
- Title: `Show HN: Trendora – Premium fashion ecommerce template, no framework, no build step`
- Submit between 6–9 AM PT on Monday-Thursday for max visibility.
- Be ready to respond to comments — engagement boosts ranking.

### Twitter / X
- Build in public: tweet WIP screenshots, design decisions
- Use hashtags: `#webdev` `#ecommerce` `#htmlcss` `#indiehacker`
- Tag relevant accounts: `@gumroad`, `@indiehackers`, `@producthunt`

### Product Hunt
- Submit on Sunday for Tuesday launch (best day)
- Get 5 friends to upvote + comment in first hour
- Add a discount code (e.g., `PRODUCTHUNT` for 20% off)

### Dev.to / Hashnode
- Write a tutorial: *"How I built a fashion ecommerce template with 0 dependencies"*
- Mention your template at the end with a link
- Cross-post on Medium for SEO backlinks

### Pinterest
- Pin all your screenshots with descriptive titles
- Pinterest drives long-tail traffic for fashion-related templates

### Cold outreach (advanced)
- Find 50 small fashion brands on Instagram with weak websites
- DM them: *"Saw your store, love your products. I built a free demo of how your site could look — [demo URL]. If you like it, I sell the template for $29."*

---

## Phase 6 — Iterate & expand

Once you have **10+ sales**:
- [ ] Raise price to $29 (your reviews are now your social proof)
- [ ] Launch v1.1 with a new feature → email past buyers about the free update
- [ ] Build a second template with the same design system → cross-sell as a bundle
- [ ] Consider creating a custom landing page on `trendora.dev` (or similar)
- [ ] Open a Discord/Slack community for buyers (high retention)

---

## Quick math

| Metric | Conservative | Optimistic |
|--------|---|---|
| Sales/month at $19 | 5 | 30 |
| Gross | $95 | $570 |
| Gumroad fee (10%) | -$9.50 | -$57 |
| **Net** | **$85.50** | **$513** |

Add ThemeForest sales (typically 30–50 per month for a quality template once mature):
- 30 sales × $14 × 50% author share = **$210/mo extra**

After 6 months with consistent promotion, expect **$300–$1,500/month passive income** from this one template.

---

## Need help?

If you get stuck on any step, message me. I built it — I can help you sell it.
