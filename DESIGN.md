# DESIGN.md — Design System

## Brand palette

| Token | Hex | Usage |
| --- | --- | --- |
| Vivid Pink (`--primary`) | `#f3006d` | Primary actions, links, highlights, eyebrows |
| Deep Maroon (`--primary-deep`) | `#8d1341` | Gradient partner for primary, dark accents |
| Electric Yellow (`--accent`) | `#fff22d` | Stats, sheen sweeps, decorative glow (dark theme) |
| Blush Pink (`--soft`) | `#ffa9ce` | Prices, labels, sparkles, secondary accents |
| Warm Brown (`--brown`) | `#905637` | Hair/Spa category gradients, tertiary glow |

Primary button gradient: `linear-gradient(135deg, #f3006d, #8d1341)` with white text.
Headline word gradient: `#f3006d → #fff22d → #ffa9ce` (animated shimmer).

## Themes

All colors are CSS custom properties defined in `client/src/styles.css`:

- **Dark (default)**: deep maroon-tinted backgrounds (`#1b0610`, `#260a18`, `#311020`), light pink text (`#fff0f6`), yellow accent.
- **Light**: blush backgrounds (`#fff7fb`, `#ffe9f2`, `#ffffff`), dark maroon text (`#3c0a20`); `--accent` and `--soft` darken to `#8d1341` / `#c2376f` for contrast.

Rules:
- Never hardcode theme-dependent colors in components — use variables.
- Raw palette hexes may appear in CSS only for decorative gradients that work in both themes.
- The theme is set via `data-theme` on `<html>`, persisted in `localStorage` (`vm-theme`), and applied pre-paint in `client/index.html`.

## Typography

| Role | Font | Notes |
| --- | --- | --- |
| Display / headings | Playfair Display (serif) | 500/700, italic for brand flourish |
| Body / UI | Jost (sans-serif) | 300–600; 300 for leads, 600 for buttons |

Scale uses `clamp()` for fluid sizing (e.g., hero title `clamp(2.5rem, 7vw, 4.8rem)`). Eyebrows: uppercase, `letter-spacing: 0.35em`.

## Layout

- Max content widths: catalog 1200px, location 1000px, booking form 640px
- Border radius: `--radius: 18px` (cards, modals, map); pills `999px` (buttons, filters, dots)
- Breakpoints: `820px` (location stacks), `680px` (mobile nav, single-column form)

## Motion

| Animation | Where | Spec |
| --- | --- | --- |
| Slideshow swipe | Hero background | `translateX`, 1.1s `cubic-bezier(0.65, 0, 0.35, 1)`, 4.5s interval |
| Ken Burns zoom | Active hero slide | scale 1 → 1.08 over 5s |
| Rise-in | Hero content | staggered 0.1–0.7s delays, 0.9s ease-out |
| Word rotation | Hero headline | 2.6s interval, 3D flip-in + gradient shimmer |
| Sparkle twinkle | Hero | randomized position/size/delay, infinite |
| Parallax glows | Hero | follow cursor via `--mx`/`--my` CSS variables |
| Card entrance | Catalog | 60ms stagger, fade + rise |
| Reveal on scroll | Section headers | IntersectionObserver adds `.visible` |
| Sheen sweep | Primary CTA | yellow gradient sweep, 3.2s loop |

Rules:
- CSS keyframes/transitions only; no animation libraries.
- Every animation must be disabled by the global `prefers-reduced-motion` block.
- Keep durations 0.25–0.4s for micro-interactions, up to ~1s for scene transitions.

## Components

- **Cards**: gradient visual header (category gradient + emoji icon), body with category/eyebrow, name, description, price + duration row. Hover: lift 6px + shadow.
- **Modal**: centered, blurred backdrop, Escape/backdrop close, body scroll lock.
- **Forms**: stacked label + input, inline error text in `#e06a6a`, invalid border highlight.
- **WhatsApp**: always `#25d366` regardless of theme (brand color), floating FAB bottom-right.

## Accessibility

- WCAG-minded contrast in both themes (light theme darkens yellow/blush tokens)
- All interactive elements keyboard-operable; cards have `tabIndex` + Enter/Space handlers
- ARIA: dialogs (`role="dialog"`, `aria-modal`), tabs for filters/dots, labels on icon-only buttons
- Imagery has alt/aria text; decorative layers use `aria-hidden`
