/**
 * Writes a meta-refresh stub for every address the old site used, so inbound links,
 * bookmarks and indexed search results all land on the right new page.
 *
 * These go into public/ as literal `foo.html` files. Run with `npm run redirects`
 * after changing the map below.
 */
import fs from 'node:fs';
import path from 'node:path';

const redirects = {
  'classes.html': '/balvikas/curriculum/',
  'education.html': '/balvikas/',
  'calendar.html': '/balvikas/calendar/',
  'veda-class.html': '/balvikas/veda-classes/',
  'bhajans.html': '/bhajans/',
  'seva.html': '/seva/',
  'narayana-seva.html': '/seva/narayana-seva/',
  'nservice.html': '/seva/narayana-seva/',
  'service.html': '/seva/service-projects/',
  'eswarammaday.html': '/easwaramma-day/',
  'pics.html': '/easwaramma-day/',
  'podcast.html': '/podcast/',
  'newsletter.html': '/newsletter/',
  'newsletter01.html': '/newsletter/first-edition/',
  'newsletter02.html': '/newsletter/second-edition/',
  'contact-us.html': '/contact/',
  'announcements.html': '/newsletter/',
  // The old shared nav fragment; nothing should link here, but be tidy about it.
  'nav.html': '/',
};

const outDir = path.resolve(import.meta.dirname, '../public');

const page = (target) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting&hellip;</title>
    <link rel="canonical" href="https://ndsai.org${target}" />
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <style>
      body { font: 16px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif; color: #332e27;
             background: #fdfaf5; display: grid; place-items: center; min-height: 100vh; margin: 0; }
      a { color: #9c481a; }
    </style>
  </head>
  <body>
    <p>This page has moved. <a href="${target}">Continue to its new home</a>.</p>
    <script>location.replace(${JSON.stringify(target)});</script>
  </body>
</html>
`;

for (const [file, target] of Object.entries(redirects)) {
  fs.writeFileSync(path.join(outDir, file), page(target));
}

console.log(`Wrote ${Object.keys(redirects).length} redirect stubs to public/.`);
