// Health Careers Exploration, Course 4 — v2 guided curriculum.
//
// Converted from the v1 course, which stated 50 minutes against 173 words.
// Promise, objectives and the original knowledge check are preserved.
//
// The accuracy lesson in this course is not an etiquette rule. Overstating what
// you did in a clinical setting misrepresents your training to someone deciding
// whether to trust you with a patient, and it is the fastest way for a learner
// to lose a placement and a reference at the same time.

import type { Course } from './catalog';
import type { Block } from './blocks';

// ── Lesson 1 ─────────────────────────────────────────────────────────────

const LESSON_1: Block[] = [
  {
    kind: 'why',
    text: [
      'Learners are told to "get experience" as if experience were one substance you accumulate. It is not. Six different things go by that name, they teach different lessons, they carry different obligations, and they are treated differently by admissions committees and employers.',
      'Choosing the wrong type is how someone spends a summer being present somewhere without learning what they needed to learn.',
    ],
  },
  {
    kind: 'concept',
    title: 'Six types, and what each is actually for',
    text: [
      'Read these for the differences rather than the definitions. The differences are what determine which one answers your question.',
    ],
  },
  {
    kind: 'steps',
    items: [
      {
        label: 'Shadowing',
        text: 'Observing a professional to understand workflow and role. It is the fastest way to find out what a job is really like day to day, and it is deliberately limited: you watch, you do not act. Scope is tightly bound by privacy rules and site policy. Best question it answers: do I want to be in this room every day?',
      },
      {
        label: 'Volunteering and service',
        text: 'Contributing to an organization\'s mission within an assigned role. You do real work and you are accountable for it. Best question it answers: can I be useful in this setting, and do I like the population and pace?',
      },
      {
        label: 'Research',
        text: 'Participating in inquiry, whether laboratory, data, evaluation or community-engaged, under appropriate oversight. Human-subjects research carries formal ethical obligations and training requirements. Best question it answers: do I like generating knowledge rather than applying it?',
      },
      {
        label: 'Internship or fellowship',
        text: 'A structured placement with defined goals, supervision and work. Classification and compensation rules depend on context, and an unpaid placement that functions as a job may be improperly classified. Best question it answers: can I do a version of this work with support before committing to the training?',
      },
      {
        label: 'Employment',
        text: 'Paid work governed by employment law and actual job requirements. Frequently undervalued by learners, who assume paid work "does not count." Roles such as medical assistant, scribe, home health aide, EMT and community health worker teach more about care delivery than most observation does. Best question it answers: what is this work like when I am responsible for the outcome?',
      },
      {
        label: 'Service learning',
        text: 'Structured learning tied to a real community or organizational need, with explicit educational objectives and required reflection. The reflection is the point, not an add-on. Best question it answers: how does what I am studying connect to what people actually need?',
      },
    ],
  },
  {
    kind: 'case',
    title: 'Choosing by question rather than by availability',
    scenario: true,
    text: [
      'Two learners each have one free summer and want to test whether nursing is right for them.',
      'The first takes an unpaid hospital volunteer role restocking supply rooms because it is the opportunity that appeared. She spends the summer in a hospital, which sounds ideal, and finishes knowing almost nothing about nursing, because she was never near patient care.',
      'The second takes a paid job as a caregiver at an assisted living facility. Less prestigious on paper. She spends the summer doing personal care, learning what it feels like to be responsible for someone\'s comfort and dignity, and discovering that she is steady when someone is frightened.',
      'The second learner did not get the better opportunity. She asked what she wanted to find out, and then chose an experience that could answer it. The first chose what was available and hoped proximity would teach her.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'On paid work',
    text: [
      'There is a persistent belief that paid work counts less than volunteering because it is not altruistic. Admissions committees and employers do not generally share this belief, and for many learners it is actively harmful: it pushes people who need income toward unpaid roles they cannot sustain, and away from paid roles that would teach them more.',
      'If you must work, look for work that is adjacent to the field. It counts, it pays, and it is often closer to the actual job than observation is.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce4-c1',
      q: 'A learner wants to find out whether they can tolerate the emotional weight of direct patient care before committing to a nursing program. Which experience best answers that question?',
      options: [
        'Shadowing a nurse for two days, since it shows the role directly',
        'A sustained role with regular patient contact, such as caregiving, hospice volunteering or work as a nursing assistant',
        'A research assistantship in a nursing school laboratory',
        'Any experience, since the type does not matter as much as the hours',
      ],
      answer: 1,
      rationale:
        'Emotional weight accumulates. Two days of observation shows you the role but not what it feels like on the fortieth day, which is the actual question. A sustained role with real responsibility is the only kind of experience that can answer it.',
      distractors:
        'Shadowing is excellent for understanding workflow and is the wrong instrument for measuring endurance. Laboratory research answers a different question entirely. And type matters more than hours, which is the subject of the next lesson.',
    },
  },
];

// ── Lesson 2 ─────────────────────────────────────────────────────────────

const LESSON_2: Block[] = [
  {
    kind: 'why',
    text: [
      '"Completed 100 hours" tells a reviewer how long you were present. It says nothing about what you did, what you learned, or whether you would be any good at the work. Learners write it anyway, because counting is easy and describing is hard.',
      'The gap between those two is where most applications lose their strength, and it is entirely fixable.',
    ],
  },
  {
    kind: 'concept',
    title: 'What a strong reflection contains',
    text: [
      'A reflection worth reading answers six things. You do not need a paragraph for each, but you do need all six present.',
    ],
  },
  {
    kind: 'list',
    items: [
      'What you did, concretely, in language someone outside the setting would understand',
      'What problem the work addressed, meaning why the task existed at all',
      'What skill you practiced, named specifically rather than as a general quality',
      'What you observed about the system or the profession, including what did not work well',
      'How the experience changed your understanding, including anything you were wrong about',
      'What you would do next, or differently',
    ],
  },
  {
    kind: 'example',
    title: 'The same 100 hours, twice',
    text: [
      'Weak: "Completed 100 hours volunteering at a community clinic. Gained valuable experience and learned a lot about health care. Confirmed my passion for helping others."',
      'Strong: "Over four months at a community clinic I checked in patients and helped them complete intake forms. About a third could not complete the form alone, usually because of reading level or because the questions assumed a stable address. I started reading the questions aloud and rephrasing them, which cut the time to complete an intake and reduced the number of forms that came back missing insurance information. I practiced plain-language communication and learned that a form is part of the care, not paperwork around it. I had assumed people who left forms blank were being uncooperative, and I was wrong about that. Next I want to see how the information is used downstream, because I suspect some of what we ask is never read."',
      'Both describe the same hours. The second is not longer because the learner did more; it is longer because the learner noticed more. Reviewers can tell the difference immediately, and so can you when you read them side by side.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'Write it down within a week',
    text: [
      'Reflection written months later is reconstructed rather than remembered, and it shows. Keep a running note during any placement. Two or three sentences after a shift is enough: what happened, what surprised you, what you did not understand.',
      'This is also the raw material for Course 7, where you will need concrete examples for informational interviews and applications, and for Course 8, where the roadmap draws on it.',
    ],
  },
  {
    kind: 'tryit',
    title: 'Rewrite one of your own',
    text: [
      'Take any experience you already have, including one you think does not count. Write the weak version in a single sentence, then rewrite it against the six elements above.',
      'If you get stuck on "what problem the work addressed," that is usually the most valuable one to push on. Most tasks exist because something was going wrong.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce4-c2',
      q: 'Which reflection element do learners most often omit, and why does it matter?',
      options: [
        'The number of hours, which reviewers need in order to compare candidates',
        'What they were wrong about, which is the clearest evidence that the experience changed their understanding',
        'The name of the supervisor, which establishes credibility',
        'The organization\'s mission statement, which shows alignment',
      ],
      answer: 1,
      rationale:
        'Describing what you got wrong is direct evidence of learning, and it is the hardest thing to fake. Reviewers read a great many reflections that describe confirmation and very few that describe a change of mind.',
      distractors:
        'Hours are the least informative element, which is the point of the lesson. Supervisor names belong in a reference list, and repeating an organization\'s mission tells a reader about the organization rather than about you.',
    },
  },
];

// ── Lesson 3 ─────────────────────────────────────────────────────────────

const LESSON_3: Block[] = [
  {
    kind: 'why',
    text: [
      'This is the shortest lesson in the pathway and the one with the most direct consequences. Describing your role accurately is not modesty. In a clinical setting, an inflated description tells someone that you have training you do not have, and they may act on it.',
    ],
  },
  {
    kind: 'concept',
    title: 'Observed, assisted, performed',
    text: [
      'These three words describe three genuinely different things, and the distance between them is the distance between watching and being responsible.',
      'Observed means you were present and paying attention. Assisted means you contributed under direct supervision, within a scope someone authorized. Performed means you did it, and you are accountable for how it went.',
      'A learner who writes "performed wound care" when they watched wound care has not exaggerated slightly. They have claimed a clinical scope they do not hold. If a supervisor reads that and hands them a task on that basis, the person who is harmed is the patient.',
    ],
  },
  {
    kind: 'steps',
    title: 'Accurate rewrites',
    items: [
      { label: 'Instead of: performed wound care', text: 'Write: observed wound-care workflow, including how the nurse explained each step to the patient before doing it.' },
      { label: 'Instead of: managed a case', text: 'Write: supported resource navigation for clients under the supervision of a case manager.' },
      { label: 'Instead of: counseled patients', text: 'Write: provided scripted information about clinic services and referred clinical questions to staff.' },
      { label: 'Instead of: ran the intake process', text: 'Write: completed intake paperwork with patients and flagged incomplete records for the front desk lead.' },
      { label: 'Instead of: conducted research', text: 'Write: entered and cleaned survey data for a study led by the principal investigator named below.' },
    ],
  },
  {
    kind: 'fieldnote',
    title: 'The accurate version is usually more impressive',
    text: [
      'Learners fear that precise language sounds smaller. In practice it reads as someone who understands scope, which is exactly the quality a supervisor is looking for when deciding what to trust you with.',
      '"Observed wound-care workflow, including how the nurse explained each step before doing it" tells a reader you were paying attention to something that matters. "Performed wound care" tells a reader either that you were unsupervised or that you are overstating. Neither of those helps you.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce-4-c1',
      q: 'A student observed a nurse changing a dressing. How should this appear on their record?',
      options: [
        'Performed wound care',
        'Assisted with wound care',
        'Observed wound-care workflow',
        'Provided nursing care',
      ],
      answer: 2,
      rationale:
        'The student watched. Observed is the accurate word, and accuracy here protects the patient, the supervising professional, and the student\'s own credibility.',
      distractors:
        'Performed and provided both claim that the student did the work. Assisted claims a supervised contribution that did not happen. Each would tell a reader the student holds a scope they do not.',
    },
  },
  {
    kind: 'takeaways',
    items: [
      'Six kinds of experience teach different things. Choose the one that answers the question you actually have.',
      'Paid work adjacent to the field usually teaches more about care delivery than observation, and it counts.',
      'Hours describe attendance. Reflection describes learning, and it needs all six elements to be worth reading.',
      'The most persuasive thing in a reflection is what you were wrong about.',
      'Write reflections within a week, while you still remember what surprised you.',
      'Observed, assisted and performed are three different claims. Use the true one, every time.',
    ],
  },
];

// ── Course ───────────────────────────────────────────────────────────────

export const COURSE_4_V2: Course = {
  id: 'hce-4',
  num: 4,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Building Experience That Actually Teaches You Something',
  promise: 'Choose and describe experiences by what you learned, not by how many hours you logged.',
  about: [
    'Experience should help you understand the work, build transferable skills, test your assumptions about a career, and show growth. This course separates observation from applied service, and teaches you to describe what you learned rather than collect hours.',
    'It also draws the line between observed, assisted and performed, which is the difference between an accurate record and a claim of clinical scope you do not hold.',
  ],
  objectives: [
    'Identify meaningful ways to explore a health career.',
    'Distinguish volunteering, shadowing, research, internships, employment and service learning.',
    'Choose experiences aligned to learning goals.',
    'Document skills and reflection ethically.',
  ],
  minutes: 52,
  prerequisites: 'Courses 1 through 3.',
  whoFor:
    'Learners planning to volunteer, shadow, intern or do research, and anyone who has logged hours without knowing how to describe them.',
  lessons: [
    {
      id: 'hce4-l1',
      title: 'Experience types',
      summary: 'Shadowing, volunteering, research, internships, employment and service learning are not interchangeable.',
      minutes: 14,
      blocks: LESSON_1,
    },
    {
      id: 'hce4-l2',
      title: 'Hours are not the learning outcome',
      summary: 'What a strong reflection describes, and why a total hour count says almost nothing.',
      minutes: 13,
      blocks: LESSON_2,
    },
    {
      id: 'hce4-l3',
      title: 'Respect the role',
      summary: 'Observed is different from assisted, and assisted is different from performed.',
      minutes: 11,
      blocks: LESSON_3,
    },
  ],
  checks: [],
  artifact: {
    id: 'experience-plan',
    minutes: 14,
    title: 'Your experience plan and a rewritten reflection',
    purpose:
      'The fourth section of your roadmap. It states what you are trying to find out, which kind of experience can answer it, and demonstrates that you can describe your own work accurately. Course 8 uses this to sequence what you pursue and when.',
    fields: [
      {
        id: 'question',
        label: 'What you are trying to find out',
        help: 'A real question about one career on your shortlist, not a general wish for experience. "Can I handle sustained contact with people in crisis" is a question. "Get more experience" is not.',
        multiline: true,
      },
      {
        id: 'match',
        label: 'Experience type and why it fits',
        help: 'Name the type from the six, the setting you would look in, and why that type can answer your question when the others cannot.',
        multiline: true,
        repeat: 2,
        repeatLabel: 'Option',
      },
      {
        id: 'reflection',
        label: 'A reflection, rewritten',
        help: 'Take any experience you already have and write it against the six elements: what you did, what problem it addressed, what skill you practiced, what you observed about the system, how your understanding changed, and what you would do next.',
        multiline: true,
      },
      {
        id: 'scope',
        label: 'Your scope check',
        help: 'Read your reflection again. Every verb you used: was it observed, assisted or performed, and is the word you chose the true one?',
        multiline: true,
      },
    ],
  },
  furtherLearning: [
    {
      name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook',
      use: 'Work environment sections describe what a setting is actually like, which helps you choose where to seek experience.',
      url: 'https://www.bls.gov/ooh/',
    },
    {
      name: 'U.S. Department of Labor, Wage and Hour Division: internship fact sheet',
      use: 'How unpaid internships at for-profit employers are evaluated, if you are offered a placement that functions like a job.',
      url: 'https://www.dol.gov/agencies/whd/fact-sheets/71-flsa-internships',
    },
  ],
};
