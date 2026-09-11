export const academicYear = '2026–27';

/**
 * The Bal Vikas year, transcribed from the centre's 2026–2027 calendar sheet.
 *
 * Last year's calendar was a tidy grid — six units, each with three classes, a
 * parent participation session, a presentation and a seva. This one is not that
 * shape: units vary in length, holidays are called out on the sheet as their own
 * rows, the year opens with a parent orientation, and Unit 6 is the Easwaramma
 * Day programme rather than teaching, running on Saturdays and Sundays with a
 * Friday stage rehearsal. So the data models what the sheet actually says rather
 * than forcing it back into columns.
 */

export type SessionKind =
  | 'orientation'
  | 'class'
  | 'presentation'
  | 'seva'
  | 'celebration'
  | 'holiday'
  | 'casting'
  | 'practice'
  | 'rehearsal'
  | 'performance';

export type Session = {
  iso: string;
  /** 'Aug 9, 2026' */
  date: string;
  /** 'Sunday' — derived, so it can never drift from the date. */
  day: string;
  kind: SessionKind;
  label: string;
  /** Why there is no class, where the sheet gives a reason. */
  note?: string;
};

export type Block = {
  title: string;
  subtitle?: string;
  sessions: Session[];
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Both formatters split the ISO string and rebuild the date in UTC rather than
 * passing it to `new Date(iso)`, which is parsed as midnight UTC and then shown
 * in the reader's zone — turning every date into the day before for anyone west
 * of Greenwich. The centre is in Texas, so that would be every single one.
 */
function display(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

function weekday(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
}

function session(iso: string, kind: SessionKind, label: string, note?: string): Session {
  return { iso, date: display(iso), day: weekday(iso), kind, label, note };
}

export const blocks: Block[] = [
  {
    title: 'New Parent Orientation',
    sessions: [
      session('2026-08-02', 'orientation', 'New Parent Orientation', 'Alpha Montessori House, 10:00 am'),
    ],
  },
  {
    title: 'Unit 1',
    sessions: [
      session('2026-08-09', 'class', 'Class'),
      session('2026-08-16', 'class', 'Class'),
      session('2026-08-23', 'class', 'Class'),
      session('2026-08-30', 'class', 'Class'),
      session('2026-09-06', 'holiday', 'No class', 'Labor Day'),
      session('2026-09-13', 'presentation', 'Presentation'),
      session('2026-09-20', 'seva', 'Seva'),
    ],
  },
  {
    title: 'Unit 2',
    sessions: [
      session('2026-09-27', 'class', 'Class'),
      session('2026-10-04', 'class', 'Class'),
      session('2026-10-11', 'class', 'Class'),
      session('2026-10-18', 'class', 'Class'),
      session('2026-10-25', 'presentation', 'Presentation'),
      session('2026-11-01', 'seva', 'Seva'),
    ],
  },
  {
    title: 'Unit 3',
    sessions: [
      session('2026-11-08', 'celebration', 'Akhanda Bhajans / Deepavali celebration'),
      session('2026-11-15', 'class', 'Class'),
      session('2026-11-22', 'class', 'Class'),
      session('2026-11-29', 'holiday', 'No class', 'Thanksgiving'),
      session('2026-12-06', 'class', 'Class'),
      session('2026-12-13', 'presentation', 'Presentation'),
      session('2026-12-20', 'seva', 'Seva'),
    ],
  },
  {
    title: 'Winter Break',
    sessions: [
      session('2026-12-27', 'holiday', 'No class', 'Christmas break'),
      session('2027-01-03', 'holiday', 'No class', 'Christmas break'),
    ],
  },
  {
    title: 'Unit 4',
    sessions: [
      session('2027-01-10', 'class', 'Class'),
      session('2027-01-17', 'class', 'Class'),
      session('2027-01-24', 'class', 'Class'),
      session('2027-01-31', 'class', 'Class'),
      session('2027-02-07', 'presentation', 'Presentation'),
      session('2027-02-14', 'seva', 'Seva'),
    ],
  },
  {
    title: 'Unit 5',
    sessions: [
      session('2027-02-21', 'class', 'Class'),
      session('2027-02-28', 'class', 'Class'),
      session('2027-03-07', 'class', 'Class'),
      session('2027-03-14', 'holiday', 'No class', 'Spring break'),
      session('2027-03-21', 'class', 'Class'),
      session('2027-03-28', 'presentation', 'Presentation'),
      session('2027-04-04', 'seva', 'Seva'),
    ],
  },
  {
    title: 'Unit 6',
    subtitle: 'Easwaramma Day programme',
    sessions: [
      session('2027-04-03', 'casting', 'Casting'),
      session('2027-04-10', 'practice', 'Practice'),
      session('2027-04-11', 'practice', 'Practice'),
      session('2027-04-17', 'practice', 'Practice'),
      session('2027-04-18', 'practice', 'Practice'),
      session('2027-04-24', 'practice', 'Practice'),
      session('2027-04-25', 'practice', 'Practice'),
      session('2027-05-01', 'practice', 'Practice'),
      session('2027-05-02', 'practice', 'Practice'),
      session('2027-05-07', 'rehearsal', 'Stage rehearsal'),
      session('2027-05-09', 'performance', 'Easwaramma Day programme'),
    ],
  },
];

/** The two dates on the sheet that are not an ordinary Sunday morning. */
export const keyDates = [
  {
    iso: '2026-08-02',
    date: 'Aug 2, 2026',
    title: 'New Parent Orientation',
    detail: 'Alpha Montessori House, 10:00 am',
  },
  {
    iso: '2027-05-09',
    date: 'May 9, 2027',
    title: 'Easwaramma Day programme',
    detail: 'Preceded by casting, eight practices and a Friday stage rehearsal',
  },
] as const;

/** Every session in the year, in order — used to work out what comes next. */
export const allSessions: (Session & { block: string })[] = blocks
  .flatMap((block) => block.sessions.map((s) => ({ ...s, block: block.title })))
  .sort((a, b) => a.iso.localeCompare(b.iso));
