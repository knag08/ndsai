export type NewsletterMeta = {
  slug: string;
  edition: string;
  title: string;
  date: string;
  iso: string;
  summary: string;
  cover: string;
  coverAlt: string;
  /** The original Mailchimp version, kept so nothing is lost. */
  original?: string;
  topics: string[];
};

export const newsletters: NewsletterMeta[] = [
  {
    slug: 'easwaramma-day-2026',
    edition: 'Special update',
    title: 'Easwaramma Day 2026',
    date: 'May 2026',
    iso: '2026-05-06',
    summary:
      'Final rehearsal and event-day details for Easwaramma Day at Frisco High School, and why the day is kept as a celebration of motherhood.',
    cover: '/img/easwaramma/easwaramma-day-2026-poster.webp',
    coverAlt: 'Mother Easwaramma Day 2026 commemorative poster',
    topics: ['Easwaramma Day', 'Rehearsals', 'Costumes', 'Seva opportunities'],
  },
  {
    slug: 'second-edition',
    edition: 'Second edition',
    title: 'Swami’s 100th Birthday',
    date: 'November 2025',
    iso: '2025-11-01',
    summary:
      'Baby gift kits for Sai Aashraya, care kits for Dallas, a thousand paper cranes for peace, the launch of the students’ podcast, and the origin of the Akhanda Bhajan.',
    cover: '/img/centenary/centenary-100.webp',
    coverAlt: 'Gold centenary emblem marking one hundred years',
    original: '/archive/newsletter02.html',
    topics: ['Centenary', 'Care kits', 'Paper cranes', 'Podcast', 'Akhanda Bhajans'],
  },
  {
    slug: 'first-edition',
    edition: 'First edition',
    title: 'Love in Action',
    date: 'Early 2025',
    iso: '2025-02-20',
    summary:
      'The first newsletter to our Bal Vikas families — a thousand paper cranes begun, seva stories from Kindergarten through 5th grade, and an invitation to Easwaramma Day.',
    cover: '/img/seva/paper-cranes.webp',
    coverAlt: 'Folded orange paper cranes gathered in boxes',
    original: '/archive/newsletter01.html',
    topics: ['Paper cranes', 'Seva stories', 'Easwaramma Day', 'Veda classes', 'Parenting'],
  },
];
