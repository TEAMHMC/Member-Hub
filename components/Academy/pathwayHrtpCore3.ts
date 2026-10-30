// Community Mental Health Worker Pathway (HRTP), course 5: Community Health Work in Reentry.
//
// The role itself, taught as work. Medi-Cal's Justice-Involved Initiative pays for services by
// community health workers with lived experience in the 90 days before release, and this course
// teaches what that work is: building trust, finding barriers, writing a reentry plan with the
// person, running a warm handoff, staying in touch, keeping people safe after release, and
// keeping yourself steady. It is organized around the 11 core competencies, because those are
// what a supervising provider checks a certificate against.
//
// The lessons are self-paced. The practice is not: two facilitated sessions and one supervised
// contact are listed as completion requirements, and sessions appear on the course page when the
// program schedules them.
//
// Phone numbers other than 911, 988 and 211 are not printed. They change, and a wrong number in
// a safety course is worse than none. Facilitators give current county numbers in session.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

const HCAI = 'California HCAI, CHW/P/R Training Program Best Practices Framework: the 11 core competencies, live practice for relationship skills, and supervised field work.';
const DHCS_JI = 'California DHCS, Transformation of Medi-Cal: Justice-Involved fact sheet: pre-release services in the 90 days before release, including reentry care management and services by community health workers with lived experience, and a warm handoff to Enhanced Care Management after release.';

