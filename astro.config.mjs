import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["res.cloudinary.com"]
  },
  site: 'https://avidu.me',
  integrations: [sitemap()]
});