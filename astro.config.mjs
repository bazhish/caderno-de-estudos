// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// Site estático: as aulas são publicadas no repositório como arquivos MDX.
// BASE_PATH é definido pelo workflow do GitHub Pages (ex.: /caderno-de-estudos).
export default defineConfig({
  output: 'static',
  base: process.env.BASE_PATH || '/',

  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});
