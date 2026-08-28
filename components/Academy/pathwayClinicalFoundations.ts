// Clinical Exposure + Simulation — the non-clinical foundations.
//
// The pathway held no courses at all. Three are added, and the selection is the whole point
// of this file: they are the three that teach nothing clinical.
//
// WHAT IS DELIBERATELY NOT HERE, and must not be added without a clinician's review.
//
//   Vitals + Screening Concepts
//   Infection Prevention + PPE beyond the operational field version
//   Trauma-Informed Clinical Encounters
//   Simulation Case 1, 2 and 3
//   Practical / Simulation Competency Review
//
// Those teach or rehearse clinical judgement, and the pathway's own record says it is
// pending clinical governance review. HMC has a PMHNP; that is who reviews them. A previous
// agent introduced a scoring error into a validated instrument in this codebase, which is
// the concrete reason the line is drawn here rather than at whatever felt defensible.
//
// The three written courses teach: who is in a health care team and what each may legally
// do, the terminology a learner needs to follow a conversation without misreading it, and
// how to talk to a patient within a learner's scope. All three are prerequisites for
// simulation rather than substitutes for it.
//
// Scope language is repeated rather than stated once. An observer who forgets their scope
// for one minute in a real clinical setting is the risk this pathway carries, and repetition
// is cheap.

import type { Course, Check } from './catalog';

// ── Course 1 ─────────────────────────────────────────────────────────────

