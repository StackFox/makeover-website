# Venus Makover — Salon Website

A modern, fully responsive website for the **Venus Makover** luxury salon, built with **React (Vite)**. No server required — deploys as a static site.

## Features

- **Immersive service catalog** — 17 services across 6 categories (Hair, Skin, Makeup, Nails, Bridal, Spa) with category filters, animated cards, and detail modals
- **Animated hero** — auto-swiping image slideshow with smooth fade transitions, twinkling sparkles, mouse-parallax glow orbs
- **WhatsApp booking** — validated booking form that sends pre-filled messages via WhatsApp deep links
- **Location section** — embedded Google Maps with address, opening hours, and contact details
- **Light/dark theme toggle** — persisted in `localStorage`, applied before first paint
- **Accessible & responsive** — ARIA labels, keyboard navigation, `prefers-reduced-motion` support, mobile-first layout

## Brand palette

| Color | Hex |
| --- | --- |
| Vivid Pink (primary) | `#f3006d` |
| Electric Yellow (accent) | `#fff22d` |
| Blush Pink (soft) | `#ffa9ce` |
| Warm Brown | `#905637` |
| Deep Maroon | `#8d1341` |

## Project structure

```
├── client/               # React + Vite frontend (static, no server needed)
│   ├── src/
│   │   ├── components/   # Navbar, Hero, Catalog, ServiceModal, Booking, Location, ...
│   │   ├── data/         # Service catalog + WhatsApp helpers
│   │   └── styles.css    # Theme variables + all styling
│   └── vite.config.js    # GitLab Pages base path
└── .gitlab-ci.yml        # Builds the client and deploys to GitLab Pages
```

## Getting started

```bash
cd client
npm install
npm run dev    # http://localhost:5173
```

### Production build

```bash
cd client && npm run build   # outputs client/dist (static files, ready to deploy)
```

## Deployment

Deploy `client/dist` as static files to any hosting platform:

- **GitLab Pages** — CI builds and deploys automatically on push to the default branch
- **Vercel / Netlify / Cloudflare Pages** — connect your repo, set the build command to `cd client && npm run build` and output directory to `client/dist`

No server or database required.

## Before going live

- [ ] Replace `WHATSAPP_NUMBER` in `client/src/data/services.js` with the salon's real number
- [ ] Replace the address, phone, and map coordinates in `client/src/components/ExpandedExperience.jsx`
- [ ] Replace the hero slideshow images with real salon photography
- [ ] Update service descriptions, prices, and durations as needed

## Documentation

- [AGENT.md](AGENT.md) — instructions for AI agents working on this repository
- [CONTEXT.md](CONTEXT.md) — business and technical context, decisions, and open TODOs
- [DESIGN.md](DESIGN.md) — design system: palette, typography, themes, and motion guidelines
