// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Pacolias.github.io',
  base: '/astro-landing-boilerplate',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false
  }
});