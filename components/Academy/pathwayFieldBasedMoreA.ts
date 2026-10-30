// Field-Based Community Health, courses 6 to 10: communication, cultural humility and trauma-informed
// engagement, mental health and substance use awareness, harm reduction, and motivational interviewing.
//
// These are the practice-of-the-work courses. They teach what to say and do with a person at a table
// or on a street, and where a community health worker's role stops. Each lesson ends with the
// standards and evidence it rests on. Phone numbers other than 911, 988 and 211 are not printed,
// because they change; the program gives current numbers in training.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });
const HCAI = 'California HCAI, CHW/P/R Training Program Best Practices Framework: the 11 core competencies, with live practice for relationship skills and supervised field work.';

export const FBCH_COMMUNICATION: Course = {
  id: 'fbch-6', num: 6, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Communication + Active Listening',
  promise: 'Listen so that people say what is really going on, explain things so they can act on them, and handle a hard moment without losing the person.',
  about: [
    'Most of what a community health worker does is talk with people. The skill is not talking well. It is listening well enough that the other person tells you what they actually need.',
    'This course covers listening, plain language, and the moments when a conversation gets hard.',
  ],
  objectives: [
    'Use attending, paraphrasing, and silence to keep a conversation about the other person.',
    'Explain something in plain language and check it with teach-back.',
    'Work with an interpreter correctly.',
    'Handle a silent, upset, or hurried moment and end a conversation well.',
  ],
  minutes: 24,
  prerequisites: 'None.',
  whoFor: 'Outreach volunteers, navigators, promotoras, and anyone who will talk with members at a table or in the field.',
  lessons: [
    {
      id: 'fbch-6-l1', title: 'Listening first', summary: 'What active listening is, and what it looks like at a table.', minutes: 8,
      blocks: [
        { kind: 'prose', text: [
          'Active listening means the person can tell you heard them. It is a set of small, visible habits, not a technique you perform. Carl Rogers and Richard Farson described it in 1957 as the willingness to understand the other person\'s point of view before offering your own.',
          'At a table you often have thirty seconds of attention and a line of people. The temptation is to answer the first sentence. Resist it. The first sentence is rarely the real question.',
        ] },
        { kind: 'steps', title: 'Four habits', items: [
          { label: 'Attend', text: 'Face the person, put the clipboard down, and keep your phone out of sight. Attention is the first thing people notice.' },
          { label: 'Ask one open question', text: '"What brought you over today?" invites a story. "Do you need help with insurance?" invites a yes or no.' },
          { label: 'Paraphrase', text: 'Say back what you heard in fewer words: "So the letter came and you are not sure what it means." Paraphrasing shows you listened and gives them a chance to correct you.' },
          { label: 'Use silence', text: 'After you ask, wait. People often say the real thing in the second sentence, after the pause you did not fill.' },
        ] },
        { kind: 'case', title: 'The first sentence', scenario: true, text: [
          'A man stops at your table and asks where the bathroom is. You answer and he lingers. You wait, then say, "Is there anything else I can point you to?"',
          'He says his daughter has been coughing for two weeks and he does not know where to take her. The bathroom was the easy question.',
        ] },
        { kind: 'check', check: { id: 'fbch-6-c1', q: 'A person asks a small question and stays. What is the best next move?', options: ['Answer and turn to the next person', 'Answer, then wait and offer one open invitation to say more', 'Ask for their insurance information', 'Tell them about every service you offer'], answer: 1, rationale: 'A person who lingers often has a bigger question. One open invitation and a pause make it safe to ask.', distractors: 'The other options either end the conversation or move it toward your agenda instead of theirs.' } },
        ev(['Rogers and Farson, "Active Listening" (1957): the listener works to understand the speaker\'s frame of reference.', 'Miller and Rollnick, Motivational Interviewing, third edition (2013): open questions, reflections, and summaries as core skills.', HCAI]),
      ],
    },
    {
      id: 'fbch-6-l2', title: 'Plain language and teach-back', summary: 'Explain once, check once, and use an interpreter correctly.', minutes: 8,
      blocks: [
        { kind: 'prose', text: [
          'Health information is hard even for people who read well. Plain language means short sentences, everyday words, and one idea at a time. The goal is that the person can act on what you said.',
          'Teach-back is how you check. You ask the person to say in their own words what they will do, and you treat a wrong answer as your explanation failing, not theirs.',
        ] },
        { kind: 'steps', title: 'Teach-back in three steps', items: [
          { label: 'Explain one thing', text: '"Your appointment is Tuesday at ten. Bring the letter and your ID."' },
          { label: 'Ask them to say it back', text: '"I want to be sure I explained it well. What will you bring on Tuesday?" Use "I" so it is about your explanation.' },
          { label: 'Fix and repeat', text: 'If something is missing, explain it again a different way and check again.' },
        ] },
        { kind: 'list', title: 'Working with an interpreter', items: [
          'Use a qualified interpreter or the language line your program provides. Do not ask a child, or a family member who is upset, to interpret.',
          'Speak to the person, not the interpreter, in short sentences, and pause for the interpretation.',
          'If you speak the language yourself, only interpret if your program has assessed you to do it. Otherwise say what you can and bring in the interpreter.',
        ] },
        { kind: 'check', check: { id: 'fbch-6-c2', q: 'After explaining an appointment, what do you say?', options: ['"Do you understand?"', '"I want to be sure I explained it well. What will you bring on Tuesday?"', '"That is everything."', '"Call if you have questions."'], answer: 1, rationale: 'People say yes to "Do you understand?" whether they do or not. Teach-back asks for the information itself and keeps the focus on your explanation.', distractors: 'The other options do not check whether the person can act on what you said.' } },
        ev(['AHRQ Health Literacy Universal Precautions Toolkit: plain language and the teach-back method.', 'U.S. HHS Office of Minority Health, National CLAS Standards (2013): offer language assistance and do not rely on family members or minors as interpreters.', HCAI]),
      ],
    },
    {
      id: 'fbch-6-l3', title: 'Hard moments', summary: 'When someone is silent, upset, or in a hurry, and how to end well.', minutes: 8,
      blocks: [
        { kind: 'prose', text: [
          'Some conversations get hard: the person goes quiet, gets angry at the system and aims it at you, or cries. Your job is to stay steady and keep the person\'s dignity intact.',
        ] },
        { kind: 'steps', title: 'Three moments', items: [
          { label: 'The silent person', text: 'Do not fill the quiet. Say, "Take your time. I am here." Offer a small, concrete next step they can say yes to.' },
          { label: 'The upset person', text: 'Name the feeling before the fix: "That sounds exhausting." Anger at a system is usually not about you. Do not defend the system or argue.' },
          { label: 'The hurried person', text: 'Ask what they can do in two minutes. Give one thing, such as a card or a number, and say you can continue later.' },
        ] },
        { kind: 'list', title: 'Ending well', items: [
          'Summarize the next step in one sentence.',
          'Say what you will do and what they will do.',
          'Leave a way to reach you, and keep the promise you made.',
        ] },
        { kind: 'case', title: 'The angry letter', scenario: true, text: [
          'A woman waves a letter and says, "Your people sent this and nobody will explain it." You did not send it. What do you do?',
          'Answer: Do not correct who sent it. Say, "That sounds frustrating. Let me read it with you." Then read it aloud, explain it in plain words, check with teach-back, and write down the one thing she needs to do.',
        ] },
        { kind: 'check', check: { id: 'fbch-6-c3', q: 'A person is upset at a system and directs it at you. What helps most?', options: ['Explain that you did not cause the problem', 'Name the feeling, then help with the next step', 'Ask them to calm down', 'Refer them to a supervisor at once'], answer: 1, rationale: 'Naming the feeling lowers the temperature. Then a small, concrete next step turns the frustration into action.', distractors: 'Defending yourself or asking someone to calm down usually raises the temperature.' } },
        ev(['Richmond et al., Verbal De-escalation of the Agitated Patient: Consensus Statement of the American Association for Emergency Psychiatry Project BETA, Western Journal of Emergency Medicine (2012): respect, listening, and naming feelings.', 'SAMHSA, TIP 57, Trauma-Informed Care in Behavioral Health Services: safety, trustworthiness, and choice in every contact.', HCAI]),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'AHRQ Health Literacy Universal Precautions Toolkit', use: 'Plain language and teach-back, with examples.', url: 'https://www.ahrq.gov' },
    { name: 'National CLAS Standards', use: 'Language access and culturally respectful care.', url: 'https://thinkculturalhealth.hhs.gov' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'The competencies this course supports.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
  ],
};

export const FBCH_CULTURAL_TRAUMA: Course = {
  id: 'fbch-7', num: 7, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Cultural Humility + Trauma-Informed Engagement',
  promise: 'Work with people as the experts on their own lives, and engage in a way that does not repeat harm.',
  about: [
    'People arrive with histories you do not know. Cultural humility and trauma-informed practice are two ways of acting on that without guessing.',
    'This course is about what you do, not what you know about any group.',
  ],
  objectives: [
    'Explain cultural humility and how it differs from cultural competence.',
    'Describe what trauma is and how it can show up in an encounter.',
    'Use practical habits that give people safety, choice, and control.',
    'Avoid asking for a story a person does not need to tell.',
  ],
  minutes: 20,
  prerequisites: 'Communication + Active Listening first is recommended.',
  whoFor: 'Outreach volunteers, navigators, promotoras, and anyone who will meet people at a vulnerable moment.',
  lessons: [
    {
      id: 'fbch-7-l1', title: 'Cultural humility', summary: 'A stance of continued learning, not a list of facts about groups.', minutes: 7,
      blocks: [
        { kind: 'prose', text: [
          'Cultural competence suggests that you can learn enough about a group to be finished. Cultural humility, a term introduced by Melanie Tervalon and Jann Murray-García in 1998, treats it as a lifelong practice with three parts: reflecting on your own assumptions, noticing and shifting power imbalances, and learning from the communities you serve.',
          'In practice it sounds like curiosity: "What should I know about what matters to you?" and not "People like you usually..."',
        ] },
        { kind: 'steps', title: 'Three practices', items: [
          { label: 'Ask, do not assume', text: 'Ask how a person likes to be addressed, which language they prefer, and who they want involved in a decision.' },
          { label: 'Notice power', text: 'You have a badge, a clipboard, and knowledge of a system. Ask permission, explain what you are doing, and accept a no.' },
          { label: 'Learn from the community', text: 'When you get something wrong, thank the person who tells you, and change what you do.' },
        ] },
        { kind: 'check', check: { id: 'fbch-7-c1', q: 'Which is an example of cultural humility?', options: ['Memorizing customs of each group you meet', 'Asking a person what matters to them and how they want to be addressed', 'Treating everyone exactly the same', 'Assuming shared language means shared experience'], answer: 1, rationale: 'Cultural humility replaces assumptions with questions and treats the person as the expert on their own life.', distractors: 'A list of customs turns people into categories, and treating everyone identically ignores what they need.' } },
        ev(['Tervalon and Murray-García, "Cultural Humility Versus Cultural Competence," Journal of Health Care for the Poor and Underserved (1998).', 'U.S. HHS Office of Minority Health, National CLAS Standards (2013): culturally and linguistically appropriate services.', HCAI]),
      ],
    },
    {
      id: 'fbch-7-l2', title: 'Understanding trauma', summary: 'What trauma is, and how it can look in an encounter.', minutes: 7,
      blocks: [
        { kind: 'prose', text: [
          'SAMHSA describes trauma as the result of an event or series of events that a person experiences as harmful or life-threatening and that has lasting effects on well-being. Many people you meet will have experienced some. You do not need to know their history to act in a way that is safe.',
          'Trauma can show up as hypervigilance, anger, withdrawal, difficulty trusting, missed appointments, or a strong reaction to being touched, cornered, or told what to do. These are often protective responses, not defiance.',
        ] },
        { kind: 'steps', title: 'Four Rs, from SAMHSA', items: [
          { label: 'Realize', text: 'Trauma is common and affects how people engage.' },
          { label: 'Recognize', text: 'Notice the signs in people and in yourself.' },
          { label: 'Respond', text: 'Change your practice: safety, choice, and collaboration.' },
          { label: 'Resist re-traumatization', text: 'Avoid practices that repeat harm, such as pushing for a story or taking control away.' },
        ] },
        { kind: 'check', check: { id: 'fbch-7-c2', q: 'A person becomes angry when you stand between them and the exit. What may be going on?', options: ['They are being difficult on purpose', 'A protective response to feeling cornered', 'They do not want help', 'They misunderstood you'], answer: 1, rationale: 'Feeling cornered can trigger a protective reaction in people with trauma histories. Moving so they have an open path is respectful and safer.', distractors: 'Reading the reaction as defiance misses the pattern and escalates it.' } },
        ev(['SAMHSA, Concept of Trauma and Guidance for a Trauma-Informed Approach (2014): the definition and the four Rs.', 'SAMHSA, TIP 57, Trauma-Informed Care in Behavioral Health Services: six principles of a trauma-informed approach.', HCAI]),
      ],
    },
    {
      id: 'fbch-7-l3', title: 'Practices at the table', summary: 'Safety, choice, predictability, and not asking for the story.', minutes: 6,
      blocks: [
        { kind: 'list', title: 'What to do', items: [
          'Offer a choice at every step: where to sit, what to start with, whether to take a card.',
          'Say what will happen before it does: "I am going to ask three questions, and you can skip any of them."',
          'Leave space and an open path to the exit. Do not touch without asking.',
          'Use the name and language the person prefers.',
          'Let the person stop at any time without explaining why.',
        ] },
        { kind: 'list', title: 'What not to do', items: [
          'Do not ask for the story of what happened. Ask what the person needs now.',
          'Do not promise what you cannot control.',
          'Do not say "calm down" or "relax." Offer a pause or a glass of water instead.',
        ] },
        { kind: 'case', title: 'A person starts to tell you everything', scenario: true, text: [
          'During intake a person begins describing something painful in detail. What do you do?',
          'Answer: Listen briefly and respectfully, then gently steer: "Thank you for trusting me. You do not have to tell me more than you want. What would help most right now?" If they are in distress, stay with them and involve your supervisor.',
        ] },
        { kind: 'check', check: { id: 'fbch-7-c3', q: 'Why avoid asking for the full story of a painful event?', options: ['It takes too long', 'It can re-traumatize and it is not needed to connect the person to help', 'It is against HIPAA', 'It is the supervisor\'s job'], answer: 1, rationale: 'Asking for details can bring the harm back and does not change the referral you will make. Ask what the person needs now.', distractors: 'The reasons are safety and relevance, not time or a single rule.' } },
        ev(['SAMHSA, TIP 57: trauma-informed principles include safety, choice, collaboration, and empowerment.', 'SAMHSA, Concept of Trauma and Guidance for a Trauma-Informed Approach (2014).', HCAI]),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'SAMHSA: Trauma-Informed Care in Behavioral Health Services (TIP 57)', use: 'The principles behind this course.', url: 'https://www.samhsa.gov' },
    { name: 'Tervalon and Murray-García: Cultural Humility Versus Cultural Competence', use: 'The original paper on cultural humility.', url: 'https://muse.jhu.edu' },
    { name: 'National CLAS Standards', use: 'Standards for culturally and linguistically appropriate services.', url: 'https://thinkculturalhealth.hhs.gov' },
  ],
};

export const FBCH_MH_SUD: Course = {
  id: 'fbch-8', num: 8, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Mental Health + Substance Use Awareness',
  promise: 'Recognize common signs, talk about them without stigma, and know what to do and when to bring in help.',
  about: [
    'Mental health and substance use affect many of the people you will meet, and many of your colleagues. You are not there to diagnose. You are there to notice, respond kindly, and connect people to care.',
    'This course is awareness, not clinical training. It tells you what your role includes and where it ends.',
  ],
  objectives: [
    'Describe common mental health and substance use conditions in plain terms.',
    'Use language that reduces stigma.',
    'Respond to a person in distress using a simple action plan.',
    'Know when to call 988 or 911 and when to involve your supervisor.',
  ],
  minutes: 18,
  prerequisites: 'None.',
  whoFor: 'Outreach volunteers, navigators, promotoras, and anyone who will talk with members about how they are doing.',
  freshness: 'Clinical guidance and local resources change. Your program gives current numbers and protocols, and they take precedence over this course.',
  lessons: [
    {
      id: 'fbch-8-l1', title: 'What you may see', summary: 'Common conditions in plain terms, and why you do not diagnose.', minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Mental health conditions are common. According to the National Institute of Mental Health, about one in five adults in the United States lives with a mental illness in a given year. Substance use disorders are also common, and the two often occur together.',
          'You do not diagnose. A diagnosis needs a licensed professional. What you can do is notice changes and respond with care.',
        ] },
        { kind: 'steps', title: 'Common patterns, in plain terms', items: [
          { label: 'Depression', text: 'Low mood or loss of interest lasting weeks, with changes in sleep, appetite, energy, or concentration, and sometimes thoughts of death.' },
          { label: 'Anxiety', text: 'Persistent worry or fear that is hard to control, with restlessness, a racing heart, or avoiding places or situations.' },
          { label: 'Trauma-related stress', text: 'Reliving events, being on guard, trouble sleeping, or feeling numb, after something frightening.' },
          { label: 'Psychosis', text: 'Losing touch with what others see as real: hearing or seeing things, or fixed beliefs that others do not share. It is treatable and a person in it is still a person.' },
          { label: 'Substance use disorder', text: 'Continued use despite harm, with cravings, loss of control, and effects on health, relationships, and work.' },
        ] },
        { kind: 'check', check: { id: 'fbch-8-c1', q: 'What is your role when you notice signs of depression in a member?', options: ['Diagnose and treat it', 'Respond with care and connect the person to qualified help', 'Ignore it unless asked', 'Tell them to cheer up'], answer: 1, rationale: 'You notice, respond kindly, and connect. Diagnosis and treatment belong to licensed professionals.', distractors: 'Diagnosing exceeds your role, and ignoring or dismissing the signs leaves the person alone.' } },
        ev(['National Institute of Mental Health, Mental Illness statistics: about one in five U.S. adults lives with a mental illness.', 'NIDA, Drugs, Brains, and Behavior: The Science of Addiction: addiction is a treatable medical condition.', HCAI]),
      ],
    },
    {
      id: 'fbch-8-l2', title: 'Language without stigma', summary: 'The words that keep a conversation open.', minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Words can make people feel seen or judged. Person-first language names the person before the condition. NIDA recommends avoiding terms like "addict" and "abuser" because they label a person by a condition and are linked to more negative attitudes.',
        ] },
        { kind: 'steps', title: 'Say this, not that', items: [
          { label: 'A person with a substance use disorder', text: 'Not "an addict" or "a junkie."' },
          { label: 'A person with a mental health condition', text: 'Not "mentally ill" as a label, and never "crazy."' },
          { label: 'Died by suicide', text: 'Not "committed suicide," which sounds like a crime.' },
          { label: 'In recovery', text: 'Not "clean" or "dirty." Say a test result was positive or negative.' },
        ] },
        { kind: 'check', check: { id: 'fbch-8-c2', q: 'Which phrase is best?', options: ['"An addict came by"', '"A person with a substance use disorder came by"', '"A junkie came by"', '"A druggie came by"'], answer: 1, rationale: 'Person-first language names the person first and treats the condition as one part of them.', distractors: 'The other terms label the person and add stigma.' } },
        ev(['NIDA, Words Matter: Terms to Use and Avoid When Talking About Addiction: person-first language reduces stigma.', 'SAMHSA, Preferred Terminology and Language Guidelines for substance use and mental health.', HCAI]),
      ],
    },
    {
      id: 'fbch-8-l3', title: 'When someone is in distress', summary: 'A five-step plan and when to call for help.', minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Mental Health First Aid teaches a five-step action plan, known as ALGEE. It is not treatment. It is the first help a person needs while professional help is arranged.',
        ] },
        { kind: 'steps', title: 'ALGEE', items: [
          { label: 'Assess for risk of suicide or harm', text: 'Ask directly: "Are you thinking about hurting yourself?" Asking does not plant the idea.' },
          { label: 'Listen without judgment', text: 'Let the person talk. Do not argue or give advice yet.' },
          { label: 'Give reassurance and information', text: 'Say that help is possible and that you will stay with them while help arrives.' },
          { label: 'Encourage appropriate professional help', text: 'Offer 988, a clinic, or a supervisor, and connect the person warmly.' },
          { label: 'Encourage self-help and supports', text: 'Ask who they trust and what has helped before.' },
        ] },
        { kind: 'list', title: 'Call for help', items: [
          'Call or text 988 for the Suicide and Crisis Lifeline.',
          'Call 911 if there is immediate danger or a medical emergency.',
          'Tell your supervisor right away and write a factual note afterward.',
        ] },
        { kind: 'check', check: { id: 'fbch-8-c3', q: 'A person says they are thinking about ending their life. What do you do first?', options: ['Change the subject', 'Stay with them, ask directly about safety, and connect them to 988 or 911', 'Tell them they have so much to live for', 'Leave to find a supervisor'], answer: 1, rationale: 'Stay, ask directly, and connect to crisis help. Never leave a person in crisis alone if you can avoid it.', distractors: 'Changing the subject or reassuring without listening can leave the person alone with the thoughts.' } },
        ev(['Mental Health First Aid USA: the ALGEE action plan.', '988 Suicide and Crisis Lifeline: call or text 988 for confidential support.', 'SAMHSA, Suicide prevention resources: asking directly about suicide does not increase risk.']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988 any time.', url: 'https://988lifeline.org' },
    { name: 'NIDA: Words Matter', use: 'Language that reduces stigma.', url: 'https://nida.nih.gov' },
    { name: 'National Institute of Mental Health', use: 'Plain-language information on mental health conditions.', url: 'https://www.nimh.nih.gov' },
  ],
};

