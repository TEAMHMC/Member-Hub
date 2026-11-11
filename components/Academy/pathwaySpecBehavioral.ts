// Community Health Worker Pathway, Specialty Track: Behavioral Health and Crisis Response.
//
// A blended specialty course (id chw_spec_behavioral_health, 8 hours). Four lessons are read and worked
// through on your own. Four scheduled practice sessions are attended with a facilitator and a group. A
// practice file is completed and kept. The stated 480 minutes equal 4 lessons of 45 minutes, 4 sessions
// of 60 minutes, and a 60 minute practice file.
//
// Every statement of fact was taken from a source opened and read on November 10 or 11, 2026. The sources
// are SAMHSA's National Guidelines for Behavioral Health Crisis Care, A Best Practice Toolkit (2020, read
// in full from a copy hosted by the Colorado Department of Health Care Policy and Financing); the 988
// Lifeline's what-to-expect page; the California Department of Health Care Services' page on the CalAIM
// Behavioral Health Initiative (read in a browser on November 11, 2026), for the Medi-Cal mobile crisis
// benefit, no wrong door, and administrative integration; the Los Angeles County Department of Mental
// Health's ACCESS Center page and its frequently asked questions on Senate Bill 43; the California
// Judicial Council's 10 Things to Know About the CARE Act (revised January 2, 2026); OSHA's Guidelines for
// Preventing Workplace Violence for Healthcare and Social Service Workers (2016); the Department of
// Health Care Services' Proposition 1 overview, for the statement that Proposition 1 makes no change to
// the Lanterman-Petris-Short Act; SAMHSA's Treatment Improvement Protocol 55, for high-risk transitions;
// and the other courses of this pathway, which this track builds on.
//
// What was not read is said in the course. The county's page on SB 43 is a frequently asked questions
// sheet, and the statute itself was not read. Court procedures vary by county, and the Los Angeles
// Superior Court's own CARE pages were not read. The Medi-Cal mobile crisis guidance notice itself
// (BHIN 23-025) was not read, only the state's page that describes it. The Washington State law
// described in the crisis guidelines is cited as an example the guidelines give, and is not California
// law. The scenes and character cards were written for this course and describe no real person.
//
// This track teaches a community health worker's part in a behavioral health crisis, which is to recognize
// it, keep everyone safe, call the right place, support the person and family, and follow up. It does not
// teach assessment of risk for involuntary detention, restraint, or physical intervention. Holds and court
// orders are decisions made by authorized people and courts, and the course explains them so you can
// describe them honestly and never threaten them.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_SPEC_BEHAVIORAL_HEALTH: Course = {
  id: 'chw_spec_behavioral_health',
  num: 20,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'blended',
  title: 'Specialty Track, Behavioral Health and Crisis Response',
  promise:
    "Know the parts of the crisis system and who to call, stay safe and steady when someone is in crisis, explain involuntary holds and the CARE Act honestly, and support people and families before, during, and after a crisis.",
  about: [
    "A person is in crisis at a kitchen table, in a waiting room, or on a sidewalk. A family does not know whether to call 911, 988, or the county. A community health worker is often the first person someone trusts enough to ask. This track prepares you for that moment.",
    "It rests on SAMHSA's national guidelines for behavioral health crisis care, the state's description of the Medi-Cal mobile crisis benefit, the County Department of Mental Health's pages, the California courts' summary of the CARE Act, OSHA's guidance on safety for social service workers in the field, and the lessons of the courses you have already taken, especially suicide prevention, peer practice, and conflict resolution.",
    "It is the Behavioral Health and Crisis Response specialty track of HMC's community health worker pathway. Learners choose one specialty track. You read four lessons, attend four practice sessions, and complete a practice file. The sessions are practice with a facilitator, and every scene in them is invented. This track does not teach clinical assessment, and holds and court orders are decided by others.",
  ],
  objectives: [
    "Describe the three parts of a modern crisis system and decide who to call for a given situation.",
    "Keep yourself and others safe on a crisis visit or call, and know when to step away and call for help.",
    "Explain a 72-hour hold under California law and the CARE Act in plain, honest words, and never use them as a threat.",
    "Support a family member who is worried, without promising what you cannot know.",
    "Help a person after a crisis, with a safety plan, a warm handoff to follow-up care, and a follow-up call.",
    "Debrief and take care of yourself after a hard event.",
  ],
  minutes: 480,
  prerequisites:
    "Trauma-Informed Practice, Communication, Professional Conduct, Ethics, and Safety, and the Mental Health Core courses on conditions, substance use, suicide prevention, peer practice, the system and access, and conflict resolution.",
  whoFor:
    "Community health workers and peer workers who want to work with people in or at risk of behavioral health crisis, on a crisis response team, in a clinic, or in community outreach.",
  freshness:
    "Crisis systems and California law change often. The county's guidance on Senate Bill 43 took effect in January 2026, the state's mobile crisis benefit began in 2023, and counties are merging their mental health and substance use systems by January 1, 2027. The pages used here were read on November 10 and 11, 2026. Check your program's protocols and the current pages before you tell anyone what is available.",
  modality: 'virtual',
  requirements: [
    { id: 'bh-l1', label: 'Complete Lesson 1, The crisis system and who to call', kind: 'assignment' },
    { id: 'bh-l2', label: 'Complete Lesson 2, Staying safe and steady', kind: 'assignment' },
    { id: 'bh-l3', label: 'Complete Lesson 3, Holds, courts, and families', kind: 'assignment' },
    { id: 'bh-l4', label: 'Complete Lesson 4, After the crisis', kind: 'assignment' },
    { id: 'bh-s1', label: 'Attend Session 1, Who do we call', kind: 'attend' },
    { id: 'bh-s2', label: 'Attend Session 2, The safe visit', kind: 'attend' },
    { id: 'bh-s3', label: 'Attend Session 3, Holds, courts, and worried families', kind: 'attend' },
    { id: 'bh-s4', label: 'Attend Session 4, After the crisis', kind: 'attend' },
    { id: 'bh-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-bh-l1',
      title: 'The crisis system and who to call',
      summary: 'The three parts of a modern crisis system, mobile crisis, 988, the County ACCESS Center, and how to choose.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "A woman calls you late in the afternoon. Her brother has not slept in three days, is talking fast about being followed, and will not let her in the room. She asks what to do. If you say call 911, a police car may arrive. If you say wait until morning, nothing may arrive. A well-built crisis system has other answers, and your job is to know them.",
          "This lesson draws on SAMHSA's National Guidelines for Behavioral Health Crisis Care, a 2020 toolkit that describes what a modern crisis system should include, on the state's description of the Medi-Cal mobile crisis benefit, and on the County's ACCESS Center. It does not teach you to assess a crisis. It teaches you the map, so you can send someone to the right place quickly.",
        ] },
        { kind: 'concept', title: 'The three essential parts', text: [
          "The guidelines name three essential elements of a no-wrong-door crisis system. The first is a regional crisis call center, staffed around the clock by clinicians, that takes calls, texts, and chats, assesses risk, and coordinates care in real time. The second is a mobile crisis team that can reach any person in the service area at home, at work, or anywhere in the community in a timely way. The third is a crisis receiving and stabilization facility, which offers short-term observation and stabilization, under 24 hours, in a home-like, non-hospital setting. The guidelines say these three are the true crisis services, and that they must connect to the wider system of care so a person flows to the level of care their needs call for.",
          "The guidelines describe the spirit with three short phrases. Someone to talk to is the call center. Someone to respond is the mobile team. A place to go is the stabilization facility. A person in crisis should be able to find all three without being turned away.",
        ] },
        { kind: 'concept', title: 'Mobile crisis', text: [
          "The guidelines say that mobile crisis teams offer community-based help wherever a person is, whether at home, at work, or anywhere else in the community. For safety and for good engagement, they say teams should be made up of two people. At a minimum a team includes a licensed or credentialed clinician who can assess needs, responds where the person is and not only at certain locations or times, and connects people to facility-based care through warm handoffs, coordinating transportation only when the situation calls for it.",
          "Best practices go further. They include having peers on the team, responding without law enforcement unless special circumstances call for it, using real-time GPS in partnership with the call center, and scheduling outpatient follow-up appointments as a warm handoff. The guidelines say the goal of a mobile team is not only to decide where a person should go but to resolve the situation so that a higher level of care is not necessary. They also say that if a person describes a serious medical condition or an imminent threat of harm, the team should coordinate with emergency responders, and that involving police or EMS is not the preferred approach and should be used when other behavioral health responders are not available or the nature of the crisis calls for it.",
          "The state describes its own mobile crisis benefit on its CalAIM behavioral health page. It says mobile crisis services are a community-based intervention that gives de-escalation and relief to people in a behavioral health crisis wherever they are, including at home, work, school, or in the community, through a multidisciplinary team of trained behavioral health professionals. It says the services are designed to reduce the immediate risk of danger, to avoid unnecessary emergency department care, psychiatric hospitalizations, and law enforcement involvement, and to ensure Medi-Cal members have access to coordinated crisis care 24 hours a day, 7 days a week, 365 days a year. The state received approval for the benefit effective January 1, 2023, and a state training center supports county teams. The notice that sets the current rules was not read for this course.",
        ] },
        { kind: 'concept', title: '988 and the County ACCESS Center', text: [
          "The 988 Lifeline says that when you call, you hear options for services, including the Veterans Crisis Line, Spanish-language services, services for LGBTQ+ youth, or your local 988 contact center. A live counselor says hello, asks whether you are safe, listens to how the problem is affecting you, provides support, and shares resources. You can also text or chat. Your conversation is confidential.",
          "The Los Angeles County Department of Mental Health describes its ACCESS Center, reached at 1-800-854-7771, as part of its Help Line. It operates 24 hours a day, 7 days a week as the entry point for mental health services in the county. Its services include deploying crisis evaluation teams, information and referrals, gatekeeping of acute inpatient psychiatric beds, interpreter services, and client transport. The county's Senate Bill 43 sheet gives the same number for a loved one who needs mental health or substance use treatment now, and lists a directory for publicly funded substance use services.",
          "Practice guidance for this course. Keep these numbers in your phone and your practice file, and check them when you update it. Sort a situation as follows. If there is a medical emergency, or someone is in immediate danger, or a weapon is involved, call 911. If a person is thinking about suicide or in emotional crisis and is safe for the moment, 988 is a good first call, and you can stay with them while they talk. If the family needs a team to come to the person, the County ACCESS line is the route to crisis evaluation. When you are not sure, call 911 if you fear for life, and otherwise call 988 or ACCESS and ask the counselor to help you decide.",
        ] },
        { kind: 'concept', title: 'Principles that shape the response', text: [
          "The guidelines list six principles that belong in every part of a crisis system. They are addressing recovery needs, a significant role for peers, trauma-informed care, zero suicide or suicide-safer care, safety and security for staff and people in crisis, and partnerships with law enforcement, dispatch, and emergency medical services.",
          "On recovery, they say crises are challenges that may be opportunities for growth, and that people feel less alone when crises are handled in comfortable and familiar settings. They call for a no-force-first approach, asking the person about their preferences and doing what can be done to match them, and working to convert involuntary commitments to voluntary. On peers, they say that people with lived experience of crisis can relate without judgment and show that improvement is possible. On trauma, they say crises are compounded when care involves loss of freedom, noisy and crowded environments, or force, and that these can re-traumatize a person at the worst moment. These ideas are in your earlier courses. Here they have a job. They tell you what to look for when you decide where to send someone, and what to ask for when you call.",
        ] },
        { kind: 'concept', title: 'What a community health worker does', text: [
          "Practice guidance for this course. In a crisis you do five things. You stay calm and present. You keep everyone as safe as you can. You call the right place and say clearly what is happening. You stay with the person or the family until help arrives if it is safe to do so. And you follow up afterward. You do not diagnose, assess for a hold, restrain, or promise an outcome. If you ever feel that a person's safety depends on a decision you are not authorized to make, you call someone who is.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Crisis call center', plain: "A staffed line, text, and chat service that assesses and coordinates help around the clock. 988 is one." },
          { term: 'Mobile crisis team', plain: "A team that goes to the person wherever they are to de-escalate and connect them to care." },
          { term: 'Crisis stabilization', plain: "Short-term observation and stabilization, under 24 hours, in a home-like, non-hospital setting." },
          { term: 'Warm handoff', plain: "Introducing a person to the next service and staying until they are connected." },
          { term: 'No force first', plain: "A commitment to engagement and collaboration before any force." },
        ] },
        { kind: 'myths', items: [
          { myth: "In a mental health crisis, call 911 and wait.", reality: "The guidelines say mobile crisis teams and call centers are meant to respond to behavioral health crises without law enforcement unless special circumstances require it. 911 is right for a medical emergency, a weapon, or immediate danger." },
          { myth: "The goal of a crisis team is to get the person to a hospital.", reality: "The guidelines say the aim is to resolve the situation so a higher level of care is not necessary." },
          { myth: "Peers are extra and not part of a crisis team.", reality: "The guidelines name a significant role for peers as a core principle and a best practice for mobile teams." },
          { myth: "If a family has to ask three places, that is how the system works.", reality: "The guidelines describe a no-wrong-door system. Ask for a warm transfer if the first place cannot help." },
        ] },
        { kind: 'case', title: 'The brother who will not open the door', scenario: true, text: [
          "A worker listens to the woman. She asks whether anyone is in danger, whether there is a weapon, whether her brother has said he wants to hurt himself, and whether he is safe for now. The woman says he has said nothing about hurting himself or anyone, he is inside his room, and she is not afraid of him. The worker stays on the phone and says that there is a team that can come to him, and offers to call the county ACCESS line with her. She explains that if anything changes, if he says he wants to die, if there is a weapon, or if he is hurt, they will call 911 or 988 at once. They call together. The worker says her name and role, describes what the woman reported in plain words, and asks what will happen next and when. She writes it down. She calls the woman back the next morning.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-bh-q1',
          q: "According to SAMHSA's national guidelines, which three elements make up a modern no-wrong-door crisis system?",
          options: [
            "A police response, an emergency room, and a jail",
            "A regional crisis call center, mobile crisis team response, and crisis receiving and stabilization facilities",
            "A clinic, a pharmacy, and a hospital",
            "A hotline, a website, and a brochure",
          ],
          answer: 1,
          rationale: "The guidelines name a regional 24/7 crisis call center, mobile crisis teams, and crisis receiving and stabilization facilities as the three essential elements.",
          distractors: "The other answers describe parts of other systems and not the crisis elements the guidelines describe.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-bh-q2',
          q: "A family calls because a relative has been agitated for days. The relative has no weapon and has not threatened anyone or talked of self-harm, and is safe for now. What does this course suggest?",
          options: [
            "Say there is nothing to do until something worse happens",
            "Stay with the family, call 988 or the County ACCESS line to ask for help including a team that can come, and give them the plan for calling 911 if anything changes",
            "Go in alone and try to calm the person yourself",
            "Tell the family to bring the person to the emergency room by force",
          ],
          answer: 1,
          rationale: "The County ACCESS Center deploys crisis evaluation teams and is open all day and night, and 988 can help the family decide. A plan for escalation to 911 keeps everyone safe. A worker never goes in alone or uses force.",
          distractors: "The other answers either leave the family alone or put people at risk.",
        } },
        { kind: 'reflect', title: 'Your own map', prompts: [
          "Which of these numbers could you say from memory right now? Which would you need to look up?",
          "What would you want a family member to hear from you in the first two minutes of a call?",
        ] },
        { kind: 'takeaways', items: [
          "A modern crisis system has someone to talk to, someone to respond, and a place to go.",
          "Call 911 for a medical emergency, a weapon, or immediate danger. Use 988 and the County ACCESS line for behavioral health crises.",
          "Stay calm, keep everyone safe, call the right place, stay if it is safe, and follow up.",
        ] },
        ev([
          "SAMHSA. National Guidelines for Behavioral Health Crisis Care, A Best Practice Toolkit (2020). The three essential elements, the mobile crisis minimum expectations and best practices, the guidance on involving law enforcement, and the six core principles.",
          "California Department of Health Care Services. CalAIM Behavioral Health Initiative page (read November 11, 2026). The mobile crisis benefit, its aims, its effective date, and the state training center. The guidance notice that governs the benefit was not read.",
          "988 Suicide and Crisis Lifeline. What to Expect. The call options and what a counselor does.",
          "Los Angeles County Department of Mental Health. ACCESS Center page and Senate Bill 43 frequently asked questions. The hours, the number, and the services.",
          "The sorting of situations, the five things a worker does, and the scene are practice guidance written for this course. The scene describes no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-bh-l2',
      title: 'Staying safe and steady',
      summary: 'Field safety, working in pairs, the right to step away, trauma-informed steadiness, when to call 911, and reporting and debriefing.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "Most people in crisis are not dangerous. Most are frightened, in pain, and need someone steady. A small number of situations do become unsafe, and a worker who plans for them can stay calm for everyone else. Safety is not the opposite of compassion. It is what lets you stay.",
          "This lesson draws on OSHA's guidelines for preventing workplace violence for healthcare and social service workers, on the safety principle in SAMHSA's crisis care guidelines, and on the de-escalation skills you learned in the Conflict Resolution course. It does not teach physical intervention. Your first duty is to be safe, to leave or call for help when safety is at risk, and to follow your program's procedure.",
        ] },
        { kind: 'concept', title: 'Safety is part of crisis care', text: [
          "The crisis guidelines call safety for both people served and staff a foundational element of every crisis setting. They say that while the safety of people using crisis services is paramount, the safety of staff cannot be compromised. They note that people in crisis may have experienced violence or acted in violent ways, may be intoxicated or delusional, or may have been brought in by law enforcement, and so may present an elevated risk for violence. They also say that trauma-informed and recovery-oriented care is safe care.",
          "The guidelines list what builds safety. Training in trauma-informed crisis work for all staff. Role-specific training and enough staff. A welcoming, non-institutional space. Policies emphasizing no force first before any use of safe physical restraint or seclusion. Strong relationships with law enforcement and first responders. And clear policies on how clinical staff, and police if needed, handle behavior that places others at risk. They add that restraint and seclusion are considered safety measures of last resort, not punishment and not a substitute for adequate staffing, and that they are often associated with injury to clients and staff and can re-traumatize people who have experienced physical trauma. Restraint and seclusion belong to trained staff in licensed settings. They are never part of your role.",
        ] },
        { kind: 'concept', title: 'Field work and the right to step away', text: [
          "OSHA's guidelines give a table of safety measures for field workers, meaning home health and social service workers who make visits. They include making sure workers have a way to communicate, either a cell phone or a panic button, setting a policy for when a buddy system should be used, advising extra care in unfamiliar residences, giving workers discretion to get backup from another worker or from law enforcement, and giving workers discretion about whether to begin or continue a visit if they feel threatened or unsafe. For all settings it recommends the buddy system, especially when personal safety may be threatened, and requiring that workers report all assaults or threats to a supervisor, with logs kept to determine what is needed to prevent recurrences. If stalking is suspected, it suggests varying check-in and check-out times and travel routes for the affected worker.",
          "The crisis guidelines give an example of the same ideas in law. After the death of a social worker in Washington State, that state passed a law on home visits by mental health professionals. Its keys are that no crisis outreach worker is required to conduct home visits alone, that employers equip workers with a communication device, and that workers dispatched on crisis visits have prompt access to any available information on a history of dangerousness. This is an example the guidelines give. It is not California law. It shows what good protection looks like.",
          "Take these as your own standards. Ask your program whether you will ever be sent alone, and what the check-in rule is. Have your phone charged. Tell someone where you are going. Know the exits in a place before you need them. And know that you do not have to prove danger before you leave. If you feel unsafe, you may decide not to begin or to stop a visit, and call for help.",
        ] },
        { kind: 'concept', title: 'Steady words in a tense moment', text: [
          "The Conflict Resolution course covered the principles of verbal de-escalation in detail. They are respect for personal space, not being provocative, one person speaking, short sentences, asking what the person wants and listening, agreeing where you honestly can, setting clear limits kindly, offering choices, and debriefing. Return to those notes before the session.",
          "The crisis guidelines add what trauma adds. Crises are compounded by noise, crowding, loss of freedom, and the use of force, and calm, safe settings can help healing. In practice, lower the noise, reduce the number of people in the room, give the person room to move, and offer a choice, such as sitting or standing, or water. Ask the person what they would like you to do. The guidelines suggest asking the person about their preferences and aligning actions to them whenever you can.",
          "When a person talks about suicide, the work of the Suicide Prevention course applies. Ask directly, stay with them, work through the safety plan if they are willing, and call 988 or 911 according to the situation and your program's procedure. Practice guidance for this course. Never leave a person alone who has said they intend to die and has the means, and call for help while you stay safe.",
        ] },
        { kind: 'concept', title: 'When to call 911 and what to say', text: [
          "Practice guidance for this course, consistent with the crisis guidelines' statement that serious medical conditions and imminent threat of harm call for emergency responders. Call 911 when there is a medical emergency, when a person has a weapon or has hurt someone or is about to, when a person has taken something and is unresponsive, or when you cannot keep yourself or others safe. Give your exact location, say what is happening in a sentence, say whether a weapon is present, and say that the person is in a behavioral health crisis. Ask whether a crisis team can be sent together with or instead of police if your county allows it. Stay on the line, and follow the dispatcher.",
          "When police or paramedics arrive, step to the side, tell them in a few words what you know, and let them lead. Do not argue with them in front of the person. Afterward, tell your supervisor.",
        ] },
        { kind: 'concept', title: 'After a hard moment', text: [
          "OSHA recommends that workers report all assaults and threats and that programs keep logs. The crisis guidelines recommend debriefing staff and the person after an event involving seclusion or restraint, so that policies improve. Both ideas apply to you. Tell your supervisor what happened the same day. Write down facts. Take a break. Talk with someone you trust. If something shook you, ask for support. Caring for yourself is not a luxury. It is how you can keep doing this work.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Buddy system', plain: "Working with another person so neither of you is alone when safety may be at risk." },
          { term: 'Backup', plain: "Help from another worker or an authorized responder, which you are entitled to ask for." },
          { term: 'Restraint and seclusion', plain: "Safety measures of last resort that belong to trained staff in licensed settings, never to you." },
          { term: 'Trauma-informed', plain: "Care that assumes trauma may be part of a person's story and avoids re-traumatizing." },
          { term: 'Debrief', plain: "A conversation afterward to learn, repair, and support." },
        ] },
        { kind: 'myths', items: [
          { myth: "If someone is in crisis, I have to stay no matter what.", reality: "OSHA's guidance recommends giving field workers discretion to begin or continue a visit only if they feel safe, and to get backup." },
          { myth: "Calling for backup shows I could not handle it.", reality: "Backup is a recommended safety measure. It is part of doing the work well." },
          { myth: "If a person is aggressive, I should physically stop them.", reality: "Physical intervention belongs to trained staff in licensed settings. Your role is to step away safely and call for help." },
          { myth: "Debriefing is only for serious incidents.", reality: "Reporting threats and debriefing are recommended so that staff are supported and policies improve." },
        ] },
        { kind: 'case', title: 'A visit that changed', scenario: true, text: [
          "A pair of workers visits a man whose sister asked for a check. He is calm at first. Then he begins to pace, says someone has been putting things in his food, and picks up a heavy lamp. One worker says in a level voice that she can hear he is scared. The other has already moved a step back toward the door. The first worker says, I am going to step outside and give you some room. We are not going anywhere far. They leave the room together, close the door gently, and call the county ACCESS line from the hallway and, because he has an object in his hand and they are not sure he is safe, they also call 911 and say that a man is in a behavioral health crisis, there is no known weapon but he is holding a lamp, and they are in the hallway. They give the address and wait. When officers arrive, they share what they know and step aside. Afterward, they report to their supervisor, write down the facts, and take a break.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-bh-q3',
          q: "According to OSHA's guidelines for field workers, which of these supports worker safety?",
          options: [
            "Requiring workers to complete every visit they start",
            "Giving workers discretion to get backup and to begin or continue a visit only if they feel safe, with a way to communicate, a buddy system when safety may be at risk, and reporting of threats",
            "Sending workers alone to unfamiliar homes at night",
            "Discouraging reports of threats so staff do not worry",
          ],
          answer: 1,
          rationale: "OSHA recommends communication devices, a buddy system policy, extra care in unfamiliar residences, discretion to seek backup and to decline or stop a visit, and reporting of threats and assaults.",
          distractors: "The other answers remove protections or discourage reporting.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-bh-q4',
          q: "During a visit, a person picks up a heavy object and your partner feels unsafe. What is the best next step?",
          options: [
            "Grab the object from the person",
            "Speak calmly, step back, leave the room together if you can, call for help from a safe place, and follow your program's procedure",
            "Block the door so the person cannot leave",
            "Argue until the person puts the object down",
          ],
          answer: 1,
          rationale: "The Conflict Resolution course and OSHA's guidance support calm words, distance, leaving together, calling for help from safety, and following program procedure. Physical intervention belongs to trained staff.",
          distractors: "The other answers escalate the danger or trap the person.",
        } },
        { kind: 'reflect', title: 'Your own limits', prompts: [
          "What are the first signs in your body that you feel unsafe? What would you say to your partner?",
          "Who is your person to talk with after a hard visit?",
        ] },
        { kind: 'takeaways', items: [
          "Safety for the person and for you is the foundation of crisis care.",
          "Use a buddy, carry a phone, and use your right to step away and call for help.",
          "Report threats the same day and debrief. Caring for yourself keeps you able to help.",
        ] },
        ev([
          "OSHA. Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers (OSHA 3148, 2016). The safety measures for field workers, the buddy system, discretion to seek backup and to decline or stop a visit, communication devices, and reporting.",
          "SAMHSA. National Guidelines for Behavioral Health Crisis Care (2020). The safety and security principle, restraint and seclusion as last resort, trauma effects, the no-force-first approach, and the Washington State example.",
          "The adaptations of the guidance to community health work, the advice on 911 calls, and the scene are practice guidance written for this course. The scene describes no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-bh-l3',
      title: 'Holds, courts, and families',
      summary: 'The 72-hour hold, the expanded grave disability definition, the CARE Act, and how to talk honestly with worried families.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "A mother says, can't you just have him picked up? A neighbor says, someone should make her get help. You will hear these questions, and the honest answers are neither yes nor no. California has two main legal routes for care that a person does not choose, a short hold under the Lanterman-Petris-Short Act and a court process called the CARE Act. They are not tools for community health workers. They are decisions made by authorized people and courts.",
          "This lesson explains them from the County's frequently asked questions on Senate Bill 43 and the California courts' summary of the CARE Act. It exists so you can describe them accurately, so you never use them as a threat, and so you can help a family find the right door. It does not teach you to decide who qualifies. Statutes and court procedures were not read for this course, and details differ over time and by county.",
        ] },
        { kind: 'concept', title: 'The 72-hour hold', text: [
          "The County's sheet describes a 5150 hold as allowing an involuntary 72-hour psychiatric detention for a person who is a danger to themselves, a danger to others, or gravely disabled. It says a 5150 is not a criminal arrest. A hold can be started by a police or peace officer or by a person approved by the County Department of Mental Health and designated as authorized under the law. The person can be detained and taken to a facility for an assessment for mental health or substance use needs. The sheet says the hold does not authorize involuntary medication or medical treatment, and that a person under a hold is not required to be hospitalized for the full 72 hours. After the person is stable or at the end of 72 hours, they are discharged, admitted as a voluntary patient for continued treatment, or held involuntarily under a different type of hold.",
          "The sheet describes the Lanterman-Petris-Short Act as a 1967 California law that governs involuntary detention, treatment, and conservatorship of people with behavioral health conditions. It says that Senate Bill 43, signed in 2023, updated the conservatorship laws for the first time in more than 50 years, and took effect in Los Angeles County in January 2026.",
          "The state's overview of Proposition 1 states that Proposition 1 makes no changes to this law. It is a separate matter from the funding and housing changes in Proposition 1.",
        ] },
        { kind: 'concept', title: 'What changed for grave disability', text: [
          "Under Senate Bill 43, the County's sheet says, gravely disabled now includes people with a mental health disorder, a severe substance use disorder, or both, who cannot provide for their basic personal needs for food, clothing, shelter, personal safety, or necessary medical care. It gives examples for personal safety, such as placing oneself in the path of traffic, being unable to defend against ongoing victimization because of a lack of awareness of vulnerability, or severe impaired judgment that puts the person's own life or others' lives at risk. Examples for necessary medical care include signs of significant malnourishment and wound or infection problems likely to lead to loss of limb or life if untreated.",
          "The sheet says the law also expands the testimony allowed in conservatorship proceedings, requires counties to consider less restrictive alternatives in conservatorship investigations, and expands state reporting. It explains severity of a substance use disorder by the number of criteria a person shows, with six or more being severe, and it says that in the field, an authorized person makes a determination from observations and is not making a clinical diagnosis.",
          "For this course the lesson is simple. These decisions belong to authorized people. A person's housing status, a diagnosis, or a worry from a family member does not by itself decide anything. The sheet says that for people who need treatment now, the county Help Line is the place to call.",
        ] },
        { kind: 'concept', title: 'The CARE Act', text: [
          "The California courts' summary says the Community Assistance, Recovery, and Empowerment Act allows certain adults, called petitioners, to ask a civil court to create a voluntary CARE agreement or a court-ordered CARE plan, with treatment, housing support, and other services, for a person called a respondent who has schizophrenia or another psychotic disorder, or bipolar I disorder with psychotic features, other than psychosis from current intoxication.",
          "Eligibility is decided case by case, and the summary says homelessness and a diagnosis alone are not enough. The respondent must be 18 or older, have a qualifying diagnosis, be experiencing a severe and persistent mental illness that may interfere substantially with daily activities, and not be clinically stabilized in ongoing voluntary treatment. At least one more condition must be true, either that the person is unlikely to survive safely in the community without supervision and is substantially deteriorating, or that the person needs services to prevent a relapse or deterioration that would likely result in grave disability or serious harm. The plan must be the least restrictive alternative necessary and likely to benefit the person.",
          "The summary lists who can file. They include people who live with the person, a spouse, parent, sibling, child, or grandparent, a person who stands in the place of a parent, a hospital director, the director of an agency that has served the person within the last 30 days, a licensed behavioral health professional who has supervised treatment in the last 30 days, a first responder who has had repeated interactions with the person, public guardians and conservators, county behavioral health and adult protective services directors, certain tribal court and Indian health officials, and the person themselves. Los Angeles County began on December 1, 2023.",
          "The summary describes rights. Respondents get notice and a chance to take part, an attorney, the right to replace the attorney, a supporter of their choosing, an interpreter, and disability accommodations. A supporter is an adult the person chooses to help them understand, make, and express decisions, and may be a friend, family member, faith leader, mentor, or a person with lived experience. Proceedings are confidential and hearings are closed unless the court orders otherwise. A CARE agreement is voluntary. A CARE plan is ordered by the court if no agreement is reached, and the summary says stabilization medications may only be included if the person is found to lack capacity and may not be forcibly administered. There is a status review at least every 60 days and a one-year review. If the person does not take part, the court may end the process, and the summary says the CARE Act does not change the standard for conservatorship under the older law. The county can be fined if it does not comply with court orders.",
          "Court procedures vary, and the Los Angeles County court's own pages were not read. Send a family to the court's self-help resources or to the County for current instructions. Your program will tell you whether staff may act as a supporter if a person asks.",
        ] },
        { kind: 'concept', title: 'Talking with a worried family', text: [
          "Practice guidance for this course. Start by listening. A family that asks for a hold or a court order is usually scared and exhausted. Say so. Then say what you can and cannot do. You can stay with them, help them call 988 or the county Help Line, help them think about what to do if things get worse, and connect them to family support. You cannot promise that a hold will happen, that a person will be treated, or how long anything will take.",
          "Be honest about the limits. A hold is short, it is not an arrest, and it does not authorize involuntary treatment. A person may be discharged before 72 hours. Court processes take time and have criteria. Never say to a person, I will have you taken in, and never use a hold or a court as a way to get someone to cooperate. If a person asks whether you will call, tell the truth. The guidelines' principle of no force first, and your earlier work on trust, depend on this.",
          "The crisis guidelines say peers may work with family members to educate them about self-care and ways to provide support. Offer the same. Ask the family how they are doing. Offer a way to reach support for themselves.",
        ] },
        { kind: 'vocab', items: [
          { term: '5150', plain: "A 72-hour involuntary psychiatric hold for a person who is a danger to self or others or gravely disabled." },
          { term: 'Gravely disabled', plain: "Unable, because of a mental health or severe substance use disorder, to provide for basic needs including food, clothing, shelter, personal safety, or necessary medical care." },
          { term: 'Conservatorship', plain: "A court-supervised arrangement for a person found gravely disabled." },
          { term: 'CARE Act', plain: "A court process that can lead to a voluntary agreement or ordered plan of services for eligible adults with certain psychotic disorders." },
          { term: 'Supporter', plain: "An adult the person chooses to help them understand and express decisions in the CARE process." },
        ] },
        { kind: 'myths', items: [
          { myth: "A 5150 is an arrest.", reality: "The County says a 5150 is not a criminal arrest." },
          { myth: "A hold lets staff medicate the person against their will.", reality: "The County says a hold does not authorize involuntary medication or medical treatment." },
          { myth: "Being homeless with a diagnosis qualifies someone for the CARE Act.", reality: "The courts say homelessness and a diagnosis alone are not sufficient, and eligibility is case specific." },
          { myth: "A community health worker can decide that a hold is needed.", reality: "Holds are started by peace officers or by people authorized under the law and approved by the County. Your role is to call for help." },
        ] },
        { kind: 'case', title: 'A mother asks for a hold', scenario: true, text: [
          "A mother tells a worker that her adult son has stopped taking his medication and is talking to himself. She says, I want him picked up. The worker says it sounds exhausting and frightening. She asks whether he has threatened anyone or said he wants to hurt himself, whether he has eaten, and whether he is safe right now. The mother says he has not threatened anyone, but he has not eaten in two days. The worker explains that a hold is a short, involuntary evaluation that only certain authorized people can start, that it is not an arrest, and that she cannot promise it will happen. She says she can call the county Help Line with her to ask for a team to evaluate him. She also says that if he is in immediate danger the family should call 911. The worker asks the mother how she is doing and offers to connect her with family support. She does not promise an outcome. She calls the mother back the next day.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-bh-q5',
          q: "According to the County's Senate Bill 43 sheet, which statement about a 5150 hold is accurate?",
          options: [
            "It is a criminal arrest that lasts 72 hours",
            "It is an involuntary 72-hour psychiatric detention for a person who is a danger to self, a danger to others, or gravely disabled. It is not a criminal arrest and does not authorize involuntary medication or medical treatment",
            "It can be started by any family member",
            "It requires hospitalization for the full 72 hours",
          ],
          answer: 1,
          rationale: "The sheet says a hold is an involuntary 72-hour psychiatric detention, is not a criminal arrest, can be started by a peace officer or an authorized person approved by the County, does not authorize involuntary medication or treatment, and does not require the full 72 hours in a hospital.",
          distractors: "The other answers describe an arrest, expand who can start a hold, or add requirements that the sheet does not state.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-bh-q6',
          q: "A family member asks whether the CARE Act can be used because a relative is homeless and has a diagnosis. What is the most accurate response?",
          options: [
            "Yes, homelessness and a diagnosis are enough",
            "Eligibility is decided case by case. Homelessness and a diagnosis alone are not enough, and the process has specific criteria. Point them to the court's or County's current instructions and do not promise an outcome",
            "No, the CARE Act is only for people in jail",
            "Tell them to file today and the court will order treatment",
          ],
          answer: 1,
          rationale: "The courts say eligibility is case specific and that homelessness and a diagnosis alone are not sufficient. The process includes specific diagnostic and functional criteria and a determination by a judge.",
          distractors: "The other answers overstate or misstate the criteria.",
        } },
        { kind: 'reflect', title: 'Your own honesty', prompts: [
          "What would it be like to tell a scared parent what you cannot promise? What words would help?",
          "How will you keep yourself from using a hold as a threat when you are frustrated?",
        ] },
        { kind: 'takeaways', items: [
          "A 5150 is a short, involuntary evaluation started by authorized people. It is not an arrest and does not authorize involuntary treatment.",
          "The CARE Act is a court process with specific criteria. Homelessness and a diagnosis alone are not enough.",
          "Listen to the family, be honest about limits, and never use a hold or a court as a threat.",
        ] },
        ev([
          "Los Angeles County Department of Mental Health. Senate Bill 43 Frequently Asked Questions. The definitions, the hold, who can start it, the facilities, and the Help Line. The statute itself was not read.",
          "Judicial Council of California. 10 Things to Know About the CARE Act (rev. January 2, 2026). Eligibility, who can file, rights, supporters, confidentiality, agreements and plans, the process, and accountability. Court procedures in Los Angeles County were not read.",
          "California Department of Health Care Services. Proposition 1 overview (read November 11, 2026). The statement that Proposition 1 makes no changes to the Lanterman-Petris-Short Act.",
          "SAMHSA. National Guidelines for Behavioral Health Crisis Care (2020). The no-force-first principle and the role of peers with families.",
          "The advice on talking with families and the scene are practice guidance written for this course. The scene describes no real person. This lesson is not legal advice.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-bh-l4',
      title: 'After the crisis',
      summary: 'Crisis planning and follow-up, warm handoffs to ongoing care, co-occurring needs, and supporting the family and yourself.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "The most dangerous time is often not the crisis. It is the days after, when the team has gone, the paperwork is done, and the person is home with the same worries and few supports. A worker who follows up can be the thread that holds.",
          "This lesson draws on the follow-up and planning sections of SAMHSA's crisis care guidelines, on the high-risk transitions described in SAMHSA's protocol on homelessness, on the state's description of no wrong door and administrative integration, and on your earlier courses on safety planning and peer practice. It gives you a plan for the days after a crisis.",
        ] },
        { kind: 'concept', title: 'Crisis planning and follow-up', text: [
          "The guidelines say an appropriate crisis response works to ensure crises are not recurrent, by looking at the factors that contributed and addressing the person's unmet needs through individualized planning. They say that during a mobile crisis intervention, the clinician and the peer should engage the person in crisis planning that creates or updates planning tools, including a safety plan. They also say that mobile crisis providers should follow up when indicated to find out whether the services the person was referred to were provided in a timely way and meet their needs. This is usually done by phone, and sometimes in person when the person cannot be reached.",
          "That is your place. If you were part of the response, or if you met the person afterward, you can help with the plan and the follow-up. The Suicide Prevention course taught the steps of a safety plan, in the person's own words. Help the person keep a copy where they can find it, share it with people they choose, and update it.",
        ] },
        { kind: 'concept', title: 'The warm handoff to ongoing care', text: [
          "The guidelines say that mobile teams should schedule outpatient follow-up appointments in a way that works like a warm handoff in order to support connection to ongoing care. The protocol on homelessness says that transitions are high-risk periods in which many people drop out, and describes ways to help, such as locating clients who fail to make contact, making phone calls, and providing immediate tangible benefits like food or bus fare.",
          "Practice guidance for this course. After a crisis, check with the person before they leave a place of care. Do they have an appointment, a way to get there, and a person to ask for? Have they been told what to do if the crisis returns? Offer to go with them, or to call in the next day. Call or see the person within a day or two. Ask how they are, whether the appointment happened, whether they have the medications or supplies they need, and whether the plan still fits. If a person is not reached, try again and use the contacts the person gave you permission to use.",
        ] },
        { kind: 'concept', title: 'When mental health and substance use go together', text: [
          "The state's CalAIM page describes the policy called no wrong door. As of July 1, 2022, members receive mental health services regardless of the delivery system where they seek care, even if the person is later transferred to the other system. It adds that people with co-occurring mental health and substance use conditions may be treated by providers in each of the behavioral health systems, as long as covered services are not duplicative and meet requirements. It also says that counties must combine the administration of specialty mental health and substance use services into one integrated program by January 1, 2027, with the aim of improving care for members with co-occurring conditions.",
          "For a worker, this means a person with both a mental health condition and substance use should not have to choose a door. Ask your program how referrals work today, and expect changes around January 2027. The harm reduction stance from the Street Medicine track and the Substance Use course applies here too. Never make crisis support depend on stopping use.",
        ] },
        { kind: 'concept', title: 'Supporting the family and the person', text: [
          "The crisis guidelines say peers may engage family members to educate them about self-care and about ways to provide support, and that addressing the trauma of families and significant others helps stabilization and reduces the chance of further crisis. Ask a family what they need. Offer information on how to reach support for themselves. Share the safety plan with those the person has chosen.",
          "Honor the person's wishes about who knows what. Everything you have learned about consent, confidentiality, and sharing only what is needed applies. If a person says not to tell their family, tell them what you must report by law and by program rule, and otherwise respect it.",
        ] },
        { kind: 'concept', title: 'Taking care of yourself', text: [
          "A crisis can stay with you. You may replay it, or feel numb, or shaky. These are common reactions. Tell your supervisor, debrief with your team, and use the support your program offers. The guidelines say that debriefing after a difficult event improves practice, and OSHA recommends reporting and logging. If a person you served has died or been seriously hurt, ask for support right away. Practice guidance for this course. Make a short plan for yourself now, before you need it, with a person to call, a way to rest, and your own steps for steadiness. The Self-Awareness and Self-Care work from your earlier courses is part of your toolkit.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Crisis plan', plain: "A plan, made with the person, for what helps and what to do if a crisis returns." },
          { term: 'Safety plan', plain: "A short, written list of steps a person can use when thoughts of suicide return." },
          { term: 'Follow-up', plain: "Reaching out afterward to check that services happened and the person is okay." },
          { term: 'Co-occurring', plain: "A mental health condition and substance use at the same time." },
          { term: 'Administrative integration', plain: "Counties merging their mental health and substance use systems into one program by January 1, 2027." },
        ] },
        { kind: 'myths', items: [
          { myth: "When the crisis team leaves, the crisis is over.", reality: "The guidelines call for planning and follow-up to prevent recurrence, and the protocol says transitions are high-risk." },
          { myth: "A person with substance use has to be sober before they can get mental health help.", reality: "The state's no wrong door policy says a person can be treated in either system and people with co-occurring conditions may be treated by providers in each." },
          { myth: "A family does not need support of its own.", reality: "The guidelines say that addressing family trauma helps stabilization and that peers can educate families about self-care." },
          { myth: "I should not need to debrief if I did everything right.", reality: "Debriefing improves practice and supports the people doing the work." },
        ] },
        { kind: 'case', title: 'The day after', scenario: true, text: [
          "A crisis team visited a woman the night before. She stayed home with her sister. The next morning a worker calls. She says her name, asks how the night went, and whether it is a good time to talk for a few minutes. The woman says she slept a little. The worker asks whether she has the appointment she was told about and a way to get there. She does not. The worker offers to call the clinic with her and to ride the bus with her on Thursday. She asks whether the safety plan is somewhere she can find it, and whether her sister knows where it is. She asks how the sister is doing, and offers to connect her to a family support group. Before hanging up, she repeats the plan, who will call whom and when. On Thursday she goes to the appointment with her. At the end she writes down the facts and tells her supervisor.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-bh-q7',
          q: "According to SAMHSA's crisis care guidelines, what belongs in the work after a mobile crisis response?",
          options: [
            "Nothing, since the team's job ends when it leaves",
            "Crisis planning, including a safety plan, scheduling outpatient follow-up in a way that works like a warm handoff, and follow-up to find out whether referred services were provided and meeting the person's needs",
            "Only a written report to the family",
            "A second visit by law enforcement",
          ],
          answer: 1,
          rationale: "The guidelines describe crisis planning and a safety plan, outpatient follow-up scheduled as a warm handoff, and follow-up by phone or in person to check that services were provided and are meeting needs.",
          distractors: "The other answers leave the person without planning or follow-up.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-bh-q8',
          q: "A person has a mental health condition and uses substances. According to the state's CalAIM page, which is true?",
          options: [
            "They must stop using before they can receive mental health services",
            "Under no wrong door, members get mental health services regardless of the delivery system where they seek care, and people with co-occurring conditions may be treated by providers in each behavioral health system. Counties are to integrate the administration of both systems by January 1, 2027",
            "They must choose one system and cannot receive services from the other",
            "Substance use is not covered",
          ],
          answer: 1,
          rationale: "The page describes no wrong door as of July 1, 2022, says co-occurring conditions may be treated in each system when services are not duplicative, and says counties must integrate administration by January 1, 2027.",
          distractors: "The other answers add conditions or limits that the state's page does not describe.",
        } },
        { kind: 'reflect', title: 'Your own follow-up', prompts: [
          "How will you remember to follow up within a day or two? What system will you use?",
          "What would you want someone to do for you the day after the worst night of your life?",
        ] },
        { kind: 'takeaways', items: [
          "After a crisis, make a plan with the person, do a warm handoff, and follow up within a day or two.",
          "A person with both mental health and substance use needs does not have to choose a door. Expect changes by January 2027.",
          "Support the family and yourself. Debrief.",
        ] },
        ev([
          "SAMHSA. National Guidelines for Behavioral Health Crisis Care (2020). Crisis planning and follow-up, the warm handoff for outpatient follow-up, the role of peers with families, and debriefing.",
          "SAMHSA. Treatment Improvement Protocol 55, Behavioral Health Services for People Who Are Homeless. High-risk transitions and persistence.",
          "California Department of Health Care Services. CalAIM Behavioral Health Initiative page (read November 11, 2026). No wrong door, co-occurring conditions, and administrative integration by January 1, 2027.",
          "OSHA. Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers (2016). Reporting and logging of incidents.",
          "The follow-up plan, the confidentiality note, the self-care plan, and the scene are practice guidance written for this course. The scene describes no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-bh-s1',
      title: 'Session 1, Who do we call',
      summary: 'A live practice session. Sort situations, make a call, and say what is happening in a sentence.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "In a crisis you rarely get time to think. This session lets you practice sorting a situation and saying it clearly before you are in one.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. Participants play characters and do not act out real events or real people. No one is asked to share their own crisis. If a round feels like too much, say pause. You may step out at any time. What is said in the room stays in the room, except safety concerns, which go to the facilitator.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions, agreements, and the pause rule." },
          { label: 'Sorting game, 15 minutes', text: "In small groups, sort scenario cards into 911, 988, the County ACCESS line, a family support call, or a mix, and say what you would say first and what would change your mind. Compare answers with the whole group and look up any numbers you are unsure of." },
          { label: 'Practice calls, 25 minutes', text: "In triads, one person plays the caller, one the worker, and one the call taker. The worker says their name and role, the location, what is happening in a sentence, whether anyone is in danger or a weapon is present, and what they have already done. The call taker answers with realistic questions. Three rounds of about eight minutes." },
          { label: 'Debrief and close, 15 minutes', text: "What was clear and what was hard? Make a one-page sheet of your numbers and your first sentence." },
        ] },
        { kind: 'list', title: 'Scenario cards', items: [
          "A man in a waiting room says he has not slept in four days and is talking fast about being watched, and is calm.",
          "A woman says she does not want to be alive and has pills at home.",
          "A teenager has locked themselves in a room and is crying and not answering.",
          "A person on the sidewalk is shouting at people and holding a metal pipe.",
          "A family says their relative is not eating and talks to people who are not there.",
          "A person says they took something and now feels sleepy and breathes slowly.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker choose a place to call that fit the situation?",
          "Did they say their name, role, location, and what was happening in a sentence?",
          "Did they say whether a weapon was present or anyone was in immediate danger?",
          "Did they ask what would happen next and when?",
          "Did they stay calm and slow?",
          "Did they plan a follow-up?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which scenario made you least sure where to call?",
          "What is your first sentence on a call?",
        ] },
        { kind: 'takeaways', items: [
          "Sort the situation, call the right place, and say it in a sentence.",
          "911 for medical emergency, weapons, or immediate danger. 988 and the County line for crisis support and teams.",
          "Keep your numbers where you can find them and check them often.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 1 and the sources it cites. The scenario cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-bh-s2',
      title: 'Session 2, The safe visit',
      summary: 'A live practice session. Plan a visit with a partner, practice calm words and stepping away, and practice a debrief.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Safe visits are planned before you leave. This session helps you plan, practice the words, and practice the exit.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. No physical contact. Nobody is cornered or blocked. No one acts out real events or real people. If a round feels like too much, say pause and it stops. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions, agreements, and the pause rule." },
          { label: 'Plan the visit, 10 minutes', text: "In pairs, use a visit card. Decide who leads, who watches the door, where you will stand, how you will check in with your supervisor, what your signal is for I need to leave, and what you will do if the plan changes." },
          { label: 'Role-play triads, 30 minutes', text: "In triads, one person plays a character from a card, one is the worker, and one is the observer. Three rounds of about nine minutes. Practice the calm words from the Conflict Resolution course, offering a choice, and the exit with your partner when the observer calls a change. Practice saying the sentence for calling for help." },
          { label: 'Report and debrief, 10 minutes', text: "Each pair practices a short report to a supervisor and a short team debrief, and names one thing to ask for from the program." },
          { label: 'Close, 5 minutes', text: "One safety habit you will start." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A person who says someone is putting things in their food and begins to pace.",
          "A person who is crying and says they cannot go on and wants everyone to leave.",
          "A family member who shouts that the program is doing nothing.",
          "A person who is intoxicated and says you are in their way.",
          "A person who is quiet, will not answer, and is holding something.",
          "A person who becomes suddenly calm after being very upset and says you can go.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the pair plan their roles, exits, and check-in before the visit?",
          "Did the worker keep distance, a calm voice, and offer a choice?",
          "Did the pair leave together when safety changed and call for help from a safe place?",
          "Did anyone use force or block an exit?",
          "Did they stay with a person who talked about suicide and call for help?",
          "Did they report and debrief?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which card tested you most?",
          "What is your sentence for stepping away?",
        ] },
        { kind: 'takeaways', items: [
          "Plan roles, exits, and check-ins before you go.",
          "Calm words, space, and a choice. Leave together if safety changes and call from safety.",
          "Report the same day and debrief.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 2, OSHA's guidance on field workers, and the Conflict Resolution course. The character cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 3 ─────────────────────────────────────────────────────────
    {
      id: 'chw-bh-s3',
      title: 'Session 3, Holds, courts, and worried families',
      summary: 'A live practice session. Practice explaining holds and the CARE Act honestly, and practice listening to a worried family.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Families ask the hardest questions, and they deserve plain answers. This session lets you practice saying what you know, what you do not know, and what you can do.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented and no one is asked to share a family story of their own. This session is not legal advice. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Explain it in a minute, 10 minutes', text: "In pairs, take turns explaining a 5150 hold and the CARE Act in under a minute each, in plain words. Your partner says what was clear, what was too much, and what was missing." },
          { label: 'Family role-plays, 30 minutes', text: "In triads, one person plays a family member, one is the worker, and one is the observer. Three rounds of about nine minutes. The worker listens, names the fear, says what they can and cannot do, avoids promises, and offers next steps and support for the family." },
          { label: 'The hard sentence, 10 minutes', text: "Each person writes the sentence they will use when asked to promise something they cannot. Share and refine." },
          { label: 'Close, 5 minutes', text: "One thing you will say and one thing you will never say." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A mother who asks you to have her adult son picked up.",
          "A neighbor who says someone should make a woman on the street get help.",
          "A sister who asks whether the court can order her brother into treatment.",
          "A father who says he is afraid of what will happen if the hold ends after 72 hours.",
          "A partner who says they are exhausted and cannot do this anymore.",
          "A person who asks whether you are going to call the police on them.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker listen and name the fear before explaining?",
          "Were the descriptions of a hold and the CARE Act accurate and plain?",
          "Did the worker avoid promising an outcome?",
          "Did they avoid using a hold or court as a threat?",
          "Did they offer a next step and support for the family?",
          "Did they tell the truth when asked a direct question?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What was hardest about not promising?",
          "What would you want to hear if it were your family?",
        ] },
        { kind: 'takeaways', items: [
          "Listen first, then explain simply, and be honest about limits.",
          "Never use a hold or a court as a threat.",
          "Offer next steps and support for the family.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 3, the County's Senate Bill 43 sheet, and the California courts' summary of the CARE Act. The character cards were written for this course and describe no real person. This session is not legal advice.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 4 ─────────────────────────────────────────────────────────
    {
      id: 'chw-bh-s4',
      title: 'Session 4, After the crisis',
      summary: 'A live practice session. Practice a follow-up call, a warm handoff to care, a safety plan conversation, and a team debrief.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "What happens after a crisis decides how the next one goes. This session lets you practice the follow-up call and the handoff that keep a person connected.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. No one is asked to share their own crisis or their own safety plan. If a round feels like too much, say pause. You may step out at any time. If a topic touches something painful for you, step out and tell the facilitator.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions, agreements, and the pause rule." },
          { label: 'The follow-up call, 20 minutes', text: "In pairs, practice a follow-up call the day after a crisis. Say who you are, ask permission to talk, ask how the night went, check the appointment, the transportation, the medications or supplies, and the safety plan, and agree on the next call. Switch roles." },
          { label: 'The warm handoff, 15 minutes', text: "In triads, practice calling a clinic or program with a person, introducing them, saying what is needed, and arranging a first appointment and a ride. The observer is the receiving worker." },
          { label: 'Team debrief, 15 minutes', text: "In the full group, practice a short debrief after a hard event. What happened in facts, what helped, what could change, and what each person needs." },
          { label: 'Close, 5 minutes', text: "Your follow-up habit and your support person." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A person who says the night was okay and then goes quiet.",
          "A person who says they will not go to the appointment because the last clinic was bad.",
          "A person who has no way to get to the appointment.",
          "A person who has stopped answering calls after two days.",
          "A family member who says they are tired and wants to hand everything to you.",
          "A person with both substance use and a mental health condition who says no program wants them.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker ask permission and listen before asking questions?",
          "Did they check the appointment, the ride, the medications, and the safety plan?",
          "Did they do a warm handoff with a name and a reason and a next step?",
          "Did they offer support to the family without taking over?",
          "Did they agree on the next contact?",
          "Did the debrief stay with facts and care for the team?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What will make you do the follow-up call every time?",
          "Who will you debrief with?",
        ] },
        { kind: 'takeaways', items: [
          "Follow up within a day or two, and agree on the next contact.",
          "Do the handoff together, with a name, a reason, and a next step.",
          "Debrief and look after yourself.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 4 and the sources it cites, including the crisis care guidelines and the state's CalAIM page. The character cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-bh-practice',
    title: 'Your behavioral health and crisis response practice file',
    minutes: 60,
    purpose: 'Five short pieces that you keep and use. Your crisis number sheet, your safe visit plan, your honest words for families, your after-crisis follow-up plan, and your care plan for yourself.',
    fields: [
      { id: 'numbers', label: 'Your crisis number sheet', help: 'List 911, 988, the County ACCESS line, your supervisor, your program\'s after-hours line, a family support contact, and the clinics or programs you refer to most, with a name for each and the date you checked it. Write the first sentence you will say on a call.', multiline: true },
      { id: 'visit', label: 'Your safe visit plan', help: 'Write your check-in rule, your signal for I need to leave, how you will use a buddy, and what you will do if safety changes. Add your sentence for stepping away and who you will call.', multiline: true },
      { id: 'family', label: 'Your honest words for families', help: 'Write how you would explain a 5150 hold and the CARE Act in a minute, and what you will say when asked to promise something you cannot. Write what you will never say.', multiline: true },
      { id: 'followup', label: 'Your after-crisis follow-up plan', help: 'Write what you check on a follow-up call, how you will remember to make it, how you will do a warm handoff, and what you will do if you cannot reach the person.', multiline: true },
      { id: 'care', label: 'Your care plan for yourself', help: 'Write who you will tell after a hard event, how you will debrief, what helps you rest and feel steady, and what you will do if something stays with you.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'The County Department of Mental Health ACCESS line, 1-800-854-7771, open 24 hours a day',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'SAMHSA: National Guidelines for Behavioral Health Crisis Care, A Best Practice Toolkit', use: 'The three essential elements, mobile crisis practice, and core principles.', url: 'https://www.samhsa.gov/find-help/implementing-behavioral-health-crisis-care' },
    { name: '988 Suicide and Crisis Lifeline: What to Expect', use: 'What happens when someone calls, texts, or chats.', url: 'https://988lifeline.org/what-to-expect/' },
    { name: 'Los Angeles County Department of Mental Health: Senate Bill 43', use: 'The county\'s explanations of the expanded definition and the 72-hour hold.', url: 'https://dmh.lacounty.gov/sb43' },
    { name: 'California Courts: Adult Civil Mental Health and the CARE Act', use: 'The court\'s summary of the CARE Act and its forms.', url: 'https://courts.ca.gov/' },
    { name: 'OSHA: Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers', use: 'Safety measures for people who work in the field.', url: 'https://www.osha.gov/sites/default/files/publications/osha3148.pdf' },
    { name: 'California Department of Health Care Services: CalAIM Behavioral Health Initiative', use: 'Mobile crisis, no wrong door, and administrative integration.', url: 'https://www.dhcs.ca.gov/calaim-behavioral-health-initiative/' },
  ],
};
