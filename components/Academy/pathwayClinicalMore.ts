// Clinical Exposure + Simulation, courses 4 to 15: community-centered clinical care, vitals and screening
// concepts, infection prevention, documentation and scribing concepts, social needs, trauma-informed
// encounters, referral and follow-up, three simulation cases, the debrief, and the competency review.
//
// Every course is written for a learner, not a clinician. A learner observes, asks, and reports to
// licensed staff. Nothing here teaches a learner to measure, interpret, diagnose, or advise without
// supervision, and each course says so. This pathway waits on review by HMC's PMHNP before it is
// opened to members, because clinical content is where an uncaught error does the most harm.

import type { Course, Check } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });
const SCOPE = 'Your clinic\'s protocols and your supervisor\'s instructions take precedence over this course. A learner observes, asks, and reports to licensed staff.';

type L = { title: string; summary: string; minutes: number; blocks: Block[] };
const sp = (o: {
  id: string; num: number; title: string; promise: string; about: string[]; objectives: string[];
  minutes: number; prerequisites: string; whoFor: string; lessons: L[]; further: { name: string; use: string; url: string }[];
}): Course => ({
  id: o.id, num: o.num, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: o.title, promise: o.promise, about: o.about, objectives: o.objectives, minutes: o.minutes,
  prerequisites: o.prerequisites, whoFor: o.whoFor, freshness: SCOPE,
  lessons: o.lessons.map((l, i) => ({ id: `${o.id}-l${i + 1}`, ...l })),
  checks: [], furtherLearning: o.further,
});

const ck = (id: string, q: string, options: string[], answer: number, rationale: string, distractors: string): Block =>
  ({ kind: 'check', check: { id, q, options, answer, rationale, distractors } });

export const CES_COMMUNITY_CARE = sp({
  id: 'ces-4', num: 4, title: 'Community-Centered Clinical Care',
  promise: 'Describe what good clinical care looks like from the patient\'s side, and where a learner fits in the team.',
  about: ['Care is better when it is built around the person and their community, not only their diagnosis. This course gives you the language and the habits.', 'You are a learner. Your job is to observe, ask, and learn how the team works.'],
  objectives: ['Name the six aims of quality care.', 'Describe patient-centered care in plain terms.', 'Explain how community context shapes care.', 'Describe a learner\'s role on a team.'],
  minutes: 10, prerequisites: 'Healthcare Team Roles + Scope.', whoFor: 'Students, volunteers, and learners preparing for time in a clinic.',
  lessons: [
    { title: 'What quality care means', summary: 'Six aims from the Institute of Medicine.', minutes: 3, blocks: [
      { kind: 'prose', text: ['The Institute of Medicine, in Crossing the Quality Chasm (2001), said care should be safe, effective, patient-centered, timely, efficient, and equitable. Those six words are a useful checklist for anything you observe.'] },
      { kind: 'steps', title: 'Six aims', items: [
        { label: 'Safe', text: 'Care does not harm the person it is meant to help.' },
        { label: 'Effective', text: 'Care is based on evidence.' },
        { label: 'Patient-centered', text: 'Care respects the person\'s values and choices.' },
        { label: 'Timely', text: 'Waits and delays are reduced.' },
        { label: 'Efficient', text: 'Care avoids waste.' },
        { label: 'Equitable', text: 'Care does not vary by who the person is or where they live.' },
      ] },
      ck('ces-4-c1', 'Which aim means care respects a person\'s values and choices?', ['Safe', 'Patient-centered', 'Timely', 'Efficient'], 1, 'Patient-centered care is built around the person\'s preferences, needs, and values.', 'The others describe safety, speed, and waste.'),
      ev(['Institute of Medicine, Crossing the Quality Chasm (2001): six aims for improvement.', 'AHRQ, Patient- and Family-Centered Care: principles and practice.', 'California HCAI, CHW/P/R Training Program Best Practices Framework: roles on the care team.']),
    ] },
    { title: 'Community context', summary: 'Why the same condition needs different care in different places.', minutes: 3, blocks: [
      { kind: 'prose', text: ['Two patients with the same diagnosis can need different plans. One has a car and paid leave. The other takes two buses and loses a day\'s pay. Community-centered care asks about the setting, not only the symptom.'] },
      { kind: 'list', title: 'Questions a team may ask', items: ['How will you get to your next visit?', 'Can you afford the medication and the supplies?', 'Who helps you at home?', 'Is there anything that would make this plan hard to follow?'] },
      ck('ces-4-c2', 'Why does community context matter in care?', ['It does not', 'The same plan may not work in every setting or situation', 'It is only for social workers', 'It replaces the diagnosis'], 1, 'A plan that cannot be followed does not help. Context decides what is possible.', 'Context shapes the plan; it does not replace the diagnosis.'),
      ev(['Healthy People 2030, Social Determinants of Health: how conditions shape health.', 'AHRQ, Patient- and Family-Centered Care.', 'Institute of Medicine (2001).']),
    ] },
    { title: 'Your place on the team', summary: 'Observe, ask, report.', minutes: 4, blocks: [
      { kind: 'steps', title: 'What a learner does', items: [
        { label: 'Observe', text: 'Watch how the team talks with patients and each other.' },
        { label: 'Ask', text: 'Questions go to your supervisor, away from the patient.' },
        { label: 'Report', text: 'Tell licensed staff what you noticed. They decide what it means.' },
        { label: 'Stay within scope', text: 'Do not measure, interpret, or advise unless you have been trained and are supervised.' },
      ] },
      ck('ces-4-c3', 'A patient asks you what their test result means. What do you do?', ['Explain it', 'Say you are a learner and ask a licensed team member to talk with them', 'Guess', 'Ignore them'], 1, 'Interpretation belongs to licensed staff. Connect the patient to the right person.', 'Guessing or ignoring puts the patient at risk.'),
      ev(['California HCAI, CHW/P/R Training Program Best Practices Framework: scope and supervision.', 'Institute of Medicine (2001).', 'AHRQ, TeamSTEPPS: teamwork and communication in health care.']),
    ] },
  ],
  further: [
    { name: 'AHRQ: Patient- and Family-Centered Care', use: 'Principles of person-centered care.', url: 'https://www.ahrq.gov' },
    { name: 'Healthy People 2030: Social Determinants of Health', use: 'How conditions shape health.', url: 'https://health.gov' },
    { name: 'AHRQ: TeamSTEPPS', use: 'Team communication in health care.', url: 'https://www.ahrq.gov' },
  ],
});

