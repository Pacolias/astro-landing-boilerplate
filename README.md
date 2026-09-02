# Astro Landing Page Boilerplate

![Astro](https://img.shields.io/badge/Astro-0C0E14?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A minimal, highly optimized starter template for building static landing pages and small business websites. It combines the performance of Astro's island architecture with React components and Tailwind CSS styling.

## Preview

<div align="center">
  <table>
    <tr>
      <td align="center"><b>Light Mode </b></td>
      <td align="center"><b>Dark Mode </b></td>
    </tr>
    <tr>
      <td><img src="https://github.com/user-attachments/assets/98516cbd-7a0a-4e2f-b2de-6a769d2789b8" alt="RedCheck Landing Page Showcase" width="450"/></td>
      <td><img src="https://github.com/user-attachments/assets/c5c36ca4-b9bf-4318-8c75-13194e2ed517" alt="RedCheck Platform Showcase" width="450"/></td>
    </tr>
  </table>
</div>

## Interactive Features Showcase

<div align="center">
  <img src="https://github.com/user-attachments/assets/1da24e1e-0b8d-446e-879d-77523de9c2e2" alt="Interactive Booking Flow Showcase" width="700"/>
  <p><em>Dynamic booking calendar slot selection and confirmation workflow.</em></p>
</div>

## Core Features

* **Advanced Theme Management**: Built-in script execution in the document head that evaluates operating system preferences (`prefers-color-scheme`) and `localStorage` persistence before initial render, preventing layout flashes (FOUC) and fully synchronizing with Astro View Transitions (`astro:after-swap`).
* **Interactive Components**: Features a dynamic booking calendar with slot availability and confirmation flows, accordion-based FAQs, and reactive contact forms with submission states.
* **Optimized Navigation UX**: Legal documents (Terms, Privacy, Cookies) and external social links open securely in new tabs (`target="_blank"`), equipped with utility scripts to close secondary auxiliary tabs gracefully (`window.close()`).
* **High-Contrast Design System**: Standardized visual hierarchy using `slate-100` backgrounds in light mode and `slate-950` in dark mode to guarantee optimal contrast against white and neutral structural elements.
* **Modular Architecture**: Clean separation between static Astro wrappers, interactive React islands, and centralized configuration cores.


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
│   ├── sections/       # Landing page blocks (Hero, Services, Benefits, Testimonials, Location, FAQ, ContactForm, BookingCalendar)
│   └── ui/             # Reusable primitives (SectionHeading, TestimonialCard, WhatsAppButton)
├── layouts/
│   └── Layout.astro    # Global HTML shell, SEO metadata, and theme sync script
├── pages/
│   ├── index.astro     # Main landing page entry point
│   ├── booking.astro   # Dedicated scheduling route
│   ├── terms.astro     # Terms of service page
│   ├── privacy.astro   # Privacy policy page
│   └── cookies.astro   # Cookie policy page
├── styles/
│   └── global.css      # Tailwind base declarations and custom utilities
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

This project is open-source software licensed under the [MIT License](https://opensource.org/license/mit).
