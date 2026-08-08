// STEM Collaborative — youth medical STEM camp.
//
// Derived from HMC's delivered STEM Collaborative program (Copyright Health
// Matters Clinic). Encoded as a REUSABLE CURRICULUM TEMPLATE, not a record of
// one delivery. Dates, sites, field trips and named partners from any single
// run are deliberately excluded: they change every time and belong on the
// scheduled session, not in the curriculum.
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
import type { Block } from './blocks';

export interface CampWeek {
  week: number;
  /** A classic STEM subject paired with a health or health-technology subject. */
  subjects: string;
  /** The hands-on activity topics students actually do that week. */
  activities: string[];
  /** What the week is teaching underneath the activities. */
  focus: string;
}

/**
 * The six-week curriculum template.
 *
 * This is the reusable design, not a record of one delivery. It carries no
 * dates, no site and no field trips, because those change every time the camp
 * runs. What repeats is the sequence and the pairing.
 *
 * The pairing is the whole idea: each week couples a classic STEM subject with
 * a health or health-technology subject, so students meet the science and its
 * health application together rather than in separate units. The sequence also
 * builds, moving from observable chemistry through body systems and diagnostics
 * to design and invention, and closing on careers.
 */
export const CAMP_WEEKS: CampWeek[] = [
  {
    week: 1,
    subjects: 'Chemistry and Computing',
    activities: ['Things that Bubble and Fizz', 'Principles of Examination'],
    focus: 'Start with reactions students can see, and introduce how a clinician examines and records what they observe.',
  },
  {
    week: 2,
    subjects: 'Biology and Health Information Technology',
    activities: ['Things that Crawl and Grow', 'The Human Body Systems'],
    focus: 'Living things and growth, paired with how health information about a body gets captured and used.',
  },
  {
    week: 3,
    subjects: 'Physics and Internet of Medical Things',
    activities: ['Things that Fly and Roll', 'The Human Body Systems'],
    focus: 'Forces and motion, paired with the connected devices that measure a body.',
  },
  {
    week: 4,
    subjects: 'Electricity, Magnetism and Engineering',
    activities: ['Things that Stick and Zap', 'Diagnosing Diseases'],
    focus: 'Energy and circuits, paired with how a diagnosis is actually reached.',
  },
  {
    week: 5,
    subjects: 'Space, Science, Water and Product Design',
    activities: ['Things that Shake and Flow', 'Water and Electrolytes'],
    focus: 'Fluids and systems, paired with designing something a person would really use.',
  },
  {
    week: 6,
    subjects: 'Innovation, Inventions and Web 3.0',
    activities: ['Makerspace', 'Careers in Medicine and Technology'],
    focus: 'Students build their own thing and meet the people whose jobs this could become.',
  },
];

/**
 * Elements that repeat every time the camp runs, independent of location.
 * Anything site-specific belongs on the scheduled session, not here.
 */
export const CAMP_TEMPLATE = {
  weeks: 6,
  daysPerWeek: 5,
  dailyHours: '8:00 AM to 4:00 PM',
  grades: '5 through 8',
  targetEnrollment: 50,
  dailyBlocks: [
    'Morning STEM instruction with the week\'s hands-on kit',
    'Afternoon athletic and character-building block, reflecting the whole-person approach',
  ],
  /** The culminating event. Repeatable and worth keeping in any delivery. */
  capstone:
    'A public Family STEM and Health Expo in the final week, where students, teachers and mentors present their demos to families and the community.',
  /** Roles to fill locally each time, rather than fixed partner names. */
  instructionModel: [
    'Health professionals and engineers who reflect the community being served',
    'A site partner providing space, recruitment and daily operations',
    'A university or STEM partner supporting science and mathematics instruction',
    'Community members administering the athletic and character-building block',
  ],
} as const;

/**
 * Week 1 as WRITTEN instruction, at CA middle-school reading level.
 *
 * HMC does not have the tooling to produce physical kits, so the hands-on weeks
 * are delivered as written guided lessons instead. Activities here use nothing
 * beyond what a classroom already has: paper, pencil, observation and
 * conversation.
 *
 * Reading-level rules applied throughout: short sentences, one idea per
 * sentence, concrete before abstract, every technical term defined in plain
 * words the first time it appears, and questions the student can actually
 * answer from what they just read.
 */