const TEAM_ROLES_AND_SCOPE: Course = {
  id: 'ces-1',
  num: 1,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Healthcare Team Roles + Scope',
  promise:
    'Know who does what in a clinical team, what each role may legally do, and where a learner stops.',
  about: [
    'A learner walking into a clinical setting sees a room of people whose roles are not obvious and whose authority is not interchangeable. Getting that wrong is how an observer ends up doing something nobody authorised.',
    'This course covers the roles, the difference between licensure and certification, and the scope question that a learner has to be able to answer about themselves.',
  ],
  objectives: [
    'Identify the common clinical and non-clinical roles in a community health setting.',
    'Distinguish licensure, certification, registration and an educational completion.',
    'Explain what scope of practice means and who sets it.',
    'State your own scope as a learner, including what you must decline.',
  ],
  minutes: 25,
  prerequisites: 'None. Required before any clinical observation placement.',
  whoFor:
    'Health-professions learners preparing for clinical exposure, and volunteers working alongside clinical staff.',
  lessons: [
    {
      id: 'ces-1-l1',
      title: 'Who is in the room',
      summary: 'The roles a learner will actually meet in community health, and what each is for.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Roles in a community clinical setting are less tidy than an organisational chart suggests. What matters to a learner is not the hierarchy but who is responsible for what, because that decides who you ask.',
        ] },
        { kind: 'steps', title: 'Commonly present', items: [
          { label: 'Physician, nurse practitioner, physician assistant', text: 'Diagnose, treat, prescribe within their own authority. A nurse practitioner and a physician assistant are independent roles with their own scope, not assistants to a physician.' },
          { label: 'Registered nurse, licensed vocational nurse', text: 'Assessment, care delivery, medication administration and patient teaching, at different levels of authority. The RN is frequently the person who actually knows what is happening with everybody in the room.' },
          { label: 'Medical assistant, community health worker, promotora', text: 'Support, navigation, outreach, and the tasks their training and the setting authorise. A CHW role is defined by the programme and the payer rather than by a state licence.' },
          { label: 'Pharmacist, behavioural health clinician, social worker, care coordinator', text: 'Each holds a distinct scope and each is the correct destination for a specific kind of question. Sending a housing question to a pharmacist wastes everybody\'s time.' },
          { label: 'Front desk, scheduler, interpreter, records staff', text: 'Non-clinical and central. An interpreter in particular is a professional role and not a bilingual bystander, and a learner should never substitute for one.' },
        ] },
        { kind: 'check', check: {
          id: 'ces-1-c1',
          q: 'A learner needs to ask about a patient\'s housing situation and available support. Who is the appropriate person?',
          options: [
            'The prescribing clinician, since they lead the care',
            'A social worker, care coordinator or community health worker, depending on the setting',
            'The pharmacist, who sees the patient regularly',
            'The front desk, who holds the records',
          ],
          answer: 1,
          rationale: 'Each role holds a distinct scope and a distinct set of answers. Routing a social question to a clinician delays it and consumes the scarcest time in the building.',
        } },
      ],
    },
    {
      id: 'ces-1-l2',
      title: 'Licensure, certification, and what a course gives you',
      summary: 'Four words that are not interchangeable, and the consequence of mixing them up.',
      minutes: 4,
      blocks: [
        { kind: 'vocab', items: [
          { term: 'Licensure', plain: 'Legal permission from a government body to practise a profession in a place. Without it the activity is unlawful, not merely unendorsed.' },
          { term: 'Certification', plain: 'A body attests that you met its standard. It may be required by an employer or a payer, and it is not a government grant of authority.' },
          { term: 'Registration', plain: 'Being on an official list, sometimes with a competency requirement and sometimes without.' },
          { term: 'Educational completion', plain: 'A record that you completed a course of study. What HMC issues. It is evidence of learning and it grants no authority.' },
        ] },
        { kind: 'concept', title: 'Why the distinction has teeth', text: [
          'Describing an educational completion as a certification, or a certification as a licence, is not a matter of emphasis. It is a claim about legal authority, and a learner who makes it in front of a patient has told that patient something false about who is helping them.',
          'The community health worker role is the case where this comes up most in California, because there is no state CHW certification to hold. What exists is training, programme requirements and payer requirements, which are real and are a different thing.',
        ] },
        { kind: 'myths', items: [
          { myth: 'Certified and licensed mean roughly the same thing in practice.', reality: 'A licence is legal authority granted by a government body. A certification is an attestation by an organisation. Only one of them makes an act lawful.' },
          { myth: 'A completion is not worth mentioning if it is not a certification.', reality: 'It is worth mentioning accurately. Hours, coursework and a supervisor sign-off are real evidence, and precision is what keeps them credible when somebody checks.' },
        ] },
        { kind: 'check', check: {
          id: 'ces-1-c2',
          q: 'What is the practical difference between licensure and certification?',
          options: [
            'Licensure is harder to obtain',
            'Licensure is legal permission from a government body, without which the activity is unlawful; certification is an organisation attesting you met its standard',
            'Certification lasts longer',
            'Licensure applies nationally and certification applies by state',
          ],
          answer: 1,
          rationale: 'The difference is legal authority, not difficulty or duration. Only licensure makes an act lawful, which is why describing one as the other is a false claim rather than loose wording.',
        } },
      ],
    },
    {
      id: 'ces-1-l3',
      title: 'Scope of practice',
      summary: 'What it is, who sets it, and why it is narrower than competence.',
      minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Scope of practice is the set of activities a role is legally permitted to perform. It is set by state law and by the relevant board, not by an employer, a supervisor, or how capable somebody actually is.',
          'That last part is the one learners find counterintuitive. A skilled person acting outside their scope is still acting outside it, and the fact that they did it well is not a defence.',
        ] },
        { kind: 'steps', title: 'Three things scope is not', items: [
          { label: 'Not the same as ability', text: 'You may be entirely capable of taking a blood pressure. Whether you may do so in a given setting is a separate question with a different answer.' },
          { label: 'Not set by whoever is supervising', text: 'A supervisor cannot delegate an act outside the scope of the person receiving it. If a busy clinician asks you to do something you are not authorised to do, the answer is still no.' },
          { label: 'Not the same everywhere', text: 'Scope is a state-level question, and a role that includes an act in one state may exclude it in another. This is a reason to ask rather than to generalise from what you have read.' },
        ] },
        { kind: 'case', title: 'The busy afternoon', scenario: true, text: [
          'A student observer has been shadowing for three weeks and is trusted. The clinic is overwhelmed. A nurse, moving between rooms, asks her to take a set of vitals on the patient in room two.',
          'She is capable. She has watched it twenty times. The request came from somebody senior and the clinic genuinely needs it.',
          'It is still outside her scope as an observer, and the nurse cannot make it inside her scope by asking. The correct answer is short and does not require a debate: "I am not signed off to do that, but I can get somebody who is." Nobody who matters will think worse of her for it, and the one person who might is the person whose request created the problem.',
        ] },
        { kind: 'check', check: {
          id: 'ces-1-c3',
          q: 'A supervising clinician asks a learner to perform a task the learner is capable of but not authorised to do. What is the correct response?',
          options: [
            'Perform it, since the supervisor has authorised it',
            'Perform it if confident, and mention it afterwards',
            'Decline, offer to find somebody who is authorised, and tell your placement supervisor',
            'Ask another learner to do it instead',
          ],
          answer: 2,
          rationale: 'A supervisor cannot delegate an act outside the scope of the person receiving it, so their asking does not change the answer. Declining while solving the underlying need is both correct and useful, and the placement supervisor needs to know the request was made.',
        } },
      ],
    },
    {
      id: 'ces-1-l4',
      title: 'Your own scope as a learner',
      summary: 'Say it out loud before your first day, and know the three sentences you will need.',
      minutes: 5,
      blocks: [
        { kind: 'steps', title: 'Ordinarily yours', items: [
          { label: 'Observing', text: 'With the patient\'s knowledge and agreement, obtained by somebody with the standing to ask.' },
          { label: 'Non-clinical support', text: 'Directions, forms, waiting-room questions, fetching a person or an item, and anything the placement has explicitly authorised.' },
          { label: 'Asking questions afterwards', text: 'Not during, unless invited. The debrief is where a learner gets most of the value of an observation.' },
        ] },
        { kind: 'steps', title: 'Never yours as a learner', items: [
          { label: 'Any clinical act', text: 'Vitals, specimens, dressings, medication, anything touching a patient, unless a named supervisor has signed you off for that specific act in that specific setting.' },
          { label: 'Any clinical opinion, to anybody', text: 'Including reassurance. "That looks fine" is a clinical statement, and a patient will remember it as one.' },
          { label: 'Interpreting', text: 'Even when you are fluent, and even when it would obviously be quicker. Clinical interpretation is a professional role, and errors in it are consequential and invisible.' },
          { label: 'Accessing records you do not need', text: 'Your access is for the task in front of you. The rest of it is not a resource.' },
        ] },
        { kind: 'fieldnote', title: 'Three sentences', text: [
          '"I am a student observer, so I will not be doing anything hands-on today." Said to the patient at the start, by you or by the clinician.',
          '"I am not signed off for that, but let me find somebody who is." For any request outside scope, from anybody.',
          '"That is a question for your nurse, and I will make sure she comes back to you." For any clinical question a patient asks you.',
        ] },
        { kind: 'check', check: {
          id: 'ces-1-c4',
          q: 'A patient asks a student observer whether a rash looks serious. What should the observer say?',
          options: [
            'Offer honest reassurance if it looks minor',
            'Say they are not able to answer clinical questions and undertake to bring the nurse back',
            'Describe what they observe without giving an opinion',
            'Say they do not know',
          ],
          answer: 1,
          rationale: 'Reassurance is a clinical statement and the patient will act on it. Describing observations is the same statement in a thinner disguise. Declining while committing to get the right person is both accurate and helpful.',
        } },
        { kind: 'takeaways', items: [
          'Ask the role that holds the answer, not the most senior person present.',
          'Licensure is legal authority. Certification is an attestation. A completion grants neither.',
          'Scope is set by law, not by ability and not by whoever is asking.',
          'Observe, support non-clinically, ask afterwards. Nothing hands-on, no clinical opinions, no interpreting.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'ces-1-scope',
    title: 'Your scope statement',
    minutes: 6,
    purpose:
      'A learner who has written their own scope down declines correctly under pressure. One who has not will improvise, and the improvisation happens on a busy afternoon.',
    fields: [
      { id: 'setting', label: 'Your placement and supervisor', help: 'Where you will be, and the named person who signs off what you may do.', multiline: true },
      { id: 'authorised', label: 'What you are explicitly authorised to do', help: 'Ask, and write the answer. Not what you assume from what you have read.', multiline: true },
      { id: 'decline', label: 'Your declining sentence', help: 'The words you will use, written as you will say them.', multiline: false },
      { id: 'patient', label: 'Your introduction to a patient', help: 'How you will describe yourself, in one sentence, without overstating what you are.', multiline: false },
    ],
  },
  furtherLearning: [
    { name: 'California Department of Consumer Affairs, health-profession boards', use: 'Which board licenses which role in California, and where a scope question is actually settled.' },
    { name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook', use: 'What each role does and its typical entry requirements, as a starting point before verifying with the board.' },
    { name: 'California Department of Health Care Services, Community Health Worker benefit', use: 'What defines the CHW role in California in the absence of a state certification.' },
  ],
};

// ── Course 2 ─────────────────────────────────────────────────────────────

const MEDICAL_TERMINOLOGY: Course = {
  id: 'ces-2',
  num: 2,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Medical Terminology Foundations',
  promise:
    'Follow a clinical conversation without misreading it, and know which terms you must never guess at.',
  about: [
    'Terminology is built from parts, which means a learner can decode most of what they hear without memorising lists. This course teaches the parts and the decoding habit.',
    'It also teaches the opposite skill, which matters more: recognising the terms where a near-miss changes the meaning entirely, and where guessing is worse than admitting you did not catch it.',
  ],
  objectives: [
    'Decode unfamiliar terms from root, prefix and suffix.',
    'Use the common directional and positional terms correctly.',
    'Recognise abbreviations that are ambiguous or dangerous to assume.',
    'Say that you did not understand a term, in a way that costs nothing.',
  ],
  minutes: 20,
  prerequisites: 'None.',
  whoFor: 'Health-professions learners, scribing and administrative volunteers, and anyone who will hear clinical language and be expected to record or relay it.',
  lessons: [
    {
      id: 'ces-2-l1',
      title: 'Terms are built from parts',
      summary: 'Root, prefix, suffix. Learn about thirty pieces and you can read hundreds of words.',
      minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Most clinical vocabulary is assembled rather than invented. A root names the body part or system, a prefix modifies it, and a suffix says what is happening to it. Once the habit is there, an unfamiliar word is usually decodable on the spot.',
        ] },
        { kind: 'steps', title: 'The three parts', items: [
          { label: 'Root', text: 'The subject. cardi, heart. gastr, stomach. neur, nerve. derm, skin. hepat, liver. pulmon, lung. oste, bone. haem or hem, blood.' },
          { label: 'Prefix', text: 'Modifies it. hyper, above or excessive. hypo, below or deficient. brady, slow. tachy, fast. dys, difficult or painful. a or an, without. peri, around. intra, within.' },
          { label: 'Suffix', text: 'What is happening. itis, inflammation. ology, study of. ectomy, surgical removal. otomy, cutting into. algia, pain. emia, blood condition. pnea, breathing. megaly, enlargement.' },
        ] },
        { kind: 'example', title: 'Decoded on sight', text: [
          'tachycardia: tachy, fast, plus cardi, heart. A fast heart rate.',
          'hepatomegaly: hepat, liver, plus megaly, enlargement. An enlarged liver.',
          'dyspnea: dys, difficult, plus pnea, breathing. Difficult or laboured breathing.',
          'gastritis: gastr, stomach, plus itis, inflammation. Inflammation of the stomach lining.',
          'None of those four had to be memorised as words. They were assembled from nine pieces.',
        ] },
        { kind: 'steps', title: 'A second layer worth having', items: [
          { label: 'More roots', text: 'nephr, kidney. ren, kidney, from Latin rather than Greek, which is why two words for one organ exist. arthr, joint. my or myo, muscle. cyt, cell. path, disease. rhin, nose. ot, ear. ophthalm, eye.' },
          { label: 'More suffixes', text: 'osis, an abnormal condition. iasis, a condition, often a presence of something. plasty, surgical repair. scopy, looking inside with an instrument. gram, a record or image. graphy, the process of recording. penia, a deficiency.' },
          { label: 'Two roots for one thing', text: 'Greek and Latin both contributed, so nephrology and renal both concern the kidney, and cardiac and coronary both concern the heart in different senses. This is a reason to learn both rather than to assume a word you do not recognise is new.' },
        ] },
        { kind: 'concept', title: 'The habit, stated as a habit', text: [
          'When an unfamiliar word arrives, split it before you decide you do not know it. Find the suffix first, because it tells you what kind of word it is: a condition, a procedure, a measurement, or a study. Then the root, which tells you where. Then the prefix, which usually only modifies.',
          'osteoarthritis: itis, inflammation, so a condition. arthr, joint. oste, bone. Inflammation of the bone and joint. Nothing about that word had to be looked up.',
        ] },
        { kind: 'check', check: {
          id: 'ces-2-c1',
          q: 'Using the parts above, what does bradycardia mean?',
          options: ['An enlarged heart', 'A slow heart rate', 'Inflammation of the heart', 'Pain in the chest'],
          answer: 1,
          rationale: 'brady means slow and cardi means heart. Assembling from parts is the skill; the individual word is not worth memorising once the habit is there.',
        } },
      ],
    },
    {
      id: 'ces-2-l2',
      title: 'Direction and position',
      summary: 'The words that describe where, which are used constantly and assumed to be known.',
      minutes: 4,
      blocks: [
        { kind: 'steps', title: 'Pairs', items: [
          { label: 'Anterior and posterior', text: 'Front and back.' },
          { label: 'Superior and inferior', text: 'Above and below.' },
          { label: 'Medial and lateral', text: 'Toward the midline and away from it.' },
          { label: 'Proximal and distal', text: 'Nearer the point of attachment and further from it. The elbow is proximal to the wrist.' },
          { label: 'Bilateral and unilateral', text: 'Both sides and one side.' },
          { label: 'Supine and prone', text: 'Lying face up and lying face down.' },
        ] },
        { kind: 'concept', title: 'Left and right belong to the patient', text: [
          'The patient\'s left, not yours. This is the single most common positional error a learner makes and it is consequential: a note recording the wrong side is a note that can send somebody to the wrong procedure.',
          'When recording or relaying anything with a side in it, say it back. "Left knee, the patient\'s left." Nobody has ever been irritated by that confirmation.',
        ] },
        { kind: 'steps', title: 'Where things are, by system', items: [
          { label: 'Thorax and abdomen', text: 'Thoracic is the chest, abdominal the belly, pelvic below that. An abdominal complaint and a thoracic one are different conversations even when the pain feels adjacent to the person having it.' },
          { label: 'Quadrants', text: 'The abdomen is described in four quadrants, upper and lower, right and left, and always the patient\'s right and left. A note saying right upper quadrant is saying something specific about location, not approximating.' },
          { label: 'Extremities', text: 'Upper and lower, and proximal and distal within each. Distal to the elbow means further from the trunk, which is the wrist end.' },
        ] },
        { kind: 'check', check: {
          id: 'ces-2-c2',
          q: 'A note records pain in the left knee. Whose left is meant?',
          options: [
            'The reader\'s left as they face the patient',
            'The patient\'s left, always',
            'It depends on the setting',
            'The side nearest the examiner',
          ],
          answer: 1,
          rationale: 'Sides are always the patient\'s. It is the most common positional error a learner makes and it is the one with the largest consequence, which is why saying the side back is worth the two seconds.',
        } },
      ],
    },
    {
      id: 'ces-2-l3',
      title: 'When not to guess',
      summary: 'Abbreviations, sound-alikes, and the sentence that costs nothing.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'The decoding habit has a failure mode: it makes a learner confident about a word they have assembled wrongly. Some categories are worse than others.',
        ] },
        { kind: 'list', title: 'Do not assume', items: [
          'Abbreviations that mean different things in different settings. A three-letter abbreviation can have several expansions, and which one is meant depends on the specialty and the sentence, not on the letters.',
          'Anything where a similar word means something quite different. Terminology contains many near neighbours, and a near miss is not a partial answer, it is a different word.',
          'Drug names. Many look and sound alike, the consequences of confusing them are serious, and this is never a learner\'s guess to make.',
          'Numbers, doses and units. Repeat them back exactly or write nothing.',
          'Anything you are recording rather than merely hearing. A note carries your uncertainty forward invisibly to everybody who reads it afterwards.',
        ] },
        { kind: 'fieldnote', title: 'The sentence', text: [
          '"Sorry, I did not catch that term. Can you say it again?"',
          'It costs two seconds and it is heard as care rather than ignorance. The alternative is a note with a guess in it, and a guess in a record is indistinguishable from a fact to the next person who reads it.',
        ] },
        { kind: 'check', check: {
          id: 'ces-2-c3',
          q: 'A learner recording notes hears an abbreviation they are not certain about. What should they do?',
          options: [
            'Write the most likely expansion',
            'Write the abbreviation and move on',
            'Ask for it to be repeated or expanded before recording it',
            'Leave a blank and reconstruct it later',
          ],
          answer: 2,
          rationale: 'A record carries uncertainty forward invisibly, so a guess becomes a fact to the next reader. Asking is two seconds and reconstructing later is guessing with less information than you have now.',
        } },
      ],
    },
  ],
  checks: [
    {
      id: 'ces-2-x1',
      q: 'What does the suffix "ectomy" indicate?',
      options: ['Cutting into', 'Surgical removal', 'Inflammation', 'Enlargement'],
      answer: 1,
      why: 'ectomy is surgical removal, and otomy is cutting into. The pair is worth holding separately because the difference between them is an entire operation.',
    },
    {
      id: 'ces-2-x2',
      q: 'Which term describes lying face down?',
      options: ['Supine', 'Prone', 'Lateral', 'Distal'],
      answer: 1,
      why: 'Prone is face down and supine is face up. Both appear constantly in positioning instructions and are assumed to be known.',
    },
  ],
  artifact: {
    id: 'ces-2-glossary',
    title: 'Your own working glossary',
    minutes: 6,
    purpose:
      'The terms you personally keep having to look up are a shorter and more useful list than any published one. This is where it starts.',
    fields: [
      { id: 'decoded', label: 'Five terms you decoded', help: 'Break each into its parts and give the meaning. Use terms you have actually encountered.', multiline: true },
      { id: 'unsure', label: 'Three you are still unsure of', help: 'Write them as you heard them. Who will you ask?', multiline: true },
      { id: 'sentence', label: 'Your asking sentence', help: 'The words you will use when you do not catch a term. Write them out.', multiline: false },
    ],
  },
  furtherLearning: [
    { name: 'National Library of Medicine, MedlinePlus medical dictionary and health topics', use: 'A reliable public reference for a term or a condition, and the place to check rather than guess.' },
    { name: 'Institute for Safe Medication Practices, error-prone abbreviations and confused drug names', use: 'The published lists of abbreviations and drug names known to cause errors, which is why a learner never guesses at either.' },
  ],
};

