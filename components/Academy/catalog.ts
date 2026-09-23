// HMC Health + Education Pathways Academy — learner-facing catalog.
//
// Structure follows "HMC Health + Education Pathways Academy | Master Curriculum
// + Delivery Blueprint" v1.0 and "HMC Academy | Credential, Transcript +
// Equivalency Rules" v1.0 (both August 7, 2026).
//
// Rules encoded here, not just described:
//  - Learning model is DISCOVER > LEARN > PRACTICE > SERVE > DEMONSTRATE > ADVANCE.
//  - Core learning is text-first and self-paced. No lesson depends on video or
//    audio (blueprint accessibility standard).
//  - Default knowledge benchmark is 80% on the post-test. Retries are allowed
//    because the purpose is mastery, not selection.
//  - Progress is reported as improvement (baseline > post > gain), not pass/fail.
//  - Credential titles follow the naming rules exactly. "Certified", "Licensed",
//    "Board Certified" and similar are never used. A completion is an HMC
//    educational record, not licensure, certification, or clinical scope.

export type Level = 'Discover' | 'Foundations' | 'Applied' | 'Advanced' | 'Leadership';
export type PathwayStatus = 'published' | 'in-development';
export type CredentialType =
  | 'Course Completion'
  | 'Applied Pathway Completion'
  | 'Competency Record'
  | 'Fellowship / Internship Completion';

export interface Lesson {
  id: string;
  title: string;
  /** One line shown on the course outline, before the learner opens the module. */
  summary: string;
  minutes: number;
  /** v1 courses. Plain paragraphs. */
  body?: string[];
  /** v2 courses, per the Written Guided Curriculum Standard. Typed blocks. */
  blocks?: Block[];
}

/** Knowledge check. One correct option; `why` is shown after answering. */
export interface Check {
  id: string;
  q: string;
  options: string[];
  answer: number;
  why: string;
}

/**
 * A named piece of work a learner produces in one course and carries forward.
 * The capstone assembles these rather than asking for one large essay, so by
 * the final course the roadmap is mostly refinement of work already done.
 *
 * Fields are declared per course in the catalog, so content can change without
 * touching the engine that stores, renders and assembles them.
 */
export interface ArtifactField {
  id: string;
  label: string;
  /** Shown under the label. Use it to teach, not just to instruct. */
  help?: string;
  placeholder?: string;
  /** Long-form answers get a textarea; short ones get an input. */
  multiline?: boolean;
  /** Repeating groups, e.g. three career hypotheses. */
  repeat?: number;
  repeatLabel?: string;
}

export interface Artifact {
  id: string;
  title: string;
  /** Realistic minutes to actually produce this. Counts toward course time. */
  minutes?: number;
  /** One line explaining why this piece matters to the final roadmap. */
  purpose: string;
  fields: ArtifactField[];
  /** Optional reference data the exercise needs, shown inline so the learner
   *  never has to hunt for a worksheet that lives somewhere else. */
  reference?: { title: string; items: string[] };
}

export interface Activity {
  title: string;
  body: string[];
  /** What the learner writes. Stored on device as their portfolio artifact. */
  prompt: string;
}

/** How a course is delivered. Per the Master Curriculum blueprint. */
export type Delivery = 'self-paced' | 'live' | 'blended' | 'practical' | 'practicum';

export type Modality = 'virtual' | 'in-person' | 'hybrid';

/**
 * A scheduled offering. Live and blended courses are attended on a date, which
 * matters for more than logistics: a continuing-education approval is granted
 * for a specific course in a specific delivery mode, so changing the mode can
 * invalidate the approval. Sessions keep that mode explicit.
 */
export interface Session {
  id: string;
  courseId: string;
  title: string;
  /** ISO start. */
  startsAt: string;
  endsAt?: string;
  modality: Modality;
  /** Physical address for in-person, or the platform name for virtual. */
  location?: string;
  /** Join link, released to registrants. Never rendered before registration. */
  joinUrl?: string;
  capacity?: number;
  seatsTaken?: number;
  /** Facilitator name, shown to learners. */
  facilitator?: string;
}

/**
 * Retrospective post-then-pre evaluation.
 *
 * Unstoppable does NOT use a baseline-then-post design. Per the approved
 * instrument, participants rate each statement twice at the END of the program,
 * once for "now" and once for "before". HMC chose this deliberately: it
 * measures change with less response-shift bias than a separate pre-test, and
 * it avoids front-loading a workshop with an exam. It is administered once, on
 * completion, and is conducted for LACDMH.
 *
 * Do not replace this with a pre-test. It is an approved evaluation instrument.
 */
