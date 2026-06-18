# CONTEXT.md — Project Context

## Business context

**Venus Makover** is a salon business. The website is its primary digital presence and must:

1. Showcase the full service catalog in an immersive, premium-feeling way
2. Let clients book a service on the website **or** via WhatsApp
3. Show the salon's location on a map

Target audience: local clients browsing on mobile; bridal clients researching packages. Tone: premium, warm, feminine, bold.

## Current state

- Single-page React app: Hero → Service Catalog → Booking → Location → Footer
- Express API: `GET /api/services`, `POST /api/bookings` (validated, in-memory store, returns booking reference), `GET /api/bookings`
- Light/dark theme toggle persisted in `localStorage`
- Hero: auto-swiping image slideshow (4.5s interval, swipe transition + Ken Burns zoom, dot navigation), rotating gradient headline word, sparkles, mouse-parallax glows
- WhatsApp booking via `wa.me` deep links with pre-filled messages
- CI deploys the client to GitLab Pages; client falls back to local data/demo booking when the API is unreachable

## Key decisions

| Decision | Rationale |
| --- | --- |
| Vite + React, no router/state lib | Single page; keep bundle and complexity minimal |
| Plain CSS with custom properties | Full control over theming; no framework lock-in |
| Catalog data duplicated client/server | GitLab Pages demo must work without a backend |
| In-memory booking store | Placeholder until a database is chosen |
| OpenStreetMap embed | No API key required |
| Emoji + gradient card visuals | No image licensing issues; fast loading |
| Unsplash hero images | Temporary until real salon photography is provided |

## Open TODOs

- [ ] Real WhatsApp number (`client/src/data/services.js`)
- [ ] Real address, phone, email, map coordinates (`client/src/components/Location.jsx`)
- [ ] Real salon photography for the hero slideshow (`client/src/components/Hero.jsx`)
- [ ] Persist bookings in a database (`server/index.js`)
- [ ] Host the backend (Render/Railway/VPS); point the client at it in production
- [ ] Add tests and linting
- [ ] Booking notifications (email/WhatsApp Business API) to staff

## History

1. **v1** — static HTML/CSS/JS site (gold/dark palette)
2. **v2** — rebuilt as React + Node.js; added theme toggle and enhanced hero animations
3. **v3 (current)** — new brand palette (`#f3006d`, `#fff22d`, `#ffa9ce`, `#905637`, `#8d1341`), hero image slideshow, project documentation
