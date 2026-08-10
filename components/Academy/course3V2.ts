// Health Careers Exploration, Course 3 — v2 guided curriculum.
//
// Converted from the v1 course, which stated 60 minutes against 190 words.
// Promise, objectives, prerequisites and both original knowledge checks are
// preserved; the instruction around them is what was missing.
//
// This course carries more risk of harm than any other in the pathway. A
// learner who believes a certificate authorizes practice, or who trusts a
// program's own description of licensure, can lose years and money. Every
// verification step here points at the authority that actually decides, not at
// whoever is selling the program.

import type { Course } from './catalog';
import type { Block } from './blocks';

// ── Lesson 1 ─────────────────────────────────────────────────────────────

const LESSON_1: Block[] = [
  {
    kind: 'why',
    text: [
      'These five words get used interchangeably in conversation, in advertising, and sometimes by people who should know better. They are not interchangeable. They come from different institutions, they are granted under different rules, and only one of them decides whether you may legally do the work.',
      'Confusing them is how people end up with a credential that does not do what they were told it would do.',
    ],
  },
  {
    kind: 'case',
    title: 'A credential that did not do what it promised',
    scenario: true,
    text: [
      'A learner enrolls in a program advertised as leading to a "certified medical assistant career." It costs several thousand dollars and takes eight months. She completes it and receives a certificate with her name on it.',
      'When she applies for jobs, employers ask which certification she holds. She does not have one. What she has is a certificate of completion: proof that she finished that specific program. The certifying organizations that employers recognize each require passing their own examination, and eligibility to sit for those examinations depends on the program being accredited. Hers was not.',
      'Nothing in this story required anyone to lie to her. "Certificate," "certification," and "certified career" sat next to each other in the marketing, and she read them as one thing. The distinction below is what would have protected her, and the verification chain in Lesson 2 is what she could have run in an afternoon before enrolling.',
    ],
  },
  {
    kind: 'vocab',
    items: [
      {
        term: 'Degree',
        plain:
          'An academic credential awarded by an educational institution: associate, bachelor\'s, master\'s, professional or doctoral. It says you completed a course of study. It does not, by itself, authorize you to practice anything.',
      },
      {
        term: 'Certificate of completion',
        plain:
          'Documentation that you finished a particular program. Its meaning depends entirely on who ran the program and whether anyone recognizes it. This is the credential most often mistaken for something stronger.',
      },
      {
        term: 'Professional certification',
        plain:
          'A credential granted by an authorized certifying organization after you meet its specified requirements, which usually include an examination and often an accredited program. It is issued by a private body, not the government, and employers frequently require it.',
      },
      {
        term: 'Licensure',
        plain:
          'Legal authorization from a governmental licensing authority to practice a regulated profession, within that jurisdiction and within a defined scope. This is the one that determines legality. Practicing without it, where it is required, is a legal violation.',
      },
      {
        term: 'Accreditation',
        plain:
          'External review of an institution or program against established standards by a recognized accrediting body. It usually operates upstream of everything else: an unaccredited program can leave you ineligible to sit for certification or apply for licensure at all.',
      },
    ],
  },
  {
    kind: 'concept',
    title: 'The order they act in',
    text: [
      'These five are not a flat list. They form a chain, and the chain has a direction.',
      'Accreditation decides whether a program counts. The program grants a degree or certificate. Certification bodies decide whether your education makes you eligible to test. The state licensing authority decides whether you may practice. An employer sits at the end and can require more than the state does, but never less.',
      'The practical consequence is that a failure early in the chain cannot be fixed later. If the program was not accredited, no amount of good performance in it makes you eligible for the certification that required accreditation. This is why the verification order in the next lesson starts where it does.',
    ],
  },
  {
    kind: 'myths',
    items: [
      {
        myth: 'Certified and licensed mean roughly the same thing.',
        reality:
          'Certification is granted by a private organization and is often about demonstrated competence. Licensure is granted by government and is about legal permission. Some roles need one, some need both, some need neither.',
      },
      {
        myth: 'If a school is allowed to operate, it is accredited.',
        reality:
          'Authorization to operate as a business and programmatic accreditation are different approvals from different bodies. A program can be entirely legal to run and still leave you ineligible for the credential you wanted.',
      },
      {
        myth: 'A license from one state works everywhere.',
        reality:
          'Licensure is jurisdictional. Moving states can require an application, a fee, additional coursework, or an examination. Some professions have interstate compacts that ease this, and many do not.',
      },
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce-3-c1',
      q: 'What is the difference between a certificate of completion and a professional certification?',
      options: [
        'They are the same thing',
        'A certificate of completion documents that a learner finished a program; a professional certification is granted by an authorized certifying organization after meeting specified requirements',
        'A certification is always shorter',
        'A certificate of completion always allows practice',
      ],
      answer: 1,
      rationale:
        'Not every certificate of completion is a professional certification. This distinction matters because only some credentials carry authority to practice, and only some are recognized by employers or count toward licensure.',
      distractors:
        'Length has nothing to do with it; some certifications require years of supervised work. And a certificate of completion authorizes nothing by itself, which is precisely the confusion this lesson exists to prevent.',
    },
  },
];

