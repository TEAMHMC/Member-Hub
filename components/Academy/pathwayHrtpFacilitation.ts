// Community Mental Health Worker Pathway, Foundations course 10: Health Education and Facilitation.
//
// This is the certificate's own course 10 (id chw_education_facilitation, 3 hours, live). The id
// matches the certificate on purpose: the Academy posts every completed course to the portal, and the
// portal credits a learner only for ids it recognizes.
//
// A live practice course. Two short lessons are read before the sessions. Two scheduled sessions are
// practiced with a facilitator and a group. The stated 180 minutes equal the lessons, the sessions,
// and the practice file.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources
// are the C3 Project's list of community health worker roles and skills (the education and
// facilitation skill), two sections of the Community Tool Box on group facilitation, the Agency for
// Healthcare Research and Quality's teach-back page and health literacy toolkit, an archived CDC
// training module for community health worker programs, SAMHSA's Treatment Improvement Protocol 35 for
// its method of giving information, and the federal plain language guide. These sources describe good
// practice and expert views. None of them is a trial showing that one teaching method produces better
// health outcomes than another, and the course does not claim that. The sample topics, scenes, and
// practice statements were written for this course and describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_EDUCATION_FACILITATION: Course = {
  id: 'chw_education_facilitation',
  num: 10,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Health Education and Facilitation',
  promise:
    "Plan and teach a short health education session in plain language, check that people understood, and facilitate a group discussion so that everyone can take part, while staying inside your role.",
  about: [
    "This course is about two linked skills. Teaching, which is helping people understand something they need to know. And facilitating, which is helping a group do its own thinking and talking. Community health workers do both all the time, at a table at a health fair, in a living room, in a support circle, or in a meeting with a coalition.",
    "It rests on the C3 Project's national list of community health worker roles and skills, two sections of the Community Tool Box on group facilitation and group discussion, the teach-back guidance of the Agency for Healthcare Research and Quality, an archived CDC training module on instructional methods for community health workers, the method for giving information in SAMHSA's protocol on motivation for change, and the federal plain language guidance.",
    "It is Foundations course 10 of HMC's community health worker certificate. It is a live practice course. You read two short lessons, then practice in two scheduled sessions, then complete a practice file. You will teach and facilitate for each other with invented and low-stakes topics, so you can focus on the skill.",
  ],
  objectives: [
    "Plan a short health education session around a purpose, two or three key messages, and what people will be able to do.",
    "Use plain language, small pieces, and teach-back, and check understanding without testing people.",
    "Use learner-centered methods that build on what people already know and have lived.",
    "Set up a group with a clear purpose, agreements, and ways for everyone to take part.",
    "Share airtime, handle off-topic remarks, misinformation, and disagreement, and close with a clear summary.",
    "Say I do not know, find accurate information, and stay inside your role.",
  ],
  minutes: 180,
  prerequisites: "None. Communication and Documentation and Motivational Interviewing are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management who explain things to individuals or groups, or who will lead groups.",
  freshness:
    "The practices in this course are well established. Health information changes, so always check that what you teach is current and comes from your program or a reliable source. Your program tells you which topics and groups are part of your role.",
  modality: 'virtual',
  requirements: [
    { id: 'ef-lessons', label: 'Read the two lessons before the first session', kind: 'assignment' },
    { id: 'ef-s1', label: 'Attend Session 1, Plan and Teach a Short Lesson', kind: 'attend' },
    { id: 'ef-s2', label: 'Attend Session 2, Facilitate a Discussion', kind: 'attend' },
    { id: 'ef-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ef-l1',
      title: 'Teaching health information so that people can use it',
      summary: 'What the national skill list expects, how to plan, how to say less and say it plainly, and how to check understanding.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Most people who explain things for a living know too much about the subject and too little about their listener. You can give a perfectly correct explanation that no one can use. Good health education starts with the person or group in front of you and ends with something they can do.",
        ] },
        { kind: 'concept', title: 'What the national skill list says', text: [
          "The C3 Project's list of community health worker skills includes a skill called education and facilitation. Under it are eight abilities. To use empowering and learner-centered teaching strategies. To use a range of appropriate and effective educational techniques. To facilitate group discussions and decision-making. To plan and conduct classes and presentations for a variety of groups. To seek out appropriate information and respond to questions about pertinent topics. To find and share requested information. To collaborate with other educators. And to collect and use information from and with community members.",
          "The same report lists a role called providing culturally appropriate health education and information. It includes conducting health promotion and disease prevention education in a way that matches the linguistic and cultural needs of the community, and giving people the information they need to understand and prevent diseases and to manage health conditions.",
          "Notice the phrases learner-centered and from and with community members. The skill is not delivering a talk. It is working with people.",
        ] },
        { kind: 'concept', title: 'Start with purpose and people', text: [
          "The Community Tool Box, a long-standing public resource on community work, says good facilitation begins before anyone arrives. It lists things to understand first. The purpose. The outcomes you want. Who the participants are. What power differences might affect who speaks. Accessibility and communication needs. The time available. The information people need. And where there might be disagreement.",
          "For a health education session, turn that into a short plan. Who is this for, and what do they already know. What is the purpose, in one sentence. What are the two or three things you most want people to leave with. What will they be able to do. How will you check that it worked. Keeping to two or three key messages is not a rule from a source. It is practice guidance for this course, because most people retain little from a long talk.",
        ] },
        { kind: 'concept', title: 'Say less, and say it plainly', text: [
          "The federal plain language guide describes plain language as content that is clear and easy to understand, written for its specific audience. Writing for your audience means choosing the words, the order, and the examples that your listeners use, and dropping the ones they do not.",
          "SAMHSA's protocol on motivation for change describes a way to give information that works in a conversation or a class. It calls it elicit, provide, elicit. First, ask what people already know and whether they would like more. Then give the information neutrally, in small pieces, focused on what they said they want to know. The protocol notes that too much information can overwhelm people. Then ask what they make of it, and give them time to think.",
          "That pattern is the backbone of a good short lesson. Ask. Teach one piece. Ask.",
        ] },
        { kind: 'concept', title: 'Check that you explained it clearly: teach-back', text: [
          "The Agency for Healthcare Research and Quality describes teach-back as an evidence-based health literacy intervention that promotes engagement, safety, adherence, and quality. In a teach-back, you ask the person to explain the information or the steps in their own words. The agency describes it as a way to confirm that you have explained things clearly. The check is on your explanation, not on the person.",
          "The agency lists many uses, including medication instructions, a new diagnosis, next steps for followup testing, recommended behavior changes, and treatment plans. For your work, use it for program steps, deadlines, and what to bring. It may take a little longer at first. If the person cannot explain it back, you explain it differently and ask again.",
          "A simple way to ask is to put the responsibility on yourself. I want to be sure I explained that clearly. Can you tell me in your own words what you will do next?",
        ] },
        { kind: 'concept', title: 'Learn with people, not at them', text: [
          "An archived CDC training module for programs that train community health workers says that adult learning principles should guide instruction, and that most community health worker training avoids a lecture, reading, and exam format. It notes that some experts advocate popular education, a method developed by Paulo Freire in Brazil, which uses a structured process of group problem solving to address root causes of community problems. It suggests that an instructor act more as a facilitator than as an authority, encouraging cooperative learning and problem solving, and serving as a role model for the relationship the worker will have with community members.",
          "That page is an overview of expert views and practice, not a study that compares methods. The practical lesson is consistent with the rest of this curriculum. People learn from what they already know and have lived, so ask first, use their examples, let them practice, and invite them to teach each other.",
        ] },
        { kind: 'concept', title: 'When you do not know', text: [
          "The skill list includes seeking out appropriate information and finding and sharing requested information. That means that not knowing is part of the job. The 1998 article on cultural humility that you read in an earlier course makes the same point about practitioners, who should be flexible enough to say they do not know when they truly do not know and to find resources.",
          "Practice guidance for this course. Say, I do not know that, and I want to give you the right answer. I will find out and get back to you. Then use your program's materials or a reliable public source, check the date, and follow up. Questions about diagnosis, medicine, or what a person should do about their own condition belong to their clinician. You can help them write the question down and get it to the right person.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Learner-centered', plain: "Starting from what the people you are teaching know, want, and can do." },
          { term: 'Plain language', plain: "Clear, easy-to-understand writing and speaking, chosen for a specific audience." },
          { term: 'Elicit, provide, elicit', plain: "Ask what they know, give information in small pieces, ask what they make of it." },
          { term: 'Teach-back', plain: "Asking a person to explain the information in their own words, to confirm that you explained it clearly." },
          { term: 'Popular education', plain: "A participatory approach in which groups use their own experience to analyze and act on problems in their community." },
        ] },
        { kind: 'myths', items: [
          { myth: "Teaching means telling people everything they need to know.", reality: "The protocol warns that too much information can overwhelm people. Choose a few messages and check them." },
          { myth: "Teach-back is a test of the listener.", reality: "The agency describes it as a check on how clearly you explained it. If the person cannot say it back, change your explanation." },
          { myth: "If I do not have the answer, I have lost their trust.", reality: "Saying you do not know, and finding out, builds trust. The skill list expects you to find and share information." },
          { myth: "Adults learn best from a lecture.", reality: "The archived CDC module advises using adult learning principles and avoiding a lecture, reading, and exam format." },
        ] },
        { kind: 'case', title: 'Two explanations of the same form', scenario: true, text: [
          "A worker is explaining how to renew a benefit to a small group at a community center. In the first version, she reads from a handout for fifteen minutes, covering every step, deadline, and exception, and asks at the end whether there are any questions. No one asks anything, and a week later most of the group has missed the deadline.",
          "In the second version she begins by asking who has renewed before and what was hard. Two people describe getting stuck at the same step. She teaches the three steps that most people need, pausing after each to ask what questions people have. At the end she asks, I want to be sure I explained that clearly. Can someone tell me what you will do first when the letter comes? Several people say it in their own words. She notices one person who had it wrong, and explains it again. Both versions took the same amount of time.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-ef-q1',
          q: "According to the AHRQ description, what is the purpose of teach-back?",
          options: [
            "To test whether the person has been paying attention",
            "To confirm that you have explained the information clearly, by asking the person to explain it in their own words",
            "To save time by skipping the explanation",
            "To document that the person understood",
          ],
          answer: 1,
          rationale: "AHRQ describes teach-back as a way to confirm that you have explained information clearly, by asking the person to explain it in their own words. The responsibility is on the explainer.",
          distractors: "The other answers describe a test of the learner, a shortcut, or a recordkeeping step.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ef-q2',
          q: "You are teaching a group and someone asks a question you cannot answer. What is the best response?",
          options: [
            "Give your best guess so you do not look unprepared",
            "Change the subject",
            "Say you do not know, offer to find out from a reliable source, and follow up",
            "Tell them to ask their friends",
          ],
          answer: 2,
          rationale: "The national skill list expects you to seek out and share information, and trust is built by being honest about what you do not know and then following through.",
          distractors: "Guessing risks passing on wrong health information, and the other responses leave the question unanswered.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ef-q3',
          q: "Which approach best matches elicit, provide, elicit?",
          options: [
            "Give all the information, then ask whether there are questions",
            "Ask what people already know, give one small piece of information, then ask what they make of it",
            "Ask a series of yes or no questions and then lecture",
            "Hand out a brochure and move on",
          ],
          answer: 1,
          rationale: "The protocol's method begins by asking, provides information in small pieces, and then asks what the person makes of it.",
          distractors: "The other options skip the first step, the last step, or both.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Think of the last time you explained something to someone. How did you know whether they understood?",
          "What is a topic you often teach where you could say less?",
        ] },
        { kind: 'takeaways', items: [
          "Start with who the people are and what they need to be able to do.",
          "Ask, teach one small piece, and ask again. Choose a few messages, not all of them.",
          "Use teach-back to check your own explanation. Say I do not know, and find the answer.",
        ] },
        ev([
          "C3 Project. Understanding Scope and Competencies, a Contemporary Look at the U.S. Community Health Worker Field (2016). Skill 6, education and facilitation, and the role of providing culturally appropriate health education and information.",
          "Community Tool Box, University of Kansas. Chapter 16, Section 2, Developing Facilitation Skills. The list of things to understand before a session.",
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 3. The elicit, provide, elicit method, including giving information in small pieces. Read in full from the SAMHSA publication.",
          "Agency for Healthcare Research and Quality. Tool: Teach-Back (TeamSTEPPS), and the Health Literacy Universal Precautions Toolkit, 3rd edition. The description of teach-back and the examples of its use.",
          "Digital.gov. Plain language guide series. The description of plain language and writing for your audience.",
          "Centers for Disease Control and Prevention (archived). CHW eLearning, Session 3, Instructional Methods. The page is an archived overview of expert views and describes no study comparing methods.",
          "Tervalon M, Murray-Garcia J (1998). Used from the cultural humility course, for the point about saying you do not know.",
          "The two-or-three-message guideline, the plan questions for a short lesson, and the wording for saying I do not know are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ef-l2',
      title: 'Facilitating a group so that everyone can take part',
      summary: 'What facilitation is, how to prepare, and how to handle airtime, off-topic remarks, misinformation, and disagreement.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "A group is more than a room full of individuals. The best groups let people learn from each other. Left alone, groups also let a few voices dominate, let misinformation spread, and let quiet people leave without saying what they came to say. Facilitation is the set of skills that helps a group work.",
        ] },
        { kind: 'concept', title: 'What facilitation is', text: [
          "The Community Tool Box describes facilitation skills as the process skills used to help groups do their work. A facilitator helps structure and support the group process so participants can understand the purpose, contribute what they know, work through questions and disagreement, and reach an appropriate outcome. It differs from simply leading a meeting because it focuses on how the group works as well as on the result.",
          "It lists several principles. The facilitator supports the process and does not act as the source of all answers, because participants may hold expertise, community knowledge, or lived experience that the facilitator does not. The facilitator pays attention to how people can participate, including accessibility, airtime, power differences, and psychological safety. The facilitator is clear about their role. And the facilitator is not neutral about the integrity of the process. Safety, respectful conduct, confidentiality, and other boundaries still need to be kept.",
          "It adds that facilitation is a learnable set of skills. People improve through training, preparation, observation, practice, co-facilitation, feedback, and reflection.",
        ] },
        { kind: 'concept', title: 'Be clear about purpose and authority', text: [
          "The Community Tool Box says to clarify, before the discussion begins, what kind of discussion this is. Are people exploring an issue, giving advice, developing recommendations, or making a decision. Who has the final say. It warns against implying participants have more authority than they actually do, and against describing a process as open-ended when important parts are already decided.",
          "For a health education group, the purpose is usually learning or mutual support, and no decision is being made. Say so. People should know what they are there for.",
          "The source also notes that discussion leaders include community members, staff, trainers, and people with relevant lived or community experience and facilitation preparation, and that position or reputation alone does not make someone an effective facilitator.",
        ] },
        { kind: 'concept', title: 'Set up for participation', text: [
          "The Community Tool Box says the environment affects who feels able to contribute. Ask whether people understand why they are there, whether they know what they can influence, whether there are power differences that might affect participation, whether people can disagree without humiliation, whether confidentiality expectations are clear, whether there are several ways to contribute, and whether people are being asked for personal information that is not needed.",
          "On access, it lists physical accessibility, transportation, safety, privacy, acoustics, lighting, and seating, and communication needs such as captioning, qualified interpreters, large-print and accessible documents, extra time, and alternative ways to give input. For virtual or hybrid sessions it says to test links, microphones, and captions, to monitor the chat, to have a backup if the technology fails, and not to let the physical room become the real meeting while remote participants merely watch.",
          "On personal information, it says to collect only what is necessary for an attendance record, and, if a session is recorded or transcribed, to consider consent or notice, confidentiality, security, who can access it, and how long it is kept.",
        ] },
        { kind: 'concept', title: 'Agreements for how we work together', text: [
          "The Community Tool Box suggests participation agreements, such as avoiding unnecessary interruption, critiquing ideas and behavior and not attacking personal worth, protecting confidential information, making room for different people to contribute, asking questions when something is unclear, and staying reasonably connected to the purpose. Some can be developed with the group. Others come from policy, law, or professional responsibilities and are not negotiable. It says not to require unanimous agreement before applying basic standards of safety and respectful conduct.",
          "In a group where people may talk about their health, be honest about confidentiality. You can ask people to keep what is said in the room, and you cannot guarantee that they will. Say what you can promise and what you cannot.",
        ] },
        { kind: 'concept', title: 'Running the session', text: [
          "The Community Tool Box walks through a sequence that works well for a short session. Begin as agreed. Welcome people and explain the purpose, the outcome, your role, and how the session will go. Use introductions only when they add value, and let people pass on personal questions. Use opening activities selectively, and avoid ones that require personal disclosure or physical contact. Review the agenda. Encourage participation without forcing it, by offering several ways to contribute and not putting a quiet person on the spot.",
          "To manage unequal airtime, intervene respectfully and focus on behavior, not on guessing why someone is talking a lot. It offers wording such as, I want to pause here so we can hear from people who have not had a chance yet, and I will come back to you.",
          "When an important but off-topic issue comes up, acknowledge it and decide what happens to it. Address it later, record it, refer it, or schedule a separate talk. Give it an owner, so a parking lot does not become a place where concerns disappear.",
          "Summarize agreement accurately, and also name real disagreement. Do not call something consensus just because most people agree. Check in explicitly instead of relying on faces and posture. Allow processing time, since silence can give people time to think. Be aware of how much you are talking. Close on time, and review what was decided, what is unresolved, and what happens next. Thank people.",
        ] },
        { kind: 'concept', title: 'Hard moments', text: [
          "Discussion does not require agreement, and disagreement is not a failure. The Community Tool Box says a discussion can be productive even when people leave with genuine differences. It also cautions that conversation alone will not resolve discrimination, hostility, or longstanding harm, and that some situations need other processes.",
          "Here is how the earlier courses help. If someone begins to share something painful, slow gently, thank them, say what you can do, and offer choices, as in the trauma-informed practice course. Do not probe. If someone states something that is not accurate, use elicit, provide, elicit. Ask what they have heard, give the accurate information in a small piece, and ask what they make of it, without shaming them. If the talk becomes personal or hostile, return to the agreements, and take a break if you need one. If someone says they may hurt themselves or someone else, or a child or dependent adult may be in danger, follow your program's procedure the same day. You can call or text 988 for support in a crisis, or call 911 in an emergency.",
        ] },
        { kind: 'concept', title: 'Your role', text: [
          "The C3 Project lists planning and leading support groups as one task in the role of providing coaching and social support. Whether you lead a group is a decision for your program. Lead only groups that your program has assigned to you, and know who to call for help during a session. If you have a strong stake in an outcome, or authority over the participants, the Community Tool Box notes that someone else may be a more credible facilitator.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Facilitation', plain: "Helping a group work well, by structuring the process so people can contribute and reach an outcome." },
          { term: 'Participation agreements', plain: "Shared expectations for how people will work together in a session." },
          { term: 'Airtime', plain: "How much each person speaks. A facilitator watches it and shares it." },
          { term: 'Parking lot', plain: "A place to record an off-topic issue, with a plan for what happens to it." },
          { term: 'Psychological safety', plain: "People can speak honestly without being humiliated or punished for speaking up appropriately. It does not mean everyone is comfortable." },
        ] },
        { kind: 'check', check: {
          id: 'hrtp-ef-q4',
          q: "One participant has been talking for most of the session. What does the Community Tool Box suggest?",
          options: [
            "Ignore it, because they are contributing",
            "Say in front of everyone that they talk too much",
            "Intervene respectfully, focus on behavior, and invite others, for example by pausing to hear from people who have not yet had a chance",
            "End the session",
          ],
          answer: 2,
          rationale: "The source recommends intervening respectfully when one person is speaking disproportionately and focusing on the behavior instead of assuming why. It offers wording that pauses and invites others and promises to return to the person.",
          distractors: "Ignoring it leaves others out, and shaming or ending the session harms the group.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ef-q5',
          q: "During a health education group, someone says something about a treatment that is not accurate. What is the best first move?",
          options: [
            "Correct them sharply so no one else believes it",
            "Ask what they have heard, share accurate information in a small piece, and ask what they make of it",
            "Ignore it and move on",
            "Tell the group that person is wrong",
          ],
          answer: 1,
          rationale: "Elicit, provide, elicit gives accurate information without shaming. If you are not sure of the answer, say so and offer to find out from a reliable source.",
          distractors: "Sharp correction can shut people down, and ignoring it lets the misinformation stand.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ef-q6',
          q: "You are planning a session in which people will share about their health. Which statement about confidentiality is the most honest?",
          options: [
            "Everything said here is completely confidential",
            "I will ask everyone to keep what is said here private, and I cannot guarantee that everyone will",
            "There is no need to mention confidentiality",
            "Do not talk about anything personal",
          ],
          answer: 1,
          rationale: "You can set an expectation and ask for it, and you cannot control what other participants do. Being honest about both lets people decide what to share.",
          distractors: "The other answers promise too much or say nothing, and the last removes the group's value.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Think of a group you have been part of. Who spoke most, and who never spoke? What would have helped?",
          "What access need could you plan for the next time you lead a session?",
        ] },
        { kind: 'takeaways', items: [
          "Facilitation is about the process. State the purpose, your role, and who decides.",
          "Plan for access and privacy, set agreements, and offer several ways to take part.",
          "Share airtime, give parked issues an owner, summarize agreement and disagreement accurately, and close on time.",
        ] },
        ev([
          "Community Tool Box, University of Kansas. Chapter 16, Section 2, Developing Facilitation Skills, and Section 4, Techniques for Leading Group Discussions. The definition, principles, planning, access, personal information, agreements, running of a session, and the point that discussion does not require agreement. Both sections were read in full.",
          "C3 Project (2016). The role of providing coaching and social support, which includes planning and leading support groups.",
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 3. Elicit, provide, elicit.",
          "SAMHSA. Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services. Used from the trauma-informed practice course for responding to someone who shares something painful.",
          "The confidentiality wording and the advice to lead only groups assigned by your program are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-ef-s1',
      title: 'Session 1, Plan and Teach a Short Lesson',
      summary: 'A live practice session. Plan a short lesson, teach it to a small group, and use teach-back.',
      minutes: 50,
      blocks: [
        { kind: 'why', text: [
          "You learn teaching by teaching. This session gives you a plan card, a small and friendly group, and feedback you can use right away.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "Use only topics the facilitator provides or topics where you have information from your program's materials. If you are not sure about a fact, say so and do not guess. Give feedback by describing what you saw and heard. You can pass at any time. What is said in the room stays in the room. You can call or text 988 at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions and how feedback will work." },
          { label: 'Plan your lesson, 10 minutes', text: "Each person chooses a topic card and fills in a plan card. Who is it for. What is the purpose in one sentence. The two or three key messages. One question to ask at the start. One activity. How will you check understanding." },
          { label: 'Teach in triads, 20 minutes', text: "Groups of three rotate through the roles of teacher, learner, and observer, three rounds of about six minutes with feedback. The teacher teaches for about three minutes using ask, teach one piece, ask. The learner plays an adult with a real question and may say they do not understand. The observer fills in the checklist." },
          { label: 'Revise, 10 minutes', text: "Each teacher rewrites one sentence into plain language and revises one key message based on feedback." },
          { label: 'Close, 5 minutes', text: "Each person names one change they will make to how they explain things." },
        ] },
        { kind: 'list', title: 'Topic cards', items: [
          "How to prepare questions before a clinic visit.",
          "How to ask for an interpreter when you make an appointment.",
          "How to keep a written list of the medicines you take.",
          "How to find help by calling 211.",
          "What to do when a letter about your benefits arrives.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the teacher begin by asking what the learner already knew or wanted?",
          "How many key messages did they teach?",
          "Did they use words the learner would use? Note any jargon.",
          "Did they pause and ask what the learner thought?",
          "Did they use teach-back, and put the responsibility on themselves?",
          "What happened when the learner said they did not understand?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What did you cut from your lesson, and was it a good cut?",
          "What did the learner do that told you they understood or did not?",
        ] },
        { kind: 'takeaways', items: [
          "Plan the purpose and two or three messages before you teach.",
          "Ask, teach one piece, ask. Use plain words.",
          "Use teach-back to check your explanation, and explain again if needed.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite. The topic cards are examples written for this course. Facilitators should check that the information used in practice comes from the program's current materials.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-ef-s2',
      title: 'Session 2, Facilitate a Discussion',
      summary: 'A live practice session. Set up a group, share airtime, and practice responding to hard moments.',
      minutes: 50,
      blocks: [
        { kind: 'why', text: [
          "A facilitator's best moments are quiet ones. The group is working and you are barely noticed. The skill is learning what to do on the days when it does not go that way.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements from Session 1 apply. In the practice rounds, play invented characters and use invented situations. Do not use a real person as an example. If a round feels like too much, say pause and it stops without question.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A brief check-in and one thing you tried since Session 1." },
          { label: 'Set up the group, 10 minutes', text: "The whole group drafts agreements for a ten-person health education group. They add an access checklist covering the room, communication needs, a virtual option, and what information to collect. They decide what they can and cannot promise about confidentiality." },
          { label: 'Facilitation rounds, 25 minutes', text: "Groups of four rotate through the roles of facilitator and three participants, three rounds of about eight minutes. The discussion question is, what makes it hard to get to a health appointment. One participant in each round gets a hard-moment card. The observer, when there is one, uses the checklist." },
          { label: 'Debrief, 5 minutes', text: "What worked? What did you wish you had said?" },
          { label: 'Close, 5 minutes', text: "One thing you will do differently the next time you lead a group, and reminders of support resources." },
        ] },
        { kind: 'list', title: 'Hard-moment cards', items: [
          "You talk a lot and keep adding stories.",
          "You keep bringing up a topic that is off the subject.",
          "You say something about a treatment that is not accurate.",
          "You disagree with another participant and begin to get personal.",
          "You begin to share something painful about your own life.",
          "You say nothing at all, and look away.",
        ] },
        { kind: 'list', title: 'Facilitator checklist', items: [
          "Stated the purpose, the facilitator's role, and who decides.",
          "Offered more than one way to take part.",
          "Shared airtime respectfully.",
          "Gave an off-topic issue an owner.",
          "Used elicit, provide, elicit for misinformation, without shaming.",
          "Summarized agreement and named disagreement accurately.",
          "Closed on time with next steps.",
        ] },
        { kind: 'concept', title: 'When safety is at stake', text: [
          "If a participant says they may hurt themselves or someone else, or that a child or dependent adult may be in danger, follow your program's procedure the same day. You can call or text 988 for support in a crisis, or call 911 in an emergency. Know who your supervisor is before the session begins.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which hard moment was hardest for you, and why?",
          "What agreement would you add to your next group?",
        ] },
        { kind: 'takeaways', items: [
          "Set up for participation before the group begins, including access and privacy.",
          "Respond to hard moments by returning to the purpose and the agreements.",
          "Know your limits and who to call. Close with a summary and next steps.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite, chiefly the Community Tool Box sections on facilitation. The hard-moment cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-ef-practice',
    title: 'Your health education and facilitation practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: a lesson plan, a plain-language rewrite, a plan for a group, and your words for hard moments.',
    fields: [
      { id: 'lesson', label: 'Your short lesson plan', help: 'Pick a topic you teach. Write who it is for, the purpose in one sentence, two or three key messages, the question you will ask first, one activity, and how you will check understanding with teach-back.', multiline: true },
      { id: 'plain', label: 'A plain-language rewrite', help: 'Copy a sentence or short paragraph from your work that uses jargon. Rewrite it in plain words for the people you serve. Note which words you changed.', multiline: true },
      { id: 'group', label: 'Your plan for a group', help: 'Write the purpose of a group you might lead, the agreements you would propose, what access needs you would plan for, how you would share airtime, what you can and cannot promise about confidentiality, and who you would call for help.', multiline: true },
      { id: 'moments', label: 'Your words for hard moments', help: 'Write what you would say in three moments. Someone talks too much. Someone states something that is not accurate. Someone begins to share something painful. Add the question you would ask yourself if you do not know the answer.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'C3 Project: Understanding Scope and Competencies, a Contemporary Look at the U.S. CHW Field (2016)', use: 'The national list of roles and skills, including education and facilitation.', url: 'https://portal.ct.gov/-/media/ohs/sim/chw-advisory-committee/2016/2016-06-14/chw-c3-report.pdf' },
    { name: 'Community Tool Box: Chapter 16, Section 2, Developing Facilitation Skills', use: 'Planning, access, agreements, and running a group session.', url: 'https://ctb.ku.edu/en/table-of-contents/leadership/group-facilitation/facilitation-skills/main' },
    { name: 'Community Tool Box: Chapter 16, Section 4, Techniques for Leading Group Discussions', use: 'Purposes of discussion, authority, and how to lead one.', url: 'https://ctb.ku.edu/en/table-of-contents/leadership/group-facilitation/group-discussions/main' },
    { name: 'AHRQ: Tool, Teach-Back', use: 'A short description of teach-back and examples of when to use it.', url: 'https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/teachback.html' },
    { name: 'Digital.gov: Plain language guide series', use: 'Principles of plain language and writing for your audience.', url: 'https://digital.gov/guides/plain-language' },
    { name: 'CDC (archived): CHW eLearning, Session 3, Instructional Methods', use: 'An overview of adult learning and popular education for community health worker training.', url: 'https://archive.cdc.gov/www_cdc_gov/dhdsp/chw_elearning/s3_p9.html' },
    { name: 'SAMHSA: Treatment Improvement Protocol 35, Enhancing Motivation for Change in Substance Use Disorder Treatment (2019)', use: 'The elicit, provide, elicit method for giving information.', url: 'https://store.samhsa.gov/sites/default/files/tip-35-pep19-02-01-003.pdf' },
  ],
};
