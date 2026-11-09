// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Demo pentru GitHub Pages (servit sub https://demo.mrwebsites.ro/servicii-funerare-rapan/), ca la celelalte demo-uri.
// TODO(real): pe domeniul clientului se pune domeniul în `site` și se șterge `base`.
// Fișierele din public/ trec prin u() din src/data/site.ts, deci restul merge neschimbat.
export default defineConfig({
  site: 'https://demo.mrwebsites.ro',
  base: '/servicii-funerare-rapan',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
