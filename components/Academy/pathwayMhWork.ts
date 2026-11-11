// Community Mental Health Worker Pathway, Mental Health Core M9: Work Readiness and Digital Literacy.
//
// A self-paced course (id chw_mh_work_digital, 2 hours). It matches the Medi-Cal peer support specialist
// competencies on preparation for employment and on digital literacy (numbers 12 and 17 of 17, read
// earlier from a CalMHSA request for qualifications that quotes DHCS BHIN 21-041; to be verified against
// the BHIN). It teaches a worker how to prepare for and keep a job, what the federal disability
// employment rules say, and how to use digital tools safely when handling other people's information.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources are
// two U.S. Equal Employment Opportunity Commission publications (the page on disability discrimination
// and employment decisions, and the enforcement guidance on reasonable accommodation and undue hardship,
// read in the passages quoted), the IPS Employment Center's January 28, 2026 presentation, SAMHSA's
// protocol on co-occurring disorders, the Northstar Digital Literacy home page, CISA's cybersecurity
// awareness page (its four core steps only), 45 CFR 164.502 on the minimum necessary standard, SAMHSA's
// core competencies for peer workers, and the National Health Law Program's Medi-Cal guide for peer
// certification. The Department of Labor's disability disclosure fact sheet and CareerOneStop's resume
// and interview pages refused automated requests and were not bypassed, and the Job Accommodation
// Network pages were not found. The course therefore gives resume and interview advice only as practice
// guidance written for this course and says so. The CISA page carries unrelated text about technology
// that was ignored. The scenes were written for this course and describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_WORK_DIGITAL: Course = {
  id: 'chw_mh_work_digital',
  num: 30,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Work Readiness and Digital Literacy',
  promise:
    "Prepare for work in community health and peer support, know your rights at work under the federal disability employment rules, use everyday digital tools with confidence, and protect other people's information when you use them.",
  about: [
    "This course covers two practical things a community mental health worker needs. How to get ready for a job and keep it, including what the law says about disability, accommodations, and disclosure. And how to use phones, computers, email, and online tools well, and safely, when you handle other people's private information.",
    "It rests on two publications of the U.S. Equal Employment Opportunity Commission, the practice principles of Individual Placement and Support, SAMHSA's protocols and competencies, a national digital literacy program, the federal cybersecurity agency's core steps, and the federal privacy rule's minimum necessary standard.",
    "It is Mental Health Core course 9 of HMC's community health worker pathway. It is a practical course. It does not give legal advice, and it does not replace your program's policies on devices, records, and privacy.",
  ],
  objectives: [
    "Describe what work in community health and peer support involves and how to prepare for it, in terms of your own preferences and strengths.",
    "Explain the federal rules on disability, reasonable accommodation, disclosure, and confidentiality at work.",
    "Describe how benefits planning and job supports help people work, and where to send someone for help.",
    "Name the basic digital skills a worker needs and find ways to build them.",
    "Apply four core online safety steps and use the minimum necessary standard when you handle information.",
    "Decide which tools and channels to use for what, following your program's rules.",
  ],
  minutes: 120,
  prerequisites: "None. Professional Conduct, Ethics, and Safety is helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people returning to work after a gap and people using computers and phones for work for the first time.",
  freshness:
    "The legal statements in this course were read on federal agency pages on November 10, 2026. Laws and agency guidance change, and California adds its own protections. This is education and not legal advice. Check with your program, a legal aid organization, or the agency itself for your situation.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhw-l1',
      title: 'Getting ready for work, and keeping it',
      summary: 'Knowing what you want, preparing to apply, and the supports that help people work.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Work gives people income, structure, belonging, and a sense of who they are. SAMHSA's protocol on co-occurring disorders says work can enhance self-efficacy, improve self-identity, offer a sense of belonging, build relationships, and improve quality of life, and it cites a review finding that employment was associated with reduced substance use and more stable housing. Many people you support will want to work, and many of you are preparing for work yourselves.",
          "This lesson is about getting ready. It borrows from the supported employment model you studied in the peer practice course, and it is honest about what the sources do and do not cover.",
        ] },
        { kind: 'concept', title: 'Start with what you want', text: [
          "The IPS Employment Center's presentation says people keep their jobs twice as long if at least three of their preferences are met, and that employment improves quality of life only if people enjoy their jobs. It says services are based on individual preferences, strengths, lessons learned from previous work or education, factors related to disability, living situation, and supports.",
          "Apply that to yourself and to the people you support. Before you write a resume, answer some questions. What kind of work do I want, and what do I want to avoid. What hours, what pay, what setting. What have I liked about past work, and what wore me out. What am I good at. Who would be a good reference. What would I need in order to do well, such as transportation, childcare, or a schedule that fits treatment. Writing the answers down makes every later step easier.",
        ] },
        { kind: 'concept', title: 'Work in community health and peer support', text: [
          "The C3 Project's list of community health worker roles and skills, which you used in earlier courses, describes the range of the work: outreach, navigation, education, coaching, advocacy, assessment, and more. SAMHSA's peer competencies describe peer work in twelve categories. The National Health Law Program's Medi-Cal guide says that Peer Support Specialists who provide the Medi-Cal peer support benefit must receive certification under a county-run program, and must be over 18. The guide does not say what Los Angeles County requires, so ask your supervisor or the county.",
          "Jobs in this field can be paid or volunteer, part-time or full-time, in clinics, community organizations, health plans, or county programs. The path often includes training like this pathway, supervised experience, and in some roles a certification. Ask each employer what it requires and what training it provides.",
        ] },
        { kind: 'concept', title: 'Preparing to apply', text: [
          "Practice guidance written for this course. The Department of Labor and CareerOneStop pages on resumes and interviews could not be read for this course, so this section rests on common practice and not on a cited source.",
          "Resume. List your name and contact information, a short summary, your work and volunteer experience with what you did and what happened as a result, your training, including this pathway, and your skills such as languages and computer skills. Include volunteer work, caregiving, and community leadership, since they show real skills. Keep it to one or two pages. A gap in work history does not need a long explanation. If you choose to address it, a short, honest sentence is enough. Ask someone to read it for mistakes.",
          "Applications. Read the posting. Match your experience to what they ask for. Fill in every field. Keep a record of where you applied and when.",
          "Interviews. Practice answering common questions aloud with a friend or mentor. Prepare two or three stories that show what you can do, in a simple order: the situation, what you did, and what happened. Prepare questions to ask them, such as how supervision works, what training is offered, and what a typical week looks like. Plan how you will get there and what you will wear. Arrive a little early. Follow up with a short thank-you note.",
          "References. Ask people before you list them. Tell them about the job.",
        ] },
        { kind: 'concept', title: 'Benefits and work', text: [
          "Many people worry that working will cost them benefits or health coverage. The IPS presentation says benefits planning should be provided by someone trained, called a Community Work Incentives Coordinator, and that rules such as impairment-related work expenses make it possible for people to benefit from employment. It says some people need help attending appointments and others need help reporting earned income, and that written earnings scenarios should be included in client records.",
          "The practical point. Before someone takes a job or changes hours, they should talk with a trained benefits planner who can show what will happen to their benefits in writing. Do not guess, and do not advise. Ask your supervisor where to refer people for benefits planning. The Public Health, Medi-Cal, and Social Programs course covers the basics of coverage.",
        ] },
        { kind: 'concept', title: 'Supports that help people keep a job', text: [
          "The IPS presentation describes job supports that are individualized and have no time limit, including wake-up calls, regular meetings to talk about the job, travel training, help obtaining tools or clothing, and family meetings if the person wants them. It also says supported employment is most effective when it is integrated with mental health treatment and when the job search begins soon after a person joins the program, with the focus on regular jobs.",
          "For you, the lesson is to expect that keeping a job takes support, and to ask for it. A supervisor who understands your situation, flexible scheduling for appointments, a mentor, a peer to talk with. Those are normal supports and not special favors. The next lesson covers your rights.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Preferences', plain: "What a person wants in work, such as hours, setting, and type of tasks." },
          { term: 'Competitive employment', plain: "A regular job that anyone can apply for, paying at least minimum wage." },
          { term: 'Benefits planning', plain: "Help from a trained person to understand how work affects benefits." },
          { term: 'Job supports', plain: "Ongoing help to keep a job, such as coaching, travel training, or check-ins." },
          { term: 'Reference', plain: "A person who can speak about your work or character." },
        ] },
        { kind: 'myths', items: [
          { myth: "A person with a mental health history should wait until they are fully stable before working.", reality: "The IPS principles and the SAMHSA protocol describe work as part of recovery and support early job search with ongoing supports." },
          { myth: "Working always means losing benefits.", reality: "The IPS presentation says rules make it possible for people to benefit from employment, and that a trained benefits planner can show what will happen. Ask before deciding." },
          { myth: "Volunteer work does not count.", reality: "Volunteer work shows real skills, and employers in this field value it. Include it." },
          { myth: "I should take any job.", reality: "The IPS presentation reports that people keep jobs longer when their preferences are met." },
        ] },
        { kind: 'case', title: 'A resume with a gap', scenario: true, text: [
          "A man tells a worker he wants to work with people but has not had a job in four years because of illness and time in a hospital. He is afraid to apply. The worker asks what he wants and what he is good at. He says he likes helping people find things and that he used to coach youth soccer. They put his volunteer coaching and a recent class on his resume. He decides to say nothing about the gap on the page and, if asked, to say that he took time for his health and is ready to work. The worker does not tell him what to disclose. She tells him that an employer cannot ask about disability before an offer, which she learned from the next lesson. She suggests they practice the interview, and she gives him the number for benefits planning before he accepts any job.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhw-q1',
          q: "According to the IPS Employment Center's presentation, what happens when at least three of a person's job preferences are met?",
          options: [
            "Nothing changes",
            "People keep their jobs twice as long",
            "They get a raise",
            "They no longer need benefits planning",
          ],
          answer: 1,
          rationale: "The presentation says people keep their jobs twice as long if at least three of their preferences are met.",
          distractors: "The other answers are not claims in the presentation.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhw-q2',
          q: "A person is worried that taking a job will affect their benefits. What is the best response?",
          options: [
            "Tell them they will lose everything",
            "Tell them it will be fine",
            "Suggest they talk with a trained benefits planner who can show in writing what will happen, and help them find one through your program",
            "Tell them not to work",
          ],
          answer: 2,
          rationale: "The IPS presentation says benefits planning should come from someone trained. A worker does not guess or advise on benefits.",
          distractors: "The other answers guess at an outcome or discourage work.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What are three preferences you would want met in a job?",
          "What support would help you keep a job, and who could you ask?",
        ] },
        { kind: 'takeaways', items: [
          "Start with what you want. Jobs last longer when preferences are met.",
          "Prepare practically: resume, applications, interview stories, references. Include volunteer work.",
          "Get benefits planning before you decide, and expect to use job supports.",
        ] },
        ev([
          "IPS Employment Center. Individual Placement and Support Practice Principles (January 28, 2026). Preferences, benefits planning, and job supports.",
          "SAMHSA. Treatment Improvement Protocol 42, Substance Use Disorder Treatment for People With Co-Occurring Disorders (2020 update). The value of work.",
          "National Health Law Program. An Advocate's Guide to Medi-Cal Services, Chapter IV (updated February 2026). Certification of peer support specialists.",
          "The Department of Labor and CareerOneStop pages on resumes and interviews could not be read. The resume, application, and interview advice is practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhw-l2',
      title: 'Your rights at work: disability, accommodation, and disclosure',
      summary: 'What the federal disability employment rules say, in plain terms.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Many people with mental health or substance use histories fear that an employer will treat them differently. The law protects people from discrimination because of disability, and it gives them tools. Knowing the basics helps you for yourself and for the people you support. This is education, not legal advice.",
        ] },
        { kind: 'concept', title: 'What the law forbids', text: [
          "The U.S. Equal Employment Opportunity Commission explains that the disability laws forbid treating a qualified employee or applicant unfavorably because of disability, and that this covers any aspect of employment, including hiring, firing, pay, job assignments, promotions, layoff, training, fringe benefits, and any other term or condition of employment.",
          "On who counts as having a disability, the Commission says the definition is construed broadly. A person has a disability if they have a physical or mental condition that substantially limits a major life activity, such as walking, talking, seeing, hearing, learning, or operating a major bodily function. A person also counts if they have a history of a disability, or are subject to an adverse employment action because of an impairment they actually have or are perceived to have, unless it is transitory, lasting or expected to last six months or less, and minor. The Commission notes that a medical condition does not need to be long-term, permanent, or severe to be substantially limiting, and that if symptoms come and go, what matters is how limiting they are when active. It also notes that not everyone with a medical condition is protected.",
          "California has its own laws that may give added protection, and they were not read for this course. A legal aid organization or the state's civil rights agency can tell you more.",
        ] },
        { kind: 'concept', title: 'Reasonable accommodation', text: [
          "The Commission explains that employers in the private, federal, and state and local government sectors must provide reasonable accommodations, meaning changes to the ways things are usually done, to employees and applicants who have or had an impairment that substantially limits a major life activity, when they request job modifications, unless doing so would cause undue hardship for the employer. A reasonable accommodation can help a person apply for a job, do the duties of a job, or enjoy the benefits and privileges of employment.",
          "It gives examples: making the workplace accessible for wheelchair users, providing a reader or interpreter for someone who is blind or hard of hearing, a schedule change, telework, leave for disability-related treatment or symptoms, and reassignment to a vacant position when an accommodation is not possible in the current job. For a person managing a mental health or substance use condition, a schedule that allows appointments is a common example.",
          "Undue hardship, the Commission explains, means the accommodation would be too difficult or too expensive to provide in light of the employer's size, financial resources, and the needs of the business. An employer may not refuse an accommodation just because it involves some expense. An employer does not have to provide the exact accommodation the person wants, as long as it provides an effective one, and if more than one works, the employer may choose.",
        ] },
        { kind: 'concept', title: 'How to ask', text: [
          "The Commission's guidance on reasonable accommodation says that to request an accommodation, a person must let the employer know that they need an adjustment or change at work for a reason related to a medical condition. They may use plain English and need not mention the ADA or use the phrase reasonable accommodation. Its examples of requests include an employee telling a supervisor, I'm having trouble getting to work at my scheduled starting time because of medical treatments I'm undergoing, or I need six weeks off to get treatment for a back problem. It gives a contrasting example. An employee who says only that they would like a new chair because the present one is uncomfortable has not linked the request to a medical condition, which is insufficient to put the employer on notice.",
          "The practical lesson is that the request needs to link the change to a medical condition, and plain words are enough. A person does not have to name a diagnosis in the request, though the employer may ask for documentation in some situations. The guidance addresses the employer's ability to ask questions and seek documentation after a request has been made. Putting a request in writing and keeping a copy is practice guidance written for this course.",
        ] },
        { kind: 'concept', title: 'Questions, exams, and disclosure', text: [
          "The Commission says the law places limits on employers. During the application and interview stage, an employer may not ask a job applicant to answer disability-related questions, such as whether they have a disability, or require a medical exam, before extending a job offer. An employer may ask whether the applicant can perform the job and how they would perform it, with or without a reasonable accommodation.",
          "After a job offer, an employer may condition the offer on answering disability-related questions or passing a medical exam, but only if all new employees in the same type of job must do so, and may revoke the offer only if the information shows the person cannot safely perform the job, even with a reasonable accommodation if entitled to one. After employment starts, an employer generally can only ask disability-related questions or require a medical exam if it needs medical information to support a request for accommodation, or if it has objective evidence that the employee cannot perform the job successfully or safely because of a medical condition.",
          "What does this mean about disclosure. It means no one is required to disclose a disability to an employer before an offer, since the employer may not ask. After that, whether to tell, when, and what to say is a personal decision. The guidance says an accommodation request must let the employer know that a change is needed for a medical reason, so the employer cannot provide an accommodation it does not know is needed. The Department of Labor publishes a fact sheet on disclosure that could not be read for this course, and your supervisor, a legal aid organization, or a disability rights organization can advise you on your own situation. Do not tell a person whether to disclose.",
        ] },
        { kind: 'concept', title: 'Confidentiality, harassment, and retaliation', text: [
          "The Commission says the law requires employers to keep all medical records and information confidential and in separate medical files. It says it is illegal to harass an applicant or employee because of a current or past disability, an actual or perceived impairment that is not transitory and minor, or association with a person with a disability. Harassment can include offensive remarks about a person's disability, and it is illegal when it is so frequent or severe that it creates a hostile or offensive work environment, or when it results in an adverse employment decision such as being fired or demoted. It can come from a supervisor, a coworker, or someone who is not an employee, such as a client. And it says job applicants and current and former employees are protected from retaliation for asserting their rights.",
          "If you experience or witness these, write down what happened, when, who was there, and what was said. Tell your supervisor or the person your program designates, or an outside agency. The Commission's website explains how to file a charge. Legal aid and disability rights organizations can help.",
        ] },
        { kind: 'concept', title: 'A note for peer workers', text: [
          "SAMHSA's peer competencies include sharing lived experience as part of the job, and the National Association of Peer Supporters' guidelines note that supervisors who are not familiar with peer values may restrict practices such as self-disclosure. Davidson's review says peer staff should be treated like other employees, with the same expectations for sick time and accommodations, and that supervision should concentrate on job skills, not clinical status. In a peer role, the question of disclosure is built into the job, and your program's policy tells you how. Ask early.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Disability (under the ADA)', plain: "A physical or mental condition that substantially limits a major life activity, a history of such a condition, or being treated as having an impairment." },
          { term: 'Reasonable accommodation', plain: "A change in how things are usually done that lets a person apply for, perform, or enjoy the benefits of a job." },
          { term: 'Undue hardship', plain: "An accommodation that would be too difficult or too expensive for the employer, judged by size, resources, and needs." },
          { term: 'Disability-related question', plain: "A question about whether a person has a disability or about its nature or severity." },
          { term: 'Retaliation', plain: "Punishing a person for asserting their rights." },
        ] },
        { kind: 'myths', items: [
          { myth: "An employer can ask in the interview whether I have a mental health condition.", reality: "The Commission says an employer may not ask disability-related questions or require a medical exam before extending a job offer." },
          { myth: "I have to use special legal words to ask for an accommodation.", reality: "The Commission's guidance says plain English is enough and the request must link the need to a medical condition." },
          { myth: "An employer can refuse any accommodation that has a cost.", reality: "The Commission says an employer may not refuse just because it involves some expense. The test is undue hardship." },
          { myth: "My medical information can be shared around the workplace.", reality: "The Commission says employers must keep medical information confidential and in separate files." },
        ] },
        { kind: 'case', title: 'A schedule request', scenario: true, text: [
          "A newly hired worker attends a counseling appointment every Tuesday morning. She tells her supervisor, I have a medical appointment on Tuesday mornings for treatment. Could I start at noon on Tuesdays and make up the time on Thursday? She does not name a condition, and she does not use legal words. The supervisor says they will talk to human resources, and the worker writes a short email afterward repeating the request and keeps a copy. A week later the employer agrees to an adjusted schedule. The worker has made a clear request that links the need to a medical reason. She knows that her employer is required to keep her medical information confidential, and she tells only the people she chooses.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhw-q3',
          q: "According to the EEOC, before a job offer is made, what may an employer do?",
          options: [
            "Ask whether the applicant has a disability",
            "Require a medical exam",
            "Ask whether the applicant can perform the job and how they would perform it, with or without a reasonable accommodation",
            "Ask for the applicant's full medical history",
          ],
          answer: 2,
          rationale: "The Commission says an employer may not ask disability-related questions or require a medical exam before a job offer, and may ask whether the applicant can perform the job and how, with or without accommodation.",
          distractors: "The other answers describe things the Commission says are not allowed before an offer.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhw-q4',
          q: "Which request meets the EEOC's description of a request for reasonable accommodation?",
          options: [
            "I want a nicer chair",
            "I am having trouble getting to work at my scheduled start time because of medical treatments I'm undergoing",
            "I do not like the schedule",
            "I will quit unless things change",
          ],
          answer: 1,
          rationale: "The guidance says a person can use plain English and must link the need for a change to a medical condition. The chair example is insufficient because it is not linked.",
          distractors: "The other statements do not link the change to a medical condition.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "If you needed an adjustment at work for a health reason, how would you ask? Write the sentence.",
          "Who could you turn to if you felt you were being treated unfairly because of a health condition?",
        ] },
        { kind: 'takeaways', items: [
          "Employers may not discriminate because of disability, may not ask disability-related questions before an offer, and must keep medical information confidential.",
          "A request for an accommodation can be in plain English and should link the need to a medical condition.",
          "Whether and when to disclose is personal. Keep records, and know where to turn for help.",
        ] },
        ev([
          "U.S. Equal Employment Opportunity Commission. Disability Discrimination and Employment Decisions (page read November 10, 2026). The definition of disability, reasonable accommodation and undue hardship, limits on questions and exams, confidentiality, harassment, and retaliation.",
          "U.S. Equal Employment Opportunity Commission. Enforcement Guidance on Reasonable Accommodation and Undue Hardship Under the ADA. The passages on how to request an accommodation. The guidance is long, and only the passages quoted were read.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. National Association of Peer Supporters (2019). Davidson L, et al. (2012). The notes on peer roles, supervision, and disclosure.",
          "The Department of Labor's disclosure fact sheet could not be read. California law was not read. This lesson is education and is not legal advice.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhw-l3',
      title: 'Digital skills, and protecting other people\'s information',
      summary: 'The basic digital skills a worker needs, four core safety steps, and the minimum necessary standard.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "You will use a phone, a computer, email, messages, spreadsheets, and forms every day. You will do it with other people's private information. If you are not confident with the tools, the work is harder. If you are careless with them, someone can be hurt. This lesson covers both: the skills to build and the habits to protect.",
        ] },
        { kind: 'concept', title: 'What digital literacy is', text: [
          "Northstar Digital Literacy, a program of Literacy Minnesota, describes its standards as defining the basic skills needed to use a computer and the internet in daily life, employment, and higher education. It offers self-guided assessments of basic skills in 18 areas, educational materials for self-guided learning, one-on-one digital navigation, and classes, and it says it is used by libraries, adult education centers, community colleges, healthcare systems, businesses, and workforce centers. The page read for this course does not list the 18 areas.",
          "A worker in this field commonly needs the following, which is practice guidance for this course and not Northstar's list. Operating a phone and a computer, including settings, updates, and saving and finding files. Using the internet and a browser, searching, and telling reliable sources from unreliable ones. Using email and calendar, with clear subject lines and attachments. Using a word processor and spreadsheet for notes, lists, and simple tracking. Joining a video call, including sound, camera, chat, and screen sharing. Using your program's records or case system. Using text messages and messaging apps appropriately. And using accessibility features such as larger text, captions, and screen readers.",
          "If you are not confident, say so, and ask for training. Libraries, adult education programs, and workforce centers offer classes. Practice on low-stakes tasks. Write down steps you learn.",
        ] },
        { kind: 'concept', title: 'Four core safety steps', text: [
          "The federal Cybersecurity and Infrastructure Security Agency's awareness page names four core steps that everyone should take. Avoid and report phishing scams. Use strong passwords. Use multifactor authentication and a password manager. And update software.",
          "Practice guidance for this course, consistent with those steps. Phishing means messages that trick you into clicking a link, opening an attachment, or giving up a password. Be suspicious of messages that create urgency, ask for passwords or personal information, come from an address you do not recognize, or have unexpected attachments. Do not click. Check with the sender by another route. Report suspicious messages to your program's contact. Use long, unique passwords for each account, and a password manager if your program provides one. Turn on multifactor authentication, which asks for a second proof of identity such as a code. Install updates when asked. Lock your screen when you step away. Never share your password.",
          "The page also lists steps for organizations, including backing up data and having an incident response plan. Your program decides these. Your part is to follow its rules and report anything odd right away.",
        ] },
        { kind: 'concept', title: 'The minimum necessary standard', text: [
          "The federal privacy rule, in the section on general rules for uses and disclosures of protected health information, says that when using or disclosing protected health information, or requesting it from another covered entity, a covered entity or business associate must make reasonable efforts to limit the information to the minimum necessary to accomplish the intended purpose of the use, disclosure, or request. The same section lists exceptions where the standard does not apply, and the rule's other parts set when disclosure is allowed at all. Your program applies the rule to you.",
          "In plain terms, share only what is needed, with only the people who need it, for only as long as needed. Apply it in every digital action. Do not put names and details in a subject line. Do not copy people on messages who do not need to be there. Do not put private details in a group chat or shared document. Do not take photos of forms or screens on a personal phone unless your program allows it. Do not keep notes about people on your personal device or in personal accounts. Do not talk about people by name in public places, including on the phone.",
        ] },
        { kind: 'concept', title: 'Choosing the right channel', text: [
          "Practice guidance for this course. Your program has rules on which tools may be used for what, and those come first. Ask for them in writing. In general, use the program's approved email, messaging, and records system for anything about a person. Use plain text messages only for logistics that carry no private information, such as a time and place, and with the person's agreement about being texted. Do not discuss health or personal details in text, social media messages, or non-approved apps. Do not post anything about the people you serve on social media, even without names, if there is a chance someone could be identified. Use video calls from a private place, with headphones if needed, and check who else can hear or see. Think before you attach a file. Send it by the approved method and to the right person.",
          "If someone contacts you on your personal account or phone, tell them gently that you can help through the program's channels, and move there. Tell your supervisor.",
        ] },
        { kind: 'concept', title: 'Helping other people with technology', text: [
          "Many people you support will need help with phones, forms, and accounts. Be patient, and teach, not just do. Explain what you are doing and why. Let the person type their own passwords. Do not keep or write down someone's password. Do not create accounts in someone's name without their knowledge. Be alert to scams that target the people you serve, and talk about them. Use plain language, as in the education course.",
          "If someone does not have a phone or internet, that is a barrier to care, not a personal failing. Ask your program about options. Libraries are common places to get online.",
        ] },
        { kind: 'concept', title: 'If something goes wrong', text: [
          "If you lose a device, send a message to the wrong person, click on a suspicious link, or think an account has been accessed, tell your supervisor or the designated contact right away, and do not try to hide it. Speed matters, and most programs have steps for this. An early report is a sign of good judgment. The Professional Conduct course covers privacy incidents.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Digital literacy', plain: "The basic skills needed to use computers and the internet in daily life, work, and learning." },
          { term: 'Phishing', plain: "Messages that try to trick you into giving up information or clicking something harmful." },
          { term: 'Multifactor authentication', plain: "A second step, such as a code, to prove who you are when you log in." },
          { term: 'Password manager', plain: "A tool that stores and fills in strong, unique passwords." },
          { term: 'Minimum necessary', plain: "Sharing only the least information needed for the purpose." },
        ] },
        { kind: 'myths', items: [
          { myth: "If I leave out the name, it is safe to post about a client.", reality: "Details can identify a person. Follow your program's rules and the minimum necessary standard." },
          { myth: "A strong password is all I need.", reality: "CISA's core steps include multifactor authentication, a password manager, avoiding phishing, and updating software." },
          { myth: "Texting is fine for anything, since it is quick.", reality: "Use your program's approved channels for anything about a person, and keep texts to logistics." },
          { myth: "If I click a bad link by mistake, it is better to say nothing.", reality: "Report right away. Early reporting limits harm." },
        ] },
        { kind: 'case', title: 'A message that looked right', scenario: true, text: [
          "A worker gets an email that appears to be from her program director, saying urgent, please log in at this link and confirm your account to avoid losing access. She notices it creates pressure and asks her to log in through a link. She does not click. She calls the director on a number she already has, who says they sent nothing. She forwards the message to the program's designated contact and deletes it, as instructed. Later that day she turns on multifactor authentication for her work account and sets up a password manager the program provides. In her notes she records no private details. She tells a coworker about the message so they will watch for it too.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhw-q5',
          q: "According to CISA, which are among the four core steps everyone should take?",
          options: [
            "Share passwords with trusted coworkers, ignore updates, and click links quickly",
            "Avoid and report phishing scams, use strong passwords, use multifactor authentication and a password manager, and update software",
            "Only use public Wi-Fi",
            "Delete all accounts",
          ],
          answer: 1,
          rationale: "CISA's four core steps are to avoid and report phishing scams, use strong passwords, use multifactor authentication and a password manager, and update software.",
          distractors: "The other answers describe risky behavior.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhw-q6',
          q: "What does the minimum necessary standard mean in practice for your digital work?",
          options: [
            "Share as much as you can so no one is left out",
            "Share only the least information needed, with only the people who need it, for the purpose at hand",
            "Never write anything down",
            "Use personal accounts for speed",
          ],
          answer: 1,
          rationale: "The privacy rule says to make reasonable efforts to limit protected health information to the minimum necessary to accomplish the intended purpose, which in practice means sharing only what is needed with the people who need it.",
          distractors: "The other answers either overshare, avoid documentation, or use unsafe channels.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Which digital skill would make the biggest difference for you if you improved it? Where could you learn it?",
          "Do you have any work information on a personal device or account? What will you change?",
        ] },
        { kind: 'takeaways', items: [
          "Digital literacy is a set of learnable skills. Ask for training and practice on low-stakes tasks.",
          "Four core steps: avoid and report phishing, use strong passwords, use multifactor authentication and a password manager, update software.",
          "Share the minimum necessary, use approved channels, and report mistakes right away.",
        ] },
        ev([
          "Northstar Digital Literacy (home page read November 10, 2026). The description of digital literacy standards and assessments.",
          "Cybersecurity and Infrastructure Security Agency. Cybersecurity Awareness Month page (read November 10, 2026). The four core steps. Unrelated text on the page about technology was ignored.",
          "45 CFR 164.502, Uses and disclosures of protected health information: general rules (Electronic Code of Federal Regulations). The minimum necessary standard. Only that provision was read, and legal advice on how the rule applies to you belongs to your program.",
          "The list of skills, the guidance on channels, and the steps if something goes wrong are practice guidance written for this course. Your program's policies govern.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-mhw-practice',
    title: 'Your work readiness and digital literacy practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: your work preferences and a draft summary, your accommodation request in plain words, your digital skills plan, and your information safety habits.',
    fields: [
      { id: 'prefs', label: 'Your work preferences', help: 'Write what kind of work you want, hours, setting, pay you need, what you want to avoid, and what you are good at. Add a three-sentence summary you could put at the top of a resume, and two references you could ask.', multiline: true },
      { id: 'request', label: 'A plain-words request', help: 'Write a request you could make at work for an adjustment linked to a health or other need, in plain words. Note who you would ask, that you would follow up in writing, and who you would turn to for help if it was refused.', multiline: true },
      { id: 'skills', label: 'Your digital skills plan', help: 'List five digital skills you use at work and rate your confidence in each. Choose two to improve, say where you will learn them, and set a date to check progress.', multiline: true },
      { id: 'safety', label: 'Your information safety habits', help: 'Write your habits for passwords, multifactor authentication, suspicious messages, devices, and channels. Add what you will do if you make a mistake and who you will tell.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'U.S. Equal Employment Opportunity Commission: Disability Discrimination and Employment Decisions', use: 'Your rights under the disability employment laws, in plain terms.', url: 'https://www.eeoc.gov/disability-discrimination-and-employment-decisions' },
    { name: 'U.S. Equal Employment Opportunity Commission: Enforcement Guidance on Reasonable Accommodation and Undue Hardship Under the ADA', use: 'How to request an accommodation and what employers may ask.', url: 'https://www.eeoc.gov/laws/guidance/enforcement-guidance-reasonable-accommodation-and-undue-hardship-under-ada' },
    { name: 'IPS Employment Center: Individual Placement and Support Practice Principles', use: 'Job preferences, benefits planning, and job supports.', url: 'https://ipsworks.org/wp-content/uploads/2026/01/IPS-Practice-Principles-Presentation-1.28.2026.pdf' },
    { name: 'Northstar Digital Literacy', use: 'Self-guided assessments and learning for basic digital skills.', url: 'https://www.digitalliteracyassessment.org/' },
    { name: 'CISA: Cybersecurity Awareness Month', use: 'Four core steps for staying safe online.', url: 'https://www.cisa.gov/secure-our-world' },
    { name: 'eCFR: 45 CFR 164.502, Uses and disclosures of protected health information', use: 'The general rules, including the minimum necessary standard.', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502' },
  ],
};
