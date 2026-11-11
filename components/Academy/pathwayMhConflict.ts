// Community Mental Health Worker Pathway, Mental Health Core M8: Conflict Resolution.
//
// A live practice course (id chw_mh_conflict_resolution, 2 hours). Two lessons are read before the
// session. One scheduled session is practiced with a facilitator and a group. The stated 120 minutes
// equal the lessons, the session, and the practice file.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources are
// the 2012 consensus statement of the American Association for Emergency Psychiatry's Project BETA
// De-escalation Workgroup on verbal de-escalation of the agitated patient (Western Journal of Emergency
// Medicine, open access; read in full from a copy hosted by the Minnesota Department of Health), the
// Community Tool Box's section on training for conflict resolution (Chapter 20, Section 6), SAMHSA's core
// competencies for peer workers, the open-access 2012 review of peer support by Davidson and colleagues,
// and SAMHSA's protocol on trauma-informed care. The Project BETA statement was written by consensus for
// clinicians in emergency settings from a limited body of research, and says so. Its sections on
// medication, restraint, and seclusion describe clinical decisions that are outside a community health
// worker's role, and the course does not teach them. The scenes were written for this course and
// describe no real person.
//
// This course teaches calm, respectful communication in tense moments and a method for resolving
// disagreements. It does not teach physical intervention. A worker's first duty is to be safe, to leave
// or to call for help when safety is at risk, and to follow the program's procedure.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_CONFLICT_RESOLUTION: Course = {
  id: 'chw_mh_conflict_resolution',
  num: 29,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Conflict Resolution',
  promise:
    "Stay calm and respectful when a moment gets tense, use the principles of verbal de-escalation within your role, set limits kindly, resolve disagreements by looking at interests and not only positions, and know when to step away and bring in help.",
  about: [
    "Conflict is part of working with people. A person is angry about a decision. A family disagrees. A coworker sees it differently. A room gets loud. This course teaches two things. How to help a person who is agitated or upset come down, without escalating. And how to work through a disagreement so that people feel heard and a way forward is found.",
    "It rests on a consensus statement on verbal de-escalation written by emergency psychiatrists, the Community Tool Box's method for resolving conflict, SAMHSA's competencies for peer workers, and a review of peer support. The de-escalation statement was written for clinicians in emergency settings, and this course adapts its ideas for community work and leaves out what belongs to clinicians.",
    "It is Mental Health Core course 8 of HMC's community health worker pathway. It is a live practice course. You read two short lessons, then practice in one scheduled session, then complete a practice file. It does not teach physical intervention. Your safety comes first, and you can always leave and call for help.",
  ],
  objectives: [
    "Describe the principles of verbal de-escalation and use them in a tense conversation.",
    "Recognize and manage your own reactions in a tense moment, and know when to step back and call for help.",
    "Set a clear, respectful limit.",
    "Use the steps for resolving a disagreement, including looking at interests and not only positions.",
    "Know when conflict resolution is not appropriate and safety, accountability, or a formal process must come first.",
    "Debrief after a hard moment and take care of yourself.",
  ],
  minutes: 120,
  prerequisites: "Trauma-Informed Practice, Communication and Documentation, and Professional Conduct, Ethics, and Safety.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management who sometimes meet people who are upset, frightened, or angry, or who work in teams and with families.",
  freshness:
    "The practices in this course are long established. The de-escalation consensus statement is from 2012 and was written from a limited body of research. Your program's safety procedures govern what you do in a tense or dangerous situation.",
  modality: 'virtual',
  requirements: [
    { id: 'cr-lessons', label: 'Read the two lessons before the session', kind: 'assignment' },
    { id: 'cr-s1', label: 'Attend the practice session, Calm, Clear, and Respectful', kind: 'attend' },
    { id: 'cr-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-cr-l1',
      title: 'Calming a tense moment',
      summary: 'The ten domains of verbal de-escalation, adapted for community work, and what to do when safety is at risk.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Someone raises their voice at the table. A person paces and says no one is listening. A parent snaps at a child. A man says he will not leave until he gets an answer. What you do in the first minute shapes the next ten. Most tense moments do not turn violent, and a worker who stays steady can often help them pass. A worker who escalates, or who freezes, can make them worse.",
          "This lesson draws on a consensus statement written by emergency psychiatrists on verbal de-escalation. It is the best-known statement on the subject. It was written for clinicians in emergency settings, and the authors say that published research on verbal de-escalation is limited. Treat it as a careful set of recommendations from experienced practitioners, and take from it what applies to your role.",
        ] },
        { kind: 'concept', title: 'The goals', text: [
          "The statement describes the goals of de-escalation as keeping everyone safe, helping the person manage their emotions and regain control, avoiding restraint, and avoiding actions that escalate agitation. It says that almost anyone can learn de-escalation techniques if well trained, that skills come only with practice, and that the most essential skill is a good attitude, starting with positive regard for the person and the capacity for empathy. It says staff should be able to recognize that the person is doing the best they can under the circumstances.",
        ] },
        { kind: 'concept', title: 'Your own reactions', text: [
          "The statement says that agitated people can be provocative and may challenge the authority or competence of the person helping. To work well, staff must be able to recognize and control their own negative reactions, including tendencies to retaliate, argue, or become defensive, because such behavior worsens the situation. It also says that clinicians need to recognize their limits, as the work can be taxing, and that sometimes the best intervention is knowing when to seek additional help.",
          "Notice your body. A pounding heart, a tight jaw, a wish to win. These are signals. Take a breath, slow your voice, and lower your shoulders. Remind yourself of your purpose, which is to help the person and to keep everyone safe, not to be right.",
        ] },
        { kind: 'concept', title: 'The ten domains, adapted', text: [
          "The statement organizes its guidance into ten domains. Here they are, paraphrased and adapted for community work.",
          "One, respect personal space. It recommends keeping at least two arm's lengths of distance, which gives the person room and gives you room to move away. It says that if a person tells you to move out of the way, do so immediately, and that both of you should be able to exit without the other blocking the way. It notes that a high percentage of people have a past history of trauma, and that ignoring personal space can repeat the trauma, and that a person who lives on the street may be very sensitive about protecting their belongings.",
          "Two, do not be provocative. Show by your body language that you will not harm the person, that you want to listen, and that you want everyone to be safe. Keep your hands visible and unclenched, avoid facing the person squarely, and stand at a slight angle. Keep a calm face. The statement notes that staring can be read as aggressive, closed body language can signal a lack of interest, and your body language should match your words, or the person will sense that you are not sincere. It says not to challenge, insult, or humiliate the person, because humiliation is an aggressive act.",
          "Three, establish verbal contact. It recommends that only one person speaks with the person at a time, because several voices can confuse and escalate. Introduce yourself politely with your name and role, explain that you are there to keep them safe and make sure no one gets hurt, and orient them to where they are and what to expect. Ask how they prefer to be addressed, which communicates that they have some control.",
          "Four, be concise. Use short sentences and simple words, because an agitated person may have trouble processing information. Give them time to respond. It says repetition is essential, meaning you keep repeating your message until it is heard, along with listening and agreeing wherever you can.",
          "Five, identify wants and feelings. Ask what the person wants. The statement suggests saying something like, I need to know what you expected when you came here, and even if I cannot provide it, I would like to know so we can work on it. It notes that a sad person wants something they have given up hope of having, and a fearful person wants to avoid being hurt.",
          "Six, listen closely. Show through your words and body that you are paying attention, and be able to repeat back what the person has said to their satisfaction, using a phrase like, tell me if I have this right. It describes a rule it calls Miller's law. To understand what another person is saying, assume it is true and try to imagine what it could be true of. This does not mean you agree. It means you try to understand.",
          "Seven, agree or agree to disagree. The statement describes finding something to agree with in three ways: agreeing with the truth, agreeing in principle, or agreeing with the odds. For example, yes, you have waited a long time, or I believe everyone should be treated with respect, or many people would be upset about the wait. If you cannot honestly agree, for example with a belief you cannot know to be true, acknowledge that you have never experienced what the person is experiencing and that you believe they are having that experience, or agree to disagree.",
          "Eight, set clear limits. Tell the person plainly what is acceptable, including that injury to themselves or others is not acceptable, in a matter-of-fact way and not as a threat. Set limits respectfully and reasonably, and make clear your intent to help. If the person's behavior is making you uncomfortable, say so, along with an empathetic statement, for example, when you pace, I feel nervous and I cannot pay full attention to what you are telling me. The statement says good working conditions mean respect goes both ways, and that a consequence for crossing a limit should be related to the behavior, reasonable, and presented respectfully.",
          "Nine, offer choices and optimism. Choice is a source of empowerment for someone who feels they have only fight or flight. Offer realistic choices, such as where to sit, whether to talk now or in a few minutes, or something to drink. The statement says never to deceive by promising something you cannot provide. Be optimistic in a genuine way and give realistic time frames.",
          "Ten, debrief. After a tense event, restore the relationship, let the person tell what happened from their perspective, and plan for next time by asking what works when you are very upset. Debrief staff too, so they can say what went well and what did not.",
        ] },
        { kind: 'concept', title: 'What belongs to clinicians, not to you', text: [
          "The consensus statement also covers offering medication to agitated patients, and restraint and seclusion. Those are clinical decisions made by trained and licensed staff in settings with the authority and equipment to do so. A community health worker does not offer or suggest medication, does not restrain anyone, and does not try to physically control a person. If a situation reaches the point where verbal calming is not working, or someone may be hurt, your job is to move to safety and bring in help.",
        ] },
        { kind: 'concept', title: 'Your safety comes first', text: [
          "Practice guidance for this course, built on the statement's emphasis on adequate exits and on recognizing limits. Know where the exits are. Keep your path to the door clear. Do not let yourself be cornered. If you are in a home, stay near the door. If someone is threatening you or others, or has a weapon, leave if you can and call 911 from a safe place. Do not try to take anything from a person. Tell your supervisor. Your program's procedure comes first. The Professional Conduct course covers personal safety in the field.",
          "The statement notes that environments with extremes of noise, color, and temperature can add to agitation, and that objects that could be used as weapons should be removed or secured. In the field, you can lower noise, dim the lights where possible, move to a quieter place, and clear the space when you can do so safely.",
        ] },
        { kind: 'concept', title: 'Trauma and tense moments', text: [
          "SAMHSA's trauma-informed care principles apply directly. The consensus statement itself notes that many people have a history of trauma, and that the emergency experience can repeat it. Powerlessness, crowding, being touched, being cornered, and being shouted at can all feel like the original harm. Offer choice. Explain what you are doing. Keep space. Move slowly. Do not touch without permission.",
        ] },
        { kind: 'vocab', items: [
          { term: 'De-escalation', plain: "Using communication to help a person calm down and regain control." },
          { term: 'Agitation', plain: "A state of heightened distress and activity, often with anger, fear, or confusion." },
          { term: 'Active listening', plain: "Paying close attention and reflecting back what you heard, to the person's satisfaction." },
          { term: 'Limit', plain: "A clear statement of what is and is not acceptable." },
          { term: 'Debrief', plain: "Talking through an event afterward, to restore the relationship and learn." },
        ] },
        { kind: 'myths', items: [
          { myth: "If a person is angry, I should stand my ground and show I am in charge.", reality: "The statement says defensiveness and arguing worsen the situation. Respectful calm, personal space, and listening help." },
          { myth: "I should agree with everything to keep the peace.", reality: "The statement says to agree where you can honestly do so, and otherwise agree to disagree, and also to set clear limits." },
          { myth: "It is my job to get a person to stop, no matter what.", reality: "Your job is to help and to keep everyone safe, which sometimes means stepping away and calling for help." },
          { myth: "More people talking will calm things faster.", reality: "The statement recommends that only one person speak with the agitated person." },
        ] },
        { kind: 'case', title: 'A wait that was too long', scenario: true, text: [
          "A man at a community event has been waiting two hours for a form. He says loudly that this is a waste of time and that nobody here cares. A worker walks over slowly, stops at a distance, keeps her hands open at her sides, and stands at a slight angle. She says, my name is Dana and I work with the program. I want to hear what is going on. What should I call you? He gives his name. She says, you have waited two hours. That is a long time. Tell me what you need. He says he needs the form for a job. She says, I want to help you get this today. I cannot make the line go faster, and I can check where your form is and tell you honestly how long it will be. Would you like to sit here or in the quiet room while I do that? He chooses the quiet room. She comes back with an honest answer. Had he become threatening, she would have moved away, asked a colleague to alert the supervisor, and called for help.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-cr-q1',
          q: "According to the verbal de-escalation consensus statement, which approach is recommended for approaching an agitated person?",
          options: [
            "Stand close and look them straight in the eye to show confidence",
            "Keep about two arm's lengths away, keep your hands visible, stand at a slight angle, stay calm, and make sure they can leave as well",
            "Have several people speak at once to show support",
            "Block the door so they cannot leave",
          ],
          answer: 1,
          rationale: "The statement recommends keeping at least two arm's lengths of distance, visible and unclenched hands, an angled stance, a calm face, one person speaking, and letting both the person and the helper exit freely.",
          distractors: "The other answers are confrontational or trap the person.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-cr-q2',
          q: "A person's behavior becomes threatening and you are no longer sure you are safe. What do you do?",
          options: [
            "Keep arguing until they stop",
            "Try to take away whatever they are holding",
            "Move to safety, leave if you can, call 911 and your supervisor from a safe place, and follow your program's procedure",
            "Offer them medication",
          ],
          answer: 2,
          rationale: "Your safety comes first. Verbal calming is within your role, and physical intervention and medication are not. The statement itself says sometimes the best intervention is knowing when to seek additional help.",
          distractors: "The other answers put you or the person at risk or go beyond your role.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What do you notice in your body when someone is angry with you? What helps you stay steady?",
          "Which of the ten domains is the hardest for you? Which comes naturally?",
        ] },
        { kind: 'takeaways', items: [
          "Stay calm, give space, speak simply, listen closely, find something to agree with, set clear limits, and offer real choices.",
          "Watch your own reactions. Arguing and defensiveness make things worse.",
          "Medication and restraint are clinical decisions. Your safety comes first, and calling for help is part of the skill.",
        ] },
        ev([
          "Richmond JS, Berlin JS, Fishkind AB, et al. Verbal de-escalation of the agitated patient: consensus statement of the American Association for Emergency Psychiatry Project BETA De-escalation Workgroup. Western Journal of Emergency Medicine, 2012;13(1):17-25. Read in full. The statement was written by consensus, for clinicians in emergency settings, from a limited body of research. The sections on medication, restraint, and seclusion are not taught here.",
          "SAMHSA. Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services. Used from the trauma-informed practice course.",
          "The adaptation to community settings and the guidance on personal safety are practice guidance written for this course. Your program's procedure governs.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-cr-l2',
      title: 'Resolving disagreements with people, families, and teams',
      summary: 'A seven-step method, the difference between positions and interests, and when not to use it.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Not every conflict is a crisis. Most are disagreements, between a worker and a person about what comes next, between family members, between you and a coworker, between a program and a community. They can be worked through, and when they are, relationships often end up stronger. When they are not, they fester. This lesson gives you a method.",
        ] },
        { kind: 'concept', title: 'What conflict resolution is', text: [
          "The Community Tool Box defines conflict resolution as a process through which two or more parties work to understand a disagreement and find a constructive way forward. It says conflict, disagreement, and change are natural parts of life, and that disagreements may involve personal, financial, political, organizational, or emotional concerns. Negotiation is often a useful way to address a dispute, with goals of reaching a solution the parties can accept, using time and resources effectively while allowing enough time for meaningful discussion, and preserving or strengthening relationships whenever possible.",
          "It gives reasons to resolve conflict. To better understand people whose ideas, experiences, beliefs, priorities, or backgrounds differ from your own. To maintain or strengthen relationships. And to find constructive solutions, since prolonged conflict can use large amounts of time, energy, and trust.",
          "Peer support competencies include striving to resolve conflicts in relationships with peers and others in their support network. Davidson's review of peer support lists ways of resolving conflicts in the workplace, including how to talk openly about issues of power and hierarchy, among the topics that staff need to be trained in.",
        ] },
        { kind: 'concept', title: 'When not to use it', text: [
          "The Community Tool Box is explicit about limits. It says conflict resolution and negotiation are not appropriate substitutes for safety planning, accountability, or formal procedures when a situation involves violence, abuse, harassment, coercion, threats, discrimination, or another serious risk of harm. In those situations, protecting people's safety and rights may need to come first, and mediation may require specially trained professionals or may not be appropriate at all.",
          "So when a person is being hurt, threatened, or discriminated against, the first step is not a conversation to find common ground. It is safety, and your program's procedures for reporting and protection. Do not ask someone who is being abused to sit down with the person who is abusing them.",
        ] },
        { kind: 'concept', title: 'Seven steps', text: [
          "The Community Tool Box lists seven steps: understand the conflict, communicate with the other parties, brainstorm possible resolutions, choose the best resolution, use a third-party mediator when helpful, explore alternatives, and cope with stressful situations and pressure tactics.",
          "Step 1: understand the conflict. Define your own interests clearly and work to understand the interests of the other parties. Ask yourself what you really care about, what you want and need, what your concerns, hopes, or fears are, and what outcomes might be possible. Ask what the other party might care about most, if you were in their position. The Tool Box also asks whether there is a trusted third party, and what objective standards, such as law, research, professional standards, or community agreements, could help judge whether an agreement is fair.",
          "The Tool Box makes a key distinction. Groups sometimes spend so much time bargaining over fixed positions that they lose sight of the reasons behind those positions, and once people become strongly identified with a single position, changing it can feel like losing. Exploring underlying interests creates more room for solutions. A position is what someone says they want. An interest is why. A person who says I want a ride to the clinic has a position. Their interest might be getting medicine, or not missing work, or feeling safe on the bus. There may be many ways to meet the interest.",
          "Step 2: communicate. The Tool Box offers tips. Listen, even if you do not agree. Create meaningful opportunities for people affected to participate. Acknowledge strong emotions while keeping expectations of respectful and safe communication. Do not respond to escalation with escalation. If a conversation becomes heated, slow down, clarify misunderstandings, take a break if necessary, and apologize when you have genuinely caused harm or made a mistake. Be an active listener, for example, let me see if I am following you, you are saying that, have I got that right. Describe your own experience and concerns and do not assign motives to the other party. Be concrete but flexible. Avoid early judgments. Look for shared responsibility. And make it possible for people to reconsider their positions without humiliation.",
          "Step 3: brainstorm. Look for shared interests as well as differences, since even groups in serious conflict often have common goals such as stability, safety, fairness, or respect. Write a clear purpose, choose a setting that is accessible and safe, consider a neutral facilitator, and agree on ground rules. Generate many ideas before evaluating them. Keep the focus on the problem and not the people, and record ideas visibly.",
          "Step 4: choose the best resolution. Consider which options best address the interests of the parties, protect important rights and needs, are realistic to carry out, and are likely to last. The goal is not necessarily to split everything equally, but a resolution the parties can accept as fair and workable.",
          "Step 5: a mediator, someone not part of either side whom the parties trust to help facilitate a fair process, can help clarify interests, structure discussion, identify areas of agreement and disagreement, and help evaluate options. Step 6: explore alternatives if you cannot reach agreement. Step 7: cope with stress and pressure tactics. The pieces of these steps that were read for this course cover the first five in detail.",
        ] },
        { kind: 'concept', title: 'Applying it in your work', text: [
          "Practice guidance for this course, built on the method above and on the facilitation and cultural humility courses.",
          "With a person you serve. Disagreements come up about what you can do, about program rules, and about what is best for them. Begin by finding out what they want and why. Name what you can do and what you cannot, and why. Offer choices. If you cannot meet the request, say so, and look for another way to meet the underlying need. Know that you may have power in the relationship, and share it where you can.",
          "In a family. Family members may want different things. Hear each person separately if you can. Look for shared interests, such as the person's safety or well-being. Do not take sides, and do not repeat what one has told you in confidence to another without permission. Know your limits. If there is violence or abuse, safety comes first.",
          "With a coworker or supervisor. Raise it early and privately. Describe what you saw and how it affected you, not what you think their motives are. Ask how they see it. Look for what you both want. If you cannot resolve it, bring in your supervisor or another person your program designates.",
          "In a group or coalition. Use ground rules, a facilitator, and the steps above. The coalition lesson in the capacity building course noted that turf and past harm are common sources of conflict.",
          "Always bring in your supervisor when a conflict involves safety, a complaint about you, a possible report, or a person who is upset with your program.",
        ] },
        { kind: 'concept', title: 'Apologizing and repairing', text: [
          "The Tool Box says to apologize when you have genuinely caused harm or made a mistake. A short, sincere apology, naming what you did and what you will do differently, is part of resolving conflict. This links to the repair pattern you learned in the cultural humility course. Do not apologize for things you did not do just to end the conversation, and do not use an apology to ask for forgiveness.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Position', plain: "What a person says they want." },
          { term: 'Interest', plain: "Why a person wants it, what they care about underneath." },
          { term: 'Negotiation', plain: "Talking to reach an agreement that addresses the interests of those involved." },
          { term: 'Mediator', plain: "A trusted person outside the dispute who helps the parties reach a fair agreement." },
          { term: 'Brainstorm', plain: "Generating many ideas before judging any of them." },
        ] },
        { kind: 'myths', items: [
          { myth: "Conflict means the relationship is damaged.", reality: "The Tool Box says conflict is natural, and working through it can strengthen relationships." },
          { myth: "Resolving conflict means splitting everything down the middle.", reality: "The Tool Box says the goal is a resolution the parties can accept as fair and workable that addresses the most important interests." },
          { myth: "Any conflict can be handled with a conversation.", reality: "The Tool Box says negotiation is not a substitute for safety planning, accountability, or formal procedures when there is violence, abuse, harassment, coercion, threats, or discrimination." },
          { myth: "Changing your position means you lost.", reality: "The Tool Box says to make it possible for people to reconsider without humiliation, and notes that changing a position can feel like losing, which is why interests matter." },
        ] },
        { kind: 'case', title: 'A ride and a rule', scenario: true, text: [
          "A woman insists that the worker drive her to a clinic across town. Program rules do not allow it. She says, you do not care about me. The worker feels defensive. She takes a breath and says, I do care, and I cannot drive you. I want to understand what the ride would do for you. The woman says she cannot miss the appointment because she needs her medicine and her job will not give her another day. The worker says, so what matters most is getting there on time without losing your job. Let's find another way to do that. They look at the plan's transportation benefit, a bus route, and a friend. They choose the benefit, and the worker helps her call to book it and confirms the pickup. The woman says it is not what she wanted. The worker says she understands, and thanks her for working it out with her. The worker tells her supervisor about the program rule and the gap she noticed.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-cr-q3',
          q: "According to the Community Tool Box, what is the difference between a position and an interest?",
          options: [
            "There is no difference",
            "A position is what someone says they want, and an interest is why they want it; exploring interests creates more room for solutions",
            "An interest is a hobby",
            "A position is a job title",
          ],
          answer: 1,
          rationale: "The Tool Box says groups often bargain over fixed positions and lose sight of the reasons behind them, and exploring underlying interests creates more room for solutions that address what each party needs.",
          distractors: "The other answers misuse the terms.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-cr-q4',
          q: "A woman tells you her partner threatens her. A coworker suggests you arrange a sit-down to work it out. According to the Community Tool Box, what is the right approach?",
          options: [
            "Arrange the meeting immediately",
            "Safety comes first. Negotiation is not a substitute for safety planning, accountability, or formal procedures when there is violence, abuse, or threats, so follow your program's procedure",
            "Ignore it",
            "Tell her to be more patient",
          ],
          answer: 1,
          rationale: "The Tool Box says conflict resolution is not an appropriate substitute for safety planning, accountability, or formal procedures when there is violence, abuse, harassment, coercion, threats, or discrimination.",
          distractors: "The other answers risk further harm or dismiss the danger.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Think of a disagreement that ended well and one that did not. What was different?",
          "What is a position you hold that you could explain in terms of an interest?",
        ] },
        { kind: 'takeaways', items: [
          "Understand the conflict and the interests behind positions. Listen, acknowledge feelings, and do not respond to escalation with escalation.",
          "Brainstorm many options, choose one that is fair and workable, and use a mediator when helpful.",
          "When there is violence, abuse, threats, or discrimination, safety and formal procedures come first.",
        ] },
        ev([
          "Community Tool Box, University of Kansas. Chapter 20, Section 6, Training for Conflict Resolution. The definition, the goals of negotiation, the limits, the seven steps, and the distinction between positions and interests. The first five steps were read in detail.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Category X, which includes striving to resolve conflicts.",
          "Davidson L, et al. (2012). World Psychiatry. Training topics for staff, including resolving workplace conflicts and talking about power and hierarchy.",
          "The applications to persons served, families, and coworkers are practice guidance written for this course.",
        ]),
      ],
    },

    // ── Session ───────────────────────────────────────────────────────────
    {
      id: 'chw-cr-s1',
      title: 'Session, Calm, Clear, and Respectful',
      summary: 'A live practice session. Practice standing, speaking, listening, and setting limits in tense moments, and practice a conflict conversation.',
      minutes: 40,
      blocks: [
        { kind: 'why', text: [
          "Calm is a skill you build by doing. This session gives you a chance to practice your body, your words, and your pauses in a safe room, with people who are on your side.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "All scenes are invented. Participants play characters and do not act out real events or real people. No physical contact. Nobody is cornered or blocked. If a round feels like too much, say pause and it stops without question. You may step out at any time. What is said in the room stays in the room. You can call or text 988 at any time.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in and agreements, 5 minutes', text: "Introductions, agreements, and the pause rule." },
          { label: 'Space, stance, and voice, 10 minutes', text: "In pairs, participants practice approaching a person from a distance of two arm's lengths, with open hands, an angled stance, and a calm face, and practice saying three sentences slowly: an introduction, a question about what the person needs, and a reflection." },
          { label: 'Role-play triads, 20 minutes', text: "In triads, one person plays a character from a card, one is the worker, and one is the observer. Three rounds of about six minutes. The worker uses the ten domains, finds something to agree with, sets one respectful limit, and offers a choice. The observer uses the checklist. If a round turns unsafe in the story, the worker practices stepping away and calling for help." },
          { label: 'Debrief and close, 5 minutes', text: "What helped you stay steady? One thing you will practice this week." },
        ] },
        { kind: 'list', title: 'Character cards', items: [
          "A person who has waited a long time for help and says no one cares.",
          "A person who has just been told their benefit was denied and is shouting.",
          "A parent who is angry that a program will not do what they asked.",
          "A coworker who says you took credit for something.",
          "A person who is frightened and says someone is following them.",
          "Two family members arguing at an event, one of whom turns to you and demands that you take a side.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker keep distance, open hands, and a calm face?",
          "Did one person speak, using short sentences?",
          "Did the worker ask what the person wanted and listen?",
          "Did the worker find something honest to agree with?",
          "Did the worker set a respectful limit without threatening?",
          "Did the worker offer a real choice?",
          "If safety was at risk, did the worker step away and call for help?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which scene was hardest for you?",
          "What sentence will you keep ready for the next tense moment?",
        ] },
        { kind: 'takeaways', items: [
          "Space, calm, and short sentences go a long way.",
          "Listen first, agree where you honestly can, and set limits kindly.",
          "Safety first. Stepping away and calling for help is part of the skill.",
        ] },
        ev([
          "The agenda is practice design written for this course from the two lessons and the sources they cite. The character cards were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-cr-practice',
    title: 'Your conflict resolution practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: your calming words, a respectful limit, a plan for a disagreement using interests, and your plan for debriefing and care.',
    fields: [
      { id: 'calm', label: 'Your calming words', help: 'Write how you would introduce yourself to someone who is upset, one question about what they need, one reflection, one honest agreement, and one choice you could offer. Keep each short.', multiline: true },
      { id: 'limit', label: 'A respectful limit', help: 'Write a limit you may need to set in your work. State it in a matter-of-fact way, with an empathetic statement and what you can do instead. Add what you will do if the limit is crossed.', multiline: true },
      { id: 'interests', label: 'A disagreement, by interests', help: 'Pick a real or imagined disagreement in your work. Write each side\'s position, the interests behind each, two shared interests, and three options that could meet them. Note whether anything about it calls for safety or a formal procedure first.', multiline: true },
      { id: 'debrief', label: 'Debriefing and care', help: 'Write who you will tell after a tense moment, how you will debrief with the person if appropriate, and how you will take care of yourself. Add your program\'s safety procedure and who to call.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'Richmond JS, et al. Verbal De-escalation of the Agitated Patient: Consensus Statement of the American Association for Emergency Psychiatry Project BETA De-escalation Workgroup (2012)', use: 'The ten domains of de-escalation, written for emergency settings.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3298232/' },
    { name: 'Community Tool Box: Training for Conflict Resolution', use: 'The seven steps for resolving a conflict, and the distinction between positions and interests.', url: 'https://ctb.ku.edu/en/table-of-contents/implement/provide-information-enhance-skills/conflict-resolution/main' },
    { name: 'SAMHSA: Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services', use: 'Trauma-informed principles that apply in tense moments.', url: 'https://www.store.samhsa.gov/sites/default/files/sma14-4816.pdf' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The competencies on collaboration and resolving conflicts.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
  ],
};
