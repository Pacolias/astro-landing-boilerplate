# Astro Landing Page Boilerplate

![Astro](https://img.shields.io/badge/Astro-0C0E14?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A minimal, highly optimized starter template for building static landing pages and small business websites. It combines the performance of Astro's island architecture with React components and Tailwind CSS styling.

## Tech Stack

* **Framework:** [Astro](https://astro.build/) for static site generation and island hydration.
* **UI Library:** [React](https://react.dev/) for interactive components and state management.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
* **Language:** [TypeScript](https://www.typescriptlang.org/) for robust static typing.

## Project Structure

```text
src/
├── components/
│   ├── layout/         # Structural wrappers (Navbar, Footer)
│   ├── sections/       # Landing page blocks (Hero, LogoTicker, About, Services, Testimonials, FAQ, Pricing, Location, ContactForm)
│   └── ui/             # Reusable primitives (Button, Card, SectionHeading, TestimonialCard, WhatsAppButton, ScrollReveal)
├── hooks/              # Custom React hooks (useScrollReveal)
├── layouts/
│   └── Layout.astro    # Global HTML shell and SEO metadata container
├── pages/
│   ├── index.astro     # Main application entry point
│   └── booking.astro   # Dedicated scheduling page route
├── styles/
│   └── global.css      # Tailwind base declarations
└── config.ts           # Centralized client configuration core
```

## Getting Started

Follow these steps to set up the development environment locally.

1. Clone the repository:
```bash
git clone https://github.com/Pacolias/astro-landing-boilerplate.git

```


2. Navigate into the project directory:
```bash
cd astro-landing-boilerplate

```


3. Install the required dependencies:
```bash
npm install

```


4. Start the local development server:
```bash
npm run dev

```



The application will be accessible at `http://localhost:4321`.

## Central Configuration

All global site data, business descriptions, contact channels, and social links are managed inside `src/config.ts`. Modifying this single file instantly updates the layout metadata and component content across the entire template.

## Deployment

This boilerplate is engineered for seamless deployment on static hosting providers such as Vercel or Netlify. Link your repository, verify that the build command is configured as `npm run build`, and ensure the output directory points to `dist`.

## License

This project is open-source software licensed under the [MIT License](https://www.google.com/search?q=LICENSE).
