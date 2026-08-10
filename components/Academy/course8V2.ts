// Health Careers Exploration, Course 8 — v2 guided curriculum.
//
// Converted from the v1 course, which stated 60 minutes against 125 words.
// Promise, objectives and the original knowledge check are preserved.
//
// The v1 course carried the roadmap as an `activity`. It becomes an `artifact`
// here so the ten required elements are stored as separate fields rather than
// one undifferentiated blob, which is what lets the learner revise one section
// without rewriting the document. Completion math in progress.ts derives both
// its numerator and denominator from the same course object, so the swap is
// self-consistent. The rubric-scored pathway capstone is unchanged.

import type { Course } from './catalog';
import type { Block } from './blocks';

// ── Lesson 1 ─────────────────────────────────────────────────────────────

const LESSON_1: Block[] = [
  {
    kind: 'why',
    text: [
      'You have been building this document for seven courses without writing it. Course 1 produced career hypotheses. Course 2 narrowed them to a shortlist with reasons. Course 3 verified what entering them requires. Courses 4 and 5 planned experience and academics. Course 6 costed it. Course 7 drafted the outreach.',
      'This course assembles those into one working plan with dates. If you completed the artifacts along the way, most of the writing is already done and this hour is mainly arrangement and honesty.',
    ],
  },
  {
    kind: 'concept',
    title: 'The ten required elements',
    text: [
      'A roadmap that omits any of these has a gap where a decision should be. Work through them in order; each one draws on a specific earlier artifact.',
    ],
  },
  {
    kind: 'steps',
    items: [
      { label: '1. Career hypotheses', text: 'Two to four roles you are currently considering. From your Course 2 shortlist, revised by anything you have learned since. They are called hypotheses because they are held provisionally and tested, not chosen and defended.' },
      { label: '2. Evidence', text: 'The authoritative sources you used to understand each role, with the dates you checked. From Course 3. This is what separates a roadmap from a wish list: every claim about a career traces to a body that actually decides.' },
      { label: '3. Education and training', text: 'Prerequisites, degree or certificate requirements, and licensure or certification where applicable. Straight from the Course 3 requirements chain, including the longest pole you identified.' },
      { label: '4. Experience plan', text: 'The shadowing, service, research, internship or project opportunities you will pursue, and what question each is meant to answer. From Course 4.' },
      { label: '5. Competency goals', text: 'Three skills to develop, with where you will practice each. From Course 5, weighted toward the competencies you found you had least evidence for.' },
      { label: '6. Academic plan', text: 'Courses, milestones and the support resources you will use. From your Course 5 prerequisite tracker, sequenced against application cycles.' },
      { label: '7. Financial plan', text: 'Estimated costs and the funding research tasks you still owe yourself. From Course 6, including anything you could not find.' },
      { label: '8. Network plan', text: 'Mentors, informational interviews, professional associations or school resources, with names where you have them. From Course 7.' },
      { label: '9. Thirty, sixty and ninety day actions', text: 'Specific and dated. An action is something you could put in a calendar. "Research nursing programs" is not an action; "compare cost of attendance for three programs by March 14" is.' },
      { label: '10. A review date', text: 'A single date when you will read this again and change it. Set it now, while you are writing.' },
    ],
  },
  {
    kind: 'fieldnote',
    title: 'What makes an action real',
    text: [
      'The test is whether someone else could tell you had done it. "Learn more about physical therapy" fails the test. "Email two physical therapists using the outreach draft, by February 10" passes it.',
      'Most roadmaps fail at element nine rather than at the research. The research feels like progress and the dated commitment feels like exposure, so people write the first thoroughly and the second vaguely.',
    ],
  },
  {
    kind: 'example',
    title: 'Vague and dated, side by side',
    text: [
      'Vague: "30 days: keep researching programs. 60 days: start getting experience. 90 days: figure out financial aid."',
      'Dated: "30 days: complete cost-of-attendance rows for the three nursing programs on my list, by Feb 28. Send outreach emails to two community health nurses using my Course 7 draft. 60 days: apply to the volunteer coordinator role at the mobile clinic, by Mar 30. Complete the FAFSA. 90 days: informational interview with at least one person who works in the setting I know least about. Re-run the requirements chain for my second hypothesis, which I only half verified."',
      'The second version is not more ambitious than the first. It is the same intentions written so you can tell whether you did them.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce8-c2',
      q: 'Which of these belongs in the thirty-day section of a roadmap?',
      options: [
        'Become more knowledgeable about health careers',
        'Complete cost-of-attendance comparisons for three named programs by a specific date',
        'Decide on a final career',
        'Build a professional network',
      ],
      answer: 1,
      rationale:
        'An action is something someone else could verify you did. A named task with a date passes that test; a state of mind does not.',
      distractors:
        'Becoming knowledgeable and building a network are outcomes produced by actions rather than actions themselves. Deciding on a final career in thirty days is the opposite of what a hypothesis-driven roadmap is for.',
    },
  },
];

