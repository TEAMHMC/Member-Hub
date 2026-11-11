// Community Mental Health Worker Pathway, Foundations course 6: Motivational Interviewing.
//
// This is the certificate's own course 6 (id chw_motivational_interviewing, 5 hours, live). The id
// matches the certificate on purpose: the Academy posts every completed course to the portal, and the
// portal credits a learner only for ids it recognizes.
//
// A live practice course. Three short lessons are read before the sessions. Three scheduled sessions
// are practiced with a facilitator and a group. The stated 300 minutes equal the lessons, the
// sessions, and the practice file.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The central
// source is SAMHSA's Treatment Improvement Protocol 35 (2019 update), Enhancing Motivation for Change
// in Substance Use Disorder Treatment, read in full from the SAMHSA publication. Two studies of
// community health workers trained in motivational interviewing are used for what training and
// practice look like in this workforce, and both are described with their limits. The NCBI Bookshelf
// copy of TIP 35 could not be read by an automated request, and two open-access reviews could not be
// reached, so the course does not rely on them.
//
// The examples, scenes, and practice statements were written for this course. They describe no real
// person. The course teaches a conversation style for community health and peer workers. It does not
// teach substance use treatment, and it does not ask anyone to counsel outside their role.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MOTIVATIONAL_INTERVIEWING: Course = {
  id: 'chw_motivational_interviewing',
  num: 6,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Motivational Interviewing',
  promise:
    "Learn the spirit and the core skills of motivational interviewing, a respectful way of talking with people about change, and practice using it in conversations about health, recovery, and goals, within your role.",
  about: [
    "This course teaches a way of talking with people when they feel two ways about a change. It is for the conversation where you can see a good next step and the person is not sure, not ready, or not convinced. Motivational interviewing, often shortened to MI, gives you a way to stay useful in that moment without pushing, lecturing, or giving up.",
    "It rests on SAMHSA's Treatment Improvement Protocol 35, the 2019 update on enhancing motivation for change, which describes motivational interviewing in detail. It also draws on two published studies of community health workers who were trained in motivational interviewing, on the national competencies for peer workers in behavioral health, on the C3 Project's list of community health worker skills, and on SAMHSA's trauma-informed care protocol.",
    "It is Foundations course 6 of HMC's community health worker certificate. It is a live practice course. You read three short lessons, then practice in three scheduled sessions, then complete a practice file. Reading about this skill is not enough. It is a skill you build by practicing and by getting feedback.",
  ],
  objectives: [
    "Explain ambivalence and why arguing for change tends to make people defend the way things are.",
    "Describe the four elements of the spirit of motivational interviewing and recognize them in a conversation.",
    "Use open questions, affirmations, reflections, and summaries, and avoid the common roadblocks to listening.",
    "Tell change talk from sustain talk and respond to each without arguing.",
    "Move a conversation through engaging, focusing, evoking, and planning, and give information by asking first.",
    "Name the limits of your role and make a plan to keep your skill strong after the course.",
  ],
  minutes: 300,
  prerequisites: "None. Communication and Documentation and Trauma-Informed Practice are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management who talk with people about health, recovery, services, or goals. You do not need any counseling background.",
  freshness:
    "The practice described here is long established, and the evidence for it keeps growing. SAMHSA's protocol was updated in 2019. Your program tells you which conversations are part of your role and what procedures apply.",
  modality: 'virtual',
  requirements: [
    { id: 'mi-lessons', label: 'Read the three lessons before the first session', kind: 'assignment' },
    { id: 'mi-s1', label: 'Attend Session 1, The Spirit of MI and Reflective Listening', kind: 'attend' },
    { id: 'mi-s2', label: 'Attend Session 2, Change Talk and Sustain Talk', kind: 'attend' },
    { id: 'mi-s3', label: 'Attend Session 3, Whole Conversations and Keeping Your Skill', kind: 'attend' },
    { id: 'mi-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mi-l1',
      title: 'What motivational interviewing is, and what it is not',
      summary: 'Ambivalence, the spirit of MI, why advice often backfires, and what the evidence does and does not show.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Most people who do this work are good at seeing what would help. You can see that the medication should be refilled, that the benefits form should be turned in, that the cough should be looked at. So you say so, clearly and kindly, and the person nods and does not do it.",
          "That gap is not a failure of explanation. It usually means the person feels two ways about the change, and a clear argument for one side makes the other side louder. Motivational interviewing is a way of working with that tension instead of pushing against it. It is one of the interviewing skills named in the C3 Project's national list of community health worker skills.",
        ] },
        { kind: 'concept', title: 'Ambivalence is normal', text: [
          "SAMHSA's protocol describes motivational interviewing as a person-centered counseling style for the common problem of ambivalence about change. Ambivalence means feeling two ways at once. A person can want to cut down on drinking and also want to keep the evenings that go with it. A person can know that the pills help and also hate how they feel on them.",
          "The protocol is clear that ambivalence is not denial and not a flaw in the person. It says that the tension is often what stands between a person and change, more than a lack of knowledge about how to change. If you read ambivalence as denial or resistance, the protocol warns, you are likely to create discord between you and the person, and that works against you.",
          "There is a natural urge to jump in and fix. The protocol calls it the righting reflex, the impulse to steer the person toward the right course. The trouble is that a directive style is likely to produce what the protocol calls sustain talk, the person's own words in favor of keeping things as they are, and strain in the relationship.",
        ] },
        { kind: 'concept', title: 'The spirit of MI', text: [
          "According to the protocol, the spirit of MI is the foundation. Without it, the techniques do not work. It has four elements, which the protocol suggests remembering with the word PACE.",
          "Partnership is real collaboration. You are influential, but the person drives the conversation. Acceptance is respect for the person, and it does not mean agreeing with everything they say. It has four parts. Absolute worth, which is seeing the person's inherent value and potential. Accurate empathy, which is real curiosity about how things look from their side. Autonomy support, which is honoring their right and capacity to choose their own direction. And affirmation, which is acknowledging their values and strengths.",
          "Compassion is actively promoting the person's welfare and putting their needs first. Evocation is drawing out the motivations, values, strengths, and resources the person already has, rather than supplying them.",
          "The protocol lists several beliefs that follow. The person is the expert in their own life. You do not make change happen. People have their own motivation, strengths, and resources, and your job is to help bring them out. You do not have all the good ideas, and you probably do not have the best idea for any one person. Conversations about change should not become debates. And it is not a change goal until the person says so.",
        ] },
        { kind: 'concept', title: 'Why advice so often backfires', text: [
          "The protocol borrows a list of twelve things people commonly say that interrupt real listening. They include ordering, warning, advising before being asked, arguing with logic, lecturing, judging, labeling, and reassuring too quickly. It points out that even praise can get in the way when it is general or too frequent, and that heavy questioning can feel like an interrogation.",
          "Its explanation is simple. When you do any of these, you are talking and not listening. However kind the intent, the focus moves from the person to you. And if you try to persuade someone that your position is correct, the protocol says, you will most likely evoke a reaction in which they take the opposite position.",
          "This does not mean you never give advice or information. It means you ask first, and you give it in a way that leaves the decision with the person. You will practice that in Lesson 3.",
        ] },
        { kind: 'concept', title: 'What MI is not', text: [
          "The protocol clears up several mix-ups. MI is not a technique. It is a style of being with people that uses specific skills to build motivation. It is not a school of therapy. It shares ideas with the person-centered approach of Carl Rogers, but it is more directive, because it guides the conversation toward a change goal that the person chooses. It is not the same thing as the Stages of Change model, though the two fit together. And it cannot manufacture motivation that is not there. The protocol says it is a partnership to discover the person's own reasons.",
          "MI is not a way to trick someone into doing what your program wants. The protocol states that the needs of the person come before the counselor's or the organization's needs or goals. If you notice yourself steering toward a result that matters to you more than to them, stop and return to what they want.",
        ] },
        { kind: 'concept', title: 'What the evidence shows, and what it does not', text: [
          "The protocol reports that analysis of more than 200 randomized clinical trials found significant efficacy of motivational interviewing in treating substance use disorders. It describes the overall evidence as showing small to strong effects compared with no treatment, and effects about as good as other counseling approaches. It also notes that some studies report mixed results, and that how closely a counselor follows the MI skills matters for how well people do.",
          "Most of that research was done with trained counselors and clinicians. It lists peer providers among the people who can use MI, but you should know what the research says about workers like you. A 2017 pilot study in Sao Paulo, Brazil trained 19 community health agents in MI-based counseling for people with poorly controlled diabetes. The training was 32 hours, with 4 hours a month of booster training and support over six months. Of the 16 agents who were observed, 13 were rated medium or high performing on MI skills and 3 were low. Patients reported improvements in the quality of care and in some self-care behaviors. The authors are plain about the limits. It was a single-group study with no comparison group, at one site, so it cannot show that the training caused the changes.",
          "A 2024 study in rural Nepal interviewed 12 community health workers and 7 supervising nurses about using MI with young people living with HIV. The workers had received 35 hours of MI training. They still tended to go back to giving advice when they struggled to respond. The authors report that supportive supervision helped, including supervisors listening to recorded conversations, and that materials from the training were useful to look back at. They also note that studies have found community health workers lose MI skills a few months after training.",
          "What to take from this. MI is a skill that community health workers can learn and use. Training once is not enough. Practice, feedback, and supervision are what keep the skill.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Ambivalence', plain: "Feeling two ways about a change at the same time. It is normal and it is not denial." },
          { term: 'Righting reflex', plain: "The urge to fix a problem or steer a person toward the right course. It often produces pushback." },
          { term: 'Spirit of MI', plain: "Partnership, acceptance, compassion, and evocation. The attitude behind the skills. Remembered as PACE." },
          { term: 'Evocation', plain: "Drawing out the person's own reasons, strengths, and values instead of supplying yours." },
          { term: 'Sustain talk', plain: "The person's own words in favor of keeping things as they are." },
          { term: 'Change talk', plain: "The person's own words in favor of making a change." },
        ] },
        { kind: 'myths', items: [
          { myth: "If I explain the risks clearly enough, people will change.", reality: "Knowledge is often not the barrier. The protocol points to ambivalence as the more common roadblock, and arguing for change tends to bring out the other side." },
          { myth: "MI is a set of tricks for getting people to do what you want.", reality: "It is a respectful style. The person's needs come first, and it is not a change goal until the person says so." },
          { myth: "Being nonjudgmental means agreeing with whatever the person says.", reality: "Acceptance means respect and real curiosity. It does not mean agreeing." },
          { myth: "Once I finish the training, I will have the skill.", reality: "Research on community health workers shows people drift back to advice-giving. Practice and feedback keep the skill." },
        ] },
        { kind: 'case', title: 'The same appointment, two conversations', scenario: true, text: [
          "Rosa is 58 and takes a daily blood pressure pill. She tells the worker she stopped taking it two weeks ago. In the first conversation the worker says, you really need to take that every day, high blood pressure can cause a stroke, and I can set up a reminder on your phone. Rosa folds her arms and says she does not like being told what to do about her own body.",
          "In the second conversation the worker says, thanks for telling me. That could not have been easy to say. What was it about the pill that made you stop? Rosa says it makes her dizzy and tired, and she has a grandson to look after. The worker says, so you stopped because the pill was making it hard to be the grandmother you want to be. Rosa nods, and then says she is scared about what happens if she does not take it. The second worker has learned more in two minutes, and the next step is now Rosa's to name, not the worker's. The worker did not change Rosa's mind. Rosa did.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mi-q1',
          q: "According to SAMHSA's protocol, how should you view a person's ambivalence about change?",
          options: [
            "As denial that needs to be confronted",
            "As a normal part of the change process, which you explore instead of argue against",
            "As a sign the person does not want help",
            "As something to resolve by giving them more information",
          ],
          answer: 1,
          rationale: "The protocol says ambivalence is a normal experience in the change process, not denial or resistance, and that reading it as denial is likely to create discord with the person.",
          distractors: "The other answers treat ambivalence as a defect or assume the missing piece is information.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mi-q2',
          q: "Which statement best matches what the research on community health workers and MI shows?",
          options: [
            "One training day is enough to build lasting MI skill",
            "Community health workers cannot learn MI",
            "Workers can learn MI, but without practice and supervision they often drift back to advice-giving",
            "MI should be used only by licensed counselors",
          ],
          answer: 2,
          rationale: "In the Brazil pilot most observed agents reached medium or high performance after training with ongoing boosters. The Nepal study found workers reverted to advice-giving when they struggled, and that supportive supervision helped.",
          distractors: "The other answers overstate or understate what the studies found.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "Think of a time someone told you what to do about something you were unsure of. What did you feel like doing?",
          "What is a conversation in your work where you are most tempted to fix and push?",
        ] },
        { kind: 'takeaways', items: [
          "Ambivalence is normal. Argue for change and people defend the way things are.",
          "The spirit of MI is partnership, acceptance, compassion, and evocation. The skills only work inside that spirit.",
          "Community health workers can learn MI, and the skill holds up only with practice, feedback, and supervision.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 35, Enhancing Motivation for Change in Substance Use Disorder Treatment (2019 update), Chapter 3. The description of MI, ambivalence, the righting reflex, the spirit of MI and PACE, the person-centered principles, the twelve roadblocks to listening, the misconceptions about MI, and the summary of the research evidence. Read in full from the SAMHSA publication. The protocol is written for counselors, and this course adapts it for community health and peer workers.",
          "do Valle Nascimento TMR, et al. A pilot study of a Community Health Agent-led type 2 diabetes self-management program using Motivational Interviewing-based approaches in a public primary care center in Sao Paulo, Brazil. BMC Health Services Research, 2017. The training length, the observed performance, and the study's own limitations.",
          "Community health workers' barriers and facilitators to use a novel mHealth tool for motivational interviewing to improve adherence to care among youth living with HIV in rural Nepal. PLOS Global Public Health, 2024. The workers' tendency to return to advice-giving, the role of supportive supervision, and the statement that skills are lost after training.",
          "C3 Project. Understanding Scope and Competencies, a Contemporary Look at the U.S. Community Health Worker Field (2016). Skill 2, interpersonal and relationship-building skills, which includes the ability to use interviewing techniques such as motivational interviewing and to conduct self-management coaching.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. The principles that peer support is person-centered and voluntary.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mi-l2',
      title: 'The core skills, OARS',
      summary: 'Open questions, affirmations, reflections, and summaries, and the traps that stall a conversation.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Four small skills carry most of motivational interviewing. They are simple to name and slow to master. If you build only one of them, build reflection, because it is the one that shows a person you actually heard them.",
        ] },
        { kind: 'concept', title: 'The four skills', text: [
          "SAMHSA's protocol uses the word OARS for the core skills. Open questions. Affirmations. Reflective listening. Summaries. It says these skills fit the person-centered approach and can be used throughout your work, and that using them makes it more likely you will engage the person and less likely you will end up in discord.",
        ] },
        { kind: 'concept', title: 'Open questions', text: [
          "An open question invites the person to think and to say more. A closed question gets a yes, a no, or a number. The protocol says open questions help you understand the person's point of view and keep the person doing most of the talking. It notes that a sentence like tell me about is a kind of open question.",
          "Here are pairs written for this course. Closed, did you take your medicine this week. Open, tell me how the medicine has been fitting into your days. Closed, do you want to go to the clinic. Open, what do you think about going to the clinic. Closed, are you worried about your drinking. Open, what, if anything, do you notice about the drinking that you would change.",
          "You will still need closed questions at times, such as to fill in a form. The protocol warns about the question-and-answer trap. If you ask a string of closed questions, the person becomes a passive answerer and you become the expert, and the conversation can feel like an interrogation.",
        ] },
        { kind: 'concept', title: 'Affirmations', text: [
          "An affirmation names a strength, an effort, or a value you see in the person. The protocol says it supports confidence, and that it is different from praise. Affirm strengths, past successes, and efforts to take steps, however small.",
          "It suggests putting the person, not yourself, at the center of the sentence. Instead of saying I am proud of you, say something like you have worked hard to get here. Name specific behaviors and describe instead of grading.",
          "The protocol adds that people respond to affirmations differently across cultures and personally. Watch their reaction, and be ready to check it with an open question such as how was that to hear.",
        ] },
        { kind: 'concept', title: 'Reflective listening', text: [
          "The protocol calls reflective listening the key to expressing empathy. You listen, make a guess about what the person means or feels, and say that guess back as a statement. You are not stating a fact. You are checking your understanding, and the person tells you whether you are on target.",
          "A simple reflection repeats or rephrases what the person said. A complex reflection adds a guess about the meaning or feeling underneath it. Simple reflections show you are listening. Complex reflections help the person go deeper.",
          "Example written for this course. The person says, I know the clinic wants me back in two weeks, but I cannot keep taking time off work. A simple reflection is, two weeks is hard to fit in with work. A complex reflection is, you want to keep up with your health, and you are afraid of what missing work will cost you.",
        ] },
        { kind: 'steps', title: 'How to make a complex reflection', items: [
          { label: 'Hear', text: "Listen to what the person says." },
          { label: 'Guess', text: "In your mind, make a guess about what it means or what they feel. The protocol uses the example of a person who says they drink because they are lonely. Lonely could mean a lost spouse, trouble making friends, or nothing to say with family." },
          { label: 'Say it', text: "Offer your best guess as a statement." },
          { label: 'Watch', text: "The person will tell you, in words or by their face, whether you were close. If they keep talking, you are on target." },
          { label: 'Be willing to be wrong', text: "If you missed, use what they say to make a new guess." },
        ] },
        { kind: 'concept', title: 'A useful pattern, and a ratio to aim for', text: [
          "The protocol describes a double-sided reflection. It acknowledges the side of the person that wants to keep things as they are, then adds the side that wants change, joined by the word and, and with the change side last. Example written for this course. You do not like how the pill makes you feel, and you want to be around for your grandson.",
          "It also recommends balancing questions and reflections. After you ask one open question, follow it with at least one reflection, and preferably two or three, before asking another question. It reports that a higher ratio of reflections to questions is associated with better outcomes for people.",
        ] },
        { kind: 'concept', title: 'Summaries', text: [
          "A summary gathers what the person has said and hands it back, choosing the parts that matter. The protocol names several kinds. A collecting summary gathers related statements. A linking summary connects what was just said to something said earlier. A transitional summary wraps up and moves the conversation along. It suggests ending a summary by asking whether you left anything out.",
        ] },
        { kind: 'concept', title: 'Five traps that stall a conversation', text: [
          "The protocol names these traps. The expert trap, where you act as though you hold the answers and the person has to wait for them. The labeling trap, where you push a word like alcoholic or addict that can bring shame and argument. The question-and-answer trap described above. The premature focus trap, where you jump to your agenda before the person is ready. And the blaming trap, where the person expects judgment and defends. Its advice for the last one is to reassure people early that you are not here to blame anyone.",
        ] },
        { kind: 'list', title: 'Swap these', items: [
          "Instead of you need to take it every day, try what would make taking it easier for you.",
          "Instead of why didn't you go, try what got in the way.",
          "Instead of you should cut back on the smoking, try how do you feel about your smoking right now.",
          "Instead of that is not a big deal, try that sounds like it has been weighing on you.",
          "Instead of a string of questions, try one question and two reflections.",
        ] },
        { kind: 'tryit', title: 'Try it', text: [
          "Write one reflection for each of these statements, one simple and one complex. First, I was going to go to the food bank, but I hate standing in that line. Second, my sister keeps telling me I need to quit, and I am tired of hearing it. Third, I want my kids to see me do better, but some days it feels like too much.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mi-q3',
          q: "Which of these is an open question?",
          options: [
            "Did you go to your appointment?",
            "Are you taking your medication?",
            "What has the last week been like for you?",
            "Do you agree it is time to cut back?",
          ],
          answer: 2,
          rationale: "An open question invites the person to reflect and say more, and does not call for a yes, a no, or the answer you want.",
          distractors: "The other three are closed, and the last one also hints at the answer you want to hear.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mi-q4',
          q: "A person says, I love getting out with my friends, but I know the drinking is catching up with me. Which response is a double-sided reflection?",
          options: [
            "You should really cut back.",
            "You love time with friends, and you are noticing what the drinking is costing you.",
            "So you are saying you drink too much.",
            "Why do you keep going out if you know it is hurting you?",
          ],
          answer: 1,
          rationale: "A double-sided reflection holds both sides, joined by and, and ends on the change side so that the person hears their own reason for change.",
          distractors: "The other answers give advice, label the person, or ask a challenging why question.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mi-q5',
          q: "The protocol recommends a rough balance between questions and reflections. What does it suggest?",
          options: [
            "Ask as many questions as possible to gather information",
            "After one open question, follow with at least one and preferably two or three reflections",
            "Avoid all questions",
            "Alternate one question and one piece of advice",
          ],
          answer: 1,
          rationale: "The protocol recommends one open question followed by two or three reflections, and reports that a higher ratio of reflections to questions is associated with better outcomes.",
          distractors: "The other options either create the question-and-answer trap, ignore the value of questions, or add advice.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Which of the four skills do you use most? Which do you use least?",
          "When you listen, do you tend to ask the next question or to say back what you heard?",
        ] },
        { kind: 'takeaways', items: [
          "OARS is open questions, affirmations, reflections, and summaries. Reflection carries the most weight.",
          "A reflection is a guess said as a statement. Be willing to be wrong, and let the person correct you.",
          "After one open question, offer two or three reflections. Avoid the expert, labeling, question-and-answer, premature focus, and blaming traps.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 3. The descriptions of open questions, affirmations, reflective listening, summaries, and the traps, the steps for forming a complex reflection, and the question-to-reflection balance. Example sentences in this lesson were written for this course and are not taken from the protocol.",
          "do Valle Nascimento TMR, et al. (2017). The skills the research team rated in community health agents, including open-ended questions, expressing empathy, and supporting autonomy.",
          "C3 Project (2016). Skill 1, communication skills, including the ability to listen actively, and skill 2, which includes interviewing techniques.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mi-l3',
      title: 'The four processes, change talk, and staying in your role',
      summary: 'How a conversation moves, how to hear and respond to change talk and sustain talk, and where your role ends.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Once you can listen and reflect, you need to know where the conversation is going. This lesson gives you a map, a way to hear the person moving toward or away from change, and a clear sense of where your role stops.",
        ] },
        { kind: 'concept', title: 'Four processes', text: [
          "The protocol describes four overlapping processes. They are not a ladder. A conversation can move forward and loop back.",
          "Engaging is building a trusting and respectful relationship. Nothing else works without it. Focusing is finding a direction. You and the person agree on what to talk about and on a specific behavior to work on. Evoking is drawing out the person's own reasons and their confidence for change. Planning is working out how, once the person has decided.",
          "When the person has several concerns, the protocol suggests an agenda map. You draw a handful of empty circles and write each concern in one, leave a few blank, and ask the person where they would like to start. If you want to add a topic, ask permission. The point is that the person helps decide what the conversation is about.",
          "Some people are not ready to talk about the change at all. The protocol advises against rushing to action in that case and says to keep building the relationship and to explore.",
        ] },
        { kind: 'concept', title: 'Change talk and sustain talk', text: [
          "The protocol names two kinds of statements. Change talk is the person speaking in favor of change. Sustain talk is the person speaking in favor of keeping things as they are. Both come from the same person at the same time. It reports that more sustain talk is associated with poorer outcomes and that more and stronger change talk is associated with better outcomes.",
          "It breaks change talk into seven types, which it remembers with the letters DARN and CAT. Desire is wanting something different. Ability is believing you could. Reasons are specific arguments for the change. Need is feeling that it has to happen. Those four, the DARN types, appear early. Then comes commitment, which is promising. Activation, which is saying you are ready. And taking steps, which is having already done something. Those three, the CAT types, show up as the person moves toward action.",
          "Examples written for this course. Desire, I would like to sleep better. Ability, I could stop having coffee after lunch. Reason, I would have more patience with my kids. Need, I have to do something about this. Commitment, I will skip the coffee this week. Activation, I am ready to try it. Taking steps, I had tea last night instead.",
          "You do not need to label each statement while you are talking. The protocol says to notice change talk, reflect it, and ask for more.",
        ] },
        { kind: 'concept', title: 'Evoking change talk', text: [
          "The protocol suggests open questions built on the DARN types. How would you like things to be different. What makes you think you might need to make a change. What are the downsides of how things are now. What would be the good things about changing.",
          "It also describes scaling questions. Ask, on a scale of zero to ten, how important is it for you to make this change. Then ask why the person chose that number and not a lower one. Asking why not a lower number invites reasons for change. Asking why not a higher number invites reasons against, and the protocol warns that it will likely bring out sustain talk. The same method works for confidence, and the protocol says that ability change talk, where the person voices belief that they could do it, is one of the most consistent predictors of positive change. If confidence is low, ask what would move it up one point, not five.",
        ] },
        { kind: 'concept', title: 'Responding to sustain talk', text: [
          "When you hear sustain talk, do not argue and do not try to persuade. The protocol lists several responses. Reflect it simply, so the person feels heard. Offer a double-sided reflection. Emphasize the person's autonomy, as in it is up to you, no one can make that choice for you. Reframe, by acknowledging what the person said and offering a different way of seeing it. Or shift focus, if the conversation is heating up.",
          "The protocol also notes that sustain talk is often a reaction to discord in the relationship. It is a two-way street. If the conversation is getting tense, change direction or listen more carefully.",
        ] },
        { kind: 'concept', title: 'Giving information by asking first', text: [
          "Sometimes people really do need information. The protocol describes a three-step method. It calls it elicit, provide, elicit.",
          "Elicit. Ask what the person already knows and whether they would like to hear more. Would it be all right if I shared some information about this. Provide. Give the information plainly and neutrally, in small pieces, focusing on what they said they wanted to know. Elicit again. Ask what they make of it. What do you think about that.",
          "This is how you give advice and still keep the person in charge. It is also how you make sure they understood, which fits the teach-back habit from the communication course.",
        ] },
        { kind: 'concept', title: 'Planning', text: [
          "When the person starts to talk about doing something, such as asking what they might do, you can ask a key question. What do you think you will do. What is the next step for you. Where do you want to go from here. If the answer is change talk, you can move toward a plan. If the answer is sustain talk, go back to evoking. The protocol says change is not linear and warns against rushing into planning when the person is not ready.",
          "A change plan starts with the goal the person names. The goal may be to cut back or to stop, and it can change as they try it. Ask for their ideas about how first, and then, with permission, offer a menu of options. Summarize the plan. Talk about what might get in the way and what they would do. The protocol notes that many people can make big changes without formal help, so a plan does not need to be formal.",
        ] },
        { kind: 'concept', title: 'Your role, and when to step out of the conversation', text: [
          "MI is a way of talking, and it is useful across many topics, including taking medicine, getting to appointments, applying for benefits, and cutting back on smoking or drinking. It is not treatment, and it does not give you permission to counsel on matters your program has not assigned to you. Know which conversations are yours and which belong to a clinician.",
          "MI is also not the right tool in a crisis. If a person says they are thinking about hurting themselves or someone else, or that a child or a dependent adult is being harmed, stop the exploring, stay with them, and follow your program's procedure the same day. You can call or text 988 for support in a crisis, or call 911 in an emergency. The Professional Conduct course covers when a report is required.",
          "Keep the person's interests at the center. The protocol says the needs of the person come first. If you are using these skills to reach a target number for your program and not to help the person, you are no longer doing motivational interviewing.",
        ] },
        { kind: 'concept', title: 'Keeping your skill', text: [
          "Both studies of community health workers point the same way. The skill fades without support. The Brazil pilot gave the agents monthly booster sessions as well as the first training, and the Nepal study found supportive supervision, including reviewing recorded conversations, helped workers stop drifting back to advice-giving. Recordings should only be made if your program allows it and the person agrees.",
          "Plan for this now. Find a practice partner. Ask your supervisor to watch you or listen to you with permission. Choose one skill a week, such as two reflections for every question, and track it.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Engaging', plain: "Building a trusting and respectful relationship." },
          { term: 'Focusing', plain: "Agreeing on what to talk about and which behavior to work on." },
          { term: 'Evoking', plain: "Drawing out the person's own reasons and confidence for change." },
          { term: 'Planning', plain: "Working out how, after the person has decided." },
          { term: 'DARN-CAT', plain: "Desire, ability, reasons, need, commitment, activation, and taking steps. The seven kinds of change talk." },
          { term: 'Elicit, provide, elicit', plain: "Ask what they know, give information in small pieces, ask what they make of it." },
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mi-q6',
          q: "A person says, I know I should quit smoking, but I have tried before and it was too hard. What kind of statements are in this sentence?",
          options: [
            "Only sustain talk",
            "Only change talk",
            "Both sustain talk and change talk, which is normal ambivalence",
            "Neither, because the person is not ready",
          ],
          answer: 2,
          rationale: "The person voices a reason for change (I know I should quit) and sustain talk (it was too hard). Both sides appear together in ambivalence, and you can reflect both with the change side last.",
          distractors: "The other answers miss that both sides are present in one sentence.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mi-q7',
          q: "You want to share information about a program with a person who has not asked. Which approach matches elicit, provide, elicit?",
          options: [
            "Give the full information and ask whether they have any questions",
            "Ask what they already know and whether they would like to hear more, share a small piece, and ask what they make of it",
            "Tell them what you think they should do",
            "Hand them a brochure and move on",
          ],
          answer: 1,
          rationale: "The method begins by asking, gives information in small pieces, and then asks what the person makes of it, which keeps the decision with them.",
          distractors: "The other options skip the first or last step or take the decision from the person.",
        } },
        { kind: 'reflect', title: 'Your own plan', prompts: [
          "Which conversations in your work are yours, and which belong to a clinician?",
          "Who could watch or listen to you, and how often?",
        ] },
        { kind: 'takeaways', items: [
          "Engage first, then focus, then evoke, then plan. Loop back when you need to.",
          "Notice change talk, reflect it, and ask for more. Respond to sustain talk without arguing.",
          "Ask before you inform. Stay inside your role, follow your program's procedure in a crisis, and keep practicing.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 3. The four processes, agenda mapping, change talk and sustain talk, the DARN-CAT types, the importance and confidence rulers, the responses to sustain talk, elicit-provide-elicit, key questions, and change plans. Example sentences in this lesson were written for this course.",
          "do Valle Nascimento TMR, et al. (2017). Monthly booster training for community health agents.",
          "Community health workers' barriers and facilitators to use a novel mHealth tool for motivational interviewing (2024). Supportive supervision and the review of recorded conversations.",
          "SAMHSA. Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services. Motivational interviewing is named there as a way to build rapport and a working alliance.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-mi-s1',
      title: 'Session 1, The Spirit of MI and Reflective Listening',
      summary: 'A live practice session. Notice the difference between advising and listening, then practice open questions and reflections.',
      minutes: 65,
      blocks: [
        { kind: 'why', text: [
          "Reflective listening feels awkward at first, like talking in an unnatural way. This session is for getting past that. You will practice with ordinary topics, not heavy ones, so you can focus on the skill.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "Practice with a low-stakes topic, such as a habit you are thinking about changing, getting more sleep, or exercising more. Do not use a deeply painful experience, your own or anyone else's. You can pass or stop any round without explanation. What is said in the room stays in the room. If you are in distress, tell the facilitator, and you can call or text 988 at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions, agreements, and the observer role." },
          { label: 'Two conversations, 10 minutes', text: "The facilitator and a volunteer act out the same short exchange twice, once with advice and once with curiosity and reflection. The group lists what they notice about the volunteer's responses." },
          { label: 'Open questions, 10 minutes', text: "In pairs, rewrite five closed questions as open ones, then try them aloud." },
          { label: 'Reflection drills, 20 minutes', text: "In pairs, one person talks for two minutes about a low-stakes change they feel two ways about. The listener makes only reflections, no questions and no advice. Switch. Repeat once with complex reflections." },
          { label: 'Triads, 15 minutes', text: "Groups of three rotate through speaker, listener, and observer. The listener uses one open question and then two reflections. The observer fills in the checklist. Share observations after each round." },
          { label: 'Debrief and commitments, 5 minutes', text: "Each person names one habit they will change in how they listen this week." },
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "How many questions did the listener ask, and how many reflections did they make?",
          "Was there a point where the listener gave advice or tried to fix? What happened next?",
          "Did the listener offer at least one complex reflection?",
          "Did the listener make one affirmation about something specific?",
          "What did the speaker do after a good reflection?",
        ] },
        { kind: 'tryit', title: 'Statements to reflect', text: [
          "The facilitator reads these aloud and the group offers a simple reflection, then a complex one. One, I know my doctor wants me to walk more, but my knees hurt. Two, everyone tells me to cut down, and I am tired of it. Three, I want to apply for the housing list, but I do not want to fill out another form. Four, I have been doing better this week, but I am afraid it will not last.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What was hardest about holding back advice?",
          "When did a reflection land well? What did the speaker do?",
        ] },
        { kind: 'takeaways', items: [
          "Reflect before you ask. Two or three reflections for each question.",
          "A reflection is a guess. Let the person correct it.",
          "Hold back advice and see what the person says next.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite, chiefly SAMHSA's TIP 35. The statements and scenes were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-mi-s2',
      title: 'Session 2, Change Talk and Sustain Talk',
      summary: 'A live practice session. Spot change talk, ask evoking questions, use the rulers, and respond to sustain talk without arguing.',
      minutes: 65,
      blocks: [
        { kind: 'why', text: [
          "A person tells you what they are thinking whether or not you notice. This session trains your ear to hear the difference between a person arguing for change and a person arguing against it, and your mouth to respond to each.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements from Session 1 apply. Use a low-stakes change for your practice. The speaker may stop at any point. Observers describe what they saw and heard and do not give advice to the speaker.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A short check-in and a review of one idea from Session 1." },
          { label: 'Spot the talk, 10 minutes', text: "The facilitator reads statements. The group calls out change talk or sustain talk and names the DARN-CAT type of the change talk." },
          { label: 'Evoking questions, 10 minutes', text: "In pairs, write one open question for each of desire, ability, reason, and need, about a change that could come up in your work." },
          { label: 'The rulers, 10 minutes', text: "In pairs, practice the importance question and the confidence question. Practice asking why not a lower number, and what would move it up by one." },
          { label: 'Triads, 25 minutes', text: "Groups of three rotate through speaker, listener, and observer, three rounds of about eight minutes. The speaker brings a low-stakes change they feel two ways about. The listener evokes change talk, reflects it, and responds to sustain talk without arguing. The observer notes each change statement and how the listener responded." },
          { label: 'Debrief, 5 minutes', text: "What did you hear? What happened when you reflected change talk? What happened when you reflected sustain talk?" },
        ] },
        { kind: 'list', title: 'Statements for spotting the talk', items: [
          "I would love to be able to climb stairs without stopping.",
          "I do not see why I should change something that works for me.",
          "I could ask my sister to come with me.",
          "I have to do something about this, it is getting worse.",
          "I went to the clinic on Tuesday and asked about it.",
          "I am not ready to give that up.",
          "I will call them tomorrow.",
        ] },
        { kind: 'list', title: 'Ways to respond to sustain talk', items: [
          "A simple reflection that lets the person feel heard.",
          "A double-sided reflection that ends on the change side.",
          "Emphasizing choice, such as it is really up to you.",
          "A reframe that offers another way to see what they said.",
          "A shift in focus, when the conversation is getting tense.",
        ] },
        { kind: 'tryit', title: 'Practice statements', text: [
          "Each pair picks one and practices a response. First, I do not need to go to that appointment, it will not change anything. Second, I have already been told all this, and I am sick of it. Third, I would like to cut down, but all my friends use. Fourth, I am doing fine, my family is overreacting.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What did you notice when you reflected sustain talk instead of arguing with it?",
          "Which type of change talk is easiest for you to hear? Which is easiest to miss?",
        ] },
        { kind: 'takeaways', items: [
          "Listen for the person's own words for change, and reflect them.",
          "Use the rulers to ask why not lower, and what would move it up by one.",
          "When you hear sustain talk, reflect it, do not argue with it.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite, chiefly SAMHSA's TIP 35. The statements were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Session 3 ─────────────────────────────────────────────────────────
    {
      id: 'chw-mi-s3',
      title: 'Session 3, Whole Conversations and Keeping Your Skill',
      summary: 'A live practice session. Practice a conversation from start to plan, give information by asking first, and build your plan for keeping the skill.',
      minutes: 65,
      blocks: [
        { kind: 'why', text: [
          "Real conversations do not come in separate skills. This session puts them together, in a conversation that goes from opening to a next step the person chooses, and then asks how you will keep the skill after the course ends.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements apply. In the full conversations, use the scenario cards the facilitator provides, or a low-stakes change of your own. If a round feels like too much, say pause and the round stops without question.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A short check-in and one thing you tried since Session 2." },
          { label: 'Agenda map, 10 minutes', text: "The facilitator demonstrates an agenda map with a volunteer who has several concerns. In pairs, practice asking permission to add a topic and asking where to start." },
          { label: 'Elicit, provide, elicit, 10 minutes', text: "In pairs, pick a piece of information you often give, such as how to renew a benefit or what a program offers. Practice asking first, giving a small piece, and asking what the person makes of it." },
          { label: 'Whole conversations, 25 minutes', text: "Groups of three rotate through speaker, listener, and observer for three rounds of about eight minutes. The listener moves from engaging to focusing to evoking, and ends with a key question and a next step that the speaker names. The observer uses the checklist." },
          { label: 'Limits and escalation, 5 minutes', text: "The facilitator reviews what to do if a person talks about harming themselves or others, or if a child or dependent adult may be at risk. Participants name the person in their program they would call." },
          { label: 'Your skill plan, 10 minutes', text: "Each person writes who will practice with them, who will give them feedback, which skill they will track each week, and what they will do if they notice they are giving advice again." },
        ] },
        { kind: 'list', title: 'Observer checklist for whole conversations', items: [
          "Did the listener build rapport before moving toward change?",
          "Did the listener and speaker agree on a focus?",
          "Which change talk did the speaker voice, and did the listener reflect it?",
          "How did the listener respond to sustain talk?",
          "Did the listener ask a key question, and did the speaker name the next step?",
          "Did the listener ask permission before giving any information?",
        ] },
        { kind: 'list', title: 'Scenario cards', items: [
          "A man has stopped going to a follow-up visit because the clinic is far and the bus is unreliable. He says he feels fine.",
          "A woman wants to renew her health coverage but keeps putting off the paperwork because it makes her anxious.",
          "A young adult is thinking about cutting back on cannabis but does not want to give up the time with friends.",
          "An older man skips meals so his pills do not upset his stomach, and he does not want to bother his doctor.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Where in the conversation did you most want to give advice? What happened when you held it back?",
          "What is the one thing you will practice every week?",
        ] },
        { kind: 'takeaways', items: [
          "Engage, focus, evoke, plan. Loop back when you need to.",
          "Ask before you inform, and ask what the person makes of it.",
          "Skill fades without practice. Set up a partner, feedback from your supervisor, and one habit to track.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite, chiefly SAMHSA's TIP 35. The scenario cards were written for this course and describe no real person. The skill plan reflects what both community health worker studies found about drifting back to advice-giving.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-mi-practice',
    title: 'Your motivational interviewing practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: five reflections, your evoking questions, a way to share information by asking first, and your plan for keeping the skill.',
    fields: [
      { id: 'reflections', label: 'Five reflections', help: 'Write five things people say in your work, such as I do not want to go back to that clinic. For each, write a complex reflection that guesses at the meaning or feeling.', multiline: true },
      { id: 'questions', label: 'Your evoking questions', help: 'Pick a change that comes up in your work. Write one open question for each of desire, ability, reason, and need, and one importance or confidence question using a ruler.', multiline: true },
      { id: 'epe', label: 'Elicit, provide, elicit', help: 'Choose a piece of information you often share. Write how you would ask what the person already knows, how you would give it in a small piece, and how you would ask what they make of it.', multiline: true },
      { id: 'skillplan', label: 'Your skill plan', help: 'Name who will practice with you, who will give you feedback, which skill you will track each week, how often, and what you will do if you catch yourself giving advice again. Add who you will call if a conversation turns to safety.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'SAMHSA: Treatment Improvement Protocol 35, Enhancing Motivation for Change in Substance Use Disorder Treatment (2019)', use: 'The full guidance on motivational interviewing, with extended dialogues and exercises.', url: 'https://store.samhsa.gov/sites/default/files/tip-35-pep19-02-01-003.pdf' },
    { name: 'do Valle Nascimento TMR, et al. A pilot study of a Community Health Agent-led diabetes self-management program using Motivational Interviewing-based approaches in Sao Paulo, Brazil (2017)', use: 'A study of training community health agents in MI, with its limits stated.', url: 'https://doi.org/10.1186/s12913-016-1968-3' },
    { name: 'Community health workers\' barriers and facilitators to use a novel mHealth tool for motivational interviewing among youth living with HIV in rural Nepal (2024)', use: 'What helped community health workers keep MI skills, including supportive supervision.', url: 'https://doi.org/10.1371/journal.pgph.0002911' },
    { name: 'C3 Project: Understanding Scope and Competencies, a Contemporary Look at the U.S. CHW Field (2016)', use: 'The national list of roles and skills, including interviewing techniques.', url: 'https://portal.ct.gov/-/media/ohs/sim/chw-advisory-committee/2016/2016-06-14/chw-c3-report.pdf' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The principles of person-centered, voluntary peer support.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
  ],
};