export interface RetroPrePost {
  intro: string[];
  scale: string[];
  statements: string[];
  /** Who the evaluation is conducted for. */
  conductedFor: string;
}

/** Continuing education, only where HMC holds a real approval. */
export interface CeApproval {
  /** Board-recognized approval agency. */
  agency: string;
  hours: string;
  approvedOn: string;
  /** Boards the approval is recognized by. */
  boards: string;
  /** Exact approved course title. Must not be paraphrased. */
  approvedTitle: string;
  /** What the learner must supply for a compliant certificate. */
  requires: string[];
  /** Stated plainly, because delivery mode is part of what was approved. */
  deliveryNote: string;
}

export interface Course {
  /** 'v2' courses render through the guided-block renderer. */
  standard?: 'v1' | 'v2';
  /** Who this is written for. Drives reading level, not just tone. */
  readingLevel?: ReadingLevel;
  delivery?: Delivery;
  /**
   * How a live course is delivered, when every session of it is delivered the same way.
   *
   * Sessions each carry their own modality, which is right for a course that sometimes runs
   * in a room and sometimes on a call. It is not enough on its own: a course with no
   * session scheduled yet still has to be able to tell somebody how it is run, and the
   * Unstoppable material referenced a partner venue HMC no longer uses long after it had
   * moved to virtual delivery.
   */
  modality?: Modality;
  /** Populated for live and blended courses. */
  sessions?: Session[];
  ce?: CeApproval;
  /**
   * What this course costs, in whole US dollars. Absent means free.
   *
   * Almost everything HMC teaches is free and stays free. Continuing education is not:
   * it carries a real cost to run, it is bought by licensed professionals rather than by
   * the community, and the Hub was telling everyone that every course was free on pages
   * that included it.
   *
   * Payment is taken through PayPal, which is already set up for HMC, and the link lives
   * on the course rather than in the checkout code so that adding a paid course is a
   * catalogue edit and not a deployment of new payment logic.
   */
  price?: { amountUsd: number; payUrl: string; note?: string };
  /**
   * Minutes a learner must actually spend in this course before it can be completed.
   *
   * Absent for almost every course, and that is the point: time is measured everywhere
   * and enforced only where somebody decided it should be. Continuing education sets it
   * to fifty per credit hour because a regulator requires exactly that. An ordinary
   * course leaves it unset and simply gets an honest number on its completion record.
   */
  minMinutes?: number;
  /**
   * An exam belonging to this course, rather than to the pathway it sits in.
   *
   * Knowledge checks are formative: they teach, they explain the answer, and getting one
   * wrong costs nothing. A pathway post-test is summative but sits at the end of eight
   * courses, so it cannot say whether any single course was learned. Where a course
   * grants credit on its own, the thing that decides whether it was earned has to be
   * attached to the course.
   */
  exam?: { questions: Check[]; passPercent: number };
  /** Used instead of preTest/postTest where HMC's instrument is retrospective. */
  retroEval?: RetroPrePost;
  /** Ordered completion requirements, including work done outside the platform. */
  requirements?: { id: string; label: string; detail?: string; kind: 'attend' | 'assignment' | 'practicum' | 'evaluation' }[];
  /** Shown only where currency materially affects the learner's action. */
  freshness?: string;
  /** Rendered as a Sources and further learning accordion at course end. */
  furtherLearning?: SourceRef[];
  id: string;
  num: number;
  title: string;
  /** One-sentence promise: what the learner will be able to do. */
  promise: string;
  about: string[];
  objectives: string[];
  minutes: number;
  /** Stated plainly on the course page. 'None' is a valid answer. */
  prerequisites: string;
  whoFor: string;
  lessons: Lesson[];
  checks: Check[];
  activity?: Activity;
  /** The artifact this course contributes to the capstone. */
  artifact?: Artifact;
  /** Source keys from the pathway source library. */
  sources?: string[];
}

export interface Rubric {
  label: string;
  max: number;
}

export interface Capstone {
  title: string;
  intro: string;
  requirements: string[];
  rubric: Rubric[];
  passing: number;
  prompt: string;
}

export interface Pathway {
  /** Program family. Mental health education is a different lane from the
   *  health-professions pathways and serves different users. */
  family?: 'Health + Education Pathways' | 'Mental Health + Community Education';
  id: string;
  title: string;
  level: Level;
  status: PathwayStatus;
  purpose: string;
  format: string;
  /** Exact credential title per the naming rules. */
  credentialTitle: string;
  credentialType: CredentialType;
  /** Completion gates, shown to the learner up front. */
  gates: string[];
  /** Behavioral cue, not a lock. Learners may start any time. */
  guidedStart?: string;
  courses: Course[];
  /** For pathways not yet published: the planned course list from the blueprint. */
  plannedCourses?: string[];
  preTest?: Check[];
  postTest?: Check[];
  capstone?: Capstone;
  sourceKey?: { key: string; label: string }[];
  version: string;
  effectiveDate: string;
  nextReview: string;
}

