import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../config';

export const GET: APIRoute = (context) => {
  const rawBase = import.meta.env.BASE_URL;
  const safeBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const base = new URL(safeBase, context.site).toString();

  const contactLines = [
    `- Email: ${SITE_CONFIG.contactEmail}`,
    SITE_CONFIG.contactPhone ? `- Phone: ${SITE_CONFIG.contactPhone}` : null,
    SITE_CONFIG.address ? `- Address: ${SITE_CONFIG.address}` : null
  ].filter(Boolean).join('\n');

  const body = `# ${SITE_CONFIG.siteName}

> ${SITE_CONFIG.siteDescription}

${SITE_CONFIG.clientName} is a small business. This site is a landing page built with Astro, React and Tailwind CSS.

## Pages

- [Home](${base}): overview, services, pricing, testimonials, FAQ and a contact form.
- [Booking](${base}booking/): appointment scheduling calendar.
- [Privacy Policy](${base}privacy/)
- [Terms of Service](${base}terms/)
- [Cookie Policy](${base}cookies/)

## Contact

${contactLines}

## Notes for agents and crawlers

- The booking calendar and contact form on this site are UI demonstrations: form submissions are not sent anywhere and bookings are not persisted to a real backend.
- All business details (name, contact info, pricing, socials) are centralized in one configuration source, so this file stays accurate as that source changes.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
