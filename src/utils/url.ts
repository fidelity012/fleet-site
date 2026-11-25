const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// Prefix internal absolute paths with the site base (needed on GitHub Pages).
export function withBase(href: string): string {
  return href.startsWith('/') && !href.startsWith('//') ? base + href : href;
}
