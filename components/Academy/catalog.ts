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
  /** Populated for live and blended courses. */
  sessions?: Session[];
  ce?: CeApproval;
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
  {
    id: 'hce-1',
    num: 1,
    title: 'The Health Professions Ecosystem',
    promise: 'Map the full range of health careers and see why outcomes depend on teams, not individuals.',
    about: [
      'Many learners know a few visible professions but not the full system. This course maps major career families and helps learners understand that health outcomes depend on teams with different training, responsibilities, and scopes.',
    ],
    objectives: [
      'Identify at least eight health-related career families.',
      'Distinguish direct patient-care roles from population, research, technology, and operational roles.',
      'Explain why interdisciplinary teamwork matters.',
      'Identify three career families worth exploring further.',
    ],
    minutes: 55,
    prerequisites: 'None. This is the entry point to the pathway.',
    whoFor: 'Anyone curious about health careers, including learners with no prior exposure to the field.',
    lessons: [
      {
        id: 'hce-1-l1',
        title: 'Healthcare is a team sport',
        summary: 'See how many roles touch a single patient encounter, and how many shape care without ever meeting a patient.',
        minutes: 18,
        body: [
          'A single patient encounter may involve physicians, nurses, physician associates/assistants, pharmacists, social workers, behavioral-health professionals, medical assistants, interpreters, community health workers, laboratory professionals, imaging staff, care coordinators, administrators, and others.',
          'Outside direct care, epidemiologists, researchers, engineers, analysts, public-health workers, educators, policy professionals, and technology teams shape how services are designed and delivered.',
        ],
      },
      {
        id: 'hce-1-l2',
        title: 'Career families',
        summary: 'Nine career families spanning clinical care, allied health, behavioral health, public health, research, technology and operations.',
        minutes: 22,
        body: [
          'Clinical medicine and advanced practice: physician, PA, advanced practice nursing, dentistry, optometry and other licensed professions.',
          'Nursing: registered nursing, advanced practice, public-health nursing, specialty nursing and related roles.',
          'Allied health and rehabilitation: respiratory care, physical therapy, occupational therapy, speech-language pathology, radiologic technology, sonography, and others.',
          'Behavioral health: psychology, psychiatry, counseling, social work, marriage and family therapy, substance-use treatment and peer-support roles.',
          'Pharmacy and laboratory science: pharmacists, pharmacy technicians, medical laboratory scientists, phlebotomy and related technical roles.',
          'Public and community health: epidemiology, health education, community health work, health navigation, environmental health, outreach and program management.',
          'Research and academia: laboratory research, clinical research, implementation science, health-services research, biostatistics and education.',
          'Digital health, data and engineering: software engineering, informatics, cybersecurity, product design, biomedical engineering, AI/data science and analytics.',
          'Administration, policy and operations: healthcare administration, quality improvement, compliance, finance, policy, supply chain, human resources and program operations.',
        ],
      },
      {
        id: 'hce-1-l3',
        title: 'Verify the job, not the myth',
        summary: 'Use BLS as a starting point, then verify licensure with the board that actually grants it.',
        minutes: 15,
        body: [
          'Use BLS Occupational Outlook Handbook data as a starting point for occupation descriptions, typical entry-level education, work environment, pay and projections.',
          'Then verify licensure, certification and accreditation requirements with the relevant state board, accreditor, professional body or educational institution. Requirements can change and may differ by state.',
        ],
      },
    ],
    checks: [
      {
        id: 'hce-1-c1',
        q: 'A learner reads a salary figure for a profession on a social media post. What is the appropriate next step?',
        options: [
          'Treat it as accurate if the account has a large following',
          'Check the BLS Occupational Outlook Handbook, then verify licensure with the relevant state board',
          'Average it with two other posts',
          'Assume it applies nationally',
        ],
        answer: 1,
        why: 'BLS is the starting point for occupation data. Licensure and accreditation must be verified with the state board or accreditor, because requirements change and differ by state.',
      },
      {
        id: 'hce-1-c2',
        q: 'Which of these is a health career that does not involve direct patient care?',
        options: ['Respiratory therapist', 'Epidemiologist', 'Physician associate', 'Registered nurse'],
        answer: 1,
        why: 'Epidemiology sits in the public and community health family, working at population level rather than in direct patient care.',
      },
    ],
    activity: {
      title: 'Career family sort',
      body: [
        'Choose 12 occupations from an HMC-provided list. Sort them into career families and write one sentence describing how each could contribute to a community-health problem such as asthma, diabetes prevention, homelessness or mental wellness.',
      ],
      prompt: 'List your 12 occupations, the family each belongs to, and one sentence on how each could contribute to a community health problem.',
    },
    artifact: {
      id: 'career-hypotheses',
      title: 'Career hypotheses',
      purpose:
        'The three roles you are currently considering, and what you still need to verify about each. Course 8 builds your roadmap on top of this.',
      reference: {
        title: 'Occupations to classify. Choose 12 of these 18.',
        items: [
          'Registered nurse',
          'Physician associate',
          'Respiratory therapist',
          'Community health worker',
          'Epidemiologist',
          'Medical laboratory scientist',
          'Licensed clinical social worker',
          'Health informatics analyst',
          'Occupational therapist',
          'Pharmacy technician',
          'Substance use counselor',
          'Radiologic technologist',
          'Public health educator',
          'Care coordinator',
          'Speech-language pathologist',
          'Biomedical engineer',
          'Healthcare compliance officer',
          'Medical interpreter',
        ],
      },
      fields: [
        {
          id: 'sort',
          label: 'Your 12 occupations, sorted into career families',
          help: 'List each occupation with the family it belongs to, and one sentence on how it could contribute to a community health problem such as asthma, diabetes prevention, homelessness or mental wellness.',
          multiline: true,
          placeholder: 'Respiratory therapist. Allied health and rehabilitation. Could run asthma education at a school clinic so families manage triggers before an ER visit.',
        },
        {
          id: 'hypothesis',
          label: 'Career hypothesis',
          help: 'For each: what interests you about it, what you are currently assuming, and what you still need to verify.',
          multiline: true,
          repeat: 3,
          repeatLabel: 'Hypothesis',
          placeholder: 'Interested in: ...\nCurrently assuming: ...\nStill need to verify: ...',
        },
      ],
    },
    sources: ['J1'],
  },
  {
    id: 'hce-2',
    num: 2,
    title: 'Know Yourself: Interests, Values + Work Style',
    promise: 'Choose careers to research based on the problems you want to work on, not on prestige.',
    about: [
      'A strong career decision considers more than prestige or salary. Learners should think about interests, values, preferred work environment, tolerance for uncertainty, educational commitment, financial realities, and the kind of problems they want to solve.',
    ],
    objectives: [
      'Identify personal interests, strengths and values relevant to career exploration.',
      'Distinguish a career preference from a fixed identity.',
      'Compare work environments and role demands.',
      'Select two to four careers for deeper research.',
    ],
    minutes: 50,
    prerequisites: 'Course 1, The Health Professions Ecosystem.',
    whoFor: 'Learners who can name several health careers and now need to narrow the list to a few worth researching.',
    lessons: [
      {
        id: 'hce-2-l1',
        title: 'Start with the problem you want to work on',
        summary: 'Five questions that narrow a career search faster than reading job titles.',
        minutes: 18,
        body: [
          'Questions to consider: Do I want direct patient contact or mostly behind-the-scenes work? Do I enjoy science, technology, communication, counseling, policy, design or data?',
          'Do I prefer highly structured environments or more flexible community settings? How much formal education or training am I prepared to pursue? What schedule, physical demands and work environment fit my life?',
        ],
      },
      {
        id: 'hce-2-l2',
        title: 'Strengths can be developed',
        summary: 'Why career readiness is built through school, work and service rather than something you either have or do not.',
        minutes: 17,
        body: [
          'Learners often think they must already possess every quality a profession values. Career readiness is developmental.',
          'The NACE career-readiness framework includes communication, critical thinking, teamwork, professionalism, technology, leadership, and career/self-development. These are skills that can be built through school, work, service and projects.',
        ],
      },
      {
        id: 'hce-2-l3',
        title: 'Do not overfit one quiz',
        summary: 'Interest inventories prompt reflection. They do not decide a career for you.',
        minutes: 15,
        body: [
          'Interest inventories can prompt reflection, but they should not decide a career for you.',
          'Use multiple sources of information: coursework, job descriptions, shadowing, informational interviews, mentors, volunteering, research experience and your own evolving priorities.',
        ],
      },
    ],
    checks: [
      {
        id: 'hce-2-c1',
        q: 'A learner scores low on "leadership" in an online interest inventory. What does the NACE framework suggest?',
        options: [
          'Leadership roles should be ruled out',
          'Career readiness is developmental, and leadership can be built through school, work, service and projects',
          'The inventory should be retaken until the score improves',
          'Leadership is not relevant to health careers',
        ],
        answer: 1,
        why: 'Career readiness competencies are developed through experience. An inventory prompts reflection; it does not fix an identity.',
      },
    ],
    activity: {
      title: 'Fit matrix',
      body: [
        'Select three careers. Score each from 1 to 5 on: interest in daily work; preferred work environment; education/training fit; financial feasibility; schedule/lifestyle fit; alignment with values; opportunities to serve communities you care about.',
        'Then write what information is still missing before making any decision.',
      ],
      prompt: 'Enter your three careers with their scores, then list what you still need to find out before deciding.',
    },
    sources: ['J3'],
  },
  {
    id: 'hce-3',
    num: 3,
    title: 'Education, Training, Licensure + Credentials',
    promise: 'Tell the difference between a degree, a certificate, a certification, a license, and accreditation, and verify the real requirements for a career you care about.',
    about: [
      'Health careers vary widely in educational requirements. Some require short-term certificates; others require associate, bachelor’s, graduate, professional or doctoral education; some require supervised hours, national exams, state licensure, continuing education or recurring certification.',
    ],
    objectives: [
      'Distinguish degree, certificate, certification, licensure and accreditation.',
      'Research the current requirements for a chosen profession.',
      'Identify prerequisite courses or experiences when applicable.',
      'Recognize why requirements must be verified with authoritative sources.',
    ],
    minutes: 60,
    prerequisites: 'Courses 1 and 2.',
    whoFor: 'Learners with two to four target careers who need to know what it actually takes to enter them.',
    lessons: [
      {
        id: 'hce-3-l1',
        title: 'Five terms that are not interchangeable',
        summary: 'Degree, certificate, certification, licensure and accreditation mean different things and carry different authority.',
        minutes: 22,
        body: [
          'Degree: an academic credential awarded by an educational institution.',
          'Certificate of completion: documentation that a learner completed a particular program. Meaning varies by program.',
          'Professional certification: a credential granted by an authorized certifying organization after meeting specified requirements. Not every certificate of completion is a professional certification.',
          'Licensure: legal authorization from a governmental licensing authority to practice a regulated profession within the jurisdiction and scope allowed.',
          'Accreditation: external review of an institution or program against established standards by a recognized accrediting body.',
        ],
      },
      {
        id: 'hce-3-l2',
        title: 'Build a requirements chain',
        summary: 'Seven things to research for any target career, in the order that saves the most time.',
        minutes: 20,
        body: [
          'For each target career, research: typical entry education from BLS; required degree or program accreditation, if applicable; state licensure or registration requirements, if applicable; national certification requirements, if applicable.',
          'Then: supervised clinical or practical hours, if applicable; continuing education or renewal requirements, if applicable; and program-specific admissions prerequisites.',
        ],
      },
      {
        id: 'hce-3-l3',
        title: 'One path does not fit every career',
        summary: 'Premed competencies apply to medical school. Other fields have their own standards.',
        minutes: 18,
        body: [
          'The AAMC premed competencies are useful for learners considering medical school, but they are not universal requirements for every health profession. For medicine, AAMC describes professional, thinking/reasoning and science competencies that medical schools may consider in holistic review.',
          'Learners pursuing nursing, pharmacy, public health, CHW work, physical therapy, counseling or other fields should use the standards relevant to that field.',
        ],
      },
    ],
    checks: [
      {
        id: 'hce-3-c1',
        q: 'What is the difference between a certificate of completion and a professional certification?',
        options: [
          'They are the same thing',
          'A certificate of completion documents that a learner finished a program; a professional certification is granted by an authorized certifying organization after meeting specified requirements',
          'A certification is always shorter',
          'A certificate of completion always allows practice',
        ],
        answer: 1,
        why: 'Not every certificate of completion is a professional certification. This distinction matters because only some credentials carry authority to practice.',
      },
      {
        id: 'hce-3-c2',
        q: 'Which body grants legal authorization to practice a regulated profession?',
        options: ['An accreditor', 'A professional association', 'A governmental licensing authority', 'The employing hospital'],
        answer: 2,
        why: 'Licensure comes from a governmental licensing authority and is limited to that jurisdiction and the scope it allows.',
      },
    ],
    activity: {
      title: 'Verify a path',
      body: [
        'Choose one profession. Produce a one-page verified pathway with citations to: BLS; the relevant state board or official licensing source, if regulated; an accrediting or professional authority, when relevant; and two educational programs showing admissions requirements.',
        'Flag any differences across programs.',
      ],
      prompt: 'Name the profession, then list each requirement with the authoritative source you verified it against. Note any differences you found between programs.',
    },
    sources: ['J1', 'J2'],
  },
  {
    id: 'hce-4',
    num: 4,
    title: 'Building Experience That Actually Teaches You Something',
    promise: 'Choose and describe experiences by what you learned, not by how many hours you logged.',
    about: [
      'Experience should help learners understand the work, build transferable skills, test career assumptions, and demonstrate growth. This course distinguishes observation from applied service and teaches learners to describe what they learned rather than simply collecting hours.',
    ],
    objectives: [
      'Identify meaningful ways to explore a health career.',
      'Distinguish volunteering, shadowing, research, internships, employment and service learning.',
      'Choose experiences aligned to learning goals.',
      'Document skills and reflection ethically.',
    ],
    minutes: 50,
    prerequisites: 'Courses 1 through 3.',
    whoFor: 'Learners planning to volunteer, shadow, intern or do research, and anyone who has logged hours without knowing how to describe them.',
    lessons: [
      {
        id: 'hce-4-l1',
        title: 'Experience types',
        summary: 'Shadowing, volunteering, research, internships, employment and service learning are not interchangeable.',
        minutes: 18,
        body: [
          'Shadowing: observing professionals to understand workflow and role. Usually limited in scope and highly dependent on privacy and site rules.',
          'Volunteering and service: contributing to an organization’s mission within an assigned role.',
          'Research: participating in inquiry, data, laboratory, evaluation or community-engaged research under appropriate oversight.',
          'Internship or fellowship: a structured learning placement with goals, supervision and defined work. Classification and compensation rules depend on context.',
          'Employment: paid work governed by employment law and job requirements.',
          'Service learning: structured learning connected to real community or organizational needs with reflection and educational objectives.',
        ],
      },
      {
        id: 'hce-4-l2',
        title: 'Hours are not the learning outcome',
        summary: 'What a strong reflection describes, and why a total hour count says almost nothing.',
        minutes: 17,
        body: [
          '"Completed 100 hours" tells a reviewer how long you were present, not what you learned.',
          'Strong reflection describes what you did; what problem the work addressed; what skill you practiced; what you observed about the system or profession; how the experience changed your understanding; and what you would do next.',
        ],
      },
      {
        id: 'hce-4-l3',
        title: 'Respect the role',
        summary: 'Observed is different from assisted, and assisted is different from performed.',
        minutes: 15,
        body: [
          'Students should never exaggerate what they did. "Observed wound-care workflow" is different from "performed wound care." "Supported resource navigation" is different from "managed a case."',
          'Accurate descriptions protect participants and your credibility.',
        ],
      },
    ],
    checks: [
      {
        id: 'hce-4-c1',
        q: 'A student observed a nurse changing a dressing. How should this appear on their record?',
        options: [
          'Performed wound care',
          'Assisted with wound care',
          'Observed wound-care workflow',
          'Managed wound care for a patient',
        ],
        answer: 2,
        why: 'Accurate description protects participants and the learner’s credibility. Observation is not performance or assistance.',
      },
    ],
    activity: {
      title: 'Experience plan',
      body: [
        'Choose one target career and design a three-part exploration plan: one informational interview; one observational or educational experience; one applied service, research or project experience.',
        'For each, state what you hope to learn and what evidence of growth you could ethically document.',
      ],
      prompt: 'Describe your three experiences, what you hope to learn from each, and what evidence of growth you could ethically document.',
    },
  },
  {
    id: 'hce-5',
    num: 5,
    title: 'Academic Readiness + Competency Development',
    promise: 'Build a realistic academic plan against the actual prerequisites of the programs you may apply to.',
    about: [
      'Different health-professions programs evaluate academic performance, prerequisite preparation, competencies and experiences differently. This course teaches learners to build a realistic academic-development plan rather than rely on generic advice.',
    ],
    objectives: [
      'Identify current academic strengths and gaps.',
      'Build a prerequisite-tracking system.',
      'Connect academic work to transferable competencies.',
      'Use feedback and reflection to improve performance.',
    ],
    minutes: 50,
    prerequisites: 'Courses 1 through 3.',
    whoFor: 'Learners currently in school, returning to school, or planning prerequisite coursework.',
    lessons: [
      {
        id: 'hce-5-l1',
        title: 'Know the actual prerequisites',
        summary: 'Build a tracker for the specific programs you may apply to, because requirements vary widely.',
        minutes: 18,
        body: [
          'Do not assume that every program requires the same courses.',
          'Create a spreadsheet or tracker for the specific programs you may apply to, including prerequisite course, minimum grade, lab requirement, expiration rule if any, test requirement, application cycle and source link.',
        ],
      },
      {
        id: 'hce-5-l2',
        title: 'Competencies are demonstrated through behavior',
        summary: 'Competencies are shown through patterns of evidence, not claimed as labels.',
        minutes: 17,
        body: [
          'The AAMC medical-school competency model includes areas such as commitment to learning and growth, empathy and compassion, interpersonal skills, service orientation, teamwork and collaboration, scientific inquiry, quantitative reasoning and communication.',
          'These are not simply labels to claim. Applicants demonstrate them through patterns of behavior and evidence.',
        ],
      },
      {
        id: 'hce-5-l3',
        title: 'Use academic difficulty as data',
        summary: 'Six questions to ask after a hard term, instead of concluding the career is closed.',
        minutes: 15,
        body: [
          'A low grade or difficult term should trigger analysis, not automatic defeat.',
          'Ask: Was the course load realistic? Was there a content gap? Was the study method effective? Were work, caregiving, health or financial factors affecting performance? What support did I use? What will change next term?',
        ],
      },
    ],
    checks: [
      {
        id: 'hce-5-c1',
        q: 'A learner had a difficult term. According to this course, what is the right response?',
        options: [
          'Conclude the career is not a fit',
          'Analyze course load, content gaps, study method, outside factors and support used, then decide what changes next term',
          'Retake every course immediately',
          'Avoid mentioning it anywhere',
        ],
        answer: 1,
        why: 'Academic difficulty is data. The course teaches structured analysis rather than automatic defeat.',
      },
    ],
    activity: {
      title: '90-day academic plan',
      body: ['Create one academic goal, two specific actions, one support or resource, one measure of progress and a review date.'],
      prompt: 'Write your goal, two actions, the support you will use, how you will measure progress, and your review date.',
    },
    sources: ['J2'],
  },
  {
    id: 'hce-6',
    num: 6,
    title: 'Paying for the Path: Financial Aid + Cost Planning',
    promise: 'Estimate the real cost of a program and compare offers on net cost rather than headline tuition.',
    about: [
      'Education decisions should include the full cost of attendance, likely financing options, opportunity cost, and the learner’s financial circumstances.',
      'Federal Student Aid is the controlling source for federal aid terminology and processes. Specific amounts, deadlines and program rules should be checked at the time of application.',
    ],
    objectives: [
      'Distinguish scholarships, grants, work-study and loans.',
      'Estimate total cost rather than tuition alone.',
      'Identify official sources for federal student aid.',
      'Build a basic education-cost comparison.',
    ],
    minutes: 45,
    prerequisites: 'None, though Course 3 makes the education requirements clearer first.',
    whoFor: 'Anyone weighing the cost of a program, including learners who assume a path is out of reach financially.',
    lessons: [
      {
        id: 'hce-6-l1',
        title: 'Price is more than tuition',
        summary: 'Total cost of attendance includes housing, transport, exams, childcare and reduced work hours.',
        minutes: 16,
        body: [
          'Consider tuition and fees, books and supplies, housing, transportation, food, insurance, licensing exams, application fees, relocation, childcare and reduced work hours.',
          'A lower-tuition program may still be more expensive overall if relocation or living costs are high.',
        ],
      },
      {
        id: 'hce-6-l2',
        title: 'Understand funding types',
        summary: 'Scholarships, grants, work-study and loans, and where the official information actually lives.',
        minutes: 15,
        body: [
          'Scholarships and grants generally do not need to be repaid when program terms are met. Federal Work-Study provides part-time employment for eligible students at participating schools. Loans must be repaid under their terms.',
          'Learners should review current federal aid information at StudentAid.gov and school financial-aid offices rather than relying on social-media advice.',
        ],
      },
      {
        id: 'hce-6-l3',
        title: 'Compare offers, not headlines',
        summary: 'Calculate net cost after gift aid, and never treat a projected salary as guaranteed.',
        minutes: 14,
        body: [
          'When comparing programs, calculate estimated net cost after grants and scholarships, expected borrowing, living costs, program duration and likely additional expenses.',
          'Do not treat projected salary as guaranteed.',
        ],
      },
    ],
    checks: [
      {
        id: 'hce-6-c1',
        q: 'Program A has lower tuition than Program B but requires relocating to a high-cost city. What should the learner compare?',
        options: [
          'Tuition alone, since it is the largest line item',
          'Estimated net cost after gift aid, plus living costs, borrowing, duration and additional expenses',
          'Projected starting salary only',
          'Whichever program has the better reputation',
        ],
        answer: 1,
        why: 'A lower-tuition program can cost more overall. Compare net cost and total cost of attendance, and do not treat projected salary as guaranteed.',
      },
    ],
    activity: {
      title: 'Cost comparison',
      body: [
        'Using fictional program data, compare two programs and calculate: total estimated annual cost; gift aid; estimated out-of-pocket or borrowed amount; duration; and one nonfinancial factor that matters.',
      ],
      prompt: 'Lay out both programs with total annual cost, gift aid, amount borrowed, duration, and the nonfinancial factor you weighed.',
    },
    sources: ['J4'],
  },
  {
    id: 'hce-7',
    num: 7,
    title: 'Professional Communication, Networking + Mentorship',
    promise: 'Introduce yourself professionally and request an informational conversation that someone will actually say yes to.',
    about: [
      'Professional relationships can expand access to information, feedback, opportunity and belonging. Networking is not collecting contacts; it is building respectful relationships over time.',
      'Mentorship works best when expectations, goals and boundaries are clear.',
    ],
    objectives: [
      'Introduce yourself professionally.',
      'Request an informational conversation appropriately.',
      'Prepare thoughtful questions.',
      'Use mentorship responsibly.',
    ],
    minutes: 45,
    prerequisites: 'None.',
    whoFor: 'Learners preparing to contact professionals, request informational interviews, or work with a mentor.',
    lessons: [
      {
        id: 'hce-7-l1',
        title: 'A professional introduction',
        summary: 'Four elements of a professional introduction, with an example you can adapt.',
        minutes: 15,
        body: [
          'A concise introduction can include your name; what you are studying or exploring; the area you are interested in; and why you are speaking with this person.',
          'Example: "I’m Jordan, a community-college student exploring public health and nursing. I’ve been volunteering in community outreach and I’m trying to understand how nurses move between hospital and community settings. I’d love to hear about your path."',
        ],
      },
      {
        id: 'hce-7-l2',
        title: 'Ask for information before asking for opportunity',
        summary: 'What makes a first outreach specific, respectful and easy for someone to say yes to.',
        minutes: 15,
        body: [
          'A strong first outreach is specific, respectful and easy to answer.',
          'Explain why you chose the person, request a short amount of time, and prepare questions that cannot be answered with a quick website search.',
        ],
      },
      {
        id: 'hce-7-l3',
        title: 'Mentors are guides, not decision-makers',
        summary: 'What good mentorship supports, and what it should never replace.',
        minutes: 15,
        body: [
          'Effective mentors support reflection, learning, networks and professional development.',
          'They should not control the learner’s decisions or become the sole source of support.',
        ],
      },
    ],
    checks: [
      {
        id: 'hce-7-c1',
        q: 'What makes a first outreach message more likely to get a reply?',
        options: [
          'Asking directly for a job or placement',
          'Being specific about why you chose the person, requesting a short amount of time, and asking questions a website cannot answer',
          'Sending the same message to as many people as possible',
          'Attaching a full resume with no message',
        ],
        answer: 1,
        why: 'Ask for information before asking for opportunity. Specific, respectful and easy to answer is the standard.',
      },
    ],
    activity: {
      title: 'Skills check: professional outreach',
      body: [
        'Draft: a 50-word professional introduction; a short informational-interview email; five questions for a professional in a target field; and one follow-up thank-you message.',
      ],
      prompt: 'Write your introduction, your outreach email, your five questions, and your thank-you message.',
    },
  },
  {
    id: 'hce-8',
    num: 8,
    title: 'Build Your Personal Health-Career Roadmap',
    promise: 'Turn everything you researched into a working plan with 30, 60 and 90 day actions.',
    about: [
      'The final course turns exploration into a concrete plan. The roadmap is not a permanent contract; it is a working document that should change as the learner gains information and experience.',
    ],
    objectives: [
      'Assemble career hypotheses supported by authoritative evidence.',
      'State education, experience, competency, academic, financial and network plans.',
      'Commit to 30, 60 and 90 day actions and a review date.',
    ],
    minutes: 60,
    prerequisites: 'All seven prior courses.',
    whoFor: 'Learners ready to turn their research into a working plan with dated actions.',
    lessons: [
      {
        id: 'hce-8-l1',
        title: 'What the roadmap contains',
        summary: 'The ten required elements, from career hypotheses through 30, 60 and 90 day actions.',
        minutes: 35,
        body: [
          'Career hypotheses: two to four roles you are currently considering. Evidence: authoritative sources used to understand each role. Education and training: prerequisites, degree or certificate requirements and licensure or certification where applicable.',
          'Experience plan: shadowing, service, research, internship or project opportunities. Competency goals: three skills to develop. Academic plan: courses, milestones and support resources.',
          'Financial plan: estimated costs and funding research tasks. Network plan: mentors, informational interviews, professional associations or school resources. Then 30, 60 and 90 day actions, and a review date.',
        ],
      },
      {
        id: 'hce-8-l2',
        title: 'A plan you will actually revisit',
        summary: 'Set the review date when you write the plan, and expect your hypotheses to change.',
        minutes: 25,
        body: [
          'Set the review date when you write the roadmap, not later. A plan without a review date becomes a document you wrote once.',
          'Expect the hypotheses to change. Changing them because you learned something is the roadmap working, not the roadmap failing.',
        ],
      },
    ],
    checks: [
      {
        id: 'hce-8-c1',
        q: 'A learner changes two of their career hypotheses after an informational interview. What does this mean?',
        options: [
          'The roadmap failed and should be restarted',
          'The roadmap is working as intended, because it is a working document that changes as the learner gains information',
          'The learner should not have done the interview',
          'The roadmap should be locked after the first version',
        ],
        answer: 1,
        why: 'The roadmap is explicitly not a permanent contract. Revising it on new information is the intended behavior.',
      },
    ],
    activity: {
      title: 'Capstone: your health-career roadmap',
      body: [
        'Assemble the ten required elements into one document. This is the artifact reviewed against the capstone rubric.',
      ],
      prompt: 'Draft your roadmap here: career hypotheses, evidence, education and training, experience plan, competency goals, academic plan, financial plan, network plan, 30/60/90 day actions, and review date.',
    },
  },
];

