# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Other commands:

```
npm run build     # production build to ./dist
npm run preview   # preview the production build
```

There is no test suite and no lint script configured in `package.json`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Architecture

This is a **public reference/demo template** for small-business landing pages — not a per-client fork. It is meant to be shown live (currently on GitHub Pages, under a non-root path via `astro.config.mjs`'s `site`/`base: '/astro-landing-boilerplate'`) so prospective clients can preview what their own site could look like. There is no per-client cloning workflow to account for; changes here affect the one public showcase.

- **`src/config.ts`** is the single source of truth for client/business content: name, description, contact info, socials, CTA, and theme colors, typed via `SiteConfig`. Rebranding the demo (or adapting it for a real client project later) should start and mostly end here — components read from `SITE_CONFIG` rather than hardcoding copy.
- **`src/layouts/Layout.astro`** is the only HTML shell. It renders `Navbar`/`Footer`/`WhatsAppButton` around a `<slot />`, sets SEO meta from `SITE_CONFIG`, and inlines a pre-hydration theme script that reads `localStorage`/`prefers-color-scheme` and toggles the `dark` class on `<html>` before first paint (re-run on `astro:after-swap` for View Transitions, via `<ClientRouter />`). All pages under `src/pages/` wrap their content in this layout.
- **Base-path-safe links**: because the demo is served from a GitHub Pages subpath, any component that builds an internal link (`Navbar.tsx`, `Footer.tsx`, `Hero.tsx`, `booking.astro`) reads `import.meta.env.BASE_URL` and normalizes it to a trailing-slash `SAFE_BASE` before prefixing route paths. Follow this pattern for any new internal link/anchor instead of hardcoding `/`-rooted paths. The `site`/`base` pair in `astro.config.mjs` is hand-set for this specific GitHub Pages deployment; a real client deployment (Vercel/Netlify on a root domain) would need `base` removed/reset — don't assume the current subpath setup is meant to travel with the template.
- **Astro/React split**: `src/pages/*.astro` and `src/layouts/Layout.astro` are static Astro components; everything under `src/components/` is a React island (`.tsx`), hydrated selectively with Astro's `client:*` directives (e.g. `client:load` on `Navbar` in `Layout.astro`) — most sections composed into `index.astro` are static-rendered unless they need interactivity (e.g. `BookingCalendar`, `ContactForm`, `FAQ` accordion).
- **`src/components/sections/`** are the landing-page blocks composed together on `index.astro` (Hero, About, Services, Benefits, Pricing, Testimonials, Location, FAQ, ContactForm, BookingCalendar, LogoTicker). `src/components/layout/` holds structural wrappers (Navbar, Footer); `src/components/ui/` holds reusable primitives (Button, Card, SectionHeading, TestimonialCard, WhatsAppButton, ScrollReveal).
- **`BookingCalendar` and `ContactForm` are UI demos only** — they simulate slot selection/submission state entirely client-side and are not wired to any backend, booking service, or email provider. Don't assume a real endpoint exists behind them; if a task asks to "connect" them, that integration doesn't exist yet and needs to be built.
- **`src/hooks/useScrollReveal.ts`** backs `ScrollReveal.tsx`, a wrapper component used across sections for on-scroll fade/slide-in animations via `IntersectionObserver`.
- Legal pages (`terms.astro`, `privacy.astro`, `cookies.astro`) and external social links are opened via `target="_blank"`; footer links to them include a small `window.opener`/`window.close()` utility pattern for auxiliary-tab UX — check `Footer.tsx` before changing that behavior.
- Styling is Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — theme customization happens in `src/styles/global.css` and `SITE_CONFIG.theme`), with a light/dark design system using `slate-100`/`slate-950` backgrounds. **Don't introduce colors or fonts outside `SITE_CONFIG.theme` and the existing Tailwind tokens** — the design system is meant to stay strictly consistent across sections.
- CI (`.github/workflows/deploy.yml`) builds with Node 22 and deploys `dist/` to GitHub Pages on every push to `main`.