export const PASS_THRESHOLD = 80;

// ── Pathway 2: Health Careers Exploration (publication-ready v1.0) ────────
// Lesson copy is taken from the approved Learner Course Pack. Do not reword.

const HCE_COURSES: Course[] = [
  COURSE_1_V2,
  COURSE_2_V2,
  COURSE_3_V2,
  COURSE_4_V2,
  COURSE_5_V2,
  COURSE_6_V2,
  COURSE_7_V2,
  COURSE_8_V2,
];

// Baseline form. Reviewed immediately after submission with rationales, which
// is good teaching but means these exact items can never carry the credential.
// The post-test below is a parallel form: same ten constructs, different items,
// different correct-option positions.
const HCE_PRE: Check[] = [
  {
    id: 'hce-t1',
    q: 'Which source is the appropriate starting point for occupation descriptions, typical entry education and pay?',
    options: ['BLS Occupational Outlook Handbook', 'A social media career account', 'A program brochure', 'A salary aggregator site'],
    answer: 0,
    why: 'BLS is the starting point. Licensure and accreditation are then verified with the relevant board or accreditor.',
  },
  {
    id: 'hce-t2',
    q: 'Licensure is granted by:',
    options: ['An accrediting body', 'A professional association', 'A governmental licensing authority', 'The educational program'],
    answer: 2,
    why: 'Licensure is legal authorization from a governmental licensing authority, limited to that jurisdiction and scope.',
  },
  {
    id: 'hce-t3',
    q: 'Which statement about the AAMC premed competencies is correct?',
    options: [
      'They are universal requirements for every health profession',
      'They are required for community health work',
      'They replace state licensure',
      'They are relevant to learners considering medical school, and other fields use their own standards',
    ],
    answer: 3,
    why: 'One path does not fit every career. Nursing, pharmacy, public health, CHW work and others use the standards relevant to that field.',
  },
  {
    id: 'hce-t4',
    q: 'A learner writes "Completed 120 hours" on an application. What is the weakness?',
    options: [
      'The number is too low',
      'It states presence, not what was learned or what skill was practiced',
      'Hours should never be mentioned',
      'It should be rounded',
    ],
    answer: 1,
    why: 'Hours are not the learning outcome. Strong reflection describes the work, the problem, the skill practiced, and what changed.',
  },
  {
    id: 'hce-t5',
    q: 'Which funding type generally does not need to be repaid when program terms are met?',
    options: ['Grants and scholarships', 'Federal loans', 'Private loans', 'Income share agreements'],
    answer: 0,
    why: 'Scholarships and grants generally do not require repayment when program terms are met. Loans must be repaid under their terms.',
  },
  {
    id: 'hce-t6',
    q: 'Total cost of attendance includes:',
    options: [
      'Tuition only',
      'Tuition and fees only',
      'Tuition, fees, books, housing, transportation, food, insurance, exams, application fees and other living costs',
      'Tuition minus projected salary',
    ],
    answer: 2,
    why: 'Price is more than tuition. A lower-tuition program can cost more overall once living and relocation costs are included.',
  },
  {
    id: 'hce-t7',
    q: 'Which description accurately reflects observing a procedure?',
    options: ['Performed the procedure', 'Assisted with the procedure', 'Managed the case', 'Observed the workflow'],
    answer: 3,
    why: 'Accurate description protects participants and the learner’s credibility.',
  },
  {
    id: 'hce-t8',
    q: 'A mentor tells a learner which program to attend. According to this pathway, what is the issue?',
    options: [
      'Nothing, that is the mentor’s role',
      'Mentors guide reflection, learning and networks; they should not control the learner’s decisions or be the sole source of support',
      'The learner should find a more senior mentor',
      'The learner should follow the advice without question',
    ],
    answer: 1,
    why: 'Mentors are guides, not decision-makers.',
  },
  {
    id: 'hce-t9',
    q: 'Epidemiology, health informatics and healthcare administration are examples of:',
    options: [
      'Roles that require a medical degree',
      'Non-health careers',
      'Roles unavailable to community college students',
      'Health careers outside direct patient care',
    ],
    answer: 3,
    why: 'Health careers extend well beyond direct patient care into population health, data, technology, policy and operations.',
  },
  {
    id: 'hce-t10',
    q: 'What is the correct characterization of an HMC Academy pathway completion?',
    options: [
      'An HMC educational completion record, not professional certification or admission eligibility',
      'A state license',
      'A professional certification',
      'Proof of clinical scope',
    ],
    answer: 0,
    why: 'HMC credential rules are explicit: course completion is not licensure, board certification, clinical scope, or admission eligibility.',
  },
];

