# AZDEX Chemicals Website

Product-led, enquiry-led B2B website for **AZDEX Chemicals**, an industrial commodities and raw
materials supplier. Built with **React + Vite + React Router** and **Framer Motion**.

> Industrial Commodities & Raw Materials
> Connecting Global Supply with Industrial Buyers.

## Tech stack

- **React 18** + **Vite 5** (fast dev server and build)
- **React Router 6** (multi-page navigation with dynamic product routes)
- **Framer Motion** for scroll reveals, the hero marquee, count-ups and hover motion
- Plain CSS design system (no UI framework); brand tokens live in `src/index.css`

## Brand

| Token | Value | Use |
| ----- | ----- | --- |
| Navy  | `#16294F` | Primary brand, headings, dark sections |
| Gold  | `#F2B829` | Accent, CTAs, highlights |

Type: **Fraunces** (display) + **Inter** (body) + **JetBrains Mono** (labels), via Google Fonts.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Site structure

| Route | Page |
| ----- | ---- |
| `/` | Home (hero, ticker, stats, product index, industries, why, markets, RFQ) |
| `/about` | About Us (intro, what/who we serve, how we work, buyer expectations) |
| `/products` | Products overview |
| `/products/:slug` | Dynamic product page (urea, soda ash, caustic soda, PVC resin, melamine) |
| `/industries` | Industries we supply |
| `/markets` | Markets we serve (India, Middle East, Africa, Southeast Asia) |
| `/contact` | Contact + full enquiry form |
| `/privacy-policy` | Privacy Policy (DPDP-aware notice) |
| `/terms` | Terms & Conditions |

## Content & data

All product, industry and market copy lives in `src/data/` and is rendered through shared
components. To add a product, append an entry to `src/data/products.js`. The product page,
navigation dropdown, footer and home grid update automatically.

## Deployment

Configured for GitHub Pages under the `/azdex-website/` base path (`vite.config.js`), with a
`404.html` SPA redirect so deep links resolve to the React Router app.

## Notes

- The enquiry forms are front-end only in this build (they show a success confirmation). To go live,
  wire `EnquiryForm` `onSubmit` to an email service or backend endpoint.
- Logo assets live in `public/` (`logo-full.svg`, `logo-icon.svg`, `logo-wordmark.svg` and on-dark
  variants).
