// Community Mental Health Worker Pathway, Foundations course 12: Capacity Building and Community Organizing.
//
// This is the certificate's own course 12 (id chw_capacity_building, 3 hours, live). The id matches
// the certificate on purpose: the Academy posts every completed course to the portal, and the portal
// credits a learner only for ids it recognizes.
//
// A live practice course. Two short lessons are read before the sessions. Two scheduled sessions are
// practiced with a facilitator and a group. The stated 180 minutes equal the lessons, the sessions,
// and the practice file.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources
// are the C3 Project's list of community health worker roles and skills (the capacity building skill
// and role), SAMHSA's core competencies for peer workers, and five sections of the Community Tool Box
// on identifying community assets, planning to increase participation, reaching diverse groups,
// starting and maintaining a coalition, and designing a training session. These sources describe good
// practice and expert views. None of them is a trial showing that one organizing approach produces
// better health outcomes than another, and the course does not claim that. The C3 list names
// community organizing as a skill but does not define it, so the course teaches the specific practices
// the Community Tool Box describes and does not offer its own definition. The scenes and practice
// statements were written for this course and describe no real person or place.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_CAPACITY_BUILDING: Course = {
  id: 'chw_capacity_building',
  num: 12,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Capacity Building and Community Organizing',
  promise:
    "Help people and communities build on strengths they already have, map community assets, invite people in with respect, work in coalitions, and design a short training to pass your skills on.",
  about: [
    "Capacity building is the part of community health work that makes your work last. Helping one person get a service is valuable. Helping a person, a neighborhood, or a group of peers become more able to get services, make decisions, and help each other is what lasts after you move on.",
    "It rests on the C3 Project's national list of community health worker roles and skills, SAMHSA's competencies for peer workers, and five sections of the Community Tool Box on community assets, planning participation, reaching diverse groups, building coalitions, and designing a training session.",
    "It is Foundations course 12 of HMC's community health worker certificate. It is a live practice course. You read two short lessons, then practice in two scheduled sessions, then complete a practice file. You will map assets and plan participation for invented communities so you can focus on the skills.",
  ],
  objectives: [
    "Describe capacity building and the skills the national list attaches to it.",
    "Map the assets of a community, including people, places, services, and businesses.",
    "Plan how to invite people in, with respect, a meaningful role, and a real chance to say no.",
    "Explain what a coalition is, who should be part of it, the barriers to starting one, and what keeps one going.",
    "Design a short training so that peers can learn what you know.",
    "Work inside your role, with your program's approval, and without taking over.",
  ],
  minutes: 180,
  prerequisites: "None. Individual and Community Assessment, Health Education and Facilitation, and Advocacy are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management who work with groups and neighborhoods as well as individuals, or who want to train and support their peers.",
  freshness:
    "The practices in this course are long established. Your program tells you which coalitions, groups, and community efforts are part of your role, and which you may represent HMC in.",
  modality: 'virtual',
  requirements: [
    { id: 'cb-lessons', label: 'Read the two lessons before the first session', kind: 'assignment' },
    { id: 'cb-s1', label: 'Attend Session 1, Mapping Assets and Inviting People In', kind: 'attend' },
    { id: 'cb-s2', label: 'Attend Session 2, Working Together', kind: 'attend' },
    { id: 'cb-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-cb-l1',
      title: 'Building on what is already there',
      summary: 'What the national list says, how to map assets, how to plan and invite participation, and how to train peers.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "It is easy to arrive in a community with a list of what is missing. It is more useful to arrive asking what is already working, who is already helping, and what people could do together if the right door opened. Capacity building starts with the second set of questions.",
        ] },
        { kind: 'concept', title: 'What the national list says', text: [
          "The C3 Project's list of community health worker roles includes building individual and community capacity. It names building individual capacity, building community capacity, and training and building individual capacity with community health worker peers and among groups of community health workers.",
          "Its list of skills includes a capacity building skill with five abilities. To help others identify goals and develop to their fullest potential. To work in ways that increase individual and community empowerment. To network, build community connections, and build coalitions. To teach self-advocacy skills. And to conduct community organizing.",
          "SAMHSA's competencies for peer workers include a category on leadership and advocacy, which lists participating in efforts to improve the organization and educating colleagues about recovery and the use of recovery support services.",
          "Notice the verbs. Help, increase, build, teach. Each one is about someone else becoming more able.",
        ] },
        { kind: 'concept', title: 'Start with assets', text: [
          "The Community Tool Box says many community organizations focus on needs or deficits, and every community does have needs. It also says it is possible to focus on assets and strengths, on what the community has, and to use those assets to meet the same needs.",
          "It defines a community asset as anything that can be used to improve the quality of community life. An asset can be a person, such as someone who organizes a playgroup or is an informal neighborhood leader. It can be a physical structure or place, such as a school, a place of worship, a library, a recreation center, a park, or an unused room that could host meetings. It can be a service, such as public transportation or a cultural organization. It can be a business that provides jobs. And it says that you and everyone else in the community are potential assets, because everyone has some skills, knowledge, and connections.",
          "It gives reasons to start there. Assets are a foundation for community improvement, and they matter even more when outside funding is not available. Identifying and using assets strengthens residents' ability to shape the decisions that affect them, and efforts tend to last longer when community members give their own time and talents. It also says that you cannot fully understand a community without knowing its assets, and that it is easier to gain support for an effort that says we have what we need within the community than for one that stresses how large the problem is.",
          "It says community members from all backgrounds and sectors should take part in identifying assets. That is the practical point. You do not map a community's assets for it. You do it with its people.",
        ] },
        { kind: 'concept', title: 'Planning who to invite, and why', text: [
          "The Community Tool Box has a section on increasing participation in community action. Its starting point is that you should be able to say why you want more people. What work needs to be done. What voices or experiences are missing. What skills or relationships would strengthen the effort.",
          "It lists the questions that a plan answers. Why do you need more participants. How many people or organizations. What skills, experiences, perspectives, or connections. Who will identify and invite them. Where might you connect with them. When is a good time to invite. How should you approach them. What happens if you get a yes, a maybe, or a no. And what barriers to participation may arise and how can you address them.",
          "It says to write the plan down, so that there is a shared record of what has been decided and who is responsible. It notes that planning helps you avoid approaching the same people over and over, overlooking important perspectives, or inviting people without a meaningful role for them.",
        ] },
        { kind: 'concept', title: 'Reaching beyond the familiar circle', text: [
          "A second section addresses diverse groups. It says that many people could contribute if the issue is relevant to them, the role is meaningful, and participation is reasonably accessible. People may prefer different kinds of involvement, such as long-term membership, a short project, occasional advice, or representation of a partner organization. The point is to keep your eyes open to all parts of the community and not to turn repeatedly to the same familiar circle.",
          "It suggests thinking about the sectors of community life, such as schools, faith communities, businesses and employers, media, and government, and also clinics, childcare organizations, cultural and immigrant associations, housing and tenant groups, libraries, neighborhood groups, parent and caregiver groups, veterans groups, disability organizations, youth-led groups, and labor organizations. It advises asking which perspectives, responsibilities, knowledge, and resources are relevant to the issue instead of assuming that institutional status alone earns a place at the table.",
          "And it says identifying people is only the start. The next step is respectful outreach. Explain the purpose of the effort, listen to people's interests and concerns, and invite them to take part in ways that are meaningful and realistic for them. Not everyone will want to join, and that is okay.",
        ] },
        { kind: 'concept', title: 'Building one person\'s capacity', text: [
          "At the individual level, the national list says to help people identify their own goals and to teach self-advocacy. This links to what you have already learned. Motivational interviewing is a way to help someone name their own reasons. The advocacy course covers coaching a person to speak for themselves. Cultural humility is a way to keep from assuming what someone's strengths and goals are.",
          "Practice guidance for this course. When you finish helping someone, ask what they now know how to do that they did not before. If the answer is not much, consider whether you did it for them.",
        ] },
        { kind: 'concept', title: 'Training others', text: [
          "The C3 Project lists training peers as part of the capacity building role. The Community Tool Box section on designing a training session says that training takes many forms, such as learning a skill, learning information, practicing a procedure, understanding a policy, or learning how to respond to situations. It lists formats such as workshops, live virtual training, self-paced learning, supervised practice, on-the-job guided practice, peer learning and communities of practice, coaching and mentoring, and simulations.",
          "Its design steps are identifying the need, understanding the intended learners, developing objectives, choosing and organizing content, selecting learning methods, and planning how learning will be assessed. It adds a caution that matters for small organizations. Before developing a new training, look for existing training, standards, or resources that may address your need. Do not assume an existing course should be used simply because it is available. Confirm that it is current, accurate, accessible, appropriate for the intended learners, aligned with your objectives, and legally available for the way you plan to use or adapt it.",
          "The facilitation course covered how to teach and lead a group. This lesson adds the design question. Before you build a training, ask whether the need is real, whether something good already exists, and how you will know people learned.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Capacity building', plain: "Helping people, groups, and communities become more able to meet their own needs and shape their own future." },
          { term: 'Community asset', plain: "Anything that can be used to improve the quality of community life, including people, places, services, and businesses." },
          { term: 'Empowerment', plain: "People gaining the means and the confidence to make decisions that affect them." },
          { term: 'Participation plan', plain: "A written plan for who to invite, how, and with what role and support." },
          { term: 'Peer learning', plain: "People with shared experience teaching and supporting each other." },
        ] },
        { kind: 'myths', items: [
          { myth: "Our job is to find the problems in a community.", reality: "The Community Tool Box says every community has needs, and also that a focus on assets and strengths can be used to meet those needs. Start with both." },
          { myth: "More people at the table is always better.", reality: "The Tool Box says the question is whether the right people, organizations, perspectives, and decision-makers are included, and that a meaningful role matters." },
          { myth: "If a training exists, use it.", reality: "The Tool Box says to look for existing training first and to confirm it is current, accurate, accessible, appropriate, aligned, and legally available to use." },
          { myth: "Capacity building means doing things for the community.", reality: "The national list is about helping others identify goals, teaching skills, and increasing empowerment, so that people can do things themselves." },
        ] },
        { kind: 'case', title: 'Two ways to start a project', scenario: true, text: [
          "A worker wants to start a weekly walking group at a neighborhood park. In the first version, she designs the schedule, prints flyers, and invites residents through a clinic list. Four people come the first week and two the second. She feels she has done everything right.",
          "In the second version, she first asks a small number of residents, a librarian, and a faith leader what already happens in the park and who uses it. They tell her about an older man who already walks there every morning and a parent who leads stretching for kids on Saturdays. The worker invites them to help decide the time and the route. The library offers a room for rainy days. Residents tell her they would come if the group began after work. She is no longer the group's leader. She is the person who brought the first conversation together.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-cb-q1',
          q: "According to the Community Tool Box, which of these is a community asset?",
          options: [
            "Only funding from outside the community",
            "Only paid staff of local organizations",
            "Anything that can be used to improve community life, including people, places, services, and businesses",
            "Only buildings",
          ],
          answer: 2,
          rationale: "The Tool Box defines a community asset broadly as anything that can be used to improve the quality of community life, and says that residents themselves are assets.",
          distractors: "The other options narrow the definition to funding, staff, or buildings, which leaves out most of what the source describes.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-cb-q2',
          q: "You identify a local group you would like to invite to a planning meeting. What does the Community Tool Box suggest as the respectful next step?",
          options: [
            "Add them to the list and assume they will come",
            "Explain the purpose of the effort, listen to their interests and concerns, and invite them in a way that is meaningful and realistic for them",
            "Ask them to send money",
            "Invite them only if they have an official title",
          ],
          answer: 1,
          rationale: "The source says that identifying people is only part of the process, and that the next step is respectful outreach: explaining the purpose, listening, and inviting people in ways that are meaningful and realistic. It adds that not everyone will want to join.",
          distractors: "The other options assume participation, ask for money, or rely on institutional status, which the source cautions against.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-cb-q3',
          q: "Your organization wants to build a training for peers. According to the Community Tool Box, what should you do before you design one from scratch?",
          options: [
            "Start writing slides right away",
            "Look for existing training and resources, and confirm they are current, accurate, accessible, appropriate, aligned, and legally available before using or adapting them",
            "Use the first training you find",
            "Skip the needs assessment",
          ],
          answer: 1,
          rationale: "The Tool Box advises looking for existing training first, and not assuming that an existing course should be used simply because it is available.",
          distractors: "The other answers skip the check on existing material, or assume it is suitable without confirming.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Think of a community you serve. What are three assets you could name, and who knows about them?",
          "Who might be missing from the conversations you are part of?",
        ] },
        { kind: 'takeaways', items: [
          "Capacity building helps people and communities become more able. Start with assets as well as needs.",
          "Plan who to invite and why. Offer a real role and a real chance to say no.",
          "Before you build a training, look for what exists, and plan how you will know people learned.",
        ] },
        ev([
          "C3 Project. Understanding Scope and Competencies, a Contemporary Look at the U.S. Community Health Worker Field (2016). The capacity building role and skill. The report names community organizing as a skill and does not define it.",
          "Community Tool Box, University of Kansas. Chapter 3, Section 8, Identifying Community Assets and Resources. The definition of a community asset and the reasons to identify assets. Read in full.",
          "Community Tool Box. Chapter 7, Section 1, Developing a Plan for Increasing Participation in Community Action, and Section 2, Promoting Participation Among Diverse Groups. The planning questions, the sectors of a community, and respectful outreach. Read in full.",
          "Community Tool Box. Chapter 12, Section 2, Designing a Training Session. The kinds of training, the design steps, and the note about existing training. Read in part.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category XI, promotes leadership and advocacy.",
          "The question to ask after helping someone is practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-cb-l2',
      title: 'Working together: coalitions and staying power',
      summary: 'What a coalition is, who belongs, what gets in the way, and what keeps one going.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Many community problems are too large for any one organization. Housing, transportation, safety, and access to care involve many agencies and many residents. Working together is how most real change happens, and it is also slow, political, and easy to get wrong. This lesson covers what the Community Tool Box says about doing it well.",
        ] },
        { kind: 'concept', title: 'What a coalition is', text: [
          "The Community Tool Box defines a coalition in simple terms as a group of individuals and organizations with a common interest who agree to work together toward a common goal. A coalition can be as narrow as getting funding for one intervention or as broad as improving the overall quality of life in a community. Some are loose associations that work for a short time on a goal and then disband. Others become organizations with governing bodies, responsibilities, funding, and permanence.",
          "It lists reasons to form one. To address an urgent situation. To strengthen a community's ability to shape its future. To obtain or provide services. To coordinate work and reduce unnecessary duplication of effort. To pool resources. To increase communication among groups and challenge stereotypes and assumptions. To renew the energy of people and organizations that have been doing too much alone. To build collective influence. And to create lasting change over time.",
          "The word unnecessary matters in the source. Several organizations providing similar services may be responding to a need larger than all of them can meet, and similar services can give people choices. The question is whether better coordination can increase access, quality, or effectiveness without reducing useful options.",
        ] },
        { kind: 'concept', title: 'Who belongs', text: [
          "The source says coalitions benefit from broad and relevant participation, and that more members is not always better. The question is whether the right people, organizations, perspectives, and decision-makers are included. It lists those most affected by the issue, who should have meaningful opportunities to take part in decisions, along with people and organizations that carry out community functions related to the issue, such as providers, schools, and employers. It also lists community opinion leaders and emerging leaders, who are people others look to for guidance even without a title. And it lists policy makers, with the caution that their participation should complement and not replace the voices of community members and others directly affected.",
          "It advises building relationships with the media and providing accurate information, and not asking journalists to join a coalition that they may later need to cover independently.",
        ] },
        { kind: 'concept', title: 'What gets in the way', text: [
          "The source names common barriers. Turf issues, where organizations worry about sharing responsibilities, relationships with participants, recognition, information, or funding. Past harm or missteps, where people have good reason to doubt that working together is possible. Domination by professionals, officials, or others with greater institutional influence. Poor links to the community. Minimal organizational capacity, such as no one to coordinate. And funding.",
          "On the third barrier, it says a coalition should make meaningful participation possible for the people most affected, and make sure that professional or institutional expertise does not override lived experience and community knowledge. It suggests designing meetings and decision-making so that people with different kinds of experience can participate fully, and it notes that some participants may benefit from orientation, interpretation, accessibility supports, childcare, transportation, or other assistance. It also says professionals and institutional leaders may need to practice listening and sharing decision-making power.",
          "This echoes the cultural humility course. Power in the room is real, and it is a design problem as well as an attitude problem.",
        ] },
        { kind: 'concept', title: 'Starting', text: [
          "The source suggests putting together a core group and not leaving the effort to one person. A core group has more contacts and more knowledge of the community than one individual. In the planning for participation, it advises being clear about why people are being invited and what their role will be, and asking what happens if the answer is yes, maybe, or no.",
          "Use what you have learned in the facilitation course. Be clear about the purpose, your role, and who decides, and plan for access.",
        ] },
        { kind: 'concept', title: 'Keeping it going', text: [
          "A second section addresses maintaining a coalition. Its key point is that maintenance will not happen by itself. It takes conscious, planned, and ongoing effort. It says coalitions need particular attention because they bring together people and organizations with different priorities, responsibilities, cultures, and expectations, and because the environment keeps changing.",
          "It lists what needs to be maintained: the vision, mission, and objectives. The governance and operating rules. The leadership. The membership. The division of labor. The short- and longer-term plans. And the coalition's actions and results. It also notes that alternatives to simple maintenance include growth, changing direction, and even ending. The source lists ending as one of the alternatives.",
        ] },
        { kind: 'concept', title: 'Your place in it', text: [
          "Practice guidance for this course. Join coalitions and community efforts that your program has approved, and be clear about whether you are speaking for HMC or for yourself. Do not commit your program to anything without approval. Do not share information about the people you serve in meetings, and follow your program's rules on confidentiality. If the coalition moves toward policy or legislation, remember the rules for a charity that you learned in the advocacy course, and ask first.",
          "Within those limits, you have something valuable to offer. You know how people actually experience services. The source says lived experience and community knowledge should not be overridden by institutional expertise. In a room full of professionals, you may be the person who brings both.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Coalition', plain: "A group of individuals and organizations with a common interest who agree to work together toward a common goal." },
          { term: 'Stakeholder', plain: "A person or group with a stake in the work, including those most affected." },
          { term: 'Turf issues', plain: "Worries about sharing responsibilities, relationships, recognition, information, or funding." },
          { term: 'Core group', plain: "A small group of people and organizations who take the lead in starting an effort together." },
          { term: 'Emerging leader', plain: "A person others look to for guidance, often without a title." },
        ] },
        { kind: 'check', check: {
          id: 'hrtp-cb-q4',
          q: "According to the Community Tool Box, which is a common barrier to starting a coalition?",
          options: [
            "Too many people want to help",
            "Domination by professionals or officials with greater institutional influence, which can override lived experience",
            "Everyone agrees at the start",
            "Having a core group",
          ],
          answer: 1,
          rationale: "The source names domination by professionals, officials, or others with greater institutional influence as a barrier, and says a coalition should make participation by the people most affected possible and should not let institutional expertise override lived experience.",
          distractors: "The other options are not barriers named in the source, and a core group is recommended.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-cb-q5',
          q: "Your coalition has been running for a year and is doing well. What does the Community Tool Box say about maintenance?",
          options: [
            "It happens by itself once a coalition is stable",
            "It takes conscious, planned, ongoing effort, including attention to mission, rules, leadership, membership, division of labor, plans, and results",
            "It is needed only if members leave",
            "It is the same as fundraising",
          ],
          answer: 1,
          rationale: "The source says maintenance will not happen all by itself, and it lists the vision and objectives, governance, leadership, membership, division of labor, plans, and results as things to maintain.",
          distractors: "The other options assume maintenance is automatic, only reactive, or only about money.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-cb-q6',
          q: "You are asked to speak at a coalition meeting about a client's experience. What is the best practice?",
          options: [
            "Share the story with the client's name to make it real",
            "Check with your program, get the person's informed agreement, and leave out details that could identify them",
            "Share it without checking, since coalitions are friendly",
            "Decline to attend",
          ],
          answer: 1,
          rationale: "Your program's confidentiality rules apply, and a person's story should be shared only with their informed agreement and without identifying details. The advocacy course covers this.",
          distractors: "The other options ignore consent and confidentiality or give up your voice.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Think of a group you have been part of that worked well or badly. What made the difference?",
          "Who in a coalition would be hard for you to speak up around, and what would help?",
        ] },
        { kind: 'takeaways', items: [
          "A coalition is a group that agrees to work toward a common goal. Include the right people, especially those most affected.",
          "Expect turf, past harm, and unequal power. Design meetings so that everyone can take part.",
          "Maintenance is planned and ongoing. Work within your role, and ask your program before you commit or speak for HMC.",
        ] },
        ev([
          "Community Tool Box, University of Kansas. Chapter 5, Section 5, Coalition Building I: Starting a Coalition, and Section 6, Coalition Building II: Maintaining a Coalition. The definition, reasons, who should be included, barriers, starting with a core group, and what needs to be maintained. Both sections were read in part.",
          "C3 Project (2016). The capacity building skill and role.",
          "The guidance on your place in a coalition and on confidentiality is practice guidance written for this course.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-cb-s1',
      title: 'Session 1, Mapping Assets and Inviting People In',
      summary: 'A live practice session. Map the assets of an invented neighborhood, plan participation, and practice a respectful invitation.',
      minutes: 50,
      blocks: [
        { kind: 'why', text: [
          "Asset mapping and inviting people in are two small skills that change how a whole project starts. This session practices both with an invented neighborhood, so you can focus on the method.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All neighborhoods, people, and organizations in this session are invented. Do not use a real person or a real organization as an example. You can pass at any time. What is said in the room stays in the room.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Asset map, 15 minutes', text: "Small groups receive a short description of an invented neighborhood. They list assets in four columns: people, places, services, and businesses. They add one asset that is easy to overlook, and one question they would ask residents to learn more." },
          { label: 'Participation plan, 15 minutes', text: "Using the asset map, each group chooses a small project, such as a monthly health information table or a walking group. They answer the planning questions: why, how many, what skills and perspectives, who invites, where, when, how, what happens with a yes, a maybe, and a no, and what barriers might arise." },
          { label: 'Practice an invitation, 10 minutes', text: "In pairs, one person plays someone invited to help and the other invites them. The inviter explains the purpose, listens to interests and concerns, offers a role that is meaningful and realistic, and accepts a no without pressure. The observer notes how the inviter responded to a no or a maybe." },
          { label: 'Close, 5 minutes', text: "One person or place you will learn about this month." },
        ] },
        { kind: 'list', title: 'Invented neighborhood', items: [
          "A neighborhood of about two thousand households, with one main street, a library branch, a small clinic that closes at five, and a park with a covered picnic area.",
          "Two places of worship, a tenants' association that meets monthly, and a youth soccer league.",
          "A bus line that runs every thirty minutes and stops running at eight.",
          "Several small businesses, including a laundromat, a bakery, and a hardware store.",
          "Many residents work in the evening or night, and many speak languages other than English at home.",
        ] },
        { kind: 'list', title: 'Prompts for the asset map', items: [
          "Who already organizes something here?",
          "Where do people gather without anyone planning it?",
          "What skills do residents have that are not on any list?",
          "Who is trusted here that would not appear in a directory?",
          "What would make it easier for the people least likely to come to take part?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which asset did your group almost miss?",
          "How did it feel to hear a no? What did you do with it?",
        ] },
        { kind: 'takeaways', items: [
          "Start with the assets and the people already helping.",
          "Plan who to invite, how, and in what role. Write it down.",
          "Invite with the purpose, a real role, and room to say no.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite, chiefly the Community Tool Box sections on assets and participation. The neighborhood, people, and prompts were written for this course and describe no real place.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-cb-s2',
      title: 'Session 2, Working Together',
      summary: 'A live practice session. Plan a coalition, design a first meeting, and outline a short training for peers.',
      minutes: 50,
      blocks: [
        { kind: 'why', text: [
          "Working together is a set of design decisions. Who is at the table. How the first meeting runs. How people learn from each other. This session practices making those decisions on purpose.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements apply. Use invented issues and organizations. Disagree with ideas, not with people.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A brief check-in and one thing you tried since Session 1." },
          { label: 'Coalition map, 15 minutes', text: "Groups choose one invented issue from the list. They name a shared goal, the people and organizations who should be at the table (including those most affected), who might be hard to reach, and two barriers they expect from the source's list. They sketch who their core group would be and how they would address one barrier." },
          { label: 'Design the first meeting, 10 minutes', text: "Each group designs the first meeting so that the people most affected can take part fully. They decide on time and place, access and language needs, what supports to ask their program about, who facilitates, and what agreements they would propose." },
          { label: 'Teach it forward, 15 minutes', text: "Each person outlines a fifteen-minute training for peers on something they do well. They name the need, the learners, one objective, three key points, one practice activity, and how they will know people learned. They also name one existing resource they would check first." },
          { label: 'Close, 5 minutes', text: "One thing you will do this month to bring people together or pass on a skill." },
        ] },
        { kind: 'list', title: 'Invented issues', items: [
          "Residents cannot get to evening clinic hours because the last bus leaves too early.",
          "Several small organizations offer overlapping help with benefits applications, and people do not know which to call.",
          "Young people in the neighborhood have no place to gather after school.",
          "Older residents are isolated, and no one knows who lives alone.",
        ] },
        { kind: 'list', title: 'First meeting checklist', items: [
          "Is the time one that people most affected can attend?",
          "Is the place accessible, safe, and private enough?",
          "Is language help available, and are materials in the languages used?",
          "Are there ways to take part other than speaking up in a large group?",
          "Does the facilitator share airtime and make room for those with less formal power?",
          "Are the purpose, the roles, and who decides clear?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Who was missing from your coalition map, and why?",
          "What would you need from your program to take the next step?",
        ] },
        { kind: 'takeaways', items: [
          "Name a shared goal and include the people most affected.",
          "Design the first meeting so that everyone can take part.",
          "Outline what you know as a short training, and check what already exists first.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite. The issues and checklists were written for this course and describe no real place or organization.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-cb-practice',
    title: 'Your capacity building practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: an asset map, a participation plan, a partner map, and a training outline.',
    fields: [
      { id: 'assets', label: 'An asset map', help: 'Choose a community you serve. List assets under people, places, services, and businesses. Add one asset that is easy to overlook, and the person you would ask to learn more.', multiline: true },
      { id: 'participation', label: 'A participation plan', help: 'Choose a small project. Answer why, how many people, what skills and perspectives, who invites, where, when, how, what you will do with a yes, a maybe, and a no, and what barriers might arise.', multiline: true },
      { id: 'partners', label: 'A partner map', help: 'Name a shared goal. List who should be at the table, including those most affected. Name two barriers you expect, your core group, and one step to take this month. Note what you need to ask your program before you take it.', multiline: true },
      { id: 'training', label: 'A training outline', help: 'Choose something you do well. Write the need, the learners, one objective, three key points, one practice activity, how you will know people learned, and one existing resource you will check first.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'C3 Project: Understanding Scope and Competencies, a Contemporary Look at the U.S. CHW Field (2016)', use: 'The national list of roles and skills, including capacity building.', url: 'https://portal.ct.gov/-/media/ohs/sim/chw-advisory-committee/2016/2016-06-14/chw-c3-report.pdf' },
    { name: 'Community Tool Box: Identifying Community Assets and Resources', use: 'The definition of a community asset and how to identify assets.', url: 'https://ctb.ku.edu/en/table-of-contents/assessment/assessing-community-needs-and-resources/identify-community-assets/main' },
    { name: 'Community Tool Box: Developing a Plan for Increasing Participation in Community Action', use: 'The planning questions for inviting people in.', url: 'https://ctb.ku.edu/en/community-tool-box-toc/promoting-interest-and-participation-initiatives/chapter-7-encouraging-0' },
    { name: 'Community Tool Box: Promoting Participation Among Diverse Groups', use: 'Sectors of a community and respectful outreach.', url: 'https://ctb.ku.edu/en/community-tool-box-toc/promoting-interest-and-participation-initiatives/chapter-7-encouraging-5' },
    { name: 'Community Tool Box: Coalition Building I, Starting a Coalition', use: 'What a coalition is, who belongs, barriers, and how to start.', url: 'https://ctb.ku.edu/en/table-of-contents/assessment/promotion-strategies/start-a-coaltion/main' },
    { name: 'Community Tool Box: Coalition Building II, Maintaining a Coalition', use: 'What needs to be maintained and the alternatives to maintenance.', url: 'https://ctb.ku.edu/en/table-of-contents/assessment/promotion-strategies/maintain-a-coalition/main' },
    { name: 'Community Tool Box: Designing a Training Session', use: 'The steps for designing a training session.', url: 'https://ctb.ku.edu/en/community-tool-box-toc/developing-strategic-plan-and-organizational-structure/chapter-12-providing-0' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The category on leadership and advocacy.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
  ],
};