// ── Lesson 2 ─────────────────────────────────────────────────────────────

const LESSON_2: Block[] = [
  {
    kind: 'why',
    text: [
      'Most plans are written once and never opened again. The difference between a plan that works and a document you wrote is almost entirely whether a review date exists, and whether you were honest enough that rereading it is useful rather than embarrassing.',
    ],
  },
  {
    kind: 'concept',
    title: 'Set the review date now',
    text: [
      'Set it while you are writing the roadmap, not later, because later does not arrive. Sixty to ninety days out is usually right: long enough for the ninety-day actions to have played out, short enough that a wrong assumption does not sit unchallenged for a year.',
      'Put it in whatever calendar you actually look at. A review date that lives only inside the document is a review date that does not exist.',
    ],
  },
  {
    kind: 'concept',
    title: 'Expect the hypotheses to change',
    text: [
      'The roadmap is not a permanent contract. It is a working document, and it should change as you gain information and experience.',
      'This is worth stating plainly because learners often experience a changed hypothesis as failure. It is the opposite. You built a plan designed to be tested; a test that changes your answer is the plan doing its job. The expensive outcome is not discovering that a career is wrong for you. It is discovering it after four years and forty thousand dollars because you never went and looked.',
      'What should not change casually is the evidence standard. Revise a hypothesis because you interviewed three practitioners and learned something, not because a single conversation was discouraging or a single course was hard.',
    ],
  },
  {
    kind: 'case',
    title: 'A revision that looked like a setback',
    scenario: true,
    text: [
      'Jordan\'s roadmap listed nursing first and health informatics third. Their thirty-day actions included two informational interviews, one with a nurse and one with a clinical informatics specialist.',
      'The nurse interview went well and confirmed what Jordan expected. The informatics conversation did not go as expected at all: the specialist described spending most of her time working out why clinicians were not using a system that was supposed to help them, which is a communication and observation problem far more than a technical one. Jordan had assumed informatics meant sitting alone with data.',
      'At the review date Jordan moved informatics to first. Nothing had gone wrong. Six hundred words of research had been corrected by forty minutes of conversation, which is a good exchange rate, and it happened before any tuition was spent.',
      'Note also what Jordan did not do: they did not delete nursing. It stayed on the list as a hypothesis, because one conversation is one data point.',
    ],
  },
  {
    kind: 'reflect',
    title: 'Before you write the final version',
    prompts: [
      'Which of your hypotheses do you have the least real evidence for? What would it take to test it in the next ninety days?',
      'Where in your plan are you assuming something because checking it would be discouraging?',
      'If your first hypothesis turned out to be wrong, what would the plan become? If you have no answer, your list is too narrow.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce-8-c1',
      q: 'A learner changes two of their career hypotheses after an informational interview. What does this mean?',
      options: [
        'The roadmap failed and should be restarted',
        'The roadmap is working as intended, because it is a working document that changes as the learner gains information',
        'The learner should not have done the interview',
        'The roadmap should be locked after the first version',
      ],
      answer: 1,
      rationale:
        'The roadmap is explicitly not a permanent contract. Revising it on new information is the intended behavior, and finding out early is far cheaper than finding out after enrolling.',
      distractors:
        'Restarting discards seven courses of verified research over one new fact. Avoiding the interview would have preserved a wrong plan. Locking the document converts a testing instrument into a commitment device.',
    },
  },
  {
    kind: 'takeaways',
    items: [
      'The roadmap has ten required elements, and each draws on an artifact you already produced.',
      'Evidence with dates is what separates a roadmap from a wish list.',
      'An action is real if someone else could tell whether you did it. Name it and date it.',
      'Set the review date while writing, and put it in the calendar you actually use.',
      'Expect hypotheses to change. Revise on evidence, not on a single discouraging conversation.',
      'Discovering a career is wrong for you is the cheapest possible good outcome, and it gets more expensive every year you delay it.',
    ],
  },
];

// ── Course ───────────────────────────────────────────────────────────────

