// Community Mental Health Worker Pathway, Foundations course 11: Advocacy, Individual and Policy.
//
// This is the certificate's own course 11 (id chw_advocacy, 3 hours, live). The id matches the
// certificate on purpose: the Academy posts every completed course to the portal, and the portal
// credits a learner only for ids it recognizes.
//
// A live practice course. Two short lessons are read before the sessions. Two scheduled sessions are
// practiced with a facilitator and a group. The stated 180 minutes equal the lessons, the sessions,
// and the practice file.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources
// are the C3 Project's list of community health worker roles and skills, SAMHSA's core competencies
// for peer workers (the advocacy category), the Internal Revenue Service pages on lobbying and on
// political campaign activity by section 501(c)(3) organizations (both last reviewed June 28, 2026),
// the California Department of Social Services page on state hearing requests, a Disability Rights
// California training deck on Medi-Cal, the Health Consumer Alliance home page, and two sections of
// the Community Tool Box on planning advocacy and on research to influence policy. The agency pages
// and deadlines can change, so the course teaches people to read the notice they received and to check
// the current agency page. The course does not give legal advice and says so. The scenes and practice
// statements were written for this course and describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_ADVOCACY: Course = {
  id: 'chw_advocacy',
  num: 11,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Advocacy, Individual and Policy',
  promise:
    "Support people to speak up for themselves, help them use the appeal and complaint routes that exist, take part in efforts to change policies and services in ways your program supports, and know the rules that apply to a nonprofit.",
  about: [
    "Advocacy is one of the roles that sets community health work apart. At the level of one person, it can mean helping someone understand a letter, make a call, or appeal a decision. At the level of a community, it can mean bringing what you learn to the people who run services. At the level of policy, it can mean helping decision-makers understand what a rule does to real lives.",
    "It rests on the C3 Project's list of community health worker roles and skills, SAMHSA's competencies for peer workers, the Internal Revenue Service's rules for charities on lobbying and political campaign activity, the state's published steps for requesting a hearing, a Disability Rights California training deck on Medi-Cal, and two sections of the Community Tool Box.",
    "It is Foundations course 11 of HMC's community health worker certificate. It is a live practice course. You read two short lessons, then practice in two scheduled sessions, then complete a practice file. It is not a course in law, and nothing in it is legal advice.",
  ],
  objectives: [
    "Explain what advocacy means at the individual, community, and policy levels, and why speaking with a person is better than speaking for them.",
    "Help a person find the key facts on a notice about a benefit and name the routes for appeal and for getting expert help.",
    "Coach a person to make a call or write a request for themselves.",
    "Build a simple plan for advocating for a change, with goals, decision-makers, and tactics.",
    "Use stories and data responsibly, with consent.",
    "Describe the rules on lobbying and political campaign activity for a nonprofit and know when to ask your program first.",
  ],
  minutes: 180,
  prerequisites: "None. Public Health Systems and Social Programs, and Professional Conduct, are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management who help people with benefits, services, and rights, or who want to take part in changing how services work.",
  freshness:
    "Agency rules and deadlines change. The deadlines in this course were read on state and federal agency pages on November 10, 2026, and a notice a person receives states the deadline that applies to them. Check the current agency page. Nothing here is legal advice.",
  modality: 'virtual',
  requirements: [
    { id: 'av-lessons', label: 'Read the two lessons before the first session', kind: 'assignment' },
    { id: 'av-s1', label: 'Attend Session 1, Advocating Alongside a Person', kind: 'attend' },
    { id: 'av-s2', label: 'Attend Session 2, Advocating for Change', kind: 'attend' },
    { id: 'av-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-av-l1',
      title: 'Advocating alongside a person',
      summary: 'Speaking with and not for, reading a notice, the appeal routes, and when to bring in expert help.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "People are denied benefits, told a service does not exist, or handed a letter they cannot read, and many never push back. Some do not know they can. Some are afraid. Some have tried and were told no. You are often the first person who sits down with them and reads the letter.",
          "This lesson is about what you can do in that moment, and what you should not try to do on your own.",
        ] },
        { kind: 'concept', title: 'What the national lists say', text: [
          "The C3 Project's list of community health worker roles includes advocating for individuals and communities. Under it are advocating for the needs and perspectives of communities, connecting people to resources and advocating for basic needs such as food and housing, and conducting policy advocacy. Its list of skills includes advocacy skills, which are contributing to policy development, advocating for policy change, and speaking up for individuals and communities. It also lists, under another skill, the ability to teach self-advocacy skills.",
          "SAMHSA's core competencies for peer workers include a category on leadership and advocacy. It lists using knowledge of relevant rights and laws, naming the ADA, HIPAA, and Olmstead as examples, to make sure a person's rights are respected. It lists advocating for the needs and desires of the person in treatment team meetings, community services, living situations, and with family. And it lists using knowledge of legal resources and advocacy organizations to build an advocacy plan.",
        ] },
        { kind: 'concept', title: 'With, not for', text: [
          "The most important rule of individual advocacy is practice guidance written for this course, and it follows from the peer competencies and from the self-advocacy skill. Do it with the person, and let them lead. Ask what they want to happen. Ask whether they want you to speak for them, sit beside them while they speak, or coach them beforehand. Never contact an agency, a provider, or a family member on a person's behalf without their permission, and ask your program what form or consent it requires.",
          "Teaching self-advocacy is part of the job. Help them practice what to say. Help them write down the name of the person they spoke to, the date, and what was promised. Help them keep copies. The goal is that the next time, they can do it without you.",
        ] },
        { kind: 'concept', title: 'Read the notice first', text: [
          "When a person is told a benefit has been denied, reduced, or stopped, there is usually a written notice. Many appeal rights depend on dates and rules printed on that notice. Help the person find the following. Who sent it. What action was taken, such as denied, reduced, or ended. The reason given. The date. The deadline to ask for a review, and how to ask. And who to contact with questions.",
          "Keep a copy. Write down the date the notice arrived and the date on the notice, because they may be different.",
        ] },
        { kind: 'concept', title: 'What the state says about hearings', text: [
          "California's Department of Social Services publishes a page on state hearing requests. As read on November 10, 2026, it says that a person who disagrees with an action taken by the county or by the Department of Health Care Services, or who disagrees with an eligibility decision by Covered California, has 90 days to request a state hearing, and that after 90 days they must show a good reason for asking late.",
          "It says that for an action by a Medi-Cal managed care plan, a person generally must first file an appeal with the plan. The person has 60 calendar days from the date on the notice of action to file the appeal. If the appeal does not resolve the issue, the person has 120 calendar days from the date of the plan's Notice of Appeal Resolution to request a state hearing. A person may also request a hearing if they filed an appeal with the plan and have not received a resolution within 30 days.",
          "The page also describes a temporary extension to 120 days from the date the notice of action is mailed, for certain hearing requests related to redetermination of Medi-Cal eligibility, which it says remains in effect until further notice. It notes that the extension does not apply to new applications, medical exemption requests, or requests about a particular treatment or service.",
          "As the page shows, the rules differ by type of action, and they can change. Do not memorize deadlines and quote them. Read the notice, check the agency's current page, and tell the person to act promptly because a deadline may be short.",
        ] },
        { kind: 'concept', title: 'How a hearing is requested', text: [
          "The same page says a person can request a hearing online, by calling the State Hearings Division at 800-743-8525, or in writing by completing the request form on the back of the notice of action or on a separate piece of paper. It says to give the full name, address, telephone number, the county that took the action, the program involved, and the reason for the hearing. It says that people who have trouble understanding English should tell the Division their language so language assistance can be arranged, and that a person who has chosen an authorized representative should give that person's name and address. It advises keeping a copy of the request.",
          "A worker can help a person find the form and fill it in with them, and can sit with them while they call. Whether you may be named as someone's authorized representative is a question for your program.",
        ] },
        { kind: 'concept', title: 'Where expert help is', text: [
          "A Disability Rights California training deck on Medi-Cal lists grievances and appeals, aid paid pending, and expedited appeals and hearings among the things to consider when a person appeals. It states plainly that it is education only and not legal advice. It points to the Health Consumer Alliance, Medi-Cal Managed Care Health Care Options, and the Managed Care Office of the Ombudsman.",
          "The Health Consumer Alliance describes itself as a statewide partnership that helps California residents get and keep health coverage and resolve problems with their plans, and lists a consumer hotline at 888-804-3536 on its home page. Other legal aid and advocacy organizations can also help. Ask your program which ones it works with.",
          "The line between helping and giving legal advice is real. You can explain what the notice says, help find the deadline, help fill in a request, and connect the person to people who handle appeals. You should not tell a person that they will win, that they have a legal right you have not confirmed, or what a law means for their case.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Advocacy', plain: "Speaking up for a person, a group, or a cause, or helping them speak up for themselves." },
          { term: 'Self-advocacy', plain: "A person speaking up for their own needs and rights." },
          { term: 'Notice of action', plain: "A written notice that a benefit has been denied, reduced, or ended. It states how to ask for a review." },
          { term: 'Appeal', plain: "A request that a decision be reviewed." },
          { term: 'State hearing', plain: "A review of a decision by the state, which a person can request after certain actions." },
          { term: 'Authorized representative', plain: "A person someone chooses to act for them in a process." },
        ] },
        { kind: 'myths', items: [
          { myth: "Advocacy means speaking for people who cannot speak for themselves.", reality: "The national competencies and the self-advocacy skill point the other way. Advocate with people, coach them, and speak for them only if they ask." },
          { myth: "If a benefit is denied, it is final.", reality: "Most denials come with a way to request a review, and the deadline is on the notice. Help the person find it." },
          { myth: "I should tell people what their legal rights are.", reality: "You can explain what a notice says and connect people to people who handle appeals. Legal advice belongs to lawyers and advocacy organizations." },
          { myth: "I can memorize the appeal deadlines.", reality: "They differ by type of action and can change. Read the notice and check the agency page." },
        ] },
        { kind: 'case', title: 'A letter on the kitchen table', scenario: true, text: [
          "A man shows a worker a letter that says his coverage will end. He says he has been meaning to call, but the phone line was always busy. The worker asks what he would like to happen. He says he wants to keep his coverage, and he is afraid to call.",
          "The worker does not take the letter and make the call. She asks if he would like her to sit with him while he calls. They find the date on the letter and the line that tells how to ask for a review, and she notes the deadline in the margin. He writes down three things he wants to say. He makes the call. The person on the line gives a name and a reference number, and he writes them down. At the end, the worker asks what he will do if he does not hear back by the date he was given, and he writes that down too. She then asks the program how to connect him to a legal aid organization if the review does not go his way.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-av-q1',
          q: "A person shows you a notice that their benefit will be reduced. What is the best first step?",
          options: [
            "Call the agency right away on their behalf",
            "Ask what they want to happen, and help them find the action, the date, the reason, and the deadline and way to ask for a review",
            "Tell them the decision is probably final",
            "Tell them they have a legal right to keep the benefit",
          ],
          answer: 1,
          rationale: "Ask what the person wants, then read the notice with them. The deadline and the method to ask for a review are on the notice. Speak for them only if they ask, and do not give legal advice.",
          distractors: "Calling for them without being asked takes the lead from them, and the other two assume an outcome or give legal advice.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-av-q2',
          q: "According to the California Department of Social Services page read for this course, what should a person generally do first if they disagree with an action taken by their Medi-Cal managed care plan?",
          options: [
            "Request a state hearing right away",
            "File an appeal with the managed care plan",
            "Call their county welfare office",
            "Wait for another notice",
          ],
          answer: 1,
          rationale: "The page says a person generally must first file an appeal with the plan, within 60 calendar days of the date on the notice of action, and may request a state hearing after the plan's appeal resolution or if it takes longer than 30 days.",
          distractors: "The page describes the plan appeal as the first step for plan actions. Check the notice and the current page, because rules differ by type of action and can change.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-av-q3',
          q: "Which statement is the best example of staying out of legal advice?",
          options: [
            "You will definitely win your appeal",
            "Under the law you are entitled to keep this benefit",
            "This notice says the deadline to ask for a review is on this date. Let's find the form and who can help with appeals",
            "Just ignore the letter",
          ],
          answer: 2,
          rationale: "You can read what a notice says, point to the deadline and the form, and connect the person to people who handle appeals. You should not predict outcomes or interpret the law for their case.",
          distractors: "The first two predict outcomes or interpret a legal right, and the last one is harmful.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Think of a time you were handed a letter you did not understand. What would have helped?",
          "Where are you most tempted to take over for someone instead of working with them?",
        ] },
        { kind: 'takeaways', items: [
          "Advocate with a person, and ask what they want. Teach and coach so they can do it themselves.",
          "Read the notice together. The deadline and the way to ask for a review are on it.",
          "Do not give legal advice or predict outcomes. Connect people to the organizations that handle appeals.",
        ] },
        ev([
          "C3 Project. Understanding Scope and Competencies, a Contemporary Look at the U.S. Community Health Worker Field (2016). The role of advocating for individuals and communities, the advocacy skills, and the ability to teach self-advocacy skills.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category XI, promotes leadership and advocacy.",
          "California Department of Social Services. State Hearing Requests (page read November 10, 2026). The timeframes, the managed care appeal steps, the temporary extension, and how to request a hearing. Deadlines can change, so check the page and the notice.",
          "Disability Rights California. Medi-Cal Basics and 2026 and Upcoming Changes (training slides). The list of appeal considerations and the resources, and the statement that the deck is education only.",
          "Health Consumer Alliance home page. The description of the partnership and the hotline number listed.",
          "The guidance on working with the person and on limits of advice is practice guidance written for this course. It is not legal advice.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-av-l2',
      title: 'Advocating for change, and the rules for a nonprofit',
      summary: 'Planning an advocacy effort, using stories and data responsibly, and what a charity may and may not do.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "After a while you notice that the same problem keeps showing up. The same form that confuses everyone. The same clinic that is too far from the bus. The same rule that catches people who did nothing wrong. You are a witness to patterns that decision-makers may not see.",
          "You are also working inside a nonprofit, which has legal limits on some kinds of advocacy. This lesson covers both the craft and the limits.",
        ] },
        { kind: 'concept', title: 'Three levels', text: [
          "Individual advocacy helps one person. Community advocacy brings the needs and perspectives of a community to the services and systems that affect it. The C3 Project lists this as advocating for the needs and perspectives of communities. Policy advocacy aims to change rules, funding, or practices. The C3 Project lists contributing to policy development and advocating for policy change.",
          "Many people begin with a person, then notice the pattern, then decide that fixing it for one person at a time is not enough. That is how advocacy often starts.",
        ] },
        { kind: 'concept', title: 'Plan before you act', text: [
          "The Community Tool Box says advocacy planning is the process of identifying the change you want, understanding the conditions around the issue, working out who has authority or influence, choosing strategies, and organizing the actions and resources needed. It notes that advocacy often seeks changes in policies, practices, funding, or institutions, involves people with different interests and authority, takes place partly in public, needs careful communication and evidence, and can carry risks.",
          "It suggests planning with people who have different kinds of knowledge, including those directly affected. Begin with a broad goal and break it into long-term goals, intermediate goals that mark progress, and short-term objectives. It recommends SMART goals, which are specific, measurable, achievable, relevant, and time-bound. Its example contrasts we will hold a meeting with a plan to hold an accessible community meeting for families and young people by a stated month.",
          "It adds that the purpose of planning is not simply to make the original idea more persuasive. It is also to test whether the original goal is right.",
        ] },
        { kind: 'concept', title: 'Decision-makers, influence, and support', text: [
          "Advocacy usually seeks a change that someone has the authority to make. Find out who that is. Then find out who influences them. The Community Tool Box lists possible decision-makers such as elected officials, agency leaders, school boards, employers, and funders, and possible sources of influence such as residents, community organizations, researchers, and faith or cultural organizations.",
          "It warns against assuming that groups will support or oppose a proposal because of their identity, profession, or previous positions. It suggests mapping strong supporters, potential supporters, undecided people, people with specific concerns, and organized opposition, and including people directly affected even if they are not formally organized. And it suggests focusing on the authority or behavior that needs to change rather than labeling anyone a target.",
        ] },
        { kind: 'concept', title: 'Strategies and tactics', text: [
          "The Community Tool Box lists strategies such as public education, community organizing, coalition-building, administrative advocacy, legislative advocacy, negotiation, regulatory complaints, litigation, and media advocacy. For tactics it lists letters and emails, meetings, public testimony, surveys, public forums, media outreach, and others.",
          "It suggests testing each tactic by asking whether it advances the strategy, fits the group's values, is lawful or appropriately risk-assessed, is realistic, is accessible to participants, includes safeguards, and uses people's time responsibly. It also says to verify a rumor before making a public claim or changing strategy.",
          "For most community health workers, the most natural tactics are the quiet ones. Bring what you have learned to your supervisor. Join a coalition or advisory group that your program supports. Offer information to a decision-maker who asks. Give public comment when your program has agreed.",
        ] },
        { kind: 'concept', title: 'Using evidence and stories responsibly', text: [
          "The Community Tool Box says research is most useful when it anticipates the questions decision-makers and communities need answered, without sacrificing accuracy, privacy, or the people whose experiences are being represented. Good policy research can support an approach, change it, or show that the first assumption was wrong, and advocacy credibility depends on being willing to change course when the evidence changes. It advises presenting evidence accurately and with enough context to show what it does and does not establish, and avoiding moving from one study directly to a policy conclusion unless the evidence supports it.",
          "On personal stories, it says that they can help policymakers understand an issue, that people should decide voluntarily whether and how their experiences are shared, and that their identities should not be disclosed privately or publicly without meaningful consent.",
          "Apply this strictly in your work. Do not use a person's story, even without their name, unless they have agreed to it for this purpose and you understand what details might identify them. Do not use health information from your records for advocacy unless your program's rules allow it.",
        ] },
        { kind: 'concept', title: 'The rules for a charity: lobbying', text: [
          "HMC is a 501(c)(3) nonprofit. The Internal Revenue Service page on lobbying, last reviewed June 28, 2026, says that no organization may qualify for 501(c)(3) status if a substantial part of its activities is attempting to influence legislation. A 501(c)(3) may engage in some lobbying, but too much risks loss of tax-exempt status.",
          "The page defines legislation to include action by Congress, any state legislature, any local council or similar governing body, with respect to acts, bills, resolutions, or similar items, and action by the public in a referendum, ballot initiative, or constitutional amendment. It says legislation does not include actions by executive, judicial, or administrative bodies. An organization is regarded as attempting to influence legislation if it contacts, or urges the public to contact, members or employees of a legislative body to propose, support, or oppose legislation, or if it advocates the adoption or rejection of legislation.",
          "The page also says that organizations may involve themselves in issues of public policy without it counting as lobbying, for example by conducting educational meetings and preparing and distributing educational materials, or by considering public policy issues in an educational manner.",
        ] },
        { kind: 'concept', title: 'The rules for a charity: elections', text: [
          "The Internal Revenue Service page on political campaign activity, last reviewed June 28, 2026, says that all 501(c)(3) organizations are absolutely prohibited from directly or indirectly participating or intervening in any political campaign on behalf of or in opposition to any candidate for elective public office. It names contributions to political campaign funds and public statements of position, verbal or written, made on behalf of the organization in favor of or in opposition to any candidate as clear violations. It says violating the prohibition may result in denial or revocation of tax-exempt status and certain excise taxes.",
          "It also says that voter education, such as public forums and voter education guides, and voter registration and get-out-the-vote drives, are not prohibited if conducted in a nonpartisan manner, and that activities showing bias that favor or oppose a candidate will constitute prohibited intervention.",
        ] },
        { kind: 'concept', title: 'What this means for you', text: [
          "These pages describe rules for the organization. They do not tell you everything about what you can do as a private person on your own time. Your program decides how its rules apply to you. The practical guidance in this course is as follows. Speak for HMC on policy or legislation only if your program has asked or approved it. Never say or post anything that supports or opposes a candidate in a way that could be taken as HMC's position. Keep your personal political activity clearly separate from your work. If you are not sure, ask first.",
          "These rules are a reason to care, not a reason to stay silent. Educating, sharing information, hearing from the community, and working with your program to bring concerns to decision-makers are all part of the work.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Policy advocacy', plain: "Efforts to change rules, funding, or practices that affect people." },
          { term: 'Decision-maker', plain: "The person or body with the authority to make the change." },
          { term: 'Source of influence', plain: "A person or group who can affect what a decision-maker does." },
          { term: 'SMART goal', plain: "A goal that is specific, measurable, achievable, relevant, and time-bound." },
          { term: 'Lobbying', plain: "For a charity, attempting to influence legislation, including contacting or urging the public to contact a legislative body about a bill or ballot measure." },
          { term: 'Nonpartisan', plain: "Not favoring or opposing any candidate or party." },
        ] },
        { kind: 'check', check: {
          id: 'hrtp-av-q4',
          q: "According to the IRS page on political campaign activity, which is prohibited for a 501(c)(3)?",
          options: [
            "A nonpartisan voter registration drive",
            "A public statement made on behalf of the organization in favor of a candidate",
            "A nonpartisan public forum with candidates",
            "A voter education guide that treats candidates evenly",
          ],
          answer: 1,
          rationale: "The page says 501(c)(3) organizations are absolutely prohibited from intervening in a political campaign, and it names public statements on behalf of the organization in favor of or in opposition to any candidate as clear violations. Nonpartisan voter education and registration are not prohibited.",
          distractors: "The other options are nonpartisan voter education or registration, which the page says are not prohibited when conducted in a nonpartisan manner.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-av-q5',
          q: "Which of these is described by the IRS lobbying page as an activity that is not lobbying?",
          options: [
            "Urging the public to contact a city council member to oppose a proposed ordinance",
            "Conducting an educational meeting about a public policy issue in an educational manner",
            "Advocating the adoption of a bill",
            "Urging the public to vote for a ballot initiative",
          ],
          answer: 1,
          rationale: "The page says organizations may conduct educational meetings, distribute educational materials, and consider public policy issues in an educational manner without it counting as lobbying.",
          distractors: "The other three involve contacting or urging the public to contact a legislative body, or advocating for or against legislation or a ballot measure, which the page describes as attempting to influence legislation.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-av-q6',
          q: "You want to use a person's story in a presentation to a county committee. What should you do?",
          options: [
            "Use it without a name and assume that is enough",
            "Get the person's voluntary, informed agreement for this use, check with your program, and avoid details that could identify them",
            "Use it only if the person is not likely to find out",
            "Use it if it makes the point well",
          ],
          answer: 1,
          rationale: "The Community Tool Box says people should decide voluntarily whether and how their experiences are shared, and that their identities should not be disclosed without meaningful consent. Your program's rules on records also apply.",
          distractors: "Removing a name does not remove details that identify someone, and the other options skip consent.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What pattern have you seen more than once in your work? Who decides whether it changes?",
          "Who in your program can you ask about what is yours to do and what is not?",
        ] },
        { kind: 'takeaways', items: [
          "Advocacy works at three levels. Many people begin with one person and notice a pattern.",
          "Plan with a clear goal, decision-makers, sources of influence, and tactics. Use evidence accurately and stories only with consent.",
          "A charity may not intervene in elections and may do only limited lobbying. Educate freely, and ask your program before speaking for HMC.",
        ] },
        ev([
          "C3 Project (2016). The role of advocating for individuals and communities, and the advocacy skills.",
          "Community Tool Box, University of Kansas. Chapter 30, Section 7, Developing a Plan for Advocacy, and Chapter 31, Section 10, Conducting Research to Influence Policy. The planning elements, the strategies and tactics, and the guidance on evidence and personal stories. Both sections were read in full.",
          "Internal Revenue Service. Lobbying, and The Restriction of Political Campaign Intervention by Section 501(c)(3) Tax-Exempt Organizations (both pages last reviewed June 28, 2026). The definitions, the permitted educational activities, and the prohibition. These describe rules for organizations, and your program decides how they apply to you.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category XI.",
          "The guidance about quiet tactics and about keeping personal activity separate is practice guidance written for this course. It is not legal advice.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-av-s1',
      title: 'Session 1, Advocating Alongside a Person',
      summary: 'A live practice session. Read a notice, ask permission, and coach a person to make a call.',
      minutes: 50,
      blocks: [
        { kind: 'why', text: [
          "Advocacy with a person is a small set of actions repeated many times. Read, ask, coach, write it down, follow up. This session practices them.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All notices and cases in this session are invented. Do not use a real person's information. You can pass at any time. What is said in the room stays in the room. You can call or text 988 at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Read the notice, 10 minutes', text: "The facilitator hands out an invented notice. In pairs, participants find who sent it, what action was taken, the reason, the date, the deadline, how to ask for a review, and who to contact. They list what they would check on the agency's current page." },
          { label: 'Ask permission, 10 minutes', text: "In pairs, practice asking what the person wants, whether they want you to speak for them, sit beside them, or coach them, and what you need their permission for." },
          { label: 'Coach a call, 15 minutes', text: "In triads, one person plays someone nervous about calling an agency. The coach helps them decide what to say, what to ask, and how to write down a name, date, reference number, and next step. The observer notes where the coach spoke for the person." },
          { label: 'Where to send them, 5 minutes', text: "Each person writes who in their program they would ask about connecting a person to legal aid or a consumer help line." },
          { label: 'Close, 5 minutes', text: "One thing you will change about how you help someone with a letter." },
        ] },
        { kind: 'list', title: 'What to find on a notice', items: [
          "Who sent it and how to reach them.",
          "What action was taken.",
          "The reason given.",
          "The date on the notice and the date it arrived.",
          "The deadline to ask for a review and how to ask.",
          "Whether there is a reference number.",
        ] },
        { kind: 'list', title: 'Words to practice', items: [
          "What would you like to happen?",
          "Would you like me to sit with you while you call, or help you plan what to say first?",
          "I need your permission before I contact anyone for you. Is that okay?",
          "Let's write down who you spoke to, the date, and what they said.",
          "I am not able to tell you what the law says about your case. Let's find someone who can.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "At what point did you want to take over? What happened when you waited?",
          "What would make it easier to say I am not able to give legal advice?",
        ] },
        { kind: 'takeaways', items: [
          "Ask what they want, then read the notice together.",
          "Coach so the person can speak for themselves, and write down names, dates, and numbers.",
          "Know who to ask for expert help, and say what you cannot do.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite. The notice and scenes were written for this course and describe no real person or agency decision.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-av-s2',
      title: 'Session 2, Advocating for Change',
      summary: 'A live practice session. Sketch an advocacy plan and sort real-world situations by what a charity may do.',
      minutes: 50,
      blocks: [
        { kind: 'why', text: [
          "Advocating for change feels big until you break it into questions. Who decides. Who do they listen to. What do we want. What can we actually do this month. This session practices asking those questions.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All issues, cases, and situations in this session are invented. Do not name a real official, candidate, or party. You can pass at any time. Disagree with ideas, not with people.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Choose an issue, 5 minutes', text: "Small groups choose one invented issue from the list below." },
          { label: 'Advocacy map, 20 minutes', text: "Each group fills in a map. A long-term goal, an intermediate goal, and one short-term SMART objective. The decision-maker and two sources of influence. Likely supporters, possible concerns, and who is affected. Two strategies and the first tactic for each, tested with the questions in Lesson 2. How a person's story or data would be used responsibly." },
          { label: 'What may a charity do, 10 minutes', text: "The facilitator reads situations from the list. The group sorts each into educational and generally fine, ask your program first, or not allowed, and explains why using the IRS pages." },
          { label: 'Debrief, 5 minutes', text: "What did you learn about the difference between advocating and lobbying?" },
          { label: 'Close, 5 minutes', text: "One thing you will do this month to bring a pattern you have noticed to someone who can act on it." },
        ] },
        { kind: 'list', title: 'Invented issues', items: [
          "A bus line to a clinic has been cut back and the last bus leaves before evening hours end.",
          "A benefits office is open only during weekday work hours and has long lines.",
          "A form for a service is available only in English, and many people in the neighborhood read another language.",
          "A park where a weekly health event is held has no shade or seating.",
        ] },
        { kind: 'list', title: 'Situations to sort', items: [
          "Giving an educational talk about how a proposed county rule works, without urging anyone to take a position.",
          "Posting, on the organization's account, a message supporting a named candidate.",
          "Hosting a nonpartisan voter registration table.",
          "Emailing a call to the public to contact the city council to vote yes on an ordinance.",
          "Testifying at a county health department hearing on a rule, on behalf of the organization.",
          "Sharing a client's story with a newspaper, with the client's consent but without asking your program.",
          "Wearing an organization shirt to a rally for a candidate.",
        ] },
        { kind: 'concept', title: 'How the sorting works', text: [
          "Use the IRS pages from Lesson 2. Activity that supports or opposes a candidate on behalf of the organization is prohibited. Contacting or urging the public to contact a legislative body about legislation is lobbying, which a charity may do only in limited amounts and which your program must approve. Educational activity and nonpartisan voter education are generally acceptable. Actions by executive or administrative bodies are not treated as legislation on the IRS page, and your program should still be asked. Sharing a person's story is a records and consent question as well as an advocacy one, so ask first. If you are not sure, the answer is ask.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which part of the advocacy map was hardest to fill in?",
          "Which situation did your group disagree about? What did you need to know to decide?",
        ] },
        { kind: 'takeaways', items: [
          "Name the goal, the decision-maker, the sources of influence, and the first small action.",
          "Test each tactic. Use stories only with consent, and data with context.",
          "When you cannot tell if something is allowed, ask your program before you act.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite. The issues and situations were written for this course and describe no real person, candidate, or agency. The sorting is a teaching exercise based on the two IRS pages and is not legal advice.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-av-practice',
    title: 'Your advocacy practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: your steps for helping with a notice, your words for asking permission, a one-page advocacy plan, and what you will ask your program.',
    fields: [
      { id: 'notice', label: 'Your steps for a notice', help: 'Write the steps you will take when someone brings you a notice that a benefit was denied, reduced, or ended. Include what you will find on the notice, what you will check on the agency page, who you will connect them to, and what you will not do.', multiline: true },
      { id: 'permission', label: 'Your words for permission and coaching', help: 'Write what you will say to ask what the person wants and to ask permission. Write three sentences you will use to coach someone before they call, and how you will keep notes of names, dates, and numbers.', multiline: true },
      { id: 'plan', label: 'A one-page advocacy plan', help: 'Pick a pattern you have noticed in your work. Write a long-term goal, an intermediate goal, and one SMART short-term objective. Name the decision-maker, two sources of influence, who is affected, one possible concern, and your first tactic.', multiline: true },
      { id: 'limits', label: 'What you will ask your program', help: 'List the questions you will ask your program about advocacy. Which activities are part of your role, who approves speaking for HMC on policy, what to do about stories and records, and how its rules apply to you as a private person.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'C3 Project: Understanding Scope and Competencies, a Contemporary Look at the U.S. CHW Field (2016)', use: 'The national list of roles and skills, including advocacy.', url: 'https://portal.ct.gov/-/media/ohs/sim/chw-advisory-committee/2016/2016-06-14/chw-c3-report.pdf' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The category on leadership and advocacy.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
    { name: 'California Department of Social Services: State Hearing Requests', use: 'The current steps and timeframes for requesting a state hearing.', url: 'https://www.cdss.ca.gov/hearing-requests' },
    { name: 'Health Consumer Alliance', use: 'A statewide partnership that helps Californians with health coverage problems.', url: 'https://www.healthconsumer.org/' },
    { name: 'Community Tool Box: Developing a Plan for Advocacy', use: 'Goals, decision-makers, strategies, and tactics.', url: 'https://ctb.ku.edu/en/table-of-contents/advocacy/advocacy-principles/advocacy-plan/main' },
    { name: 'Community Tool Box: Conducting Research to Influence Policy', use: 'Using evidence and personal stories responsibly.', url: 'https://ctb.ku.edu/en/table-of-contents/advocacy/advocacy-research/influence-policy/main' },
    { name: 'Internal Revenue Service: Lobbying', use: 'What counts as lobbying by a charity.', url: 'https://www.irs.gov/charities-non-profits/lobbying' },
    { name: 'Internal Revenue Service: The Restriction of Political Campaign Intervention by Section 501(c)(3) Tax-Exempt Organizations', use: 'The prohibition on political campaign activity, and what voter education is permitted.', url: 'https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations' },
  ],
};
