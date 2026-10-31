// Community Mental Health Worker Pathway (HRTP), course 7: Prevention.
//
// The second of three courses built around education, prevention, and intervention. This one
// is prevention: the work that protects mental health before a crisis. It covers the three
// levels of prevention, adverse childhood experiences, what protects young people, how to work
// with a young person and the adults who care for them, noticing early, and a worker's duties
// and limits.
//
// It does not copy any outside curriculum. Mental Health First Aid and the ACEs Aware training
// belong to their own organizations. This course names them and says how to find them, so a
// learner can go deeper and earn those certificates directly.
//
// Phone numbers other than 911, 988 and 211 are not printed. Facilitators give local numbers.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

const HCAI = 'California HCAI, CHW/P/R Training Program Best Practices Framework: the 11 core competencies, live practice for relationship skills, and supervised field work.';
const NRC_IOM = 'National Research Council and Institute of Medicine, Preventing Mental, Emotional, and Behavioral Disorders Among Young People: Progress and Possibilities (2009): universal, selective, and indicated prevention.';
const FELITTI = 'Felitti VJ, et al. Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. American Journal of Preventive Medicine 1998;14(4):245-258.';
const CDC_ACE = 'CDC, Prevalence of Adverse Childhood Experiences Among U.S. Adults, BRFSS 2011-2020 (MMWR 2023;72(26)): about 64 percent of adults reported at least one ACE and about 17 percent reported four or more.';
const HUGHES = 'Hughes K, et al. The effect of multiple adverse childhood experiences on health: a systematic review and meta-analysis. Lancet Public Health 2017;2(8):e356-e366.';
const MASTEN = 'Masten AS. Ordinary magic: resilience processes in development. American Psychologist 2001;56(3):227-238: resilience comes from ordinary processes, such as bonds with caring adults.';
const CDC_PKG = 'CDC, Preventing Adverse Childhood Experiences: Leveraging the Best Available Evidence (2019): safe, stable, nurturing relationships and environments, and connecting young people to caring adults and activities.';
const CDC_SUI = 'CDC, Preventing Suicide: A Technical Package of Policy, Programs, and Practices (2017): connectedness, coping and problem-solving skills, and identifying and supporting people at risk.';
const SAMHSA_CONCEPT = 'SAMHSA, Concept of Trauma and Guidance for a Trauma-Informed Approach (2014): safety, trustworthiness, peer support, collaboration, empowerment, and attention to culture.';
const TIP57 = 'SAMHSA, TIP 57, Trauma-Informed Care in Behavioral Health Services (2014).';
const YRBS = 'CDC, Mental Health and Suicide Risk Among High School Students and Protective Factors, Youth Risk Behavior Survey 2023 (MMWR Suppl 2024;73(4)): about 40 percent reported persistent sadness or hopelessness and about 20 percent seriously considered attempting suicide.';
const DAZZI = 'Dazzi T, et al. Does asking about suicide and related behaviours induce suicidal ideation? What is the evidence? Psychological Medicine 2014;44(16):3361-3363: 13 studies, none found an increase.';
const NIMH_STEPS = 'NIMH, 5 Action Steps to Help Someone Having Thoughts of Suicide: ask, keep them safe, be there, help them connect, and follow up.';

