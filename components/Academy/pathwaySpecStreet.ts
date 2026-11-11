// Community Health Worker Pathway, Specialty Track: Street Medicine and Outreach.
//
// A blended specialty course (id chw_spec_street_medicine, 8 hours). Four lessons are read and worked
// through on your own. Four scheduled practice sessions are attended with a facilitator and a group. A
// practice file is completed and kept. The stated 480 minutes equal 4 lessons of 45 minutes, 4 sessions
// of 60 minutes, and a 60 minute practice file.
//
// Every statement of fact was taken from a source opened and read on November 10 or 11, 2026. The sources
// are SAMHSA's Treatment Improvement Protocol 55, Behavioral Health Services for People Who Are Homeless
// (read in full from a library copy); the Street Medicine Institute's guideline on backpacks and supplies
// (last updated June 2026; the medication and formulary appendices were read but are clinical and are not
// taught); the Los Angeles Homeless Services Authority's pages on the Coordinated Entry System, accessing
// it, and getting help; the CDC and NIOSH page on heat-related illnesses (March 3, 2026); the CDC's
// guidance for clinicians on heat and medications (September 18, 2025); the CDC page on preventing
// hypothermia (August 25, 2026); the CDC page on HIV self-testing (last reviewed May 30, 2025, with a
// notice that the page was restored under a court order and may change); the SAMHSA Overdose Prevention
// and Response Toolkit; the National Harm Reduction Coalition's principles; the California Department of
// Health Care Services All Plan Letter 26-020, Field Medicine Provider, Participation in Managed Care
// (October 29, 2026, which supersedes All Plan Letter 24-001; pages 1 through 7 of 16 were read on screen
// in a browser, and the rest were not read); and the California Health Care Foundation's issue brief
// landing page on street medicine (December 2022; the full brief could not be opened).
//
// What was not read is said in the course. The decision tree in TIP 55 is an image and was not read; its
// surrounding text was. The CDC heat page is written about workers, and applying it to people living
// outdoors is practice guidance written for this course. The clinical sections of the Street Medicine
// Institute guideline, on medications, wound care, and formularies, describe what licensed clinicians do,
// and this course does not teach a community health worker to prescribe, dispense, or treat. The scenes
// and character cards were written for this course and describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_SPEC_STREET_MEDICINE: Course = {
  id: 'chw_spec_street_medicine',
  num: 19,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'blended',
  title: 'Specialty Track, Street Medicine and Outreach',
  promise:
    "Build trust with people living outside, go at their pace, carry the right things and keep your word, respond to overdose, heat, and cold within your role, and connect people to housing, coverage, and care in Los Angeles.",
  about: [
    "Some people will not come to a clinic, and some cannot. They live in tents, cars, doorways, and encampments. Street medicine and outreach teams go to them. This track prepares a community health worker to be a steady, safe, and useful member of that kind of team.",
    "It rests on SAMHSA's protocol on behavioral health services for people who are homeless, the Street Medicine Institute's guidance on what teams carry, Los Angeles's coordinated entry system, federal guidance on heat, cold, and overdose, the principles of harm reduction, and the state's current Medi-Cal letter on field medicine. The medical care itself belongs to licensed clinicians. Your part is engagement, safety, supplies, recognition, and connection.",
    "It is the Street Medicine and Outreach specialty track of HMC's community health worker pathway. Learners choose one specialty track. You read four lessons, attend four practice sessions, and complete a practice file. The sessions are practice with a facilitator, and every scene in them is invented.",
  ],
  objectives: [
    "Describe the stages of work with people who are homeless and what engagement asks of you.",
    "Go at a person's pace, work as part of a team, and stay safe in the field.",
    "Choose and pack supplies in a way that builds trust, is fair, and can be kept up.",
    "Explain the principles of harm reduction and respond to a suspected opioid overdose within your role.",
    "Recognize the signs of heat illness, hypothermia, and other urgent health concerns, and know when to call for help.",
    "Connect a person to housing, coverage, and care in Los Angeles through a warm handoff, and document what you did.",
  ],
  minutes: 480,
  prerequisites:
    "Role and Field Skills, Communication, Trauma-Informed Practice, Motivational Interviewing, Outreach, Professional Conduct, Ethics, and Safety, and the Mental Health Core course on substance use.",
  whoFor:
    "Community health workers and outreach workers who want to work with people living outside, on a street medicine team, a homeless outreach team, or a mobile clinic.",
  freshness:
    "Rules and programs for homelessness and Medi-Cal change often. The state's Medi-Cal letter on field medicine was dated October 29, 2026 and replaced an earlier letter. The county pages and federal pages were read on November 10 and 11, 2026. Check your program's protocols and the current pages before you tell anyone what is available.",
  modality: 'virtual',
  requirements: [
    { id: 'sm-l1', label: 'Complete Lesson 1, Meeting people where they live', kind: 'assignment' },
    { id: 'sm-l2', label: 'Complete Lesson 2, Supplies, trust, and harm reduction', kind: 'assignment' },
    { id: 'sm-l3', label: 'Complete Lesson 3, Heat, cold, and urgent health concerns', kind: 'assignment' },
    { id: 'sm-l4', label: 'Complete Lesson 4, Connecting to housing, coverage, and care', kind: 'assignment' },
    { id: 'sm-s1', label: 'Attend Session 1, Approach and engage', kind: 'attend' },
    { id: 'sm-s2', label: 'Attend Session 2, The bag and the overdose response', kind: 'attend' },
    { id: 'sm-s3', label: 'Attend Session 3, Heat and cold decisions', kind: 'attend' },
    { id: 'sm-s4', label: 'Attend Session 4, The warm handoff', kind: 'attend' },
    { id: 'sm-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sm-l1',
      title: 'Meeting people where they live',
      summary: 'The stages of work with people who are homeless, going at the person\'s pace, working as a team, and staying safe.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "A person has lived in the same spot beside a wall for three weeks. Two strangers walk up with a clipboard. What the person decides in the first minute, whether to look up, to answer, or to turn away, shapes whether you ever get a second visit. Street work is slow on purpose.",
          "This lesson draws on SAMHSA's Treatment Improvement Protocol 55, a federal guide written for people who work with those who are homeless and have behavioral health needs. It describes outreach and engagement as the first stage of the work, and it follows a team through a series of visits. You will learn the stages, the habits of a good outreach team, and how a team decides what to do when a person says no.",
        ] },
        { kind: 'concept', title: 'The stages of work', text: [
          "The protocol describes the stages of homelessness rehabilitation as outreach and engagement, transition to intensive care, intensive care, transition to ongoing rehabilitation, and ongoing rehabilitation. How long a person spends in any stage depends on barriers to providing and accepting services, such as the availability of housing, how severe and long lasting substance use and mental health symptoms are, and whether the person has social support for changing difficult patterns.",
          "It adds that progress is not steady. Clients may drop out, relapse in their substance use, and need outreach and reengagement several times before they reach ongoing rehabilitation. For that reason the protocol assumes that motivation will rise and fall, that symptoms may come back, and that a person may return to homelessness at any phase. Plan for that. A person who disappears for a week is not a failure of the work. It is the work.",
        ] },
        { kind: 'concept', title: 'What engagement asks of you', text: [
          "The protocol calls engagement the first stage of work with people who are homeless. Its goal is to help the person move through the early stages of changing their circumstances. The approaches it lists are active outreach to prospective clients, capturing their interest in a range of services, including homelessness services, substance use, medical, mental health, and social services, gaining their trust, and increasing their motivation for change.",
          "It also says that during this process you should identify and try to meet basic needs for shelter and safety, and pay attention to immediate health concerns. In other words, the first thing you offer is not a program. It is something the person actually needs today.",
          "The protocol names a role for the worker. Acknowledge homelessness as a significant factor in when and how a person can reach treatment. Recognize the need for preventive and basic services. And build productive, trusting, and supportive relationships with people who are homeless. Your skills from Motivational Interviewing and Trauma-Informed Practice carry straight over.",
        ] },
        { kind: 'concept', title: 'A team that goes at the person\'s pace', text: [
          "The protocol follows a team through three visits to a man named Francis, who lives in a camp. It lists four agreements the team made, and they make a good starting set for any outreach team. First, outreach and engagement proceed at the client's pace unless there is reason to fear that doing so will endanger the client. Second, specific problems are addressed as the client is willing, and team members work together to create chances to offer help. Third, team members define roles in advance, especially who takes primary responsibility for the conversation. Fourth, team members notice which worker the client prefers to speak with and respect that choice, while the worker who is not speaking stays alert to the needs of the client and of the colleague.",
          "Notice how small the first visit is. The workers ask permission before they sit down, since the camp is the man's home, and sitting down is what encourages him to stay and talk. When one worker's questions begin to make him uncomfortable, the other changes the subject to something lighter, offers a sandwich, and later a blanket. He says he is done talking, and the team does not push. They ask whether they can come back, and he agrees.",
          "That is the pattern. Ask. Offer something real. Respect the no. Ask to return. Then return.",
        ] },
        { kind: 'concept', title: 'Small things carry big messages', text: [
          "On the second visit the team brings socks, a business card with a number the man can call from a pay phone without needing coins, and information about a new, smaller shelter. The protocol's clinician note says that giving socks is a nonverbal intervention that shows concern for his health and safety and signals that the team is interested in building an alliance.",
          "The Street Medicine Institute's guidance on supplies says something similar from the clinical side. Supplies for basic needs help with engagement and with building trust among people living unsheltered, and common items include clothing, especially socks. It also warns that the program risks losing trust if it promises supplies or services and cannot keep the promise. If a promised supply is unavailable, it says, it is still better to go, be honest, and apologize than not to go at all. Showing up is the supply.",
        ] },
        { kind: 'concept', title: 'When a person says no', text: [
          "The protocol includes a decision tree for what to do when you are worried about a person who refuses services. It looks at changes in health, thinking, possessions, weather, or the person's usual state. The image of the tree could not be read for this course, but the text around it describes how the team in the story used it. They did not decide the situation was an emergency, because Francis answered their questions appropriately, had shelter from the weather, and had a good sleeping bag. They decided to visit often, to watch his general condition and the condition of his ankles, to offer medical care at his pace, and to bring socks.",
          "The protocol is also clear about one thing to watch for. In its clinician note, it says that clear cognitive impairment signals the need for prompt medical evaluation, and that cognitive difficulties can compromise a person's ability to weigh the risks and benefits of a choice. Causes it lists include head injury, malnutrition, alcohol use, and acute physical illness. You do not diagnose. You notice a change, you tell your team, and you let the clinicians decide.",
          "Practice guidance written for this course. A no is not a final answer, and it is not a reason to stop caring. It is information about timing and trust. Record it, tell your team, and plan the next visit. If a person is in danger right now, from weather, a medical emergency, or an immediate threat, follow your program's emergency procedure and call 911.",
        ] },
        { kind: 'concept', title: 'Working as a pair and staying safe', text: [
          "The protocol's guidance for administrators says that policies should require staff to work in pairs, carry cell phones, and be able to contact a supervisor when needed. It says teams should leave any situation in which one member feels unsafe, and then choose next steps together. It also recommends planned critical incident debriefings and tools to document outreach contacts.",
          "Take that as your own standard. If your stomach tells you to leave, leave, and explain afterward. You are not required to prove that a place is dangerous before you step away. Your safety is part of the program's ability to keep coming back.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Engagement', plain: "The first stage of work, building trust and meeting basic needs so the person may later accept more help." },
          { term: 'Unsheltered', plain: "Living outside or in a place not meant for people to live, such as a car or an encampment." },
          { term: 'Reengagement', plain: "Reconnecting with someone who dropped out of contact or services, which often happens more than once." },
          { term: 'Nonverbal intervention', plain: "An action, like handing over socks, that tells a person you care without a speech." },
          { term: 'Critical incident debriefing', plain: "A planned team conversation after something frightening or upsetting." },
        ] },
        { kind: 'myths', items: [
          { myth: "If a person says no, they do not want help.", reality: "The protocol says people may need outreach and reengagement several times. A no today can become a yes after trust is built." },
          { myth: "More questions at the first visit show you care.", reality: "In the protocol's story, questions made the man uncomfortable and the team changed course. Offer something real and let the person set the pace." },
          { myth: "Leaving a situation that feels unsafe means you failed.", reality: "The protocol says teams should leave when any one member feels unsafe, and then decide together what to do next." },
          { myth: "Outreach is about getting people into a program.", reality: "The first aim is trust and basic needs. Programs come later, when the person is ready." },
        ] },
        { kind: 'case', title: 'The second visit', scenario: true, text: [
          "A pair of outreach workers visits a woman who lives beside a freeway wall. On the first visit she took a bottle of water and said nothing else. Today the temperature is dropping. One worker says hello, says their names, and asks whether it is all right to stand a few steps away. The woman nods. The worker mentions that it is going to be cold tonight and asks how she usually stays warm. She says she has a coat. The partner offers a blanket and she takes it. She says, I am done now. The workers say thank you, leave a card, ask whether they may come back on Thursday, and she shrugs and says maybe. On the walk to the car they write down what they saw, that she was alert, had a coat, and had a swollen hand she did not mention. They decide who will bring gloves and who will ask about the hand on Thursday, and they tell the team nurse.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-sm-q1',
          q: "According to SAMHSA's protocol on behavioral health services for people who are homeless, how should an outreach team proceed with a client?",
          options: [
            "Offer the full program at the first visit so no time is lost",
            "At the client's pace unless there is reason to fear it will endanger the client, with roles defined in advance and respect for the client's preferred worker",
            "Stay until the client agrees to a service",
            "Send a different worker each time so no one gets attached",
          ],
          answer: 1,
          rationale: "The protocol's team agreements are to proceed at the client's pace unless the client is in danger, address problems as the client is willing, define roles in advance, and respect which worker the client prefers.",
          distractors: "The other answers push, pressure, or break continuity, which the protocol advises against.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-sm-q2',
          q: "On a visit, your partner begins to feel unsafe because a stranger is approaching the camp and shouting. What does the protocol's guidance for administrators support?",
          options: [
            "Stay, because leaving shows the person you do not trust them",
            "Leave the situation, since teams should leave when any one member feels unsafe, and then decide next steps together and tell your supervisor",
            "Split up so one of you can continue the visit",
            "Argue with the stranger until they stop",
          ],
          answer: 1,
          rationale: "The protocol says policies should require teams to leave situations in which any one member feels unsafe and to choose next steps together, with staff working in pairs and carrying phones to reach a supervisor.",
          distractors: "Splitting up, arguing, or staying despite a feeling of danger all raise the risk.",
        } },
        { kind: 'reflect', title: 'Your own approach', prompts: [
          "What would you want a stranger to do if they came to your front door at a hard time in your life?",
          "What small, real thing could you offer on a first visit, and how would you make sure you can keep offering it?",
        ] },
        { kind: 'takeaways', items: [
          "Engagement is the first stage. Build trust, meet basic needs, and go at the person's pace.",
          "Ask permission, respect a no, ask to return, and return. A small thing kept is worth more than a big thing promised.",
          "Work in pairs, carry a phone, leave when anyone feels unsafe, and debrief together.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 55, Behavioral Health Services for People Who Are Homeless. The stages of rehabilitation, the description of outreach and engagement, the three-visit vignette, the four team agreements, the clinician notes on socks and cognitive impairment, and the guidance for administrators on pairs, phones, leaving unsafe situations, and debriefing. The decision tree itself is an image and was not read.",
          "Street Medicine Institute. Guidelines, Backpacks and Supplies (last updated June 2026). Basic needs supplies and engagement, consistency, and being honest if a promised supply is unavailable.",
          "The first-visit habits, the second-visit scene, and the advice to record and plan the next visit are practice guidance written for this course. The scene describes no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sm-l2',
      title: 'Supplies, trust, and harm reduction',
      summary: 'What teams carry and why, fair and consistent supply rules, the principles of harm reduction, and the response to a suspected opioid overdose.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "What you carry says what you value. A bag full of paperwork says you came to ask questions. A bag with socks, clean water, a sandwich a person can chew, and something to stop a bleed says you came to help. And a bag that is empty on the day you promised to bring something says you cannot be counted on.",
          "This lesson draws on the Street Medicine Institute's guideline on backpacks and supplies, last updated June 2026 and written by a group of clinicians, on the principles of harm reduction from the National Harm Reduction Coalition, and on SAMHSA's overdose toolkit. The medicine itself is for licensed clinicians. Your job is to know what the team carries, hand out what you are cleared to hand out, and respond to an overdose the way your program trains you to.",
        ] },
        { kind: 'concept', title: 'What teams carry', text: [
          "The guideline says teams should choose supplies based on the needs of the people, the environment, and the team and structure of outreach, and should work with people who have lived experience of unsheltered homelessness to decide what to carry. It organizes items into three groups. Equipment is used for care but not usually handed out. Medications and wound care can be used or handed out. Supplies are items handed out.",
          "Equipment it lists includes vital sign tools such as a pulse oximeter and glucometer, safety gear such as gloves and masks, and cleaning supplies and safe disposal containers. It notes that equipment may not work in extreme temperatures and that forehead thermometers can give inaccurate readings outdoors. It lists documentation tools, including paper, a tablet, consent forms, and a smartphone so the team can be reached and so patients can make calls. And it lists an emergency response bag valve mask. Many of these belong to clinicians. Know what is in the bag, where it is, and who is trained to use it.",
          "The guideline also suggests thinking about the people who carry the bags. Ideal bags are durable with many pockets, and teams should consider their own body limits and the effect of long wear on joints. If your back hurts, the team's care will not last.",
        ] },
        { kind: 'concept', title: 'Supplies that build trust', text: [
          "For handed-out supplies, the guideline names clothing, especially socks, toiletries, emergency weather supplies, lotion, bug spray, and sunscreen. Hygiene kits with travel-size items are popular. For food and water, it says to choose food that is easier to chew given how common dental problems are, to offer choices if possible, such as water or juice and a turkey or jam sandwich, and to give canned food only if it does not need a can opener. It also lists pet supplies and transportation aids such as bus cards among items to consider.",
          "It cautions that some items carry risk. Safety razors, for example, can be used for self-harm, and teams should weigh that. It says that high-need items, such as tents, boots, and winter coats, may need limits because supplies are scarce and to keep things fair, and that teams should create a fair policy that every team member follows consistently. It notes that cigarettes are a judgment call, since they can build trust but also carry risks, and that money is generally avoided because of the chance of unintended coercion.",
          "The common thread is consistency. If every team member follows the same rule, the people you serve do not have to guess who to ask, and no one feels singled out.",
        ] },
        { kind: 'concept', title: 'What harm reduction means', text: [
          "The National Harm Reduction Coalition describes harm reduction as a set of practical strategies aimed at reducing negative consequences of drug use and as a movement for social justice built on respect for the rights of people who use drugs. It lists principles, which this lesson paraphrases. Accept that drug use is part of our world and work to reduce its harms, not simply condemn them. Understand that drug use is a continuum of behaviors and that some ways are clearly safer than others. Judge success by quality of life and well-being, not only by stopping all use. Offer services in a non-judgmental, non-coercive way. Make sure people who use drugs have a real voice in programs. Affirm people who use drugs as the main agents of reducing their own harm. Recognize that poverty, racism, isolation, trauma, and other inequalities affect both vulnerability and the ability to deal with harm. And do not minimize the real and tragic harm that can come with drug use.",
          "The Street Medicine Institute guideline lists harm reduction supplies, such as naloxone and syringes, and says to check organization policy and the laws and regulations that regulate or limit distribution. It also addresses a worry that comes up often. It says that concerns about medication misuse are generally stigmatizing toward marginalized people, and that supply diversion, such as selling or trading, is often an act of survival.",
          "Your program decides which harm reduction supplies you may carry and hand out. Follow its policy. What this lesson asks of you is the stance, which is to treat the person with respect, offer what helps, and never make help depend on stopping use.",
        ] },
        { kind: 'concept', title: 'Recognizing and responding to an opioid overdose', text: [
          "SAMHSA's overdose toolkit lists signs of an opioid overdose. They include being unconscious or impossible to wake, slow or shallow breathing or choking, gurgling, or snoring sounds from someone who cannot be woken, fingernails or lips turning blue or purple, with skin that may look pale, gray, or ashen in darker skinned people, and pinpoint pupils or pupils that do not react to light. It says to try to wake the person by calling their name, and then to rub your knuckles on their upper lip or the center of the chest.",
          "The steps are these. Check for a response. Give naloxone or another opioid overdose reversal medication as quickly as possible. Call 911 and give a specific location, and the toolkit says all you have to say is that someone is unresponsive and not breathing. Support the person's breathing, with rescue breaths if you are trained, or by placing the person in the recovery position, on their side with the top leg bent. If you do not have training in rescue breathing and compressions, follow the instructions of the 911 operator. If there is no response after two to three minutes, give a second dose and continue every two to three minutes until the person starts breathing. The toolkit says breathing is more important than waking up.",
          "It adds three points that matter in the field. Naloxone and nalmefene do not cause harm if given to a person who is not experiencing an opioid overdose. Naloxone wears off after 30 to 90 minutes and symptoms may return, so encourage the person to accept care from emergency medical services. And a person who is physically dependent may start breathing and then show withdrawal, with body aches, sweating, nausea, restlessness, and craving. The toolkit says these are uncomfortable and generally not life threatening, and it recommends offering treatment options, peer support, and harm reduction resources, including the nearest harm reduction organization and test strips.",
          "The toolkit also tells readers to learn their state's Good Samaritan laws, which provide limited protection from certain civil or criminal consequences of drug use or of helping in an overdose. It does not describe California's law, and this course does not either. Ask your program how its law applies.",
          "Practice guidance for this course. Ask your program to train you in person, with a trainer and a demonstration device, before you carry naloxone. Reading is not enough. Know where it is in your bag and where your partner's is.",
        ] },
        { kind: 'concept', title: 'Stigma and who is at risk', text: [
          "The toolkit says there is no type of person who experiences opioid use disorder or an overdose. It says research shows that women, older people, and people without obvious signs of the disorder are undertreated with naloxone and as a result have a higher death rate, and it urges readers to use the medication any time someone shows symptoms of an overdose. Do not let a guess about who someone is stop you from helping.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Harm reduction', plain: "Practical strategies and a respectful stance that reduce the harm of drug use without making help depend on stopping." },
          { term: 'Naloxone', plain: "A medication that reverses an opioid overdose." },
          { term: 'Recovery position', plain: "Lying on the side with the top leg bent, so breathing stays open." },
          { term: 'Diversion', plain: "Selling or trading supplies. The guideline says it is often an act of survival." },
          { term: 'Equipment', plain: "Items used for care but not usually handed out, such as a pulse oximeter or bag valve mask." },
        ] },
        { kind: 'myths', items: [
          { myth: "If I hand out naloxone, I am encouraging drug use.", reality: "The toolkit treats it as a life-saving antidote, and harm reduction aims to keep people alive and connected. Follow your program's policy on what you carry." },
          { myth: "If a person is breathing again, the emergency is over.", reality: "The toolkit says naloxone wears off after 30 to 90 minutes and symptoms may return, so encourage the person to accept emergency medical care." },
          { myth: "People who trade their supplies are misusing them.", reality: "The guideline says diversion is often an act of survival and that misuse concerns are generally stigmatizing." },
          { myth: "I can tell who is at risk of an overdose by looking.", reality: "The toolkit says there is no type of person, and that assumptions leave some groups undertreated." },
        ] },
        { kind: 'case', title: 'Out of socks', scenario: true, text: [
          "A pair of workers promised a man socks last week. This morning the supply closet is empty. One worker suggests skipping his spot today. The other says the guideline is clear that it is better to go, be honest, and apologize than to not go. They go. They tell him they are sorry, that the socks did not come in, and that they will bring them on Friday. They give him water and a clean pair of gloves from the team bag to protect his hands from the cold. On Friday they come back with socks. He tells them he was surprised they came.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-sm-q3',
          q: "A promised supply is not available on the day of a visit. What does the Street Medicine Institute guideline recommend?",
          options: [
            "Skip the visit so no one is disappointed",
            "Go anyway, be honest, and apologize, because losing trust by not showing up is worse",
            "Give a bigger item to make up for it",
            "Tell the person it was never promised",
          ],
          answer: 1,
          rationale: "The guideline says the program risks losing trust if it promises supplies and cannot keep the promise, and that it is still better to go, be honest, and apologize than not to go at all.",
          distractors: "The other answers either avoid the person, break the fairness rule on scarce items, or are not honest.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-sm-q4',
          q: "You find a person who cannot be woken, has slow shallow breathing, and has blue lips. According to SAMHSA's overdose toolkit, which sequence is right?",
          options: [
            "Wait to see whether they wake up on their own",
            "Check for a response, give naloxone as quickly as possible, call 911, support breathing, and be ready for a second dose after two to three minutes if there is no response",
            "Give them water and let them sleep it off",
            "Call a friend and ask what they took before doing anything",
          ],
          answer: 1,
          rationale: "The toolkit says to check for a response, give an overdose reversal medication, call 911, support breathing with rescue breaths or the recovery position, and repeat the dose every two to three minutes if the person does not respond. Breathing matters more than waking.",
          distractors: "The other answers delay care. An overdose needs immediate action and 911.",
        } },
        { kind: 'reflect', title: 'Your own stance', prompts: [
          "Where in yourself do you feel a pull to judge a person for what they use or trade? What helps you set it aside?",
          "If you were in charge of a fair rule for scarce items, what would you choose, and how would you explain it to the people you serve?",
        ] },
        { kind: 'takeaways', items: [
          "Carry what the people you serve actually need, keep the rules fair and the same for everyone, and keep your promises.",
          "Harm reduction means help without conditions. Follow your program's policy on what you carry and hand out.",
          "Recognize an overdose, call 911, give naloxone if you are trained and cleared, support breathing, and stay until help arrives.",
        ] },
        ev([
          "Street Medicine Institute. Guidelines, Backpacks and Supplies (last updated June 2026). Equipment, supplies, food and water choices, risk items, fair and consistent policy, the notes on diversion, money, and cigarettes, and the principle of working with people with lived experience. Its sections on medications, wound care, and formularies are clinical and are not taught here.",
          "National Harm Reduction Coalition. Principles of Harm Reduction. Paraphrased in this lesson.",
          "SAMHSA. Overdose Prevention and Response Toolkit. Signs of an opioid overdose, the response steps, repeat dosing, the points on naloxone wearing off, withdrawal after reversal, stigma and undertreatment, and Good Samaritan laws.",
          "The advice to train in person, the stance asked of you, and the scene are practice guidance written for this course. What you may carry and hand out is set by your program and the law.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sm-l3',
      title: 'Heat, cold, and urgent health concerns',
      summary: 'Signs and first aid for heat illness and hypothermia, how heat and medications interact, and what to notice and report.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "People who live outdoors take the weather directly. A heat wave in a car or a cold night in wet clothes can turn dangerous quickly, and the person may not notice because the illness itself clouds thinking. You will often be the one who sees it first.",
          "This lesson draws on three federal pages. One is the CDC and NIOSH page on heat-related illnesses, written about workers in hot environments. One is the CDC's guidance for clinicians on heat and medications. One is the CDC's page on hypothermia. You are not being trained as a clinician. You are being trained to recognize the signs, to do the first aid the pages describe, to call for help, and to tell your team what you saw. The heat page was written for workers, and using its signs and steps for people living outdoors is practice guidance written for this course.",
        ] },
        { kind: 'concept', title: 'Heat stroke is an emergency', text: [
          "The CDC page says heat stroke is the most serious heat-related illness. It happens when the body can no longer control its temperature. Body temperature rises rapidly, sweating fails, and the body cannot cool down. Body temperature can reach 106 degrees Fahrenheit or higher within 10 to 15 minutes, and without emergency treatment it can cause permanent disability or death.",
          "The symptoms it lists are confusion, altered mental state, or slurred speech, loss of consciousness, hot dry skin or profuse sweating, seizures, and very high body temperature. The first aid steps are to call 911, stay with the person until help arrives, move the person to shade or a cool area and remove outer clothing, cool the person quickly by wetting the skin, placing cold wet cloths, or soaking clothing, circulate air, and place cold wet cloths or ice on the head, neck, armpits, and groin.",
        ] },
        { kind: 'concept', title: 'Heat exhaustion and other heat illnesses', text: [
          "Heat exhaustion is the body's response to losing too much water and salt, usually through heavy sweating. Symptoms are headache, nausea, dizziness, weakness, irritability, thirst, heavy sweating, elevated body temperature, and less urine. The page says to take the person to a clinic or emergency room for evaluation, to call 911 if medical care is unavailable, to have someone stay with the person, to move them out of the hot area, to give liquids, to remove unnecessary clothing, including shoes and socks, to cool them with cold compresses or by washing the head, face, and neck with cold water, and to encourage frequent sips of cool water.",
          "The page also describes heat cramps, with muscle pain or spasms, and says to give water and a drink that replaces carbohydrates and electrolytes every 15 to 20 minutes, to avoid salt tablets, and to get medical help if the person has heart problems, is on a low sodium diet, or has cramps that last more than an hour. It describes heat syncope, fainting or dizziness from standing too long or standing up suddenly, which calls for sitting or lying down in a cool place and slowly drinking fluids. It describes heat rash, which calls for a cooler, drier place and keeping the skin dry. And it describes rhabdomyolysis, a rapid breakdown of muscle, with muscle pain, abnormally dark tea or cola-colored urine, and weakness, which calls for stopping activity, drinking more, and seeking immediate care at the nearest medical facility.",
          "Practice guidance for this course. If you are not sure whether a person has heat exhaustion or heat stroke, treat it as the more serious one and call 911. A person who is confused in the heat needs help now.",
        ] },
        { kind: 'concept', title: 'Heat and medications', text: [
          "The CDC's guidance for clinicians says that medications and heat can interact and cause severe side effects, and that the information reflects expert opinion. It lists many commonly used medications that raise risk, including diuretics, some medications for blood pressure and heart conditions, some psychiatric medications such as lithium and antipsychotics, antihistamines such as diphenhydramine, pain relievers called NSAIDs, and alcohol and stimulants. It describes how medications can reduce thirst, interfere with the body's temperature control, change sweating, drop blood pressure and cause fainting, and cause dehydration or kidney trouble. It adds that heat can damage medications and delivery devices. Inhalers can burst in hot environments such as a car trunk, epinephrine pens can malfunction, and insulin may be less effective if left in the heat for a long time.",
          "The page tells clinicians to remind patients not to stop medications abruptly without a plan, and to counsel them on safe storage. It also recommends a plan for hot days, including a person who can check on them. Adjusting a dose is the clinician's decision and never yours. What you can do is notice, ask, and tell. Ask a person who takes medication whether it is in the heat. Look for dizziness, confusion, and heavy sweating or none at all. Tell the team nurse or clinician that a person is on a medication that raises heat risk and where they keep it.",
        ] },
        { kind: 'concept', title: 'Cold and hypothermia', text: [
          "The CDC says hypothermia is a dangerous condition that can happen when a person is exposed to very cold temperatures for a long time. It can also occur at cool temperatures, above 40 degrees Fahrenheit, if a person is chilled by rain, sweat, or cold water. Body temperature that is too low affects the brain, so the person may be unable to think clearly or move well and may not know it is happening. The page lists people who remain outdoors for long periods, including people experiencing homelessness, and people who drink alcohol or use illicit drugs, among those at risk.",
          "Warning signs in adults are shivering, exhaustion, confusion, fumbling hands, memory loss, slurred speech, and drowsiness. The page says hypothermia is a medical emergency. If you notice the signs, take the person's temperature, and if it is below 95 degrees Fahrenheit, get medical attention immediately. If you cannot get help right away, get the person into a warm room or shelter, remove wet clothing, warm the center of the body, meaning chest, neck, head, and groin, with an electric blanket if available or with skin-to-skin contact under loose dry layers, and give warm drinks but not alcoholic drinks and nothing to an unconscious person. After the temperature rises, keep the person dry and wrap them, including the head and neck, in a warm blanket.",
          "For severe hypothermia, when a person may be unconscious with no apparent pulse or breathing, the page says to handle them gently, get emergency help immediately, and perform CPR even if the person appears dead, and to keep warming them while performing CPR. It notes that in some cases a person who appears dead can be successfully resuscitated.",
        ] },
        { kind: 'concept', title: 'Feet, wounds, and what to report', text: [
          "In the protocol's story, workers noticed a man's swollen red ankles and that his shoes had holes, and they arranged for a nurse who handles foot problems. The Street Medicine Institute guideline says that foot needs are common and that teams should have podiatry supplies and a wound care kit that lets a patient change a dressing at least twice a week. Those supplies and treatments are for clinicians. Your part is to look, ask, and tell.",
          "Practice guidance for this course. Make a habit of noticing and reporting. A new limp, a swollen or discolored limb, a wound that looks worse, a cough that is getting worse, a person who suddenly seems confused or stops eating. Describe what you saw in plain words, note when you first noticed it, and tell your team the same day. The clinician decides what it means.",
        ] },
        { kind: 'concept', title: 'A word on HIV self-testing', text: [
          "Some outreach programs offer HIV self-tests. The CDC page describes an HIV self-test as an antibody test that can be used at home or in a private place, with results within 20 minutes. The page carries a notice that it was restored to an earlier version under a court order and may change, and the sections that explain how to use the test, what negative and positive results mean, and the window period were collapsed and were not read for this course.",
          "So this course does not teach how to run or interpret a self-test. If your program offers them, you will be trained on the kit's instructions and your program's protocol, including privacy and how to connect someone to care. Never tell anyone a result, and never share a person's testing information with anyone not entitled to it.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Heat stroke', plain: "A medical emergency in which the body cannot cool itself. Call 911." },
          { term: 'Heat exhaustion', plain: "Heavy loss of water and salt with headache, dizziness, weakness, and thirst. Needs evaluation." },
          { term: 'Hypothermia', plain: "Dangerously low body temperature. It can occur above 40 degrees Fahrenheit if a person is wet." },
          { term: 'Syncope', plain: "A brief fainting episode." },
          { term: 'Window period', plain: "The time after exposure when a test may not yet show a result." },
        ] },
        { kind: 'myths', items: [
          { myth: "Hypothermia only happens in freezing weather.", reality: "The CDC says it can happen above 40 degrees Fahrenheit if a person is chilled by rain, sweat, or cold water." },
          { myth: "Someone who is confused in the heat just needs to rest.", reality: "Confusion is a symptom of heat stroke, which is an emergency. Call 911." },
          { myth: "Salt tablets help with heat cramps.", reality: "The CDC page says to avoid salt tablets and to use water and a drink that replaces carbohydrates and electrolytes." },
          { myth: "If someone on medication is hot and dizzy, I should tell them to skip a dose.", reality: "The CDC guidance says patients should not stop medications abruptly without a plan. Tell the clinician." },
        ] },
        { kind: 'case', title: 'A hot afternoon', scenario: true, text: [
          "Two workers find a man sitting in a parked car on a very hot day with the windows closed. He is sweating heavily, says he feels sick, and then begins to speak slowly and in a confused way. One worker calls 911 and gives the location. The other moves him into the shade, helps him out of his outer jacket, wets his shirt and neck with water from the bottle in the bag, places cold wet cloths on his head, neck, and armpits, and fans him. He stays with him until the ambulance comes. Afterward the pair writes down the time they found him, what he said, and what they did, and they tell the team nurse that his medication bottle on the dashboard was warm to the touch.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-sm-q5',
          q: "According to the CDC and NIOSH page, what should you do for a person with confusion and slurred speech on a very hot day?",
          options: [
            "Give a salt tablet and let them rest",
            "Treat it as possible heat stroke, call 911, stay with them, move them to shade, and cool them quickly with cold wet cloths on the head, neck, armpits, and groin",
            "Wait an hour to see whether the symptoms pass",
            "Tell them to walk it off",
          ],
          answer: 1,
          rationale: "The page lists confusion, altered mental state, and slurred speech among symptoms of heat stroke, an emergency that calls for 911, staying with the person, moving them to a cool place, and cooling quickly.",
          distractors: "The other answers delay emergency care, or recommend salt tablets, which the page advises against for cramps.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-sm-q6',
          q: "A person is shivering, drowsy, and has slurred speech after a night in wet clothes at 45 degrees. According to the CDC page, which is the right response?",
          options: [
            "It is too warm for hypothermia, so do nothing",
            "Treat it as a medical emergency, get help, and while waiting move them to a warm place, remove wet clothing, warm the center of the body, and give a warm drink that is not alcohol",
            "Give them a drink of alcohol to warm up",
            "Rub their skin hard to warm the area quickly",
          ],
          answer: 1,
          rationale: "The CDC says hypothermia can occur above 40 degrees if a person is wet, that it is a medical emergency, and that warming steps include a warm place, removing wet clothing, warming the center of the body, and warm drinks but never alcohol.",
          distractors: "The other answers ignore the risk, use alcohol, or apply a harmful method.",
        } },
        { kind: 'reflect', title: 'Your own readiness', prompts: [
          "Do you know where your program's first aid supplies are, who is trained, and what your emergency steps are?",
          "What is the first sign you would trust as a reason to call 911, even if the person says they are fine?",
        ] },
        { kind: 'takeaways', items: [
          "Heat stroke and hypothermia are emergencies. Call 911, stay with the person, and start the first aid steps.",
          "Medications and heat interact. Notice, ask, and tell the clinician. Never advise stopping a medication.",
          "Report what you see in plain words the same day, and let the clinicians decide what it means.",
        ] },
        ev([
          "CDC and NIOSH. Heat-related Illnesses (March 3, 2026). Heat stroke, heat exhaustion, heat cramps, heat syncope, heat rash, and rhabdomyolysis, with symptoms and first aid. The page is written about workers.",
          "CDC. Heat and Medications, Guidance for Clinicians (September 18, 2025). Medications that increase heat risk, how they do so, and damage to inhalers, epinephrine pens, and insulin. The page says it reflects expert opinion.",
          "CDC. Preventing Hypothermia (August 25, 2026). Risk factors, signs, first steps, and severe hypothermia.",
          "CDC. HIV Self Testing (page last reviewed May 30, 2025). A description of the test and its timing only. The details were not read.",
          "SAMHSA. Treatment Improvement Protocol 55. The clinician note on cognitive impairment and the vignette. Street Medicine Institute. Guideline on backpacks and supplies, foot care and wound care notes.",
          "The use of the heat page for people living outdoors, the advice to treat uncertain cases as the more serious, the reporting habit, and the scene are practice guidance written for this course. The scene describes no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sm-l4',
      title: 'Connecting to housing, coverage, and care',
      summary: 'Los Angeles coordinated entry and outreach, the state\'s field medicine letter, warm handoffs, and documentation.',
      minutes: 45,
      blocks: [
        { kind: 'why', text: [
          "The trust you build on the street has a purpose. It makes it possible for a person to take a next step, such as a housing survey, a Medi-Cal application, a visit with a clinician who comes to the camp. Whether that step happens often depends on whether you handed the person off well or just gave them a phone number.",
          "This lesson draws on the Los Angeles Homeless Services Authority's pages on its Coordinated Entry System, on the state Department of Health Care Services' All Plan Letter 26-020 on field medicine, dated October 29, 2026, and on the protocol's guidance on documenting outreach. Systems change often. Check the current pages and your program's instructions before telling someone what is available.",
        ] },
        { kind: 'concept', title: 'How Los Angeles coordinates housing help', text: [
          "The Los Angeles Homeless Services Authority describes the Coordinated Entry System as a network that aligns homeless services across the county so resources are distributed efficiently and equitably. It says the system began with pilots around 2011, reached all eight Service Planning Areas in 2014, and is split into three systems serving adults, families with children, and youth. People and their information are entered in a database called the Homeless Management Information System and referred to resources that match their needs. The federal housing department defines coordinated entry as a process so that people experiencing a housing crisis have fair and equal access and are quickly identified, assessed, referred, and connected to housing and assistance based on their strengths and needs.",
          "The county is divided into eight Service Planning Areas, each with a lead provider that handles regional leadership, partner education, case conferencing, and matching resources. A person can enter the system at an Access Center, which is a call-in or drop-in location, or at an Access Point. The page lists these access points, any government agency such as a library, county building, or police station, outreach teams found at encampments or requested through la-hop.org, safe parking sites, calling 2-1-1, and, for ages 12 to 25, the WIN app. A person takes the CES survey at entry.",
          "The page also describes two ways a housing crisis may be solved without a shelter stay. Prevention helps a household stay in its housing before living on the street, and is available to people who will be evicted in less than 30 days. Problem-solving is a conversation with a case manager about the person's social networks to find housing options, with support for negotiation and funding. Its get-help page lists a place to find a CES Access Center, a way to request outreach, and resources by situation, including domestic violence, human trafficking, veterans, safe parking, mental health, and 988 for crisis support.",
        ] },
        { kind: 'concept', title: 'What the state now calls field medicine', text: [
          "On October 29, 2026, the Department of Health Care Services issued All Plan Letter 26-020, which supersedes the earlier letter on street medicine. It says that under a 2025 state law, Assembly Bill 543, the term street medicine is now defined in statute as field medicine, and that plans may use either term. It defines field medicine as health and social services developed specifically to address the unique needs of people experiencing homelessness, using a whole-person, patient-centered approach to provide medically necessary care and to address social drivers of health. It defines a field medicine provider as a licensed medical provider, such as a physician, physician assistant, nurse practitioner, or certified nurse-midwife, who visits patients outside the four walls of clinics and directly in places where people live, such as a car, recreational vehicle, encampment, abandoned building, or outdoor area, and now also shelters and transitional housing.",
          "The letter sets expectations for Medi-Cal managed care plans that offer these services. A member experiencing homelessness may receive covered services directly from a field medicine provider regardless of their assigned primary care provider, and a plan cannot require that a referral or authorization request come from a primary care provider instead of the field medicine provider. Plans must set up ways for timely communication and care coordination among the field medicine provider, the plan, and the member's other providers. Plans must give members a way, online, in person, or by phone, to say they are experiencing homelessness, and when they receive that information they must act on it to connect the member with services such as Enhanced Care Management, Community Supports, field medicine, and case management. And the letter says field medicine providers who are enrolled in Medi-Cal may conduct hospital presumptive eligibility determinations, which allow immediate access to full-scope benefits in the fee-for-service system.",
          "Only pages 1 through 7 of the 16 page letter were read for this course. Details on billing, credentialing, and the later sections were not read. This lesson does not teach you billing, and you should not tell a person what a plan will cover. It is here so you understand the system you work inside and can explain it simply, and so you know that a person living outside has a route to care, written into state policy, that comes to them.",
          "The California Health Care Foundation published an issue brief in December 2022 on earlier state guidance that it called a game changer for street medicine. Only its landing page could be read. It says that street medicine began in the early 1990s and that the state's guidance in November 2022 aimed to make it easier to start and sustain programs.",
        ] },
        { kind: 'concept', title: 'The warm handoff', text: [
          "Practice guidance for this course, built on the protocol's emphasis on moving at the person's pace and on the point that transitions are high-risk periods when many people drop out. A warm handoff means you do not just give a person a number. You do the next step with them, or you introduce them in person or by phone to the next worker, say what you are asking for, and stay until the person says it is all right.",
          "Before you hand off, ask the person what they want to share and with whom, and get their consent in the way your program requires. Share only what the next worker needs. Tell the person what will happen next and when. Offer to go along if you can. And follow up, because the protocol says transitions are when many clients drop out, and that locating clients who fail to make contact, making calls, and providing immediate tangible benefits such as food or bus fare can help.",
          "The protocol also names the realities of outreach work, such as working outside an office, working with people who want resources but resist or only passively comply, and tolerating people who appear one day and disappear for several days. Plan your follow-up around that. A missed appointment is not a reason to close a case.",
        ] },
        { kind: 'concept', title: 'Writing it down', text: [
          "The protocol advises developing tools to document outreach contacts, and its second part includes sample contact forms and logs. The Street Medicine Institute guideline lists documentation tools and consent documents among the equipment a team carries. Follow your program's forms.",
          "Good outreach notes are brief, factual, and respectful. They say where and when, who was there, what the person asked for and what you offered, what you observed, what you promised and who will follow up. Leave out guesses about a person's character. Everything you learned about confidentiality, consent, and sharing information in your earlier courses applies on the street, where it is easy to talk about a person in front of others.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Coordinated Entry System', plain: "The countywide network that assesses people and matches them to housing resources." },
          { term: 'Access Point', plain: "Any place or person who can enter someone into the system, such as an outreach team, a library, or 2-1-1." },
          { term: 'Problem-solving', plain: "A conversation to find housing options through a person's own network and resources." },
          { term: 'Field medicine', plain: "The state's term for health care delivered where people experiencing homelessness live. Formerly called street medicine." },
          { term: 'Warm handoff', plain: "Introducing a person to the next worker and staying until they are connected." },
        ] },
        { kind: 'myths', items: [
          { myth: "A person must be in a shelter to get into the housing system.", reality: "LAHSA lists outreach teams at encampments, 2-1-1, safe parking sites, and government agencies as access points." },
          { myth: "A person living outside needs a primary care referral before a field medicine provider can help.", reality: "The state's letter says a plan cannot require a referral or authorization to come from a primary care provider instead of the field medicine provider." },
          { myth: "Giving a phone number is the same as a handoff.", reality: "Transitions are when many people drop out. Do the next step together." },
          { myth: "If a person misses the appointment, close the case.", reality: "The protocol describes finding people who fail to make contact and persisting." },
        ] },
        { kind: 'case', title: 'A handoff on the corner', scenario: true, text: [
          "A man tells the outreach pair that he would like to get into housing but does not know how. One worker says there is a survey that starts the process. She asks whether it is all right to do it now, and what he wants kept private. They sit at a bus stop and a worker from the team's housing partner joins by phone, introduces herself, and explains what happens next and when she will call. The pair writes in the log what he asked for, who took it, and when the follow-up is due, with no guesses about his history. They give him a bus card for Thursday and tell him where they will be at 10. On Thursday, he is not there. They go to the other spot where he sometimes stays, and leave word with the shelter counter that they came.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-sm-q7',
          q: "According to the Los Angeles Homeless Services Authority, which of these can serve as an access point to the Coordinated Entry System?",
          options: [
            "Only a shelter after an overnight stay",
            "An outreach team at an encampment, a safe parking site, a government agency such as a library, or a call to 2-1-1",
            "Only an application at LAHSA headquarters",
            "A letter from a doctor",
          ],
          answer: 1,
          rationale: "LAHSA lists government agencies, outreach teams found at encampments or called through la-hop.org, safe parking sites, 2-1-1, and the WIN app for ages 12 to 25 as access points, in addition to Access Centers.",
          distractors: "The other answers set requirements the page does not describe.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-sm-q8',
          q: "What is the best description of a warm handoff?",
          options: [
            "Giving a person a list of numbers to call",
            "Doing the next step with the person or introducing them in person or by phone to the next worker, sharing only what is needed with their consent, and following up",
            "Telling the next worker everything you know about the person",
            "Dropping the person off and not checking back",
          ],
          answer: 1,
          rationale: "A warm handoff keeps the person connected through the transition, which the protocol identifies as a high-risk period. It respects consent and shares only what is needed.",
          distractors: "The other answers leave the person on their own or share too much.",
        } },
        { kind: 'reflect', title: 'Your own network', prompts: [
          "Who in your area could you introduce a person to in person or by phone? Do you know a name, not only a program?",
          "What would you want written about you in an outreach note, and what would you not want written?",
        ] },
        { kind: 'takeaways', items: [
          "People can enter coordinated entry through outreach teams, 2-1-1, safe parking sites, government agencies, and Access Centers.",
          "The state now calls street medicine field medicine, and a person living outside has a route to care, written into state policy, that comes to them. Do not promise coverage details.",
          "Do the next step with the person, share only what is needed, write down facts, and follow up.",
        ] },
        ev([
          "Los Angeles Homeless Services Authority. About CES, Accessing CES, and Get Help pages (read November 11, 2026). The description of the system, Service Planning Areas, access centers and points, prevention, problem-solving, and the Homeless Management Information System.",
          "California Department of Health Care Services. All Plan Letter 26-020, Field Medicine Provider, Participation in Managed Care (October 29, 2026). Pages 1 through 7 of 16 were read on screen. Definitions, access without a primary care referral, care coordination, hospital presumptive eligibility, and member self-identification.",
          "California Health Care Foundation. A Game Changer for Street Medicine (December 12, 2022). Landing page only.",
          "SAMHSA. Treatment Improvement Protocol 55. High-risk transitions, persistence, tangible benefits, the realities of outreach, and tools to document contacts.",
          "Street Medicine Institute. Guidelines, Backpacks and Supplies. Documentation tools and consent documents.",
          "The warm handoff steps, the note-writing advice, and the scene are practice guidance written for this course. The scene describes no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-sm-s1',
      title: 'Session 1, Approach and engage',
      summary: 'A live practice session. Practice an approach, a first visit, a respectful no, and leaving a situation that feels unsafe.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Approach is a skill of the body as well as the voice. This session lets you practice the first sixty seconds, the respectful no, and the exit in a safe room with people who are on your side.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. Participants play characters and do not act out real events or real people. No physical contact. Nobody is cornered or blocked. If a round feels like too much, say pause and it stops without question. You may step out at any time. What is said in the room stays in the room, except safety concerns, which go to the facilitator.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions, agreements, and the pause rule." },
          { label: 'The first sixty seconds, 10 minutes', text: "In pairs, practice approaching from a distance, saying your names and role, asking permission to stand or sit, and offering one small real thing. Practice stopping when you hear a no." },
          { label: 'Role-play triads, 30 minutes', text: "In triads, one person plays a character from a card, one is the outreach worker, and one is the observer. Three rounds of about nine minutes. The worker offers something, respects the pace, asks to return, and plans a next visit. In one round the observer calls a safety change, and the worker practices saying, I need to leave, and exiting with the partner." },
          { label: 'Team huddle, 10 minutes', text: "In the full group, practice the debrief after a visit. Each pair says what they saw, what they promised, who will follow up, and one thing that felt hard." },
          { label: 'Close, 5 minutes', text: "One thing you will do differently on your next visit." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A person beside a wall who takes a bottle of water and says nothing.",
          "A person who says they are fine and asks you to go away.",
          "A person who talks about a worry that is hard to follow, with no sign of being in danger.",
          "A person who says they were promised something last week and did not receive it.",
          "A person who is warm and chatty and keeps changing the subject.",
          "A person who becomes upset when your partner asks too many questions.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker ask permission and keep a respectful distance?",
          "Did they say their names and role in a sentence or two?",
          "Did they offer something real and stop when told no?",
          "Did the team change course when one worker's approach caused discomfort?",
          "Did they ask to return and name a time?",
          "Did they plan who would follow up on what, and write it down?",
          "If safety changed, did they leave together and decide next steps?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which character was hardest for you and why?",
          "What is your sentence for leaving a situation that feels unsafe?",
        ] },
        { kind: 'takeaways', items: [
          "Ask, offer, respect a no, ask to return, and return.",
          "When one worker's approach causes discomfort, the other changes course.",
          "Leaving is a skill. Practice saying it.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 1 and the sources it cites, especially the team agreements in SAMHSA's Treatment Improvement Protocol 55. The character cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-sm-s2',
      title: 'Session 2, The bag and the overdose response',
      summary: 'A live practice session. Pack and explain a bag, decide a fair supply rule, and practice the overdose response steps with a trained facilitator.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "What you carry and how you respond when seconds count are things you want to have done before the day you need them. This session is hands-on practice, led by a facilitator who is trained to teach overdose response.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented and no one is asked to share their own use or health history. Use only training devices and props. Nothing is given to real people in this session. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'The bag walk-through, 15 minutes', text: "In small groups, look at a sample bag and sort items into equipment, medications and wound care, and handed-out supplies. Mark which items belong to clinicians and which you may hand out. Choose three items a person might need first and say why." },
          { label: 'A fair rule, 10 minutes', text: "Each group writes a fair rule for one scarce item, such as a winter coat, and for one risk item, and practices explaining it kindly to a person who asks for more." },
          { label: 'Overdose response drill, 25 minutes', text: "With the facilitator, practice recognizing the signs, checking for a response, using a training naloxone device, calling 911 with a location and the plain sentence, supporting breathing, placing a training mannequin in the recovery position, giving a second dose after two to three minutes, and staying until help arrives. Rotate roles." },
          { label: 'Close, 5 minutes', text: "What you would need to feel ready, and what you will ask your program." },
        ] },
        { kind: 'list', title: 'Supply scenario cards', items: [
          "A person asks for a tent and says the last one was taken in a sweep.",
          "A person asks for two sandwiches and says one is for a friend.",
          "A person asks for money for the bus.",
          "A person asks for a razor.",
          "A person asks what is in your bag and whether you carry anything for pain.",
          "A person takes the supplies and trades them for something else.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker follow the program's rule and explain it kindly?",
          "Did they avoid shaming the person for asking?",
          "In the drill, did they check for a response, give naloxone, and call 911 early?",
          "Did they say the plain sentence and a specific location?",
          "Did they support breathing or follow the 911 operator, and use the recovery position?",
          "Did they plan for a second dose and stay until help arrived?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which supply decision was hardest for you?",
          "What would make you feel confident in an overdose response, and who can give it to you?",
        ] },
        { kind: 'takeaways', items: [
          "Know what is in the bag and who may use it.",
          "A fair rule, explained kindly, protects trust.",
          "Practice the overdose response until the steps come without thinking.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 2 and the sources it cites, including the Street Medicine Institute guideline and SAMHSA's overdose toolkit. The facilitator must be trained to teach overdose response. The scenario cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 3 ─────────────────────────────────────────────────────────
    {
      id: 'chw-sm-s3',
      title: 'Session 3, Heat and cold decisions',
      summary: 'A live practice session. Practice recognizing heat and cold emergencies, deciding when to call, and describing what you saw.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "In the field, you rarely have time to look something up. This session helps you rehearse the first signs, the first steps, and the sentence you say to dispatch and to your team.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. No one is asked to share their own health history. No one is touched. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Signs and sorting, 10 minutes', text: "In pairs, sort a set of symptom cards into heat stroke, heat exhaustion, heat cramps, hypothermia, and not sure. Discuss what you do for each." },
          { label: 'Scenario rounds, 30 minutes', text: "In groups of three, work through scenario cards. One person is the worker, one reads the card and answers as the person, and one is the observer. For each, the worker says whether to call 911, what first aid to start, what to tell the person, and what to tell the team. Rotate after each card." },
          { label: 'The report, 10 minutes', text: "Practice a plain report of what you saw, when you first saw it, and what you did, in three sentences, as if to a team nurse." },
          { label: 'Close, 5 minutes', text: "One thing you will carry to be ready." },
        ] },
        { kind: 'list', title: 'Scenario cards', items: [
          "A person in a car on a hot day is confused and has stopped sweating.",
          "A person on a bench is dizzy and has leg cramps after walking all day.",
          "A person in wet clothes at night is shivering and drowsy.",
          "A person takes medication for blood pressure and says their inhaler stopped working in the car.",
          "A person has dark tea-colored urine and sore muscles after a hot day of hauling things.",
          "A person has a foot wound that looks worse than last week.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker recognize the emergency and call 911 when the signs fit?",
          "Did they start the right first aid steps and stay with the person?",
          "Did they avoid giving alcohol, salt tablets, or advice to stop a medication?",
          "Did they treat an uncertain case as the more serious one?",
          "Was the report plain and in order?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which scenario made you least certain, and what would help you decide?",
          "What will you keep in your bag or on your phone to help you act?",
        ] },
        { kind: 'takeaways', items: [
          "When the signs fit an emergency, call 911 and stay.",
          "Never advise stopping a medication. Tell the clinician.",
          "A plain, ordered report helps the team act.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 3 and the CDC and NIOSH, CDC, and Street Medicine Institute sources it cites. The scenario cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 4 ─────────────────────────────────────────────────────────
    {
      id: 'chw-sm-s4',
      title: 'Session 4, The warm handoff',
      summary: 'A live practice session. Practice a warm handoff, explain coordinated entry and field medicine simply, and write an outreach note.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "A good handoff is a short conversation that keeps a person connected. This session lets you practice it, along with the notes that make it possible for the next worker to pick up where you left off.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. Participants play characters and do not act out real events or real people. Do not use real names or real case details. If a round feels like too much, say pause. You may step out at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions and agreements." },
          { label: 'Explain it simply, 10 minutes', text: "In pairs, take turns explaining in plain words how a person can enter the coordinated entry system, and what field medicine is. Your partner says what was clear and what was not." },
          { label: 'Handoff role-plays, 25 minutes', text: "In triads, one person plays a person who wants a next step, one is the outreach worker, and one is the next worker, played by the observer. The worker asks what the person wants shared, introduces them, says what is being asked for, and states the follow-up plan. Three rounds of about eight minutes." },
          { label: 'The outreach note, 15 minutes', text: "Each person writes a brief note for one round, with where and when, what was asked and offered, what was observed, and what is promised and by whom, with no guesses. Swap and give feedback." },
          { label: 'Close, 5 minutes', text: "One name you will add to your handoff map." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A person who wants housing but does not know where to start.",
          "A person who wants to see a doctor but has had bad experiences at clinics.",
          "A person who says they used to have Medi-Cal and does not know whether it is active.",
          "A person who does not want to be put in any database.",
          "A person who agrees to a next step and then does not show up.",
          "A person who is ready to go to a shelter tonight and has a pet.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker ask what the person wanted shared and with whom?",
          "Did the handoff include a name, a reason, and a next step?",
          "Did the worker share only what the next worker needed?",
          "Did they avoid promising coverage or outcomes they could not know?",
          "Did the note stick to facts and name who would follow up?",
          "Was there a plan for the person who does not show up?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which character made the handoff hardest?",
          "What would you say to a person who does not want to be in a database?",
        ] },
        { kind: 'takeaways', items: [
          "A warm handoff is a person to a person, with consent and a plan.",
          "Explain systems simply, and say what you do not know.",
          "Write down facts, and follow up when someone misses.",
        ] },
        ev([
          "The agenda is practice design written for this course from Lesson 4 and the sources it cites, including the Los Angeles Homeless Services Authority pages and the state's letter on field medicine. The character cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-sm-practice',
    title: 'Your street medicine and outreach practice file',
    minutes: 60,
    purpose: 'Five short pieces that you keep and use. Your approach and safety plan, your bag and fair rule, your emergency response card, your handoff map, and your note and debrief habits.',
    fields: [
      { id: 'approach', label: 'Your approach and safety plan', help: 'Write what you will say in the first minute, the small real thing you can offer, how you will respond to a no, and how you will ask to return. Add your partner agreement, your sentence for leaving, and who you will call.', multiline: true },
      { id: 'bag', label: 'Your bag and your fair rule', help: 'List what you carry in each group, equipment, handed-out supplies, and anything clinicians carry that you must not hand out. Write a fair rule for one scarce item and how you would explain it kindly.', multiline: true },
      { id: 'emergency', label: 'Your emergency response card', help: 'In your own words, write the steps for a suspected overdose, heat stroke, and hypothermia, the sentence you would say to 911, and where your program keeps its supplies. Confirm the steps with your program.', multiline: true },
      { id: 'handoff', label: 'Your handoff map', help: 'For your service area, list the Access Centers, the outreach request line or site, the 2-1-1 option, the field medicine or clinic contacts, and a name for each, with the date you checked it. Mark anything you need to confirm.', multiline: true },
      { id: 'notes', label: 'Your notes and debrief habits', help: 'Write what an outreach note of yours always includes, what it never includes, how you will debrief with your partner after a hard visit, and how you will take care of yourself.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      '2-1-1 for local resources',
      'Your supervisor and your team nurse, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'SAMHSA: Treatment Improvement Protocol 55, Behavioral Health Services for People Who Are Homeless', use: 'The stages of work, the outreach team story, and guidance for staff and administrators.', url: 'https://www.store.samhsa.gov/product/tip-55-behavioral-health-services-people-who-are-homeless/sma15-4734' },
    { name: 'Street Medicine Institute: Resources and Guidelines', use: 'Guidance on backpacks and supplies and other topics, written by clinicians.', url: 'https://www.streetmedicine.org/' },
    { name: 'Los Angeles Homeless Services Authority: Coordinated Entry System', use: 'How people enter the system, the Service Planning Areas, prevention, and problem-solving.', url: 'https://www.lahsa.org/ces/' },
    { name: 'CDC and NIOSH: Heat-related Illnesses', use: 'Signs and first aid for heat stroke, heat exhaustion, and other heat illness.', url: 'https://www.cdc.gov/niosh/heat-stress/about/illnesses.html' },
    { name: 'CDC: Preventing Hypothermia', use: 'Signs of hypothermia and what to do until help arrives.', url: 'https://www.cdc.gov/winter-weather/prevention/index.html' },
    { name: 'National Harm Reduction Coalition: Principles of Harm Reduction', use: 'The principles behind a respectful, non-coercive approach.', url: 'https://harmreduction.org/about-us/principles-of-harm-reduction/' },
  ],
};
