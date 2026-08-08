// STEM Collaborative — youth medical STEM camp.
//
// Derived from HMC's delivered STEM Collaborative program (Copyright Health
// Matters Clinic). Encoded as a REUSABLE CURRICULUM TEMPLATE, not a record of
// one delivery. Dates, sites, field trips and named partners from any single
// run are deliberately excluded: they change every time and belong on the
// scheduled session, not in the curriculum.
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

export interface CampWeek {
  week: number;
  /** A classic STEM subject paired with a health or health-technology subject. */
  subjects: string;
  /** The hands-on activity topics students actually do that week. */
  activities: string[];
  /** What the week is teaching underneath the activities. */
  focus: string;
}

/**
 * The six-week curriculum template.
 *
 * This is the reusable design, not a record of one delivery. It carries no
 * dates, no site and no field trips, because those change every time the camp
 * runs. What repeats is the sequence and the pairing.
 *
 * The pairing is the whole idea: each week couples a classic STEM subject with
 * a health or health-technology subject, so students meet the science and its
 * health application together rather than in separate units. The sequence also
 * builds, moving from observable chemistry through body systems and diagnostics
 * to design and invention, and closing on careers.
 */
export const CAMP_WEEKS: CampWeek[] = [
  {
    week: 1,
    subjects: 'Chemistry and Computing',
    activities: ['Things that Bubble and Fizz', 'Principles of Examination'],
    focus: 'Start with reactions students can see, and introduce how a clinician examines and records what they observe.',
  },
  {
    week: 2,
    subjects: 'Biology and Health Information Technology',
    activities: ['Things that Crawl and Grow', 'The Human Body Systems'],
    focus: 'Living things and growth, paired with how health information about a body gets captured and used.',
  },
  {
    week: 3,
    subjects: 'Physics and Internet of Medical Things',
    activities: ['Things that Fly and Roll', 'The Human Body Systems'],
    focus: 'Forces and motion, paired with the connected devices that measure a body.',
  },
  {
    week: 4,
    subjects: 'Electricity, Magnetism and Engineering',
    activities: ['Things that Stick and Zap', 'Diagnosing Diseases'],
    focus: 'Energy and circuits, paired with how a diagnosis is actually reached.',
  },
  {
    week: 5,
    subjects: 'Space, Science, Water and Product Design',
    activities: ['Things that Shake and Flow', 'Water and Electrolytes'],
    focus: 'Fluids and systems, paired with designing something a person would really use.',
  },
  {
    week: 6,
    subjects: 'Innovation, Inventions and Web 3.0',
    activities: ['Makerspace', 'Careers in Medicine and Technology'],
    focus: 'Students build their own thing and meet the people whose jobs this could become.',
  },
];

/**
 * Elements that repeat every time the camp runs, independent of location.
 * Anything site-specific belongs on the scheduled session, not here.
 */
export const CAMP_TEMPLATE = {
  weeks: 6,
  daysPerWeek: 5,
  dailyHours: '8:00 AM to 4:00 PM',
  grades: '5 through 8',
  targetEnrollment: 50,
  dailyBlocks: [
    'Morning STEM instruction with the week\'s hands-on kit',
    'Afternoon athletic and character-building block, reflecting the whole-person approach',
  ],
  /** The culminating event. Repeatable and worth keeping in any delivery. */
  capstone:
    'A public Family STEM and Health Expo in the final week, where students, teachers and mentors present their demos to families and the community.',
  /** Roles to fill locally each time, rather than fixed partner names. */
  instructionModel: [
    'Health professionals and engineers who reflect the community being served',
    'A site partner providing space, recruitment and daily operations',
    'A university or STEM partner supporting science and mathematics instruction',
    'Community members administering the athletic and character-building block',
  ],
} as const;

export const STEM_CAMP: Course = {
  id: 'stem-collab-camp',
  num: 1,
  standard: 'v2',
  delivery: 'practical',
  title: 'STEM Collaborative Summer Camp',
  promise:
    'Run the six-week medical STEM camp for grades 5 through 8, built around hands-on kits and taught by health professionals and engineers.',
  about: [
    'A six-week medical STEM camp for grades 5 through 8, built around hands-on kits and taught by health professionals and engineers who reflect the community being served. It is designed to be run again at a new site with a new cohort.',
    'Each week pairs a classic STEM subject with a health or health-technology subject, so students meet the science and its health application together rather than in separate units. The sequence builds from observable chemistry through body systems and diagnostics to design and invention, and closes on careers.',
    'Five days a week, mornings on the week\'s STEM kit and afternoons on athletics and character building, reflecting the whole-person approach. The final week culminates in a public Family STEM and Health Expo where students present their own demos.',
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
      detail: 'Each week is built around specific hands-on kits. Confirm availability and current suppliers before the week begins.',
    },
    {
      id: 'instructors',
      kind: 'attend',
      label: 'Secure the site and instructors for this run',
      detail: 'Each delivery needs a site partner, health professionals and engineers from the community being served, and community members for the athletics block.',
    },
    {
      id: 'deliver',
      kind: 'practicum',
      label: 'Deliver the weekly sessions',
      detail: 'Five days a week for six weeks, including the daily athletic and character-building block, closing with the public expo.',
    },
  ],
  sessions: [],
  lessons: [],
  checks: [],
};