export const MH_PREVENTION: Course = {
  id: 'hrtp_mh_prevention',
  num: 7,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Prevention: Protecting Mental Health Before a Crisis',
  promise:
    'Understand how early adversity shapes mental health without labeling anyone by it, build protective relationships with young people and their caregivers, notice early signs, and know what you must do to keep a young person safe.',
  about: [
    'It is easier to protect mental health than to repair it. Prevention is the part of the work that reaches people before a crisis, through relationships, skills, connection, and early attention.',
    'This course covers prevention at three levels, adverse childhood experiences, what protects young people, how to work with a young person and a caregiver, and your duties and limits. It points to outside courses you can take to go further.',
  ],
  objectives: [
    'Describe three levels of prevention and give a community example of each.',
    'Explain what adverse childhood experiences are, what they predict, and what they do not.',
    'Describe the protective factors that help young people and how a worker adds to them.',
    'Open a conversation with a young person and a caregiver with consent, privacy, and choice.',
    'Notice early signs, ask about suicide directly, and know your duties to report and to protect privacy.',
  ],
  minutes: 100,
  prerequisites: 'Complete The Community Health Worker Role, History, and Field first.',
  whoFor:
    'People preparing for community mental health, peer, youth, outreach, or family support work, including people with lived experience.',
  freshness:
    'Reporting rules and local programs change. Your program lead will tell you whether you are a mandated reporter and give you current contacts.',
  requirements: [
    { id: 'lessons', kind: 'assignment', label: 'Finish the six lessons and your practice file', detail: 'About one hour at your own pace, plus the practice file.' },
    { id: 'practice', kind: 'attend', label: 'Facilitated practice: a first conversation with a young person and a caregiver', detail: 'Two hours with a facilitator. Role play, feedback, and a plan for what you will say about privacy. Sessions are listed on this page when scheduled.' },
  ],
  lessons: [
    // ── Lesson 1 ───────────────────────────────────────────────────────────
    {
      id: 'mhp-l1',
      title: 'Three levels of prevention',
      summary: 'Reaching everyone, people at higher risk, and people with early signs.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'Most mental health services start after a person is already in trouble. Prevention starts earlier, and a community worker is well placed to do it because you are already where people live, learn, and gather.',
        ] },
        { kind: 'concept', title: 'Why start early', text: [
          'Many mental health conditions begin in childhood and the teen years. A national review reports that about half begin by age 14 and about three quarters by age 24. What happens early matters, and so do the people around a young person.',
        ] },
        { kind: 'list', title: 'The three levels', items: [
          'Universal prevention reaches everyone in a group, such as a school talk, a community event, or a session on stress for all parents at a center.',
          'Selective prevention reaches people at higher risk, such as young people in unstable housing, families with a parent leaving custody, or people who have lost someone.',
          'Indicated prevention reaches people who already show early signs, such as a teen who has pulled away from friends and stopped sleeping, before a diagnosis or a crisis.',
        ] },
        { kind: 'concept', title: 'What works across all three', text: [
          'National suicide prevention guidance names strategies that apply widely: strengthen connection to family, peers, and community, teach coping and problem-solving skills, create safer environments, and find and support people at risk early. These are things a worker can do.',
        ] },
        { kind: 'case', title: 'Sorting examples', scenario: true, text: [
          'A worker runs a 20-minute talk on stress at a school night. Another meets weekly with young people who have recently moved into a shelter. A third checks in with a 15-year-old who stopped eating lunch with friends and seems to be sleeping badly. Which is universal, selective, and indicated?',
          'Answer: The school talk is universal. The shelter group is selective. The check-in is indicated.',
        ] },
        { kind: 'check', check: {
          id: 'mhp-l1-q1',
          q: 'A weekly group for young people who have recently entered foster care is an example of which level?',
          options: ['Universal prevention', 'Selective prevention', 'Indicated prevention', 'Treatment'],
          answer: 1,
          rationale: 'It reaches a group at higher risk. Universal reaches everyone. Indicated reaches people who already show early signs.',
          distractors: 'Universal is for everyone, indicated is for early signs, and treatment is for a diagnosed condition.',
        } },
        { kind: 'takeaways', items: [
          'Prevention works at three levels: everyone, people at higher risk, and people with early signs.',
          'Connection, skills, safer surroundings, and early support work across all three.',
        ] },
        ev([NRC_IOM, CDC_SUI, HCAI]),
      ],
    },
    // ── Lesson 2 ───────────────────────────────────────────────────────────
    {
      id: 'mhp-l2',
      title: 'Adverse childhood experiences',
      summary: 'What ACEs are, how common they are, and what the research does and does not say.',
      minutes: 11,
      blocks: [
        { kind: 'why', text: [
          'Many of the people you serve carry things that happened to them as children. Knowing the research helps you listen without judging and without putting a label on anyone.',
        ] },
        { kind: 'concept', title: 'The original study', text: [
          'In the 1990s, researchers asked thousands of adults in one health plan about childhood adversity: kinds of abuse and neglect, and household problems such as a parent with mental illness or substance use, violence at home, or a family member in prison. The more kinds of adversity a person reported, the higher their risk of later health problems.',
        ] },
        { kind: 'concept', title: 'How common it is', text: [
          'A CDC analysis of survey data from 2011 to 2020 found that about 64 percent of U.S. adults reported at least one adverse childhood experience, and about 17 percent reported four or more. If you work with enough people, you will work with many who have had them.',
        ] },
        { kind: 'concept', title: 'What the research says about risk', text: [
          'A review that pooled 37 studies found that people with four or more ACEs had higher risk than people with none for many health outcomes, with the strongest links to problem drug use and violence. These are risks across large groups. They are not predictions about one person.',
        ] },
        { kind: 'myths', items: [
          { myth: 'A high ACE number tells you what will happen to a person.', reality: 'It describes risk across large groups. Many people with high numbers do well, and some with low numbers struggle.' },
          { myth: 'ACEs are only about abuse.', reality: 'Neglect and household problems such as violence or a parent\'s incarceration count too.' },
          { myth: 'Helping means getting the full story of what happened.', reality: 'You ask what the person needs now. You do not ask for details of what happened unless the person chooses to share.' },
        ] },
        { kind: 'check', check: {
          id: 'mhp-l2-q1',
          q: 'A teenager tells you about several hard things that happened at home. What does that tell you about what will happen to him?',
          options: [
            'He will have mental health problems as an adult',
            'He is at higher risk across groups, and the right support can make a difference',
            'His story is probably exaggerated',
            'Nothing, because the past does not matter',
          ],
          answer: 1,
          rationale: 'The research describes risk in groups. Support and protective relationships change outcomes for the person.',
          distractors: 'Predicting his future or dismissing his story both fail him. The past matters, and it is not destiny.',
        } },
        { kind: 'takeaways', items: [
          'ACEs are common: about two in three adults report at least one.',
          'They raise risk across groups. They do not predict one person.',
          'You ask what a person needs now, not for the full story.',
        ] },
        ev([FELITTI, CDC_ACE, HUGHES]),
      ],
    },
    // ── Lesson 3 ───────────────────────────────────────────────────────────
    {
      id: 'mhp-l3',
      title: 'What protects young people',
      summary: 'Resilience is built from ordinary things, and a worker can be one of them.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'Hard experiences are common, and most young people recover with the right people around them. The research on resilience points to ordinary things, and you can supply several.',
        ] },
        { kind: 'concept', title: 'Ordinary protection', text: [
          'Resilience is not a special trait. A body of research on children who do well despite hardship points to ordinary supports: a strong bond with at least one caring adult, skills to solve problems and manage feelings, connection to school and community, and a sense of being able to act on their own life.',
        ] },
        { kind: 'concept', title: 'What national guidance recommends', text: [
          'CDC guidance on preventing adverse childhood experiences centers on safe, stable, nurturing relationships and environments. Its strategies include connecting young people to caring adults and activities, teaching skills, and strengthening economic supports for families.',
        ] },
        { kind: 'list', title: 'What you can add', items: [
          'Be steady. Show up when you say you will, and say so if you cannot.',
          'Connect the young person to something they care about: a mentor, a team, art, work, or a school support.',
          'Support the caregiver. A worn-out adult cannot protect well. Help with a concrete need such as food, a form, or a ride.',
          'Teach one skill at a time, such as naming a feeling, taking a break, or asking for help.',
          'Believe them and take what they say seriously.',
        ] },
        { kind: 'case', title: 'A teen and his aunt', scenario: true, text: [
          'Marcus is 15. Since his father was jailed he has stopped going to school. His aunt, who is raising him, is exhausted. What could you do?',
          'Answer: Build a relationship with Marcus first. Ask what he likes. Help his aunt with the school meeting and any benefits she needs, so she has more room to be there for him. Offer to connect him to a counselor or a mentor if he wants, and follow up.',
        ] },
        { kind: 'check', check: {
          id: 'mhp-l3-q1',
          q: 'Which best describes a worker\'s contribution to a young person\'s resilience?',
          options: [
            'Fixing the young person\'s problems for them',
            'Being a steady, caring adult and connecting them and their family to supports',
            'Asking them to describe everything that happened',
            'Telling them to stay positive',
          ],
          answer: 1,
          rationale: 'Steady relationships and connection to supports are what the research points to. Fixing, probing, and cheerleading do not build them.',
          distractors: 'Taking over removes their say, probing can hurt, and urging positivity can feel like dismissal.',
        } },
        { kind: 'takeaways', items: [
          'Resilience comes from ordinary supports, especially a caring adult.',
          'Support the caregiver as well as the young person.',
        ] },
        ev([MASTEN, CDC_PKG, CDC_SUI]),
      ],
    },
    // ── Lesson 4 ───────────────────────────────────────────────────────────
    {
      id: 'mhp-l4',
      title: 'A first conversation with a young person and a caregiver',
      summary: 'Consent, privacy, choice, and treating behavior as a message.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'With a young person you work with two people at once: the young person and the adults who care for them. Both need to trust you, and you cannot trade one trust for the other.',
        ] },
        { kind: 'concept', title: 'Consent, privacy, and who is in the room', text: [
          'Rules on consent for minors depend on age and on the service. California allows some older minors to consent to some mental health services. Your program has rules for how it applies them. Ask your supervisor before you start, and do not guess.',
          'Tell the young person plainly, in the first minutes, what you keep private and what you must share, such as a risk to their safety. Never promise to keep a secret.',
        ] },
        { kind: 'concept', title: 'Trauma-informed with young people', text: [
          'The same principles apply as with adults: safety, trustworthiness, choice, collaboration, and empowerment. In practice, explain what will happen before it does, give choices, do not press for the story, and watch for signs of overload.',
        ] },
        { kind: 'concept', title: 'Behavior as a message', text: [
          'Anger, silence, jokes, refusing to talk, and missing school can all be ways of coping. Instead of asking what is wrong with a young person, ask what happened or what they need. This shift keeps the door open.',
        ] },
        { kind: 'steps', title: 'A first conversation', items: [
          { label: 'Greet and explain', text: 'Say who you are and what you do and do not do.' },
          { label: 'Say what you keep private', text: 'And what you must share. Check that they understand.' },
          { label: 'Ask what they would like to talk about', text: 'Offer a choice, including not talking yet.' },
          { label: 'Listen', text: 'Use open questions and reflect back what you hear.' },
          { label: 'Talk with the caregiver', text: 'Ask what they have noticed and what they need.' },
          { label: 'Agree one small next step', text: 'Something the young person chooses and can do.' },
        ] },
        { kind: 'tryit', title: 'Say it', text: [
          'Write two sentences you would say to a 14-year-old about what you keep private and what you must share. Read them aloud to a partner. Does the young person know what to expect?',
        ] },
        { kind: 'check', check: {
          id: 'mhp-l4-q1',
          q: 'Before a young person tells you anything private, what should you do?',
          options: [
            'Promise to keep everything secret so they feel safe',
            'Tell them plainly what you keep private and what you must share',
            'Ask the caregiver to leave and begin right away',
            'Ask them to start with the hardest thing that happened',
          ],
          answer: 1,
          rationale: 'Honesty about limits builds trust. A promise of secrecy you cannot keep breaks it.',
          distractors: 'Promising secrecy cannot be kept if safety is at risk, and pressing for the hardest thing can overwhelm them.',
        } },
        { kind: 'takeaways', items: [
          'Ask your supervisor how consent works for minors in your program.',
          'Say what you keep private and what you must share, early.',
          'Treat behavior as a message. Ask what happened, not what is wrong.',
        ] },
        ev([SAMHSA_CONCEPT, TIP57, HCAI]),
      ],
    },
    // ── Lesson 5 ───────────────────────────────────────────────────────────
    {
      id: 'mhp-l5',
      title: 'Noticing early and asking directly',
      summary: 'Early signs, how common distress is among young people, and how to ask about suicide.',
      minutes: 11,
      blocks: [
        { kind: 'why', text: [
          'Most young people who go through hard times will not need a crisis response. Some will, and you are often the adult who notices first.',
        ] },
        { kind: 'concept', title: 'How common distress is', text: [
          'In a 2023 national survey of high school students, about 40 percent reported persistent feelings of sadness or hopelessness in the past year and about 20 percent seriously considered attempting suicide. Distress is common enough that you will meet young people who have thought about suicide.',
        ] },
        { kind: 'list', title: 'Early signs to notice', items: [
          'Changes in sleep or eating.',
          'Pulling away from friends and things they used to enjoy.',
          'A drop in school or work.',
          'More irritability, anger, or tearfulness.',
          'More alcohol or drug use, or taking risks.',
          'Giving things away, or talking about being a burden or wanting to die.',
        ] },
        { kind: 'concept', title: 'Ask directly', text: [
          'Asking about suicide does not put the idea in someone\'s head. A review of studies found no increase in suicidal thoughts after people were asked, and some evidence that talking about it can bring relief.',
          'Ask in plain words: \'Are you thinking about suicide?\' Avoid questions that tell the person what answer you want, such as \'You are not thinking of doing something silly, are you?\'',
        ] },
        { kind: 'concept', title: 'If the answer is yes', text: [
          'Stay with them, listen, and do not leave them alone if they are in immediate danger. Call 988, by phone or text, or 911 for immediate danger, and tell your supervisor right away. The next course teaches these steps in detail and you will practice them with a facilitator.',
        ] },
        { kind: 'check', check: {
          id: 'mhp-l5-q1',
          q: 'A 16-year-old says, \'Sometimes I think everyone would be better off without me.\' What do you do first?',
          options: [
            'Change the subject to something lighter',
            'Tell her she has so much to live for',
            'Stay with her, listen, and ask directly whether she is thinking about suicide',
            'Wait to see whether it comes up again',
          ],
          answer: 2,
          rationale: 'Asking directly and listening is what the research supports. It does not raise risk.',
          distractors: 'Changing the subject or waiting leaves her alone with it, and reassurance can sound like dismissal.',
        } },
        { kind: 'takeaways', items: [
          'Distress is common among young people. Notice early signs.',
          'Ask directly about suicide. Asking does not raise the risk.',
          'If yes, stay, call 988 or 911, and tell your supervisor.',
        ] },
        ev([YRBS, DAZZI, NIMH_STEPS]),
      ],
    },
    // ── Lesson 6 ───────────────────────────────────────────────────────────
    {
      id: 'mhp-l6',
      title: 'Your duties, your limits, and going deeper',
      summary: 'Reporting, privacy, referral, and courses from other organizations you can take next.',
      minutes: 8,
      blocks: [
        { kind: 'why', text: [
          'Working with young people carries legal and ethical duties. You do not carry them alone, and knowing them in advance is part of being safe for the young person.',
        ] },
        { kind: 'concept', title: 'Reporting', text: [
          'Many people who work with children are required by California law to report a reasonable suspicion of child abuse or neglect. Whether your job makes you one depends on your role and your employer. Ask your supervisor before you start. If you are told you are a mandated reporter, the State\'s Office of Child Abuse Prevention offers general training at mandatedreporterca.com.',
        ] },
        { kind: 'list', title: 'If a young person tells you about harm', items: [
          'Stay calm, listen, and thank them for telling you.',
          'Do not investigate or ask leading questions.',
          'Do not promise to keep it secret.',
          'Tell your supervisor right away and follow your program\'s reporting steps.',
          'Write down their words and the time, as soon as you can.',
        ] },
        { kind: 'concept', title: 'Your limits', text: [
          'You are not a therapist and you do not assess or treat. You build trust, you notice, and you connect. Your supervisor knows which providers take referrals for young people in your area.',
        ] },
        { kind: 'list', title: 'Going deeper: courses from other organizations', items: [
          'Youth Mental Health First Aid, from the National Council for Mental Wellbeing, is for adults who work with young people ages 12 to 18. Find a course near you with the course locator at mentalhealthfirstaid.org. Courses are taught by certified instructors, usually run about eight hours, and the certificate is renewed after three years. Confirm current dates and requirements with the provider.',
          'Becoming ACEs Aware in California, the core training from the California Surgeon General\'s ACEs Aware initiative, at acesaware.org. The site says it is open to anyone. Check the site for the current training.',
          'California mandated reporter general training, at mandatedreporterca.com, if your program tells you to take it.',
          'Ask your program lead which to take first. This course teaches its own material. It does not replace these courses or their certificates.',
        ] },
        { kind: 'check', check: {
          id: 'mhp-l6-q1',
          q: 'Which statement about mandated reporting is accurate?',
          options: [
            'Every community worker is a mandated reporter in every setting',
            'Whether your role makes you a mandated reporter depends on your job, so you ask your supervisor before you start',
            'Only doctors can be mandated reporters',
            'You should decide yourself whether a report is needed',
          ],
          answer: 1,
          rationale: 'It depends on the role and employer. You ask in advance and follow your program\'s steps, and you do not decide alone.',
          distractors: 'The duty is not universal and not limited to doctors, and the decision to report is not yours to make alone.',
        } },
        { kind: 'takeaways', items: [
          'Ask your supervisor in advance whether you are a mandated reporter.',
          'Never promise secrecy. Tell your supervisor and write it down.',
          'Youth Mental Health First Aid and ACEs Aware training are next steps you can take.',
        ] },
        ev(['California Department of Social Services, Office of Child Abuse Prevention: California mandated reporter general training at mandatedreporterca.com.',
          'U.S. Department of Health and Human Services, Child Welfare Information Gateway: Mandatory Reporting of Child Abuse and Neglect, California.',
          HCAI]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'mhp-practice',
    title: 'Your prevention practice file',
    minutes: 40,
    purpose: 'Practice for a made-up young person and caregiver. You bring it to the facilitated practice and keep it for interviews.',
    fields: [
      { id: 'levels', label: 'Three levels, three examples', help: 'Write one example of universal, selective, and indicated prevention that you could do in your community.', multiline: true },
      { id: 'protect', label: 'A protection plan', help: 'For a made-up 15-year-old, list three protective supports you could help build and one thing you could do for the caregiver.', multiline: true },
      { id: 'privacy', label: 'Your privacy statement', help: 'Two sentences for a 14-year-old about what you keep private and what you must share.', multiline: true },
      { id: 'ask', label: 'How you would ask', help: 'Write the exact words you would use to ask a young person about suicide, and what you would do if the answer were yes.', multiline: true },
      { id: 'deeper', label: 'Your next course', help: 'Which outside course you will take first, and who you will ask about it.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'National Council for Mental Wellbeing: Youth Mental Health First Aid', use: 'A course from another organization for adults who work with young people ages 12 to 18. Find a course with the course locator. This course does not replace it.', url: 'https://www.mentalhealthfirstaid.org' },
    { name: 'California Surgeon General: ACEs Aware', use: 'The Becoming ACEs Aware in California core training, and resources on adverse childhood experiences.', url: 'https://www.acesaware.org' },
    { name: 'California Office of Child Abuse Prevention: Mandated Reporter Training', use: 'The State general training for mandated reporters.', url: 'https://mandatedreporterca.com' },
    { name: 'CDC: Preventing Adverse Childhood Experiences', use: 'Strategies to prevent ACEs and support young people and families.', url: 'https://www.cdc.gov/aces/' },
    { name: 'NIMH: Child and Adolescent Mental Health', use: 'Plain-language information on signs and help.', url: 'https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988 any time.', url: 'https://988lifeline.org' },
  ],
};
