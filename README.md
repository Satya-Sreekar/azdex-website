# AZDEX Chemicals — Website

Product-led, enquiry-led B2B website for **AZDEX Chemicals** — an industrial commodities and raw
materials supplier. Built with **React + Vite + React Router**.

> Industrial Commodities & Raw Materials
> Connecting Global Supply with Industrial Buyers.

## Tech stack

- **React 18** + **Vite 5** (fast dev server & build)
- **React Router 6** (multi-page navigation with dynamic product routes)
- Plain CSS design system (no UI framework) — brand tokens in `src/index.css`

## Brand

| Token | Value | Use |
| ----- | ----- | --- |
| Navy  | `#16294F` | Primary brand, headings, dark sections |
| Gold  | `#F2B829` | Accent, CTAs, highlights |

Fonts: **Sora** (headings) + **Inter** (body) via Google Fonts.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Site structure

| Route | Page |
| ----- | ---- |
| `/` | Home — hero, trust strip, featured products, industries, why AZDEX, markets, RFQ form |
| `/about` | About Us — intro, what/who we serve, how we work, buyer expectations |
| `/products` | Products overview |
| `/products/:slug` | Dynamic product page (urea, soda ash, caustic soda, PVC resin, melamine) |
| `/industries` | Industries we supply |
| `/markets` | Markets we serve (India, Middle East, Africa, Southeast Asia) |
| `/contact` | Contact + full enquiry form |
| `/privacy-policy` | Privacy Policy (DPDP-aware notice) |
| `/terms` | Terms & Conditions |

## Content & data

All product, industry and market copy lives in `src/data/` and is rendered through shared
components. To add a product, append an entry to `src/data/products.js` — the product page,
navigation dropdown, footer and home grid update automatically.

## Notes

- The enquiry forms are front-end only in this build (they show a success confirmation). To go live,
  wire `EnquiryForm` `onSubmit` to an email service or backend endpoint.
- The logo lives at `public/logo.jpeg`.
