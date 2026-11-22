/**
 * One hundred years, told as a sequence of dated moments, for /centenary/timeline/.
 *
 * The dates and events are drawn from the life history and project records the
 * Sri Sathya Sai Central Trust publishes at srisathyasai.org. The wording here
 * is our own, written short on purpose: the Trust tells these at length and
 * tells them well, and anyone who wants the full account should go and read it
 * there. This page is the shape of the hundred years at a glance.
 *
 * Where the Trust's own pages differ on a date, the more specific page wins —
 * the water-project pages over the timeline, for instance, since they give the
 * day rather than the year.
 */

export type Moment = {
  /** The year, as it heads the entry. */
  year: string;
  /** The day or month, where the record gives one. Omitted when it does not. */
  when?: string;
  /** A few words naming the moment. */
  title: string;
  /** One sentence on what happened. */
  body: string;
  /** Marks the handful of moments the page should dwell on. */
  major?: boolean;
  /**
   * A painting, for the early years only. The Trust illustrated Bhagawan's
   * childhood in watercolour and photographed everything after it; the
   * paintings are warm and carry well at card size, the archival photographs
   * are small and grainy, so only the paintings are used. File lives in
   * /img/centenary/timeline/ at its source resolution — do not upscale it.
   */
  image?: string;
  /** What the painting shows. Required whenever `image` is set. */
  alt?: string;
};

export type Era = {
  /** The span, for the era heading. */
  span: string;
  /** What to call these years. */
  title: string;
  /** A line setting the scene. */
  lede: string;
  moments: Moment[];
};

