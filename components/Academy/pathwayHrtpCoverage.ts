// Community Mental Health Worker Pathway, Foundations course 2: Public Health, Medi-Cal, and Social Programs.
//
// This is the certificate's own course 2 (id chw_public_health_systems, 4 hours). The id matches
// the certificate on purpose: the Academy posts every completed course to the portal, and the
// portal credits a learner only for ids it recognizes.
//
// Every statement of fact in this course was taken from a source that was opened and read on
// November 10, 2026, and each lesson ends with the sources it rests on. Coverage rules for Medi-Cal
// are changing on a published schedule through 2028, and the sources do not always agree on dates.
// The course teaches the durable structure, shows the schedule as the newest source gave it, says
// where sources disagree, and teaches the learner how to check the current rule before acting.
//
// Nothing here is legal advice, eligibility advice, or immigration advice. A community health
// worker helps people apply, renew, and understand notices. The county decides eligibility.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_PUBLIC_HEALTH_SYSTEMS: Course = {
  id: 'chw_public_health_systems',
  num: 2,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Public Health, Medi-Cal, and Social Programs',
  promise:
    "Explain what public health is and who does it, map the coverage and benefit programs people actually use, help someone apply for and keep Medi-Cal, track the rule changes coming through 2028, and know exactly where your role stops and the county's decision begins.",
  about: [
    "This course covers the systems that sit around a person's health: the public health system that protects whole communities, the coverage programs that pay for care, and the social programs that pay for food and other basics. A community health worker who understands these systems can turn a confusing letter into a plan.",
    "It rests on the open public health textbook that sets out the core functions and ten essential services, the federal Medicare site, the California food assistance program site, the California WIC program site, a disability rights training on Medi-Cal, and Los Angeles County's own Medi-Cal coverage guide for case managers, last updated October 29, 2026.",
    "It is Foundations course 2 of HMC's community health worker certificate. It teaches how the programs work and how to help. It does not teach you to decide who qualifies. The county decides that.",
  ],
  objectives: [
    "Describe the three core functions and ten essential services of public health and say where a community health worker fits.",
    "Draw a coverage map showing how Medi-Cal, Medicare, and other coverage work alone and together.",
    "Explain full-scope and restricted-scope Medi-Cal, managed care and fee-for-service, and what medically necessary means.",
    "Walk someone through applying for, renewing, and reactivating Medi-Cal, and respond to a notice before its deadline.",
    "Name the Medi-Cal changes scheduled through 2028, say where sources disagree, and find the current rule before you act.",
    "Explain how Medicare is organized and where Medi-Cal fits for people who have both.",
    "Describe CalFresh and WIC, what each needs from an applicant, and what you may and may not do about eligibility.",
  ],
  minutes: 240,
  prerequisites: "None. Take The Community Health Worker Role, History, and Field first if you can.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people who have navigated these programs for themselves or their families.",
  freshness:
    "Medi-Cal rules are changing in stages through 2028, and the sources used here were read on November 10, 2026. Dates already differ between sources. Before you tell anyone a date, a limit, or a deadline, check the Department of Health Care Services Medi-Cal changes page, the county benefits office, or your supervisor.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ph-l1',
      title: 'What public health is, and who does it',
      summary: 'Three core functions, ten essential services, and where a community health worker sits inside them.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Most of us meet the health system one visit at a time. A clinic, a pharmacy, a hospital. Public health is the part of the system that looks at the whole community at once. It asks why a neighborhood has more asthma, why a vaccine is not reaching certain families, why a street has no safe place to walk. It is easy to miss because when it works, nothing happens.",
          "A community health worker stands in both places. You sit with one person and their one problem, and you also see the pattern across everyone you meet. Knowing the language and the structure of public health lets you describe that pattern to the people who can act on it, and it lets you see your own work as part of something larger.",
        ] },
        { kind: 'concept', title: 'The three core functions', text: [
          "A widely used open textbook on population health, which cites the Centers for Disease Control and Prevention, describes public health as having three core functions. They are assessment, policy development, and assurance.",
          "Assessment means collecting and evaluating data to identify the health needs of a population. Public health professionals monitor health trends, find health disparities, and identify problems that need support. Policy development means working with lawmakers and communities so that policies support health. Assurance means making sure the services, from clean air to vaccines to the chance to take part in making policy, reach everyone. The textbook describes assurance as the function that works toward justice, because it asks whether the whole range of public health services is actually available to all.",
          "These are not abstract. When a county health department publishes a map of where people are not getting a vaccine, that is assessment. When a city passes a rule that protects renters from unsafe conditions, that is policy development. When a mobile clinic goes to a shelter because the shelter's residents do not go to clinics, that is assurance.",
        ] },
        { kind: 'concept', title: 'The ten essential services', text: [
          "The core functions are carried out through ten essential public health services. The textbook lists them with an example of how each one can address health inequities. In plain words they are these.",
          "One, assess and monitor population health status, factors that influence health, and community needs and assets. Two, investigate, diagnose, and address health problems and hazards affecting the population. Three, communicate effectively to inform and educate people about health, factors that influence it, and how it can be improved. Four, strengthen, support, and mobilize communities and partnerships to improve health. Five, create, champion, and implement policies, plans, and laws that impact health. Six, use legal and regulatory actions designed to improve and protect the public's health.",
          "Seven, ensure an effective system that enables equitable access to the individual services and care needed to be healthy. Eight, build and support a diverse and skilled public health workforce. Nine, improve and innovate public health functions through ongoing evaluation, research, and continuous quality improvement. Ten, build and maintain a strong organizational infrastructure for public health.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Public health', plain: "The work of protecting and improving the health of whole communities, rather than treating one person at a time." },
          { term: 'Assessment', plain: "Collecting and studying data to understand a community's health needs and where the gaps are." },
          { term: 'Policy development', plain: "Working with lawmakers and communities so that rules and plans support health." },
          { term: 'Assurance', plain: "Making sure that services people need actually reach them." },
          { term: 'Health disparity', plain: "A difference in health between groups that is linked to unfair or avoidable conditions." },
        ] },
        { kind: 'concept', title: 'Where you fit', text: [
          "Look again at the list. Service three is communication and education. Service four is mobilizing communities and partnerships. Service seven is making sure people can reach the services they need, and the textbook describes it as removing barriers by promoting the availability of clinics, mental health services, social programs, and other resources. Service eight is building a workforce that approximates the community it serves.",
          "That is much of what a community health worker does. You explain things in a way a neighbor can follow. You bring people to the table. You walk people to the service. You belong to the workforce that looks like the community. When you describe your work, you can say you carry out public health services at the person-to-person level.",
          "Keep one boundary in view. Public health agencies, such as a county health department, have legal authority that you do not have. They investigate outbreaks, enforce health codes, and set policy. You can support that work by telling people what is available, by passing along what you see, and by helping people take part, but those powers belong to the agency.",
        ] },
        { kind: 'case', title: 'The clinic that was not being used', scenario: true, text: [
          "A community health worker named Dante staffs a table outside a laundromat. Over three weeks, a dozen people mention that they gave up on a nearby clinic because its hours do not fit their shifts. No one person has a big problem. Together, the pattern is clear.",
          "Dante does two things. For each person he helps find a time that works. He also writes down, without names, that one clinic's hours are a barrier, and he brings it to his supervisor as a pattern. The supervisor takes it to the weekly partner meeting. Dante's table work was service seven for the individuals. The note he wrote helped with service one, assessing what the community needs, because it turned a series of private frustrations into information.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c2-q1',
          q: "A county health department publishes a map showing which neighborhoods have the lowest childhood vaccination rates. Which core function of public health is this?",
          options: [
            "Assurance",
            "Assessment",
            "Policy development",
            "Enforcement",
          ],
          answer: 1,
          rationale: "Assessment is collecting and evaluating data to identify the health needs of a population, including where disparities exist.",
          distractors: "Assurance would be getting vaccines to those neighborhoods. Policy development would be changing a rule. Enforcement is not one of the three core functions.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "Think of a pattern you have noticed in your neighborhood, such as a service nobody can reach or a problem many people share. Which of the ten services would address it?",
          "Where in your daily work do you already carry out one of the ten services?",
        ] },
        { kind: 'takeaways', items: [
          "Public health looks after whole communities through assessment, policy development, and assurance.",
          "The ten essential services put those functions into practice, and several of them describe community health work directly.",
          "Agencies hold legal powers that you do not. You support the work by serving, noticing, and speaking up.",
        ] },
        ev([
          "OpenStax. Population Health, Section 2.4, The Core Functions and Essential Services of Public Health. The three core functions, the ten essential services, and the table of how each can address health inequities. The textbook cites the Centers for Disease Control and Prevention. The CDC's own page blocks automated reading, so the textbook's published text was used instead.",
          "C3 Project report, 2016. The roles and skills of community health workers, used here to place service-level work such as education, outreach, and coordination.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ph-l2',
      title: 'The coverage map',
      summary: 'How Medi-Cal, Medicare, and other coverage fit together, and who pays first.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "People rarely come to you asking about a program. They come with a bill, a letter, a missing card, or a question like whether they can see the same doctor. Behind each of those is a coverage question, and the answer depends on which program is paying.",
          "Before you learn any program in detail, you need a map. If you can name the main kinds of coverage and say which one a person is likely on, you can ask the right next question.",
        ] },
        { kind: 'concept', title: 'Medicaid, Medi-Cal, and Medicare', text: [
          "Medicaid is a joint federal and state program that provides health coverage for certain low-income people, families and children, pregnant women, older adults, and people with disabilities. In California, Medicaid is called Medi-Cal. The Centers for Medicare and Medicaid Services is the federal agency over both programs, and in California the Department of Health Care Services is the single state agency that runs Medi-Cal. It can delegate some work to other agencies. For example, the California Department of Social Services handles in-home supportive services.",
          "Medicare is different. Medicare is federal health insurance for anyone age 65 and older and for some people under 65 with certain disabilities or conditions. The Medicare website says that if you qualify, you can have both Medicare and Medicaid. Medicaid can help with things Medicare does not, such as nursing facility services, and with assistance paying Medicare premiums and other costs.",
          "A short way to remember it: Medicare follows the person by age or disability. Medi-Cal follows income and category, and the state runs it with federal money.",
        ] },
        { kind: 'concept', title: 'Who pays first', text: [
          "When a person has more than one kind of coverage, the programs have an order. A disability rights training on Medi-Cal states that Medi-Cal is the payor of last resort. It pays only for expenses that it covers and that other coverage will not. The examples it gives of other coverage are private insurance, Medicare, and California Children's Services.",
          "This matters at the front desk. If someone has Medicare and Medi-Cal, the clinic bills Medicare first and Medi-Cal picks up what it covers after that. If someone is told they have no coverage but you find they have another plan, the Medi-Cal application will ask about it. The Los Angeles County guide for case managers lists other health insurance, including Medicare, among the documents to gather.",
          "People who are enrolled in both Medicare and Medi-Cal are called dual eligible beneficiaries. The training describes combined options for them, called Medi-Medi plans, and notes that California has policies tying Medi-Cal managed care to the person's Medicare plan. You do not need the details to help. You need to ask whether the person has Medicare, because it changes what they should bring and what they should ask.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Medi-Cal', plain: "California's version of Medicaid. Coverage for eligible people, run by the state with federal funds." },
          { term: 'Medicare', plain: "Federal health insurance for people age 65 and older and some younger people with disabilities." },
          { term: 'Payor of last resort', plain: "Medi-Cal pays only after other coverage has paid what it will." },
          { term: 'Dual eligible', plain: "A person enrolled in both Medicare and Medi-Cal." },
          { term: 'Single state agency', plain: "The one state department responsible for running Medi-Cal. In California, the Department of Health Care Services." },
        ] },
        { kind: 'steps', title: 'Four questions that build the map', items: [
          { label: 'Do you have any insurance now?', text: "Ask about a card, a plan, or coverage through work or a spouse. Many people do not know and will say no, so also ask whether they get bills and whether anyone told them they have Medi-Cal." },
          { label: 'Are you 65 or older, or do you have a disability?', text: "This points toward Medicare and toward the Medi-Cal pathways for older adults and people with disabilities." },
          { label: 'Who is in your household?', text: "Children, pregnancy, and household size change which category a person falls in." },
          { label: 'What did you last receive in the mail?', text: "A card, a renewal packet, or a notice of action tells you more than the person can describe." },
        ] },
        { kind: 'case', title: 'Mr. Alvarez and the two cards', scenario: true, text: [
          "Mr. Alvarez, 71, shows up with a red, white, and blue Medicare card and a plastic Medi-Cal card. He says the doctor's office keeps sending bills and he does not understand why.",
          "The community health worker does not guess. She asks which office sent the bill and which card they used at the visit. Because he has both, Medicare should be billed first and Medi-Cal after that. She helps him call the billing office with both cards in hand and ask them to bill in that order, and she writes down the name of the person he spoke to and the date. She did not decide what Medi-Cal covers. She made sure the right questions reached the people who could answer them.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c2-q2',
          q: "What does it mean that Medi-Cal is the payor of last resort?",
          options: [
            "Medi-Cal only covers people who have no other options",
            "Medi-Cal pays for what it covers only after other coverage has paid what it will",
            "Medi-Cal is not permitted to pay for hospital care",
            "Medi-Cal pays first so other coverage does not have to",
          ],
          answer: 1,
          rationale: "Medi-Cal pays only for expenses that it covers and that other coverage, such as private insurance or Medicare, will not.",
          distractors: "The first answer confuses who is eligible with the order of payment. The last two get the order or the scope wrong.",
        } },
        { kind: 'reflect', title: 'Your own map', prompts: [
          "Which of these programs have you or your family used? What was confusing about it?",
          "When someone says they have no insurance, what two follow-up questions will you ask before you believe them?",
        ] },
        { kind: 'takeaways', items: [
          "Medi-Cal follows income and category and is run by the state. Medicare follows age or disability and is federal.",
          "Medi-Cal is the payor of last resort. Other coverage pays first.",
          "Ask about Medicare early. It changes the paperwork and the plan.",
        ] },
        ev([
          "Medicare.gov. Parts of Medicare, and How does Medicare work? The difference between Medicare and Medicaid, and the statement that a person who qualifies can have both.",
          "Disability Rights California. Medi-Cal Basics and 2026 and Upcoming Changes (training slides, January 26, 2026). Medicaid versus Medi-Cal, the Department of Health Care Services as the single state agency, payor of last resort, dual eligible beneficiaries.",
          "Los Angeles County Department of Homeless Services and Housing. Medi-Cal Enrollment and Coverage Support, updated October 29, 2026. Documents to gather, including other health insurance.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ph-l3',
      title: 'How Medi-Cal works',
      summary: 'Full-scope and restricted-scope coverage, managed care and fee-for-service, medical necessity, and the services you can point people to.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Medi-Cal is not one thing. It is a set of programs under one name, and a person's group decides what they get. Someone who walks into a clinic with Medi-Cal may have full coverage or only emergency coverage. Someone may belong to a managed care plan or may not. These differences explain most of the confusing moments people have.",
          "You do not need to memorize every pathway. You need to know the handful of distinctions that change what you tell someone to do next.",
        ] },
        { kind: 'concept', title: 'Full-scope and restricted-scope', text: [
          "The Los Angeles County guide gives plain definitions. Full-scope Medi-Cal is comprehensive coverage that includes doctor visits, prescriptions, hospital stays, mental health, dental, and transportation services. Restricted-scope Medi-Cal is limited coverage that only pays for emergency care, pregnancy and postpartum care, and long-term nursing home care.",
          "The disability rights training lists some full-scope services in more detail, including in-home supportive services, community-based adult services, durable medical equipment, mental health, supplies, hospital care, and transportation. It lists restricted services as emergency care, pregnancy-related services, and long-term care.",
          "The county guide also lists what full-scope benefits cover in everyday terms: doctor care, medications, lab tests, wellness care, mental health and addiction services, emergency care, senior care, rehabilitation, in-home support, rides, hospital care, vision, and dental. Dental has its own program and phone line, Medi-Cal Dental, and vision has its own program page, so refer there for specifics.",
        ] },
        { kind: 'concept', title: 'Managed care and fee-for-service', text: [
          "There are two ways Medi-Cal care is delivered. In fee-for-service, a person has full-scope Medi-Cal without a health plan coordinating their care. The county guide is careful to say this does not mean the person pays directly for care. In managed care, a person belongs to a health plan, and the county guide gives L.A. Care and Health Net as examples of plans that offer person-centered care coordination.",
          "Why it matters. Some supports run through the managed care plan. The county guide notes that people with unsatisfactory immigration status who move to fee-for-service become ineligible for housing deposits, enhanced care management, and in-home supportive services. When someone loses a service they expected, ask whether their plan or delivery type changed.",
          "Practical habit. Ask to see the Benefits Identification Card, and write down the name of the health plan if there is one. The county guide tells case managers to have participants bring the Medi-Cal Benefits Identification Card to every appointment.",
        ] },
        { kind: 'concept', title: 'Medically necessary', text: [
          "Medi-Cal covers services that are medically necessary. For adults, the disability rights training gives the standard as a service that is reasonable and necessary to protect life, to prevent significant illness or significant disability, or to alleviate severe pain.",
          "For children and people under 21, the standard is broader. The training quotes the early and periodic screening, diagnostic, and treatment benefit, which includes any medical or remedial care that is medically necessary to correct or ameliorate a defect, physical or mental illness, or condition.",
          "You do not decide what is medically necessary. A provider does, and a plan or the state may review it. What you can do is help someone ask for the service in writing, keep the paperwork, and know that a denial can be challenged.",
        ] },
        { kind: 'concept', title: 'Programs inside Medi-Cal', text: [
          "The training notes that people receive Medi-Cal through different programs, sorted in part by whether income is counted under federal tax rules, called modified adjusted gross income, or under other rules called non-modified adjusted gross income. People on SSI-linked Medi-Cal have their income and resources counted under the SSI rules. Other programs each have their own income rules. There is also a share-of-cost arrangement in some programs.",
          "You do not need to sort a person into a program. The county does that when it reviews the application. Your job is to collect the facts the county will ask for and to notice when someone is in a special population, such as a person with a disability, a pregnant person, a child, or a former foster youth, because the rules for those groups are often different and sometimes more protective.",
        ] },
        { kind: 'myths', items: [
          { myth: "If someone has a Medi-Cal card, they can get anything.", reality: "Medi-Cal may be full-scope or restricted. Ask which. A restricted-scope card does not pay for routine care." },
          { myth: "Fee-for-service means the person has to pay for care.", reality: "The county guide says it does not. It means full-scope coverage without a plan that coordinates the care." },
          { myth: "If a service is denied, that is the final answer.", reality: "There are grievance and appeal processes. See the next lesson." },
          { myth: "A community health worker should tell someone which Medi-Cal program they qualify for.", reality: "The county decides that. You gather facts and help people apply." },
        ] },
        { kind: 'case', title: 'A card that did not pay', scenario: true, text: [
          "Rosa, 34, shows up to a clinic with a Medi-Cal card and is told the visit for her knee will not be covered. She is confused because her neighbor with Medi-Cal had the same kind of visit.",
          "The community health worker helps her call the Medi-Cal helpline and ask which scope of coverage she has. It turns out Rosa has restricted-scope coverage, which covers emergency care, pregnancy and postpartum care, and long-term nursing home care. The worker does not argue. She helps Rosa find out whether she can apply for full-scope coverage, writes down the answer and the date of the call, and sets a reminder to follow up. She also asks whether Rosa knows any clinics that offer sliding scale visits in the meantime, and writes down two for her.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c2-q3',
          q: "A person's Medi-Cal card is accepted at the pharmacy but the clinic says the knee visit is not covered. What should you ask first?",
          options: [
            "Whether the person has full-scope or restricted-scope Medi-Cal",
            "Whether the person has ever missed a payment",
            "Whether the person is a United States citizen",
            "Whether the person would like to try a different clinic",
          ],
          answer: 0,
          rationale: "Restricted-scope Medi-Cal pays only for emergency care, pregnancy and postpartum care, and long-term nursing home care, so scope is the first fact to establish.",
          distractors: "Payments and citizenship are not what the clinic's answer turns on, and you should not ask about immigration status unless it is needed for an application and the person agrees. Changing clinics does not fix a scope problem.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c2-q4',
          q: "Who decides whether a service is medically necessary?",
          options: [
            "The community health worker, after talking with the person",
            "The person's family",
            "A provider, and the plan or state may review the decision",
            "The pharmacy",
          ],
          answer: 2,
          rationale: "Necessity is a clinical and coverage decision. You help the person ask, keep records, and use the challenge process if needed.",
          distractors: "A community health worker does not make coverage or clinical determinations.",
        } },
        { kind: 'takeaways', items: [
          "Full-scope and restricted-scope are the first distinction to establish.",
          "Managed care and fee-for-service decide which supports come with the card. Fee-for-service does not mean the person pays directly.",
          "You do not decide medical necessity or program category. You help people ask and keep records.",
        ] },
        ev([
          "Los Angeles County Department of Homeless Services and Housing. Medi-Cal Enrollment and Coverage Support, updated October 29, 2026. Definitions of full-scope, restricted-scope, fee-for-service, and managed care, the list of full-scope benefits, and the effect of moving to fee-for-service.",
          "Disability Rights California. Medi-Cal Basics and 2026 and Upcoming Changes, January 26, 2026. Service delivery models, full-scope versus restricted services, medical necessity for adults and for children and people under 21, program groupings.",
          "Medicare.gov. How does Medicare work? Used for the contrast between Medicare and Medicaid.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ph-l4',
      title: 'Getting on Medi-Cal and staying on',
      summary: 'Applying, renewing, reactivating, answering notices, and using appeals, with a clear line around your role.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "More people lose coverage because of paperwork than because they stopped being eligible. A renewal packet goes to an old address. A text asking for a pay stub goes unread. A letter arrives with a deadline and no one explains it. A person who was covered on Monday finds out on Friday that they are not.",
          "This is where a community health worker can make the most difference. You may not be able to change a rule, but you can make sure a person gets the mail, understands it, and answers it on time.",
        ] },
        { kind: 'concept', title: 'How people apply', text: [
          "The disability rights training lists four ways to apply for Medi-Cal. Online through BenefitsCal or through Covered California, by phone, in person, or by mail with the application form. The Los Angeles County guide puts BenefitsCal first. It says BenefitsCal is the place to apply, renew, upload documents, update an address, and check status. For people without internet access, the county guide says to apply by phone or in person with the county Department of Public Social Services, and it lists the phone number as 1-866-613-3777. The statewide Medi-Cal helpline listed on the same page is 1-800-541-5555.",
          "The county guide also describes a role called Application Assister. Case managers register as Application Assisters once their agency's account is set up, and the agency's manager helps each assister create an account. If your organization uses BenefitsCal on behalf of clients, find out whether you need an assister account before you start, and whether the person has given the consent your program requires. The guide tells case managers to confirm that a universal sharing consent is on file before coordinating Medi-Cal coverage.",
        ] },
        { kind: 'steps', title: 'The four steps the county guide gives', items: [
          { label: 'Log in or create an account', text: "At BenefitsCal, together with the person. If there is no internet, apply by phone or in person." },
          { label: 'Gather documents', text: "Proof of identity such as a California ID, proof of residency such as recent mail, proof of income such as a benefits letter, and other health insurance including Medicare." },
          { label: 'Submit the application or renewal', text: "The county guide says to renew no later than 60 days before the due date, and that most participants will be renewing every six months going forward." },
          { label: 'Track status and answer every letter', text: "Upload requested documents in BenefitsCal and watch for follow-ups until processing is complete." },
        ] },
        { kind: 'concept', title: 'Time limits that matter', text: [
          "The county guide gives two limits that change what you do in a week. After coverage ends over a late renewal or missing paperwork, a person has 90 days to reactivate. After a work requirement notice, a person has 30 days to respond before coverage ends. Both are short enough that a missed letter can cost someone their coverage.",
          "A third habit matters more than either. Keep the person reachable. The county guide says counties no longer search for a new address before ending coverage over returned mail, and that an address on file is the difference between a renewal and a termination. It tells case managers to keep a mailing address, a phone number, and an email on file, because notices also come by text. For people without a reliable address, it says participants may use their nearest county benefits district office to receive county mail.",
          "The guide also warns that Medi-Cal will never ask a participant to pay money or provide a credit card number to keep coverage. If someone says they were asked to, treat it as a scam and tell your supervisor.",
        ] },
        { kind: 'concept', title: 'When something goes wrong', text: [
          "The training distinguishes a grievance from an appeal. It also separates two kinds of appeals. Eligibility appeals go through the county. Managed care appeals go through the health plan and, according to the training, are subject to a mandatory internal appeal first. It names two protections to ask about, aid paid pending and expedited appeal, both of which matter when a service is being cut off.",
          "You are not an attorney and you do not represent anyone at a hearing. You can help a person read a notice of action, find the deadline for responding, write down what happened, and connect them to a legal aid or a health rights organization. Do this early. Appeal windows are short.",
        ] },
        { kind: 'list', title: 'A renewal checklist you can use', items: [
          "Is the mailing address current, and where does mail actually reach the person?",
          "Is a phone number and email on file, and does the person check them?",
          "When is the renewal due? Mark the date 60 days before.",
          "What documents will the county ask for? Gather them now.",
          "Who will check in with the person a week before the deadline?",
          "If coverage has ended, how many days remain to reactivate?",
        ] },
        { kind: 'case', title: 'The letter that was never opened', scenario: true, text: [
          "Marcus, 29, lives in his car and gets his mail at a friend's apartment. He stops by the outreach table and says his clinic told him his Medi-Cal is closed. A community health worker asks him when he last updated his address and whether he knows of any letters. He does not.",
          "With his permission and the program's consent form on file, the worker helps him log in to BenefitsCal, check the status, and see the notice. Coverage ended for missing paperwork a few weeks ago, so Marcus still has time to reactivate. They upload his documents together. The worker also helps him change his mailing address to the nearest county benefits office, adds his phone number and email, and sets a reminder to check in with him in a week. She tells him honestly that she cannot promise the county's decision. She did what was in her role. The county will decide.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c2-q5',
          q: "According to the Los Angeles County guide, a person whose Medi-Cal ended over a late renewal or missing paperwork has how long to reactivate?",
          options: [
            "30 days",
            "60 days",
            "90 days",
            "One year",
          ],
          answer: 2,
          rationale: "The county guide gives 90 days to reactivate after coverage ends over a late renewal or missing paperwork. It gives 30 days to respond to a work requirement notice.",
          distractors: "Thirty days is the work requirement notice limit, and sixty days is how early to renew. One year is not a limit in the guide.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c2-q6',
          q: "A person with no stable address asks how to make sure they get county mail. What does the county guide say?",
          options: [
            "They cannot keep Medi-Cal without a permanent address",
            "They may use their nearest county benefits district office to receive county mail",
            "The county will look up a new address before ending coverage",
            "They should wait until they have an address to apply",
          ],
          answer: 1,
          rationale: "The guide says participants without a reliable mailing address may use the nearest county benefits district office to receive county mail, and that counties no longer search for a new address before ending coverage over returned mail.",
          distractors: "The other answers either deny coverage for lacking an address or assume the county will chase down a new one, which the guide says it does not.",
        } },
        { kind: 'reflect', title: 'Your own system', prompts: [
          "Think of a time you missed something important in the mail or on your phone. What helped you catch up?",
          "What would a one-week check-in with a client look like in your program, and who would own it?",
        ] },
        { kind: 'takeaways', items: [
          "Most coverage loss is a paperwork problem. Address, phone, and email on file are the strongest protection.",
          "Know the short clocks. Ninety days to reactivate. Thirty days to answer a work requirement notice.",
          "You help people apply, understand, and appeal. You do not decide eligibility or promise outcomes.",
        ] },
        ev([
          "Los Angeles County Department of Homeless Services and Housing. Medi-Cal Enrollment and Coverage Support, updated October 29, 2026. Application steps, time limits, address guidance, Application Assister role, and the warning about requests for payment.",
          "Disability Rights California. Medi-Cal Basics and 2026 and Upcoming Changes, January 26, 2026. Four ways to apply, grievance versus appeal, eligibility versus managed care appeals, aid paid pending, expedited appeal.",
          "California Department of Social Services, CalFresh site. Used for BenefitsCal as an online application site for CalFresh as well as Medi-Cal.",
        ]),
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ph-l5',
      title: 'Medi-Cal is changing, 2026 to 2028',
      summary: 'The scheduled changes, where the sources disagree, and how to check before you tell anyone a date.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "This lesson will go out of date. That is the point of it. Medi-Cal is changing in stages, the changes affect millions of people, and a community health worker is often the first person someone asks. If you cannot say what is changing, you cannot warn anyone in time. If you state a date you did not check, you can do harm.",
          "So this lesson does two things. It lays out the schedule as the newest source read for this course gave it, and it teaches you how to check, because by the time you read this something may have moved.",
        ] },
        { kind: 'concept', title: 'The schedule as the county guide shows it', text: [
          "The Los Angeles County guide, updated October 29, 2026, lays out the changes by date. The guide itself says to check the Department of Health Care Services for current rules. Treat the list below as a map, not a legal statement.",
          "In 2026 the guide lists a freeze on new full-scope enrollment for adults age 19 and older with what the state calls unsatisfactory immigration status. This is the state's term for a category of immigration status. People already enrolled keep their coverage if they renew on time. It also lists a $130,000 asset limit for older adults and people with disabilities, with $65,000 added for each additional household member. A home and one car do not count. And it lists that counties no longer search for a new address before ending coverage over returned mail.",
          "Starting in January 2027 the guide lists work requirements for adults age 19 to 64. These adults must work, train, volunteer, or attend school at least half time for at least 80 hours a month unless they have a documented exemption, and earning $580 in a month also counts. The requirement is checked at renewal. The guide says exemptions may apply for health, disability, caregiving, and other circumstances. It also lists a shorter period of retroactive coverage, one month of past bills for adults without children and two months when the household includes children, and a move to fee-for-service for people with unsatisfactory immigration status who keep full-scope coverage.",
          "On March 1, 2027 the guide lists renewals twice a year for United States citizens age 19 to 64 and for people with unsatisfactory immigration status. Renewals for special populations stay annual. On July 1, 2027 it lists the end of full dental for people with unsatisfactory immigration status who still have full-scope coverage, monthly premiums for that group, and an asset limit that drops to $21,000 for one person and $31,000 for two. On October 1, 2028 it lists copayments for adults 19 to 64 earning over $15,560 a year, capped at five percent of income, with none at community clinics or for emergency, checkup, pregnancy, pediatric, mental health, or substance use care.",
        ] },
        { kind: 'concept', title: 'Where the sources disagree', text: [
          "Two of the sources read for this course were written nine months apart, and they do not agree on every date. The disability rights training from January 2026 lists the dental change for adults with unsatisfactory immigration status as July 1, 2026. The county guide from October 2026 lists it as July 1, 2027. The sources do not say why. A rule may have moved between January and October, or one source may be out of date or wrong. Either way, you cannot tell which from where you sit.",
          "That is the single most important thing to know about this topic. The training slides give the state budget and a federal law known as H.R. 1 as the reasons for the changes, and the two sources show that schedules differ. The training slides themselves carry a notice that the information could become out of date. The county guide ends each section with a pointer to the Department of Health Care Services.",
          "So the practical rule is this. When you want to tell someone a date, check the Department of Health Care Services Medi-Cal changes page, the county benefits office, or your supervisor on the same day, and say as of when the information is current. If you cannot check, say the rule is changing and give the person a number to call.",
        ] },
        { kind: 'steps', title: 'How to check before you tell someone', items: [
          { label: 'Find the newest source', text: "Start with the Department of Health Care Services Medi-Cal changes page, then the county guide, and note the date it was updated." },
          { label: 'Name the group', text: "Most changes apply to specific groups, such as adults 19 to 64, people with unsatisfactory immigration status, or older adults. Say which group you mean." },
          { label: 'Give the action, not only the date', text: "Tell the person what to do. Respond to every letter. Keep your address current. Ask whether you may qualify for an exemption." },
          { label: 'Name who to call', text: "Give the county benefits office number and the statewide helpline." },
          { label: 'Write down what you said', text: "Note the date and the source, so the next worker can pick up where you left off." },
        ] },
        { kind: 'concept', title: 'Immigration questions and data privacy', text: [
          "Many of the changes touch immigration status, and people will ask you about their risk. The county guide is clear about what case managers can and cannot do. They can share official information, offer resources, help people interpret the likely results of their choices, and respect their decisions. They cannot make promises about how Medi-Cal information might be accessed by immigration enforcement, and they cannot provide legal advice or decide for participants.",
          "The guide reports that federal agencies shared Medi-Cal data with immigration enforcement in July 2025, that a court order effective January 5, 2026 limits that sharing to people not lawfully residing in the United States and to certain items such as citizenship and immigration status, address, phone, date of birth, and Medicaid identification number, and that canceling coverage does not erase data already shared. It also reports that the federal public charge rule changed on September 18, 2026, and that benefits received before that date are not counted. It tells case managers to refer these questions to an immigration legal services provider.",
          "Follow that guidance. Say what the official sources say, tell the person their concerns are valid, and connect them with an immigration legal services provider. Do not tell anyone it is safe or unsafe to apply.",
        ] },
        { kind: 'case', title: 'Two neighbors, one question', scenario: true, text: [
          "At an outreach event, two neighbors ask the same thing. One is 52 and works part time at a car wash. The other is 41 and cares for her mother. Both have Medi-Cal as adults between 19 and 64. Both ask, will I lose it next year?",
          "The community health worker does not answer yes or no. She explains that the county guide lists a work requirement starting in January 2027 for this group, that working 80 hours a month or earning $580 counts, and that exemptions may apply for health, disability, caregiving, and other circumstances. She tells the man to keep his pay records and the woman to ask whether caregiving may qualify her for an exemption, and she tells both to answer every county letter within 30 days. She writes down the date and the source and gives each the county phone number. She says plainly that the rules have already changed once and may change again, and asks them to check back with her in the spring.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c2-q7',
          q: "Two sources you read give different dates for the same Medi-Cal change. What should you do before telling a client a date?",
          options: [
            "Use the earlier date to be safe",
            "Use the date from the source you find easiest to read",
            "Check the Department of Health Care Services page or the county benefits office, and say as of when the information is current",
            "Avoid talking about the change at all",
          ],
          answer: 2,
          rationale: "Dates have moved between sources. The responsible practice is to check the current source, name the group the change applies to, and give the person a number to call.",
          distractors: "Guessing an earlier date can cause needless panic or missed deadlines, and avoiding the topic leaves people unprepared.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c2-q8',
          q: "A client asks whether applying for Medi-Cal could expose their family to immigration enforcement. What is the right response?",
          options: [
            "Promise that the information is always private",
            "Tell them not to apply",
            "Share what official sources say, tell them their concern is valid, and refer them to an immigration legal services provider",
            "Ask them to describe their immigration status so you can advise them",
          ],
          answer: 2,
          rationale: "The county guide says case managers cannot make promises about how information might be accessed or give legal advice, and should refer these questions to an immigration legal services provider.",
          distractors: "Promising privacy or discouraging applying are both promises you cannot keep. Asking for details to advise them is giving legal advice.",
        } },
        { kind: 'takeaways', items: [
          "Medi-Cal changes in stages through 2028. Know the map, and check the date every time.",
          "Sources disagree because rules moved. Say as of when, and give the person a number to call.",
          "On immigration and data questions, share official information, validate the concern, and refer. Do not promise or advise.",
        ] },
        ev([
          "Los Angeles County Department of Homeless Services and Housing. Medi-Cal Enrollment and Coverage Support, updated October 29, 2026. The schedule of changes, work requirement description, exemptions, retroactive coverage, renewal frequency, premiums, copayments, data privacy statements, and the case manager can and cannot do lists. The page cites the Department of Health Care Services as its source and tells readers to check it for current rules. The Department's own pages block automated reading, so they were not used directly.",
          "Disability Rights California. Medi-Cal Basics and 2026 and Upcoming Changes, January 26, 2026. The earlier statement of the 2026 changes, used to show where dates have moved.",
        ]),
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ph-l6',
      title: 'Medicare in practice',
      summary: 'Parts A, B, and D, Original Medicare versus Medicare Advantage, Medigap, and how to help a person choose how to learn.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Medicare confuses almost everyone, including many people who have used it for years. The letters, the plan names, and the sign-up windows make it feel like a test. Older adults and people with disabilities who come to you will often have Medicare, and some will have Medi-Cal too.",
          "You do not need to be a Medicare counselor. You need to know the shape of the program well enough to ask good questions and to send people to counseling that is built for this.",
        ] },
        { kind: 'concept', title: 'The parts', text: [
          "The Medicare website describes the parts plainly. Part A, hospital insurance, helps cover inpatient care in hospitals, skilled nursing facility care, hospice care, and home health care. Part B, medical insurance, helps cover services from doctors and other health care providers, outpatient care, home health care, durable medical equipment such as wheelchairs and walkers, and many preventive services such as screenings, shots, and yearly wellness visits. Part D helps cover the cost of prescription drugs, through plans run by private insurance companies that follow rules set by Medicare.",
          "Medicare Supplement Insurance, called Medigap, is extra insurance you can buy from a private company to help pay your share of costs in Original Medicare. The site says Medigap policies are standardized and in most states named by letters, like Plan G or Plan K, and that the benefits in each lettered plan are the same no matter which company sells it.",
        ] },
        { kind: 'concept', title: 'Two ways to get Medicare', text: [
          "The Medicare website says a person chooses between two main ways to get coverage. Original Medicare includes Part A and Part B. With it, a person can use any doctor or hospital that takes Medicare, can join a separate drug plan, and can buy supplemental coverage such as Medigap. Original Medicare covers most but not all of the cost of approved services, and the site notes that there is no limit on what a person pays out of pocket in a year unless they have supplemental coverage such as Medigap, Medicaid, or employer, retiree, or union coverage.",
          "Medicare Advantage, also called Part C, is an alternative. A person gets benefits through a private health plan that Medicare approved. These bundled plans include Part A, Part B, and usually Part D. The site says a person may need to use doctors in the plan's network and get approval, called prior authorization, for certain drugs or services. These plans usually have different out-of-pocket costs than Original Medicare, including a yearly limit, and most offer extra benefits like vision, hearing, and dental.",
          "The site also says that a person must have both Part A and Part B to choose a Medicare Advantage plan, and that Medicare is different from private insurance in that it does not offer plans for couples or families. Each person makes their own choice.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Original Medicare', plain: "Part A and Part B. You can use any doctor or hospital that takes Medicare." },
          { term: 'Medicare Advantage', plain: "A private plan approved by Medicare that bundles Part A, Part B, and usually Part D. It may use a network and prior authorization." },
          { term: 'Part D', plain: "Prescription drug coverage, through a separate plan or through a Medicare Advantage plan with drug coverage." },
          { term: 'Medigap', plain: "Supplemental insurance bought from a private company to help pay your share of costs in Original Medicare." },
          { term: 'Prior authorization', plain: "Approval a plan requires before it will cover a certain service or drug." },
        ] },
        { kind: 'concept', title: 'Signing up', text: [
          "The site describes Medicare decisions as happening in stages. First a person signs up for Part A and Part B, and then chooses how to get coverage. It says there are certain times when a person can sign up, and it points people to a tool that checks when and how to sign up.",
          "It also says that people working past 65 may be in a different situation. If a person or their spouse is still working when they turn 65, Medicare works a little differently, and they may choose to delay getting Part B. If they do not get Part B, they have Part A only.",
          "The timing rules are where mistakes cost people. This is why the right move is almost always to refer. Send the person to the official Medicare site or to the Medicare counseling service your organization uses, and ask your supervisor which one that is. Do not guess at enrollment periods or at penalties.",
        ] },
        { kind: 'concept', title: 'When a person has Medicare and Medi-Cal', text: [
          "The Medicare site explains that Medicaid can help with benefits like nursing facility services and home health services, and with assistance paying Medicare premiums and other costs. The disability rights training describes people who have both as dual eligible and mentions combined plans called Medi-Medi plans.",
          "What you can do. Make sure the person carries both cards. Ask which plan they chose and whether it is Original Medicare or Medicare Advantage. Help them find out who to call with a billing problem. And when they receive a notice, check which program sent it.",
        ] },
        { kind: 'case', title: 'Ms. Okafor and the new plan', scenario: true, text: [
          "Ms. Okafor, 67, got a mailer about a Medicare Advantage plan that offers dental and hearing. She asks whether she should switch. She has Original Medicare and a drug plan, and she has had the same doctor for years.",
          "The community health worker does not tell her to switch or stay. She helps Ms. Okafor write down what matters to her. Keeping her doctor. Dental coverage. Her medicines. Then she explains what the Medicare site says, that Medicare Advantage plans may use a network and require approval for some services, and that most offer extra benefits. She helps her find the number for Medicare counseling and writes down the three questions to ask. Does my doctor take this plan? Are my medicines covered? What would I pay in a year? The decision is Ms. Okafor's.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c2-q9',
          q: "Which statement about Original Medicare and Medicare Advantage is supported by the Medicare website?",
          options: [
            "Medicare Advantage lets you use any doctor in the country with no approvals",
            "Original Medicare includes Part A and Part B and lets you use any doctor or hospital that takes Medicare",
            "Medigap can be used to pay your costs under a Medicare Advantage plan",
            "Medicare offers family plans that cover spouses together",
          ],
          answer: 1,
          rationale: "The site says Original Medicare is Part A and Part B and that you can use any doctor or hospital that takes Medicare. Advantage plans may use networks and prior authorization, and Medicare does not offer plans for couples or families.",
          distractors: "The other statements reverse what the site says about networks, family plans, and supplemental coverage.",
        } },
        { kind: 'reflect', title: 'Your own questions', prompts: [
          "Who in your family or neighborhood has faced a Medicare choice? What would have helped them?",
          "What is the one thing you will never do when someone asks about Medicare enrollment?",
        ] },
        { kind: 'takeaways', items: [
          "Original Medicare is Parts A and B. Advantage is a private plan that bundles coverage and may use networks.",
          "Part D covers drugs. Medigap helps with the share of costs in Original Medicare.",
          "Enrollment timing is where mistakes cost people. Refer to counseling and do not guess.",
        ] },
        ev([
          "Medicare.gov. Parts of Medicare, and How does Medicare work? The parts, the two ways to get coverage, Medigap, sign-up stages, working past 65, and the difference between Medicare and Medicaid.",
          "Disability Rights California. Medi-Cal Basics and 2026 and Upcoming Changes, January 26, 2026. Dual eligible beneficiaries and combined plans.",
        ]),
      ],
    },

    // ── Lesson 7 ──────────────────────────────────────────────────────────
    {
      id: 'chw-ph-l7',
      title: 'Food and family programs, and your role',
      summary: 'CalFresh and WIC, the steps to apply, and what you may and may not do about eligibility.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Health insurance pays for care. It does not pay for dinner. People who walk up to a health table often need food before they need anything else, and the programs that help with food are some of the easiest to use if someone walks you through them.",
          "This lesson covers two. CalFresh and the Women, Infants, and Children program, known as WIC. It ends with a clear statement of what your role includes, because the same limits apply to every benefit program.",
        ] },
        { kind: 'concept', title: 'CalFresh', text: [
          "CalFresh is California's name for the federal Supplemental Nutrition Assistance Program, formerly called food stamps. The state site describes it as providing monthly financial assistance for food. Benefits are loaded onto an EBT card that works like a debit card at many stores and, the site says, in many online orders. The site says CalFresh benefits cannot be used to buy hot or prepared food, tobacco, alcoholic beverages, or things you cannot eat or drink.",
          "The site says all California residents who meet the requirements may be eligible. Income limits depend on household size, and the site defines a household as the number of people you buy and share food with. Certain expenses, such as childcare and medical costs, can be deducted. The site publishes the current income limits and maximum allotment tables and dates them. Always look at the current table instead of repeating a number from memory, because the figures are updated.",
          "On citizenship, the site says a household may be eligible if at least one member is a United States citizen or a lawful permanent resident, and adds that other immigrant statuses are eligible and that a county eligibility worker can say more. It says that if you are eligible but another household member is not, you can still apply. It states that CalFresh does not affect immigration status or make you a public charge. Because the county guide in the last lesson says the federal public charge rule changed on September 18, 2026, treat that question as one to refer to an immigration legal services provider and the county, and do not promise an answer.",
          "The site also says CalFresh will not affect other benefits such as SSI, and that college students may have an exemption that lets them receive CalFresh.",
        ] },
        { kind: 'steps', title: 'How applying works, as the state describes it', items: [
          { label: 'Complete the application', text: "In person at a CalFresh office, online at BenefitsCal, or by phone at 1-877-847-3663." },
          { label: 'Submit documents within 30 days', text: "Identification, proof of income such as recent pay stubs, proof of expenses such as medical or childcare costs, and proof of immigration status for immigrants where needed." },
          { label: 'Wait for the interview call', text: "The state says to expect a call from a CalFresh worker in one to two weeks. The call may come from an unfamiliar number or be marked as spam. Tell people to answer it." },
          { label: 'Benefits arrive', text: "The state must process applications within 30 days, and the site says an eligible person can expect their card within the month." },
        ] },
        { kind: 'concept', title: 'WIC', text: [
          "The California Department of Public Health describes WIC, the Women, Infants and Children program, as providing nutrition education, breastfeeding support, healthy foods, and referrals to other services in the community. Its landing page says that if a person is pregnant or has a child under five, WIC can help. A California WIC card is used to shop for foods, and WIC is accepted at farmers markets.",
          "The practical use for you is as a doorway. A parent or a pregnant person who comes to you about one need often has others. If they are pregnant or have a young child, ask whether they have heard of WIC and give them the local WIC agency's contact. Do not tell them whether they qualify. The agency decides.",
        ] },
        { kind: 'concept', title: 'The same program, the same portal', text: [
          "The county guide notes that BenefitsCal is used for Medi-Cal, CalFresh, and other benefits, and the state CalFresh site routes online applications to the same portal. This means one account can hold several applications. Ask whether a person has already applied for one benefit, because their documents may already be in the system.",
          "The disability rights training also reminds us that people on SSI-linked Medi-Cal have their income counted under SSI rules and that Medi-Cal and other benefits each have their own rules about income and resources. A change in one can affect another. If a person's circumstances change, ask them to report it to each program, and ask a county worker how the change affects each benefit.",
        ] },
        { kind: 'list', title: 'Your role, in one place', items: [
          "You may help a person find a program, gather documents, apply, renew, upload, and track status.",
          "You may explain what the official sources say, in plain words, and say as of when.",
          "You may help a person read a notice and find the deadline.",
          "You may connect a person to a county worker, a legal aid or immigration legal services provider, or a counselor.",
          "You may not decide whether a person qualifies, promise a result, give legal or immigration advice, or tell a person it is safe or unsafe to apply.",
          "You may not submit anything on a person's behalf without their permission and your program's consent in place.",
        ] },
        { kind: 'case', title: 'A mother at the clinic door', scenario: true, text: [
          "Joy, 26, is pregnant with her second child. She comes to the clinic's walk-in table and says she is hungry most days by the end of the month. A community health worker listens and asks whether she has Medi-Cal and whether she gets CalFresh.",
          "Joy does not know. The worker helps her log in to BenefitsCal and see whether an application exists. She explains the steps for CalFresh as the state lists them and tells her the interview call may come from an unfamiliar number, so she should answer it. She mentions WIC because Joy is pregnant and has a young child, and gives her the local WIC contact. When Joy asks, will I get it, the worker says honestly that the county decides, tells her what she can do to make the process smooth, and sets a day to check in. The worker gave Joy three doors and a plan. She promised nothing she could not deliver.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c2-q10',
          q: "A client asks whether they will qualify for CalFresh. What is the best answer?",
          options: [
            "Yes, if you are low income, you will qualify",
            "I cannot tell you. The county decides, but I can help you apply and gather what they will ask for",
            "No, because you have a car",
            "You will qualify as long as you do not work",
          ],
          answer: 1,
          rationale: "Eligibility is decided by the county. The state site says items like a house, car, and savings do not typically count as income, so the second answer is honest while the others make promises or state wrong rules.",
          distractors: "Promising eligibility, or ruling it out on the basis of a car or on the basis of working, is not accurate and is outside your role.",
        } },
        { kind: 'reflect', title: 'Your own limits', prompts: [
          "Think of the last time you promised someone an outcome. What would you say now?",
          "Which program in this course would you want to know best because someone you know needs it?",
        ] },
        { kind: 'takeaways', items: [
          "CalFresh pays for groceries. WIC supports pregnant people and young children with food, education, and referrals. BenefitsCal handles several programs through one portal.",
          "Look up the current income and benefit tables instead of repeating numbers from memory.",
          "Help, explain, and connect. Never decide, promise, or advise on law or immigration.",
        ] },
        ev([
          "California Department of Social Services. CalFresh site, Who is Eligible for CalFresh and Frequently Asked Questions. What CalFresh is, income and household definitions, citizenship statements, application steps, interview and timing, what EBT can buy, and the statement that CalFresh does not affect other benefits such as SSI. Income and allotment tables were last updated by the state in September 2025 and are not repeated here.",
          "California Department of Public Health. Women, Infants and Children program landing page. What WIC provides and the pregnancy and child-under-five statement.",
          "Los Angeles County Department of Homeless Services and Housing. Medi-Cal Enrollment and Coverage Support, updated October 29, 2026. BenefitsCal as the portal for several benefits, the public charge date, and what case managers can and cannot do.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c2-practice',
    title: 'Your coverage and benefits practice file',
    minutes: 30,
    purpose: 'Five short pieces that you keep: a coverage map, a renewal plan, a changes sheet, a plain-language script, and a role card. Use them with real clients.',
    fields: [
      { id: 'map', label: 'Your coverage map', help: 'Draw or write a map showing Medi-Cal, Medicare, and one other kind of coverage, who pays first, and the four questions you will ask a person to find out which coverage they have.', multiline: true },
      { id: 'renewal', label: 'A renewal plan', help: 'Pick a real or imagined client. Write the renewal due date, the date 60 days before it, the documents you will gather, how they will receive mail, and who will check in a week before the deadline.', multiline: true },
      { id: 'changes', label: 'Your changes sheet', help: 'Write the three Medi-Cal changes most likely to affect your clients, the group each applies to, the source and date you got it from, and where you would check before telling anyone.', multiline: true },
      { id: 'script', label: 'A plain-language script', help: 'Write what you would say, in three or four sentences and without jargon, to a client who asks, will I lose my Medi-Cal next year? Include what you will not promise.', multiline: true },
      { id: 'role', label: 'Your role card', help: 'Write three things you can do and three things you will not do when a client asks about eligibility, immigration, or enrollment timing. Add the name of the person or office you will refer to for each.', multiline: true },
    ],
    reference: { title: 'Numbers and offices named in this course', items: [
      'Los Angeles County Department of Public Social Services: 1-866-613-3777',
      'Medi-Cal statewide helpline: 1-800-541-5555',
      'Medi-Cal Dental: 1-800-322-6384',
      'CalFresh by phone: 1-877-847-3663',
      'BenefitsCal for Medi-Cal and CalFresh applications, renewals, and uploads',
    ] },
  },
  furtherLearning: [
    { name: 'OpenStax: Population Health, The Core Functions and Essential Services of Public Health', use: 'The three core functions and ten essential services, with examples of addressing health inequities.', url: 'https://openstax.org/books/population-health/pages/2-4-the-core-functions-and-essential-services-of-public-health' },
    { name: 'Medicare.gov: Parts of Medicare', use: 'Plain descriptions of Parts A, B, and D, Original Medicare, Medicare Advantage, and Medigap.', url: 'https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare' },
    { name: 'Medicare.gov: How does Medicare work?', use: 'The stages of signing up and choosing coverage, and working past 65.', url: 'https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/how-does-medicare-work' },
    { name: 'California Department of Social Services: CalFresh eligibility and FAQs', use: 'Who is eligible, how to apply, and what the card can buy. Current income and benefit tables are published here.', url: 'https://calfresh.dss.ca.gov/food/eligibility/index.html' },
    { name: 'California Department of Public Health: Women, Infants and Children', use: 'What WIC provides and how to find a local WIC agency.', url: 'https://www.cdph.ca.gov/Programs/CFH/DWICSN/Pages/Program-Landing1.aspx' },
    { name: 'Disability Rights California: Medi-Cal Basics and 2026 and Upcoming Changes', use: 'A training on Medi-Cal structure, service delivery, appeals, and the changes that began in 2026.', url: 'https://www.disabilityrightsca.org/system/files/file-attachments/Medi-Cal%20Basics%20%202026%20Changes%20(ENG)%2001.26.2026%20v01%20DH.pdf' },
    { name: 'Los Angeles County: Medi-Cal Enrollment and Coverage Support', use: 'The county guide to who qualifies, what is changing and when, how to apply and renew, and what case managers can and cannot do.', url: 'https://homeless.lacounty.gov/medi-cal-eligibility-changes-2026/' },
  ],
};