// Baseline form. Reviewed immediately after submission with rationales, which
// is good teaching but means these exact items can never carry the credential.
// The post-test below is a parallel form: same ten constructs, different items,
// different correct-option positions.
const HCE_PRE: Check[] = [
  {
    id: 'hce-t1',
    q: 'Which source is the appropriate starting point for occupation descriptions, typical entry education and pay?',
    options: ['A social media career account', 'BLS Occupational Outlook Handbook', 'A program brochure', 'A salary aggregator site'],
    answer: 1,
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
      'They are relevant to learners considering medical school, and other fields use their own standards',
      'They replace state licensure',
      'They are required for community health work',
    ],
    answer: 1,
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
    options: ['Federal loans', 'Grants and scholarships', 'Private loans', 'Income share agreements'],
    answer: 1,
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
    options: ['Performed the procedure', 'Assisted with the procedure', 'Observed the workflow', 'Managed the case'],
    answer: 2,
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
      'Health careers outside direct patient care',
      'Roles unavailable to community college students',
      'Non-health careers',
    ],
    answer: 1,
    why: 'Health careers extend well beyond direct patient care into population health, data, technology, policy and operations.',
  },
  {
    id: 'hce-t10',
    q: 'What is the correct characterization of an HMC Academy pathway completion?',
    options: [
      'A professional certification',
      'A state license',
      'An HMC educational completion record, not professional certification or admission eligibility',
      'Proof of clinical scope',
    ],
    answer: 2,
    why: 'HMC credential rules are explicit: course completion is not licensure, board certification, clinical scope, or admission eligibility.',
  },
];

