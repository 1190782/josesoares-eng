// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://josesoares-eng.com',

  // Portuguese serves the local client-facing pages; English mirrors them at /en/
  // and is the version sent with job applications.
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [react(), sitemap({ i18n: { defaultLocale: 'pt', locales: { pt: 'pt-PT', en: 'en' } } })],

  vite: {
    plugins: [tailwindcss()],
  },
});
