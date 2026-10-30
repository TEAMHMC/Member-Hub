// Community Mental Health Worker Pathway (HRTP), course 6: Mental Health Education.
//
// One of three courses built around what a community mental health worker does: educate,
// prevent, and intervene. This one is education. It teaches what people in the community need
// to know about mental health, how to talk about it without stigma, and how to plan and lead a
// short session. It points to HMC's own Community Mental Health Worker and Facilitator Training
// for the full preparation to lead workshops, and does not repeat it.
//
// Nothing here teaches diagnosis or treatment. Where a lesson touches medication, the rule is
// stated plainly: a worker never tells anyone to start, stop, or change one.
//
// Phone numbers other than 911, 988 and 211 are not printed. Facilitators give local numbers.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

const HCAI = 'California HCAI, CHW/P/R Training Program Best Practices Framework: the 11 core competencies, live practice for relationship skills, and supervised field work.';
const JORM = 'Jorm AF. Mental health literacy: empowering the community to take action for better mental health. American Psychologist 2012;67(3):231-243: knowing how to prevent problems, recognize when one is developing, and find help.';
const CORRIGAN = 'Corrigan PW, et al. Challenging the public stigma of mental illness: a meta-analysis of outcome studies. Psychiatric Services 2012;63(10):963-973: education and contact both reduced stigma.';
const TIP57 = 'SAMHSA, TIP 57, Trauma-Informed Care in Behavioral Health Services (2014): safety, trustworthiness, and choice in every contact.';
const NIDA = 'NIDA, Words Matter: Terms to Use and Avoid When Talking About Addiction.';
const RECOVERY = 'SAMHSA, Working Definition of Recovery (2012): a process of change in which people improve their health and wellness, live self-directed lives, and work toward their full potential, across health, home, purpose, and community.';