export const CHW_REENTRY: Course = {
  id: 'hrtp_reentry_chw',
  num: 5,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Community Health Work in Reentry',
  promise:
    'Do the work of a community health worker with someone preparing to leave jail or prison: build trust, find the barriers, write the plan together, run a warm handoff, and stay with them after release.',
  about: [
    'California now pays for health services in the 90 days before someone leaves jail or prison, and those services include work by community health workers with lived experience. This course teaches that work.',
    'The lessons are at your own pace. Two facilitated practice sessions and one supervised contact complete the course, because trust and handoffs are learned by doing them with feedback.',
  ],
  objectives: [
    'Describe your role on the reentry team and where it stops.',
    'Open a first conversation in a way that builds trust, and use your own story with care.',
    'Find the barriers to health care after release and put them in order.',
    'Write a reentry plan with a person and run a warm handoff.',
    'Keep contact after release and respond when someone goes quiet.',
    'Teach the safety points that matter in the first weeks, including overdose, medication, and crisis.',
    'Keep boundaries, privacy, and your own wellbeing steady.',
    'Write honest same-day notes.',
  ],
  minutes: 160,
  prerequisites: 'Complete The Community Health Worker Role, History, and Field first.',
  whoFor:
    'People preparing for community health, peer, reentry, or care coordination work, including people with lived experience of incarceration.',
  freshness:
    'Reentry programs are set by the State and counties and they change. Your program lead will give you current contacts and rules for the facilities you serve.',
  requirements: [
    { id: 'lessons', kind: 'assignment', label: 'Finish the nine lessons and your practice file', detail: 'About two hours and forty minutes at your own pace.' },
    { id: 'practice-1', kind: 'attend', label: 'Facilitated practice session 1: trust and the first conversation', detail: 'Two hours with a facilitator. Role play, feedback, and a plan for your own boundaries. Sessions are listed on this page when scheduled.' },
    { id: 'practice-2', kind: 'attend', label: 'Facilitated practice session 2: the plan and the warm handoff', detail: 'Two hours with a facilitator. Write a plan with a partner and run a handoff meeting with feedback.' },
    { id: 'supervised', kind: 'practicum', label: 'One supervised contact', detail: 'A real or simulated contact observed by your supervisor and reviewed with the competency sign-off checklist.' },
  ],
  lessons: [
    // ── Lesson 1 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l1',
      title: 'The work before and after release',
      summary: 'The 90-day window, the team around the person, and where your role starts and stops.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'The weeks around release are when care is most likely to fall apart. A person may leave with no medication in hand, no appointment, an expired ID, and nowhere to sleep. The work in this course is built to close those gaps, and you are one of the people who closes them.',
        ] },
        { kind: 'concept', title: 'Why release is a health event', text: [
          'People who have been incarcerated are at higher risk of trauma, overdose, suicide, and untreated illness than the general public. The State says overdose is the leading cause of death for people recently released. Research on people leaving prison found their risk of death was highest in the first two weeks.',
          'This is why timing matters. Care that starts before release, and a person who is waiting on the outside, change what happens in those first days.',
        ] },
        { kind: 'concept', title: 'The 90-day window', text: [
          'Under California\'s Justice-Involved Initiative, eligible people can receive certain Medi-Cal services for up to 90 days before they leave a state prison, county jail, or youth correctional facility. The services include reentry care management, clinical consultation, medication, and services by community health workers with lived experience.',
          'Adults qualify when they have a health need such as a mental health or substance use diagnosis, a chronic condition, or a pregnancy. Youth in a correctional facility qualify without a clinical criterion. Eligibility is decided by the program, not by you.',
        ] },
        { kind: 'concept', title: 'The team around the person', text: [
          'A pre-release care manager does a needs assessment and writes a reentry care plan. Clinicians in the facility and in the community handle diagnosis, treatment, and medication. After release, an Enhanced Care Management provider takes the lead on coordination and connects the person to supports such as housing.',
          'You are the person who builds trust, helps the person say what they need, carries the plan from one place to the next, and stays present. Your program tells you which of these roles you hold, and you ask if it is unclear.',
        ] },
        { kind: 'list', title: 'What your role usually includes', items: [
          'Meeting the person before release and building a working relationship.',
          'Helping them name their goals and barriers.',
          'Joining the planning and the warm handoff meeting.',
          'Meeting them on release day or soon after, when your program allows.',
          'Checking in, solving small problems, and escalating big ones.',
        ] },
        { kind: 'list', title: 'What your role does not include', items: [
          'Diagnosing, treating, or choosing medication.',
          'Giving legal advice or advice about a court or supervision order.',
          'Deciding what a facility or agency will allow.',
          'Keeping a secret that a person\'s safety or the law requires you to share.',
        ] },
        { kind: 'example', title: 'One person, one path', text: [
          'Cameron is nearing the end of his sentence. He has bipolar disorder and takes medication, but he does not know where he will get care when he leaves. In the 90 days before release, a care manager assesses his needs and writes a plan. A community psychiatrist is arranged through a handoff meeting that includes his facility psychiatrist. An Enhanced Care Management provider meets him before release. He leaves with a supply of medication. The community health worker is the person he trusts to ask the small questions, and who makes sure the appointments happen.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q1',
          q: 'Which of these is part of a community health worker\'s role in reentry?',
          options: [
            'Choosing a person\'s medication',
            'Advising a person about their parole conditions',
            'Helping a person name goals and carrying the plan to the next provider',
            'Deciding what the facility will allow',
          ],
          answer: 2,
          rationale: 'The role is trust, goals, plan, and handoff. Treatment, legal advice, and facility rules belong to others.',
          distractors: 'Medication, legal advice, and facility decisions each belong to a licensed professional, a lawyer, or the facility.',
        } },
        { kind: 'takeaways', items: [
          'The first weeks after release carry the highest risk, so the work begins before release.',
          'You build trust and carry the plan. You do not treat, advise legally, or decide for others.',
        ] },
        ev([DHCS_JI, HCAI,
          'Binswanger et al., "Release from Prison: A High Risk of Death for Former Inmates," New England Journal of Medicine, 2007: risk of death was highest in the first two weeks after release.']),
      ],
    },
    // ── Lesson 2 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l2',
      title: 'Building trust and using your own story',
      summary: 'The first conversation, listening that opens people up, and rules for self-disclosure.',
      minutes: 14,
      blocks: [
        { kind: 'why', text: [
          'Nothing in this work happens without trust. A person who has been in custody has learned to be careful about who they tell things to. Your first conversations decide whether they will tell you what they need.',
        ] },
        { kind: 'concept', title: 'Start with respect and choice', text: [
          'Say who you are, what you do, and what you do not do. Say that the conversation is voluntary and what you will keep private and what you must share. Use the name the person prefers. Ask before you sit down, before you take notes, and before you ask about health.',
          'People who have had little control over their days notice who gives them a choice. Offer one whenever you can: "Would you like to start with your health, or with what you are worried about outside?"',
        ] },
        { kind: 'concept', title: 'Trauma-informed basics', text: [
          'Trauma-informed work is built on safety, trustworthiness, choice, collaboration, and empowerment. In practice, it means you explain what will happen before it does, avoid surprises, watch for signs that a person is overwhelmed, and give them a way to pause. It also means you do not ask for the full story of what happened. You ask what they need now.',
        ] },
        { kind: 'concept', title: 'Listening that opens a conversation', text: [
          'Motivational interviewing is a way of talking that helps people find their own reasons to change. Four habits carry most of it. Ask open questions. Affirm what the person is already doing well. Reflect back what you heard. Summarize before you move on.',
        ] },
        { kind: 'list', title: 'Plain-language examples', items: [
          'Open question: "What would make the first week out go well?"',
          'Affirmation: "You kept every appointment while you were inside. That takes discipline."',
          'Reflection: "It sounds like getting your medication is the part that worries you most."',
          'Summary: "So you want housing first, then work, and you want to find a clinic near your sister\'s place. Did I get that right?"',
        ] },
        { kind: 'concept', title: 'Using your own story', text: [
          'Your experience is a strength in this work. It is also a tool that can be misused. Before you share part of your story, ask yourself three questions. Is it for the person\'s benefit or for mine? Is it brief and does it return the focus to them? Would I be comfortable with my supervisor hearing it?',
          'A short sentence can open a door: "I have been where you are sitting. I will not tell you what to do, but I can tell you what helped me find a doctor." A long story closes it. If you notice that sharing is making you feel stirred up, stop, ground yourself, and tell your supervisor afterward.',
        ] },
        { kind: 'case', title: 'A first meeting', scenario: true, text: [
          'You meet Mr. Ortiz, who is three weeks from release. He answers in one word and looks at the door. What do you do?',
          'Answer: Slow down. Say who you are and what you can and cannot do. Ask whether he wants to talk now or another day. Offer a small choice, such as what to talk about first. Reflect something he said, however small. Do not push for his history. Leave him a way to reach you, and keep your next promise exactly.',
        ] },
        { kind: 'tryit', title: 'Say it out loud', text: [
          'Write a two-sentence introduction for a first meeting that says who you are, what you do, and what you do not do. Say it to someone you trust. If it takes more than 20 seconds, shorten it. You will practice it with feedback in the first facilitated session.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q2',
          q: 'A person gives short answers in your first meeting. What is the best response?',
          options: [
            'Ask for the full story of how they ended up in custody',
            'Offer a choice about what to talk about, and reflect something they said',
            'End the meeting and report that they are uncooperative',
            'Tell your own story at length to show you understand',
          ],
          answer: 1,
          rationale: 'Choice and reflection build safety. Pushing for history or telling your whole story shifts the focus from the person.',
          distractors: 'Short answers are often caution, not refusal. Reading them as refusal ends the relationship before it starts.',
        } },
        { kind: 'takeaways', items: [
          'Say who you are, what you do not do, and what you will share. Offer choices.',
          'Open questions, affirmations, reflections, and summaries carry most conversations.',
          'Share your story briefly and for the person\'s benefit.',
        ] },
        ev(['SAMHSA, TIP 57, Trauma-Informed Care in Behavioral Health Services: principles of safety, trustworthiness, choice, collaboration, and empowerment.',
          'Miller and Rollnick, Motivational Interviewing: Helping People Change, third edition (2013): open questions, affirmations, reflections, and summaries.',
          HCAI]),
      ],
    },
    // ── Lesson 3 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l3',
      title: 'Finding the barriers',
      summary: 'A simple way to learn what stands between a person and care, and to put it in order.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'A person leaving custody usually has more needs than anyone can solve in a week. The skill is knowing which need decides the others, and finding it in a conversation, not an interview.',
        ] },
        { kind: 'concept', title: 'The map of barriers', text: [
          'Most barriers fall into a few groups. Coverage and appointments: is Medi-Cal active, and who will see the person first? Medication: do they have a supply, and a prescriber? Identification and documents: ID, birth certificate, Social Security card. Housing and a safe place to sleep. Income and benefits. Transportation. Family and relationships. Work and training. Supervision requirements such as reporting dates. Safety, including substance use and mental health.',
        ] },
        { kind: 'concept', title: 'Asking without interrogating', text: [
          'Do not read a form aloud. Ask open questions, and let the map guide you silently. "When you picture the first night out, where do you see yourself?" opens housing. "What medicines do you take now, and who prescribes them?" opens medication. Write in the person\'s words when you can.',
          'Some screening tools are for licensed staff or trained workers. Use only the tools your program trains you to use, and say so when asked about something that is not yours.',
        ] },
        { kind: 'concept', title: 'Putting barriers in order', text: [
          'Ask two questions of each barrier. What happens in the first 72 hours if it is not solved? Who else needs to act on it? A missed medication in week one outranks a job search. A barrier that only a clinician can solve goes to the clinician with a clear note. A barrier you can solve this week goes on your list.',
        ] },
        { kind: 'example', title: 'A short barrier list', text: [
          'Ms. Pierce is two weeks from release. Her list: (1) medication for diabetes, none in hand; (2) she believes her Medi-Cal is closed; (3) ID expired; (4) a bed with her cousin for two weeks only; (5) a reporting date with supervision on day three. In order: medication and coverage first, because they are time sensitive. The reporting date goes on the calendar. ID and housing follow in the first 30 days.',
        ] },
        { kind: 'fieldnote', title: 'What to listen for', text: [
          'The first need a person names is not always the biggest. A person who asks about a phone may be telling you they have no way to make an appointment. Ask what each thing would let them do.',
        ] },
        { kind: 'tryit', title: 'Practice with a partner', text: [
          'With a partner, take 10 minutes to find three barriers using only open questions. Then put them in order with the two questions above. Swap roles.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q3',
          q: 'Which barrier should be put first?',
          options: [
            'A medication supply that will run out in three days',
            'A wish to find a job in six months',
            'A preference for a different apartment',
            'An interest in a training class',
          ],
          answer: 0,
          rationale: 'Time-sensitive health needs come first because the cost of waiting is highest.',
          distractors: 'The other items matter, but they can wait while a health need cannot.',
        } },
        { kind: 'takeaways', items: [
          'Use the map of barriers silently and ask open questions.',
          'Order barriers by what happens in the first 72 hours and who needs to act.',
        ] },
        ev([DHCS_JI, HCAI,
          'Community Preventive Services Task Force, Community Health Workers: interventions that engage community health workers are recommended for several health conditions.']),
      ],
    },
    // ── Lesson 4 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l4',
      title: 'The reentry plan and the warm handoff',
      summary: 'Writing a plan with a person, running the handoff meeting, release day, and the first 30 days.',
      minutes: 16,
      blocks: [
        { kind: 'why', text: [
          'A plan is only useful if the person helped write it and the next provider has read it. A handoff is the moment the plan survives or fails. This lesson is the center of the course.',
        ] },
        { kind: 'concept', title: 'A plan written with the person', text: [
          'Write the plan in the person\'s words. Each line has a goal, a first step, who will do it, and by when. Keep it short enough to fit on a page and plain enough that the person could explain it to someone else. Give them a copy and keep a copy in the approved record.',
        ] },
        { kind: 'list', title: 'What a good plan shows', items: [
          'The person\'s own goals, in their words.',
          'The first three things that must happen after release.',
          'Appointments with date, time, place, and how to get there.',
          'Medication: what, from where, and what to do if it runs short.',
          'Who to call, and who will call the person.',
          'What to do if something goes wrong.',
        ] },
        { kind: 'concept', title: 'The warm handoff', text: [
          'A warm handoff is a meeting, in person or by video, where the person meets the next provider before release, and the people who know them pass on what matters. In California\'s model, behavioral health handoffs include the person, the facility clinician, and the community clinician. A separate handoff introduces the person to the Enhanced Care Management provider.',
          'Your job is to prepare the person, attend, and make sure the plan is understood. Before the meeting, ask what the person wants shared, and what they want left out. During it, help them speak. Afterward, confirm the next steps in writing.',
        ] },
        { kind: 'list', title: 'Warm handoff checklist', items: [
          'The person agreed to who attends and what is shared.',
          'The next provider knows the plan, the person\'s name for themselves, and the first date.',
          'Phone numbers and a safe way to reach the person are confirmed.',
          'Transport to the first appointment is arranged.',
          'Each person leaves the meeting knowing their next step.',
        ] },
        { kind: 'concept', title: 'Release day and the first 30 days', text: [
          'Release days are unpredictable. Times change, and people are released at hours when offices are closed. Plan for the delay: a phone charger, a few snacks, a clear first stop, and a backup if you cannot be there. Meet the person if your program allows. Confirm they have their medication, their ID, and the plan.',
          'In the first 30 days, check in on a schedule you agreed on: the day after release, day three, the end of week one, then weekly. Each contact has one purpose: solve one thing and confirm the next step.',
        ] },
        { kind: 'case', title: 'The handoff that did not happen', scenario: true, text: [
          'The care manager says the community clinician could not attend the handoff and the meeting is cancelled. The person is six days from release. What do you do?',
          'Answer: Tell your supervisor and the care manager today. Ask for the earliest alternative: a call, a recorded summary, or a new date before release. Confirm the first appointment is booked anyway. Tell the person honestly what changed and what is being done, and do not promise what you cannot control.',
        ] },
        { kind: 'tryit', title: 'Draft a one-page plan', text: [
          'Use the practice file for this course. Write a plan for a made-up person with three barriers from the last lesson. You will take this to the second facilitated session.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q4',
          q: 'What is the main purpose of a warm handoff?',
          options: [
            'To transfer a file to the next provider',
            'To let the person meet the next provider before release while the people who know them pass on the plan',
            'To let the facility finish its paperwork',
            'To shorten the person\'s sentence',
          ],
          answer: 1,
          rationale: 'A warm handoff builds a relationship and a shared plan before release, so the first appointment is not with a stranger.',
          distractors: 'A file alone is a cold handoff. The meeting is what makes it warm.',
        } },
        { kind: 'takeaways', items: [
          'Write the plan with the person, in their words, on one page.',
          'Prepare the person, attend the handoff, and confirm next steps in writing.',
          'Plan for release day delays and check in on a set schedule for 30 days.',
        ] },
        ev([DHCS_JI, HCAI,
          'Community Preventive Services Task Force, Community Health Workers: recommended interventions include outreach, navigation, care coordination, and health education.']),
      ],
    },
    // ── Lesson 5 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l5',
      title: 'Staying in touch after release',
      summary: 'Contact plans, follow-up that respects privacy, and what to do when someone goes quiet.',
      minutes: 8,
      blocks: [
        { kind: 'why', text: [
          'Most people who go quiet after release have not stopped caring. They lost a phone, moved, or are ashamed of a setback. The work is to stay reachable without being intrusive.',
        ] },
        { kind: 'concept', title: 'Make a contact plan', text: [
          'Before release, agree on how to reach the person: a phone number, a second contact, a safe place to leave a message, and times that work. Ask what they do not want in a text message. Do not put a diagnosis, a program name, or a legal matter in a message.',
        ] },
        { kind: 'concept', title: 'When someone goes quiet', text: [
          'Try the agreed contacts on different days and times. Check with the clinic or agency whether they came. Leave a message that invites contact without pressure. Record each attempt and tell your supervisor. Keep the case open for a defined time. If the person returns to custody, tell your supervisor and follow your program\'s plan.',
        ] },
        { kind: 'fieldnote', title: 'A message that works', text: [
          '"Hi, this is Dana from the clinic. I am thinking of you. Reply with anything you need. No need to reply if all is well."',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q5',
          q: 'Which text message protects the person\'s privacy?',
          options: [
            '"Your psychiatric appointment is at 2 on Thursday."',
            '"Your probation officer called about you."',
            '"Hi, this is Dana from the clinic. Reply with anything you need."',
            '"We need to talk about your diagnosis."',
          ],
          answer: 2,
          rationale: 'A message should reveal nothing about health, legal matters, or a program to anyone who sees the phone.',
          distractors: 'The other messages name a diagnosis, an appointment type, or a legal matter in text.',
        } },
        { kind: 'takeaways', items: [
          'Agree on a contact plan before release.',
          'Keep messages private and kind, and keep trying in different ways.',
        ] },
        ev([HCAI,
          'U.S. HHS, HIPAA Privacy Rule: protected health information must be safeguarded in communications.',
          'Community Preventive Services Task Force, Community Health Workers: recommended interventions include outreach, navigation, care coordination, and health education.']),
      ],
    },
    // ── Lesson 6 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l6',
      title: 'Health and safety in the first weeks',
      summary: 'Overdose risk, naloxone, medication continuity, crisis, and when to escalate.',
      minutes: 14,
      blocks: [
        { kind: 'why', text: [
          'The first weeks after release carry specific dangers. You are not a clinician, but you are often the person who sees the warning signs first, and you can teach the safety points that save lives.',
        ] },
        { kind: 'concept', title: 'Overdose risk after release', text: [
          'After time in custody, a person\'s tolerance for opioids is often lower. Using the same amount as before can cause an overdose. This is one reason overdose is the leading cause of death among people recently released.',
          'You can teach this without judgment: "Your body may not handle what it used to. If you use, start low, do not use alone, and keep naloxone nearby." Naloxone reverses an opioid overdose. Know where your program keeps it and how to use it, and always call 911.',
        ] },
        { kind: 'concept', title: 'Medication continuity', text: [
          'Running out of medication is one of the most predictable problems. Ask on every contact: do you have what you need until your appointment? If not, tell the clinician or your supervisor the same day. Never advise a person to stop or change a medication.',
        ] },
        { kind: 'concept', title: 'Mental health and crisis', text: [
          'Call or text 988 for the Suicide and Crisis Lifeline, and 911 for immediate danger. Learn the warning signs: talk of hopelessness or being a burden, giving things away, sudden calm after distress, or a change in sleep and eating. Ask directly if you are worried: "Are you thinking about hurting yourself?" Asking does not plant the idea.',
        ] },
        { kind: 'list', title: 'Do, refer, escalate in reentry', items: [
          'Do: teach overdose safety, check medication, help with appointments.',
          'Refer: medication questions, pain, symptoms, legal questions.',
          'Escalate: any talk of self-harm, a suspected overdose, a threat to someone else, or a disclosure of abuse. Stay with the person, call 988 or 911, and tell your supervisor right away.',
        ] },
        { kind: 'case', title: 'A late-night text', scenario: true, text: [
          'Mr. Hale, released nine days ago, texts at 11 p.m.: "I do not think I can do this." What do you do?',
          'Answer: Respond right away and warmly. Call if you can. Ask directly whether he is thinking about hurting himself. If yes, or if you are unsure, stay with him, connect him to 988, call 911 if he is in immediate danger, and tell your supervisor now. Afterward, write a short, factual note and take care of yourself.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q6',
          q: 'Why is overdose risk higher soon after release?',
          options: [
            'The person has become more skilled at using',
            'Tolerance is often lower after time in custody, so a past dose can be dangerous',
            'Medications always cause it',
            'It is not a risk after release',
          ],
          answer: 1,
          rationale: 'Lower tolerance means the same amount as before can cause an overdose.',
          distractors: 'Skill does not protect against a lower tolerance.',
        } },
        { kind: 'takeaways', items: [
          'Teach overdose safety without judgment, and know where naloxone is.',
          'Check medication every contact, and never advise changing it.',
          'When in doubt about safety, stay, call 988 or 911, and tell your supervisor.',
        ] },
        ev([DHCS_JI,
          'SAMHSA, Opioid Overdose Prevention Toolkit: naloxone reverses opioid overdose, and people should call 911.',
          '988 Suicide and Crisis Lifeline: call or text 988 for support in a mental health crisis.',
          'Binswanger et al., New England Journal of Medicine, 2007: risk of death after release, highest in the first two weeks.']),
      ],
    },
    // ── Lesson 7 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l7',
      title: 'Advocacy and the systems around the person',
      summary: 'Helping people speak for themselves, working with agencies, and handling conflicts.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'Reentry means dealing with many systems at once: health, benefits, housing, courts, and supervision. The goal is not to do it all for the person. It is to help them do it and to speak up where a system is in the way.',
        ] },
        { kind: 'concept', title: 'Build the person\'s own skills', text: [
          'Capacity building means leaving the person more able than you found them. Show them how to read an appointment letter, ask a pharmacist a question, or call a benefits line. Do it with them the first time, watch them do it the second, and let them do it alone the third.',
        ] },
        { kind: 'concept', title: 'Advocating inside a system', text: [
          'Advocacy starts with a clear request to the right person. Know who decides, what they need, and by when. Put it in writing when it matters, keep it short, and keep a record. If a rule seems to harm the person, tell your supervisor, who decides whether to raise it with the agency.',
        ] },
        { kind: 'concept', title: 'When requirements collide', text: [
          'A person may have a required meeting and a medical appointment at the same hour. You do not advise on supervision orders. You help the person contact the people who decide, tell the clinic about the conflict, and find a new time. Legal questions go to a lawyer or a legal aid organization.',
        ] },
        { kind: 'case', title: 'Two appointments at once', scenario: true, text: [
          'Ms. Pierce\'s first clinic visit is Tuesday at 10. Her supervision check-in is also Tuesday at 10. What do you do?',
          'Answer: Do not tell her to skip either. Help her call the supervising officer\'s office and the clinic, explain the conflict, and ask for another time. If she cannot reach anyone, bring it to your supervisor. Write down what was asked and the outcome.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q7',
          q: 'A person\'s appointment conflicts with a supervision requirement. What should you do?',
          options: [
            'Tell them which one to skip',
            'Help them contact the people who decide and ask for another time, and tell your supervisor',
            'Ignore it and hope it works out',
            'Call the supervising office yourself and decide for them',
          ],
          answer: 1,
          rationale: 'You help the person contact the decision makers and keep your supervisor informed. You do not advise on supervision orders.',
          distractors: 'Choosing for the person or ignoring the conflict puts them at risk.',
        } },
        { kind: 'takeaways', items: [
          'Teach the skill, then step back.',
          'Make a clear request to the right person and keep a record.',
          'Send legal questions to a lawyer or legal aid.',
        ] },
        ev([HCAI,
          'Community Preventive Services Task Force, Community Health Workers: roles include navigation, advocacy, and health education.',
          'Community Health Worker Core Consensus (C3) Project, Roles and Skills: advocacy and capacity building are among the core community health worker roles.']),
      ],
    },
    // ── Lesson 8 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l8',
      title: 'Boundaries, privacy, and your own wellbeing',
      summary: 'Professional conduct when your own history is part of the work.',
      minutes: 12,
      blocks: [
        { kind: 'why', text: [
          'Your lived experience is why you are valuable here. It is also why this work can touch old wounds. Professional conduct is how you keep helping without losing your footing.',
        ] },
        { kind: 'concept', title: 'Boundaries that protect both of you', text: [
          'Keep the relationship about the person\'s goals. Do not lend money, give rides outside the program, accept gifts, or share personal contact details beyond what your program allows. Do not form a personal or romantic relationship with someone you serve. If a person asks for something outside the role, say what you can do and who can help with the rest, and tell your supervisor.',
        ] },
        { kind: 'concept', title: 'Privacy and confidentiality', text: [
          'Health information is protected by HIPAA, and substance use treatment records carry extra protection under federal rule 42 CFR Part 2. Share information only as the person agrees, as your program\'s policy allows, or as the law requires. Do not discuss people in public, by personal text, or on social media. Follow facility rules about what you may carry in and out.',
        ] },
        { kind: 'concept', title: 'Your triggers and secondary stress', text: [
          'Jails and prisons may bring back strong memories for you. Know your signs: a tight chest, a short temper, trouble sleeping, or avoiding the work. Tell your supervisor early. Taking a break or a different assignment is not failure. Secondary traumatic stress comes from hearing others\' pain, and it builds up quietly. Rest, connection, and supervision are part of the job.',
        ] },
        { kind: 'list', title: 'A plan for yourself', items: [
          'One person you can call after a hard day.',
          'One thing you do to unwind that does not depend on the work.',
          'One sign that tells you to ask for help.',
          'The time you will take off after an intense week.',
        ] },
        { kind: 'case', title: 'A request for a ride', scenario: true, text: [
          'Mr. Hale, released last week, asks you to drive him to a family event on your day off. What do you do?',
          'Answer: Kindly decline and say why: the role has rules that protect both of you. Offer what you can do within the program, such as help finding a bus route or ride service. Tell your supervisor so the request is on record.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q8',
          q: 'A person offers you a gift after you helped them. What is the best response?',
          options: [
            'Accept it and say nothing',
            'Thank them warmly, decline the gift, and tell your supervisor',
            'Refuse sharply',
            'Accept it and give one back',
          ],
          answer: 1,
          rationale: 'Accept the gratitude and decline the gift. Telling your supervisor keeps you protected.',
          distractors: 'Accepting gifts blurs the role. Refusing sharply can hurt the person.',
        } },
        { kind: 'takeaways', items: [
          'Keep the relationship about the person\'s goals and follow your program\'s boundaries.',
          'Protect privacy under HIPAA and, for substance use records, 42 CFR Part 2.',
          'Know your signs and ask for help early.',
        ] },
        ev([HCAI,
          'U.S. HHS, HIPAA Privacy Rule; and SAMHSA, 42 CFR Part 2: confidentiality of substance use disorder patient records.',
          'National Child Traumatic Stress Network, Secondary Traumatic Stress: signs and supports for helping professionals.']),
      ],
    },
    // ── Lesson 9 ───────────────────────────────────────────────────────────
    {
      id: 'reentry-l9',
      title: 'Same-day notes and learning from the work',
      summary: 'Writing facts, protecting privacy, and noticing what is working.',
      minutes: 7,
      blocks: [
        { kind: 'why', text: [
          'A note is how the next person knows what you did and how a program learns what helps. It is also how you protect yourself if a question arises later.',
        ] },
        { kind: 'concept', title: 'What a good note contains', text: [
          'Write the same day, in facts. Include who, when, how long, where, what you did, what the person said they need, what you agreed, and what happens next. Leave out opinions, diagnoses you are not qualified to make, and details that are not needed. Use the person\'s words in quotation marks when it matters.',
        ] },
        { kind: 'concept', title: 'Honest numbers', text: [
          'Count only what happened. If a referral was made but the person was not connected, it is a referral, not a connection. Correct mistakes openly. Programs learn from honest numbers, and people are better served by them.',
        ] },
        { kind: 'example', title: 'A note', text: [
          '"Oct 14, 2:00 to 2:40 p.m. Visit with Ms. Pierce at the facility, with her consent. Reviewed her plan for the first week. She asked to get her diabetes medication before release. I told the care manager at 3:00. Next: check in with the care manager Oct 16."',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c5-q9',
          q: 'Which is the best note?',
          options: [
            '"Saw Ms. Pierce. Went fine."',
            '"Visit 2:00 to 2:40 p.m. with consent. She asked about her diabetes medication. I told the care manager. Next: check in Oct 16."',
            '"She seems unstable and will likely relapse."',
            '"Talked about her case."',
          ],
          answer: 1,
          rationale: 'A good note is factual, complete, and shows what happens next.',
          distractors: 'The others are vague or give opinions.',
        } },
        { kind: 'takeaways', items: [
          'Write the same day, in facts, with the real time.',
          'Count only what happened, and correct mistakes openly.',
        ] },
        { kind: 'reflect', title: 'Before the practice sessions', prompts: [
          'Which lesson changed how you would open a first conversation?',
          'What is one boundary you want to practice saying out loud?',
        ] },
        ev([HCAI,
          'CDC, Program Evaluation Framework, 2024: evaluation standards include ethics and rigor.',
          'California DHCS, Community Health Worker Services benefit guidance: documentation supports the service provided.']),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c5-plan',
    title: 'Your reentry practice file',
    minutes: 55,
    purpose: 'This is the practice file you bring to the facilitated sessions. It holds your introduction, a barrier list, a one-page plan, and a contact plan, all for a made-up person, so you can use it in an interview.',
    fields: [
      { id: 'intro', label: 'Your first-meeting introduction', help: 'Two sentences: who you are, what you do, and what you do not do.', multiline: true },
      { id: 'barriers', label: 'Three barriers, in order', help: 'For a made-up person, list three barriers from the map and put them in order. Say why.', multiline: true },
      { id: 'plan', label: 'A one-page reentry plan', help: 'Goals in the person\'s words, the first three things after release, appointments, medication, who to call, and what to do if something goes wrong.', multiline: true },
      { id: 'contact', label: 'A contact plan and one message', help: 'How you will reach the person, a second contact, and one private text message you would send.', multiline: true },
      { id: 'boundary', label: 'One boundary and how you will say it', help: 'Write the words you would use if a person asked for something outside your role.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: "California DHCS: Transformation of Medi-Cal, Justice-Involved", use: "The State fact sheet on pre-release services, the warm handoff, and what happens after release.", url: "https://www.dhcs.ca.gov" },
    { name: "California HCAI: CHW/P/R Training Program Best Practices Framework", use: "The 11 core competencies and training standards this course follows.", url: "https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/" },
    { name: "SAMHSA: Trauma-Informed Care in Behavioral Health Services (TIP 57)", use: "The principles behind the trust lesson.", url: "https://www.samhsa.gov" },
    { name: "988 Suicide and Crisis Lifeline", use: "Call or text 988 any time.", url: "https://988lifeline.org" },
    { name: "211 Los Angeles County", use: "Search local health, housing, food, and legal services.", url: "https://211la.org" },
  ],
};
