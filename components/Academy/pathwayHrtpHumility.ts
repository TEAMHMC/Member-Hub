// Community Mental Health Worker Pathway, Foundations course 7: Cultural Humility and Relationship Building.
//
// This is the certificate's own course 7 (id chw_cultural_humility, 3 hours, live). The id matches the
// certificate on purpose: the Academy posts every completed course to the portal, and the portal
// credits a learner only for ids it recognizes.
//
// A live practice course. Two short lessons are read before the sessions. Two scheduled sessions are
// practiced with a facilitator and a group. The stated 180 minutes equal the lessons, the sessions,
// and the practice file.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The central
// sources are the 1998 article that introduced cultural humility in health care (Tervalon and
// Murray-Garcia), the 2016 concept analysis of the term (Foronda and colleagues), and the section on
// cultural responsiveness in SAMHSA's Treatment Improvement Protocol 35. The course also draws on the
// national competencies for peer workers, the C3 Project's list of community health worker roles and
// skills, SAMHSA's trauma-informed care protocol, and the original national CLAS standards. SAMHSA's
// own TIP 59 on cultural competence and a third article on cultural humility could not be reached by an
// automated request, so the course does not rely on them. The first article was written for physician
// training, and the course adapts its ideas to community health and peer work and says so.
//
// The scenes, examples, and practice statements were written for this course. They describe no real
// person, and they do not assign any trait to any cultural group on purpose.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_CULTURAL_HUMILITY: Course = {
  id: 'chw_cultural_humility',
  num: 7,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Cultural Humility and Relationship Building',
  promise:
    "Understand cultural humility as a lifelong practice, look honestly at your own assumptions and the power you hold, ask people how they see their own situation, repair when you get it wrong, and build lasting relationships with the people and communities you serve.",
  about: [
    "This course is about how you treat what you do not know. Most of us were taught at some point that the way to work across differences is to learn about the other group. That helps, and it is not enough, because no one belongs to only one group and no list of facts can tell you what matters to the person in front of you. Cultural humility is a different habit. It is a commitment to keep examining yourself, to notice and share power, and to let people tell you about their own lives.",
    "It rests on the 1998 article that introduced the idea in health care, a 2016 review that analyzed how the term is used, the cultural responsiveness section of SAMHSA's protocol on enhancing motivation for change, SAMHSA's protocol on trauma-informed care, the national competencies for peer workers, the C3 Project's roles and skills for community health workers, and the national standards for culturally and linguistically appropriate services.",
    "It is Foundations course 7 of HMC's community health worker certificate. It is a live practice course. You read two short lessons, then practice in two scheduled sessions, then complete a practice file. It asks you to reflect on yourself. You choose what you share, and no one is asked to disclose anything personal.",
  ],
  objectives: [
    "Explain cultural humility and how it differs from the idea of mastering a culture.",
    "Describe the parts of cultural humility named in research: openness, self-awareness, humility, supportive interactions, and self-reflection.",
    "Name the power you hold in your work and ways to share it.",
    "Ask people how they understand their own situation, without assuming from their background.",
    "Repair a misstep and keep the relationship.",
    "Plan how you will keep learning and build trust with a community over time.",
  ],
  minutes: 180,
  prerequisites: "None. Communication and Documentation and Trauma-Informed Practice are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people who come from the communities they serve and people who do not.",
  freshness:
    "The ideas in this course have been debated and refined since 1998, and the words used for them keep changing. The practice of self-reflection, shared power, and asking is stable. Your program tells you which standards and procedures apply to your role.",
  modality: 'virtual',
  requirements: [
    { id: 'ch-lessons', label: 'Read the two lessons before the first session', kind: 'assignment' },
    { id: 'ch-s1', label: 'Attend Session 1, Seeing Yourself and Your Assumptions', kind: 'attend' },
    { id: 'ch-s2', label: 'Attend Session 2, Asking, Repairing, and Showing Up', kind: 'attend' },
    { id: 'ch-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ch-l1',
      title: 'What cultural humility is, and why it is a practice and not a finish line',
      summary: 'The original idea, what research says it includes, and why power and self-reflection sit at the center.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "You may already be good at this work because you understand the people you serve. That understanding is real, and it is a strength. It also carries a risk. When you think you already know, you stop asking.",
          "This lesson gives you a way of holding both. You bring what you know, and you stay curious about what you do not, including about people who seem a lot like you.",
        ] },
        { kind: 'concept', title: 'Where the idea came from', text: [
          "In 1998, two physicians, Melanie Tervalon and Jann Murray-Garcia, published a guest editorial in the Journal of Health Care for the Poor and Underserved. They were writing about how to train doctors to care for an increasingly diverse population. They argued that the usual goal, a kind of competence defined as mastery of a fixed body of knowledge, does not fit this subject.",
          "They proposed cultural humility instead. They described it as a lifelong commitment to self-evaluation and self-critique, to redressing the power imbalances in the relationship between the person giving care and the person receiving it, and to building mutually beneficial, non-paternalistic partnerships with communities. They described it as a process the person enters into on an ongoing basis with patients, communities, colleagues, and themselves, and not a point you arrive at.",
          "The article was written for physician training. Its ideas apply directly to community health and peer work, where the gap in power between worker and client is often smaller than a doctor's, and still real.",
        ] },
        { kind: 'concept', title: 'Knowing about people is useful, and it can mislead you', text: [
          "The authors do not dismiss knowledge. They write that it is important to know as much as possible about the health practices of the communities you serve. They give an example of a healing practice that leaves marks on a child's skin, which a worker who did not know about it might mistake for abuse.",
          "But they warn against a false sense of security. They describe a nurse who had taken a course on a group's health beliefs and used it to dismiss a patient's obvious pain. The course knowledge became a stereotype, it blocked what was happening in front of her, and it led her to disregard a colleague who might have helped. Their conclusion is that treating competence as having completed some training is inadequate and can be harmful.",
          "What they ask for instead is a simultaneous practice. Learn what you can, and also keep reflecting on yourself, stay flexible enough to look again at each person, and be humble enough to say you do not know when you do not know and to find resources.",
          "They also write that the evidence of poor care in medicine reflects, more than a lack of knowledge, a need for change in practitioners' self-awareness and attitudes. They cite studies that found differences by race and ethnicity in who received pain medication and in who received procedures to protect sight. Those studies were published in the 1990s, and they are cited to make the point that the problem is not only what practitioners know.",
        ] },
        { kind: 'concept', title: 'What research says humility includes', text: [
          "In 2016, Cynthia Foronda and colleagues at Johns Hopkins published a concept analysis of the term in the Journal of Transcultural Nursing. They reviewed 62 articles from 2009 to 2014. Their opening point is that the term is used often, and that people's understanding of it is unclear.",
          "They found five attributes. Openness, a willingness to explore new ideas and an open mind toward a person who is different from you. Self-awareness, knowing your own strengths, limits, values, beliefs, and how you come across to others. Egolessness, which they define as being humble and seeing the worth of every person on a level plane, flattening any hierarchy or difference in power. Supportive interactions, meaning positive exchanges between people. And self-reflection and critique, a critical process of reflecting on your own thoughts, feelings, and actions.",
          "They found two conditions that bring cultural humility into play, diversity and power imbalance. And they found outcomes: mutual empowerment, partnerships, respect, optimal care, and lifelong learning. They describe it as a lifelong process.",
          "Be clear about what this review is. It is a synthesis of how a term has been used, not a test of whether a training changes outcomes. The authors also disclose details about their own research team that may have shaped their reading, including that their team lacked diversity in several areas such as socioeconomic status, age, sexual orientation, and disability.",
        ] },
        { kind: 'concept', title: 'Culture is not only race or ethnicity', text: [
          "Tervalon and Murray-Garcia describe a person who belongs to many cultural roles at the same time. They quote another author's example of a man who belongs at once to an ethnic community, a gender, a family as a father and husband, a faith, a trade, a school, and a neighborhood, eight roles in all. They write that only the person is able to explain how those roles intersect and which matter in the present situation.",
          "Foronda's review found that cultural humility is discussed in connection with differences in race and ethnicity, and also with sexual orientation, social status, professional roles, and the relationship between provider and patient.",
          "A SAMHSA consensus panel member writes in TIP 35 that ethnicity does not always determine the culture or values a person chooses to live by, and that years of education do not necessarily tell you how someone has adapted to the surrounding culture. If in doubt about a person's beliefs, the panel member says, explore them with the person.",
        ] },
        { kind: 'concept', title: 'Power, and what it has to do with your job', text: [
          "Both articles put power at the center. Tervalon and Murray-Garcia cite studies of conversations between doctors and patients and report that, in one, doctors started over 90 percent of the questions. They describe a more patient-focused style, in which the practitioner signals that the person's own agenda and perspective matter, so that the person can tell their story. They say this removes the need to master every group's beliefs, because the person is encouraged to say how much or how little culture has to do with the matter at hand.",
          "You hold power too. You may decide what form comes first, whether someone gets a call back, what goes in the record, whether a referral is made, and what a person is told about their options. You know the system, and they may not. That is power, and it is easy to overlook because it feels like helping.",
          "Humility here means noticing the power, naming it when it helps, and sharing it. Ask what the person wants before you decide what they need. Explain why you ask things. Let them correct the record.",
        ] },
        { kind: 'concept', title: 'Mistrust has reasons', text: [
          "SAMHSA's trauma-informed care protocol defines historical trauma, also called generational trauma, as events so widespread that they affect an entire culture, with effects strong enough to influence generations beyond those who lived through them directly. It gives examples that include the forced assimilation and relocation of American Indians and the enslavement of African Americans.",
          "You do not need to know a person's history to respect this. Trust that is slow to come may have good reasons behind it. SAMHSA's cultural responsiveness mnemonic in TIP 35 puts it plainly. Trust must be earned, through actions that build the relationship.",
        ] },
        { kind: 'concept', title: 'Where this shows up in your role', text: [
          "The C3 Project's list of community health worker skills names the ability to practice cultural humility as one of the interpersonal and relationship-building skills. Its list of roles includes cultural mediation among individuals, communities, and health and social service systems, which includes educating systems about community perspectives and cultural norms, and building health literacy and cross-cultural communication.",
          "SAMHSA's core competencies for peer workers include understanding your own values and culture and how they may contribute to biases, judgments, and beliefs, and appreciating and respecting the cultural and spiritual beliefs and practices of the people you work with and their families.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Cultural humility', plain: "A lifelong practice of self-reflection, noticing and redressing power imbalances, and building partnerships, instead of assuming you have mastered another group's culture." },
          { term: 'Power imbalance', plain: "The difference in access, information, and authority between a worker and the person served." },
          { term: 'Stereotype', plain: "Treating what you know about a group as if it tells you about one person." },
          { term: 'Self-reflection', plain: "Looking honestly at your own assumptions, reactions, and habits." },
          { term: 'Historical trauma', plain: "Harm so widespread that it affects an entire culture and carries across generations." },
        ] },
        { kind: 'myths', items: [
          { myth: "If I learn the customs of each group I serve, I will be culturally competent.", reality: "Knowledge matters, and the authors of the 1998 article warn that treating training as mastery can become stereotyping. They ask for self-reflection and lifelong learning alongside it." },
          { myth: "If I come from the same community, I already know what this person needs.", reality: "The same logic applies to you. A shared background is a way in, and it does not replace asking. People hold many roles and make their own choices." },
          { myth: "Humility means having no knowledge or opinions.", reality: "It means holding what you know loosely, saying so when you do not know, and finding resources." },
          { myth: "Culture means race or ethnicity.", reality: "The research describes many cultural roles in one person, including family, work, faith, place, and more." },
        ] },
        { kind: 'case', title: 'A handout and a question', scenario: true, text: [
          "A worker visits a woman in her seventies who has just been told to change how she eats. The worker hands her a sheet with a list of foods to choose and a list to avoid. The woman says she does not eat most of the things on the first list. The worker thinks to herself, she is not trying.",
          "Then the worker stops, puts the sheet down, and says, tell me what a regular day of eating looks like for you. Who cooks, and what matters at meals? The woman talks for ten minutes about who she cooks for, what the meals mean to the family, and how little money there is on the days before the benefit comes. The worker's list was not wrong. It was not yet connected to the woman's life. They build the plan together out of what the woman said.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-ch-q1',
          q: "What is the core difference between cultural humility and the older idea of cultural competence, as described by Tervalon and Murray-Garcia?",
          options: [
            "Cultural humility means you need to know nothing about other groups",
            "Cultural humility is a lifelong practice of self-reflection and shared power, not a fixed body of knowledge to master",
            "Cultural humility applies only to physicians",
            "Cultural humility replaces the need for interpreters and translated materials",
          ],
          answer: 1,
          rationale: "The authors define cultural humility as a lifelong commitment to self-evaluation and self-critique, to redressing power imbalances, and to non-paternalistic partnerships, in contrast to competence as mastery of a finite body of knowledge.",
          distractors: "The authors encourage learning about communities. They also do not say humility replaces other supports.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ch-q2',
          q: "A coworker says, I have grown up in this neighborhood, so I know exactly what these families need. Which response fits cultural humility?",
          options: [
            "You are right, shared background is enough",
            "Your background gives you a way in, and each person still gets to tell you what matters to them",
            "You should stop working in your own neighborhood",
            "It does not matter because every person is the same",
          ],
          answer: 1,
          rationale: "Shared background can build trust, and the research on humility asks you to keep looking afresh at each person and to let them say how much culture matters in their own situation.",
          distractors: "The other answers assume a shared background is a substitute for asking, reject lived experience, or deny differences.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What are three of the roles that make up who you are? How do they shape what you notice and what you miss?",
          "Where do you hold power in your work that you rarely think about?",
        ] },
        { kind: 'takeaways', items: [
          "Cultural humility is a lifelong practice of self-reflection, shared power, and partnership. It is not a finish line.",
          "Knowledge about communities helps and can harden into stereotype. Look afresh at each person.",
          "You hold power. Notice it, name it, and share it by asking before you decide.",
        ] },
        ev([
          "Tervalon M, Murray-Garcia J. Cultural humility versus cultural competence: a critical distinction in defining physician training outcomes in multicultural education. Journal of Health Care for the Poor and Underserved, 1998;9(2):117-125. The definition, the warning about stereotyping, patient-focused interviewing, and the cited studies. Written for physician training, and adapted here.",
          "Foronda C, Baptiste DL, Reinholdt MM, Ousman K. Cultural humility: a concept analysis. Journal of Transcultural Nursing, 2016;27(3):210-217. The five attributes, the antecedents and consequences, and the authors' disclosure about their team. The review is a synthesis of how the term is used.",
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 2. The consensus panel member's comment that ethnicity does not always determine values, and the RESPECT mnemonic. Read in full from the SAMHSA publication.",
          "SAMHSA. Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services. The definition and examples of historical trauma.",
          "C3 Project. Understanding Scope and Competencies, a Contemporary Look at the U.S. Community Health Worker Field (2016). Skill 2, interpersonal and relationship-building skills, which includes the ability to practice cultural humility, and Role 1, cultural mediation.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category IV, personalizes peer support.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ch-l2',
      title: 'Building trust: asking, listening, repairing, and showing up',
      summary: 'A short framework for asking about a person\'s own understanding, how to repair a misstep, and how to build relationships with a community.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Humility is easy to admire and hard to do in a ten-minute contact. This lesson turns it into a handful of habits you can use in the moment, plus a way to think about relationships that last longer than one visit.",
        ] },
        { kind: 'concept', title: 'A framework for asking: RESPECT', text: [
          "TIP 35 includes a mnemonic for cultural responsiveness, taken from an earlier SAMHSA protocol. Each letter names something to pay attention to. It was written for counselors, and the habits apply to community health and peer work as well.",
          "Respect. Understand how respect is shown in different cultures and show it in your words and body language. Explanatory model. Ask about the person's own understanding of what is happening and what they believe about it, and about how people change. Sociocultural context. Recognize how class, gender, race, ethnicity, sexual or gender identity, age, income, and other characteristics may matter. Power. Acknowledge the power difference between you and the person. Empathy. Show that you are really interested in their view and concerns. Concerns and fears. Ask what worries the person about seeking help. Trust. Remember that trust has to be earned, and act in ways that build it.",
          "The protocol adds that cultural differences might be reflected in the value placed on health, the meaning of time, the meaning of substance use, and responsibilities to community and family. Its advice is to try to understand the person's perspective instead of imposing mainstream values or making quick judgments. It notes that some cultures support involving family members in counseling and others find this disrespectful. It also says to know what resources a person has, and to be sensitive to poverty, social isolation, historical trauma, and recent losses.",
        ] },
        { kind: 'concept', title: 'Asking about the person\'s own understanding', text: [
          "The most direct way to practice humility is to ask people how they see their own situation, and then to listen. The questions below were written for this course. They are not scripts.",
          "How do you think about what has been happening. What do you call it. What worries you most about it. What have you tried already, and what has helped. Who do you turn to. What would you want me to know about you or your family. What would make this easier or harder for you.",
          "Ask before you assume. If the person says something you do not understand, say so and ask. Tervalon and Murray-Garcia say that people with humility are willing to say that they do not know when they truly do not know and to find resources that can help.",
        ] },
        { kind: 'concept', title: 'Know your own starting point', text: [
          "Humility starts with your own view. The 1998 article describes methods that educators have used to help people examine their own identities and assumptions: small-group discussion, personal journals, role models, and video feedback on interactions. In your work, the same idea means writing down your reactions, noticing when you feel impatient or certain, and asking someone you trust to give you feedback.",
          "The peer worker competencies call for the same, naming your own values and culture and how they may lead to judgments. Having a bias is not unusual. The practice is noticing it and not acting on it.",
        ] },
        { kind: 'concept', title: 'Language and the people who help you communicate', text: [
          "A person who is more comfortable in another language is not well served by a conversation in a language they struggle with. The original national standards for culturally and linguistically appropriate services recommend that organizations offer language assistance, make sure it is competent, and not use family and friends as interpreters except when the person asks. Tervalon and Murray-Garcia make the same point, and note that an institution that teaches this should provide an accessible alternative.",
          "If you cannot get language help for someone, tell your supervisor, because that is a gap your program needs to fix. It is not a failure to be absorbed quietly.",
        ] },
        { kind: 'concept', title: 'When you get it wrong', text: [
          "You will say something that lands badly. The goal is not to avoid every misstep. It is to be the kind of person who can repair one. Here is a short pattern, written for this course as practice guidance and not drawn from a single source.",
          "Notice, from the person's face or their silence, that something shifted. Pause. Name it simply, without a long apology that makes the moment about you. Ask. Listen to what they say. Adjust what you do. Thank them. If it was serious, tell your supervisor, and keep what you learned.",
          "This follows from the research on humility. Foronda's review names egolessness, which means humility, and self-reflection and critique as core attributes of the practice.",
        ] },
        { kind: 'concept', title: 'Relationships with a community, not only a person', text: [
          "Tervalon and Murray-Garcia say the knowledge that matters about health can reside outside the academic medical center, and outside the practice of Western medicine. They urge building on the assets and adaptive strengths of communities and their members, in partnerships that benefit both sides and are not paternalistic. They add that the institution should reflect on its own history with the surrounding community.",
          "For your work that suggests a few habits. Show up consistently, and keep your word. Learn who the trusted people and places in a community are, and work with them. Return what you learn, such as what you heard in a meeting or what changed because of what people said. Credit the people who helped. And bring community perspectives to your own program, which is part of the cultural mediation role the C3 Project describes.",
          "The peer worker competencies describe the relationship as respectful, trusting, empathetic, collaborative, and mutual.",
        ] },
        { kind: 'concept', title: 'What your program owes you', text: [
          "Humility is not only a personal burden. Tervalon and Murray-Garcia call for institutions to practice the same reflection and to hold themselves accountable, asking questions about the makeup of their staff, the training that all staff receive, and whether the institution's processes contradict what it teaches. If you do not have what you need to work respectfully, such as interpreters, materials in the languages of the community, or time, say so. That is part of the work.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Explanatory model', plain: "How a person understands what is happening to them and why." },
          { term: 'Sociocultural context', plain: "The social and cultural factors, such as class, age, gender, and identity, that may shape a person's experience." },
          { term: 'Repair', plain: "Noticing a misstep, naming it simply, asking, and adjusting." },
          { term: 'Reciprocity', plain: "A relationship in which both sides give and receive." },
        ] },
        { kind: 'check', check: {
          id: 'hrtp-ch-q3',
          q: "Which question best reflects asking about a person's explanatory model?",
          options: [
            "Do you take your medication?",
            "Are you from this neighborhood?",
            "How do you think about what has been happening, and what worries you most about it?",
            "Do you understand what the doctor told you?",
          ],
          answer: 2,
          rationale: "An explanatory model question invites the person to say in their own words how they understand the situation and what concerns them, without assuming from their background.",
          distractors: "The first and fourth are closed questions about compliance or comprehension. The second invites assumptions from background.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ch-q4',
          q: "You realize you made an assumption that upset someone you are helping. What is the most useful next step?",
          options: [
            "Pretend nothing happened",
            "Give a long apology and explain why you said it",
            "Pause, name it simply, ask what they would want, and adjust",
            "Change the subject to something easier",
          ],
          answer: 2,
          rationale: "A short repair keeps attention on the person. Pausing, naming the moment, asking, and adjusting honors their perspective, and it fits the humility and self-reflection the research describes.",
          distractors: "Ignoring the moment leaves the harm, a long apology makes the moment about you, and changing the subject avoids repair.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ch-q5',
          q: "A person who speaks little English comes with their teenage child, and the child offers to interpret. What do the original national standards for culturally and linguistically appropriate services recommend?",
          options: [
            "Use the child as an interpreter because they are present",
            "Offer language assistance from a competent interpreter or bilingual staff, and not use family or friends unless the person asks",
            "Skip the conversation",
            "Write your answers in English and give them to the person",
          ],
          answer: 1,
          rationale: "The standards recommend offering competent language assistance and not using family or friends as interpreters except when the person requests it.",
          distractors: "The other answers rely on a child, drop communication, or use language the person cannot read.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Think of a time you misjudged someone. What did you assume, and what did it cost?",
          "What is one thing you could do this month to build trust with the community you serve?",
        ] },
        { kind: 'takeaways', items: [
          "Ask people how they see their own situation, and listen. Do not assume from background.",
          "Repair quickly and simply. A misstep is not the end of the relationship.",
          "Build relationships with communities over time, through consistency, reciprocity, and credit. Ask your program for what you need to work respectfully.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 2. The RESPECT mnemonic and the guidance on cultural differences, resources, and poverty. The protocol credits the mnemonic to an earlier SAMHSA protocol. Read in full from the SAMHSA publication.",
          "Tervalon M, Murray-Garcia J (1998). Self-reflection methods, the willingness to say you do not know, community assets, partnership, institutional consistency, and the point about interpreters.",
          "Foronda C, et al. (2016). Egolessness and self-reflection and critique as attributes of cultural humility.",
          "Office of Minority Health. Recommended National Standards for Culturally and Linguistically Appropriate Services in Health Care (the original recommended standards, not the later enhanced standards). Language assistance and the guidance on family and friends as interpreters.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category I, engages peers in collaborative and caring relationships, Category IV, personalizes peer support, and the relationship principle.",
          "C3 Project (2016). Role 1, cultural mediation among individuals, communities, and health and social service systems.",
          "The questions in this lesson and the repair pattern were written for this course as practice guidance.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-ch-s1',
      title: 'Session 1, Seeing Yourself and Your Assumptions',
      summary: 'A live practice session. Look at the roles that make you who you are, test your assumptions, and map the power you hold.',
      minutes: 50,
      blocks: [
        { kind: 'why', text: [
          "Humility starts with you. This session gives you time to notice your own starting points, in a setting where everyone is doing the same.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "You share only what you choose to share, and you can pass at any time. We do not ask anyone to explain or represent a group. We speak from our own experience and do not speak for others. What is said in the room stays in the room. Disagreement is welcome, and put-downs are not. If something in the session is hard, tell the facilitator. You can call or text 988 at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Your many roles, 10 minutes', text: "Each person writes up to eight roles that describe them, such as a family role, a job, a place, a faith or belief, or a community. They circle two and write how those roles shape what they notice when they meet someone new. Pairs share as much as they choose." },
          { label: 'Assumptions check, 10 minutes', text: "The facilitator reads short statements people often make about those they serve. In pairs, participants rewrite each as a question they could ask the person." },
          { label: 'Power map, 10 minutes', text: "Participants list the power they hold in a typical contact, such as forms, information, scheduling, and records. Next to each, they write one way to share it." },
          { label: 'Asking practice, 10 minutes', text: "In pairs, one person plays someone describing a situation, using an invented scenario, and the other practices asking about how they see it, using the questions from Lesson 2 and no advice." },
          { label: 'Debrief, 5 minutes', text: "Each person names one assumption they will watch for this week." },
        ] },
        { kind: 'list', title: 'Assumption statements to turn into questions', items: [
          "She missed the appointment, so she does not care about her health.",
          "He will not want to talk about that with his family.",
          "They probably will not want to try something new.",
          "People from my own neighborhood think the same way I do.",
          "If she doesn't ask questions, she understands.",
        ] },
        { kind: 'list', title: 'Power map prompts', items: [
          "Who decides what we talk about first?",
          "Who has the form, and who has to sign it?",
          "Who knows how the system works?",
          "Who decides what goes in the record, and does the person see it?",
          "What happens if the person says no?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which of your roles do you notice most in your work? Which do you rarely notice?",
          "What is one thing you do that shares power?",
        ] },
        { kind: 'takeaways', items: [
          "You bring many roles, and they shape what you notice.",
          "Turn assumptions into questions.",
          "Notice the power you hold, and look for ways to share it.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite, chiefly the 1998 article on cultural humility and the 2016 concept analysis. The statements and scenes were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-ch-s2',
      title: 'Session 2, Asking, Repairing, and Showing Up',
      summary: 'A live practice session. Practice asking, practice repair, and sketch how you will build relationships with a community.',
      minutes: 50,
      blocks: [
        { kind: 'why', text: [
          "Knowing the habits is the easy part. This session gives you a chance to try them with a partner, so that the words are familiar by the time you need them.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements from Session 1 apply. In practice rounds, use invented characters and situations only. Do not use a real person or a real group as an example. If a round feels like too much, say pause and the round stops without question.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A brief check-in and one thing you noticed since Session 1." },
          { label: 'Asking triads, 15 minutes', text: "Groups of three rotate through three roles, the person describing their situation, the worker, and the observer. Each round is about four minutes with a short debrief. The worker asks about how the person sees things, using the Lesson 2 questions, and reflects what they hear. The observer notes questions that were open, assumptions that slipped in, and moments where the worker explained instead of listened." },
          { label: 'Repair practice, 10 minutes', text: "The facilitator reads three moments when a worker has made a misstep. In pairs, practice the repair pattern aloud: pause, name it simply, ask, listen, adjust, thank." },
          { label: 'Your community plan, 12 minutes', text: "Individually, participants sketch a community they serve and answer four questions. Who are the trusted people and places? How will I show up consistently? What will I return to the community? What will I ask my program for? Pairs share one idea." },
          { label: 'Close, 3 minutes', text: "One word for how you are leaving, and a reminder of support resources." },
        ] },
        { kind: 'list', title: 'Moments for repair practice', items: [
          "A worker says, I know how this works in your family, and the person goes quiet.",
          "A worker uses a word the person does not recognize and they look away.",
          "A worker begins filling out a form for someone without asking.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker ask before assuming?",
          "How many questions were open, and how many were closed?",
          "Did the worker reflect what they heard before asking the next question?",
          "Was there a moment where the worker explained instead of listened?",
          "How did the worker handle a misstep, if one occurred?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which question will you use first this week?",
          "What do you want to ask your supervisor or program for?",
        ] },
        { kind: 'takeaways', items: [
          "Ask about the person's own understanding, then listen and reflect.",
          "Repair is a short, steady pattern: pause, name, ask, adjust, thank.",
          "Relationships with communities grow through consistency, reciprocity, and credit.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite. The moments and scenes were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-ch-practice',
    title: 'Your cultural humility practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: a look at your own roles, assumptions turned into questions, the questions you will ask, and your plan for repair and relationships.',
    fields: [
      { id: 'roles', label: 'Your roles and what they shape', help: 'List up to eight roles that describe you. Choose two and write how each shapes what you notice and what you might miss in your work.', multiline: true },
      { id: 'assumptions', label: 'Three assumptions, three questions', help: 'Write three assumptions you catch yourself making in your work. For each, write a question you could ask instead.', multiline: true },
      { id: 'questions', label: 'Your questions for a first conversation', help: 'Write five questions you can use to ask a person how they see their own situation. Add one thing you will do to share power in that conversation.', multiline: true },
      { id: 'plan', label: 'Your repair and relationship plan', help: 'Write the words you will use to repair a misstep. Name one community you serve, one person or place you will connect with, how you will show up, what you will return to them, and one thing you will ask your program for.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'Tervalon M, Murray-Garcia J. Cultural humility versus cultural competence: a critical distinction in defining physician training outcomes in multicultural education (1998)', use: 'The article that introduced cultural humility in health care.', url: 'https://doi.org/10.1353/hpu.2010.0233' },
    { name: 'Foronda C, et al. Cultural humility: a concept analysis (2016)', use: 'A review of how the term is used, with its attributes, antecedents, and consequences.', url: 'https://doi.org/10.1177/1043659615592677' },
    { name: 'SAMHSA: Treatment Improvement Protocol 35, Enhancing Motivation for Change in Substance Use Disorder Treatment (2019)', use: 'The cultural responsiveness section and the RESPECT mnemonic.', url: 'https://store.samhsa.gov/sites/default/files/tip-35-pep19-02-01-003.pdf' },
    { name: 'SAMHSA: Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services', use: 'The definition and effects of historical trauma, and trauma-informed principles.', url: 'https://www.store.samhsa.gov/sites/default/files/sma14-4816.pdf' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The competencies on relationships and personalizing support.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
    { name: 'C3 Project: Understanding Scope and Competencies, a Contemporary Look at the U.S. CHW Field (2016)', use: 'The national list of roles and skills, including cultural mediation and cultural humility.', url: 'https://portal.ct.gov/-/media/ohs/sim/chw-advisory-committee/2016/2016-06-14/chw-c3-report.pdf' },
  ],
};
