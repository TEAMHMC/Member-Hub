// Community Mental Health Worker Pathway (HRTP), self-paced courses 1 and 8.
//
// These are two of the four self-paced courses in HMC's 80-hour community health worker
// certificate that had a syllabus entry and no written material. The course ids are the
// certificate's own ids on purpose. The Academy posts every completed course to the
// portal, and the portal credits a learner's certificate only for ids it recognizes, so
// finishing one of these here is what counts toward the certificate there.
//
// Nothing here is presented as a certification. California does not certify community
// health workers, and the supervising Medi-Cal provider is the one who verifies a worker's
// training. Both courses say so in the words the credential rules already use.
//
// Phone numbers other than 911, 988 and 211 are deliberately not printed. They change, and
// a wrong number in a safety course is worse than none. Instructors give the current
// county numbers in class.

import type { Course } from './catalog';
import type { Block } from './blocks';

// Every lesson ends with the standards and evidence it rests on, so a learner, an employer, or a
// reviewer can check a training statement against a source.
const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

// ── Course 1 ─────────────────────────────────────────────────────────────

export const CHW_ROLE_FIELD: Course = {
  id: 'chw_role_field',
  num: 1,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'The Community Health Worker Role, History, and Field',
  promise:
    'Say what a community health worker does and does not do, sort everyday requests into do, refer, and escalate, and read a job posting with a clear eye.',
  about: [
    'Community health workers are trusted people who connect neighbors to care and services. This course explains where the role comes from, what it covers, and where it stops.',
    'It is the first course of HMC\'s community health worker certificate and the first step of the community mental health worker pathway.',
  ],
  objectives: [
    'Describe the community health worker tradition and the other names the role goes by.',
    'Sort everyday tasks into do, refer, and escalate.',
    'Read a job posting and match its duties to the 11 core competencies.',
    'Start a personal statement for your portfolio.',
  ],
  minutes: 105,
  prerequisites: 'None.',
  whoFor:
    'People starting in community health, peer support, outreach, or case management, including people with lived experience of homelessness or the justice system.',
  freshness:
    'Rules about who verifies community health worker training are set by the State and can change. Check with your program lead before you describe your training to an employer.',
  lessons: [
    {
      id: 'chw-role-l1',
      title: 'Where the role comes from',
      summary: 'The promotora tradition and why trust is the working tool.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'Every neighborhood has someone people go to when they do not know where to turn. They know which clinic is kind, which office is open on Saturday, and who to call when a letter makes no sense. Community health work grew from naming that person, training them, and paying them.',
        ] },
        { kind: 'concept', title: 'A tradition before it was a job title', text: [
          'In many Latino communities, a promotor or promotora de salud is a trusted neighbor who shares health information and helps people reach care. Community health representatives do similar work in tribal communities. Lay health advisors, outreach workers, and navigators come from the same idea in other places.',
          'The idea is simple. People trust people who have lived what they have lived. A worker who speaks your language, knows your block, and has been through something like what you are going through can reach you when a stranger in a white coat cannot.',
        ] },
        { kind: 'vocab', items: [
          { term: 'Community health worker', plain: 'A trusted member of a community who connects people to health care, social services, and information.' },
          { term: 'Promotor or promotora de salud', plain: 'The Spanish-language name for the same tradition, rooted in neighbors helping neighbors.' },
          { term: 'Lived experience', plain: 'Knowledge you have from going through something yourself, such as housing instability or reentry.' },
        ] },
        { kind: 'concept', title: 'Why the field is growing', text: [
          'Health systems have learned that care does not fail only in the exam room. It fails when someone cannot get a ride, loses a benefits letter, or does not trust the front desk. California now pays for community health worker services through Medi-Cal, and health plans, clinics, and counties hire workers to close those gaps.',
          'That is why this course starts with the role itself. The skills that come later, such as listening, navigation, and documentation, all serve one purpose: helping a person get what they came for and keeping their trust while you do.',
        ] },
        { kind: 'example', title: 'What it can look like in a day', text: [
          'A worker begins at a shelter table. A man asks about a clinic. She asks what he needs, finds one near the bus line, calls ahead, writes down who will meet him, and checks in two days later. Later she shows a group how to renew Medi-Cal. At the end of the day she writes a short note about each contact.',
          'Nothing in that day required a license. All of it required trust, accuracy, and follow-through.',
        ] },
        { kind: 'reflect', title: 'Who helped you', prompts: [
          'Think of a time someone helped you find help. Who was it, and what made you trust them?',
          'What did they do that a form or a website could not?',
        ] },
        { kind: 'takeaways', items: [
          'Community health work is a tradition of trusted neighbors helping neighbors.',
          'Trust and follow-through are the tools of the job.',
          'Lived experience is a strength when it is used on purpose.',
        ] },
        {"kind":"concept","title":"What employers say they need","text":["Employers that hire community health workers tend to describe the same things. They want someone who is trusted by the people they serve, who shows up, who writes accurate notes, who knows when to ask for help, and who can work with a team of clinicians and case managers without trying to be one.","Notice what is not on that list: a degree. Many postings ask for a high school diploma or equivalent, some training, and experience. Experience can include supervised field hours and lived experience. That is why this training records your hours and why you keep a portfolio."]},
        {"kind":"myths","items":[{"myth":"This is a volunteer job people do on the side.","reality":"It is a paid, growing occupation. Health plans, clinics, counties, and community organizations hire community health workers, and California pays for the services through Medi-Cal."},{"myth":"You need a clinical background to do this work.","reality":"The role is non-clinical by design. Its value is trust, connection, and follow-through, and those come from experience as much as from schooling."}]},
        {"kind":"tryit","title":"Name your person","text":["Write down the name of one person who has been that trusted guide in your own life. Under it, write three things they did. You will compare this list with the four verbs in the next lesson."]},
        ev(["Community Preventive Services Task Force, The Community Guide: interventions that engage community health workers are recommended, with strong evidence for cancer screening, for blood pressure and cholesterol control, and for diabetes management (thecommunityguide.org).",
          "Kangovi S, et al. Health Affairs 2020;39(2):207-213: a community health worker program tested in a randomized trial returned about $2.47 for every dollar Medicaid spent.",
          "California HCAI, CHW/P/R Training Program Best Practices Framework: community health work rests on 11 core competencies from the National C3 Council.",
          "California Department of Health Care Services: community health worker services became a Medi-Cal benefit on July 1, 2022."]),
      ],
    },
    {
      id: 'chw-role-l2',
      title: 'What the role is and is not',
      summary: 'What a worker does, what is outside the role, and the names the job goes by.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'A clear edge to the role protects the person you are helping and protects you. Most mistakes in this work happen when a kind person tries to do something that belongs to someone else.',
        ] },
        { kind: 'concept', title: 'Four verbs: connect, teach, accompany, advocate', text: [
          'Connect means linking a person to a service and making sure the link holds. Teach means sharing information so a person can act on it, such as how to renew coverage or what to ask a doctor. Accompany means going with someone, in person or by phone, when a step feels too big alone. Advocate means speaking with a person, not for them, so their request is heard.',
          'These four verbs describe most of the job. They also describe a worker who respects the person: the person keeps the decisions and the worker keeps the promises.',
        ] },
        { kind: 'list', title: 'What the role is not', items: [
          'Diagnosing, treating, or advising on medication. That belongs to a licensed clinician.',
          'Giving legal advice. You can explain a process and connect a person with legal aid. You cannot tell someone what to plead or sign.',
          'Replacing a case manager or therapist. You can work alongside them and refer to them.',
          'Handling a person\'s money, documents, or property. A worker who holds cash or keeps a card creates risk for both of you.',
          'Promising outcomes you do not control, such as a housing placement or a benefit approval.',
        ] },
        { kind: 'myths', items: [
          { myth: 'If I have been through it, I can tell people what to do.', reality: 'Lived experience helps you listen and connect. It does not replace a person\'s own choices or a professional\'s advice.' },
          { myth: 'Saying "that is outside my role" lets the person down.', reality: 'Naming the edge and connecting the person to the right helper is part of the job.' },
          { myth: 'A kind person does not need rules.', reality: 'Clear rules protect kindness. They keep it from turning into harm.' },
        ] },
        { kind: 'fieldnote', title: 'The same job, many names', text: [
          'Employers use different titles for similar work: community health worker, promotor or promotora, outreach worker, navigator, care coordinator assistant, peer support specialist, case management aide. Read the duties, not just the title. A posting called "outreach worker" may be most of the job you are training for.',
        ] },
        { kind: 'tryit', title: 'Make your role map', text: [
          'Draw three columns on a sheet of paper: Do, Refer, Escalate. Under each, write three tasks from your own experience. For Refer, write who you would refer to. For Escalate, write who you would call and how fast.',
          'Keep this sheet. You will add to it in the next lesson.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c1-q1',
          q: 'Which task is within the community health worker role?',
          options: [
            'Telling a client to stop a prescribed medication that makes them tired',
            'Advising a client on whether to accept a plea offer',
            'Helping a client write down questions for a doctor visit and checking in afterward',
            'Deciding why a client cannot sleep',
          ],
          answer: 2,
          rationale: 'The role connects and supports. Medical, legal, and diagnostic decisions belong to licensed professionals.',
          distractors: 'The first and fourth are clinical decisions. The second is legal advice.',
        } },
        { kind: 'takeaways', items: [
          'Connect, teach, accompany, advocate.',
          'Know the edge of the role and name it kindly.',
          'Different titles can describe the same work.',
        ] },
        {"kind":"case","title":"The four verbs in one afternoon","scenario":false,"text":["Ana works at a community clinic. At 1:00 she helps a mother understand a letter about renewing her son's coverage. That is teaching. At 1:30 she finds the only after-school program that takes the family's coverage and calls to hold a spot. That is connecting.","At 2:30 she rides the bus with an older man to a specialist visit because he has missed two already. That is accompanying. At 4:00 she sits in a meeting where the clinic is deciding when to open on Saturdays and says that three families told her they cannot come on weekdays. That is advocating, and she is speaking with the families, not instead of them.","Nothing Ana did required a license. All of it required her to know where her role ends. When the mother mentioned the boy's cough had not improved, Ana did not suggest a remedy. She said it was worth telling the nurse, and she helped the mother write it down."]},
        {"kind":"concept","title":"A short rule for the edge","text":["If the question is \"what should I take, sign, or decide,\" it belongs to a licensed professional or to the person. If the question is \"where can I find, how do I get, who can help,\" it is probably yours. When you are unsure, you ask your supervisor before you answer."]},
        ev(["California HCAI, CHW/P/R Training Program Best Practices Framework: lists the 11 core competencies, including service coordination, advocacy, and professional skills and conduct.",
          "National C3 Council community health worker core competencies, the source of the 11 competencies used in California.",
          "Medi-Cal community health worker benefit guidance as summarized by Medi-Cal managed care plans: the benefit does not include clinical or care management services that require a license.",
          "Community Preventive Services Task Force: the recommended interventions place community health workers in team-based care, working alongside clinicians."]),
      ],
    },
    {
      id: 'chw-role-l3',
      title: 'Do, refer, or escalate',
      summary: 'Six everyday situations and what to do first.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          'You will face this choice many times a week. Most of the time the answer is easy. The harder cases are when a person asks for something you cannot give, or when something is wrong and you have only a moment to act.',
        ] },
        { kind: 'concept', title: 'A simple way to sort', text: [
          'Do it when it is inside the role and you know how: share information, make a referral, accompany someone, write a note. Refer it when the need is real but belongs to someone else, and connect the person warmly. Escalate it when someone may be in danger or when you are unsure whether you can keep something private. Escalate means you tell your supervisor right away and follow the plan.',
        ] },
        { kind: 'steps', title: 'When someone may hurt themselves or someone else', items: [
          { label: 'Stay', text: 'Stay with the person. Speak calmly. Do not leave them alone.' },
          { label: 'Reach help', text: 'Call or text 988, or call your supervisor. If there is immediate danger, call 911.' },
          { label: 'Do not promise secrecy', text: 'Say that you care about their safety and that you need to bring in help.' },
          { label: 'Record it', text: 'Write down what was said and done, in facts, as soon as the person is safe.' },
        ] },
        { kind: 'case', title: 'Scenario 1: the medication', scenario: true, text: [
          'A client says the pills from the clinic make him tired and he plans to stop taking them. What do you do?',
          'Answer: Refer. Do not tell him to stop or to continue. Encourage him to talk with the prescriber, offer to help him write down his concerns, and offer to go with him or help him call the clinic. If he mentions thoughts of harming himself, escalate.',
        ] },
        { kind: 'case', title: 'Scenario 2: the birth certificate', scenario: true, text: [
          'A woman needs a birth certificate to apply for housing. What do you do?',
          'Answer: Do. Help her find the office and the steps, tell her what to bring, and arrange a follow-up. Confirm the current requirements before sending her.',
        ] },
        { kind: 'case', title: 'Scenario 3: tonight', scenario: true, text: [
          'A participant says quietly that he has a plan to end his life tonight. What do you do?',
          'Answer: Escalate. Stay with him, call or text 988 or your supervisor right away, and call 911 if there is immediate danger. Do not promise to keep it secret.',
        ] },
        { kind: 'case', title: 'Scenario 4: the benefits letter', scenario: true, text: [
          'A man hands you a letter he cannot read. What do you do?',
          'Answer: Do. Read it with him, find the date and the reason, and explain the next step. If it involves an appeal, help him prepare and refer him to legal aid if he wants advice.',
        ] },
        { kind: 'case', title: 'Scenario 5: the cash', scenario: true, text: [
          'A participant asks you to hold his cash for the weekend. What do you do?',
          'Answer: Refer. Decline kindly and explain your role. Help him find a safe option such as a locker or a trusted service provider. Tell your supervisor so the request is on record.',
        ] },
        { kind: 'case', title: 'Scenario 6: the bleeding', scenario: true, text: [
          'Someone near the table is bleeding heavily. What do you do?',
          'Answer: Escalate. Call 911, call for the lead, and follow your first aid training. Do not move a person with a serious injury unless they are in danger.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c1-q2',
          q: 'A client says they have a plan to end their life tonight. What do you do first?',
          options: [
            'Write it in your notes and raise it at the next check-in',
            'Stay with them, call or text 988 or your supervisor right away, and call 911 if there is immediate danger',
            'Promise to keep it secret so they keep trusting you',
            'Tell them they will feel better tomorrow',
          ],
          answer: 1,
          rationale: 'Safety comes before confidentiality. You escalate immediately and stay present.',
          distractors: 'Waiting, promising secrecy, and reassurance all delay help.',
        } },
        { kind: 'check', check: {
          id: 'hrtp-c1-q3',
          q: 'A client asks you to hold their cash for the weekend. What is the best response?',
          options: [
            'Hold it, because you trust each other',
            'Decline kindly, explain your role, and help them find a safer option',
            'Ask a coworker to hold it',
            'Tell them to keep it hidden',
          ],
          answer: 1,
          rationale: 'Holding money creates risk for both of you. A kind refusal with an alternative protects the relationship.',
          distractors: 'Handing the problem to a coworker moves the risk without removing it.',
        } },
        { kind: 'reflect', title: 'Your own edge', prompts: [
          'Which of these scenarios would be hardest for you to say no to, and why?',
          'Who is the person you would call first when you are not sure?',
        ] },
        {"kind":"concept","title":"After you escalate","text":["Escalating is not the end of your role. Stay as calm and present as you can while help arrives. Let the person know who is coming and what will happen next. Afterward, write a short factual note, tell your supervisor what you saw and did, and take a moment for yourself. A hard moment affects the worker too, and a good program expects you to ask for support.","If you are not sure whether something is serious enough to escalate, treat it as serious and ask. No one has ever been faulted for asking too soon."]},
        {"kind":"tryit","title":"Write your escalation card","text":["On an index card, write your supervisor's name and number, the number for your program's on-call lead, 988, and 911. Add one sentence you would say when you call. Keep the card with your ID. Your program will give you its own escalation plan, and it always comes first."]},
        ev(["988 Suicide and Crisis Lifeline: available 24 hours a day, every day, by call, text, or chat at 988.",
          "SAMHSA, National Guidelines for Behavioral Health Crisis Care (2020): a crisis response connects a person to someone to talk to, someone to respond, and somewhere to go.",
          "California HCAI Framework: professional skills and conduct, including ethics, boundaries, and personal safety, is a core competency.",
          "Your program\\'s escalation plan, set by its clinical supervisor, always takes precedence over this course."]),
      ],
    },
    {
      id: 'chw-role-l4',
      title: 'Hear from a working colleague',
      summary: 'Questions to ask a worker about the job and how to move up.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'The best way to learn the job is to hear from someone doing it. This lesson helps you prepare, ask well, and listen for what you can use.',
        ] },
        { kind: 'activity', title: 'A conversation with a worker', text: [
          'Ask your program lead to introduce you to a working community health worker or peer support specialist, in person, by phone, or by recorded interview. Plan 20 minutes.',
          'Before you meet, write two questions of your own. Good starting questions: What does a typical day look like? What was the hardest part when you started? Which training mattered most? How did you move up?',
        ], materials: 'Paper or a notes app. Two questions written in advance.' },
        { kind: 'concept', title: 'How people move up', text: [
          'Careers in this field usually grow in one of three directions. Some workers become leads who train and supervise others. Some move into care coordination or case management. Some move into peer support or become specialists in an area such as housing or behavioral health. Each step usually asks for more training and more documented hours.',
          'This is why the verified record of your field hours matters. It is proof of experience an employer can read.',
        ] },
        { kind: 'list', title: 'Listen for', items: [
          'What the worker does in a first hour of a shift.',
          'What they wish they had learned sooner.',
          'What their employer asked for when they were hired.',
          'How they take care of themselves.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c1-q4',
          q: 'Who confirms that a community health worker\'s training meets Medi-Cal requirements?',
          options: [
            'DHCS issues every worker a certificate',
            'The County Department of Economic Opportunity',
            'The training program, with no one else checking',
            'The Medi-Cal provider that supervises the worker',
          ],
          answer: 3,
          rationale: 'DHCS does not issue or approve community health worker certificates. The supervising provider verifies the worker\'s training.',
          distractors: 'A certificate from any program is not automatically accepted. The employer decides.',
        } },
        { kind: 'takeaways', items: [
          'A conversation with a working colleague teaches what a course cannot.',
          'Your documented hours are part of your career record.',
        ] },
        {"kind":"concept","title":"After the conversation","text":["Within a day, write three lines: one thing you learned about the job, one thing that surprised you, and one step you will take because of it. If the colleague offered to stay in touch, write a thank-you note. A short message that says what helped is remembered."]},
        {"kind":"reflect","title":"Your path","prompts":["Which of the three directions, lead, coordination, or peer and specialty work, draws you most, and why?","What would you need to learn or document to start moving that way?"]},
        ev(["California HCAI Framework: fieldwork should last long enough to be valuable to employers, and workers should have at least six hours of professional development each year.",
          "California Health Care Foundation, Understanding California's Community-Connected Workforce (2025): an overview of the community-connected workforce and its employers.",
          "California Department of Health Care Services: Medi-Cal recognizes a work experience pathway for community health worker qualification. Confirm the current hours with your employer.",
          "Community Preventive Services Task Force: the evidence base for community health worker roles that employers cite when they hire."]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c1-start',
    title: 'Your starting point',
    minutes: 35,
    purpose: 'This starts the portfolio you will use in interviews. It records what you want from the work and what employers actually ask for.',
    fields: [
      { id: 'posting', label: 'A real job posting', help: 'Use a posting from your program lead, an employer partner, or a public job site. Write the title, employer, wage, hours, required experience, and the duties you recognize.', multiline: true, repeat: 3, repeatLabel: 'Posting' },
      { id: 'match', label: 'Match duties to competencies', help: 'For two of the postings, write which of the 11 core competencies each duty uses: communication, interpersonal skills, service coordination, capacity building, advocacy, education and facilitation, assessment, outreach, professional conduct, evaluation, or knowledge base.', multiline: true },
      { id: 'questions', label: 'Two questions for a working colleague', help: 'Write them before you meet.', multiline: true },
      { id: 'statement', label: 'Why this work', help: 'Half a page. Why this work, and what lived experience you bring to it. You choose what to share.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'California Department of Health Care Services', use: 'Current Medi-Cal rules for community health worker services and who verifies training.', url: 'https://www.dhcs.ca.gov' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'The 11 core competencies, recommended hours, and field work that this certificate follows.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'The Community Guide: Community Health Workers', use: 'The task force recommendations and the evidence behind them.', url: 'https://thecommunityguide.org/content/community-health-workers' },
    { name: 'California DHCS: Justice-Involved Initiative', use: 'Current pre-release Medi-Cal services and how community providers connect.', url: 'https://www.dhcs.ca.gov/CalAIM/Justice-Involved-Initiative' },
    { name: 'California Health Care Foundation: Understanding California\'s Community-Connected Workforce', use: 'A plain-language overview of community health workers, promotores, and peer roles.', url: 'https://www.chcf.org/resource/understanding-californias-community-connected-workforce/' },
  ],
};

// ── Course 8 ─────────────────────────────────────────────────────────────

export const CHW_NAVIGATION: Course = {
  id: 'chw_navigation',
  num: 8,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Service Coordination and Navigation',
  promise:
    'Find the right service, make a referral that lands, follow up, and close the loop.',
  about: [
    'Most referrals fail for ordinary reasons: wrong day, no ride, missing document, nobody expecting the person. This course teaches how to prevent each one.',
    'You will practice with the HMC Resource Directory and 211, then build a barrier map and a follow-up plan you can use on the job.',
  ],
  objectives: [
    'Map the barriers between a person and a service.',
    'Make a warm handoff and document it.',
    'Use the Resource Directory and 211 to find services and confirm them.',
    'Follow up on a schedule and close the loop.',
  ],
  minutes: 240,
  prerequisites: 'The Community Health Worker Role course is recommended first.',
  whoFor:
    'Community health workers, outreach workers, peer specialists, navigators, and volunteers who make referrals.',
  freshness:
    'Services, hours, and eligibility change often. Confirm every listing before you send someone to it.',
  lessons: [
    {
      id: 'chw-nav-l1',
      title: 'A referral that lands',
      summary: 'What makes a referral work and why most fail.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'A referral is a promise. When you tell someone where to go, you are saying it will work. When it does not, the person often stops asking. This lesson is about keeping that promise.',
        ] },
        { kind: 'concept', title: 'Six things a referral needs', text: [
          'The right service for the actual need. The right day and time, confirmed. A way to get there, such as a bus route or a ride. The documents or information required. A named person at the other end who expects the visit. A date when you will check back.',
          'If any one of these is missing, the referral may fail. If all six are in place, it usually works.',
        ] },
        { kind: 'list', title: 'Why referrals fail', items: [
          'The listing was out of date and the office had moved or closed.',
          'The person was told to call and never got through.',
          'They arrived without an ID or proof they were asked to bring.',
          'Nobody at the agency knew they were coming.',
          'Nobody followed up, so the failure was never noticed.',
        ] },
        { kind: 'takeaways', items: [
          'A referral is a promise.',
          'Confirm the service, the day, the ride, the documents, the contact, and the follow-up.',
        ] },
        {"kind":"case","title":"One referral, all six things","scenario":false,"text":["Ms. Reyes needs help renewing her Medi-Cal. Here is how a worker covers all six items.","The right service: a community enrollment office that helps with renewals, not the clinic front desk. The day and time: Thursday at 10, confirmed by phone that morning. A way to get there: the number 18 bus, and the worker gives her a transit pass. The documents: her ID and the renewal letter, so the worker checks that she has both. A named person: the worker calls ahead and writes the counselor's name on a card. The follow-up: the worker texts Friday afternoon, with Ms. Reyes's agreement, to ask how it went.","The whole preparation takes about fifteen minutes. It is the difference between a referral that is a hope and one that is a plan."]},
        {"kind":"steps","title":"A checklist to keep","items":[{"label":"Need","text":"What does the person actually want? Ask before you search."},{"label":"Service","text":"Is this the right door, and is it still open?"},{"label":"Time","text":"What day and time, and how do they know?"},{"label":"Travel","text":"How will they get there and back, and how long will it take?"},{"label":"Papers","text":"What must they bring, and do they have it?"},{"label":"Contact","text":"Who expects them, and what is that person's name?"},{"label":"Follow-up","text":"When will you check in, and how?"}]},
        ev(["HUD Notice CPD-17-01 (2017), Coordinated Entry core elements: access, assessment, prioritization, and referral.",
          "SAMHSA and U.S. Interagency Council on Homelessness, Outreach and Engagement Fact Sheet (2016): recommends a gradual, warm handoff to housing and service providers.",
          "Agency for Healthcare Research and Quality, Care Coordination Measures Atlas: care coordination means organizing care activities and sharing information among the people involved.",
          "California HCAI Framework: service coordination and navigation is one of the 11 core competencies."]),
      ],
    },
    {
      id: 'chw-nav-l2',
      title: 'The main systems you will use',
      summary: 'Coverage, food, income, housing, reentry, and behavioral health access in Los Angeles County.',
      minutes: 20,
      blocks: [
        { kind: 'why', text: [
          'You do not need to know every rule. You need to know which door to point to and what to bring. This lesson gives you the map.',
        ] },
        { kind: 'concept', title: 'Health coverage', text: [
          'Medi-Cal is California\'s public health coverage program. Many people also have a managed care plan that handles their care. Coverage can lapse if a renewal letter is missed, so renewals are a common reason people lose care. You can explain how to renew and where to get help. You cannot decide whether someone qualifies.',
        ] },
        { kind: 'concept', title: 'Food and income', text: [
          'CalFresh helps with groceries. General Relief is a county program for some adults with little or no income. Supplemental Security Income and disability benefits are separate federal programs with their own rules and long waits. For each, your role is to point to the application, say what to bring, and follow up.',
        ] },
        { kind: 'concept', title: 'Housing', text: [
          'In Los Angeles County, most housing help goes through coordinated entry, a shared process that assesses people and matches them to available housing resources. Outreach teams and access centers are common doors. Waits can be long, and keeping contact information current is one of the most useful things a worker can do.',
        ] },
        { kind: 'concept', title: 'Reentry', text: [
          'People leaving jail or prison often need ID, a phone, a bed, clothes, food, and a plan for appointments. Probation or parole may require regular check-ins. Missing one can have serious consequences, so help the person plan how to get there.',
          'Medi-Cal now covers certain health services for eligible people in the 90 days before release, including reentry case management, and the State describes this as connecting people to community-based providers, including community health workers and peer support specialists. A person who leaves with active coverage and a named contact is far more likely to reach care. Your job is the link after release: confirm the coverage is active, confirm the first appointment, and stay in touch. Enhanced Care Management is also open to people transitioning from incarceration through their health plan.',
        ] },
        { kind: 'concept', title: 'Behavioral health access and crisis lines', text: [
          'Call or text 988 for a mental health or substance use crisis. Call 211 for local services of almost any kind. Your instructor will give you the current County behavioral health access number in class. Write it where you will find it.',
        ] },
        { kind: 'fieldnote', title: 'A caution about numbers', text: [
          'Phone numbers, hours, and rules change. Treat everything in this lesson as a map, not a promise. Confirm the current details with the agency before you send anyone.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c8-q1',
          q: 'What is coordinated entry?',
          options: [
            'A private shelter waiting list',
            'A police database',
            'A benefits application',
            'The county\'s shared process for assessing people and matching them to housing resources',
          ],
          answer: 3,
          rationale: 'Coordinated entry is the front door for housing resources across the county.',
          distractors: 'It is not run by shelters or the police, and it is not a benefits program.',
        } },
        {"kind":"vocab","items":[{"term":"Managed care plan","plain":"A health plan that Medi-Cal members are enrolled in, which arranges and pays for their care."},{"term":"Redetermination","plain":"The yearly review that decides whether a person still qualifies for Medi-Cal."},{"term":"Coordinated entry","plain":"The shared county process that assesses people and matches them to housing resources."},{"term":"Interim housing","plain":"Temporary housing, such as a shelter or a motel program, while a person waits for permanent housing."},{"term":"Probation and parole","plain":"Community supervision after a sentence, with conditions and regular check-ins."}]},
        {"kind":"list","title":"What to bring, most of the time","items":["Photo ID, if the person has one, or the best proof of identity available.","Any letter or notice from the agency.","Proof of address, or a mailing address the person can use.","A working phone number and a safe way to be reached.","Names of the people in the household, if the application includes them."]},
        {"kind":"myths","items":[{"myth":"Someone who has lost coverage cannot get it back.","reality":"Many people can re-enroll, and the first step is often a phone call or a visit to the enrollment office. Do not decide for the person that it is too late."},{"myth":"A person with a record cannot get housing or benefits.","reality":"A record can make some paths harder, but it does not close all of them. Your role is to point to the right door and to a legal aid partner for questions about a record."},{"myth":"If a person has not heard back, the answer is no.","reality":"Waits are long and mail gets lost. Checking status is part of the work."}]},
        {"kind":"case","title":"A person leaving jail","scenario":true,"text":["A man is released on a Friday afternoon with a bag, no phone, and a probation check-in on Monday. What would you help with first?","Answer: Safety first, then the Monday appointment. Help him find where he will sleep tonight, make sure he knows the time and place of the check-in and how to get there, and help him get a phone number he can use. Then confirm that his Medi-Cal is active and that he has a named contact for his first health visit. Write down what you offered and set a follow-up for Monday."]},
        {"kind":"concept","title":"Questions workers hear, and how to answer","text":["Can you help me fill out this application? Yes. You can explain each question, help gather papers, and sit with the person while they fill it out. You do not decide whether they qualify.","I do not have an ID. Can I still get help? Often yes, because many programs accept other proof and many can help replace an ID. Ask the agency what they accept, and help the person start on the replacement at the same time.","I am afraid that applying will cause trouble for my family. This is a real fear, and you cannot answer it with a guess. Do not give immigration advice. Offer to connect the person with a legal aid organization that can answer it, and respect their decision about whether to apply.","I tried and nobody called me back. Believe them, ask what they tried, and offer to try with them."]},
        ev(["211 Los Angeles County and the Los Angeles Homeless Services Authority: how local services are organized and reached.",
          "California DHCS, CalAIM Justice-Involved Reentry Initiative and Enhanced Care Management: coverage and care management for people leaving incarceration.",
          "California DHCS, Medi-Cal community health worker benefit: workers connect members to services under a supervising provider.",
          "988 Suicide and Crisis Lifeline: national crisis line by call, text, or chat to 988."]),
      ],
    },
    {
      id: 'chw-nav-l3',
      title: 'The warm handoff',
      summary: 'How to connect two people, not just point to an address.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'A printed list sends a person to a door. A warm handoff walks them to the person on the other side.',
        ] },
        { kind: 'steps', title: 'Four moves', items: [
          { label: 'Ask', text: 'Ask the person if they want the connection and which way they prefer: a call now, a visit, or a message.' },
          { label: 'Introduce', text: 'Call or message the contact with the person present, say who they are, and say what they need. Share only what the person agrees to share.' },
          { label: 'Agree', text: 'Agree who will do what and by when, and say it aloud.' },
          { label: 'Record', text: 'Write down the contact, the date, and the next step.' },
        ] },
        { kind: 'example', title: 'What a handoff sounds like', text: [
          '"Hi, this is Marcus from HMC. I am with Ms. Reyes, who is here with me now. She is looking for help renewing her Medi-Cal. She has her ID but not the renewal letter. Can she come Thursday at 10? I will meet her at the door."',
        ] },
        { kind: 'takeaways', items: [
          'Ask, introduce, agree, record.',
          'Share only what the person agrees to share.',
        ] },
        {"kind":"example","title":"A second handoff, by phone","text":["\"Good morning. This is Marcus at Health Matters Clinic. I am on the line with Mr. Ortiz, who just left county jail. He has Medi-Cal and needs a visit with a primary care clinic this week for a medication refill. He has his ID but no phone. Can he come Wednesday? Please put the clinic number in his hand today, and I will meet him at the door at 9. Is there anything he should bring?\"","Notice what the worker did. He named the person, said the need, said what was ready, offered a time, and said what he would do. The receiving person had one decision to make."]},
        {"kind":"list","title":"Common mistakes","items":["Calling without the person present, so they hear nothing and do not know what was said.","Giving too much private information. Share only what the person agreed to share.","Handing over at the end of the day, when no one can act.","Not writing down who you spoke to."]},
        {"kind":"tryit","title":"Practice","text":["Pick a service you know. Write a 90-second handoff for a person you invent. Read it aloud and time it. Cut anything the receiving person does not need to say yes."]},
        {"kind":"case","title":"A handoff that went wrong, and the fix","scenario":false,"text":["A worker met a young man who needed a food program. She gave him the address and said, \"Tell them I sent you.\" When he arrived, no one knew her name, and the intake worker said they were full that day. He did not go back.","What she should have done: call first, with him there, confirm that the program had space, ask for a name, and tell him the name. A fifteen-minute call would have saved him a trip and a bad first impression of the whole system."]},
        ev(["SAMHSA and USICH Outreach and Engagement Fact Sheet (2016): a gradual, warm handoff to housing and service providers.",
          "HUD Notice CPD-17-01: referral is a defined step of coordinated entry.",
          "AHRQ Care Coordination Measures Atlas: coordination links people to community resources and shares information between those involved.",
          "California HCAI Framework: communication and service coordination are core competencies."]),
      ],
    },
    {
      id: 'chw-nav-l4',
      title: 'Barrier mapping',
      summary: 'What stands between this person and this service.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'A person who has not been to an appointment is rarely unmotivated. Something is usually in the way. A barrier map helps you find it before it stops the next referral.',
        ] },
        { kind: 'list', title: 'Common barriers', items: [
          'No ID or missing documents.',
          'No phone, or no minutes.',
          'No way to get there or to wait there.',
          'Work, caregiving, or a court date at the same time.',
          'Fear, shame, or a bad past experience with the system.',
          'Language, reading level, or a disability.',
        ] },
        { kind: 'concept', title: 'Pick the first two', text: [
          'Do not try to solve every barrier at once. Choose the two that would stop the next step, solve those, and check again. A person with a ride and the right paper is usually ready to go.',
        ] },
        { kind: 'takeaways', items: [
          'Map the barriers, then solve the first two.',
          'Barriers are not excuses. They are information.',
        ] },
        {"kind":"case","title":"A barrier map, worked","scenario":false,"text":["A woman has missed two clinic appointments. Her worker maps the barriers. Documents: she has her ID. Phone: she has a phone but no minutes after the 20th of each month. Transport: the clinic is two buses away. Schedule: she works until 4. Fear: she was spoken to harshly at the front desk last time.","The first two to solve are the phone and the schedule, because they stop the next appointment. The worker finds a way to add minutes and asks the clinic for a late afternoon slot. Then the worker offers to call ahead and ask for a different front desk contact. The bus can wait, because she has managed it before."]},
        {"kind":"reflect","title":"Practice at home","prompts":["Think of a time you missed something important. What was in the way, and who could have helped?"]},
        ev(["California HCAI Framework: individual assessment and service coordination are core competencies.",
          "SAMHSA and USICH Outreach and Engagement Fact Sheet (2016): engaging some people can take months or years of persistent effort and attention to what stands in their way.",
          "HUD Notice CPD-17-01: assessment identifies a person's needs so a referral fits them."]),
      ],
    },
    {
      id: 'chw-nav-l5',
      title: 'Closing the loop',
      summary: 'Follow up on a schedule and record the outcome.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'A referral that nobody checks on is a guess. Closing the loop turns it into something you can learn from.',
        ] },
        { kind: 'steps', title: 'A simple follow-up routine', items: [
          { label: 'Set the date', text: 'Before the person leaves, agree when you will check in and how.' },
          { label: 'Check', text: 'Ask whether they went, what happened, and what they need next.' },
          { label: 'Fix', text: 'If it did not work, find out why and fix that one thing.' },
          { label: 'Record', text: 'Write the outcome. A referral is closed only when you know the result.' },
        ] },
        { kind: 'concept', title: 'Consent and contact', text: [
          'Ask how the person wants to be contacted, and whether it is safe to leave a message or send a text. Some people share a phone or live where a call could cause harm. Write the answer down and respect it.',
        ] },
        { kind: 'takeaways', items: [
          'Set the follow-up date before the person leaves.',
          'A referral is closed only when you know the result.',
        ] },
        {"kind":"example","title":"A follow-up schedule","text":["Day of the referral: confirm the plan and the safe way to reach the person. Day after: a short message to ask how it went. Day 3: if there is no answer, one call. Day 7: check the outcome with the agency, with the person's agreement. Day 14: close the loop in the record, or set a new date.","A message that works: \"Hi, this is Dana from HMC. I wanted to check how Thursday went. Reply with anything you need. No need to reply if all is well.\" A message that does not: anything that mentions a diagnosis, a program name, or a legal matter in a text."]},
        {"kind":"list","title":"A tracker should hold","items":["Person (by initials or a number).","Date of referral and service.","Contact and phone at the agency.","Follow-up dates and what happened.","Outcome: connected, pending, could not connect, or declined."]},
        {"kind":"case","title":"When you cannot reach the person","scenario":true,"text":["You referred a man to a clinic on Monday. By Friday you have called twice with no answer. What do you do?","Answer: Try the other contact he gave you, if he agreed to one. Check with the clinic whether he came. Try one more call at a different time of day. If you still cannot reach him, record each try, tell your supervisor, and keep the case open for a defined time. Do not assume he is no longer interested. Many people lose a phone or change numbers. If you see him in the field, tell him you are glad to see him, and ask how best to reach him."]},
        ev(["AHRQ Care Coordination Measures Atlas: coordination depends on sharing information and linking people to community resources.",
          "California HCAI Framework: communication, documentation, and follow-up sit within the service coordination competency.",
          "California DHCS CHW Billing FAQ: records must support the services provided."]),
      ],
    },
    {
      id: 'chw-nav-l6',
      title: 'Three referrals that failed',
      summary: 'What went wrong and what would have worked.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'You learn faster from a referral that failed than from ten that worked. These three are invented, but each is common.',
        ] },
        { kind: 'case', title: 'Case A: the closed office', scenario: false, text: [
          'A worker sent a man to a records office from a printed list. He rode two buses and found the office closed on Wednesdays. He did not try again.',
          'What would have worked: the worker confirms the hours by phone, writes them on a card, and sets a follow-up date.',
        ] },
        { kind: 'case', title: 'Case B: the cold call', scenario: false, text: [
          'A worker told a woman to call a housing agency. She called twice, reached a recording, and gave up.',
          'What would have worked: the worker calls with her, asks for a named contact, and writes down the plan.',
        ] },
        { kind: 'case', title: 'Case C: the missing ID', scenario: false, text: [
          'A worker referred a young man to a clinic. He arrived without ID and was turned away. The worker never knew.',
          'What would have worked: the worker asks what is needed, checks he has it, and checks in the next day.',
        ] },
        { kind: 'reflect', title: 'Apply it', prompts: [
          'Which of these failures have you seen or lived?',
          'What is the first thing you will check on your next referral?',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c8-q2',
          q: 'Which is a warm handoff?',
          options: [
            'Handing over a printed list of agencies',
            'Telling the person to call tomorrow',
            'Calling with the person present, saying what they need, and agreeing who follows up',
            'Sending a text with an address and no context',
          ],
          answer: 2,
          rationale: 'A warm handoff connects two people, and the receiving agency expects the contact.',
          distractors: 'A list, a reminder, or a bare address leaves the person to do the work alone.',
        } },
        { kind: 'check', check: {
          id: 'hrtp-c8-q3',
          q: 'A referral was made two weeks ago and you have not heard back. What next?',
          options: [
            'Assume it worked',
            'Close the case',
            'Make the same referral again without asking',
            'Contact the person and the agency, find out what happened, and record the outcome',
          ],
          answer: 3,
          rationale: 'Closing the loop means confirming the outcome, not assuming it.',
          distractors: 'Assuming, closing, or repeating the referral skips the one step that tells you what happened.',
        } },
        { kind: 'takeaways', items: [
          'Failed referrals are usually ordinary problems you can prevent.',
          'Confirm, accompany, and follow up.',
        ] },
        {"kind":"list","title":"The common thread","items":["Each failure was predictable. The worker had no way to know the office was closed, the call would not connect, or the ID was needed. A checklist would have caught all three.","In each case the person likely blamed themselves. Part of your job is to carry the lesson, not the shame.","None of the fixes took more than fifteen minutes."]},
        {"kind":"tryit","title":"Fix one of your own","text":["Think of a referral you made, or one made for you, that did not work. Write which of the six things was missing, and what you would do next time."]},
        {"kind":"steps","title":"How to review a failed referral","items":[{"label":"Describe","text":"Write what happened, in facts, with no blame."},{"label":"Check","text":"Go through the six things a referral needs. Which was missing?"},{"label":"Fix","text":"Decide the one change that would have prevented it."},{"label":"Share","text":"Tell your team, so the lesson is not learned twice."}]},
        ev(["SAMHSA and USICH Outreach and Engagement Fact Sheet (2016): warm handoffs and persistence.",
          "HUD Notice CPD-17-01: assessment and referral in coordinated entry.",
          "California HCAI Framework: assess learning in different ways, including role-plays and case exercises."]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c8-practice',
    title: 'Your navigation practice file',
    minutes: 160,
    purpose: 'Four pieces of practice that you can keep and reuse: three confirmed services, two warm handoff scripts, a barrier map, and a follow-up plan.',
    fields: [
      { id: 'services', label: 'Find and confirm three services', help: 'Use the HMC Resource Directory and 211 for three scenarios your instructor gives you. For each, record the name, address, hours, eligibility, how you confirmed it, and the date.', multiline: true, repeat: 3, repeatLabel: 'Service' },
      { id: 'handoff', label: 'Write a 90-second warm handoff', help: 'Write what you would say for each of two scenarios: introduce the person, say what they need, say what you already did, and agree who calls whom. Record yourself if you can.', multiline: true, repeat: 2, repeatLabel: 'Handoff' },
      { id: 'barriers', label: 'Barrier map', help: 'For one case, list the barriers (ID, phone, transport, documents, schedule, fear, language) and choose the first two to solve.', multiline: true },
      { id: 'followup', label: 'Follow-up plan', help: 'Write the dates you will check in, how you will reach the person safely, and what you will record each time.', multiline: true },
      {"id":"review","label":"Review three failed referrals","help":"For each of the three failed referrals in the course, write which of the six things was missing and what would have worked.","multiline":true},
    ],
    reference: { title: 'Confirmation checklist', items: [
      'Name of the agency and the person you spoke to',
      'Address and the days and hours it is open',
      'Who is eligible and what it costs the person, if anything',
      'What the person must bring',
      'How the person gets there',
      'The date you confirmed this',
    ] },
  },
  furtherLearning: [
    { name: '211 Los Angeles County', use: 'Search local health, housing, food, and legal services by need and neighborhood.', url: 'https://211la.org' },
    { name: 'Los Angeles Homeless Services Authority', use: 'How coordinated entry and homeless services work in the county.', url: 'https://www.lahsa.org' },
    { name: '988 Suicide and Crisis Lifeline', use: 'How the 988 call, text, and chat service works.', url: 'https://988lifeline.org' },
    { name: 'SAMHSA and USICH: Outreach and Engagement Fact Sheet', use: 'Evidence-informed outreach and warm handoff practices.', url: 'https://endhomelessness.org/wp-content/uploads/2024/10/Outreach_and_Engagement_Fact_Sheet_SAMHSA_USICH.pdf' },
    { name: 'AHRQ: Care Coordination Measures Atlas', use: 'A shared definition of care coordination.', url: 'https://www.ahrq.gov/ncepcr/care/coordination/atlas/chapter1.html' },
  ],
};