import { CARE_NAVIGATION_COVERAGE } from './pathwayFieldBased';
import { FBCH_CORE_COURSES, FBCH_PRE, FBCH_POST } from './pathwayFieldBasedCore';
import { CES_FOUNDATION_COURSES, CES_PRE, CES_POST } from './pathwayClinicalFoundations';
import { MENTOR_LEADER_COURSES, MENTOR_PRE, MENTOR_POST } from './pathwayMentorLeader';
import { INTERNSHIP_COURSES } from './pathwayInternships';
import type { Block, SourceRef, ReadingLevel } from './blocks';
import { CMHW_FACILITATOR, UNSTOPPABLE_CE, UNSTOPPABLE_EXPERIENCE } from './pathwayMentalHealth';
import { STEM_CAMP } from './programStemCollab';
import { COURSE_1_V2 } from './course1V2';
import { COURSE_2_V2 } from './course2V2';
import { COURSE_3_V2 } from './course3V2';
import { COURSE_4_V2 } from './course4V2';
import { COURSE_5_V2 } from './course5V2';
import { COURSE_6_V2 } from './course6V2';
import { COURSE_7_V2 } from './course7V2';
import { COURSE_8_V2 } from './course8V2';

// Post-test. Parallel form to HCE_PRE, testing the same objectives with items
// the learner has not already been shown the answers to.
const HCE_POST: Check[] = [
  {
    id: 'hce-p1',
    q: 'You want to know the typical entry-level education for a respiratory therapist. Which source do you start with?',
    options: [
        'The BLS Occupational Outlook Handbook',
        'A program brochure from a school that offers the degree',
        'A discussion thread from current students',
        'The salary page of a job board',
      ],
    answer: 0,
    why: 'BLS is the starting point for occupation descriptions, typical entry education, work environment and projections. Program brochures describe one program, not the occupation.',
  },
  {
    id: 'hce-p2',
    q: 'A nursing program is described as accredited. What does that tell you?',
    options: [
        'Its graduates are automatically licensed',
        'The state guarantees employment for graduates',
        'The program is free',
        'A recognized accrediting body reviewed the program against established standards',
      ],
    answer: 3,
    why: 'Accreditation is external review of an institution or program against standards. It is separate from licensure, which is granted by a government authority to an individual.',
  },
  {
    id: 'hce-p3',
    q: 'A learner interested in public health is told to follow the AAMC premed competencies. What is the problem with that advice?',
    options: [
      'The AAMC competencies are outdated',
      'Those competencies are oriented to medical school admissions; public health programs use their own standards',
      'Public health does not require any competencies',
      'Nothing, they apply to all health fields',
    ],
    answer: 1,
    why: 'One path does not fit every career. Use the standards relevant to the field you are actually pursuing.',
  },
  {
    id: 'hce-p4',
    q: 'Which reflection tells a reviewer the most about what a learner gained from an experience?',
    options: [
      '"Volunteered 200 hours at a community clinic"',
      '"Shadowed in three departments over one semester"',
      '"Observed intake workflow and saw how transportation barriers caused missed appointments, which changed how I think about access"',
      '"Completed my required service hours ahead of schedule"',
    ],
    answer: 2,
    why: 'Hours state presence. Strong reflection names the work, the problem it addressed, the skill practiced, and what changed in the learner\'s understanding.',
  },
  {
    id: 'hce-p5',
    q: 'Federal Work-Study is best described as:',
    options: [
        'Part-time employment for eligible students at participating schools',
        'A grant that does not need to be repaid',
        'A loan with a subsidized interest rate',
        'A scholarship awarded on academic merit',
      ],
    answer: 0,
    why: 'Work-Study provides part-time employment for eligible students at participating schools. It is neither a grant nor a loan.',
  },
  {
    id: 'hce-p6',
    q: 'Program A costs $12,000 a year in tuition in your home city. Program B costs $9,000 but requires relocating. What is the correct comparison?',
    options: [
        'Program B, because tuition is lower',
        'Whichever has the higher projected starting salary',
        'Program A, because relocation is always more expensive',
        'Estimated net cost after gift aid plus housing, transportation, food and other living costs, over the full program length',
      ],
    answer: 3,
    why: 'Price is more than tuition. Compare total cost of attendance and net cost after aid, across the full duration.',
  },
  {
    id: 'hce-p7',
    q: 'You want to reach a physical therapist you have never met. Which opening is most likely to get a reply?',
    options: [
      'A message asking whether they have any job openings',
      'A short note saying why you chose them, asking for fifteen minutes, with two questions a website could not answer',
      'A long message describing your entire academic history',
      'A request to shadow them next week',
    ],
    answer: 1,
    why: 'Ask for information before asking for opportunity. Specific, respectful, and easy to answer is the standard.',
  },
  {
    id: 'hce-p8',
    q: 'A mentor strongly recommends a career the learner is unsure about. What is the appropriate role of that advice?',
    options: [
        'The learner should follow it, since the mentor has more experience',
        'The learner should end the mentoring relationship',
        'It is one input; mentors support reflection and networks but should not control the decision or be the only source of support',
        'The learner should ask the mentor to decide',
      ],
    answer: 2,
    why: 'Mentors are guides, not decision-makers.',
  },
  {
    id: 'hce-p9',
    q: 'Which of these is a health career that works at population rather than individual level?',
    options: ['Occupational therapist', 'Medical laboratory scientist', 'Epidemiologist', 'Pharmacy technician'],
    answer: 2,
    why: 'Epidemiology sits in public and community health, working across populations rather than in direct patient care.',
  },
  {
    id: 'hce-p10',
    q: 'A learner lists their HMC pathway completion on an application. How should it be described?',
    options: [
        'As a professional certification in community health',
        'As a state-recognized credential',
        'As equivalent to a CHW certificate',
        'As an educational completion record from Health Matters Clinic',
      ],
    answer: 3,
    why: 'HMC credential rules are explicit. A completion is an educational record, not certification, licensure, clinical scope, or admission eligibility.',
  },
];

