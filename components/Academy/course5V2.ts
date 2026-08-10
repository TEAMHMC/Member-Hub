// Health Careers Exploration, Course 5 — v2 guided curriculum.
//
// Converted from the v1 course, which stated 50 minutes against 134 words.
// Promise, objectives and the original knowledge check are preserved.
//
// The final lesson deals with academic failure. It is written to keep a learner
// in the pathway after a bad term, because that is the moment most people
// quietly exit, and it is a moment where accurate information genuinely helps.

import type { Course } from './catalog';
import type { Block } from './blocks';

// ── Lesson 1 ─────────────────────────────────────────────────────────────

const LESSON_1: Block[] = [
  {
    kind: 'why',
    text: [
      'Generic prerequisite advice is worse than no advice, because it feels like a plan. "Take biology, chemistry, anatomy and statistics" is a reasonable guess and a poor basis for two years of coursework and tuition.',
      'Programs differ, sometimes sharply, in what they require, what grade they will accept, whether a lab is mandatory, and whether a course expires. The only way to know is to look at the specific programs you might apply to.',
    ],
  },
  {
    kind: 'case',
    title: 'Two programs, one applicant, different answers',
    scenario: true,
    text: [
      'A learner plans to apply to three nursing programs. She takes the prerequisite list from the first program\'s website and works through it over two years, earning solid grades.',
      'When she opens the second program\'s requirements, two things are different. It requires a statistics course specifically, not any quantitative course, and she took a general math course instead. And its prerequisite science courses expire after five years, so the anatomy she took early in the sequence will be out of date by the time she applies.',
      'The third program requires a minimum grade in each prerequisite rather than a minimum overall average. She has one grade below that threshold, which the first program would have accepted as part of a strong average.',
      'She did the work. What she did not do was build the tracker before starting, so she optimized for one program and discovered the constraints of the others too late to adjust cheaply.',
    ],
  },
  {
    kind: 'concept',
    title: 'What belongs in a prerequisite tracker',
    text: [
      'A tracker is a table with one row per prerequisite per program. A spreadsheet is ideal, but paper works. The point is that the requirements sit somewhere you can compare them, rather than in seven browser tabs you will close.',
      'Every row needs these seven columns. The last one is the one people skip and the one that saves you later.',
    ],
  },
  {
    kind: 'steps',
    items: [
      { label: 'Prerequisite course', text: 'The specific course, as the program names it. "Statistics" and "quantitative reasoning" may not be interchangeable, and the program decides which it means.' },
      { label: 'Minimum grade', text: 'Whether the program sets a floor per course or only an overall average. This changes which grades you can afford to be weak.' },
      { label: 'Lab requirement', text: 'Whether the science course must include a laboratory component. A lecture-only course frequently does not satisfy a requirement that assumed a lab.' },
      { label: 'Expiration rule', text: 'Whether the course must have been completed within a certain number of years. Common for science prerequisites and easy to miss until it is expensive.' },
      { label: 'Test requirement', text: 'Any entrance examination, its scoring, and how recently it must have been taken.' },
      { label: 'Application cycle', text: 'When the application opens and closes, and whether admission is once a year. A single annual cycle turns a small miss into a twelve-month delay.' },
      { label: 'Source link and date checked', text: 'Where you read it and when. Requirements change between cycles, and an undated note is a guess wearing a costume.' },
    ],
  },
  {
    kind: 'tryit',
    title: 'Build three rows',
    text: [
      'You do not need the whole tracker today. Open the requirements page for one program you might apply to and fill in three complete rows, including the source link and today\'s date.',
      'Then open a second program and add its version of the same three prerequisites. If anything differs between them, you have just learned why this course exists.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce5-c1',
      q: 'Why does a prerequisite tracker record an expiration rule and a date checked?',
      options: [
        'To satisfy application paperwork requirements',
        'Because science prerequisites can expire and published requirements change between cycles, so an undated note can quietly become wrong',
        'Because programs require applicants to submit their tracker',
        'To calculate a grade point average accurately',
      ],
      answer: 1,
      rationale:
        'Both fields exist to protect against silent staleness. A course taken too long ago may no longer count, and a requirement you verified two years ago may no longer be the requirement.',
      distractors:
        'The tracker is your working document; no program asks for it. And it is a planning tool rather than a grade calculator.',
    },
  },
];

