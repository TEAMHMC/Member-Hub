// Community Mental Health Worker Pathway, Mental Health Core M7: The Behavioral Health System and Access.
//
// A self-paced course (id chw_mh_system_access, 4 hours). It teaches a community health worker how
// behavioral health care is organized and paid for in Los Angeles County and California, how a person
// gets into it, and how to find current information instead of relying on memory. It is a practical
// course, and a large share of its text is walkthroughs, decision steps, and cases.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources are
// the National Health Law Program's An Advocate's Guide to Medi-Cal Services, Chapter IV, Mental Health
// Services (updated February 2026); a San Francisco Department of Public Health FAQ on the CalAIM No
// Wrong Door policy (version date July 1, 2022, written for San Francisco); pages of the Los Angeles
// County Department of Mental Health (its ACCESS Center and Individual Placement and Support pages);
// the Los Angeles County Department of Public Health's Substance Abuse Prevention and Control home page;
// the 211 LA home page; the 988 Lifeline's what-to-expect page; SAMHSA's site navigation, for the names of
// its locators and helplines only; a March 2024 summary of Proposition 1 by the California Behavioral
// Health Board and Commission; and Ballotpedia's page on Proposition 1. The California Department of
// Health Care Services publishes the controlling guidance, and its site returned a bot check on
// November 10, 2026 and was not bypassed. The course therefore says which statements come from an
// advocate's guide and a county page, and it teaches workers to check the county's current information
// and the plan's handbook before telling anyone what is available. The Medi-Cal substance use services
// chapter of the same guide, Drug Medi-Cal Organized Delivery System rules, and details of Los Angeles
// County programs beyond those pages were not read. The scenes were written for this course and
// describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_SYSTEM_ACCESS: Course = {
  id: 'chw_mh_system_access',
  num: 28,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'The Behavioral Health System and Access',
  promise:
    "Explain who provides and pays for mental health and substance use care in Los Angeles County and California, help a person find the right door for their situation, know the crisis options, understand the funding changes under Proposition 1, and check current information before you tell anyone what is available.",
  about: [
    "This course is a map of the system and a guide to using it. It covers the main parts of public behavioral health care in Los Angeles County, how Medi-Cal splits mental health services between counties and health plans, the crisis options, how substance use services are reached, what is different for children, young people, and people leaving jail or prison, and how Proposition 1 changes the funding.",
    "It rests on a 2026 advocate's guide to Medi-Cal mental health services, the pages of the County Department of Mental Health and the County Department of Public Health, the 988 Lifeline, 211 LA, a summary of Proposition 1, and a San Francisco explanation of the No Wrong Door policy. The state's own site could not be read by an automated request, so the lessons say which facts come from which source.",
    "It is Mental Health Core course 7 of HMC's community health worker pathway. The system changes often. This course gives you the structure, and it teaches you to check before you tell. It is not legal advice, and it does not decide who qualifies for anything.",
  ],
  objectives: [
    "Name the main parts of the behavioral health system and say who is responsible for what.",
    "Explain the difference between specialty and non-specialty mental health services in Medi-Cal and the No Wrong Door policy.",
    "Describe the crisis options in Los Angeles County and when to use each.",
    "Describe how people reach substance use services and Medi-Cal peer support services in this county.",
    "Describe what is different for children and youth and for people leaving jail or prison.",
    "Explain what Proposition 1 changed, and find current information before telling someone what is available.",
  ],
  minutes: 240,
  prerequisites: "None. Public Health, Medi-Cal, and Social Programs, and Understanding Mental Health Conditions are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management who help people find mental health and substance use care.",
  freshness:
    "This course describes a system that changes often. The Medi-Cal guide was updated in February 2026, the county pages were read on November 10, 2026, the state pages on November 11, 2026, and a San Francisco FAQ from 2022 is used only for its explanation of a statewide policy. Always check the county's current page and the person's plan handbook before you tell someone what is available.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhsys-l1',
      title: 'A map of the system',
      summary: 'Who provides and pays for behavioral health care, and how the pieces fit together.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "People often say the system is confusing, and it is. The reason is that no single body runs it. Counties run some parts, health plans run others, the state pays and sets rules, the federal government shapes both, private insurance and community organizations fill gaps, and crisis lines sit across all of it. A worker who knows who does what can stop a person from being passed from door to door.",
          "This lesson draws the map. The lessons that follow zoom in on each part.",
        ] },
        { kind: 'concept', title: 'The pieces', text: [
          "Practice summary written for this course, built on the sources named in each lesson.",
          "The county mental health plan. Each California county runs a Mental Health Plan that delivers what Medi-Cal calls specialty mental health services. In Los Angeles County this is the Department of Mental Health, whose ACCESS Center is the 24-hour entry point.",
          "Medi-Cal managed care plans. Many Medi-Cal members are enrolled in a health plan, and these plans are responsible for non-specialty mental health services. People with fee-for-service Medi-Cal receive these services through the regular Medi-Cal system.",
          "The county substance use system. Los Angeles County's Department of Public Health runs the Substance Abuse Prevention and Control division, which publishes a helpline and tools for finding services.",
          "Crisis services. These include the 988 Lifeline, the county's 24-hour line, mobile crisis teams, crisis stabilization, and 911.",
          "Community organizations. Nonprofits, clinics, faith groups, and peer-run programs provide services, some under contract with the county or a plan and some independently.",
          "Other payers. Medicare, private insurance, and programs for people without coverage. A person's coverage decides which door to use first.",
          "Information and referral services. 211 LA is a locally based nonprofit guide to services. SAMHSA also lists a national helpline and treatment locators on its site.",
        ] },
        { kind: 'concept', title: 'The two main Medi-Cal doors', text: [
          "The National Health Law Program's advocate's guide to Medi-Cal services, updated in February 2026, explains how California covers mental health services through different delivery systems. Specialty mental health services are delivered by county Mental Health Plans. Non-specialty mental health services are delivered by Medi-Cal managed care health plans. Some services, such as psychotherapeutic medications, are delivered through fee-for-service Medi-Cal.",
          "The guide notes that county Mental Health Plans, managed care plans, and fee-for-service providers have different criteria for service eligibility and available providers in their networks, which can be confusing. It advises looking at the county's behavioral health website for county information, and at the plan's website or handbook for managed care information, and calling the plans for more information or a copy of materials.",
          "The next lesson explains the two doors in more detail. For now, keep in mind that the same person can be served by both at once.",
        ] },
        { kind: 'concept', title: 'Who pays', text: [
          "Behavioral health care in California is paid for through several streams. Medi-Cal, which is funded jointly by the state and federal governments, pays for covered services for members. Counties receive funding for public mental health services, including from a tax on high incomes that voters approved in 2004 as the Mental Health Services Act, which Proposition 1 renamed the Behavioral Health Services Act in 2024. You will learn more about this in Lesson 6. Health plans receive payments to provide services to their members. And private insurance and Medicare pay for their members.",
          "Why this matters to you. A service is available to a person through the door that their coverage opens. A person with Medi-Cal enrolled in a managed care plan has a different first call than a person with Medi-Cal and a serious mental illness, and different from a person with no coverage. Asking about coverage early is not nosy. It tells you where to start.",
        ] },
        { kind: 'concept', title: 'Where information lives', text: [
          "Each part of the system publishes its own information. The county Department of Mental Health has a website with its programs, service areas, and a clinic locator. The managed care plan has a member handbook and a website, and a member services phone number on the member's card. The county's Substance Abuse Prevention and Control division has a helpline and online tools. 211 LA lists services across the county, 24 hours a day, in multiple languages.",
          "The advocate's guide also points out that the state publishes behavioral health information notices that contain the controlling, up-to-date guidance, because some of the regulations have not been updated in many years. Your supervisor can tell you where your program keeps current notices.",
        ] },
        { kind: 'concept', title: 'A rule for your work', text: [
          "Check before you tell. Programs open, close, change names, change eligibility, and change phone numbers. Rules change on the state level too. A confident wrong answer wastes a person's time and trust, and a person in distress may not try again. If you are not sure, say so, look it up with the person, and call to confirm before you send them. If you cannot confirm, tell them what you know and what you do not.",
        ] },
        { kind: 'vocab', items: [
          { term: 'County Mental Health Plan', plain: "The county agency that delivers specialty mental health services to Medi-Cal members." },
          { term: 'Managed care plan', plain: "A health plan that manages a Medi-Cal member's care and covers non-specialty mental health services." },
          { term: 'Fee-for-service Medi-Cal', plain: "Medi-Cal in which a member sees any provider who accepts Medi-Cal and the state pays the provider directly." },
          { term: 'Specialty mental health services', plain: "County-delivered services for people with moderate to severe conditions, such as crisis services, intensive programs, and case management." },
          { term: 'Non-specialty mental health services', plain: "Services delivered through managed care or fee-for-service, such as evaluation and therapy for mild to moderate conditions." },
        ] },
        { kind: 'myths', items: [
          { myth: "There is one mental health system with one phone number.", reality: "There are several systems. Some phone numbers, like the county's 24-hour line and 988, are entry points, and the right door depends on coverage and need." },
          { myth: "If a program is listed on a website, it is still open and taking people.", reality: "Programs change. Call to confirm before you send someone." },
          { myth: "Medi-Cal only covers one mental health system.", reality: "The guide describes county, managed care, and fee-for-service delivery systems, and a person can be served by more than one at the same time." },
          { myth: "My job is to know every program.", reality: "Your job is to know the structure, where to look, and how to confirm." },
        ] },
        { kind: 'case', title: 'A list that was out of date', scenario: true, text: [
          "A worker keeps a one-page list of programs on her clipboard. A man tells her that he has been trying to get counseling for months. She gives him a number from her list and he thanks her. Two weeks later he tells her the number is disconnected and that he had given up. She feels terrible. She sits down with her supervisor and they set a rule: the list gets checked on the first of each month, every entry gets a date, and the worker calls to confirm before she sends anyone. She also adds the county's 24-hour line and 211 LA to the top, because those stay current. She apologizes to the man and they find a program together, with a call made in front of him.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q1',
          q: "According to the advocate's guide, which delivers specialty mental health services in Medi-Cal?",
          options: [
            "Medi-Cal managed care health plans",
            "County Mental Health Plans",
            "Private insurers only",
            "The federal government directly",
          ],
          answer: 1,
          rationale: "The guide says specialty mental health services are delivered by county Mental Health Plans, while non-specialty services are delivered by managed care plans, and some services such as psychotherapeutic medications by fee-for-service Medi-Cal.",
          distractors: "The other answers misassign the responsibility.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q2',
          q: "You are not sure whether a program is still open. What should you do before sending someone there?",
          options: [
            "Send them anyway, since the website lists it",
            "Call to confirm, or look it up with the person, and be honest about what you could not confirm",
            "Tell them it is definitely open",
            "Skip giving them any referral",
          ],
          answer: 1,
          rationale: "Programs change. A confirmed referral saves the person time and trust. If you cannot confirm, be clear about what you know and what you do not.",
          distractors: "The other answers risk a wasted trip or withhold help.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "Which parts of this map do you already use in your work? Which are new?",
          "How current is the list of programs you use? When was each last confirmed?",
        ] },
        { kind: 'takeaways', items: [
          "Several bodies run behavioral health care: the county, health plans, the county substance use division, crisis lines, community organizations, and other payers.",
          "Medi-Cal splits mental health services between county plans and managed care plans, and a person can use both.",
          "Check before you tell. Use sources that stay current, and confirm before you send someone.",
        ] },
        ev([
          "National Health Law Program. An Advocate's Guide to Medi-Cal Services, Chapter IV, Mental Health Services (updated February 2026). The delivery systems, the advocacy tips about differing criteria and where to look, and the note about behavioral health information notices. Read in the parts quoted.",
          "Los Angeles County Department of Mental Health. ACCESS Center page, and Individual Placement and Support page (read November 10, 2026). The 24-hour entry point and help line.",
          "Los Angeles County Department of Public Health, Substance Abuse Prevention and Control (home page read November 10, 2026). The helpline and tools.",
          "211 LA (home page read November 10, 2026). The description of the service.",
          "Ballotpedia and the California Behavioral Health Board and Commission summary of Proposition 1. The renaming of the Mental Health Services Act.",
          "The list of pieces, the discussion of who pays, and the rule to check before you tell are practice summaries written for this course.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhsys-l2',
      title: 'Medi-Cal mental health: two doors and No Wrong Door',
      summary: 'Specialty and non-specialty services, access criteria, what the plans must provide, and how the policy works.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "A person with Medi-Cal may be able to get help from two different places, and each has its own rules. In the past, a person who went to the wrong one might be sent away. California changed that rule in 2022. Knowing how the two doors and the No Wrong Door policy work lets you help a person get through without being bounced.",
        ] },
        { kind: 'concept', title: 'Specialty mental health services', text: [
          "The advocate's guide lists the specialty mental health services that all County Mental Health Plans cover. Rehabilitative mental health services, which include mental health services, medication support, day treatment intensive, day rehabilitation, crisis intervention, crisis stabilization, adult residential treatment, crisis residential treatment, and psychiatric health facility services. Inpatient mental health services. Targeted case management. Psychiatrist services and psychologist services. Psychiatric nursing facility services. Peer support services, which counties may opt to provide for adults. And EPSDT services for children and youth, including intensive care coordination, intensive home-based services, therapeutic behavioral services, and therapeutic foster care.",
          "It says that county Mental Health Plans must maintain a 24-hour telephone number with capabilities for all languages spoken in the county, to give general information about specialty services and to facilitate authorization of urgent services. Prior authorization or a county referral is required for some of these services, such as intensive home-based services, day treatment intensive, day rehabilitation, therapeutic behavioral services, and therapeutic foster care. It says prior authorization may not be required for mental health assessment services including initial assessment, crisis intervention, crisis stabilization, targeted case management, intensive care coordination, peer support services, and medication support services. And it says county plans cannot require prior authorization for emergency services.",
        ] },
        { kind: 'concept', title: 'How a person gets in', text: [
          "The advocate's guide gives a plain statement of the front door. Behavioral health services can be accessed by calling the county Mental Health Plan access line, which is available 24 hours a day, 7 days a week, or by talking to the person's managed care plan doctor or clinic. This should result in screening, assessment, an eligibility determination, and referral to appropriate services and providers. Emergency services should be available by visiting a hospital emergency room or calling the county crisis line. The guide says county plans must make specialty services available 24 hours a day, seven days a week, as needed to treat a person's urgent condition, and defines an urgent psychiatric condition as one that, without timely intervention, is highly likely to result in an immediate emergency psychiatric condition.",
          "It also describes what to do in a dispute between the two systems. Advocates can help a person request medically necessary services during a dispute by calling either the managed care plan or the county plan, as set out in their agreement, and asking for prompt provision of services. If neither provides services during the dispute, the person can file a grievance with the plan. The county identified in the state's eligibility system as the county of responsibility must provide, arrange, and pay for eligible specialty services, wherever the person is living, until the dispute is resolved.",
        ] },
        { kind: 'concept', title: 'Who qualifies: adults', text: [
          "For people 21 or older, the guide says a service is medically necessary when it is reasonable and necessary to protect life, to prevent significant illness or significant disability, or to alleviate severe pain. These beneficiaries are eligible for specialty services when they meet both of two access criteria. First, the person has one or both of the following: a significant impairment, where impairment is defined as distress, disability, or dysfunction in social, occupational, or other important activities, or a reasonable probability of significant deterioration in an important area of life functioning. Second, the person's condition is due to either a diagnosed mental health disorder according to the current diagnostic manuals, or a suspected mental disorder that has not yet been diagnosed.",
          "The guide states that, following changes made through CalAIM, a mental health diagnosis is not a prerequisite to access covered specialty services. A county plan must have written policies for authorizing services and must include in its beneficiary handbook the procedures for obtaining benefits. All county decisions to modify or deny a treatment request must be made by a physician or psychologist with appropriate expertise, and if a plan modifies, denies, or delays an authorization request, it must notify the beneficiary in writing of the adverse benefit determination.",
          "That last point connects to the advocacy course. A written notice of an adverse decision carries the person's right to appeal, and the timelines are on the notice.",
        ] },
        { kind: 'concept', title: 'Who qualifies: children and youth', text: [
          "The guide says that, consistent with the EPSDT benefit, county plans must use less stringent criteria and provide a broader array of services to people under 21. They must provide services that are necessary to correct or ameliorate a child's or adolescent's mental health condition. It describes two ways a person under 21 qualifies. The first is having a condition that places the youth at high risk for a mental health disorder due to trauma shown by a high score on a department-approved trauma screening tool, involvement in the child welfare system, juvenile justice involvement, or experiencing homelessness. The second is having a significant impairment or reasonable probability of significant deterioration, or a need for services regardless of impairment, together with a diagnosed disorder, a suspected disorder not yet diagnosed, or significant trauma placing the person at risk of a future condition, based on the assessment of a licensed mental health professional.",
          "It says a diagnosis is not required. It also says county plans must provide intensive care coordination, intensive home-based services, and therapeutic behavioral services to all children and youth under 21 who are eligible for full-scope Medi-Cal and need them, and may not restrict eligibility to children with open child welfare cases.",
        ] },
        { kind: 'concept', title: 'Non-specialty mental health services', text: [
          "The guide says managed care plans have been required to deliver non-specialty mental health services since 2014. The plans must cover mental health evaluation and treatment, including individual, group, and family psychotherapy; psychological and neurological testing when clinically indicated; outpatient services to monitor drug therapy; outpatient laboratory, drugs, supplies, and supplements; psychiatric consultation; and dyadic care services. For people with fee-for-service Medi-Cal who are not in a plan, these services are delivered through the regular system, and the person can go to any Medi-Cal provider who accepts Medi-Cal and provides mental health services.",
          "The guide says managed care plans must provide these services for members of any age with potential mental health disorders not yet diagnosed, and for members 21 and older with mild to moderate impairment of mental, emotional, or behavioral functioning, which is why the adult benefit is sometimes called mild to moderate. Plans cover non-specialty services even when services are provided before a diagnosis, during an assessment, before it is determined whether the person meets specialty criteria, when services are not in an individual treatment plan, when the member has a co-occurring substance use disorder, and when specialty and non-specialty services are already provided at the same time, as long as they are coordinated and not duplicated. Managed care plans cannot require prior authorization for an initial mental health assessment.",
          "For children and youth under 21, the guide says both specialty and non-specialty services must be provided when necessary to correct or ameliorate a condition, so children and youth are entitled to both regardless of the severity of their condition. It says plans must provide psychotherapy to members under 21 with specified risk factors or persistent mental health symptoms even without a diagnosis, and that since January 2023 Medi-Cal covers dyadic services for families, which are integrated physical and behavioral health screenings and services provided to the whole family based on a child's Medi-Cal eligibility.",
        ] },
        { kind: 'concept', title: 'No Wrong Door', text: [
          "The guide explains that, effective July 1, 2022, California implemented a No Wrong Door policy through CalAIM to make sure that all Medi-Cal beneficiaries receive timely mental health services without delay regardless of the delivery system where they seek care, and that they can maintain treatment relationships with trusted providers without interruption. Under the policy, a person may receive non-specialty services from a managed care or fee-for-service provider and specialty services from a county provider at the same time, when the services are clinically appropriate, coordinated, and not duplicative. Managed care plans and county plans must coordinate care for members who receive both, and must facilitate care transitions and guide referrals when a person moves from one type to the other. They coordinate under agreements called memoranda of understanding that should be posted on the county and plan websites and available on request.",
          "The guide says the state developed statewide screening and transition-of-care tools that took effect in 2023 to help determine which system fits a person and to support transitions. A 2022 San Francisco FAQ on the policy adds that the screening and transition tools are intended to make accurate determinations about whether care would be better delivered in the specialty system or in the managed care or fee-for-service system, and that the policy is how people can be screened and referred across systems with ease. It also explains that the determination of which system a person belongs in is based on the person's functional impairment, and that adults with serious mental illness or children with severe emotional disturbance would be seen in the county system. That FAQ is a 2022 document written for San Francisco, and it is used here only for its explanation of the statewide policy.",
          "What does No Wrong Door not mean. A person cannot get any service from any program they choose. It means a person who asks for help should be assessed and connected, and not sent away because they walked into the wrong place.",
          "The state agency that runs Medi-Cal, the Department of Health Care Services, describes the policy on its CalAIM behavioral health page. As of July 1, 2022 it ensures members receive mental health services regardless of the delivery system where they seek care, whether county behavioral health, a managed care plan, or fee-for-service. A member who goes directly to a treatment provider can receive an assessment and services and the provider is reimbursed by its contracted plan, even if the member is later transferred to the other system because of their level of impairment and needs. In certain situations a member may receive coordinated, non-duplicative services in more than one system. The agency also clarified that people with co-occurring mental health and substance use conditions may be treated by providers in each of the behavioral health systems, as long as the covered services are not duplicative and meet requirements for contracting and claiming. It says the standardized screening and transition-of-care tools launched January 1, 2023, and that an updated policy took effect June 3, 2025. The same page reports that on January 20, 2026 the agency updated the access criteria for the specialty mental health system in a notice numbered BHIN 26-002, which superseded the earlier notice. The advocate's guide in this lesson was updated in February 2026. If the criteria described here differ from what a county tells you, the county's current notice governs, so ask.",
          "The agency's page also lists a mobile crisis benefit effective January 1, 2023, designed to give de-escalation and relief wherever a person is, through a multidisciplinary team, available 24 hours a day, 7 days a week, 365 days a year, and states that county mental health plan access lines and substance use access lines are listed on its site.",
        ] },
        { kind: 'concept', title: 'Grievances, appeals, and the right to a hearing', text: [
          "The guide says both county plans and managed care plans have grievance and appeal procedures for disputes or complaints about services or providers. The process should be informal and can be done orally by calling the grievance number, or in writing. It says that if a person disagrees with a denial, termination, or reduction of benefits, they have the right to file for a Medi-Cal fair hearing. You studied the timelines and the state's steps in the advocacy course. Always read the notice and check the current state page.",
        ] },
        { kind: 'concept', title: 'Transportation', text: [
          "The guide says that if a Medi-Cal member is enrolled in a managed care plan, the plan must arrange non-medical transportation or non-emergency medical transportation to medical, dental, or behavioral health appointments for Medi-Cal services, for transfers from general acute care hospitals or emergency departments to psychiatric facilities, and after discharge from inpatient or residential care or an emergency visit. For members in fee-for-service Medi-Cal, it describes ways to arrange these services. Transportation is one of the most common reasons people miss care. A worker who knows to ask about it can save an appointment.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Access criteria', plain: "The conditions a person must meet to receive a service, such as impairment and a diagnosed or suspected condition." },
          { term: 'EPSDT', plain: "The federal benefit that requires Medi-Cal to cover medically necessary services for people under 21." },
          { term: 'Prior authorization', plain: "Approval a plan must give before certain services can be provided." },
          { term: 'Adverse benefit determination', plain: "A plan's denial, delay, or reduction of a service, which must be given to the member in writing." },
          { term: 'Dyadic services', plain: "Integrated physical and behavioral health services for a child and caregiver together." },
        ] },
        { kind: 'myths', items: [
          { myth: "A person needs a diagnosis to get specialty mental health services.", reality: "The guide says that, since CalAIM, a diagnosis is not a prerequisite to access covered specialty services, and a suspected disorder can qualify." },
          { myth: "A person can only use one system at a time.", reality: "Under No Wrong Door, a person may receive non-specialty and specialty services at the same time when appropriate, coordinated, and not duplicative." },
          { myth: "A managed care plan can require approval before a first mental health assessment.", reality: "The guide says managed care plans cannot require prior authorization for an initial mental health assessment." },
          { myth: "Children get only what adults get.", reality: "The guide says children and youth under 21 are entitled to both specialty and non-specialty services regardless of severity, when necessary to correct or ameliorate a condition." },
        ] },
        { kind: 'case', title: 'Which door', scenario: true, text: [
          "A woman in her forties with Medi-Cal in a managed care plan tells a worker she has been anxious for months and cannot sleep. She has never seen a counselor. The worker does not decide which system she belongs in. She says, you can start with your health plan's member services number on your card, and ask for a mental health evaluation. They do not need approval for a first assessment. If it turns out you need more intensive help, they can connect you to the county, and you can have both. She offers to sit with the woman while she calls, and asks if she has a ride to appointments, and explains that the plan must arrange transportation. She writes down the date they will check in. If the woman had told her she was hearing voices and could not take care of herself, the worker would have called the county's 24-hour line and her supervisor instead.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q3',
          q: "According to the advocate's guide, which statement about the No Wrong Door policy is accurate?",
          options: [
            "A person can only receive services from one delivery system at a time",
            "A person may receive non-specialty services from a plan or fee-for-service provider and specialty services from a county provider at the same time when clinically appropriate, coordinated, and not duplicative",
            "A person must have a diagnosis before getting any service",
            "County plans and managed care plans do not need to coordinate",
          ],
          answer: 1,
          rationale: "The guide says the policy ensures timely services regardless of the delivery system where a person seeks care, and allows concurrent services that are coordinated and not duplicative. Plans must coordinate.",
          distractors: "The other answers contradict the guide.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q4',
          q: "A Medi-Cal member in a managed care plan wants a first mental health assessment. According to the guide, what is true?",
          options: [
            "The plan must give prior authorization before the first assessment",
            "The plan cannot require prior authorization for an initial mental health assessment",
            "The member must first get a county referral",
            "The member must have a diagnosis",
          ],
          answer: 1,
          rationale: "The guide's advocacy tip says managed care plans cannot require prior authorization for an initial mental health assessment.",
          distractors: "The other answers add requirements the guide says are not needed.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Do you know which plan the people you serve are enrolled in? How would you find out?",
          "What would you say to a person who was told they were in the wrong place?",
        ] },
        { kind: 'takeaways', items: [
          "Specialty services come through the county and non-specialty services through managed care or fee-for-service. A person can use both.",
          "A diagnosis is not required to access specialty services. Children and youth have broader entitlements.",
          "Under No Wrong Door, people should be assessed and connected, and plans must coordinate. Read denial notices and use the appeal rights.",
        ] },
        ev([
          "National Health Law Program. An Advocate's Guide to Medi-Cal Services, Chapter IV, Mental Health Services (updated February 2026). The delivery systems, covered services, access criteria for adults and for children and youth, non-specialty services, No Wrong Door, grievances and appeals, and transportation. The guide is written for advocates. The controlling guidance is published by the state, and its site could not be read by an automated request.",
          "San Francisco Department of Public Health, Behavioral Health Services. FAQ: CalAIM No Wrong Door (version date July 1, 2022). The explanation of the screening tools and how the system is determined. It was written for San Francisco, and its local details were not used.",
          "The case and the advice on asking about plan and transportation are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhsys-l3',
      title: 'Crisis services: who to call and when',
      summary: 'The crisis options in Los Angeles County, how they differ, and how to choose.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "In a crisis, a person and the people around them need to know three things quickly: who can I talk to, who can come to me, and where can we go. The answer depends on the situation. Knowing the options ahead of time lets you choose calmly and stay with the person while help arrives.",
        ] },
        { kind: 'concept', title: 'The 988 Lifeline', text: [
          "You studied 988 in the suicide prevention course. The Lifeline describes its service as available by call, text, or chat, with conversations that are confidential, and with a counselor who asks whether you are safe, listens, provides support, and shares resources. Options at the start of a call include the Veterans Crisis Line, Spanish-language services, and a service for LGBTQ+ youth, and the page says specialized options are available by text. 988 is for emotional distress as well as suicidal crisis. The NIMH pages direct people in suicidal crisis or emotional distress to call or text 988, and say to call 911 in a life-threatening situation.",
        ] },
        { kind: 'concept', title: 'The county\'s 24-hour line', text: [
          "The Los Angeles County Department of Mental Health lists a 24/7 help number, (800) 854-7771, in the header of its pages, along with 988. Its ACCESS Center page says that the ACCESS Center, part of the department's Help Line, operates 24 hours a day, 7 days a week as the entry point for mental health services in Los Angeles County. Its services include deployment of crisis evaluation teams, information and referrals, gatekeeping of acute inpatient psychiatric beds, interpreter services, and client transport. During county emergencies it also functions as a disaster response line that provides crisis-related supports to impacted residents and communities.",
          "The Substance Abuse Prevention and Control home page lists the Substance Abuse Service Helpline at the same number, 1-800-854-7771, option 2. So the number serves as both the mental health entry point and the substance use helpline, with an option to choose. Confirm the options when you call, as they can change.",
          "What this means for you. The county line is the right call when a person needs a county crisis team or help getting into the county system, or when you want information on referral. 988 is the right call for emotional support and suicide crisis support by phone, text, or chat. They are not alternatives that compete. Both are legitimate, and both are confidential. If you are not sure which to call, either will help you.",
        ] },
        { kind: 'concept', title: 'Mobile crisis and crisis facilities', text: [
          "The advocate's guide says that, in addition to crisis intervention services, Medi-Cal covers community-based mobile crisis intervention services for all ages, that mobile crisis services must be available to beneficiaries experiencing behavioral health crises 24 hours a day, 7 days a week, and 365 days a year, and that county plans are required to cover crisis intervention, including mobile crisis, under their contract with the state. The guide also lists crisis stabilization and crisis residential treatment among the services county plans cover, and says crisis intervention services must be provided to all beneficiaries under 21.",
          "Proposition 1, which you will study in Lesson 6, funds more of these. The bond summary lists short-term crisis stabilization, crisis residential, peer respite, and other facility types among the settings it will pay to build or expand.",
          "The county's website lists its crisis programs, including programs by name that were not described in the sources read for this course. Ask your supervisor which mobile crisis resources your program uses and how to reach them, and keep that information on a card.",
        ] },
        { kind: 'concept', title: '911', text: [
          "Call 911 when there is an immediate danger to life. A person who has taken an overdose or means of harming themselves, a person who is unresponsive, a person who is violent and endangering others, or a person who is about to act. The Overdose toolkit and the NIMH pages both say to call 911 in life-threatening situations.",
          "Practice guidance for this course. In a mental health emergency, when you call 911, say that it is a mental health emergency, give the location, say whether there are weapons, and say what the person is doing. Stay on the line. Ask for a mental health response if your area offers one, though availability varies. Be aware that a police response can be frightening and risky for a person in crisis, and that many people and communities have reasons to fear it. That is a reason to be clear and calm with dispatch, and to use other options when the situation allows. It is not a reason to delay calling 911 when a life is in danger.",
        ] },
        { kind: 'concept', title: 'A simple way to choose', text: [
          "Practice guidance written for this course, built on the sources above.",
          "Immediate danger to life: call 911, stay with the person, and tell your supervisor.",
          "Suicidal thoughts without immediate danger, or emotional distress: help the person call or text 988 with you, and follow your program's procedure. If they need more, call the county line.",
          "Needs a county crisis team, or help getting into county services: call the county's 24-hour line.",
          "Substance use help wanted: call the same county number and choose the substance use option, or use the county's online tools.",
          "Not a crisis, but needs services or information: 211 LA, the plan's member services line, or your program's referral list.",
          "Always: tell your supervisor, document factually, and follow up.",
        ] },
        { kind: 'concept', title: 'Language and access in a crisis', text: [
          "The ACCESS Center page lists interpreter services and brochures in many languages. The 988 Lifeline offers Spanish-language services. 211 LA says it provides support in multiple languages and TTY accessibility. Ask for an interpreter early, and do not rely on children or family members to interpret in a crisis, as you learned in the communication course.",
        ] },
        { kind: 'vocab', items: [
          { term: 'ACCESS Center', plain: "The Los Angeles County Department of Mental Health's 24-hour entry point for mental health services." },
          { term: 'Mobile crisis', plain: "A team that goes to a person experiencing a behavioral health crisis in the community." },
          { term: 'Crisis stabilization', plain: "Short-term, urgent care to stabilize a person in a mental health crisis." },
          { term: 'Crisis residential treatment', plain: "A short-term residential program for people in crisis." },
          { term: 'Peer respite', plain: "A peer-run short-term residential alternative to hospital care." },
        ] },
        { kind: 'myths', items: [
          { myth: "988 is only for suicide.", reality: "988 serves people in suicidal crisis or emotional distress." },
          { myth: "The county line is only for people who already have county services.", reality: "The county describes the ACCESS Center as the entry point for mental health services in Los Angeles County." },
          { myth: "Calling 911 is always the safest choice.", reality: "911 is right for immediate danger to life. For other situations, 988 or the county line may be better, and a police response can be frightening for a person in crisis." },
          { myth: "I should keep trying to handle a crisis myself so as not to bother anyone.", reality: "Bring in help and tell your supervisor. These services exist for exactly this." },
        ] },
        { kind: 'case', title: 'Choosing in the moment', scenario: true, text: [
          "A worker is at a community meal when a man tells her he has not slept in four days, believes people are following him, and is frightened. He is not threatening anyone and says he does not want to hurt himself. She stays calm, sits down with him, and asks what would help. She tells him she would like to call a team that helps people in situations like this, and asks if that is okay. She steps aside and calls the county line, tells them where they are and what she has observed, and follows their instructions. She also tells her supervisor. She stays with him until the team arrives. Had he said he was going to hurt himself or someone else, or had she seen a weapon, she would have called 911. She keeps her tone steady and does not argue about what he believes.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q5',
          q: "According to the Los Angeles County Department of Mental Health, what is the ACCESS Center?",
          options: [
            "A weekday walk-in clinic",
            "The 24-hour, 7-day entry point for mental health services in Los Angeles County, which handles crisis evaluation team deployment, information and referrals, and interpreter services",
            "A private insurance helpline",
            "A website only",
          ],
          answer: 1,
          rationale: "The county's page describes the ACCESS Center as operating 24 hours a day, 7 days a week as the entry point for mental health services, with crisis evaluation teams, information and referrals, gatekeeping of acute inpatient psychiatric beds, interpreter services, and client transport.",
          distractors: "The other answers misdescribe the service.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q6',
          q: "You are with a person who says they are going to take pills tonight. They have the pills with them. What do you do?",
          options: [
            "Call the county line for an appointment next week",
            "Stay with them, call 911 as the immediate danger to life, tell your supervisor, and follow your program's procedure",
            "Give them 211",
            "Promise to keep it confidential",
          ],
          answer: 1,
          rationale: "An immediate danger to life calls for 911. Stay with the person, and bring in your supervisor. Do not promise secrecy.",
          distractors: "The other answers delay help or promise something you cannot keep.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What crisis resources does your program use? Do you have the numbers where you can reach them without a phone signal?",
          "What would make you hesitate to call, and how can you address it before a crisis?",
        ] },
        { kind: 'takeaways', items: [
          "988 is for emotional distress and suicidal crisis by call, text, or chat. The county line is the entry point for county services and crisis teams. 911 is for immediate danger to life.",
          "Mobile crisis must be available 24/7 as a Medi-Cal service. Know how your program reaches it.",
          "Choose the right door for the situation, stay with the person, tell your supervisor, and follow up.",
        ] },
        ev([
          "Los Angeles County Department of Mental Health. ACCESS Center page, and the header of its pages with the help line and 988 (read November 10, 2026).",
          "Los Angeles County Department of Public Health, Substance Abuse Prevention and Control (home page read November 10, 2026). The Substance Abuse Service Helpline listing.",
          "988 Suicide and Crisis Lifeline. What to Expect (read November 10, 2026). Options may change.",
          "National Health Law Program. An Advocate's Guide to Medi-Cal Services, Chapter IV (updated February 2026). Crisis intervention, mobile crisis, and crisis stabilization.",
          "California Behavioral Health Board and Commission. Proposition 1 summary (March 2024). The facility types the bond will fund.",
          "211 LA (home page read November 10, 2026).",
          "The choosing steps and the guidance on 911 are practice guidance written for this course, and your program's procedure governs.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhsys-l4',
      title: 'Substance use services, peer support services, and finding what fits',
      summary: 'How people reach substance use services in this county, Medi-Cal peer support services, and tools for finding programs.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Many of the people you will help need support for substance use as well as mental health, and the doors to these services can differ. This lesson covers what the sources show about reaching substance use care in Los Angeles County, what Medi-Cal peer support services are, and the tools that help you find the right program.",
        ] },
        { kind: 'concept', title: 'Substance use services in Los Angeles County', text: [
          "The Los Angeles County Department of Public Health runs a division called Substance Abuse Prevention and Control. Its home page, read for this course, invites people to get help by calling the Substance Abuse Service Helpline at 1-800-854-7771, option 2. It lists member information, including how to find a provider, the member handbook, member rights, and other resources, and notes that changes to the member handbook take effect on January 1, 2027. It describes a Service and Bed Availability Tool, designed to simplify finding and connecting with substance use services with a filterable service locator and real-time bed availability, and a mobile app called RecoverLA.",
          "The page uses the word member and does not define it there. The page does not describe eligibility rules, and the Medi-Cal substance use chapter of the advocate's guide was not read for this course. So the course does not tell you who qualifies for which level of care. Ask the helpline, which can tell a person what applies to them.",
          "A change is coming. The state's CalAIM page says counties must combine the administration of specialty mental health and substance use services into one integrated behavioral health program by January 1, 2027, with a single integrated behavioral health plan in each county or region, to reduce the burden on members with co-occurring conditions. The county substance use page read for this course likewise notes that its member handbook changes on January 1, 2027. Expect phone numbers, forms, and names to change around that date, and check before you tell.",
          "Practice guidance for this course. If a person says they want help with drinking or drug use, they have taken a big step. Offer to call the helpline with them, or to open the Service and Bed Availability Tool together, and be there while they do it. Do not tell them what treatment they need. Ask what they want. Remember the earlier course: if someone has been drinking heavily every day, do not encourage stopping suddenly without medical advice.",
        ] },
        { kind: 'concept', title: 'Other ways to find treatment', text: [
          "SAMHSA's site, which was read only for the names of its resources, lists a National Helpline, the 988 Lifeline, the Veterans Crisis Line, the Disaster Distress Helpline, treatment locators including FindTreatment.gov, an Early Serious Mental Illness Treatment Locator, and an Opioid Treatment Program Directory. It also has pages for people with private insurance, Medicare, Medicaid, no insurance, veterans, and American Indian and Alaska Native people. The content of those pages was not read for this course. They can help you find programs for people whose coverage is different from the county Medi-Cal door.",
          "The advocate's guide notes that county Mental Health Plans must reimburse Indian Health Care Providers for specialty services to American Indian and Alaska Native Medi-Cal members, even when the provider is not under contract with the county, and must make a good faith effort to contract with those providers in their county. If you work with American Indian or Alaska Native people, ask your supervisor about Indian Health Care Providers in your area.",
        ] },
        { kind: 'concept', title: 'Medi-Cal peer support services', text: [
          "The advocate's guide says that, effective July 1, 2022, peer support services are an optional behavioral health Medi-Cal benefit in California. They are a distinct service type under the specialty mental health system for counties that opt in to cover the service, and the benefit adds peer support specialists as a distinct Medi-Cal provider type. Because of the EPSDT mandate, all county plans must provide medically necessary peer support services to any beneficiary under 21, even if a county does not cover them for adults.",
          "The guide describes peer support services as culturally competent individual and group services that promote recovery, resiliency, engagement, socialization, self-sufficiency, self-advocacy, development of natural supports, and identification of strengths through structured activities such as group and individual coaching to set recovery goals and identify steps to reach the goals. Services aim to prevent relapse, empower people through strength-based coaching, support linkages to community resources, and educate people and their families about their conditions and the recovery process. They may be provided in a clinical or non-clinical setting, with the person or with their support persons, and include educational skill building groups, engagement, and therapeutic activity.",
          "It says peer support specialists are people who have been successful in the recovery process and wish to use their lived experience to help others in similar situations, that those providing the Medi-Cal benefit must receive peer support specialist certification consistent with state guidance, that a county or an agency representing the county is responsible for developing, overseeing, and enforcing a certification program, and that certified specialists must be over 18. Prior authorization may not be required for peer support services.",
          "The guide says the benefit is available in certain counties. It does not say whether Los Angeles County has opted in or what its program looks like, and the county page read for this course does not say. If you are interested in certification, or want to refer someone to peer support services, ask your supervisor and the county.",
          "The difference to keep in mind. Peer support as a Medi-Cal benefit has specific requirements for certification and for how services are provided and billed. Peer support in a community program, in a volunteer role, or in an organization like HMC may follow different rules. Your role is defined by your program, as you learned in the Professional Conduct course.",
        ] },
        { kind: 'concept', title: 'Supported employment and other services', text: [
          "The Los Angeles County Department of Mental Health lists Individual Placement and Support, a supported employment program, as part of its collaboration with the Department of Public Social Services on CalWORKs. You studied the model in the peer practice course. Ask your supervisor which employment and education programs your clients can be referred to, and what the eligibility rules are.",
          "The advocate's guide also notes the BH-CONNECT Initiative, a five-year initiative to expand evidence-based practices in Medi-Cal behavioral health services, and says services under it differ by county. To find out what is available, see the county's behavioral health website or the plan.",
        ] },
        { kind: 'concept', title: 'Helping someone get in', text: [
          "Practice guidance written for this course. Getting into care is often harder than deciding to get help. People lose steam at the waiting list, the phone tree, the form, the bus. A worker who helps with the mechanics can be the difference.",
          "Make the call together. Many people do not want to call alone. Sit with them, dial, and let them talk. Offer to listen.",
          "Prepare. Help them write down what they will say, their insurance information, and their questions. Bring the card.",
          "Handle the logistics. Ask about transportation, childcare, work schedule, language, and fear. Offer solutions.",
          "Write it down. Name of the person spoken to, the date, what was said, and the next step. Give the person a copy.",
          "Follow up. Check on the appointment. If the person did not go, ask what happened, without blame, and try again.",
          "Close the loop. As the Navigation course taught, a referral is complete when the person has been served, not when you gave the number.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Substance Abuse Service Helpline', plain: "The county's helpline for substance use services, reached at the county number with a substance use option." },
          { term: 'Service and Bed Availability Tool', plain: "An online tool from the county to find substance use services and bed availability." },
          { term: 'Peer support services (Medi-Cal)', plain: "An optional Medi-Cal benefit of coaching and groups provided by certified peer support specialists." },
          { term: 'Certified peer support specialist', plain: "A person with lived experience of recovery who has completed a county-run certification program." },
          { term: 'Indian Health Care Provider', plain: "A health program operated for American Indian and Alaska Native people, which county plans must reimburse for certain services." },
        ] },
        { kind: 'myths', items: [
          { myth: "Peer support specialists in Medi-Cal and peer workers in community programs have the same requirements.", reality: "The guide says Medi-Cal peer support specialists providing the benefit must receive certification under a county-run program, and the benefit is optional for counties." },
          { myth: "All Medi-Cal members can get peer support services.", reality: "The guide says the benefit is optional for adults and counties opt in, but all counties must provide medically necessary peer support to people under 21." },
          { myth: "A worker should decide what level of substance use treatment a person needs.", reality: "The county helpline and providers assess the level of care. A worker helps the person connect." },
          { myth: "Once I give someone a number, my job is done.", reality: "A referral is complete when the person is served. Help with the call, the logistics, and the follow-up." },
        ] },
        { kind: 'case', title: 'A call made together', scenario: true, text: [
          "A man tells a worker he wants help with his drinking but does not know where to start and has been embarrassed to call. The worker asks if he would like to call together. She sits with him, he dials the county's helpline, and chooses the substance use option. The worker stays quiet and takes notes on the name, date, and next step as the person on the line asks questions. When the call ends, she asks how it felt, and she offers to go with him to the first appointment if he would like. She asks whether he has had seizures or hallucinations when he has gone without drinking, and tells him to mention it on the call. She writes a copy of the notes for him and says she will check in on Thursday. She does not say what treatment he needs.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q7',
          q: "According to the advocate's guide, which statement about Medi-Cal peer support services is accurate?",
          options: [
            "All counties must cover peer support for adults",
            "Peer support services are an optional benefit for counties to cover for adults, must be provided to people under 21 when medically necessary, and are delivered by certified peer support specialists",
            "Peer support specialists need no certification",
            "Peer support services can only be provided in a hospital",
          ],
          answer: 1,
          rationale: "The guide says peer support is an optional benefit under the specialty system for counties that opt in, that all county plans must provide medically necessary peer support to beneficiaries under 21, and that specialists providing the benefit must be certified.",
          distractors: "The other answers contradict the guide.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q8',
          q: "A person wants help with substance use. What is the best way for a worker to help?",
          options: [
            "Tell them what level of treatment they need",
            "Offer to call the county helpline or use its tools with them, help with logistics, and follow up, without deciding the treatment",
            "Give them a number and wish them luck",
            "Tell them to stop immediately",
          ],
          answer: 1,
          rationale: "The county helpline and providers assess the level of care. A worker helps the person connect, handles logistics, and follows up. A worker does not advise on withdrawal.",
          distractors: "The other answers decide treatment, leave the person alone, or give unsafe advice.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What gets in the way for people you know when they try to reach care? What could you offer?",
          "Do you know whether Los Angeles County offers Medi-Cal peer support services for adults? Who could tell you?",
        ] },
        { kind: 'takeaways', items: [
          "Substance use services in the county are reached through its helpline and tools. Ask the helpline about eligibility and level of care.",
          "Medi-Cal peer support is an optional benefit delivered by certified specialists. Check what your county offers.",
          "Help with the mechanics: make the call together, prepare, handle logistics, write it down, and follow up.",
        ] },
        ev([
          "Los Angeles County Department of Public Health, Substance Abuse Prevention and Control (home page read November 10, 2026). The helpline, member information, the Service and Bed Availability Tool, and the mobile app. Eligibility rules are not described on the page.",
          "National Health Law Program. An Advocate's Guide to Medi-Cal Services, Chapter IV (updated February 2026). Peer support services, Indian Health Care Providers, and BH-CONNECT. The Chapter V substance use section was not read.",
          "SAMHSA site navigation (read only for the names of its helplines and locators).",
          "Los Angeles County Department of Mental Health. Individual Placement and Support page.",
          "The steps for helping someone get in are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhsys-l5',
      title: 'Children, foster youth, and people leaving jail or prison',
      summary: 'What is different for young people and for people returning from incarceration.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Two groups face particular gaps. Young people, who depend on adults to find services and whose rights differ from adults, and people leaving jail or prison, who often lose coverage and care at the moment they need it most. The sources describe protections for both. Knowing about them can open doors.",
        ] },
        { kind: 'concept', title: 'Children and youth under 21', text: [
          "The advocate's guide explains that, under the federal EPSDT mandate, all state Medicaid programs must provide mental health services to beneficiaries under 21. Mental health services are otherwise optional for most populations. It says county plans must use less stringent criteria and provide a broader array of services to people under 21, and that children and youth are entitled to both specialty and non-specialty services regardless of the severity of their condition when the services are necessary to correct or ameliorate a condition. A diagnosis is not required. A person under 21 can qualify because of high risk due to trauma, child welfare involvement, juvenile justice involvement, or homelessness.",
          "The guide describes services that were established through litigation and that county plans must provide when medically necessary to all children and youth under 21 eligible for full-scope Medi-Cal: intensive care coordination, intensive home-based services, and therapeutic behavioral services. These services must be available in all geographic areas the county serves, and cannot be limited to children with open child welfare cases. It also says crisis intervention services and, whether or not a county covers them for adults, peer support services, must be provided to people under 21 when medically necessary.",
          "For a worker, the practical point is that children and families may be entitled to more than they have been told. If you work with a family whose child has behavioral health needs and Medi-Cal, ask the county and the plan about these services, and about screening tools and eligibility, and help the family ask in writing if they are turned away. Remember the written notice and the appeal rights from the advocacy course.",
        ] },
        { kind: 'concept', title: 'Foster youth and moves between counties', text: [
          "The advocate's guide describes rules for children in foster care placed outside their home county, called presumptive transfer. Generally, responsibility to provide and pay for specialty services promptly transfers to the county where the child now lives. On a case-by-case basis, when it is in the child's best interest, presumptive transfer can be waived, for example when the transfer would disrupt continuity of care, delay access to care, or interfere with family reunification, when the placement is expected to last less than six months or is within 30 minutes of an established provider, or when the child is placed in certain out-of-county residential settings. It also says county plans must work to coordinate services for children who move to a different county as a result of adoption or child welfare placement, and that advocates should make sure both the sending and receiving county plans work together.",
          "If you work with foster families, kinship families, or young people who are moving, this is a place where a call to both counties can prevent a gap.",
        ] },
        { kind: 'concept', title: 'Schools', text: [
          "NIMH's guidance on children says children with behavioral or emotional challenges that interfere with school may benefit from accommodations under laws that prevent discrimination against children with disabilities, and that a first step may be to ask the school whether an individualized education program is appropriate. School-based mental health programs are also listed among the settings that Proposition 1 prevention funds can support. If you work with a family, ask about the school as a door.",
        ] },
        { kind: 'concept', title: 'People leaving jail or prison', text: [
          "The advocate's guide describes the CalAIM Justice-Involved Re-Entry Initiative, which aims to improve access to and quality of health care for people as they re-enter their communities. In 2023 California became the first state to get federal approval to cover a package of reentry services for certain groups of incarcerated people for up to 90 days before release. The guide notes that people who are justice-involved are disproportionately low-income and often have complex or chronic conditions, including mental health conditions and substance use disorder, and that reentry services aim to improve care transitions and increase continuity of coverage.",
          "Pre-release services are available to eligible people in state prisons, county jails and detention facilities, and county youth correctional facilities. Adults are eligible if they meet standard Medi-Cal criteria and have one or more of these health care needs: mental illness, substance use disorder, a chronic condition or significant clinical condition, intellectual or developmental disability, traumatic brain injury, HIV/AIDS, or pregnancy or postpartum status. Youth, including former foster youth under 26, can receive pre-release services without having to show a particular need, and under EPSDT pre-release services are available for people under 21 when necessary. Correctional facilities must screen all Medi-Cal eligible adults and youth for physical and behavioral health needs.",
          "The guide lists the services, which include case management to support reentry planning and linkages to social services and supports and timely access to care in the community, physical and behavioral health clinical consultation including therapy, counseling, and peer support services, laboratory and radiology services, medications and medication management, and treatment for opioid and alcohol use disorders. It notes the care management is similar to Enhanced Care Management but is a separate benefit because of the setting and type of provider.",
          "NIMH lists having recently been released from prison or jail as a risk factor for suicide, and SAMHSA's overdose toolkit lists a recent period of not using opioids, for example in jail, as a time of higher overdose risk, and notes the added risk if medications such as methadone or buprenorphine taken while incarcerated are stopped on release. These are reasons to ask early, before release when you can, and in the first days after.",
        ] },
        { kind: 'concept', title: 'What a worker can do', text: [
          "Practice guidance for this course. Ask whether a person is on Medi-Cal and, if they have been in custody, whether the coverage has been restored or is active. Ask whether they received services in custody and whether there is a reentry plan, a case manager, or a medication supply. Ask about appointments in the first week, which can be critical. Help with transportation and identification. Ask about medications for mental health and substance use, and connect the person with a prescriber without delay. Connect them to a program that serves people returning from incarceration, including peer-led programs. Remind them that overdose risk and suicide risk are higher in the first days and weeks after release, and offer naloxone and 988 information as your program allows.",
          "The Reentry course in this pathway goes deeper. Here the point is that the system now has a formal door for this group, and a worker who knows about it can help someone use it.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Presumptive transfer', plain: "The rule that responsibility for a foster youth's specialty mental health services moves to the county where the youth is placed." },
          { term: 'Intensive care coordination', plain: "A specialty service that coordinates care for children and youth with complex needs." },
          { term: 'Pre-release services', plain: "Medi-Cal services provided to eligible people before they leave jail or prison." },
          { term: 'Reentry', plain: "The return of a person to the community after incarceration." },
          { term: 'Individualized education program', plain: "A school plan that describes supports for a student with a disability." },
        ] },
        { kind: 'myths', items: [
          { myth: "Medi-Cal cannot cover anything while a person is incarcerated.", reality: "The guide says California received federal approval to cover certain pre-release services for up to 90 days before release for eligible people." },
          { myth: "Children's mental health services depend on how severe the problem is.", reality: "The guide says children and youth under 21 are entitled to specialty and non-specialty services regardless of severity when necessary to correct or ameliorate a condition." },
          { myth: "A child needs an open child welfare case to get intensive home-based services.", reality: "The guide says county plans may not restrict eligibility for these services to children with open child welfare cases." },
          { myth: "The first appointment after release can wait.", reality: "NIMH and the overdose toolkit identify the time after release as higher risk for suicide and overdose, so early contact matters." },
        ] },
        { kind: 'case', title: 'Before the release date', scenario: true, text: [
          "A worker has met a man in county jail through a reentry program. He has a mental illness and a substance use history, and he will be released in six weeks. She asks whether he has been told about any Medi-Cal reentry services and who his case manager is. He is not sure. She asks the program how to reach the jail's health services about his plan, with his permission. She helps him write down the medications he takes, the clinic he wants, and the questions he has. After release, she meets him at the door, helps him get to a pharmacy and to an appointment within the week, and gives him information about naloxone and 988. She notes that the first weeks are the riskiest, and agrees to check in every other day for two weeks.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q9',
          q: "According to the advocate's guide, which statement about children and youth under 21 is accurate?",
          options: [
            "They are entitled to specialty and non-specialty mental health services only if their condition is severe",
            "They are entitled to specialty and non-specialty services regardless of the severity of their condition when necessary to correct or ameliorate a condition, and a diagnosis is not required",
            "They need an open child welfare case to receive any services",
            "They are not covered by Medi-Cal for mental health",
          ],
          answer: 1,
          rationale: "The guide says under EPSDT children and youth are entitled to both kinds of services regardless of severity, a diagnosis is not required, and some services cannot be limited to children with open child welfare cases.",
          distractors: "The other answers contradict the guide.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q10',
          q: "What does the CalAIM Justice-Involved Re-Entry Initiative do, according to the guide?",
          options: [
            "Covers all medical care for anyone in jail",
            "Covers a package of pre-release Medi-Cal services for up to 90 days before release for eligible incarcerated people, including case management, clinical consultation, medications, and treatment for substance use",
            "Only provides housing after release",
            "Ends Medi-Cal coverage at the time of arrest",
          ],
          answer: 1,
          rationale: "The guide says California received federal approval to cover pre-release services for up to 90 days before release for eligible people in state prisons, county jails, and county youth facilities.",
          distractors: "The other answers misdescribe the initiative.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Who in your community is most likely to fall through the gap at a transition, such as a move, a release, or a birthday that ends a benefit?",
          "What would you ask a person in the first week after release?",
        ] },
        { kind: 'takeaways', items: [
          "Children and youth under 21 have broader entitlements to mental health services, and a diagnosis is not required.",
          "Foster youth who move between counties need both counties to work together.",
          "People leaving jail or prison may have pre-release Medi-Cal services. The first days after release carry higher risk, so connect early.",
        ] },
        ev([
          "National Health Law Program. An Advocate's Guide to Medi-Cal Services, Chapter IV (updated February 2026). Services for people under 21, presumptive transfer, and the CalAIM Justice-Involved Re-Entry Initiative. Read in the parts quoted.",
          "National Institute of Mental Health. Children and Mental Health, and Frequently Asked Questions About Suicide. School accommodations, and recent release from jail as a risk factor.",
          "SAMHSA. Overdose Prevention and Response Toolkit (PEP23-03-00-001). Overdose risk after a period of not using opioids.",
          "California Behavioral Health Board and Commission. Proposition 1 summary (March 2024). School-based prevention.",
          "The steps for working with people leaving custody are practice guidance written for this course, and the Reentry course goes into more depth.",
        ]),
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhsys-l6',
      title: 'Proposition 1, the Behavioral Health Services Act, and staying current',
      summary: 'What Proposition 1 changed, what it may mean for services, and how to keep up.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "In March 2024, California voters passed a measure that changes how much of the state's behavioral health money is spent and on what. It will shape what services are built, who they serve, and how counties plan. You will hear it talked about at meetings and in the news. This lesson explains what it did, based on the sources, and what is still being worked out.",
        ] },
        { kind: 'concept', title: 'Two parts', text: [
          "The California Behavioral Health Board and Commission summarizes Proposition 1 as having two key elements. A $6.38 billion Behavioral Health Infrastructure Bond Act. And the Behavioral Health Services Act, which converts the Mental Health Services Act into the Behavioral Health Services Act. Ballotpedia describes the measure as approved by voters on March 5, 2024.",
          "Ballotpedia describes what a yes vote supported: renaming the Mental Health Services Act of 2004 to the Behavioral Health Services Act and expanding its purpose to include substance use disorders, including for people without a mental illness. Changing how revenue from the 1 percent tax on income above $1 million is spent, including requiring 30 percent of the Behavioral Health Services Fund to be allocated to housing intervention programs. Increasing the size of the oversight commission from 16 to 27 voting members. And issuing $6.38 billion in bonds to fund housing for homeless individuals and veterans, including up to $4.4 billion for mental health care and drug or alcohol treatment facilities and $2.0 billion for housing for homeless persons.",
        ] },
        { kind: 'concept', title: 'The bond: places to build', text: [
          "The summary lists what the bond can fund. Supported housing and residential care settings for people with serious mental illness or substance use disorders, including veterans and others who are homeless, chronically homeless, or at risk of homelessness. And behavioral health settings to build or expand capacity, including short-term crisis stabilization, acute and subacute care, crisis residential programs including children's crisis residential, recovery housing, substance use disorder residential programs including children's, short-term residential therapeutic programs, social rehabilitation programs, community-based mental health residential programs, peer respite, community and outpatient behavioral health services, and other clinically enriched longer term treatment and rehabilitation options.",
          "A bond pays for buildings. It does not pay for the staff and services inside them. Construction takes years. A new facility opening does not mean services are available the same week.",
        ] },
        { kind: 'concept', title: 'The Services Act: who and how funds are divided', text: [
          "The summary says the Behavioral Health Services Act serves people with serious mental illness and those at risk of developing a mental health condition, people with substance use disorders and those at risk, and children and youth with serious emotional disturbance or substance use disorder, those at high risk because of trauma shown by a screening tool, those in the child welfare or juvenile justice systems, those experiencing homelessness, and children and youth in populations with identified disparities in behavioral health outcomes.",
          "It says counties must dedicate 30 percent of local funding to housing interventions for people with serious mental illness or serious emotional disturbance, or with substance use disorders, who are experiencing homelessness, with some exemptions that counties may request. It describes that as approximately $1 billion, varying by year. Funding could be used for the full spectrum of housing services and supports, rental and operating subsidies, and the non-federal share of Medi-Cal covered services including clinically enriched housing. Of the remaining local funds, 35 percent is for Full Service Partnerships, which the summary says should be optimized to leverage Medicaid as much as possible, and 35 percent is for other services including behavioral health services and supports, outreach and engagement, prevention and early intervention, capital facilities and technology, workforce education and training, and a prudent reserve. It says a county must use at least 51 percent of behavioral health services and supports funding for early intervention programs, and 51 percent of that for programs serving people aged 25 and younger. And it says the state directs 4 percent for population-based prevention, with at least 51 percent for programs serving people 25 or younger.",
          "The summary says that, initially, there will be some flexibility between funding categories.",
        ] },
        { kind: 'concept', title: 'Planning, accountability, and coverage', text: [
          "The summary also describes changes to planning and accountability. It says the Act sets expectations for what funds are used for and who they are intended to serve, with specific data measures made public so taxpayers can track impact and progress, and clear actions the state will take against counties not delivering. It says planning requirements are updated: pare back the requirements in three-year and annual plans, standardize data, and introduce a broader planning process that covers all behavioral health and is regional, with state and local goals and outcomes, and collaboration with cities, managed care plans, and Continuums of Care to outline responsibilities and coordination on housing interventions. It also says the Act requires counties to pursue reimbursement through various channels and authorizes counties to report issues with managed care plans and insurers to the Department of Managed Health Care or the Department of Insurance.",
          "Notice what this says about the system. Counties are expected to coordinate with health plans and with the housing system, and to use Medi-Cal and private insurance as well as local funds. That ties back to the map in Lesson 1.",
        ] },
        { kind: 'concept', title: 'What the state says', text: [
          "The Department of Health Care Services, the state agency that leads the work it calls Behavioral Health Transformation, describes Proposition 1 on its own pages, read on November 11, 2026. It describes the Behavioral Health Services Act as replacing the Mental Health Services Act of 2004, prioritizing services for people with the most significant mental health needs while adding treatment of substance use disorders, expanding housing interventions, and increasing the behavioral health workforce, with stronger oversight and transparency.",
          "On the bond it gives these figures. The bond authorizes about $6.4 billion. Of that, $4.4 billion is administered by the department as grants to public and private entities for behavioral health treatment and residential settings, with $1.5 billion of that awarded only to counties, cities, and tribal entities and $30 million set aside for tribes. About $1.972 billion is administered by the state housing department for permanent supportive housing for people at risk of or experiencing homelessness and behavioral health challenges, of which $1.065 billion is for veterans. The agency says more than 11,150 new behavioral health treatment beds and supportive housing units will be funded.",
          "On county funds it says 30 percent of each county's allocation must go to housing interventions for people with the most significant behavioral health needs who are homeless or at risk of homelessness, with half of that prioritized for people experiencing long-term homelessness and up to 25 percent usable for capital development. Thirty-five percent goes to Full Service Partnership programs, which it describes as comprehensive and intensive care for people of any age with the most complex needs, also called the whatever it takes model. Thirty-five percent goes to behavioral health services and supports, a majority of which, 51 percent, must go to early intervention, and a majority of early intervention, 51 percent, must serve people 25 and younger. It adds that counties may move up to 7 percent from one category to another, with a maximum of 14 percent added to any one category, and that small counties of 200,000 or fewer people may seek an exemption from the housing requirement in the 2026 to 2029 planning cycle. Los Angeles County is not a small county.",
          "For the state's 10 percent, it says the public health department receives 4 percent for statewide population-based prevention, the workforce agency receives 3 percent for workforce initiatives, and the department and others share the remaining 3 percent for oversight and technical assistance, with the oversight commission directing a $20 million annual Innovation Partnership Fund. It says the funds will be leveraged to invest $2.4 billion in workforce training over the first five years.",
          "On planning, it says counties write a three-year County Integrated Plan for Behavioral Health Services and Outcomes, the first with a draft due March 31, 2026 and a final due June 30, 2026, covering all public behavioral health funding, informed by local stakeholder input, and an annual outcomes and transparency report, with the department able to impose corrective action plans. It states plainly that Proposition 1 does not raise taxes, that funding remains a 1 percent tax on personal income above $1 million, and that it makes no changes to the Lanterman-Petris-Short Act, the law that governs involuntary commitment, so it cannot be used to force people into treatment.",
          "The page also lists places a person can start. The 988 Lifeline, the CalHOPE line at (833) 317-4673 by call, text, or chat, two mobile apps for young people and families, and an addiction treatment locator. Confirm any of these before you send someone.",
        ] },
        { kind: 'concept', title: 'What is settled and what is not', text: [
          "The summary read for this course was written in March 2024, and it has been checked against the state agency's own pages, read on November 11, 2026. The structure is set by law, and implementation depends on state guidance, county plans, and budgets that change. The sources read for this course do not describe how Los Angeles County has implemented the changes or what programs have started. So this course does not tell you which Los Angeles County programs are new, closed, or funded. It tells you how the money is meant to be divided, and where to look.",
          "Where to look. The Los Angeles County Department of Mental Health site has a section on the Behavioral Health Services Act with announcements and stakeholder materials. The state's Behavioral Health Transformation pages publish the Proposition 1 materials. The California Behavioral Health Board and Commission, which wrote the summary, points to the state's behavioral health reform page. Local planning meetings are open to the public, and the advocacy course covers public comment as a way to be heard.",
        ] },
        { kind: 'concept', title: 'What this means for your work', text: [
          "Practice guidance for this course. Expect more attention to housing, early intervention for young people, and coordinated care in county plans, and expect to see these in the language of meetings and programs. Do not promise a person that a new program will be available or that a facility will open soon. Tell people what is available now, confirmed. If a person asks about new housing or services, say what you know, say that changes are underway, and offer to check with the county.",
          "Bring what you learn to the table. Workers see where services are missing. The planning process is meant to involve community stakeholders. Your program decides whether and how you take part. The advocacy course covers the rules for a nonprofit.",
        ] },
        { kind: 'concept', title: 'How to stay current', text: [
          "Practice guidance for this course. Subscribe to your county department's announcements. Keep the member handbooks of the plans your clients use. Attend or review notes from your program's partner meetings. Ask your supervisor to share state notices when they arrive. Keep your referral list dated. And when something changes, tell your team.",
          "Most important, build the habit from Lesson 1. Check before you tell. Say what you know, how you know it, and when you last confirmed it.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Behavioral Health Services Act', plain: "The renamed Mental Health Services Act, which now covers substance use disorders as well and divides county funds among housing, full service partnerships, and other services." },
          { term: 'Full Service Partnership', plain: "An intensive, comprehensive service for people with the most complex needs, one of the categories of county funding." },
          { term: 'Housing interventions', plain: "Housing services and supports for people with serious mental illness or substance use disorders who are homeless." },
          { term: 'Early intervention', plain: "Services that address mental health and substance use concerns early." },
          { term: 'Bond', plain: "Borrowed money, repaid over time, here used to build facilities and housing." },
        ] },
        { kind: 'myths', items: [
          { myth: "Proposition 1 created new services that are available now.", reality: "The bond funds construction, which takes years. The Act changes how county funds are divided, and services depend on county plans." },
          { myth: "Proposition 1 only deals with mental health.", reality: "Ballotpedia and the summary say it expanded the purpose to include substance use disorders." },
          { myth: "The percentages are fixed forever.", reality: "The state says each county may move up to 7 percent from one category to another, small counties may be exempt from the housing requirement, and implementation is governed by state guidance and county plans." },
          { myth: "I do not need to follow policy to do my job.", reality: "You do not need to be an expert. You do need to know enough to avoid promises and to know where to look." },
        ] },
        { kind: 'case', title: 'A question at a meeting', scenario: true, text: [
          "At a community meeting, a woman asks a worker whether the new money from Proposition 1 means there will be a place for her brother to stay. The worker does not say yes and does not say no. She says, a lot of that money is for housing and for treatment beds, and it will take time to build. I do not know whether a specific program is open yet. I can check with the county for you, and in the meantime I can help with what is available now. She writes down the woman's contact information with her permission, and calls the county's housing and mental health line the next day. She tells her what she was able to confirm and what she could not. She also tells her supervisor what she learned for the team's list.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q11',
          q: "According to Ballotpedia and the CalBHBC summary, what did Proposition 1 do?",
          options: [
            "It ended the Mental Health Services Act",
            "It renamed the Mental Health Services Act to the Behavioral Health Services Act and expanded its purpose to include substance use disorders, required 30 percent of the fund for housing interventions, and issued a $6.38 billion bond",
            "It created a new tax on all incomes",
            "It eliminated county mental health plans",
          ],
          answer: 1,
          rationale: "The sources describe the renaming and expansion, the 30 percent housing requirement, and the $6.38 billion bond. The tax on income above $1 million continues.",
          distractors: "The other answers misdescribe the measure.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhy-q12',
          q: "A person asks if a new facility funded by the Proposition 1 bond is open. What is the best answer?",
          options: [
            "Yes, it is open",
            "No, the bond is a scam",
            "Say that you do not know whether a specific program is open, that construction takes time, offer to confirm with the county, and help with what is available now",
            "Tell them not to ask",
          ],
          answer: 2,
          rationale: "A bond funds construction over years. A worker says what is confirmed, offers to check, and helps with what exists now, without promising.",
          distractors: "The other answers promise something unconfirmed or dismiss the person.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Where do you get news about behavioral health policy in your county? Is it reliable?",
          "What would you say to someone who has heard that new services are available?",
        ] },
        { kind: 'takeaways', items: [
          "Proposition 1 has two parts: a bond to build facilities and housing, and the Behavioral Health Services Act, which divides county funds among housing, full service partnerships, and other services including early intervention.",
          "Implementation takes time, and county details change. Do not promise services that are not confirmed.",
          "Stay current, and say what you know, how you know it, and when you last confirmed it.",
        ] },
        ev([
          "California Behavioral Health Board and Commission. Governor's Behavioral Health Modernization, Proposition 1 summary (March 2024). The bond, the Behavioral Health Services Act, the populations served, the allocation of funds, the planning and accountability changes, and the housing requirement. Read in full.",
          "Ballotpedia. California Proposition 1, Behavioral Health Services Program and Bond Measure (March 2024). The description of the measure and what a yes vote supported. Read in the overview. The page also contains unrelated election information that was ignored.",
          "Los Angeles County Department of Mental Health site navigation (read for the existence of a BHSA section). The county's Proposition 1 pages could not be read in full.",
          "California Department of Health Care Services. Proposition 1, An Overview, and Behavioral Health Services Act (pages read November 11, 2026). The bond of about $6.4 billion, the 30 percent housing share with half prioritized for long-term homelessness, the 35 and 35 and 30 percent county funding categories, the 51 percent early intervention rules, the 7 percent flexibility, the state shares of 4, 3, and 3 percent, the county integrated plans due in 2026, and the statement that Proposition 1 makes no changes to the involuntary commitment law.",
          "California Department of Health Care Services. CalAIM Behavioral Health Initiative (page read November 11, 2026). No Wrong Door, screening tools, mobile crisis, the January 2026 access criteria notice, and administrative integration by January 1, 2027.",
          "The guidance on what to say about new services and how to stay current is practice guidance written for this course.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-mhy-practice',
    title: 'Your behavioral health system and access practice file',
    minutes: 30,
    purpose: 'Five short pieces that you keep: a map of the system for your area, a current resource list with confirmation dates, a plan for a crisis, a script for helping someone make a first call, and a note on what you will check before you tell.',
    fields: [
      { id: 'map', label: 'Your map', help: 'Draw or list the parts of the behavioral health system you work with. For each, write who is responsible, how a person reaches it, and the number or website, with the date you last confirmed it.', multiline: true },
      { id: 'list', label: 'Your resource list', help: 'List ten resources you use. Include the county 24-hour line, 988, 211 LA, the substance use helpline, and the plans your clients use. For each, write the date you last confirmed it and what you confirmed.', multiline: true },
      { id: 'crisis', label: 'Your crisis plan', help: 'Write who you would call and in what order for four situations: immediate danger, suicidal thoughts without immediate danger, needing a county crisis team, and wanting substance use help. Add who in your program you tell and where you keep the numbers.', multiline: true },
      { id: 'call', label: 'A first call', help: 'Write what you would say to a person who is nervous about calling for services, how you would prepare them, and what you would write down during the call. Include a plan for following up.', multiline: true },
      { id: 'check', label: 'Check before you tell', help: 'Write what you will say when you are not sure whether a program is open or whether someone qualifies. Add the three sources you will check first, and one thing you will ask your supervisor to share with you regularly.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'National Health Law Program: An Advocate\'s Guide to Medi-Cal Services, Chapter IV, Mental Health Services (updated February 2026)', use: 'How Medi-Cal covers specialty and non-specialty mental health services, access criteria, No Wrong Door, crisis services, peer support, and reentry services.', url: 'https://healthlaw.org/wp-content/uploads/2026/05/NHeLP-MediCalServicesGuide-Ch4-2026.pdf' },
    { name: 'Los Angeles County Department of Mental Health: ACCESS Center', use: 'The 24-hour entry point for mental health services in the county.', url: 'https://dmh.lacounty.gov/?p=460' },
    { name: 'Los Angeles County Department of Public Health: Substance Abuse Prevention and Control', use: 'The substance use helpline, tools, and member information.', url: 'http://publichealth.lacounty.gov/sapc/' },
    { name: '988 Suicide and Crisis Lifeline: What to Expect', use: 'What happens when you call, text, or chat.', url: 'https://988lifeline.org/what-to-expect/' },
    { name: '211 LA', use: 'A locally based guide to services across Los Angeles County.', url: 'https://211la.org/' },
    { name: 'California Behavioral Health Board and Commission: Proposition 1 summary (March 2024)', use: 'A summary of the bond and the Behavioral Health Services Act.', url: 'https://www.calbhbc.org/uploads/5/8/5/3/58536227/proposition_1_bhiba_and_bhsa_summary_march_2024.pdf' },
    { name: 'Ballotpedia: California Proposition 1, Behavioral Health Services Program and Bond Measure (March 2024)', use: 'The measure as it appeared on the ballot and what a yes vote supported.', url: 'https://ballotpedia.org/California_Veterans_Housing_Bond_Measure_(March_2024)' },
  ],
};
