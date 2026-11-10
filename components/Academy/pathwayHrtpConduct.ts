// Community Mental Health Worker Pathway, Foundations course 14: Professional Conduct, Ethics, and Safety.
//
// This is the certificate's own course 14 (id chw_professional_conduct, 3 hours). The id matches
// the certificate on purpose: the Academy posts every completed course to the portal, and the
// portal credits a learner only for ids it recognizes.
//
// Every statement of fact in this course was taken from a source that was opened and read while
// the course was written, and each lesson ends with the sources it rests on. Statutes are quoted
// from the text of the law, not from summaries. Where a rule depends on the learner's employer or
// role, the lesson says so and tells the learner what to ask, rather than guessing.
//
// Nothing here is presented as legal advice or as a certification. California does not certify
// community health workers, and the supervising Medi-Cal provider verifies a worker's training.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_PROFESSIONAL_CONDUCT: Course = {
  id: 'chw_professional_conduct',
  num: 14,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Professional Conduct, Ethics, and Safety',
  promise:
    'Hold a clear line between what you do, what you refer, and what you escalate; protect people\'s private information under the rules that actually apply; know when a report is required; keep yourself safe in the field; and build a plan to stay well in the work.',
  about: [
    'This course covers the part of community health work that keeps people safe and keeps the work trustworthy: your scope, your boundaries, privacy, reporting duties, safety in the field, and caring for yourself.',
    'It rests on the national community health worker competencies, the national competencies for peer workers in behavioral health, the text of federal and California confidentiality and reporting laws, federal workplace safety guidance, and the child traumatic stress network\'s guidance on secondary traumatic stress.',
    'It is Foundations course 14 of HMC\'s community health worker certificate. It teaches what the rules say and how to act on them. It is not legal advice. Your employer and your supervisor tell you which rules apply to your own role.',
  ],
  objectives: [
    'Sort everyday requests into do, refer, and escalate, and explain the limits of your role.',
    'Use a short routine to handle boundary questions, including gifts, money, social media, and sharing your own story.',
    'Say which privacy rules apply to which kind of record, and share only what a situation needs.',
    'Explain who is required to report suspected abuse, what the law says about who can report, and what to ask your employer on your first day.',
    'Write a personal field safety plan using a federal safety guideline for community-based workers.',
    'Name the risks of secondary traumatic stress and build a support plan that uses supervision and a trusted circle.',
  ],
  minutes: 180,
  prerequisites: 'None. Take The Community Health Worker Role, History, and Field first if you can.',
  whoFor:
    'People working or training in community health, peer support, outreach, or case management, including people with lived experience of homelessness, mental health conditions, substance use, or the justice system.',
  freshness:
    'Laws and agency rules change. The statutes and regulations in this course were read in their current published text when the course was written. Your employer and supervisor tell you which rules apply to your role today, and you should ask in writing.',
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-conduct-l1',
      title: 'What professional means in this work',
      summary: 'The national competencies behind the word, and the line between helping and treating.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          'People tell a community health worker things they have not told anyone. They do it because you are not a stranger in a white coat. You live near them, speak like them, or have been where they are. That trust is the whole tool, and it is easy to damage by accident.',
          'Being professional in this work does not mean being distant or formal. It means being reliable in the ways that let trust last: you do what you said, you keep private things private, you know where your role ends, and you ask for help before a small problem becomes a harm.',
        ] },
        { kind: 'concept', title: 'What the national standard says', text: [
          'In 2016 a national project called the Community Health Worker Core Consensus Project, known as C3, published its recommended list of community health worker roles, skills, and qualities. It lists eleven skill areas. One of them is called Professional Skills and Conduct.',
          'Under that heading the project lists ten abilities. They include setting goals and following a work plan, balancing priorities and managing time, applying critical thinking and problem solving, using pertinent technology, and pursuing continuing education. The last four are the ones this course spends the most time on. They are the ability to maximize personal safety while working in community and clinical settings, the ability to observe ethical and legal standards (the report names a community health worker code of ethics, the Americans with Disabilities Act, and HIPAA as examples), the ability to identify situations that call for mandatory reporting and carry out the reporting requirements, and the ability to set boundaries and practice self-care.',
          'The same report says that of all the qualities a community health worker can have, a close connection to the community served is seen as the most critical. So the standard asks for two things at once. Stay close to the community, and hold professional lines. This course is about doing both.',
        ] },
        { kind: 'vocab', items: [
          { term: 'Scope', plain: 'The set of things your role includes, and the things it does not.' },
          { term: 'Refer', plain: 'Connect someone to the person or service whose job it is to help with a need that is outside your role.' },
          { term: 'Escalate', plain: 'Bring something to your supervisor or an emergency service because it cannot wait or is beyond what you should handle alone.' },
          { term: 'Boundary', plain: 'A limit that protects the person you serve, the relationship, and you.' },
        ] },
        { kind: 'concept', title: 'The principles that shape how you help', text: [
          'The Substance Abuse and Mental Health Services Administration, known as SAMHSA, published core competencies for peer workers in behavioral health. They rest on five principles. The work is recovery-oriented, which means you hold out hope and help people build on their strengths. It is person-centered, which means the person directs the support. It is voluntary, which means you are a partner or consultant and you do not dictate services or the elements of someone\'s plan. It is relationship-focused, which means the relationship is respectful, trusting, empathetic, collaborative, and mutual. And it is trauma-informed, which means the work emphasizes physical, psychological, and emotional safety.',
          'These principles are a practical test for conduct. If an action takes control away from the person, it fails the voluntary and person-centered principles, even if you mean well. If an action makes the person feel unsafe or exposed, it fails the trauma-informed principle.',
        ] },
        { kind: 'concept', title: 'Knowing the limits of your knowledge', text: [
          'The SAMHSA competencies include one that sounds small and carries a lot. Peer workers recognize the limits of their knowledge and seek assistance from others when needed. They also use supervision well and recognize when their own judgments and feelings are being activated by the work.',
          'In practice this means you do not diagnose, you do not treat, and you do not tell someone to start or stop a medication. HMC states this on its intake and screening forms in plain words. HMC provides screening and education only, with no diagnosis or treatment. Your job is to listen, connect, teach what you have been trained to teach, and bring in the right person.',
        ] },
        { kind: 'steps', title: 'A quick way to sort a request', items: [
          { label: 'Do', text: 'It is inside your training and your organization\'s procedures. Examples include helping someone find a clinic, explaining what a screening result range means in the words your program gave you, or walking someone through a form.' },
          { label: 'Refer', text: 'It needs a person with a different role. Examples include a question about changing a medication, a legal question about an eviction, or a request for a diagnosis.' },
          { label: 'Escalate', text: 'It cannot wait or is bigger than you should handle alone. Examples include someone in danger, someone describing a plan to hurt themselves, or a report of abuse. Bring in your supervisor and, in an emergency, call 911.' },
        ] },
        { kind: 'case', title: 'Marisol and the medication question', scenario: true, text: [
          'Marisol is a community health worker at a resource table. A man in his fifties shows her a pill bottle and says his doctor wants him on it, but it makes him feel flat. He asks whether he should just stop taking it. She likes him and wants to help.',
          'The tempting move is to share what worked for someone she knows. But Marisol does not know his health history, the drug, or why it was prescribed. Stopping some medications suddenly can be harmful, and she cannot judge that.',
          'What she does instead is listen, tell him that how the medicine feels matters and his doctor needs to hear it, and help him plan how to raise it. She offers to help him book a visit or find a pharmacist who can answer questions today. She tells her lead about the conversation. That is a refer, done warmly, and it respects his voice and choice.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c14-q1',
          q: 'A person at your table asks whether they should stop their blood pressure medicine because it makes them tired. What is the best response?',
          options: [
            'Tell them it is probably fine to skip it for a few days',
            'Take their concern seriously, explain that their prescriber needs to hear about it, and help them plan how to reach that person',
            'Tell them you cannot discuss health topics',
            'Suggest a different medicine you have heard works well',
          ],
          answer: 1,
          rationale: 'You listen and connect them to the person whose role it is. Advising on medication is outside your scope, and so is refusing to engage.',
          distractors: 'Advising to skip a dose and suggesting another drug both treat a medical question as yours to answer. Refusing to talk breaks the relationship you are there to build.',
        } },
        { kind: 'reflect', title: 'Your own line', prompts: [
          'Think of a time someone helped you and a time someone overstepped. What was the difference?',
          'Which kind of request do you feel most tempted to answer yourself, even though it belongs to someone else?',
        ] },
        { kind: 'takeaways', items: [
          'Professional here means reliable, not distant. Stay close to the community and hold clear lines.',
          'The competencies ask you to recognize the limits of your knowledge and to seek help.',
          'Sort requests into do, refer, and escalate. Referring is a skill, not a refusal.',
        ] },
        ev([
          'Community Health Worker Core Consensus (C3) Project. Understanding Scope and Competencies: A Contemporary Look at the United States Community Health Worker Field. Progress Report, April 2016. Lists 10 roles and 11 skills, including Skill 9, Professional Skills and Conduct, with abilities a through j. States that a close connection to the community served is seen as the most critical quality.',
          'SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services (BRSS TACS). The five principles (recovery-oriented, person-centered, voluntary, relationship-focused, trauma-informed) and Category XII, Promotes growth and development, including recognizing the limits of knowledge and seeking assistance.',
          'California HCAI and DHCS. CHW/P/R Training Program Best Practices Framework: professional skills and conduct as a core competency area for training programs.',
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-conduct-l2',
      title: 'Boundaries and ethics: close, not crossed',
      summary: 'A routine for the situations that do not come with a rule, including your own story.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          'Most boundary questions in community work are not dramatic. A person offers you a gift. Someone asks for your personal number. A client in a hard stretch sends you a long message late at night. A friend asks what you know about a person you both know.',
          'These moments feel like kindness tests. If you say no too harshly, you can hurt trust. If you say yes without thinking, you can create a problem later, for the person, for you, and for the program. A boundary is not a wall. It is what makes it safe to stay close.',
        ] },
        { kind: 'concept', title: 'What the competencies expect', text: [
          'The SAMHSA peer worker competencies point to several habits that matter for boundaries. A peer worker understands their own personal values and culture and how these may contribute to biases, judgments, and beliefs. They appreciate and respect the cultural and spiritual beliefs of the people they serve. They recognize when to share experiences and when to listen. They use respectful, person-centered, recovery-oriented language. They follow laws and rules about confidentiality and respect others\' rights to privacy.',
          'The C3 skills list adds the ability to set boundaries and practice self-care, and the ability to observe ethical and legal standards. So boundaries are not an extra. They are written into the national standard for the job.',
        ] },
        { kind: 'concept', title: 'Sharing your own story', text: [
          'Many community mental health workers have lived experience, and that is a strength. The SAMHSA competencies treat sharing lived experience as a skill that is unique to peer support. They list abilities such as relating your own recovery story to inspire hope, discussing ongoing personal efforts to enhance health and wellness, and recognizing when to share experiences and when to listen.',
          'The skill is in the choosing. A story shared to give someone hope can help. A story shared because you needed to be heard in that moment puts the person in the position of helping you. Before you share, ask whether the story is for them or for you, and whether it keeps the focus on their goals.',
        ] },
        { kind: 'steps', title: 'A routine for a boundary question', items: [
          { label: 'Pause', text: 'You do not have to answer in the moment. "Let me think about that and get back to you" is a complete sentence.' },
          { label: 'Name', text: 'Say to yourself what is being asked. Is it a gift, money, time, access to you, information about another person, or something else?' },
          { label: 'Check', text: 'Look at your organization\'s written policy and ask your supervisor. If you are unsure, ask before you act, not after.' },
          { label: 'Test', text: 'Ask who benefits, whether the person keeps their voice and choice, whether it is fair to others you serve, and whether you would be comfortable explaining it to your supervisor.' },
          { label: 'Respond', text: 'Say it warmly and plainly. Offer what you can do in place of what you cannot.' },
          { label: 'Record', text: 'Tell your supervisor about anything significant, and write it down the way your program requires.' },
        ] },
        { kind: 'list', title: 'Common situations and a way to respond', items: [
          'A gift. "That means a lot, and I am not allowed to accept gifts. Your thanks is gift enough." Follow your organization\'s policy on small items, and ask when unsure.',
          'Money or a loan. Do not lend, borrow, or accept money from people you serve. Say that your job is to connect them to supports, and then do that.',
          'A personal number or social media request. Use the program\'s channels. "I want to keep this somewhere that my team can back me up, so please reach me through the program line."',
          'A friend or relative of a client asks about them. Say nothing about whether the person is a client. "I cannot talk about who I do or do not work with. I would be glad to share information about the program."',
          'A romantic or sexual interest. Your role includes power, even when it does not feel that way. Tell your supervisor, and hand the case to a colleague.',
          'Someone you serve is also your neighbor or relative. Tell your supervisor early. The program decides how to handle the overlap.',
        ] },
        { kind: 'case', title: 'Darnell and the late text', scenario: true, text: [
          'Darnell, a peer worker, has been walking with a man named Cal through a housing application. After a rough week Cal starts texting Darnell\'s personal phone at night, and the messages get darker. Darnell wants to be there for him.',
          'The kind and professional move is not to answer every message alone. Darnell tells Cal that he cares and that Cal deserves more support than one person at midnight. He gives Cal the program\'s after-hours options and the 988 Suicide and Crisis Lifeline. He tells his supervisor the next morning so the team can plan with Cal. If Cal had described a plan to hurt himself, Darnell would call for help at once and not wait for morning.',
          'Darnell did not pull away from Cal. He moved Cal\'s support from one tired person to a system that can hold him.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c14-q2',
          q: 'A person you serve offers you a gift card as thanks. Which response fits the routine in this lesson?',
          options: [
            'Accept it quietly so you do not hurt their feelings',
            'Thank them warmly, explain that you cannot accept it, and check your organization\'s policy or ask your supervisor if you are unsure',
            'Accept it and give half to a coworker',
            'Tell them they should be ashamed for offering',
          ],
          answer: 1,
          rationale: 'A warm, plain no keeps the relationship intact, and checking policy before acting is part of the routine.',
          distractors: 'Accepting a gift without checking policy, splitting it, or shaming the person all create problems of their own.',
        } },
        { kind: 'reflect', title: 'Where you hold the line', prompts: [
          'Which of the situations above would be hardest for you? What would you say?',
          'Whose voice do you want in your head when a boundary question comes up, and who would you call?',
        ] },
        { kind: 'takeaways', items: [
          'Boundaries make it safe to stay close. They are written into the national competencies.',
          'Sharing your story is a skill. Choose it, do not let it happen.',
          'Pause, name, check, test, respond, record. Ask before you act when you are unsure.',
        ] },
        ev([
          'SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category IV, Personalizes peer support (understands own values and culture and how they may contribute to bias); Category III, Shares lived experiences of recovery (recognizes when to share experiences and when to listen); Category IX, Values communication (respectful language, follows laws and rules concerning confidentiality).',
          'C3 Project report, April 2016. Skill 9, abilities g (observe ethical and legal standards) and j (set boundaries and practice self-care).',
          'The routine in this lesson is an HMC teaching device built on those competencies. It is not a legal standard. Your organization\'s written conduct policy governs your role.',
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-conduct-l3',
      title: 'Privacy and confidentiality: the rules behind the habit',
      summary: 'What HIPAA, the federal substance use records rule, and California mental health law each say.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          'Privacy is what lets someone say the true thing. A person who fears that their story will travel will give you the safe version. People who have been surveilled, judged, or outed know this better than anyone.',
          'You will hear the word HIPAA often. It is only one of several rules, and which rules apply depends on the kind of record and the kind of organization. This lesson separates the three you are most likely to meet, so you know what each one is for and what to ask.',
        ] },
        { kind: 'concept', title: 'HIPAA: the general health privacy rule', text: [
          'HIPAA is a federal law. Its privacy rule is written for organizations it calls covered entities, and for their business associates, which are organizations that work with them under a business associate contract. Whether the rule applies to your own work depends on whether your organization is one of those. Ask your supervisor. Do not assume it does or does not.',
          'The text of the rule lists when a covered entity is permitted to use or disclose protected health information. The permitted cases include disclosure to the individual, use for treatment, payment, or health care operations, and use or disclosure under a valid written authorization. There are other permitted cases listed in the rule as well.',
          'The rule also sets a standard called minimum necessary. When using, disclosing, or requesting protected health information, a covered entity or business associate must make reasonable efforts to limit it to the minimum necessary to accomplish the purpose. The rule lists exceptions, including disclosures to or requests by a health care provider for treatment, disclosures to the individual, disclosures under an authorization, and disclosures required by law.',
        ] },
        { kind: 'concept', title: 'Substance use treatment records have their own rule', text: [
          'A separate federal regulation, 42 CFR Part 2, protects records that identify a patient as having or having had a substance use disorder when those records come from a federally assisted substance use disorder program and relate to treatment, diagnosis for treatment, or referral for treatment. The regulation defines federal assistance broadly, including operating under a federal license or certification.',
          'Part 2 is stricter in important ways. The regulation says records may be used or disclosed only as the regulation permits, and that any permitted disclosure must be limited to what is necessary for its purpose. It says the restrictions apply whether or not the person asking believes they already have the information, and whether the person asking is a law enforcement official or has a subpoena, unless the regulation itself permits the disclosure. It also says that the presence of an identified patient in a facility that is publicly identified as a place where only substance use treatment is provided may be acknowledged only with written consent or a court order that meets the regulation.',
          'The everyday meaning is simple. If someone calls and asks whether a person is in a substance use program, do not confirm or deny. Take a message, tell the person you cannot share information, and bring it to your supervisor.',
        ] },
        { kind: 'concept', title: 'California mental health records', text: [
          'California has its own rule for mental health services. Section 5328 of the Welfare and Institutions Code says that all information and records obtained in providing services under the listed divisions of the code, to voluntary or involuntary recipients, are confidential. It then says the information and records shall be disclosed only in the cases the section lists.',
          'One listed case is communication between qualified professional persons in the provision of services or appropriate referrals, and the section sets consent requirements for some of those disclosures. The list is long and specific. The takeaway for you is not to memorize it. It is that confidential is the starting point, and disclosure is the exception that someone with the right authority decides.',
        ] },
        { kind: 'myths', items: [
          { myth: 'If it is not in a medical chart, it is not private.', reality: 'Your own notes, texts, voicemails, and conversations can carry private information. Treat anything that identifies a person and their situation as private.' },
          { myth: 'If a family member or an officer asks, I have to answer.', reality: 'Several of these rules say disclosure is allowed only as the rule permits, whoever is asking. Do not answer on the spot. Say you cannot share information and bring it to your supervisor.' },
          { myth: 'HIPAA covers everything I do.', reality: 'The rule is written for covered entities and their business associates. Other rules apply to other records. Ask which apply to your role.' },
          { myth: 'Minimum necessary means I cannot tell anyone anything.', reality: 'It means limiting what you share to what the purpose needs. The rule has exceptions, including treatment disclosures between providers and disclosures the person authorizes.' },
        ] },
        { kind: 'steps', title: 'Habits that protect privacy in daily work', items: [
          { label: 'Ask', text: 'Before you share, ask whether the person agreed, whether the receiver needs it, and whether it is the least you can share.' },
          { label: 'Place', text: 'Talk about people only where others cannot overhear. Do not use names in public or in a group chat.' },
          { label: 'Channel', text: 'Use the program\'s approved phone, email, text, or messaging system. Do not use personal accounts for client information unless the program says it is allowed.' },
          { label: 'Device', text: 'Lock your phone and laptop. Do not leave paper at a table or in a car.' },
          { label: 'Confirm', text: 'Check the number or address before you send. A message to the wrong person is a disclosure.' },
          { label: 'Tell', text: 'If you share something by mistake, tell your supervisor right away. Reporting fast limits the harm.' },
        ] },
        { kind: 'case', title: 'The message to the case manager', scenario: true, text: [
          'Imani has helped a young woman, Rosa, apply for housing and wants to update the case manager at the program that will receive her. She types a message. It names Rosa, her housing status, her health condition, her recent hospital visit, and her family situation.',
          'Imani stops and rereads. The case manager needs to know that Rosa is eligible, what documents are ready, and what the next date is. The case manager does not need the hospital visit or the family detail to schedule the appointment. Rosa had also not agreed to share those parts.',
          'Imani cuts the message down to what the purpose needs, sends it through the program\'s approved channel, and tells Rosa exactly what was shared. When something more is needed, she asks Rosa first.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c14-q3',
          q: 'A caller says they are a family member and asks whether a named person comes to your program for substance use treatment. What do you do?',
          options: [
            'Confirm it, since family should know',
            'Say you cannot confirm or deny anything about who the program serves, and bring the call to your supervisor',
            'Tell them to ask the person directly, and describe what they will find',
            'Give them the person\'s phone number so they can check',
          ],
          answer: 1,
          rationale: 'Confirming that someone is a patient of a substance use program is itself a disclosure. The rule treats this with great care, so you neither confirm nor deny and you bring it to your supervisor.',
          distractors: 'Confirming, hinting, or handing over a number all reveal that the person is connected to the program.',
        } },
        { kind: 'check', check: {
          id: 'hrtp-c14-q4',
          q: 'Which statement best describes the minimum necessary idea?',
          options: [
            'Never share anything about anyone',
            'Limit what you use, share, or request to what the purpose actually needs, and know the exceptions the rule lists',
            'Share everything with the whole team so nobody is surprised',
            'Share whatever the person asking requests',
          ],
          answer: 1,
          rationale: 'The standard asks for reasonable efforts to limit information to what the purpose requires, and it lists exceptions such as treatment disclosures and authorized disclosures.',
          distractors: 'Sharing nothing and sharing everything are both unprofessional extremes. Sharing whatever is asked ignores the purpose.',
        } },
        { kind: 'takeaways', items: [
          'HIPAA, the federal substance use records rule, and California mental health law are different rules for different records.',
          'Ask your supervisor which ones apply to your role.',
          'When you are unsure or someone pressures you, do not answer on the spot. Say you cannot share information and bring it to your supervisor.',
        ] },
        ev([
          'U.S. Department of Health and Human Services. 45 CFR 164.502, Uses and disclosures of protected health information: general rules. Paragraph (a) lists permitted uses and disclosures. Paragraph (b) sets the minimum necessary standard and lists its exceptions.',
          'Electronic Code of Federal Regulations. 42 CFR 2.12, Applicability, and 42 CFR 2.13, Confidentiality restrictions and safeguards. Text read from the Legal Information Institute copy of the e-CFR.',
          'California Welfare and Institutions Code section 5328. All information and records obtained in providing the listed services are confidential and shall be disclosed only in the listed cases. Text read from the California Public Law copy of the code.',
          'SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category IX, competency 6, follows laws and rules concerning confidentiality and respects others\' rights for privacy.',
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-conduct-l4',
      title: 'When a report is required',
      summary: 'What the child and adult abuse reporting laws say, and what to ask on your first day.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          'Confidentiality has a few built-in limits where the law says protecting a person from serious harm comes first. Suspected abuse of a child, or of an older or dependent adult, is the main one you will meet in community health work.',
          'The C3 report lists as one of its professional abilities the ability to identify situations calling for mandatory reporting and carry out mandatory reporting requirements. This lesson shows you where the law defines who must report, and gives you a plan for what to do when you are not sure.',
        ] },
        { kind: 'concept', title: 'Who is a mandated reporter of child abuse in California', text: [
          'California\'s Penal Code section 11165.7 defines who is a mandated reporter for child abuse and neglect. It is a long list of roles. Many are in schools, child care, and youth programs. It includes an administrator, board member, or employee of a public or private organization whose duties require direct contact and supervision of children. It includes a public assistance worker. It includes a social worker, probation officer, or parole officer. It includes physicians, nurses, psychologists, marriage and family therapists, clinical social workers, professional clinical counselors, and anyone else currently licensed under the Business and Professions Code division the statute names. It also includes emergency medical technicians and paramedics, and employees of police, sheriff, probation, or county welfare departments.',
          'This lesson cannot tell you whether you are on that list, because it depends on your role and your employer. What matters is that you are never left guessing. Ask in writing on your first day. A good question is, "Am I a mandated reporter in this job, for children and for older or dependent adults, and what is the procedure?"',
        ] },
        { kind: 'concept', title: 'Who can make a report', text: [
          'Section 11165.9 covers where reports go. It says reports of suspected child abuse or neglect are made by mandated reporters to a police or sheriff\'s department, to a county probation department if the county designates it to receive reports, or to the county welfare department. It says those agencies shall accept a report whether it is offered by a mandated reporter or another person. That means you do not need to be sure you are a mandated reporter to make a report. Anyone may call.',
          'The same section says that if an agency lacks jurisdiction, it must refer the case on to one that has it. You do not have to figure out which agency is right. Call, and let the agency route it.',
        ] },
        { kind: 'concept', title: 'Older and dependent adults', text: [
          'California\'s Welfare and Institutions Code section 15630 covers mandated reporting for elders and dependent adults. It says a person who has assumed full or intermittent responsibility for the care or custody of an elder or dependent adult, whether or not they receive compensation, is a mandated reporter. It also names administrators, supervisors, and licensed staff of facilities that provide care or services, care custodians, health practitioners, clergy members, and employees of county adult protective services and local law enforcement agencies.',
          'The section says a mandated reporter who, in their professional capacity or within the scope of their employment, observes or knows of something that reasonably appears to be physical abuse, abandonment, abduction, isolation, financial abuse, or neglect, or is told of it by the elder or dependent adult, or reasonably suspects abuse, must report by telephone or through a confidential internet reporting tool, immediately or as soon as practicably possible.',
          'Again, you may or may not be on the list. What you take from it is the habit. When someone tells you or shows you something that looks like harm to a child or an older or dependent adult, you do not wait to be certain, and you do not investigate.',
        ] },
        { kind: 'steps', title: 'What to do if you think a report may be needed', items: [
          { label: 'Stay', text: 'Stay calm and keep listening. Thank the person for telling you. Do not promise secrecy. Say, "I want to help, and I may need to involve people whose job is to keep you safe."' },
          { label: 'Danger', text: 'If someone is in immediate danger, call 911.' },
          { label: 'Do not investigate', text: 'Do not question the person for details, confront anyone, or gather evidence. Your job is to notice and pass it on.' },
          { label: 'Same day', text: 'Tell your supervisor the same day, following your program\'s written procedure. If you cannot reach them and you think harm is possible, make the report yourself. Agencies accept reports from anyone.' },
          { label: 'Write', text: 'Write down what you saw and heard in plain words, with date and time. Use the person\'s own words where you can. Keep to facts, not guesses.' },
          { label: 'Follow up', text: 'Ask your supervisor what happens next, and look after yourself. These moments are heavy.' },
        ] },
        { kind: 'case', title: 'The thing Mr. Alvarez said', scenario: true, text: [
          'During a wellness check, Mr. Alvarez, an older man who depends on his nephew for care, mentions that his nephew has been using his bank card and that there is not enough left to pay for his medicine. He seems embarrassed and asks Luz, the community health worker, not to tell anyone.',
          'Luz does not promise secrecy. She thanks him for trusting her, says she is worried, and explains that this may be something she has to pass on so that people whose job is to protect older adults can help. She does not confront the nephew. She tells her supervisor that day, writes down what Mr. Alvarez said in his own words, and follows her program\'s procedure. She also asks her supervisor whether she herself is a mandated reporter, because she had never asked.',
          'Luz did not need certainty to act. She needed to stay calm, avoid investigating, write it down, and bring it to the right people at once.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c14-q5',
          q: 'A person you serve tells you something that sounds like a child is being harmed, and asks you to keep it secret. What fits this lesson?',
          options: [
            'Promise secrecy so they keep trusting you, and do nothing',
            'Do not promise secrecy, stay calm, call 911 if there is immediate danger, tell your supervisor the same day, and write down what you heard',
            'Confront the adult the child lives with so they stop',
            'Wait to see whether it happens again before telling anyone',
          ],
          answer: 1,
          rationale: 'You cannot promise secrecy about harm to a child. You stay calm, bring in people whose job is protection, document facts, and call 911 if the danger is immediate.',
          distractors: 'Secrecy, confrontation, and waiting all leave the child at risk and can make things worse.',
        } },
        { kind: 'check', check: {
          id: 'hrtp-c14-q6',
          q: 'According to the text of Penal Code section 11165.9, who can make a report of suspected child abuse to the listed agencies?',
          options: [
            'Only licensed physicians',
            'Only people who have completed a mandated reporter course',
            'The agencies accept a report whether it comes from a mandated reporter or another person',
            'Only a parent or guardian of the child',
          ],
          answer: 2,
          rationale: 'The section says the agencies shall accept a report whether it is offered by a mandated reporter or another person.',
          distractors: 'The statute does not limit who may call. You do not need to be sure you are a mandated reporter before you report.',
        } },
        { kind: 'takeaways', items: [
          'The law defines mandated reporters by role. Ask your employer in writing whether you are one.',
          'Anyone can report suspected child abuse to the listed agencies, and the agencies must accept the report.',
          'Do not promise secrecy, do not investigate, call 911 for immediate danger, tell your supervisor the same day, and document facts.',
        ] },
        ev([
          'California Penal Code section 11165.7, definition of mandated reporter. The list of covered roles, including employees of organizations whose duties require direct contact and supervision of children, public assistance workers, social workers, and licensed health professionals. Text read from the California Public Law copy of the code.',
          'California Penal Code section 11165.9, where reports are made. The agencies shall accept a report whether it is offered by a mandated reporter or another person.',
          'California Welfare and Institutions Code section 15630, mandated reporters and the duty to report abuse of elders and dependent adults.',
          'C3 Project report, April 2016. Skill 9, ability h, identify situations calling for mandatory reporting and carry out mandatory reporting requirements.',
          'This lesson teaches what the statutes say and how to act on them. It is not legal advice. Your employer and supervisor tell you whether you are a mandated reporter.',
        ]),
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────────────────
    {
      id: 'chw-conduct-l5',
      title: 'Safety in the field',
      summary: 'A federal guideline for community-based workers, turned into a personal safety plan.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          'Community health work happens in homes, on sidewalks, in parking lots, at tables set up in public. That is where the trust is. It is also where help is far away if something goes wrong.',
          'The C3 skills list includes the ability to maximize personal safety while working in community and clinical settings. A federal workplace safety guideline for healthcare and social service workers gives a clear framework for how to do that. You can use it without turning a caring job into a fearful one.',
        ] },
        { kind: 'concept', title: 'The federal guideline and who it is for', text: [
          'The Occupational Safety and Health Administration, known as OSHA, published Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers (publication 3148, 2016 revision). It covers a wide range of settings. One category it names is field work, which it describes as including home healthcare workers or social workers who make home visits. Community health work often fits that category.',
          'The guideline is voluntary guidance, and it says the setting determines which hazards exist and which controls are available. It organizes a violence prevention program into five elements. They are management commitment and worker participation, worksite analysis and hazard identification, hazard prevention and control, safety and health training, and recordkeeping and program evaluation.',
          'The first element includes worker participation. That means your voice matters. If you see a hazard on a route or at a site, tell your supervisor. Raising a safety concern is part of the program, not a complaint.',
        ] },
        { kind: 'list', title: 'Risk factors the guideline names that matter in field work', items: [
          'Working alone in a facility or in people\'s homes.',
          'Working in neighborhoods with high crime rates.',
          'Poorly lit corridors, rooms, parking lots, and other areas.',
          'Lack of a means of emergency communication.',
          'Transporting people you serve.',
          'Working with people who have a history of violence or who are using drugs or alcohol, and relatives of clients.',
          'Lack of training in recognizing and managing escalating hostile behavior, and working short-staffed.',
        ] },
        { kind: 'concept', title: 'Controls the guideline lists for field workers', text: [
          'For workers in the field the guideline recommends several practical controls. Workers should have a means of communication, either a cell phone or a panic device. Organizations should develop a policy for when a buddy system should be used. Workers should be advised to exercise extra care in unfamiliar residences. Where stalking is suspected, an organization may vary check-in and check-out times and travel routes for the affected worker. In buildings, staff are advised to exercise extra care in elevators and stairwells, and the guideline recommends well-lit, highly visible parking areas with escorts available in evening and late hours.',
          'The guideline also lists topics for worker training. They include risk factors that contribute to assaults, early recognition of escalating behavior and warning signs, ways to recognize, prevent, and defuse volatile situations, how to handle hostile people other than clients such as relatives and visitors, a standard response plan for violent situations, using the buddy system, reporting and recordkeeping, and how to get care and support after a violent incident.',
        ] },
        { kind: 'steps', title: 'Before you go', items: [
          { label: 'Tell', text: 'Tell your lead or supervisor where you are going, who you are meeting if you know, and when you will check in. Check in when you said you would.' },
          { label: 'Pair', text: 'Use the buddy system when your program says to, and ask for it if you feel uneasy about a site.' },
          { label: 'Phone', text: 'Carry a charged phone and know where signal is weak. Save the emergency numbers you need.' },
          { label: 'Route', text: 'Know your route, where you will park, and how you will leave. Choose well-lit, visible parking when you can.' },
          { label: 'Plan', text: 'Know the exits. Keep your keys in your hand and your bag light. Leave valuables behind.' },
        ] },
        { kind: 'steps', title: 'When you are there', items: [
          { label: 'Look', text: 'Notice the space, the people, and your own feeling. Trust your sense that something is off.' },
          { label: 'Space', text: 'Keep an open path out and a respectful distance.' },
          { label: 'Calm', text: 'Speak slowly and lower your voice. Offer space and a choice.' },
          { label: 'Leave', text: 'You may always leave. Say you have to go, and go. You do not owe an explanation at the scene.' },
          { label: 'Report', text: 'Tell your supervisor about any incident or near miss as soon as you can, and write it down. Reporting is how the program learns where to add safeguards.' },
        ] },
        { kind: 'case', title: 'The stairwell visit', scenario: true, text: [
          'Tomas is a community health worker doing a first visit at an apartment building he does not know. It is late afternoon. The stairwell is dim and the person he is meeting has been irritable on the phone.',
          'Before leaving, Tomas told his lead the address and time and agreed to text when he was done. He parked in the lit lot across the street. He takes the elevator rather than the stairwell and keeps his phone in his hand. When he arrives, the person is agitated and talking about a family member who is "causing trouble." Tomas stays near the door, speaks slowly, and says he can come back another day if it would be easier. The person calms down, but Tomas ends the visit early and texts his lead.',
          'Nothing happened. Tomas did the dull, useful things, and he left when his gut told him to. He then told his supervisor that the stairwell light was out, so the program could decide whether future visits there should be done in pairs.',
        ] },
        { kind: 'tryit', title: 'Test your own plan', text: [
          'Think of the last place you went to do community work, or a place you expect to go. Without looking anything up, can you answer these five questions? Who knows where you are? How will you reach help? Where will you park? How will you leave? What is the signal that makes you end the visit? If any answer is blank, that blank is your next step.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c14-q7',
          q: 'Which of these is one of the five elements of a workplace violence prevention program in the OSHA guideline?',
          options: [
            'Hazard prevention and control',
            'Client discharge planning',
            'Billing and reimbursement',
            'Staff recruitment events',
          ],
          answer: 0,
          rationale: 'The five elements are management commitment and worker participation, worksite analysis and hazard identification, hazard prevention and control, safety and health training, and recordkeeping and program evaluation.',
          distractors: 'The other options are business functions, not elements of the safety program.',
        } },
        { kind: 'check', check: {
          id: 'hrtp-c14-q8',
          q: 'You feel uneasy partway through a home visit. What does the lesson say about leaving?',
          options: [
            'You must finish the visit once you have started',
            'You may always leave, you do not owe an explanation at the scene, and you tell your supervisor afterward',
            'You should confront the person about why you feel uneasy',
            'You should only leave if someone threatens you directly',
          ],
          answer: 1,
          rationale: 'Leaving is always allowed. You tell your supervisor afterward so the program can respond.',
          distractors: 'Staying through a bad feeling or confronting someone raises the risk, and waiting for a direct threat means waiting too long.',
        } },
        { kind: 'takeaways', items: [
          'Field work is one of the settings the federal guideline names. Its controls include a way to communicate, a buddy system policy, and extra care in unfamiliar places.',
          'Tell someone where you are, know your route and your exit, and check in when you said you would.',
          'You may always leave. Report incidents and near misses so the program can improve.',
        ]},
        ev([
          'U.S. Department of Labor, OSHA. Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers, OSHA 3148-06R, 2016. Five program elements, field work settings, risk factors, controls for field workers (communication, buddy system, extra care in unfamiliar residences, varying check-in times where stalking is suspected), and training topics.',
          'C3 Project report, April 2016. Skill 9, ability f, maximize personal safety while working in community and/or clinical settings.',
          'HMC Field Safety Protocols module. Your lead\'s instructions at a site always come first.',
        ]),
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────────────────
    {
      id: 'chw-conduct-l6',
      title: 'Staying well in the work',
      summary: 'Secondary traumatic stress, supervision, and a support plan you can actually keep.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          'Hearing hard stories is part of this job. People who do it for a long time often carry some of what they hear, and many of them also carry their own history. That is not a flaw. It is a known feature of the work, and the way to handle it is to plan for it before it builds.',
          'The C3 skills list ends its professional skills with the ability to set boundaries and practice self-care. The SAMHSA competencies include reflecting on your own motivations, judgments, and feelings that the work may activate, recognizing signs of distress, and knowing when to seek support. Staying well is a professional skill, not a luxury.',
        ] },
        { kind: 'concept', title: 'What secondary traumatic stress is', text: [
          'The National Child Traumatic Stress Network describes secondary traumatic stress as a common occupational hazard for professionals working with traumatized children. It is related to post-traumatic stress and to vicarious trauma. Its guidance is written for people who work with children, and the way it describes the strain, hearing other people\'s trauma accounts and carrying them, fits community health and peer work too.',
          'The Network\'s guidance names factors that raise the risk. They include a heavy caseload of traumatized children, which for you reads as a heavy load of people carrying trauma, being socially or organizationally isolated, having unresolved personal trauma, and feeling professionally compromised by inadequate training. It also notes that longer experience and the use of evidence-based practice are protective. It reports that secondary traumatic stress often predicts that a worker will leave the field.',
          'This course does not give you a checklist to diagnose yourself. If you are worried about how you are doing, talk to your supervisor or a clinician. What matters is that you treat the strain as real and ordinary, not as proof that you are not cut out for the work.',
        ] },
        { kind: 'concept', title: 'What actually helps', text: [
          'The Network says the most important strategy is a triad of psychoeducation, skills training, and supervision. For organizations it lists adequate supervision, including reflective supervision, caseload balance, workplace self-care groups, flexible scheduling, enhancing staff physical safety, training that includes secondary traumatic stress, partnerships with providers who can help, and ongoing assessment of staff risk and resilience.',
          'For individuals it lists using supervision to address it, building self-awareness, keeping a healthy balance between work and the rest of life, exercise and good nutrition, staying connected with other people, making and following a personal wellness plan, continuing training, using employee assistance or counseling when needed, and joining a self-care accountability buddy system.',
          'Notice how many of these live in the organization, not in you. Supervision, caseload balance, and flexible scheduling are not things you can fix with willpower. Part of professional conduct is asking for them.',
        ] },
        { kind: 'concept', title: 'Using supervision well', text: [
          'The SAMHSA competencies describe using supervision effectively. That means preparing for meetings, monitoring yourself and your relationships, and working through problems with your supervisor or a mentor. It also means reflecting on your own motivations, judgments, and feelings that the peer work may activate.',
          'A short way to prepare is to bring three things. Bring one thing that went well, one thing that is stuck, and one thing that is weighing on you. If you only ever bring tasks, supervision becomes a status report. Bring the weight.',
        ] },
        { kind: 'list', title: 'Questions to ask yourself each week', items: [
          'Who did I talk to about the hard parts of this week?',
          'Did I get enough rest, food, and time away from the work?',
          'Is my caseload steady, or is it too heavy, and have I said so?',
          'Is something I heard still taking up space in my head?',
          'What am I looking forward to outside work?',
        ] },
        { kind: 'case', title: 'Keisha and the second month', scenario: true, text: [
          'Keisha started as a peer worker in the spring and loved it. By her second month she is taking calls at night and thinking about a client\'s story on her days off. She tells no one because she thinks the others are coping fine.',
          'At her next supervision she brings her three things. A client she helped into housing. A family she cannot reach. And the weight of one story she cannot put down. Her supervisor does not tell her to toughen up. Together they trim her evening calls, schedule her debrief with a peer, and add her to the team\'s self-care check-in. Keisha says afterward that the relief came less from any trick than from not carrying it alone.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c14-q9',
          q: 'According to the National Child Traumatic Stress Network, which is described as the most important strategy for addressing secondary traumatic stress?',
          options: [
            'Working longer hours to stay ahead of it',
            'A triad of psychoeducation, skills training, and supervision',
            'Keeping your feelings private from colleagues',
            'Avoiding clients who have experienced trauma',
          ],
          answer: 1,
          rationale: 'The Network lists psychoeducation, skills training, and supervision as the most important strategy.',
          distractors: 'Working longer, hiding feelings, and avoiding clients all increase isolation or strain, which are risk factors.',
        } },
        { kind: 'reflect', title: 'Your support', prompts: [
          'Who are the three people you can call after a hard day, and have you told them they are on that list?',
          'What is one thing you will ask your organization for in supervision that does not depend on your willpower?',
        ] },
        { kind: 'takeaways', items: [
          'Secondary traumatic stress is a known hazard of the work, not a personal failing.',
          'Supervision, balanced caseloads, and connection are the strongest protections. Ask for them.',
          'Bring the weight to supervision, not only the tasks.',
        ] },
        ev([
          'National Child Traumatic Stress Network. Secondary Traumatic Stress, Introduction. Risk factors, protective factors, the triad of psychoeducation, skills training, and supervision, and the lists of organizational and individual strategies.',
          'SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category XII, Promotes growth and development, competencies 2 and 3.',
          'C3 Project report, April 2016. Skill 9, ability j, set boundaries and practice self-care.',
          'If you are worried about your own wellbeing, talk to your supervisor, a clinician, or your organization\'s employee assistance program. In an emergency, call 911, or call or text 988.',
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c14-practice',
    title: 'Your professional practice file',
    minutes: 30,
    purpose: 'Five short pieces of practice that you keep: your scope sheet, your boundary plan, a privacy rewrite, your safety plan, and your support plan.',
    fields: [
      { id: 'scope', label: 'Your scope sheet', help: 'Sort these six requests into do, refer, or escalate, and write one sentence on how you would say it to the person. 1) Where is the nearest clinic that takes walk-ins? 2) Can I stop taking my medicine? 3) I do not feel safe going home. 4) Can you tell me if this mole is cancer? 5) Help me fill out this housing form. 6) My son told me his stepfather hits him.', multiline: true },
      { id: 'boundary', label: 'Your boundary plan', help: 'Pick two boundary situations from Lesson 2 that would be hardest for you. For each, write exactly what you would say, and who you would tell.', multiline: true },
      { id: 'privacy', label: 'Rewrite a message', help: 'Here is a draft. "Rosa M., 24, housing application pending, hospitalized last week for a panic attack, her mother is in jail, she tested positive for something at the clinic." Rewrite it for a case manager who needs only to schedule a housing appointment. Say what you left out and why.', multiline: true },
      { id: 'safety', label: 'Your field safety plan', help: 'For a real or imagined visit, write who knows where you are, how you will check in, your route and parking, your exit, the sign that makes you end the visit, and who you will tell afterward.', multiline: true },
      { id: 'support', label: 'Your support plan', help: 'Name three people you can call, one thing you will ask for in supervision, two things you will do each week to stay well, and one sign that tells you it is time to ask for more help.', multiline: true },
    ],
    reference: { title: 'Six requests for your scope sheet', items: [
      'Where is the nearest clinic that takes walk-ins?',
      'Can I stop taking my medicine?',
      'I do not feel safe going home.',
      'Can you tell me if this mole is cancer?',
      'Help me fill out this housing form.',
      'My son told me his stepfather hits him.',
    ] },
  },
  furtherLearning: [
    { name: 'C3 Project: Understanding Scope and Competencies, a Contemporary Look at the U.S. CHW Field (2016)', use: 'The national list of 10 roles and 11 skills, including Professional Skills and Conduct.', url: 'https://portal.ct.gov/-/media/ohs/sim/chw-advisory-committee/2016/2016-06-14/chw-c3-report.pdf' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The five principles and twelve competency categories for peer support.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
    { name: 'eCFR: 45 CFR 164.502, Uses and disclosures of protected health information', use: 'The text of the HIPAA general rule, including minimum necessary.', url: 'https://www.law.cornell.edu/cfr/text/45/164.502' },
    { name: 'eCFR: 42 CFR Part 2, Confidentiality of substance use disorder patient records', use: 'Applicability and confidentiality restrictions for substance use treatment records.', url: 'https://www.law.cornell.edu/cfr/text/42/2.13' },
    { name: 'California Penal Code sections 11165.7 and 11165.9; Welfare and Institutions Code section 15630', use: 'Who is a mandated reporter, who may report, and the duty to report abuse of elders and dependent adults.', url: 'https://california.public.law/codes/penal_code_section_11165.7' },
    { name: 'OSHA: Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers (3148-06R)', use: 'The five program elements and field worker controls.', url: 'https://www.osha.gov/sites/default/files/publications/osha3148.pdf' },
    { name: 'National Child Traumatic Stress Network: Secondary Traumatic Stress', use: 'Risk factors, protective factors, and strategies for workers and organizations.', url: 'https://www.nctsn.org/trauma-informed-care/secondary-traumatic-stress/introduction' },
  ],
};
