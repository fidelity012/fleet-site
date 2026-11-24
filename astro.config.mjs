import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fidelity012.github.io', // TODO: replace with the real domain
  base: '/fleet-site',
  vite: { plugins: [tailwindcss()] },
});
