// Community Health Worker Pathway, Specialty Track: Coverage and Benefits Navigation.
//
// A blended specialty course (id chw_spec_navigation, 8 hours). Four lessons are read and worked through
// on your own. Four scheduled practice sessions are attended with a facilitator and a group. A practice
// file is completed and kept. The stated 480 minutes equal 4 lessons of 45 minutes, 4 sessions of 60
// minutes, and a 60 minute practice file.
//
// Every statement of fact was taken from a source opened and read on November 10 or 11, 2026. The sources
// are the California Department of Health Care Services' pages on Medi-Cal changes, keeping Medi-Cal, the
// fee-for-service transition, and immigration status and changes to Medi-Cal eligibility (read in a browser
// on November 11, 2026); the Department's January 2026 presentation on the Medi-Cal impact of the federal
// law H.R. 1 (read from a copy hosted by the State Assembly; it describes itself as preliminary guidance
// subject to change); the Alameda County Social Services Agency's page on Medi-Cal work and community
// engagement requirements, used as one county's description of how existing members will be screened; the
// Los Angeles County Department of Public Social Services page on CalFresh and Medi-Cal work requirements;
// the California Department of Social Services page on state hearing requests; and the County guide read
// for Foundations course 2.
//
// What was not read is said in the course. The Department's letters to counties on the work requirement and
// six-month renewals were named in the January 2026 presentation and were not read. The Los Angeles
// County page does not say how existing members will be screened, and the course says so. The state's
// premium amounts and details on asset limits and copayments were not on the pages read. Nothing in this
// course is legal advice, eligibility advice, or immigration advice. A community health worker helps
// people understand notices, gather proof, apply, renew, and ask for a hearing. The county decides
// eligibility. The scenes and character cards were written for this course and describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_SPEC_NAVIGATION: Course = {
  id: 'chw_spec_navigation',
  num: 21,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'blended',
  title: 'Specialty Track, Coverage and Benefits Navigation',
  promise:
    "Explain the new Medi-Cal work and renewal rules in plain words, screen for exemptions, help people meet and prove the requirement, read a notice, meet a deadline, ask for a state hearing, and make warm handoffs when a case is beyond your role.",
  about: [
    "A letter arrives and a person does not open it. A renewal packet sits on a counter for two weeks. A person does not know that hours of volunteering at a nonprofit can count. Most people who lose health coverage do not lose it because they are ineligible. They lose it because paper did not move. Coverage navigators close that gap.",
    "It rests on the state's own pages on Medi-Cal changes, the state's January 2026 presentation on the federal law that is changing Medi-Cal, one county's description of how members will be screened, the Los Angeles County Department of Public Social Services page on work requirements, the state's page on hearing requests, and the state's chart of immigration status and Medi-Cal. The rules are changing on a published schedule, and some sources differ. This track teaches you to check before you tell.",
    "It is the Coverage and Benefits Navigation specialty track of HMC's community health worker pathway. Learners choose one specialty track. You read four lessons, attend four practice sessions, and complete a practice file. The sessions are practice with a facilitator, and every scene in them is invented. Nothing here is legal, eligibility, or immigration advice.",
  ],
  objectives: [
    "Explain the Medi-Cal work and community engagement requirement and six-month renewals in plain words, including who is covered and who is exempt.",
    "Help a person meet and prove the requirement, and know what counts and how it is reported.",
    "Read a notice, find the deadline, and help a person respond on time.",
    "Explain how to ask for a state hearing and what the deadlines are, and know when to hand off to legal help.",
    "Describe the main changes for people with different immigration statuses without giving immigration advice, and point to the state's chart.",
    "Make warm handoffs to eligibility workers, legal help, and community partners, and document what you did.",
  ],
  minutes: 480,
  prerequisites:
    "Public Health, Medi-Cal, and Social Programs, Service Coordination and Navigation, Communication, Professional Conduct, Ethics, and Safety, and Advocacy.",
  whoFor:
    "Community health workers and benefits navigators who help people apply for, keep, and understand Medi-Cal, CalFresh, and related programs.",
  freshness:
    "Medi-Cal rules are changing in stages through 2028. The state's pages and county pages were read on November 10 and 11, 2026, and the state's presentation on the federal law is from January 2026 and describes itself as preliminary. Dates and details may change. Check the Department of Health Care Services Medi-Cal changes page and your county before you tell anyone a date, a limit, or a deadline.",
  modality: 'virtual',
  requirements: [
    { id: 'nv-l1', label: 'Complete Lesson 1, The new Medi-Cal rules', kind: 'assignment' },
    { id: 'nv-l2', label: 'Complete Lesson 2, Meeting and proving the requirement', kind: 'assignment' },
    { id: 'nv-l3', label: 'Complete Lesson 3, Notices, deadlines, and hearings', kind: 'assignment' },
    { id: 'nv-l4', label: 'Complete Lesson 4, Special situations and handoffs', kind: 'assignment' },
    { id: 'nv-s1', label: 'Attend Session 1, The exemption conversation', kind: 'attend' },
    { id: 'nv-s2', label: 'Attend Session 2, Hours and proof', kind: 'attend' },
    { id: 'nv-s3', label: 'Attend Session 3, The notice and the hearing', kind: 'attend' },
    { id: 'nv-s4', label: 'Attend Session 4, Hard cases and handoffs', kind: 'attend' },
    { id: 'nv-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-nv-l1',
      title: 'The new Medi-Cal rules',
      summary: 'Who the work and community engagement requirement covers, what meets it, who is exempt, how the state will check, and six-month renewals.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "A man in his forties who works part time and has full Medi-Cal asks you whether he is going to lose it. A mother of three asks the same. A woman recovering from surgery asks the same. The honest answer is different for each of them, and the right first step is a few good questions. You cannot give that answer without understanding the rule.",
          "This lesson draws on the California Department of Health Care Services' January 2026 presentation on the Medi-Cal impact of the federal law H.R. 1, on one county's description of how the requirement will work for existing members, on the Los Angeles County Department of Public Social Services page on work requirements, and on the state's Medi-Cal changes page. The presentation describes its guidance as preliminary and subject to change as federal guidance evolves. Read it as a map, and check the current rule before you tell anyone.",
        ] },
        { kind: 'concept', title: 'Who is covered', text: [
          "The state's presentation says the federal law requires states to condition Medicaid eligibility on work rules, which it calls community engagement requirements, for adults 19 through 64. The rule applies to adults in the group the state calls the new adult group, adults who became eligible under the Affordable Care Act expansion. The Alameda County Social Services Agency describes that group as adults 19 to 64 with no children and income up to 138 percent of the federal poverty level, and adults with children whose income is between 109 and 138 percent. The effective date in the presentation is January 1, 2027. The state's Medi-Cal changes page lists work rules for adults 19 to 64 in January 2027, with six-month renewals in March 2027.",
          "The state's presentation estimated how much is at stake. It estimated that up to 233,000 members could lose coverage by June 2027, 1 million by January 2028, and 1.4 million by June 2028, and said all numbers are estimates and subject to change. Its own planning assumption for people the state cannot verify automatically is that half would be disenrolled because they do not return verifications or do not comply. That is a planning assumption and not a prediction, but it tells you where the loss is expected to happen. It is in paperwork.",
        ] },
        { kind: 'concept', title: 'What meets the requirement', text: [
          "The presentation lists four ways to meet the requirement. Have monthly income of at least 80 times the federal hourly minimum wage, which it gives as $580, or employment of 80 hours a month, with seasonal work averaged over the last six months. Do community service for 80 hours a month. Be enrolled at least half time in an educational program. Or take part in a work program for 80 hours a month. Alameda County adds that a person who does not meet any one activity can combine work, community service, job training, and class or school activity hours to reach 80 hours, and that people with hours that change often or seasonal jobs can average $580 a month from any source over six months.",
          "Alameda County also says that when a person applies, the county looks at the month before the month of application, and that at renewal it looks at any of the months since the last redetermination. It adds that people who do not comply will not be eligible for subsidized coverage through Covered California. The Los Angeles County page says the requirement for Medi-Cal begins January 1, 2027, and that the Department of Public Social Services will let a person know whether the rules apply and how many hours they need. It does not say how existing members will be screened. One county's page, Alameda, says new applications received on or after January 1, 2027 will be screened, and current members will be screened at their next annual renewal due in March 2027 or later. Ask your county or program which applies in Los Angeles.",
        ] },
        { kind: 'concept', title: 'Who is exempt', text: [
          "The presentation lists mandatory exemptions. They include children under 19, people eligible for another mandatory eligibility group, foster youth and former foster youth under 26 who were in foster care on their 18th birthday, parents and other caretaker relatives, pregnant women and those entitled to postpartum coverage, people who receive Supplemental Security Income, and people entitled to Medicare Part A or Part B. It also lists American Indians and Alaska Natives, parents or caretaker relatives of a child 13 or younger, parents or caretakers of a person with a disability, veterans with a disability rated as total, medically frail people or those with special medical needs, people who meet work requirements of the cash aid program for families, people who are not exempt from the food assistance work rules, people participating in a drug or alcohol treatment program, and people who are incarcerated or were released within the past 90 days.",
          "It also lists short-term hardship exemptions. They include living in a county affected by a federally declared emergency or disaster, living in a county with a high unemployment rate, receiving inpatient hospital, nursing facility, or inpatient psychiatric care or services of similar acuity, and traveling for an extended period for medically necessary care that is not available in the person's community. The presentation says some of these are only available if the person asks. It says exemptions must be verified every six months. Alameda County says that at application the county looks for an exemption in the month of application or the month before, and that at renewal it looks at any of the months since the last redetermination.",
          "Practice guidance for this course. Do not decide that a person is or is not exempt. Ask the questions that surface the possibilities, and tell the person that the county decides. The questions are simple. Do you care for a child 13 or younger? Do you care for someone with a disability? Are you pregnant or recently had a baby? Do you receive SSI, Medicare, or cash aid for families? Are you in a substance use treatment program? Have you been in the hospital or a care facility? Are you a veteran with a disability rating? Were you in foster care at 18? Were you released from jail or prison in the last 90 days? Are you American Indian or Alaska Native? Does a health condition limit what you can do?",
        ] },
        { kind: 'concept', title: 'How the state plans to check', text: [
          "The presentation describes a verification hierarchy in five steps, built to use data before it asks the person. First it looks at the person's eligibility category and application or renewal information. Second it looks at hardship exemptions that can be checked electronically. Third it looks for exemptions using other data sources. Fourth it checks income and hours from data sources such as state quarterly wage data and IRS data, and, beginning with January 2027 applications and renewals, a commercial payroll database. Fifth, it asks the person for information to show they comply or are exempt. The presentation says this approach aims to minimize burden and request documents only when necessary, and that the state is still working out how to treat people with gig work.",
          "The presentation estimated that about 1.8 million people would be shown exempt or compliant by data alone, and about 2.8 million could not be shown that way. Those are the people who will get a request. They are the people you will meet. And for them the request is the thing to answer.",
        ] },
        { kind: 'concept', title: 'Six-month renewals', text: [
          "The presentation says that the federal law requires states to redetermine eligibility for expansion adults every six months, instead of every twelve, beginning January 1, 2027, with tribal members, pregnant and postpartum people, and children excluded. It says the process will largely mirror existing renewals, with automated checks first, verification requests, and reminder notices, and that the state is updating and streamlining the renewal form. The state's Medi-Cal changes page lists six-month renewals in March 2027. The date difference between the federal effective date and the state page is an example of why you check.",
          "The state's page on keeping Medi-Cal gives the basics for every member. Tell the county within 10 days if anything in your life changes. Each year the county sends a letter that says whether the person has to do anything. Log in to BenefitsCal to find the due date and to see notices. And call or visit the county office for help.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Work and community engagement requirement', plain: "The rule that some adults must work, volunteer, study, or take part in a work program for 80 hours a month, or earn $580, unless exempt." },
          { term: 'New adult group', plain: "Adults 19 to 64 who gained Medi-Cal under the Affordable Care Act expansion." },
          { term: 'Exemption', plain: "A reason a person does not have to meet the requirement." },
          { term: 'Redetermination', plain: "The county's check of whether a person still qualifies, also called a renewal." },
          { term: 'BenefitsCal', plain: "The state's website where people apply, see notices, upload documents, and find renewal dates." },
        ] },
        { kind: 'myths', items: [
          { myth: "Everyone on Medi-Cal has to work.", reality: "The requirement applies to adults 19 to 64 in the new adult group, and many people are exempt. Most Medi-Cal members will not see any changes, according to the state's page." },
          { myth: "A person has to have a paid job.", reality: "The presentation lists community service, school, and work programs as ways to meet it, and Alameda County says hours can be combined." },
          { myth: "If a person does not respond, nothing happens.", reality: "The state's own plan assumes many people it cannot verify by data will be disenrolled for not returning verification." },
          { myth: "I can tell someone whether they are exempt.", reality: "The county decides. You ask questions, help gather proof, and tell the person what to expect." },
        ] },
        { kind: 'case', title: 'A man who works part time', scenario: true, text: [
          "A man tells a navigator he works about 15 hours a week at a car wash and does not know whether he will keep Medi-Cal. The navigator asks questions without deciding anything. He does not care for a child or a disabled relative. He is not on SSI or Medicare and he is not pregnant. He says he has been sober for a year and goes to a weekly group at a clinic. The navigator explains what the rule says in plain words. Hours at work count, and about 15 hours a week is roughly 65 hours a month, so he might combine other hours such as volunteering or class. She explains that the county decides, and that the group may matter for exemption but she does not know how the county will treat it. She writes down what he said, tells him what proof to start keeping, and asks permission to call the county with him.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-nv-q1',
          q: "According to the state's January 2026 presentation, which of these meets the Medi-Cal work and community engagement requirement for a person who is not exempt?",
          options: [
            "Only a full-time paid job",
            "Income of at least $580 a month or 80 hours of work, 80 hours of community service, half-time school, or 80 hours in a work program",
            "Only a letter from a doctor",
            "Nothing, because the requirement does not exist",
          ],
          answer: 1,
          rationale: "The presentation lists income of at least 80 times the federal minimum wage ($580) or 80 hours of employment, 80 hours of community service, at least half-time education, or 80 hours in a work program. Alameda County adds that hours may be combined.",
          distractors: "The other answers are too narrow or wrong.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-nv-q2',
          q: "A person asks whether they are exempt. What is the right response from a navigator?",
          options: [
            "Tell them they are exempt because they look unwell",
            "Ask the screening questions, explain the listed exemptions, help them gather proof, and tell them the county decides",
            "Tell them they are not exempt and must find a job",
            "Refuse to discuss it",
          ],
          answer: 1,
          rationale: "Exemptions are listed in the state's guidance and verified by the county. A navigator surfaces possibilities, helps with proof, and explains that the county decides.",
          distractors: "The other answers decide for the person or turn them away.",
        } },
        { kind: 'reflect', title: 'Your own explanation', prompts: [
          "How would you explain the rule to a neighbor in three sentences?",
          "Which exemption question would be hardest for you to ask with respect, and how would you ask it?",
        ] },
        { kind: 'takeaways', items: [
          "The rule covers adults 19 to 64 in the new adult group, and many people are exempt.",
          "Four ways to meet it. Income, hours of work, community service, school or a work program, and hours may be combined.",
          "You ask, you gather proof, and the county decides. Check the current rule and say as of when.",
        ] },
        ev([
          "California Department of Health Care Services. Enacted H.R. 1 Reconciliation Legislation, Medi-Cal Impact Update (January 2026), read from a copy hosted by the State Assembly. The requirement, the effective date, the ways to meet it, the exemptions, the verification steps, the estimates, and six-month renewals. The presentation calls the guidance preliminary and subject to change.",
          "Alameda County Social Services Agency. Medi-Cal Work and Community Engagement Requirements. One county's description of who is covered, how hours may be combined, the look-back months, when existing members will be screened, and the effect on Covered California subsidies.",
          "Los Angeles County Department of Public Social Services. CalFresh and Medi-Cal Work Requirements (read November 11, 2026). The January 1, 2027 start and the statement that the Department will say whether the rules apply.",
          "California Department of Health Care Services. Medi-Cal Changes and Keep Your Medi-Cal pages (read November 11, 2026). The schedule and the basics for keeping coverage.",
          "The screening questions, the advice not to decide for a person, and the scene are practice guidance written for this course. The scene describes no real person. This lesson is not legal or eligibility advice.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-nv-l2',
      title: 'Meeting and proving the requirement',
      summary: 'Activities that count, how hours are verified in Los Angeles County, forms and uploads, finding a worksite, and the food assistance work rules.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "Meeting the requirement is one thing. Proving it is another. A person who volunteers 80 hours a month but cannot show it may be treated as though they did not. Much of your work will be helping people choose an activity, get it verified, and get the proof to the county.",
          "This lesson draws on the Los Angeles County Department of Public Social Services page on CalFresh and Medi-Cal work requirements, which describes how people verify hours of workfare, community service, and employment and training, and on the state's presentation and Alameda County's page for what counts. The county page is mostly about the food assistance rules that started June 1, 2026, and says the same approaches apply to Medi-Cal starting January 1, 2027. It says the Department will tell people what they need to do. Details for Medi-Cal may change.",
        ] },
        { kind: 'concept', title: 'Choosing an activity', text: [
          "The county page lists ways to meet work requirements through work, workfare, community service, or employment and training. Workfare is volunteering at a public or private nonprofit agency in Los Angeles County, with monthly verification. Starting June 1, 2026, the page says, people can find a worksite of their choosing, as long as it is a public or private nonprofit that can verify their hours. Community service or volunteer work is unpaid volunteering at a nonprofit, 20 hours a week or an average of 80 hours a month. Employment and training programs include education, job retention, self-employment training, and approved workforce programs, also 20 hours a week or 80 hours a month. The county page notes that workforce programs are available at America's Job Centers of California.",
          "Practice guidance for this course. Help a person choose an activity that fits their life, not just the first one. Ask about health, transportation, caregiving, a schedule, and their strengths. A person with a bad back, no car, and a child at home has different options than a person with a weekend available. For someone who is already doing something, such as caring for a relative or attending a group, ask whether it fits an exemption or counts. Do not promise that it does.",
        ] },
        { kind: 'concept', title: 'Verifying hours', text: [
          "The county page says people must verify their hours every month. For workfare, it names the PA 811, Workfare Assignment and Attendance Verification Form, signed by the worksite supervisor. For community service, it names the CF 888, Able-Bodied Adults without Dependents Volunteer Work Hours Verification Form. For employment and training programs it names the ABP 4082, Employment, Training, and Education Verification Form, and says the completed form must be returned within 10 days. The page says the organization may provide another form of verification, but it must give similar information. It also says the county may accept a written or verbal statement from a representative of the organization that includes the organization's name and contact information, the representative's signature, the number of hours completed in the month, and whether the assignment will continue for the next month or was one-time only.",
          "People can submit verification through their BenefitsCal account, by mail, or in person at a county office. The county's customer service number, as listed on the page, is (866) 613-3777.",
          "The page repeats a warning that matters. It says it is up to the person to confirm that an organization is accepting volunteers, that the activity can meet the requirement, and that the organization can verify the hours. The county does not guarantee that opportunities will be available at any site listed. So help a person ask three things before they start. Are you accepting volunteers? Will this count toward the requirement? Can you sign a form that verifies my hours each month?",
        ] },
        { kind: 'concept', title: 'Keeping good records', text: [
          "Practice guidance for this course. Help a person start a simple monthly log on the first day. A calendar or a notebook with the date, the place, the hours, and a name and phone number for the person who can confirm. Take a photo of every signed form and every pay stub before handing it over. Keep a copy of anything uploaded, and write down the date it was uploaded. If a person works for cash or does gig work, help them write down what they earned each week and who paid them, because the state said it is still deciding how to verify gig income.",
          "Make a short list for the person of what to bring to each contact and who to ask. If a person has trouble reading or using a phone, offer to sit with them and do the upload together, with their permission. Always explain what you are sending before you send it. Everything you learned about consent and privacy in your earlier courses applies.",
        ] },
        { kind: 'concept', title: 'The food assistance work rules and Covered California', text: [
          "The county page says that in California, work requirements for the food assistance program, CalFresh, began June 1, 2026, and for Medi-Cal begin January 1, 2027. It says work requirements generally apply to people who are able to work and do not qualify for an exemption, and that the Department will say what a person needs to do and how to report hours. A person who receives both programs may be juggling two sets of rules. Ask which notice a person received, and what each says.",
          "Alameda County says that people who do not comply with the Medi-Cal requirement will not be eligible for subsidized coverage through Covered California. That means a person who loses Medi-Cal for non-compliance may not have an easy fallback. This is one more reason to help people meet and prove the requirement before a deadline, and to hand off a person who is losing coverage to someone who can look at all of their options.",
        ] },
        { kind: 'concept', title: 'What you do not do', text: [
          "You do not tell a person to say they volunteered when they did not. You do not sign a form for hours you did not witness. You do not promise an outcome. If a person is unable to meet the requirement and may qualify for an exemption, help them explain their situation to the county and gather proof, and if the person disagrees with a decision, help them ask for a hearing, which the next lesson covers. If your program or your organization is itself a place where people volunteer, follow your program's rules about who may sign verification, and never sign for a person you supervise unless you are authorized.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Workfare', plain: "Volunteering at a public or private nonprofit agency to meet a work requirement, with monthly verification." },
          { term: 'Verification form', plain: "A signed form from the place where hours were completed, showing the hours." },
          { term: 'CF 888 and PA 811', plain: "County forms for verifying community service and workfare hours." },
          { term: 'BenefitsCal', plain: "The website for submitting documents and seeing notices." },
          { term: 'Look-back month', plain: "A month before an application or renewal that the county checks." },
        ] },
        { kind: 'myths', items: [
          { myth: "Any volunteering counts.", reality: "The county page says the person must confirm that the activity can meet the requirement and that the organization can verify the hours." },
          { myth: "If the hours are real, I do not need the form.", reality: "The county requires monthly verification, with a signed form or a statement that includes the organization's name, contact, signature, and hours." },
          { myth: "A person can wait to gather proof until the renewal.", reality: "Hours must be verified every month. Waiting makes proof harder to get." },
          { myth: "If I help someone fill in hours, I can sign for them.", reality: "Never sign for hours you did not witness. Only the worksite supervisor or authorized representative signs." },
        ] },
        { kind: 'case', title: 'A volunteer site that will not sign', scenario: true, text: [
          "A woman has been volunteering at a food pantry for a month. She tells her navigator that the pantry manager said he is too busy to sign forms. The navigator does not tell her to count the hours anyway. She explains that the county page says the organization must be willing to verify. She role-plays with the woman how to ask the manager for a written statement that includes the organization's name, contact, signature, the hours, and whether the assignment will continue. The woman asks the next day, and the manager writes a short statement. The navigator shows her how to take a photo and upload it, and helps her start a monthly log.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-nv-q3',
          q: "According to the Los Angeles County Department of Public Social Services page, what should a person confirm before volunteering to meet a work requirement?",
          options: [
            "Nothing, because the county confirms it",
            "That the organization is accepting volunteers, that the activity can meet the requirement, and that the organization can verify the hours",
            "That the organization is a for-profit business",
            "That the organization is outside Los Angeles County",
          ],
          answer: 1,
          rationale: "The page says it is up to the person to confirm that the organization is accepting volunteers, that the activity can meet the requirement, and that the organization can verify the hours completed.",
          distractors: "The other answers are wrong or leave the person unprotected.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-nv-q4',
          q: "A volunteer site cannot sign a form this month. Which is an accurate next step based on the county page?",
          options: [
            "Count the hours anyway and say nothing",
            "Ask the organization for a written or verbal statement that includes its name and contact, a signature, the hours completed, and whether the assignment will continue",
            "Make up a form",
            "Stop volunteering and give up",
          ],
          answer: 1,
          rationale: "The county page says other forms of verification may be accepted if they give similar information, including a statement with the organization's name and contact, signature, the number of hours, and whether the assignment continues.",
          distractors: "The other answers are dishonest or abandon the effort.",
        } },
        { kind: 'reflect', title: 'Your own care', prompts: [
          "How will you remind yourself never to sign for hours you did not witness?",
          "What question would you ask to find an activity that fits a person's life?",
        ] },
        { kind: 'takeaways', items: [
          "Help a person pick an activity that fits their life and confirm it can count and be verified.",
          "Hours are verified every month. Keep a log, photos, and copies.",
          "Never sign for hours you did not witness, and never promise an outcome.",
        ] },
        ev([
          "Los Angeles County Department of Public Social Services. CalFresh and Medi-Cal Work Requirements (read November 11, 2026). The activities, the forms, the monthly verification, the statement contents, the ways to submit, the warning to confirm with the organization, and the start dates. The page is mostly about the food assistance rules.",
          "California Department of Health Care Services. Medi-Cal Impact Update (January 2026). What counts toward the Medi-Cal requirement and the state's work on gig income.",
          "Alameda County Social Services Agency. Medi-Cal Work and Community Engagement Requirements. Combining hours and the effect on Covered California.",
          "The record keeping, the choice of activity, and the scene are practice guidance written for this course. The scene describes no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-nv-l3',
      title: 'Notices, deadlines, and hearings',
      summary: 'Reading a notice, meeting deadlines, the state hearing process, managed care appeals, and when to hand off to legal help.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "A notice is a decision. It says what the county did, why, and what the person can do about it, usually by a date. People who do not read it, or who read it and feel they cannot fight it, lose coverage they could have kept. You can teach a person to read it in five minutes.",
          "This lesson draws on the California Department of Social Services page on state hearing requests, read on November 11, 2026, on the state's pages on keeping Medi-Cal, and on the County guide read in Foundations course 2. It does not teach you to represent anyone at a hearing. It teaches you to read, to count, and to help a person ask.",
        ] },
        { kind: 'concept', title: 'How to read a notice', text: [
          "Practice guidance for this course. Read a notice with the person in five steps. First, find the date it was mailed, and write it at the top. Second, find what the county decided, in the notice's own words. Third, find the reason. Fourth, find what the person can do and by when. Fifth, find the rights section, which is usually on the back, and the phone number and address. The state's page on hearings says the Request for State Hearing form is on the back of the Notice of Action.",
          "Then say it back in plain words. Your coverage ends on this date because the county says you did not return this form. You can send the form or ask for a hearing, and here is the date. Ask the person whether that matches what they know. If they do not recognize it, ask what is different.",
        ] },
        { kind: 'concept', title: 'Keeping Medi-Cal, the basics', text: [
          "The state's page on keeping Medi-Cal says the person should tell the county within 10 days if anything in their life changes, and that each year the county sends a letter saying whether they must do anything. It gives three kinds of letter, an auto renewal letter, a renewal form, and a Medi-Cal ended notice. A person who did not get a letter can log in to BenefitsCal to find out when they must renew. The County guide read in Foundations course 2 gives two clocks that matter. After coverage ends over a late renewal or missing paperwork, a person has 90 days to reactivate. After a work requirement notice, a person has 30 days to respond before coverage is affected. Check the notice itself, because it names the date that applies.",
        ] },
        { kind: 'concept', title: 'The state hearing', text: [
          "The California Department of Social Services says that if a person disagrees with an action taken by the county or the Department of Health Care Services, or with an eligibility determination made by Covered California, the person has 90 days to request a state hearing, and after 90 days must show a good reason for asking late. It says that a temporary extension, effective April 1, 2023 and in effect until further notice, gives members 120 days from the date the notice of action is mailed to request a hearing on a redetermination of Medi-Cal eligibility. The extension covers terminations, reductions from full benefits to limited benefits, and increases in what a person must contribute toward their care. It does not apply to new Medi-Cal applications, medical exemption requests, or hearing requests related to a request for a particular treatment or service.",
          "So the clocks depend on what kind of action it was. A person whose coverage was ended at renewal may have 120 days. A person whose application was denied has 90. Do not memorize which is which. Read the notice and the state's page, and tell the person the earliest date that could apply. When in doubt, ask for the hearing sooner.",
          "The page lists the programs for which a person can ask for a hearing. They include Medi-Cal eligibility and benefits, CalFresh, cash aid for families, Covered California, in-home supportive services, and others. It says a person can ask when they have applied for or receive a program and get a notice denying or reducing benefits, or when the county did not act on what they turned in.",
        ] },
        { kind: 'concept', title: 'Appeals with a health plan', text: [
          "For a decision made by a Medi-Cal managed care plan, the state's page says a person generally must first file an appeal with the plan, within 60 calendar days of the date of the notice of action. If the plan's appeal does not resolve the issue, the person has 120 calendar days from the date of the plan's Notice of Appeal Resolution to request a state hearing. The person may also request a hearing if they filed an appeal with the plan and have not received a resolution within 30 days.",
          "This is a different path from an eligibility decision by the county. When a person says Medi-Cal denied a service, ask who made the decision. If it was the health plan, the path starts with the plan's appeal. If it was the county ending coverage, the path is the state hearing.",
        ] },
        { kind: 'concept', title: 'How to ask for a hearing', text: [
          "The page gives three ways. Online, through a link on the page. By phone to the State Hearings Division at (800) 743-8525, which the page says is also the way to ask for an expedited hearing. Or in writing, by completing the Request for State Hearing on the back of the Notice of Action or by writing a request on a separate sheet, and sending it to the county welfare department at the address on the notice or by mail to the State Hearings Division in Sacramento. The page lists what to include, the person's full name, address, and telephone number, the name of the county that took the action, the program involved, and a detailed reason for wanting a hearing. If the person has trouble understanding English, they should say so and give their language so help can be arranged. If they have an authorized representative, they should give that person's name and address. The page says it is always a good idea to keep a copy of the request.",
          "Practice guidance for this course. Sit with the person and help them write the reason in their own words. Make a copy before sending. Write down the date and how it was sent. Put the date they asked for the hearing on their calendar. Ask whether they want you or someone else named as an authorized representative, and follow your program's rule on whether staff may act in that role. Do not argue the case for them unless you are trained, authorized, and permitted to. A hearing is a legal process.",
        ] },
        { kind: 'concept', title: 'When to hand off to legal help', text: [
          "Some situations call for an advocate or attorney. The county denies a person with a disability, a person has an immigration question, a notice is confusing and the deadline is near, the person has already lost a hearing, or you are unsure. The state's page on immigration status and Medi-Cal lists the Health Consumer Alliance at (888) 804-3536 as a source of legal help. Confirm the number and what they handle before you refer. Your program may also have its own legal partners. A warm handoff here means calling together, saying what is happening and the deadline, and writing down the name of the person you spoke with.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Notice of action', plain: "A letter from the county or plan that says what was decided and how to respond." },
          { term: 'State hearing', plain: "A hearing before the state when a person disagrees with a county action." },
          { term: 'Expedited hearing', plain: "A faster hearing that may be requested by phone." },
          { term: 'Authorized representative', plain: "A person the member names to act for them." },
          { term: 'Plan appeal', plain: "The first step when a managed care plan decides something the person disagrees with." },
        ] },
        { kind: 'myths', items: [
          { myth: "Once a notice comes, there is nothing to do.", reality: "The state's page gives a person time to request a hearing, and the notice names what else can be done." },
          { myth: "A person always has 90 days.", reality: "The state's page gives 90 days generally, 120 days from mailing for hearings on redetermination actions under a temporary extension, and 60 and 120 days on the plan appeal path. Read the notice." },
          { myth: "A health plan denial goes straight to a state hearing.", reality: "The page says a person generally must first appeal to the plan." },
          { myth: "A navigator can argue the case at the hearing.", reality: "Not unless trained, authorized, and permitted. Hand off to legal help when needed." },
        ] },
        { kind: 'case', title: 'A notice on the counter', scenario: true, text: [
          "A man shows a navigator a notice his sister had put aside for three weeks. His coverage is ending because the county says it did not receive a renewal form. The navigator reads it with him in five steps. It was mailed on a date 31 days ago. The reason is a missing form. It says he can return the form or ask for a hearing. The navigator calls the county with him and asks whether they can still accept the form. While they wait, she tells him the state's page gives members extra time to ask for a hearing on renewal actions, and that she will confirm the date against the notice. She helps him write down the name of the person at the county and the time of the call. She makes a copy of the notice and puts the earliest date on his calendar. She does not promise that the coverage will continue.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-nv-q5',
          q: "According to the California Department of Social Services page, how long does a person have to request a state hearing on an action by the county?",
          options: [
            "Seven days",
            "Generally 90 days, and 120 days from the date the notice is mailed for hearings about Medi-Cal redetermination actions under a temporary extension, with different time frames for a managed care plan appeal",
            "One year in every case",
            "There is no deadline",
          ],
          answer: 1,
          rationale: "The page says 90 days generally, with a temporary extension to 120 days from mailing for redetermination-related hearing requests, and 60 days to appeal to a plan, then 120 days to request a state hearing after the plan's resolution.",
          distractors: "The other answers are not what the page says.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-nv-q6',
          q: "A person says Medi-Cal denied a service. What is the best first question for a navigator?",
          options: [
            "Which hospital did you go to",
            "Who made the decision, the county or the health plan, because the path differs. A plan decision generally starts with an appeal to the plan, and a county eligibility decision goes to the state hearing path",
            "Do you have a lawyer",
            "Did you pay for it",
          ],
          answer: 1,
          rationale: "The page says a person generally must first appeal to their managed care plan for a plan action, while county eligibility actions can be taken to a state hearing.",
          distractors: "The other questions do not identify the path.",
        } },
        { kind: 'reflect', title: 'Your own habits', prompts: [
          "How will you make sure that you note the mailing date and the earliest deadline every time?",
          "When will you decide that a case is beyond your role and needs legal help?",
        ] },
        { kind: 'takeaways', items: [
          "Read a notice in five steps. Date, decision, reason, what to do, rights.",
          "Deadlines differ by type of action. Read the notice and the state's page, and give the earliest date.",
          "Hand off to legal help warmly when a case is beyond your role.",
        ] },
        ev([
          "California Department of Social Services. State Hearing Requests (read November 11, 2026). The deadlines, the temporary extension, the managed care appeal path, how to request a hearing, and the programs covered.",
          "California Department of Health Care Services. Keep Your Medi-Cal page and Immigration Status and Changes to Medi-Cal Eligibility page (read November 11, 2026). Telling the county within 10 days, the kinds of letters, BenefitsCal, and the Health Consumer Alliance number.",
          "Los Angeles County guide on Medi-Cal enrollment and coverage support (read for Foundations course 2). The 90 day reactivation window and the 30 day response to a work requirement notice.",
          "The five steps for reading a notice, the advice on helping write a hearing request, and the scene are practice guidance written for this course. The scene describes no real person. This lesson is not legal advice.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-nv-l4',
      title: 'Special situations and handoffs',
      summary: 'Immigration status and Medi-Cal changes without giving immigration advice, the fee-for-service transition, Medicare and disability, and warm handoffs.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "Some of the hardest conversations are about immigration. A person is afraid to apply, afraid that a record will be shared, afraid that asking will make things worse. You are not an immigration attorney, and you must not give immigration advice. What you can do is stay calm, use the state's own chart, explain what you know and do not know, and connect the person to someone who can help.",
          "This lesson draws on the state's page on immigration status and changes to Medi-Cal eligibility, which says its chart is accurate as of August 2026 and valid through June 30, 2027, on the state's page on the fee-for-service transition, and on the state's Medi-Cal changes page. All were read on November 11, 2026. The state's January 2026 presentation described other changes for some humanitarian immigration statuses beginning October 1, 2026. The pages read in November did not set those out, so this lesson does not describe them. Use the state's chart for the current situation.",
        ] },
        { kind: 'concept', title: 'The state\'s chart', text: [
          "The state's page invites a person to find their immigration status in a list and learn how Medi-Cal changes may affect them. The list is grouped. It includes US citizens, pregnant and postpartum people, children and youth, lawful permanent residents, citizens of certain Pacific nations, people with humanitarian protections such as refugees and asylees, survivors of domestic violence, trafficking, and serious crimes, people the page calls permanently residing under color of law, and a category for statuses not listed. The page says that no matter a person's immigration status, they can still apply for full Medi-Cal if they are a child under 19, pregnant, or under 26 and were in foster care at 18.",
          "For adults whose status is not listed, including undocumented adults, the page says that people age 19 to 59 who had full Medi-Cal by January 1, 2026 can keep it. It says that starting July 1, 2027 they keep Medi-Cal but dental care is for emergencies only and they must pay a premium, with foster youth and former foster youth exempt from premiums. It says adults 60 and older who had full Medi-Cal by January 1, 2026 can keep it, with emergency-only dental starting July 1, 2027 and no premium. It also says that if a person already has Medi-Cal, they can keep it as long as they still qualify, and that immigration status does not matter for that. The state's Medi-Cal changes page lists an enrollment freeze, beginning in January 2026, as active. Exact premium amounts were not on the pages read.",
          "The page also lists the state's Medi-Cal helpline at (800) 541-5555, a link on how Medi-Cal protects privacy and information, a way to find trusted groups in California that help immigrants, and the Health Consumer Alliance at (888) 804-3536 for legal help. The page says the chart will be updated in July 2027.",
          "Practice guidance for this course. Do not ask a person about their immigration status unless it is needed and your program's rules allow it. Do not tell a person which category they fall into. Show them the state's page, and let them find it. Explain what the page says it can and cannot tell them. Connect them to legal help, and describe the privacy resources the state lists, without promising what they say. A person who is afraid needs time and respect. Never pressure someone to apply.",
        ] },
        { kind: 'concept', title: 'The fee-for-service transition', text: [
          "The state's page says a change starts January 1, 2027 for Medi-Cal members who are undocumented, who are lawful permanent residents who must wait five years for full Medi-Cal, or who are allowed to live in the United States but do not have official immigration status, a category it calls PRUCOL. The page says these members are not losing Medi-Cal, but will get it through fee-for-service instead of a health plan. They will not be in a Medi-Cal health plan. They can go to any doctor or clinic that takes fee-for-service Medi-Cal and choose their own doctor, and their health plan card will no longer work. Their Medi-Cal benefits identification card is the card to use at medical, dental, and pharmacy visits. Therapy, counseling, and medication visits for mental health go through fee-for-service, and serious mental health care or help with drug or alcohol use continues to come from the county. Medicines stay covered through Medi-Cal Rx. A person who needs a new card contacts the county Medi-Cal office.",
          "The page tells people what to do now. Before January 1, 2027, ask your doctor whether they take fee-for-service. If yes, keep going. If no, find a clinic that does, or call the helpline. Watch the mail and open Medi-Cal letters right away. Renew on time. Keep contact information up to date. These are things you can help with, now, in the weeks before the change. Check each person's category against the state's chart, and do not assume.",
        ] },
        { kind: 'concept', title: 'Medicare, disability, and older adults', text: [
          "People who are entitled to Medicare Part A or Part B are exempt from the Medi-Cal work and community engagement requirement, according to the state's presentation. The state's changes page lists asset limits for older adults and people with disabilities in July 2027. The detailed limits are in the County guide read for Foundations course 2, which listed a drop to $21,000 for one person and $31,000 for two on July 1, 2027. The state's page itself lists only the topic and date. Check the current figures before you tell anyone.",
          "Practice guidance for this course. A person who gets Medicare and Medi-Cal, who has a disability, or who is over 65 has a different set of rules than the working-age adults in Lesson 1. Do not assume the work requirement applies to them. Ask which programs they have and which notices they have received, and hand off to your program's specialist or the county when the situation is complex.",
        ] },
        { kind: 'concept', title: 'The warm handoff and your notes', text: [
          "You learned the warm handoff in the Service Coordination and Navigation course. It applies strongly here. Before you hand off, ask what the person wants shared and with whom, and get their consent in the way your program requires. Call together. Say who the person is, what the situation is, the deadline, and what you are asking for, in two or three sentences. Write down the name of the person you spoke to, the time, and what they said would happen next. Follow up by the date you agreed.",
          "Write notes that are brief and factual. The date of the notice, what it said, what you advised, what the person decided, what proof you helped gather, who you called, and what is due and when. Leave out guesses about a person's status, history, or reasons. Keep what you collect to what is needed, and store it the way your program requires. When a person shares something about immigration, treat it as sensitive and share it only with consent and only as much as the next person needs.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Fee-for-service', plain: "Medi-Cal that pays doctors and clinics directly, without a health plan choosing the doctor." },
          { term: 'PRUCOL', plain: "The state's name for people allowed to live in the United States without a formal immigration status." },
          { term: 'Premium', plain: "A monthly payment that some members will owe starting July 2027, according to the state's chart." },
          { term: 'Medi-Cal Rx', plain: "The Medi-Cal pharmacy benefit." },
          { term: 'Authorized representative', plain: "A person named to act for the member." },
        ] },
        { kind: 'myths', items: [
          { myth: "I should ask someone their immigration status so I can help.", reality: "Ask only if it is needed and allowed by your program, and use the state's chart. Do not give immigration advice." },
          { myth: "If a person is moved to fee-for-service they lose Medi-Cal.", reality: "The state's page says they are not losing Medi-Cal and will get it through fee-for-service, with a different card and the choice of any doctor that takes it." },
          { myth: "Immigration status decides whether a person can keep Medi-Cal they already have.", reality: "The state's page says that if a person already has Medi-Cal they can keep it as long as they still qualify, and immigration status does not matter for that." },
          { myth: "Every older adult is subject to the work requirement.", reality: "The presentation lists people entitled to Medicare Part A or Part B as exempt, and the requirement applies to adults 19 to 64 in the new adult group." },
        ] },
        { kind: 'case', title: 'A family afraid to open a letter', scenario: true, text: [
          "A woman brings a letter from Medi-Cal to a navigator and says she is afraid of what will happen if she answers it. The navigator does not ask about her status. She asks whether the woman would like to read the letter together. It is the notice about the change to fee-for-service. The navigator explains in plain words that the state says the woman is not losing Medi-Cal, that she will use a different card, and that she should ask her doctor whether they take fee-for-service. The woman asks whether the government will use this information against her. The navigator says she does not know the answer to that and does not want to guess. She shows her the state's page on how Medi-Cal protects privacy and information and offers to call a legal help line together. The woman says yes to the call and no to sharing anything else. The navigator writes down only what is needed.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-nv-q7',
          q: "According to the state's page on the fee-for-service transition, what happens to many members starting January 1, 2027?",
          options: [
            "They lose Medi-Cal",
            "They are not losing Medi-Cal. They receive it through fee-for-service instead of a health plan, can choose any doctor who takes fee-for-service, and use their Medi-Cal card",
            "They must pay for every visit",
            "They can no longer see a doctor",
          ],
          answer: 1,
          rationale: "The page says members affected are not losing Medi-Cal, will get it through fee-for-service, can choose any provider who takes it, and will use their Medi-Cal benefits identification card.",
          distractors: "The other answers contradict the page.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-nv-q8',
          q: "A frightened person asks whether the government will use their information against them. What is the best response?",
          options: [
            "Promise that it will never happen",
            "Be honest that you do not know, show the state's page on privacy, offer to connect them to legal help, and share only what is needed with their consent",
            "Tell them to hide their information",
            "End the conversation",
          ],
          answer: 1,
          rationale: "A navigator does not give immigration or legal advice and does not promise outcomes. The state's page points to privacy information and legal help, and consent governs what is shared.",
          distractors: "The other answers promise too much or abandon the person.",
        } },
        { kind: 'reflect', title: 'Your own care', prompts: [
          "How will you respond with respect to a person who is afraid to give information?",
          "Who in your program or area can you call for immigration legal help?",
        ] },
        { kind: 'takeaways', items: [
          "Use the state's chart, do not give immigration advice, and be honest about what you do not know.",
          "The fee-for-service change starts January 1, 2027. People keep Medi-Cal, use a different card, and choose a doctor who takes it.",
          "Warm handoffs, consent, and short factual notes protect the person and the work.",
        ] },
        ev([
          "California Department of Health Care Services. Immigration Status and Changes to Medi-Cal Eligibility (read November 11, 2026). The groups, the rules for adults, the statements on keeping Medi-Cal and privacy, the helpline and legal help numbers, and the date of the chart.",
          "California Department of Health Care Services. Fee-for-Service Transition and Medi-Cal Changes pages (read November 11, 2026). Who is affected, what changes, what to do now, and the schedule.",
          "California Department of Health Care Services. Medi-Cal Impact Update (January 2026). The exemption for people with Medicare.",
          "Los Angeles County guide on Medi-Cal enrollment and coverage support (read for Foundations course 2). The asset limit figures.",
          "The advice not to ask about status, the handoff steps, the notes guidance, and the scene are practice guidance written for this course. The scene describes no real person. This lesson is not legal or immigration advice.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-nv-s1',
      title: 'Session 1, The exemption conversation',
      summary: 'A live practice session. Practice explaining the rule in plain words and asking exemption questions with respect.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "The first conversation sets the tone. A person who feels judged will stop answering. This session lets you practice explaining the rule in a minute and asking the screening questions with care.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. Participants play characters and do not act out real events or real people. No one is asked to share their own health, immigration, or benefits information. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions, agreements, and the pause rule." },
          { label: 'The one-minute explanation, 10 minutes', text: "In pairs, take turns explaining the work and community engagement requirement in one minute, in plain words, to a neighbor. Your partner says what was clear and what was missing." },
          { label: 'Screening role-plays, 30 minutes', text: "In triads, one person plays a character from a card, one is the navigator, and one is the observer. Three rounds of about nine minutes. The navigator explains the rule, asks the screening questions with respect, listens, says that the county decides, and says what proof to start keeping." },
          { label: 'Fix the sentence, 10 minutes', text: "Each person writes the hardest exemption question in their own words and tests it with a partner." },
          { label: 'Close, 5 minutes', text: "One thing you will say and one thing you will never say." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A man who works 15 hours a week and goes to a weekly recovery group.",
          "A woman who cares for her mother and does not think of that as work.",
          "A young man who left foster care at 18 and is unsure about the rules.",
          "A woman who was recently in the hospital for several weeks.",
          "A man who works for cash and does not keep records.",
          "A person who says, I am not going to answer your questions.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Was the explanation of the rule plain and accurate?",
          "Did the navigator ask the questions with respect and without deciding?",
          "Did they say that the county decides?",
          "Did they tell the person what proof to start keeping?",
          "Did they offer a next step and a way to check back?",
          "Did they respect a no?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which question was hardest to ask?",
          "What would help a person feel respected in this conversation?",
        ] },
        { kind: 'takeaways', items: [
          "Explain simply, ask with respect, and let the county decide.",
          "Help a person start keeping proof today.",
          "Respect a no and offer another way to reach you.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 1 and the sources it cites. The character cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-nv-s2',
      title: 'Session 2, Hours and proof',
      summary: 'A live practice session. Build an hours plan, practice asking a site to verify, and walk through a mock submission.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Proof is a habit. This session lets you practice building a plan for hours and the conversation with a site that must sign.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. Use sample forms and invented names only. Never use a real person's records or a real account. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Build an hours plan, 15 minutes', text: "In pairs, use a character card to build a plan that adds up to 80 hours a month with at least two activities, a schedule, and a way to get there. Check that each activity can count and can be verified." },
          { label: 'The verification ask, 15 minutes', text: "In triads, one person plays a site supervisor, one the person, and one the navigator. Practice asking the three questions, accepting volunteers, counting toward the requirement, and signing a form or statement. Practice what to do if the answer is no." },
          { label: 'The mock submission, 20 minutes', text: "With a sample form and an invented photo, practice making a copy, naming a file, logging the date, and walking through where an upload would go in an account. Do not use any real account." },
          { label: 'Close, 5 minutes', text: "Your monthly proof habit." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A person with a bad back, no car, and a child at home in the afternoons.",
          "A person who has weekends available and likes working with animals.",
          "A person who works two part-time jobs with changing hours.",
          "A person in a recovery program who attends class twice a week.",
          "A person who has volunteered for months but never asked for a form.",
          "A person who wants to volunteer at a small organization with no staff to sign forms.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the plan fit the person's life?",
          "Did the navigator confirm that each activity could count and be verified?",
          "Did the person practice asking a site to sign?",
          "Did the navigator avoid signing or promising?",
          "Did they set up a monthly log and copies?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What would stop a person from asking a site for a signature?",
          "What is your monthly proof routine?",
        ] },
        { kind: 'takeaways', items: [
          "A plan that fits the person's life is more likely to last.",
          "Ask the site three questions before starting.",
          "Log, copy, and upload every month.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 2 and the Los Angeles County Department of Public Social Services page. The character cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 3 ─────────────────────────────────────────────────────────
    {
      id: 'chw-nv-s3',
      title: 'Session 3, The notice and the hearing',
      summary: 'A live practice session. Read sample notices, work out deadlines, and practice helping with a hearing request.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "A notice is easier to handle when you have practiced. This session lets you read invented notices, count the days, and help write a request.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All notices and names are invented. This session is not legal advice. Do not use a real person's notice. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Five-step reading, 15 minutes', text: "In pairs, read two invented notices using the five steps, date, decision, reason, what to do, rights. Say each one back in plain words." },
          { label: 'The deadline game, 15 minutes', text: "In small groups, work out the earliest deadline for several invented situations using the state's page, including a county eligibility action, a redetermination termination, a denied application, and a managed care plan decision. Check the page together to see how each is treated." },
          { label: 'Write the request, 15 minutes', text: "Each person helps a partner write a hearing request for an invented case, with the reason in the person's own words, language needs, and an authorized representative. Make a copy and log the date." },
          { label: 'Handoff, 5 minutes', text: "Practice the sentence that hands a case to legal help." },
          { label: 'Close, 5 minutes', text: "Your notice habit." },
        ] },
        { kind: 'list', title: 'Situations', items: [
          "Coverage ended at renewal because a form did not arrive.",
          "A new application was denied.",
          "A health plan denied a service.",
          "A notice says to respond within 30 days.",
          "A person got a notice two months ago and just found it.",
          "A person with a disability says the county got the facts wrong.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the navigator note the mailing date and read all five parts?",
          "Did they say the notice in plain words and check understanding?",
          "Did they give the earliest possible deadline and say to check the notice?",
          "Did they distinguish a plan decision from a county decision?",
          "Did they keep a copy and log the date?",
          "Did they hand off when the case was beyond their role?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which deadline was hardest to work out?",
          "What will you do when you are not sure which clock applies?",
        ] },
        { kind: 'takeaways', items: [
          "Read the notice in five steps and say it back.",
          "Give the earliest date, and check the notice.",
          "Copy, log, and hand off when needed.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 3 and the California Department of Social Services page on state hearing requests. The situations were written for this course and describe no real person. This session is not legal advice.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 4 ─────────────────────────────────────────────────────────
    {
      id: 'chw-nv-s4',
      title: 'Session 4, Hard cases and handoffs',
      summary: 'A live practice session. Practice sensitive conversations, the fee-for-service transition, and warm handoffs to legal help and eligibility workers.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "The hard conversations are about fear, uncertainty, and cases that are beyond your role. This session helps you practice staying honest and kind.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. No one is asked to share their own immigration or benefits information. Do not use real names or real case details. This session is not legal or immigration advice. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Using the chart, 10 minutes', text: "In pairs, practice showing a person the state's chart without asking their status and explaining what the page says it can and cannot tell them." },
          { label: 'Hard conversations, 25 minutes', text: "In triads, one person plays a character from a card, one is the navigator, and one is the observer. Three rounds of about eight minutes. The navigator listens, says what they know and do not know, avoids promises, and offers a handoff." },
          { label: 'The warm handoff call, 15 minutes', text: "In triads, practice calling a legal help line or an eligibility worker with a person, saying who they are, the situation, the deadline, and the request, and writing down the name and next step. The observer plays the person who answers." },
          { label: 'Close, 5 minutes', text: "Your sentence for I do not know." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A person who is afraid to open a letter from Medi-Cal.",
          "A person who asks whether the government will use their information against them.",
          "A person who is told to find a new doctor because of the fee-for-service change.",
          "A person on Medicare and Medi-Cal who wants to know whether the work rule applies.",
          "A person who has lost a hearing and wants to try again.",
          "A person who says, you are just another person who will tell me no.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the navigator avoid asking about status unless needed and allowed?",
          "Did they use the state's page and avoid giving immigration advice?",
          "Did they say what they did not know without guessing?",
          "Did they offer a warm handoff with a name, a deadline, and a next step?",
          "Did they respect consent and share only what was needed?",
          "Did they stay kind?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What is hardest about saying I do not know?",
          "Who is your first call for a case beyond your role?",
        ] },
        { kind: 'takeaways', items: [
          "Say what you know, say what you do not, and do not guess.",
          "Use the state's chart and connect to legal help.",
          "Hand off warmly, with consent, a name, and a next step.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 4 and the sources it cites. The character cards were written for this course and describe no real person. This session is not legal or immigration advice.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-nv-practice',
    title: 'Your coverage and benefits navigation practice file',
    minutes: 60,
    purpose: 'Five short pieces that you keep and use. Your plain-words explanation and screening questions, your hours and proof plan, your notice and deadline routine, your handoff map, and your checking habit.',
    fields: [
      { id: 'explain', label: 'Your plain-words explanation and screening questions', help: 'Write how you would explain the work and community engagement requirement in under a minute, and the screening questions you will ask, in your own respectful words. Add the sentence that says the county decides.', multiline: true },
      { id: 'hours', label: 'Your hours and proof plan', help: 'Write the three questions you ask a site before a person starts, the monthly log you will help a person keep, what to copy and upload, and what you will never do about signatures.', multiline: true },
      { id: 'notice', label: 'Your notice and deadline routine', help: 'Write your five steps for reading a notice, how you find the earliest deadline, how you tell a county decision from a plan decision, and where you write the dates.', multiline: true },
      { id: 'handoff', label: 'Your handoff map', help: 'List your county eligibility office, the BenefitsCal help, the State Hearings Division, the Medi-Cal helpline, the Health Consumer Alliance, local legal help, and community partners, with a name for each and the date you checked it. Mark anything you must confirm.', multiline: true },
      { id: 'check', label: 'Your checking habit', help: 'Write how often you will check the state\'s Medi-Cal changes page and your county, where you will write the date you checked, and what you will say to a person when you cannot be sure of a date.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      '211 for local resources',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'California Department of Health Care Services: Medi-Cal Changes', use: 'The state\'s schedule of Medi-Cal changes and updates.', url: 'https://www.dhcs.ca.gov/medi-cal/updates/medi-cal-changes/' },
    { name: 'California Department of Health Care Services: Immigration Status and Changes to Medi-Cal Eligibility', use: 'The state\'s chart of immigration statuses and how Medi-Cal changes may affect them.', url: 'https://www.dhcs.ca.gov/immigration-status-and-changes-to-medi-cal-eligibility/' },
    { name: 'California Department of Social Services: State Hearing Requests', use: 'How to request a hearing and the deadlines.', url: 'https://www.cdss.ca.gov/hearingrequests' },
    { name: 'Los Angeles County Department of Public Social Services: CalFresh and Medi-Cal Work Requirements', use: 'How people in Los Angeles County meet and verify work requirements.', url: 'https://dpss.lacounty.gov/en/jobs/wr.html' },
    { name: 'California Department of Health Care Services: Keep Your Medi-Cal', use: 'The basics for keeping coverage and finding renewal dates.', url: 'https://www.dhcs.ca.gov/medi-cal/keep/' },
    { name: 'BenefitsCal', use: 'The state website for applying, submitting documents, and seeing notices.', url: 'https://benefitscal.com/' },
  ],
};
