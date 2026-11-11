// Community Mental Health Worker Pathway: baseline and final quiz.
//
// Twenty constructs across the pathway's courses, in parallel forms. The first ten cover the original
// eight courses. The second ten cover the motivational interviewing, humility, equity, coverage,
// advocacy, facilitation, recovery, overdose, peer practice, and crisis safety work added later. The baseline is reviewed with
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
  {
    id: 'chwp-t11',
    q: "A person says they want to cut down on drinking but are not sure they can. Which response fits motivational interviewing?",
    options: [
      "Ask what makes them want to cut down, and listen for their own reasons",
      "Tell them they have to quit completely",
      "Warn them what will happen if they do not stop",
      "Tell them most people cannot do it alone",
    ],
    answer: 0,
    why: "Motivational interviewing draws out the person's own reasons and confidence. Warnings, orders, and arguments tend to produce resistance.",
  },
  {
    id: 'chwp-t12',
    q: "What does cultural humility mean in your work?",
    options: [
      "Knowing the customs of every culture",
      "Learning one group's rules and applying them to everyone from that group",
      "Avoiding any conversation about culture",
      "Staying curious, learning from each person, and checking your own assumptions and the power in the relationship",
    ],
    answer: 3,
    why: "Cultural humility is an ongoing practice of learning from the person and examining your own assumptions and power, not a set of facts to memorize about a group.",
  },
  {
    id: 'chwp-t13',
    q: "One neighborhood has far more asthma than another. Which explanation looks at root causes?",
    options: [
      "People there do not take care of themselves",
      "Housing conditions, air quality, and access to care differ between the neighborhoods",
      "Asthma is mostly bad luck",
      "Residents prefer not to see doctors",
    ],
    answer: 1,
    why: "Health inequities are produced by conditions such as housing, environment, and access to care. Blaming individuals misses the causes.",
  },
  {
    id: 'chwp-t14',
    q: "Two sources you are using disagree on the date a Medi-Cal rule starts, and a neighbor asks you. What do you do?",
    options: [
      "Pick the later date so they have more time",
      "Tell them the date you remember best",
      "Check the state's current page or the county, say as of when the information is current, and give a number to call if you cannot check",
      "Tell them the date does not matter",
    ],
    answer: 2,
    why: "Medi-Cal rules are changing on a schedule and sources can differ. You check the current source, say how current the information is, and never guess a date for someone.",
  },
  {
    id: 'chwp-t15',
    q: "A person wants to dispute a decision about their benefits. What is good advocacy?",
    options: [
      "Take over and speak for them so it gets done quickly",
      "Help them say what they want, help them prepare, and speak with them or alongside them if they ask",
      "Tell them it is not worth the trouble",
      "File it yourself without telling them",
    ],
    answer: 1,
    why: "Advocacy beside a person keeps them in charge. You support their voice and do not replace it.",
  },
  {
    id: 'chwp-t16',
    q: "After you explain how to use an inhaler, how do you check that your explanation worked?",
    options: [
      "Ask them to show you or explain it back in their own words",
      "Ask whether they have any questions",
      "Give them a pamphlet",
      "Repeat it more loudly",
    ],
    answer: 0,
    why: "Asking a person to show or say it back checks how well you explained. A yes to any questions often hides confusion.",
  },
  {
    id: 'chwp-t17',
    q: "According to SAMHSA's working definition, recovery is",
    options: [
      "having no symptoms ever again",
      "something that only happens inside treatment",
      "something professionals decide for a person",
      "a process of change in which people improve their health and wellness, live a self-directed life, and strive to reach their full potential",
    ],
    answer: 3,
    why: "The working definition describes recovery as a process of change and self-direction, not the absence of symptoms or a status professionals assign.",
  },
  {
    id: 'chwp-t18',
    q: "You find someone unresponsive with slow, shallow breathing and blue lips. What comes first?",
    options: [
      "Wait to see whether they wake up",
      "Ask them what they took",
      "Check for a response, give naloxone if you are trained and have it, and call 911",
      "Give them water",
    ],
    answer: 2,
    why: "This looks like an opioid overdose. You act at once, giving naloxone if you are trained and cleared and calling 911, and you support breathing.",
  },
  {
    id: 'chwp-t19',
    q: "When is it appropriate to share part of your own story with a person you support?",
    options: [
      "When it serves the person, briefly, with the focus returned to them",
      "Whenever you feel like talking",
      "Never, in any circumstance",
      "When it will make them like you",
    ],
    answer: 0,
    why: "Self-disclosure in peer and helping roles is purposeful, brief, and for the person's benefit, not the worker's.",
  },
  {
    id: 'chwp-t20',
    q: "A family says a relative has not slept for days and is agitated, with no weapon and no talk of harm. What can you help them do?",
    options: [
      "Wait until it gets worse",
      "Call the county mental health access line or 988 for help, and make a plan to call 911 if anything changes",
      "Go in alone and calm the person yourself",
      "Tell them to drive the person to a hospital",
    ],
    answer: 1,
    why: "A call line can send a crisis team, and a plan to call 911 for danger keeps everyone safe. You do not go in alone or use force.",
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
  {
    id: 'chwp-p11',
    q: "A person says they know they should go to their appointment but keep putting it off. What fits motivational interviewing best?",
    options: [
      "Tell them to just go",
      "Remind them of the risks of missing it",
      "Say that people who do not go get worse",
      "Reflect their mixed feelings and ask what would make going feel more doable",
    ],
    answer: 3,
    why: "Reflecting ambivalence and asking about what would help respects the person's own pace and strengthens their reasons.",
  },
  {
    id: 'chwp-p12',
    q: "A family makes decisions in a way that is unfamiliar to you. What is the best approach?",
    options: [
      "Explain that your way is more common",
      "Ask them to teach you how decisions are made in their family, and adjust how you work together",
      "Assume you understand because you know a similar family",
      "Refer them to someone else without asking",
    ],
    answer: 1,
    why: "Cultural humility means asking and learning from the family, not assuming or sending them away.",
  },
  {
    id: 'chwp-p13',
    q: "Why does a community health worker pay attention to housing and food and not only to medical care?",
    options: [
      "Because conditions where people live, work, and eat shape health and are often outside a person's control",
      "Because medical care does not matter",
      "Because housing is the worker's medical specialty",
      "Because food programs are required by law",
    ],
    answer: 0,
    why: "Social conditions are major drivers of health. Many are outside an individual's control, which is why the worker looks at them.",
  },
  {
    id: 'chwp-p14',
    q: "A person asks whether they are exempt from a new Medi-Cal rule. What is the best response?",
    options: [
      "Tell them they are exempt because they look unwell",
      "Tell them they are not exempt",
      "Ask the questions that surface possible reasons, help them gather proof, and explain that the county decides",
      "Refuse to discuss it",
    ],
    answer: 2,
    why: "A worker helps people apply, gather proof, and understand notices. The county decides eligibility and exemptions.",
  },
  {
    id: 'chwp-p15',
    q: "Which best describes advocacy beside a person?",
    options: [
      "Helping them state what they want and supporting them while they do it",
      "Doing all the talking for them",
      "Telling them what to ask for",
      "Contacting the agency without their knowledge",
    ],
    answer: 0,
    why: "Advocacy beside a person strengthens their own voice and keeps them in charge of the decision.",
  },
  {
    id: 'chwp-p16',
    q: "What is teach-back?",
    options: [
      "Teaching the person's family",
      "Reading the instructions twice",
      "Giving a quiz with a grade",
      "Asking the person to explain or show, in their own words, what they will do, to check how well you explained",
    ],
    answer: 3,
    why: "Teach-back tests your explanation, not the person. If they cannot say it back, you explain it again in a different way.",
  },
  {
    id: 'chwp-p17',
    q: "Which set names common elements of personal recovery?",
    options: [
      "Compliance, diagnosis, medication, and supervision",
      "Connectedness, hope, identity, meaning, and empowerment",
      "Speed, silence, strength, and sobriety",
      "Rules, rewards, risk, and rest",
    ],
    answer: 1,
    why: "A widely cited review of personal recovery names connectedness, hope, identity, meaning, and empowerment.",
  },
  {
    id: 'chwp-p18',
    q: "A person has been given naloxone and starts breathing again. What should you do?",
    options: [
      "Leave, because the danger is over",
      "Tell them to walk it off",
      "Encourage them to accept emergency care, because naloxone wears off and symptoms may return, and stay until help arrives",
      "Give them more naloxone right away without checking",
    ],
    answer: 2,
    why: "Naloxone can wear off after 30 to 90 minutes and symptoms may return, so the person should be seen by emergency medical services.",
  },
  {
    id: 'chwp-p19',
    q: "Which self-disclosure is most appropriate in a helping role?",
    options: [
      "A long account of your own crisis to show you understand",
      "Details about another person's story",
      "Sharing so that the person will like you",
      "A brief, purposeful part of your own experience that gives hope, followed by returning the focus to the person",
    ],
    answer: 3,
    why: "Self-disclosure should be brief, purposeful, and for the person's benefit. It should never take over the conversation or share others' stories.",
  },
  {
    id: 'chwp-p20',
    q: "During a visit a person picks up a heavy object and your partner feels unsafe. What do you do?",
    options: [
      "Speak calmly, step back, leave together if you can, and call for help from a safe place",
      "Grab the object",
      "Block the door so the person cannot leave",
      "Argue until it is put down",
    ],
    answer: 0,
    why: "Calm words, distance, and leaving together to call for help keep everyone safer. Physical intervention belongs to trained staff.",
  },
];
