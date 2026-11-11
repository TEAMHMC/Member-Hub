// Community Mental Health Worker Pathway, Foundations course 4: Communication and Documentation.
//
// This is the certificate's own course 4 (id chw_communication, 4 hours, live). The id matches the
// certificate on purpose: the Academy posts every completed course to the portal, and the portal
// credits a learner only for ids it recognizes.
//
// This course is a live practice course. Three short lessons are read before the sessions. Two
// scheduled sessions are practiced with a facilitator and a group. The time is split so that the
// stated 240 minutes equals the lessons, the sessions, and the practice file.
//
// Every statement of fact was taken from a source that was opened and read on November 10, 2026.
// Practice guidance written for this course is labeled as such. Note examples are written for this
// course, not copied from a source.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_COMMUNICATION: Course = {
  id: 'chw_communication',
  num: 4,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Communication and Documentation',
  promise:
    "Explain things so people can act on them, check that they understood without making them feel tested, listen in a way that makes people want to keep talking, work with interpreters, and write down what happened in a way that is accurate, respectful, and useful to the next person who reads it.",
  about: [
    "This course covers two sides of the same skill. How you talk and listen with people, and how you write down what happened. Both are named in the national community health worker skills, and both decide whether people trust you and whether the next worker can pick up where you left off.",
    "It rests on the national community health worker competencies, the national competencies for peer workers in behavioral health, the federal Health Literacy Universal Precautions Toolkit, federal plain language guidance, the original recommended national standards for culturally and linguistically appropriate services, and a state agency's documentation guidelines for case management.",
    "It is Foundations course 4 of HMC's community health worker certificate. It is a live practice course. You read three short lessons, then practice in two scheduled sessions with a facilitator and a small group, then complete a practice file.",
  ],
  objectives: [
    "Explain a health or benefits topic in plain language to a specific person, limiting it to the few points that matter.",
    "Use teach-back and show-me to check understanding without making the person feel tested.",
    "Listen actively, reflect what you heard, and ask open questions.",
    "Work with a qualified interpreter and know why a family member is not a substitute.",
    "Write a note that records what was said, seen, and done in objective, respectful language.",
    "Rewrite a judgmental or vague note so that two readers would understand it the same way.",
  ],
  minutes: 240,
  prerequisites: "None. Take The Community Health Worker Role, History, and Field first if you can.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people who speak more than one language and people who have been on the receiving end of confusing or disrespectful communication.",
  freshness:
    "The communication methods in this course are well established. Your program's documentation rules and systems decide the format of your notes, and they change. The language access standards read for this course are the original recommended set, and the national standards were later updated, so check the current version for your program.",
  modality: 'virtual',
  requirements: [
    { id: 'c4-lessons', label: 'Read the three lessons before the first session', kind: 'assignment' },
    { id: 'c4-s1', label: 'Attend Session 1, Plain Language, Listening, and Teach-Back', kind: 'attend' },
    { id: 'c4-s2', label: 'Attend Session 2, Documentation Practice', kind: 'attend' },
    { id: 'c4-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-comm-l1',
      title: 'Plain language and teach-back',
      summary: 'Say less, say it plainly, and check that it landed.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "People forget most of what they are told in a stressful visit. The federal toolkit on health literacy cites research finding that up to 80 percent of the medical information patients are told during office visits is forgotten immediately, and that nearly half of the information patients retain is incorrect. If you work with people who are tired, scared, in pain, or hearing a new diagnosis, you can assume this applies to what you tell them too.",
          "The fix is not to explain more. It is to explain less, more clearly, and to check. This lesson covers how.",
        ] },
        { kind: 'concept', title: 'What the national standard says', text: [
          "The C3 Project, the national community health worker study, lists communication as one of its eleven skill areas. The abilities include using language confidently, using language in ways that engage and motivate, communicating using plain and clear language, communicating with empathy, listening actively, preparing written communication including electronic communication, and documenting work.",
          "Notice that plain and clear language sits next to empathy and active listening. They are one skill. Clear without warm comes across as cold, and warm without clear leaves people confused.",
        ] },
        { kind: 'concept', title: 'Clear spoken communication', text: [
          "The federal Agency for Healthcare Research and Quality publishes a Health Literacy Universal Precautions Toolkit. Its tool on clear communication lists strategies you can use with anyone. Be respectful and caring, and sit at the same level as the person. Ask open-ended questions. Listen actively and with curiosity, and try not to interrupt. Encourage questions. Limit the content and reinforce key points to avoid information overload, by prioritizing with the person what needs to be discussed and limiting information to one to three need-to-know or need-to-do points, emphasized more than once.",
          "On words, it says to use plain, nonmedical language, the person's own words, and common words you would use to explain health information to a friend or relative who does not work in healthcare. It says to avoid acronyms. It says that if a person needs to learn a term, ask whether they are familiar with it and, if not, define it simply. It says to slow down, to be specific and concrete instead of vague, to use simple pictures, and to show how something is done.",
          "It also says plainly that using jargon and terms your patients do not understand is an act of exclusion that can increase healthcare disparities. That is a strong claim from a federal agency, and it is the reason this skill is about fairness as well as manners.",
        ] },
        { kind: 'concept', title: 'Plain language is also the law for government writing', text: [
          "The federal digital government guidance describes plain language as content that is clear and easy to understand, and notes that the Plain Writing Act of 2010 established the requirement that content for the public be written for its specific audience. The same guide describes plain language as more efficient and effective for the public, and offers guides on writing for understanding, designing for understanding, and testing that your audience understands.",
          "You will write handouts, texts, and notes. The same rule holds. Picture the person who will read it, and write for them.",
        ] },
        { kind: 'concept', title: 'Teach-back and show-me', text: [
          "Teach-back is a way of checking understanding by asking the person to state in their own words what they need to know or do. The related show-me method lets you confirm that a person can follow specific instructions, such as how to use an inhaler. The agency describes teach-back as an evidence-based health literacy intervention and notes that when patients are asked do you understand, they often say yes when they may not, either because they only think they understand or because they are embarrassed.",
          "The toolkit says to plan non-shaming questions. Remember that you are checking how well you explained something, not testing the person. It gives examples such as asking the person what they think are the most important things to know, asking what they will tell their partner about the visit, or asking them to tell back the plan you have made. It says not to ask questions that can be answered with yes or no, and that do you understand and does that make sense are not teach-back questions.",
          "It also acknowledges that teach-back may take longer at first, and that misunderstandings can cause substantial time loss later and place the person at risk. One practice reported in the toolkit found that its average visit length decreased as a resident practiced teach-back.",
        ] },
        { kind: 'steps', title: 'A teach-back you can use', items: [
          { label: 'Say the one to three things that matter', text: "Choose them before you start. Say each one plainly, in the person's own words where you can." },
          { label: 'Take the blame for clarity', text: "Say, I want to make sure I explained that clearly. This is about me, not you." },
          { label: 'Ask them to say it back', text: "Ask, so I know I did my job, can you tell me how you will do this when you get home?" },
          { label: 'Listen for gaps', text: "Notice what is missing or changed. Do not correct harshly." },
          { label: 'Explain again differently', text: "Try other words or a picture. Then ask again." },
          { label: 'Put it in writing', text: "Give them the key points on paper or a message, in plain words and their language." },
        ] },
        { kind: 'vocab', items: [
          { term: 'Plain language', plain: "Clear, direct wording that the reader can understand and act on the first time." },
          { term: 'Jargon', plain: "Words or abbreviations that are normal to the people who use them and unclear to others." },
          { term: 'Teach-back', plain: "Asking the person to explain in their own words what they need to know or do." },
          { term: 'Show-me', plain: "Asking the person to demonstrate a task, such as using a device." },
          { term: 'Health literacy', plain: "How well a person can find, understand, and use information to make health decisions." },
        ] },
        { kind: 'case', title: 'Marisol and the three points', scenario: true, text: [
          "Marisol, a community health worker, needs to explain to a man named Walt what will happen at his first appointment at a clinic, what to bring, and what to do if he cannot make it. She has seven things she wants him to know.",
          "She picks three. Bring your ID and your insurance card. Arrive fifteen minutes early. Call this number if you cannot come. She says each one in a sentence and writes them on a card. Then she says, I want to be sure I explained clearly, so how will you get ready the night before? Walt says he will put his ID in his jacket and set his phone alarm, but he forgot about the insurance card. Marisol did not find a gap in Walt. She found a gap in her explanation, and fixed it in thirty seconds.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c4-q1',
          q: "Which of these is a teach-back question?",
          options: [
            "Do you understand?",
            "Does that make sense?",
            "I want to make sure I explained that clearly. How will you take this when you get home?",
            "Any questions?",
          ],
          answer: 2,
          rationale: "Teach-back asks the person to describe in their own words what they will do. Yes-or-no questions such as do you understand and does that make sense are not teach-back questions.",
          distractors: "The other three invite a quick yes or no, which people often give even when they are unsure.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c4-q2',
          q: "According to the federal health literacy toolkit, how much should you try to cover in one conversation?",
          options: [
            "As much as possible, to be thorough",
            "One to three need-to-know or need-to-do points, emphasized more than once",
            "Only the points the person asks about",
            "Everything in writing, and nothing aloud",
          ],
          answer: 1,
          rationale: "The toolkit says to limit information to one to three need-to-know or need-to-do points and to emphasize them more than once.",
          distractors: "Covering everything causes overload, and the other options ignore the toolkit's advice to prioritize with the person and to reinforce key points.",
        } },
        { kind: 'reflect', title: 'Your own explanations', prompts: [
          "Think of a time someone explained something to you in jargon. How did you feel? What did you do?",
          "What is one thing you explain often that you could cut down to three points?",
        ] },
        { kind: 'takeaways', items: [
          "People forget much of what they hear. Say less, say it plainly, and repeat what matters.",
          "Use the person's own words and avoid jargon. Using words people do not understand excludes them.",
          "Check with teach-back, framed as a check on you and not a test of them. Do you understand is not teach-back.",
        ] },
        ev([
          "C3 Project report, 2016. Skill 1, Communication Skills, abilities a through g.",
          "Agency for Healthcare Research and Quality. Health Literacy Universal Precautions Toolkit, 3rd edition. Tool 4, Communicate Clearly, and Tool 5, Use the Teach-Back Method. The research findings, strategies, and teach-back guidance. The toolkit cites Kessels 2003 for the findings on forgetting.",
          "Agency for Healthcare Research and Quality, TeamSTEPPS. Tool: Teach-Back.",
          "Digital.gov. Plain language guide series. The definition of plain language, the Plain Writing Act of 2010, and the guides on writing, design, and testing for understanding.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-comm-l2',
      title: 'Listening and language access',
      summary: 'Active listening, respectful language, and working with an interpreter.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "The most useful thing you can do for someone in a hard moment is often to listen well. Not to fix, not to explain, just to listen so that they feel heard. That is what builds the trust everything else depends on.",
          "And for the many people whose first language is not English, the first question is whether they can be understood at all. Getting that right is not a courtesy. It is a basic condition of safe, respectful help.",
        ] },
        { kind: 'concept', title: 'Listening in the national peer competencies', text: [
          "The national core competencies for peer workers in behavioral health, published by the Substance Abuse and Mental Health Services Administration, begin with building relationships. They describe a worker who initiates contact, listens with careful attention to the content and emotion being communicated, demonstrates genuine acceptance and respect, and demonstrates understanding of the person's experiences and feelings.",
          "They continue with providing support, which includes validating the person's experiences and feelings. And in the section on communication, they describe a worker who uses respectful, person-centered, recovery-oriented language in written and verbal interactions, uses active listening skills, and clarifies their understanding of information when in doubt of the meaning.",
          "Three habits follow. Attend to both content and emotion. Validate before you move to solving. And clarify instead of assuming.",
        ] },
        { kind: 'steps', title: 'Active listening in practice', items: [
          { label: 'Give your full attention', text: "Put the phone away. Face the person. Sit at their level. The federal toolkit advises making appropriate eye contact instead of concentrating on a screen." },
          { label: 'Let them finish', text: "Try not to interrupt. Allow silence." },
          { label: 'Reflect what you heard', text: "In your own words, say the content and the feeling. It sounds like you are worried that you will lose the appointment." },
          { label: 'Validate', text: "Let them know their reaction makes sense. That sounds exhausting." },
          { label: 'Ask an open question', text: "Invite more. What would help most right now?" },
          { label: 'Clarify when unsure', text: "Say, I want to make sure I have this right. Did you say the bus no longer runs on Sundays?" },
        ] },
        { kind: 'concept', title: 'Respectful language', text: [
          "The peer competencies call for respectful, person-centered, recovery-oriented language. In practice that means speaking of a person before a condition. A person with a substance use disorder, not an addict. A person experiencing homelessness, not a homeless. It means describing what someone does or is going through, not who they are. These examples are practice guidance written for this course, and your program may have its own language guide.",
          "Use the words a person uses for themselves. If someone describes themselves in a way you would not choose, follow their lead unless it is a label that harms them, and then ask gently what they prefer.",
        ] },
        { kind: 'concept', title: 'Language access', text: [
          "The federal toolkit's tool on clear communication says to get a qualified interpreter if a person, or others participating in the visit, want to use a language other than English. It says not to try to get by with basic or intermediate foreign language skills or to use unqualified interpreters such as family members or untrained staff.",
          "The original recommended national standards for culturally and linguistically appropriate services in health care, from the federal Office of Minority Health, say the same in more detail. They call for organizations to offer language assistance services, including bilingual staff and interpreter services, at all points of contact and in a timely manner during all hours of operation. They call for verbal offers and written notices in the person's preferred language informing them of their right to receive language assistance. They call for ensuring the competence of the interpreters and bilingual staff, and say family and friends should not be used to provide interpretation, except on the request of the person. They call for easily understood materials and signage in the languages of commonly encountered groups.",
          "The version read for this course is the original set of recommended standards. The national standards have since been revised, so check the current version for your program. The principle has not changed.",
          "The federal toolkit also notes that teach-back is useful for interpreters, who can use it to correct any missed communication with people who have limited English proficiency.",
        ] },
        { kind: 'steps', title: 'Working with an interpreter', items: [
          { label: 'Ask for the language the person prefers', text: "Do not assume from a name or appearance. Ask, and write it down." },
          { label: 'Use a qualified interpreter', text: "Use your program's interpreter service. Do not rely on a child, family member, or untrained coworker unless the person asks and your program allows." },
          { label: 'Speak to the person', text: "Look at the person, not the interpreter. Use first person. Say, I will explain, not tell her that I will explain." },
          { label: 'Use short, plain sentences', text: "Pause so the interpreter can keep up. Avoid idioms and jargon." },
          { label: 'Check with teach-back', text: "Ask the person to say it back through the interpreter." },
          { label: 'Provide writing in their language', text: "If you cannot provide it, say so honestly and tell your supervisor." },
        ] },
        { kind: 'case', title: 'The daughter who translated', scenario: true, text: [
          "Mrs. Nguyen, 71, comes to a community event with her daughter, who is 15. A community health worker named Dev wants to explain Mrs. Nguyen's options for a clinic visit. The daughter starts translating.",
          "Dev thanks her and says he would like to use the program's phone interpreter so that her daughter can just be her daughter. He asks Mrs. Nguyen which language she prefers. They use the line. Through the interpreter, Dev explains the three key points and asks Mrs. Nguyen to say back the plan. She adds a concern that she had not told her daughter. If the daughter had interpreted, that concern might not have come out.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c4-q3',
          q: "A client with limited English brings a teenage grandchild who offers to interpret. What is the best approach?",
          options: [
            "Accept, since family knows them best",
            "Thank the grandchild, offer a qualified interpreter, and ask the client which they prefer",
            "Speak slowly and loudly in English",
            "Reschedule the visit",
          ],
          answer: 1,
          rationale: "The toolkit says not to use family members or untrained staff, and the national standards say family and friends should not be used except at the person's request. Offer a qualified interpreter and respect the person's choice.",
          distractors: "Relying on a family member, speaking louder, or delaying without cause all fail to provide competent language access.",
        } },
        { kind: 'reflect', title: 'Your own listening', prompts: [
          "Think of someone who listened to you well. What did they do?",
          "What habit gets in the way of your listening when you are busy or tired?",
        ] },
        { kind: 'takeaways', items: [
          "Listen to content and emotion, reflect, validate, ask open questions, and clarify instead of assuming.",
          "Use respectful, person-centered language and the person's own words.",
          "Use a qualified interpreter. A family member is not a substitute unless the person asks and your program allows.",
        ] },
        ev([
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category I, Engages peers in collaborative and caring relationships; Category II, Provides support; Category IX, Values communication.",
          "Agency for Healthcare Research and Quality. Health Literacy Universal Precautions Toolkit, 3rd edition. Tool 4, Communicate Clearly, on interpreters and engagement.",
          "Office of Minority Health, U.S. Department of Health and Human Services. Recommended National Standards for Culturally and Linguistically Appropriate Services in Health Care. The language assistance standards. This is the original set of recommended standards. The enhanced national standards were not read for this course.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-comm-l3',
      title: 'Documenting what happened',
      summary: 'Why notes matter, what goes in them, and how to write facts that two readers would read the same way.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "A note is a message to someone you may never meet. It might be the colleague who covers for you next week, the supervisor who reviews your work, or the clinician who needs to know what happened before today's appointment. It may also, in some situations, be read by the person it describes.",
          "A good note helps all of them. A careless note can mislabel a person, hide a need, or put them in danger. This lesson shows how to write the first kind.",
        ] },
        { kind: 'concept', title: 'Why we document', text: [
          "The documentation guidelines for case management from the Georgia Division of Aging Services say that staff should write case notes so that any person, including a supervisor or a court, will understand exactly what transpired. They state the bottom line this way, that if it is not documented, it did not occur. They also quote a clinical social work society's list of purposes of documentation, which includes documenting professional work, serving as the basis for continuity of care by recording what other practitioners will need to know, complying with legal, regulatory, and institutional requirements, facilitating quality assurance and review, and facilitating coordination between the agencies serving the individual.",
          "The national peer worker competencies add the program side. A competent worker documents information as required by program policies and procedures and follows laws and rules concerning confidentiality. The C3 skills list includes the ability to document work and to prepare written communication, including electronic communication. Your program decides the form, the system, and the deadline. This lesson teaches the writing.",
        ] },
        { kind: 'concept', title: 'What goes in a note', text: [
          "The Georgia guidelines list topics a case note can include. The needs, preferences, or values of the individual. Cultural awareness. Options discussed with the individual. Referrals made on behalf of the individual. Education provided. Advocacy on behalf of the individual. Together they describe what happened and what comes next.",
          "Your program may require other items, such as the date, time, length, location, and who was present. Always include enough that someone who was not there can tell what was done, what the person said they wanted, and what happens next.",
        ] },
        { kind: 'concept', title: 'Objective language', text: [
          "The Georgia guidelines say case notes should be written in a factual, objective manner. Objective language, it says, can be measured, counted, and seen by more than one person, so that two people reading the note would have the same understanding of the situation. It lists four kinds of information that fit. Activities observed by staff or reported by the client. Agency actions. Information from official records. And descriptions of circumstances, including what the person said was important to them.",
          "It tells staff to avoid subjective, judgmental, or vague language. It tells staff to avoid diagnostic or character labels unless a certified or licensed professional has documented the diagnosis. And it tells staff to refrain from including personal opinions or perceptions unless they are clearly labeled as such and factual justification for the opinion is included.",
          "It also lists vague, subjective words that cause trouble, including adequate, appeared, appropriate, clean, dirty, cluttered, good, poor, happy, sad, healthy, hostile, obviously, seems to be, stable, unmotivated, upset, and well cared for. Each one packs a judgment into a single word.",
          "The guidelines quote a professional society's list of elements of good documentation. It provides relevant information in appropriate detail, is organized, is appropriately concise, uses relevant direct quotes identified with quotation marks, distinguishes clearly between facts, observations, hard data, and opinions, and states the sources of facts and information.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Objective', plain: "Something that can be observed, counted, or measured, and that two people would describe the same way." },
          { term: 'Subjective', plain: "Based on a feeling, opinion, or impression." },
          { term: 'Label', plain: "A word that names a person by a condition or a trait instead of describing what happened." },
          { term: 'Direct quote', plain: "The person's own words, set in quotation marks." },
          { term: 'Source', plain: "Where a fact came from, such as what the person said, what you saw, or a record." },
        ] },
        { kind: 'myths', items: [
          { myth: "A good note is a long note.", reality: "A good note is appropriately concise and organized, with the relevant facts, the plan, and the source of each fact." },
          { myth: "Writing that someone seemed sad is a kind observation.", reality: "It is an impression. Write what you saw or heard, such as that she cried, or that she said she has not slept in three days." },
          { myth: "I should leave out what the person told me that does not fit the form.", reality: "Include what they said was important to them. Needs, preferences, and values belong in the record." },
          { myth: "It is fine to write what I think is going on if I am pretty sure.", reality: "Opinions must be clearly labeled as opinions, with the facts that justify them." },
        ] },
        { kind: 'list', title: 'Before you save a note', items: [
          "Could two people read this and picture the same thing?",
          "Did I record what the person said, in their words where it matters, with quotation marks?",
          "Did I separate what I saw, what I was told, what a record says, and what I think?",
          "Did I avoid labels, guesses about a diagnosis, and words like seems, obviously, and appropriate?",
          "Did I write what the person wants and what we agreed to do next?",
          "Is it only what is needed, and am I sharing it only through the approved system?",
        ] },
        { kind: 'case', title: 'Two versions of one visit', scenario: true, text: [
          "A community health worker named Kenji visits a man named Roy at his apartment. His first draft says, Roy seems depressed and is not taking care of himself. The place was a mess and he was uncooperative about the clinic.",
          "He rereads it against the checklist. Nobody could picture what he saw. He rewrites it. Roy said, I have not been out in two weeks. Dishes and mail were stacked on the table. Roy said he does not want to go to the clinic because the last visit took four hours. Roy said he would think about a morning appointment. I will call Friday. The second version records what happened, what Roy said, and the plan. It does not diagnose. A clinician reading it knows exactly what to follow up on.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c4-q4',
          q: "Which note is written in objective language?",
          options: [
            "The client was rude and unmotivated",
            "The client said, I am not interested, and ended the call",
            "The client seems depressed",
            "The home was dirty and unsafe",
          ],
          answer: 1,
          rationale: "The second note records what the client said and did, which two readers would understand the same way. The others use labels, impressions, or vague judgments.",
          distractors: "Rude, unmotivated, depressed, dirty, and unsafe are subjective or diagnostic words that pack a judgment into a single term.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c4-q5',
          q: "You believe a client is struggling with their memory. What do you write?",
          options: [
            "Client has dementia",
            "Client is forgetful and confused",
            "Client missed the last two appointments and said, I forgot what day it was. I think memory may be a concern. The reason I think so is that she repeated the same question three times in 20 minutes",
            "Nothing, since it is only an opinion",
          ],
          answer: 2,
          rationale: "An opinion may be written if it is clearly labeled as an opinion and supported by the facts that justify it. Diagnoses are for licensed professionals.",
          distractors: "A diagnosis from a non-clinician is a label. Forgetful and confused is vague. Leaving it out loses information the team may need.",
        } },
        { kind: 'reflect', title: 'Your own notes', prompts: [
          "If the person you wrote about read your note, what would they think? What would you change?",
          "Which vague word do you use most? What could you write in its place?",
        ] },
        { kind: 'takeaways', items: [
          "Notes serve the next worker, supervision, coordination, and the person. Write for them.",
          "Be objective. Record what was said, seen, done, and planned. Avoid labels, vague words, and unsupported opinions.",
          "Use quotation marks for the person's words, separate fact from opinion, and share only through approved systems.",
        ] },
        ev([
          "Georgia Department of Human Services, Division of Aging Services. Home and Community Based Services Manual, Appendix 202-B, Documentation Guidelines. The statement of purpose, the list of purposes quoted from a clinical social work society, the topics a case note includes, the definition of objective language, the avoidance of labels and unsupported opinion, the list of vague terms, and the elements of good documentation quoted from a professional society.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category IX, items 5 and 6, on documenting as required by program policies and following confidentiality laws.",
          "C3 Project report, 2016. Skill 1, abilities f and g, on written communication and documenting work.",
          "The example notes in this lesson were written for this course. They are not copied from any source.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-comm-s1',
      title: 'Session 1, Plain Language, Listening, and Teach-Back',
      summary: 'A live practice session. Bring your three lessons and a topic you often explain.',
      minutes: 65,
      blocks: [
        { kind: 'why', text: [
          "You cannot learn to listen or to explain by reading. You learn by trying it, getting honest feedback, and trying again. This session is a safe place to do that with other people who are learning too.",
        ] },
        { kind: 'list', title: 'Before the session', items: [
          "Read the three lessons.",
          "Pick one topic you often explain to people, such as how to prepare for a clinic visit, how to renew a benefit, or how to use a referral line.",
          "Bring a pen and paper, or a device to take notes.",
          "Plan to use no real names or details of real clients. Use invented examples.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "Everyone practices and everyone makes mistakes. We give feedback on what we saw and heard, not on the person. What is said in the room stays in the room. You share only what you choose to share. You may pass at any time.",
          "The facilitator will post these agreements at the start and ask whether anything needs adding.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions and agreements for the room." },
          { label: 'Two ways to ask, 10 minutes', text: "The facilitator demonstrates asking do you understand and asking a teach-back question with the same explanation. The group notes the difference in the answers." },
          { label: 'Jargon swap, 10 minutes', text: "In pairs, each person takes a short passage of jargon from a clinic or benefits letter and rewrites it in plain words for a friend. Pairs read their versions aloud." },
          { label: 'Triad practice, 25 minutes', text: "In groups of three, one person explains their topic in no more than three points, one person listens as the learner and does a teach-back, and one person observes with the checklist. Rotate three times, about eight minutes each." },
          { label: 'Interpreter practice, 5 minutes', text: "The facilitator and a volunteer demonstrate a three-way conversation through a phone interpreter or a bilingual colleague. The group notes where eye contact goes and how sentences are paced." },
          { label: 'Debrief and commitments, 10 minutes', text: "Each person names one thing they will do differently this week." },
        ] },
        { kind: 'list', title: 'Observer checklist for the triad practice', items: [
          "Did the explainer limit the message to three points or fewer?",
          "Did they use the person's words and avoid jargon?",
          "Did they use a non-shaming teach-back or show-me?",
          "Did the listener reflect content and emotion, and ask an open question?",
          "What was one thing that worked well? What is one thing to try next time?",
        ] },
        { kind: 'tryit', title: 'Scenarios for the triad practice', text: [
          "Scenario A. Explain to someone how to prepare for their first visit at a new clinic. Scenario B. Explain to someone that their benefits renewal packet arrived and what to do with it. Scenario C. Explain to someone how to reach a crisis line, which is 988 for calls or texts. Use invented details. In every scenario, the listener may ask questions and the explainer ends with teach-back.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What did you learn about how you explain things?",
          "What did the observer notice that you did not?",
        ] },
        { kind: 'takeaways', items: [
          "Practice is the skill. Try, get feedback, try again.",
          "Three points, plain words, and a non-shaming check.",
          "Reflect what you heard before you move to solving.",
        ] },
        ev([
          "The agenda and checklist are practice design written for this course from the three lessons and the sources they cite: the C3 Project report, the SAMHSA peer worker competencies, and the AHRQ Health Literacy Universal Precautions Toolkit.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-comm-s2',
      title: 'Session 2, Documentation Practice',
      summary: 'A live practice session. Sort facts from opinions, rewrite poor notes, and write one from a role play.',
      minutes: 65,
      blocks: [
        { kind: 'why', text: [
          "Writing a clear, objective note is a skill with specific habits. You build them by seeing the difference, rewriting, and getting a second reader's reaction. This session gives you all three.",
        ] },
        { kind: 'list', title: 'Before the session', items: [
          "Read the Documenting what happened lesson again.",
          "Bring your program's note format if you have one. If you do not, the facilitator will provide a simple practice format.",
          "Plan to use only invented details. Do not bring notes about real clients.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Fact, opinion, or label? 10 minutes', text: "The facilitator reads ten short statements. The group sorts each as observed, reported by the person, from a record, an opinion, or a label, and says why." },
          { label: 'Rewrite the poor note, 20 minutes', text: "In pairs, rewrite three poor notes so two readers would understand them the same way. The pair swaps with another pair, and each pair checks the other's rewrite." },
          { label: 'Role play and note, 20 minutes', text: "Two volunteers act out a short visit using an invented scenario while everyone else watches. Everyone then writes a note alone, in ten minutes, and compares notes with a partner." },
          { label: 'Group debrief, 10 minutes', text: "What differed between the notes? What did we each include or leave out? What would a clinician reading this need to know?" },
          { label: 'Commitments, 5 minutes', text: "Each person names one vague word or habit they will drop from their notes." },
        ] },
        { kind: 'list', title: 'Practice notes to rewrite', items: [
          "Client is non-compliant and lazy.",
          "Mother seems overwhelmed and the house is not in good condition.",
          "Client was uncooperative and hostile on the phone.",
        ] },
        { kind: 'concept', title: 'Role play scenario for the note', text: [
          "A community health worker visits a woman named Pat at her apartment to follow up on a referral to a food program. Pat says the program has a waiting list and she does not know how long she will wait. She says she skipped her pharmacy refill because she had to choose between that and groceries. She asks whether the worker can find out about the waiting list. The worker agrees to call the program on Thursday and to ask Pat's clinic whether a nurse can call her about the refill, with Pat's permission, which she gives.",
          "The role players may add details. Remember that this is invented. Write the note from what you saw and heard. Include the plan.",
        ] },
        { kind: 'list', title: 'Checklist for a second reader', items: [
          "Does the note say who, when, and where?",
          "Is what the person said set off in quotation marks or clearly reported?",
          "Is there any word that packs in a judgment?",
          "Is the plan clear: who will do what, by when?",
          "Is anything included that is not needed to help the person?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which of your first drafts surprised you when you reread it with the checklist?",
          "What will you change about how you take notes this week?",
        ] },
        { kind: 'takeaways', items: [
          "Sort every statement as observed, reported, from a record, opinion, or label before you write it down.",
          "A second reader is the best test of a note.",
          "Write the plan. A note without a next step helps no one.",
        ] },
        ev([
          "The agenda is practice design written for this course from the documentation lesson and the Georgia Division of Aging Services documentation guidelines. The practice notes and the scenario were written for this course.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c4-practice',
    title: 'Your communication and documentation practice file',
    minutes: 35,
    purpose: 'Five short pieces that you keep and can reuse at work: a plain-language rewrite, a teach-back script, an interpreter plan, a rewritten note, and your own documentation checklist.',
    fields: [
      { id: 'plain', label: 'A plain-language rewrite', help: 'Choose a paragraph from a form, letter, or flyer you have seen. Rewrite it for one specific person in no more than three key points, in plain words. Say who the reader is.', multiline: true },
      { id: 'teachback', label: 'Your teach-back script', help: 'Write the exact words you will use to start a teach-back, and two follow-up questions if the person leaves something out. Make sure none can be answered with yes or no.', multiline: true },
      { id: 'interpreter', label: 'Your interpreter plan', help: 'Write how you reach a qualified interpreter in your program, the steps you will take at the start of a conversation, and what you will say if a family member offers to interpret.', multiline: true },
      { id: 'note', label: 'A rewritten note', help: 'Take one of the practice notes from Session 2, or an invented one, and rewrite it so that two readers would picture the same thing. Include a direct quote and a plan.', multiline: true },
      { id: 'checklist', label: 'Your own checklist', help: 'Write your own five-line checklist for any note you write. Add the vague words you tend to use, and what you will write instead.', multiline: true },
    ],
    reference: { title: 'Vague words to replace with what you saw or heard', items: [
      'adequate, appropriate, proper',
      'appeared, seemed, obviously',
      'clean, dirty, messy, cluttered',
      'good, poor, stable',
      'happy, sad, upset, hostile',
      'unmotivated, uncooperative, non-compliant',
    ] },
  },
  furtherLearning: [
    { name: 'C3 Project: Understanding Scope and Competencies, a Contemporary Look at the U.S. CHW Field (2016)', use: 'The national list of roles and skills, including communication skills.', url: 'https://portal.ct.gov/-/media/ohs/sim/chw-advisory-committee/2016/2016-06-14/chw-c3-report.pdf' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'Competencies on listening, validating, and values communication.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
    { name: 'AHRQ: Health Literacy Universal Precautions Toolkit, 3rd edition', use: 'Tools for clear spoken communication, teach-back, and addressing language differences.', url: 'https://www.ahrq.gov/sites/default/files/publications2/files/health-literacy-universal-precautions-toolkit-3rd-edition.pdf' },
    { name: 'AHRQ TeamSTEPPS: Tool, Teach-Back', use: 'A short description of teach-back and examples of when to use it.', url: 'https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/teachback.html' },
    { name: 'Digital.gov: Plain language guide series', use: 'Principles of plain language and the Plain Writing Act of 2010.', url: 'https://digital.gov/guides/plain-language' },
    { name: 'Office of Minority Health: Recommended National Standards for Culturally and Linguistically Appropriate Services in Health Care', use: 'The original recommended language assistance and organizational standards. Check the current version for your program.', url: 'https://cccm.thinkculturalhealth.hhs.gov/PDF_Docs/CLAS_Standards.pdf' },
    { name: 'Georgia Division of Aging Services: Appendix 202-B, Documentation Guidelines', use: 'Guidelines for writing objective, factual case notes.', url: 'https://pamms.dhs.ga.gov/das/hcbs-5300-manual/202-b/' },
  ],
};
