// Health Careers Exploration, Course 1 of 8 — The Health Professions Ecosystem.
// Written Guided Curriculum v2.0.
//
// Learner-facing text is HMC approved copy, reproduced faithfully. Structure
// follows the Written Guided Curriculum Standard v2.0: orientation, opening
// case, guided lessons with examples and counterexamples, knowledge checks with
// rationales, a self-contained applied activity, a worked exemplar, reflection,
// key takeaways, and sources at the end rather than scattered through the page.
//
// Per the standard, internal governance metadata (version numbers, evidence
// review dates, reviewer names, source codes) is deliberately NOT rendered to
// learners. It belongs in the admin record.

import type { Course } from './catalog';
import type { Block } from './blocks';

const LESSON_1: Block[] = [
  {
    kind: 'concept',
    title: 'No single profession does everything',
    text: [
      'A health system works because people with different expertise perform different parts of the work. No single profession is trained or authorized to do everything.',
      'The Interprofessional Education Collaborative develops nationally used competencies for interprofessional collaborative practice. Its current framework reflects the importance of preparing health-professions learners to work collaboratively across roles to improve person and population health, emphasizing values and ethics, roles and responsibilities, communication, and teamwork.',
      'That matters for career exploration because the first question should not be "Which job is best?" It should be "What part of the health problem do I want to help solve, and what training and role would prepare me to do that?"',
    ],
  },
  {
    kind: 'concept',
    title: 'A team is not a hierarchy of importance',
    text: [
      'Health care teams contain differences in authority, scope, expertise, and accountability, but those differences do not make one type of contribution irrelevant.',
      'A laboratory result, medication reconciliation, interpreter encounter, social-service referral, sterile processing function, scheduling decision, or data-quality failure can change what happens to a patient even if the person responsible never diagnoses or treats them.',
      'Consider a routine surgical procedure. The visible clinician may be the surgeon, but safe care can also depend on nurses, anesthesia professionals, surgical technologists, sterile-processing staff, laboratory and imaging professionals, pharmacists, schedulers, environmental services, health-information staff, supply-chain teams, infection-prevention professionals, and billing and authorization teams.',
    ],
  },
  {
    kind: 'concept',
    title: 'Direct care versus work that shapes care',
    text: [
      'A useful career-exploration distinction is whether a role typically provides direct services to individual patients and clients, or primarily shapes the systems, evidence, environments, technology, policies, and operations around care.',
      'Direct-care examples can include physicians, nurses, PAs, therapists, pharmacists in patient-facing settings, medical assistants, EMTs and paramedics, behavioral-health clinicians, dental professionals, and many allied-health roles.',
      'Non-direct or mixed-role examples can include epidemiologists, biostatisticians, health-services researchers, informaticists, software engineers, quality-improvement specialists, policy analysts, compliance professionals, administrators, data analysts, laboratory scientists, supply-chain professionals, and public-health program staff. Some professions move between direct and non-direct settings during a career.',
    ],
  },
  {
    kind: 'source',
    text:
      'The Bureau of Labor Statistics notes that physicians may work not only in clinical settings such as offices and hospitals, but also in nonclinical settings including government agencies, nonprofit organizations, and insurance companies. Career labels do not always tell you what the day-to-day work environment will be.',
    ref: { name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook', url: 'https://www.bls.gov/ooh/' },
  },
  {
    kind: 'fieldnote',
    title: 'Community health changes the team',
    text: [
      'In community-based health, the team may extend beyond conventional clinical roles. Community health workers, outreach staff, housing organizations, food-access programs, schools, faith organizations, benefits navigators, public agencies, and community-based organizations may all affect whether a person can carry out a care plan.',
      'A clinically correct recommendation that a person cannot afford, reach, understand, or safely follow is not a successful health outcome.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce1v2-kc1',
      q: 'Which statement best reflects interprofessional health work?',
      options: [
        'The professional with the most education is responsible for every part of a health outcome',
        'Different professions contribute distinct expertise and must understand how their roles connect',
        'Nonclinical roles have little influence on patient outcomes',
        'Teamwork matters only in hospitals',
      ],
      answer: 1,
      rationale:
        'Effective health systems depend on role clarity, communication, and coordinated contributions across professions and settings.',
      distractors:
        'The other options all shrink the team. Education level does not determine responsibility for an outcome, nonclinical roles routinely change what happens to a patient, and community settings depend on teamwork at least as much as hospitals.',
      source: 'IPEC Core Competencies for Interprofessional Collaborative Practice',
    },
  },
  {
    kind: 'tryit',
    title: 'Sort the roles from Maya\'s scenario',
    text: [
      'Return to the asthma scenario. Sort the roles you identified into three columns.',
      '1. Direct individual care.  2. Community and population support.  3. System, research, technology, or operations.',
      'Notice that some roles could reasonably fit in more than one column. That is not a mistake. Careers can span settings and functions.',
    ],
  },
];

const FAMILY = (n: number, name: string, examples: string, does: string, ask?: string): Block => ({
  kind: 'concept',
  title: `${n}. ${name}`,
  text: [examples, does, ...(ask ? [ask] : [])],
});

const LESSON_2: Block[] = [
  {
    kind: 'prose',
    text: [
      'Career families are a way to organize exploration. They are not legal categories, and different institutions may group professions differently. HMC uses the families below to help you see the range of work before narrowing to a specific occupation.',
    ],
  },
  FAMILY(1, 'Clinical medicine and advanced practice',
    'Examples: physicians, PAs, advanced practice registered nurses, dentists, optometrists, and other licensed diagnosing and treating professions.',
    'What the family often does: evaluates health concerns, diagnoses or contributes to diagnosis within scope, develops treatment plans, performs procedures, prescribes or manages therapies where authorized, and coordinates complex care.',
    'Ask yourself: Do I want substantial responsibility for clinical decisions? Am I prepared for the required education, supervised training, licensure, and continuing obligations?'),
  FAMILY(2, 'Nursing',
    'Examples: registered nurses, licensed vocational and practical nurses, advanced practice nurses, public-health nurses, specialty nurses, nurse educators, and nurse leaders.',
    'What the family often does: provides and coordinates care, monitors patient status, educates patients and families, administers treatments within role and scope, supports transitions, and often serves as a central communication link across the care team.'),
  FAMILY(3, 'Allied health and rehabilitation',
    'Examples: respiratory therapists, occupational therapists, physical therapists, speech-language pathologists, audiologists, radiologic technologists, sonographers, dietitians, exercise physiologists, and many technical professions.',
    'What the family often does: provides specialized diagnostic, therapeutic, rehabilitative, technical, or functional support. These professions often require specific accredited education and may have licensure or certification requirements.'),
  FAMILY(4, 'Behavioral and mental health',
    'Examples: psychologists, psychiatrists, clinical social workers, professional counselors, marriage and family therapists, substance-use treatment professionals, peer-support specialists, and behavioral-health program staff.',
    'What the family often does: assesses and treats mental, emotional, behavioral, relational, or substance-use needs within the professional\'s scope; provides counseling, therapy or psychiatric treatment where authorized; supports recovery; and connects people to community resources.'),
  FAMILY(5, 'Pharmacy, laboratory and diagnostic science',
    'Examples: pharmacists, pharmacy technicians, clinical laboratory scientists, medical laboratory technicians, phlebotomy professionals, pathology-related roles, and diagnostic-support staff.',
    'What the family often does: supports medication safety and access, produces or interprets laboratory information within role, collects specimens, manages diagnostic workflows, and contributes evidence needed for clinical decisions.'),
  FAMILY(6, 'Public and community health',
    'Examples: epidemiologists, health educators, community health workers, outreach workers, navigators, environmental-health professionals, public-health nurses, program managers, and prevention specialists.',
    'What the family often does: works upstream. Preventing illness, improving access, understanding community conditions, connecting people to resources, analyzing patterns, designing programs, and addressing social or environmental factors affecting health.'),
  {
    kind: 'source',
    text:
      'Federal health-workforce programs explicitly connect workforce development with improving access for underserved and vulnerable populations. This is one reason community and public-health careers matter alongside traditional clinical professions.',
    ref: { name: 'Health Resources and Services Administration, Health Workforce', url: 'https://data.hrsa.gov/topics/health-workforce/' },
  },
  FAMILY(7, 'Research and academia',
    'Examples: laboratory researchers, clinical-research coordinators, epidemiologists, implementation scientists, health-services researchers, biostatisticians, faculty, and research administrators.',
    'What the family often does: generates, tests, interprets, and disseminates evidence. Some researchers work directly with human participants. Others work with laboratory models, datasets, systems, implementation strategies, or policy questions.'),
  FAMILY(8, 'Digital health, data and engineering',
    'Examples: health informaticists, software engineers, data scientists, cybersecurity professionals, biomedical engineers, product managers and designers, analytics professionals, and AI and automation specialists.',
    'What the family often does: builds and protects the digital systems used to deliver, document, analyze, coordinate, and improve health services. These roles can affect care at enormous scale without providing direct patient treatment.'),
  FAMILY(9, 'Administration, policy and operations',
    'Examples: health-services managers, quality-improvement staff, compliance professionals, finance staff, policy analysts, human resources, operations leaders, revenue-cycle staff, supply-chain teams, and program administrators.',
    'What the family often does: creates the organizational conditions under which care and programs function. Staffing, budgets, policies, quality systems, contracts, compliance, procurement, scheduling, payment, and strategy.'),
  {
    kind: 'myths',
    items: [
      {
        myth: 'If I want to work in health, I need to become a doctor or nurse.',
        reality:
          'BLS occupational data span healthcare, life and social science, community and social service, management, computer and information technology, engineering, and other groups that can connect directly to health work.',
      },
      {
        myth: 'A nonclinical job does not improve health.',
        reality:
          'A cybersecurity professional protecting a hospital system, an epidemiologist detecting a disease pattern, an engineer improving a device, a navigator helping someone establish care, and an administrator fixing a referral workflow can all affect outcomes without diagnosing a patient.',
      },
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce1v2-kc2',
      q: 'Which role most clearly demonstrates a health career that may improve outcomes without routinely providing direct patient care?',
      options: ['Epidemiologist', 'Respiratory therapist', 'Registered nurse', 'Paramedic'],
      answer: 0,
      rationale:
        'Epidemiologists typically study patterns, causes, and distribution of health conditions at a population level rather than routinely providing individual patient treatment.',
      distractors: 'The other three are direct-care professions that work with individual patients as the core of the role.',
    },
  },
  {
    kind: 'reflect',
    title: 'Guided reflection',
    prompts: [
      'Choose two career families above that you knew little about before this course. What problem does each family help solve?',
      'What type of work in those families appears interesting to you?',
      'What would you need to learn before deciding whether either family fits you?',
    ],
  },
];

const LESSON_3: Block[] = [
  {
    kind: 'prose',
    text: [
      'Career exploration becomes dangerous when a learner confuses a starting source with a final authority.',
    ],
  },
  {
    kind: 'concept',
    title: 'The BLS Occupational Outlook Handbook is a starting point',
    text: [
      'The Occupational Outlook Handbook provides standardized information for hundreds of occupations. Its profiles commonly include what workers do, work environment, typical entry-level education and training, pay data, job outlook, state and area data, similar occupations, and links for more information.',
      'That makes BLS useful for comparing occupations consistently. But BLS is not the licensing board for every regulated profession, and "typical entry-level education" is not the same as a complete legal or admissions requirement.',
    ],
  },
  {
    kind: 'steps',
    title: 'The verification chain',
    items: [
      { label: 'Step 1. Occupational overview', text: 'Use the BLS Occupational Outlook Handbook to understand duties, environment, typical education, pay, and outlook.' },
      { label: 'Step 2. Regulation', text: 'Ask whether the profession is licensed, registered, or otherwise regulated in the state where you plan to practice. In California, the Department of Consumer Affairs supports numerous boards and bureaus that regulate professional licenses, registrations, certificates, and permits. The correct board or agency, not a social-media post, controls legal practice requirements within its jurisdiction.' },
      { label: 'Step 3. Education and accreditation', text: 'If the profession requires graduation from an accredited program, identify the recognized accrediting body and verify prospective schools and programs directly.' },
      { label: 'Step 4. Certification and examination', text: 'Determine whether a national certification or examination is required, preferred, or separate from state licensure.' },
      { label: 'Step 5. School-specific admissions', text: 'Even when a profession has one regulatory pathway, schools can have different prerequisites, admissions standards, application cycles, costs, and experience expectations.' },
    ],
  },
  {
    kind: 'example',
    title: 'Worked example: respiratory therapy in California',
    text: [
      'Respiratory therapy shows why "I found a job page" is not enough.',
      'Starting point. BLS reports that respiratory therapists typically need at least an associate degree in respiratory therapy, and that licensure is required in nearly all states. That gives you a national occupational overview.',
      'California authority. The Respiratory Care Board of California states that a person must hold a California Respiratory Care Practitioner license or valid work permit to legally practice respiratory care in California. The Board also distinguishes the state license from national credentials and sets current education and examination requirements.',
      'The lesson. A learner who stopped after reading a national certification site could misunderstand what legally authorizes practice in California. A learner who only looked at one college website could mistake that school\'s admissions requirements for the requirements of the entire profession.',
      'That is why HMC teaches: verify the job, not the myth.',
    ],
  },
  {
    kind: 'tryit',
    title: 'Source evaluation',
    text: [
      'Rank these from strongest to weakest for answering "What do I legally need to practice this profession in California?"',
      'A. California licensing board page.  B. A short video from a practitioner.  C. A college marketing page.  D. The BLS Occupational Outlook Handbook.',
      'Best answer: A is strongest for California legal licensure requirements. BLS is a strong starting source for occupational overview, but a state licensing authority controls state licensure requirements. A college page is useful for that specific program. Social media can offer lived experience but is not the authority on legal requirements.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce1v2-kc3',
      q: 'A learner sees a salary figure for a profession on social media. What is the best next step?',
      options: [
        'Treat it as accurate if the creator has many followers',
        'Average it with two other social-media posts',
        'Check BLS wage and occupation data, then verify state-specific requirements with the appropriate authority',
        'Assume the salary applies nationally',
      ],
      answer: 2,
      rationale:
        'BLS provides standardized occupational and wage information, while licensing requirements must be verified with the relevant regulatory authority.',
      distractors:
        'Follower count is not evidence, averaging several unverified posts just averages the error, and pay varies substantially by state and area.',
    },
  },
];

export const COURSE_1_V2: Course = {
  id: 'hce-1',
  num: 1,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'The Health Professions Ecosystem',
  promise:
    'Map the health-professions ecosystem, and learn to verify career information against authorities rather than hearsay.',
  about: [
    'Health care is much larger than the handful of professions most people see on television, in a clinic, or during a hospital visit.',
    'This course helps you map the health-professions ecosystem, understand why health outcomes depend on teams, distinguish direct-care roles from population, research, technology, and operational careers, and learn how to verify career information using authoritative sources rather than social media or hearsay.',
    'A learner who only knows doctor, nurse and therapist may miss dozens of careers that better match their interests, strengths, desired education level, work style, or community goals. A learner who relies on salary posts, influencer videos, or a college marketing page can make an expensive decision based on incomplete or outdated information.',
  ],
  objectives: [
    'Identify at least eight major health-career families and describe how they contribute to health outcomes.',
    'Distinguish direct patient-care roles from population-health, research, technology, administration, and other non-direct-care roles.',
    'Explain why interprofessional teamwork matters in health and community care.',
    'Use the BLS Occupational Outlook Handbook as a starting point, and identify when a state licensing board or other authority must be consulted.',
    'Select three career families for deeper exploration based on evidence rather than assumptions.',
  ],
  minutes: 70,
  prerequisites: 'None. This is the entry point to the pathway.',
  whoFor:
    'Anyone exploring health careers, including learners with no prior exposure to the field.',
  lessons: [
    {
      id: 'hce-1-l0',
      title: 'Opening case: one health problem, many professions',
      summary: 'An asthma scenario that shows how many roles shape a single person\'s health.',
      minutes: 5,
      blocks: [
        {
          kind: 'why',
          text: [
            'This course starts with a systems view. What work has to happen for a person or community to become healthier, and who does that work?',
          ],
        },
        {
          kind: 'case',
          title: 'Maya',
          scenario: true,
          text: [
            'Maya is a 17-year-old high-school student with asthma. She has missed school several times because of breathing problems. Her family recently moved, they are unsure which clinic accepts their insurance, their apartment has moisture and mold concerns, and Maya wants to continue playing sports. She has an inhaler but is not confident she is using it correctly.',
            'Who could affect Maya\'s health?',
            'A physician, nurse practitioner, PA, or other qualified clinician might evaluate symptoms and develop a treatment plan. A nurse might provide education, reinforce the plan, and coordinate care. A respiratory therapist may assess breathing-related needs and teach respiratory-care techniques in appropriate settings. A pharmacist may help ensure medication access and understanding.',
            'A community health worker or navigator may help the family connect to coverage, a clinic, transportation, or community resources. An environmental-health professional may address housing-related exposures at the population or regulatory level. A school nurse may support care during the school day.',
            'A public-health professional may analyze local asthma patterns. A researcher may study which interventions reduce asthma-related emergency visits. A data analyst may build a dashboard identifying neighborhoods with higher utilization. A software or product team may design a patient-reminder or navigation tool. A health administrator may build the staffing and payment systems that keep services running.',
            'The important lesson is not that one person needs every professional listed above. It is that health outcomes are produced by a system of roles, decisions, environments, and resources, not by one profession acting alone.',
          ],
        },
        {
          kind: 'reflect',
          title: 'Before you continue',
          prompts: [
            'Write down three roles in the scenario that you had not previously connected with asthma care.',
            'For each, write one sentence explaining what that role might contribute.',
          ],
        },
      ],
    },
    {
      id: 'hce-1-l1',
      title: 'Healthcare is a team sport',
      summary: 'Why outcomes depend on coordinated roles, and how direct care differs from work that shapes care.',
      minutes: 12,
      blocks: LESSON_1,
    },
    {
      id: 'hce-1-l2',
      title: 'Map the career families',
      summary: 'Nine career families, what each actually does, and the questions to ask yourself about each.',
      minutes: 14,
      blocks: LESSON_2,
    },
    {
      id: 'hce-1-l3',
      title: 'Verify the job, not the myth',
      summary: 'A five-step verification chain, and a worked California example showing why sources are not interchangeable.',
      minutes: 11,
      blocks: [
        ...LESSON_3,
        {
          kind: 'takeaways',
          items: [
            'Health outcomes are created by teams and systems, not one profession acting alone.',
            'Direct patient care is only one part of the health-professions ecosystem.',
            'Career families help you explore broadly before committing to a single occupation.',
            'The BLS Occupational Outlook Handbook is an excellent starting point for occupation descriptions, education, work environment, pay, and outlook, but it does not replace state regulatory authorities.',
            'Licensure, certification, accreditation, and a certificate of completion are different concepts. Later courses examine those distinctions in depth.',
            'Good career exploration replaces assumptions with questions that can be verified.',
          ],
        },
      ],
    },
  ],
  checks: [],
  // Self-contained per the standard: the occupation list is ON the page, not in
  // a worksheet the learner has to go find. Carried forward to the capstone.
  artifact: {
    id: 'career-hypotheses',
    title: 'Career Family Sort and three career hypotheses',
    minutes: 28,
    purpose:
      'Your first roadmap section. Course 8 assembles this with the work from every other course rather than asking you to write it all at the end.',
    reference: {
      title: 'Occupation list. Choose 12 of these 18.',
      items: [
        'Physician',
        'Registered nurse',
        'Respiratory therapist',
        'Occupational therapist',
        'Pharmacist',
        'Clinical laboratory scientist',
        'Epidemiologist',
        'Community health worker',
        'Clinical social worker',
        'Health-services researcher',
        'Health informaticist',
        'Biomedical engineer',
        'Healthcare data analyst',
        'Medical and health services manager',
        'Environmental-health specialist',
        'Radiologic technologist',
        'Clinical research coordinator',
        'Health educator',
      ],
    },
    fields: [
      {
        id: 'sort',
        label: 'Part A and B. Sort 12 occupations, and connect each to a community health issue',
        help:
          'Assign each occupation to the career family that best fits, and note any overlap you see. Then choose one community health issue (asthma, diabetes prevention, homelessness, mental wellness, maternal health, HIV and STI prevention, or another you can define clearly) and write one sentence per occupation explaining how that role could contribute.',
        multiline: true,
        placeholder:
          'Epidemiologist. Public and community health, with overlap into research. Asthma: could analyze patterns of asthma-related emergency visits to identify populations experiencing disproportionate burden and inform prevention.',
      },
      {
        id: 'hypothesis',
        label: 'Part C. Career hypothesis',
        help:
          'For each: what interests you about it, what you currently assume about it, and what you need to verify. Avoid claiming a role can perform duties outside its scope.',
        multiline: true,
        repeat: 3,
        repeatLabel: 'Hypothesis',
        placeholder:
          'What interests me: I like data and want work that can affect many people at once.\nWhat I assume: most epidemiologists work in government.\nWhat I need to verify: common employers, required education, day-to-day tasks, and whether there are roles in health systems, universities, or nonprofits.',
      },
    ],
  },
  furtherLearning: [
    { name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook', use: 'Standardized occupational descriptions, work environment, typical entry education, pay, job outlook, and comparison across occupations.', url: 'https://www.bls.gov/ooh/' },
    { name: 'Interprofessional Education Collaborative, Core Competencies', use: 'Interprofessional roles and responsibilities, communication, values and ethics, and teamwork concepts.', url: 'https://www.ipecollaborative.org/ipec-core-competencies' },
    { name: 'Health Resources and Services Administration, Health Workforce', use: 'Federal health-workforce context, workforce data, shortage areas, and programs connecting professionals with underserved communities.', url: 'https://data.hrsa.gov/topics/health-workforce/' },
    { name: 'California Department of Consumer Affairs, Boards and Bureaus', use: 'Identify the relevant California licensing or regulatory entity for a regulated profession.', url: 'https://www.dca.ca.gov/about_us/entities.html' },
    { name: 'Respiratory Care Board of California, Licensure Requirements', use: 'The worked example showing the difference between national occupational information, certification, and state authorization to practice.', url: 'https://www.rcb.ca.gov/applicants/app_requirements.shtml' },
  ],
};