// ── The catalog ──────────────────────────────────────────────────────────

export const PATHWAYS: Pathway[] = [
  {
    id: 'health-careers-exploration',
    title: 'Health Careers Exploration',
    level: 'Discover',
    status: 'published',
    purpose:
      'Find out what health careers exist and which ones fit you. Check what each one really takes. Leave with a plan for your next step.',
    format: '8 courses at your own pace, about 8 to 12 hours. Ends with a plan you write.',
    credentialTitle: 'HMC Health Careers Exploration',
    credentialType: 'Course Completion',
    gates: [
      'Finish all 8 courses and their activities',
      'Score 80% or higher on the pathway post-test',
      'Hand in your career plan and score at least 15 out of 20',
    ],
    guidedStart: 'September 1, 12:00 PM PT',
    courses: HCE_COURSES,
    preTest: HCE_PRE,
    postTest: HCE_POST,
    capstone: {
      title: 'Personal Health-Career Roadmap',
      intro:
        'The roadmap turns exploration into a concrete plan. It is scored against a 20-point rubric and needs 15 points to pass.',
      requirements: [
        'Career hypotheses, two to four roles you are currently considering',
        'Evidence, the authoritative sources you used to understand each role',
        'Education and training, including prerequisites, degree or certificate requirements, and licensure or certification where applicable',
        'Experience plan covering shadowing, service, research, internship or project opportunities',
        'Competency goals, three skills to develop',
        'Academic plan with courses, milestones and support resources',
        'Financial plan with estimated costs and funding research tasks',
        'Network plan covering mentors, informational interviews, professional associations or school resources',
        '30, 60 and 90 day actions',
        'Review date, when you will revisit the roadmap',
      ],
      rubric: [
        { label: 'Career research accuracy', max: 4 },
        { label: 'Use of authoritative sources', max: 3 },
        { label: 'Education and licensure verification', max: 3 },
        { label: 'Experience and competency plan', max: 3 },
        { label: 'Financial realism', max: 2 },
        { label: 'Networking and mentorship plan', max: 2 },
        { label: 'Actionability', max: 3 },
      ],
      passing: 15,
      prompt:
        'Write your roadmap covering all ten required elements. This is submitted for review against the rubric above.',
    },
    sourceKey: [
      { key: 'J1', label: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook' },
      { key: 'J2', label: 'AAMC Premed Competencies for Entering Medical Students' },
      { key: 'J3', label: 'National Association of Colleges and Employers, Career Readiness Competencies' },
      { key: 'J4', label: 'U.S. Department of Education, Federal Student Aid' },
    ],
    version: '1.0',
    effectiveDate: 'August 7, 2026',
    nextReview: 'August 2027, or sooner if authoritative requirements change',
  },
  {
    id: 'youth-steam',
    title: 'Youth Mentorship + STEAM',
    level: 'Discover',
    status: 'in-development',
    purpose:
      'Young people explore health, science, and tech through hands-on projects, with a mentor beside them.',
    format: 'Self-paced with mentor sessions | 8 courses | Capstone project',
    credentialTitle: 'HMC Youth Mentorship and STEAM',
    credentialType: 'Course Completion',
    gates: [
      '8 courses complete',
      'Post-test 80% or higher',
      'Capstone at or above threshold',
      'Youth account set up, with consent and safety checks done',
    ],
    plannedCourses: [
      'Health Starts Here',
      'Inside the Human Body',
      'Mind + Brain',
      'Data Can Tell a Story',
      'Technology + Health',
      'Designing for People',
      'Meet the People Behind Healthcare',
      'Build Something That Matters — Capstone',
    ],
    // The self-paced eight-course sequence above is separate from the delivered
    // camp below, and is not counted as released by it. The camp is a site-based
    // program run with partner instructors over six weeks; its written
    // curriculum needs only paper and pencil, so no site is blocked by kits.
    courses: [STEM_CAMP],
    version: '0.9 draft',
    effectiveDate: 'In development',
    nextReview: 'Pending curriculum review',
  },
  {
    id: 'field-based-community-health',
    title: 'Field-Based Community Health',
    level: 'Foundations',
    status: 'in-development',
    purpose:
      'Get ready for outreach, navigation, and street medicine work in the field.',
    format: '15 courses at your own pace, plus hands-on shifts with a supervisor.',
    credentialTitle: 'HMC Field-Based Community Health',
    credentialType: 'Applied Pathway Completion',
    gates: [
      'Finish Shared Foundations, or show you have done the same elsewhere',
      '8 pathway courses',
      'Post-test 80% or higher',
      'Integrated case lab pass',
      'Finish the hands-on work your role needs',
      'Finish your assigned shifts or service hours',
      'Your supervisor signs off that you are ready',
    ],
    // Five written of the fifteen. Care Navigation and Coverage is the approved coverage
    // course; the four below it are the written core. What remains listed is what remains
    // to be written, plus three items that are not self-paced courses at all: the case lab,
    // the readiness assessment and the practicum are supervised and scheduled.
    plannedCourses: [
      'Communication + Active Listening',
      'Cultural Humility + Trauma-Informed Engagement',
      'Mental Health + Substance Use Awareness',
      'Harm Reduction Foundations',
      'Motivational Interviewing Foundations',
      'De-escalation + Conflict Response',
      'Data Collection + Documentation',
      'Applied Community Health Case Lab',
      'Field Readiness Assessment',
      'Practicum / Supervised Service',
    ],
    courses: [CARE_NAVIGATION_COVERAGE, ...FBCH_CORE_COURSES],
    preTest: FBCH_PRE,
    postTest: FBCH_POST,
    sourceKey: [
      { key: 'DHCS', label: 'California Department of Health Care Services, Medi-Cal Changes' },
      { key: 'DPSS', label: 'Los Angeles County Department of Public Social Services, Work Requirements' },
      { key: 'CoveredCA', label: 'Covered California, Find an Enroller' },
    ],
    version: '1.0 partial',
    effectiveDate: 'Coverage content verified August 3, 2026. Written core added August 28, 2026',
    nextReview: 'Before each renewal season and before any large outreach push, since the coverage course quotes dated policy',
  },
  {
    id: 'clinical-exposure-simulation',
    title: 'Clinical Exposure + Simulation',
    level: 'Applied',
    status: 'in-development',
    purpose:
      'See how care teams work. Practice in simulation. Learn where a learner role stops and a professional one begins.',
    format: '15 courses at your own pace, plus simulation days and a skills check.',
    credentialTitle: 'HMC Clinical and Community Health Experience',
    credentialType: 'Applied Pathway Completion',
    gates: [
      'Finish Shared Foundations, or show you have done the same elsewhere',
      '8 pathway courses',
      'Post-test 80% or higher',
      'Required simulations',
      'Pass your skills check',
      'Reflection and debrief',
    ],
    // Three written, and the three that teach nothing clinical. Everything left below either
    // teaches or rehearses a clinical judgement, and this pathway's record has said it is
    // pending clinical governance review since it was created. HMC has a PMHNP; that is who
    // reviews them. Writing them without that review is how a curriculum acquires an error
    // nobody catches, which has already happened once in this codebase.
    plannedCourses: [
      'Community-Centered Clinical Care',
      'Vitals + Screening Concepts',
      'Infection Prevention + PPE',
      'Clinical Documentation + Scribing Concepts',
      'Social Needs in Clinical Care',
      'Trauma-Informed Clinical Encounters',
      'Referral + Follow-Up Planning',
      'Simulation Case 1 — Chronic Disease + Access Barriers',
      'Simulation Case 2 — Mental Health / Substance Use + Safety',
      'Simulation Case 3 — Unhoused Patient + Continuity of Care',
      'Debrief + Reflection',
      'Practical / Simulation Competency Review',
    ],
    courses: CES_FOUNDATION_COURSES,
    preTest: CES_PRE,
    postTest: CES_POST,
    version: '1.0 partial',
    effectiveDate: 'Three non-clinical foundations written, August 28, 2026',
    nextReview: 'Clinical governance review, which the remaining twelve courses wait on',
  },
  {
    id: 'internships-fellowships',
    title: 'Internships + Fellowships',
    level: 'Advanced',
    status: 'in-development',
    purpose:
      'Spend a term on real project work with a supervisor. Leave with proof of what you did.',
    format: '11 courses and a placement that lasts one term, with a supervisor and a final project.',
    credentialTitle: 'HMC Internship and Fellowship',
    credentialType: 'Fellowship / Internship Completion',
    gates: [
      'Professional core complete',
      'Learning agreement',
      'Finish your project or placement work',
      'Midpoint review',
      'Capstone at threshold',
      'Final supervisor evaluation',
      'Approved portfolio artifact',
    ],
    // Four written, seven to go. Three of the seven are not courses in any honest sense:
    // the midpoint review, the capstone presentation and the final evaluation are scheduled
    // events with a supervisor in the room, and writing them as self-paced reading would
    // misrepresent what they are.
    plannedCourses: [
      'Research + Evidence Use',
      'Communication + Documentation',
      'Team Collaboration',
      'Professional Feedback + Growth',
      'Midpoint Review',
      'Capstone Presentation',
      'Final Evaluation + Career Reflection',
    ],
    courses: INTERNSHIP_COURSES,
    version: '1.0 partial',
    effectiveDate: 'Four of eleven courses written, August 28, 2026',
    nextReview: 'When a placement agreement exists, since the remaining gates depend on one',
  },
  {
    id: 'mentor-leader',
    title: 'Mentor + Leader',
    level: 'Leadership',
    status: 'in-development',
    purpose:
      'Learn to mentor one person, lead a group, and help others grow.',
    format: 'Self-paced core plus mentor practice case | 12 courses',
    credentialTitle: 'HMC Mentor and Peer Leader',
    credentialType: 'Course Completion',
    gates: [
      '8 courses complete',
      'Post-test 80% or higher',
      'Mentor practice case pass',
      'Readiness acknowledgement',
      'Extra checks if you will work with young people or sensitive information',
    ],
    // Five of the twelve are written. The seven below are the ones still to write, so this
    // list reads as a plan rather than as a promise: a planned title next to a written
    // course is how a catalogue starts advertising work nobody has done.
    plannedCourses: [
      'Goal Setting + Development Planning',
      'Inclusive Mentorship',
      'Facilitating Groups + Learning',
      'Supporting Reflection + Portfolio Development',
      'Peer Leadership + Team Coordination',
      'Mentor Practice Case',
      'Mentor / Leader Readiness Review',
    ],
    courses: MENTOR_LEADER_COURSES,
    preTest: MENTOR_PRE,
    postTest: MENTOR_POST,
    version: '1.0 partial',
    effectiveDate: 'Five of twelve courses written, August 28, 2026',
    nextReview: 'When the remaining seven are written, and before the mentor practice case is used to gate a credential',
  },
];

// The third Unstoppable audience, and the one the other two exist for: the community
// participant. It was listed as planned work on the facilitator pathway, which gated the
// facilitator credential on a course its holders never take. It has its own pathway
// because it has its own person. No license, no referral, nothing to finish first.
// Listed first of the three because it is how almost everybody arrives.

PATHWAYS.push({
  family: 'Mental Health + Community Education',
  id: 'unstoppable-community',
  title: 'The Unstoppable Experience',
  level: 'Discover',
  status: 'published',
  purpose:
    'A live monthly hour to pause and talk about mental health with people who get it. Open to everyone.',
  format: 'One live online session a month. Read what happens before you join.',
  credentialTitle: 'Unstoppable Experience Participant',
  credentialType: 'Course Completion',
  gates: [
    'Join a session',
  ],
  courses: [UNSTOPPABLE_EXPERIENCE],
  plannedCourses: [],
  version: '1.0',
  effectiveDate: 'Migrated from the Unstoppable Experience Queue Cards, September 22, 2026',
  nextReview: 'After the first three monthly sessions run from the Hub',
});

// These are two different programs for two different people, and they were one
// pathway. The continuing education course is for licensed professionals and needs a
// license number; the facilitator training is for community health workers, students
// and volunteers and needs no license at all. Bundled together, the facilitator
// credential required finishing a course its own audience is not eligible to take, and
// a clinician wanting one CE hour was put on a facilitator track they never asked for.
// Only the workshop carries the LACDMH approval. The facilitator training never has.

PATHWAYS.push({
  family: 'Mental Health + Community Education',
  id: 'unstoppable-facilitator',
  title: 'Unstoppable Facilitator Training',
  level: 'Leadership',
  status: 'published',
  purpose:
    'Learn to lead Unstoppable workshops where you live. No license needed.',
  format: 'Videos and reading you do on your own time, then a workshop you help lead.',
  credentialTitle: 'HMC Unstoppable Facilitator',
  credentialType: 'Course Completion',
  gates: [
    'Finish both parts of the training',
    'Pass both quizzes',
    'Lead a workshop and have your work signed off',
  ],
  courses: [CMHW_FACILITATOR],
  // Participant-facing community learning is a third audience again, not a step on the
  // way to facilitating. Listing it here gated the facilitator credential on a course
  // its holders never take. It now has its own pathway, unstoppable-community, above.
  plannedCourses: [],
  version: '2.0 migration',
  effectiveDate: 'Migrated from the Volunteer Portal training system',
  nextReview: 'Asset inventory pending confirmation of the required follow-up sequence',
});

PATHWAYS.push({
  family: 'Mental Health + Community Education',
  id: 'unstoppable-ce',
  title: 'Unstoppable Continuing Education',
  level: 'Advanced',
  status: 'published',
  purpose:
    'Earn one continuing education hour. For nurses, therapists, counselors and psychologists with a current license.',
  format: 'One live online session you book, then a short evaluation.',
  credentialTitle: 'Unstoppable Continuing Education, 1.0 Hour',
  credentialType: 'Course Completion',
  gates: [
    'Join the whole session',
    'Fill in the evaluation afterwards',
  ],
  courses: [UNSTOPPABLE_CE],
  plannedCourses: [],
  version: '2.0 migration',
  effectiveDate: 'Migrated from the Volunteer Portal training system',
  nextReview: 'With the LACDMH approval renewal',
});

export const LEARNING_MODEL = ['Discover', 'Learn', 'Practice', 'Serve', 'Demonstrate', 'Advance'];

export const LEVEL_ACCENT: Record<Level, { text: string; bg: string }> = {
  Discover: { text: 'text-[#233DFF]', bg: 'bg-blue-50' },
  Foundations: { text: 'text-[#FF6E40]', bg: 'bg-orange-50' },
  Applied: { text: 'text-[#FF6F91]', bg: 'bg-pink-50' },
  Advanced: { text: 'text-[#8B6D00]', bg: 'bg-amber-50' },
  Leadership: { text: 'text-emerald-700', bg: 'bg-emerald-50' },
};

export const pathwayById = (id: string) => PATHWAYS.find((p) => p.id === id);

export const courseById = (pathwayId: string, courseId: string) =>
  pathwayById(pathwayId)?.courses.find((c) => c.id === courseId);

export const pathwayMinutes = (p: Pathway) =>
  p.courses.reduce((n, c) => n + c.minutes, 0);

export const pathwayLessonIds = (p: Pathway) =>
  p.courses.flatMap((c) => c.lessons.map((l) => l.id));

/**
 * How much teachable content a pathway actually holds.
 *
 * Counted in blocks, not courses or lessons, because a lesson can exist with
 * nothing in it. Field-Based Community Health had one course and eight lessons and
 * zero blocks: the catalog reported it as having courses, the card said "Open now",
 * and enrolling took a learner into eight empty pages.
 *
 * Readiness is derived from this rather than from a hand-maintained flag, so it
 * cannot go stale. Youth Mentorship and STEAM carried status 'in-development' while
 * holding sixty six blocks across six lessons, and a member was shown "In
 * development" on a pathway that was substantially written.
 */
export const pathwayBlockCount = (p: Pathway) =>
  p.courses.reduce(
    (n, c) => n + c.lessons.reduce((m, l) => m + ((l as any).blocks?.length || 0), 0),
    0
  );

/**
 * Is there anything here a learner could actually do?
 *
 * Counting written blocks alone said no for a scheduled live course, because its
 * substance is the session rather than text on a page. The approved continuing
 * education course has no lessons by design and was therefore treated as an empty
 * pathway that no admin could open. A course counts if it has something to read, or
 * if it is a live session with requirements attached.
 */
export const pathwayHasContent = (p: Pathway) =>
  pathwayBlockCount(p) > 0 ||
  p.courses.some((c) => c.delivery === 'live' && (c.requirements?.length ?? 0) > 0);
