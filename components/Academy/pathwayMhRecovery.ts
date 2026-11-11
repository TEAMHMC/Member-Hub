// Community Mental Health Worker Pathway, Mental Health Core M1: Hope, Recovery, and Wellness.
//
// A self-paced course (id chw_mh_recovery_wellness, 4 hours). It is the first course of the Mental
// Health Core and matches the first of the 17 Medi-Cal peer support specialist competencies, which is
// hope, recovery, and wellness. The 17 competencies were read earlier from the CalMHSA request for
// qualifications that quotes DHCS BHIN 21-041, because the DHCS publication itself is behind a bot
// check. They should be verified against the BHIN before this course is cited as aligned.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources
// are SAMHSA's working definition of recovery and its ten guiding principles, the Cambridge page for
// the 2011 systematic review that produced the CHIME framework (abstract, tables, and introduction
// read), the open-access 2012 review of peer support by Davidson and colleagues, the abstract of the
// 2014 Chinman review on RAND's site, SAMHSA's guide to promoting wellness and the Eight Dimensions of
// Wellness, the National Institute on Drug Abuse page on language, and SAMHSA's core competencies for
// peer workers. The full text of the Chinman review was not read. The NIDA page carries a notice about
// a change in federal terminology that is unrelated to its content, and the notice was ignored.
//
// Nothing in this course teaches diagnosis or treatment. Where a lesson touches medication, the rule is
// stated plainly: a worker never tells anyone to start, stop, or change one. The scenes were written
// for this course and describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_RECOVERY_WELLNESS: Course = {
  id: 'chw_mh_recovery_wellness',
  num: 22,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Hope, Recovery, and Wellness',
  promise:
    "Explain what recovery means in the way the field now uses the word, hold and share realistic hope, see the five processes that people describe in their own recovery, use the eight dimensions of wellness, talk in a way that respects people, and use your own story with care.",
  about: [
    "This course is the starting point for the Mental Health Core. It covers the ideas that sit under everything else you will learn about mental health and substance use. What recovery is and is not. Where hope comes from and how to offer it honestly. What people say happens as they rebuild their lives. What wellness includes beyond the absence of symptoms. How the words you choose can open or close a door.",
    "It rests on SAMHSA's working definition of recovery and its ten guiding principles, a large systematic review of how people describe personal recovery, an open-access review of research and experience on peer support, SAMHSA's guide to promoting wellness, a federal page on respectful language, and SAMHSA's core competencies for peer workers. Where a source is a summary, an abstract, or a review with limits, the lesson says so.",
    "It is the first course in the Mental Health Core of HMC's community health worker certificate. It does not teach you to diagnose or treat anything. It teaches you a stance. That people can and do recover, that they decide what recovery means for them, and that your job is to stand with them.",
  ],
  objectives: [
    "State SAMHSA's working definition of recovery, name its four dimensions, and describe what recovery does and does not mean.",
    "Describe the ten guiding principles of recovery and give an example of each in a conversation.",
    "Explain what hope is in recovery, where it comes from, and how to offer it without promising what you cannot.",
    "Name the five recovery processes in the CHIME framework and what people said about each.",
    "Describe the eight dimensions of wellness, the health gap that makes wellness matter, and one small way to support each dimension.",
    "Choose language that treats the person as a whole, and decide when and how to share your own story.",
  ],
  minutes: 240,
  prerequisites: "None. Trauma-Informed Practice and Motivational Interviewing are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people with their own lived experience of mental health or substance use conditions.",
  freshness:
    "The ideas in this course are long established, and the language around them keeps changing. The SAMHSA definitions were read in their published form. Some federal pages are being revised, so check the current text if you quote them in a report or grant.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhr-l1',
      title: 'What recovery means',
      summary: 'The federal working definition, its four dimensions, and what recovery is not.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Recovery is one of the most used words in behavioral health, and one of the least clearly used. To one person it means no symptoms. To another it means not drinking. To another it means being able to hold a job, see their children, and get through a bad week without ending up in the hospital. Agencies use it on forms and in mission statements. People in recovery use it to describe their lives.",
          "When you work with people, the meaning you carry in your head shapes what you say and what you expect. If you think recovery means being cured, you may quietly give up on someone who still has symptoms. If you think it means following a treatment plan, you may judge someone who chooses a different path. This lesson gives you the definition the federal government now uses, which was built together with people in recovery, and shows what follows from it.",
        ] },
        { kind: 'concept', title: 'Where the definition came from', text: [
          "SAMHSA, the federal Substance Abuse and Mental Health Services Administration, published a working definition of recovery and a set of guiding principles in 2012. In the document, SAMHSA explains that recovery had been identified as a primary goal for behavioral health care, and that in August 2010 leaders in the field, including people in recovery from mental health and substance use problems, met with SAMHSA to explore a common definition.",
          "Before that, SAMHSA had separate definitions of recovery for mental disorders and for substance use disorders. The document says these different definitions, along with those of other government agencies, complicated the discussion about expanding insurance coverage for treatment and recovery support. A single working definition was meant to help advance recovery opportunities and to clarify the concepts for peers, families, funders, providers, and others.",
          "The word working matters. The document presents the definition as something in use, which can be refined, and not as a final truth.",
        ] },
        { kind: 'concept', title: 'The definition', text: [
          "SAMHSA's working definition of recovery from mental disorders and substance use disorders is a process of change through which individuals improve their health and wellness, live a self-directed life, and strive to reach their full potential.",
          "Read it slowly. It says process, not outcome. It says change, not cure. It says individuals improve their own health and wellness, so the person is the actor. It says self-directed, which puts the direction in the person's hands. And it says strive to reach their full potential, which is a direction of travel and not a destination that you reach on a given day.",
          "Nothing in the definition says symptoms must disappear. Nothing says a person must stop receiving treatment, or must continue it. Nothing says how long it takes.",
        ] },
        { kind: 'concept', title: 'Four dimensions of a life in recovery', text: [
          "SAMHSA says that, through its Recovery Support Strategic Initiative, it has described four major dimensions that support a life in recovery.",
          "Health. Overcoming or managing one's disease or symptoms, and, for everyone in recovery, making informed, healthy choices that support physical and emotional wellbeing. For a person with an addiction problem, the document gives abstaining from alcohol, illicit drugs, and non-prescribed medications as an example.",
          "Home. A stable and safe place to live.",
          "Purpose. Meaningful daily activities, such as a job, school, volunteering, family caretaking, or creative work, and the independence, income, and resources to take part in society.",
          "Community. Relationships and social networks that provide support, friendship, love, and hope.",
          "These dimensions are why a community health worker's work counts as recovery work. Helping someone get stable housing, find a daily activity, or reconnect with people is not a side task. It is part of the thing itself. This links to the social determinants you studied in an earlier course. Housing, income, and community are on both lists.",
        ] },
        { kind: 'concept', title: 'The ten guiding principles, in brief', text: [
          "The document lists ten guiding principles of recovery. Recovery emerges from hope. Recovery is person-driven. Recovery occurs via many pathways. Recovery is holistic. Recovery is supported by peers and allies. Recovery is supported through relationship and social networks. Recovery is culturally based and influenced. Recovery is supported by addressing trauma. Recovery involves individual, family, and community strengths and responsibility. Recovery is based on respect.",
          "The rest of this course uses these principles as a spine. This lesson only introduces them. The next lessons look at hope, at what people say about their journeys, at wellness, at language, and at using your own story.",
        ] },
        { kind: 'concept', title: 'What recovery is not', text: [
          "It is not the absence of struggle. The document says recovery is non-linear and is characterized by continual growth and improved functioning that may involve setbacks. It says setbacks are a natural, though not inevitable, part of the recovery process, and that it is therefore essential to foster resilience.",
          "It is not one pathway. The document says recovery pathways are highly personalized, and may include professional clinical treatment, use of medications, support from families and in schools, faith-based approaches, peer support, and other approaches.",
          "It is not something done to a person. The document says recovery is person-driven and that individuals define their own life goals and design their own paths toward them.",
          "It is not a promise to a specific outcome. For addictions, the document states that abstinence from alcohol, illicit drugs, and non-prescribed medications is the goal for those with addictions, and that use of tobacco and non-prescribed or illicit drugs is not safe for anyone. Later in this pathway you will study harm reduction, a set of practices that meet people where they are and that many programs use. A worker follows the policies of their program and keeps both ideas in view. The federal document sets abstinence as the goal in recovery from addiction, and the work of keeping people alive and connected along the way is also part of caring for them.",
        ] },
        { kind: 'concept', title: 'How this connects to the national competencies', text: [
          "The first of the 17 competencies for Medi-Cal peer support specialists is hope, recovery, and wellness. This course is built to teach it. The competencies were read from a county-level request for qualifications that quotes the state's published guidance, and should be checked against the state document before they are cited in a grant or report.",
          "SAMHSA's own competencies for peer workers also begin with recovery. They name as foundational principles that peer support is recovery-oriented, person-centered, voluntary, relationship-focused, and trauma-informed. Peer workers hold out hope, partner with people to envision a meaningful life, help them identify and build on strengths, and recognize that there are multiple pathways to recovery.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Recovery', plain: "A process of change through which people improve their health and wellness, live a self-directed life, and strive to reach their full potential." },
          { term: 'Dimensions of recovery', plain: "Health, home, purpose, and community, the four areas SAMHSA says support a life in recovery." },
          { term: 'Person-driven', plain: "The person sets the goals and chooses the path. Others support them." },
          { term: 'Non-linear', plain: "Not a straight line. Progress can include setbacks and restarts." },
          { term: 'Resilience', plain: "The ability to recover from setbacks and keep going." },
        ] },
        { kind: 'myths', items: [
          { myth: "Recovery means the illness is gone.", reality: "SAMHSA defines recovery as a process of change toward health, wellness, and a self-directed life. Overcoming or managing symptoms is one dimension, not the whole definition." },
          { myth: "There is one right way to recover.", reality: "The document says recovery occurs via many pathways, and that they are highly personalized." },
          { myth: "A setback means recovery failed.", reality: "The document says recovery is non-linear and may involve setbacks, and that fostering resilience is essential." },
          { myth: "Recovery is the treatment team's job.", reality: "The document says recovery is person-driven. Professionals play an important role by providing clinical treatment and other services that support the person's chosen path." },
        ] },
        { kind: 'case', title: 'Two ways to hear the same sentence', scenario: true, text: [
          "A man tells a worker that he has not had a drink in forty days, that he still hears a voice on bad nights, and that he has stopped taking one of his medicines because of the way it makes him feel. One way to hear this is as a list of problems and a risk to report. Another is to hear it as someone who is working on health, is managing what he can, and is making choices. The worker says, forty days is real work. Tell me about the bad nights. And I would like to hear what the medicine has been like. She does not tell him to take it. She asks whether he has told the person who prescribes it, and offers to help him write down what he wants to say. She keeps the conversation open and brings his prescriber into it, which is her role.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q1',
          q: "Which statement best matches SAMHSA's working definition of recovery?",
          options: [
            "Recovery is the complete absence of symptoms",
            "Recovery is a process of change through which people improve their health and wellness, live a self-directed life, and strive to reach their full potential",
            "Recovery is following a treatment plan",
            "Recovery is returning to how life was before",
          ],
          answer: 1,
          rationale: "The definition describes a process of change toward health, wellness, a self-directed life, and one's full potential. It does not require that symptoms disappear, and it does not prescribe a single path.",
          distractors: "The other answers equate recovery with cure, compliance, or going back, none of which is in the definition.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q2',
          q: "Which of these is one of SAMHSA's four dimensions that support a life in recovery?",
          options: [
            "Home, meaning a stable and safe place to live",
            "Medication, meaning taking all prescribed pills",
            "Compliance, meaning following all instructions",
            "Employment only",
          ],
          answer: 0,
          rationale: "The four dimensions are health, home, purpose, and community. Home is a stable and safe place to live.",
          distractors: "Purpose includes work, school, volunteering, caretaking, or creative work, so employment is only one part of it. The other answers are not dimensions in the document.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What did the word recovery mean to you before this lesson? What does it mean now?",
          "Think of a person you know who has made a big change in their life. Which of the four dimensions mattered most to them?",
        ] },
        { kind: 'takeaways', items: [
          "Recovery is a process of change toward health, wellness, a self-directed life, and one's full potential. It is not a cure and not a single path.",
          "Health, home, purpose, and community are the four dimensions. Your navigation and outreach work touches all of them.",
          "Recovery can include setbacks. Resilience and relationships carry people through.",
        ] },
        ev([
          "SAMHSA. SAMHSA's Working Definition of Recovery: 10 Guiding Principles of Recovery (PEP12-RECDEF, 2012). The background, the working definition, the four dimensions, the ten principles, and the statements on non-linearity, pathways, and abstinence. Read in full.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. The foundational principles of peer support.",
          "CalMHSA request for qualifications that quotes California DHCS BHIN 21-041. The list of 17 Medi-Cal peer support specialist competencies, read earlier. To be verified against the BHIN.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhr-l2',
      title: 'Hope, and how to offer it honestly',
      summary: 'Where hope comes from in recovery, what the research says, and how to avoid false hope.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Hope is the most talked about word in recovery and the easiest to get wrong. People say it will be okay to someone who has just learned that it may not be. They say stay positive to a person whose life has just fallen apart. Others avoid the word altogether, afraid of promising something they cannot guarantee.",
          "The recovery field treats hope as a working part of the process, with sources you can name and actions you can take. This lesson shows what the sources say and how to offer hope in a way that is honest.",
        ] },
        { kind: 'concept', title: 'Hope as a catalyst', text: [
          "SAMHSA's first guiding principle states that recovery emerges from hope. The document says the belief that recovery is real provides the essential and motivating message of a better future, that people can and do overcome the internal and external challenges, barriers, and obstacles that confront them. It says hope is internalized and can be fostered by peers, families, providers, allies, and others, and it calls hope the catalyst of the recovery process.",
          "Two things stand out. First, hope is something a person holds inside, and also something that other people can foster. Second, it is described as a belief in something concrete, that people do overcome these challenges. It is not a general optimism.",
        ] },
        { kind: 'concept', title: 'What people said hope involves', text: [
          "A 2011 systematic review published in the British Journal of Psychiatry looked at how people describe personal recovery. The authors found 5,208 papers, reviewed 366, and included 97 papers, which reported on 87 studies. From them they built a framework of five recovery processes, summarized by the acronym CHIME. Connectedness. Hope and optimism about the future. Identity. Meaning in life. And empowerment.",
          "The hope and optimism category had five parts. Belief in the possibility of recovery, which was the most common, found in 30 of the 87 studies. Motivation to change. Hope-inspiring relationships. Positive thinking and valuing success. And having dreams and aspirations.",
          "Look at the third item. Hope-inspiring relationships were identified in 12 studies. Hope is not only inside a person. It is carried and passed between people. That is why your work matters.",
        ] },
        { kind: 'concept', title: 'Where hope comes from', text: [
          "SAMHSA's principle on relationships says that an important factor in recovery is the presence and involvement of people who believe in the person's ability to recover, who offer hope, support, and encouragement, and who also suggest strategies and resources for change. Notice the second half of the sentence. Belief alone is not enough. The people also offer strategies and resources. Hope paired with something to do is more usable than hope alone.",
          "A 2012 review of peer support by Davidson and colleagues, published in World Psychiatry, describes three contributions of peer support that appear to be unique to or especially well suited to peer staff. The first is the instillation of hope through positive self-disclosure, showing a person that it is possible to move from being controlled by an illness to gaining some control over it. The second is role modeling self-care and using experiential knowledge to get through daily life, including living on a low income, being unstably housed, and dealing with stigma, discrimination, and complicated service systems. The third is the nature of the relationship, which the authors describe as built on trust, acceptance, understanding, and empathy.",
          "The same review reports that peer staff who used positive self-disclosure, role modeling, and what it calls conditional regard were found to increase participants' sense of hope, control, and ability to effect changes in their lives. It cautions that this is a developing area of research. The authors say their third stage of research, which looks at what is unique about peer support, was just getting underway when they wrote.",
        ] },
        { kind: 'concept', title: 'High expectations with warmth', text: [
          "Davidson's review uses the phrase conditional regard to describe a peer's ability to read a person based on having been in the same shoes. They give a sentence as an example: I know how hopeless you feel now, but I also know that you can work toward a better life. They say peers may have higher expectations and place more demands on the people they work with, knowing that recovery is possible and also that it takes hard work, and that this may at times lead to conflict but is just as likely to lead to encouragement and inspiration.",
          "The lesson is that hope is not the same as softness. Hope can include believing in someone enough to expect something of them. For workers who do not have a lived experience of their own, this is still useful. You can believe in people enough to ask what they want and to expect that they can take a step.",
        ] },
        { kind: 'concept', title: 'Honest hope and false hope', text: [
          "SAMHSA's protocol on motivation for change, which you used in the Motivational Interviewing course, gives guidance that applies directly. It says it is hard to affirm self-efficacy and stimulate hope and optimism in people who lack material resources and have experienced discrimination. It says you can firmly acknowledge the facts of the situation and still enhance hope and motivation by affirming people's strengths and capacity for endurance and growth despite difficult circumstances.",
          "That is the pattern for honest hope. Say the facts plainly. Do not pretend that a barrier is smaller than it is. Then name what the person has already shown. In the same protocol, a person's belief in their ability to change is described as one of the most consistent predictors of positive behavior change. Hope is not a decoration. It affects what people do.",
          "Practice guidance for this course. Avoid statements like it will all work out, everything happens for a reason, and I am sure they will approve you. You cannot know. Prefer statements you can stand behind. People do get through this. You have gotten through hard things before. I will help you with the next step. I am not going anywhere.",
        ] },
        { kind: 'concept', title: 'Small ways to offer hope in a conversation', text: [
          "These are practice guidance written for this course, built on the sources above.",
          "Ask about what the person wants. A dream or an aspiration, even a small one, is one of the five parts of hope in the review. What would you like to be doing a year from now. What is something you used to love.",
          "Notice what is working. Name a strength or a step, in specific terms. You showed up today after a hard week.",
          "Ask what has helped before. People hold evidence of their own resilience. Asking brings it into the conversation.",
          "Break the next step down. A big goal is easier to believe in if the first step is small and clear.",
          "Connect them to others. Hope-inspiring relationships are part of the picture. A peer group, a mentor, a faith community, a family member. Offer these as options, not requirements.",
          "Keep showing up. Hope is also carried by consistency. If you say you will call on Thursday, call on Thursday.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Hope', plain: "A belief that a better future is possible, held by the person and fostered by others." },
          { term: 'False hope', plain: "A promise or prediction that you cannot know to be true." },
          { term: 'Self-disclosure', plain: "Sharing something from your own life, with a purpose." },
          { term: 'Conditional regard', plain: "Believing in someone enough to hold real expectations of them." },
          { term: 'Role modeling', plain: "Showing, by how you live, what is possible." },
        ] },
        { kind: 'myths', items: [
          { myth: "To be honest, I should not talk about hope when things are bad.", reality: "The protocol says you can firmly acknowledge the facts and still strengthen hope by affirming strengths and capacity for endurance." },
          { myth: "Hope is just positive thinking.", reality: "In the review, positive thinking was only one of five parts. Belief in the possibility of recovery and hope-inspiring relationships were also central." },
          { myth: "Only people with lived experience can offer hope.", reality: "SAMHSA says hope can be fostered by peers, families, providers, allies, and others. Peers bring a particular contribution, and they are not the only source." },
          { myth: "Hope means never talking about risk.", reality: "Hope and honesty go together. You can name a risk and still say you believe the person can work through it." },
        ] },
        { kind: 'case', title: 'What to say when the news is bad', scenario: true, text: [
          "A woman tells a worker that her housing application was denied for the second time. She says, what is the point. The worker does not say it will work out. She says, that is two rejections in a row, and it makes sense that you are worn out. After a pause she adds, you have kept every appointment and kept every piece of paper. That tells me something about you. Would it be okay if we looked at the denial letter together and found out what the next step is? The woman shrugs, then nods. The worker has not promised an outcome. She has named a strength, kept the person company, and offered a small next step.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q3',
          q: "In SAMHSA's description of recovery, what role does hope play?",
          options: [
            "It is a general feeling of optimism",
            "It is the catalyst of the recovery process, a belief that recovery is real, which can be fostered by peers, families, providers, and allies",
            "It is something only professionals can provide",
            "It is a result of recovery, not a part of it",
          ],
          answer: 1,
          rationale: "SAMHSA's first principle says recovery emerges from hope and calls hope the catalyst of the recovery process. It says hope is internalized and can be fostered by others.",
          distractors: "The other answers turn hope into a mood, an outcome, or a professional service.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q4',
          q: "A person says nothing will ever get better. Which response best follows the guidance in this lesson?",
          options: [
            "Everything happens for a reason, so stay positive",
            "I am sure you will be approved next time",
            "That makes sense given what you have been through. You have gotten through hard things before. I will help with the next step",
            "You should not think that way",
          ],
          answer: 2,
          rationale: "Honest hope acknowledges the situation, names real strengths, and offers a concrete next step. It does not predict an outcome or tell the person how to feel.",
          distractors: "The other answers promise an outcome, use a cliche, or correct the person's feelings.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Who carried hope for you in a hard time? What did they do?",
          "What is a sentence you tend to say that promises more than you can know? What could you say instead?",
        ] },
        { kind: 'takeaways', items: [
          "Hope is the catalyst of recovery. It is held by the person and fostered by relationships.",
          "Honest hope names the facts, names the strengths, and offers a next step. It does not predict an outcome.",
          "Hope comes with expectation and respect. Believing in someone includes expecting them to take a step.",
        ] },
        ev([
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The first principle, hope, and the principle on relationships and social networks.",
          "Leamy M, Bird V, Le Boutillier C, Williams J, Slade M. Conceptual framework for personal recovery in mental health: systematic review and narrative synthesis. British Journal of Psychiatry, 2011;199(6):445-452. The abstract, the numbers of papers reviewed and included, and the table of recovery processes. The review's own limits include its reliance on published descriptions.",
          "Davidson L, Bellamy C, Guy K, Miller R. Peer support among persons with severe mental illnesses: a review of evidence and experience. World Psychiatry, 2012;11(2):123-128. The three contributions, the account of conditional regard, and the effects reported. The authors describe the research on what is unique about peer support as just getting underway.",
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapters 2 and 3. The guidance on acknowledging facts while affirming strengths, and on self-efficacy.",
          "The small ways to offer hope are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhr-l3',
      title: 'What people say recovery is like',
      summary: 'The five recovery processes, the characteristics of the journey, and what they mean for your work.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Definitions come from committees. Experience comes from people. A large body of research has collected the way people with mental health conditions describe their own recovery, and the picture is richer than any definition. Knowing it will help you recognize recovery when you see it, even when it does not look like the brochure.",
        ] },
        { kind: 'concept', title: 'A review of the research on personal recovery', text: [
          "In 2011, Mary Leamy and colleagues published a systematic review in the British Journal of Psychiatry. A systematic review gathers all the studies that meet set criteria, rather than choosing a few, and then combines what they find. The authors searched for papers that described or developed models of personal recovery in mental illness. They identified 5,208 papers, reviewed 366, and included 97, which reported on 87 studies. They combined the results into a conceptual framework with three parts: 13 characteristics of the recovery journey, five recovery processes, and recovery stage descriptions.",
          "A framework like this does not test whether a service works. It organizes what people said. Because the studies were mostly qualitative and published, the framework reflects the voices that made it into publications. Keep that in mind, and use it as a lens.",
        ] },
        { kind: 'concept', title: 'The characteristics of the journey', text: [
          "The review counted how often each characteristic appeared across 87 studies. The most frequent was that recovery is an active process, found in 44 studies. Then that it is an individual and unique process, in 25. That it is a non-linear process, in 21. That it is a journey, in 17. That it involves stages or phases, in 15. That it is a struggle, in 14. That it is a multidimensional process, and also a gradual process, each in 13. That it is a life-changing experience, in 11. That it can happen without cure, in 9. And smaller numbers for recovery aided by a supportive and healing environment, recovery without professional intervention, and trial and error, each in 6.",
          "Several of these match SAMHSA's principles. Individual and unique matches many pathways. Non-linear matches setbacks. Multidimensional matches holistic. The counts show something else too. The most frequent characteristic was that recovery is active. People described doing it, not receiving it.",
        ] },
        { kind: 'concept', title: 'Connectedness', text: [
          "The first recovery process is connectedness. The review identified four parts: peer support and support groups, relationships, support from others, and being part of the community. Support from others appeared in 53 of the studies and was the most common. Peer support and support groups appeared in 39, and being part of the community in 35.",
          "For a worker, connectedness is the clearest place to act. You can help someone find a group, restore a contact, or take a first step back into a community. You are also, by being a steady person in their week, part of their support.",
        ] },
        { kind: 'concept', title: 'Hope and optimism', text: [
          "You met this one in Lesson 2. Its parts were belief in the possibility of recovery, motivation to change, hope-inspiring relationships, positive thinking and valuing success, and having dreams and aspirations.",
        ] },
        { kind: 'concept', title: 'Identity', text: [
          "The third process is identity. The parts were dimensions of identity, rebuilding or redefining a positive sense of identity, and overcoming stigma. Rebuilding a positive sense of identity appeared in 57 studies, and overcoming stigma in 40.",
          "Many people with a mental health condition or substance use problem have been defined by a diagnosis, a label, or an event. Recovery, in these accounts, includes becoming a person again who is not only that. SAMHSA's principle on respect says that self-acceptance, developing a positive and meaningful sense of identity, and regaining belief in oneself are particularly important, and that taking steps toward recovery may require great courage.",
          "In your work this suggests asking about who a person is beyond the diagnosis. What are you good at. What do people come to you for. What matters to you.",
        ] },
        { kind: 'concept', title: 'Meaning in life', text: [
          "The fourth process is meaning in life. The parts were the meaning of mental illness experiences, spirituality, quality of life, a meaningful life and social roles, meaningful life and social goals, and rebuilding life. Quality of life appeared in 57 studies, and meaningful life and social roles in 40.",
          "SAMHSA's dimension of purpose, meaningful daily activities and the means to take part in society, is closely related. Work, school, caring for others, volunteering, and creative activity can give shape to a day. When someone is out of work, the question is not only income. It is also what the days are for.",
        ] },
        { kind: 'concept', title: 'Empowerment', text: [
          "The fifth process is empowerment. The parts were personal responsibility, found in 79 studies, control over life, in 78, and focusing on strengths, in 14. These were the most frequently identified individual parts in the whole framework.",
          "Empowerment ties to SAMHSA's principle that recovery is person-driven, and the principle on strengths and responsibility. That principle says individuals have a personal responsibility for their own self-care and journeys of recovery, that they should be supported in speaking for themselves, that families and significant others have responsibilities to support their loved ones, and that communities have responsibilities to provide opportunities and resources, to address discrimination and to foster social inclusion. Responsibility is shared. It is not only on the individual.",
        ] },
        { kind: 'concept', title: 'Stages, and what the review says about culture', text: [
          "Fifteen of the studies described stages of recovery. The review mapped these onto the transtheoretical model of change that you met in the Motivational Interviewing course. The stage names varied. They included terms like struggling with disability, accepting help, believing, learning, and self-reliant, and, in another study, a reawakening of hope after despair. The point is not to memorize stage names. It is to see that people describe a movement, from being overwhelmed to living beyond the condition, and that the movement is not a straight line.",
          "The review also reports that studies focused on recovery for people of Black and minority ethnic origin placed greater emphasis on spirituality and stigma and identified two additional themes, culturally specific facilitating factors and collectivist notions of recovery. In relation to spirituality, being part of a faith community and having a religious affiliation was seen as an important part of recovery. SAMHSA's principle that recovery is culturally based and influenced makes the same point from the policy side.",
          "The authors note that the framework is a synthesis and that other work has proposed that it does not fully capture the difficulties that can impede recovery. Use it as a way to ask questions and not as a checklist to apply to a person.",
        ] },
        { kind: 'concept', title: 'What this means for your work', text: [
          "Practice guidance for this course. Use the five processes as five kinds of questions, never as a form to fill out. Connectedness. Who is in your corner, and who would you like to be. Hope. What would you like to be different a year from now. Identity. Who are you apart from all this. Meaning. What fills your days, and what would you like to. Empowerment. What is in your control right now, and what do you want to take on first.",
          "Notice that recovery rarely moves on all five at once. Someone may be rebuilding connections while still unsure about identity. A step forward in one area is a step forward.",
        ] },
        { kind: 'vocab', items: [
          { term: 'CHIME', plain: "The acronym for five recovery processes found in a systematic review. Connectedness, hope and optimism, identity, meaning in life, and empowerment." },
          { term: 'Systematic review', plain: "A study that gathers all research meeting set criteria on a question, and combines what it finds." },
          { term: 'Conceptual framework', plain: "A set of linked ideas that helps explain something. It organizes findings and is not a test of an intervention." },
          { term: 'Qualitative research', plain: "Research that studies words and experiences, for example from interviews." },
          { term: 'Empowerment', plain: "A sense of control over one's life and the ability to take responsibility for it." },
        ] },
        { kind: 'myths', items: [
          { myth: "Recovery follows set stages in order.", reality: "The review found stage models, and also that recovery is described as non-linear and individual." },
          { myth: "Recovery is mostly about symptoms.", reality: "The most frequent characteristics were that recovery is active, individual, and non-linear. The processes included connectedness, identity, meaning, and empowerment." },
          { myth: "Recovery is a solo project.", reality: "Connectedness was one of five processes, and support from others was identified in more than half of the studies." },
          { myth: "One framework describes every person.", reality: "The review itself is a synthesis of published work, and the authors note that other frameworks have been proposed." },
        ] },
        { kind: 'case', title: 'A day with five processes in it', scenario: true, text: [
          "A man in his forties has been out of the hospital for three months. A worker asks what has changed. He mentions that a neighbor invited him to a cookout and that he went for an hour. He says his sister has started calling again. He says he has a part-time job interview at a hardware store, and that he used to be good with tools. He says he does not know who he is now. He says he wants to make his own decisions about the medicine, and that he plans to talk to his doctor first.",
          "The worker hears all five processes in the conversation. Connections with a neighbor and a sister. The hope of a job. The question of identity. The wish for meaning and for work. And a desire to be in charge of his own care. She does not tick boxes. She says, you have a lot moving at once. Which of these would you like to start with?",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q5',
          q: "Which of these are the five recovery processes in the CHIME framework?",
          options: [
            "Compliance, hope, insight, medication, and discharge",
            "Connectedness, hope and optimism, identity, meaning in life, and empowerment",
            "Diagnosis, treatment, stabilization, maintenance, and relapse",
            "Awareness, contemplation, preparation, action, and maintenance",
          ],
          answer: 1,
          rationale: "CHIME stands for connectedness, hope and optimism, identity, meaning in life, and empowerment, the five processes found in the 2011 systematic review.",
          distractors: "The last option lists the stages of change, which the review mapped stage descriptions onto. The others describe a treatment sequence.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q6',
          q: "How should a worker use the CHIME framework?",
          options: [
            "As a form to score each person",
            "As a way to prompt open questions about connections, hope, identity, meaning, and control, without treating it as a checklist",
            "As proof that a program works",
            "As a diagnostic tool",
          ],
          answer: 1,
          rationale: "The framework synthesizes how people describe recovery. It does not test an intervention or diagnose, and the authors note limits. It is useful as a source of questions.",
          distractors: "The other answers treat a conceptual framework as a measurement, proof of effectiveness, or diagnosis.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Which of the five processes do you think is most often overlooked in services? Why?",
          "What question would you ask to learn about someone's sense of identity apart from a diagnosis?",
        ] },
        { kind: 'takeaways', items: [
          "People describe recovery as active, individual, and non-linear. They describe five processes, connectedness, hope, identity, meaning, and empowerment.",
          "Support from others and personal responsibility were among the most common parts. Responsibility is shared with families and communities.",
          "Use the framework to ask questions, not to score people.",
        ] },
        ev([
          "Leamy M, et al. (2011). British Journal of Psychiatry, 199(6):445-452. The numbers of papers, the characteristics, the recovery processes and their parts with the counts reported in the tables, the stage models, and the finding about studies of people of Black and minority ethnic origin. Read from the Cambridge Core page, which shows the abstract, introduction, results text, and tables. The numbers are the number of studies in which each part was identified, not a measure of importance.",
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The principles on respect, strengths and responsibility, and culture.",
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 1. The Stages of Change model.",
          "The questions in the final section are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhr-l4',
      title: 'Wellness: more than the absence of symptoms',
      summary: 'The eight dimensions of wellness, the health gap, and ways to support wellness in everyday contacts.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "A person can be free of acute symptoms and still not be well. They may be lonely, broke, in pain, bored, or short of breath after climbing a flight of stairs. The behavioral health field learned, painfully, that treating the mind while ignoring the body and the rest of life leaves people sick in other ways. Wellness is the word for the larger picture.",
        ] },
        { kind: 'concept', title: 'What wellness is', text: [
          "SAMHSA's guide to promoting wellness says that wellness has a personal meaning for each individual and can be defined in many ways. In general it refers to overall well-being. More than the absence of disease or stress, it says, wellness involves having purpose in life, active involvement in satisfying work and play, joyful relationships, a healthy body and living environment, and happiness.",
          "Notice how little of that list is medical. This is why wellness is a good frame for a community health worker. Many of the things on it are the ordinary stuff of your work: a place to go on Tuesdays, a way to get fruit and vegetables, someone to call.",
        ] },
        { kind: 'concept', title: 'The eight dimensions', text: [
          "SAMHSA's Wellness Initiative supports the Eight Dimensions of Wellness: emotional, environmental, financial, intellectual, occupational, physical, social, and spiritual. The guide credits the framework to Swarbrick's 2006 article, A Wellness Approach, in the Psychiatric Rehabilitation Journal. The guide says the dimensions are interconnected within a person's total well-being.",
          "A short description of each, written for this course so that you can use them in a conversation.",
          "Emotional. Coping with stress, understanding and expressing feelings, and feeling hopeful.",
          "Environmental. The places where a person lives and spends time, and whether they are safe, healthy, and pleasant.",
          "Financial. Having enough money and the means to manage it, and feeling secure about what is ahead.",
          "Intellectual. Learning, curiosity, and using one's mind and skills.",
          "Occupational. Satisfaction and meaning from work, paid or unpaid, and from the activities that fill the day.",
          "Physical. The body, including movement, sleep, food, medical and dental care, and avoiding harm from substances.",
          "Social. Relationships and a sense of belonging, and being able to ask for and offer support.",
          "Spiritual. Meaning, purpose, values, and connection to something beyond oneself, which for many people includes faith.",
        ] },
        { kind: 'concept', title: 'Why wellness matters: a health gap', text: [
          "SAMHSA's guide says the Wellness Initiative was inspired by data showing that people diagnosed with serious mental illness who are served by the public mental health system die years earlier than the general population. It says they experience diabetes, high blood pressure and cholesterol, hypertension, and obesity at 1.5 to 2 times the rate of the general population. Another statement in the guide says that these early deaths are mostly due to preventable medical conditions, such as heart disease and diabetes.",
          "The guide says wellness can decrease the risk factors that lead to premature death among people with behavioral health conditions. It does not say that any one habit is a cure, and it does not blame individuals. In the same guide, the stated strategy for communities is to create an environment that is socially inclusive.",
          "This is not abstract for your work. A person who is on medication that affects weight, who lives in a neighborhood without a park, who cannot afford fresh food, and who has not seen a primary care doctor in years is facing the gap in a concrete form. Navigation to primary care and dental care, help with food, and a walking buddy are wellness work.",
        ] },
        { kind: 'concept', title: 'Wellness is personal, and communities shape it', text: [
          "The guide says the path to wellness is different for each individual and each community. It gives the example of Alameda County Behavioral Health Care Services in California, which made a commitment to wellness and asked its community to say what the eight dimensions mean to them, so as to make them culturally relevant.",
          "It also says that socially inclusive communities recognize that each member offers unique strengths that help meet the needs of the entire community, and provide opportunities for people in recovery to contribute as students, colleagues, parents, spouses, congregants, citizens, community members, hobbyists, workers, and more. Wellness is not only a personal discipline. It depends on whether a community makes room.",
          "The guide also describes National Wellness Week, which SAMHSA launched in 2011 as part of Recovery Month and which is observed in the third week of September, as an opportunity for communities to incorporate the eight dimensions into their lives. It suggests partnering with organizations where people already spend their time, such as a day care center for reaching parents.",
        ] },
        { kind: 'concept', title: 'Small, respectful ways to support each dimension', text: [
          "Practice guidance written for this course. Offer, do not impose. Let the person choose which dimension to start with. Frame it as what they want, not what they should do.",
          "Emotional. Ask what helps on a hard day. Share a breathing exercise or a crisis line only if they want it. You can call or text 988 at any time.",
          "Environmental. Notice safety, light, noise, and clutter in a person's living space, and ask whether anything bothers them. Offer to connect them with housing or repair resources.",
          "Financial. Offer help with benefits and budgeting resources. Do not give financial advice.",
          "Intellectual. Ask what they would like to learn. Libraries, classes, and volunteer training are all options.",
          "Occupational. Ask what a good day looks like. Connect to supported employment, volunteering, or school if they are interested.",
          "Physical. Help them make and keep primary care and dental appointments. Ask about food, sleep, and movement. Never tell anyone to start, stop, or change a medicine.",
          "Social. Offer a group, a peer, or a faith community. Ask who they would like to see more of.",
          "Spiritual. Ask what gives their life meaning, and make room for whatever they say, including nothing.",
        ] },
        { kind: 'concept', title: 'Avoiding the trap of blame', text: [
          "A wellness conversation can slip into lecturing. You should exercise more. You should eat better. The Motivational Interviewing course gave you tools to avoid it. Ask first. Reflect what you hear. Offer a menu of options. Respect the person's choices.",
          "The Social Determinants course gave you another. Many wellness choices are constrained by conditions. Telling someone to eat better when they live in a food desert and have no kitchen is not helpful. Ask about barriers, and treat them as problems to solve together.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Wellness', plain: "Overall well-being, which includes purpose, satisfying work and play, joyful relationships, a healthy body and environment, and happiness." },
          { term: 'Eight dimensions of wellness', plain: "Emotional, environmental, financial, intellectual, occupational, physical, social, and spiritual." },
          { term: 'Interconnected', plain: "Each dimension affects the others." },
          { term: 'Socially inclusive', plain: "A community that makes room for each person's strengths and contributions." },
          { term: 'Preventable conditions', plain: "Health problems, such as many cases of heart disease and diabetes, whose risk can be reduced." },
        ] },
        { kind: 'myths', items: [
          { myth: "Wellness is just diet and exercise.", reality: "SAMHSA's framework has eight dimensions, including emotional, financial, social, and spiritual ones." },
          { myth: "People with serious mental illness die early because of their illness itself.", reality: "SAMHSA's guide says the early deaths are mostly due to preventable medical conditions, such as heart disease and diabetes." },
          { myth: "Wellness is each person's own responsibility.", reality: "The guide says communities shape wellness by being socially inclusive, and that wellness looks different across communities." },
          { myth: "A worker should push healthy habits.", reality: "Offering, asking, and respecting choice works better and matches the person-driven principle." },
        ] },
        { kind: 'case', title: 'The conversation about the stairs', scenario: true, text: [
          "A woman in her fifties tells a worker that she does not go to the community meal anymore because the stairs to the hall leave her out of breath. The worker could say she should see a doctor. Instead she asks, what would you like to be able to do that the stairs get in the way of? The woman says she would like to go to the Wednesday meal, where she has friends. The worker asks whether she has a doctor she trusts. She does not. They talk about finding a clinic and about asking whether the meal can move to the ground floor. The worker does not lecture. She connects physical, social, and environmental dimensions in one conversation.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q7',
          q: "Which list matches SAMHSA's eight dimensions of wellness?",
          options: [
            "Emotional, environmental, financial, intellectual, occupational, physical, social, and spiritual",
            "Medical, legal, housing, income, education, food, safety, and transportation",
            "Health, home, purpose, and community",
            "Diagnosis, treatment, recovery, relapse, and maintenance",
          ],
          answer: 0,
          rationale: "The guide lists the eight dimensions as emotional, environmental, financial, intellectual, occupational, physical, social, and spiritual. The third option lists the four dimensions of recovery.",
          distractors: "The second option resembles social determinants, and the last describes a treatment sequence.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q8',
          q: "According to SAMHSA's wellness guide, why was the Wellness Initiative started?",
          options: [
            "Because people with serious mental illness are healthier than average",
            "Because data showed that people with serious mental illness served by the public system die years earlier than the general population, mostly from preventable medical conditions",
            "Because wellness replaces treatment",
            "Because medications do not work",
          ],
          answer: 1,
          rationale: "The guide says the initiative was inspired by data showing that these individuals die years earlier than the general population, mostly from preventable conditions such as heart disease and diabetes.",
          distractors: "The other answers reverse the finding or claim things the guide does not say.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Which of the eight dimensions do you attend to least in your own life? What would a small step look like?",
          "Which dimension do you most often skip when you talk with the people you serve?",
        ] },
        { kind: 'takeaways', items: [
          "Wellness is more than the absence of symptoms. It has eight interconnected dimensions.",
          "People with serious mental illness die years earlier, mostly from preventable conditions. Physical health is part of mental health work.",
          "Offer and ask. Support wellness in small steps that the person chooses, and treat barriers as problems to solve together.",
        ] },
        ev([
          "SAMHSA. Promoting Wellness: A Guide to Community Action (SMA16-4957). The definition of wellness, the eight dimensions and the credit to Swarbrick (2006), the health gap statements, the points about inclusive communities, and National Wellness Week. The guide's footnotes were not read. The guide says people die years earlier and does not give a number in the part read.",
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The dimensions of purpose and community.",
          "The short descriptions of each dimension and the practice suggestions were written for this course.",
        ]),
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhr-l5',
      title: 'Words that open doors, and recovery-oriented practice',
      summary: 'Respectful language, what recovery-oriented work looks like in daily practice, and how to write about people.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Words carry attitudes. A person who hears himself called a frequent flyer, a manipulator, or a schizophrenic learns what the speaker thinks of him, and so does everyone else in the room. The same is true in your notes, which other people will read. The words you choose are among the few things in this work that cost nothing and change the result.",
        ] },
        { kind: 'concept', title: 'What stigma does', text: [
          "A National Institute on Drug Abuse page on language for providers defines stigma as discrimination against an identifiable group. It says stigma about people with substance use disorder can include inaccurate thoughts that they are dangerous, incapable of managing treatment, or at fault for their condition. It says feeling stigmatized can reduce people's willingness to seek treatment, and that stigmatizing views can lead others to feel pity, fear, anger, and a desire for social distance. It adds that stigmatizing language can influence the perceptions of health care providers and the care they give.",
          "The page was written about substance use, and the effects it describes appear with mental health conditions as well. SAMHSA's principle that recovery is based on respect makes the broader point. It says acceptance and appreciation by the community, systems, and society, including protecting rights and eliminating discrimination, are crucial.",
        ] },
        { kind: 'concept', title: 'Person-first language, and letting people choose', text: [
          "The NIDA page recommends person-first language and says individuals should choose how they are described. Person-first language, it says, maintains the integrity of individuals as whole human beings by removing language that equates people to their condition or has negative connotations. The example it gives is person with a substance use disorder in place of addict.",
          "It gives a table of terms to avoid and to use. Instead of addict, use person with substance use disorder. Instead of user, person with opioid use disorder, when opioids are the substance. Instead of alcoholic, person with alcohol use disorder. Instead of former addict, person in recovery or in long-term recovery. Instead of abuse, use for illicit drugs, and misuse for prescription medications used other than as prescribed. It explains that the word abuse was found to have a high association with negative judgments and punishment. For drug test results it recommends testing negative or testing positive, in place of clean or dirty, and notes that the word dirty may decrease people's sense of hope and self-efficacy for change.",
          "It also says that a habit inaccurately implies that a person is choosing to use substances or can simply choose to stop, and that the word may undermine the seriousness of the condition. And on medications for opioid use disorder, it explains that the idea that they merely substitute one drug for another is a misconception.",
          "Davidson's review of peer support recommends in its list of training for staff adopting person-first language and a respectful attitude toward all coworkers.",
          "Two cautions. First, the NIDA page is about substance use. The principle of person-first language is widely used for mental health conditions too, and the safe rule is the one NIDA gives, which is to let individuals choose how they are described. Some people prefer identity-first language and some use words that others avoid. Ask. Second, do not police the words of the people you serve. If a person calls themselves an addict, you do not need to correct them. Use their language when talking with them, and use respectful language in your notes and when you speak about them to others.",
        ] },
        { kind: 'concept', title: 'What recovery-oriented practice looks like', text: [
          "SAMHSA's principles translate into daily practice. Practice guidance written for this course.",
          "Person-driven. Ask what the person wants before you decide what they need. Offer options. Let them decide the order. Write goals in their words.",
          "Many pathways. Do not insist on one approach. Help people explore treatment, medication, peer support, faith, and other approaches, and respect their choices. Do not take a side on medication. Support people to speak with their prescriber.",
          "Holistic. Attend to the whole life, including housing, work, health care, dental care, transportation, and community. The document says services and supports should be integrated and coordinated, so help people connect the pieces.",
          "Strengths. Name capacities and talents. Document what a person can do, not only what is wrong.",
          "Relationships. Involve family and others the person chooses. Ask before you contact anyone.",
          "Culture. Ask what matters to the person's identity, faith, and community. Use interpreters when needed.",
          "Trauma. Create safety and choice. Do not push disclosure.",
          "Respect. Protect rights and dignity. Challenge discrimination when you see it.",
          "SAMHSA's peer competencies list voluntariness as a foundational principle: peer workers are partners or consultants to those they serve, they do not dictate services or the elements of recovery plans, and participation is always contingent on peer choice.",
        ] },
        { kind: 'concept', title: 'Writing about people', text: [
          "Practice guidance written for this course, consistent with the documentation guidance in the Communication course. Write what you saw and heard. Use the person's words for what matters to them. Avoid labels that judge.",
          "Instead of non-compliant, write that the person did not take the medication this week and said it made them dizzy. Instead of manipulative, write what the person asked for and what happened. Instead of frequent flyer, write that the person has visited the emergency department several times in the past month and what they said about why. Instead of refused services, write what was offered and what the person said.",
          "Notes follow the person. They are part of how others will see them. Write the note you would be comfortable with the person reading.",
        ] },
        { kind: 'concept', title: 'When the words are not the problem', text: [
          "Respectful language is necessary and not sufficient. A program can use all the right words and still make every decision for the person. The test is whether the person has a real say. Do they choose goals? Do they have choices about services? Are their rights protected? Do they have access to the things the dimensions of recovery describe?",
        ] },
        { kind: 'vocab', items: [
          { term: 'Stigma', plain: "Discrimination against an identifiable group, often built on inaccurate beliefs." },
          { term: 'Person-first language', plain: "Language that puts the person before the condition, such as person with a substance use disorder." },
          { term: 'Identity-first language', plain: "Language that puts the identity first, which some people prefer. Ask the person." },
          { term: 'Voluntary', plain: "Participation is the person's choice." },
          { term: 'Strengths-based', plain: "Starting from what a person can do and has." },
        ] },
        { kind: 'myths', items: [
          { myth: "Language does not matter if I mean well.", reality: "The NIDA page reports that stigmatizing language can affect how providers perceive people and the care they give." },
          { myth: "There is one correct vocabulary that applies to everyone.", reality: "The page says to let individuals choose how they are described. Ask." },
          { myth: "I should correct how people describe themselves.", reality: "Using the person's own language with them is respectful. Choose respectful language for notes and when talking about them." },
          { myth: "Using the right words makes a program recovery-oriented.", reality: "The test is whether people have real choice and a say in their own care." },
        ] },
        { kind: 'case', title: 'A rewritten note', scenario: true, text: [
          "A worker's first draft of a note reads that the client was non-compliant and manipulative and refused housing. She reads it back and imagines the man reading it. She rewrites it. He did not attend Tuesday's appointment and said the bus did not come. He asked twice for a letter for his landlord and was told the program does not write them. He was offered a housing application on Thursday and said he wanted to talk to his sister first. Plan: call Friday to ask about the bus and about the application. The second note is longer and tells the next person something useful. It also treats him as a person making decisions.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q9',
          q: "According to the NIDA page on language, which is the best approach?",
          options: [
            "Always use the same set of terms, whatever the person prefers",
            "Use person-first language, and let individuals choose how they are described",
            "Avoid talking about the condition at all",
            "Use slang that the person uses, in your notes",
          ],
          answer: 1,
          rationale: "The page recommends person-first language and says individuals should choose how they are described.",
          distractors: "The other options ignore the person's choice or fail to model respectful language.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q10',
          q: "Which note is the most recovery-oriented?",
          options: [
            "Client is non-compliant and refused services",
            "Client did not take the medication this week and said it made him dizzy. He was offered a housing application and wants to talk to his sister first",
            "Client is manipulative",
            "Client is a frequent flyer",
          ],
          answer: 1,
          rationale: "The second note records what was said and done in neutral terms, includes the person's own reasons, and leaves the decision with him.",
          distractors: "The other notes use judging labels and do not record what the person said.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Which words do you use at work that you would not like to hear used about you?",
          "Think of a recent note you wrote. How would it read to the person it is about?",
        ] },
        { kind: 'takeaways', items: [
          "Stigmatizing words affect how people feel and how providers treat them. Use person-first language and let people choose how they are described.",
          "Recovery-oriented practice puts the person in charge, respects many pathways, and attends to the whole life.",
          "Write notes that describe what happened and what the person said, without labels.",
        ] },
        ev([
          "National Institute on Drug Abuse. Words Matter: Terms to Use and Avoid When Talking About Addiction (page read November 10, 2026). The definition of stigma, the effects described, person-first language, and the table of terms. The page was written about substance use, and it carries a notice about federal terminology that has nothing to do with its content, which was ignored.",
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The principles and the statement that services and supports should be integrated and coordinated.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. The principle that peer support is voluntary.",
          "Davidson L, et al. (2012). The recommendation for staff training on person-first language and a respectful attitude.",
          "The note-writing examples and the applications of the principles to practice are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhr-l6',
      title: 'Using your own story, and looking after yourself',
      summary: 'When and how to share lived experience, what the peer support research does and does not show, and the support workers need.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Many people come to this work because of something they lived through. Some will share that in their jobs. Others will not. Whether you have a story of your own or not, you need to know what the research says about sharing, what the competencies ask, and how to protect yourself and the people you serve.",
        ] },
        { kind: 'concept', title: 'What the peer competencies say', text: [
          "SAMHSA's core competencies for peer workers include a category on sharing lived experiences of recovery. The document says that these competencies are unique to peer support, because most roles in behavioral health services do not emphasize or even prohibit sharing lived experience. They include relating your own recovery stories and, with permission, the recovery stories of others, to inspire hope. Discussing ongoing personal efforts to enhance health, wellness, and recovery. Recognizing when to share experiences and when to listen. And describing your own recovery practices and helping others discover practices that work for them.",
          "Two phrases deserve attention. With permission, which means you do not tell other people's stories without their consent. And recognizing when to share and when to listen, which means the decision is a judgment made in the moment, for the benefit of the other person.",
        ] },
        { kind: 'concept', title: 'What the research suggests', text: [
          "Davidson's review reports that positive self-disclosure, role modeling, and conditional regard were among the elements of peer support linked to increases in participants' hope, control, and ability to effect changes in their lives, to better self-care and sense of community belonging, and to lower depression and psychosis. It also states that peer staff delivering conventional services can be effective in engaging people in care, in reducing emergency room and hospital use, and in reducing substance use among people with co-occurring substance use disorders.",
          "A 2014 review in Psychiatric Services by Chinman and colleagues assessed peer support services for people with serious mental illness. The abstract reports that the authors found 20 studies from 1995 through 2012 across three service types, peers added to traditional services, peers in existing clinical roles, and peers delivering structured curricula. They rated the level of evidence for each type as moderate. They reported that many studies had methodological shortcomings and that effectiveness varied by service type. A majority of studies of two types showed some improvement favoring peers, and compared with professional staff, peers were better able to reduce inpatient use and improve a range of recovery outcomes, although one study found a negative impact and the results for peers in existing clinical roles were mixed. The authors concluded that studies that better differentiate the contributions of the peer role would strengthen the evidence. Only the abstract of this review was read for this course.",
          "Be honest about this when you describe the work. Peer support has encouraging evidence, and the evidence is moderate and still developing. It is also consistent with what people say they value.",
        ] },
        { kind: 'concept', title: 'Guidelines for sharing your story', text: [
          "These guidelines are practice guidance written for this course and built on the competencies above. Your program's policy comes first.",
          "Have a purpose. Ask yourself whether sharing helps this person, now. If the main reason is that you want to be understood, hold it.",
          "Keep it short. A few sentences. The person should have more room than you do.",
          "Focus on recovery, not on the worst of it. Davidson's description of the effect is that of showing that it is possible to gain control over an illness. Graphic detail is rarely needed and can be harmful, especially if the person is carrying trauma.",
          "Return the focus to them. After you share, ask a question. What do you make of that. What would that look like for you.",
          "Never share someone else's story without their permission, as the competency says.",
          "Do not share what you are still struggling with in a way that makes the person feel responsible for you.",
          "If you do not have a story of your own, you can still offer hope. SAMHSA says hope can be fostered by peers, families, providers, allies, and others. Do not claim an experience you have not had.",
        ] },
        { kind: 'concept', title: 'What it costs, and what workers need', text: [
          "Davidson's review addresses the burdens on peer staff directly. It says peer staff are asked to take on the additional burdens of disclosing some of their most personal experiences and putting them to use in helping others, and of bearing the scrutiny of representing all peers, because if they do not do well it may factor into whether the agency continues to value peer services. It says that managing these is an important focus for supervision.",
          "It answers the question of whether peer staff are too fragile for the job. It says no. Jobs in mental health settings are stressful for everyone, self-care is an important focus for all staff, and people in recovery should be considered to have shown considerable persistence and resilience. It says employers should apply the same expectations for sick time and accommodations to all employees, and that supervision should concentrate on job skills, performance, and support rather than on the person's clinical status.",
          "It lists strategies that helped: a clear job description and role clarification, valuing the unique contributions of peers rather than assigning tasks that others are too busy to do, starting with at least two peer staff on a team so that they can support each other, and training that covers using your story, listening, relationships, goal setting, emergencies, documentation, ethics and confidentiality, boundaries, self-care, and resolving conflicts.",
          "For you, this means three things. Ask your program for what you need. Use supervision to talk about the effect of the work on you, not only about your tasks. And treat self-care as part of the job. The Professional Conduct course covers self-care and secondary trauma in more detail.",
        ] },
        { kind: 'concept', title: 'When you are struggling', text: [
          "If the work brings up your own difficulties, tell your supervisor or someone you trust. Needing support is not a sign you cannot do the job. If you are having thoughts of hurting yourself, call or text 988 now. In an emergency, call 911.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Lived experience', plain: "Personal experience of a condition or situation, such as recovery from a mental health or substance use problem." },
          { term: 'Peer worker', plain: "A person who uses their own lived experience of recovery, along with training, to support others." },
          { term: 'Self-disclosure', plain: "Choosing to share something personal for the benefit of another person." },
          { term: 'Supervision', plain: "Regular support and guidance on your work, including its effects on you." },
          { term: 'Ally', plain: "A person who supports recovery without having had the experience themselves." },
        ] },
        { kind: 'myths', items: [
          { myth: "Sharing your story is always helpful.", reality: "The competencies say to recognize when to share and when to listen. The test is whether it helps the other person." },
          { myth: "People with lived experience are too fragile for this work.", reality: "Davidson's review says no. It describes persistence and resilience, and says all staff need self-care and the same accommodations." },
          { myth: "The evidence for peer support is settled.", reality: "The Chinman review rated the evidence as moderate, with methodological shortcomings, and called for better studies." },
          { myth: "You need a diagnosis to offer hope.", reality: "SAMHSA says hope can be fostered by peers, families, providers, allies, and others." },
        ] },
        { kind: 'case', title: 'Share, then give it back', scenario: true, text: [
          "A worker with her own recovery from alcohol use is sitting with a young man who says he cannot imagine going a week without drinking. She asks herself whether to share. She decides a little might help. She says, I could not imagine it either, a while ago. I started with one day at a time. What would a day look like for you? She says nothing more about her own story. He talks for ten minutes about what a day would take. She asks what he would need on the hardest part of the day, and writes his answer down with him. She has used her story as a bridge, and the conversation stays his.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q11',
          q: "According to SAMHSA's peer competencies, how should a peer worker approach sharing lived experience?",
          options: [
            "Share as much as possible in every conversation",
            "Recognize when to share and when to listen, and share others' stories only with their permission",
            "Never share anything personal",
            "Share only what the supervisor requires",
          ],
          answer: 1,
          rationale: "The competencies include recognizing when to share experiences and when to listen, and relating the stories of others only with permission.",
          distractors: "The other options either make sharing automatic, forbid it, or give the decision to someone else.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhr-q12',
          q: "How would you describe the research evidence on peer support services for people with serious mental illness?",
          options: [
            "It shows peer support always works better than other services",
            "It shows peer support does not work",
            "It shows encouraging results, rated moderate with methodological shortcomings, and calls for better studies",
            "There is no research",
          ],
          answer: 2,
          rationale: "The Chinman review rated the evidence for each type of peer support as moderate, noted shortcomings, and found improvements favoring peers in a majority of studies of two service types. Davidson's review describes encouraging effects and a developing field.",
          distractors: "The other answers overstate, understate, or deny the research.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "If you have a story of your own, what is one thing you would share, and one you would not? If you do not, how will you offer hope?",
          "What do you need from your program to do this work and stay well?",
        ] },
        { kind: 'takeaways', items: [
          "Share your story with a purpose, briefly, with a focus on recovery, and return the focus to the person.",
          "Peer support has encouraging, moderate, and still developing evidence. Be honest about both.",
          "The work has costs. Use supervision, ask for what you need, and treat self-care as part of the job.",
        ] },
        ev([
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category III, shares lived experiences of recovery.",
          "Davidson L, Bellamy C, Guy K, Miller R (2012). World Psychiatry, 11(2):123-128. Read in full. The effects reported, the burdens on peer staff, the answers to common concerns, and the strategies for implementation.",
          "Chinman M, et al. Peer support services for individuals with serious mental illnesses: assessing the evidence. Psychiatric Services, 2014;65(4):429-441. Only the abstract, as posted by RAND, was read.",
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The statement that hope can be fostered by allies.",
          "The guidelines for sharing your story are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-mhr-practice',
    title: 'Your recovery and wellness practice file',
    minutes: 30,
    purpose: 'Five short pieces that you keep: your own definition of recovery, honest words of hope, a conversation map using the five processes, your wellness conversation starters, and your guidelines for sharing and for self-care.',
    fields: [
      { id: 'definition', label: 'Your definition', help: 'In your own words, write what recovery means. Say what it does not mean. Name the dimension of recovery you think workers overlook most, and why.', multiline: true },
      { id: 'hope', label: 'Words of honest hope', help: 'Write five sentences you can say to someone who has lost hope. Each must acknowledge the facts, name a strength, or offer a next step, without promising an outcome. Add one sentence you will no longer say.', multiline: true },
      { id: 'chime', label: 'A conversation map', help: 'Write one open question for each of connectedness, hope, identity, meaning, and empowerment. Then write how you would listen for each in a conversation, without using it as a form.', multiline: true },
      { id: 'wellness', label: 'Wellness conversation starters', help: 'For four of the eight dimensions, write a question you would ask and one resource or action you could offer. Add one barrier a person might face and how you would respond without blame.', multiline: true },
      { id: 'story', label: 'Sharing and self-care', help: 'If you have lived experience, write your guidelines for when and how you will share it. If you do not, write how you will offer hope. Then write what you need from your program, who you will go to when the work is hard, and what you will do each week to stay well.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'SAMHSA: SAMHSA\'s Working Definition of Recovery, 10 Guiding Principles of Recovery (2012)', use: 'The federal definition, the four dimensions, and the ten principles.', url: 'https://store.samhsa.gov/sites/default/files/d7/priv/pep12-recdef.pdf' },
    { name: 'Leamy M, et al. Conceptual framework for personal recovery in mental health: systematic review and narrative synthesis (2011)', use: 'The review that produced the CHIME framework.', url: 'https://doi.org/10.1192/bjp.bp.110.083733' },
    { name: 'Davidson L, et al. Peer support among persons with severe mental illnesses: a review of evidence and experience (2012)', use: 'An open-access review of the research and the experience of peer support.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3363389/' },
    { name: 'Chinman M, et al. Peer support services for individuals with serious mental illnesses: assessing the evidence (2014)', use: 'A review of 20 studies of peer support services.', url: 'https://doi.org/10.1176/appi.ps.201300244' },
    { name: 'SAMHSA: Promoting Wellness, A Guide to Community Action', use: 'The definition of wellness, the eight dimensions, and ideas for communities.', url: 'https://store.samhsa.gov/sites/default/files/sma16-4957.pdf' },
    { name: 'National Institute on Drug Abuse: Words Matter, Terms to Use and Avoid When Talking About Addiction', use: 'Person-first language and a table of terms.', url: 'https://nida.nih.gov/nidamed-medical-health-professionals/health-professions-education/words-matter-terms-to-use-avoid-when-talking-about-addiction' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The competencies for peer workers, including sharing lived experience.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
  ],
};