export const CES_VITALS = sp({
  id: 'ces-5', num: 5, title: 'Vitals + Screening Concepts',
  promise: 'Explain what vital signs and screenings are for, who measures them, and what a learner does and does not do.',
  about: ['Vital signs and screenings are basic tools of care. Understanding what they are for helps you follow what a team is doing and why.', 'This course is about concepts. It does not teach you to take or interpret measurements. Trained staff do that.'],
  objectives: ['Name the common vital signs and what each shows.', 'Tell screening from diagnosis.', 'Explain why accurate recording matters.', 'State what a learner does and does not do.'],
  minutes: 9, prerequisites: 'Community-Centered Clinical Care.', whoFor: 'Students, volunteers, and learners preparing for time in a clinic.',
  lessons: [
    { title: 'The vital signs', summary: 'What they are and why they are measured.', minutes: 3, blocks: [
      { kind: 'steps', title: 'The common ones', items: [
        { label: 'Temperature', text: 'Shows whether the body may be fighting an infection or is overheated or too cold.' },
        { label: 'Pulse', text: 'How fast and regular the heart is beating.' },
        { label: 'Breathing rate', text: 'How many breaths a minute, and whether breathing looks easy or hard.' },
        { label: 'Blood pressure', text: 'The force of blood against artery walls. High pressure over time raises the risk of heart disease and stroke.' },
        { label: 'Oxygen saturation', text: 'How much oxygen the blood is carrying.' },
        { label: 'Pain', text: 'Reported by the person, often on a scale.' },
      ] },
      ck('ces-5-c1', 'What does blood pressure describe?', ['Body temperature', 'The force of blood against artery walls', 'Breathing speed', 'Oxygen level'], 1, 'Blood pressure is the force of circulating blood on artery walls.', 'The others are other vital signs.'),
      ev(['Whelton et al., 2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults: why blood pressure is measured.', 'CDC, High Blood Pressure: facts and risks.', 'World Health Organization, Pulse oximetry training manual: what oxygen saturation shows.']),
    ] },
    { title: 'Screening is not diagnosis', summary: 'What a screening can and cannot tell you.', minutes: 3, blocks: [
      { kind: 'prose', text: ['A screening looks for a possible problem in people who may have no symptoms. A positive screen means more testing is needed. It is not a diagnosis. The U.S. Preventive Services Task Force reviews the evidence on which screenings help.'] },
      ck('ces-5-c2', 'What does a positive screening result mean?', ['A diagnosis', 'More evaluation by a clinician is needed', 'Nothing', 'A treatment plan'], 1, 'Screening identifies who needs more testing. A clinician decides what it means.', 'A screen alone does not diagnose or treat.'),
      ev(['U.S. Preventive Services Task Force, Recommendations: which screenings are supported by evidence.', 'CDC, Screening tests: what screening means.', 'Institute of Medicine (2001).']),
    ] },
    { title: 'Accuracy and scope', summary: 'Why a wrong number is not harmless.', minutes: 3, blocks: [
      { kind: 'list', title: 'For a learner', items: ['Do not measure or interpret unless you have been trained and are supervised.', 'If you see a number that worries you, tell licensed staff right away.', 'Never record a number you did not observe.', 'Report, do not reassure: "I will let the nurse know."'] },
      ck('ces-5-c3', 'You see a reading that looks very high. What do you do?', ['Tell the patient it is fine', 'Tell licensed staff right away', 'Wait', 'Change the number'], 1, 'Report to licensed staff at once. They decide what to do.', 'Reassuring, waiting, or altering a number can harm the patient.'),
      ev(['California HCAI, CHW/P/R Training Program Best Practices Framework: scope and supervision.', 'U.S. HHS, HIPAA Privacy Rule: accurate and protected records.', 'Whelton et al. (2017).']),
    ] },
  ],
  further: [
    { name: 'U.S. Preventive Services Task Force', use: 'Evidence-based screening recommendations.', url: 'https://www.uspreventiveservicestaskforce.org' },
    { name: 'CDC: High Blood Pressure', use: 'Facts about blood pressure.', url: 'https://www.cdc.gov' },
    { name: 'American Heart Association', use: 'Plain-language guidance on blood pressure.', url: 'https://www.heart.org' },
  ],
});

export const CES_INFECTION = sp({
  id: 'ces-6', num: 6, title: 'Infection Prevention + PPE',
  promise: 'Protect patients and yourself: clean your hands at the right moments and wear protective equipment the way your clinic requires.',
  about: ['Infection prevention is the most basic safety skill in a clinic. It is simple, and it fails when people rush.', 'Your clinic trains you on its equipment and procedures. This course gives you the reasons and the sequence.'],
  objectives: ['Clean your hands at the five key moments.', 'Describe standard precautions.', 'Describe the order for putting on and taking off protective equipment.', 'Respond correctly to a spill or an exposure.'],
  minutes: 9, prerequisites: 'Community-Centered Clinical Care.', whoFor: 'Students, volunteers, and learners preparing for time in a clinic.',
  lessons: [
    { title: 'Hand hygiene', summary: 'Five moments that matter.', minutes: 3, blocks: [
      { kind: 'steps', title: 'The five moments, from the World Health Organization', items: [
        { label: 'Before touching a patient', text: 'Protects the patient from germs on your hands.' },
        { label: 'Before a clean or sterile procedure', text: 'Prevents germs from entering the body.' },
        { label: 'After body fluid exposure risk', text: 'Protects you and the next person.' },
        { label: 'After touching a patient', text: 'Protects you and the environment.' },
        { label: 'After touching their surroundings', text: 'Bed rails, equipment, and surfaces carry germs.' },
      ] },
      ck('ces-6-c1', 'When should you clean your hands?', ['Only when they look dirty', 'Before and after patient contact, among other key moments', 'Once a shift', 'Only after using the bathroom'], 1, 'Hand hygiene is needed at specific moments, whether or not hands look dirty.', 'Waiting for visible dirt misses most risk.'),
      ev(['World Health Organization, My 5 Moments for Hand Hygiene.', 'CDC, Hand Hygiene in Healthcare Settings: when and how.', 'CDC, Core Infection Prevention and Control Practices for Safe Healthcare Delivery in All Settings.']),
    ] },
    { title: 'Standard precautions and PPE', summary: 'Treat every patient the same way, protectively.', minutes: 3, blocks: [
      { kind: 'prose', text: ['Standard precautions assume any person may carry an infection you cannot see. They include hand hygiene, respiratory etiquette, safe handling of sharps and waste, and the right protective equipment for the task.'] },
      { kind: 'steps', title: 'Putting on equipment, in the CDC order', items: [
        { label: 'Gown', text: 'Tie at the neck and waist.' },
        { label: 'Mask or respirator', text: 'Fit it snugly over nose and mouth.' },
        { label: 'Goggles or face shield', text: 'Over the mask.' },
        { label: 'Gloves', text: 'Over the cuffs of the gown.' },
      ] },
      ck('ces-6-c2', 'What are standard precautions?', ['Steps used only for known infections', 'Practices used with every patient because infection may not be visible', 'Rules for visitors', 'A type of mask'], 1, 'Standard precautions apply to everyone.', 'They are not limited to known infections.'),
      ev(['CDC, Sequence for Putting On Personal Protective Equipment.', 'CDC, Standard Precautions for All Patient Care.', 'OSHA, Bloodborne Pathogens Standard.']),
    ] },
    { title: 'Taking it off and what to do after an exposure', summary: 'The risky moment, and the first minutes after a spill or stick.', minutes: 3, blocks: [
      { kind: 'list', title: 'Remember', items: ['Gloves come off first, since they are the most contaminated, then goggles, gown, and mask, with hand hygiene after.', 'Do not touch your face while wearing used equipment.', 'After a needlestick or a splash to eyes, nose, or mouth, wash or flush right away and report to your supervisor at once.'] },
      ck('ces-6-c3', 'You are splashed in the eye. What do you do?', ['Keep working', 'Flush the eye right away and report to your supervisor', 'Wait until the shift ends', 'Wipe it with a sleeve'], 1, 'Flush immediately and report. Exposures need prompt evaluation.', 'Delay raises risk.'),
      ev(['CDC, Sequence for Removing Personal Protective Equipment.', 'OSHA, Bloodborne Pathogens Standard: exposure response.', 'CDC, Core Infection Prevention and Control Practices.']),
    ] },
  ],
  further: [
    { name: 'CDC: Hand Hygiene in Healthcare Settings', use: 'When and how to clean hands.', url: 'https://www.cdc.gov' },
    { name: 'WHO: My 5 Moments for Hand Hygiene', use: 'The five moments with examples.', url: 'https://www.who.int' },
    { name: 'OSHA: Bloodborne Pathogens', use: 'Workplace safety standard.', url: 'https://www.osha.gov' },
  ],
});

