// Community Mental Health Worker Pathway: baseline and final quiz.
//
// Ten constructs across the eight courses, in parallel forms. The baseline is reviewed with
// rationales right after it is taken, which is good teaching and means those exact items cannot
// carry the credential. The final quiz asks about the same ten things with different items and
// a different spread of correct positions.
//
// Why this exists: every pathway's completion record requires passing a final quiz at the
// pass threshold. This pathway had none, so the gate could never be met and nobody who finished
// every course could be issued a record.
//
// The constructs: role and scope; warm handoff and follow-up; outreach consent and safety;
// honest records; reentry work and the worker's own story; recovery and medication; respectful
// language; adverse childhood experiences; asking about suicide; crisis and reporting.

import type { Check } from './catalog';

export const CHWP_PRE: Check[] = [
  {
    id: 'chwp-t1',
    q: 'A person you support asks which dose of their medication to take. What is the right response?',
    options: [
      'Tell them the dose you think is best',
      'Explain that dosing is for their prescriber or pharmacist, and help them reach one',
      'Look it up online and tell them what it says',
      'Tell them to skip it if they are unsure',
    ],
    answer: 1,
    why: 'Dosing is a clinical decision. You help the person reach the prescriber or pharmacist and you do not advise on medication yourself.',
  },
  {
    id: 'chwp-t2',
    q: 'What makes a handoff to another provider warm?',
    options: [
      'You give the person a phone number',
      'You email the provider without telling the person',
      'You tell the person to call when they are ready',
      'You contact the provider with the person, share only what they agreed to, and confirm an appointment is set',
    ],
    answer: 3,
    why: 'A warm handoff is made with the person, shares only what they agreed to, and confirms that the connection happened. A number on a slip of paper often fails.',
  },
  {
    id: 'chwp-t3',
    q: 'Before you ask a stranger at an outreach site about their health, what do you do first?',
    options: [
      'Introduce yourself, say what you do and do not do, and ask for consent',
      'Ask which medications they take',
      'Hand them a survey to fill in',
      'Take a photo for the file',
    ],
    answer: 0,
    why: 'Consent comes first. People decide whether to talk once they know who you are and what you will and will not do.',
  },
  {
    id: 'chwp-t4',
    q: 'Your supervisor says the program is two short of its target and asks you to count two calls that connected no one as completed referrals. What do you do?',
    options: [
      'Count them to help the program',
      'Refuse to discuss it',
      'Say you can count only what was completed, and offer to keep working on those two',
      'Change the dates so the records look complete',
    ],
    answer: 2,
    why: 'Honest numbers protect the people served, the program, and you. You report only what was completed and offer to keep working on the rest.',
  },
  {
    id: 'chwp-t5',
    q: 'A person preparing to leave jail asks about your own past. What is the best way to use your story?',
    options: [
      'Tell everything so they trust you',
      'Decide in advance what to share, share what helped and what changed, and keep the focus on them',
      'Never speak about it, even if asked',
      'Share graphic detail to show you understand',
    ],
    answer: 1,
    why: 'A story shared on purpose, with limits you set, builds trust. Telling everything or graphic detail shifts the focus from the person to you.',
  },
  {
    id: 'chwp-t6',
    q: 'Which statement about recovery is accurate?',
    options: [
      'It means symptoms are gone',
      'It is only possible with medication',
      'It is only for people with mild conditions',
      'It is a process of change toward health, home, purpose, and community, and hard days can still happen',
    ],
    answer: 3,
    why: 'The national definition describes recovery as a process of change, not the absence of symptoms. It reaches beyond treatment to home, purpose, and community.',
  },
  {
    id: 'chwp-t7',
    q: 'Which phrase uses respectful language?',
    options: [
      'A person with a substance use disorder',
      'An addict',
      'A junkie',
      'A drug abuser',
    ],
    answer: 0,
    why: 'Put the person before the condition and use current terms. Labels and slang add to stigma and keep people from help.',
  },
  {
    id: 'chwp-t8',
    q: 'What does a high number of adverse childhood experiences tell you about the one person in front of you?',
    options: [
      'What will happen to them',
      'That their story is probably exaggerated',
      'That risk is higher across groups, but nothing certain about this person',
      'That they need a diagnosis',
    ],
    answer: 2,
    why: 'The research describes risk across large groups. It is not a prediction about one person, and support and caring relationships change outcomes.',
  },
  {
    id: 'chwp-t9',
    q: 'Does asking someone directly about suicide increase their risk?',
    options: [
      'Yes, it puts the idea in their head',
      'No, studies found no increase, and talking about it can bring relief',
      'Only for young people',
      'Only if you ask more than once',
    ],
    answer: 1,
    why: 'A review of studies found no increase in suicidal thoughts after people were asked. Not asking can leave the person alone with it.',
  },
  {
    id: 'chwp-t10',
    q: 'A person tells you the neighbors are broadcasting their thoughts and they are frightened. What is the best first response?',
    options: [
      'Tell them it is not real',
      'Agree so they trust you',
      'Stay calm, say it sounds frightening, focus on safety, and help them reach a clinician',
      'Leave them alone until they calm down',
    ],
    answer: 2,
    why: 'You acknowledge the feeling without arguing or agreeing, and you focus on safety and clinical help. Arguing adds fear and leaving abandons them.',
  },
];

