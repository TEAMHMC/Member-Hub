// Health Careers Exploration, Course 6 — v2 guided curriculum.
//
// Converted from the v1 course, which stated 45 minutes against 117 words.
// Promise, objectives and the original knowledge check are preserved, and the
// v1 cost-comparison activity is carried forward as the artifact.
//
// This course teaches how to find and compare cost information. It does not
// advise anyone on what to borrow. Amounts, limits and program rules change,
// so every figure points at Federal Student Aid or the school rather than being
// stated here, where it would go stale and be trusted anyway.

import type { Course } from './catalog';
import type { Block } from './blocks';

// ── Lesson 1 ─────────────────────────────────────────────────────────────

const LESSON_1: Block[] = [
  {
    kind: 'why',
    text: [
      'Tuition is the number programs advertise, and it is rarely the number that decides whether you can finish. People leave programs they were succeeding in because of transportation, childcare, or the income they gave up, none of which appeared in the comparison they made when choosing.',
      'Estimating the real cost is not pessimism. It is what makes it possible to choose a path you can actually complete.',
    ],
  },
  {
    kind: 'concept',
    title: 'What total cost of attendance includes',
    text: [
      'Schools publish a cost of attendance figure that goes well beyond tuition, and it is the number to compare. Build your own version anyway, because yours accounts for your life and theirs uses averages.',
    ],
  },
  {
    kind: 'list',
    items: [
      'Tuition and fees, including fees that are charged per term or per credit rather than annually',
      'Books and supplies, which in clinical programs can include equipment, uniforms and instruments',
      'Housing and food, whether you are paying rent or contributing at home',
      'Transportation, including to clinical placements that may be further away than campus and may not be reachable by transit',
      'Health insurance, which some programs require you to carry',
      'Licensing and certification examination fees, which arrive at the end when money is usually tightest',
      'Application fees, which multiply across programs and cycles',
      'Relocation, if the program is not where you live',
      'Childcare or other caregiving costs, particularly during clinical rotations with fixed hours',
      'Reduced work hours, which is usually the largest single item and the one most often left out',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'The item people forget',
    text: [
      'Reduced income is a cost. If a program\'s clinical schedule means dropping from full-time to part-time work for eighteen months, the difference is part of what that program costs you, and it can be larger than tuition.',
      'This is not an argument against the program. It is an argument for knowing the number before you are inside it, because a learner who plans for it can arrange for it, and a learner surprised by it withdraws.',
    ],
  },
  {
    kind: 'example',
    title: 'Why the cheaper program was more expensive',
    text: [
      'Two programs, both two years. Program A has noticeably lower tuition and is in a city three hundred miles away. Program B costs more and is twenty minutes from where the learner already lives with family.',
      'Program A adds rent, a full food budget, relocation, and travel home. It also places students at clinical sites without transit access, so a car becomes necessary. Program B adds none of those, and the learner can keep a part-time job because the campus is close.',
      'On tuition, A wins clearly. On what leaves the learner\'s pocket over two years, B is substantially cheaper, and B is also the one she can complete without moving away from the childcare her family provides.',
      'This is the entire lesson. The advertised number and the real number are different numbers, and only one of them determines whether you finish.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce-6-c1',
      q: 'Program A has lower tuition than Program B but requires relocating to a high-cost city. What should the learner compare?',
      options: [
        'Tuition alone, since it is the largest line item',
        'Estimated net cost after gift aid, plus living costs, borrowing, duration and additional expenses',
        'Projected starting salary only',
        'Whichever program has the better reputation',
      ],
      answer: 1,
      rationale:
        'A lower-tuition program can cost more overall. Compare net cost and total cost of attendance, and do not treat projected salary as guaranteed.',
      distractors:
        'Tuition is frequently not the largest line item once housing and lost income are counted. Projected salary is an estimate about the future, not a cost. Reputation may matter to you, and it is not a financial comparison.',
    },
  },
];

// ── Lesson 2 ─────────────────────────────────────────────────────────────

const LESSON_2: Block[] = [
  {
    kind: 'why',
    text: [
      'Money for education comes in kinds that behave very differently, and the words are used loosely everywhere except in the places that actually administer them. Knowing which kind you are being offered is the difference between an offer that helps and an obligation you did not understand.',
    ],
  },
  {
    kind: 'vocab',
    items: [
      {
        term: 'Scholarship',
        plain:
          'Money awarded on criteria such as merit, field of study, background or service, which generally does not need to be repaid when you meet the terms. Terms can include maintaining a grade level or enrollment status, so read them.',
      },
      {
        term: 'Grant',
        plain:
          'Money usually awarded based on financial need, which generally does not need to be repaid when program terms are met. Grants can be reduced or require repayment if you withdraw, which is worth knowing before you withdraw.',
      },
      {
        term: 'Federal Work-Study',
        plain:
          'Part-time employment for eligible students at participating schools. You earn it by working, so it is income rather than a discount, and it depends on your school participating and on jobs being available.',
      },
      {
        term: 'Loan',
        plain:
          'Money that must be repaid under its terms, with interest. Federal and private loans differ substantially in interest, repayment options and protections, and those differences matter more than the amount.',
      },
      {
        term: 'Gift aid',
        plain:
          'The umbrella term for money you do not repay: scholarships and grants. This is the figure you subtract from cost of attendance to get net cost, which is the number that lets you compare offers.',
      },
      {
        term: 'Service-obligation programs',
        plain:
          'Scholarships or loan repayment offered in exchange for working in a designated setting or shortage area for a defined period. Real value, and a real commitment; the obligation is enforceable.',
      },
    ],
  },
  {
    kind: 'concept',
    title: 'Where the authoritative information lives',
    text: [
      'Federal Student Aid, at StudentAid.gov, is the controlling source for federal aid terminology, eligibility and process. Your school\'s financial aid office is the authority on what that specific school offers and requires.',
      'Specific amounts, deadlines, interest rates and program rules change, sometimes annually. This is why no figures are printed in this course: a number here would be trusted and would eventually be wrong. Check at the time you apply.',
      'Social media, forums and paid "aid consultants" are not authorities. Some are actively harmful, particularly anyone charging a fee to complete a free federal application on your behalf.',
    ],
  },
  {
    kind: 'source',
    text: 'Federal Student Aid is the U.S. Department of Education office that administers federal student aid and publishes the current rules, amounts and deadlines.',
    ref: { name: 'Federal Student Aid, StudentAid.gov', url: 'https://studentaid.gov/' },
  },
  {
    kind: 'myths',
    items: [
      {
        myth: 'My family earns too much for me to qualify for anything.',
        reality:
          'Eligibility depends on more than income, and some aid is not need-based at all. Completing the federal application is free, and not completing it guarantees the answer is nothing.',
      },
      {
        myth: 'Scholarships are only for people with perfect grades.',
        reality:
          'Many are tied to field of study, geography, background, language, first-generation status, or intent to serve in shortage areas. Health workforce programs in particular are often about where you will work, not your transcript.',
      },
      {
        myth: 'All loans are basically the same.',
        reality:
          'Federal and private loans differ in interest, repayment flexibility, forbearance and forgiveness eligibility. Two loans of identical size can be very different obligations.',
      },
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce6-c2',
      q: 'A learner is told by a paid consultant that they can secure aid for a fee. What is the appropriate response?',
      options: [
        'Pay, since aid consultants have access to opportunities schools do not advertise',
        'Decline, and use Federal Student Aid and the school\'s financial aid office, which provide this information at no cost',
        'Pay only if the fee is refundable',
        'Ask the consultant to apply on their behalf to save time',
      ],
      answer: 1,
      rationale:
        'Federal aid information and the federal application are free, and school financial aid offices assist at no charge. A fee to access free processes is a warning sign rather than an advantage.',
      distractors:
        'There is no hidden pool of aid available only through paid intermediaries. A refundable fee does not make the service necessary, and letting a third party file on your behalf hands over personal financial data with no added benefit.',
    },
  },
];

// ── Lesson 3 ─────────────────────────────────────────────────────────────

const LESSON_3: Block[] = [
  {
    kind: 'why',
    text: [
      'Offers arrive formatted to look favorable. Comparing them as presented is comparing marketing. Recalculating them onto one basis takes about twenty minutes and is the highest-value twenty minutes in this course.',
    ],
  },
  {
    kind: 'steps',
    title: 'Put every offer on the same basis',
    items: [
      { label: 'Start from total cost of attendance', text: 'Use the school\'s published figure, then adjust it with the items from Lesson 1 that apply to you and not to the average student.' },
      { label: 'Subtract gift aid only', text: 'Scholarships and grants. Do not subtract loans or work-study; a loan is not a discount and work-study is income you have to earn.' },
      { label: 'That difference is net cost', text: 'This is the comparable number. Programs will not present it for you, and it is frequently not the one with the lowest tuition.' },
      { label: 'Multiply by program duration', text: 'A one-year program at a higher annual net cost can be cheaper than a three-year program at a lower one. Compare the whole path, not the year.' },
      { label: 'Add end-of-path costs', text: 'Licensing examinations, application fees, equipment, background checks. These are predictable and rarely appear in a school\'s figure.' },
      { label: 'Note what you would borrow', text: 'The amount, and whether it is federal or private. Two identical amounts on different terms are different obligations.' },
      { label: 'Write down one nonfinancial factor', text: 'Proximity to family, clinical placement quality, schedule compatibility with work. Cost is not the only variable, and naming the others keeps the comparison honest.' },
    ],
  },
  {
    kind: 'fieldnote',
    title: 'On projected salary',
    text: [
      'Programs frequently present an expected salary alongside their cost, implying a straightforward return. Treat that figure as an estimate about a labor market you will enter years from now, in a location you may not have chosen yet, in a role you may not get immediately.',
      'The Occupational Outlook Handbook gives median wages and outlook by occupation, which is a better source than a program\'s own projection. Even so, it describes a distribution, and no figure guarantees your position in it.',
    ],
  },
  {
    kind: 'tryit',
    title: 'Run the comparison once',
    text: [
      'Pick two real programs that could plausibly serve one career on your shortlist. Find each one\'s published cost of attendance and work the seven steps.',
      'If you cannot find a cost of attendance figure for a program, that is itself a finding. Note it, and note where you looked.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce6-c3',
      q: 'Two offers list the same total aid amount. Offer A is mostly grants; Offer B is mostly loans. How do they compare?',
      options: [
        'They are equivalent, since the totals match',
        'Offer A has a lower net cost, because only gift aid reduces what you pay; loans are money you repay with interest',
        'Offer B is better because loans are larger and more flexible',
        'It cannot be determined without knowing each school\'s reputation',
      ],
      answer: 1,
      rationale:
        'Net cost subtracts gift aid only. A loan shifts when you pay rather than whether you pay, and adds interest, so an identical headline total can represent a very different obligation.',
      distractors:
        'Matching totals is exactly the presentation this lesson exists to see through. Loan size is not an advantage, and reputation is a separate question from cost.',
    },
  },
  {
    kind: 'takeaways',
    items: [
      'Compare total cost of attendance, not tuition. The advertised number and the real number are different numbers.',
      'Reduced work hours is a cost, and it is often the largest one.',
      'Scholarships and grants generally are not repaid; work-study is earned income; loans are repaid with interest.',
      'Net cost is cost of attendance minus gift aid only. It is the only comparable figure across offers.',
      'Compare the whole path, not a single year, and add licensing and examination costs at the end.',
      'Federal Student Aid and your school\'s aid office are the authorities. Anyone charging a fee for access to free processes is a warning sign.',
      'Projected salary is an estimate, never a guarantee.',
    ],
  },
];

// ── Course ───────────────────────────────────────────────────────────────

export const COURSE_6_V2: Course = {
  id: 'hce-6',
  num: 6,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Paying for the Path: Financial Aid + Cost Planning',
  promise: 'Estimate the real cost of a program and compare offers on net cost rather than headline tuition.',
  about: [
    'An education decision should account for the full cost of attendance, the financing available to you, the income you give up, and your actual circumstances.',
    'Federal Student Aid is the controlling source for federal aid terminology and process. Amounts, deadlines and program rules change, so this course teaches you where to check rather than printing figures that would go stale.',
  ],
  objectives: [
    'Distinguish scholarships, grants, work-study and loans.',
    'Estimate total cost rather than tuition alone.',
    'Identify official sources for federal student aid.',
    'Build a basic education-cost comparison.',
  ],
  minutes: 46,
  prerequisites: 'None, though Course 3 makes the education requirements clearer first.',
  whoFor: 'Anyone weighing the cost of a program, including learners who assume a path is out of reach financially.',
  freshness:
    'Aid amounts, interest rates, deadlines and eligibility rules change, often annually. Verify at StudentAid.gov and with the school\'s financial aid office at the time you apply.',
  lessons: [
    {
      id: 'hce6-l1',
      title: 'Price is more than tuition',
      summary: 'Total cost of attendance includes housing, transport, exams, childcare and reduced work hours.',
      minutes: 11,
      blocks: LESSON_1,
    },
    {
      id: 'hce6-l2',
      title: 'Understand funding types',
      summary: 'Scholarships, grants, work-study and loans, and where the official information actually lives.',
      minutes: 12,
      blocks: LESSON_2,
    },
    {
      id: 'hce6-l3',
      title: 'Compare offers, not headlines',
      summary: 'Calculate net cost after gift aid, and never treat a projected salary as guaranteed.',
      minutes: 11,
      blocks: LESSON_3,
    },
  ],
  checks: [],
  artifact: {
    id: 'cost-comparison',
    minutes: 12,
    title: 'Your program cost comparison',
    purpose:
      'The sixth section of your roadmap. It puts two real options on one basis so the comparison is between numbers that mean the same thing. Course 8 uses this for the financial plan section.',
    reference: {
      title: 'Where to get each figure',
      items: [
        'Cost of attendance: the school\'s financial aid page, which is required to publish it',
        'Federal aid eligibility, terms and deadlines: StudentAid.gov',
        'What this school specifically offers: that school\'s financial aid office',
        'Median wages and outlook by occupation: BLS Occupational Outlook Handbook',
        'Service-obligation scholarships and loan repayment: Health Resources and Services Administration',
      ],
    },
    fields: [
      {
        id: 'programs',
        label: 'Program',
        help: 'Name the program, then give total annual cost of attendance (adjusted for your circumstances), gift aid, resulting net cost, duration, and what you would borrow.',
        multiline: true,
        repeat: 2,
        repeatLabel: 'Program',
      },
      {
        id: 'wholepath',
        label: 'Whole-path cost',
        help: 'Net cost multiplied by duration, plus end-of-path costs such as licensing examinations, equipment and application fees.',
        multiline: true,
      },
      {
        id: 'nonfinancial',
        label: 'The nonfinancial factor you weighed',
        help: 'Proximity to family, placement quality, schedule compatibility with work. Name it and say how much it moved your decision.',
        multiline: true,
      },
      {
        id: 'unknowns',
        label: 'What you could not find',
        help: 'Any figure you could not locate, and where you looked. A known gap is more useful than an assumed number.',
        multiline: true,
      },
    ],
  },
  furtherLearning: [
    {
      name: 'Federal Student Aid (U.S. Department of Education)',
      use: 'The controlling source for federal aid: eligibility, application, loan terms, and current deadlines.',
      url: 'https://studentaid.gov/',
    },
    {
      name: 'Health Resources and Services Administration',
      use: 'Federal scholarship and loan repayment programs tied to service in shortage areas.',
      url: 'https://www.hrsa.gov/',
    },
    {
      name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook',
      use: 'Median wages and employment outlook by occupation, a better source than a program\'s own salary projection.',
      url: 'https://www.bls.gov/ooh/',
    },
  ],
};
