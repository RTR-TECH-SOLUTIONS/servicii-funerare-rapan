// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Producția rulează pe domeniul clientului, în rădăcină (Enhance, vezi DEPLOY.md).
// Demo-ul de pe GitHub Pages (https://demo.mrwebsites.ro/servicii-funerare-rapan/) primește în CI
// SITE_URL și SITE_BASE. Linkurile interne trec prin u() din src/data/site.ts, deci merg în ambele cazuri.
const site = process.env.SITE_URL || 'https://serviciifunerarebascov.ro';
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      // Paginile legale sunt pe noindex, deci nu intră nici în sitemap.
      filter: (page) => !/\/(politica-de-cookies|politica-de-confidentialitate|termeni-si-conditii)\/$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
