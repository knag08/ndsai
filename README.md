# ndsai.org

The website of **North Dallas Sathya Sai BalVikas** — a 501(c)(3) non-profit in Frisco, Texas.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), published as
static files to GitHub Pages at [ndsai.org](https://ndsai.org).

## Repository layout

| Path                 | What it is                                                                   |
| -------------------- | ---------------------------------------------------------------------------- |
| `site/`              | **The source.** Everything you edit lives here.                              |
| `archive/`           | The previous version of the website, kept verbatim at `/archive/`.           |
| `downloaded_images/` | Photographs carried over from the old site, still served at their old URLs.  |
| `podcasts/`          | Podcast audio, served at `/podcasts/…` exactly as before.                    |
| *root `.html`, `_astro/`, page folders* | **Generated.** The published site — do not edit by hand.  |
| `.published-manifest`| Records what the last publish wrote, so removed pages get cleaned up.        |

GitHub Pages serves the repository root of `main`, so the built site is committed there.
`CNAME` points the domain at it.

## Working on the site

```bash
cd site && npm install
```

```bash
npm --prefix site run dev
```

The dev server runs at http://localhost:4321. It also serves `downloaded_images/`, `podcasts/`
and `archive/` from the repository root, so every link works exactly as it will in production.

### Publishing

```bash
npm --prefix site run publish
```

This builds, checks the output, copies it to the repository root, and removes anything the
previous build produced that no longer exists. Then commit and push — GitHub Pages does the rest.

### Other commands

| Command                            | What it does                                                      |
| ---------------------------------- | ----------------------------------------------------------------- |
| `npm --prefix site run build`      | Build into `site/dist/` and run the checks below.                 |
| `npm --prefix site run check`      | Verify links, images, titles, descriptions, headings and alt text. |
| `npm --prefix site run redirects`  | Regenerate the old-URL redirect stubs in `site/public/`.          |
| `npm --prefix site run images`     | Re-run the image optimiser (needs the original photographs).      |

`npm run build` fails if any internal link is broken, an image is missing, a page has no
title/description/`h1`, an `<img>` has no `alt`, a heading level is skipped, or an `id` is
duplicated. Fix the report rather than working around it.

## Editing content

Most text lives in the page itself under `site/src/pages/`. Content that repeats, or that is
really a list of things, is kept in `site/src/data/`:

| File             | Contents                                                        |
| ---------------- | --------------------------------------------------------------- |
| `site.ts`        | Organisation details, navigation, human values, code of conduct  |
| `curriculum.ts`  | What each grade studies, and its current-unit note              |
| `calendar.ts`    | Class dates for the academic year                               |
| `media.ts`       | Podcast episodes and the teacher listening list                 |
| `newsletters.ts` | Newsletter editions and their summaries                         |
| `galleries.ts`   | Photo galleries and captions                                    |

### Common tasks

**Add a newsletter edition** — add an entry at the top of `newsletters.ts`, then create
`site/src/pages/newsletter/<slug>.astro` using an existing edition as a model.

**Update the calendar for a new year** — edit `units`, `mandatoryEvents` and `academicYear` in
`calendar.ts`. The unit covering today's date is highlighted automatically.

**Add photographs** — put optimised WebP in `site/public/img/…` and list them in `galleries.ts`.
`scripts/prepare-images.mjs` shows the sizes and quality settings used for the existing ones.

**Reopen admissions** — the closed notice appears on the home page, `/balvikas/` and `/contact/`.

## Notes

- Old addresses such as `/classes.html` and `/seva.html` redirect to their new homes. The map is
  in `site/scripts/make-redirects.mjs`.
- Audio and legacy photographs deliberately stay at the repository root rather than moving into
  `site/public/`, so they are stored once instead of twice and their original URLs keep working.