export const COURSE_8_V2: Course = {
  id: 'hce-8',
  num: 8,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Build Your Personal Health-Career Roadmap',
  promise: 'Turn everything you researched into a working plan with 30, 60 and 90 day actions.',
  about: [
    'The final course turns exploration into a concrete plan. If you completed the artifact in each earlier course, most of this document already exists and this hour is arrangement, dating and honesty.',
    'The roadmap is not a permanent contract. It is a working document that should change as you gain information and experience, which is why it carries a review date.',
  ],
  objectives: [
    'Assemble career hypotheses supported by authoritative evidence.',
    'State education, experience, competency, academic, financial and network plans.',
    'Commit to 30, 60 and 90 day actions and a review date.',
  ],
  minutes: 58,
  prerequisites: 'All seven prior courses.',
  whoFor: 'Learners ready to turn their research into a working plan with dated actions.',
  lessons: [
    {
      id: 'hce8-l1',
      title: 'What the roadmap contains',
      summary: 'The ten required elements, from career hypotheses through 30, 60 and 90 day actions.',
      minutes: 16,
      blocks: LESSON_1,
    },
    {
      id: 'hce8-l2',
      title: 'A plan you will actually revisit',
      summary: 'Set the review date when you write the plan, and expect your hypotheses to change.',
      minutes: 14,
      blocks: LESSON_2,
    },
  ],
  checks: [],
  artifact: {
    id: 'career-roadmap',
    minutes: 28,
    title: 'Your health-career roadmap',
    purpose:
      'The capstone document, assembled from the seven artifacts you have already produced. Each field below corresponds to one of the ten required elements. This is the artifact reviewed against the capstone rubric, and the one you will actually use.',
    reference: {
      title: 'Where each element comes from',
      items: [
        'Career hypotheses: your Course 2 shortlist, revised',
        'Evidence: the authorities and dates from your Course 3 requirements chain',
        'Education and training: Course 3, including the longest pole you identified',
        'Experience plan: Course 4, with the question each experience answers',
        'Competency goals: Course 5, weighted to where you had least evidence',
        'Academic plan: your Course 5 prerequisite tracker, sequenced against application cycles',
        'Financial plan: your Course 6 comparison, including what you could not find',
        'Network plan: your Course 7 outreach drafts and support map',
      ],
    },
    fields: [
      {
        id: 'hypotheses',
        label: 'Career hypotheses',
        help: 'Two to four roles you are currently considering, each with one sentence on why it is still on the list.',
        multiline: true,
      },
      {
        id: 'evidence',
        label: 'Evidence',
        help: 'For each hypothesis: the authoritative sources you used and the date you checked. Licensing board, certifying body, accreditor, BLS.',
        multiline: true,
      },
      {
        id: 'education',
        label: 'Education and training',
        help: 'Prerequisites, degree or certificate requirements, licensure or certification, and the single longest requirement to satisfy.',
        multiline: true,
      },
      {
        id: 'experience',
        label: 'Experience plan',
        help: 'What you will pursue, in what setting, and what question each experience is meant to answer.',
        multiline: true,
      },
      {
        id: 'competency',
        label: 'Competency goals',
        help: 'Three skills to develop, and specifically where you will practice each one.',
        multiline: true,
      },
      {
        id: 'academic',
        label: 'Academic plan',
        help: 'Courses, milestones, application cycles, and the support resources you will use before you need them.',
        multiline: true,
      },
      {
        id: 'financial',
        label: 'Financial plan',
        help: 'Estimated net cost over the whole path, what you would borrow, and the funding questions you still owe yourself.',
        multiline: true,
      },
      {
        id: 'network',
        label: 'Network plan',
        help: 'Who you will contact, which professional associations or school resources you will use, and names where you have them.',
        multiline: true,
      },
      {
        id: 'actions',
        label: 'Actions',
        help: 'Dated and specific enough that someone else could tell whether you did them. One entry per horizon.',
        multiline: true,
        repeat: 3,
        repeatLabel: 'Day',
      },
      {
        id: 'review',
        label: 'Review date',
        help: 'A single date, sixty to ninety days out. Put it in the calendar you actually look at before you write it here.',
      },
    ],
  },
  furtherLearning: [
    {
      name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook',
      use: 'Re-check outlook and wage data for each hypothesis at your review date.',
      url: 'https://www.bls.gov/ooh/',
    },
    {
      name: 'California Department of Consumer Affairs',
      use: 'Re-verify licensure requirements at your review date, since they change between cycles.',
      url: 'https://www.dca.ca.gov/about_us/entities.shtml',
    },
    {
      name: 'Federal Student Aid (U.S. Department of Education)',
      use: 'Aid amounts and deadlines change annually. Confirm before each application cycle.',
      url: 'https://studentaid.gov/',
    },
  ],
};
