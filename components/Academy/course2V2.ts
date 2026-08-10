// Health Careers Exploration, Course 2 — v2 guided curriculum.
//
// Converted from the v1 course, which stated 50 minutes against 133 words of
// learner-facing text. The objectives, promise and prerequisites are preserved
// exactly; what changed is that the instruction now exists.
//
// Sources cited inline are real and checkable: the NACE career readiness
// competencies, the U.S. Department of Labor's O*NET Interest Profiler, and the
// BLS Occupational Outlook Handbook. Nothing here invents research findings.

import type { Course } from './catalog';
import type { Block } from './blocks';

// ── Lesson 1 ─────────────────────────────────────────────────────────────

const LESSON_1: Block[] = [
  {
    kind: 'why',
    text: [
      'Most people start a career search from job titles. They read a list, recognize a few, and pick the ones that sound impressive or familiar. That approach fails in a predictable way: it selects for what you have heard of, not for what you would be good at or want to do for thirty years.',
      'Starting from the problem you want to work on inverts the search. Instead of asking "what job sounds good," you ask "what goes wrong in people\'s health that I want to be part of fixing." That question narrows the field faster and produces a shortlist you can defend to yourself.',
    ],
  },
  {
    kind: 'case',
    title: 'Two learners, one job title',
    scenario: true,
    text: [
      'Andre and Priya both write down "nurse" after a career fair. On paper they made the same choice. In conversation they did not.',
      'Andre says he wants to be a nurse because he was in the hospital as a kid and the nurse was the only person who explained anything to him. What he is describing is a problem: patients do not understand what is happening to them. That problem is worked on by nurses, and also by health educators, patient navigators, interpreters, and health communication specialists.',
      'Priya says she wants to be a nurse because she is good at biology and wants a stable job that pays well without a decade of school. That is also legitimate, and it is an entirely different search. Her constraints are time to credential, cost, and labor demand. Those constraints point toward a set of roles that has very little to do with Andre\'s.',
      'If both stop at the word "nurse," one of them will probably end up in the wrong place. Not because nursing is wrong, but because neither has checked whether it is the best fit for what they actually said.',
    ],
  },
  {
    kind: 'concept',
    title: 'Five questions that narrow a search',
    text: [
      'These are the five questions from the original course, and they do most of the work. Answer them honestly rather than aspirationally. There is no scoring, and no answer eliminates you from anything.',
    ],
  },
  {
    kind: 'steps',
    items: [
      {
        label: 'Do I want direct patient contact, or work that shapes care from behind it?',
        text: 'Both change outcomes. Direct contact means the person is in front of you, which is rewarding and also emotionally heavy on a schedule you do not fully control. Behind-the-scenes work, such as informatics, epidemiology, policy or administration, changes what happens to thousands of people you never meet. Neither is the serious option and neither is the safe option.',
      },
      {
        label: 'What subject matter do I actually enjoy?',
        text: 'Science, technology, communication, counseling, policy, design, or data. Notice this asks what you enjoy, not what you are currently best at. You will spend years getting good at whatever you choose, so enjoying the material matters more than your current skill in it.',
      },
      {
        label: 'Do I prefer structure or flexibility?',
        text: 'A hospital unit is highly structured: protocols, shift handoffs, defined scope. Community and outreach settings are far less structured, and you will make judgment calls without anyone immediately available to confirm them. People who need clear procedures are miserable in the second setting, and people who need autonomy chafe in the first.',
      },
      {
        label: 'How much formal education am I prepared to commit to right now?',
        text: 'The honest answer is often "I do not know yet," and that is fine. What is not fine is assuming you must answer with the maximum. Many health roles are entered with a certificate or associate degree, and several of them stack, meaning the first credential counts toward the next one.',
      },
      {
        label: 'What financial reality am I working inside?',
        text: 'Whether you can stop earning to study, whether you have dependents, and whether you can relocate are not side issues. They are constraints that make some paths realistic and others not, and a plan that ignores them is not a plan.',
      },
    ],
  },
  {
    kind: 'fieldnote',
    title: 'A question that is not on the list',
    text: [
      '"What am I passionate about?" is missing on purpose. It is a hard question to answer at the start and an easy one to answer wrongly, because passion often follows competence rather than preceding it. People frequently become passionate about work after they get good at it and see it matter.',
      'The five questions above are answerable today with information you already have. That is why they are the ones used here.',
    ],
  },
  {
    kind: 'tryit',
    title: 'Answer the five, in writing',
    text: [
      'Write one or two sentences for each of the five questions. Do it now, before the next section, and do it in writing rather than in your head. Writing forces specificity that thinking does not.',
      'Then write one sentence that begins: "The problem I want to work on is..." It will be rough. You will revise it at the end of this course, and again in Course 8.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce2-c1',
      q: 'A learner says: "I want to work on the fact that people in my neighborhood do not fill their prescriptions because they cannot afford them." Which is the strongest next step?',
      options: [
        'Decide to become a pharmacist, since the problem involves medication',
        'Look at the range of roles that work on medication access, including pharmacy, care navigation, benefits counseling and health policy',
        'Choose the option with the highest listed salary',
        'Wait until they have taken more science courses before considering anything',
      ],
      answer: 1,
      rationale:
        'The learner named a problem, not a job. Medication access is worked on from several directions at once: dispensing and counseling, helping people use the coverage they have, enrolling them in coverage they qualify for, and changing the rules that set costs. Looking at the range first is what makes the eventual choice defensible.',
      distractors:
        'Jumping to pharmacist skips the search entirely. Salary is a real constraint but it is not a way to identify which problem you want to work on. Waiting for more coursework delays a decision that coursework will not answer.',
    },
  },
];