export const FBCH_HARM_REDUCTION: Course = {
  id: 'fbch-9', num: 9, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Harm Reduction Foundations',
  promise: 'Meet people where they are, reduce the risks of drug use without conditions, and know exactly what to do in an overdose.',
  about: [
    'Harm reduction is a set of practical strategies and a way of respecting people. It does not require someone to stop using before they can get help.',
    'This course covers the principles, the main tools, and the overdose response every community health worker should know.',
  ],
  objectives: [
    'Explain the principles of harm reduction.',
    'Describe common harm reduction tools and what they do.',
    'Respond to a suspected opioid overdose.',
    'Talk about use without judgment.',
  ],
  minutes: 16,
  prerequisites: 'Mental Health + Substance Use Awareness first is recommended.',
  whoFor: 'Outreach volunteers, navigators, promotoras, and anyone who may meet people who use drugs.',
  freshness: 'Laws and local programs change. Your program tells you what you may carry, distribute, and discuss, and its rules take precedence.',
  lessons: [
    {
      id: 'fbch-9-l1', title: 'The principles', summary: 'What harm reduction is and why it works.', minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Harm reduction accepts that some people use drugs and focuses on reducing the harm. SAMHSA describes it as a framework that includes a wide range of practices to reduce risks and improve safety and health. It is supported by decades of public health evidence, including reduced overdose deaths and infections without increasing drug use.',
        ] },
        { kind: 'steps', title: 'Principles from the National Harm Reduction Coalition', items: [
          { label: 'Meet people where they are', text: 'No one has to stop using to deserve respect or help.' },
          { label: 'Respect autonomy', text: 'People make their own decisions, and you support them.' },
          { label: 'Do not judge', text: 'Stigma keeps people away from care.' },
          { label: 'Reduce harm, not only use', text: 'Any positive change counts.' },
        ] },
        { kind: 'check', check: { id: 'fbch-9-c1', q: 'What is a core idea of harm reduction?', options: ['People must stop using before they get help', 'Meet people where they are and reduce the risks they face', 'Drug use should be encouraged', 'Treatment is never appropriate'], answer: 1, rationale: 'Harm reduction offers help without conditions and supports any step toward safety or health.', distractors: 'It does not encourage use or oppose treatment; it removes the barriers to both.' } },
        ev(['SAMHSA, Harm Reduction Framework (2023).', 'National Harm Reduction Coalition, Principles of Harm Reduction.', 'CDC, Syringe Services Programs: evidence that SSPs reduce infections and overdose without increasing drug use.']),
      ],
    },
    {
      id: 'fbch-9-l2', title: 'The tools', summary: 'Naloxone, safer use supplies, and testing, and what each does.', minutes: 5,
      blocks: [
        { kind: 'steps', title: 'Common tools', items: [
          { label: 'Naloxone', text: 'A medicine that reverses an opioid overdose. It is safe to give, works only on opioids, and does not harm someone who has not taken opioids.' },
          { label: 'Sterile supplies', text: 'New syringes and supplies lower the risk of infections such as HIV and hepatitis C.' },
          { label: 'Drug checking', text: 'Test strips can show whether fentanyl is present. Ask your program about what is permitted and distributed.' },
          { label: 'Safer use advice', text: 'Do not use alone, start with a small amount, avoid mixing, and keep naloxone nearby.' },
          { label: 'Linkage to care', text: 'Offer treatment, including medications for opioid use disorder, when the person is interested.' },
        ] },
        { kind: 'list', title: 'Your role', items: [
          'Share information and supplies only as your program allows.',
          'Refer, do not advise on dosing or treatment.',
          'Keep a respectful tone, and never require a person to commit to anything to receive supplies.',
        ] },
        { kind: 'check', check: { id: 'fbch-9-c2', q: 'What does naloxone do?', options: ['Prevents all overdoses', 'Reverses an opioid overdose', 'Treats opioid use disorder', 'Works on any drug'], answer: 1, rationale: 'Naloxone temporarily reverses the effects of opioids. A person still needs emergency care afterward.', distractors: 'It is not a treatment and it does not work on non-opioid drugs.' } },
        ev(['SAMHSA, Opioid Overdose Prevention Toolkit: naloxone and overdose response.', 'CDC, Naloxone: what it is and how it works.', 'National Harm Reduction Coalition, Harm Reduction Tools.']),
      ],
    },
    {
      id: 'fbch-9-l3', title: 'Responding to an overdose', summary: 'Recognize it, act, and stay.', minutes: 5,
      blocks: [
        { kind: 'steps', title: 'Signs of an opioid overdose', items: [
          { label: 'Unresponsive', text: 'The person does not wake when you shake them and call their name.' },
          { label: 'Slow or no breathing', text: 'Breathing is very slow, noisy, or stopped.' },
          { label: 'Blue or gray skin, lips, or fingertips', text: 'This signals too little oxygen.' },
          { label: 'Small pupils', text: 'Pinpoint pupils are common.' },
        ] },
        { kind: 'steps', title: 'What to do', items: [
          { label: 'Call 911', text: 'Say a person is not breathing. Stay on the line.' },
          { label: 'Give naloxone', text: 'Follow your program\'s training and the instructions on the kit.' },
          { label: 'Support breathing', text: 'If you are trained, give rescue breaths. Otherwise keep the person on their side with the airway clear.' },
          { label: 'Stay', text: 'The person may wake and the naloxone may wear off. Stay until help arrives and give a second dose if breathing slows again.' },
        ] },
        { kind: 'prose', text: [
          'California law offers limited protection to people who seek emergency help for an overdose. Ask your program for the current rule. Never delay calling 911 out of fear.',
        ] },
        { kind: 'check', check: { id: 'fbch-9-c3', q: 'You find a person who will not wake and is barely breathing. What do you do first?', options: ['Wait to see if they wake', 'Call 911 and give naloxone', 'Give them water', 'Walk them around'], answer: 1, rationale: 'Call 911 and give naloxone right away. Do not wait.', distractors: 'Waiting, water, or walking can cost minutes the person does not have.' } },
        ev(['SAMHSA, Opioid Overdose Prevention Toolkit: recognizing and responding to an overdose.', 'CDC, Preventing Opioid Overdose: steps to respond.', 'California Health and Safety Code section 11376.5 (Good Samaritan law): limited protection when seeking help for an overdose.']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'SAMHSA: Opioid Overdose Prevention Toolkit', use: 'Overdose response steps.', url: 'https://www.samhsa.gov' },
    { name: 'National Harm Reduction Coalition', use: 'Principles and practices of harm reduction.', url: 'https://harmreduction.org' },
    { name: 'CDC: Syringe Services Programs', use: 'The evidence for syringe services.', url: 'https://www.cdc.gov' },
  ],
};