import { CARE_NAVIGATION_COVERAGE } from './pathwayFieldBased';
import type { Block, SourceRef, ReadingLevel } from './blocks';
import { MENTAL_HEALTH_COURSES } from './pathwayMentalHealth';
import { STEM_CAMP } from './programStemCollab';

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
      'Understand the health-professions ecosystem, connect interests and strengths to possible career families, verify education and licensure requirements, build meaningful experience, strengthen professional skills, and leave with an individualized next-step plan.',
    format: 'Self-paced | 8 courses | Approximately 8 to 12 hours | Optional career panels and mentor sessions | Final personal pathway plan',
    credentialTitle: 'HMC Health Careers Exploration — Pathway Completion',
    credentialType: 'Course Completion',
    gates: [
      'Complete all 8 courses and their required activities',
      'Score 80% or higher on the pathway post-test',
      'Submit a career roadmap meeting the capstone threshold of 15 of 20',
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
      'Help young people explore health, science, technology, community problem-solving, and health careers through projects and mentoring.',
    format: 'Self-paced with mentor sessions | 8 courses | Capstone project',
    credentialTitle: 'HMC Youth Mentorship + STEAM — Pathway Completion',
    credentialType: 'Course Completion',
    gates: [
      '8 courses complete',
      'Post-test 80% or higher',
      'Capstone at or above threshold',
      'Youth account, consent and safeguarding requirements satisfied',
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
    // camp below. The camp is site-based with physical kits and partner
    // instructors; collapsing them would misrepresent both.
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
      'Build readiness for community health, outreach, navigation, prevention, street-medicine support, and field-based service.',
    format: 'Self-paced core plus required practicals and supervised practicum | 15 courses',
    credentialTitle: 'HMC Field-Based Community Health — Applied Pathway Completion',
    credentialType: 'Applied Pathway Completion',
    gates: [
      'Shared Foundations or approved equivalency',
      '8 pathway courses',
      'Post-test 80% or higher',
      'Integrated case lab pass',
      'All role-required practicals',
      'Assigned practicum or service requirement',
      'Supervisor readiness sign-off',
    ],
    plannedCourses: [
      'Community Health + Health Equity',
      'Social Determinants of Health',
      'Communication + Active Listening',
      'Cultural Humility + Trauma-Informed Engagement',
      'Professional Boundaries + Ethics + Privacy',
      'Field Safety + Infection Prevention',
      'Mental Health + Substance Use Awareness',
      'Harm Reduction Foundations',
      'Care Navigation + Resource Coordination',
      'Motivational Interviewing Foundations',
      'De-escalation + Conflict Response',
      'Data Collection + Documentation',
      'Applied Community Health Case Lab',
      'Field Readiness Assessment',
      'Practicum / Supervised Service',
    ],
    courses: [CARE_NAVIGATION_COVERAGE],
    sourceKey: [
      { key: 'DHCS', label: 'California Department of Health Care Services, Medi-Cal Changes' },
      { key: 'DPSS', label: 'Los Angeles County Department of Public Social Services, Work Requirements' },
      { key: 'CoveredCA', label: 'Covered California, Find an Enroller' },
    ],
    version: '1.0 partial',
    effectiveDate: 'Coverage content verified August 3, 2026',
    nextReview: 'Before each renewal season and before any large outreach push',
  },
  {
    id: 'clinical-exposure-simulation',
    title: 'Clinical Exposure + Simulation',
    level: 'Applied',
    status: 'in-development',
    purpose:
      'Give eligible health-professions learners structured exposure to clinical communication, team-based care, simulation, community-centered care, and field workflows without exceeding learner scope.',
    format: 'Self-paced core plus scheduled simulation and practical competency review | 15 courses',
    credentialTitle: 'HMC Clinical + Community Health Experience — Pathway Completion',
    credentialType: 'Applied Pathway Completion',
    gates: [
      'Shared Foundations or approved equivalency',
      '8 pathway courses',
      'Post-test 80% or higher',
      'Required simulations',
      'Assigned practical competency review',
      'Reflection and debrief',
    ],
    plannedCourses: [
      'Community-Centered Clinical Care',
      'Healthcare Team Roles + Scope',
      'Medical Terminology Foundations',
      'Patient Communication + Interviewing',
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
    courses: [],
    version: '0.9 draft',
    effectiveDate: 'In development',
    nextReview: 'Pending clinical governance review',
  },
  {
    id: 'internships-fellowships',
    title: 'Internships + Fellowships',
    level: 'Advanced',
    status: 'in-development',
    purpose:
      'Provide sustained, supervised, project-based professional experience tied to learning objectives and portfolio outcomes.',
    format: 'Term-based placement with supervisor, learning agreement, midpoint review and capstone | 11 core courses',
    credentialTitle: 'HMC [Concentration] Internship / Fellowship — Completion',
    credentialType: 'Fellowship / Internship Completion',
    gates: [
      'Professional core complete',
      'Learning agreement',
      'Required project or placement work',
      'Midpoint review',
      'Capstone at threshold',
      'Final supervisor evaluation',
      'Approved portfolio artifact',
    ],
    plannedCourses: [
      'Professional Orientation + Expectations',
      'Project Planning + Milestones',
      'Research + Evidence Use',
      'Communication + Documentation',
      'Team Collaboration',
      'Ethics, Confidentiality + Organizational Responsibility',
      'Professional Feedback + Growth',
      'Portfolio + Impact Documentation',
      'Midpoint Review',
      'Capstone Presentation',
      'Final Evaluation + Career Reflection',
    ],
    courses: [],
    version: '0.9 draft',
    effectiveDate: 'In development',
    nextReview: 'Pending placement agreements',
  },
  {
    id: 'mentor-leader',
    title: 'Mentor + Leader',
    level: 'Leadership',
    status: 'in-development',
    purpose:
      'Prepare experienced participants and professionals to mentor, facilitate, lead teams, and support learner development.',
    format: 'Self-paced core plus mentor practice case | 12 courses',
    credentialTitle: 'HMC Mentor + Peer Leader — Pathway Completion',
    credentialType: 'Course Completion',
    gates: [
      '8 courses complete',
      'Post-test 80% or higher',
      'Mentor practice case pass',
      'Readiness acknowledgement',
      'Additional eligibility checks if the assignment involves minors, supervision, or sensitive access',
    ],
    plannedCourses: [
      'The Role of a Mentor',
      'Building Trust + Psychological Safety',
      'Coaching vs Advising vs Supervising',
      'Goal Setting + Development Planning',
      'Giving Effective Feedback',
      'Inclusive Mentorship',
      'Facilitating Groups + Learning',
      'Recognizing Risk + Escalating Concerns',
      'Supporting Reflection + Portfolio Development',
      'Peer Leadership + Team Coordination',
      'Mentor Practice Case',
      'Mentor / Leader Readiness Review',
    ],
    courses: [],
    version: '0.9 draft',
    effectiveDate: 'In development',
    nextReview: 'Pending governance review',
  },
];

PATHWAYS.push({
  family: 'Mental Health + Community Education',
  id: 'unstoppable-mental-health',
  title: 'Unstoppable Continuing Education and Facilitator Training',
  level: 'Leadership',
  status: 'in-development',
  purpose:
    'HMC\'s existing mental health education, migrated into the Academy so members and volunteers take one canonical training rather than separate copies. Continuing education for licensed professionals, and facilitator preparation for people who will deliver Unstoppable programming.',
  format: 'Scheduled sessions for continuing education, blended video and written curriculum for facilitator training',
  credentialTitle: 'HMC Unstoppable Facilitator — Completion',
  credentialType: 'Course Completion',
  gates: [
    'Both community mental health worker training parts complete',
    'Both assessments passed',
    'Facilitator readiness sequence recorded and approved by program leadership',
  ],
  courses: MENTAL_HEALTH_COURSES,
  plannedCourses: [
    'Unstoppable: The Power of Healing and Growth (continuing education)',
    'Community Mental Health Worker and Facilitator Training',
    'Unstoppable Community Learning (participant facing)',
  ],
  version: '2.0 migration',
  effectiveDate: 'Migrated from the Volunteer Portal training system',
  nextReview: 'Asset inventory pending confirmation of the required follow-up sequence',
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
