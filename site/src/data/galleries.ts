/**
 * Service-project photographs from the previous site. These files stay at the
 * repository root under /downloaded_images/ so their original URLs keep resolving.
 */
const legacy = (name: string) => `/downloaded_images/${name}`;

export type ServiceGallery = { title: string; blurb?: string; images: string[] };

export const serviceGalleries: ServiceGallery[] = [
  {
    title: 'K–2nd Grade Seva',
    blurb: 'Living With God — the youngest children’s first service projects.',
    images: [
      'f35538_75b9a1e824964ff38ffd404da33d3b20~mv2.jpg',
      'f35538_47d1e24c27524b23a77ad52aa106e38f~mv2.jpg',
      'f35538_ce75d0f3ae854bf3b092dea1545209ce~mv2.jpg',
      'f35538_c92844f0841546d3aeb30928b166b7d0~mv2.jpg',
      'f35538_a7bff9c6bfac42478709dc30ac7d4808~mv2.jpg',
      'f35538_2f88a3a7241d4737ac45e68cdfdf5588~mv2.jpg',
      'f35538_92491e67c930428b960acef22ea5942b~mv2.jpg',
      'f35538_a5e5cde62b964def939a8215f9660b9f~mv2.jpg',
      'f35538_b7af8333edb44a2bbfdfd3a30b76aa07~mv2.jpg',
      'f35538_85441aeaf3ec476099fb1e2116ee83f6~mv2.jpg',
    ].map(legacy),
  },
  {
    title: '3rd & 4th Grade Seva',
    images: [
      'f35538_740d8f2b9c5647b792a50fe1d35ce281~mv2.jpeg',
      'f35538_f9c1aff1060743c2a9c6221a24022fd2~mv2.jpg',
      'f35538_a4eae656d9044714b19dee0cbd1ecd9f~mv2.jpeg',
      'f35538_3e75cdf0908a4603ae0e979a920921f0~mv2.jpeg',
      'f35538_6f6b13276989474daceb1a98de1e09e8~mv2.jpeg',
    ].map(legacy),
  },
  {
    title: 'Park Cleaning Project',
    blurb: 'Students clearing parks and streams in Plano.',
    images: [
      'f35538_1a11afc19b97465e89642ec23462e8b7~mv2.jpg',
      'f35538_aa26b8709a674901b28a7b3158047412~mv2.jpg',
      'f35538_5b7bf6d36be94098abdbb0602873b02c~mv2.jpg',
    ].map(legacy),
  },
  {
    title: 'Nursing Home Seva',
    blurb: 'A Halloween visit to our elderly friends.',
    images: [
      'f35538_df0a9c1ad3fd4088be08fe22aa363ab8~mv2.jpeg',
      'f35538_7100315ec8d94c0885ed6a64c88ddacd~mv2.jpeg',
      'f35538_719127d065c24cc1bcf8f13cdd441e7a~mv2.jpeg',
      'f35538_9476af34c2ba44e1909d33362c2b6393~mv2.jpeg',
      'f35538_6bd1e649ad574133a4a21050303e74c0~mv2.jpeg',
      'f35538_00ab146e2b404016a9f2a662d5ae7469~mv2.jpeg',
    ].map(legacy),
  },
  {
    title: 'Ramayana Class Seva',
    blurb: '2018–2019.',
    images: [
      'f35538_cf611ca698c1445ca528f7f198befa0a~mv2.jpg',
      'f35538_5bf7ea5009e445899790d94d83407418~mv2.jpg',
      'f35538_2fd8bbf353024f36a452471f9e3a969a~mv2.jpg',
      'f35538_9dd800fb308f4083abde09dc98dde203~mv2.jpg',
    ].map(legacy),
  },
  {
    title: 'Packing Clothes for Orphans in Ghana',
    blurb: 'September 2019.',
    images: [
      'f35538_f0b642dca562457d9ddb4af7a4b37bbb~mv2.jpeg',
      'f35538_f1058770c6fd4f968c1e86825ff5fc85~mv2.jpeg',
      'f35538_2d86e3edd0754e559763f2142c59ebef~mv2.jpeg',
    ].map(legacy),
  },
  {
    title: '9th & 10th Grade Seva',
    blurb: 'Austin Street shelter and the winter care kits.',
    images: [
      'f35538_33e65add8d554b0ab36c2a3fb275c735~mv2.jpeg',
      'f35538_0590b089b4294920877ff3ffff1c9ead~mv2.jpg',
      'f35538_8d40fa701790418f9e48c03b819a35d5~mv2.jpeg',
      'f35538_aae053c071dc459e9ef315ed3505bfed~mv2.jpeg',
      'f35538_87ff670404b54e27b4f220c284bf20f8~mv2.jpeg',
      'f35538_b56446b2a0b14820b0d8ad5a26e11801~mv2.jpeg',
      'f35538_a5d675043f0b49a09d7752967b4deae2~mv2.jpeg',
      'f35538_841909e3f23c46a3a326ba680f88e94f~mv2.jpeg',
      'f35538_01eac68d14594dbab1ac9bfcd925afc5~mv2.jpeg',
      'f35538_634b54b1f6694dadae2e4782a4580aa5~mv2.jpg',
    ].map(legacy),
  },
];