export const MH_EDUCATION: Course = {
  id: 'hrtp_mh_education',
  num: 6,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Mental Health Education: Sharing What You Know',
  promise:
    'Explain mental health, recovery, and common conditions in plain words without stigma, and plan and lead a short community session that leaves people knowing what to do and where to go.',
  about: [
    'Most people never learn what mental health problems look like, what helps, or where to turn. A community mental health worker closes that gap one conversation or session at a time.',
    'This course is the education part of the work. It teaches what to share, how to say it without stigma, and how to run a short session. Preparation to lead full workshops is in the Community Mental Health Worker and Facilitator Training in the Academy.',
  ],
  objectives: [
    'Describe mental health as a range, name common conditions and their signs, and say why you do not diagnose.',
    'Explain recovery and what helps, including what a worker does and what belongs to a clinician.',
    'Use language that lowers stigma and respects the person.',
    'Plan a 20-minute community session with one clear message and a way for people to take part.',
    'Lead the session, handle a hard moment in the room, and get feedback.',
  ],
  minutes: 109,
  prerequisites: 'Complete The Community Health Worker Role, History, and Field first.',
  whoFor:
    'People preparing for community mental health, peer, outreach, or health education work, including people with lived experience.',
  freshness:
    'Resources and programs change. Your program lead will give you current local contacts and which groups you may speak to.',
  requirements: [
    { id: 'lessons', kind: 'assignment', label: 'Finish the five lessons and your session plan', detail: 'About an hour at your own pace, plus the plan.' },
    { id: 'practice', kind: 'attend', label: 'Facilitated practice: lead a ten-minute segment', detail: 'Two hours with a facilitator. You lead a short segment, get feedback from the facilitator and your peers, and try again. Sessions are listed on this page when scheduled.' },
    { id: 'facilitator', kind: 'assignment', label: 'Complete the Community Mental Health Worker and Facilitator Training', detail: 'Both parts and the homework, in the Unstoppable Facilitator Training pathway in the Academy. Your program lead signs off before you lead a session on your own.' },
  ],
  lessons: [
    // ── Lesson 1 ───────────────────────────────────────────────────────────
    {
      id: 'mhe-l1',
      title: 'What mental health is and what common conditions look like',
      summary: 'A range, not a switch. Common conditions, their signs, and why you do not diagnose.',
      minutes: 14,
      blocks: [
        { kind: 'why', text: [
          'People often wait years to ask for help because they do not know what they are looking at. When you can say, in plain words, what common mental health problems look like and that help exists, you make the first step easier for them.',
        ] },
        { kind: 'concept', title: 'A range, not a switch', text: [
          'Everyone has mental health, the way everyone has physical health. It moves along a range. Some weeks a person copes well. In others, stress, loss, or illness pushes them toward distress. A mental health condition is when symptoms last, get in the way of daily life, and cause real suffering.',
          'It is common. The National Institute of Mental Health reports that an estimated 23.1 percent of U.S. adults, nearly one in four, had a mental illness in 2022. Most of the people you speak with will know someone affected, and many will be affected themselves.',
        ] },
        { kind: 'concept', title: 'The whole person', text: [
          'Mental health is shaped by the body, by thoughts and feelings, and by the world around a person: relationships, housing, money, safety, and culture. This is called the biopsychosocial view. It matters in your work because the cause is rarely one thing, and help is rarely one thing either. A person who cannot sleep because they have no safe place to stay needs more than advice about sleep.',
        ] },
        { kind: 'list', title: 'Common conditions and what you might notice', items: [
          'Depression: a low or empty mood, loss of interest, changes in sleep or appetite, tiredness, feeling worthless, thoughts of death.',
          'Anxiety: constant worry, restlessness, a racing heart, avoiding places or people, panic that comes on fast.',
          'Trauma-related stress: being jumpy, nightmares, flashbacks, numbness, avoiding reminders.',
          'Psychosis: hearing or seeing things others do not, or strong beliefs that do not match what others see. A person may be frightened by it.',
          'Substance use problems: using more than planned, being unable to cut down, problems at home or work because of use.',
        ] },
        { kind: 'concept', title: 'When two or more happen together', text: [
          'Mental health conditions and substance use often occur together. National guidance says that treating both at the same time works better than treating one and ignoring the other. For you, this means never treating substance use as a separate problem to fix first.',
        ] },
        { kind: 'concept', title: 'Why you do not diagnose', text: [
          'Signs overlap. Poor sleep and low mood can be depression, grief, a medical problem, or the effect of a substance. A licensed clinician looks at the whole picture. You describe what you see in plain words, with the person, and you help them reach someone who can assess.',
        ] },
        { kind: 'check', check: {
          id: 'mhe-l1-q1',
          q: 'A man tells you he has not slept well for weeks, has lost interest in things, and feels worthless. What do you do?',
          options: [
            'Tell him he has depression',
            'Tell him it will pass and he should rest',
            'Listen, say what you have noticed, and help him reach a clinician who can assess',
            'Suggest a medication that helped someone you know',
          ],
          answer: 2,
          rationale: 'You describe what you see and connect him to someone who can assess. Diagnosing and advising on medication belong to clinicians.',
          distractors: 'Naming a diagnosis or a medication goes beyond your role, and telling him it will pass dismisses what he said.',
        } },
        { kind: 'takeaways', items: [
          'Mental health is a range, and conditions are common.',
          'The cause and the help are usually more than one thing: body, mind, and surroundings.',
          'You describe what you see. A clinician assesses.',
        ] },
        ev([JORM,
          'Engel GL. The need for a new medical model: a challenge for biomedicine. Science 1977;196(4286):129-136: illness is shaped by biological, psychological, and social factors together.',
          'SAMHSA, TIP 42, Substance Use Disorder Treatment for People With Co-Occurring Disorders (2020): integrated care is the preferred model when mental health and substance use conditions occur together.',
          'NIMH, Mental Illness statistics: an estimated 23.1 percent of U.S. adults had any mental illness in 2022.']),
      ],
    },
    // ── Lesson 2 ───────────────────────────────────────────────────────────
    {
      id: 'mhe-l2',
      title: 'Recovery and what helps',
      summary: 'What recovery means, what treatment and support look like, and where a worker fits.',
      minutes: 13,
      blocks: [
        { kind: 'why', text: [
          'Many people believe a mental health condition means a ruined life. The research says otherwise. Knowing what recovery looks like lets you offer hope that is honest, not forced.',
        ] },
        { kind: 'concept', title: 'What recovery means', text: [
          'The national definition of recovery is a process of change in which people improve their health and wellness, live self-directed lives, and work toward their full potential. It does not mean symptoms are gone. A person can be in recovery and still have hard days.',
        ] },
        { kind: 'list', title: 'Four parts of a life in recovery', items: [
          'Health: managing symptoms and making healthy choices for body and mind.',
          'Home: a stable, safe place to live.',
          'Purpose: meaningful daily activity such as work, school, caring for family, volunteering, or creative work.',
          'Community: relationships that give support, friendship, and hope.',
        ] },
        { kind: 'concept', title: 'What helps', text: [
          'Talking therapies and medication help many people, and a clinician decides on them with the person. Support from people who have been through similar things also helps, and so does steady help with housing, income, and connection. Good care often combines these.',
          'Trained community workers can deliver real help too. In a large trial in Zimbabwe, supervised lay health workers gave a short course of talking support at clinics, and people who got it had less depression and anxiety at six months than those who got usual care. Training and supervision made the difference.',
        ] },
        { kind: 'concept', title: 'Where you fit, and where you stop', text: [
          'You build trust, share what you know, help a person name goals, connect them to care, and stay present. You do not choose, start, stop, or change anyone\'s medication, and you do not tell a person what treatment they need. If someone says they want to stop taking a medicine, you listen, you do not argue, and you help them speak to the person who prescribed it.',
        ] },
        { kind: 'myths', items: [
          { myth: 'People with a mental health condition cannot hold a job or raise a family.', reality: 'Many do. Recovery includes purpose and community, and the right support makes both easier.' },
          { myth: 'If you take medication, you are not really in recovery.', reality: 'Recovery is about the life a person builds. Medication is one tool some people choose with their clinician.' },
        ] },
        { kind: 'check', check: {
          id: 'mhe-l2-q1',
          q: 'A woman you support says she wants to stop her medication because of side effects. What is the best response?',
          options: [
            'Tell her to stop it if it bothers her',
            'Tell her she must keep taking it',
            'Listen, take the concern seriously, and help her talk to the person who prescribed it before she changes anything',
            'Ask a friend who takes it what they do',
          ],
          answer: 2,
          rationale: 'You take the concern seriously and connect her to the prescriber. Telling someone to stop or continue is a clinical decision.',
          distractors: 'Telling her to stop or to keep taking it are both advice about medication. Asking a friend is not a safe source.',
        } },
        { kind: 'takeaways', items: [
          'Recovery is a process: health, home, purpose, and community.',
          'Trained, supervised community workers can help, and a clinician decides on treatment.',
          'You never tell a person to start, stop, or change a medication.',
        ] },
        ev([RECOVERY,
          'Chibanda D, et al. Effect of a primary care-based psychological intervention on symptoms of common mental disorders in Zimbabwe: a randomized clinical trial. JAMA 2016;316(24):2618-2626: supervised lay health workers delivered the intervention.',
          'Chinman M, et al. Peer support services for individuals with serious mental illnesses: assessing the evidence. Psychiatric Services 2014;65(4):429-441: moderate evidence for peer support, with limits in the studies.']),
      ],
    },
    // ── Lesson 3 ───────────────────────────────────────────────────────────
    {
      id: 'mhe-l3',
      title: 'Stigma and the words we use',
      summary: 'How stigma keeps people from help, and language that respects the person.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'Fear of being judged is one of the biggest reasons people do not seek help. The way you speak, and the way you teach others to speak, can lower that fear or add to it.',
        ] },
        { kind: 'concept', title: 'What stigma does', text: [
          'Stigma is a set of negative beliefs about people with mental health or substance use conditions. It leads people to hide symptoms, avoid care, and feel shame. It also shows up in how services treat people.',
          'The research is encouraging. A review of 72 studies from 14 countries found that both education and contact with people who have lived experience reduced stigma. Telling the truth plainly, and letting people hear from someone who has been there, both work.',
        ] },
        { kind: 'list', title: 'Words that respect the person', items: [
          'Say a person with depression, not a depressive. Say a person who uses drugs, not an addict.',
          'Say a person has a condition, not that they are one. A person is not their diagnosis.',
          'Say died by suicide, not committed suicide.',
          'Say substance use disorder, not abuse. Say person in recovery, not clean or dirty.',
          'Avoid jokes and slang that make light of conditions, such as crazy or psycho.',
        ] },
        { kind: 'concept', title: 'Using your own story with care', text: [
          'If you have lived experience, your story can be the most powerful part of a session. Decide in advance what you will share and what stays private. Share what helped and what changed, not graphic detail. Tell your program lead before you share in a public setting. You never have to tell your story to do this work.',
        ] },
        { kind: 'tryit', title: 'Say it another way', text: [
          'Rewrite each sentence in respectful language: \'He is a schizophrenic.\' \'She is a junkie.\' \'He committed suicide last year.\' Then read them aloud. Notice which ones feel awkward at first and practice until they are natural.',
        ] },
        { kind: 'check', check: {
          id: 'mhe-l3-q1',
          q: 'Which sentence uses the most respectful language?',
          options: [
            'He is a schizophrenic.',
            'He is a person living with schizophrenia.',
            'He is crazy.',
            'He is an addict.',
          ],
          answer: 1,
          rationale: 'It names the person first and the condition second. A person is not their diagnosis.',
          distractors: 'The other three define the person by a label or use a slur.',
        } },
        { kind: 'takeaways', items: [
          'Stigma keeps people from help. Education and contact both reduce it.',
          'Put the person before the condition and avoid slang.',
          'Share your story on purpose, with limits you set.',
        ] },
        ev([CORRIGAN, NIDA,
          'White House Office of National Drug Control Policy, Memorandum on Changing Federal Terminology Regarding Substance Use and Substance Use Disorders (2017): replaces terms such as abuse with substance use disorder.']),
      ],
    },
    // ── Lesson 4 ───────────────────────────────────────────────────────────
    {
      id: 'mhe-l4',
      title: 'Planning a short community session',
      summary: 'One message, one activity, and a way for people to find help.',
      minutes: 13,
      blocks: [
        { kind: 'why', text: [
          'A short, well-planned session reaches more people than a long talk that tries to cover everything. Twenty minutes with one clear message is often enough to change what a person does next.',
        ] },
        { kind: 'concept', title: 'Start with the person in the room', text: [
          'Before you plan, ask who will be there, what they already know, and what they worry about. A group of parents at a school needs different content from a group at a shelter. Ask your program lead and, if possible, someone from the group.',
        ] },
        { kind: 'steps', title: 'A 20-minute plan', items: [
          { label: 'One message', text: 'Pick one thing you want people to remember, such as \'Anxiety is common and there is help,\' or \'Here is how to ask someone if they are okay.\'' },
          { label: 'Welcome (2 minutes)', text: 'Say who you are, what you will cover, that people can step out, and that nobody has to share.' },
          { label: 'Explain (6 minutes)', text: 'Give three or four points in plain words with a real example. Show, then tell.' },
          { label: 'Practice (7 minutes)', text: 'Give people something to do: a question to answer in pairs, a short scenario, or a word swap like the one in the last lesson.' },
          { label: 'Close (5 minutes)', text: 'Ask for questions, say where to find help, and name 988 and 211. Repeat the one message.' },
        ] },
        { kind: 'concept', title: 'Why the practice part matters', text: [
          'People remember more when they have to recall and use what they heard than when they only listen again. Asking a question, even a simple one, helps the message last. Showing a skill first and then letting people try it, with support, helps them use it afterward.',
        ] },
        { kind: 'list', title: 'Safety in the plan', items: [
          'Say at the start that some topics can be hard and people may step out.',
          'Do not show graphic stories or images.',
          'Do not ask people to share personal trauma in a group.',
          'Have 988, 211, and your program\'s local contacts on a handout.',
          'Know who you will tell if someone is in distress during the session.',
        ] },
        { kind: 'case', title: 'Planning for a parent group', scenario: true, text: [
          'Your program asks you to speak for 20 minutes to parents at a community center about teens and stress. You have too many ideas. What do you do?',
          'Answer: Pick one message, such as how to notice that a teen is struggling and start a conversation. Plan three points, one pair activity, and the closing resources. Save the rest for another session.',
        ] },
        { kind: 'check', check: {
          id: 'mhe-l4-q1',
          q: 'Which plan is most likely to leave people able to act?',
          options: [
            'Forty minutes of slides covering every condition',
            'A twenty-minute session with one message, an example, a short activity, and where to find help',
            'A handout with no discussion',
            'A story about your own hardest year, in detail',
          ],
          answer: 1,
          rationale: 'One message, an example, and a chance to practice help people remember and use what they heard.',
          distractors: 'Long slides and handouts without practice are quickly forgotten, and detailed trauma stories can harm listeners.',
        } },
        { kind: 'takeaways', items: [
          'Plan for the people in the room, with one clear message.',
          'Include something to do, not only something to hear.',
          'Build in safety: warnings, no graphic detail, and local contacts.',
        ] },
        ev(['Roediger HL, Karpicke JD. Test-enhanced learning: taking memory tests improves long-term retention. Psychological Science 2006;17(3):249-255: recalling material helped more than rereading on delayed tests.',
          'Collins A, Brown JS, Newman SE. Cognitive apprenticeship (1989): show the skill, coach the learner, and gradually step back.',
          HCAI]),
      ],
    },
    // ── Lesson 5 ───────────────────────────────────────────────────────────
    {
      id: 'mhe-l5',
      title: 'Leading the session and handling hard moments',
      summary: 'Running the room, responding to a disclosure or distress, and learning from feedback.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'Education about mental health will stir things up for some people. Part of leading well is staying steady when a person in the room is moved, upset, or tells you something painful.',
        ] },
        { kind: 'concept', title: 'Running the room', text: [
          'Speak slowly and plainly. Invite, do not demand. Thank people for questions. If someone asks something you cannot answer, say so and offer to find out. Do not guess about medication, diagnosis, or legal rules.',
        ] },
        { kind: 'steps', title: 'If someone becomes upset or discloses something painful', items: [
          { label: 'Stay calm and kind', text: 'Keep your voice steady. Thank them for trusting the group.' },
          { label: 'Offer choice', text: 'Ask if they would like a moment, some water, or to step out. Offer a quiet word after the session.' },
          { label: 'Do not probe', text: 'You do not need details. Ask what they need now, not what happened.' },
          { label: 'Keep the group going', text: 'Return to the plan when the person is settled, or ask a co-leader to stay with them.' },
          { label: 'Follow up the same day', text: 'Tell your program lead what happened. If someone may be at risk of harm, follow the safety steps in the next course and call 988 or 911 if it is urgent.' },
        ] },
        { kind: 'concept', title: 'Learning from the session', text: [
          'A short debrief after each session helps you improve. Ask what went well, what you would change, and what you want to practice. Ask a peer to watch and tell you one thing that worked and one thing to try. Write your notes down.',
        ] },
        { kind: 'concept', title: 'Going further as a facilitator', text: [
          'HMC\'s Community Mental Health Worker and Facilitator Training goes deeper on leading groups. It has two recorded parts, homework, and a workshop you lead with sign-off from your program lead. Complete it before leading sessions on your own.',
        ] },
        { kind: 'tryit', title: 'Practice a hard moment', text: [
          'With a partner, take turns. One person leads a one-minute opening. The other person quietly says, in role, \'I do not feel okay.\' Practice the first two steps above, then swap. Say out loud what you would do next.',
        ] },
        { kind: 'check', check: {
          id: 'mhe-l5-q1',
          q: 'During your session a participant begins to cry and says she lost a child last year. What is the best first response?',
          options: [
            'Ask her to tell the group what happened',
            'Move on quickly so the group is not uncomfortable',
            'Stay calm, thank her, offer a moment or to step out, and offer a quiet word after',
            'Tell her she should see a doctor right now',
          ],
          answer: 2,
          rationale: 'Calm, kind, and a choice. You do not probe, ignore, or send her away. You follow up after.',
          distractors: 'Asking for details can harm her and the group. Ignoring her or sending her to a doctor on the spot does not respect her.',
        } },
        { kind: 'takeaways', items: [
          'Stay steady, offer choice, and do not probe.',
          'Follow up the same day and tell your program lead.',
          'Complete the facilitator training before leading on your own.',
        ] },
        ev([TIP57,
          'Eppich W, Cheng A. Promoting Excellence and Reflective Learning in Simulation (PEARLS) (2015): a structured debrief that asks what happened, what the learner thought, and what to do next.',
          HCAI]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'mhe-plan',
    title: 'Your session plan',
    minutes: 45,
    purpose: 'A 20-minute session plan for a made-up group, with a short script for the opening and a safety plan. You bring it to the facilitated practice and keep it for interviews.',
    fields: [
      { id: 'group', label: 'Your group and your one message', help: 'Who will be in the room, what they already know, and the one thing you want them to remember.', multiline: true },
      { id: 'plan', label: 'A 20-minute plan', help: 'Write the welcome, the three points with an example, the activity, and the close with times.', multiline: true },
      { id: 'script', label: 'Your opening, word for word', help: 'Two or three sentences: who you are, what you will cover, that people can step out, and that no one has to share.', multiline: true },
      { id: 'words', label: 'Five word swaps', help: 'Write five phrases you hear that carry stigma and the respectful version of each.', multiline: true },
      { id: 'safety', label: 'Your safety plan for the room', help: 'What you will say if someone is upset, who you will tell, and the contacts on your handout.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'NIMH: Mental Health Information', use: 'Plain-language pages on common conditions, signs, and treatment.', url: 'https://www.nimh.nih.gov/health' },
    { name: 'SAMHSA: Recovery and Recovery Support', use: 'The national working definition of recovery and its guiding principles.', url: 'https://www.samhsa.gov/find-help/recovery' },
    { name: 'NIDA: Words Matter', use: 'Terms to use and avoid when talking about addiction.', url: 'https://nida.nih.gov' },
    { name: 'National Council for Mental Wellbeing: Mental Health First Aid', use: 'A course from another organization for adults who want to learn to help someone in distress. Find a course near you with the course locator on the site. This course does not replace it.', url: 'https://www.mentalhealthfirstaid.org' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988 any time.', url: 'https://988lifeline.org' },
    { name: '211 Los Angeles County', use: 'Search local health, housing, food, and legal services.', url: 'https://211la.org' },
  ],
};
