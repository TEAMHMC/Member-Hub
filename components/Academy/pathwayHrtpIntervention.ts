// Community Mental Health Worker Pathway (HRTP), course 8: Intervention.
//
// The third of three courses built around education, prevention, and intervention. This one is
// intervention: what a community mental health worker does when someone is in distress or
// crisis, and how they stay with the person afterward. It covers the path from distress to
// crisis, listening, asking about suicide and keeping someone safe, panic and a break from
// reality, connecting to care and supporting recovery, and following up.
//
// The five steps for helping someone having thoughts of suicide are from the National Institute
// of Mental Health and the 988 Lifeline. They are public guidance. This course does not copy any
// outside curriculum. Mental Health First Aid belongs to the National Council for Mental
// Wellbeing, and the course names it and says how to find it so a learner can go deeper.
//
// Clinical rule for every lesson: a worker never diagnoses, never tells anyone to start, stop,
// or change a medication, and never keeps a safety risk secret. Phone numbers other than 911,
// 988 and 211 are not printed. Facilitators give local numbers.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

const HCAI = 'California HCAI, CHW/P/R Training Program Best Practices Framework: the 11 core competencies, live practice for relationship skills, and supervised field work.';
const TIP57 = 'SAMHSA, TIP 57, Trauma-Informed Care in Behavioral Health Services (2014): safety, trustworthiness, and choice in every contact.';
const MILLER = 'Miller WR, Rollnick S. Motivational Interviewing: Helping People Change, third edition (2013): open questions, affirmations, reflective listening, and summaries.';
const NIDA = 'NIDA, Words Matter: Terms to Use and Avoid When Talking About Addiction.';
const NIMH_STEPS = 'NIMH, 5 Action Steps to Help Someone Having Thoughts of Suicide: ask, keep them safe, be there, help them connect, and follow up.';
const DAZZI = 'Dazzi T, et al. Does asking about suicide and related behaviours induce suicidal ideation? What is the evidence? Psychological Medicine 2014;44(16):3361-3363: 13 studies, none found an increase.';
const CDC_SUI = 'CDC, Preventing Suicide: A Technical Package of Policy, Programs, and Practices (2017): protective environments including reducing access to lethal means, and identifying and supporting people at risk.';
const STANLEY = 'Stanley B, et al. Comparison of the Safety Planning Intervention with follow-up vs usual care of suicidal patients treated in the emergency department. JAMA Psychiatry 2018;75(9):894-900: lower suicidal behavior and more treatment attendance at six months. An observational comparison.';
const SAMHSA_CRISIS = 'SAMHSA, National Guidelines for Behavioral Health Crisis Care: A Best Practice Toolkit (2020): someone to talk to, someone to respond, and somewhere to go.';
const RECOVERY = 'SAMHSA, Working Definition of Recovery (2012): health, home, purpose, and community.';

