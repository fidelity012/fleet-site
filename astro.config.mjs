import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fidelity012.github.io',
  base: '/fleet-site',
  outDir: 'docs',
  vite: { plugins: [tailwindcss()] },
});