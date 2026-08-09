/**
 * Copies the Astro build output into the repository root, which is what GitHub
 * Pages serves for ndsai.org.
 *
 * A manifest of everything written last time lives at .published-manifest so that
 * pages deleted from src get removed from the published site too. Anything not in
 * that manifest (archive/, downloaded_images/, podcasts/, site/, CNAME, README) is
 * never touched.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = fileURLToPath(new URL('..', import.meta.url));
const repoRoot = path.resolve(siteDir, '..');
const distDir = path.join(siteDir, 'dist');
const manifestPath = path.join(repoRoot, '.published-manifest');

if (!fs.existsSync(distDir)) {
  console.error('No dist/ found — run `npm run build` first.');
  process.exit(1);
}

/** Every file under dir, as paths relative to dir. */
function walk(dir, base = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full, base) : [path.relative(base, full)];
  });
}

const files = walk(distDir).sort();
const previous = fs.existsSync(manifestPath)
  ? fs.readFileSync(manifestPath, 'utf8').split('\n').filter(Boolean)
  : [];

for (const rel of files) {
  const dest = path.join(repoRoot, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(path.join(distDir, rel), dest);
}

// Remove files this build no longer produces, plus any directories left empty.
const stale = previous.filter((rel) => !files.includes(rel));
for (const rel of stale) {
  const dest = path.join(repoRoot, rel);
  if (fs.existsSync(dest)) fs.rmSync(dest);
}
for (const rel of stale) {
  let dir = path.dirname(path.join(repoRoot, rel));
  while (dir.startsWith(repoRoot) && dir !== repoRoot) {
    if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
    else break;
    dir = path.dirname(dir);
  }
}

fs.writeFileSync(manifestPath, files.join('\n') + '\n');
console.log(`Published ${files.length} files to the repository root (${stale.length} removed).`);
