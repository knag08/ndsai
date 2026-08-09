export type Episode = {
  number: number;
  title: string;
  blurb: string;
  src: string;
  type: string;
};

/** Audio lives at the repository root under /podcasts/ — the same URLs the old site used. */
export const episodes: Episode[] = [
  {
    number: 1,
    title: 'The Power of Love and Compassion',
    blurb: 'Where every one of Swami’s teachings begins: love expressed as compassion for the person in front of you.',
    src: '/podcasts/NDSAI_Centennial%20Podcast_1.m4a',
    type: 'audio/mp4',
  },
  {
    number: 2,
    title: 'Living Truthfully — Being Real in a Fake World',
    blurb: 'What it takes to hold on to Sathya when so much of what surrounds us is curated and filtered.',
    src: '/podcasts/NDSAI_Centennial%20Podcast_2.mp3',
    type: 'audio/mpeg',
  },
  {
    number: 3,
    title: 'Self-Discipline and Right Conduct — Making Good Choices',
    blurb: 'Dharma in the small decisions of an ordinary school day.',
    src: '/podcasts/NDSAI_Centennial%20Podcast_3.mp3',
    type: 'audio/mpeg',
  },
  {
    number: 4,
    title: 'Ceiling on Desires & Mindful Living',
    blurb: 'Putting a limit on wanting — of food, money, time, energy and information — and giving the savings away.',
    src: '/podcasts/NDSAI_Centennial%20Podcast_4.mp3',
    type: 'audio/mpeg',
  },
  {
    number: 5,
    title: 'Service to Others — The Secret to Happiness',
    blurb: 'Why seva turns out to be the thing that makes the server happiest of all.',
    src: '/podcasts/NDSAI_Centennial%20Podcast_5.mp3',
    type: 'audio/mpeg',
  },
];

export type ResourceGroup = { heading: string; items: { label: string; title: string; href: string }[] };

/** Curated Sri Sathya Sai Media Centre listening, compiled for Bal Vikas teachers. */
export const teacherResources: ResourceGroup[] = [
  {
    heading: 'Human Values',
    items: [
      { label: 'Truth', title: 'Human Values - 044', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7c6/' },
      { label: 'Right action', title: 'Dharma - 045', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7c7/' },
      { label: 'Peace', title: 'What Is Shanthi - 047', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7c9/' },
      { label: 'Love', title: 'Understanding Love - 032', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7ba/' },
    ],
  },
  {
    heading: 'Group 1',
    items: [
      { label: 'Swami and Animals', title: 'Swami and animals', href: 'https://www.sssmediacentre.org/listen/635269470ea15c979936d41e/' },
    ],
  },
  {
    heading: 'I to We',
    items: [
      {
        label: 'Vyashti Samashti Srushti Parameshti',
        title: 'Episode 043 - Vyashti Samishti Srushti And Parameshti',
        href: 'https://www.sssmediacentre.org/listen/5f6d82439e4c999cabb2afe3/',
      },
    ],
  },
  {
    heading: 'Ceiling on Desires',
    items: [
      { label: 'Ceiling On Desires', title: 'Ceiling On Desires - 050', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7cc/' },
      { label: 'Time 1', title: "Afternoon Satsang - 369 - Don't Waste Time - Part 1", href: 'https://www.sssmediacentre.org/listen/6666f25dfaacdc5b7f11ee3c/' },
      { label: 'Time 2', title: "Afternoon Satsang - 370 - Don't Waste Time - Part 2", href: 'https://www.sssmediacentre.org/listen/666fa80dfaacdce4c311ee9b/' },
      { label: 'Energy / Dealing with stress', title: 'Stress - 087', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7f1/' },
    ],
  },
  {
    heading: 'Pathways to God',
    items: [
      { label: 'Path to God', title: 'The Path To God - 049', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7cb/' },
      { label: 'Faith 1', title: 'Knowing Faith And Having Faith - 043', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7c5/' },
      { label: 'Faith 2', title: 'God Exists - 057', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7d3/' },
      { label: 'Faith 3', title: 'Faith Or Experience Which Comes First - 098', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7fc/' },
      { label: 'Satsangh', title: 'A Sathsang On Sathsang - 099', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7fd/' },
      { label: 'Devotion 1', title: 'Sai Geetha And One Pointed Devotion - 029', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7b7/' },
      { label: 'Devotion 2', title: 'Do We Love Swami Or What He Gives - 034', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7bc/' },
      { label: 'Devotion 3', title: 'Best Friend - 073', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7e3/' },
      { label: 'Prayer', title: 'Prayer - 072', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7e2/' },
      { label: 'Namasmarana', title: 'Why What When Where Who How Of Namasmarana - 095', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7f9/' },
    ],
  },
  {
    heading: 'Bhaja Govindam',
    items: [
      { label: 'Practical Advaita', title: 'Practical Advaita - 031', href: 'https://www.sssmediacentre.org/listen/5f6d81ea9e4c999cabb0c7b9/' },
    ],
  },
];