// ── Lesson 2 ─────────────────────────────────────────────────────────────

const LESSON_2: Block[] = [
  {
    kind: 'why',
    text: [
      'Applications ask you to demonstrate competencies. Learners respond by claiming them: "I am a strong communicator and a natural leader." Reviewers discount those sentences almost entirely, because anyone can write them.',
      'What is not discounted is evidence: a specific situation, what you did, and what resulted. The difference between claiming and demonstrating is the difference between an application that works and one that does not.',
    ],
  },
  {
    kind: 'concept',
    title: 'Competencies are patterns, not labels',
    text: [
      'The Association of American Medical Colleges describes competency areas that medical schools may consider, including commitment to learning and growth, empathy and compassion, interpersonal skills, service orientation, teamwork and collaboration, scientific inquiry, quantitative reasoning and communication.',
      'These are not labels to claim. They are demonstrated through patterns of behavior and evidence, which means one instance is an anecdote and a repeated pattern across different settings is a competency.',
      'Note the scope, as Course 3 established: this particular model belongs to medical school admissions. If you are applying elsewhere, use the competency framework your field actually uses. The method of demonstrating rather than claiming transfers everywhere; the specific list does not.',
    ],
  },
  {
    kind: 'source',
    text: 'The competency areas above are published by the Association of American Medical Colleges and apply to medical school admissions.',
    ref: { name: 'AAMC, Premed Competencies for Entering Medical Students', url: 'https://students-residents.aamc.org/medical-school-admission-requirements/premed-competencies-entering-medical-students' },
  },
  {
    kind: 'example',
    title: 'Claimed versus demonstrated',
    text: [
      'Claimed: "I have excellent teamwork and collaboration skills."',
      'Demonstrated: "In a group project on local air quality, two members stopped responding three weeks before the deadline. I proposed we redistribute their sections rather than wait, wrote the section on data limitations myself, and asked the instructor whether the contribution statement should reflect what happened. The project was submitted on time and I learned to raise a staffing problem earlier than I did."',
      'The second is not better writing. It contains information: a situation, a decision, an action, an outcome, and a lesson. A reviewer can evaluate it. The first offers nothing to evaluate.',
      'Also notice that the demonstrated version admits the learner acted late. That admission strengthens it rather than weakening it, for the same reason it did in Course 4.',
    ],
  },
  {
    kind: 'concept',
    title: 'Connecting coursework to competencies',
    text: [
      'Academic work is a legitimate source of evidence, and learners routinely overlook it because it feels like it does not count.',
      'A laboratory course is scientific inquiry: forming a question, generating data, and dealing with results that did not behave. A statistics course is quantitative reasoning, particularly if you can say what a confidence interval means to a non-statistician. A course where you presented is communication. A course you struggled in and recovered from is commitment to learning and growth, which is one of the harder competencies to evidence and one of the most persuasive.',
    ],
  },
  {
    kind: 'reflect',
    title: 'Find your patterns',
    prompts: [
      'Pick one competency. List every situation across school, work, family and service where you practiced it. Three or more across different settings is a pattern.',
      'Which competency do you have the least evidence for? Where could you generate some in the next six months?',
      'Which piece of your evidence would be strongest if you described what went wrong rather than what went well?',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce5-c2',
      q: 'An applicant writes that they have "strong service orientation." What would make this persuasive?',
      options: [
        'Repeating it in several places in the application so reviewers notice',
        'A pattern of specific situations across settings, describing what they did and what resulted',
        'A letter from someone confirming the phrase',
        'Listing the total hours of service they have completed',
      ],
      answer: 1,
      rationale:
        'Competencies are demonstrated through patterns of behavior and evidence. A reviewer needs situations they can evaluate, ideally more than one, ideally in different contexts.',
      distractors:
        'Repetition adds emphasis, not information. A letter repeating the claim inherits the same weakness. And hours describe attendance rather than orientation, as Course 4 established.',
    },
  },
];

