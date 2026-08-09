/**
 * Post-build sanity check over dist/: verifies every internal link resolves, every
 * local image/audio reference exists, and each page has the metadata it needs.
 *
 * Legacy media lives at the repository root rather than in dist, so those paths are
 * resolved against the repo instead.
 */
import fs from 'node:fs';
import path from 'node:path';

const siteDir = path.resolve(import.meta.dirname, '..');
const dist = path.join(siteDir, 'dist');
const repoRoot = path.resolve(siteDir, '..');
const legacyRoots = ['downloaded_images', 'podcasts', 'archive'];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(dist);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const problems = [];

/** Does a site-absolute URL exist in the published output (or in legacy media)? */
function resolves(url) {
  const clean = decodeURIComponent(url.split('#')[0].split('?')[0]);
  if (clean === '' || clean === '/') return fs.existsSync(path.join(dist, 'index.html'));

  const rel = clean.replace(/^\//, '');
  if (legacyRoots.some((root) => rel.startsWith(`${root}/`))) {
    return fs.existsSync(path.join(repoRoot, rel));
  }
  if (fs.existsSync(path.join(dist, rel))) return true;
  return fs.existsSync(path.join(dist, rel, 'index.html'));
}

for (const file of htmlFiles) {
  const page = '/' + path.relative(dist, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');
  const isRedirect = html.includes('http-equiv="refresh"');

  if (!isRedirect) {
    if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${page} — missing <title>`);
    if (!/<meta name="description" content="[^"]+"/.test(html)) problems.push(`${page} — missing description`);
    if (!/<h1[^>]*>/.test(html)) problems.push(`${page} — no <h1>`);

    // Every image needs an alt attribute. A bare or empty `alt` is fine — the HTML
    // serialiser writes alt="" as `alt`, and that correctly marks it decorative.
    for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
      if (!/\salt(=|[\s/>])/.test(tag)) problems.push(`${page} — <img> without alt: ${tag.slice(0, 90)}`);
    }

    // Exactly one h1, and no skipped heading level on the way down.
    const levels = [...html.matchAll(/<h([1-4])\b/g)].map((m) => Number(m[1]));
    const h1Count = levels.filter((l) => l === 1).length;
    if (h1Count !== 1) problems.push(`${page} — expected exactly one <h1>, found ${h1Count}`);
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] - levels[i - 1] > 1) {
        problems.push(`${page} — heading level jumps from h${levels[i - 1]} to h${levels[i]}`);
        break;
      }
    }

    // Duplicate ids break in-page anchors and label/control association.
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    for (const id of new Set(duplicates)) problems.push(`${page} — duplicate id="${id}"`);
  }

  for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const url = match[1];
    if (url.startsWith('//')) continue;
    if (!resolves(url)) problems.push(`${page} — broken reference: ${url}`);
  }
}

console.log(`Checked ${htmlFiles.length} pages.`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const problem of [...new Set(problems)]) console.error(`  • ${problem}`);
  process.exit(1);
}
console.log('No broken references, and every page has title, description, h1 and image alts.');