/**
 * Easwaramma Day 2026 at Frisco High School. Photographs are numbered as they
 * appear in the center's shared album; captions describe what each one shows.
 */
export type AlbumPhoto = { slug: string; caption: string; portrait?: boolean };

export const easwarammaDay2026: AlbumPhoto[] = [
  { slug: 'ed2026-01', caption: 'Frisco High School on the morning of the programme.' },
  { slug: 'ed2026-02', caption: 'The altar prepared for Easwaramma Day.' },
  { slug: 'ed2026-03', caption: 'Offerings and lamps arranged before the shrine.' },
  { slug: 'ed2026-04', caption: 'The shrine at the centre of the hall.', portrait: true },
  { slug: 'ed2026-05', caption: 'Prahlada — persevering with God.' },
  { slug: 'ed2026-06', caption: 'Keertanam — singing the glory of God.' },
  { slug: 'ed2026-07', caption: 'Padasevanam — serving the feet of the Lord.' },
  { slug: 'ed2026-08', caption: 'Sravanam and Padasevanam, side by side.' },
  { slug: 'ed2026-09', caption: 'Archanam — worship of the Lord.' },
  { slug: 'ed2026-10', caption: 'Atmanivedanam — total surrender.' },
  { slug: 'ed2026-11', caption: 'Atmanivedanam, in detail.' },
  { slug: 'ed2026-12', caption: 'Sakhyam — friendship with the Divine.' },
  { slug: 'ed2026-13', caption: 'Dasyam — serving the Lord.' },
  { slug: 'ed2026-14', caption: 'The Bal Vikas teaching unit awards board.', portrait: true },
  { slug: 'ed2026-15', caption: 'Flowers and lamps at the side shrine.', portrait: true },
  { slug: 'ed2026-16', caption: 'Students in costume, waiting for their segment.' },
  { slug: 'ed2026-17', caption: 'Last-minute preparation backstage.' },
  { slug: 'ed2026-18', caption: 'Waiting in the corridor before going on.' },
  { slug: 'ed2026-19', caption: 'Families and performers gathering in the lobby.' },
  { slug: 'ed2026-20', caption: 'The line-up before the programme begins.' },
  { slug: 'ed2026-21', caption: 'Grandparents and grandchildren at the venue.' },
  { slug: 'ed2026-22', caption: 'Costumes assembled and ready.' },
  { slug: 'ed2026-23', caption: 'Final touches before the curtain.' },
  { slug: 'ed2026-24', caption: 'Backstage in the moments before the opening.' },
  { slug: 'ed2026-25', caption: 'A young performer in costume.', portrait: true },
  { slug: 'ed2026-26', caption: 'A saint of India, ready for the stage.', portrait: true },
  { slug: 'ed2026-27', caption: 'In costume for the cultural programme.', portrait: true },
  { slug: 'ed2026-28', caption: 'A student in full costume.', portrait: true },
  { slug: 'ed2026-29', caption: 'A saint of India, with staff and drum.', portrait: true },
  { slug: 'ed2026-30', caption: 'Ready to take the stage.', portrait: true },
];