const WEEK1_BLOCKS: Block[] = [
  {
    kind: 'why',
    text: [
      'Every time you open a soda, bake a cake, or watch a cut stop bleeding, a chemical reaction is happening. Doctors and nurses use reactions too. A test that changes color to show whether you have an infection is a chemical reaction doing a job.',
      'This week you will learn how to tell when a reaction is happening, and how a health professional uses careful observation to figure out what is going on with a patient.',
    ],
  },
  {
    kind: 'vocab',
    items: [
      { term: 'Matter', plain: 'Anything that takes up space and has weight. You, your desk, and the air are all matter.' },
      { term: 'Chemical reaction', plain: 'When substances mix and turn into something new and different.' },
      { term: 'Gas', plain: 'A form of matter that spreads out to fill its container. Air is a gas.' },
      { term: 'Observation', plain: 'Something you notice using your senses, like what you see, hear, or smell.' },
      { term: 'Evidence', plain: 'Information you collect that helps you decide whether an idea is true.' },
    ],
  },
  {
    kind: 'concept',
    title: 'How to tell a reaction happened',
    text: [
      'Mixing is not the same as reacting. If you stir sand into water, you still have sand and water. Nothing new was made. You could dry the water off and get your sand back.',
      'A chemical reaction is different. Something new gets made, and you usually cannot get the old stuff back easily.',
      'Scientists look for signs. Bubbles forming when no one is blowing air. A color change that will not wash out. Heat or cold you can feel. A new smell. A solid appearing in a clear liquid.',
      'One sign alone is not proof. Bubbles could just be air escaping. Scientists look for more than one sign, and they think about what else could explain it.',
    ],
  },
  {
    kind: 'example',
    title: 'Worked example: bubbles and fizz',
    text: [
      'Put baking soda in vinegar and it foams. Where does the foam come from?',
      'The baking soda and the vinegar react and make a gas called carbon dioxide. The gas has to go somewhere, so it pushes up through the liquid as bubbles. That is the fizz.',
      'How do you know it is a real reaction and not just air? Two clues. The bubbles keep coming after you stop stirring, so something is still making them. And when it finishes, what is left does not smell or behave like the vinegar you started with.',
      'The same gas is why bread rises and why a soda goes flat once the bubbles escape.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w1-c1',
      q: 'You stir sugar into warm water and it disappears. Is this a chemical reaction?',
      options: [
        'Yes, because the sugar disappeared',
        'No, because the sugar is still sugar, just spread out in the water',
        'Yes, because the water got sweeter',
        'There is no way to tell',
      ],
      answer: 1,
      rationale:
        'Nothing new was made. The sugar broke into pieces too small to see, but it is still sugar. If you let the water dry up, the sugar would be left behind. That is mixing, not reacting.',
      distractors:
        'Disappearing and tasting different feel like big changes, but neither one means a new substance was made.',
    },
  },
  {
    kind: 'concept',
    title: 'From noticing to knowing',
    text: [
      'Health professionals start the same way a scientist does. They observe carefully before they decide anything.',
      'When a nurse or doctor examines someone, they are collecting evidence. They look at skin color and breathing. They listen to the heart and lungs. They feel for swelling or warmth. They ask questions about what changed and when it started.',
      'None of those observations alone tells the whole story. A fast heartbeat could mean fear, exercise, fever, or something else. The professional puts observations together and looks for a pattern that explains all of them.',
      'That is the same thinking you used with the bubbles. One clue is interesting. A pattern of clues is evidence.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'Why this matters in your community',
    text: [
      'Careful observation is why some health problems get caught early and others do not. A person who notices a change and describes it clearly gives their doctor much better information to work with.',
      'You can do this for yourself and your family. Noticing what changed, and when, is real medical information.',
    ],
  },
  {
    kind: 'activity',
    title: 'Try it: be the observer',
    materials: 'Paper and pencil only.',
    text: [
      'Pick something in the room you can watch for two minutes. A window, a plant, a clock, or people walking by.',
      'Write down five things you actually observe. Only what you can see, hear, or smell. Not what you think it means.',
      'Now write one thing you can conclude from your observations, and one other explanation that would also fit.',
      'Scientists and clinicians do this constantly. Separating what you observed from what you concluded is the skill.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w1-c2',
      q: 'Which of these is an observation, not a conclusion?',
      options: [
        'She has a cold',
        'He is nervous about the test',
        'Her voice sounds hoarse and she coughed four times',
        'The medicine is working',
      ],
      answer: 2,
      rationale:
        'Hoarse voice and four coughs are things you can actually see and hear. The others are explanations someone came up with about what those observations mean.',
      distractors:
        'A cold, nervousness, and medicine working are all reasonable guesses. But they are conclusions, and a different explanation might fit the same observations.',
    },
  },
  {
    kind: 'reflect',
    title: 'Before you finish',
    prompts: [
      'What is one sign that a chemical reaction is happening?',
      'What is the difference between an observation and a conclusion?',
      'Name one job where noticing small changes really matters.',
    ],
  },
  {
    kind: 'takeaways',
    items: [
      'Mixing spreads things out. Reacting makes something new.',
      'Bubbles, color change, heat, and new smells are signs of a reaction, but one sign alone is not proof.',
      'An observation is what you notice. A conclusion is what you think it means. They are not the same.',
      'Health professionals collect observations and look for a pattern before deciding anything.',
    ],
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
    'A six-week medical STEM camp for grades 5 through 8, built around hands-on kits and taught by health professionals and engineers who reflect the community being served. It is designed to be run again at a new site with a new cohort.',
    'Each week pairs a classic STEM subject with a health or health-technology subject, so students meet the science and its health application together rather than in separate units. The sequence builds from observable chemistry through body systems and diagnostics to design and invention, and closes on careers.',
    'Five days a week, mornings on the week\'s STEM kit and afternoons on athletics and character building, reflecting the whole-person approach. The final week culminates in a public Family STEM and Health Expo where students present their own demos.',
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
      detail: 'Each week is built around specific hands-on kits. Confirm availability and current suppliers before the week begins.',
    },
    {
      id: 'instructors',
      kind: 'attend',
      label: 'Secure the site and instructors for this run',
      detail: 'Each delivery needs a site partner, health professionals and engineers from the community being served, and community members for the athletics block.',
    },
    {
      id: 'deliver',
      kind: 'practicum',
      label: 'Deliver the weekly sessions',
      detail: 'Five days a week for six weeks, including the daily athletic and character-building block, closing with the public expo.',
    },
  ],
  readingLevel: 'middle-school',
  sessions: [],
  lessons: [
    {
      id: 'stem-w1',
      title: 'Week 1: Chemistry and Computing',
      summary:
        'How to tell when a chemical reaction is happening, and how health professionals use careful observation to figure out what is going on.',
      minutes: 45,
      blocks: WEEK1_BLOCKS,
    },
  ],
  checks: [],
};
