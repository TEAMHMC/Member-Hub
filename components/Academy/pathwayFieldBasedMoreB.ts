// Field-Based Community Health, courses 11 to 15: de-escalation, data and documentation, the applied case
// lab, the readiness assessment, and the supervised practicum. The last three are practice courses:
// their completion requirements are done with a facilitator or a supervisor, and the lessons here
// tell a participant what to expect and how to prepare.

import type { Course, Check } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });
const HCAI = 'California HCAI, CHW/P/R Training Program Best Practices Framework: the 11 core competencies, with live practice for relationship skills and supervised field work.';

export const FBCH_DEESCALATION: Course = {
  id: 'fbch-11', num: 11, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'De-escalation + Conflict Response',
  promise: 'Keep yourself and others safe, lower the temperature of a tense moment, and know when to step back and call for help.',
  about: [
    'Most tense moments in the field end quietly when someone stays calm and respectful. A few do not. This course teaches both what to say and when to leave.',
    'Your safety and the other person\'s dignity are not in conflict. Both depend on noticing early and acting early.',
  ],
  objectives: [
    'Prepare a space and a plan before a shift.',
    'Notice early signs that a situation is escalating.',
    'Use verbal de-escalation habits.',
    'Know when to step back, call for help, and debrief.',
  ],
  minutes: 20,
  prerequisites: 'Cultural Humility + Trauma-Informed Engagement first is recommended.',
  whoFor: 'Outreach volunteers, navigators, promotoras, and anyone who works with people in the field.',
  freshness: 'Your program\'s safety plan and escalation steps take precedence over this course.',
  lessons: [
    {
      id: 'fbch-11-l1', title: 'Prevent it before it starts', summary: 'Space, partners, exits, and the signs that come first.', minutes: 7,
      blocks: [
        { kind: 'prose', text: [
          'The best de-escalation happens before anyone is upset. It begins with how you set up, who is with you, and how you read the room.',
        ] },
        { kind: 'steps', title: 'Before a shift', items: [
          { label: 'Know your plan', text: 'Know your supervisor\'s number, the program\'s escalation steps, and where help is.' },
          { label: 'Work with a partner', text: 'Do not work alone in a setting your program has not cleared. Agree on a signal that means "I need help."' },
          { label: 'Set up the space', text: 'Keep an open path to the exit for you and for the other person. Do not let a table or a crowd box anyone in.' },
          { label: 'Take care of yourself', text: 'Hunger, heat, and exhaustion shorten tempers, including yours. Eat, drink, and take breaks.' },
        ] },
        { kind: 'list', title: 'Early signs', items: [
          'Louder or faster speech, or sudden quiet.',
          'Pacing, clenched fists, or a fixed stare.',
          'Repeating the same demand, or refusing to listen.',
          'Agitation about a long wait or a rule.',
        ] },
        { kind: 'check', check: { id: 'fbch-11-c1', q: 'Which helps most to prevent a tense moment?', options: ['Standing between the person and the exit', 'Keeping an open path and working with a partner', 'Working alone to keep things simple', 'Ignoring early signs'], answer: 1, rationale: 'An open path and a partner give you and the other person room and backup.', distractors: 'Blocking an exit or working alone raises risk for everyone.' } },
        ev(['Richmond et al., Verbal De-escalation of the Agitated Patient: Consensus Statement of the American Association for Emergency Psychiatry Project BETA, Western Journal of Emergency Medicine (2012): respect personal space and prepare the environment.', 'SAMHSA, TIP 57, Trauma-Informed Care: physical and emotional safety.', HCAI]),
      ],
    },
    {
      id: 'fbch-11-l2', title: 'Verbal de-escalation', summary: 'The habits that lower the temperature.', minutes: 7,
      blocks: [
        { kind: 'steps', title: 'Habits from Project BETA', items: [
          { label: 'Respect personal space', text: 'Stay about two arm lengths away and stand at an angle, not face to face.' },
          { label: 'Do not be provocative', text: 'Keep your hands visible and relaxed, your face calm, and your voice low and slow.' },
          { label: 'Be concise', text: 'Short sentences, simple words, one point at a time. People under stress take in less.' },
          { label: 'Listen closely', text: 'Find out what the person wants and how they feel. Repeat it back.' },
          { label: 'Agree or agree to disagree', text: 'Find something true to agree with, or accept that you see it differently, without arguing.' },
          { label: 'Set limits clearly and kindly', text: 'Say what is allowed and what is not, and offer choices: "I can help if we talk here, or you can take a few minutes."' },
        ] },
        { kind: 'case', title: 'A long wait', scenario: true, text: [
          'A man at your table has waited twenty minutes and says loudly, "This is a joke." What do you do?',
          'Answer: Lower your voice and stay at an angle. Say, "You have waited a long time, and that is frustrating. I want to get this sorted." Offer a choice: "I can take your information now, or I can bring you water first." Keep the tone even and the path to the exit open.',
        ] },
        { kind: 'check', check: { id: 'fbch-11-c2', q: 'A person is raising their voice. Which response is most likely to help?', options: ['Raise your voice to be heard', 'Speak slowly, name the frustration, and offer a choice', 'Tell them to calm down', 'Step closer to show you are not afraid'], answer: 1, rationale: 'A low voice, a named feeling, and a choice give the person some control, which lowers the temperature.', distractors: 'Matching volume, commands, or closing the distance usually escalate.' } },
        ev(['Richmond et al., Project BETA, Western Journal of Emergency Medicine (2012): ten domains of verbal de-escalation.', 'SAMHSA, TIP 57: choice and collaboration.', HCAI]),
      ],
    },
    {
      id: 'fbch-11-l3', title: 'When to step back and debrief', summary: 'Your limits, calling for help, and caring for yourself afterward.', minutes: 6,
      blocks: [
        { kind: 'list', title: 'Step back and call for help when', items: [
          'Someone threatens you or another person.',
          'A weapon is present or mentioned.',
          'The person is in a medical or psychiatric emergency.',
          'You feel unsafe, for any reason. You do not need to prove it.',
        ] },
        { kind: 'steps', title: 'What to do', items: [
          { label: 'Move to safety', text: 'Leave with a calm explanation if you can, and keep the exit in reach.' },
          { label: 'Call', text: 'Use your program\'s steps, 988 for a mental health crisis, and 911 for immediate danger.' },
          { label: 'Keep others safe', text: 'Move people away from the situation, and do not try to restrain anyone.' },
        ] },
        { kind: 'prose', text: [
          'Afterward, write a short, factual note. Tell your supervisor what happened, what you did, and how you are. Take a few minutes before you return to work. A hard moment affects the worker too, and a good program expects you to ask for support.',
        ] },
        { kind: 'check', check: { id: 'fbch-11-c3', q: 'A person threatens another at your table. What do you do?', options: ['Try to restrain the person', 'Move people to safety and call your supervisor and 911 as needed', 'Argue with them', 'Ignore it'], answer: 1, rationale: 'Keep people safe, leave the situation, and call for help. Do not restrain anyone.', distractors: 'Restraining or arguing puts you and others at risk.' } },
        ev(['Richmond et al., Project BETA (2012): debriefing and clear limits.', 'OSHA, Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers (OSHA 3148-06R, 2016): planning, partners, and reporting.', HCAI]),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'Project BETA: Verbal De-escalation of the Agitated Patient', use: 'The consensus statement behind this course.', url: 'https://pmc.ncbi.nlm.nih.gov' },
    { name: 'OSHA: Workplace Violence in Healthcare and Social Assistance', use: 'Prevention planning for community-facing work.', url: 'https://www.osha.gov' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988.', url: 'https://988lifeline.org' },
  ],
};

export const FBCH_DATA_DOCS: Course = {
  id: 'fbch-12', num: 12, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Data Collection + Documentation',
  promise: 'Record what happened accurately and privately, count only what you did, and keep records that protect people and your role.',
  about: [
    'Every contact leaves a trace: a note, a count, a form. Done well, records protect the person, help the next worker, and show that the work helps.',
    'This course covers what to write, how to keep it private, and how your hours and records follow you.',
  ],
  objectives: [
    'Write a same-day note in facts.',
    'Tell outputs from outcomes and count accurately.',
    'Protect privacy in forms, photos, and devices.',
    'Log your hours so a supervisor can verify them.',
  ],
  minutes: 16,
  prerequisites: 'None.',
  whoFor: 'Outreach volunteers, navigators, promotoras, and anyone who records contacts or hours.',
  lessons: [
    {
      id: 'fbch-12-l1', title: 'What to write', summary: 'Facts, the same day, and what to leave out.', minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'A good note lets someone who was not there understand what happened and what comes next. Write it the same day while you remember it. Stick to what you saw, heard, and did.',
        ] },
        { kind: 'steps', title: 'A note includes', items: [
          { label: 'Who and when', text: 'Date, time, place, and how long.' },
          { label: 'What the person asked for', text: 'In their words when it matters.' },
          { label: 'What you did', text: 'The information given and the referral made.' },
          { label: 'What happens next', text: 'Who will do what, and by when.' },
        ] },
        { kind: 'case', title: 'Two notes', scenario: false, text: [
          'Note A: "Oct 14, 2:00 to 2:20 p.m. Table at the library. Woman asked about renewing Medi-Cal. Gave the renewal phone line and explained the letter. She will call Thursday. Follow up Oct 18."',
          'Note B: "Talked to a lady about insurance. Went well."',
          'Note A could be used by another worker. Note B cannot.',
        ] },
        { kind: 'check', check: { id: 'fbch-12-c1', q: 'Which belongs in a note?', options: ['Your guess about the person\'s diagnosis', 'What was asked, what you did, and what happens next', 'Details of the person\'s family problems that are not needed', 'Your opinion of the person'], answer: 1, rationale: 'Notes record facts and next steps. Leave out opinions, guesses, and details that are not needed.', distractors: 'Opinions and extra detail can harm the person if the record is seen.' } },
        ev(['CDC, Program Evaluation Framework, 2024: evaluation standards include relevance, utility, and rigor.', 'U.S. HHS, HIPAA Privacy Rule: the minimum necessary standard.', HCAI]),
      ],
    },
    {
      id: 'fbch-12-l2', title: 'Counting honestly', summary: 'Outputs, outcomes, and never inflating.', minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'An output is what you did: 40 people reached. An outcome is what changed for them: 12 enrolled in coverage. Programs report both, and they are different. Count only what happened.',
        ] },
        { kind: 'steps', title: 'Rules for counts', items: [
          { label: 'Count what you did', text: 'A referral is a referral until you know the person connected.' },
          { label: 'Do not double count', text: 'Count a person once per measure, using your program\'s rule.' },
          { label: 'Correct mistakes openly', text: 'Note the correction with the date and tell your supervisor.' },
          { label: 'Do not round up', text: 'Inflated numbers can lose a contract and, in billing, may be treated as fraud.' },
        ] },
        { kind: 'check', check: { id: 'fbch-12-c2', q: 'You referred 10 people to enrollment help but know only 4 connected. What do you report?', options: ['10 enrolled', '10 referred and 4 connected', '4 referred', '14 served'], answer: 1, rationale: 'Report what happened. A referral and a connection are different counts.', distractors: 'Combining or rounding the counts overstates the result.' } },
        ev(['CDC, Program Evaluation Framework, 2024: ethical and rigorous reporting.', 'U.S. HHS Office for Civil Rights, Summary of the HIPAA Privacy Rule: health information is kept private and shared only as the rule allows.', HCAI]),
      ],
    },
    {
      id: 'fbch-12-l3', title: 'Privacy and your own record', summary: 'Consent, photos, devices, and logging hours.', minutes: 5,
      blocks: [
        { kind: 'list', title: 'Privacy in the field', items: [
          'Explain what you are recording and why, and record only what you need.',
          'Do not take photos of people, documents, or screens without written consent and program approval.',
          'Keep paper forms covered and in your possession. Return them to the program the same day.',
          'Do not discuss people by name in public or on personal text or social media.',
          'Substance use treatment records have extra protection under federal rule 42 CFR Part 2. Follow your program\'s rules.',
        ] },
        { kind: 'steps', title: 'Your own record', items: [
          { label: 'Log every shift', text: 'Date, activity, hours, and the supervisor who observed you, the same day.' },
          { label: 'Get sign-off', text: 'A supervisor confirms the log. Hours without sign-off may not count.' },
          { label: 'Keep a portfolio', text: 'Certificates, signed logs, and a short note on what you learned. It supports your next application.' },
        ] },
        { kind: 'check', check: { id: 'fbch-12-c3', q: 'May you photograph a document a member shows you?', options: ['Yes, with your own phone', 'Only with written consent and program approval', 'Yes, if you delete it later', 'Yes, if the person smiles'], answer: 1, rationale: 'A photo of a document is information about the person. Consent and program approval are required.', distractors: 'Personal phones and informal permission do not meet the standard.' } },
        ev(['U.S. HHS, HIPAA Privacy Rule: safeguards for protected health information.', 'SAMHSA, 42 CFR Part 2: confidentiality of substance use disorder patient records.', HCAI]),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'CDC: Program Evaluation Framework, 2024', use: 'How programs report honestly.', url: 'https://www.cdc.gov' },
    { name: 'U.S. HHS: HIPAA Privacy Rule', use: 'The basics of protecting health information.', url: 'https://www.hhs.gov' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Professional skills and conduct.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
  ],
};