export const FBCH_MI: Course = {
  id: 'fbch-10', num: 10, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Motivational Interviewing Foundations',
  promise: 'Talk with someone about a change in a way that strengthens their own reasons, instead of arguing with them.',
  about: [
    'Motivational interviewing is a way of talking that helps people find their own reasons to change. It is the most widely taught counseling method in community health work.',
    'This course teaches the ideas and the core skills. You practice them live with feedback, because skill comes from doing it.',
  ],
  objectives: [
    'Describe the spirit of motivational interviewing.',
    'Use open questions, affirmations, reflections, and summaries.',
    'Tell change talk from sustain talk and respond to each.',
    'Avoid the urge to fix and persuade.',
  ],
  minutes: 17,
  prerequisites: 'Communication + Active Listening first is recommended.',
  whoFor: 'Navigators, promotoras, case managers, and anyone who supports people in making a health change.',
  lessons: [
    {
      id: 'fbch-10-l1', title: 'The spirit', summary: 'Partnership, acceptance, compassion, and evocation.', minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Miller and Rollnick describe motivational interviewing as a collaborative conversation that strengthens a person\'s own motivation and commitment to change. The method rests on a spirit of four parts.',
          'The most common mistake is the righting reflex, the urge to fix a problem by telling the person what to do. People tend to argue against being told. They believe what they hear themselves say.',
        ] },
        { kind: 'steps', title: 'Four parts of the spirit', items: [
          { label: 'Partnership', text: 'You work with the person, not on them.' },
          { label: 'Acceptance', text: 'You respect their worth, their right to choose, and what they are already doing well.' },
          { label: 'Compassion', text: 'You promote their welfare.' },
          { label: 'Evocation', text: 'You draw out their own reasons, not install yours.' },
        ] },
        { kind: 'check', check: { id: 'fbch-10-c1', q: 'What is the righting reflex?', options: ['The urge to fix by telling people what to do', 'A way of reflecting feelings', 'A form of praise', 'A test of motivation'], answer: 0, rationale: 'The righting reflex is the pull to correct and advise. It often produces resistance.', distractors: 'The others are tools of the method, not the reflex it asks you to resist.' } },
        ev(['Miller and Rollnick, Motivational Interviewing: Helping People Change, third edition (2013): the spirit and the righting reflex.', 'Rubak et al., "Motivational interviewing: a systematic review and meta-analysis," British Journal of General Practice (2005): effectiveness across health settings.', HCAI]),
      ],
    },
    {
      id: 'fbch-10-l2', title: 'The core skills', summary: 'Open questions, affirmations, reflections, and summaries.', minutes: 6,
      blocks: [
        { kind: 'steps', title: 'OARS', items: [
          { label: 'Open questions', text: '"What would be different if you quit smoking?" invites the person to think and talk.' },
          { label: 'Affirmations', text: '"You came in today even though it was hard." Affirm effort and strengths, and keep it genuine.' },
          { label: 'Reflections', text: '"You want to cut back, and it is harder with friends around." A reflection is a guess at what the person means, offered as a statement.' },
          { label: 'Summaries', text: 'Gather what you heard into a short recap, ending with "What else?"' },
        ] },
        { kind: 'case', title: 'A conversation', scenario: true, text: [
          'A woman says, "My doctor says I need to lose weight, and I am tired of hearing it." A reflection: "You have heard this a lot and it has not helped." An open question: "What would you want to be different?"',
          'What does not work: "But you need to, for your health."',
        ] },
        { kind: 'check', check: { id: 'fbch-10-c2', q: 'Which is a reflection?', options: ['"Why haven\'t you started?"', '"You want to change, and it feels like a lot."', '"You should walk daily."', '"Do you want to quit?"'], answer: 1, rationale: 'A reflection states what you heard or sense, and invites the person to go further.', distractors: 'The others are a question that can feel like blame, advice, and a closed question.' } },
        ev(['Miller and Rollnick, Motivational Interviewing, third edition (2013): OARS skills.', 'Rubak et al. (2005): MI had a significant effect in a majority of studies.', HCAI]),
      ],
    },
    {
      id: 'fbch-10-l3', title: 'Change talk and sustain talk', summary: 'Listening for the person\'s own reasons and handling the other side.', minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'Change talk is a person\'s own language in favor of change: wanting it, being able to, having reasons, being ready. Sustain talk is language in favor of staying the same. Both are normal. Ambivalence is the common state.',
          'You respond to change talk by reflecting and asking for more. You respond to sustain talk by acknowledging it and not arguing: "Part of you is not sure this is worth it." Rolling with resistance keeps the door open.',
        ] },
        { kind: 'steps', title: 'Listen for', items: [
          { label: 'Desire', text: '"I want to feel better."' },
          { label: 'Ability', text: '"I think I could manage that."' },
          { label: 'Reasons', text: '"My kids need me to be around."' },
          { label: 'Need', text: '"I have to do something."' },
          { label: 'Commitment', text: '"I will call on Monday."' },
        ] },
        { kind: 'check', check: { id: 'fbch-10-c3', q: 'A person says, "I know I should cut back, but I do not think I can." What is best?', options: ['Argue that they can', 'Reflect both sides: "Part of you wants to, and part of you is not sure," then ask about what would make it possible', 'Tell them to try harder', 'Move on'], answer: 1, rationale: 'Reflecting both sides honors the ambivalence and invites the person to explore what would help.', distractors: 'Arguing or pushing tends to increase resistance.' } },
        ev(['Miller and Rollnick, Motivational Interviewing, third edition (2013): change talk, sustain talk, and rolling with resistance.', 'Rubak et al. (2005).', HCAI]),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'Motivational Interviewing Network of Trainers', use: 'Training and resources for motivational interviewing.', url: 'https://motivationalinterviewing.org' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Why this skill is taught live.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'SAMHSA: Enhancing Motivation for Change in Substance Use Disorder Treatment (TIP 35)', use: 'A reference on the method in behavioral health.', url: 'https://www.samhsa.gov' },
  ],
};
