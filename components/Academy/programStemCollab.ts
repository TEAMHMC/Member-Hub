// STEM Collaborative — youth medical STEM camp.
//
// Migrated from "STEM_Collab _SportsID" (Copyright 2022 Health Matters Clinic).
// This is an existing delivered program, not new curriculum.
//
// IMPORTANT SHAPE NOTE. This is NOT a self-paced course and must not be modeled
// as one. It is a six-week, five-day-a-week, site-based camp for roughly 50
// students in grades 5 through 8, taught by partner health professionals and
// engineers, built around physical hands-on kits. The learner is a child in a
// room with a kit and an instructor.
//
// That distinction matters for two reasons:
//
//  1. Participants are minors. The Academy credential rules require youth
//     account, consent and safeguarding requirements to be satisfied before a
//     Youth pathway credential can issue. Nothing here creates a child-facing
//     login, and nothing should until that is designed deliberately.
//
//  2. The Youth Mentorship + STEAM pathway in the blueprint is a separate,
//     self-paced eight-course sequence. The camp and that pathway are
//     complementary, not the same thing. Do not collapse them.
//
// What the Academy usefully holds today is the FACILITATOR and COORDINATOR
// view: weekly themes, the kit each theme needs, who teaches it, and the
// session schedule. That is the part that is reusable when the camp runs again.

import type { Course } from './catalog';

/** Content dates from 2022. Partner commitments and kit links need re-verification. */
export const STEM_COLLAB_SOURCE_YEAR = 2022;

export interface CampWeek {
  week: number;
  /** Dates as delivered in 2022. Reset when the camp is next scheduled. */
  dates: string;
  /** Subject areas paired for the week: a STEM domain and a health-tech domain. */
  subjects: string;
  /** The hands-on activity topics students actually do. */
  activities: string[];
  note?: string;
}

/**
 * The delivered six-week schedule, from the STEM + Health Deck.
 *
 * The pairing is the design: each week couples a classic STEM subject with a
 * health or health-technology subject, so students meet the science and the
 * health application in the same week rather than in separate units.
 */
export const CAMP_WEEKS: CampWeek[] = [
  {
    week: 1,
    dates: 'June 27 to July 1, 2022',
    subjects: 'Chemistry and Computing',
    activities: ['Things that Bubble and Fizz', 'Principles of Examination'],
  },
  {
    week: 2,
    dates: 'July 5 to July 8, 2022',
    subjects: 'Biology and Health Information Technology',
    activities: ['Things that Crawl and Grow', 'The Human Body Systems'],
    note: 'Closed July 4.',
  },
  {
    week: 3,
    dates: 'July 11 to July 15, 2022',
    subjects: 'Physics and Internet of Medical Things',
    activities: ['Things that Fly and Roll', 'The Human Body Systems'],
  },
  {
    week: 4,
    dates: 'July 18 to July 22, 2022',
    subjects: 'Electricity, Magnetism and Engineering',
    activities: ['Things that Stick and Zap', 'Diagnosing Diseases'],
  },
  {
    week: 5,
    dates: 'July 25 to July 29, 2022',
    subjects: 'Space, Science, Water and Product Design',
    activities: ['Things that Shake and Flow', 'Water and Electrolytes'],
  },
  {
    week: 6,
    dates: 'August 1 to August 5, 2022',
    subjects: 'Innovation, Inventions and Web 3.0',
    activities: ['Makerspace', 'Careers in Medicine and Technology'],
    note: 'Closes with the Family STEM and Health Expo, where students, teachers and mentors present demos to the public.',
  },
];

/** Off-site days. No class on these dates. */
export const CAMP_FIELD_TRIPS = [
  { date: 'July 7, 2022', destination: 'UC Irvine' },
  { date: 'July 27, 2022', destination: 'Dodger Stadium tour and baseball game' },
];

export const STEM_CAMP: Course = {
  id: 'stem-collab-camp',
  num: 1,
  standard: 'v2',
  delivery: 'practical',
  title: 'STEM Collaborative Summer Camp',
  promise:
    'Run the six-week medical STEM camp for grades 5 through 8, built around hands-on kits and taught by health professionals and engineers.',
  about: [
    'The STEM Collaborative grew out of shared concerns between Health Matters Clinic and Baldwin Bethany Community Development Corporation while both were delivering pandemic support, including food, health screenings and vaccines, to underserved communities in South Los Angeles.',
    'The camp engages youth in STEM topics relevant to communities of color, taught by health professionals of color, using hands-on activities driven by the engineering process. It runs alongside BBCDC\'s LAUNCH Academy Summer Nutritional Academic Camp, which has partnered with the University of California Office of the President and UCLA since 2016.',
    'Six weeks, Monday to Friday, 8:00 AM to 4:00 PM, at Stella Middle Charter Academy in South Los Angeles, closing with a public Family STEM and Health Expo where students present their demos.',
    'Each week pairs a classic STEM subject with a health or health-technology subject, so students meet the science and its health application together rather than in separate units.',
  ],
  objectives: [
    'Deliver each weekly STEM theme with its matched hands-on kit and partner instructor.',
    'Connect STEM content to community health topics students recognize, such as virus transmission, handwashing and chronic disease.',
    'Support pathways into STEM careers by putting students in front of health professionals and engineers who reflect their community.',
  ],
  minutes: 0,
  prerequisites:
    'Coordinator or instructor role. Youth safeguarding requirements must be satisfied before working with participants.',
  whoFor:
    'Camp coordinators, partner instructors, and community members administering the athletic and character-building curriculum.',
  requirements: [
    {
      id: 'safeguarding',
      kind: 'attend',
      label: 'Complete youth safeguarding and consent requirements',
      detail: 'Participants are minors in grades 5 through 8. This gate comes before any participant contact.',
    },
    {
      id: 'kits',
      kind: 'assignment',
      label: 'Confirm kit inventory against the weekly themes',
      detail: 'Each theme is built around a specific hands-on kit. Verify availability and current supplier links before the session week.',
    },
    {
      id: 'instructors',
      kind: 'attend',
      label: 'Confirm partner instructors for each week',
      detail: 'Instruction is delivered by partner teams rather than HMC staff alone. Confirm commitments before the schedule is published.',
    },
    {
      id: 'deliver',
      kind: 'practicum',
      label: 'Deliver the weekly sessions',
      detail: 'Five days a week for six weeks, including the daily athletic and character-building block.',
    },
  ],
  sessions: [],
  lessons: [],
  checks: [],
};