export const FBCH_CASE_LAB: Course = {
  id: 'fbch-13', num: 13, standard: 'v2', readingLevel: 'adult', delivery: 'practical', modality: 'in-person',
  title: 'Applied Community Health Case Lab',
  promise: 'Put every skill together on realistic cases and get feedback from a facilitator and your peers.',
  about: [
    'The case lab is a facilitated session where you work through realistic cases from first contact to follow-up. You use the skills from the earlier courses and you get specific feedback.',
    'Come prepared with your notes. Sessions are listed on this page when they are scheduled.',
  ],
  objectives: [
    'Work a case from first contact to follow-up using the skills in this pathway.',
    'Write a short case plan and handoff.',
    'Give and receive feedback on your practice.',
    'Know what a strong case plan looks like.',
  ],
  minutes: 60,
  prerequisites: 'Courses 6 to 12 of this pathway.',
  whoFor: 'Participants who have finished the written courses and are ready to practice them together.',
  requirements: [
    { id: 'lab-attend', kind: 'attend', label: 'Attend the facilitated case lab', detail: 'A half-day session with a facilitator. Role play and feedback in small groups.' },
    { id: 'lab-cases', kind: 'assignment', label: 'Write three case plans', detail: 'One from each case you work in the lab, using the case plan template.' },
    { id: 'lab-review', kind: 'evaluation', label: 'Facilitator review', detail: 'The facilitator reviews your plans against the rubric and gives written feedback.' },
  ],
  lessons: [
    {
      id: 'fbch-13-l1', title: 'How the lab works', summary: 'The format, the roles, and how to prepare.', minutes: 20,
      blocks: [
        { kind: 'steps', title: 'The session', items: [
          { label: 'Brief', text: 'The facilitator introduces three cases and the case plan template.' },
          { label: 'Work in small groups', text: 'You take turns as the worker, the person, and the observer.' },
          { label: 'Feedback', text: 'The observer and the facilitator name what worked and one thing to try next.' },
          { label: 'Write', text: 'You write a one-page case plan for each case.' },
        ] },
        { kind: 'list', title: 'Prepare', items: [
          'Reread your notes from the communication, trauma-informed, and motivational interviewing courses.',
          'Bring your escalation card with the numbers your program gives you.',
          'Plan to play the person as well as the worker. Playing the person shows you how it feels to be on the other side.',
        ] },
        { kind: 'check', check: { id: 'fbch-13-c1', q: 'Why play the person as well as the worker?', options: ['To save time', 'It shows how an encounter feels from the other side', 'It is required by law', 'To practice acting'], answer: 1, rationale: 'Playing the person builds empathy and shows how your words land.', distractors: 'The aim is understanding the experience, not performance.' } },
        ev([HCAI, 'Miller and Rollnick, Motivational Interviewing, third edition (2013): skills are learned through practice with feedback.', 'Community Preventive Services Task Force: the recommended interventions place community health workers in team-based care, working alongside clinicians.']),
      ],
    },
    {
      id: 'fbch-13-l2', title: 'The case plan', summary: 'A one-page plan that another worker could follow.', minutes: 20,
      blocks: [
        { kind: 'steps', title: 'A case plan shows', items: [
          { label: 'The person\'s goals', text: 'In their words.' },
          { label: 'The barrier map', text: 'Coverage, medication, ID, housing, transport, income, safety, in order of urgency.' },
          { label: 'Next steps', text: 'Who does what by when, including a warm handoff where needed.' },
          { label: 'Safety and escalation', text: 'What would trigger a call to your supervisor, 988, or 911.' },
          { label: 'Follow-up', text: 'When you will check in and how.' },
        ] },
        { kind: 'case', title: 'A short example', scenario: false, text: [
          'Goal: "Get my insulin and stop going to the ER." Barriers in order: no medication for three days; coverage lapsed; no ID. Steps: today, call the clinic for an urgent refill with a warm handoff; Thursday, renewal help with a certified counselor; next week, ID. Escalate if he reports confusion, vomiting, or fainting. Follow up Friday by phone.',
        ] },
        { kind: 'check', check: { id: 'fbch-13-c2', q: 'What should come first in a barrier map?', options: ['The easiest item', 'The item that is time-sensitive for health or safety', 'The item the person mentions last', 'The item that takes longest'], answer: 1, rationale: 'Time-sensitive health and safety needs come first because the cost of waiting is highest.', distractors: 'Ease or length should not outrank urgency.' } },
        ev([HCAI, 'Community Preventive Services Task Force, Community Health Workers: recommended interventions include outreach, navigation, care coordination, and health education.', 'SAMHSA, TIP 57: collaboration and choice in planning.']),
      ],
    },
    {
      id: 'fbch-13-l3', title: 'Feedback and the rubric', summary: 'What the facilitator looks for.', minutes: 20,
      blocks: [
        { kind: 'list', title: 'The rubric', items: [
          'Listens first and asks open questions.',
          'Names barriers and orders them by urgency.',
          'Stays within the role and says so when asked for more.',
          'Escalates correctly.',
          'Writes a plan another worker could follow.',
          'Keeps privacy and respects choice.',
        ] },
        { kind: 'prose', text: [
          'Feedback is specific and about the work. "You asked a good open question at the start" helps. "Good job" does not. Take one thing to practice and write it on your plan.',
        ] },
        { kind: 'reflect', title: 'After the lab', prompts: ['What is one thing you did well?', 'What is one thing you will do differently next time?'] },
        ev([HCAI, 'Miller and Rollnick, Motivational Interviewing (2013): affirmations and specific feedback.', 'Community Preventive Services Task Force, Community Health Workers.']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Why practice and supervision are part of training.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'The Community Guide: Community Health Workers', use: 'The evidence for the role.', url: 'https://thecommunityguide.org/content/community-health-workers' },
    { name: '211 Los Angeles County', use: 'Local services for case plans.', url: 'https://211la.org' },
  ],
};

const READINESS_EXAM: Check[] = [
  { id: 'fbch-14-q1', q: 'A person gives short answers in your first meeting. What is the best response?', options: ['Ask for their full history', 'Offer a choice about what to talk about and reflect something they said', 'End the meeting', 'Tell your own story at length'], answer: 1, why: 'Choice and reflection build safety and keep the focus on the person. Pushing or oversharing moves the focus away from them.' },
  { id: 'fbch-14-q2', q: 'You explain an appointment. How do you check it?', options: ['Ask "Do you understand?"', 'Ask them to say back what they will bring and when', 'Repeat it louder', 'Hand them a flyer'], answer: 1, why: 'Teach-back checks your explanation by asking for the information itself. Yes or no questions and repetition do not confirm understanding.' },
  { id: 'fbch-14-q3', q: 'Why avoid asking for the full story of a painful event?', options: ['It takes too long', 'It can re-traumatize and is not needed to connect the person to help', 'It is the supervisor\'s job', 'It is illegal'], answer: 1, why: 'Ask what the person needs now. Details are not required to refer. The reason is safety and relevance.' },
  { id: 'fbch-14-q4', q: 'A person says they are thinking about ending their life. What do you do?', options: ['Change the subject', 'Stay, ask directly, and connect them to 988 or 911, then tell your supervisor', 'Promise to keep it secret', 'Tell them to think positive'], answer: 1, why: 'Stay with the person, ask directly, and connect to crisis help. Safety limits confidentiality. Silence or secrecy leaves the person alone with the danger.' },
  { id: 'fbch-14-q5', q: 'Which is person-first language?', options: ['An addict', 'A person with a substance use disorder', 'A junkie', 'A druggie'], answer: 1, why: 'Person-first language names the person before the condition. The others label the person.' },
  { id: 'fbch-14-q6', q: 'What does naloxone do?', options: ['Prevents all overdoses', 'Reverses an opioid overdose', 'Treats opioid use disorder', 'Works on any drug'], answer: 1, why: 'It temporarily reverses opioid effects. The person still needs emergency care. It is not a treatment and does not work on other drugs.' },
  { id: 'fbch-14-q7', q: 'You find a person who will not wake and is barely breathing. What first?', options: ['Wait and watch', 'Call 911 and give naloxone', 'Give water', 'Walk them around'], answer: 1, why: 'Call 911 and give naloxone without delay. Delay costs minutes the person does not have.' },
  { id: 'fbch-14-q8', q: 'A person raises their voice at your table. What helps most?', options: ['Raise your voice', 'Speak slowly, name the frustration, and offer a choice', 'Tell them to calm down', 'Step closer'], answer: 1, why: 'A low voice, a named feeling, and a choice lower the temperature. Commands and closing the distance escalate.' },
  { id: 'fbch-14-q9', q: 'A person threatens another at your table. What do you do?', options: ['Restrain the person', 'Move people to safety and call your supervisor and 911 as needed', 'Argue', 'Ignore it'], answer: 1, why: 'Keep people safe, leave the situation, and call for help. Restraining or arguing raises risk.' },
  { id: 'fbch-14-q10', q: 'A member keeps missing appointments. What is the most useful next step?', options: ['Send better reminders', 'Ask what happens for them on the day of an appointment', 'Explain why appointments matter', 'Stop offering'], answer: 1, why: 'The barrier is usually a condition, such as unpaid time off or transport. Asking finds it. More reminders do not address the barrier.' },
  { id: 'fbch-14-q11', q: 'You referred 10 people and know 4 connected. What do you report?', options: ['10 connected', '10 referred and 4 connected', '4 referred', '14 served'], answer: 1, why: 'Count only what happened. Combining counts overstates results.' },
  { id: 'fbch-14-q12', q: 'May you photograph a document a member shows you?', options: ['Yes, on your phone', 'Only with written consent and program approval', 'Yes, if you delete it later', 'Yes, if they smile'], answer: 1, why: 'Consent and approval are required for any photo of a document. Informal permission does not meet the standard.' },
];

export const FBCH_READINESS: Course = {
  id: 'fbch-14', num: 14, standard: 'v2', readingLevel: 'adult', delivery: 'practical', modality: 'in-person',
  title: 'Field Readiness Assessment',
  promise: 'Show that you are ready for supervised service: pass the knowledge check and a skills observation, and get your supervisor\'s sign-off.',
  about: [
    'Readiness has three parts. A knowledge check shows you know the material. A skills observation shows you can do it. A supervisor decides whether you are ready to start service.',
    'You can retake the knowledge check. The skills observation and sign-off are scheduled with your supervisor.',
  ],
  objectives: [
    'Pass the knowledge check at 80 percent or higher.',
    'Show the core skills in an observed practice conversation.',
    'Review your escalation card and safety plan with your supervisor.',
    'Receive sign-off to begin supervised service.',
  ],
  minutes: 45,
  prerequisites: 'The written courses and the case lab.',
  whoFor: 'Participants who have finished the pathway courses and are ready to begin supervised service.',
  exam: { questions: READINESS_EXAM, passPercent: 80 },
  requirements: [
    { id: 'ready-exam', kind: 'assignment', label: 'Pass the knowledge check at 80 percent or higher', detail: 'Twelve questions. You may retake it.' },
    { id: 'ready-observe', kind: 'practicum', label: 'Skills observation', detail: 'A supervisor or facilitator observes you in a practice conversation and uses the competency checklist.' },
    { id: 'ready-signoff', kind: 'evaluation', label: 'Supervisor sign-off', detail: 'Your supervisor confirms you are ready to begin supervised service.' },
  ],
  lessons: [
    {
      id: 'fbch-14-l1', title: 'What is assessed', summary: 'The knowledge check, the skills observation, and the sign-off.', minutes: 15,
      blocks: [
        { kind: 'steps', title: 'Three parts', items: [
          { label: 'Knowledge check', text: 'Twelve questions on listening, trauma-informed practice, safety, harm reduction, de-escalation, and documentation. You need 80 percent.' },
          { label: 'Skills observation', text: 'A practice conversation of about fifteen minutes, observed using a checklist.' },
          { label: 'Sign-off', text: 'Your supervisor reviews both and your escalation plan, then decides: yes, not yet, or needs more practice.' },
        ] },
        { kind: 'prose', text: [
          '"Not yet" is not failure. It means one more practice and a second look. Most people who hear it begin service within a few weeks.',
        ] },
        { kind: 'check', check: { id: 'fbch-14-c1', q: 'What does "not yet" mean at sign-off?', options: ['You are removed from the program', 'You need more practice and a second look', 'You failed permanently', 'Nothing'], answer: 1, rationale: 'Sign-off decides readiness for supervised service. Not yet leads to more practice.', distractors: 'It is a step in learning, not an ending.' } },
        ev([HCAI, 'Community Preventive Services Task Force: the recommended interventions place community health workers in team-based care, working alongside clinicians.', 'Miller and Rollnick, Motivational Interviewing (2013): skills develop through observed practice.']),
      ],
    },
    {
      id: 'fbch-14-l2', title: 'The skills checklist', summary: 'What the observer looks for.', minutes: 15,
      blocks: [
        { kind: 'list', title: 'The checklist', items: [
          'Introduces self and role, and asks for consent.',
          'Uses open questions and reflections.',
          'Identifies at least two barriers and puts them in order.',
          'Makes a warm handoff and records it.',
          'Stays within the role and says so when asked for more.',
          'Escalates promptly when required.',
          'Documents the same day, facts only.',
          'Keeps privacy: no names in public, no photos.',
        ] },
        { kind: 'check', check: { id: 'fbch-14-c2', q: 'Which is on the skills checklist?', options: ['Giving medical advice', 'Staying within the role and saying so when asked for more', 'Solving every problem in one visit', 'Sharing the person\'s story with colleagues'], answer: 1, rationale: 'Knowing and stating the limits of the role is a core skill.', distractors: 'Advice beyond your role and sharing stories break the standard.' } },
        ev([HCAI, 'Community Preventive Services Task Force, Community Health Workers.', 'SAMHSA, TIP 57: safety, choice, and collaboration.']),
      ],
    },
    {
      id: 'fbch-14-l3', title: 'How to prepare', summary: 'A week-before plan.', minutes: 15,
      blocks: [
        { kind: 'list', title: 'In the week before', items: [
          'Retake any lesson check you missed.',
          'Practice a first-meeting introduction out loud.',
          'Write your escalation card: your supervisor\'s number, 988, 911, and one sentence to say.',
          'Review your case plans and the feedback you received.',
          'Sleep, eat, and bring water on the day.',
        ] },
        { kind: 'reflect', title: 'Before the day', prompts: ['Which skill do you feel least sure of, and who can help you practice it?', 'What will you do if you freeze?'] },
        ev([HCAI, 'Community Preventive Services Task Force, Community Health Workers.', 'Miller and Rollnick, Motivational Interviewing (2013).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'The competencies assessed.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'The Community Guide: Community Health Workers', use: 'The evidence for the role.', url: 'https://thecommunityguide.org/content/community-health-workers' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988.', url: 'https://988lifeline.org' },
  ],
};

export const FBCH_PRACTICUM: Course = {
  id: 'fbch-15', num: 15, standard: 'v2', readingLevel: 'adult', delivery: 'practicum', modality: 'in-person',
  title: 'Practicum / Supervised Service',
  promise: 'Do the work in the field with a supervisor beside you, log it honestly, and finish with a record that shows what you can do.',
  about: [
    'The practicum is where the training becomes experience. You serve at HMC outreach sites or an approved partner site with a named supervisor, and every hour is logged and signed.',
    'Shadowing counts. You start by watching, then take small parts, then run contacts yourself with a supervisor nearby.',
  ],
  objectives: [
    'Complete your assigned supervised shifts or service hours.',
    'Log each shift the same day with the supervisor\'s sign-off.',
    'Reflect on what you learned after each stage.',
    'Finish with a signed record and a portfolio.',
  ],
  minutes: 45,
  prerequisites: 'Field Readiness Assessment, with supervisor sign-off.',
  whoFor: 'Participants who have been signed off as ready for supervised service.',
  requirements: [
    { id: 'prac-hours', kind: 'practicum', label: 'Complete your assigned supervised hours', detail: 'Hours are set with your program and site. Each shift is logged and signed by your supervisor.' },
    { id: 'prac-reflect', kind: 'assignment', label: 'Write a short reflection after each stage', detail: 'Three to five sentences: what you did, what you learned, and what you will do next.' },
    { id: 'prac-signoff', kind: 'evaluation', label: 'Final supervisor sign-off', detail: 'Your supervisor completes the competency checklist and signs your record.' },
  ],
  lessons: [
    {
      id: 'fbch-15-l1', title: 'Before your first shift', summary: 'What to know, bring, and ask.', minutes: 15,
      blocks: [
        { kind: 'list', title: 'Before you go', items: [
          'Confirm the site, the time, your supervisor\'s name and number, and the escalation plan.',
          'Bring ID, water, food, weather gear, and your escalation card.',
          'Know what you will do and what you will not do, and ask if it is unclear.',
          'Plan how you will get there and home.',
        ] },
        { kind: 'prose', text: [
          'You are not expected to know everything. You are expected to ask, to stay within the role, and to tell your supervisor when something is beyond you.',
        ] },
        { kind: 'check', check: { id: 'fbch-15-c1', q: 'What should you do if you are unsure whether something is in your role?', options: ['Do it anyway', 'Ask your supervisor before acting', 'Skip the shift', 'Ask a stranger'], answer: 1, rationale: 'Asking first protects the person and you.', distractors: 'Guessing about the role puts people at risk.' } },
        ev([HCAI, 'Community Preventive Services Task Force: the recommended interventions place community health workers in team-based care, working alongside clinicians.', 'OSHA, Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers (OSHA 3148-06R, 2016): planning and escalation.']),
      ],
    },
    {
      id: 'fbch-15-l2', title: 'During a shift', summary: 'Stages, roles, and what a supervisor does.', minutes: 15,
      blocks: [
        { kind: 'steps', title: 'Three stages', items: [
          { label: 'Observe', text: 'Stay with an experienced worker and watch. Take notes. No independent contact.' },
          { label: 'Take small parts', text: 'Greet, hand out resources, record contacts, with the worker within arm\'s reach.' },
          { label: 'Run contacts', text: 'Run your own conversations, screenings within scope, and referrals, with a supervisor nearby.' },
        ] },
        { kind: 'list', title: 'Escalate right away when', items: [
          'Someone may hurt themselves or another person.',
          'A medical emergency or overdose is suspected.',
          'A child, older adult, or dependent adult may be at risk.',
          'A person discloses something you are unsure you can keep private.',
          'You feel unsafe.',
        ] },
        { kind: 'check', check: { id: 'fbch-15-c2', q: 'You suspect an overdose. What do you do?', options: ['Wait', 'Call 911, give naloxone, and tell your supervisor', 'Leave', 'Record it later'], answer: 1, rationale: 'Call 911 and give naloxone without delay, then tell your supervisor.', distractors: 'Delay costs time the person does not have.' } },
        ev([HCAI, 'SAMHSA, Overdose Prevention and Response Toolkit.', 'SAMHSA, TIP 57: safety and trustworthiness.']),
      ],
    },
    {
      id: 'fbch-15-l3', title: 'After a shift and at the end', summary: 'Logging, reflection, and your record.', minutes: 15,
      blocks: [
        { kind: 'steps', title: 'After every shift', items: [
          { label: 'Log it', text: 'Date, activity, hours, and the supervisor, the same day.' },
          { label: 'Get the signature', text: 'Your supervisor signs the log. Hours without a signature may not count.' },
          { label: 'Reflect', text: 'Write three to five sentences on what you did, what you learned, and what you will try next.' },
        ] },
        { kind: 'prose', text: [
          'At the end, your supervisor completes the competency checklist and signs your record. Keep a copy of every signed log. Together they are proof of your experience, and they count toward the hours some employers and programs ask for.',
        ] },
        { kind: 'reflect', title: 'Looking back', prompts: ['What are you most proud of?', 'What will you do differently in your next role?'] },
        ev([HCAI, 'Community Preventive Services Task Force, Community Health Workers.', 'California DHCS, Medi-Cal CHW minimum qualification checklist: documented skills and experience in the core competency areas.']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Why supervised field work is part of training.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'The Community Guide: Community Health Workers', use: 'The evidence for the role.', url: 'https://thecommunityguide.org/content/community-health-workers' },
    { name: '211 Los Angeles County', use: 'Local services to refer to.', url: 'https://211la.org' },
  ],
};