export const CHWP_POST: Check[] = [
  {
    id: 'chwp-p1',
    q: 'A man asks whether his symptoms mean he has depression. What do you do?',
    options: [
      'Tell him yes',
      'Tell him no',
      'Describe what you have noticed and help him see a clinician who can assess',
      'Suggest a medication that helped someone else',
    ],
    answer: 2,
    why: 'You describe what you see and connect him to someone who can assess. Naming a diagnosis or suggesting medication is outside your role.',
  },
  {
    id: 'chwp-p2',
    q: 'Why do you follow up after a referral?',
    options: [
      'To find out whether the connection happened and fix what got in the way',
      'To check that the person is complying',
      'Only if the provider asks',
      'To add it to the count',
    ],
    answer: 0,
    why: 'Following up closes the loop. Many referrals fail for small reasons such as transport or a missed call, and you can often fix them.',
  },
  {
    id: 'chwp-p3',
    q: 'You are on an outreach shift and begin to feel unsafe. What is the best action?',
    options: [
      'Stay to finish the shift',
      'Confront the person',
      'Go alone to check what is happening',
      'Leave, tell your supervisor, and follow your program\'s safety steps',
    ],
    answer: 3,
    why: 'Your safety comes first. You step away, tell your supervisor, and follow the program\'s steps. You do not handle danger alone.',
  },
  {
    id: 'chwp-p4',
    q: 'Which note would a supervisor find most useful?',
    options: [
      'Talked to a guy, seemed fine',
      'Oct 12, 10:15 a.m., 6th and Main. Spoke with a man about 50. He asked about a shower. I gave him the list and we agreed to check in Thursday.',
      'Great visit today',
      'Several people stopped by',
    ],
    answer: 1,
    why: 'A useful note records when, where, what was said, what you did, and what is next. Vague notes cannot be used by anyone else.',
  },
  {
    id: 'chwp-p5',
    q: 'Which of these belongs to a community health worker\'s role in reentry?',
    options: [
      'Advising on parole conditions',
      'Choosing a person\'s medication',
      'Helping a person name goals and carrying the plan to the next provider',
      'Deciding what a facility will allow',
    ],
    answer: 2,
    why: 'The role is trust, goals, plan, and handoff. Legal advice, medication, and facility decisions belong to others.',
  },
  {
    id: 'chwp-p6',
    q: 'A man says his medicine makes him tired and he plans to skip it this week. What do you do?',
    options: [
      'Listen, take it seriously, and help him talk to the person who prescribed it',
      'Tell him to go ahead and skip it',
      'Tell him he must take it no matter what',
      'Ask a friend who takes it what they do',
    ],
    answer: 0,
    why: 'You take the concern seriously and connect him to the prescriber. Telling someone to skip or continue a medicine is a clinical decision.',
  },
  {
    id: 'chwp-p7',
    q: 'Which sentence is most respectful?',
    options: [
      'He is a schizophrenic.',
      'She is a former addict.',
      'He committed suicide.',
      'She died by suicide.',
    ],
    answer: 3,
    why: 'Died by suicide avoids the sense of a crime. The other phrases define a person by a label or use language that adds stigma.',
  },
  {
    id: 'chwp-p8',
    q: 'Which best supports a young person who has had a hard childhood?',
    options: [
      'Getting the full story of what happened',
      'A steady, caring adult and connection to supports',
      'Telling them to stay positive',
      'Predicting how they will turn out',
    ],
    answer: 1,
    why: 'Steady relationships and connection to supports are what the research points to. Probing, cheerleading, and predicting do not build them.',
  },
  {
    id: 'chwp-p9',
    q: 'A person tells you he has a plan to end his life. What do you do?',
    options: [
      'Stay with him, call 988 or 911 as needed, and tell your supervisor right away',
      'Promise to tell no one',
      'Wait a few days to see how he is',
      'Tell him he has too much to live for',
    ],
    answer: 0,
    why: 'You stay, bring in help, and tell your supervisor. Secrecy, waiting, and reassurance alone leave him at risk.',
  },
  {
    id: 'chwp-p10',
    q: 'A young person tells you about harm at home. What do you do?',
    options: [
      'Promise to keep it secret',
      'Ask detailed questions to investigate',
      'Wait for more information first',
      'Thank them, listen, tell your supervisor right away, and write down their words',
    ],
    answer: 3,
    why: 'You never promise secrecy and you do not investigate. You listen, tell your supervisor, and record what was said so the right people can act.',
  },
];