// ── Lesson 2 ─────────────────────────────────────────────────────────────

const LESSON_2: Block[] = [
  {
    kind: 'why',
    text: [
      'Once you know the five terms, the question becomes what to check and in what order. Order matters because each step can eliminate a path, and running them in the wrong sequence means researching requirements for a route you were never eligible for.',
    ],
  },
  {
    kind: 'concept',
    title: 'Seven things to research, in this order',
    text: [
      'Do this for each career on your shortlist from Course 2. Expect it to take twenty to forty minutes per career the first time and much less after that, because you will know where the authorities live.',
    ],
  },
  {
    kind: 'steps',
    items: [
      {
        label: 'Typical entry education',
        text: 'Start at the BLS Occupational Outlook Handbook. It tells you the education most people entering this occupation have. This is a description of reality, not a rule, which is why it is step one rather than the final word.',
      },
      {
        label: 'Required degree or program accreditation',
        text: 'Find out whether the profession requires that your program be accredited, and by which accreditor. If the answer is yes, this becomes the first filter on every program you consider, ahead of cost or convenience.',
      },
      {
        label: 'State licensure or registration',
        text: 'Go to the licensing authority for your state and the profession. In California that is usually a board under the Department of Consumer Affairs. Read what they require, not what a program says they require.',
      },
      {
        label: 'National certification',
        text: 'Identify which certifying organization employers in this field actually recognize, and read that body\'s eligibility requirements directly. Note whether eligibility depends on accreditation, since that links back to step two.',
      },
      {
        label: 'Supervised clinical or practical hours',
        text: 'Many credentials require a set number of supervised hours, sometimes thousands. Find out how many, who may supervise them, and whether the hours must be obtained in a specific setting. This is frequently the longest and least visible part of a path.',
      },
      {
        label: 'Continuing education and renewal',
        text: 'Find the renewal cycle and the continuing education requirement. A credential that has to be renewed every two years with paid coursework is a recurring cost and time commitment, and it belongs in your plan now rather than as a surprise later.',
      },
      {
        label: 'Program admissions prerequisites',
        text: 'Only now look at what specific programs require to admit you: prerequisite courses, minimum grades, entrance exams, observation hours, background checks. These vary between programs in ways the earlier steps do not.',
      },
    ],
  },
  {
    kind: 'example',
    title: 'Running the chain on one California career',
    text: [
      'Take respiratory care practitioner in California. Step one, the Occupational Outlook Handbook, gives you the occupation description and typical entry education at the associate level.',
      'Step two: the profession requires graduation from an accredited respiratory care program, so accreditation is not optional and becomes the first filter on any school you look at.',
      'Step three: California regulates this profession through the Respiratory Care Board of California, under the Department of Consumer Affairs. The board, not the school, states what is required to be licensed in this state.',
      'Step four: the national credentialing body sets the examinations, and eligibility for them runs through the accredited program from step two. Notice how step four depends on step two, which is exactly why the order is what it is.',
      'A learner who started at step seven, comparing program tuition, could have picked the cheapest option and discovered at the end that it did not satisfy step two. The cost of running the steps in order is one afternoon. The cost of running them backwards can be a year.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'Who to believe when sources disagree',
    text: [
      'You will find contradictions. A program page says one thing, a forum says another, the board says a third. The rule is simple and it does not have exceptions: for legal authorization to practice, the governmental licensing authority is correct. For eligibility to sit for a certification, the certifying body is correct. For whether a program qualifies, the accreditor is correct.',
      'Everyone else, including school admissions staff, well-meaning advisors, and anyone on the internet, is reporting their understanding of what those bodies said. Reporting is not the same as deciding.',
    ],
  },
  {
    kind: 'tryit',
    title: 'Run the chain on one career',
    text: [
      'Pick one career from your Course 2 shortlist and work the seven steps. Write down the name of each authority you consulted and the date you checked, because requirements change and a note without a date has a short shelf life.',
      'If you cannot find an authority for one of the steps, write down that you could not. A gap you have identified is far more useful than an assumption you have not.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce-3-c2',
      q: 'Which body grants legal authorization to practice a regulated profession?',
      options: [
        'An accreditor',
        'A professional association',
        'A governmental licensing authority',
        'The employing hospital',
      ],
      answer: 2,
      rationale:
        'Licensure is legal authorization from a governmental licensing authority, limited to that jurisdiction and to a defined scope of practice. It is the only item in the chain that determines legality.',
      distractors:
        'Accreditors evaluate programs and institutions. Professional associations may offer certification and set standards but cannot grant legal permission. An employer can require more than the state does, and can decline to hire you, but cannot authorize practice the state has not.',
    },
  },
];

// ── Lesson 3 ─────────────────────────────────────────────────────────────

const LESSON_3: Block[] = [
  {
    kind: 'why',
    text: [
      'Pre-health advising in the United States is dominated by the medical school path. That path is well documented, which is useful, and it is also loudly presented, which produces a specific error: learners apply medical school preparation to careers that never asked for it.',
    ],
  },
  {
    kind: 'concept',
    title: 'What the premed competencies are, and are not',
    text: [
      'The Association of American Medical Colleges describes a set of premedical competencies covering professional, thinking and reasoning, and science domains. Medical schools may consider them in holistic review, alongside academic record and experience.',
      'They are a real and useful description of what medical schools look for. They are not a general specification for health careers, and they carry no authority outside medical school admissions.',
      'Nursing has its own prerequisites and its own licensure examination. Pharmacy, physical therapy, counseling and public health each have their own accreditors, admissions requirements and credentials. Community health work has its own state pathways. Applying one field\'s standards to another produces a learner who is over-prepared for the wrong thing and under-prepared for the right one.',
    ],
  },
  {
    kind: 'source',
    text: 'The premedical competencies are published by the Association of American Medical Colleges and describe what medical schools may consider in holistic review.',
    ref: { name: 'AAMC, Premed Competencies for Entering Medical Students', url: 'https://students-residents.aamc.org/medical-school-admission-requirements/premed-competencies-entering-medical-students' },
  },
  {
    kind: 'example',
    title: 'The cost of using the wrong standard',
    text: [
      'A learner decides on community health work. Following advice aimed at premedical students, they spend two years loading organic chemistry, physics and calculus, and take a research assistantship because research experience is valued in medical school admissions.',
      'None of that is wasted in the sense that learning is never wasted. But the roles they are targeting weight supervised field hours, demonstrated cultural and linguistic competence, and community experience. Two years of laboratory work bought them very little of the thing that path actually asks for, and the field experience they did not get is the part that takes time to accumulate.',
      'The error was not working hard. It was verifying against the wrong authority.',
    ],
  },
  {
    kind: 'reflect',
    title: 'Check your own assumptions',
    prompts: [
      'Where did your current beliefs about what your target career requires come from? Name the actual source.',
      'Was that source the licensing authority, the certifying body, the accreditor, or someone reporting on them?',
      'Which of the seven research steps have you genuinely completed for your top career, and which have you assumed?',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce3-c3',
      q: 'A learner interested in becoming a licensed clinical social worker reads that they need strong performance in organic chemistry and physics. What is the problem with acting on that?',
      options: [
        'Nothing, since science coursework helps in any health field',
        'Those are premedical expectations, and the requirements for this path are set by the state board and the accrediting body for social work education',
        'They should take the courses but not worry about the grades',
        'Social work does not require any verification of requirements',
      ],
      answer: 1,
      rationale:
        'Requirements are set by the authority that governs the specific profession. For clinical social work that means the state licensing board and the accreditor for social work programs, neither of which sets premedical science expectations.',
      distractors:
        'General science coursework may be personally valuable but does not substitute for verifying the actual requirements, and social work licensure has requirements that are unusually specific about supervised hours.',
    },
  },
  {
    kind: 'takeaways',
    items: [
      'Degree, certificate, certification, licensure and accreditation are five different things granted by five different kinds of body.',
      'They form a chain with a direction: accreditation gates certification eligibility, and licensure gates legality. A break early in the chain cannot be repaired later.',
      'Research in order: entry education, accreditation, licensure, certification, supervised hours, renewal, then program prerequisites.',
      'When sources disagree, the governmental licensing authority decides legality, the certifying body decides exam eligibility, and the accreditor decides whether a program qualifies.',
      'Premed competencies apply to medical school admissions and nowhere else. Use the standards of the field you are actually entering.',
      'Write down the date you verified something. Requirements change, and undated notes quietly become wrong.',
    ],
  },
];

// ── Course ───────────────────────────────────────────────────────────────

export const COURSE_3_V2: Course = {
  id: 'hce-3',
  num: 3,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Education, Training, Licensure + Credentials',
  promise:
    'Tell the difference between a degree, a certificate, a certification, a license, and accreditation, and verify the real requirements for a career you care about.',
  about: [
    'Health careers vary widely in what they require. Some are entered with a short-term certificate; others require associate, bachelor\'s, graduate, professional or doctoral education. Many add supervised hours, national examinations, state licensure, continuing education, or recurring certification.',
    'This course gives you the vocabulary to tell those apart and a verification chain you can run on any career, so your plan rests on what the deciding authorities actually say rather than on what a program brochure implies.',
  ],
  objectives: [
    'Distinguish degree, certificate, certification, licensure and accreditation.',
    'Research the current requirements for a chosen profession.',
    'Identify prerequisite courses or experiences when applicable.',
    'Recognize why requirements must be verified with authoritative sources.',
  ],
  minutes: 58,
  prerequisites: 'Courses 1 and 2.',
  whoFor: 'Learners with two to four target careers who need to know what it actually takes to enter them.',
  freshness:
    'Licensure and certification requirements change. Verify against the licensing board and certifying body directly, and record the date you checked.',
  lessons: [
    {
      id: 'hce3-l1',
      title: 'Five terms that are not interchangeable',
      summary: 'Degree, certificate, certification, licensure and accreditation mean different things and carry different authority.',
      minutes: 14,
      blocks: LESSON_1,
    },
    {
      id: 'hce3-l2',
      title: 'Build a requirements chain',
      summary: 'Seven things to research for any target career, in the order that saves the most time.',
      minutes: 15,
      blocks: LESSON_2,
    },
    {
      id: 'hce3-l3',
      title: 'One path does not fit every career',
      summary: 'Premed competencies apply to medical school. Other fields have their own standards.',
      minutes: 11,
      blocks: LESSON_3,
    },
  ],
  checks: [],
  artifact: {
    id: 'requirements-chain',
    minutes: 18,
    title: 'Verified requirements for your top careers',
    purpose:
      'The third section of your roadmap, and the one that makes it real. Anyone can name a career. This records what entering it actually requires, verified against the bodies that decide, with the dates you checked. Course 8 builds your timeline directly from these requirements.',
    reference: {
      title: 'Where the authority actually sits',
      items: [
        'Occupation description and typical entry education: U.S. Bureau of Labor Statistics, Occupational Outlook Handbook',
        'Whether a program qualifies: the accrediting body recognized for that profession',
        'Legal permission to practice in California: the relevant board under the California Department of Consumer Affairs',
        'Eligibility to sit for a certification exam: the certifying organization itself',
        'Program admission requirements: the individual program, which may require more than the minimum',
        'Health workforce programs and shortage designations: Health Resources and Services Administration',
      ],
    },
    fields: [
      {
        id: 'chain',
        label: 'Requirements chain',
        help: 'For this career, work the seven steps: entry education, accreditation, licensure, certification, supervised hours, renewal, program prerequisites. Name the authority you checked and the date. Write "could not find" where that is the honest answer.',
        multiline: true,
        repeat: 2,
        repeatLabel: 'Career',
      },
      {
        id: 'longestpole',
        label: 'The longest part of this path',
        help: 'Which single requirement will take the most time to satisfy? Supervised hours are often the answer and are often invisible until you look.',
        multiline: true,
      },
      {
        id: 'surprise',
        label: 'What surprised you',
        help: 'Something you believed before this course that verification changed. If nothing changed, say what you confirmed and where.',
        multiline: true,
      },
    ],
  },
  furtherLearning: [
    {
      name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook',
      use: 'Occupation descriptions, typical entry education, work environment and outlook. The correct first stop, and never the last.',
      url: 'https://www.bls.gov/ooh/',
    },
    {
      name: 'California Department of Consumer Affairs',
      use: 'Directory of the California boards and bureaus that license regulated professions in this state.',
      url: 'https://www.dca.ca.gov/about_us/entities.shtml',
    },
    {
      name: 'AAMC, Premed Competencies for Entering Medical Students',
      use: 'What medical schools may consider in holistic review. Applies to medical school admissions only.',
      url: 'https://students-residents.aamc.org/medical-school-admission-requirements/premed-competencies-entering-medical-students',
    },
    {
      name: 'Health Resources and Services Administration',
      use: 'Federal health workforce programs, shortage area designations, and scholarship or loan repayment tied to service.',
      url: 'https://www.hrsa.gov/',
    },
  ],
};
