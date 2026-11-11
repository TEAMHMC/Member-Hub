// Community Health Worker Pathway, supervised fieldwork guides.
//
// Three courses that carry the certificate's fieldwork component, with ids that match the volunteer
// portal's certificate definition on purpose.
//   chw_fieldwork_observed    num 16, 8 hours of observed field practice
//   chw_fieldwork_supervised  num 17, 12 hours of supervised service delivery
//   chw_case_conference       num 18, 4 hours, live, a case conference and reflection
//
// The first two are practicum courses. The stated minutes are the field hours, which are done on shift with
// a named supervisor and logged. The short guide in each course is read before and between shifts and is
// not counted in those hours. The third is a live course with one lesson, three scheduled sessions, and a
// practice file, and its stated 240 minutes equal those parts.
//
// Every statement of fact was taken from a source opened and read on November 10 or 11, 2026. The sources
// are the California Department of Health Care Access and Information's CHW/P/R Training Program Best
// Practices Framework page; the Rural Health Information Hub's toolkit page on supporting the community
// health worker workforce; the 2020 discussion paper on supervision strategies and community health worker
// effectiveness by Brown, Kangovi, Wiggins, and Alvarado (hosted by the National Association of Community
// Health Centers and the National Academy of Medicine); the Boston ABCD Behavioral Health Integration for
// CHW Supervisors trainer's guide; the 2016 progress report of the CHW Core Consensus Project on roles,
// skills, and qualities; and OSHA's Guidelines for Preventing Workplace Violence for Healthcare and Social
// Service Workers (2016). The framework is voluntary. It does not change the Department of Health Care
// Services' requirements for Medi-Cal qualification and it is not a certification. The full framework
// document and the Department of Health Care Services' own Medi-Cal community health worker pages were
// not opened. The page of the framework that sets the exact length of fieldwork was not found, so the
// course states the hours that HMC's certificate sets and does not say the framework sets them.
//
// What belongs to supervisors and facilitators, including how they are trained, how hours are verified, and
// how the competency checklist is scored, is written for them in separate review documents and is kept out
// of this participant-facing course. The scenes were written for this course and describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

