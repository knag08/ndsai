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
  /** What the picture shows. Required whenever `image` is set. */
  alt?: string;
  /**
   * The file's real pixel size, so the browser reserves the right box and the
   * card does not jump as it loads. These vary: some of the Trust's pictures
   * are portrait, letterboxed into a landscape frame, and the grey bars were
   * trimmed off. Never scale a file up to make these match.
   */
  imageWidth?: number;
  imageHeight?: number;
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
        imageWidth: 624,
        imageHeight: 461,
        body: 'Sathyanarayana Raju is born on a Monday morning in the month of Kartika, in a thatched house where his father keeps a small shop in the next room.',
        major: true,
      },
      {
        year: '1930s',
        title: 'The walk to school',
        image: '/img/centenary/timeline/walk-to-school.webp',
        alt: 'A watercolour of a boy walking a narrow path through green paddy fields towards distant hills, carrying a lunch tin.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'From the age of eight he walks two and a half miles to school at Bukkapatnam, carrying his midday meal — and in the monsoon, wading neck-deep water with his school bag on his head.',
      },
      {
        year: '1930s',
        title: 'The Pandhari bhajan group',
        image: '/img/centenary/timeline/bhajan-group.webp',
        alt: 'A watercolour of boys processing through a village singing, with drum and cymbals, villagers watching from a wall.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'He gathers sixteen or eighteen boys into a singing group and serves as its organiser, treasurer, composer and lead singer. Soon the neighbouring villages ask for them.',
      },
      {
        year: '1930s',
        title: 'Kamalapuram',
        image: '/img/centenary/timeline/kamalapuram.webp',
        alt: 'A watercolour of the household at Kamalapuram where the boy was sent to live.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'Sent to live with his elder brother, he wakes at four to the bell of a steam engine and carries two pots of water before school. He gives away his share of food to whoever has none.',
      },
      {
        year: '1940',
        when: '23 May',
        title: 'Sugar candy and flowers',
        image: '/img/centenary/timeline/sugar-candy.webp',
        alt: 'A watercolour of a father holding a stick confronting his son indoors, a shrine on the wall behind them.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'He gives out sweets and flowers from empty hands. Asked by his father whether he is god, ghost or madcap, he answers: I am Sai Baba.',
        major: true,
      },
      {
        year: '1940',
        when: '20 October',
        title: '“I am no longer your Sathya”',
        image: '/img/centenary/timeline/declaration.webp',
        alt: 'A watercolour of a boy stepping out through a doorway into the light, his school bag dropped behind him as his family look on.',
        imageWidth: 624,
        imageHeight: 461,
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
        image: '/img/centenary/timeline/first-mandir.webp',
        alt: 'The first ashram at Puttaparthi, a long tin-roofed shed behind a low stone wall.',
        imageWidth: 602,
        imageHeight: 460,
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
        image: '/img/centenary/timeline/first-discourse.webp',
        alt: 'Bhagawan Sri Sathya Sai Baba in the years of the first public discourses.',
        imageWidth: 317,
        imageHeight: 461,
        body: 'He speaks in public for the first time, at Karur in Tamil Nadu. Thousands of discourses follow over the next sixty-three years.',
      },
      {
        year: '1948',
        when: '14 January',
        title: 'A foundation is laid',
        image: '/img/centenary/timeline/foundation-prasanthi.webp',
        alt: 'The building of Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'Work begins on Prasanthi Nilayam, the Abode of Supreme Peace.',
      },
      {
        year: '1950',
        when: '23 November',
        title: 'Prasanthi Nilayam',
        image: '/img/centenary/timeline/prasanthi-nilayam.webp',
        alt: 'The gateway of Prasanthi Nilayam in its earliest years.',
        imageWidth: 504,
        imageHeight: 458,
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
        image: '/img/centenary/timeline/general-hospital.webp',
        alt: 'The Sri Sathya Sai General Hospital at Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'The foundation stone is laid for the Sri Sathya Sai General Hospital. When it opens in 1956 it is the first medical care of any kind in the region.',
      },
      {
        year: '1957',
        when: '1 July',
        title: 'The banyan',
        image: '/img/centenary/timeline/banyan-tree.webp',
        alt: 'The banyan planted on the hill behind Prasanthi Nilayam for those who come to meditate.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'He plants a banyan on the hill behind the ashram for those who come to meditate. It is standing still.',
      },
      {
        year: '1958',
        when: '2 February',
        title: 'Sanathana Sarathi',
        image: '/img/centenary/timeline/sanathana-sarathi.webp',
        alt: 'The cover of Sanathana Sarathi, the ashram’s monthly magazine.',
        imageWidth: 334,
        imageHeight: 461,
        body: 'The ashram begins a monthly magazine. Over the next quarter century he writes fifteen series of articles for it in plain spoken Telugu — Prema Vahini, Dharma Vahini, Dhyana Vahini and the rest.',
        major: true,
      },
      {
        year: '1959',
        when: 'June',
        title: 'The Meditation Tree',
        image: '/img/centenary/timeline/meditation-tree.webp',
        alt: 'The banyan Meditation Tree on the hill behind Prasanthi Nilayam.',
        imageWidth: 900,
        imageHeight: 600,
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
        image: '/img/centenary/timeline/sathyam-sivam-sundaram.webp',
        alt: 'The cover of Sathyam Sivam Sundaram, the biography by Professor N. Kasturi.',
        imageWidth: 335,
        imageHeight: 461,
        body: 'Professor N. Kasturi of Mysore University publishes the first volume of the biography.',
      },
      {
        year: '1962',
        when: '1 October',
        title: 'Veda Purusha Jnana Saptaha Yajna',
        image: '/img/centenary/timeline/veda-yajna.webp',
        alt: 'The week-long Dasara yajna at Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 453,
        body: 'The week-long Dasara yajna is inaugurated, and Vedic scholars come from across India to speak on Sanathana Dharma as a way of living.',
      },
      {
        year: '1963',
        when: 'Guru Poornima',
        title: 'The three Sais',
        image: '/img/centenary/timeline/three-sais.webp',
        alt: 'Bhagawan Sri Sathya Sai Baba at Prasanthi Nilayam in the early 1960s.',
        imageWidth: 363,
        imageHeight: 461,
        body: 'In the discourse that day he speaks of the triune advent — Shirdi Sai, Sathya Sai, Prema Sai.',
        major: true,
      },
      {
        year: '1964',
        title: 'Brindavan',
        image: '/img/centenary/timeline/brindavan.webp',
        alt: 'The Brindavan ashram at Whitefield, outside Bangalore.',
        imageWidth: 570,
        imageHeight: 461,
        body: 'A second ashram is established at Whitefield, on the outskirts of Bangalore.',
      },
      {
        year: '1968',
        when: '12 May',
        title: 'Dharmakshetra, and the first World Conference',
        image: '/img/centenary/timeline/dharmakshetra.webp',
        alt: 'Dharmakshetra, the headquarters at Andheri in Bombay.',
        imageWidth: 601,
        imageHeight: 456,
        body: 'The Bombay headquarters is opened, with devotees arriving from more than twenty countries across four continents.',
      },
      {
        year: '1968',
        when: '30 June',
        title: 'East Africa',
        image: '/img/centenary/timeline/east-africa.webp',
        alt: 'Bhagawan Sri Sathya Sai Baba during the journey to East Africa.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'He leaves India for the only time in his life.',
        major: true,
      },
      {
        year: '1968',
        when: '22 July',
        title: 'A college for women',
        image: '/img/centenary/timeline/college-anantapur.webp',
        alt: 'The Sri Sathya Sai college for women at Anantapur.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'The college opens at Anantapur — the first of the campuses that become the university.',
      },
      {
        year: '1969',
        when: '9 June',
        title: 'A college for men',
        image: '/img/centenary/timeline/college-brindavan.webp',
        alt: 'The Sri Sathya Sai college for men at Brindavan, Whitefield.',
        imageWidth: 624,
        imageHeight: 458,
        body: 'The second college opens at Brindavan, Whitefield.',
      },
      {
        year: '1972',
        when: 'May',
        title: 'The first Summer Course',
        image: '/img/centenary/timeline/summer-course.webp',
        alt: 'Students at the first Summer Course in Indian Culture and Spirituality.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'A summer school in Indian culture and spirituality is held for students from across the country, who also go out into the villages to serve.',
      },
      {
        year: '1972',
        when: '2 September',
        title: 'The Central Trust',
        image: '/img/centenary/timeline/central-trust.webp',
        alt: 'Prasanthi Nilayam, seat of the Sri Sathya Sai Central Trust.',
        imageWidth: 624,
        imageHeight: 289,
        body: 'The Sri Sathya Sai Central Trust is founded to carry the charitable work. Every project on this page after this date is its doing.',
        major: true,
      },
      {
        year: '1972',
        when: '17 October',
        title: 'Poornachandra Auditorium',
        image: '/img/centenary/timeline/poornachandra.webp',
        alt: 'The Poornachandra Auditorium at Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 461,
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
        image: '/img/centenary/timeline/sarva-dharma-stupa.webp',
        alt: 'The Sarva Dharma Stupa, the pillar standing for the unity of the world’s religions.',
        imageWidth: 314,
        imageHeight: 461,
        body: 'At the fiftieth birthday he inaugurates the pillar that stands for the unity of the world’s religions.',
      },
      {
        year: '1976',
        when: '28 August',
        title: 'The hospital at Whitefield',
        image: '/img/centenary/timeline/whitefield-general-hospital.webp',
        alt: 'The general hospital at Whitefield, outside Bangalore.',
        imageWidth: 624,
        imageHeight: 444,
        body: 'A general hospital opens on the outskirts of Bangalore. The same year, Srimathi Easwaramma High School opens at Puttaparthi.',
      },
      {
        year: '1981',
        when: '15 June',
        title: 'Primary and higher secondary schools',
        image: '/img/centenary/timeline/schools.webp',
        alt: 'The Sri Sathya Sai primary and higher secondary schools at Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 224,
        body: 'The schools at Prasanthi Nilayam open, completing a path from the first class to a degree.',
      },
      {
        year: '1981',
        when: '22 November',
        title: 'A university',
        image: '/img/centenary/timeline/university.webp',
        alt: 'The Sri Sathya Sai Institute of Higher Learning at Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 403,
        body: 'The Sri Sathya Sai Institute of Higher Learning is inaugurated in the presence of the Chief Justice of India.',
        major: true,
      },
      {
        year: '1983',
        title: 'Books and Publications',
        image: '/img/centenary/timeline/books-publications.webp',
        alt: 'A publication of the Sri Sathya Sai Books and Publications Trust.',
        imageWidth: 324,
        imageHeight: 461,
        body: 'A publishing trust is established to carry the teachings, and has done so ever since.',
      },
      {
        year: '1985',
        title: 'The planetarium',
        image: '/img/centenary/timeline/planetarium.webp',
        alt: 'The planetarium at Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 418,
        body: 'A planetarium opens at Prasanthi Nilayam, so that students might look up.',
      },
      {
        year: '1990',
        title: 'Hanuman on the hill',
        image: '/img/centenary/timeline/hanuman-statue.webp',
        alt: 'The statue of Hanuman, sixty-five feet high, at the top of the Hill View Stadium.',
        imageWidth: 305,
        imageHeight: 461,
        body: 'A statue sixty-five feet high is raised at the top of the Hill View Stadium for the sixty-fifth birthday.',
      },
      {
        year: '1991',
        when: '15 November',
        title: 'An airport',
        image: '/img/centenary/timeline/airport.webp',
        alt: 'The airport at Prasanthi Nilayam.',
        imageWidth: 622,
        imageHeight: 461,
        body: 'An airport is inaugurated at Prasanthi Nilayam.',
      },
      {
        year: '1991',
        when: '22 November',
        title: 'The super-speciality hospital',
        image: '/img/centenary/timeline/super-speciality-hospital.webp',
        alt: 'Beneath the dome of the super-speciality hospital at Prasanthigram.',
        imageWidth: 624,
        imageHeight: 423,
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
        image: '/img/centenary/timeline/anantapur-water.webp',
        alt: 'The Anantapur drinking water supply project.',
        imageWidth: 624,
        imageHeight: 461,
        body: 'The Prime Minister inaugurates the first phase. In eighteen months some 2,000 kilometres of pipeline reach about 730 villages and 1.25 million people.',
      },
      {
        year: '1995',
        when: '9 July',
        title: 'Sai Kulwant Hall',
        image: '/img/centenary/timeline/sai-kulwant-hall.webp',
        alt: 'Sai Kulwant Hall at Prasanthi Nilayam, which holds twenty thousand people.',
        imageWidth: 624,
        imageHeight: 413,
        body: 'A hall is opened that holds twenty thousand people at a time for darshan.',
      },
      {
        year: '1997',
        when: '30 December',
        title: 'The Unity Cup',
        image: '/img/centenary/timeline/unity-cup.webp',
        alt: 'The Sri Sathya Sai Unity Cup cricket match at the Hill View Stadium.',
        imageWidth: 624,
        imageHeight: 321,
        body: 'An India XI captained by Sachin Tendulkar plays at the Hill View Stadium. Earlier that year, the first Sai World Youth Conference is held.',
      },
      {
        year: '1999',
        when: '23 November',
        title: 'A postage stamp',
        image: '/img/centenary/timeline/postage-stamp.webp',
        alt: 'The Indian postage stamp of three rupees issued for the Sri Sathya Sai Water Supply Project.',
        imageWidth: 395,
        imageHeight: 264,
        body: 'The Department of Posts issues a stamp and a postal cover for the water work.',
      },
      {
        year: '2000',
        when: '18 November',
        title: 'Chaitanya Jyothi',
        image: '/img/centenary/timeline/chaitanya-jyothi.webp',
        alt: 'Bhagawan Sri Sathya Sai Baba before a great gathering at Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 387,
        body: 'A museum of the life and message opens for the seventy-fifth year of the advent.',
      },
      {
        year: '2001',
        when: '19 January',
        title: 'Whitefield’s hospital',
        image: '/img/centenary/timeline/whitefield-hospital.webp',
        alt: 'The super-speciality hospital at Whitefield, Bengaluru.',
        imageWidth: 624,
        imageHeight: 413,
        body: 'A second free super-speciality hospital, of 333 beds, is opened by the Prime Minister — built in nine months and six million man hours.',
        major: true,
      },
      {
        year: '2001',
        title: 'Medak, and the radio',
        image: '/img/centenary/timeline/medak-water.webp',
        alt: 'The water supply project in Medak and Mahbubnagar.',
        imageWidth: 624,
        imageHeight: 419,
        body: 'The water model is repeated for 320 villages in Medak and Mahbubnagar. Radio Sai begins broadcasting from Prasanthi Nilayam, around the clock.',
      },
      {
        year: '2002',
        when: '19 January',
        title: 'Water for Chennai',
        image: '/img/centenary/timeline/chennai-water.webp',
        alt: 'The canal works that carried Krishna water towards Chennai.',
        imageWidth: 624,
        imageHeight: 452,
        body: 'He announces that Krishna water will reach a city of millions that was managing on a third of what it needed.',
      },
      {
        year: '2004',
        when: '23 November',
        title: 'The gates open',
        image: '/img/centenary/timeline/gates-open.webp',
        alt: 'The canal carrying Krishna water towards Chennai.',
        imageWidth: 400,
        imageHeight: 300,
        body: 'On his seventy-ninth birthday the Kandaleru gates are raised. The water covers 150 kilometres in four days, and the Poondi reservoir begins to fill.',
        major: true,
      },
      {
        year: '2006',
        when: '22 November',
        title: 'A stadium',
        image: '/img/centenary/timeline/indoor-stadium.webp',
        alt: 'The President of India, Dr A. P. J. Abdul Kalam, speaking at the opening of the indoor stadium, with Bhagawan seated beside him.',
        imageWidth: 608,
        imageHeight: 454,
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
        image: '/img/centenary/timeline/odisha-housing.webp',
        alt: 'A family in Odisha at the door of their newly built house, holding a picture of Bhagawan.',
        imageWidth: 622,
        imageHeight: 461,
        body: 'After floods leave about four million people in Odisha homeless, a housing project is announced. In both phases, 1,000 houses are built for 1,000 families.',
      },
      {
        year: '2010',
        when: 'November',
        title: 'The eighty-fifth year',
        image: '/img/centenary/timeline/eighty-fifth-year.webp',
        alt: 'The celebration of the eighty-fifth year of the advent at Prasanthi Nilayam.',
        imageWidth: 624,
        imageHeight: 420,
        body: 'The advent is celebrated across India and in 125 countries. He gives his last discourse at the twenty-ninth convocation of the university.',
      },
      {
        year: '2011',
        when: '24 April',
        title: 'He leaves the body',
        image: '/img/centenary/timeline/maha-samadhi.webp',
        alt: 'The Maha Samadhi at Prasanthi Nilayam.',
        imageWidth: 900,
        imageHeight: 562,
        body: 'After eighty-six years. The schools, the hospitals, the water and the organisations carry on.',
        major: true,
      },
      {
        year: '2026',
        when: '23 November',
        title: '“My life is My message”',
        body: 'Bhagawan said it at the first World Conference, on 17 May 1968, to people who had asked Him for a message to carry home. A hundred years from the morning in the thatched house, that is still the whole of it.',
        major: true,
      },
    ],
  },
];

/**
 * The instrumental played behind the presentation view, for a screen in the
 * hall. The player is rendered only while this `src` is set, so emptying it
 * takes the music and the speaker button off the page again.
 *
 * It never starts by itself. A guest who scans the QR code gets silence: the
 * only thing that begins it is a press of the Present button, and the speaker
 * beside it stops and starts it from there. Three minutes and nine seconds,
 * looped, against a deck that takes about seven minutes to walk.
 */
export const presentationMusic: { src: string; type: string; credit: string } = {
  src: '/audio/centenary-instrumental.mp3',
  type: 'audio/mpeg',
  credit: 'Centenary instrumental',
};

/** Every moment, flattened — used for the count shown in the header. */
export const momentCount = eras.reduce((total, era) => total + era.moments.length, 0);
