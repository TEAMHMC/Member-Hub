// Community Mental Health Worker Pathway, Mental Health Core M5: Psychiatric Rehabilitation and Peer
// Support Practice.
//
// A live practice course (id chw_mh_peer_practice, 5 hours). Three lessons are read before the
// sessions. Three scheduled sessions are practiced with a facilitator and a group. The stated 300
// minutes equal the lessons, the sessions, and the practice file.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources
// are SAMHSA's core competencies for peer workers in behavioral health services (last updated February
// 2026, all twelve categories read), the National Association of Peer Supporters' National Practice
// Guidelines for Peer Specialists and Supervisors (2019, the first part and the first three of the
// twelve core values read in detail; the remaining values are described by their titles only), the
// Psychiatric Rehabilitation Association's twelve core principles and values, the IPS Employment
// Center's January 28, 2026 presentation on the eight practice principles of Individual Placement and
// Support, the open-access 2012 review of peer support by Davidson and colleagues, the National
// Institute of Mental Health's schizophrenia fact sheet, SAMHSA's protocol on co-occurring disorders,
// and the Los Angeles County Department of Mental Health's page on its Individual Placement and Support
// program. The IPS research figures come from slides prepared by the practice's own developers and
// researchers, and the course says so. The scenes were written for this course and describe no real
// person.
//
// The course does not teach clinical treatment and does not teach a worker to assess anyone. The
// copyrighted guidelines are described in the course's own words and are not copied.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_PEER_PRACTICE: Course = {
  id: 'chw_mh_peer_practice',
  num: 26,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Psychiatric Rehabilitation and Peer Support Practice',
  promise:
    "Understand the principles of psychiatric rehabilitation and supported employment, practice the values and boundaries of peer support, help a person make a recovery plan in their own words, and use supervision and self-care to stay well in the work.",
  about: [
    "This course covers the practice side of recovery work. Psychiatric rehabilitation is the field that helps people with serious mental health conditions build the skills and supports they need to live, learn, work, and take part in their communities. Peer support is the practice of people who have their own experience of recovery supporting others. Both rest on the belief that recovery is possible and that the person leads.",
    "It rests on SAMHSA's core competencies for peer workers, the National Association of Peer Supporters' practice guidelines, the Psychiatric Rehabilitation Association's core principles, the practice principles of Individual Placement and Support, an open-access review of peer support, and SAMHSA's and NIMH's descriptions of treatment for serious mental illness.",
    "It is Mental Health Core course 5 of HMC's community health worker pathway. It is a live practice course. You read three lessons, then practice in three scheduled sessions, then complete a practice file. Whether or not you have lived experience of your own, the values here apply to your work.",
  ],
  objectives: [
    "Describe the principles of psychiatric rehabilitation and what supported employment is.",
    "Name the twelve categories of peer worker competencies and the core values of peer support.",
    "Apply the values to dilemmas about boundaries, disclosure, and dual relationships, and know when to ask your supervisor.",
    "Help a person describe their goals and strengths and make a plan with small steps, in their words.",
    "Use supervision well, prepare a case for discussion, and ask for what you need.",
    "Build a plan for staying well in the work.",
  ],
  minutes: 300,
  prerequisites: "Hope, Recovery, and Wellness, and Motivational Interviewing. Understanding Mental Health Conditions and Professional Conduct, Ethics, and Safety are helpful.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, with or without lived experience of mental health or substance use conditions. Some of the practice involves reflecting on your own experiences. You choose what to share.",
  freshness:
    "The competencies were read as updated in February 2026, and other pages were read on November 10, 2026. Peer support roles, certification, and billing rules differ by program and by state and change often. Your program tells you what applies to your role.",
  modality: 'virtual',
  requirements: [
    { id: 'pp-lessons', label: 'Read the three lessons before the first session', kind: 'assignment' },
    { id: 'pp-s1', label: 'Attend Session 1, Values in Action', kind: 'attend' },
    { id: 'pp-s2', label: 'Attend Session 2, Recovery Planning Conversations', kind: 'attend' },
    { id: 'pp-s3', label: 'Attend Session 3, Supervision and Staying Well', kind: 'attend' },
    { id: 'pp-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-pp-l1',
      title: 'Psychiatric rehabilitation and supported employment',
      summary: 'The principles of psychiatric rehabilitation, what supported employment is and what the evidence shows, and what treatment for serious mental illness includes.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "A diagnosis tells you little about what a person can do or wants to do. Psychiatric rehabilitation starts from the other end. What does the person want their life to look like, and what skills and supports would help them get there. It treats the person as someone who can learn and grow, and it measures success by how well they are living, learning, working, and connecting with others.",
        ] },
        { kind: 'concept', title: 'The principles', text: [
          "The Psychiatric Rehabilitation Association, the professional association for the field, lists twelve core principles and values. In summary, the practitioner conveys hope and respect and believes all people have the capacity for learning and growth. Culture is central to recovery, and services should be culturally relevant. Practitioners use informed and shared decision-making and build partnerships with the people the individual chooses. Practice builds on strengths and capabilities. It is person-centered and consistent with the person's values, hopes, and aspirations. It supports full integration into the community, including the rights and responsibilities of citizenship. It promotes self-determination and empowerment, including the right to make decisions about the services and supports received. It helps develop personal support networks using natural supports, peer support, and self-help and mutual-help groups. It helps people improve the quality of all aspects of life: social, occupational, educational, residential, intellectual, spiritual, and financial. It promotes health and wellness through individualized wellness plans. It emphasizes evidence-based, promising, and emerging practices, with program evaluation that involves the people receiving services. And services must be readily accessible whenever people need them and coordinated with other psychiatric, medical, and holistic care.",
          "The association also says that people receiving services should ask that their services reflect these principles. That is a point worth remembering. The principles are meant to be something a person can hold a program to.",
          "Compare this to the SAMHSA recovery principles in the first course of the core. They are very close. Hope, person-driven, many pathways, whole life, peers, culture, strengths, respect. The two lists come from different parts of the field, and they say much the same thing.",
        ] },
        { kind: 'concept', title: 'What treatment for serious mental illness includes', text: [
          "NIMH's schizophrenia fact sheet gives examples of the range of supports. Antipsychotic medication, for those who choose it, can make psychotic symptoms less intense and less frequent. Psychosocial treatments help people find solutions to everyday challenges while attending school, working, and forming relationships, and are often used together with medication. Examples include cognitive behavioral therapy, behavioral skills training, supported employment, and cognitive remediation. NIMH says people who participate in regular psychosocial treatment are less likely to have symptoms recur or to be hospitalized. Family education and support help families cope. Coordinated specialty care, for people with a first episode of psychosis, is a recovery-focused, team-based program that includes psychotherapy, medication, case management, employment and education services, and family education, and is described as more effective than typical care in reducing symptoms, improving quality of life, and increasing involvement in work or school. Assertive community treatment is designed for people likely to experience multiple hospitalizations or homelessness.",
          "SAMHSA's protocol on co-occurring disorders adds that vocational services help clients with co-occurring disorders make concrete improvements in career goal setting, job seeking, work attainment, and earned wages, and that housing-related support services can help. It says that for people in recovery, work is valuable not only for economic reasons but because it can enhance self-efficacy, improve self-identity, offer a sense of belonging, build relationships, and improve quality of life. It cites a review finding that employment was associated with reduced substance use and more stable housing.",
          "Notice that employment and education appear in every list. This is rehabilitation in action.",
        ] },
        { kind: 'concept', title: 'Individual Placement and Support', text: [
          "Individual Placement and Support, or IPS, is a model of supported employment for people with serious mental illness. The IPS Employment Center, in a presentation dated January 28, 2026, describes it as an evidence-based practice originally developed to help people with serious mental illnesses find employment, now widely adopted across North America, Europe, and Australasia, and extended to young adults, disabilities beyond mental illness, and supported education. It was developed by Deborah Becker and Robert Drake and described in their 1993 book, A Working Life.",
          "The presentation describes eight practice principles under three pillars: individualized services, a team-based approach, and community-based services. In its words, the principles are zero exclusion criteria, so that people are not denied services because of mental health symptoms, choices about medication, active substance use, lack of housing, missed appointments, personal presentation, or legal system involvement. Job seeker preferences are important, and the presentation says people keep their jobs twice as long if at least three of their preferences are met. Benefits planning is offered by someone trained, so that people understand how work affects their benefits. The job search begins soon after a person joins the program, with in-person contact with a hiring manager within about 30 days. Competitive, integrated employment is the goal, meaning regular jobs that anyone can apply for, paying at least minimum wage, and the presentation says work as a peer specialist is acceptable. IPS specialists build relationships with employers. Mental health treatment and employment services are integrated, with weekly meetings, shared documentation, and collaboration with state vocational rehabilitation and with families as the person identifies. And job supports are individualized and time-unlimited, such as wake-up calls, regular meetings about the job, travel training, and help obtaining tools or clothing.",
          "The presentation says IPS specialists spend at least 65 percent of their time away from their offices, meeting people in homes, libraries, workplaces, parks, and coffee shops, because life is out there and not in a community mental health organization.",
        ] },
        { kind: 'concept', title: 'What the evidence shows, and its source', text: [
          "The presentation includes research slides prepared by Gary Bond, a researcher of the practice. It reports a review of 28 randomized controlled trials of IPS for people with serious mental illness in which IPS had significantly higher employment rates in all but one study. It reports that, compared with control participants, IPS participants were three times more likely to work, gained employment faster, maintained employment four times longer during follow-up, and were three times more likely to work 20 hours or more per week. It also describes studies of day treatment programs converted to IPS, which found large increases in employment, no negative outcomes such as relapses, and that clients, families, and staff liked the change.",
          "Be clear about where this comes from. The numbers are from slides produced by the practice's own developers and researchers. They summarize published trials, and they should be read in that light. A 2024 review of IPS by Drake and Bond is available through the National Library of Medicine, and is a good place to check the findings. The broader point is that supported employment is among the most studied practices in the field.",
        ] },
        { kind: 'concept', title: 'Local context', text: [
          "The Los Angeles County Department of Mental Health lists Individual Placement and Support as a supported employment program within its collaboration with the Department of Public Social Services on CalWORKs. Its website also lists a 24-hour help line, (800) 854-7771, and 988. Programs, eligibility, and referral routes change, so ask your supervisor which services are available and how to refer.",
        ] },
        { kind: 'concept', title: 'Your part', text: [
          "You do not run an IPS program. You can do what the principles say. Ask about work and school goals, early and without assuming a person cannot. Do not screen anyone out because of symptoms, substance use, housing, or missed appointments. Ask what kind of work they want and what they have liked. Connect them to programs that offer supported employment, and to benefits planning so they can understand how work affects benefits before they make decisions. Follow up. And take seriously that a job, a class, or a volunteer role is recovery work.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Psychiatric rehabilitation', plain: "A field that helps people with serious mental health conditions build the skills and supports to live, learn, work, and take part in the community." },
          { term: 'Supported employment', plain: "Help finding and keeping regular jobs, delivered along with mental health care." },
          { term: 'Zero exclusion', plain: "The IPS principle that people are not turned away for symptoms, substance use, housing status, or similar reasons." },
          { term: 'Competitive integrated employment', plain: "A regular job that anyone can apply for, in the community, paying at least minimum wage." },
          { term: 'Natural supports', plain: "Family, friends, neighbors, and community groups, as opposed to paid services." },
        ] },
        { kind: 'myths', items: [
          { myth: "People with serious mental illness should get stable before they work.", reality: "The IPS principle of zero exclusion and early job search says the opposite, and its trials report higher employment with early, integrated support." },
          { myth: "Work is a risk to recovery.", reality: "The IPS slides report no negative outcomes in the day treatment conversions, and SAMHSA's protocol describes work as improving self-efficacy, identity, and belonging." },
          { myth: "Rehabilitation is the same as treatment.", reality: "Treatment addresses symptoms, and rehabilitation addresses skills, supports, and roles. They work together." },
          { myth: "The evidence for supported employment is untested.", reality: "It is among the most studied practices, although the figures in this lesson come from the developers' slides, and a worker should be careful about how they are quoted." },
        ] },
        { kind: 'case', title: 'A question about work', scenario: true, text: [
          "A man says he used to be a good cook, and that he would like to work again, but he has been hearing voices and he missed his last two appointments. A worker could tell him to get stable first. Instead she says, you would like to work in a kitchen again. What did you like about it? He says he liked the pace and being part of a team. She asks whether he would like her to help him find a program that helps people get jobs, and tells him that people are not turned away for hearing voices or missed appointments in programs that follow this approach. She also asks whether he would like to talk to someone about benefits before he decides, so that he understands how work would affect them. He says yes. She writes down his preferences in his words and brings them to the program with his permission.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-pp-q1',
          q: "According to the IPS Employment Center's presentation, which is one of the eight IPS practice principles?",
          options: [
            "Only people who are symptom-free can enroll",
            "Zero exclusion: people are not denied services because of symptoms, medication choices, active substance use, lack of housing, or missed appointments",
            "Job search starts only after a year of treatment",
            "Jobs must be in a sheltered workshop",
          ],
          answer: 1,
          rationale: "Zero exclusion is the first principle listed. Others include competitive integrated employment as the goal, early job search, and time-unlimited individualized supports.",
          distractors: "The other answers describe approaches the principles reject.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-pp-q2',
          q: "The IPS research figures in this lesson come from where?",
          options: [
            "An independent regulator",
            "Slides prepared by the practice's own developers and researchers, summarizing published trials, so they should be quoted with that in mind",
            "A newspaper",
            "A poll of participants",
          ],
          answer: 1,
          rationale: "The research slides were developed by Gary Bond, a researcher of the practice, in a presentation by the IPS Employment Center. They summarize trials and should be cited that way.",
          distractors: "The other answers do not describe the source.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What assumptions have you heard about who can and cannot work? What does the evidence say?",
          "What is one question about work or school you could add to your conversations?",
        ] },
        { kind: 'takeaways', items: [
          "Psychiatric rehabilitation builds skills and supports toward a life the person wants. It is person-centered and strengths-based.",
          "Supported employment works best with zero exclusion, early job search, integrated treatment, and time-unlimited supports.",
          "Quote research carefully and name its source. Ask about work and school goals, and connect people to programs and benefits planning.",
        ] },
        ev([
          "Psychiatric Rehabilitation Association. Core Principles and Values (page read November 10, 2026). The twelve principles, described here in summary.",
          "IPS Employment Center. Individual Placement and Support (IPS) Practice Principles, presentation dated January 28, 2026. The overview, pillars, eight principles, and the research slides prepared by Gary Bond. Read in full. A 2024 review by Drake and Bond is noted from a search result and was not read.",
          "National Institute of Mental Health. Schizophrenia (fact sheet). The treatments listed, including psychosocial treatments, coordinated specialty care, and assertive community treatment.",
          "SAMHSA. Treatment Improvement Protocol 42 (2020 update). The statements on vocational services, housing support, and the value of work.",
          "Los Angeles County Department of Mental Health. Individual Placement and Support (IPS), Supported Employment (page read November 10, 2026). The program listing and the help line.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-pp-l2',
      title: 'Peer support: competencies, values, and boundaries',
      summary: 'The twelve categories of peer competencies, the core values of peer support, and how to handle dilemmas.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Peer support is easy to describe and hard to do well. The role asks you to be close enough to understand and distinct enough to help. It asks you to share something of yourself without making the conversation about you. This lesson sets out what the national documents say a peer worker does and what values guide the work, so that you can face the hard moments with something to hold on to.",
        ] },
        { kind: 'concept', title: 'What a peer worker does: twelve categories', text: [
          "SAMHSA's core competencies for peer workers, updated in February 2026, are grouped into twelve categories. Here they are, with a short note on each.",
          "One, engages peers in collaborative and caring relationships: initiates contact, listens carefully to content and emotion, reaches out across the recovery continuum, and shows genuine acceptance and understanding. Two, provides support: validates experiences and feelings, encourages exploring community roles, conveys hope, celebrates efforts, and gives concrete help with tasks and goals. Three, shares lived experiences of recovery: relates their own stories to inspire hope, and knows when to share and when to listen. Four, personalizes peer support: understands their own values and culture and how they may lead to bias, respects the person's cultural and spiritual beliefs, and tailors services. Five, supports recovery planning: helps set goals and dream of future possibilities, proposes strategies, supports decision-making, and helps the person function as a member of their treatment team. Six, links to resources, services, and supports: keeps current information, helps people investigate and use resources, and accompanies them to activities and appointments when asked.",
          "Seven, provides information about skills related to health, wellness, and recovery: educates about wellness and recovery, co-learns with peers, coaches about accessing services and navigating systems, and uses approaches that match preferences. Eight, helps peers manage crises: recognizes signs of distress and threats to safety, reassures, creates safe spaces, acts using knowledge of local resources and the person's preferences, and helps develop advance directives and crisis prevention tools. Nine, values communication: uses respectful, person-centered, recovery-oriented language, listens actively, clarifies when in doubt, documents as required, and follows laws and rules on confidentiality. Ten, supports collaboration and teamwork: works with colleagues, assertively engages providers across mental health, addiction, and physical health, coordinates with families and natural supports, and strives to resolve conflicts. Eleven, promotes leadership and advocacy, which you studied in the advocacy course. And twelve, promotes growth and development: recognizes the limits of their knowledge and seeks help, uses supervision effectively, reflects on their own motivations, judgments, and feelings that the work may activate, and seeks opportunities to learn.",
          "Whatever your job title, these competencies are a map of the work. Notice how many of them are about relationship and communication, and how few are about technique.",
        ] },
        { kind: 'concept', title: 'The foundational principles', text: [
          "The same document states foundational principles. Peer support is recovery-oriented, person-centered, voluntary, relationship-focused, and trauma-informed. Voluntary means peer workers are partners or consultants, they do not dictate the services provided or the elements of recovery plans, and participation is always contingent on the person's choice.",
        ] },
        { kind: 'concept', title: 'The core values', text: [
          "The National Association of Peer Supporters published national practice guidelines in 2013 and revised them in 2019 to add guidance for supervisors. The guidelines describe twelve core values, which the association says were validated with agreement from nearly 1,000 peer supporters. They are, in brief, that peer support is voluntary, peer supporters are hopeful, open minded, empathetic, and respectful, peer supporters facilitate change, peer supporters are honest and direct, peer support is mutual and reciprocal, peer support is equally shared power, peer support is strengths-focused, peer support is transparent, and peer support is person-driven.",
          "The guidelines describe the values in terms of what peer supporters do. Here are the first three, in their spirit. Voluntary: peer supporters do not force or coerce anyone to take part in services, respect people's right to choose or stop, may choose not to work with a particular person if their own issues or lack of expertise could get in the way, in which case they refer the person to another peer or provider, and advocate for choice when they see coercion. Hopeful: peer supporters tell strategic stories of their recovery in relation to current struggles, model recovery behaviors, and help others reframe life challenges as chances to grow. Open minded: peer supporters meet people where they are, respect each person's right to choose their pathway, and do not evaluate or assess others. The guidelines add that, for supervisors, a good question is what happened, rather than what is wrong.",
          "The guidelines are written to describe what peer workers can do in alignment with these values, and they say the earlier approach had focused on deficits and rules about what peer workers cannot do. The guidelines also state that both lived experience and role-specific training are required to practice as a peer support specialist, and that traditional academic education is not a substitute.",
          "Be aware that the guidelines are copyrighted by the association. This course describes them in its own words. For the full text, read the guidelines themselves.",
        ] },
        { kind: 'concept', title: 'Mutual, honest, and transparent', text: [
          "Three of the values deserve emphasis in practice. Mutual and reciprocal means the relationship is not one-way. The peer is also learning and receiving. This is part of what makes it different from a clinical relationship. Equally shared power means the peer worker does not sit above the person. Honest and direct means telling the truth kindly, including about the limits of the role and what must be reported. Transparent means being open about what you do and why, including what you write down and who will see it.",
          "These values are why you do not promise secrecy when safety is at risk, why you tell people what goes in the record, and why you ask before you contact anyone.",
        ] },
        { kind: 'concept', title: 'Dilemmas and boundaries', text: [
          "The guidelines say that peer supporters may choose not to work with a person when personal issues or lack of expertise could interfere, and that they should explore dual relationships and trauma with their supervisor. Davidson's review lists boundaries, ethics, confidentiality, and self-care among the topics peer staff need training in, and recommends supervision focused on job skills, performance, and support, not on the worker's clinical status.",
          "Practice guidance for this course, built on the sources. When you are unsure, ask. Questions that help. Is this in my role. Does my program have a policy. Am I doing this because it helps the person, or because it is what I want. Would I be comfortable if my supervisor knew. Common dilemmas include being asked to keep something secret, being asked for money or a ride, being invited to a personal event, meeting someone you know from your own life, feeling attracted to or angry at someone, being pressed by the program to push the person toward a service, and finding that your own recovery is shaken by the work. None has a single answer. All deserve a conversation with a supervisor.",
        ] },
        { kind: 'concept', title: 'Evidence and humility', text: [
          "Davidson and colleagues describe the research on peer support as developing, and they note that the contributions unique to peers are hope through positive self-disclosure, role modeling of self-care and everyday skills, and the nature of the relationship. A 2014 review by Chinman and colleagues found 20 studies of peer support services for serious mental illness, rated the level of evidence moderate, noted methodological shortcomings, and found improvements favoring peers for two of the three service types. You met these in the first course of the core. Hold the evidence with some modesty, and hold the values firmly.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Peer worker', plain: "A person who uses their own lived experience of recovery, with training, to support others." },
          { term: 'Dual relationship', plain: "A second kind of relationship with someone you serve, such as friend, neighbor, or relative." },
          { term: 'Mutual and reciprocal', plain: "A relationship in which both people give and receive." },
          { term: 'Voluntary', plain: "Participation is the person's choice, and they can stop at any time." },
          { term: 'Transparent', plain: "Open about what you do, why, and who sees what you write." },
        ] },
        { kind: 'myths', items: [
          { myth: "Peer workers need to have the same diagnosis as the people they support.", reality: "SAMHSA describes peers as people with lived experience of recovery from a mental health or substance use condition. Sharing exactly the same experience is not required, and the guidelines warn against assuming you know what another person feels." },
          { myth: "The value of peer support is that the peer tells people what worked for them.", reality: "The guidelines say peer supporters use strategic stories in relation to the person's struggles, and the values stress person-driven, equally shared power, and asking thoughtful questions." },
          { myth: "A peer worker must work with anyone who is assigned to them.", reality: "The guidelines say peers may choose not to work with a person when personal issues or lack of expertise could interfere, and refer them elsewhere." },
          { myth: "Boundaries mean never sharing anything personal.", reality: "SAMHSA's competencies include sharing lived experience and knowing when to share. Boundaries mean doing it with purpose and within program policy." },
        ] },
        { kind: 'case', title: 'An invitation', scenario: true, text: [
          "A woman a worker has supported for six months invites her to her birthday dinner. The worker is touched. She does not say yes right away, and she does not say no with a lecture. She says, that means a lot to me. I want to check with my supervisor about what is okay, because I want to do right by you. She asks her supervisor, who explains the program's policy. The worker goes back and tells the woman what she can do, such as celebrate with her at their next meeting. She is honest about the reason and does not blame the woman for asking. The woman says she understands. The relationship is stronger for it.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-pp-q3',
          q: "According to SAMHSA's peer worker competencies, which is one of the foundational principles of peer support?",
          options: [
            "Peer workers decide the elements of a recovery plan",
            "Peer support is voluntary: participation is always contingent on the person's choice, and peer workers do not dictate services or recovery plans",
            "Peer support is mandatory for people in treatment",
            "Peer workers assess and diagnose",
          ],
          answer: 1,
          rationale: "The competencies state that peer support is recovery-oriented, person-centered, voluntary, relationship-focused, and trauma-informed, and that peer workers are partners or consultants who do not dictate services or plans.",
          distractors: "The other answers contradict the principles.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-pp-q4',
          q: "A person you support invites you to a personal celebration. What is the best first step?",
          options: [
            "Say yes without telling anyone",
            "Refuse and explain that boundaries mean you can never socialize",
            "Thank them warmly, say you want to check with your supervisor about what is allowed, and come back with an honest answer",
            "Ignore the invitation",
          ],
          answer: 2,
          rationale: "Dual relationships and boundaries are questions for your supervisor and program policy. Honesty and warmth keep the relationship intact.",
          distractors: "The other answers either hide it, shame the person, or avoid it.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Which of the twelve categories do you feel strongest in? Which would you like to grow in?",
          "Which value is hardest for you in practice, and why?",
        ] },
        { kind: 'takeaways', items: [
          "The twelve categories of competencies map the work. Relationship and communication come first.",
          "The core values are voluntary, hopeful, open minded, empathetic, respectful, honest, mutual, equal power, strengths-focused, transparent, and person-driven.",
          "When in doubt about boundaries, ask your supervisor.",
        ] },
        ev([
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services (last updated February 2026). All twelve categories and the foundational principles. Read in full.",
          "National Association of Peer Supporters. National Practice Guidelines for Peer Specialists and Supervisors (2019). The background, the list of twelve core values, and core values 1 to 3 in detail. The remaining nine values are described from their titles only. The document is copyrighted and is paraphrased here.",
          "Davidson L, et al. (2012). World Psychiatry, 11(2):123-128. The contributions of peers, the training topics, and supervision.",
          "Chinman M, et al. (2014). Psychiatric Services. Abstract only.",
          "The dilemmas and the questions to ask are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-pp-l3',
      title: 'Recovery planning, supervision, and staying well in the work',
      summary: 'How to plan with a person in their own words, how to use supervision, and how to care for yourself.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Two things decide whether this work lasts. Whether the plans you make with people are theirs, and whether you have support yourself. This lesson is about both.",
        ] },
        { kind: 'concept', title: 'Planning with a person', text: [
          "SAMHSA's competencies describe supporting recovery planning as helping people take charge of their lives, set and accomplish goals related to home, work, community, and health. The specific competencies are assisting peers to set goals and to dream of future possibilities, proposing strategies to help accomplish tasks or goals, supporting peers to use decision-making strategies when choosing services and supports, helping peers function as members of their treatment and recovery support team, and researching and identifying credible information and options.",
          "Davidson's review describes a study in which peers facilitated person-centered care planning, helping participants direct their own treatment and recovery. It reported that the planning process increased the degree to which participants felt their care was responsive to non-treatment issues such as housing and employment, and increased their sense of control and ability to bring about change. The same study found that a peer-run community connector role increased hope, engagement in managing the illness, satisfaction with family life, positive feelings about themselves, social support, and sense of community belonging.",
          "Put these together and you have a method. Start with the person's own goals. Name strengths. Break the goal into steps small enough to try this week. Ask what might get in the way. Decide who helps. Agree when you will review. Write it in the person's words.",
        ] },
        { kind: 'concept', title: 'A simple planning conversation', text: [
          "Practice guidance for this course, built on the sources above and the Motivational Interviewing course.",
          "Dream. If things were going the way you wanted a year from now, what would be different. Home, work, school, people, health. Let the person say it in their own words.",
          "Strengths. What has helped you get this far. What are you good at. What have you done that you are proud of.",
          "Choose. Of all of that, which would you like to start with.",
          "Steps. What is one small step you could take this week. What would make it easier.",
          "Barriers and helpers. What might get in the way. Who or what could help.",
          "Review. When shall we look at this together again.",
          "At each stage use open questions, reflections, and affirmations. Offer information only after asking. If the person is not ready to plan, do not push. Ask about what matters to them and keep the door open.",
        ] },
        { kind: 'concept', title: 'Using supervision well', text: [
          "SAMHSA's competencies list using supervision effectively, by monitoring yourself and your relationships, preparing for meetings, and engaging in problem-solving with the supervisor, as one of the competencies in the growth and development category. It also lists recognizing the limits of your knowledge and seeking help when needed, and reflecting on your own motivations, judgments, and feelings that the work may activate and recognizing signs of distress.",
          "The National Association of Peer Supporters' guidelines for supervisors say that supervision should help peer specialists stay true to the core values, and they note a tension. Many peer positions are supervised by licensed professionals whose ethical codes may prevent practices such as self-disclosure that are essential to peer support, and who may not know the values of peer support. The association recommends that supervisors learn those values, and that both sides keep a respectful relationship and open communication when liability concerns shape decisions. Whether or not your supervisor has lived experience, you can help by being clear about what you do and why, and by bringing questions.",
          "Davidson's review recommends supervision that concentrates on job skills, performance, and support rather than the worker's clinical status. It names managing the burdens of disclosure and of representing all peers as an important focus. A good supervision session is one in which you can say what you are struggling with.",
          "Practice guidance. Prepare before you go. Write down the cases you want to discuss and the decisions you are unsure of. Use a simple structure: what happened, what I did, how I felt, what I am unsure of, and what I would like help with. Ask for feedback. Tell your supervisor when you need more time, more training, or a different kind of support. If you disagree with something, say so respectfully.",
        ] },
        { kind: 'concept', title: 'Staying well in the work', text: [
          "Davidson's review states that jobs in mental health settings are stressful for everyone, that self-care is an important focus for all staff, and that peer staff have the additional burden of disclosing personal experiences and being scrutinized. It recommends that peer staff be treated like other employees, with the same expectations for sick time and accommodations, and it recommends starting with at least two peer staff on a team so they can support each other.",
          "The Professional Conduct course covers self-care and secondary stress. Here, three reminders. Know your early signs of overload. Have people outside of work who are not part of your caseload. Use your supervisor, a peer, or a mentor to debrief. And remember the point in the peer competencies about reflecting on your own feelings and knowing when to seek support. If you are in crisis, call or text 988.",
        ] },
        { kind: 'concept', title: 'Documentation, collaboration, and confidentiality', text: [
          "The competencies list documenting information as required by program policies and procedures, and following laws and rules about confidentiality and respecting privacy. They list working with colleagues, assertively engaging providers from mental health, addiction, and physical health services to meet the needs of peers, and coordinating with the person's family and natural supports. Do these with the person's knowledge and permission. Transparent means no surprises.",
          "Assertively engaging providers means you may need to speak up for a person in a meeting, bring a question to a clinician, or ask a program to change something. Do it respectfully and clearly, and as the person wants. The advocacy course covers this.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Recovery plan', plain: "A plan, in the person's words, with goals, strengths, small steps, barriers, helpers, and a time to review." },
          { term: 'Person-centered planning', plain: "Planning that starts with what the person wants and directs the process." },
          { term: 'Supervision', plain: "Regular support and guidance on your work, including its effects on you." },
          { term: 'Debrief', plain: "Talking through a hard experience with someone to process it." },
          { term: 'Natural supports', plain: "Family, friends, and community members who support a person outside of paid services." },
        ] },
        { kind: 'myths', items: [
          { myth: "A recovery plan is something the worker writes for the person.", reality: "SAMHSA's competencies and Davidson's review describe the person directing the plan, with the worker helping." },
          { myth: "Needing supervision means I am not doing well.", reality: "The competencies list using supervision effectively and seeking help when needed as marks of growth." },
          { myth: "Peer workers should handle stress alone because they have been through worse.", reality: "Davidson's review says jobs in mental health are stressful for everyone, and recommends supervision, accommodations, and support." },
          { myth: "A good plan covers everything.", reality: "A good plan names one or two small steps the person chooses, and a time to review." },
        ] },
        { kind: 'case', title: 'A plan in four lines', scenario: true, text: [
          "A man says he wants his own apartment, and then that he does not see how it could happen. The worker asks what an apartment would mean. He says he would be able to have his daughter visit. She asks what he has already done toward it. He has a housing application started. She names that. They agree on one step: to finish the application by Friday, with her sitting beside him at the library, and to ask his caseworker about a letter. She asks what might get in the way, and he says he is embarrassed about one answer on the form. They agree he will tell her which one, and she will tell him how other people have handled it. They agree to look at it again on Friday. The plan is in his words, on one page.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-pp-q5',
          q: "Which best describes a recovery plan made with a peer worker?",
          options: [
            "A form the worker completes about the person",
            "A plan in the person's own words, with their goals, strengths, small first steps, barriers, helpers, and a time to review",
            "A list of rules for the person to follow",
            "A diagnosis and treatment schedule",
          ],
          answer: 1,
          rationale: "Recovery planning in the competencies and research is person-directed. The worker helps the person set goals, choose strategies, and decide.",
          distractors: "The other answers describe a plan done to the person.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-pp-q6',
          q: "According to SAMHSA's competencies, which is a way to use supervision effectively?",
          options: [
            "Avoid raising problems",
            "Prepare for meetings, monitor yourself and your relationships, and engage in problem-solving with your supervisor",
            "Only attend when there is a crisis",
            "Let the supervisor make all decisions",
          ],
          answer: 1,
          rationale: "The competencies list using supervision effectively by monitoring self and relationships, preparing for meetings, and engaging in problem-solving.",
          distractors: "The other answers describe avoiding or handing over supervision.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What do you need from supervision that you are not getting? How could you ask for it?",
          "What are your early signs of overload, and who knows them?",
        ] },
        { kind: 'takeaways', items: [
          "Plan with a person: dream, strengths, choose, small step, barriers and helpers, review. Write it in their words.",
          "Use supervision well by preparing, being honest, and asking for what you need.",
          "Staying well is part of the job. Debrief, use support, and know your signs.",
        ] },
        ev([
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services (last updated February 2026). The categories on recovery planning, collaboration, communication, and growth and development.",
          "Davidson L, et al. (2012). World Psychiatry. The study of peer-facilitated person-centered planning and the community connector, and the recommendations on supervision and support.",
          "National Association of Peer Supporters (2019). Guidelines for supervisors, the tension between supervision and peer values. Paraphrased.",
          "The planning conversation and the supervision structure are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-pp-s1',
      title: 'Session 1, Values in Action',
      summary: 'A live practice session. Work through dilemmas using the core values and learn when and how to ask.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Values are easy to agree with and hard to apply. This session gives you dilemmas to work through with others, so you are not meeting them alone for the first time.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All dilemmas are invented. Please do not describe real people you serve. You share your own experience only as much as you choose. You may pass at any time. What is said in the room stays in the room. We learn from each other and do not judge. If you are in distress, tell the facilitator. You can call or text 988 at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Values sort, 10 minutes', text: "Participants choose the three values from the list of twelve that matter most to them in their work and the one that is hardest, and share why in pairs." },
          { label: 'Dilemma rounds, 30 minutes', text: "In groups of four, participants draw dilemma cards. For each, the group decides what the values say, what the program policy is likely to say, what they would do, who they would ask, and how they would explain it to the person. Three rounds of about ten minutes." },
          { label: 'Share and compare, 10 minutes', text: "Groups share one dilemma and how they handled it. The facilitator notes where answers differ and why asking a supervisor matters." },
          { label: 'Close, 5 minutes', text: "One question you will bring to your supervisor." },
        ] },
        { kind: 'list', title: 'Dilemma cards', items: [
          "A person asks you to keep a secret about something that may put them at risk.",
          "A person asks you for a ride to a store, and then asks again the next week.",
          "A person you support is also your neighbor.",
          "You run into someone from your own recovery community, and they are now someone you are assigned to support.",
          "Your program asks you to remind people to take their medication, and a person says they have stopped.",
          "A person sends you messages late at night.",
          "A person gives you a gift.",
          "You are having a hard week and a person asks how you are.",
        ] },
        { kind: 'list', title: 'Questions to ask yourself', items: [
          "Is this in my role?",
          "What does my program's policy say?",
          "Am I doing this because it helps the person?",
          "Is the person's choice being respected?",
          "Would I be comfortable if my supervisor knew?",
          "Who should I ask?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which dilemma felt closest to your own work?",
          "What is the question you are most afraid to ask your supervisor, and why?",
        ] },
        { kind: 'takeaways', items: [
          "Use the values as a guide, and the program's policy as a boundary.",
          "When you are unsure, ask. Asking is not weakness.",
          "Be honest and transparent with the person about why you are doing what you are doing.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite. The dilemma cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-pp-s2',
      title: 'Session 2, Recovery Planning Conversations',
      summary: 'A live practice session. Practice a planning conversation in which the person leads.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "The hardest part of planning with someone is not talking too much. This session lets you practice the questions and the listening, with feedback.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements apply. Use the invented person on your card, not yourself or anyone you know. If a round feels like too much, say pause.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A brief check-in and one thing you tried since Session 1." },
          { label: 'A model conversation, 10 minutes', text: "The facilitator and a volunteer demonstrate a short planning conversation. The group notes questions asked, reflections made, and how the plan ended up in the person's words." },
          { label: 'Triad practice, 30 minutes', text: "In triads, one person plays someone on a persona card, one is the worker, and one is the observer. Three rounds of about ten minutes. The worker uses the seven prompts of the planning conversation, and writes the plan in the person's words. The observer uses the checklist." },
          { label: 'Debrief, 10 minutes', text: "What happened when the worker asked and then waited? Where did the worker want to fix?" },
          { label: 'Close, 5 minutes', text: "One thing you will do differently the next time you plan with someone." },
        ] },
        { kind: 'list', title: 'Persona cards', items: [
          "A woman in her fifties who wants to see her grandchildren more often, is living in a motel, and has a part-time job she is afraid of losing.",
          "A man in his twenties who dropped out of community college after a hospital stay and wants to go back but doubts he can.",
          "A man in his sixties who used to be a mechanic, is newly sober, and is lonely.",
          "A woman in her thirties who is caring for her mother, is exhausted, and has stopped seeing friends.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker begin with the person's own goals?",
          "Did the worker name specific strengths?",
          "Was the step small and chosen by the person?",
          "Did the worker ask about barriers and helpers?",
          "Did the worker resist giving advice before asking?",
          "Is the plan in the person's words, and is there a time to review?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Where did you feel the pull to fix or advise?",
          "What question brought out the most from the person?",
        ] },
        { kind: 'takeaways', items: [
          "Start with the person's own goals and strengths.",
          "Choose one small step, ask about barriers, and set a time to review.",
          "Write the plan in the person's words.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite. The persona cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 3 ─────────────────────────────────────────────────────────
    {
      id: 'chw-pp-s3',
      title: 'Session 3, Supervision and Staying Well',
      summary: 'A live practice session. Practice presenting a case, asking for what you need, and planning your own care.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Asking for help is a skill. This session gives you a structure for bringing a case to supervision, and a chance to practice saying what you need.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements apply. Cases are invented. Do not name real people you serve. If a round feels like too much, say pause.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A brief check-in and one thing you have asked for since Session 2." },
          { label: 'Ask for what you need, 15 minutes', text: "In pairs, participants practice three requests for supervision: for more time, for training on a topic, and for a different kind of support. The partner plays a supervisor who asks one clarifying question." },
          { label: 'Present a case, 20 minutes', text: "In groups of three, one person presents an invented case using the structure: what happened, what I did, how I felt, what I am unsure of, and what I would like help with. The others respond with questions and reflections, not advice. Two rounds." },
          { label: 'Boundaries and disclosure, 10 minutes', text: "In pairs, participants rehearse two sentences they might say when asked a personal question, one for sharing a little and one for gently declining." },
          { label: 'Your care plan, 5 minutes', text: "Each participant writes the early signs of overload, who they will go to, and one weekly practice that keeps them well." },
          { label: 'Close, 5 minutes', text: "One word for how you are leaving, and the support resources again." },
        ] },
        { kind: 'list', title: 'Case structure', items: [
          "What happened, in a few sentences, with no names.",
          "What I did.",
          "How I felt, and what it brought up for me.",
          "What I am unsure of.",
          "What I would like help with.",
        ] },
        { kind: 'list', title: 'Sentences to rehearse', items: [
          "I have found parts of my own story helpful in work like this, and I want to keep today's focus on you.",
          "That is a personal question, and I would rather not answer it. Tell me more about what made you ask.",
          "I need more time to prepare for these meetings. Could we lengthen our check-ins?",
          "I would like training on this topic. Is there something available?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What is the hardest thing for you to ask for?",
          "Who are three people you can talk to when the work is heavy?",
        ] },
        { kind: 'takeaways', items: [
          "Prepare for supervision and use a structure.",
          "Rehearse the sentences you will need for personal questions.",
          "Know your early signs, and use your support before you are overloaded.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite. The cases were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-pp-practice',
    title: 'Your peer support practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: your values and how you will show them, a planning conversation, your boundary and disclosure guidelines, and your plan for supervision and for staying well.',
    fields: [
      { id: 'values', label: 'Your values', help: 'Choose three of the twelve core values. For each, write one thing you will do in a conversation that shows it, and one thing you will avoid.', multiline: true },
      { id: 'plan', label: 'A planning conversation', help: 'For an invented person, write the person\'s dream, two strengths, the one step they choose, the barriers, the helpers, and the date you will review it, in their words. Add two questions you asked.', multiline: true },
      { id: 'boundaries', label: 'Boundaries and disclosure', help: 'Write your guidelines for sharing your own story, if you have one, and for answering personal questions. Add three situations you will bring to your supervisor, and who else you will ask.', multiline: true },
      { id: 'supervision', label: 'Supervision and staying well', help: 'Write what you will bring to your next supervision session using the case structure, what you will ask for, your early signs of overload, three people you can talk to, and one weekly practice.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The twelve categories of competencies and the foundational principles.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
    { name: 'National Association of Peer Supporters: National Practice Guidelines for Peer Specialists and Supervisors (2019)', use: 'The twelve core values and guidance for supervisors.', url: 'https://www.peersupportworks.org/' },
    { name: 'Psychiatric Rehabilitation Association: Core Principles and Values', use: 'The twelve principles of psychiatric rehabilitation.', url: 'https://www.psychrehabassociation.org/node/36' },
    { name: 'IPS Employment Center: Individual Placement and Support Practice Principles', use: 'The eight practice principles of supported employment and the research slides.', url: 'https://ipsworks.org/wp-content/uploads/2026/01/IPS-Practice-Principles-Presentation-1.28.2026.pdf' },
    { name: 'Davidson L, et al. Peer support among persons with severe mental illnesses: a review of evidence and experience (2012)', use: 'An open-access review of the research and the experience of peer support.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3363389/' },
    { name: 'National Institute of Mental Health: Schizophrenia', use: 'Treatments including psychosocial treatments and coordinated specialty care.', url: 'https://www.nimh.nih.gov/health/publications/schizophrenia' },
    { name: 'Los Angeles County Department of Mental Health: Individual Placement and Support (IPS), Supported Employment', use: 'Local supported employment program information.', url: 'https://dmh.lacounty.gov/?p=12417' },
  ],
};
