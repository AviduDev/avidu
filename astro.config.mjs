import { defineConfig } from 'astro/config';
import sanityIntegration from '@sanity/astro';


// https://astro.build/config
export default defineConfig({
    integrations: [
        sanityIntegration({
        projectId: '7ho08ijd',
        dataset: 'production',
        useCdn: true,
      }),
    ],
});