// ── Lesson 2 ─────────────────────────────────────────────────────────────

const LESSON_2: Block[] = [
  {
    kind: 'why',
    text: [
      'Many learners quietly disqualify themselves. They read that a profession values leadership and communication, conclude they do not have those, and stop. This is the single most common avoidable exit from a health career path, and it rests on a false premise.',
    ],
  },
  {
    kind: 'concept',
    title: 'Career readiness is built, not issued',
    text: [
      'The National Association of Colleges and Employers maintains a framework of career readiness competencies used widely across higher education and hiring. The current framework names eight: career and self-development, communication, critical thinking, equity and inclusion, leadership, professionalism, teamwork, and technology.',
      'Read that list again and notice what is not on it. There is no entry for talent, natural ability, or being a people person. Every one of the eight is a practice: something you get better at by doing it, receiving feedback, and doing it again.',
      'This matters for how you read a job description. When a posting says it wants strong communication, it is not asking whether you were born articulate. It is asking whether you can explain something clearly to a person who does not share your training, and check that they understood. That is learnable, and most people learn it at work.',
    ],
  },
  {
    kind: 'source',
    text: 'The eight competencies are published by the National Association of Colleges and Employers, which develops them with employer and career-services input and revises them periodically.',
    ref: { name: 'NACE, Career Readiness Competencies', url: 'https://www.naceweb.org/career-readiness/competencies/career-readiness-defined' },
  },
  {
    kind: 'example',
    title: 'The same experience, described two ways',
    text: [
      'A learner spends a summer at a food distribution site. Asked what they did, they say: "I handed out boxes. It was not really health care."',
      'Here is the same summer, described against the competencies. Teamwork: coordinated with four volunteers to keep a line moving without anyone waiting outside in the heat. Communication: explained in Spanish and English what was in each box, including for two families with dietary restrictions. Equity and inclusion: noticed that older residents could not carry the boxes to the bus stop and arranged for them to be brought out last so someone could help. Professionalism: showed up on time for eleven weeks.',
      'Nothing was added. The second description is not a spin on the first; it is the first one told accurately. What changed is that the learner now has language for what they did, which is exactly what an application or an interview asks for.',
      'This is also the difference between "Completed 120 hours" and a description that means something, which is the distinction Course 1 raised and Course 4 develops.',
    ],
  },
  {
    kind: 'myths',
    items: [
      {
        myth: 'If I were meant for this, I would already be good at it.',
        reality:
          'Competence is the output of training, not the entry requirement for it. Every clinician you have met was once unable to do the thing they now do without thinking.',
      },
      {
        myth: 'I am not a leader, so leadership roles are out.',
        reality:
          'Leadership in the competency framework means taking responsibility for an outcome and helping a group reach it. Organizing a study group is leadership. So is noticing something is going wrong and telling someone who can fix it.',
      },
      {
        myth: 'I am bad at science, so health careers are closed to me.',
        reality:
          'Being bad at a science course you took under specific conditions is not the same as being unable to learn science. It is worth separating the subject from the circumstances in which you last studied it. Course 5 deals with academic readiness directly.',
      },
    ],
  },
  {
    kind: 'reflect',
    title: 'Inventory what you have already practiced',
    prompts: [
      'Pick one of the eight competencies and name a specific time you practiced it. Not a time you demonstrated mastery, a time you practiced it.',
      'Now pick the one you have practiced least. What is one setting, in the next six months, where you could practice it on purpose?',
      'Which of the eight would you most want a supervisor to say you were strong in, two years from now?',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce2-c2',
      q: 'Why does it matter that career readiness competencies are framed as developmental rather than fixed?',
      options: [
        'Because it means employers do not actually assess them',
        'Because a learner who lacks a competency today has a route to it, rather than a reason to exit the path',
        'Because competencies replace the need for formal education',
        'Because it guarantees that anyone can enter any profession',
      ],
      answer: 1,
      rationale:
        'A developmental framing turns a gap into a plan. It does not lower any bar. The competency still has to be built, and employers do assess it, but the learner has somewhere to go rather than a reason to stop.',
      distractors:
        'Employers assess these closely. Competencies sit alongside formal education and licensure rather than replacing them, and no framing guarantees entry to any profession, which still has its own requirements.',
    },
  },
];