export const MH_INTERVENTION: Course = {
  id: 'hrtp_mh_intervention',
  num: 8,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Intervention: Early Support, Crisis Response, and Recovery',
  promise:
    'Recognize when someone needs help now, listen without judging, ask about suicide, keep a person safe, connect them to care, and stay with them afterward while looking after yourself.',
  about: [
    'Intervention is what you do when someone is struggling now. Sometimes it is early support, sometimes it is a crisis, and often it is steady presence over weeks.',
    'This course teaches the steps and gives you practice. Two facilitated sessions let you try them with feedback before you do them for real.',
  ],
  objectives: [
    'Describe the path from distress to crisis and what a worker does at each point.',
    'Start a conversation and listen without judging or fixing.',
    'Ask directly about suicide, keep a person safe, and connect them to 988, 911, or a clinician.',
    'Respond to panic, intense distress, and a break from reality in ways that help.',
    'Connect a person to care, support their recovery, and follow up.',
    'Write honest same-day notes and look after your own wellbeing.',
  ],
  minutes: 125,
  prerequisites: 'Complete The Community Health Worker Role, History, and Field first. Prevention is helpful before this course.',
  whoFor:
    'People preparing for community mental health, peer, outreach, crisis-adjacent, or care coordination work, including people with lived experience.',
  freshness:
    'Crisis services and local contacts change. Your program lead will give you current numbers and tell you what your program does in an emergency.',
  requirements: [
    { id: 'lessons', kind: 'assignment', label: 'Finish the six lessons and your practice file', detail: 'About an hour and fifteen minutes at your own pace, plus the practice file.' },
    { id: 'practice-1', kind: 'attend', label: 'Facilitated practice: asking about suicide and staying with someone', detail: 'Two hours with a facilitator. Role play with feedback, and a plan for what you will do next. Sessions are listed on this page when scheduled.' },
    { id: 'practice-2', kind: 'attend', label: 'Facilitated practice: panic, distress, and a break from reality', detail: 'Two hours with a facilitator. Role play with feedback, and practice handing off to a clinician. Sessions are listed on this page when scheduled.' },
  ],
  lessons: [
    // ── Lesson 1 ───────────────────────────────────────────────────────────
    {
      id: 'mhi-l1',
      title: 'From distress to crisis, and your part',
      summary: 'A range of need, the crisis system around you, and what a worker does and does not do.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'People rarely announce a crisis. They get quiet, or angry, or they say something offhand. If you know the path from distress to crisis, you can respond at the earliest point that helps.',
        ] },
        { kind: 'concept', title: 'A range of need', text: [
          'Distress is part of life: a bad week, a loss, a fight. A crisis is when a person\'s distress or behavior puts them or others at risk, or when they can no longer cope. An emergency is when someone is in immediate danger. Most distress never becomes a crisis, and many crises are not emergencies.',
          'Your response should match where the person is. Early on, listening and connection may be enough. In a crisis, you stay, you ask, and you bring in help. In an emergency, you call 911 or 988.',
        ] },
        { kind: 'concept', title: 'The system around you', text: [
          'National guidance describes a crisis system with three parts: someone to talk to, someone to respond, and somewhere to go. The 988 Lifeline is someone to talk to, by phone or text. Mobile crisis teams are someone to respond. Crisis receiving and stabilization units are somewhere to go. Your supervisor knows what is available in your area.',
        ] },
        { kind: 'list', title: 'What your role usually includes', items: [
          'Noticing early and starting a conversation.',
          'Listening, staying calm, and staying with the person.',
          'Asking directly about suicide.',
          'Calling 988 or 911 and telling your supervisor.',
          'Connecting the person to care and following up.',
        ] },
        { kind: 'list', title: 'What your role does not include', items: [
          'Diagnosing or treating.',
          'Telling anyone to start, stop, or change a medication.',
          'Making promises of secrecy about safety.',
          'Handling a dangerous situation alone.',
        ] },
        { kind: 'check', check: {
          id: 'mhi-l1-q1',
          q: 'Which is part of a community mental health worker\'s role in a crisis?',
          options: [
            'Diagnosing what is wrong',
            'Staying with the person, asking directly about suicide, and calling for help',
            'Advising the person on medication',
            'Handling a dangerous situation alone to protect privacy',
          ],
          answer: 1,
          rationale: 'You stay, ask, and bring in help. Diagnosis, medication advice, and handling danger alone are outside the role.',
          distractors: 'Diagnosis and medication are for clinicians, and a dangerous situation needs more people, not secrecy.',
        } },
        { kind: 'takeaways', items: [
          'Match your response to where the person is: distress, crisis, or emergency.',
          '988 is someone to talk to. Know who responds and where people can go in your area.',
          'You stay, ask, and bring in help.',
        ] },
        ev([SAMHSA_CRISIS, NIMH_STEPS, HCAI]),
      ],
    },
    // ── Lesson 2 ───────────────────────────────────────────────────────────
    {
      id: 'mhi-l2',
      title: 'Starting a conversation and listening',
      summary: 'Open questions, reflecting, and staying calm with someone who is hurting.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'Most of what helps in a hard moment is a calm person who listens. You do not need the perfect words. You need steadiness and attention.',
        ] },
        { kind: 'concept', title: 'Begin with what you notice', text: [
          'Say what you have seen, without judging, and ask about it. \'I have noticed you have been quiet this week. How are you doing?\' Choose a private spot. Sit at the same level. Give space and time.',
        ] },
        { kind: 'concept', title: 'Four listening skills', text: [
          'Motivational interviewing teaches four basic listening skills that work well in hard conversations. Open questions invite more than yes or no. Affirmations name a strength you see. Reflections say back what you heard, in your own words. Summaries pull the pieces together and check you understood.',
        ] },
        { kind: 'list', title: 'What to avoid', items: [
          'Fixing too fast: \'Here is what you should do.\'',
          'Minimizing: \'It could be worse\' or \'Calm down.\'',
          'Arguing with what the person feels.',
          'Asking for the full story of what happened.',
          'Labels and slang. Use respectful language.',
        ] },
        { kind: 'example', title: 'A reflection in action', text: [
          'Person: \'I just cannot do this anymore.\'',
          'Weak: \'Sure you can. Everyone feels that way sometimes.\'',
          'Better: \'It sounds like you are exhausted and at the end of what you can carry. Tell me more about what has been the hardest.\'',
        ] },
        { kind: 'tryit', title: 'Practice a reflection', text: [
          'Write a reflection for each: \'Nothing I do matters.\' \'I cannot sleep and I cannot stop thinking.\' \'My family does not want me around.\' Read them aloud. Each should name the feeling, not argue with it.',
        ] },
        { kind: 'check', check: {
          id: 'mhi-l2-q1',
          q: 'A person says, \'I cannot do this anymore.\' Which response is best?',
          options: [
            'You can, everyone feels like this sometimes.',
            'Calm down, it is not that bad.',
            'It sounds like you are exhausted. Tell me more about what has been the hardest.',
            'What exactly happened?',
          ],
          answer: 2,
          rationale: 'It reflects the feeling and invites more without arguing or probing for the whole story.',
          distractors: 'The first two minimize, and demanding what happened can push the person away.',
        } },
        { kind: 'takeaways', items: [
          'Say what you notice and ask. Be calm and unhurried.',
          'Use open questions, affirmations, reflections, and summaries.',
          'Do not fix fast, minimize, or argue.',
        ] },
        ev([MILLER, TIP57, NIDA]),
      ],
    },
    // ── Lesson 3 ───────────────────────────────────────────────────────────
    {
      id: 'mhi-l3',
      title: 'Asking about suicide and keeping someone safe',
      summary: 'Five steps: ask, keep them safe, be there, help them connect, and follow up.',
      minutes: 14,
      blocks: [
        { kind: 'why', text: [
          'This is the lesson that can save a life. The steps are simple, and the hardest part is saying the words. You will practice them with a facilitator.',
        ] },
        { kind: 'concept', title: 'Asking does not raise the risk', text: [
          'Many people worry that asking about suicide will put the idea in someone\'s mind. A review of 13 studies found that asking did not increase suicidal thoughts, and that talking about it may bring relief. Not asking leaves the person alone with it.',
        ] },
        { kind: 'steps', title: 'The five steps', items: [
          { label: 'Ask', text: 'In plain words: \'Are you thinking about suicide?\' Do not soften it or hint.' },
          { label: 'Keep them safe', text: 'If they say yes, ask whether they have a plan and what they have to carry it out. Help put distance between the person and anything they could use, such as medication or firearms, if it can be done safely and with permission. If anyone is in immediate danger, call 911.' },
          { label: 'Be there', text: 'Listen without judging. Stay with the person. Do not leave someone in immediate danger alone.' },
          { label: 'Help them connect', text: 'Connect them to the 988 Lifeline by phone or text, or to a clinician or crisis team. Call with them if they are willing. Tell your supervisor right away.' },
          { label: 'Follow up', text: 'Check in again within a day or two, then as agreed. Contact after a crisis matters.' },
        ] },
        { kind: 'concept', title: 'Making the place safer', text: [
          'Reducing access to the means a person has thought about is a recommended suicide prevention strategy, because the most dangerous period can be brief. You do not search or take things. You ask, and you help the person and the people who live with them to put distance in place, with your supervisor\'s guidance.',
        ] },
        { kind: 'concept', title: 'A written plan with follow-up', text: [
          'A clinician or your program may help a person write a short safety plan: warning signs, steps they can take, people and places that help, who to call, and making the environment safer. In one study, people who left an emergency department with a safety plan and follow-up calls had fewer suicidal behaviors over six months and were more likely to attend treatment. You help only as your program directs.',
        ] },
        { kind: 'fieldnote', title: 'What to say and what not to say', text: [
          'Say: \'I am glad you told me. I am here. Let us get you some help.\' Do not say: \'You have so much to live for,\' \'Think of your family,\' or \'You would never really do it.\' Do not promise to keep it secret.',
        ] },
        { kind: 'check', check: {
          id: 'mhi-l3-q1',
          q: 'A young man tells you he has been thinking about ending his life. What do you do?',
          options: [
            'Promise to keep it between you and tell no one',
            'Tell him he has too much to live for and change the subject',
            'Stay with him, ask whether he has a plan, call 988 or 911 as needed, and tell your supervisor right away',
            'Wait a few days to see how he is doing',
          ],
          answer: 2,
          rationale: 'You stay, ask, bring in help, and tell your supervisor. Secrecy, reassurance, and waiting leave him at risk.',
          distractors: 'Promising secrecy cannot be kept when safety is at risk. Changing the subject and waiting both leave him alone.',
        } },
        { kind: 'takeaways', items: [
          'Ask directly. It does not raise the risk.',
          'Stay, keep the place safer, connect to 988 or 911, and tell your supervisor.',
          'Follow up. Contact after a crisis matters.',
        ] },
        ev([NIMH_STEPS, DAZZI, CDC_SUI, STANLEY]),
      ],
    },
    // ── Lesson 4 ───────────────────────────────────────────────────────────
    {
      id: 'mhi-l4',
      title: 'Panic, intense distress, and a break from reality',
      summary: 'What helps and what harms when someone is overwhelmed or out of touch with what is happening.',
      minutes: 13,
      blocks: [
        { kind: 'why', text: [
          'Not every crisis is about suicide. People can be overwhelmed by panic or fear, or lose touch with reality for a time. What you do in the first minutes matters, and so does what you avoid.',
        ] },
        { kind: 'concept', title: 'Panic', text: [
          'A panic attack is a sudden wave of intense fear with a racing heart, shortness of breath, shaking, and a feeling of losing control or dying. It feels dangerous, and it usually passes within minutes. Stay with the person, speak slowly, and help them slow their breathing. Ask what has helped before.',
          'Be careful. Chest pain, trouble breathing, or symptoms in someone with a heart problem can be a medical emergency. If you are not sure, call 911.',
        ] },
        { kind: 'concept', title: 'Intense distress or agitation', text: [
          'A person may be frightened, shouting, or pacing. Lower the stimulation: a quieter space, fewer people, and a calm voice. Keep a safe distance and an exit. Do not argue, crowd, or touch without permission. Say what you are doing. If anyone is in danger, step back and call 911.',
        ] },
        { kind: 'concept', title: 'A break from reality', text: [
          'Psychosis means a person may hear or see things that others do not, or hold strong beliefs that do not match what others see. It can be very frightening. Do not argue with the belief, and do not play along. Acknowledge the feeling: \'That sounds frightening.\' Keep your voice calm, speak simply, and focus on safety and getting a clinician to see them. If there is any danger, call 911.',
        ] },
        { kind: 'concept', title: 'Alcohol or drugs', text: [
          'If someone cannot be woken, is breathing slowly or not at all, or has blue lips, treat it as an overdose: call 911 and use naloxone if you are trained and your program supplies it. Stay until help arrives. The reentry course covers overdose in more detail.',
        ] },
        { kind: 'myths', items: [
          { myth: 'You should tell a person who is hearing voices that they are not real.', reality: 'Arguing rarely helps and can add fear. Acknowledge the feeling, stay calm, and get clinical help.' },
          { myth: 'A panic attack is only in the head and not serious.', reality: 'It is frightening and real. Treat it kindly, and call 911 if you are unsure it is not a medical emergency.' },
        ] },
        { kind: 'check', check: {
          id: 'mhi-l4-q1',
          q: 'A man tells you the neighbors are broadcasting his thoughts and he is frightened. What do you do?',
          options: [
            'Tell him the neighbors are not doing that and he should relax',
            'Agree with him so he trusts you',
            'Stay calm, say that it sounds frightening, focus on safety, and help him reach a clinician',
            'Leave him alone until he calms down',
          ],
          answer: 2,
          rationale: 'You acknowledge the feeling without arguing or agreeing, and you focus on safety and clinical help.',
          distractors: 'Arguing adds fear, agreeing confirms the belief, and leaving him alone abandons him.',
        } },
        { kind: 'takeaways', items: [
          'Panic passes. Stay, slow your voice, slow the breathing, and call 911 if unsure.',
          'Lower stimulation for intense distress. Do not argue, crowd, or touch without permission.',
          'With psychosis, do not argue or agree. Acknowledge the feeling and get a clinician.',
        ] },
        ev(['NIMH, Panic Disorder: When Fear Overwhelms: signs of a panic attack and how it is treated.',
          'NIMH, Understanding Psychosis: what psychosis is and that coordinated specialty care helps.',
          TIP57,
          SAMHSA_CRISIS]),
      ],
    },
    // ── Lesson 5 ───────────────────────────────────────────────────────────
    {
      id: 'mhi-l5',
      title: 'Connecting to care and supporting recovery',
      summary: 'A warm handoff, supporting treatment without advising on it, and what recovery asks of a community.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'A crisis passes, and what follows decides how the person does. Connection to care, steady support, and the pieces of a life in recovery are what keep people well.',
        ] },
        { kind: 'concept', title: 'Connect, do not just refer', text: [
          'A name and number on a slip of paper often fails. A warm handoff works better: you contact the provider with the person, share only what they agreed to, and confirm that an appointment is set. Offer to go with them or help with a ride. Follow up to see whether the visit happened.',
        ] },
        { kind: 'concept', title: 'Supporting treatment without advising on it', text: [
          'You can ask how treatment is going, help with transportation and reminders, and help the person prepare questions for their clinician. You do not choose, start, stop, or change medication. If a person has concerns about side effects or wants to stop, listen and help them talk to their prescriber.',
        ] },
        { kind: 'list', title: 'Recovery has four parts', items: [
          'Health: managing symptoms and making healthy choices.',
          'Home: a stable, safe place to live.',
          'Purpose: work, school, caring for family, or other meaningful activity.',
          'Community: relationships that give support, friendship, and hope.',
        ] },
        { kind: 'concept', title: 'The role of peers', text: [
          'Support from people with similar experience helps many people feel less alone and more hopeful. The evidence for peer support is moderate and still growing, and peer work is strongest when workers are trained and supervised. If you have lived experience, you may offer this, within the limits your program sets.',
        ] },
        { kind: 'concept', title: 'When a setback happens', text: [
          'Setbacks are part of recovery. A missed appointment or a hard week does not mean failure. Stay in touch, avoid blame, ask what got in the way, and make a small plan for the next step.',
        ] },
        { kind: 'check', check: {
          id: 'mhi-l5-q1',
          q: 'A woman you support says she wants to stop her medication because of side effects. What do you do?',
          options: [
            'Tell her to stop it',
            'Tell her she must keep taking it',
            'Listen, take the concern seriously, and help her talk to the person who prescribed it',
            'Ask a friend who takes it what they do',
          ],
          answer: 2,
          rationale: 'You take it seriously and connect her to the prescriber. Advice on medication is outside your role.',
          distractors: 'Telling her to stop or to keep taking it are both medication advice, and a friend is not a safe source.',
        } },
        { kind: 'takeaways', items: [
          'Make a warm handoff and follow up. Do not just give a number.',
          'Support treatment. Do not advise on medication.',
          'Recovery is health, home, purpose, and community. Setbacks are part of it.',
        ] },
        ev([RECOVERY,
          'Chinman M, et al. Peer support services for individuals with serious mental illnesses: assessing the evidence. Psychiatric Services 2014;65(4):429-441: moderate evidence, with limits in the studies.',
          STANLEY]),
      ],
    },
    // ── Lesson 6 ───────────────────────────────────────────────────────────
    {
      id: 'mhi-l6',
      title: 'After a crisis: notes, follow-up, and looking after yourself',
      summary: 'Same-day notes, a debrief with your supervisor, your own wellbeing, and courses to take next.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'A crisis does not end when the person is safe. What you write, who you tell, and how you care for yourself decide whether you can keep doing this work.',
        ] },
        { kind: 'concept', title: 'Same-day notes', text: [
          'Write down what happened as soon as you can: the date and time, what you saw and heard, the words the person used, what you did, who you told, and what happens next. Write facts, not guesses. Keep notes where your program says and share them only with people who need them.',
        ] },
        { kind: 'example', title: 'A good note and a weak one', text: [
          'Good: \'Oct 14, 2:15 p.m. Maya, 17, said she has been thinking about suicide for two weeks and has a plan. Stayed with her. Called 988 with her at 2:30. Told supervisor at 2:45. Mother arriving at 3:30. Follow up call Oct 15.\'',
          'Weak: \'Maya was upset. Handled it.\'',
        ] },
        { kind: 'concept', title: 'Debrief and your wellbeing', text: [
          'Sit down with your supervisor soon after a crisis. Go over what happened, what worked, and what you would do differently. Hard moments can stay with you. Notice trouble sleeping, dread, numbness, or irritability, and talk to your supervisor early. Eat, rest, and keep your own supports. Asking for help is part of the job.',
        ] },
        { kind: 'list', title: 'Going deeper: courses from other organizations', items: [
          'Mental Health First Aid, from the National Council for Mental Wellbeing, has adult and youth courses taught by certified instructors. Courses usually run about eight hours, and the certificate is renewed after three years. Find a course near you with the course locator at mentalhealthfirstaid.org, and confirm current dates and requirements with the provider.',
          'The 988 Suicide and Crisis Lifeline offers information for helpers at 988lifeline.org.',
          'CPR and first aid, and overdose response with naloxone, from your program or a certified provider.',
          'Ask your program lead which to take first. This course teaches its own material. It does not replace these courses or their certificates.',
        ] },
        { kind: 'check', check: {
          id: 'mhi-l6-q1',
          q: 'Which note would a supervisor find most useful after a crisis?',
          options: [
            'Maya was upset. Handled it.',
            'Oct 14, 2:15 p.m. Maya said she has a plan. Stayed with her, called 988 with her at 2:30, told supervisor at 2:45, follow up Oct 15.',
            'Maya seemed dramatic today.',
            'A long account of Maya\'s family history.',
          ],
          answer: 1,
          rationale: 'It records what was said, what you did, who you told, and what comes next, with times.',
          distractors: 'The others leave out what matters, add opinion, or record more than is needed.',
        } },
        { kind: 'takeaways', items: [
          'Write facts the same day: what was said, what you did, who you told, what is next.',
          'Debrief with your supervisor and look after yourself early.',
          'Mental Health First Aid and CPR are next steps you can take.',
        ] },
        ev([NIMH_STEPS, TIP57, HCAI]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'mhi-practice',
    title: 'Your intervention practice file',
    minutes: 50,
    purpose: 'Practice for made-up situations. You bring it to the facilitated sessions and keep it for interviews.',
    fields: [
      { id: 'reflect', label: 'Three reflections', help: 'Write a reflection for each statement your facilitator gives you. Name the feeling and do not argue.', multiline: true },
      { id: 'ask', label: 'The five steps in your words', help: 'Write what you would say for each of ask, keep them safe, be there, help them connect, and follow up.', multiline: true },
      { id: 'safety', label: 'Safety steps and your contacts', help: 'List the numbers and people you would call in an emergency and in a crisis that is not an emergency, from your program lead.', multiline: true },
      { id: 'handoff', label: 'A warm handoff', help: 'For a made-up person, write who you would contact, what you would share with permission, and how you would follow up.', multiline: true },
      { id: 'note', label: 'A same-day note', help: 'Write a note for a made-up crisis using the good-note model.', multiline: true },
      { id: 'care', label: 'Your own wellbeing plan', help: 'Three things you will do after a hard day and who you will talk to.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'NIMH: 5 Action Steps to Help Someone Having Thoughts of Suicide', use: 'The five steps taught in this course, from the National Institute of Mental Health.', url: 'https://www.nimh.nih.gov' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988 any time. Information for helpers.', url: 'https://988lifeline.org' },
    { name: 'National Council for Mental Wellbeing: Mental Health First Aid', use: 'Adult and youth courses from another organization. Find a course with the course locator. This course does not replace it.', url: 'https://www.mentalhealthfirstaid.org' },
    { name: 'SAMHSA: National Guidelines for Behavioral Health Crisis Care', use: 'How a crisis system fits together: someone to talk to, someone to respond, somewhere to go.', url: 'https://www.samhsa.gov' },
    { name: 'SAMHSA: Recovery and Recovery Support', use: 'The national working definition of recovery.', url: 'https://www.samhsa.gov/find-help/recovery' },
    { name: '211 Los Angeles County', use: 'Search local health, housing, food, and legal services.', url: 'https://211la.org' },
  ],
};
