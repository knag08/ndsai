import { academicYear } from './calendar';

export const site = {
  name: 'North Dallas Sathya Sai BalVikas',
  shortName: 'NDSAI',
  tagline: 'Spiritual education, devotion and selfless service in North Dallas',
  url: 'https://ndsai.org',
  address: '14275 Rolater Rd, Frisco, TX 75035-5163, USA',
  email: {
    general: 'contact@ndsai.org',
    newsletter: 'newsletter@ndsai.org',
    narayanSeva: 'narayanseva@ndsai.org',
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
};

export const nav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  {
    label: 'Bal Vikas',
    href: '/balvikas/',
    children: [
      { label: 'The Programme', href: '/balvikas/', description: 'Values, objectives, timings and admission' },
      { label: 'Curriculum by Grade', href: '/balvikas/curriculum/', description: 'What each class studies, KG through 10th' },
      { label: 'Calendar', href: '/balvikas/calendar/', description: `Class dates for the ${academicYear} year` },
      { label: 'Veda Classes', href: '/balvikas/veda-classes/', description: 'Chanting for 4th grade and above' },
      { label: 'Student Voices', href: '/balvikas/student-voices/', description: 'Reflections written by our students' },
      { label: 'Teacher Resources', href: '/balvikas/teacher-resources/', description: 'Curated listening for Bal Vikas teachers' },
    ],
  },
  {
    label: 'Seva',
    href: '/seva/',
    children: [
      { label: 'Seva at the Center', href: '/seva/', description: 'What seva means and how to begin' },
      { label: 'Narayana Seva', href: '/seva/narayana-seva/', description: 'Serving a meal at Austin Street since 1985' },
      { label: 'Service Projects', href: '/seva/service-projects/', description: 'Projects our students have carried out' },
    ],
  },
  { label: 'Bhajans', href: '/bhajans/' },
  {
    label: 'Media',
    href: '/podcast/',
    children: [
      { label: 'Centennial Podcast', href: '/podcast/', description: 'Five episodes voiced by our students' },
      { label: 'Newsletter', href: '/newsletter/', description: 'Every edition, in full' },
      { label: 'Easwaramma Day', href: '/easwaramma-day/', description: 'The 2026 celebration in pictures' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];

/** The five human values that run through every part of the programme. */
export const humanValues = [
  { name: 'Sathya', english: 'Truth' },
  { name: 'Dharma', english: 'Right Conduct' },
  { name: 'Shanti', english: 'Peace' },
  { name: 'Prema', english: 'Love' },
  { name: 'Ahimsa', english: 'Non-violence' },
] as const;

export const ninePointCode = [
  'Daily meditation and prayer.',
  'Devotional singing/prayer with family members once per week.',
  'Participation in Sai Spiritual Education by children of the family.',
  'Participation in community service and other programs of the Organization.',
  'Regular attendance at devotional meetings conducted by the Organization.',
  'Regular study of Sathya Sai Baba literature.',
  'Use of soft, loving speech with everyone.',
  'Avoidance of talking ill of others, especially in their absence.',
  'The practice of the principles of Ceiling on Desires, consciously and continuously striving to eliminate the tendency to waste time, money, food, and energy, and utilizing any savings thereby generated for the service of mankind.',
] as const;

/** Standing seva opportunities, as listed in every newsletter edition. */
export const sevaOpportunities = [
  {
    title: 'Narayan Seva',
    when: 'First Friday of every month',
    body: 'A home-cooked vegetarian meal served at the Austin Street shelter in Dallas.',
    href: '/seva/narayana-seva/',
  },
  {
    title: 'Temple Cleaning Seva',
    when: 'First Saturday of every month, 10 am',
    body: 'The Shirdi Baba temple in Plano has been home to our unit presentations. Children are encouraged to take part as an expression of gratitude.',
  },
  {
    title: 'Breakfast Seva',
    when: 'Every day',
    body: 'A healthy, nutritious breakfast served to the homeless in Dallas, led by one of our own teachers.',
  },
  {
    title: 'Sheets & Parking',
    when: 'Every other month',
    body: 'Volunteers collect our white sheets and return them washed. Parking volunteers could use your help too.',
  },
] as const;