// ───────────────────────────────────────────────────────────────────────────
// Observed Field Practice
// ───────────────────────────────────────────────────────────────────────────
export const CHW_FIELDWORK_OBSERVED: Course = {
  id: 'chw_fieldwork_observed',
  num: 16,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'practicum',
  modality: 'in-person',
  title: 'Observed Field Practice',
  promise:
    "Spend paired shifts in the field with an experienced worker or instructor, watch the work with a purpose, take part in small ways, get feedback, and log every shift honestly.",
  about: [
    "Reading and role-play teach you what to do. The field teaches you what it feels like to do it, with a real person in front of you. These first eight hours are about watching well. You are paired with an instructor or an experienced community health worker who observes you, gives you feedback, and shows you the work. Shadowing counts here.",
    "The state's best practices framework for community health worker training says fieldwork is key, that it should reflect what community health workers do in real life, and that it can include shadowing, simulation labs, and service delivery in community organizations. It says programs should give clear guidelines to sites and supervisors, including goals, tasks, responsibilities, and how to track hours. This guide is the participant side of those guidelines.",
    "The eight hours are field hours, done on shift and logged. The short guide you read here takes extra time outside those hours. It is the first part of the Supervised Fieldwork component of HMC's community health worker pathway.",
  ],
  objectives: [
    "Prepare for a shift, know what you may and may not do, and know how to reach your supervisor and escalate.",
    "Observe with a purpose, using the skills of the field as a guide, and take notes that protect privacy.",
    "Take part in small ways when the worker invites you to.",
    "Ask for and use feedback.",
    "Log each shift the same day with your supervisor's signature, and reflect after each stage.",
  ],
  minutes: 480,
  prerequisites:
    "Foundations courses 1 through 15, or the portion your program requires before field practice, and your supervisor's confirmation that you are ready to start.",
  whoFor:
    "Learners in HMC's community health worker pathway who are starting supervised fieldwork.",
  freshness:
    "The best practices framework is voluntary guidance, and your program's own site rules govern what you do on a shift. Follow your program's protocols and the instructions of your supervisor.",
  requirements: [
    { id: 'fo-hours', kind: 'practicum', label: 'Complete eight hours of observed field practice', detail: 'Hours are set with your program and site. Each shift is logged and signed by your supervisor or instructor.' },
    { id: 'fo-reflect', kind: 'assignment', label: 'Write a short reflection after each stage', detail: 'A few sentences on what you saw, what you learned, and what you will try next.' },
    { id: 'fo-signoff', kind: 'evaluation', label: 'Supervisor sign-off', detail: 'Your supervisor or instructor reviews your log and signs your record.' },
  ],
  lessons: [
    {
      id: 'chw-fo-l1',
      title: 'Before your first shift',
      summary: 'What to confirm, what you may and may not do, how to stay safe, and how to protect privacy.',
      minutes: 20,
      blocks: [
        { kind: 'why', text: [
          "The first shift is easier when you know who is in charge, where to stand, and what to do if something goes wrong. A few minutes of preparation lets you spend the shift learning.",
        ] },
        { kind: 'steps', title: 'Before you go', items: [
          { label: 'Confirm the details', text: "The site, the start and end time, your supervisor's name and phone number, and the person who is your pair for the shift." },
          { label: 'Know the plan for trouble', text: "Ask what you should do if you feel unsafe, if someone is in crisis, or if you cannot reach your supervisor. Ask who the backup is." },
          { label: 'Know your role', text: "Ask what you may do, such as greet, hand out materials, and record contacts, and what you may not do, such as give advice or run a screening on your own. If it is unclear, ask before you act." },
          { label: 'Plan your trip', text: "How you will get there and home, what to bring, and what the weather will be. Bring identification and what your program asks for. Charge your phone." },
          { label: 'Prepare to protect privacy', text: "Plan to leave your phone camera off, to write no full names in your notes, and to talk about what you see only with your supervisor." },
        ] },
        { kind: 'concept', title: 'What you may and may not do', text: [
          "Practice guidance for this course, drawn from your Role and Field Skills and Professional Conduct courses. During observed practice you watch, you take part when invited, and you stay within the role of your pair. You do not give medical, legal, or immigration advice. You do not promise services. You do not go anywhere alone with a person you serve. You do not take a person's belongings or give your own money. If a person asks you something that is beyond the role, say that you will check, and ask your pair or supervisor.",
          "Escalate right away, meaning find your supervisor or pair at once, when someone may hurt themselves or another person, when a medical emergency or overdose is suspected, when a child, older adult, or dependent adult may be at risk, when someone tells you something you are unsure you can keep private, and when you feel unsafe. In an emergency, call 911.",
        ] },
        { kind: 'concept', title: 'Staying safe', text: [
          "OSHA's guidelines for healthcare and social service workers recommend that field workers have a way to communicate, such as a cell phone, that a buddy system be used when personal safety may be threatened, that workers use extra care in unfamiliar residences, and that workers have discretion to get backup and to decline or stop a visit if they feel unsafe. They also say workers should report assaults and threats to a supervisor. The Community Health Worker Core Consensus Project lists the ability to maximize personal safety in community and clinical settings among the skills of the field.",
          "Take these as your own habits during every shift. Stay with your pair. Know the exits. Tell your pair if you feel uneasy, and leave together if either of you does. After a hard moment, tell your supervisor the same day.",
        ] },
        { kind: 'concept', title: 'Privacy while you watch', text: [
          "You will see and hear things about people's health, housing, and lives. Treat all of it as private. Do not take photos. Do not write names, addresses, birth dates, or other details that would let someone identify a person. Do not tell friends or family about what you saw. Share what you learned only with your supervisor or in a case conference, with identifying details left out. Practice guidance for this course. If a person you serve asks who you are, say your name and that you are learning with the team. If they would rather you step away, step away.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-fo-q1',
          q: "On your first observed shift, a person asks you a medical question. What do you do?",
          options: [
            "Answer to be helpful",
            "Say that you will check, and ask your pair or supervisor who can answer or refer",
            "Tell them to ignore the question",
            "Look it up on your phone and read it to them",
          ],
          answer: 1,
          rationale: "Observed practice is within the role of your pair and program. Medical advice is outside the community health worker's role, and the right step is to check and refer.",
          distractors: "The other answers give advice outside the role or dismiss the person.",
        } },
        { kind: 'reflect', title: 'Before you go', prompts: [
          "What are you most nervous about? Who can you ask?",
          "What will you do if you feel unsafe?",
        ] },
        { kind: 'takeaways', items: [
          "Confirm your supervisor, your pair, and the plan for trouble before you go.",
          "Know your role. Ask before you act when you are unsure.",
          "Stay with your pair, protect privacy, and tell your supervisor about hard moments the same day.",
        ] },
        ev([
          "California Department of Health Care Access and Information. CHW/P/R Training Program Best Practices Framework page. Fieldwork reflects real work, can include shadowing and simulation labs, and sites and supervisors should receive clear guidelines on goals, tasks, responsibilities, and tracking hours. The framework is voluntary.",
          "OSHA. Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers (OSHA 3148, 2016). Communication devices, the buddy system, extra care in unfamiliar residences, discretion to get backup or stop a visit, and reporting.",
          "CHW Core Consensus (C3) Project. Understanding Scope and Competencies (2016). The skills of the field, including professional skills and conduct and personal safety.",
          "The escalation list, the role guidance, the privacy habits, and the plan steps are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
    {
      id: 'chw-fo-l2',
      title: 'How to observe well',
      summary: 'What to watch for, how to take safe notes, and how to take part in small ways.',
      minutes: 20,
      blocks: [
        { kind: 'why', text: [
          "Watching is a skill. A learner who watches with a purpose picks up more in an hour than one who simply stands nearby. Your pair is also showing you something they did not learn from a book.",
        ] },
        { kind: 'concept', title: 'Use the skills of the field as your guide', text: [
          "The Community Health Worker Core Consensus Project lists eleven skills for the field. They are communication, interpersonal and relationship building, service coordination and navigation, capacity building, advocacy, education and facilitation, individual and community assessment, outreach, professional skills and conduct, evaluation and research, and a knowledge base. In observed practice, watch for the first three and the last two in particular.",
          "Under communication, the project lists using plain and clear language, communicating with empathy, listening actively, and documenting work. Notice how your pair opens a conversation, how long they pause, how they check that a person understood, and how they write notes. Under interpersonal skills, it lists coaching and social support, interviewing techniques such as motivational interviewing, working as a team member, managing conflict, and practicing cultural humility. Notice what your pair asks and what they leave unsaid. Under service coordination, it lists coordinating care, making appropriate referrals, and following up and tracking outcomes. Notice how a referral is made, who confirms it, and what happens after. Under professional skills, it lists setting goals and following a work plan, managing time, solving problems, maximizing personal safety, observing ethical and legal standards, and identifying situations that call for mandatory reporting. Notice how your pair handles a hard decision.",
        ] },
        { kind: 'concept', title: 'Safe notes', text: [
          "Practice guidance for this course. Carry a small notebook and take notes that protect privacy. Write what the worker did and said and what you noticed, using initials or a number and not a name. Write your questions. Write what you would do differently. Do not write details that identify a person. At the end of the shift, give your notes to your supervisor on request and destroy them as your program says, or keep them in a safe place that your program approves.",
          "A useful note has three parts. What I saw. What I wondered. What I would try. For example, I saw my pair pause for several seconds after the person said they were tired. I wondered whether the pause helped the person say more. I would try waiting longer before I speak.",
        ] },
        { kind: 'concept', title: 'Taking part in small ways', text: [
          "When your pair invites you, you may take small parts. Greet people. Hand out materials. Record contacts on the form your program uses, with your pair beside you. Help set up and clean up. Offer to carry bags or fill water. As your pair sees that you are steady, they may invite you to ask a question or listen to a story. Say yes to what you feel ready for and no to what you do not. Practice guidance for this course. It is fine to say, I would like to watch this one.",
        ] },
        { kind: 'concept', title: 'Ask questions at the right time', text: [
          "Hold questions until the person has left or a quiet moment. Then ask. Why did you ask that? What made you decide to refer? How did you know that was the right time? A good pair loves these questions. They show you are thinking. Save the bigger questions for your debrief or your supervisor.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-fo-q2',
          q: "Which note protects privacy and is most useful for learning?",
          options: [
            "Maria Lopez, 34, of 123 Main Street, said she was tired and my pair did not respond well",
            "Person A said they were tired. My pair paused for several seconds before replying. I wondered whether the pause helped. I would try waiting longer",
            "A long description of the person's family and health history",
            "No notes at all",
          ],
          answer: 1,
          rationale: "A good note uses no identifying details and records what was seen, what was wondered, and what to try.",
          distractors: "The other answers identify a person, record too much, or skip learning.",
        } },
        { kind: 'reflect', title: 'Your observing', prompts: [
          "Which skill of the field will you watch for on your first shift?",
          "What is one question you want to ask your pair?",
        ] },
        { kind: 'takeaways', items: [
          "Watch with a purpose, using the skills of the field.",
          "Keep safe notes. What I saw, what I wondered, what I would try, with no identifying details.",
          "Take part in small ways when invited, and ask questions at a quiet moment.",
        ] },
        ev([
          "CHW Core Consensus (C3) Project. Understanding Scope and Competencies (2016). The eleven skills and their sub-skills.",
          "California Department of Health Care Access and Information. CHW/P/R Training Program Best Practices Framework page. Hands-on experiences that reflect what community health workers do in real life.",
          "Rural Health Information Hub. Supporting the Community Health Worker Workforce. Supervisory tools, such as guides, logs, and checklists, can facilitate supervision.",
          "The note format, the guidance on taking part, and the advice on questions are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
    {
      id: 'chw-fo-l3',
      title: 'Feedback, logging, and sign-off',
      summary: 'How to ask for feedback, how to log a shift, and what supportive supervision looks like.',
      minutes: 20,
      blocks: [
        { kind: 'why', text: [
          "Feedback is the reason supervised fieldwork exists. A supervisor who watches you work can tell you things you cannot see yourself. Logging is how those hours become a record.",
        ] },
        { kind: 'concept', title: 'Supportive supervision', text: [
          "The Rural Health Information Hub says ongoing, supportive supervision is a best practice for community health worker programs. It describes supportive supervision as involving open communication, constructive feedback, and mutual trust, and says a supervisor's role is to be regularly available, use supportive approaches, prioritize safety, and offer monitoring and coaching. It says supervision can be one-on-one or in a group, and that group supervision lets workers support and learn from each other while one-on-one supervision lets a worker discuss topics in private.",
          "A discussion paper by community health worker leaders and researchers describes supportive supervision as emphasizing joint problem-solving, mentoring, and two-way communication, and calls it a mutual process where both supervisor and worker grow. It says the hierarchical supervision typical of health care is not consistent with the values and approach of the community health worker model. Expect your supervisor to ask what you noticed, what you want to learn, and what felt hard, and not only to correct you.",
        ] },
        { kind: 'concept', title: 'Asking for feedback', text: [
          "Practice guidance for this course. Ask for feedback in a way that makes it easy to give. At the end of a shift ask three things. What did I do that helped? What is one thing I could try next time? What should I watch for next shift? Listen to the answer without defending. Write it down. If you disagree, say so politely and ask for an example. If feedback feels unfair or unkind, tell your supervisor or your program lead. You are entitled to supportive supervision.",
          "The best practices framework says assessment should focus on strengths and not only weaknesses, should be trauma-informed, and should let people try again and get feedback. It also says participants should be able to give feedback on their instructors and on each other. Use that. Tell your supervisor what is helping you learn and what is not.",
        ] },
        { kind: 'concept', title: 'Logging a shift', text: [
          "Log every shift the same day. Write the date, the site, the start and end times, the hours, the activity in a line, and your supervisor's name. Get your supervisor's signature or the confirmation your program uses. Hours without a signature may not count. Keep a copy of every signed log. The framework says programs should guide sites on how to track hours, so follow your program's form.",
          "After each stage, write a short reflection. A few sentences on what you saw, what you learned, and what you will try next. These are for you and your supervisor. They are not graded for writing.",
        ] },
        { kind: 'concept', title: 'When something goes wrong', text: [
          "If you make a mistake, tell your supervisor at once. If you see something that worries you, tell your supervisor. If something upsets you, say so. Hard moments are part of this work. Your supervisor and your pair have been there. Do not carry it alone. If you feel unsafe at any time, follow your safety plan and leave with your pair.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-fo-q3',
          q: "How does the Rural Health Information Hub describe supportive supervision?",
          options: [
            "Occasional correction only when mistakes happen",
            "Ongoing supervision with open communication, constructive feedback, and mutual trust, in which the supervisor is regularly available, prioritizes safety, and offers monitoring and coaching",
            "Supervision only by a doctor",
            "No supervision at all",
          ],
          answer: 1,
          rationale: "The Hub calls ongoing, supportive supervision a best practice, involving open communication, constructive feedback, and mutual trust, with a supervisor who is regularly available and offers monitoring and coaching.",
          distractors: "The other answers describe the opposite or something the Hub does not say.",
        } },
        { kind: 'reflect', title: 'Your feedback', prompts: [
          "How do you usually react to feedback? What would help you hear it?",
          "What will you ask your supervisor at the end of your first shift?",
        ] },
        { kind: 'takeaways', items: [
          "Supportive supervision means open communication, constructive feedback, and mutual trust.",
          "Ask for feedback with three questions, and listen without defending.",
          "Log every shift the same day with a signature, and write a short reflection after each stage.",
        ] },
        ev([
          "Rural Health Information Hub. Supporting the Community Health Worker Workforce. Supportive supervision, one-on-one and group formats, and supervisory tools.",
          "Brown O, Kangovi S, Wiggins N, Alvarado CS. Supervision Strategies and Community Health Worker Effectiveness in Health Care Settings (2020). Supportive supervision as joint problem-solving, mentoring, and two-way communication.",
          "California Department of Health Care Access and Information. CHW/P/R Training Program Best Practices Framework page. Assessment guidance, feedback from participants, and tracking hours.",
          "The three questions, the logging steps, and the advice for when something goes wrong are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-fo-log',
    title: 'Your observed field practice log and reflections',
    minutes: 0,
    purpose: 'A record you keep. Your shift log, what you observed against the skills of the field, your questions and feedback, and your reflection after each stage.',
    fields: [
      { id: 'log', label: 'Your shift log', help: 'For each shift write the date, the site, the start and end times, the hours, a line on the activity, and your supervisor or instructor. Add a note when it is signed. Keep a running total toward eight hours.', multiline: true },
      { id: 'observed', label: 'What you observed', help: 'For each shift, write one thing you saw in communication, one in relationship building, one in service coordination, and one in professional conduct. Use no names or identifying details.', multiline: true },
      { id: 'feedback', label: 'Feedback and your questions', help: 'Write the feedback you received and what you will try. Write the questions you want to ask your supervisor.', multiline: true },
      { id: 'reflect', label: 'Your reflection after each stage', help: 'A few sentences on what you saw, what you learned, and what you will try next.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor and your pair, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Why supervised fieldwork is part of training and what good fieldwork looks like.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'Rural Health Information Hub: Supporting the Community Health Worker Workforce', use: 'What supportive supervision looks like.', url: 'https://www.ruralhealthinfo.org/toolkits/community-health-workers/4/support' },
    { name: 'OSHA: Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers', use: 'Safety measures for people who work in the field.', url: 'https://www.osha.gov/sites/default/files/publications/osha3148.pdf' },
    { name: 'C3 Project: Understanding Scope and Competencies', use: 'The roles, skills, and qualities of community health workers.', url: 'https://c3project.org/' },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// Supervised Service Delivery
// ───────────────────────────────────────────────────────────────────────────
export const CHW_FIELDWORK_SUPERVISED: Course = {
  id: 'chw_fieldwork_supervised',
  num: 17,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'practicum',
  modality: 'in-person',
  title: 'Supervised Service Delivery',
  promise:
    "Run your own conversations, screenings within your role, and referrals with a supervisor available, review your work with them, and finish with a signed record that shows what you can do.",
  about: [
    "After observing, you start doing. In these twelve hours you run your own conversations, take part in screenings that are within your role, and make referrals, with a supervisor available and a review afterward. This is where the skills from your courses become yours.",
    "The state's best practices framework says supervision during fieldwork can include check-ins, co-visits, and group case conferences with an instructor from the training organization, and that assessment should include observing learners practice real-life skills such as motivational interviewing, client assessments, and support plans. It says assessments should focus on strengths and let people try again. This guide is built on those ideas.",
    "The twelve hours are field hours, done on shift and logged. The short guide you read here takes extra time outside those hours. It is the second part of the Supervised Fieldwork component of HMC's community health worker pathway.",
  ],
  objectives: [
    "Move from observing to doing in stages, with a supervisor available.",
    "Run a conversation, take part in a screening within your role, and make a referral that lands, and document each.",
    "Know when to ask, when to refer, and when to escalate.",
    "Use supervision to review your work and set goals.",
    "Complete a self-assessment against the skills of the field and a signed record.",
  ],
  minutes: 720,
  prerequisites:
    "Observed Field Practice and your supervisor's confirmation that you are ready to take on your own contacts.",
  whoFor:
    "Learners in HMC's community health worker pathway who are ready to serve under supervision.",
  freshness:
    "The best practices framework is voluntary guidance, and your program's protocols govern what you may do. Follow your program's rules about screenings, documentation, and when your supervisor must be present.",
  requirements: [
    { id: 'fs-hours', kind: 'practicum', label: 'Complete twelve hours of supervised service delivery', detail: 'Hours are set with your program and site. Each shift is logged and signed by your supervisor.' },
    { id: 'fs-review', kind: 'assignment', label: 'Review your work with your supervisor', detail: 'Bring contacts and questions to each check-in and note what you will try next.' },
    { id: 'fs-self', kind: 'assignment', label: 'Complete a self-assessment against the skills of the field', detail: 'Rate yourself on each skill with an example, then compare with your supervisor.' },
    { id: 'fs-signoff', kind: 'evaluation', label: 'Final supervisor sign-off', detail: 'Your supervisor completes the competency checklist and signs your record.' },
  ],
  lessons: [
    {
      id: 'chw-fs-l1',
      title: 'From watching to doing',
      summary: 'The stages, what you may do on your own, and when your supervisor must be involved.',
      minutes: 20,
      blocks: [
        { kind: 'why', text: [
          "Doing for the first time is different from watching. A person is in front of you, and a supervisor is nearby. The stages keep you and the people you serve safe while you build skill.",
        ] },
        { kind: 'steps', title: 'The stages', items: [
          { label: 'Take small parts', text: "Greet people, hand out resources, and record contacts, with your supervisor or an experienced worker within reach." },
          { label: 'Run conversations with a worker nearby', text: "Run your own conversations while a worker listens from a short distance and steps in only if needed. Debrief after each." },
          { label: 'Run contacts with a supervisor available', text: "Run conversations, take part in screenings within your role, and make referrals, with your supervisor reachable by phone or on site, and review the work afterward." },
        ] },
        { kind: 'concept', title: 'What you may do on your own, and what you may not', text: [
          "Practice guidance for this course, drawn from your Role and Field Skills, Assessment, and Professional Conduct courses. Your program decides what you may do on your own. In general, community health workers listen, share information from approved materials, help people find and use services, make referrals, follow up, and document. They do not diagnose, treat, prescribe, give legal or immigration advice, or run a clinical assessment. Ask your supervisor which screenings your program lets you take part in, and which must be done by someone else. If a screen is not yours, say so to the person and arrange for the right person to do it.",
          "Ask your supervisor before you act when a person's situation is new to you, when a decision could affect their safety, benefits, or housing, when someone asks you to keep a secret, or when you are not sure. Asking is part of the job.",
        ] },
        { kind: 'concept', title: 'When your supervisor must be involved', text: [
          "Bring in your supervisor right away when someone may hurt themselves or another person, when a medical emergency or overdose is suspected, when a child, older adult, or dependent adult may be at risk, when a person discloses something you are not sure you can keep private, when a person is aggressive or you feel unsafe, and when you are unsure how to proceed. In an emergency, call 911. Then tell your supervisor. Your program may have additional triggers. Learn them before you start.",
        ] },
        { kind: 'concept', title: 'Safety does not change when you start doing', text: [
          "OSHA's guidelines for field workers recommend a way to communicate, a buddy system when safety may be threatened, and discretion to get backup and to decline or stop a visit. Keep using them. Tell your supervisor where you are. Know the exits. If you feel uneasy, say so and leave. A supervisor would rather hear about a close call than learn about an injury.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-fs-q1',
          q: "A person tells you they are thinking of ending their life. What do you do in supervised service delivery?",
          options: [
            "Keep it to yourself so they trust you",
            "Stay with them, follow your program's crisis steps and the skills you learned, call 988 or 911 as appropriate, and bring in your supervisor right away",
            "Tell them to call back later",
            "Handle it alone and tell your supervisor next week",
          ],
          answer: 1,
          rationale: "Thoughts of suicide call for staying with the person, following the program's crisis steps, calling for help, and involving the supervisor at once.",
          distractors: "The other answers delay help or ask the person to hold it alone.",
        } },
        { kind: 'reflect', title: 'Your readiness', prompts: [
          "Which part of doing are you most ready for? Which are you least ready for?",
          "What will you say to your supervisor if you are unsure?",
        ] },
        { kind: 'takeaways', items: [
          "Move in stages, with a supervisor within reach.",
          "Know what your program lets you do and when to ask, refer, or escalate.",
          "Safety habits stay the same when you start doing.",
        ] },
        ev([
          "California Department of Health Care Access and Information. CHW/P/R Training Program Best Practices Framework page. Fieldwork supervision can include check-ins, co-visits, and group case conferences, and it is voluntary guidance.",
          "OSHA. Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers (OSHA 3148, 2016). Communication, buddy system, and discretion to get backup or stop a visit.",
          "CHW Core Consensus (C3) Project. Understanding Scope and Competencies (2016). Skills and the role of community health workers, including professional conduct and mandatory reporting.",
          "The stages, the list of what to ask about, and the escalation triggers are practice guidance written for this course. Your program's own rules govern.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
    {
      id: 'chw-fs-l2',
      title: 'A conversation, a screening, and a referral',
      summary: 'Bringing your skills together in one contact, and documenting it.',
      minutes: 20,
      blocks: [
        { kind: 'why', text: [
          "A good contact has a shape. You open, you listen, you decide together what is next, you connect the person to a service, and you write it down. This lesson brings together what you learned in earlier courses.",
        ] },
        { kind: 'steps', title: 'The shape of a contact', items: [
          { label: 'Open', text: "Say your name and role. Ask permission to talk. Say how long it will take. Explain what is private and what you must report." },
          { label: 'Listen', text: "Ask open questions, reflect what you hear, and let silence work. Use the skills from Communication and Motivational Interviewing. Notice what the person says matters most to them." },
          { label: 'Screen, if it is yours to do', text: "If your program lets you take part in a screening, use the tool as written, explain why you are asking, and say what happens with the answers. If it is not yours, say so and arrange for the right person." },
          { label: 'Decide together', text: "Offer options. Let the person choose what they want to try. Write down, together, one or two next steps." },
          { label: 'Refer so it lands', text: "Say what the service is, why it fits, and what to expect. Offer a warm handoff. Confirm who will do what by when." },
          { label: 'Document', text: "Write facts, in your program's form, soon after. Leave out guesses about character. Share only what is needed." },
          { label: 'Follow up', text: "Agree when and how you will check back. Do it. Close the loop with the person and with the service." },
        ] },
        { kind: 'concept', title: 'The skills involved', text: [
          "The Community Health Worker Core Consensus Project lists, under communication, the ability to use plain and clear language, communicate with empathy, listen actively, and document work. Under interpersonal skills, it lists coaching and social support and using interviewing techniques such as motivational interviewing. Under service coordination and navigation, it lists coordinating care, making appropriate referrals, helping develop an action plan and goal attainment, coordinating with clinical and other community services, and following up and tracking referral outcomes. Under individual and community assessment, it lists participating in assessment through observation and active inquiry. Use this list as your self-check. After each contact, ask which of these you did and which you skipped.",
        ] },
        { kind: 'concept', title: 'A short note that does its job', text: [
          "Practice guidance for this course. A good contact note is brief and factual. It gives the date, the place, how long, what the person asked for, what you offered, what you referred them to, what the person decided, what you promised and by when, and who will follow up. It leaves out names of other people, guesses, and details that do not matter. It is written so that another worker who reads it could pick up where you left off.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-fs-q2',
          q: "Which makes a referral most likely to land?",
          options: [
            "Handing the person a card and wishing them luck",
            "Explaining what the service is and why it fits, offering a warm handoff, confirming who does what by when, and following up",
            "Making the appointment without asking the person",
            "Telling the person they must go",
          ],
          answer: 1,
          rationale: "A referral lands when the person understands it and chooses it, when a warm handoff reduces barriers, and when someone follows up to close the loop.",
          distractors: "The other answers skip the person's choice or the follow-up.",
        } },
        { kind: 'reflect', title: 'Your contact', prompts: [
          "Which step in the shape of a contact do you tend to skip?",
          "How will you remind yourself to follow up?",
        ] },
        { kind: 'takeaways', items: [
          "Open, listen, screen if it is yours, decide together, refer so it lands, document, follow up.",
          "Use the skills list as your self-check after each contact.",
          "Write notes another worker could pick up from.",
        ] },
        ev([
          "CHW Core Consensus (C3) Project. Understanding Scope and Competencies (2016). Skills and sub-skills for communication, interpersonal and relationship building, service coordination and navigation, and assessment.",
          "California Department of Health Care Access and Information. CHW/P/R Training Program Best Practices Framework page. Assessment through real-life skills such as motivational interviewing, client assessments, and support plans.",
          "The earlier courses of this pathway, including Communication, Motivational Interviewing, Navigation, and Assessment, on which the shape of a contact draws.",
          "The shape of a contact and the note guidance are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
    {
      id: 'chw-fs-l3',
      title: 'Supervision that helps you grow',
      summary: 'Using check-ins, setting goals, the self-assessment, and the final sign-off.',
      minutes: 20,
      blocks: [
        { kind: 'why', text: [
          "Supervision is where you turn experience into skill. A good check-in is a conversation, not a test. You bring the work, and your supervisor helps you see it.",
        ] },
        { kind: 'concept', title: 'What a good check-in looks like', text: [
          "The Rural Health Information Hub lists topics that regular supervision meetings can cover. They include discussing activities and workload, reviewing documentation, providing feedback on progress and performance, identifying training and resource needs, addressing issues and challenges such as burnout, and commending accomplishments. It says supervisory tools such as guides, logs, and checklists can help. It also describes mentoring, in which experienced workers share experience and guidance, and says mentoring may involve reviewing cases and solving problems together.",
          "Practice guidance for this course. Bring two things to each check-in. One contact that went well and one that you are unsure about, described without identifying details. Bring one question. Say what you would do differently. Ask your supervisor what they noticed. End by agreeing on one thing to try before the next check-in.",
        ] },
        { kind: 'concept', title: 'Setting goals', text: [
          "Choose one or two skills to work on at a time. Pick them from the skills of the field. Name what you will try, how you will know, and when you will review. For example, I will practice summarizing what a person said before I offer a referral, and I will ask my supervisor to listen for it in two contacts. A goal you can see is a goal you can meet.",
        ] },
        { kind: 'concept', title: 'The self-assessment and the final sign-off', text: [
          "Near the end, you complete a self-assessment against the skills of the field. For each of the eleven skills, rate yourself and give one example from your fieldwork, and one thing you want to keep growing. Then compare with your supervisor's view. Differences are not failures. They are what you talk about.",
          "At the end, your supervisor completes the competency checklist and signs your record. The best practices framework says assessments should focus on strengths, let people try again and get feedback, and be respectful and trauma-informed. If your supervisor is not ready to sign off on a skill, ask what you can do to show it, and when you can try again. Keep a copy of every signed log and the final record.",
        ] },
        { kind: 'concept', title: 'Looking after yourself', text: [
          "Supervision is also a place to talk about stress. The Hub lists burnout among the issues supervision should address. Tell your supervisor when you are tired, upset, or doubting yourself. Take breaks. Keep up the care habits you built in your earlier courses. If something stays with you after a hard contact, ask for support and keep asking until you get it.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-fs-q3',
          q: "What is a good way to use a supervision check-in?",
          options: [
            "Say everything is fine so you do not seem weak",
            "Bring a contact that went well, one you are unsure about, and a question, without identifying details, and agree on one thing to try",
            "Wait for your supervisor to find problems",
            "Skip it when you are busy",
          ],
          answer: 1,
          rationale: "A good check-in is a joint review of real work with questions, and ends with a goal.",
          distractors: "The other answers waste the check-in or hide problems.",
        } },
        { kind: 'reflect', title: 'Your growth', prompts: [
          "Which skill do you most want to strengthen, and how will you know?",
          "What would make you comfortable telling your supervisor you are unsure?",
        ] },
        { kind: 'takeaways', items: [
          "Bring real work to each check-in, with a question, and leave with one thing to try.",
          "Set one or two goals at a time, drawn from the skills of the field.",
          "Complete the self-assessment honestly and keep your signed record.",
        ] },
        ev([
          "Rural Health Information Hub. Supporting the Community Health Worker Workforce. Topics for supervision meetings, supervisory tools, and mentoring.",
          "Brown O, Kangovi S, Wiggins N, Alvarado CS. Supervision Strategies and Community Health Worker Effectiveness in Health Care Settings (2020). Supportive supervision as a mutual process.",
          "California Department of Health Care Access and Information. CHW/P/R Training Program Best Practices Framework page. Assessment focused on strengths, with chances to try again and get feedback.",
          "CHW Core Consensus (C3) Project. Understanding Scope and Competencies (2016). The eleven skills used for the self-assessment.",
          "The check-in routine, the goal setting, and the self-assessment steps are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-fs-record',
    title: 'Your supervised service delivery record and self-assessment',
    minutes: 0,
    purpose: 'A record you keep. Your shift log, your contact notes, your goals and check-in notes, and your self-assessment against the skills of the field.',
    fields: [
      { id: 'log', label: 'Your shift log', help: 'For each shift write the date, the site, the start and end times, the hours, a line on the activity, and your supervisor. Note when it is signed. Keep a running total toward twelve hours.', multiline: true },
      { id: 'contacts', label: 'Your contact notes', help: 'For a few contacts write what the person asked for, what you offered or referred to, what was decided, and what is due and by whom. Use no names or identifying details.', multiline: true },
      { id: 'goals', label: 'Your goals and check-in notes', help: 'Write the skills you are working on, what you will try, and what your supervisor said at each check-in.', multiline: true },
      { id: 'self', label: 'Your self-assessment', help: 'For each of the eleven skills of the field, rate yourself, give one example from your fieldwork, and name one thing you want to keep growing. Then add what you and your supervisor saw differently.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Why supervised fieldwork is part of training and how assessment is meant to work.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'Rural Health Information Hub: Supporting the Community Health Worker Workforce', use: 'What supportive supervision and mentoring look like.', url: 'https://www.ruralhealthinfo.org/toolkits/community-health-workers/4/support' },
    { name: 'Supervision Strategies and Community Health Worker Effectiveness in Health Care Settings', use: 'A discussion paper by community health worker leaders on supportive supervision.', url: 'https://nam.edu/supervision-strategies-and-community-health-worker-effectiveness-in-health-care-settings/' },
    { name: 'C3 Project: Understanding Scope and Competencies', use: 'The roles, skills, and sub-skills used in the self-assessment.', url: 'https://c3project.org/' },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// Case Conference and Reflection
// ───────────────────────────────────────────────────────────────────────────
export const CHW_CASE_CONFERENCE: Course = {
  id: 'chw_case_conference',
  num: 18,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Case Conference and Reflection',
  promise:
    "Present a real case from your fieldwork with the identifying details left out, learn from your peers and a supervisor, look at the whole picture and not only the person, and leave with a plan for your own growth.",
  about: [
    "Some of the best learning in fieldwork happens afterward, when a group looks together at what happened. In a case conference, you bring a real situation from your fieldwork, with names and identifying details left out, and a group of peers and a supervisor think it through with you.",
    "The state's best practices framework names group case conferences with an instructor as one form of supervision for fieldwork. The Rural Health Information Hub says group supervision lets community health workers support and learn from each other. A trainer's guide for supervisors of community health workers cautions that case conferences often over-focus on personal factors and suggests a simple three-part view that also looks at the institutional and cultural factors. This course gives you the structure.",
    "It is the third part of the Supervised Fieldwork component of HMC's community health worker pathway. It is a live course. You read one lesson, attend three sessions, and complete a practice file. Every case you share is made anonymous, and the group keeps what is said in the room.",
  ],
  objectives: [
    "Present a case in a clear, brief structure with identifying details left out.",
    "Give and receive feedback that is respectful and focused on strengths.",
    "Look at a case through personal, institutional, and cultural factors, and avoid focusing only on the person.",
    "Reflect on your own growth against the skills of the field and plan what comes next.",
    "Know how to look after yourself and keep learning after the certificate.",
  ],
  minutes: 240,
  prerequisites: "Observed Field Practice and at least part of Supervised Service Delivery, so that you have real cases to bring.",
  whoFor:
    "Learners in HMC's community health worker pathway who are in or have finished supervised fieldwork.",
  freshness:
    "The best practices framework is voluntary guidance. Your program's rules on confidentiality and what may be shared in a group govern. If you are unsure whether you can share something, ask your supervisor before the session.",
  modality: 'hybrid',
  requirements: [
    { id: 'cc-lesson', label: 'Read the lesson before the first session', kind: 'assignment' },
    { id: 'cc-s1', label: 'Attend Session 1, Presenting a case', kind: 'attend' },
    { id: 'cc-s2', label: 'Attend Session 2, Looking at the whole picture', kind: 'attend' },
    { id: 'cc-s3', label: 'Attend Session 3, Reflection and what is next', kind: 'attend' },
    { id: 'cc-file', label: 'Complete and keep your case conference file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    {
      id: 'chw-cc-l1',
      title: 'How a case conference works',
      summary: 'The purpose, the privacy rules, how to present a case, how to give feedback, and how to look at the whole picture.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "A case conference is a conversation among people who care about getting the work right. It is not a trial. You bring a situation that puzzled or moved you, and the group helps you see more than you saw alone.",
          "This lesson draws on the state's best practices framework for community health worker training, the Rural Health Information Hub's description of group supervision, a trainer's guide for supervisors of community health workers, and a discussion paper on supportive supervision. It gives you the structure to present a case, to give feedback, and to look at the whole picture. Practice guidance written for this course is marked.",
        ] },
        { kind: 'concept', title: 'What a case conference is for', text: [
          "The framework says supervision during fieldwork can include group case conferences with an instructor. The Rural Health Information Hub says group supervision gives community health workers a chance to support and learn from each other, while one-on-one supervision gives a private place to talk. It describes mentoring that can involve reviewing cases, solving problems, and communicating with other team members. A discussion paper on supervision describes supportive supervision as emphasizing joint problem-solving, mentoring, and two-way communication.",
          "So a case conference has three aims. To help you think through a situation. To spread what the group knows, so each person learns from everyone's experience. And to help you notice what you did well and what you want to grow. It is not to judge anyone or to assign blame.",
        ] },
        { kind: 'concept', title: 'Privacy rules for the room', text: [
          "Practice guidance for this course. You are sharing real situations about real people, so you protect them. Leave out names, addresses, birth dates, employers, schools, and unusual details that would let someone recognize the person. Say a person, a woman in her thirties, a family. Share only what the group needs to think it through. Ask your supervisor before the session if you are unsure whether a case can be shared. Do not record the session. What is said in the room stays in the room, except safety concerns, which go to the facilitator.",
          "If a case involves something that must be reported, such as a risk to a child or an older adult, or a risk of harm, follow your program's procedure and tell your supervisor before the session. The conference is not a substitute for reporting.",
        ] },
        { kind: 'concept', title: 'How to present a case', text: [
          "Practice guidance for this course. Keep it to about five minutes, and use five parts. The situation, in a few sentences, with identifying details left out. What I did. What happened. What I am wondering or what I am stuck on. And what I would like from the group, such as ideas, a different view, or reassurance. A clear last part gets you the help you need.",
          "Choose a case with a question in it. It need not be a hard case. A small moment can teach a lot. A referral that did not land, a conversation that went quiet, a time you were unsure whether to act.",
        ] },
        { kind: 'concept', title: 'How to give feedback', text: [
          "The framework says assessment should focus on strengths and not only weaknesses, should be respectful, and should allow people to try again and get feedback. Use the same spirit with each other. Start with what you noticed that worked. Ask questions before offering advice. Offer ideas as options, not orders. Say, one thing I might try is. Avoid, you should have. If you disagree, say so politely and say why. If you have been in a similar situation, you can share it briefly, and then return the focus to the presenter.",
          "When you are the presenter, listen without defending. Write down what you hear. You do not have to accept every idea. You do have to hear it.",
        ] },
        { kind: 'concept', title: 'Look at the whole picture', text: [
          "The Boston ABCD trainer's guide for supervisors notes that when we do case conferences, we very often over-focus on the personal factors. It offers a three-part view, personal, institutional, and cultural, to help a group think about a case systemically. Its example is a family where the focus is on a child's inhaler use, when the family's housing, near an environmental hazard, is also contributing to the child's lung health.",
          "Use the same view. For a case, ask three questions. What is going on for this person or family personally, such as health, beliefs, and relationships? What is going on in the institutions around them, such as clinics, benefits offices, landlords, schools, and rules? And what is going on in the culture, such as language, stigma, history, and expectations? Many problems that look like a person's choices are shaped by the second and third. Looking at all three also points to different actions, such as an advocacy step, a policy question, or a change in how your program works.",
        ] },
        { kind: 'concept', title: 'Looking after yourself and growing', text: [
          "A case conference is also a place to say how a case affected you. You may feel sad, angry, or unsure. Say so if you want to. The group's job is to listen. The framework says employers and training programs should offer at least six hours of ongoing professional development a year after foundational training, with topics such as new community needs, specialty training, peer learning with other community health workers, and changes in rules and laws. A case conference is a form of peer learning. Plan to keep going after the certificate.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-cc-q1',
          q: "Which is the best way to prepare a case for a conference?",
          options: [
            "Bring the person's full name and story so the group understands",
            "Leave out names and identifying details, keep to about five minutes, and end with what you want from the group",
            "Skip the case if it did not go well",
            "Bring only cases that went perfectly",
          ],
          answer: 1,
          rationale: "Privacy comes first. A short, structured case with a clear question gets the group's help. Cases that are hard or unclear are often the best ones to bring.",
          distractors: "The other answers risk privacy or avoid learning.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-cc-q2',
          q: "According to the trainer's guide for supervisors, why use a personal, institutional, and cultural view when discussing a case?",
          options: [
            "To make the discussion longer",
            "Because case conferences often over-focus on personal factors, and the view helps the group think about systems too",
            "To decide who is at fault",
            "To avoid talking about the person",
          ],
          answer: 1,
          rationale: "The guide notes that case conferences very often over-focus on personal factors, and the three-part view helps the group think systemically.",
          distractors: "The other answers misstate the purpose.",
        } },
        { kind: 'reflect', title: 'Choosing your case', prompts: [
          "Which contact from your fieldwork is still on your mind, and why?",
          "What do you want from the group when you present it?",
        ] },
        { kind: 'takeaways', items: [
          "A case conference is a respectful group conversation, not a trial.",
          "Leave out identifying details, present in five parts, and say what you want from the group.",
          "Look at personal, institutional, and cultural factors, and give feedback that starts with strengths.",
        ] },
        ev([
          "California Department of Health Care Access and Information. CHW/P/R Training Program Best Practices Framework page. Group case conferences as supervision, assessment focused on strengths, and at least six hours of ongoing professional development each year. The framework is voluntary.",
          "Rural Health Information Hub. Supporting the Community Health Worker Workforce. Group supervision and mentoring.",
          "Boston ABCD. Behavioral Health Integration for CHW Supervisors, Trainer's Guide. The caution on over-focusing on personal factors and the personal, institutional, and cultural view.",
          "Brown O, Kangovi S, Wiggins N, Alvarado CS. Supervision Strategies and Community Health Worker Effectiveness in Health Care Settings (2020). Supportive supervision.",
          "The privacy rules, the five-part case, and the feedback habits are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-cc-s1',
      title: 'Session 1, Presenting a case',
      summary: 'A live session. Present a case in five parts and practice giving and receiving feedback.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Presenting a case is a skill, and so is listening to one. This session lets you practice both in a small, supportive group.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "Cases are shared with identifying details left out. What is said in the room stays in the room, except safety concerns, which go to the facilitator. Listen first. Offer ideas as options. No one is asked to share more than they want. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions, the agreements, and the pause rule." },
          { label: 'The five parts, 5 minutes', text: "The facilitator reviews the five parts of a case and gives a short invented example." },
          { label: 'Case presentations, 35 minutes', text: "In groups of three or four, each person presents a case in about five minutes using the five parts, and the group responds for about four minutes, starting with what worked and then asking questions. Rotate until everyone has presented." },
          { label: 'Whole group debrief, 10 minutes', text: "What was it like to present? What made feedback helpful? What would you change about how you present?" },
          { label: 'Close, 5 minutes', text: "One thing you will carry from your group." },
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Were identifying details left out?",
          "Did the presenter use the five parts and say what they wanted from the group?",
          "Did the group begin with strengths and ask questions before giving ideas?",
          "Were ideas offered as options?",
          "Did the presenter listen without defending?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What helped you most from the group?",
          "What will you do differently when you present next time?",
        ] },
        { kind: 'takeaways', items: [
          "A clear, short case with a question gets the best help.",
          "Start feedback with strengths, ask questions, and offer ideas as options.",
          "Listen without defending.",
        ] },
        ev([
          "The agenda is practice design written for this course from the lesson and the sources it cites. Participants present real cases from their own fieldwork with identifying details left out. The facilitator's example is invented and describes no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-cc-s2',
      title: 'Session 2, Looking at the whole picture',
      summary: 'A live session. Use the personal, institutional, and cultural view on a case and plan an action beyond the individual.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Many problems that look personal are shaped by systems. This session lets you practice seeing both and thinking about what could change.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "Cases are shared with identifying details left out. What is said in the room stays in the room, except safety concerns, which go to the facilitator. Listen first. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'The three-part view, 10 minutes', text: "The facilitator walks through the view on an invented case, mapping what is happening personally, in institutions, and in the culture, and shows how it changes the options." },
          { label: 'Map a case, 30 minutes', text: "In groups of three or four, choose one case from your fieldwork, or one of the group's invented cases. Map it on a three-part sheet. Then list at least one action at each level, such as something for the person, something for your program, and something for the community or policy." },
          { label: 'Share and discuss, 10 minutes', text: "Each group shares one insight. The facilitator draws out patterns across the groups, including where advocacy might help." },
          { label: 'Close, 5 minutes', text: "One thing you will notice differently." },
        ] },
        { kind: 'list', title: 'Invented cases for the group', items: [
          "A woman keeps missing clinic appointments. She says the bus is unreliable, her landlord has not fixed a leak, and she is not sure the clinic respects her.",
          "A man says he does not want to use a benefit because someone told him it would affect his family.",
          "A teenager stopped coming to a program after a staff member said something that felt dismissive.",
          "A family cannot get a form translated and keeps receiving notices they cannot read.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the group look at personal, institutional, and cultural factors?",
          "Did they avoid blaming the person?",
          "Did they name at least one action beyond the individual?",
          "Did they keep identifying details out?",
          "Did every voice get heard?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which level of the view do you usually notice first, and which do you tend to miss?",
          "What is one action beyond the individual that you could take or support?",
        ] },
        { kind: 'takeaways', items: [
          "Look at the person, the institutions, and the culture together.",
          "Actions can be at every level, including advocacy and program change.",
          "Do not blame the person for what the system produces.",
        ] },
        ev([
          "The agenda is practice design written for this course from the lesson and the Boston ABCD trainer's guide's personal, institutional, and cultural view. The invented cases describe no real person. Participants may also map a real case with identifying details left out.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 3 ─────────────────────────────────────────────────────────
    {
      id: 'chw-cc-s3',
      title: 'Session 3, Reflection and what is next',
      summary: 'A live session. Reflect on your growth against the skills of the field, plan what comes next, and care for yourself.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "At the end of fieldwork, it helps to look back at what you have learned and to look forward at what you want to learn. This session gives you time to do both.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "What is said in the room stays in the room, except safety concerns, which go to the facilitator. No one is asked to share more than they want. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Skills look-back, 15 minutes', text: "On your own, use the eleven skills of the field to mark where you have grown most, with one example each from your fieldwork, and where you want to grow next. Share a highlight with a partner." },
          { label: 'Peer strengths, 15 minutes', text: "In groups of three or four, each person hears from the others what they noticed about their strengths in the sessions. Write down what you hear." },
          { label: 'Plan what is next, 15 minutes', text: "Write a growth plan for the next six months. Choose one or two skills, a way to practice, a person who will support you, and one training or peer learning opportunity. Remember the framework's recommendation of at least six hours of professional development each year." },
          { label: 'Care and close, 10 minutes', text: "Name how you will look after yourself. Say one thing you are proud of and one thing you are thankful for." },
        ] },
        { kind: 'list', title: 'Prompts for the look-back', items: [
          "One contact that taught me something, with no identifying details.",
          "A moment when I asked for help and it made things better.",
          "A skill that has grown the most and one that has not yet.",
          "Something I would tell a new learner starting fieldwork.",
          "What I want to learn next.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What are you most proud of from your fieldwork?",
          "What will you do in the next month to keep learning?",
        ] },
        { kind: 'takeaways', items: [
          "Look back at your growth and name it, with examples.",
          "Choose one or two skills to work on next and a person to support you.",
          "Keep learning after the certificate, and look after yourself.",
        ] },
        ev([
          "The agenda is practice design written for this course from the lesson and the sources it cites, including the framework's guidance on ongoing professional development and the Core Consensus Project's eleven skills.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-cc-file',
    title: 'Your case conference file',
    minutes: 30,
    purpose: 'Four short pieces that you keep. Your case in five parts with identifying details left out, your three-part map, the feedback you heard, and your growth plan.',
    fields: [
      { id: 'case', label: 'Your case in five parts', help: 'Write your case in about a paragraph with no identifying details. The situation, what you did, what happened, what you are wondering or stuck on, and what you want from the group.', multiline: true },
      { id: 'map', label: 'Your three-part map', help: 'For your case, write what is going on personally, in the institutions around the person, and in the culture. Then write one action at each level.', multiline: true },
      { id: 'feedback', label: 'The feedback you heard', help: 'Write the strengths the group noticed, the questions you were asked, the ideas you want to try, and any you decided not to.', multiline: true },
      { id: 'growth', label: 'Your growth plan', help: 'Write one or two skills to work on, how you will practice, the person who will support you, the training or peer learning you will do, and how you will look after yourself.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Fieldwork, group case conferences, and ongoing professional development.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'Rural Health Information Hub: Supporting the Community Health Worker Workforce', use: 'Group supervision, mentoring, and supportive supervision.', url: 'https://www.ruralhealthinfo.org/toolkits/community-health-workers/4/support' },
    { name: 'Boston ABCD: Behavioral Health Integration for CHW Supervisors, Trainer\'s Guide', use: 'The personal, institutional, and cultural view for case conferences.', url: 'https://bostonabcd.org/wp-content/uploads/2023/08/CHW-Supervisor-Trainers-Guide.pdf' },
    { name: 'C3 Project: Understanding Scope and Competencies', use: 'The roles, skills, and qualities of community health workers.', url: 'https://c3project.org/' },
  ],
};
