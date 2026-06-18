# AGENT.md — Instructions for AI Agents

This file tells AI coding agents how to work effectively in this repository.

## What this project is

A salon website for **Venus Makover**: React (Vite) frontend in `client/`, Node.js (Express) backend in `server/`. Single-page marketing + booking site. See `CONTEXT.md` for business context and `DESIGN.md` for the design system.

## Commands

| Task | Command |
| --- | --- |
| Install frontend deps | `cd client && npm install` |
| Run frontend dev server | `cd client && npm run dev` (port 5173, proxies `/api` to 3001) |
| Build frontend | `cd client && npm run build` (outputs `client/dist`) |
| Install backend deps | `cd server && npm install` |
| Run backend | `cd server && npm run dev` (port 3001, `--watch` mode) |

There is no test suite or linter configured yet. If you add one, document it here.

## Architecture rules

- **Frontend** is plain React 18 with hooks. No router, no state library, no CSS framework. Keep it that way unless explicitly asked.
- **Styling** lives entirely in `client/src/styles.css` using CSS custom properties and BEM-ish class names (`block__element--modifier`). Both themes are driven by variables on `[data-theme='dark']` and `[data-theme='light']`. Never hardcode theme-dependent colors in components; add a variable instead. Decorative brand-gradient hexes are allowed in CSS.
- **Service catalog data is duplicated on purpose**: `server/data/services.js` is canonical; `client/src/data/services.js` is the offline/Pages fallback. If you change one, change both.
- **Backend** is a single Express file (`server/index.js`) with an in-memory booking store. API routes live under `/api/*`; everything else falls through to the built client.
- The client must always degrade gracefully when the API is unreachable (GitLab Pages demo mode). Preserve the try/catch fallbacks in `Catalog.jsx` and `Booking.jsx`.

## Conventions

- Functional components, one component per file, default exports, `.jsx` extension.
- 2-space indentation, single quotes, semicolons.
- Animations: CSS keyframes/transitions only (no animation libraries). Respect the existing `prefers-reduced-motion` block.
- Accessibility is required: ARIA labels on interactive elements, keyboard handlers on clickable non-buttons, alt/aria text for imagery.

## Known placeholders (do not "fix" silently)

- `WHATSAPP_NUMBER` in `client/src/data/services.js` is a placeholder (`911234567890`).
- Address/coordinates in `client/src/components/Location.jsx` are placeholders (marked `TODO`).
- Hero slideshow images in `client/src/components/Hero.jsx` are Unsplash placeholders (marked `TODO`).

## CI/CD

- `.gitlab-ci.yml` builds `client/` and deploys to GitLab Pages on the default branch only. `vite.config.js` sets `base: '/rakshit0702-project/'` when `CI` is set — update it if the project is renamed.
- The backend is **not** deployed by CI.

## Workflow expectations

- Work on feature branches; open a merge request to the default branch.
- Keep commits scoped and messages descriptive.
- Update `README.md`, `CONTEXT.md`, and `DESIGN.md` when your change affects setup, decisions, or the design system.
