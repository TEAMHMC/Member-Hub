// Field-Based Community Health — Care Navigation and Coverage.
//
// This course is the `medi_cal_renewal_navigation` module, which the North Star
// document (section 16) assigns to the Community Health Outreach and Navigation
// track once a canonical program structure exists. The Academy is that
// structure, so it lands here.
//
// The lesson text is HMC approved copy and is reproduced verbatim. All policy
// language is quoted from DHCS, LA County DPSS, and Covered California and was
// verified on August 3, 2026. Do not paraphrase it, do not route it through any
// generator, and re-verify against the sources before each renewal season and
// before any large outreach push. Dates, dollar amounts, and county processes
// will change as DHCS and DPSS publish implementation guidance for the
// January 2027 community engagement requirement.

import type { Course } from './catalog';

export const CARE_NAVIGATION_COVERAGE: Course = {
  id: 'fbch-coverage',
  num: 1,
  title: 'Care Navigation and Coverage',
  promise:
    'Notice who is about to lose Medi-Cal, tell them what is changing without overpromising, and hand them to someone qualified.',
  about: [
    'Medi-Cal is changing in ways that will cause people to lose coverage if nobody tells them what is coming. Most people will find out through a letter they did not open or a deadline they did not know about.',
    'HMC volunteers are already in front of these community members at pop-ups, health fairs, and street medicine shifts. This course trains a narrow and specific skill: notice, inform, and connect. It does not authorize you to determine eligibility or to enroll anyone.',
  ],
  objectives: [
    'State what is changing in Medi-Cal in 2027 and the dates each change takes effect.',
    'Identify when someone is at risk of losing coverage they still qualify for.',
    'Run the coverage conversation in English or Spanish without making an eligibility determination.',
    'Explain the community engagement requirement honestly, including what HMC cannot promise.',
    'Hand off to the correct qualified professional for the situation in front of you.',
  ],
  minutes: 130,
  prerequisites: 'None for the knowledge content. Field application requires an approved HMC role and supervision.',
  whoFor:
    'Community health workers, promotoras, navigators, outreach volunteers, and anyone staffing an HMC table where a coverage conversation can happen.',
  lessons: [
    {
      id: "fbch-cov-l1",
      title: "Why This Module Exists",
      summary: "Why a ninety second conversation at a table can be the reason someone keeps their coverage.",
      minutes: 10,
      body: [
        "Medi-Cal is changing in ways that will cause people to lose coverage if nobody tells them what is coming. Most people will find out through a letter they did not open or a deadline they did not know about.",
        "HMC volunteers are already in front of these community members at pop-ups, health fairs, and street medicine shifts. A ninety second conversation at a table can be the reason someone keeps their health coverage.",
        "What you are being trained to do is narrow and specific: notice, inform, and connect. You are not being trained to enroll anyone or to decide whether anyone qualifies. That line matters, and Section 3 explains exactly where it sits.",
      ],
    },
    {
      id: "fbch-cov-l2",
      title: "What Is Actually Changing",
      summary: "The three changes that matter, with the exact dates. Getting a date wrong makes someone act too late.",
      minutes: 22,
      body: [
        "Three changes matter for the people we serve. Learn the dates. Getting a date wrong can cause someone to act too late.",
        "CHANGE 1: RENEWALS TWICE A YEAR\nDHCS states: \"Starting March 1, 2027, some Medi-Cal members will have their eligibility checked twice a year.\" This applies to adults ages 19 to 64 who are covered through the ACA expansion. DHCS warns: \"If you miss deadlines, you could lose your Medi-Cal coverage.\"",
        "What this means in plain terms: someone used to getting one renewal packet a year will start getting two. If they move and do not update their address, they miss it and coverage stops.",
        "CHANGE 2: WORK AND COMMUNITY ENGAGEMENT REQUIREMENT\nDHCS states this begins January 1, 2027 for adults ages 19 to 64 in the ACA expansion group. To keep coverage, a member must do one or more of the following:\n- \"Work at a job and earn at least $580 a month\"\n- \"Be in a job training program ... for at least 80 hours a month\"\n- \"Volunteer or do community service for at least 80 hours a month\"\n- \"Go to school at least half-time\"\n- \"Do a mix of the activities above so the total is at least 80 hours a month or at least $580\"",
        "DHCS warns: \"If you are required to meet the rules and do not, you could lose your Medi-Cal.\"",
        "Exemptions exist, including for people with disabilities and certain caregivers. You do not assess exemptions. LA County DPSS states: \"DPSS will let you know if these rules apply to you and how many hours you need to complete each month.\" That is the honest answer to give: the county tells you, and you should watch for that letter.",
        "CHANGE 3: ASSET LIMITS\nThrough June 30, 2027 the limit is \"$130,000 for one person\" plus \"$65,000 for every extra person.\" Starting July 1, 2027 it drops sharply to \"$21,000 for one person\" and \"$31,000 for two people.\" This mainly affects seniors 65 and older, people with disabilities, and certain income-based groups.",
        "Do not attempt to calculate anyone's assets. Mention that the rule is changing and connect them to a qualified professional.",
      ],
    },
    {
      id: "fbch-cov-l3",
      title: "Your Role and Its Hard Limit",
      summary: "The hard limit on your role. Read this section twice.",
      minutes: 18,
      body: [
        "READ THIS SECTION TWICE. It is the most important part of this module.",
        "YOU ARE NOT:\n- A Certified Enrollment Counselor\n- A county eligibility worker\n- An immigration advisor\n- A benefits attorney",
        "You are a trained community volunteer who knows what is changing and knows who to call.",
        "WHAT YOU DO:\n- Notice when someone may be at risk\n- Share what is changing, using the dates in Section 2\n- Tell them the single highest-value action: make sure the county has their current address\n- Connect them to a qualified professional from Section 6\n- Offer HMC volunteer opportunities if community service hours would help them",
        "WHAT YOU NEVER DO:\n- Tell someone they do qualify or do not qualify for Medi-Cal. Only the county decides.\n- Tell someone they are or are not exempt from the work requirement.\n- Fill out or submit a Medi-Cal application on someone's behalf.\n- Promise that HMC volunteer hours will be accepted toward the requirement. See Section 5.\n- Ask about, record, or speculate about anyone's immigration status.\n- Guess. If you do not know, say \"I do not want to guess on something this important, so let me get you to someone who does this every day.\"",
        "Saying \"I do not know, but I know who does\" is a successful interaction. It is not a failure.",
      ],
    },
    {
      id: "fbch-cov-l4",
      title: "The Conversation: Three Paths",
      summary: "One opening question and three branching paths, with the wording to use.",
      minutes: 20,
      body: [
        "This is the branching flow. It starts from one question you can ask naturally at any table or shift.",
        "OPENING QUESTION\n\"Do you have health coverage right now, like Medi-Cal?\"",
        "PATH A: \"No, I do not have insurance\"\nDo not screen them. Do not ask their income. Say:",
        "\"You may be able to get free or low cost coverage through Medi-Cal. I am not the person who decides that, but I can connect you with a certified counselor who does this for free, and they will walk you through it.\"",
        "Then offer a specific contact from Section 6. If they are ready now, help them save the number in their phone before they walk away. A number in a hand is worth more than a flyer in a bag.",
        "PATH B: \"Yes, I have Medi-Cal\"\nAsk two questions, in this order:",
        "Question 1: \"Has the county got your current mailing address?\"\nThis is the highest-value question in the entire module. Renewal packets arrive by mail. A wrong address is the single most common reason people lose coverage they still qualify for.\nIf unsure, direct them to BenefitsCal.com or DPSS at (866) 613-3777 to update it.",
        "Question 2: \"Have you gotten anything in the mail from Medi-Cal recently that you have not opened yet?\"\nIf yes, encourage them to open it today and respond by the date printed on it. DHCS advises members to \"Check your mail and respond quickly to Medi-Cal renewal packets.\"",
        "Then brief them on what is coming, using Section 2 dates. Keep it short and non-alarming:",
        "\"Starting in 2027 a couple of things change. Some people will renew twice a year instead of once, and some adults will need to show 80 hours a month of work, school, or volunteering. The county will send you a letter if it applies to you. The main thing you can do right now is make sure they have your correct address.\"",
        "PATH C: \"I have Medi-Cal and I am worried about the hours\"\nThis is where HMC has something real to offer. Go to Section 5.",
        "BOTH PATHS END THE SAME WAY\nAfter either path, ask:\n\"Would volunteer or job opportunities be useful to you?\"",
        "If yes, this is a warm handoff to HMC volunteer opportunities and the Event Finder, not a brochure. Get their name and the best way to reach them, and log it the way you log any other referral.",
      ],
    },
    {
      id: "fbch-cov-l5",
      title: "The 80 Hour Requirement and HMC Volunteering",
      summary: "Volunteering counts as a qualifying activity, and why you must not promise the county will accept it.",
      minutes: 16,
      body: [
        "This is the part volunteers get wrong most often, so be precise.",
        "WHAT IS TRUE:\nDHCS lists \"Volunteer or do community service for at least 80 hours a month\" as one of the qualifying activities. Community service is a recognized way to meet the requirement. Activities can also be combined to reach the 80 hour total.",
        "WHAT IS TRUE ABOUT HMC:\nHMC tracks volunteer participation and hours in the volunteer portal, and can produce a record of the hours someone served with us.",
        "WHAT YOU MUST NOT SAY:\nDo not tell anyone that their HMC hours will be accepted by the county toward the requirement. The county has not published its verification and reporting process yet. LA County DPSS currently states only that \"DPSS will let you know if these rules apply to you and how many hours you need to complete each month.\"",
        "Until the county publishes how hours get documented and accepted, the accurate framing is:",
        "\"Volunteering is one of the activities that can count. We track the hours you serve with us and we can give you a record of them. Exactly how the county wants those hours reported has not been published yet, so I do not want to promise you it will be accepted. What I can tell you is that the hours are real and we document them.\"",
        "That sentence is honest, useful, and protects both the member and HMC. Use it close to word for word.",
        "Why the caution matters: if someone volunteers 80 hours a month believing it secures their coverage, and the county rejects the documentation, that person loses their health insurance. Overpromising here has a real human cost.",
      ],
    },
    {
      id: "fbch-cov-l6",
      title: "Who to Connect People To",
      summary: "The five qualified professionals to hand off to, all free to the member.",
      minutes: 14,
      body: [
        "These are qualified professionals. Every one of these services is free to the member. Verified August 3, 2026.",
        "LOS ANGELES COUNTY DPSS (county eligibility, renewals, address changes)\nPhone: (866) 613-3777\nOnline: BenefitsCal.com\nIn person: any DPSS district office\nUse for: updating an address, renewal questions, application status, questions about whether the work requirement applies to them.",
        "COVERED CALIFORNIA CERTIFIED ENROLLMENT COUNSELORS (free application help)\nPhone: (800) 300-1506, TTY (888) 889-4500\nOnline: coveredca.com/support/find-an-enroller\nUse for: an uninsured person who needs someone to sit with them and help them apply. Counselors are certified and located throughout LA County. New applicants can also request a call back from a certified enroller.",
        "MEDI-CAL HELPLINE, DHCS\nPhone: (800) 541-5555\nHours: Monday to Friday, 8 a.m. to 5 p.m.\nUse for: general Medi-Cal questions and benefit questions.",
        "DHCS MEDI-CAL MANAGED CARE OMBUDSMAN\nPhone: (888) 452-8609\nEmail: mmcdombudsmanoffice@dhcs.ca.gov\nHours: Monday to Friday, 8 a.m. to 5 p.m. TTY 711 for California State Relay\nUse for: someone whose coverage was wrongly denied or stopped, or who is being ignored by their health plan. This is the escalation path when someone has already been harmed.",
        "HEALTH CARE OPTIONS (plan enrollment and plan changes)\nPhone: (800) 430-4263, TTY (800) 430-7077\nHours: Monday to Friday, 8 a.m. to 6 p.m.\nUse for: someone who has Medi-Cal but needs to pick or change their health plan.",
        "HOW TO HAND OFF WELL:\nDo not just recite a number. Say who they will be talking to and that it is free. \"There is a counselor whose whole job is helping people apply, and it does not cost anything. Do you want to save the number now?\"",
      ],
    },
    {
      id: "fbch-cov-l7",
      title: "What Never to Say",
      summary: "The phrases that cause real harm, each paired with what to say instead.",
      minutes: 14,
      body: [
        "These are the phrases that create real harm. Learn to catch yourself.",
        "NEVER SAY: \"You qualify for Medi-Cal.\"\nSAY INSTEAD: \"You may be eligible. A certified counselor can confirm that for free.\"",
        "NEVER SAY: \"You do not qualify.\"\nSAY INSTEAD: \"I am not the person who determines that. Let me get you to someone who can actually check.\"",
        "NEVER SAY: \"Your volunteer hours here will count.\"\nSAY INSTEAD: See Section 5 and use the wording provided there.",
        "NEVER SAY: \"You are exempt, do not worry about it.\"\nSAY INSTEAD: \"Exemptions do exist. The county will send you a letter about whether this applies to you. DPSS can tell you directly.\"",
        "NEVER SAY: \"You need to reapply right now or you will lose everything.\"\nSAY INSTEAD: Share the real date from Section 2. Do not manufacture urgency. Fear makes people avoid the process, not engage with it.",
        "NEVER ASK: anything about immigration or citizenship status.\nIf someone raises a concern about it themselves, do not speculate or reassure. Connect them to a Certified Enrollment Counselor or a legal services organization. Getting this wrong can cause serious harm to a family.",
        "IF SOMEONE IS ALREADY IN CRISIS:\nIf someone says they have already lost coverage and needs care now, do not troubleshoot the benefits question at the table. Get them to the Ombudsman at (888) 452-8609, and escalate to your shift lead so HMC can follow up.",
      ],
    },
    {
      id: "fbch-cov-l8",
      title: "Bilingual Scripts",
      summary: "Scripts in English and Spanish, written to be accurate and non-alarming.",
      minutes: 16,
      body: [
        "Use these close to word for word. They are written to be accurate and non-alarming.",
        "ENGLISH, OPENING\n\"Hi, we are with Health Matters Clinic. Medi-Cal has some changes coming in 2027 and a lot of people have not heard about them yet. Do you have Medi-Cal or any health coverage right now?\"",
        "ENGLISH, HAS MEDI-CAL\n\"The most useful thing I can tell you is this: make sure the county has your current mailing address. Renewal notices come by mail, and people lose coverage they still qualify for just because the letter went to an old address. You can update it at BenefitsCal.com or by calling (866) 613-3777.\"",
        "ENGLISH, NO COVERAGE\n\"You may be able to get free or low cost coverage through Medi-Cal. I am not the person who decides that, but there are certified counselors who help people apply for free. Can I give you that number?\"",
        "ENGLISH, VOLUNTEER HOURS\n\"Volunteering is one of the activities that can count toward the new requirement. We track the hours you serve with us and we can give you a record of them. Exactly how the county wants those hours reported has not been published yet, so I do not want to promise you it will be accepted.\"",
        "SPANISH, OPENING\n\"Hola, somos de Health Matters Clinic. Medi-Cal va a tener algunos cambios en 2027 y mucha gente todavia no se ha enterado. Tiene Medi-Cal o algun tipo de cobertura de salud ahora mismo?\"",
        "SPANISH, HAS MEDI-CAL\n\"Lo mas importante que le puedo decir es esto: asegurese de que el condado tenga su direccion actual. Los avisos de renovacion llegan por correo, y hay personas que pierden su cobertura solamente porque la carta llego a una direccion vieja. Puede actualizarla en BenefitsCal.com o llamando al (866) 613-3777.\"",
        "SPANISH, NO COVERAGE\n\"Es posible que usted califique para cobertura gratuita o de bajo costo por medio de Medi-Cal. Yo no soy la persona que decide eso, pero hay consejeros certificados que ayudan a las personas a solicitar, sin ningun costo. Le puedo dar el numero?\"",
        "SPANISH, VOLUNTEER HOURS\n\"El voluntariado es una de las actividades que puede contar para el nuevo requisito. Nosotros registramos las horas que usted sirve con nosotros y le podemos dar un comprobante de esas horas. Todavia no se ha publicado exactamente como el condado quiere que se reporten esas horas, asi que no le quiero prometer que se las van a aceptar.\"",
      ],
    },
  ],
  checks: [
    {
      id: 'fbch-cov-c1',
      q: 'A member tells you they make about $1,200 a month and asks if they still qualify for Medi-Cal. What do you do?',
      options: [
        'Estimate their eligibility from the income figure they gave you',
        'Tell them that amount is probably too high to qualify',
        'Do not answer the eligibility question, and connect them to DPSS or a Certified Enrollment Counselor',
        'Ask for their household size so you can work it out',
      ],
      answer: 2,
      why: 'You do not answer the eligibility question. Only the county decides. Connect them to DPSS or a Certified Enrollment Counselor. See section 3.',
    },
    {
      id: 'fbch-cov-c2',
      q: 'When do renewals move to twice a year, and who does it affect?',
      options: [
        'January 1, 2027, for all Medi-Cal members',
        'March 1, 2027, for some members, specifically adults 19 to 64 covered through the ACA expansion',
        'July 1, 2027, for seniors 65 and older',
        'March 1, 2027, for everyone with a managed care plan',
      ],
      answer: 1,
      why: 'DHCS states that starting March 1, 2027, some Medi-Cal members will have eligibility checked twice a year. It applies to adults 19 to 64 in the ACA expansion group. See section 2.',
    },
    {
      id: 'fbch-cov-c3',
      q: 'When does the work and community engagement requirement start, and what is the threshold?',
      options: [
        'March 1, 2027, and 40 hours a month',
        'January 1, 2027, and 80 hours a month of qualifying activity or earning at least $580 a month',
        'July 1, 2027, and 80 hours a month',
        'January 1, 2027, and $130,000 in assets',
      ],
      answer: 1,
      why: 'DHCS states this begins January 1, 2027 for adults 19 to 64 in the ACA expansion group, at 80 hours a month of qualifying activity or at least $580 a month earned. See section 2.',
    },
    {
      id: 'fbch-cov-c4',
      q: 'A member asks whether volunteering with HMC will count toward their 80 hours. What is your answer?',
      options: [
        'Yes, HMC hours are accepted by the county',
        'No, volunteering does not count',
        'Volunteering is a listed qualifying activity and HMC documents your hours, but the county has not published how hours must be reported, so do not promise it will be accepted',
        'Tell them to volunteer 80 hours and sort the paperwork out later',
      ],
      answer: 2,
      why: 'Community service is a listed qualifying activity and HMC tracks hours, but the county has not published its verification process. Overpromising here can cost someone their coverage. See section 5.',
    },
    {
      id: 'fbch-cov-c5',
      q: 'What is the single most useful thing you can tell a Medi-Cal member at a pop-up?',
      options: [
        'That they should reapply immediately',
        'That they should check whether they are exempt',
        'To make sure the county has their current mailing address',
        'That asset limits are dropping in 2027',
      ],
      answer: 2,
      why: 'Renewal packets arrive by mail, and a wrong address is the most common reason people lose coverage they still qualify for. See section 4, path B.',
    },
    {
      id: 'fbch-cov-c6',
      q: 'A member mentions they are worried about their immigration status affecting their application. What do you do?',
      options: [
        'Reassure them that it will not be a problem',
        'Ask which status they hold so you can advise correctly',
        'Do not speculate or reassure, and connect them to a Certified Enrollment Counselor or legal services',
        'Advise them not to apply',
      ],
      answer: 2,
      why: 'Never ask about or speculate on immigration status. Getting this wrong can cause serious harm to a family. Connect them to a Certified Enrollment Counselor or legal services. See section 7.',
    },
    {
      id: 'fbch-cov-c7',
      q: 'Someone says they already lost their coverage and needs to see a doctor. Who do you call?',
      options: [
        'The Medi-Cal Helpline',
        'Health Care Options',
        'The DHCS Managed Care Ombudsman at (888) 452-8609, and escalate to your shift lead',
        'Covered California',
      ],
      answer: 2,
      why: 'The Ombudsman is the escalation path when someone has already been harmed. Escalate to your shift lead so HMC can follow up. See section 7.',
    },
    {
      id: 'fbch-cov-c8',
      q: 'You are not sure of an answer. What should you do?',
      options: [
        'Give your best guess so the member leaves with something',
        'Say you do not want to guess on something this important, and connect them to someone qualified',
        'Tell them to search it online',
        'Answer with what you remember and note that you are unsure',
      ],
      answer: 1,
      why: 'Saying "I do not know, but I know who does" is a successful interaction, not a failure. See section 3.',
    },
  ],
  activity: {
    title: 'Applied activity: run the conversation',
    body: [
      'Write out how you would run the coverage conversation with one person you are likely to meet at an HMC table. Choose a real situation: someone uninsured, someone with Medi-Cal who has moved recently, or someone worried about the 80 hour requirement.',
      'Use the opening question and the path wording from the lessons. Name the specific qualified professional you would hand off to, and state what you would not say.',
    ],
    prompt:
      'Describe your person, the path you would take, your opening line, the handoff you would make, and one thing you would deliberately not say.',
  },
  sources: ['DHCS', 'DPSS', 'CoveredCA'],
};