// ── Lesson 3 ─────────────────────────────────────────────────────────────

const LESSON_3: Block[] = [
  {
    kind: 'why',
    text: [
      'A bad term is the most common point at which people leave a health career path. Not because the path closed, but because a grade felt like a verdict on whether they belong.',
      'It is not a verdict. It is data about a specific set of conditions, and the useful response is to find out which condition produced it.',
    ],
  },
  {
    kind: 'concept',
    title: 'Six questions to ask after a hard term',
    text: [
      'Work through these in order, honestly. Most difficult terms have two or three causes rather than one, and they usually are not the cause the learner assumed.',
    ],
  },
  {
    kind: 'steps',
    items: [
      { label: 'Was the course load realistic?', text: 'Count the actual hours: class, study, work, commuting, caregiving. Learners routinely enroll in a load that would be demanding with no job and then work thirty hours a week. That is an arithmetic problem, not an ability problem.' },
      { label: 'Was there a content gap?', text: 'Many courses assume prior material. If the assumed prerequisite was weak or taken years ago, the difficulty may have started before the term did, and it is fixable by going back rather than by trying harder.' },
      { label: 'Was the study method effective?', text: 'Rereading notes feels productive and is one of the weakest ways to learn. Testing yourself, spacing practice, and explaining material to someone else are harder and work better. Method is often the whole story.' },
      { label: 'Were work, caregiving, health or financial factors affecting performance?', text: 'These are real causes, not excuses. A term interrupted by a family illness is not evidence about your capacity for the profession.' },
      { label: 'What support did I use?', text: 'Tutoring, office hours, study groups, accessibility services, counseling. Note honestly whether you used what existed. Many learners discover they used none of it, which is a straightforward thing to change.' },
      { label: 'What will change next term?', text: 'One or two specific changes, not a resolution to try harder. "I will take four units fewer and attend office hours weekly" is a change. "I will be more disciplined" is a wish.' },
    ],
  },
  {
    kind: 'fieldnote',
    title: 'What a recovery looks like to a reviewer',
    text: [
      'A transcript with a weak term followed by sustained improvement is not a damaged application. Reviewers read upward trends as evidence of exactly the competency that is hardest to demonstrate: commitment to learning and growth.',
      'What does damage an application is a weak term with no explanation and no change, or an explanation that assigns all cause to other people. Naming the conditions, naming what you changed, and showing the result is a strong story that a flawless transcript cannot tell.',
    ],
  },
  {
    kind: 'myths',
    items: [
      {
        myth: 'One bad grade closes the path.',
        reality:
          'Some programs weight prerequisites heavily and some look at trend and totality. Course 3\'s tracker tells you which yours does, which converts a fear into a fact you can plan around.',
      },
      {
        myth: 'If I have to work while studying, I am not competitive.',
        reality:
          'Substantial employment during school is common, understood, and worth stating plainly. What hurts is an unexplained transcript, not an explained one.',
      },
      {
        myth: 'Asking for help signals I cannot handle it.',
        reality:
          'Using available support is a professional behavior. Health professions are collaborative and supervised by design; a learner who never asks is not demonstrating strength.',
      },
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce-5-c1',
      q: 'A learner had a difficult term. According to this course, what is the right response?',
      options: [
        'Conclude the career is not a fit and change direction',
        'Analyze the causes, including load, content gaps, study method, life circumstances and support used, then change something specific',
        'Retake every course regardless of the requirement',
        'Avoid mentioning it in any application',
      ],
      answer: 1,
      rationale:
        'A low grade or difficult term should trigger analysis, not automatic defeat. The six questions identify which condition produced the result, and the useful output is one or two specific changes.',
      distractors:
        'Exiting on one term treats a data point as a verdict. Retaking everything wastes time and money on courses the program may not require you to repeat. And an unexplained weak term is worse in an application than an explained one with a demonstrated recovery.',
    },
  },
  {
    kind: 'takeaways',
    items: [
      'Generic prerequisite advice is a guess. Build a tracker against the specific programs you might apply to.',
      'Record the expiration rule and the date you checked, because both requirements and coursework go stale silently.',
      'Competencies are demonstrated through patterns of evidence across settings, never claimed as labels.',
      'Coursework is legitimate evidence, including the course you struggled in and recovered from.',
      'A hard term is data about conditions. Work the six questions before concluding anything about your capacity.',
      'An upward trend with a named change reads as growth. An unexplained dip reads as a question no one can answer.',
    ],
  },
];

