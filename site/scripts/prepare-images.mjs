/**
 * One-off image pipeline: takes the originals gathered from the Google Photos album
 * and the Mailchimp newsletters and writes optimised WebP into public/img.
 *
 * Re-runnable — set SRC to wherever the originals live and run with `node`.
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = process.env.SRC || '/private/tmp/claude-501/-Users-saisriram-Developer-Github-ndsai/8fdf559d-e436-4120-a2b9-9b4324921025/scratchpad';
const OUT = path.resolve(import.meta.dirname, '../public/img');

const jobs = [];

/** Easwaramma Day 2026 — a full-size view plus a grid thumbnail for each photo. */
const albumDir = path.join(SRC, 'gphotos');
for (const file of fs.readdirSync(albumDir).filter((f) => /^ed2026-\d+\.jpg$/.test(f))) {
  const slug = file.replace('.jpg', '');
  jobs.push({ in: path.join(albumDir, file), out: `easwaramma-2026/${slug}.webp`, width: 1400, quality: 70 });
  jobs.push({ in: path.join(albumDir, file), out: `easwaramma-2026/${slug}-thumb.webp`, width: 560, quality: 66 });
}

/** Newsletter imagery, renamed to something a human can read. */
const nlDir = path.join(SRC, 'live/newsletter_images');
const newsletter = {
  'd2329085-6aa6-69b3-81f9-2d55e1cccda3.png': ['brand/logo-balvikas', 520, 'png'],
  '6f2abdb4-3582-88f2-3a5b-98c8efa193d6.png': ['brand/logo-sai-center', 520, 'png'],
  'f07732e8-5d77-d7b7-dfbb-5732e22745a2.jpeg': ['swami/swami-blessing', 1000],
  'f7e9d611-5625-38fb-ecf7-09370b7ee108.jpeg': ['swami/swami-abhayahasta', 800],
  '9bf2f8b4-8bf4-3ba6-08ad-1a743ede58e0.png': ['centenary/centenary-emblem', 900, 'png'],
  '2a7a0fff-182f-9da1-3c19-665f74e6926b.jpg': ['centenary/centenary-100', 1200],
  'a22a6569-8a84-dac3-e2e3-79aa40a13ce6.jpg': ['seva/paper-cranes', 1200],
  '13f813bb-9d4c-11df-7ac7-3c94a899c735.jpg': ['seva/baby-kits-laid-out', 1200],
  'b356d001-9475-4ba8-dafc-d7eeb231e14c.jpg': ['seva/baby-outfits', 1200],
  'b585c4ae-b57f-b483-98ed-4a04aca766b7.jpeg': ['seva/crocheted-sets', 1200],
  'f9eb72ca-dba5-590a-5655-dae0ad8272c4.jpg': ['seva/nursing-home-coloring', 1200],
  '9876ca1d-8200-8c3e-9006-3085fc4339e4.jpeg': ['seva/fire-station-cards', 1200],
  '9ea8df8e-c55d-7546-249b-c80f31feef3a.jpeg': ['seva/fire-station-visit', 1200],
  '802c2311-ae45-31f8-3610-831dfa0782ca.jpg': ['seva/heritage-manor', 1200],
  '491957d9-3a77-3ce0-8f44-d80e965be203.jpeg': ['bhajans/akhanda-bhajan-history', 1200],
  'f6cd5b14-b1e5-096f-5b62-ee9ac0247038.jpg': ['veda/veda-students-stage', 1400],
  '80f6e484-0a01-f6b2-f932-30679f3b9188.jpeg': ['parenting/mindful-parenting', 1000],
  'd7f6f93d-5c8a-ad6f-d3b7-d702664109de.jpg': ['easwaramma/easwaramma-with-swami', 1000],
  'ee38fcbe-e014-730e-f5d2-8b78134ca737.jpg': ['easwaramma/easwaramma-day-2026-poster', 900],
  '37a4212c-3bd8-f508-84eb-79b8f0fa8bf0.jpg': ['easwaramma/nava-vidha-bhakthi-invite', 1000],
};
for (const [file, [slug, width, format]] of Object.entries(newsletter)) {
  jobs.push({ in: path.join(nlDir, file), out: `${slug}.webp`, width, quality: 82, alpha: format === 'png' });
}

/**
 * Wide exports for the photographs used as full-bleed page backgrounds. Cropped to a
 * banner shape so a tall portrait original does not ship pixels the band never shows.
 */
for (const slug of ['ed2026-03', 'ed2026-09', 'ed2026-15', 'ed2026-20']) {
  jobs.push({
    in: path.join(albumDir, `${slug}.jpg`),
    out: `hero/${slug}.webp`,
    width: 2048,
    height: 860,
    quality: 62,
  });
}

/** Legacy photographs still worth keeping, pulled from the old site. */
const legacy = path.resolve(import.meta.dirname, '../../downloaded_images');
jobs.push({ in: path.join(legacy, 'swamy.jpeg'), out: 'swami/swami-portrait.webp', width: 900, quality: 84 });
jobs.push({ in: path.join(legacy, 'swamy_veda_class.jpg'), out: 'veda/swami-veda-class.webp', width: 1000, quality: 82 });
jobs.push({ in: path.join(legacy, 'ssio-logo-english.png'), out: 'brand/ssio-emblem.webp', width: 600, quality: 88, alpha: true });

let bytes = 0;
for (const job of jobs) {
  const dest = path.join(OUT, job.out);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(job.in)
    .rotate()
    .resize({
      width: job.width,
      height: job.height,
      fit: job.height ? 'cover' : 'inside',
      position: 'attention',
      withoutEnlargement: true,
    })
    .webp({ quality: job.quality, alphaQuality: job.alpha ? 100 : 80, effort: 5 })
    .toFile(dest);
  bytes += fs.statSync(dest).size;
}

console.log(`Wrote ${jobs.length} images, ${(bytes / 1024 / 1024).toFixed(1)} MB total.`);
