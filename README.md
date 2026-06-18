# Venus Makover — Salon Website

A modern, fully responsive website for the **Venus Makover** luxury salon, built with a **React (Vite)** frontend and a **Node.js (Express)** backend.

## Features

- **Immersive service catalog** — 17 services across 6 categories (Hair, Skin, Makeup, Nails, Bridal, Spa) with category filters, animated cards, and detail modals
- **Animated hero** — auto-swiping image slideshow with Ken Burns zoom, rotating gradient headline, twinkling sparkles, mouse-parallax glow orbs
- **Dual booking flows** — validated on-site booking form (POSTs to the API) and WhatsApp deep links with pre-filled messages, plus a floating WhatsApp button
- **Location section** — embedded OpenStreetMap with address, opening hours, and contact details
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
├── client/            # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Navbar, Hero, Catalog, ServiceModal, Booking, Location, ...
│   │   ├── data/         # Service catalog + WhatsApp helpers
│   │   └── styles.css    # Theme variables + all styling
│   └── vite.config.js    # Dev proxy to the API, GitLab Pages base path
├── server/            # Node.js + Express backend
│   ├── index.js          # /api/services, /api/bookings, static client hosting
│   └── data/services.js  # Canonical service catalog
└── .gitlab-ci.yml     # Builds the client and deploys to GitLab Pages
```

## Getting started

```bash
# Terminal 1 — backend (http://localhost:3001)
cd server
npm install
npm run dev

# Terminal 2 — frontend (http://localhost:5173, proxies /api to :3001)
cd client
npm install
npm run dev
```

### Production build

```bash
cd client && npm run build   # outputs client/dist
cd ../server && npm start    # serves the API and the built client
```

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/services` | List services (optional `?category=` filter) |
| `POST` | `/api/bookings` | Create a booking (validated; returns a `reference`) |
| `GET` | `/api/bookings` | List received bookings (in-memory store) |

## Deployment

- **Frontend**: CI builds `client/` and publishes it to **GitLab Pages** on every push to the default branch. On Pages the booking form falls back to demo mode (no API).
- **Backend**: host `server/` on any Node platform (Render, Railway, a VPS, etc.). It also serves the built client, so a single Node host can run the whole app.

## Before going live

- [ ] Replace `WHATSAPP_NUMBER` in `client/src/data/services.js`
- [ ] Replace the address, phone, email, and map coordinates in `client/src/components/Location.jsx`
- [ ] Replace the hero slideshow images in `client/src/components/Hero.jsx` with real salon photography
- [ ] Swap the in-memory booking store in `server/index.js` for a database

## Documentation

- [AGENT.md](AGENT.md) — instructions for AI agents working on this repository
- [CONTEXT.md](CONTEXT.md) — business and technical context, decisions, and open TODOs
- [DESIGN.md](DESIGN.md) — design system: palette, typography, themes, and motion guidelines