// ── Lesson 3 ─────────────────────────────────────────────────────────────

const LESSON_3: Block[] = [
  {
    kind: 'why',
    text: [
      'At some point in this process someone will hand you a career quiz. It will produce a confident-looking result. The result deserves your attention and does not deserve your obedience.',
    ],
  },
  {
    kind: 'concept',
    title: 'What an interest inventory can and cannot tell you',
    text: [
      'An interest inventory asks what activities appeal to you and reports which occupational groups tend to attract people who answer similarly. That is genuinely useful. It surfaces occupations you have never heard of, which is the single hardest problem in career exploration, and it gives you vocabulary for preferences you already had.',
      'What it cannot do is account for what you would actually be paid, what the training costs, whether the job exists near you, what the day feels like, or whether you would still want it after seeing it. It has no information about your life. It only has your answers to its questions.',
      'The U.S. Department of Labor publishes a free interest assessment through O*NET and My Next Move. It is a reasonable one to use, precisely because it is public, free, and links straight to occupational data rather than to a sales page.',
    ],
  },
  {
    kind: 'source',
    text: 'The O*NET Interest Profiler is published by the U.S. Department of Labor and links results directly to occupational data, including typical education and wage information.',
    ref: { name: 'My Next Move, O*NET Interest Profiler', url: 'https://www.mynextmove.org/explore/ip' },
  },
  {
    kind: 'concept',
    title: 'Triangulate instead',
    text: [
      'One source of evidence about a career is an opinion. Three sources that agree is a finding. Use at least three of the following before you commit to researching a career deeply.',
    ],
  },
  {
    kind: 'list',
    items: [
      'Coursework you have taken, and specifically whether you liked the work rather than the grade',
      'The occupational description in the BLS Occupational Outlook Handbook, including typical entry education, working conditions and outlook',
      'A written job description for a real posting near you, which is often noticeably different from the general description',
      'Shadowing or observation, which is the fastest way to learn that a job you imagined is not the job that exists',
      'An informational interview with someone doing the work, covered in Course 7',
      'Volunteering or service in an adjacent setting, covered in Course 4',
      'Your own evolving priorities, which are allowed to change and often do',
    ],
  },
  {
    kind: 'example',
    title: 'Triangulation changing an answer',
    text: [
      'A learner takes an interest inventory and gets radiologic technologist near the top. Encouraging. They look it up in the Occupational Outlook Handbook and find the typical entry education is an associate degree, which fits their constraints, and that the work is done in hospitals and imaging centers.',
      'Then they shadow for a morning. They discover the role involves positioning patients who are in significant pain, repeatedly, on a tight schedule, and that a substantial part of the skill is getting a frightened person to hold still. That is not what the description conveyed.',
      'Some learners finish that morning more interested than when they arrived, because they now see the work as fundamentally about calming people under stress. Others realize they had been imagining a quiet technical job and this is not it. Both outcomes are successes. The inventory alone would have produced neither.',
    ],
  },
  {
    kind: 'tryit',
    title: 'Stress-test one career',
    text: [
      'Take one career from the three hypotheses you wrote in Course 1. Find its entry in the Occupational Outlook Handbook and read the "What They Do" and "Work Environment" sections.',
      'Write down one thing you learned that you did not expect. If you cannot find anything unexpected, you have probably skimmed rather than read.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce2-c3',
      q: 'An interest inventory ranks a career first that a learner has no interest in pursuing. What is the appropriate response?',
      options: [
        'Pursue it anyway, since the instrument is validated',
        'Discard the entire inventory as useless',
        'Treat it as one input, ask what the result reveals about the activities they said they liked, and keep it on the list only if other sources support it',
        'Retake the inventory until it produces the expected result',
      ],
      answer: 2,
      rationale:
        'An inventory reports patterns in your own answers, which makes an unexpected result worth interpreting rather than obeying or discarding. The useful question is what activity preference produced that ranking, because that preference may point to a role you have not considered.',
      distractors:
        'Following it because it is validated ignores everything the instrument does not know about your life. Discarding it wastes the one thing it is good at, surfacing unfamiliar occupations. Retaking it until it agrees with you converts an assessment into a mirror.',
    },
  },
  {
    kind: 'takeaways',
    items: [
      'Start from the problem you want to work on, not from a list of job titles you happen to recognize.',
      'The five questions about contact, subject matter, structure, education and finances narrow a search faster than reading titles.',
      'Career readiness competencies are practices you build, not traits you either have or lack, so a gap is a plan rather than a disqualification.',
      'You have probably already practiced several competencies without having language for it. Describing that experience accurately is a skill in itself.',
      'An interest inventory is one input. Triangulate with at least three sources before researching a career deeply.',
      'Discovering you do not want a career is a successful outcome of exploration, and it is much cheaper now than later.',
    ],
  },
];

