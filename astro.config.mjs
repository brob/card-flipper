import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '2wlc5vj8',
    dataset: 'production',
    studioBasePath: '/studio',
    // Set useCdn to false if you're building statically.
    useCdn: false,
  }), react()]
});