export const eras: Era[] = [
  {
    span: '1926 – 1940',
    title: 'A boy in Puttaparthi',
    lede: 'A hamlet of two lanes and some two hundred people, a day’s hard travel from anywhere.',
    moments: [
      {
        year: '1926',
        when: '23 November',
        title: 'Born',
        image: '/img/centenary/timeline/birth-house.webp',
        alt: 'A watercolour of the small thatched house at Puttaparthi, a woman walking towards its doorway.',
        body: 'Sathyanarayana Raju is born on a Monday morning in the month of Kartika, in a thatched house where his father keeps a small shop in the next room.',
        major: true,
      },
      {
        year: '1930s',
        title: 'The walk to school',
        image: '/img/centenary/timeline/walk-to-school.webp',
        alt: 'A watercolour of a boy walking a narrow path through green paddy fields towards distant hills, carrying a lunch tin.',
        body: 'From the age of eight he walks two and a half miles to school at Bukkapatnam, carrying his midday meal — and in the monsoon, wading neck-deep water with his school bag on his head.',
      },
      {
        year: '1930s',
        title: 'The Pandhari bhajan group',
        image: '/img/centenary/timeline/bhajan-group.webp',
        alt: 'A watercolour of boys processing through a village singing, with drum and cymbals, villagers watching from a wall.',
        body: 'He gathers sixteen or eighteen boys into a singing group and serves as its organiser, treasurer, composer and lead singer. Soon the neighbouring villages ask for them.',
      },
      {
        year: '1930s',
        title: 'Kamalapuram',
        image: '/img/centenary/timeline/kamalapuram.webp',
        alt: 'A watercolour of the household at Kamalapuram where the boy was sent to live.',
        body: 'Sent to live with his elder brother, he wakes at four to the bell of a steam engine and carries two pots of water before school. He gives away his share of food to whoever has none.',
      },
      {
        year: '1940',
        when: '23 May',
        title: 'Sugar candy and flowers',
        image: '/img/centenary/timeline/sugar-candy.webp',
        alt: 'A watercolour of a father holding a stick confronting his son indoors, a shrine on the wall behind them.',
        body: 'He gives out sweets and flowers from empty hands. Asked by his father whether he is god, ghost or madcap, he answers: I am Sai Baba.',
        major: true,
      },
      {
        year: '1940',
        when: '20 October',
        title: '“I am no longer your Sathya”',
        image: '/img/centenary/timeline/declaration.webp',
        alt: 'A watercolour of a boy stepping out through a doorway into the light, his school bag dropped behind him as his family look on.',
        body: 'Standing in his brother’s doorway he sets down his schoolbooks for the last time, and walks out to a garden where a crowd gathers to sing the first bhajan he teaches them.',
        major: true,
      },
    ],
  },
  {
    span: '1944 – 1950',
    title: 'A place to come to',
    lede: 'No road reached Puttaparthi. People crossed the Chitravathi by bullock cart, or waded.',
    moments: [
      {
        year: '1945',
        when: '14 December',
        title: 'The first mandir',
        body: 'On Vaikunta Ekadashi a tin shed with an annexe is opened on land given by two widows, Subbamma and Kamalamma. It is home for five years; the largest room is the prayer hall.',
      },
      {
        year: '1947',
        when: '25 May',
        title: 'The letter',
        body: 'At twenty-one he writes to his brother Seshama Raju setting out, in full, the mission he has come for.',
        major: true,
      },
      {
        year: '1947',
        when: '25 October',
        title: 'The first discourse',
        body: 'He speaks in public for the first time, at Karur in Tamil Nadu. Thousands of discourses follow over the next sixty-three years.',
      },
      {
        year: '1948',
        when: '14 January',
        title: 'A foundation is laid',
        body: 'Work begins on Prasanthi Nilayam, the Abode of Supreme Peace.',
      },
      {
        year: '1950',
        when: '23 November',
        title: 'Prasanthi Nilayam',
        body: 'The ashram is inaugurated on his twenty-fifth birthday. It remains the centre of everything that follows.',
        major: true,
      },
    ],
  },
  {
    span: '1954 – 1972',
    title: 'Teaching, and the first institutions',
    lede: 'The years in which the work takes the shape it would keep: write, teach, heal, serve.',
    moments: [
      {
        year: '1954',
        title: 'A hospital for the villages',
        body: 'The foundation stone is laid for the Sri Sathya Sai General Hospital. When it opens in 1956 it is the first medical care of any kind in the region.',
      },
      {
        year: '1957',
        when: '1 July',
        title: 'The banyan',
        body: 'He plants a banyan on the hill behind the ashram for those who come to meditate. It is standing still.',
      },
      {
        year: '1958',
        when: '2 February',
        title: 'Sanathana Sarathi',
        body: 'The ashram begins a monthly magazine. Over the next quarter century he writes fifteen series of articles for it in plain spoken Telugu — Prema Vahini, Dharma Vahini, Dhyana Vahini and the rest.',
        major: true,
      },
      {
        year: '1959',
        when: 'June',
        title: 'The Meditation Tree',
        body: 'Beneath the banyan he installs a copper yantra, about fifteen inches by ten, materialised earlier that year from the sands of the Chitravathi.',
      },
      {
        year: '1960',
        title: 'The Seva Organisations',
        body: 'He begins the Sri Sathya Sai Seva Organisations in India, so that people of every religion, class and caste can serve together. In time they reach more than 126 countries.',
      },
      {
        year: '1960',
        title: 'Sathyam Sivam Sundaram',
        body: 'Professor N. Kasturi of Mysore University publishes the first volume of the biography.',
      },
      {
        year: '1962',
        when: '1 October',
        title: 'Veda Purusha Jnana Saptaha Yajna',
        body: 'The week-long Dasara yajna is inaugurated, and Vedic scholars come from across India to speak on Sanathana Dharma as a way of living.',
      },
      {
        year: '1963',
        when: 'Guru Poornima',
        title: 'The three Sais',
        body: 'In the discourse that day he speaks of the triune advent — Shirdi Sai, Sathya Sai, Prema Sai.',
        major: true,
      },
      {
        year: '1964',
        title: 'Brindavan',
        body: 'A second ashram is established at Whitefield, on the outskirts of Bangalore.',
      },
      {
        year: '1968',
        when: '12 May',
        title: 'Dharmakshetra, and the first World Conference',
        body: 'The Bombay headquarters is opened, with devotees arriving from more than twenty countries across four continents.',
      },
      {
        year: '1968',
        when: '30 June',
        title: 'East Africa',
        body: 'He leaves India for the only time in his life.',
        major: true,
      },
      {
        year: '1968',
        when: '22 July',
        title: 'A college for women',
        body: 'The college opens at Anantapur — the first of the campuses that become the university.',
      },
      {
        year: '1969',
        when: '9 June',
        title: 'A college for men',
        body: 'The second college opens at Brindavan, Whitefield.',
      },
      {
        year: '1972',
        when: 'May',
        title: 'The first Summer Course',
        body: 'A summer school in Indian culture and spirituality is held for students from across the country, who also go out into the villages to serve.',
      },
      {
        year: '1972',
        when: '2 September',
        title: 'The Central Trust',
        body: 'The Sri Sathya Sai Central Trust is founded to carry the charitable work. Every project on this page after this date is its doing.',
        major: true,
      },
      {
        year: '1972',
        when: '17 October',
        title: 'Poornachandra Auditorium',
        body: 'The great hall at Prasanthi Nilayam is opened.',
      },
    ],
  },
  {
    span: '1975 – 1991',
    title: 'The mission widens',
    lede: 'Schools, then a university, then a hospital that charges nobody anything.',
    moments: [
      {
        year: '1975',
        title: 'Sarva Dharma Stupa',
        body: 'At the fiftieth birthday he inaugurates the pillar that stands for the unity of the world’s religions.',
      },
      {
        year: '1976',
        when: '28 August',
        title: 'The hospital at Whitefield',
        body: 'A general hospital opens on the outskirts of Bangalore. The same year, Srimathi Easwaramma High School opens at Puttaparthi.',
      },
      {
        year: '1981',
        when: '15 June',
        title: 'Primary and higher secondary schools',
        body: 'The schools at Prasanthi Nilayam open, completing a path from the first class to a degree.',
      },
      {
        year: '1981',
        when: '22 November',
        title: 'A university',
        body: 'The Sri Sathya Sai Institute of Higher Learning is inaugurated in the presence of the Chief Justice of India.',
        major: true,
      },
      {
        year: '1983',
        title: 'Books and Publications',
        body: 'A publishing trust is established to carry the teachings, and has done so ever since.',
      },
      {
        year: '1985',
        title: 'The planetarium',
        body: 'A planetarium opens at Prasanthi Nilayam, so that students might look up.',
      },
      {
        year: '1990',
        title: 'Hanuman on the hill',
        body: 'A statue sixty-five feet high is raised at the top of the Hill View Stadium for the sixty-fifth birthday.',
      },
      {
        year: '1991',
        when: '15 November',
        title: 'An airport',
        body: 'An airport is inaugurated at Prasanthi Nilayam.',
      },
      {
        year: '1991',
        when: '22 November',
        title: 'The super-speciality hospital',
        body: 'A 230-bed hospital opens at Prasanthigram, giving heart and kidney surgery at the highest level, free, to anyone who needs it. Its dome rises ninety feet.',
        major: true,
      },
    ],
  },
  {
    span: '1995 – 2007',
    title: 'Water',
    lede: 'The years in which the work turned to the thing Anantapur had never had.',
    moments: [
      {
        year: '1995',
        when: 'March',
        title: 'Anantapur begins',
        body: 'Work starts on bringing drinking water to a district whose rivers run dry and whose groundwater carried enough fluoride to deform bone.',
        major: true,
      },
      {
        year: '1995',
        when: '18 November',
        title: 'The first water arrives',
        body: 'The Prime Minister inaugurates the first phase. In eighteen months some 2,000 kilometres of pipeline reach about 730 villages and 1.25 million people.',
      },
      {
        year: '1995',
        when: '9 July',
        title: 'Sai Kulwant Hall',
        body: 'A hall is opened that holds twenty thousand people at a time for darshan.',
      },
      {
        year: '1997',
        when: '30 December',
        title: 'The Unity Cup',
        body: 'An India XI captained by Sachin Tendulkar plays at the Hill View Stadium. Earlier that year, the first Sai World Youth Conference is held.',
      },
      {
        year: '1999',
        when: '23 November',
        title: 'A postage stamp',
        body: 'The Department of Posts issues a stamp and a postal cover for the water work.',
      },
      {
        year: '2000',
        when: '18 November',
        title: 'Chaitanya Jyothi',
        body: 'A museum of the life and message opens for the seventy-fifth year of the advent.',
      },
      {
        year: '2001',
        when: '19 January',
        title: 'Whitefield’s hospital',
        body: 'A second free super-speciality hospital, of 333 beds, is opened by the Prime Minister — built in nine months and six million man hours.',
        major: true,
      },
      {
        year: '2001',
        title: 'Medak, and the radio',
        body: 'The water model is repeated for 320 villages in Medak and Mahbubnagar. Radio Sai begins broadcasting from Prasanthi Nilayam, around the clock.',
      },
      {
        year: '2002',
        when: '19 January',
        title: 'Water for Chennai',
        body: 'He announces that Krishna water will reach a city of millions that was managing on a third of what it needed.',
      },
      {
        year: '2004',
        when: '23 November',
        title: 'The gates open',
        body: 'On his seventy-ninth birthday the Kandaleru gates are raised. The water covers 150 kilometres in four days, and the Poondi reservoir begins to fill.',
        major: true,
      },
      {
        year: '2006',
        when: '22 November',
        title: 'A stadium',
        body: 'The President of India opens an Olympic-standard indoor stadium, a hundred metres by sixty.',
      },
      {
        year: '2007',
        when: '15 September',
        title: 'The Godavari districts',
        body: 'Water projects serving some 452 upland and tribal habitations are handed to the state. That year, 6,000 young people from 85 countries come to Prasanthi Nilayam.',
      },
    ],
  },
  {
    span: '2008 – 2026',
    title: 'What was left behind',
    lede: 'The last years, and the hundredth.',
    moments: [
      {
        year: '2008',
        when: '7 October',
        title: 'A thousand houses',
        body: 'After floods leave about four million people in Odisha homeless, a housing project is announced. In both phases, 1,000 houses are built for 1,000 families.',
      },
      {
        year: '2010',
        when: 'November',
        title: 'The eighty-fifth year',
        body: 'The advent is celebrated across India and in 125 countries. He gives his last discourse at the twenty-ninth convocation of the university.',
      },
      {
        year: '2011',
        when: '24 April',
        title: 'He leaves the body',
        body: 'After eighty-six years. The schools, the hospitals, the water and the organisations carry on.',
        major: true,
      },
      {
        year: '2026',
        when: '23 November',
        title: 'One hundred years',
        body: 'A century since the morning in the thatched house. You are reading this because somebody in North Dallas wanted you to mark it with them.',
        major: true,
      },
    ],
  },
];

/** Every moment, flattened — used for the count shown in the header. */
export const momentCount = eras.reduce((total, era) => total + era.moments.length, 0);
