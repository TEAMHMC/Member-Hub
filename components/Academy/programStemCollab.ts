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

export interface WeeklyTheme {
  domain: 'Science' | 'Technology' | 'Engineering' | 'Mathematics';
  topics: string[];
  /** The hands-on kit or resource the theme is built around. */
  materials?: string;
  /** Who delivers it, per the program design. */
  instructors: string;
}

export const WEEKLY_THEMES: WeeklyTheme[] = [
  {
    domain: 'Science',
    topics: ['Chemistry', 'Biology', 'Physics'],
    materials: 'Science toolkit for hands-on activities on virus transmission and response',
    instructors: 'UCLA Center X Science Project Team',
  },
  {
    domain: 'Technology',
    topics: ['Computing', 'Health IT', 'Internet of Medical Things'],
    materials: 'Coronavirus education kit and diagnosing diabetes kit',
    instructors: 'Technologists, engineers, physicians and athletes',
  },
  {
    domain: 'Engineering',
    topics: ['Engineering', 'Product Design', 'Web 3.0'],
    materials: 'Bristlebot robots kit and coding and robotics challenge pack',
    instructors: 'HMC partner engineers, including Kaiser Permanente engineers',
  },
  {
    domain: 'Mathematics',
    topics: ['Electricity and Magnetism', 'Space, Science and Water', 'Innovation and Inventions'],
    materials: 'Tracking activities using data on viruses, epidemics, immunity and contagion',
    instructors: 'UCLA Center X Mathematics Project Team',
  },
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
    'Roughly 50 students, five days a week for six weeks, with an athletic and character-building block each afternoon reflecting HMC\'s whole-person approach to health.',
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
