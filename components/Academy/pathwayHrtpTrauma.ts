// Community Mental Health Worker Pathway, Foundations course 5: Trauma-Informed Practice.
//
// This is the certificate's own course 5 (id chw_trauma_informed, 3 hours, live). The id matches the
// certificate on purpose: the Academy posts every completed course to the portal, and the portal
// credits a learner only for ids it recognizes.
//
// A live practice course. Two short lessons are read before the sessions. Two scheduled sessions are
// practiced with a facilitator and a group. The stated 180 minutes equal the lessons, the sessions,
// and the practice file.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The central
// source is SAMHSA's Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health
// Services. The SAMHSA concept paper that defines the four assumptions and six principles could not
// be read by an automated request, so the course relies on TIP 57's own statement of the same
// framework and on SAMHSA's trauma page. The course is written for community health workers and peer
// workers. It does not teach trauma treatment, and it does not ask anyone to ask about trauma.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_TRAUMA_INFORMED: Course = {
  id: 'chw_trauma_informed',
  num: 5,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Trauma-Informed Practice',
  promise:
    "Understand what trauma is and how common it is, see behavior as adaptation rather than defiance, set up your work so it does not cause harm, respond steadily when someone shares something painful, and look after yourself.",
  about: [
    "This course covers how to do community health and peer work in a way that does not add to the harm people have already lived through. It is not about treating trauma. Treatment belongs to licensed clinicians. It is about how every person who works with the public can make safety, choice, and respect part of what they do.",
    "It rests on SAMHSA's Treatment Improvement Protocol on trauma-informed care in behavioral health services, SAMHSA's trauma and violence page, the original Adverse Childhood Experiences study abstract, the national competencies for peer workers in behavioral health, and the National Child Traumatic Stress Network's guidance on secondary traumatic stress.",
    "It is Foundations course 5 of HMC's community health worker certificate. It is a live practice course. You read two short lessons, then practice in two scheduled sessions, then complete a practice file.",
  ],
  objectives: [
    "Define trauma using the federal definition and explain why it is common and why responses vary.",
    "Describe what the Adverse Childhood Experiences study found and what it does not tell you about any one person.",
    "Explain the idea that trauma-related behavior is adaptation, and rewrite a judgmental reading of behavior.",
    "Identify practices that can retraumatize and change them to support safety, choice, and trust.",
    "Respond steadily and within your role when someone shares something painful.",
    "Build a plan for caring for yourself and for using supervision.",
  ],
  minutes: 180,
  prerequisites: "None. Take The Community Health Worker Role, History, and Field and Professional Conduct, Ethics, and Safety first if you can.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people with their own history of trauma. If this material is hard for you, take breaks and tell your facilitator.",
  freshness:
    "The framework in this course is long established. SAMHSA's own materials are revised, and some pages carry notices about restored earlier versions. Your program tells you which policies apply to your role.",
  modality: 'virtual',
  requirements: [
    { id: 'ti-lessons', label: 'Read the two lessons before the first session', kind: 'assignment' },
    { id: 'ti-s1', label: 'Attend Session 1, Safety, Choice, and Avoiding Harm', kind: 'attend' },
    { id: 'ti-s2', label: 'Attend Session 2, Responding in the Moment and Caring for Yourself', kind: 'attend' },
    { id: 'ti-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ti-l1',
      title: 'What trauma is, and why it matters in this work',
      summary: 'The federal definition, the Adverse Childhood Experiences study, and why responses differ.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Almost everyone you work with has been through something hard. Some of it was a single event. Some of it was years of a harmful home, a dangerous street, or a system that treated them as a number. Many people carry it quietly and many have learned not to talk about it.",
          "You will not always know who has been through what, and you do not need to. What you need is a way of working that does not make it worse and that makes it easier for people to trust you. That is what trauma-informed means.",
        ] },
        { kind: 'concept', title: 'The federal definition', text: [
          "SAMHSA, the federal Substance Abuse and Mental Health Services Administration, describes individual trauma as an event, series of events, or set of circumstances that is experienced by an individual as physically or emotionally harmful or life threatening and that has lasting adverse effects on the individual's functioning and mental, physical, social, emotional, or spiritual well-being.",
          "Look at the structure. There is an event or circumstance. There is the person's experience of it. And there are lasting effects. The same event can be experienced very differently by two people, and not everyone who goes through something terrible has lasting effects.",
          "SAMHSA's page says how someone responds to a traumatic experience is personal. If there is a strong support system in place, little or no prior traumatic experience, and the person has many resilient qualities, it may not affect their mental health. It also says that many people who experience a traumatic event will go on with their lives without lasting negative effects, and that others will have difficulties and experience traumatic stress reactions.",
        ] },
        { kind: 'concept', title: 'How common it is', text: [
          "SAMHSA states that trauma is a common experience for adults and children in American communities and is especially common in the lives of people with mental and substance use disorders. It says research has shown that traumatic experiences are associated with both behavioral health and chronic physical health conditions, especially those traumatic events that occur during childhood.",
          "The best-known study of this is the Adverse Childhood Experiences study, published in 1998 in the American Journal of Preventive Medicine by Felitti and colleagues. A questionnaire about adverse childhood experiences was mailed to 13,494 adults who had completed a standardized medical evaluation at a large health maintenance organization, and 9,508 responded. The study looked at seven categories. Psychological, physical, or sexual abuse. Violence against the mother. And living with household members who were substance abusers, mentally ill or suicidal, or ever imprisoned.",
          "The authors reported that more than half of respondents had at least one category of childhood exposure and one-fourth had two or more. They found a graded relationship between the number of categories and each of the adult health risk behaviors and diseases they studied, including ischemic heart disease, cancer, chronic lung disease, and liver disease. They concluded that there is a strong graded relationship between the breadth of exposure to abuse or household dysfunction during childhood and multiple risk factors for several of the leading causes of death in adults.",
          "Read this carefully. It is a study of groups of people. It shows a pattern across many people. It does not show that any one person with a particular number will have any particular outcome, and nobody should treat a count as a prediction about a person. It is a reason to take childhood adversity seriously, not a sorting tool.",
        ] },
        { kind: 'concept', title: 'Reactions are normal responses to abnormal situations', text: [
          "SAMHSA's Treatment Improvement Protocol on trauma-informed care says that when you become aware of the significance of traumatic experiences in people's lives and begin to view their presentation as adaptive, your view can shift from a pathology mindset, which defines clients strictly from a diagnostic label, implying that something is wrong with them, to one of resilience, which views difficulties, behaviors, and emotions as responses to surviving trauma. In essence, it says, you will come to view traumatic stress reactions as normal reactions to abnormal situations.",
          "It adds that embracing the belief that trauma-related reactions are adaptive lets you begin relationships from a hopeful, strengths-based stance that builds on the belief that people's responses reflect creativity, self-preservation, and determination.",
          "It also notes that people vary widely in how they experience and express traumatic stress reactions, and that some people's ways of coping have worked in the past and are not working as well now. The same behavior can be a strength in one setting and a problem in another.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Trauma', plain: "An event or circumstance that a person experiences as physically or emotionally harmful or life threatening, with lasting adverse effects on their well-being." },
          { term: 'Traumatic stress reaction', plain: "How a person's mind and body respond to trauma. Reactions vary widely." },
          { term: 'Retraumatization', plain: "Feeling as if past trauma is happening again, because of something in the present that echoes it." },
          { term: 'Trauma-informed', plain: "Realizing how common trauma is and how it affects people, recognizing its signs, and putting that knowledge into how you work." },
          { term: 'Adaptation', plain: "A way of coping that helped someone survive, even if it causes problems now." },
        ] },
        { kind: 'myths', items: [
          { myth: "If someone has been through trauma, they will be damaged forever.", reality: "SAMHSA says many people who experience a traumatic event go on with their lives without lasting negative effects, and that personal and social supports matter." },
          { myth: "I need to ask everyone about their trauma to be trauma-informed.", reality: "TIP 57 says being trauma aware does not mean assuming everyone has a history of trauma. It means anticipating the possibility in how you work." },
          { myth: "A person's ACE count tells me how they will turn out.", reality: "The study shows patterns across groups. It does not predict one person's outcome." },
          { myth: "Trauma-related behavior is defiance or manipulation.", reality: "A trauma-informed view treats it as an attempt to cope, and asks what happened and what is in the way, not what is wrong." },
        ] },
        { kind: 'case', title: 'Two ways to read the same afternoon', scenario: true, text: [
          "A man named Louis arrives at an outreach table and becomes angry when a worker asks him to fill out a form with his date of birth, his address, and his reason for coming. He pushes the clipboard away and says he is leaving.",
          "One reading is that he is difficult. Another is that being asked to state personal facts to a stranger, with people waiting behind him, is exactly the kind of exposure that feels dangerous to someone who has been hurt. The worker takes the second reading. She says, you don't have to fill that out right now. Would it help to step over here, where it's quieter? Louis comes back in ten minutes and gives his first name. The worker did not diagnose him or ask about his past. She changed what was in her control.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-ti-q1',
          q: "What does the Adverse Childhood Experiences study show?",
          options: [
            "That any person with a high count will develop a specific disease",
            "A graded relationship between the number of categories of childhood adversity and adult health risks across groups of people",
            "That childhood adversity only affects people who do not have supports",
            "That asking about childhood adversity is helpful for every person",
          ],
          answer: 1,
          rationale: "The study reported a strong graded relationship, across a large group, between the number of categories of adverse childhood experiences and several adult health risk behaviors and diseases. It does not predict one person's outcome.",
          distractors: "The other answers turn a group pattern into an individual prediction, or claim things the study did not test.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ti-q2',
          q: "According to TIP 57, what does it mean to be trauma aware?",
          options: [
            "Assuming everyone you work with has experienced trauma and asking everyone about it",
            "Anticipating the possibility of trauma in how you work, without assuming everyone has a history of it",
            "Referring everyone to a therapist",
            "Avoiding any subject that might upset someone",
          ],
          answer: 1,
          rationale: "TIP 57 says being trauma aware does not mean assuming everyone has a history of trauma, but rather anticipating the possibility from initial contact, intake, and screening.",
          distractors: "The other options either over-assume, hand off the work, or avoid the subject entirely.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "Think of a behavior you have found difficult in someone. What might it have been protecting them from?",
          "What is one thing in your usual intake or first contact that might feel exposing to someone who has been hurt?",
        ] },
        { kind: 'takeaways', items: [
          "Trauma is an event or circumstance experienced as harmful or life threatening, with lasting adverse effects. Responses are personal and vary widely.",
          "The Adverse Childhood Experiences study shows a pattern across groups and is not a tool for predicting one person.",
          "Treat reactions as normal responses to abnormal situations. Ask what is in the way, not what is wrong.",
        ] },
        ev([
          "SAMHSA. Trauma and Violence (page last updated March 16, 2026). The definition of individual trauma, the statements about how common trauma is and how responses vary.",
          "Felitti VJ, Anda RF, Nordenberg D, Williamson DF, Spitz AM, Edwards V, Koss MP, Marks JS. Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. American Journal of Preventive Medicine, 1998. The abstract was read through Europe PMC. The full article was not read.",
          "SAMHSA. Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services. Part 1, Chapter 1. The statements about adaptation, trauma awareness, and normal reactions to abnormal situations.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ti-l2',
      title: 'Working in a trauma-informed way',
      summary: 'Safety, choice, trust, and avoiding retraumatization, in daily practice and in how you care for yourself.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Trauma-informed practice is mostly small decisions. Where you set up your table. Whether you explain before you ask. Whether you let someone say no. These choices sound minor and they decide whether a person who has been hurt stays in the conversation.",
          "This lesson covers the principles from the federal guidance and shows what each one looks like in community work.",
        ] },
        { kind: 'concept', title: 'The framework', text: [
          "SAMHSA's definition, quoted in TIP 57, says a program, organization, or system that is trauma-informed realizes the widespread impact of trauma and understands potential paths for healing, recognizes the signs and symptoms of trauma in staff, clients, and others involved with the system, and responds by fully integrating knowledge about trauma into policies, procedures, practices, and settings. TIP 57 summarizes it as three elements: realizing the prevalence of trauma, recognizing how trauma affects all individuals involved, including the workforce, and responding by putting this knowledge into practice.",
          "SAMHSA's page on trauma emphasizes safety, trust, collaboration, and empowerment. The national peer worker competencies use similar language. They describe peer recovery support as trauma-informed, using a strengths-based framework that emphasizes physical, psychological, and emotional safety and creates opportunities for survivors to rebuild a sense of control and empowerment.",
          "TIP 57 says trauma-informed care begins with the first contact a person has with an agency, and that it requires all staff, including receptionists, intake workers, peer supports, and board members, to recognize that a person's experience of trauma can greatly influence their receptivity to and engagement with services. It also states the ethical principle, first, do no harm.",
        ] },
        { kind: 'concept', title: 'Safety', text: [
          "TIP 57 says providers must adapt the environment to support people's sense of physical and emotional safety. It anticipates that environmental stimuli can generate strong reactions, and lists lighting, access to exits, seating arrangements, emotion in a group, and visual or auditory stimuli as examples. It adds that consistency in interactions, following through on what was agreed, and dependability are key elements of a safe environment.",
          "For your work that means thinking about where you meet. Can the person see the door? Is there a private spot? Is it loud? Will someone be crowded or overheard? It also means doing what you said you would do. If you said you would call on Thursday, call on Thursday.",
          "The TIP also says that creating safety is not about getting it right all the time. It is about how consistently and forthrightly you handle situations when circumstances provoke feelings of being vulnerable or unsafe, and it says that honest and compassionate communication that conveys a sense of handling the situation together generates safety.",
        ] },
        { kind: 'concept', title: 'Choice, control, and not pushing disclosure', text: [
          "TIP 57 recognizes that not every person who has experienced trauma wants or sees the need for trauma-focused help. Some think they have already dealt with it. Some fear that their reactions will be dismissed. Others hurriedly and repeatedly disclose their experiences before a sufficiently safe environment has been established. It says people present an array of reactions, different levels of awareness, and different degrees of urgency, and that appreciating a person's perception of their problems and viewing their responses as adaptive are equally important.",
          "For you, this means choice is part of every interaction. Explain what you are asking and why. Tell people they can skip any question. Ask before you touch, take notes, or call someone. And do not push anyone to tell their story. Your role is to listen if they choose to share, and to connect them with clinical help if they want it. You are not there to draw out their history.",
        ] },
        { kind: 'concept', title: 'Practices that can retraumatize', text: [
          "TIP 57 says people with trauma histories may experience treatment procedures as negative, reminiscent of past abuse, or retraumatizing, feeling as if the past is recurring or the present is as dangerous as the past. It gives examples of potentially retraumatizing elements, including seclusion or time-out practices that isolate people, mislabeling symptoms as personality or other mental disorders rather than as traumatic stress reactions, interactions that command authority, assignments that could humiliate people, confronting people as resistant, and presenting treatment as conditional on conformity to the provider's beliefs.",
          "It also notes that clients may express powerlessness or feel trapped if they are not actively involved in decisions. And it warns against saying that you are not equipped to handle trauma. Even when meant kindly, the TIP says, such statements can send the message that a person's experiences are not important or that they cannot handle their feelings, and can repeat earlier experiences of others who found it hard to acknowledge what happened.",
          "The answer is not to dig in. It is to be warm, steady, and honest about your role. You can say, thank you for telling me. I am not the right person to help with this part, but I can help you find someone who is.",
        ] },
        { kind: 'list', title: 'Trauma-informed habits for community work', items: [
          "Explain before you ask, and say why you are asking.",
          "Offer choices, including the choice to pass.",
          "Pick a spot where the person can see the exit and talk without being overheard.",
          "Do what you said, when you said it. Tell the person early if you cannot.",
          "Use the person's words, and avoid labels and commands.",
          "Never confront someone as resistant. Ask what would make it easier.",
          "If you make a mistake, say so and repair it.",
          "Know your role and say it plainly.",
        ] },
        { kind: 'concept', title: 'Looking after yourself', text: [
          "TIP 57 says that people who work with those affected by trauma can be influenced by exposure to trauma-related affect and content. It describes a trauma-aware workplace as one that supports supervision, educates staff on secondary trauma, encourages processing through peer-supported activities and clinical supervision, and provides opportunities to learn effective coping strategies.",
          "The National Child Traumatic Stress Network, in guidance on secondary traumatic stress written for people working with children, names the triad of psychoeducation, skills training, and supervision as the most important strategy, and lists protective factors for individuals such as using supervision, keeping a balance between work and the rest of life, staying connected with other people, and following a personal wellness plan. The Professional Conduct course covers this in more detail. Many of the protections live in your organization, so ask for them.",
        ] },
        { kind: 'case', title: 'The table by the door', scenario: true, text: [
          "A community health worker named Joy sets up a health table at a community event. She places it near the entrance so people can find it. A volunteer, Ray, mentions that a woman walked up and left quickly. Joy notices that the table is directly under a loud speaker and that people have to stand in a line where others can hear their questions.",
          "She moves the table a few feet to a corner with a bit of space, puts a small sign that says you can ask questions privately, and keeps a second chair for anyone who would like to sit. Within the hour, three people ask questions they had not wanted to ask in front of others. Joy did not do anything clinical. She made a place where more people could feel safe.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-ti-q3',
          q: "Which of these can be retraumatizing, according to TIP 57?",
          options: [
            "Explaining why you are asking a question",
            "Confronting a person as resistant",
            "Offering a choice of where to sit",
            "Following through on what you agreed to do",
          ],
          answer: 1,
          rationale: "TIP 57 lists confronting people as resistant, interactions that command authority, humiliating assignments, and mislabeling reactions as among practices that can retraumatize.",
          distractors: "The other three support safety, choice, and trust.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-ti-q4',
          q: "A person starts telling you a very painful story before you have had a chance to explain your role. What is the best response?",
          options: [
            "Let them continue and ask for every detail",
            "Gently slow them down, thank them, explain what you can and cannot do, and offer options for support",
            "Change the subject immediately",
            "Tell them you are not equipped to handle trauma and walk away",
          ],
          answer: 1,
          rationale: "TIP 57 notes that some people disclose hurriedly before a safe environment is established. Slowing gently, honoring what they are sharing, being clear about your role, and offering options supports safety and choice.",
          distractors: "Drawing out details is outside your role, changing the subject dismisses them, and saying you are not equipped can repeat past experiences of being dismissed.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What is one thing you will change about where or how you meet people?",
          "Who do you talk to when a story stays with you? Is that enough?",
        ] },
        { kind: 'takeaways', items: [
          "Trauma-informed practice realizes, recognizes, and responds. It begins at first contact and includes everyone who works with the public.",
          "Safety, choice, and trust come from small decisions. Do not push disclosure, and do not confront.",
          "Care for yourself. Use supervision and ask your organization for the protections that are not yours to supply alone.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services. Part 1, Chapter 1. The definition quoted from SAMHSA, the three elements, the principles on trauma awareness, safety, control and choice, and minimizing retraumatization, and the statements on secondary trauma. The TIP was read from the SAMHSA publication.",
          "SAMHSA. Trauma and Violence. The emphasis on safety, trust, collaboration, and empowerment.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. The trauma-informed principle.",
          "National Child Traumatic Stress Network. Secondary Traumatic Stress, Introduction. Read for the Professional Conduct course and used here only for the triad of strategies and the individual protective factors. The guidance is written for people who work with children.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-ti-s1',
      title: 'Session 1, Safety, Choice, and Avoiding Harm',
      summary: 'A live practice session. Audit your own setting and rewrite your first contact.',
      minutes: 55,
      blocks: [
        { kind: 'why', text: [
          "Trauma-informed practice is easier to understand than to do. This session turns it into specific changes you can make to your own setting and your own words.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "This session may bring up your own experiences. You may step out, pass, or take a break at any time without explanation. You share only what you choose to share. We do not ask anyone to disclose personal history. What is said in the room stays in the room. The facilitator will name support resources at the start and the end, and you can call or text 988 at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions, agreements, and how to take a break." },
          { label: 'Two readings, 10 minutes', text: "The facilitator reads three short scenes of difficult behavior. In pairs, participants write one judgmental reading and one trauma-informed reading of each. The group shares and notices the difference." },
          { label: 'Setting audit, 15 minutes', text: "Each person describes a real or typical place where they meet people, such as a table, a clinic lobby, or a van. In pairs, they use the audit list to find three changes they could make." },
          { label: 'Rewrite your first contact, 15 minutes', text: "Participants rewrite the first thirty seconds of how they greet and explain. The goal is to explain before asking, to offer choice, and to name their role. Pairs practice aloud." },
          { label: 'Debrief and commitments, 10 minutes', text: "Each person names one change they will make this week." },
        ] },
        { kind: 'list', title: 'Setting audit', items: [
          "Can the person see the exit, and are they free to leave?",
          "Can they speak without being overheard?",
          "Is it loud, bright, crowded, or full of strong smells?",
          "Is there a place to sit, and a choice of where?",
          "Do forms ask for more than is needed right now?",
          "Does the person know who you are, what you do, and what you do not do?",
        ] },
        { kind: 'tryit', title: 'Scenes for the two readings', text: [
          "Scene A. A woman misses her third appointment and, when called, says she does not care about it anymore. Scene B. A young man stands near the back of a group, arms crossed, and says nothing for the whole hour. Scene C. A man responds to a routine question about his family with a sharp joke and a change of subject. In each, write the judgmental reading first and then a reading that asks what the behavior might be protecting.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which change are you most likely to make? What might get in the way?",
          "What did you notice about your first reading of the scenes?",
        ] },
        { kind: 'takeaways', items: [
          "Look at your setting through the eyes of someone who has been hurt.",
          "Explain before you ask. Offer choice. Say what your role is.",
          "Read behavior as adaptation and ask what is in the way.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite, chiefly SAMHSA's TIP 57. The scenes were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-ti-s2',
      title: 'Session 2, Responding in the Moment and Caring for Yourself',
      summary: 'A live practice session. Practice responding when someone shares something painful, and build your support plan.',
      minutes: 55,
      blocks: [
        { kind: 'why', text: [
          "The hardest moments in this work are unplanned. Someone you hardly know says something painful. You freeze, or you say the wrong thing, or you say too much. Practice does not make you perfect, but it gives you a few steady words to reach for.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements from Session 1 apply. In the practice rounds, use invented stories only. Do not tell a true story of your own or of anyone else. If a practice round feels like too much, say pause and the round stops without question.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Brief check-in. Review the pause rule." },
          { label: 'Steady words, 10 minutes', text: "The facilitator shares a short model response to someone sharing something painful: thank them, say what you heard, name what you can do, offer choices, and say what happens next. The group notes what the response leaves out, such as questions about details or promises it cannot keep." },
          { label: 'Practice rounds, 20 minutes', text: "In groups of three, one person plays someone sharing an invented painful moment, one responds, and one observes. Rotate through three rounds of about six minutes each, and share observations after each." },
          { label: 'Scope and escalation, 5 minutes', text: "The facilitator reviews when to bring in a supervisor, when a report may be required, and what to do if someone is in danger. Participants name the person in their program they would call." },
          { label: 'Your support plan, 10 minutes', text: "Each person writes who they will talk to after a hard day, what they will ask for in supervision, and one thing they will do each week to stay well." },
          { label: 'Close, 5 minutes', text: "One word that describes how you are leaving. Names of support resources again." },
        ] },
        { kind: 'list', title: 'Steady words to practice', items: [
          "Thank you for telling me. That sounds really hard.",
          "I am glad you said something. You don't have to say more than you want to.",
          "I am here to help connect you to people who can help with this. Would you like that?",
          "Would you like to take a minute? We can pause or stop.",
          "Here is what I can do, and here is what I cannot do.",
          "Is there someone you trust that I can help you reach?",
        ] },
        { kind: 'list', title: 'Things to avoid in the moment', items: [
          "Asking for details of what happened.",
          "Promising confidentiality you may not be able to keep.",
          "Saying you know exactly how they feel.",
          "Telling the person how to feel, or that it could have been worse.",
          "Rushing to fix or to refer before they have been heard.",
          "Saying you are not equipped to handle it and ending the conversation.",
        ] },
        { kind: 'concept', title: 'When safety is at stake', text: [
          "If a person tells you they are thinking about hurting themselves or someone else, or that a child or an older or dependent adult is being harmed, follow your program's procedure the same day and do not keep it to yourself. The Professional Conduct course covers when a report is required. In a crisis you can call or text 988, or call 911 for an emergency. Know who your supervisor is and how to reach them.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which steady words felt most natural? Which felt least?",
          "Who is on your support list, and have you told them?",
        ] },
        { kind: 'takeaways', items: [
          "Thank them, reflect, say your role, offer choices, and say what happens next.",
          "Do not probe for details, promise what you cannot keep, or end the conversation.",
          "Know when to bring in your supervisor, and keep your own support in place.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite. The steady words are practice guidance and are meant to be adapted to your program's procedures. The practice scenes are invented.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-ti-practice',
    title: 'Your trauma-informed practice file',
    minutes: 20,
    purpose: 'Four short pieces that you keep: a setting audit, a rewritten first contact, your steady words, and your support plan.',
    fields: [
      { id: 'audit', label: 'Your setting audit', help: 'Describe a place where you meet people and list three changes you will make to support safety and choice. Say when you will make each one.', multiline: true },
      { id: 'first', label: 'Your first thirty seconds', help: 'Write what you will say when you greet someone and explain what you do. Explain before you ask, offer a choice, and name your role.', multiline: true },
      { id: 'words', label: 'Your steady words', help: 'Write five sentences you can say when someone shares something painful, in your own voice. Add one thing you will not say, and who you will call if you need help right away.', multiline: true },
      { id: 'support', label: 'Your support plan', help: 'Name three people you can talk to after a hard day, one thing you will ask for in supervision, two things you will do each week to stay well, and one sign that tells you it is time to ask for more help.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'SAMHSA: Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services', use: 'The full guidance on trauma-informed care, including principles, retraumatization, and secondary trauma.', url: 'https://www.store.samhsa.gov/sites/default/files/sma14-4816.pdf' },
    { name: 'SAMHSA: Trauma and Violence', use: 'The federal definition of trauma and the emphasis on safety, trust, collaboration, and empowerment.', url: 'https://www.samhsa.gov/mental-health/trauma-violence' },
    { name: 'Felitti VJ, et al. Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults (1998)', use: 'The original Adverse Childhood Experiences study.', url: 'https://doi.org/10.1016/S0749-3797(98)00017-8' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The trauma-informed principle and the competencies for peer workers.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
    { name: 'National Child Traumatic Stress Network: Secondary Traumatic Stress', use: 'Risk factors, protective factors, and strategies for workers and organizations.', url: 'https://www.nctsn.org/trauma-informed-care/secondary-traumatic-stress/introduction' },
  ],
};
