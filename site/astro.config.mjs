// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Legacy media (downloaded_images/, podcasts/) lives at the repository root so the
 * URLs used by the old site keep working and the large audio files are stored once.
 * Astro never copies them; this plugin just serves them during `astro dev`.
 */
function legacyMedia() {
  const roots = ['downloaded_images', 'podcasts', 'archive'];
  const repoRoot = fileURLToPath(new URL('..', import.meta.url));
  const types = {
    '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
    '.gif': 'image/gif', '.webp': 'image/webp', '.mp3': 'audio/mpeg',
    '.m4a': 'audio/mp4', '.pdf': 'application/pdf', '.html': 'text/html',
    '.css': 'text/css', '.js': 'text/javascript',
  };
  return {
    name: 'ndsai-legacy-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || '').split('?')[0]);
        if (!roots.some((r) => url.startsWith(`/${r}/`))) return next();
        const file = path.join(repoRoot, url.replace(/^\//, ''));
        if (!file.startsWith(repoRoot) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return next();
        res.setHeader('Content-Type', types[path.extname(file).toLowerCase()] || 'application/octet-stream');
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}

export default defineConfig({
  site: 'https://ndsai.org',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Not the default `_astro`: GitHub Pages runs Jekyll over the published branch,
    // and Jekyll drops every underscore-prefixed directory. That would silently
    // strip the stylesheet and fonts from an otherwise successful deploy.
    assets: 'assets',
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss(), legacyMedia()] },

  /**
   * Redirects for the old .html addresses are pre-generated as literal files in
   * public/ by scripts/make-redirects.mjs, because Astro's `redirects` option
   * combined with directory-format output would publish them at `/foo.html/`
   * rather than the `/foo.html` that inbound links actually use.
   */
});
