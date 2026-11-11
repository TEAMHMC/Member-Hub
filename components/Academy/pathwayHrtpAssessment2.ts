// Community Mental Health Worker Pathway, Foundations course 9: Individual and Community Assessment.
//
// This is the certificate's own course 9 (id chw_assessment, 3 hours). The id matches the
// certificate on purpose: the Academy posts every completed course to the portal, and the portal
// credits a learner only for ids it recognizes.
//
// Every statement of fact in this course was taken from a source that was opened and read on
// November 10, 2026, and each lesson ends with the sources it rests on. Methods are described the
// way the sources describe them. Where the course adds practice guidance, it says so.
//
// The assessment this course teaches is the community health worker's assessment: observation,
// conversation, listing strengths and needs, and mapping what a community has. It is not a clinical
// assessment and it does not diagnose. Clinical assessment belongs to licensed clinicians.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_ASSESSMENT: Course = {
  id: 'chw_assessment',
  num: 9,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Individual and Community Assessment',
  promise:
    "Learn what you can and cannot assess as a community health worker, hold a strengths-and-needs conversation with one person, describe a community, map its assets, choose among field methods such as windshield surveys, interviews, and photovoice, and turn what you learn into something a community can use.",
  about: [
    "This course covers the part of community health work that begins with looking and asking. Before a program is built or a plan is made, someone has to understand the person and the place. That someone is often you.",
    "It rests on the national community health worker competencies, the Community Tool Box from the University of Kansas, the national public health planning framework known as MAPP, the federal Accountable Health Communities model, and the national competencies for peer workers in behavioral health.",
    "It is Foundations course 9 of HMC's community health worker certificate. It teaches the assessments a community health worker takes part in. It does not teach clinical assessment, and it does not teach you to diagnose.",
  ],
  objectives: [
    "Say what the national competencies expect a community health worker to do in individual and community assessment, and where that stops.",
    "Hold a strengths-and-needs conversation with one person, using observation and active inquiry, and record it with consent.",
    "Describe a community in its physical, social, historical, and cultural terms, and use public data without turning it into a label.",
    "Build an inventory and map of community assets, including the assets of individual people.",
    "Choose among windshield and walking surveys, interviews, and photovoice, and plan one for safety, consent, and purpose.",
    "Explain how the four MAPP assessments fit together, and share findings back with the people they describe.",
  ],
  minutes: 180,
  prerequisites: "None. Take The Community Health Worker Role, History, and Field and Social Determinants and Health Equity first if you can.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people who know their own neighborhoods deeply and want to put that knowledge to work.",
  freshness:
    "The methods in this course are long-established and change slowly. Local data, directories, and phone numbers change often. Check the date on anything you use, and ask your supervisor which tools and forms your program has approved.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-assess-l1',
      title: 'What assessment means in community health work',
      summary: 'The national competencies, the difference between a need and an asset, and the limit on what you assess.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Most mistakes in community programs start before the program does. Someone assumes they know what a person needs, or what a neighborhood wants, and builds the wrong thing. Assessment is the habit of finding out first.",
          "It is also a form of respect. When you ask someone what is going on in their life, and mean it, you are telling them they are the authority on their own situation. When you walk a neighborhood and notice what is working as well as what is broken, you are telling the people who live there that they are more than a list of problems.",
        ] },
        { kind: 'concept', title: 'What the national standard says', text: [
          "The Community Health Worker Core Consensus Project, known as C3, lists ten roles for community health workers. One of them is implementing individual and community assessments. The report describes it as two kinds of work. Participating in the design, implementation, and interpretation of individual-level assessments, with the example of a home environmental assessment. And participating in the design, implementation, and interpretation of community-level assessments, with the examples of a windshield survey of community assets and challenges and community asset mapping.",
          "The same report lists eleven skill areas, and one of them is individual and community assessment skills. It names two abilities. The ability to participate in individual assessment through observation and active inquiry. And the ability to participate in community assessment through observation and active inquiry.",
          "Read the verbs. The word is participate, not conduct on your own, and the method is observation and active inquiry, not testing or diagnosis. A community health worker joins an assessment as a trusted member of a team, bringing closeness to the community and skill at noticing and asking.",
        ] },
        { kind: 'concept', title: 'Needs and assets', text: [
          "The Community Tool Box, a public online resource from the University of Kansas Center for Community Health and Development, defines a need as the gap between what is and what should be. A need can be felt by an individual, a group, or an entire community. It can be as concrete as the need for food and water or as abstract as improved community cohesiveness.",
          "It defines a resource, or asset, broadly, as anything that can be used to improve the quality of community life. That can be a person, a physical place, a service, or a business. It adds that you and everyone else in the community are potential assets, because everyone has some skills or talents and can offer knowledge, connections, or support.",
          "Good assessment holds both. A neighborhood with a bus line that stops early has a need. The same neighborhood with a tenants' association and a youth soccer league has assets. The Tool Box makes the point that failing to use community resources not only means taking on a problem without using all the tools available but also misses an opportunity to increase the community's capacity for solving its own problems.",
        ] },
        { kind: 'concept', title: 'The limit on what you assess', text: [
          "A community health worker's assessment is about circumstances, strengths, and needs that a person chooses to share and that you can see or ask about. It is not a clinical assessment. You do not diagnose a condition, judge a mental health status, or decide what treatment someone needs. Those belong to licensed clinicians. Your assessment tells the team what is going on around the person, so the team can respond.",
          "The national competencies for peer workers in behavioral health say the same thing from another angle. They rest on principles that include being person-centered and strengths-based, and they describe a worker who tailors support to the preferences and needs of the person served. The person decides what to share and what to work on.",
          "If, in the course of an assessment, you notice signs that someone may be in danger, or you learn something your program tells you to escalate, follow your program's procedure. The Professional Conduct course covers when a report is required.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Assessment', plain: "Finding out about a person or a community, so that what comes next fits." },
          { term: 'Need', plain: "The gap between what is and what should be, felt by a person, a group, or a community." },
          { term: 'Asset', plain: "Anything that can be used to improve the quality of community life, including people, places, services, and businesses." },
          { term: 'Observation', plain: "Noticing what is there to see, on purpose and with a plan." },
          { term: 'Active inquiry', plain: "Asking open questions and listening closely, so the other person leads." },
        ] },
        { kind: 'case', title: 'The same street, two stories', scenario: true, text: [
          "Two new workers walk the same street. One comes back and reports vacant lots, broken lights, and a closed clinic. The other comes back and reports the same, and also a barber who knows everyone, a church that serves a meal on Thursdays, a corner where kids gather after school, and a woman who runs a phone tree for older neighbors.",
          "The first report is accurate and incomplete. The second one holds both needs and assets, and it tells a program where to begin. Assessment is not a longer list of problems. It is a more complete picture.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c9-q1',
          q: "According to the C3 Project, what is a community health worker's role in individual and community assessment?",
          options: [
            "Diagnose health conditions in the community",
            "Participate in designing, carrying out, and interpreting assessments, using observation and active inquiry",
            "Decide which services a community should receive",
            "Collect data without involving community members",
          ],
          answer: 1,
          rationale: "The C3 report describes participation in individual-level and community-level assessments, with skills of observation and active inquiry.",
          distractors: "Diagnosis and service decisions belong to others, and the framework values community involvement.",
        } },
        { kind: 'reflect', title: 'Your own picture', prompts: [
          "Describe the place you know best in two lists, needs and assets. Which list came more easily? Why?",
          "When has someone assumed they knew what you needed? What would asking have changed?",
        ] },
        { kind: 'takeaways', items: [
          "Assessment means finding out first. The national competencies ask community health workers to participate, using observation and active inquiry.",
          "A need is a gap. An asset is anything that can improve community life. Hold both.",
          "You assess circumstances, strengths, and needs. You do not diagnose.",
        ] },
        ev([
          "C3 Project report, 2016. Role 8, Implementing Individual and Community Assessments, and Skill 7, Individual and Community Assessment Skills.",
          "Community Tool Box, University of Kansas Center for Community Health and Development. Chapter 3, Section 1, Developing a Plan for Assessing Local Needs and Resources, and Section 8, Identifying Community Assets and Resources. Definitions of needs and assets.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. The principles of person-centered and strengths-based support.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-assess-l2',
      title: 'Assessing with one person',
      summary: 'A strengths-and-needs conversation, how to ask, what to write down, and how to keep it the person\'s own.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "When someone meets a new service, they are often handed a clipboard. The questions are long, personal, and asked by a stranger. People learn to give short answers, or the answers they think are wanted.",
          "You can do it differently. You can begin with the person and what matters to them, and you can make the questions part of a conversation. This is the skill the national competencies call active inquiry.",
        ] },
        { kind: 'concept', title: 'Observation and active inquiry', text: [
          "Observation means noticing, with the person's permission and within your program's procedures, what is visible. How someone gets to your table. Whether they are carrying everything they own. Whether their phone works. Whether a child with them seems unwell. You note what you see. You do not draw conclusions about the person's character or condition from it.",
          "Active inquiry means asking open questions and listening for what is under the answer. Instead of asking whether someone has transportation, which gets a yes or a no, you might ask how they usually get to appointments. The answer tells you about distance, cost, time, and who helps.",
          "The national peer worker competencies describe a worker who tailors support to the preferences and unique needs of the person served and who matches approaches to the person's own preferences. Active inquiry is how you learn what those preferences are.",
        ] },
        { kind: 'concept', title: 'Using the five domains as a guide', text: [
          "The Healthy People 2030 domains you met in the Social Determinants and Health Equity course give you a way to listen. Economic stability. Education access and quality. Health care access and quality. Neighborhood and built environment. Social and community context. As the person talks, notice which domains come up and which do not.",
          "The federal Accountable Health Communities model describes screening for unmet health-related social needs, using examples such as food insecurity and inadequate or unstable housing. It pairs screening with referral and navigation. That pairing is the point. You ask about needs so that you can do something about them.",
          "Your program may have an approved screening form. Use it as written, and explain it in plain words. The conversation in this lesson sits around the form, not in place of it.",
        ] },
        { kind: 'steps', title: 'A strengths-and-needs conversation', items: [
          { label: 'Begin with the person', text: "Ask what they would like you to know about them, or what has been going well lately. Start with strengths." },
          { label: 'Ask what matters most', text: "Ask what is most important to them right now. Let their priority lead." },
          { label: 'Explore the picture', text: "Use open questions about the domains. How do you usually get around? What is your housing like? Who do you turn to when things get hard?" },
          { label: 'Reflect back', text: "Say what you heard in your own words and ask if you got it right." },
          { label: 'Choose together', text: "Ask what they would like to work on first, and what they would like to leave alone for now." },
          { label: 'Agree on what you will write and share', text: "Tell them what you will record, who will see it, and why. Ask if there is anything they want left out." },
        ] },
        { kind: 'list', title: 'Open questions to try', items: [
          "What has been going well for you lately?",
          "What is the hardest part of your week right now?",
          "How do you usually get to appointments or to the store?",
          "Who do you turn to when you need help?",
          "What would make the biggest difference to you in the next month?",
          "Is there anything we have not talked about that you think I should know?",
        ] },
        { kind: 'concept', title: 'What to write down, and what to leave out', text: [
          "Write what the person said in their own words where you can, and what you observed in plain terms. Keep to facts. Write that a person said they have not eaten since yesterday, not that they are hungry because they are irresponsible. Leave out guesses about a diagnosis, about motives, or about someone's worth.",
          "Record only what you need to help and what the person agreed to share. Share it only with the people involved, and tell the person who they are. The Professional Conduct course covers privacy rules, and your program will tell you which forms and systems to use.",
          "If a person tells you something that your program requires you to report, you cannot keep it confidential, and honesty requires that you tell them so before they say more. Know your program's rules, and explain them at the start.",
        ] },
        { kind: 'case', title: 'Dolores and the clipboard', scenario: true, text: [
          "Dolores, 63, comes to a community center to ask about a bus pass. The intake worker is about to hand her a form with forty questions. A community health worker named Ana asks if she can sit with her first.",
          "Ana asks what has been going well. Dolores says her grandson is doing well in school. Ana asks what is hardest. Dolores says getting to her doctor, because two buses and a long wait make her miss the appointment. As they talk, Dolores mentions that she skips meals near the end of the month. Ana does not argue or fix. She says, it sounds like getting to the doctor and having enough food at the end of the month are the two hardest things. Dolores agrees, and they decide to start with the pass and a call about food assistance. Ana explains what she will write down and asks if anything should stay out. Dolores says her grandson's name. Ana leaves it out.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c9-q2',
          q: "Which of these is an example of active inquiry?",
          options: [
            "Do you have transportation?",
            "How do you usually get to appointments?",
            "You must have trouble getting around, right?",
            "Fill out this form and I will look it over.",
          ],
          answer: 1,
          rationale: "Active inquiry uses open questions that let the person describe their own situation. The second question invites a story. The first can be answered yes or no, the third leads, and the fourth hands over a form.",
          distractors: "Yes-or-no questions and leading statements close the conversation instead of opening it.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c9-q3',
          q: "Which note is better practice?",
          options: [
            "Client is lazy about eating and skips meals",
            "Client said she skips meals near the end of the month and would like help finding food assistance",
            "Client is probably depressed",
            "Client had a bad attitude",
          ],
          answer: 1,
          rationale: "Good notes record what the person said and wanted, in plain facts, without labels, guesses, or judgments.",
          distractors: "The other notes label, guess at a diagnosis, or judge the person.",
        } },
        { kind: 'reflect', title: 'Your own questions', prompts: [
          "Which of the open questions would feel most natural for you to ask? Which would feel hardest?",
          "What is one thing you would never want written about you? What does that tell you about what to leave out of notes?",
        ] },
        { kind: 'takeaways', items: [
          "Observation notices. Active inquiry asks open questions and listens.",
          "Use the five domains as a guide for listening, and your program's approved form as written.",
          "Write facts in plain words, record only what is needed and agreed, and tell people up front who will see it.",
        ] },
        ev([
          "C3 Project report, 2016. Skill 7, abilities a and b, participation in assessment through observation and active inquiry.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Tailoring support to the preferences and unique needs of the person served.",
          "Healthy People 2030, Office of Disease Prevention and Health Promotion. Social Determinants of Health. The five domains.",
          "Centers for Medicare and Medicaid Services. Accountable Health Communities Model. Screening for health-related social needs, paired with referral and navigation.",
          "The conversation steps and sample questions are practice guidance written for this course. Adapt them to your program's approved forms.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-assess-l3',
      title: 'Describing a community',
      summary: 'What a community is, what to learn about it, and how to write a description people who live there would recognize.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "You may be asked to introduce a new program to a neighborhood, to write a section of a grant, or to brief a partner on where you work. Each time, someone wants to know what the community is like. If you only have numbers, you will leave out most of what matters. If you only have impressions, you will not be believed.",
          "A community description brings the two together. It is a record of what you have learned about a place and its people, checked against what the people themselves say.",
        ] },
        { kind: 'concept', title: 'What a community is', text: [
          "The Community Tool Box points out that we usually think of a community as the people in a given geographical location, and that the word can really refer to any group sharing something in common. Place, such as a city, neighborhood, or school district. Experience, such as the shared experience of racism. Or interest, such as a community's concern about poverty or violence prevention. These communities overlap. Its example is a person who is a member of an arts community, an education community, and a faith community at once.",
          "This matters because the people you serve may not share a street. A group of people recently released from jail, or of parents of children with a disability, is a community even if they live across the county. Ask which community you are describing before you begin.",
        ] },
        { kind: 'concept', title: 'What to learn', text: [
          "The Tool Box says anything done in a community requires familiarity with its people, its issues, and its history, and that building a coalition or carrying out an intervention is far more likely to succeed if informed by the culture of the community and the relationships among individuals and groups within it. It recommends creating a community description, a record of your exploration and findings, to gain an overview of what the community is now, what it has been in the past, and what it could be in the future.",
          "It describes several things to understand. The physical aspects of the community, such as its size, the look and feel of its buildings, its topography, its neighborhoods, how areas differ from one another, and whether buildings and public spaces appear well maintained or show signs of disrepair or neglect. And it describes getting to know the people, their culture, their concerns, and their relationships, and developing your own relationships with them.",
          "For a community that is defined by something other than place, the same questions apply in a different form. What do these people share? Where do they gather? What have they been through together? Who do they trust?",
        ] },
        { kind: 'list', title: 'A starting outline for a community description', items: [
          "Who we mean. Place, experience, or interest, and where the edges are.",
          "The setting. Boundaries, buildings, streets, transportation, parks, and how areas differ.",
          "The people. Who lives, works, and gathers here, in the words residents use.",
          "The history. How the community came to be this way, and what it has been through.",
          "The strengths. Organizations, leaders, traditions, and things people take pride in.",
          "The concerns. What residents themselves say worries them.",
          "The relationships. Who trusts whom, who works with whom, and where there is tension.",
          "The data. Public numbers, with the source and date, to check against what you learned.",
          "What we do not know yet, and who could tell us.",
        ] },
        { kind: 'concept', title: 'Using public data without turning it into a label', text: [
          "Public data can add a lot. The California Healthy Places Index, covered in the Social Determinants and Health Equity course, ranks California census tracts on place-based conditions linked to health. Its authors describe it as built with a positive asset frame, and they note that the choice of index and how its domains are weighted has substantial consequences for which populations are prioritized.",
          "Use data to check and sharpen what you have learned. Do not let it replace what residents tell you. And write about the community the way its members would. Say that the neighborhood has limited bus service and strong tenant organizing, not that it is a bad area.",
        ] },
        { kind: 'case', title: 'The description that was read aloud', scenario: true, text: [
          "A community health worker named Reggie is asked to write a half-page description of the apartment complex where his program will hold weekly workshops. He walks the property, talks to the building manager and four residents, and looks up the area's score on a public tool.",
          "His draft says that the complex has two playgrounds, one of them locked; that residents speak mainly Spanish and Tagalog; that a residents' group meets monthly in the laundry room; and that several people said the bus stop has no shelter. He reads the draft aloud to the residents' group before he turns it in. They correct the name of the group and add that the locked playground used to be the center of the community. His final version is more accurate and the residents trust him more. The check was not extra work. It was the method.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c9-q4',
          q: "According to the Community Tool Box, which of these can define a community?",
          options: [
            "Only a geographic place",
            "Place, shared experience, or shared interest",
            "Only people who live in the same building",
            "Only an organization with members",
          ],
          answer: 1,
          rationale: "The Tool Box says a community can be defined by place, by experience, or by interest, and that these communities often overlap.",
          distractors: "Restricting community to a place, a building, or a membership list leaves out many real communities.",
        } },
        { kind: 'reflect', title: 'Your own description', prompts: [
          "Pick a community you belong to. Which of the outline headings would you find hardest to write honestly?",
          "Who could you read a draft to, to check that it is accurate?",
        ] },
        { kind: 'takeaways', items: [
          "A community can be defined by place, experience, or interest, and these overlap.",
          "A good description covers setting, people, history, strengths, concerns, relationships, and data, and says what is not yet known.",
          "Check it with the people it describes before you share it.",
        ] },
        ev([
          "Community Tool Box, University of Kansas Center for Community Health and Development. Chapter 3, Section 2, Understanding and Describing the Community. The definition of community, the elements of a community description, and the reasons for it.",
          "Maizlish N, et al. California Healthy Places Index, Frames Matter. Public Health Reports, 2019, PMC6598140. The positive asset frame and the consequences of choices in building an index.",
          "The outline and the reading-aloud step are practice guidance written for this course from the Tool Box's description.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-assess-l4',
      title: 'Finding and mapping assets',
      summary: 'Inventories of groups and of individuals, where to look, and how a resource list becomes a map.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "A map of what a community lacks is useful to a funder. A map of what a community has is useful to the people who live there. It tells them who to call, where to meet, and what they can build on.",
          "It is also something a community health worker is expected to maintain. The national skill list includes the ability to build and maintain a current resources inventory.",
        ] },
        { kind: 'concept', title: 'Why identify assets', text: [
          "The Community Tool Box gives several reasons to identify community assets. Assets can be a foundation for improvement, especially when outside funding is not available. Identifying and mobilizing them strengthens residents' ability to shape the decisions and changes that affect their lives. Efforts are more effective and longer-lasting when community members dedicate their time and talents to changes they desire. And it is easier to gain support for an effort that says we have the resources within our community to do this than for one that stresses how large the problem is.",
          "The Tool Box says community members from all backgrounds and sectors should be involved in identifying assets, in part because people from a broad range of groups are far more likely to identify assets that may not be apparent to everyone. It also says the community's own perception of what is an asset is at least as legitimate as the standard list. Its example is a set of empty lots that look like an eyesore to some and like space for playgrounds or a farmers market to others. Seeing something as an asset can make it possible to use it as one.",
        ] },
        { kind: 'concept', title: 'Two inventories', text: [
          "The Tool Box describes two approaches that complement each other. One identifies the assets of groups, which means taking an inventory of the associations, organizations, and institutions in the community. The other identifies the assets of individuals.",
          "For groups, it suggests starting with what you know and writing down anything that comes to mind, then adding from other sources. These include the 211 information and referral system, community websites, online and local business directories, town directories, lists of businesses from a chamber of commerce, lists that are not generally published, physical or virtual bulletin boards and community calendars, and friends and colleagues who may know of groups on nobody else's list. Then refine and revise the list, and sort it alphabetically, geographically, or by function.",
          "For individuals, the Tool Box says this is harder because there are many more people than groups, surveying large numbers takes time, and we often do not know people's assets unless we ask. It points to the idea, attributed to John McKnight, that every single person has capacities, abilities, and gifts, and that living a good life depends on whether those capacities can be used.",
        ] },
        { kind: 'steps', title: 'Building a resource inventory you can trust', items: [
          { label: 'Start with what you know', text: "List the places and people you already use or refer to." },
          { label: 'Add from other sources', text: "Check the 211 system, community websites, directories, bulletin boards, and colleagues." },
          { label: 'Verify each entry', text: "Call or visit. Confirm the name, hours, address, who is served, and what is needed to get in." },
          { label: 'Record the date', text: "Write when you last verified each entry and who did it." },
          { label: 'Sort for use', text: "Sort by need, such as food, housing, health, legal help, and by location, so you can find an answer fast." },
          { label: 'Put it on a map', text: "A map shows gaps and clusters that a list hides. Mark what is close to where people live and gather." },
          { label: 'Review on a schedule', text: "Set a reminder to recheck. Numbers change and offices close." },
        ] },
        { kind: 'vocab', items: [
          { term: 'Resource inventory', plain: "A current list of services and groups you can send people to, with details checked." },
          { term: 'Asset map', plain: "A map that shows where the community's resources are." },
          { term: 'Individual assets', plain: "The skills, talents, knowledge, and connections of the people who live there." },
          { term: 'Capacity', plain: "The ability of a community to use what it has to solve its own problems." },
        ] },
        { kind: 'concept', title: 'Using assets without using people', text: [
          "Asking about someone's skills is a request, not a claim on them. Explain why you are asking, ask if they would like to be involved, and offer something in return. Do not publish a list of individuals' names and abilities without their consent.",
          "Mapping can also raise expectations. If you tell a group their strengths will be used, follow through, or tell them honestly what happened. The Tool Box recommends thinking about how the list or map will be used before you start, and it asks what will be done with the results.",
        ] },
        { kind: 'case', title: 'The list that opened on Thursdays', scenario: true, text: [
          "A community health worker named Priya inherits a resource list from a coworker who left. It has seventy entries. She decides to verify twenty a week. On her third week she calls a food pantry listed as open on Saturdays and learns it moved to Thursdays eight months ago. Four people she referred in the past two months had gone on Saturday and found it closed.",
          "She corrects the entry, adds the date, and tells her supervisor so the others on the team can fix their copies. She also adds a line to her routine. When she refers someone, she asks them to tell her if the place was open. A list that is wrong is worse than no list, because it spends a person's day and trust.",
        ] },
        { kind: 'tryit', title: 'Ten assets in ten minutes', text: [
          "Set a timer for ten minutes. List ten assets in the area where you work or live without looking anything up. Include at least two people, two places, two groups, and one thing others might overlook, like a bench where neighbors talk or a walk-up window. Then circle the ones you could verify this week.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c9-q5',
          q: "You find a food pantry on an old resource list. What should you do before referring someone to it?",
          options: [
            "Refer them, since it is on the list",
            "Verify the address, hours, and eligibility, and record the date you checked",
            "Tell them it might be open and to try their luck",
            "Remove it from the list",
          ],
          answer: 1,
          rationale: "An unverified entry can waste a person's day and trust. Check the details and record when you checked.",
          distractors: "Referring without checking or telling someone to try their luck risks a wasted trip, and removing it without checking may lose a good resource.",
        } },
        { kind: 'reflect', title: 'Your own assets', prompts: [
          "What is one skill you have that no one in your work knows about?",
          "Who is a person in your community whose gifts are not used enough? What would it take?",
        ] },
        { kind: 'takeaways', items: [
          "Community assets include people, places, services, and businesses. The community's own view of what counts is legitimate.",
          "Build two inventories, one of groups and one of individuals, and verify and date every entry.",
          "Map what you find, ask before listing anyone, and follow through on what you promise.",
        ] },
        ev([
          "Community Tool Box, University of Kansas Center for Community Health and Development. Chapter 3, Section 8, Identifying Community Assets and Resources. The reasons for identifying assets, who should identify them, the two approaches, and the sources for an inventory of groups.",
          "C3 Project report, 2016. Skill 8, ability c, building and maintaining a current resources inventory.",
          "The verification steps are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────────────────
    {
      id: 'chw-assess-l5',
      title: 'Field methods: walking, asking, and photovoice',
      summary: 'Windshield and walking surveys, interviews, and photovoice, with their purposes and their cautions.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Once you know what you want to learn, you need a way to learn it. Different questions call for different methods. A question about streets and sidewalks calls for walking them. A question about why people avoid a clinic calls for asking them. A question about what daily life looks like calls for letting people show you.",
          "This lesson covers three methods that a community health worker is well placed to use. It does not replace formal research, and your program decides which you may use. It gives you the vocabulary and the cautions.",
        ] },
        { kind: 'concept', title: 'Windshield and walking surveys', text: [
          "The Community Tool Box defines windshield surveys as systematic observations made from a moving vehicle and walking surveys as systematic observations made on foot. Windshield surveys are useful when the area is large and the aspects you care about can be seen from the road. A walking survey is better for things that are harder to see from a moving vehicle.",
          "They can be structured to give a systematic view of observable conditions and can be adapted to participatory research. They are among the easiest and quickest ways to get an overview, they allow comparison among parts of the community, and they give a feel for the place while providing observations that can be checked against other sources. They can be done at any time, but to understand how people use a place you need to go when they are likely to be active, and perhaps at several times of day, week, or year.",
          "The Tool Box recommends that those who conduct the survey help plan it, because their observations will be sharper if they understand what they are looking for, and that a team gives a variety of perspectives, with each member focused on a task such as observing or recording. It asks you to decide on the questions first, such as whether most streets have sidewalks or how, by whom, and how much public playgrounds are used, and to decide which areas to include.",
          "It also raises safety. People may feel less safe or welcome in some areas because of community tensions, discrimination, unfamiliarity, or other local conditions, and discomfort can affect what an observer notices and how they interpret it. Plan teams and routes with that in mind. Your field safety plan from the Professional Conduct course applies.",
        ] },
        { kind: 'concept', title: 'Interviews', text: [
          "The Tool Box describes interviewing as one of the most useful ways to have a thorough exchange of ideas. You can plan the order of questions, ask follow-ups, clarify, and respond to the unexpected. It also lists when interviews are not the best option. Large numbers of individual interviews are time-consuming. A written or online questionnaire may serve better when you need information from many people or only straightforward numbers. And interviews may not suit people who are unwilling or uncomfortable, or who distrust you or your organization, because they may not answer openly and the information may be incomplete or misleading.",
          "It notes that an interviewee may have a personal perspective or interest that shapes their answers, so learn what you reasonably can about their background and stay open to what they say. And it advises setting expectations beforehand about whether an interviewee can review the material afterward, while keeping responsibility for the final analysis with the interviewer or organization.",
          "Who you interview depends on what you need to know. To understand a program you might interview the coordinator at a successful agency. To understand how an audience responds to a campaign you would interview members of that audience.",
        ] },
        { kind: 'concept', title: 'Photovoice', text: [
          "The Tool Box describes Photovoice as developed by Caroline Wang and Mary Ann Burris in 1992, drawing on Paulo Freire's idea of critical consciousness, feminist theory, and documentary photography. Their first project gave cameras to rural village women in Yunnan Province, China, who documented their lives for a year, met regularly to discuss the pictures, and ended with an exhibition used to raise awareness among the public and policy makers.",
          "It lists three goals. To help people whose perspectives are often unheard make those perspectives more visible, enabling them to record and reflect on their experiences and their communities' conditions, both positive and negative. To encourage critical consciousness, meaning people come to a clearer understanding of the forces shaping their circumstances. And to bring about change by reaching and influencing policy makers.",
          "It stresses that Photovoice is much more than handing out cameras. Photographers learn camera basics and discuss safe and ethical practice, usually meet regularly in a facilitated group to show and discuss images, and need planning around consent, privacy, and keeping themselves safe while photographing. A project may stand alone, but the Tool Box says it is more often, and probably more effectively, run in collaboration with an existing group or coalition. It also notes that people may interpret the same image differently depending on their experiences and context.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Windshield survey', plain: "A systematic set of observations made from a moving vehicle." },
          { term: 'Walking survey', plain: "A systematic set of observations made on foot." },
          { term: 'Interview', plain: "A planned conversation to learn what a person knows or thinks." },
          { term: 'Photovoice', plain: "A method where community members take photographs of their lives and surroundings and use them to start discussion and action." },
          { term: 'Critical consciousness', plain: "A clear understanding of the forces that shape your circumstances, which is a first step toward changing them." },
        ] },
        { kind: 'list', title: 'Choosing a method', items: [
          "To see physical conditions across an area, a windshield or walking survey.",
          "To learn what someone thinks, knows, or feels, an interview.",
          "To let people show their own daily life and priorities, photovoice.",
          "To reach many people with short questions, a written or online questionnaire.",
          "To check what one method found, add another. The methods complement each other.",
        ] },
        { kind: 'concept', title: 'Before you use any method', text: [
          "Ask your supervisor whether your program approves the method, whether an ethics or privacy review is needed, and who owns the results. Tell participants what you are doing, why, who will see it, and that they can decline. Plan for safety. And decide before you start what you will do with what you learn, since asking and then doing nothing damages trust.",
          "The Tool Box says a full discussion of ethics and safety for Photovoice is beyond the scope of its section, so do not treat any single source as the last word. Follow your program's procedures.",
        ] },
        { kind: 'case', title: 'The sidewalk walk', scenario: true, text: [
          "Residents of a senior apartment building tell a community health worker named Gabriel that they have stopped walking to the market because of broken sidewalks. He and three residents plan a walking survey. They decide on one question, are the routes between the building and the market passable for someone with a walker or a cane, and agree on a route and a time of morning when the market is busy.",
          "One resident takes photographs with her phone, one counts curb cuts, one notes places to sit, and Gabriel writes. They walk with an eye on one resident's pace. The results go into a one-page note with the photos, a map, and a request to the city. Because the residents helped plan it, the findings are theirs. Gabriel's job was to help them see what they already knew, in a form the city would read.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c9-q6',
          q: "Which situation is best suited to a windshield or walking survey?",
          options: [
            "Learning why individual residents distrust a clinic",
            "Getting an overview of observable conditions, like sidewalks, lighting, and vacant lots, across an area",
            "Reaching thousands of people with the same short questions",
            "Finding out what a person feels about their health",
          ],
          answer: 1,
          rationale: "The Tool Box describes these surveys as systematic observation of physical and social conditions that can be seen, useful for an overview and for comparing parts of a community.",
          distractors: "Distrust and feelings call for interviews or conversation, and reaching thousands calls for a questionnaire.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c9-q7',
          q: "Which of these is one of the three goals of Photovoice described in the Community Tool Box?",
          options: [
            "To produce professional-quality artwork for sale",
            "To help people whose perspectives are often unheard make them more visible and to bring about change by reaching policy makers",
            "To replace interviews and surveys",
            "To test participants' photography skills",
          ],
          answer: 1,
          rationale: "The goals are to make unheard perspectives more visible, to encourage critical consciousness, and to bring about change by reaching and influencing policy makers.",
          distractors: "Photovoice is not about art sales, replacing other methods, or skill testing.",
        } },
        { kind: 'reflect', title: 'Your own method', prompts: [
          "What question about your community would you most like answered? Which method would fit?",
          "What would you need from your supervisor before you tried it?",
        ] },
        { kind: 'takeaways', items: [
          "Windshield and walking surveys observe conditions systematically. Interviews learn what people think. Photovoice lets people show their own lives.",
          "Choose the method for the question, involve the people it concerns in planning, and plan for consent, privacy, and safety.",
          "Decide beforehand what you will do with what you learn.",
        ] },
        ev([
          "Community Tool Box, University of Kansas Center for Community Health and Development. Chapter 3, Section 21, Windshield and Walking Surveys. Section 12, Conducting Interviews. Section 20, Implementing Photovoice in Your Community. The definitions, uses, cautions, and the history of Photovoice.",
          "OSHA. Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers, 3148-06R. Referred to for field safety through the Professional Conduct course.",
        ]),
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────────────────
    {
      id: 'chw-assess-l6',
      title: 'Putting assessments together and giving them back',
      summary: 'The four MAPP assessments, how to hold several kinds of evidence at once, and how to share findings with the community.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "One method rarely gives you the whole picture. Numbers tell you how many and not why. Stories tell you why and not how many. A walk tells you what is visible and not what is felt. The skill is in combining them.",
          "And an assessment is not finished when you finish collecting. It is finished when the people it describes have seen it and it has been used.",
        ] },
        { kind: 'concept', title: 'The four assessments in MAPP', text: [
          "A national framework for community health planning, Mobilizing for Action through Planning and Partnerships, known as MAPP, was developed from 1997 through 2001 by the National Association of County and City Health Officials with the Centers for Disease Control and Prevention. Its fact sheet describes a process of six phases, with four assessments that inform the entire process.",
          "The Community Themes and Strengths Assessment provides qualitative information on how communities perceive their health and quality of life concerns and what they know about community resources and assets. The Local Public Health System Assessment measures how well public health system partners collaborate to provide services. The Community Health Status Assessment provides quantitative data on a broad array of health indicators. The Forces of Change Assessment analyzes the positive and negative external forces that affect the promotion and protection of the public's health.",
          "The fact sheet says that using four different assessments is a unique feature of MAPP, because most planning processes look only at quantitative statistics and anecdotal data. MAPP provides tools to help communities analyze health issues through multiple lenses.",
        ] },
        { kind: 'concept', title: 'What you can borrow', text: [
          "You will probably not run a MAPP process. But you can borrow its logic. When you look at a question, ask four things. What do people in the community say, and what strengths do they point to? What do the numbers show? How well do the organizations that serve here work together? And what outside forces, like policy changes, funding shifts, or new construction, are pushing on this place?",
          "The fact sheet describes the six phases, from organizing for success and partnership development, to visioning, to the four assessments, to identifying strategic issues, to formulating goals and strategies, to an action cycle that includes planning, implementation, and evaluation. Notice that the assessments come in the middle. The partnership and the shared vision come first, and action follows.",
          "The fact sheet also says that community involvement throughout the creation and implementation of a plan results in creative solutions and in community ownership, which increases the credibility and sustainability of efforts, and it states that public health belongs to the community.",
        ] },
        { kind: 'concept', title: 'Whose priorities come first', text: [
          "The Community Tool Box makes a point that is easy to forget. Community members' priorities may differ from those of professionals, but they should not be ignored. It may be important to address the community's priorities first to establish trust and show respect, even if you do not believe they are the most important issues. Building relationships and credibility may be more important at the beginning of a long association than immediately tackling what seems to be the most pressing need. And community members' priorities may be the right ones, because they may see underlying factors you do not yet understand.",
          "That holds for you as a community health worker. The need you notice first may not be the one people want to work on first. Listening to that difference is part of the assessment.",
        ] },
        { kind: 'steps', title: 'Giving findings back', items: [
          { label: 'Write for the people described', text: "Use plain words and the terms residents use. Avoid labels." },
          { label: 'Show it to them first', text: "Read or show a draft to people from the community before you send it anywhere." },
          { label: 'Separate facts, voices, and your reading', text: "Mark what was observed, what people said, and what you think it means." },
          { label: 'Protect people', text: "Remove names and details that could identify anyone who did not agree to be named." },
          { label: 'Say what will happen next', text: "Tell people what you will do with it and when they will hear back." },
          { label: 'Report back', text: "Return with what happened, even if the answer is that nothing has changed yet." },
        ] },
        { kind: 'case', title: 'The finding that surprised everyone', scenario: true, text: [
          "A small group of parents, a community health worker named Tamika, and a nurse from a partner clinic assess why few children in a neighborhood are getting dental checkups. The numbers show low rates. The nurse expects the reason to be insurance or paperwork. Tamika's conversations with parents and a walk of the route to the dental office point somewhere else. There is no direct bus, the office closes at four, and parents who work cannot take children during school hours.",
          "Tamika brings the group's draft back to the parents before submitting it. They agree, and add that the school nurse could host a day of checkups. The final report lists the transportation and hours findings first, because that is what the parents said mattered. The numbers told them where the gap was. The conversations told them why. The parents' idea told them what to try.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c9-q8',
          q: "What is a distinctive feature of the MAPP approach, according to the NACCHO fact sheet?",
          options: [
            "It uses only quantitative statistics",
            "It uses four different assessments, giving multiple lenses on health issues",
            "It is carried out by a single agency without partners",
            "It focuses on a single public health problem",
          ],
          answer: 1,
          rationale: "The fact sheet says the use of four different assessments is a unique feature of MAPP, because most planning processes look only at quantitative statistics and anecdotal data.",
          distractors: "MAPP is a partnership process that addresses multiple factors, not a single agency or a single problem.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c9-q9',
          q: "After you finish collecting information about a neighborhood, what should you do before sending your findings to a funder?",
          options: [
            "Nothing, since the data is already collected",
            "Share a draft with people from the community, correct it, and protect identities",
            "Replace residents' words with statistics",
            "Add stronger language about the problems",
          ],
          answer: 1,
          rationale: "Showing a draft to the people it describes improves accuracy and trust. The Tool Box stresses involving community members from the start and respecting their priorities.",
          distractors: "Skipping the community check, replacing their words, or exaggerating weakens the work and the relationship.",
        } },
        { kind: 'reflect', title: 'Your own return', prompts: [
          "Think of a time someone asked for your input and you never heard back. How did it feel?",
          "Who would you share your next assessment with first?",
        ] },
        { kind: 'takeaways', items: [
          "No one method gives the full picture. MAPP uses four assessments so that a community is seen through several lenses.",
          "Community priorities may be the right ones. Listen to them first.",
          "An assessment is finished when the people it describes have seen it and it has been used.",
        ] },
        ev([
          "National Association of County and City Health Officials. Mobilizing for Action through Planning and Partnerships: A Community Approach to Health Improvement, fact sheet, February 2008. The development of MAPP, the six phases, the four assessments, and the role of community involvement.",
          "Community Tool Box, University of Kansas Center for Community Health and Development. Chapter 3, Section 1. The importance of community priorities, trust, and participation.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c9-practice',
    title: 'Your assessment practice file',
    minutes: 30,
    purpose: 'Five short pieces that you keep: a strengths-and-needs conversation, a community description, a verified asset inventory, a plan for one field method, and a plan for giving findings back.',
    fields: [
      { id: 'conversation', label: 'A strengths-and-needs conversation', help: 'Practice with a friend or colleague who agrees. Write the six open questions you used, what you learned, three facts you would record, and one thing you left out at their request.', multiline: true },
      { id: 'description', label: 'A community description', help: 'Write a one-page description of a community you know, using the nine headings from Lesson 3. Say who you would read it to and what you would ask them to check.', multiline: true },
      { id: 'inventory', label: 'A verified asset inventory', help: 'List ten resources, with name, address, hours, who is served, how to get in, the date you verified it, and how. At least two should be people or groups, not agencies.', multiline: true },
      { id: 'method', label: 'A plan for one field method', help: 'Choose a windshield or walking survey, an interview, or photovoice. Write the question it answers, who would plan it with you, the safety plan, the consent steps, and what you will do with the results.', multiline: true },
      { id: 'return', label: 'Giving it back', help: 'Write how you would share findings with the people they describe: the format, the plain words you would use, what you would leave out to protect people, and the date you would report back on what happened.', multiline: true },
    ],
    reference: { title: 'The nine headings for a community description', items: [
      'Who we mean',
      'The setting',
      'The people',
      'The history',
      'The strengths',
      'The concerns',
      'The relationships',
      'The data',
      'What we do not know yet',
    ] },
  },
  furtherLearning: [
    { name: 'C3 Project: Understanding Scope and Competencies, a Contemporary Look at the U.S. CHW Field (2016)', use: 'The national list of roles and skills, including individual and community assessment.', url: 'https://portal.ct.gov/-/media/ohs/sim/chw-advisory-committee/2016/2016-06-14/chw-c3-report.pdf' },
    { name: 'Community Tool Box: Assessing Community Needs and Resources', use: 'Twenty-four sections on planning assessments, describing the community, finding assets, interviews, surveys, photovoice, and windshield and walking surveys.', url: 'https://ctb.ku.edu/en/table-of-contents/assessment/assessing-community-needs-and-resources' },
    { name: 'Community Tool Box: Identifying Community Assets and Resources', use: 'Inventories of groups and individuals, sources for lists, and mapping.', url: 'https://ctb.ku.edu/en/table-of-contents/assessment/assessing-community-needs-and-resources/identify-community-assets/main' },
    { name: 'Community Tool Box: Windshield and Walking Surveys', use: 'How to plan and carry out systematic observation of a community.', url: 'https://ctb.ku.edu/en/table-of-contents/assessment/assessing-community-needs-and-resources/windshield-walking-surveys/main' },
    { name: 'Community Tool Box: Implementing Photovoice in Your Community', use: 'The history, goals, and steps of a photovoice project.', url: 'https://ctb.ku.edu/en/table-of-contents/assessment/assessing-community-needs-and-resources/photovoice/main' },
    { name: 'NACCHO: Mobilizing for Action through Planning and Partnerships (fact sheet)', use: 'The six phases and four assessments of the national community health planning framework.', url: 'https://www.naccho.org/uploads/downloadable-resources/Programs/Public-Health-Infrastructure/MAPP-factsheet-system-partners.pdf' },
    { name: 'Centers for Medicare and Medicaid Services: Accountable Health Communities Model', use: 'The model for screening, referral, and navigation for health-related social needs.', url: 'https://www.cms.gov/priorities/innovation/innovation-models/ahcm' },
  ],
};
