export const academicYear = '2025–26';

export type Unit = {
  unit: number;
  sessions: { label: string; date: string; iso: string }[];
};

const columns = ['Class 1', 'Class 2', 'Class 3', 'Parent Participation', 'Presentation', 'Seva'];

function unit(n: number, dates: [string, string][]): Unit {
  return {
    unit: n,
    sessions: dates.map(([date, iso], i) => ({ label: columns[i], date, iso })),
  };
}

export const units: Unit[] = [
  unit(1, [
    ['Aug 17, 2025', '2025-08-17'],
    ['Aug 24, 2025', '2025-08-24'],
    ['Aug 31, 2025', '2025-08-31'],
    ['Sep 7, 2025', '2025-09-07'],
    ['Sep 14, 2025', '2025-09-14'],
    ['Sep 21, 2025', '2025-09-21'],
  ]),
  unit(2, [
    ['Sep 28, 2025', '2025-09-28'],
    ['Oct 5, 2025', '2025-10-05'],
    ['Oct 12, 2025', '2025-10-12'],
    ['Oct 19, 2025', '2025-10-19'],
    ['Oct 26, 2025', '2025-10-26'],
    ['Nov 2, 2025', '2025-11-02'],
  ]),
  unit(3, [
    ['Nov 9, 2025', '2025-11-09'],
    ['Nov 16, 2025', '2025-11-16'],
    ['Nov 30, 2025', '2025-11-30'],
    ['Dec 7, 2025', '2025-12-07'],
    ['Dec 14, 2025', '2025-12-14'],
    ['Dec 21, 2025', '2025-12-21'],
  ]),
  unit(4, [
    ['Jan 4, 2026', '2026-01-04'],
    ['Jan 11, 2026', '2026-01-11'],
    ['Jan 18, 2026', '2026-01-18'],
    ['Jan 25, 2026', '2026-01-25'],
    ['Feb 1, 2026', '2026-02-01'],
    ['Feb 8, 2026', '2026-02-08'],
  ]),
  unit(5, [
    ['Feb 15, 2026', '2026-02-15'],
    ['Feb 22, 2026', '2026-02-22'],
    ['Mar 1, 2026', '2026-03-01'],
    ['Mar 8, 2026', '2026-03-08'],
    ['Mar 22, 2026', '2026-03-22'],
    ['Mar 29, 2026', '2026-03-29'],
  ]),
  unit(6, [
    ['Apr 5, 2026', '2026-04-05'],
    ['Apr 12, 2026', '2026-04-12'],
    ['Apr 19, 2026', '2026-04-19'],
    ['Apr 26, 2026', '2026-04-26'],
    ['May 3, 2026', '2026-05-03'],
    ['May 10, 2026', '2026-05-10'],
  ]),
];

export const mandatoryEvents = [
  { date: 'Nov 23, 2025', iso: '2025-11-23', title: 'Swami Birthday Celebrations' },
  { date: 'May 10, 2026', iso: '2026-05-10', title: 'Easwaramma Day' },
] as const;
