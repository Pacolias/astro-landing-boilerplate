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

There is no test suite and no lint script configured in `package.json`. There is also no browser available in a typical Claude Code sandbox for this project — verify changes by running `npm run build` (catches type/build errors and lets you grep the generated `dist/` HTML/CSS for the classes or markup you expect) and by curling the dev server, not by claiming a visual check you didn't actually perform. If a real browser tool is available in a given session, use it; otherwise say explicitly that a change is unverified visually.

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
- **Rebranding checklist**: when this template is adapted for an actual client (not just this public demo), also update the SEO/agent-facing surface, which doesn't fully derive from `SITE_CONFIG` automatically: the `og:image` in `Layout.astro` (currently falls back to `logo.svg`, replace with a real 1200x630 image for social previews), `astro.config.mjs`'s `site`/`base` (see the base-path note below), and skim `src/pages/llms.txt.ts`'s output once the client's real pages/copy are in — it's regenerated from `SITE_CONFIG` at build time, but its prose ("This site is a landing page built with...") is still worth a read-through per client.
- **`src/layouts/Layout.astro`** is the only HTML shell. It renders `Navbar`/`Footer`/`WhatsAppButton` around a `<slot />`, sets SEO meta (canonical, Open Graph/Twitter Card, robots, a `WebSite` JSON-LD block) from `SITE_CONFIG` and page props (`title`/`description`/`noindex`), and inlines a pre-hydration theme script that reads `localStorage`/`prefers-color-scheme` and toggles the `dark` class on `<html>` before first paint (re-run on `astro:after-swap` for View Transitions, via `<ClientRouter />`). It also exposes a `<slot name="head" />` for page-specific `<head>` additions (used by `index.astro` to preload the Hero's LCP image). All pages under `src/pages/` wrap their content in this layout.
- **SEO/agent-facing surface**: `@astrojs/sitemap` auto-generates `sitemap-index.xml` from the actual routes at build time; `public/robots.txt` allows all crawlers and points at it; `src/pages/llms.txt.ts` is a build-time endpoint (not a static `public/` file) that renders a summary of the site from `SITE_CONFIG` for LLM agents/crawlers; the FAQ section emits `FAQPage` JSON-LD and the Location section emits `LocalBusiness` JSON-LD. Keep new pages inside `src/pages/` (the sitemap picks them up automatically) and give them their own `title`/`description` props rather than reusing the homepage defaults.
- **Base-path-safe links**: because the demo is served from a GitHub Pages subpath, any component that builds an internal link (`Navbar.tsx`, `Footer.tsx`, `Hero.tsx`, `booking.astro`) reads `import.meta.env.BASE_URL` and normalizes it to a trailing-slash `SAFE_BASE` before prefixing route paths. Follow this pattern for any new internal link/anchor instead of hardcoding `/`-rooted paths. The `site`/`base` pair in `astro.config.mjs` is hand-set for this specific GitHub Pages deployment; a real client deployment (Vercel/Netlify on a root domain) would need `base` removed/reset — don't assume the current subpath setup is meant to travel with the template.
- **Astro/React split**: `src/pages/*.astro` and `src/layouts/Layout.astro` are static Astro components; everything under `src/components/` is a React island (`.tsx`), hydrated selectively with Astro's `client:*` directives (e.g. `client:load` on `Navbar` in `Layout.astro`) — most sections composed into `index.astro` are static-rendered unless they need interactivity (e.g. `BookingCalendar`, `ContactForm`, `FAQ` accordion).
- **`src/components/sections/`** are the landing-page blocks composed together on `index.astro` (Hero, About, Services, Benefits, Pricing, Testimonials, Location, FAQ, ContactForm, BookingCalendar, LogoTicker). `src/components/layout/` holds structural wrappers (Navbar, Footer); `src/components/ui/` holds reusable primitives (Button, Card, SectionHeading, TestimonialCard, WhatsAppButton, ScrollReveal).
- **`BookingCalendar` and `ContactForm` are UI demos only** — they simulate slot selection/submission state entirely client-side and are not wired to any backend, booking service, or email provider. Don't assume a real endpoint exists behind them; if a task asks to "connect" them, that integration doesn't exist yet and needs to be built. `BookingCalendar` specifically goes further to *feel* like a real service: month navigation runs on real `Date` math across a hardcoded 4-month window (`BASE_YEAR`/`BASE_MONTH`/`MONTH_COUNT` constants), availability is a deterministic function of day+month (not one real data source), and both month changes and day selection show a brief fake "loading" skeleton before revealing content — this is intentional theater, not leftover complexity, so preserve the delay/skeleton pattern if you extend it rather than "simplifying" it away.
- **Mobile breakpoint convention**: sections use Tailwind's `md:` (768px) as the single cutover between the compact mobile layout and the original desktop design — mobile-first base classes, `md:`-prefixed overrides restore the desktop look untouched. A 3-card grid (`Services`, `Benefits`, `Pricing`) becomes a `snap-x` swipeable single-card carousel below `md:` and reverts to `md:grid md:grid-cols-3` above it; follow this same pattern (carousel below `md:`, grid at `md:` and up) for any new 3-up card section instead of just stacking cards full-height on mobile.
- **`src/hooks/useScrollReveal.ts`** backs `ScrollReveal.tsx`, a wrapper component used across sections for on-scroll fade/slide-in animations via `IntersectionObserver`.
- Legal pages (`terms.astro`, `privacy.astro`, `cookies.astro`) and external social links are opened via `target="_blank"`; footer links to them include a small `window.opener`/`window.close()` utility pattern for auxiliary-tab UX — check `Footer.tsx` before changing that behavior.
- Styling is Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — theme customization happens in `src/styles/global.css` and `SITE_CONFIG.theme`), with a light/dark design system using `slate-100`/`slate-950` backgrounds. **Don't introduce colors or fonts outside `SITE_CONFIG.theme` and the existing Tailwind tokens** — the design system is meant to stay strictly consistent across sections.
- CI (`.github/workflows/deploy.yml`) builds with Node 22 and deploys `dist/` to GitHub Pages on every push to `main`.
