export type Grade = {
  grade: string;
  group: 1 | 2 | 3;
  title?: string;
  points: string[];
  /** What this class is working on in the current unit, where the teachers have shared it. */
  currentUnit?: { intro: string; lead?: string; points?: string[]; quote?: string };
};

const commonJunior = [
  'Memorize simple prayers, sing Bhajans, five human values: truth, right action, peace, love, and non-violence',
  'Introduction to community service',
  'Skills: recitation, Bhajan singing, and storytelling',
];

const commonMiddle = [
  'Skills: sing bhajans, community service, self-expression through art, writing, and public speaking',
];

const commonSenior = [
  "Responsibility for one's own actions, time management, self-control (social media usage, etc), seeking guidance from within to resist negative peer pressure",
  'Self-expression through art, writing, discussions, and public speaking, taking initiatives and leadership roles both within the class and the larger group',
];

/** Shared across KG–3rd: one theme, taught through stories, for the whole group. */
const juniorUnit = {
  intro: 'The theme for this unit is Non-violence, taught through engaging stories.',
  lead: "Students will understand the broader meaning of non-violence through Swami's teachings:",
  points: [
    'Non-violence means not causing harm to people, animals, or nature in any form.',
    'Being mindful by not wasting food, water, or money.',
    'Speaking only kind and uplifting words.',
    'Choosing only positive books and TV shows.',
    'Practicing friendliness and harmony with others.',
  ],
};

export const grades: Grade[] = [
  {
    grade: 'Kindergarten',
    group: 1,
    title: 'First Steps to God',
    points: ['Introduction to the five human values through simple stories', ...commonJunior],
    currentUnit: juniorUnit,
  },
  {
    grade: '1st Grade',
    group: 1,
    title: 'Living with Values',
    points: ['Stories reinforce values', ...commonJunior],
    currentUnit: juniorUnit,
  },
  {
    grade: '2nd Grade',
    group: 1,
    title: 'Living With God',
    points: [
      "Stories reflect everyday events in a child's life and the need to seek guidance from God 'within'",
      ...commonJunior,
    ],
    currentUnit: juniorUnit,
  },
  {
    grade: '3rd Grade',
    group: 1,
    title: 'Cradle Tales Of Hinduism',
    points: [
      'Stories taken from the Ancient Hindu scriptures to illustrate human values and instill respect toward their spiritual heritage',
      ...commonJunior,
    ],
    currentUnit: juniorUnit,
  },
  {
    grade: '4th Grade',
    group: 2,
    title: 'W.A.T.C.H.',
    points: [
      'W A T C H (Words, Actions, Thoughts, Character, Heart)',
      "Practical curriculum based on Sri Sathya Sai Baba's teaching…watch your words, actions, thoughts, character, heart through inspiring stories with special emphasis on practice",
      'Memorize Sri Hanuman Chalisa',
      ...commonMiddle,
    ],
    currentUnit: {
      intro:
        'In this unit, students focus on watching their heart. Through short stories, they learn about prayer, kindness, compassion, and forgiveness.',
      quote:
        'One who cultivates the crop of Love in the field of his Heart is a true Christian, a true Hindu, a true Sikh, a true Muslim, and he alone is a true Human Being.',
    },
  },
  {
    grade: '5th Grade',
    group: 2,
    title: 'Ramayana for Everyday Life',
    points: [
      "Learning with devotion and reverence the story of Lord Rama's life with special emphasis on lessons to practice in one's daily life",
      'Memorize the Nama Ramayana',
      ...commonMiddle,
    ],
    currentUnit: {
      intro:
        "Throughout the year, students have been learning about the Ramayana. In this unit, they focus on Hanuman's leap across the ocean to deliver Lord Rama's message to Sita Mata.",
      lead: 'They will explore:',
      points: [
        "Hanuman's strength, devotion, and intelligence in overcoming obstacles.",
        'His encounter with Ravana and the burning of Lanka.',
        'The great battle between Lord Rama and Ravana.',
        "Vibhishana's coronation and Sri Rama Pattabhishekam.",
      ],
    },
  },
  {
    grade: '6th Grade',
    group: 2,
    title: 'I to We (Love is Expansion)',
    points: [
      "Curriculum based on Sri Sathya Sai Baba's teaching that LOVE is expansion! From individual self to importance of family, service to society, love for Motherland, and love for all creation. A hands-on course to impact young minds to grow in self-confidence and embrace universal good",
      'Memorize Guru Paduka Stotram',
      ...commonMiddle,
    ],
    currentUnit: {
      intro:
        'The theme of this unit is "I to We" — expanding one\'s love beyond oneself to include family, community, nation, and the universe.',
      lead: 'Key discussions include:',
      points: [
        'The importance of caring for the world and the universe.',
        "The concept of sustainability (5 R's: Reduce, Reuse, Recycle, Refuse, Repurpose).",
        'Appreciating the beauty of nature and our responsibility to protect it.',
        'Lessons from mountains, rivers, trees, and other elements of nature.',
      ],
    },
  },
  {
    grade: '7th Grade',
    group: 2,
    title: 'Unity in Diversity (Fatherhood of God, Brotherhood of Man)',
    points: [
      "Curriculum based on Sri Sathya Sai Baba's teaching that ALL faith leads to the One",
      "To instill love for one's own faith and respect and tolerance to all other faiths",
      'Students will visit different places of worship to broaden their understanding',
      'Memorize: Sri Sathya Sai Suprabhatam',
      ...commonMiddle,
    ],
  },
  {
    grade: '8th Grade',
    group: 3,
    title: 'Ceiling On Desires',
    points: [
      "Curriculum based on Sri Sathya Sai Baba's teaching: Do not waste money, food, time, energy, information",
      'Putting a ceiling on our desires and use the savings in the service of others',
      'A practical course where teens discuss the areas of wastage in their lives and how to bring about a transformation in personal life',
      'Memorize: Aditya Hrudayam',
      ...commonSenior,
    ],
    currentUnit: {
      intro:
        "This unit focuses on Swami's Ceiling on Desires program, which teaches students to set limits on their desire for food, money, time, energy, and information.",
      lead: 'With the rise of social media, Swami emphasized limiting unnecessary information consumption to cultivate inner peace. Students will discuss:',
      points: [
        'The meaning of controlling information consumption.',
        'Practical techniques to implement self-discipline.',
        'How this practice leads to greater focus and inner tranquility.',
      ],
    },
  },
  {
    grade: '9th Grade',
    group: 3,
    title: 'Saints of India',
    points: [
      'Saints of India (glimpses into the lives of saints and their love for God)',
      'Continue chanting the Aditya Hrudayam',
      ...commonSenior,
    ],
    currentUnit: {
      intro:
        'Students will explore various pathways to God such as faith, namasmarana (chanting the divine name), satsang (spiritual gatherings), and service.',
      lead: 'This unit follows a study circle model where students will:',
      points: [
        "Study Swami's discourses on humility, charity, and character.",
        "Watch Swami's lectures and videos.",
        'Engage in discussions based on personal experiences from senior students.',
      ],
    },
  },
  {
    grade: '10th Grade',
    group: 3,
    title: 'Bhaja Govindam',
    points: [
      "Selected verses from Adi Shankara's Bhaja Govindam",
      'Task of maintaining the NDSAI webpage',
      ...commonSenior,
    ],
  },
];

export const groups = [
  { id: 1, label: 'Group 1', range: 'KG – 3rd Grade' },
  { id: 2, label: 'Group 2', range: '4th – 7th Grade' },
  { id: 3, label: 'Group 3', range: '8th – 10th Grade' },
] as const;