export const CES_DOCUMENTATION = sp({
  id: 'ces-7', num: 7, title: 'Clinical Documentation + Scribing Concepts',
  promise: 'Understand what a clinical note contains, why accuracy and privacy matter, and what a scribe does and does not do.',
  about: ['A clinical note is how a team shares what it knows. Scribes help clinicians keep notes accurate without losing time with patients.', 'Learners in this pathway observe and learn the structure. They do not write into a record unless they are trained and supervised.'],
  objectives: ['Describe the parts of a clinical note.', 'Explain why abbreviations and accuracy matter.', 'Describe a scribe\'s role and limits.', 'Protect privacy in documentation.'],
  minutes: 8, prerequisites: 'Community-Centered Clinical Care.', whoFor: 'Students, scribes, and volunteers who will see clinical notes.',
  lessons: [
    { title: 'The parts of a note', summary: 'SOAP and why it is used.', minutes: 3, blocks: [
      { kind: 'steps', title: 'SOAP, from Lawrence Weed\'s problem-oriented record', items: [
        { label: 'Subjective', text: 'What the patient says: symptoms and history.' },
        { label: 'Objective', text: 'What the clinician observes and measures.' },
        { label: 'Assessment', text: 'The clinician\'s judgment about what is going on.' },
        { label: 'Plan', text: 'What happens next: tests, treatment, and follow-up.' },
      ] },
      ck('ces-7-c1', 'In SOAP, which part is the clinician\'s judgment?', ['Subjective', 'Objective', 'Assessment', 'Plan'], 2, 'Assessment is the clinician\'s interpretation of the information.', 'Subjective and objective are information; plan is what to do.'),
      ev(['Weed, "Medical Records That Guide and Teach," New England Journal of Medicine (1968): the problem-oriented record.', 'CMS, Evaluation and Management Documentation Guidelines.', 'American Medical Association, Medical scribe resources.']),
    ] },
    { title: 'Accuracy and abbreviations', summary: 'Small errors can have large effects.', minutes: 2, blocks: [
      { kind: 'prose', text: ['A misread abbreviation can lead to a wrong medication or dose. The Joint Commission maintains an official "Do Not Use" list of abbreviations, such as "U" for units and "QD" for daily, because they are too often mistaken for something else.'] },
      { kind: 'list', title: 'Habits', items: ['Write out words when in doubt.', 'Record only what was said, observed, or done.', 'Never guess or fill in a missing value.', 'Correct errors openly and according to clinic policy.'] },
      ck('ces-7-c2', 'You are unsure what an abbreviation means. What do you do?', ['Guess', 'Ask the clinician before recording', 'Leave it out', 'Make one up'], 1, 'Ask. A wrong guess in a record can cause harm.', 'Guessing or omitting creates risk.'),
      ev(['The Joint Commission, Official "Do Not Use" List of Abbreviations.', 'Institute for Safe Medication Practices, List of Error-Prone Abbreviations.', 'Weed (1968).']),
    ] },
    { title: 'Privacy and the scribe role', summary: 'What you may see, and what you may do.', minutes: 3, blocks: [
      { kind: 'list', title: 'Rules', items: ['Access only the records your role needs.', 'Never discuss patients where others can hear.', 'Do not photograph screens, notes, or labels.', 'A scribe records what the clinician says and does. The clinician reviews and signs.'] },
      ck('ces-7-c3', 'Who is responsible for the final content of a note?', ['The scribe', 'The clinician who reviews and signs it', 'The patient', 'The front desk'], 1, 'The clinician is responsible for the record and signs it.', 'A scribe assists but does not own the note.'),
      ev(['U.S. HHS, HIPAA Privacy Rule: minimum necessary standard.', 'American Medical Association, Medical scribes: roles and responsibilities.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
    ] },
  ],
  further: [
    { name: 'The Joint Commission: Do Not Use List', use: 'Abbreviations to avoid.', url: 'https://www.jointcommission.org' },
    { name: 'U.S. HHS: HIPAA Privacy Rule', use: 'Privacy basics.', url: 'https://www.hhs.gov' },
    { name: 'ISMP: Error-Prone Abbreviations', use: 'A longer list.', url: 'https://www.ismp.org' },
  ],
});

export const CES_SOCIAL = sp({
  id: 'ces-8', num: 8, title: 'Social Needs in Clinical Care',
  promise: 'Recognize how housing, food, transport, and money shape health, and describe how a clinic asks about and responds to them.',
  about: ['A prescription does not help if a person cannot reach the pharmacy. Clinics increasingly ask about social needs so they can connect people to help.', 'You will learn how screening works and what a learner may do.'],
  objectives: ['Name common social needs that affect health.', 'Describe how a clinic screens for them.', 'Explain how referral to community help works.', 'Ask and respond respectfully.'],
  minutes: 7, prerequisites: 'Community-Centered Clinical Care.', whoFor: 'Students, volunteers, and learners preparing for time in a clinic.',
  lessons: [
    { title: 'What social needs are', summary: 'The conditions around the visit.', minutes: 2, blocks: [
      { kind: 'list', title: 'Common needs', items: ['Housing instability or homelessness.', 'Food insecurity.', 'Transportation.', 'Utilities.', 'Interpersonal safety.'] },
      { kind: 'prose', text: ['The Centers for Medicare & Medicaid Services tested a screening tool in the Accountable Health Communities model that asks about housing, food, transportation, utilities, and safety. PRAPARE, developed by community health centers, covers similar ground.'] },
      ck('ces-8-c1', 'Which is a social need that can affect health?', ['Housing instability', 'Hair color', 'Favorite food', 'Shoe size'], 0, 'Housing, food, transport, utilities, and safety all shape health.', 'The others do not.'),
      ev(['CMS, Accountable Health Communities Health-Related Social Needs Screening Tool.', 'National Association of Community Health Centers, PRAPARE.', 'Healthy People 2030, Social Determinants of Health.']),
    ] },
    { title: 'How a clinic asks', summary: 'Consent, privacy, and choice.', minutes: 2, blocks: [
      { kind: 'list', title: 'Good practice', items: ['Explain why you are asking and that answers do not change the care.', 'Offer privacy and the choice to skip a question.', 'Use plain words.', 'Do not ask about immigration status.'] },
      ck('ces-8-c2', 'How should a social needs question be introduced?', ['Abruptly', 'By explaining why you ask and offering choice and privacy', 'In public', 'As a requirement for care'], 1, 'People answer more honestly when they know why you ask and can choose.', 'Pressure and publicity reduce trust.'),
      ev(['CMS, Accountable Health Communities model: screening and navigation.', 'SAMHSA, TIP 57: choice and trust.', 'National CLAS Standards (2013).']),
    ] },
    { title: 'From screening to help', summary: 'Referral, handoff, and follow-up.', minutes: 3, blocks: [
      { kind: 'steps', title: 'Steps', items: [
        { label: 'Identify the need', text: 'With the person, in their words.' },
        { label: 'Match to a resource', text: 'A food program, a housing line, or a transport benefit.' },
        { label: 'Hand off warmly', text: 'Introduce the person, do not only give a number.' },
        { label: 'Follow up', text: 'Check whether the person connected.' },
      ] },
      ck('ces-8-c3', 'What makes a referral stronger?', ['A phone number on paper', 'A warm handoff and follow-up', 'A pamphlet', 'A suggestion'], 1, 'A warm handoff and follow-up improve the chance the person connects.', 'Information alone often fails.'),
      ev(['CMS, Accountable Health Communities model.', 'The Community Guide, Community Health Workers: navigation and follow-up.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
    ] },
  ],
  further: [
    { name: 'CMS: Accountable Health Communities Model', use: 'The screening tool and model.', url: 'https://www.cms.gov' },
    { name: 'PRAPARE', use: 'A social needs screening tool.', url: 'https://prapare.org' },
    { name: '211 Los Angeles County', use: 'Local services.', url: 'https://211la.org' },
  ],
});

export const CES_TRAUMA = sp({
  id: 'ces-9', num: 9, title: 'Trauma-Informed Clinical Encounters',
  promise: 'Understand how past harm affects a clinical visit, and use habits that give patients safety and control.',
  about: ['A clinic can feel threatening: a closed door, an unfamiliar touch, a gown. For people with histories of trauma, those moments can bring the past back.', 'Trauma-informed care changes the visit so the patient feels safe.'],
  objectives: ['Describe how trauma can affect a clinical visit.', 'Explain the ACE research in plain terms.', 'List practical ways to give patients control.', 'Know your limits as a learner.'],
  minutes: 8, prerequisites: 'Community-Centered Clinical Care.', whoFor: 'Students, volunteers, and learners preparing for time in a clinic.',
  lessons: [
    { title: 'Why it matters in a clinic', summary: 'Adverse experiences and health.', minutes: 3, blocks: [
      { kind: 'prose', text: ['The Adverse Childhood Experiences study by Vincent Felitti and colleagues (1998) found that harmful experiences in childhood were linked to later health problems. SAMHSA describes trauma-informed care as realizing the widespread impact of trauma, recognizing its signs, responding with changed practices, and resisting re-traumatization.'] },
      ck('ces-9-c1', 'What is the aim of trauma-informed care?', ['To ask about every trauma', 'To change practice so patients feel safe and in control', 'To diagnose', 'To speed up visits'], 1, 'It changes how care is delivered, not only what is asked.', 'It does not require asking for stories.'),
      ev(['Felitti et al., "Relationship of Childhood Abuse and Household Dysfunction to Many of the Leading Causes of Death in Adults," American Journal of Preventive Medicine (1998).', 'SAMHSA, Concept of Trauma and Guidance for a Trauma-Informed Approach (2014).', 'SAMHSA, TIP 57.']),
    ] },
    { title: 'Giving control', summary: 'Practical habits in an exam setting.', minutes: 2, blocks: [
      { kind: 'list', title: 'What helps', items: ['Explain what will happen before it happens.', 'Ask permission before touch, and wait for an answer.', 'Offer a chaperone or a support person.', 'Allow the person to stop or pause.', 'Offer choices about position and clothing.'] },
      ck('ces-9-c2', 'Before an exam, what helps a patient feel safe?', ['Proceeding quickly', 'Explaining what will happen and asking permission', 'Not telling them anything', 'Closing the door and leaving'], 1, 'Explanation and consent give the patient control.', 'Surprises and speed can re-traumatize.'),
      ev(['SAMHSA, TIP 57: principles of safety, choice, and control.', 'American College of Obstetricians and Gynecologists, Caring for Patients Who Have Experienced Trauma (Committee Opinion 825, 2021).', 'SAMHSA (2014).']),
    ] },
    { title: 'Your role', summary: 'Noticing and reporting, not probing.', minutes: 3, blocks: [
      { kind: 'list', title: 'As a learner', items: ['Do not ask about trauma history.', 'If a patient shows distress, tell the clinician and stay calm and kind.', 'If a patient discloses harm, tell your supervisor right away.', 'Look after yourself after hard encounters.'] },
      ck('ces-9-c3', 'A patient becomes distressed during a visit. What do you do?', ['Ask what happened', 'Stay calm, and tell the clinician', 'Leave', 'Tell them to calm down'], 1, 'Stay with the person and involve the clinician.', 'Probing or dismissing can make things worse.'),
      ev(['SAMHSA, TIP 57.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.', 'SAMHSA (2014).']),
    ] },
  ],
  further: [
    { name: 'SAMHSA: Trauma-Informed Care in Behavioral Health Services (TIP 57)', use: 'The principles of trauma-informed care.', url: 'https://www.samhsa.gov' },
    { name: 'CDC: Adverse Childhood Experiences', use: 'What the research shows.', url: 'https://www.cdc.gov' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988.', url: 'https://988lifeline.org' },
  ],
});

export const CES_REFERRAL = sp({
  id: 'ces-10', num: 10, title: 'Referral + Follow-Up Planning',
  promise: 'Explain how a referral should be completed and followed up, and the part a learner can play.',
  about: ['A referral is not finished when it is written. It is finished when the patient has been seen and the result is back with the team.', 'Closing the loop is one of the most common gaps in care.'],
  objectives: ['Describe what closing the loop means.', 'Name information a referral must include.', 'Describe warm handoffs and follow-up.', 'Describe what a learner may do.'],
  minutes: 8, prerequisites: 'Social Needs in Clinical Care.', whoFor: 'Students, volunteers, and learners preparing for time in a clinic.',
  lessons: [
    { title: 'Closing the loop', summary: 'Why referrals fail.', minutes: 3, blocks: [
      { kind: 'prose', text: ['AHRQ describes care coordination as deliberately organizing patient care activities and sharing information so care is safer and more effective. A referral that is sent but never completed is a coordination failure, and patients often do not know it happened.'] },
      { kind: 'steps', title: 'The loop', items: [
        { label: 'Order', text: 'The clinician decides a referral is needed.' },
        { label: 'Send', text: 'Information goes to the receiving provider.' },
        { label: 'Schedule', text: 'The patient has a date and a way to get there.' },
        { label: 'Result', text: 'The result returns and is reviewed.' },
      ] },
      ck('ces-10-c1', 'When is a referral complete?', ['When it is written', 'When the patient has been seen and the result returns to the team', 'When it is sent', 'When the patient is told'], 1, 'Closing the loop means the result is back and acted on.', 'Sending or telling is not completion.'),
      ev(['AHRQ, Care Coordination Measures Atlas: definition of care coordination.', 'AHRQ, Closing the Referral Loop: tools and strategies.', 'Institute of Medicine (2001).']),
    ] },
    { title: 'What a referral needs', summary: 'Who, why, when, and how.', minutes: 2, blocks: [
      { kind: 'list', title: 'A referral includes', items: ['Who the patient is and how to reach them.', 'The reason for the referral.', 'How urgent it is.', 'What the patient needs to get there.', 'Who to call with questions.'] },
      ck('ces-10-c2', 'What should a referral state?', ['Only the name', 'The reason, urgency, and how to reach the patient', 'The patient\'s opinion of the clinic', 'Nothing'], 1, 'The receiving provider needs the reason, urgency, and a way to reach the patient.', 'Missing information delays care.'),
      ev(['AHRQ, Closing the Referral Loop.', 'CMS, Documentation Guidelines.', 'The Joint Commission, Handoff communication.']),
    ] },
    { title: 'Follow-up and a learner\'s part', summary: 'Checking in, within your role.', minutes: 3, blocks: [
      { kind: 'steps', title: 'Follow-up', items: [
        { label: 'Set a date', text: 'Agree when someone will check.' },
        { label: 'Ask simply', text: '"Were you able to get to your appointment?"' },
        { label: 'Report', text: 'Tell the team what you learned.' },
        { label: 'Escalate', text: 'If a patient reports a worsening problem, tell licensed staff right away.' },
      ] },
      ck('ces-10-c3', 'A patient says their symptoms are getting worse. What do you do?', ['Reassure them', 'Tell licensed staff right away', 'Wait for the next visit', 'Advise them'], 1, 'A worsening problem needs prompt clinical attention.', 'Reassurance or delay can harm.'),
      ev(['AHRQ, Care Coordination Measures Atlas.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.', 'The Community Guide, Community Health Workers.']),
    ] },
  ],
  further: [
    { name: 'AHRQ: Care Coordination', use: 'Definitions and tools.', url: 'https://www.ahrq.gov' },
    { name: 'The Community Guide: Community Health Workers', use: 'Evidence for follow-up.', url: 'https://thecommunityguide.org/content/community-health-workers' },
    { name: '211 Los Angeles County', use: 'Local services.', url: 'https://211la.org' },
  ],
});

const eventCourse = (o: {
  id: string; num: number; title: string; promise: string; about: string[]; objectives: string[];
  minutes: number; prerequisites: string; whoFor: string; exam?: Check[];
  requirements: { id: string; label: string; detail: string; kind: 'attend' | 'assignment' | 'practicum' | 'evaluation' }[];
  lessons: L[];
}): Course => ({
  id: o.id, num: o.num, standard: 'v2', readingLevel: 'adult', delivery: 'practical', modality: 'in-person',
  title: o.title, promise: o.promise, about: o.about, objectives: o.objectives, minutes: o.minutes,
  prerequisites: o.prerequisites, whoFor: o.whoFor, requirements: o.requirements, freshness: SCOPE,
  ...(o.exam ? { exam: { questions: o.exam, passPercent: 80 } } : {}),
  lessons: o.lessons.map((l, i) => ({ id: `${o.id}-l${i + 1}`, ...l })),
  checks: [],
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Scope and supervision.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'AHRQ: TeamSTEPPS', use: 'Team communication.', url: 'https://www.ahrq.gov' },
    { name: 'SAMHSA: Trauma-Informed Care in Behavioral Health Services (TIP 57)', use: 'Safety and choice.', url: 'https://www.samhsa.gov' },
  ],
});

const simReqs = (n: number) => [
  { id: `sim${n}-attend`, kind: 'attend' as const, label: 'Attend the simulation session', detail: 'A facilitated session with a standardized patient or a scripted scenario. Learners observe, ask, and report. They do not give care.' },
  { id: `sim${n}-worksheet`, kind: 'assignment' as const, label: 'Complete the case worksheet', detail: 'What you noticed, what you reported, and what you would ask.' },
  { id: `sim${n}-debrief`, kind: 'evaluation' as const, label: 'Take part in the debrief', detail: 'A facilitated conversation after the case.' },
];

export const CES_SIM1 = eventCourse({
  id: 'ces-11', num: 11, title: 'Simulation Case 1: Chronic Disease + Access Barriers',
  promise: 'Practice noticing, asking, and reporting in a case where a person with a long-term condition cannot easily follow the plan.',
  about: ['In this scripted case, a patient with high blood pressure and diabetes has missed visits and refills. The team learns why.', 'You observe, ask permitted questions, and report to the clinician.'],
  objectives: ['Notice barriers to following a plan.', 'Ask open, respectful questions within scope.', 'Report what you noticed to licensed staff.', 'Recognize when to escalate.'],
  minutes: 45, prerequisites: 'Courses 1 to 10 of this pathway.', whoFor: 'Learners preparing for time in a clinic.',
  requirements: simReqs(1),
  lessons: [
    { title: 'The case', summary: 'Who the patient is and what the team knows.', minutes: 15, blocks: [
      { kind: 'prose', text: ['Mr. Reyes, 58, has high blood pressure and diabetes. He has missed two visits and says his medicine ran out. He works nights and takes two buses to the clinic.'] },
      { kind: 'list', title: 'What a learner may notice', items: ['He looks tired and mentions missing sleep.', 'He says the pharmacy closes before he can get there.', 'He is worried about missing work.'] },
      ck('ces-11-c1', 'What may be behind the missed visits?', ['Lack of interest', 'Work hours, transport, and pharmacy access', 'Nothing', 'Dislike of the clinic'], 1, 'The case points to access barriers, not a lack of interest.', 'Assuming disinterest misses the cause.'),
      ev(['Healthy People 2030, Social Determinants of Health.', 'CMS, Accountable Health Communities Health-Related Social Needs Screening Tool.', 'AHRQ, Patient- and Family-Centered Care.']),
    ] },
    { title: 'What you do and report', summary: 'Observe, ask, report.', minutes: 15, blocks: [
      { kind: 'steps', title: 'In the session', items: [
        { label: 'Observe', text: 'Note what the patient says and how he seems.' },
        { label: 'Ask', text: '"What makes it hard to get your medicine?" Open, respectful, and within your role.' },
        { label: 'Report', text: 'Tell the clinician: "He says the pharmacy closes before he gets off work."' },
        { label: 'Do not', text: 'Do not advise on medicine or tell him to change anything.' },
      ] },
      ck('ces-11-c2', 'What do you report to the clinician?', ['Your opinion of him', 'What he said about the pharmacy and his work hours', 'A diagnosis', 'Nothing'], 1, 'Report facts the team can act on.', 'Opinions and diagnoses are outside your role.'),
      ev(['California HCAI, CHW/P/R Training Program Best Practices Framework.', 'AHRQ, Care Coordination Measures Atlas.', 'Miller and Rollnick, Motivational Interviewing (2013): open questions.']),
    ] },
    { title: 'Escalate when', summary: 'What needs a clinician right away.', minutes: 15, blocks: [
      { kind: 'list', title: 'Tell licensed staff immediately if', items: ['He reports chest pain, severe headache, confusion, or trouble breathing.', 'He reports very high or very low blood sugar symptoms.', 'He says he has stopped his medicine and feels unwell.'] },
      { kind: 'reflect', title: 'After the case', prompts: ['What barrier surprised you?', 'What would you report first?'] },
      ev(['CDC, Diabetes and High Blood Pressure: warning signs.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.', 'Whelton et al., 2017 ACC/AHA Guideline.']),
    ] },
  ],
});

export const CES_SIM2 = eventCourse({
  id: 'ces-12', num: 12, title: 'Simulation Case 2: Mental Health / Substance Use + Safety',
  promise: 'Practice responding to a person in distress and escalating safely, within a learner\'s role.',
  about: ['In this scripted case, a patient says they have not been sleeping, have been using more, and "cannot do this anymore." The team responds.', 'Learners practice staying calm, asking directly about safety, and getting a clinician at once.'],
  objectives: ['Recognize warning signs.', 'Ask directly about safety and stay with the person.', 'Escalate to licensed staff and crisis resources.', 'Use language without stigma.'],
  minutes: 45, prerequisites: 'Courses 1 to 10 of this pathway.', whoFor: 'Learners preparing for time in a clinic.',
  requirements: simReqs(2),
  lessons: [
    { title: 'The case', summary: 'What the patient says and does.', minutes: 15, blocks: [
      { kind: 'prose', text: ['Ms. Okafor, 34, arrives for a refill. She is tearful, says she has not slept in days, and says she has been using more. When asked how she is, she says, "I cannot do this anymore."'] },
      ck('ces-12-c1', 'What is the first priority?', ['Finishing the refill', 'Her safety, by staying with her and getting a clinician', 'Asking about drug use', 'Ending the visit'], 1, 'A statement like this requires attention to safety first.', 'Paperwork and probing come after safety.'),
      ev(['988 Suicide and Crisis Lifeline: asking about suicide.', 'SAMHSA, Suicide prevention: warning signs.', 'Mental Health First Aid USA: the ALGEE action plan.']),
    ] },
    { title: 'What you do', summary: 'Stay, ask, get help.', minutes: 15, blocks: [
      { kind: 'steps', title: 'In the session', items: [
        { label: 'Stay', text: 'Do not leave her alone.' },
        { label: 'Ask directly', text: '"Are you thinking about hurting yourself?" Asking does not plant the idea.' },
        { label: 'Get a clinician', text: 'Tell licensed staff now, and use the clinic\'s crisis steps, including 988 or 911.' },
        { label: 'Use respectful words', text: '"A person who uses drugs," not "an addict."' },
      ] },
      ck('ces-12-c2', 'A patient says "I cannot do this anymore." What do you do?', ['Change the subject', 'Stay, ask directly about safety, and get a clinician', 'Promise secrecy', 'Leave to get coffee'], 1, 'Stay and involve a clinician at once.', 'Secrecy or silence puts the person at risk.'),
      ev(['SAMHSA, TIP 57.', 'NIDA, Words Matter: Terms to Use and Avoid When Talking About Addiction.', 'Mental Health First Aid USA.']),
    ] },
    { title: 'Afterward', summary: 'Documentation and your own wellbeing.', minutes: 15, blocks: [
      { kind: 'list', title: 'Afterward', items: ['Tell your supervisor what happened and what you did.', 'Write a short, factual note.', 'Take a few minutes before you return to work.', 'Ask for support if the case stays with you.'] },
      { kind: 'reflect', title: 'After the case', prompts: ['What was hardest to say?', 'What would help you stay steady?'] },
      ev(['SAMHSA, TIP 57: secondary stress.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.', '988 Suicide and Crisis Lifeline.']),
    ] },
  ],
});

export const CES_SIM3 = eventCourse({
  id: 'ces-13', num: 13, title: 'Simulation Case 3: Unhoused Patient + Continuity of Care',
  promise: 'Practice supporting a patient who has no stable place to keep medicine or receive messages, and plan follow-up that works.',
  about: ['In this scripted case, a patient who is living outside is discharged with new medicines and a follow-up date.', 'Learners practice planning for the first days: where medicine is kept, how to reach the person, and who follows up.'],
  objectives: ['Identify what makes follow-up hard without stable housing.', 'Help plan a follow-up that fits the person\'s life.', 'Make a warm handoff to a community partner.', 'Respect dignity and privacy.'],
  minutes: 45, prerequisites: 'Courses 1 to 10 of this pathway.', whoFor: 'Learners preparing for time in a clinic.',
  requirements: simReqs(3),
  lessons: [
    { title: 'The case', summary: 'A discharge with no easy way to follow up.', minutes: 15, blocks: [
      { kind: 'prose', text: ['Mr. Bell, 61, has been living outside for a year. He was seen for an infected wound and given antibiotics, wound supplies, and a follow-up date in five days. He has no phone and no place to keep supplies safe.'] },
      ck('ces-13-c1', 'What makes this follow-up hard?', ['Nothing', 'No phone and no safe place for supplies', 'He does not care', 'The date'], 1, 'Without a phone or storage, the usual plan may not work.', 'The barrier is access and safety.'),
      ev(['National Health Care for the Homeless Council, Healing Hands: care for people experiencing homelessness.', 'SAMHSA, TIP 57.', 'CMS, Accountable Health Communities Health-Related Social Needs Screening Tool.']),
    ] },
    { title: 'Planning with him', summary: 'A plan that fits his day.', minutes: 15, blocks: [
      { kind: 'steps', title: 'Questions and steps', items: [
        { label: 'Ask where he can be found', text: 'A regular meal site, a shelter, or an outreach team stop.' },
        { label: 'Offer a contact', text: 'With his consent, share a way for the team to reach him through a partner.' },
        { label: 'Handle supplies', text: 'Ask the clinician about a small, safe amount and a place to pick up more.' },
        { label: 'Warm handoff', text: 'With his permission, connect him to the street medicine or outreach team.' },
      ] },
      ck('ces-13-c2', 'What makes a plan fit his life?', ['A phone call he cannot receive', 'A follow-up at a place he already goes, with a warm handoff', 'A letter', 'A pamphlet'], 1, 'Meeting a person where they are improves follow-up.', 'Plans that assume a phone or a mailbox fail.'),
      ev(['National Health Care for the Homeless Council.', 'The Community Guide, Community Health Workers: outreach and follow-up.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
    ] },
    { title: 'Dignity and escalation', summary: 'Respect, privacy, and when to call.', minutes: 15, blocks: [
      { kind: 'list', title: 'Remember', items: ['Use his name and ask permission before sharing information.', 'Do not photograph him or his belongings.', 'Tell licensed staff if the wound looks worse, he has a fever, or he seems confused.', 'In an emergency, call 911.'] },
      { kind: 'reflect', title: 'After the case', prompts: ['What would you want a clinic to know about your day?', 'What would you add to the plan?'] },
      ev(['SAMHSA, TIP 57.', 'National Health Care for the Homeless Council.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
    ] },
  ],
});

export const CES_DEBRIEF = eventCourse({
  id: 'ces-14', num: 14, title: 'Debrief + Reflection',
  promise: 'Learn from a simulation by describing what happened, what you thought, and what you will do differently.',
  about: ['A debrief is a structured conversation after a simulation. It is where most of the learning happens.', 'You will take part in a facilitated debrief and write a short reflection.'],
  objectives: ['Describe what happened without blame.', 'Name what went well and what to change.', 'Connect the case to real practice.', 'Write a short reflection.'],
  minutes: 30, prerequisites: 'At least one simulation case.', whoFor: 'Learners who have taken part in simulation cases.',
  requirements: [
    { id: 'deb-attend', kind: 'attend', label: 'Attend the facilitated debrief', detail: 'A group conversation after the simulation cases.' },
    { id: 'deb-reflect', kind: 'assignment', label: 'Write a reflection', detail: 'Half a page: what you learned, what surprised you, and what you will do next.' },
  ],
  lessons: [
    { title: 'How a debrief works', summary: 'Reactions, description, analysis, and summary.', minutes: 10, blocks: [
      { kind: 'steps', title: 'A common structure', items: [
        { label: 'Reactions', text: 'How did it feel?' },
        { label: 'Description', text: 'What happened, in order?' },
        { label: 'Analysis', text: 'What worked, what did not, and why?' },
        { label: 'Summary', text: 'What will we take away?' },
      ] },
      ck('ces-14-c1', 'What is the purpose of a debrief?', ['To assign blame', 'To learn from what happened', 'To grade', 'To end the session'], 1, 'A debrief turns a simulation into learning.', 'It is not for blame or grading.'),
      ev(['Eppich and Cheng, "Promoting Excellence and Reflective Learning in Simulation (PEARLS)," Simulation in Healthcare (2015).', 'INACSL Healthcare Simulation Standards of Best Practice: The Debriefing Process.', 'Gibbs, Learning by Doing (1988).']),
    ] },
    { title: 'A safe space', summary: 'Ground rules for honesty.', minutes: 10, blocks: [
      { kind: 'list', title: 'Ground rules', items: ['What is said here stays here; what we learn leaves with us.', 'Talk about actions, not people.', 'Everyone may pass.', 'Ask questions out of curiosity.'] },
      ck('ces-14-c2', 'Why use ground rules?', ['To save time', 'People speak more honestly when the space feels safe', 'It is required', 'To limit speaking'], 1, 'Psychological safety supports learning.', 'The aim is honest conversation.'),
      ev(['Edmondson, Administrative Science Quarterly (1999): psychological safety.', 'INACSL Standards: debriefing.', 'Eppich and Cheng (2015).']),
    ] },
    { title: 'Writing your reflection', summary: 'What, so what, now what.', minutes: 10, blocks: [
      { kind: 'steps', title: 'Three questions', items: [
        { label: 'What?', text: 'What happened?' },
        { label: 'So what?', text: 'Why did it matter, and what did you learn?' },
        { label: 'Now what?', text: 'What will you do differently?' },
      ] },
      { kind: 'reflect', title: 'Your reflection', prompts: ['What will you remember from these cases?', 'What is one habit you will practice?'] },
      ev(['Gibbs (1988).', 'Schön, The Reflective Practitioner (1983).', 'Kolb, Experiential Learning (1984).']),
    ] },
  ],
});

const CES_EXAM: Check[] = [
  { id: 'ces-15-q1', q: 'What does a learner do when they see a worrying reading?', options: ['Reassure the patient', 'Tell licensed staff right away', 'Wait', 'Change the number'], answer: 1, why: 'Report to licensed staff at once. They decide what to do.' },
  { id: 'ces-15-q2', q: 'A positive screening result means what?', options: ['A diagnosis', 'More evaluation by a clinician is needed', 'Nothing', 'A treatment plan'], answer: 1, why: 'A screen identifies who needs more testing. It does not diagnose.' },
  { id: 'ces-15-q3', q: 'When should hands be cleaned?', options: ['Only when visibly dirty', 'At key moments before and after patient contact', 'Once a shift', 'Never'], answer: 1, why: 'Hand hygiene is needed at specific moments whether or not hands look dirty.' },
  { id: 'ces-15-q4', q: 'Standard precautions are used with:', options: ['Only known infections', 'Every patient', 'Only visitors', 'No one'], answer: 1, why: 'Infection may not be visible, so precautions apply to everyone.' },
  { id: 'ces-15-q5', q: 'You are unsure what an abbreviation means. What do you do?', options: ['Guess', 'Ask the clinician before recording', 'Leave it out', 'Make one up'], answer: 1, why: 'A wrong guess in a record can cause harm.' },
  { id: 'ces-15-q6', q: 'Who is responsible for the final content of a clinical note?', options: ['The scribe', 'The clinician who reviews and signs it', 'The patient', 'The front desk'], answer: 1, why: 'The clinician is responsible and signs the record.' },
  { id: 'ces-15-q7', q: 'How should a social needs question be introduced?', options: ['Abruptly', 'By explaining why you ask and offering privacy and choice', 'In public', 'As a requirement for care'], answer: 1, why: 'People answer more honestly when they know why and can choose.' },
  { id: 'ces-15-q8', q: 'Before a physical exam, what helps a patient feel safe?', options: ['Proceeding quickly', 'Explaining what will happen and asking permission', 'Saying nothing', 'Leaving'], answer: 1, why: 'Explanation and permission give the patient control.' },
  { id: 'ces-15-q9', q: 'When is a referral complete?', options: ['When written', 'When the patient has been seen and the result returns to the team', 'When sent', 'When the patient is told'], answer: 1, why: 'Closing the loop means the result is back and acted on.' },
  { id: 'ces-15-q10', q: 'A patient says "I cannot do this anymore." What do you do?', options: ['Change the subject', 'Stay, ask directly about safety, and get a clinician', 'Promise secrecy', 'Leave'], answer: 1, why: 'Safety comes first. Stay and involve a clinician at once.' },
];

export const CES_REVIEW = eventCourse({
  id: 'ces-15', num: 15, title: 'Practical / Simulation Competency Review',
  promise: 'Show that you can apply what you learned: pass the knowledge check and a skills observation, and receive supervisor sign-off.',
  about: ['The review has three parts: a knowledge check, an observed practice conversation, and your supervisor\'s sign-off.', 'You may retake the knowledge check.'],
  objectives: ['Pass the knowledge check at 80 percent or higher.', 'Show observation, questioning, and reporting skills in a scenario.', 'Show you know your limits as a learner.', 'Receive sign-off.'],
  minutes: 30, prerequisites: 'Courses 1 to 14 of this pathway.', whoFor: 'Learners at the end of the pathway.',
  exam: CES_EXAM,
  requirements: [
    { id: 'rev-exam', kind: 'assignment', label: 'Pass the knowledge check at 80 percent or higher', detail: 'Ten questions. You may retake it.' },
    { id: 'rev-skills', kind: 'practicum', label: 'Skills observation', detail: 'A supervisor observes you in a practice scenario using the competency checklist.' },
    { id: 'rev-signoff', kind: 'evaluation', label: 'Supervisor sign-off', detail: 'Your supervisor confirms you are ready to observe in a clinic.' },
  ],
  lessons: [
    { title: 'What is assessed', summary: 'The three parts.', minutes: 10, blocks: [
      { kind: 'steps', title: 'Three parts', items: [
        { label: 'Knowledge check', text: 'Ten questions on the pathway. You need 80 percent.' },
        { label: 'Skills observation', text: 'A practice scenario observed with a checklist.' },
        { label: 'Sign-off', text: 'Your supervisor decides: yes, not yet, or needs more practice.' },
      ] },
      ck('ces-15-c1', 'What does "not yet" mean?', ['You are removed', 'You need more practice and a second look', 'You failed permanently', 'Nothing'], 1, 'It is a step in learning.', 'It is not an ending.'),
      ev(['California HCAI, CHW/P/R Training Program Best Practices Framework: supervision.', 'INACSL Healthcare Simulation Standards of Best Practice: Participant Evaluation.', 'AHRQ, TeamSTEPPS.']),
    ] },
    { title: 'The skills checklist', summary: 'What the observer looks for.', minutes: 10, blocks: [
      { kind: 'list', title: 'Checklist', items: ['Introduces self and role as a learner.', 'Observes and asks open, respectful questions.', 'Reports facts to licensed staff promptly.', 'Stays within scope and says so when asked for more.', 'Escalates safety concerns immediately.', 'Protects privacy.'] },
      ck('ces-15-c2', 'Which is on the checklist?', ['Giving medical advice', 'Staying within scope and saying so when asked for more', 'Diagnosing', 'Sharing stories'], 1, 'Knowing your limits is a core skill.', 'Advice and diagnosis are outside a learner\'s role.'),
      ev(['California HCAI, CHW/P/R Training Program Best Practices Framework.', 'INACSL Standards.', 'AHRQ, TeamSTEPPS.']),
    ] },
    { title: 'How to prepare', summary: 'The week before.', minutes: 10, blocks: [
      { kind: 'list', title: 'Prepare', items: ['Retake any lesson check you missed.', 'Review your case worksheets and debrief notes.', 'Write your escalation steps: your supervisor, 988, 911.', 'Rest and eat before the day.'] },
      { kind: 'reflect', title: 'Before the day', prompts: ['Which skill do you most want to show?', 'What will you do if you are unsure?'] },
      ev(['California HCAI, CHW/P/R Training Program Best Practices Framework.', 'INACSL Standards.', 'Eppich and Cheng (2015).']),
    ] },
  ],
});

export const CES_MORE_COURSES: Course[] = [CES_COMMUNITY_CARE, CES_VITALS, CES_INFECTION, CES_DOCUMENTATION, CES_SOCIAL, CES_TRAUMA, CES_REFERRAL, CES_SIM1, CES_SIM2, CES_SIM3, CES_DEBRIEF, CES_REVIEW];