// ── Course ───────────────────────────────────────────────────────────────

export const COURSE_5_V2: Course = {
  id: 'hce-5',
  num: 5,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Academic Readiness + Competency Development',
  promise: 'Build a realistic academic plan against the actual prerequisites of the programs you may apply to.',
  about: [
    'Health-professions programs evaluate academic performance, prerequisite preparation, competencies and experience differently from one another. This course builds a plan against the programs you are actually considering rather than against generic advice.',
    'It also treats academic difficulty as diagnostic information rather than as a verdict, because a bad term is where most people leave a path they could have finished.',
  ],
  objectives: [
    'Identify current academic strengths and gaps.',
    'Build a prerequisite-tracking system.',
    'Connect academic work to transferable competencies.',
    'Use feedback and reflection to improve performance.',
  ],
  minutes: 54,
  prerequisites: 'Courses 1 through 3.',
  whoFor: 'Learners currently in school, returning to school, or planning prerequisite coursework.',
  freshness:
    'Program prerequisites and expiration rules change between application cycles. Verify on the program\'s own admissions page and record the date.',
  lessons: [
    {
      id: 'hce5-l1',
      title: 'Know the actual prerequisites',
      summary: 'Build a tracker for the specific programs you may apply to, because requirements vary widely.',
      minutes: 13,
      blocks: LESSON_1,
    },
    {
      id: 'hce5-l2',
      title: 'Competencies are demonstrated through behavior',
      summary: 'Competencies are shown through patterns of evidence, not claimed as labels.',
      minutes: 13,
      blocks: LESSON_2,
    },
    {
      id: 'hce5-l3',
      title: 'Use academic difficulty as data',
      summary: 'Six questions to ask after a hard term, instead of concluding the career is closed.',
      minutes: 14,
      blocks: LESSON_3,
    },
  ],
  checks: [],
  artifact: {
    id: 'academic-plan',
    minutes: 14,
    title: 'Your prerequisite tracker and competency evidence',
    purpose:
      'The fifth section of your roadmap. It turns "I need to take some science courses" into a dated, program-specific plan, and collects the evidence you will draw on when an application asks you to demonstrate a competency. Course 8 sequences this against your timeline.',
    fields: [
      {
        id: 'tracker',
        label: 'Prerequisite tracker rows',
        help: 'For each prerequisite: course, minimum grade, lab requirement, expiration rule, test requirement, application cycle, source link and date checked. Start with three rows for one program.',
        multiline: true,
        repeat: 2,
        repeatLabel: 'Program',
      },
      {
        id: 'gaps',
        label: 'Gaps between programs',
        help: 'Anything one program requires that another does not, and how you plan to satisfy the stricter one.',
        multiline: true,
      },
      {
        id: 'evidence',
        label: 'Competency evidence',
        help: 'Pick two competencies. For each, give a specific situation, what you did, what resulted, and what you learned. Include one where something went wrong.',
        multiline: true,
        repeat: 2,
        repeatLabel: 'Competency',
      },
      {
        id: 'change',
        label: 'One specific change for next term',
        help: 'If you have had a difficult term, name the condition and the change. If you have not, name the support you will use before you need it.',
        multiline: true,
      },
    ],
  },
  furtherLearning: [
    {
      name: 'AAMC, Premed Competencies for Entering Medical Students',
      use: 'The competency areas medical schools may consider. Applies to medical school admissions; other fields use their own.',
      url: 'https://students-residents.aamc.org/medical-school-admission-requirements/premed-competencies-entering-medical-students',
    },
    {
      name: 'National Association of Colleges and Employers, Career Readiness Competencies',
      use: 'The broader competency framework introduced in Course 2, applicable across fields rather than to one profession.',
      url: 'https://www.naceweb.org/career-readiness/competencies/career-readiness-defined',
    },
  ],
};
