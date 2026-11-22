/**
 * One hundred published facts about Bhagawan Sri Sathya Sai Baba and the work
 * carried out in His name, shown at /centenary/facts/.
 *
 * Every fact here is taken from a page published by the organisation that did
 * the work — the Sri Sathya Sai Central Trust, or the hospitals themselves — and
 * each carries the address of the page it came from, so any of them can be
 * checked. Figures and dates are reproduced as those pages give them. Where
 * sources differ on a number, the Trust's own figure is the one used.
 *
 * Nothing is included here from memory, and nothing from a source that could not
 * be reached and read. The Sri Sathya Sai Institute of Higher Learning refuses
 * automated access to its website, so no student numbers, accreditation grades
 * or campus counts appear below; only what the Trust itself publishes about it.
 *
 * These are the publishers' own claims about their own work. They have not been
 * independently audited, and the page says so.
 */

export type Fact = {
  /** Stable, permanent — shared links are built from this. */
  id: string;
  /** The fact, as its source gives it. */
  text: string;
  /** Who published it. */
  source: string;
  /** The exact page it is published on. */
  url: string;
};

export const facts: Fact[] = [
  {
    id: "f001",
    text: "Bhagawan Sri Sathya Sai Baba was born in Puttaparthi on 23 November 1926, an auspicious Monday in the lunar month of Kartika, when Lord Shiva is especially adored.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-history.html",
  },
  {
    id: "f002",
    text: "He was born in the Hindu year of Akshaya, a word that means the Never-declining, the Ever-full.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-history.html",
  },
  {
    id: "f003",
    text: "In the early 1900s Puttaparthi was a small hamlet of just two lanes meeting at right angles, not far from the Chitravathi river.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f004",
    text: "As a schoolboy in Kamalapuram, Sathya woke to the bell of a steam engine at four o'clock every morning and carried two pots of water before going to school.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f005",
    text: "On 23 May 1940, Sathya called the household around Him and gave sugar candy and flowers out of nowhere; the neighbours rushed in to see.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f006",
    text: "On 20 October 1940, standing in his brother's doorway, Sathya cast aside his schoolbooks and said, \u201cI am no longer your Sathya.\u201d",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f007",
    text: "On 25 May 1947, at the age of twenty-one, He set out the mission and purpose of His advent in a letter to His brother, Seshama Raju.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-about-trust.html",
  },
  {
    id: "f008",
    text: "Baba's first mandir at Puttaparthi was inaugurated on Vaikunta Ekadashi, 14 December 1945.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f009",
    text: "As the number of devotees grew, a mandir was built in February 1947, where He began to live and give darshan.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-history.html",
  },
  {
    id: "f010",
    text: "Prasanthi Nilayam, the Abode of Supreme Peace, was inaugurated on 23 November 1950, Baba's twenty-fifth birthday.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-history.html",
  },
  {
    id: "f011",
    text: "Baba wrote fifteen series of articles for Sanathana Sarathi, among them Prema Vahini.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f012",
    text: "On His 83rd and 85th birthdays, in November 2008 and 2010, Baba rode on a golden chariot at His devotees' request.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-history.html",
  },
  {
    id: "f013",
    text: "Baba's last discourse was given at the 29th Convocation of the Sri Sathya Sai Institute of Higher Learning.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f014",
    text: "Baba discarded His bodily vesture on 24 April 2011, after eighty-six years.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-history.html",
  },
  {
    id: "f015",
    text: "The Sri Sathya Sai Seva Organisations, begun in the 1960s, grew to more than 126 countries, with Prasanthi Nilayam at their centre.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-history.html",
  },
  {
    id: "f016",
    text: "The 85th year of Baba's advent was celebrated across India and in 125 countries.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f017",
    text: "Puttaparthi lies 125 kilometres north-north-east of Bangalore.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam.html",
  },
  {
    id: "f018",
    text: "The day at Prasanthi Nilayam begins with the chanting of 21 Aumkars.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam.html",
  },
  {
    id: "f019",
    text: "Sai Kulwant Hall was built to hold up to 20,000 devotees at a time for Baba's daily darshan.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f020",
    text: "The spectators' gallery of the Hill View Stadium seats about 30,000 people.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f021",
    text: "A statue of Hanuman 65 feet high stands at the peak of the hill in Hill View Stadium, built to mark Baba's 65th birthday.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f022",
    text: "The Meditation Tree is a banyan Baba planted on 29 June 1959, and beneath it He installed a copper Yantra about 15 inches by 10 inches.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f023",
    text: "That Yantra was materialised out of the sands of the Chitravathi river in April 1959.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f024",
    text: "The Sarva Dharma Stupa, which stands for the unity of all the world's religions, was inaugurated at Baba's 50th birthday celebrations.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f025",
    text: "The Chaitanya Jyothi Museum was inaugurated on 18 November 2000, to mark the 75th year of the advent.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f026",
    text: "An Olympic-standard indoor stadium measuring 100 metres by 60 metres, on a 4.8-acre site, was inaugurated on 22 November 2006 by the President of India.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f027",
    text: "On 30 December 1997 the Sri Sathya Sai Unity Cup was played at Puttaparthi, with an India XI captained by Sachin Tendulkar.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f028",
    text: "The Annual Sports and Cultural Meet of Baba's schools and colleges is held on 11 January every year.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f029",
    text: "Baba inaugurated the Dattatreya temple at Prasanthi Nilayam on 13 January 1986, in answer to the prayers of devotees of Lord Dattatreya.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f030",
    text: "Radio Sai Global Harmony was launched from Prasanthi Nilayam to carry Baba's message around the world 24 hours a day.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f031",
    text: "More than 6,000 young people from 85 countries attended the Sai World Youth Conference at Prasanthi Nilayam.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f032",
    text: "Eleven multipurpose community halls, and a number of temples, have been built in Puttaparthi and the villages around it and handed over to the local bodies.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-culture.html",
  },
  {
    id: "f033",
    text: "Anantapur's three rivers run dry for most of the year, and even the groundwater was brackish and so high in fluoride that it was causing skeletal and dental deformities.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f034",
    text: "In March 1995 the Trust began work to bring pure drinking water to the villages of drought-ravaged Anantapur district.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f035",
    text: "In November 1995 Baba said that Rayalaseema, today a Raallaseema or rocky region, must be transformed into Ratnalaseema, a land that glitters as a diamond.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f036",
    text: "The Anantapur drinking water project was completed in a record time of eighteen months.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f037",
    text: "A total of 1.25 million people were benefited by the Anantapur drinking water project.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f038",
    text: "About 2,000 kilometres of pipeline of varying diameters were laid for the Anantapur project.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f039",
    text: "Forty-three sumps, holding between 1 lakh and 25 lakh litres, were built for the Anantapur project.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f040",
    text: "Eighteen balancing reservoirs, of 3 lakh to 10 lakh litres, were built on the tops of hillocks.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f041",
    text: "More than 1,500 precast concrete cisterns of 2,500 litres each were installed in the villages.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f042",
    text: "The first phase was inaugurated on 18 November 1995 by the then Prime Minister of India, Shri P. V. Narasimha Rao.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f043",
    text: "The completed Anantapur project was handed over to the Government of Andhra Pradesh in October 1997.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f044",
    text: "India's Ninth Five Year Plan called the project \u201can unparallel example of private initiative\u201d, carried out without any budgetary support from the State.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f045",
    text: "On 23 November 1999 the Department of Posts released a postage stamp and a postal cover in recognition of the water project.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f046",
    text: "Before the second phase, borewells around Puttaparthi had to be drilled deeper than 600 feet, and fluoride ran at 2 to 4 PPM against a safe level of about 1 PPM.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f047",
    text: "The second phase, begun in 2013, laid 411 kilometres of pipeline at a cost of Rs. 80 crore, for 118 habitations and a population of 2.5 lakhs.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-anantapur.html",
  },
  {
    id: "f048",
    text: "The Anantapur model was repeated to bring water to 320 villages in Medak and Mahabubnagar districts.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-medak.html",
  },
  {
    id: "f049",
    text: "That project cost Rs. 530 million, covered 640 square kilometres and served about a million people.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-medak.html",
  },
  {
    id: "f050",
    text: "Until December 2004 Chennai needed 750 million litres of water a day and was making do with a mere 250 million.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f051",
    text: "Of the 15 TMC of Krishna water promised to the city, only half a TMC was actually reaching the Poondi reservoir.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f052",
    text: "On 19 January 2002 Baba announced that He had determined to bring Krishna water to Chennai.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f053",
    text: "The capacity of the Kandaleru reservoir was raised more than fourfold, from 16 TMC to 68 TMC.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f054",
    text: "The Trust lined about 65 kilometres of the most vulnerable stretches of the 150-kilometre canal with concrete.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f055",
    text: "About 4,000 workers laboured round the clock on the Chennai water project.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f056",
    text: "The gates of the Kandaleru reservoir were opened on 23 November 2004, Baba's 79th birthday.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f057",
    text: "The water reached the Andhra Pradesh-Tamil Nadu border in four days, against the 8 to 10 days it used to take.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f058",
    text: "On 27 November 2004 the Poondi reservoir began to fill with the water devotees call Sai Ganga.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f059",
    text: "In January 2007 the Chennai Citizens' Conclave packed the Nehru Indoor Stadium to thank Baba for the gift of water to the city.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-chennai.html",
  },
  {
    id: "f060",
    text: "The Trust took up a project to supply safe drinking water to about 452 upland and tribal habitations in the Godavari districts.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-east-godavari.html",
  },
  {
    id: "f061",
    text: "About 212 habitations, with more than 2.20 lakh people, were served in East Godavari district.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-east-godavari.html",
  },
  {
    id: "f062",
    text: "About 240 habitations, with more than 4.70 lakh people, were served in West Godavari district.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-east-godavari.html",
  },
  {
    id: "f063",
    text: "Around 535 kilometres of pipeline were laid in East Godavari, and around 640 kilometres in West Godavari.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-east-godavari.html",
  },
  {
    id: "f064",
    text: "Both Godavari projects were completed and handed to the Government of Andhra Pradesh on 15 September 2007.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-east-godavari.html",
  },
  {
    id: "f065",
    text: "The Sri Sathya Sai General Hospital at Prasanthi Nilayam, started in 1956, was the first institution Baba established.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f066",
    text: "When it opened in 1956 it was the very first medical facility in the entire region.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-life-history-timeline.html",
  },
  {
    id: "f067",
    text: "Baba inaugurated the present General Hospital building on 28 August 1976.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f068",
    text: "The General Hospital now treats 300 to 400 patients a day, with 80 beds and three operation theatres.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f069",
    text: "The super-speciality hospital at Prasanthigram is a 230-bed hospital giving tertiary medical care completely free of charge to all.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f070",
    text: "It was inaugurated on 22 November 1991 by the then Prime Minister of India, on the eve of Baba's 66th birthday.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f071",
    text: "Its dome rises 90 feet above the hospital.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-prasanthi-nilayam-poi.html",
  },
  {
    id: "f072",
    text: "The Whitefield hospital in Bengaluru is a 333-bed tertiary care hospital, inaugurated by the then Prime Minister of India, Shri Atal Behari Vajpayee.",
    source: "Sri Sathya Sai Institute of Higher Medical Sciences",
    url: "https://whitefield.sssihms.org/about-hospital/",
  },
  {
    id: "f073",
    text: "The foundation stone at Whitefield was laid on 2 September 1999, and the hospital was inaugurated on 19 January 2001.",
    source: "Sri Sathya Sai Institute of Higher Medical Sciences",
    url: "https://whitefield.sssihms.org/about-hospital/genesis/",
  },
  {
    id: "f074",
    text: "The Whitefield hospital was built in nine months, a project of six million man hours.",
    source: "Sri Sathya Sai Institute of Higher Medical Sciences",
    url: "https://whitefield.sssihms.org/about-hospital/genesis/",
  },
  {
    id: "f075",
    text: "The Whitefield hospital runs twelve modular operation theatres, three intensive care units and three catheterisation labs, round the clock.",
    source: "Sri Sathya Sai Institute of Higher Medical Sciences",
    url: "https://whitefield.sssihms.org/specialties/",
  },
  {
    id: "f076",
    text: "The chandelier under the central dome at Whitefield is made of 11,000 individual pieces of glass, every one blown by mouth.",
    source: "Sri Sathya Sai Institute of Higher Medical Sciences",
    url: "https://whitefield.sssihms.org/about-hospital/genesis/",
  },
  {
    id: "f077",
    text: "Almost thirty people worked three months to make that chandelier, and five engineers installed it in five days.",
    source: "Sri Sathya Sai Institute of Higher Medical Sciences",
    url: "https://whitefield.sssihms.org/about-hospital/genesis/",
  },
  {
    id: "f078",
    text: "Tertiary medical care has been given free of charge at the Whitefield hospital since 2001.",
    source: "Sri Sathya Sai Institute of Higher Medical Sciences",
    url: "https://whitefield.sssihms.org/",
  },
  {
    id: "f079",
    text: "The Sri Sathya Sai Mobile Hospital, a rural outreach service, was launched by Baba on 30 March 2006.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f080",
    text: "The Mobile Hospital runs from the 1st to the 12th of every month at twelve nodal villages drawn from six mandals of Anantapur district.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f081",
    text: "It serves 63 target villages, besides patients who come from about 400 villages in the region.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f082",
    text: "About 500 doctors from Andhra Pradesh and Telangana, across twelve specialties, serve the Mobile Hospital as volunteers.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f083",
    text: "The Mobile Hospital carries ultrasound with colour doppler, a 2D echocardiogram, digital x-ray and a laboratory.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f084",
    text: "A college for women was built in Anantapur, the district capital, in 1968.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-about-trust.html",
  },
  {
    id: "f085",
    text: "In 1981 Baba set up the Sri Sathya Sai Institute of Higher Learning, a deemed university.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f086",
    text: "The Sri Sathya Sai Higher Secondary School at Prasanthi Nilayam was started in 1983.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f087",
    text: "On 23 June 1981 Baba founded the Sri Sathya Sai Gurukulam English Medium School at Rajamahendravaram.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f088",
    text: "Baba launched the Sri Sathya Sai Vidya Vahini programme on 23 November 2010, for holistic education for all.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-projects.html",
  },
  {
    id: "f089",
    text: "After the Odisha floods of September 2008 left about four million people homeless across 6,000 villages, the Trust announced a project to rebuild their houses.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-orissa-housing-project.html",
  },
  {
    id: "f090",
    text: "Work began on 30 November 2008, and by the end of March 2009 two hundred houses were complete and ready to live in.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-orissa-housing-project.html",
  },
  {
    id: "f091",
    text: "By 5 November 2009 around 700 houses in 16 villages of Cuttack, Kendrapara and Puri had been built and handed over, in less than a year.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-orissa-housing-project.html",
  },
  {
    id: "f092",
    text: "A second phase from January 2013 built 300 more houses in eight villages.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-orissa-housing-project.html",
  },
  {
    id: "f093",
    text: "In all, 1,000 houses were built for 1,000 poor families, as Baba had promised, at an outlay of nearly 15 crore rupees.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-orissa-housing-project.html",
  },
  {
    id: "f094",
    text: "After the Bhuj earthquake of January 2001, Baba Himself flagged off a convoy of thirty trucks of relief material from Prasanthi Nilayam.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-relief-disasters.html",
  },
  {
    id: "f095",
    text: "After the tsunami of 26 December 2004, volunteers carried relief to more than 5,000 families in Nagapattinam district and Pondicherry.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-relief-disasters.html",
  },
  {
    id: "f096",
    text: "In 1978 Baba built the Jamia Masjid mosque; until then the Muslims of the area, mostly poor farmers, prayed in a hut that held about fifteen people.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-relief-poor.html",
  },
  {
    id: "f097",
    text: "The Sri Sathya Sai Central Trust was founded by Sri Sathya Sai Baba on 2 September 1972.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-about-history.html",
  },
  {
    id: "f098",
    text: "The Trust has commissioned a 6 MW solar power plant to run all of its institutions and ashrams.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-about-history.html",
  },
  {
    id: "f099",
    text: "In January 2017 the Trust set up its first solar plant, of 100 kWp, at the Whitefield hospital.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-mitra.html",
  },
  {
    id: "f100",
    text: "The hospital replaced its entire lighting with 3,000 LED tubes, cutting the lighting load by 60 per cent and saving up to 10,000 units of energy a month.",
    source: "Sri Sathya Sai Central Trust",
    url: "https://www.srisathyasai.org/pages/sai-mitra.html",
  },
];

/** Guards against an id being duplicated by a later edit, which would make shared links ambiguous. */
const seen = new Set<string>();
for (const f of facts) {
  if (seen.has(f.id)) throw new Error(`Duplicate fact id: ${f.id}`);
  seen.add(f.id);
}
