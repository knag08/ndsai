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
| `npm --prefix site run qr`         | Redraw the centenary QR code. Only needed if its address changes. |

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
| `messages.ts`    | The hundred passages shown at `/centenary/` (see below)         |
| `stories.ts`     | The hundred Chinna Katha shown at `/centenary/story/`           |
| `timeline.ts`    | The hundred years, as dated moments, shown at `/centenary/timeline/` |
| `facts.ts`       | Published facts, for `/centenary/facts/` (set aside for now)    |

### The centenary pages

`/centenary/` is what guests reach by scanning the QR code at the centenary celebration. There are
three pages, linked to each other:

| Page                 | What a visitor gets                                                      |
| -------------------- | ------------------------------------------------------------------------ |
| `/centenary/`        | One of a hundred passages from the Vahinis, kept for that phone          |
| `/centenary/story/`  | One of a hundred Chinna Katha, for reading aloud with a child            |
| `/centenary/timeline/` | The life, year by year, as a deck of cards swiped left and right       |
| `/centenary/qr/`     | The printable poster and table cards. Not in the nav or the sitemap      |
| `/centenary/facts/`  | Set aside for now: built and working, but not linked or in the sitemap   |

There is no server behind ndsai.org, so each choice is made in the browser and remembered in both
`localStorage` and a cookie. Where a browser refuses to store anything, the choice is derived from
coarse properties of the device instead, which keeps it steady across a refresh. The shared logic
is in `src/scripts/centenary.ts`.

**Provenance.** The passages in `messages.ts` are verbatim from the Vahinis as published at
[saispeaks.sathyasai.org](https://saispeaks.sathyasai.org/), and each is a complete thought rather
than a sentence lifted out of one. The stories in `stories.ts` come from *Chinna Katha, Part I*; the
Trust publishes no digital edition, so they were taken from a devotee reproduction, with Sanskrit
names put into plain spelling and that site's own bracketed glosses removed — see the header of the
file. Each fact in `facts.ts` carries the address of the page it is published on.

`Centenary` is a top-level item in the site navigation (`nav` in `src/data/site.ts`), with the
three guest pages under it, so somebody who wanders off to the rest of the site can get back.

The three guest pages are tied together by a tab bar at the TOP of each one
(`src/components/CentenaryLinks.astro`), not at the foot: on the deck pages the foot sits well
below the fold, so a guest arriving from the QR code had no way of knowing the other pages
existed. A page that is not itself a tab — the facts page — still shows the three tabs plus its
own name, so there is always a way back in.

`/centenary/facts/` is **hidden rather than deleted**. It still builds and still works at its
address; it is simply absent from the link row in `src/components/CentenaryLinks.astro` and from
the sitemap filter in `astro.config.mjs`. Add a row back to that component to offer it again.

The timeline in `timeline.ts` is our own short retelling, written from the life history and
project records the Trust publishes. Where the Trust's pages disagree on a date, the more
specific page wins — the water-project pages over the timeline, since they give the day. It is
illustrated only for the first six cards. The Trust painted Bhagawan's childhood in watercolour
and photographed everything after it; the paintings are warm, carry well at card size and suit
children, while the later archival photographs are small and grainy. The files in
`public/img/centenary/timeline/` are at their source 624x461 — a card is about 300px wide, so
that is roughly the 2x a retina screen wants. **Do not upscale them**: an earlier attempt at
720px looked worse, not better.

The timeline and the facts pages share one deck implementation, `createDeck` in
`src/scripts/centenary.ts` — a scroll-snapping row, so the swipe is the browser's own and works
with a finger, a trackpad or the arrow keys. The only difference between them is that the facts
are shuffled per device and the timeline never is: its order is the point.

**Ids are permanent.** Shared links are built from them (`/centenary/?m=…`, `/centenary/story/?s=…`),
so reorder the arrays freely but do not reassign an id.

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
