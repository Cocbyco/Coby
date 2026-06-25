# EcoGrow Co. — Shopify Theme

A custom Shopify Dawn-based theme for **EcoGrow Co.** — an eco-friendly gardening dropshipping store.

## Brand Identity
- **Colors**: Deep Forest Green (#1B4332), Sage Green (#95B46A), Warm Neutral (#F5F0EB)
- **Accent**: Terracotta (#C26A4A)
- **Fonts**: Playfair Display (headings) + Inter (body) — Google Fonts
- **Tagline**: "Grow Greener"

## Theme Structure
```
ecogrow-theme/
├── assets/          # CSS, JS, images (logo, banner)
├── config/          # Theme settings & settings_data
├── layout/          # theme.liquid layout
├── locales/         # English translations
├── sections/        # Reusable section blocks (14 sections)
├── snippets/        # meta-tags snippet
└── templates/       # JSON templates (7 templates)
```

## Pages Included
- **Homepage** (index.json): Hero, featured products (5), value propositions
- **Product page** (product.json): Full product detail with add-to-cart
- **Collection page** (collection.json): Product grid with header
- **About Us** (page.about.json): Brand story + mission pillars
- **FAQ** (page.faq.json): 15 accordion questions
- **Contact** (page.contact.json): Form with subject dropdown
- **Default page** (page.json): Generic content page

## Product Data (Top 5)
1. Heart-Shaped Fruit Molds — 4-Pack ($14.99)
2. Biodegradable Nursery Bags — 100-Pack ($12.99)
3. Desktop Hydroponics Station ($19.99)
4. Stainless Steel Hollow Hoe ($19.99)
5. Solar Powered Pond Fountain ($34.99)

## How to Upload
1. Go to Shopify Admin → Online Store → Themes
2. Click "Add theme" → "Upload zip file"
3. Select `ecogrow-theme.zip`
4. Click "Publish"

## Post-Upload Setup
1. Go to Theme Settings to review colors
2. Add logo image in Header section settings
3. Create products in Shopify admin matching the 5 products above
4. Create pages: About, FAQ, Contact
5. Set up navigation menu
6. Configure email flows via Shopify Email
7. Connect CJ Dropshipping for fulfillment