// ── Course ───────────────────────────────────────────────────────────────

export const COURSE_2_V2: Course = {
  id: 'hce-2',
  num: 2,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Know Yourself: Interests, Values + Work Style',
  promise: 'Choose careers to research based on the problems you want to work on, not on prestige.',
  about: [
    'A strong career decision considers more than prestige or salary. This course works through interests, values, preferred work environment, tolerance for uncertainty, educational commitment, financial realities, and the kind of problems you want to solve.',
    'It ends with a shortlist of two to four careers and a written reason for each. That shortlist is what Courses 3 through 7 investigate, and what Course 8 turns into a roadmap.',
  ],
  objectives: [
    'Identify personal interests, strengths and values relevant to career exploration.',
    'Distinguish a career preference from a fixed identity.',
    'Compare work environments and role demands.',
    'Select two to four careers for deeper research.',
  ],
  minutes: 52,
  prerequisites: 'Course 1, The Health Professions Ecosystem.',
  whoFor: 'Learners who can name several health careers and now need to narrow the list to a few worth researching.',
  lessons: [
    {
      id: 'hce2-l1',
      title: 'Start with the problem you want to work on',
      summary: 'Five questions that narrow a career search faster than reading job titles.',
      minutes: 13,
      blocks: LESSON_1,
    },
    {
      id: 'hce2-l2',
      title: 'Strengths can be developed',
      summary: 'Why career readiness is built through school, work and service rather than something you either have or do not.',
      minutes: 12,
      blocks: LESSON_2,
    },
    {
      id: 'hce2-l3',
      title: 'Do not overfit one quiz',
      summary: 'Interest inventories prompt reflection. They do not decide a career for you.',
      minutes: 13,
      blocks: LESSON_3,
    },
  ],
  checks: [],
  artifact: {
    id: 'problem-and-shortlist',
    minutes: 14,
    title: 'Your problem statement and career shortlist',
    purpose:
      'The second section of your roadmap. Course 1 produced three career hypotheses; this narrows them to a shortlist you can defend, with a reason for each. Courses 3 through 7 investigate this shortlist, and Course 8 assembles it into your finished roadmap.',
    fields: [
      {
        id: 'problem',
        label: 'The problem I want to work on',
        help: 'One or two sentences, in your own words. Name what goes wrong for people, not the job you think fixes it.',
        placeholder: 'People leave the emergency department with instructions they cannot read or afford to follow.',
        multiline: true,
      },
      {
        id: 'five',
        label: 'Your answers to the five questions',
        help: 'Direct contact or behind the scenes, subject matter you enjoy, structure or flexibility, education you are prepared to commit to now, and your financial reality.',
        multiline: true,
      },
      {
        id: 'shortlist',
        label: 'Shortlist career',
        help: 'Name the career, then say what connects it to your problem statement and which two sources you have checked so far. Two to four total.',
        multiline: true,
        repeat: 3,
        repeatLabel: 'Career',
      },
      {
        id: 'ruledout',
        label: 'Something you ruled out, and why',
        help: 'Ruling a career out is a real result. Record what you learned that changed your mind, so you do not re-research it later.',
        multiline: true,
      },
    ],
  },
  furtherLearning: [
    {
      name: 'National Association of Colleges and Employers, Career Readiness Competencies',
      use: 'The eight competencies, with definitions and sample behaviors for each.',
      url: 'https://www.naceweb.org/career-readiness/competencies/career-readiness-defined',
    },
    {
      name: 'U.S. Department of Labor, O*NET Interest Profiler',
      use: 'Free interest assessment that links results directly to occupational data.',
      url: 'https://www.mynextmove.org/explore/ip',
    },
    {
      name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook',
      use: 'Start here for what an occupation does, entry education, work environment and outlook.',
      url: 'https://www.bls.gov/ooh/',
    },
  ],
};