// ── Course 3 ─────────────────────────────────────────────────────────────

const PATIENT_COMMUNICATION: Course = {
  id: 'ces-3',
  num: 3,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Patient Communication + Interviewing',
  promise:
    'Talk with a patient in a way that is useful and stays inside a learner\'s scope, including when they tell you something you cannot hold.',
  about: [
    'Communication is the part of clinical work a learner can genuinely practise, because listening well is inside anybody\'s scope. What is outside it is anything that sounds like an assessment or an answer.',
    'This course teaches the openings that produce useful information, the habits that make a patient feel like a person, and the two situations where a learner has to stop and hand over.',
  ],
  objectives: [
    'Open a conversation in a way that produces information rather than a yes or a no.',
    'Use teach-back and plain language without condescending.',
    'Work with a professional interpreter correctly.',
    'Recognise the two moments where a learner must stop and hand over.',
  ],
  minutes: 20,
  prerequisites: 'Healthcare Team Roles + Scope, because this course depends on knowing where your scope ends.',
  whoFor: 'Health-professions learners, navigators, and volunteers who speak with patients or members.',
  lessons: [
    {
      id: 'ces-3-l1',
      title: 'Openings that produce information',
      summary: 'What you ask first decides most of what you get.',
      minutes: 3,
      blocks: [
        { kind: 'prose', text: [
          'A closed question gets a closed answer, and a learner who opens with a checklist will complete the checklist and learn nothing that was not on it.',
        ] },
        { kind: 'steps', title: 'Four habits', items: [
          { label: 'Open, then narrow', text: '"What brings you in today?" before anything specific. The first forty seconds of an unprompted answer contains most of what matters, and it is usually interrupted.' },
          { label: 'Do not interrupt the first answer', text: 'The instinct to clarify at the ten second mark is what produces an incomplete story. Let it finish. It rarely takes as long as it feels.' },
          { label: 'Ask what they are worried about', text: 'Not the same as what is wrong. Frequently the more useful question, and one almost nobody has asked them.' },
          { label: 'Summarise back before moving on', text: '"So it started about two weeks ago, it is worse in the mornings, and what worries you is whether it is the same thing your father had." Getting it wrong is fine; the correction is the point.' },
        ] },
        { kind: 'check', check: {
          id: 'ces-3-c1',
          q: 'What is the effect of interrupting a patient\'s first answer to clarify a detail?',
          options: [
            'It improves accuracy by resolving ambiguity early',
            'It usually truncates the story, and the first uninterrupted answer contains most of what matters',
            'It has no meaningful effect',
            'It saves time overall',
          ],
          answer: 1,
          rationale: 'The unprompted opening answer is where the useful information is, and an early clarification converts the conversation into a series of answers to your questions rather than an account of their situation.',
        } },
      ],
    },
    {
      id: 'ces-3-l2',
      title: 'Plain language and teach-back',
      summary: 'Checking understanding without testing the person.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'People routinely leave a clinical encounter unsure what they were told and unwilling to say so. Teach-back is the method for finding that out, and its whole design is to put the burden on the explainer rather than the patient.',
        ] },
        { kind: 'example', title: 'The framing that matters', text: [
          'Wrong: "Do you understand?" Almost everybody says yes.',
          'Wrong: "Can you repeat that back to me?" Reads as a test and people perform rather than answer.',
          'Right: "I want to make sure I explained that clearly. What will you tell your daughter about what happens next?"',
          'The third version asks them to demonstrate, frames any gap as the explainer\'s failure, and gives them a natural reason to speak.',
        ] },
        { kind: 'steps', title: 'Plain language', items: [
          { label: 'Say the ordinary word', text: 'High blood pressure rather than hypertension, when talking to a patient. Use the clinical term with colleagues and the plain one with people.' },
          { label: 'One idea per sentence', text: 'Three linked clauses will lose the second one.' },
          { label: 'Give the number, not the adjective', text: '"Take it twice a day, morning and night" rather than "take it regularly".' },
          { label: 'Do not simplify the person', text: 'Plain language is not a slower voice or a smaller vocabulary about them. Somebody unfamiliar with a term is not unfamiliar with their own life.' },
        ] },
        { kind: 'check', check: {
          id: 'ces-3-c2',
          q: 'Which teach-back framing is most likely to reveal a real gap in understanding?',
          options: [
            '"Do you understand what I explained?"',
            '"Can you repeat back what I said?"',
            '"I want to make sure I explained that clearly. What will you tell your family about what happens next?"',
            '"Do you have any questions?"',
          ],
          answer: 2,
          rationale: 'It asks for a demonstration rather than a yes, places any gap on the explainer, and gives the patient a natural reason to speak. The other three reliably produce agreement rather than information.',
        } },
      ],
    },
    {
      id: 'ces-3-l3',
      title: 'Working with an interpreter',
      summary: 'A professional role, and the four rules a learner keeps.',
      minutes: 3,
      blocks: [
        { kind: 'prose', text: [
          'Language access is a right in a health care setting, and a professional interpreter is how it is met. A bilingual learner is not a substitute, and neither is a family member.',
        ] },
        { kind: 'steps', title: 'Four rules', items: [
          { label: 'Speak to the patient, not the interpreter', text: 'First person, looking at the patient. "How long has this been going on?" not "ask her how long".' },
          { label: 'Short segments, then pause', text: 'One or two sentences. A long passage guarantees compression, and compression is where the meaning goes.' },
          { label: 'Never use a child', text: 'Not for anything. It places a child in the middle of their parent\'s health information and it produces unreliable interpretation.' },
          { label: 'Do not step in because it would be faster', text: 'Even if you are fluent. Clinical interpretation is a trained role, errors in it are invisible to everybody in the room, and being quicker is not the standard.' },
        ] },
        { kind: 'check', check: {
          id: 'ces-3-c3',
          q: 'A fluent bilingual learner could interpret for a patient much faster than waiting for the professional interpreter. What should they do?',
          options: [
            'Interpret, since it serves the patient better',
            'Interpret only the simple parts',
            'Wait for the professional interpreter, because clinical interpretation is a trained role and errors in it are invisible in the room',
            'Ask a family member to interpret instead',
          ],
          answer: 2,
          rationale: 'Fluency is not the same as clinical interpretation, and a mistake made by an untrained interpreter is not detectable by anybody present. Speed is not the standard the requirement is set against.',
        } },
      ],
    },
    {
      id: 'ces-3-l4',
      title: 'When to stop',
      summary: 'The two moments a learner hands over, and the words for each.',
      minutes: 4,
      blocks: [
        { kind: 'steps', title: 'Two moments', items: [
          { label: 'A clinical question', text: 'Anything about what is wrong, what a result means, what to do, or whether something is serious. Including reassurance, which is a clinical statement. "That is one for your nurse, and I will make sure she comes back to you."' },
          { label: 'A disclosure about safety', text: 'Harm, risk of harm, or immediate danger to anybody. You do not assess it and you do not hold it. Tell the clinician or your supervisor the same day, and where there is immediate danger act on it now: 988 for a suicide or mental health crisis, 911 for an emergency.' },
        ] },
        { kind: 'concept', title: 'What you can always do', text: [
          'Stopping is not abandoning. A learner who cannot answer can still stay, still listen, and still make sure the right person arrives.',
          '"I am not the right person for that part, and I am going to get somebody who is. I can sit with you until they come." That sentence is inside anybody\'s scope and it is frequently the most useful thing said to a patient all day.',
        ] },
        { kind: 'check', check: {
          id: 'ces-3-c4',
          q: 'A patient tells a student observer something indicating they may be at risk of harm at home. What should the observer do?',
          options: [
            'Ask enough follow-up questions to understand the situation before reporting',
            'Reassure the patient and note it in case it recurs',
            'Tell the clinician or their supervisor the same day, without assessing how serious it is',
            'Advise the patient to tell their doctor themselves',
          ],
          answer: 2,
          rationale: 'A learner notices and hands over. Investigating shapes an account somebody trained will need intact, and leaving it to the patient to raise means it may reach nobody.',
        } },
        { kind: 'takeaways', items: [
          'Open, do not interrupt, ask what worries them, summarise back.',
          'Teach-back puts the gap on the explainer. Ask what they will tell somebody.',
          'Speak to the patient, short segments, never a child, never step in for speed.',
          'A clinical question and a safety disclosure both stop with a handover, and you can stay.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'ces-3-openings',
    title: 'Your openings and your handovers',
    minutes: 6,
    purpose:
      'Both halves are things people improvise badly under pressure. Written down, they are available in the moment.',
    fields: [
      { id: 'opening', label: 'Your opening', help: 'The first question you will ask, and the second. Written as you will say them.', multiline: true },
      { id: 'teachback', label: 'Your teach-back sentence', help: 'Framed so any gap is yours rather than theirs.', multiline: false },
      { id: 'clinical', label: 'Your handover for a clinical question', help: 'The words, including what you commit to doing next.', multiline: false },
      { id: 'safety', label: 'Your route for a safety disclosure', help: 'Who you tell, the same day, and how you reach them.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'Agency for Healthcare Research and Quality, health literacy and teach-back guidance', use: 'The teach-back method as published, including the framing that avoids testing the patient.' },
    { name: 'U.S. Department of Health and Human Services, National CLAS Standards', use: 'The culturally and linguistically appropriate services standards, which is where the language access requirement comes from.' },
    { name: '988 Suicide and Crisis Lifeline', use: 'What the line does and what to expect when calling or texting with somebody.' },
  ],
};

// ── Pathway assessment ───────────────────────────────────────────────────
//
// Ten constructs from the three written courses. Nothing clinical is examined, because
// nothing clinical is taught.

export const CES_PRE: Check[] = [
  {
    id: 'ces-t1',
    q: 'A learner needs to ask about a patient\'s housing and support. Who is the appropriate person?',
    options: ['A social worker, care coordinator or community health worker', 'The prescribing clinician', 'The pharmacist', 'The front desk'],
    answer: 0,
    why: 'Each role holds a distinct scope and a distinct set of answers. Routing a social question to a clinician delays it and consumes the scarcest time in the building.',
  },
  {
    id: 'ces-t2',
    q: 'What is the practical difference between licensure and certification?',
    options: [
      'Licensure is harder to obtain',
      'Certification lasts longer',
      'Licensure is legal permission from a government body without which the act is unlawful; certification is an organisation attesting you met its standard',
      'Licensure is national and certification is by state',
    ],
    answer: 2,
    why: 'The difference is legal authority. Only licensure makes an act lawful, which is why calling one the other is a false claim rather than loose wording.',
  },
  {
    id: 'ces-t3',
    q: 'A supervising clinician asks a learner to do something the learner is capable of but not authorised to do. What is correct?',
    options: [
      'Do it, since the supervisor authorised it',
      'Do it if confident and mention it afterwards',
      'Ask another learner',
      'Decline, offer to find somebody authorised, and tell the placement supervisor',
    ],
    answer: 3,
    why: 'A supervisor cannot delegate an act outside the scope of the person receiving it, so their asking does not change the answer.',
  },
  {
    id: 'ces-t4',
    q: 'A patient asks a student observer whether a rash looks serious. What should the observer say?',
    options: [
      'Offer reassurance if it looks minor',
      'Say they cannot answer clinical questions and undertake to bring the nurse back',
      'Describe what they see without an opinion',
      'Say they do not know',
    ],
    answer: 1,
    why: 'Reassurance is a clinical statement the patient will act on, and describing observations is the same statement in a thinner disguise.',
  },
  {
    id: 'ces-t5',
    q: 'Using root, prefix and suffix, what does bradycardia mean?',
    options: ['An enlarged heart', 'A slow heart rate', 'Inflammation of the heart', 'Chest pain'],
    answer: 1,
    why: 'brady is slow and cardi is heart. Assembling from parts is the skill; the word itself does not need memorising.',
  },
  {
    id: 'ces-t6',
    q: 'A note records pain in the left knee. Whose left?',
    options: ['The reader\'s, facing the patient', 'The patient\'s, always', 'It depends on the setting', 'The side nearest the examiner'],
    answer: 1,
    why: 'Sides are always the patient\'s. It is the most common positional error a learner makes and the one with the largest consequence.',
  },
  {
    id: 'ces-t7',
    q: 'A learner taking notes hears an abbreviation they are unsure of. What should they do?',
    options: [
      'Write the most likely expansion',
      'Ask for it to be repeated or expanded before recording it',
      'Write the abbreviation and move on',
      'Leave a blank and reconstruct it later',
    ],
    answer: 1,
    why: 'A record carries uncertainty forward invisibly, so a guess becomes a fact to the next reader.',
  },
  {
    id: 'ces-t8',
    q: 'What is the effect of interrupting a patient\'s first answer to clarify a detail?',
    options: [
      'It improves accuracy',
      'It truncates the story, and the uninterrupted first answer contains most of what matters',
      'No meaningful effect',
      'It saves time',
    ],
    answer: 1,
    why: 'An early clarification turns an account of their situation into a series of answers to your questions.',
  },
  {
    id: 'ces-t9',
    q: 'Which teach-back framing is most likely to reveal a real gap?',
    options: [
      '"Do you understand?"',
      '"Can you repeat that back?"',
      '"Do you have any questions?"',
      '"I want to make sure I explained that clearly. What will you tell your family about what happens next?"',
    ],
    answer: 3,
    why: 'It asks for a demonstration, places the gap on the explainer, and gives the patient a natural reason to speak.',
  },
  {
    id: 'ces-t10',
    q: 'A fluent bilingual learner could interpret faster than waiting for the professional interpreter. What should they do?',
    options: [
      'Interpret, since it serves the patient',
      'Interpret the simple parts only',
      'Wait, because clinical interpretation is a trained role and its errors are invisible in the room',
      'Ask a family member',
    ],
    answer: 2,
    why: 'Fluency is not clinical interpretation, and a mistake by an untrained interpreter is undetectable by anybody present.',
  },
];

export const CES_POST: Check[] = [
  {
    id: 'ces-p1',
    q: 'A learner has a question about a medication interaction. Which role holds that answer most directly?',
    options: ['The front desk', 'A pharmacist', 'A community health worker', 'The scheduler'],
    answer: 1,
    why: 'The value of knowing the roles is knowing who to ask. Sending each question to the most senior person present wastes the scarcest time in the building.',
  },
  {
    id: 'ces-p2',
    q: 'A learner completes HMC coursework and a supervisor sign-off. What may they accurately claim?',
    options: [
      'That they are certified in community health',
      'That they are licensed to practise in a support role',
      'That they completed HMC coursework and a supervised sign-off, which is an educational record and grants no authority',
      'That they are registered with the state',
    ],
    answer: 2,
    why: 'A completion is real evidence of learning and grants no authority. California has no state CHW certification, so the first option is a claim about a status that does not exist.',
  },
  {
    id: 'ces-p3',
    q: 'Why is scope of practice narrower than competence?',
    options: [
      'Because employers are cautious',
      'Because it is set by law and by the relevant board, so doing something well is not a defence for doing it without authority',
      'Because learners are inexperienced',
      'Because insurers require it',
    ],
    answer: 1,
    why: 'Scope is a legal boundary, not a judgement about ability, and a supervisor cannot move it by asking.',
  },
  {
    id: 'ces-p4',
    q: 'Which of these is inside a student observer\'s scope?',
    options: [
      'Taking a set of vitals they have watched many times',
      'Interpreting for a patient whose language they speak fluently',
      'Reassuring a patient that a result looks normal',
      'Sitting with a patient and making sure the right clinician comes back',
    ],
    answer: 3,
    why: 'Staying and securing the right person is inside anybody\'s scope and is frequently the most useful thing said to a patient all day. The other three are all outside it.',
  },
  {
    id: 'ces-p5',
    q: 'What does hepatomegaly mean?',
    options: ['Inflammation of the liver', 'An enlarged liver', 'Removal of the liver', 'Liver pain'],
    answer: 1,
    why: 'hepat is liver and megaly is enlargement. itis would be inflammation, ectomy removal, algia pain.',
  },
  {
    id: 'ces-p6',
    q: 'What is the difference between the suffixes ectomy and otomy?',
    options: [
      'ectomy is surgical removal and otomy is cutting into',
      'They are interchangeable',
      'ectomy is diagnostic and otomy is therapeutic',
      'otomy is removal and ectomy is repair',
    ],
    answer: 0,
    why: 'The difference between the two is an entire operation, which is why the pair is worth holding separately rather than as a family.',
  },
  {
    id: 'ces-p7',
    q: 'Why does a learner never guess at a drug name?',
    options: [
      'Because the spelling is difficult',
      'Because many look and sound alike, the consequences of confusing them are serious, and it is not a learner\'s judgement to make',
      'Because drug names change frequently',
      'Because only a pharmacist may say them',
    ],
    answer: 1,
    why: 'Look-alike and sound-alike names are a documented source of error, which is why published lists of them exist and why this is never a guess.',
  },
  {
    id: 'ces-p8',
    q: 'What does asking a patient what they are worried about add, over asking what is wrong?',
    options: [
      'Nothing, they are the same question',
      'It surfaces the concern driving the visit, which is frequently different and which almost nobody has asked them',
      'It shortens the conversation',
      'It is a clinical assessment',
    ],
    answer: 1,
    why: 'The worry and the complaint are often different things, and the worry is usually the reason they came today rather than last month.',
  },
  {
    id: 'ces-p9',
    q: 'Which is a rule for working with a professional interpreter?',
    options: [
      'Address the interpreter, who will relay it',
      'Use long passages so the interpreter has full context',
      'Speak to the patient in the first person, in short segments, and never use a child',
      'Use a family member where one is available',
    ],
    answer: 2,
    why: 'Long passages guarantee compression, and compression is where meaning is lost. A child must never be used, for the child\'s sake and for reliability.',
  },
  {
    id: 'ces-p10',
    q: 'A patient discloses something to a learner indicating possible harm at home. What is correct?',
    options: [
      'Ask enough questions to understand it first',
      'Reassure and watch for recurrence',
      'Advise the patient to raise it with their doctor',
      'Tell the clinician or supervisor the same day, without assessing severity',
    ],
    answer: 3,
    why: 'A learner notices and hands over. Investigating shapes an account somebody trained will need intact, and leaving it to the patient means it may reach nobody.',
  },
];

export const CES_FOUNDATION_COURSES: Course[] = [
  TEAM_ROLES_AND_SCOPE,
  MEDICAL_TERMINOLOGY,
  PATIENT_COMMUNICATION,
];
