// Mentor + Leader.
//
// The pathway existed as twelve course titles and no content. A learner opening it read
// "Not yet available", which was accurate and is the reason this file exists.
//
// Five courses, written to the Written Guided Curriculum Standard v2.0. They are the five
// that do not depend on anything HMC has not yet scheduled: no placement, no simulation,
// no live cohort. The remaining seven planned titles stay in plannedCourses, where they
// read as a plan rather than as a promise.
//
// One of the five is safety critical. "Recognizing risk and escalating concerns" is the
// course that decides what a mentor does at the moment a young person tells them
// something serious, and it is written to a single rule: a mentor's job is to notice and
// to hand over, never to assess, investigate, or hold a disclosure alone. It states
// plainly that whether an individual is a mandated reporter under California law depends
// on their role and that HMC tells them which they are. It does not assert that every
// mentor is one, and it does not paraphrase the statute.
//
// Sources are named rather than linked. A citation to an authority a learner can look up
// by name is honest; a URL nobody verified is a liability, and this curriculum has been
// bitten by that before.

import type { Course, Check } from './catalog';

// ── Course 1 ─────────────────────────────────────────────────────────────

const ROLE_OF_A_MENTOR: Course = {
  id: 'ml-1',
  num: 1,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'The Role of a Mentor',
  promise:
    'Say what you are for, what you are not for, and hold that line in the first four conversations.',
  about: [
    'Most mentoring that fails does not fail from lack of care. It fails because nobody said out loud what the relationship was for, so the mentor filled the gap with whatever they were good at and the learner filled it with whatever they hoped for.',
    'This course is about defining the job. It is short on inspiration and long on scope, because scope is the part that protects both people.',
  ],
  objectives: [
    'State in one sentence what your mentoring relationship is for.',
    'Distinguish the three things a mentor does from the four things a mentor is not there to do.',
    'Recognise the three failure patterns before they establish themselves.',
    'Run a first conversation that sets expectations instead of setting a tone.',
  ],
  minutes: 34,
  prerequisites: 'None. Experience in the work you will be mentoring in is assumed, not taught here.',
  whoFor:
    'Volunteers, coordinators, and professionals who will mentor a learner, a new volunteer, or a peer at HMC or anywhere else.',
  lessons: [
    {
      id: 'ml-1-l1',
      title: 'What a mentor is for',
      summary: 'A relationship with no stated purpose becomes whatever the mentor is best at.',
      minutes: 7,
      blocks: [
        { kind: 'prose', text: [
          'A mentor exists to shorten the distance between where someone is and where they are trying to get, using experience the other person does not have yet. That is the whole of it. Everything else in this course is a consequence of that sentence.',
          'The sentence is easy to agree with and hard to hold. In practice a mentoring relationship with no stated purpose drifts toward whatever the mentor finds most satisfying. A mentor who is good at fixing things starts fixing. A mentor who is good at encouragement starts encouraging and stops saying anything difficult. Neither is wrong on its own. Both, unstated, become the whole relationship.',
        ] },
        { kind: 'why', text: [
          'A stated purpose is what lets either person notice the relationship going off course. Without it there is no off course. There is only two people meeting, and after four months one of them privately concludes it was not worth the time.',
        ] },
        { kind: 'concept', title: 'The purpose sentence', text: [
          'Before the second meeting, both people should be able to finish this sentence the same way: "We are meeting so that I can ___ by ___."',
          'It does not have to be ambitious. "So that I can decide whether to apply to nursing school by December" is a good purpose. "So that I can grow" is not a purpose, it is a mood.',
        ] },
        { kind: 'example', title: 'Two versions of the same relationship', text: [
          'Unstated: a coordinator meets a new volunteer monthly. They talk about how it is going. Six months in, the volunteer still has not been given anything harder than the intake table, and neither of them can say why.',
          'Stated: the same two people agree the purpose is for the volunteer to run a table shift unsupervised by the third month. Now every meeting has a question in it, the first hard conversation happens in week three, and the coordinator notices in month two that the volunteer needs practice with the referral script, not encouragement.',
        ] },
        { kind: 'check', check: {
          id: 'ml-1-c1',
          q: 'A mentor and a learner have met four times and both describe the relationship as "going well", but neither can say what it is for. What is the most likely outcome?',
          options: [
            'The relationship will find its own purpose given more time',
            'It will drift toward whatever the mentor is most comfortable providing, and the learner\'s actual goal will go unaddressed',
            'It will fail immediately and visibly',
            'Nothing, because a good relationship is the point',
          ],
          answer: 1,
          rationale: 'Drift is the normal failure, and it is quiet. Both people report satisfaction while the thing the learner needed never gets touched, which is why a stated purpose is the first act of mentoring rather than an administrative step.',
          distractors: 'Immediate visible failure would be easier to fix. The reason this pattern matters is that it feels fine from the inside for months.',
        } },
        { kind: 'takeaways', items: [
          'A mentor shortens the distance using experience the other person does not have yet.',
          'A relationship with no stated purpose becomes whatever the mentor is best at.',
          'Both people should finish the purpose sentence the same way before the second meeting.',
        ] },
      ],
    },
    {
      id: 'ml-1-l2',
      title: 'The three things a mentor does',
      summary: 'Perspective, access, and honest reflection. Everything else is optional.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'Strip mentoring back and three things remain that a learner genuinely cannot get on their own.',
        ] },
        { kind: 'steps', title: 'The three', items: [
          { label: 'Perspective', text: 'You have seen this situation before and they have not. You know which problems resolve themselves, which ones compound, and which ones look like a crisis and are a Tuesday. That knowledge is not available in any document.' },
          { label: 'Access', text: 'You know people, rooms, and openings they do not. An introduction from someone already trusted moves faster than any application. This is the part mentors most often forget they are holding.' },
          { label: 'Honest reflection', text: 'You will tell them what you actually see, including the part their friends will not say. This is the hardest of the three and the one that makes the other two worth anything.' },
        ] },
        { kind: 'myths', items: [
          { myth: 'A mentor should have the answer.', reality: 'A mentor should have the map. Handing over an answer teaches the answer; walking the map teaches how to get answers, which is the thing that transfers.' },
          { myth: 'A good mentor is always available.', reality: 'A good mentor is reliably available on terms both people agreed to. Unlimited availability that quietly becomes resentment is worse than a standing half hour that always happens.' },
          { myth: 'Mentoring is mostly emotional support.', reality: 'Emotional support is often part of it and is almost never the scarce part. The learner usually has people who believe in them. What they lack is somebody who has done the thing.' },
        ] },
        { kind: 'fieldnote', title: 'The access most mentors forget', text: [
          'Ask yourself who you could introduce this person to in one message. Most mentors sit on that list for months without opening it, because an introduction feels like spending capital while advice feels free. For the learner it is the other way around: the introduction is often the only part they could not have obtained without you.',
        ] },
        { kind: 'check', check: {
          id: 'ml-1-c2',
          q: 'Which of the three is a learner least likely to be able to get anywhere else?',
          options: [
            'Encouragement that they are capable',
            'Written guidance on the steps involved',
            'An introduction to someone who already trusts you',
            'General industry information',
          ],
          answer: 2,
          rationale: 'Encouragement and written guidance are widely available. An introduction that carries your credibility is not available at any price, which is why access is a duty of the role rather than a favour inside it.',
        } },
        { kind: 'reflect', title: 'Before you move on', prompts: [
          'Which of the three do you default to, and which do you avoid?',
          'Name one person you could introduce your learner to this month.',
          'What is the last honest thing you noticed and did not say?',
        ] },
      ],
    },
    {
      id: 'ml-1-l3',
      title: 'The four things a mentor is not',
      summary: 'The boundaries that protect both people, and the sentence that holds each one.',
      minutes: 7,
      blocks: [
        { kind: 'prose', text: [
          'Every one of these boundaries gets crossed by mentors acting entirely in good faith. Each has a sentence that holds it, which is worth having ready before you need it.',
        ] },
        { kind: 'steps', title: 'Not these four', items: [
          { label: 'Not the decision maker', text: 'You do not choose their programme, their job, or their next move. You make the trade-offs visible and they choose. The sentence: "I can tell you what I would weigh. I am not going to tell you what to do, because you are the one who lives with it."' },
          { label: 'Not their therapist', text: 'You can listen to something hard without becoming the person treating it. The sentence: "I am glad you told me. This is bigger than what I can help with, and I want you talking to somebody who does this properly. Can I help you find them?"' },
          { label: 'Not their supervisor', text: 'If you also hold authority over their work, say so and name which hat you are wearing in a given conversation. A mentor who is quietly also assessing them is a mentor they cannot be honest with.' },
          { label: 'Not their only support', text: 'A learner whose entire professional network is one person is fragile. Part of the job is building a bench you are not on.' },
        ] },
        { kind: 'case', title: 'The overlap that goes wrong most often', scenario: true, text: [
          'A programme coordinator mentors a volunteer she also schedules and evaluates. In month two the volunteer is struggling and does not say so, because the person who would hear it is the person who decides whether she gets the shift she wants.',
          'Nothing improper happened. The coordinator is kind and the volunteer is capable. The structure did the damage on its own.',
          'The fix is not to refuse the overlap, which is unavoidable in a small organisation. It is to name it out loud in the first conversation, and to say which conversations are mentoring and which are supervision. A learner who knows which hat you are wearing can choose what to say. A learner who does not know assumes the worst one.',
        ] },
        { kind: 'check', check: {
          id: 'ml-1-c3',
          q: 'You mentor someone whose shifts you also approve. What does the role require?',
          options: [
            'Stepping back from mentoring them, since the overlap is a conflict',
            'Naming the overlap out loud and being explicit about which role you are in during a given conversation',
            'Keeping the two roles separate in your own head and saying nothing',
            'Asking them not to raise work problems with you',
          ],
          answer: 1,
          rationale: 'In a small organisation the overlap is usually unavoidable, so the harm comes from it being unspoken. A learner who knows which role you are in can decide what to say; one who does not will assume the assessing role and withhold.',
          distractors: 'Keeping it separate in your own head protects you, not them. They cannot see inside your head, so they manage the risk by telling you less.',
        } },
        { kind: 'takeaways', items: [
          'Not the decision maker, not their therapist, not their supervisor, not their only support.',
          'Each boundary has a sentence. Have it ready before you need it.',
          'An unspoken role overlap does the damage on its own, with nobody behaving badly.',
        ] },
      ],
    },
    {
      id: 'ml-1-l4',
      title: 'Your first four conversations',
      summary: 'What each of the first four meetings is for, so the relationship starts with a shape.',
      minutes: 7,
      blocks: [
        { kind: 'prose', text: [
          'A first meeting spent entirely on rapport feels good and sets nothing. These four give the relationship a shape early, while changing it is still easy.',
        ] },
        { kind: 'steps', title: 'The first four', items: [
          { label: 'One: what is this for', text: 'Their goal in their words, the purpose sentence, how often you will meet, how long, who books it, and what you will each do between meetings. Name any role overlap here.' },
          { label: 'Two: what is actually in the way', text: 'Not the goal, the obstacle. Ask what they have already tried. Most learners have tried more than they lead with, and the pattern in what failed is the most useful thing in the first month.' },
          { label: 'Three: one concrete thing', text: 'Pick one action small enough to complete before the next meeting and real enough to matter. Early momentum is worth more than an accurate plan.' },
          { label: 'Four: the first honest reflection', text: 'By the fourth meeting you have seen enough to say something they have not heard. Say it. A mentor who waits six months to be candid has taught the learner that candour is not part of the deal.' },
        ] },
        { kind: 'tryit', title: 'Draft your opening', text: [
          'Write the first three sentences you will say in meeting one. Not notes, the actual sentences.',
          'Most people discover they were planning to open with their own history. Read yours and check whether the learner appears in it before the third sentence.',
        ] },
        { kind: 'case', title: 'A first meeting that set nothing', scenario: true, text: [
          'A coordinator opens a first mentoring meeting by telling her own story: how she came into community health, the wrong turns, the year she nearly left. It is genuine and it is well received. Forty minutes go by. They agree to meet again in a month.',
          'By the third meeting she notices the volunteer has not asked her for anything. What was established in meeting one was that this is a place where the mentor talks, and three meetings is enough for that to be the shape of the relationship rather than a first impression of it.',
          'Her own story was not the mistake. Spending the meeting that sets the terms on it was. The story lands better in meeting two, as an answer to something the volunteer actually asked.',
        ] },
        { kind: 'myths', items: [
          { myth: 'The first meeting should be about building rapport, and structure can come later.', reality: 'Structure introduced later has to displace a norm that has already formed. The first meeting is the cheapest opportunity to set terms, and rapport does not suffer from knowing what the meetings are for.' },
          { myth: 'Asking them to do something between meetings is too demanding this early.', reality: 'A learner who leaves the first meeting with nothing to do has been told the relationship happens in the meetings. One small commitment on each side is what makes the second meeting have something in it.' },
        ] },
        { kind: 'check', check: {
          id: 'ml-1-c4',
          q: 'Why does the first honest reflection belong around the fourth meeting rather than the tenth?',
          options: [
            'Because feedback is more accurate early on',
            'Because waiting teaches the learner that candour is not part of the relationship',
            'Because most mentoring relationships end by the tenth meeting',
            'Because the mentor will have forgotten by then',
          ],
          answer: 1,
          rationale: 'The timing is about the norm being set, not the accuracy of the observation. Every meeting that passes without anything difficult said establishes that difficult things are not said here, and that norm is hard to reverse later.',
        } },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'ml-1-agreement',
    title: 'Your mentoring agreement',
    minutes: 8,
    purpose:
      'The purpose sentence, the boundaries and the meeting terms in one place, in your own words, so the first conversation has something to work from instead of good intentions.',
    fields: [
      { id: 'purpose', label: 'The purpose sentence', help: 'We are meeting so that they can ___ by ___. Specific enough that you would both notice if it stopped being true.', multiline: true },
      { id: 'cadence', label: 'Meeting terms', help: 'How often, how long, who books it, and what happens if somebody cannot make it.', multiline: true },
      { id: 'overlap', label: 'Any role overlap, named', help: 'Do you also supervise, schedule, assess or approve anything of theirs? Write the sentence you will use to name it.', multiline: true },
      { id: 'bench', label: 'Two people who are not you', help: 'Who else should be in their corner by month three, and what will you do to make that happen?', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'MENTOR National Mentoring Partnership, Elements of Effective Practice for Mentoring', use: 'The recruitment, training, matching, monitoring and closure standards this course is consistent with.' },
    { name: 'Los Angeles County Department of Mental Health', use: 'Where HMC mentoring sits alongside county mental health services, and what a mentor refers into rather than handles.' },
  ],
};

// ── Course 2 ─────────────────────────────────────────────────────────────

const TRUST_AND_SAFETY: Course = {
  id: 'ml-2',
  num: 2,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Building Trust + Psychological Safety',
  promise:
    'Make it safe enough to hear the truth, without confusing safety for comfort.',
  about: [
    'A mentor is only as useful as the accuracy of what they are told. Everything else in the relationship rests on whether the learner will say the real thing, and that is a condition you build rather than a personality you have.',
    'This course separates two ideas that get treated as one. Safety is the condition where somebody can say a hard thing without being punished for it. Comfort is the absence of hard things. Mentors who chase the second lose the first.',
  ],
  objectives: [
    'Explain why accuracy of information is the practical case for psychological safety.',
    'Name the specific behaviours that build trust in the first month.',
    'Identify the four common ways a mentor breaks trust without noticing.',
    'Distinguish psychological safety from comfort and act on the difference.',
  ],
  minutes: 26,
  prerequisites: 'None. Course 1 first is recommended, since this assumes the relationship has a stated purpose.',
  whoFor: 'Anyone mentoring, facilitating a group, or leading peers.',
  lessons: [
    {
      id: 'ml-2-l1',
      title: 'Why safety comes before advice',
      summary: 'Advice given on inaccurate information is worse than no advice.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'A learner tells you the version of their situation they think is safe to tell. If you have not made the real version safe, you will spend the relationship solving a problem that is not the problem.',
          'This is the practical case for psychological safety, and it is worth preferring to the moral one. Advice given on inaccurate information does not merely fail. It is confidently wrong, it is delivered by somebody the learner trusts, and it costs them time they cannot get back.',
        ] },
        { kind: 'vocab', items: [
          { term: 'Psychological safety', plain: 'The belief that you can raise a problem, admit a mistake or ask a question without being punished, embarrassed, or thought less of.' },
          { term: 'Face saving', plain: 'What people do instead of telling you the real thing, when the real thing feels risky. Usually a smaller, more presentable version of the truth.' },
        ] },
        { kind: 'case', title: 'The problem behind the problem', scenario: true, text: [
          'A volunteer tells her mentor she wants help with time management, because her shifts keep slipping. The mentor is good at time management and provides a system.',
          'Four weeks later nothing has changed. The actual situation is that she is the only driver for a parent with dialysis three mornings a week, and she has not said so because it sounds like an excuse and she is afraid of being moved off the programme.',
          'The mentor did competent work on a false premise. The system was fine. The premise was face saving, and the reason for the face saving was that nothing in the first month had told her it was safe to say the real thing.',
        ] },
        { kind: 'check', check: {
          id: 'ml-2-c1',
          q: 'What is the strongest practical argument for building psychological safety in a mentoring relationship?',
          options: [
            'It makes the relationship more pleasant for both people',
            'Without it you receive an edited version of the situation and give confident advice about the wrong problem',
            'It is required by most mentoring programmes',
            'It reduces the mentor\'s workload',
          ],
          answer: 1,
          rationale: 'Safety is an information condition before it is a comfort condition. The failure it prevents is competent advice about a false premise, which costs the learner real time and is delivered with the mentor\'s full credibility behind it.',
        } },
      ],
    },
    {
      id: 'ml-2-l2',
      title: 'What builds trust in the first month',
      summary: 'Five behaviours, none of which are about being nice.',
      minutes: 6,
      blocks: [
        { kind: 'list', title: 'What actually does it', items: [
          'Doing the small thing you said you would do, on the day you said it. Reliability at small scale is the entire evidence base a learner has about you early on.',
          'Saying you do not know. A mentor who has never once said it has taught the learner that not knowing is unacceptable here.',
          'Naming a mistake of your own with the detail intact, not as a polished lesson.',
          'Asking a question you do not already have the answer to, and then not filling the silence.',
          'Keeping what they told you where they put it. One story repeated to a third person ends the relationship even if nothing bad follows.',
        ] },
        { kind: 'why', text: [
          'None of these are about warmth. A warm mentor who forgets what they promised is less trusted than a blunt one who never does. Learners are reading for evidence, and evidence is behavioural.',
        ] },
        { kind: 'steps', title: 'What the first month is actually testing', items: [
          { label: 'Does this person remember', text: 'A learner watches whether you recall what they told you last time without being reminded. Notes between meetings are not administrative, they are the mechanism by which somebody feels held in mind.' },
          { label: 'Does this person hold a boundary', text: 'A mentor who agrees to everything is read as unreliable rather than generous. Saying "not that, but this" once early tells the learner your yes means something.' },
          { label: 'Does this person handle a small hard thing', text: 'Learners frequently test with something minor before they raise anything real. How you take the small complaint about the meeting time is the evidence they use to decide whether to bring the large one.' },
        ] },
        { kind: 'activity', title: 'The smallest promise', text: [
          'At the end of your next meeting, commit to one small thing you will do before the next one. Send the introduction, find the document, ask the question of the colleague. Something you can complete in ten minutes.',
          'Do it within twenty four hours and tell them it is done. Repeat for three meetings. That is most of the trust building available to you in month one, and it is almost entirely unglamorous.',
        ], materials: 'None.' },
        { kind: 'check', check: {
          id: 'ml-2-c2',
          q: 'A mentor is consistently warm and encouraging, but twice has forgotten a small thing they promised. What is the likely effect on trust?',
          options: [
            'Neutral, because the warmth compensates',
            'Trust falls, because early trust is built on behavioural evidence and reliability at small scale is the main evidence available',
            'Trust rises, because the learner sees the mentor is busy and important',
            'No effect until a large promise is broken',
          ],
          answer: 1,
          rationale: 'Early on the learner has almost no evidence about you except whether small commitments happen. Warmth is read as manner; a kept promise is read as fact, and the two are not interchangeable.',
        } },
      ],
    },
    {
      id: 'ml-2-l3',
      title: 'The four ways mentors break it',
      summary: 'All four are done by mentors trying to help.',
      minutes: 5,
      blocks: [
        { kind: 'steps', title: 'Four failures in good faith', items: [
          { label: 'Solving the disclosure', text: 'They tell you something hard and you immediately produce a plan. The plan signals that the disclosure was a request for action, so next time they will not disclose unless they want action. Sit in it first.' },
          { label: 'Comparing', text: '"When I was starting out I had it worse." Almost always meant as solidarity. Received as a ranking, in which they came second.' },
          { label: 'Reassuring too fast', text: '"You will be fine." Said before you know whether they will be fine, it teaches them that you will smooth things rather than look at them.' },
          { label: 'Leaking', text: 'Repeating something they told you, even admiringly, even to somebody who would only think better of them. You do not get to decide which of their information is harmless.' },
        ] },
        { kind: 'example', title: 'The repair', text: [
          'All four are recoverable, and the repair is the same shape: name what you did, do not explain why it was well meant, and ask for the thing you interrupted.',
          '"I jumped straight to fixing that, and I do not think you were asking me to. Can you tell me the rest of it?"',
          'A mentor who repairs one of these in front of the learner has demonstrated something more useful than never having done it: that a mistake in this relationship gets named rather than managed.',
        ] },
        { kind: 'check', check: {
          id: 'ml-2-c3',
          q: 'A learner describes a difficult situation and the mentor responds with an immediate plan of action. What is the risk?',
          options: [
            'The plan will probably be wrong',
            'The learner learns that disclosure produces action, so next time they will only disclose when they want action',
            'The mentor will seem uninterested',
            'There is no real risk if the plan is a good one',
          ],
          answer: 1,
          rationale: 'The plan may well be good. The cost is to the channel rather than the content: the learner is being taught what a disclosure triggers here, and if it always triggers action they will stop disclosing anything they are not ready to act on.',
        } },
        { kind: 'reflect', title: 'Honestly', prompts: [
          'Which of the four is yours? Most people know immediately.',
          'When did you last reassure somebody before you knew whether it was true?',
          'Is there something a learner told you that you have repeated?',
        ] },
      ],
    },
    {
      id: 'ml-2-l4',
      title: 'Safety is not comfort',
      summary: 'The distinction that stops safety becoming an excuse to say nothing hard.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Psychological safety is often misread as an obligation to keep everyone comfortable. It is close to the opposite. Safety is the condition that makes discomfort survivable, and its purpose is to allow hard conversations, not to avoid them.',
          'A mentor who has built real safety can say the difficult thing and be believed. A mentor who has built comfort cannot say it at all, because the relationship has no precedent for it and the learner will hear it as the floor giving way.',
        ] },
        { kind: 'myths', items: [
          { myth: 'If they seem upset, I have failed at safety.', reality: 'Upset is not unsafe. Being upset and still able to say so, still expecting you to be there next week, is exactly what safety looks like working.' },
          { myth: 'Safety means never challenging them.', reality: 'Safety is what makes challenge usable. Without it, challenge reads as attack. With it, challenge reads as attention.' },
        ] },
        { kind: 'check', check: {
          id: 'ml-2-c4',
          q: 'A mentor gives difficult feedback and the learner is visibly upset but stays engaged, and comes to the next meeting. What does this indicate?',
          options: [
            'A failure of psychological safety',
            'Safety working as intended, since discomfort was survivable and the relationship held',
            'That the feedback was too harsh',
            'That the learner is suppressing a real reaction',
          ],
          answer: 1,
          rationale: 'Safety is not the absence of discomfort, it is the condition that lets discomfort be survived and returned from. A relationship where nothing difficult is ever said is comfortable and cannot do the work.',
        } },
        { kind: 'takeaways', items: [
          'Safety is an information condition first: without it you advise on an edited premise.',
          'Early trust is behavioural. Small kept promises outweigh warmth.',
          'The four good faith failures are solving, comparing, reassuring too fast, and leaking.',
          'Safety exists so that hard conversations are possible, not so they can be avoided.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'ml-2-practices',
    title: 'Trust practices you will actually do',
    minutes: 6,
    purpose:
      'Trust is behavioural, so this asks for behaviours with dates on them rather than intentions, and names the failure you are prone to before you commit to anything.',
    fields: [
      { id: 'promise', label: 'The small promise', help: 'One thing you will complete within twenty four hours of your next meeting, and how you will confirm it is done.', multiline: true },
      { id: 'failure', label: 'Your failure pattern', help: 'Solving, comparing, reassuring too fast, or leaking. Pick the one that is yours and say how you will notice it happening.', multiline: true },
      { id: 'hard', label: 'The hard thing you have not said', help: 'Write it as you would say it. You do not have to use it. Most mentors find the sentence is shorter than they feared.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'Amy Edmondson, research on psychological safety in teams', use: 'The origin of the term and the evidence that safety predicts whether problems get raised at all.' },
    { name: 'Substance Abuse and Mental Health Services Administration, principles of a trauma-informed approach', use: 'Trustworthiness, transparency and collaboration as stated principles, and why they are conditions rather than attitudes.' },
  ],
};

// ── Course 3 ─────────────────────────────────────────────────────────────

const COACHING_ADVISING_SUPERVISING: Course = {
  id: 'ml-3',
  num: 3,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Coaching vs Advising vs Supervising',
  promise:
    'Know which of the three the moment calls for, and say which one you are doing.',
  about: [
    'Three different jobs get called mentoring. They use different questions, carry different authority, and fail in different ways. Most mentoring frustration is one person coaching while the other waited for advice.',
    'This course is about naming the mode. It is a small habit with a large effect, because a learner who knows which mode you are in stops guessing.',
  ],
  objectives: [
    'Define coaching, advising and supervising by the authority each one carries.',
    'Choose the mode a situation calls for using time, stakes and competence.',
    'Name the mode out loud so the learner is not guessing.',
    'Recognise when advising is the wrong tool and when it is negligent not to use it.',
  ],
  minutes: 27,
  prerequisites: 'None.',
  whoFor: 'Mentors, coordinators, supervisors, and anyone who holds more than one of those roles at once.',
  lessons: [
    {
      id: 'ml-3-l1',
      title: 'Three different jobs',
      summary: 'They differ by who holds the answer and who carries the consequence.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'The three are usually described by tone. Coaching sounds curious, advising sounds knowledgeable, supervising sounds firm. Tone is the least reliable way to tell them apart. The difference that matters is where the answer sits and who carries the consequence.',
        ] },
        { kind: 'steps', title: 'By authority, not by tone', items: [
          { label: 'Coaching', text: 'The answer is theirs. You ask questions to help them find it. You carry no consequence if they choose differently from what you would have chosen. Best when they have the competence and lack the clarity.' },
          { label: 'Advising', text: 'The answer is yours to offer. You have information or experience they do not. They remain free to ignore it. Best when the gap is knowledge and the cost of learning it slowly is real.' },
          { label: 'Supervising', text: 'The decision is yours and the accountability is yours. You are answerable for the outcome, which is why you can require rather than suggest. Best when standards, safety or an obligation to somebody else is at stake.' },
        ] },
        { kind: 'concept', title: 'The failure that comes from mixing them', text: [
          'A supervisor who coaches a safety question has not been developmental, they have been absent. A mentor who supervises a personal decision has overstepped. And a mentor who coaches when the learner needed information has wasted their time politely.',
          'None of these are tone failures. All three are authority failures, and they are only visible when you name the mode.',
        ] },
        { kind: 'check', check: {
          id: 'ml-3-c1',
          q: 'What most reliably distinguishes coaching from advising?',
          options: [
            'Coaching uses questions and advising uses statements',
            'Where the answer sits: in coaching it is the learner\'s to find, in advising it is yours to offer',
            'Coaching is for beginners and advising is for experienced people',
            'Advising takes less time',
          ],
          answer: 1,
          rationale: 'Question form is a technique, not the distinction. Advice can be delivered as a question and coaching can include statements. What separates them is whose answer it is, which is why naming the mode tells the learner something the tone does not.',
        } },
      ],
    },
    {
      id: 'ml-3-l2',
      title: 'Choosing the mode',
      summary: 'Three tests: time, stakes, and where the gap actually is.',
      minutes: 4,
      blocks: [
        { kind: 'steps', title: 'Three tests', items: [
          { label: 'Where is the gap', text: 'If they lack information, advise. If they hold the information and cannot see the shape of it, coach. Asking a beautiful open question of somebody who simply does not know how licensure works is not developmental, it is a delay.' },
          { label: 'What are the stakes', text: 'As consequence rises and reversibility falls, move toward advising and then supervising. A choice of elective is coachable. An unsafe practice is not.' },
          { label: 'How much time is there', text: 'Coaching is slower and the learning is more durable. If the deadline is tomorrow, advise, and coach the same ground later when the clock is not the loudest thing in the room.' },
        ] },
        { kind: 'example', title: 'The same question in three modes', text: [
          'A learner asks whether to take an unpaid internship.',
          'Coaching: "What would have to be true for this to be worth a summer of your life?"',
          'Advising: "Two things people usually miss. Unpaid means you need a plan for rent, and the reference matters more than the title. Here is how I would compare it to the paid option."',
          'Supervising: not applicable, and a mentor who reaches for it here has confused their own preference with an obligation.',
        ] },
        { kind: 'fieldnote', title: 'Say it out loud', text: [
          'The whole habit is one sentence. "Do you want me to think out loud with you, or do you want what I would do?"',
          'Ask it at the start. Learners answer honestly and immediately, and the answer is frequently not what you assumed.',
        ] },
        { kind: 'check', check: {
          id: 'ml-3-c2',
          q: 'A learner has a decision due tomorrow and lacks information you hold. Which mode fits?',
          options: [
            'Coaching, because it produces more durable learning',
            'Advising, because the gap is information and the time to close it slowly does not exist',
            'Supervising, because the deadline creates accountability',
            'Any of the three, since the mode is a matter of style',
          ],
          answer: 1,
          rationale: 'Coaching produces more durable learning and needs time this decision does not have. The move is to advise now and coach the same ground later, rather than to run the slower process against a deadline and call it development.',
        } },
      ],
    },
    {
      id: 'ml-3-l3',
      title: 'When advising is wrong, and when withholding it is',
      summary: 'Two symmetrical failures, and the questions that catch each.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Advising has two failure modes and mentors tend to have a strong preference for one of them.',
        ] },
        { kind: 'concept', title: 'Advising when you should not', text: [
          'The tell is that you are advising on a matter where you carry none of the consequence and hold no relevant expertise. Whether to move city, whether to leave a relationship that is affecting their work, whether to take the job their family disapproves of.',
          'The check: could I state the trade-offs without stating a preference? If not, you are advising about your own life.',
        ] },
        { kind: 'concept', title: 'Withholding advice you should give', text: [
          'The tell is a mentor being scrupulously non-directive while a learner walks into something the mentor can see clearly. Deferring to their autonomy is a comfortable way to avoid being wrong.',
          'The check: if this goes badly, will I wish I had said the thing? If yes, say it now, once, plainly, and then leave the decision where it belongs.',
        ] },
        { kind: 'myths', items: [
          { myth: 'A good mentor never tells anyone what to do.', reality: 'A good mentor rarely does, and does not treat that as a rule strong enough to justify watching somebody walk into a wall in silence.' },
          { myth: 'Being directive undermines autonomy.', reality: 'Information does not remove a choice. Saying the thing once and clearly, then leaving the decision alone, respects autonomy more than withholding what they needed to decide well.' },
        ] },
        { kind: 'check', check: {
          id: 'ml-3-c3',
          q: 'A mentor can see a learner is about to make a decision with a consequence the learner has not noticed, and says nothing in order to respect their autonomy. What is the problem?',
          options: [
            'Nothing, autonomy is the priority',
            'Withholding relevant information does not preserve a choice, it degrades it, and the silence protects the mentor from being wrong',
            'The mentor should make the decision for them',
            'The mentor should have raised it earlier and now it is too late',
          ],
          answer: 1,
          rationale: 'A choice made without information the mentor was holding is not a freer choice, it is a worse informed one. The correct move is to say it once, plainly, and then leave the decision where it belongs.',
        } },
      ],
    },
    {
      id: 'ml-3-l4',
      title: 'Where the three overlap',
      summary: 'One person holding two roles, and the two habits that stop the overlap doing harm.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'In a small organisation one person routinely holds two of the three roles, and sometimes all of them. HMC coordinators mentor volunteers they also schedule, assess, and approve hours for. Refusing the overlap is not available; the choice is between an overlap that is named and one that is not.',
        ] },
        { kind: 'steps', title: 'Two habits', items: [
          { label: 'Announce the switch', text: 'When a conversation moves from mentoring into supervision, say so as it happens. "I am going to put the coordinator hat on for two minutes, because this part is not optional." Then say when you have taken it off. It sounds stilted the first time and stops sounding stilted immediately.' },
          { label: 'Never let supervision arrive disguised', text: 'A requirement delivered in a coaching voice is the worst of both. The learner hears an invitation, does not comply, and is then held to a standard nobody told them was a standard. If it is not optional, do not phrase it as a question.' },
        ] },
        { kind: 'fieldnote', title: 'The tell that you have got it wrong', text: [
          'If a learner is surprised to be held to something, the failure was almost always in how it was framed rather than in their attention. Surprise is diagnostic: it means a requirement was delivered as a suggestion.',
        ] },
        { kind: 'check', check: {
          id: 'ml-3-c4',
          q: 'A coordinator phrases a mandatory requirement as an open question during a mentoring conversation. The volunteer does not act on it and is later held to it. Where did the failure occur?',
          options: [
            'With the volunteer, who should have understood it was required',
            'In the framing: a requirement delivered in a coaching voice is heard as an invitation',
            'In the policy, which should have been clearer',
            'Nowhere, since the requirement was stated',
          ],
          answer: 1,
          rationale: 'A learner\'s surprise at being held to something is diagnostic of how it was framed. If it is not optional, phrasing it as a question is the mistake, and the cost lands on the person who was not told the difference.',
        } },
        { kind: 'takeaways', items: [
          'The three differ by where the answer sits and who carries the consequence.',
          'Choose by where the gap is, what the stakes are, and how much time exists.',
          'Ask which mode they came for. It takes five seconds and the answer is often a surprise.',
          'Announce the switch between roles, and never deliver a requirement in a coaching voice.',
        ] },
      ],
    },
  ],
  checks: [
    {
      id: 'ml-3-x1',
      q: 'A volunteer you supervise is skipping a required safety step. Which mode does the situation call for?',
      options: ['Coaching, to build their own judgement', 'Advising, since they may not know why the step exists', 'Supervising, because you are accountable for the standard and it is not optional', 'Mentoring, since the relationship is developmental'],
      answer: 2,
      why: 'Accountability for the standard sits with you, so the step is a requirement rather than a suggestion. Coaching a safety question is not developmental, it is absent. Explain the reason afterwards; do not make compliance wait for the explanation.',
    },
    {
      id: 'ml-3-x2',
      q: 'What single sentence most reliably prevents mode confusion?',
      options: ['"What do you think you should do?"', '"Do you want me to think out loud with you, or do you want what I would do?"', '"I am speaking as your mentor here."', '"Let me tell you what I did in your position."'],
      answer: 1,
      why: 'It asks the learner which mode they came for instead of guessing, and it can be asked in five seconds at the start of any conversation. Learners answer it honestly and often differently from what the mentor assumed.',
    },
  ],
  artifact: {
    id: 'ml-3-audit',
    title: 'Mode audit of three real conversations',
    minutes: 10,
    purpose:
      'Naming the mode is a habit, and habits change once you have seen your own pattern written down. Most people find they use one mode for everything.',
    fields: [
      { id: 'conversations', label: 'Three recent conversations', help: 'For each: what they asked for, which mode you used, and which the situation actually called for.', multiline: true, repeat: 3, repeatLabel: 'Conversation' },
      { id: 'pattern', label: 'Your pattern', help: 'Which mode do you default to regardless of what the moment needs, and what does that cost the people you mentor?', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'International Coaching Federation, core competencies', use: 'What coaching is as a defined practice, and the boundary it draws against advising.' },
    { name: 'MENTOR National Mentoring Partnership, Elements of Effective Practice for Mentoring', use: 'Role clarity and supervision expectations in a mentoring programme.' },
  ],
};

// ── Course 4 ─────────────────────────────────────────────────────────────

const EFFECTIVE_FEEDBACK: Course = {
  id: 'ml-4',
  num: 4,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Giving Effective Feedback',
  promise:
    'Say the useful thing in a way that can be acted on, and notice when feedback is really an escalation.',
  about: [
    'Feedback fails in two directions. It is softened until nobody can tell what was being asked, or it is delivered as a verdict on the person and defended against rather than used.',
    'This course treats feedback as information about a gap between what happened and what was needed. That framing does most of the work, and the structure that follows is short enough to use under pressure.',
  ],
  objectives: [
    'Frame feedback as information about a gap rather than a judgement of a person.',
    'Use a four part structure that survives being nervous.',
    'Receive feedback without defending, and model that for a learner.',
    'Recognise when what you are about to give is not feedback but an escalation.',
  ],
  minutes: 27,
  prerequisites: 'None. Courses 2 and 3 first are recommended.',
  whoFor: 'Mentors, coordinators, leads, and anyone whose feedback somebody is waiting for.',
  lessons: [
    {
      id: 'ml-4-l1',
      title: 'Information, not judgement',
      summary: 'Why "you are disorganised" cannot be acted on and "the last two shifts started late" can.',
      minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Feedback is information about the distance between what happened and what was needed. Stated that way it is usable. Stated as a characteristic of the person it is a verdict, and verdicts get argued with rather than acted on.',
          '"You are disorganised" cannot be acted on. It is a claim about who somebody is, it invites a defence, and even if accepted it does not indicate what to do differently on Thursday.',
          '"The last two shifts started fifteen minutes late and the intake table was not set up when the first person arrived" can be acted on. It is checkable, it is about a specific gap, and the next action is obvious to both of you.',
        ] },
        { kind: 'concept', title: 'The test', text: [
          'Before you say it, ask whether the person could disagree with you on the facts. If they cannot, you are describing something that happened. If they can only disagree about what kind of person they are, you have written a verdict.',
        ] },
        { kind: 'example', title: 'Three verdicts and their observations', text: [
          'Verdict: "You are not detail oriented." Observation: "The last three intake forms had the date of birth in the wrong format, which meant the records did not match on lookup."',
          'Verdict: "You are hard to reach." Observation: "I messaged on Monday and Wednesday about the Saturday shift and heard back on Friday, so I had already asked somebody else."',
          'Verdict: "You come across as dismissive in meetings." Observation: "In yesterday\'s meeting two people raised the transport problem and both times the response was that it had been decided. Neither of them spoke again."',
          'In each case the observation is longer, and that is the trade. A verdict is short because it has compressed the evidence out, which is precisely what makes it unusable.',
        ] },
        { kind: 'myths', items: [
          { myth: 'Softening feedback makes it easier to hear.', reality: 'Softening usually makes it harder to identify. The most common outcome of a carefully cushioned conversation is a person who leaves feeling vaguely criticised and unsure what was being asked.' },
          { myth: 'Praise first, then the criticism, then praise again.', reality: 'People learn the pattern quickly and start waiting through the praise for the real message, which devalues both. Say the useful thing plainly and let genuine praise stand on its own occasion.' },
        ] },
        { kind: 'check', check: {
          id: 'ml-4-c1',
          q: 'Which of these can actually be acted on?',
          options: [
            'You need to be more professional',
            'You have an attitude problem with the coordinators',
            'In the last two team emails the reply went to the whole group including the partner organisation, and one of them named a member',
            'You are not really a team player',
          ],
          answer: 2,
          rationale: 'It is specific, checkable, and the required change is obvious without being spelled out. The other three are characteristics rather than events, so they can only be agreed with or denied.',
        } },
      ],
    },
    {
      id: 'ml-4-l2',
      title: 'A structure that survives nerves',
      summary: 'Four parts, in order, short enough to remember when your heart rate is up.',
      minutes: 5,
      blocks: [
        { kind: 'steps', title: 'The four parts', items: [
          { label: 'The observation', text: 'What happened, specifically, without adjectives about the person. "The referral form went out without the consent box completed, on three of last week\'s five."' },
          { label: 'The consequence', text: 'Why it matters, concretely. Not that it is bad, but what it caused. "Two of those had to be redone, and one member was called twice about the same thing."' },
          { label: 'The question', text: 'Ask before you prescribe. "What was happening at that point in the shift?" This is where you find out it was a broken tablet rather than carelessness, which changes the whole conversation.' },
          { label: 'The ask', text: 'One clear thing, next time. Not a list. "For the next two weeks, check the consent box before you file. If the tablet is the problem, tell me today and I will get it replaced."' },
        ] },
        { kind: 'why', text: [
          'The question sits third rather than first on purpose. Asked before the observation, it reads as a trap: the other person knows something is coming and has to guess what. Asked after, it is a genuine invitation to correct your account, and it frequently does.',
        ] },
        { kind: 'case', title: 'The same feedback with and without the question', scenario: true, text: [
          'Without: "The consent boxes were missed three times, that meant redoing two forms and a member got called twice, please be more careful." The volunteer says sorry. The tablet keeps freezing. It happens again.',
          'With: the same first two parts, then "what was happening at that point in the shift?" The tablet freezes on that field and she had been working around it by filing and coming back, then getting pulled away. Ten seconds of information, and the actual fix was a device, not a person.',
        ] },
        { kind: 'check', check: {
          id: 'ml-4-c2',
          q: 'Why is the question placed after the observation and consequence rather than first?',
          options: [
            'To establish authority before inviting discussion',
            'Asked first it reads as a trap, since the other person knows something is coming and must guess what',
            'Because people answer questions more honestly later in a conversation',
            'It makes the feedback shorter',
          ],
          answer: 1,
          rationale: 'Opening with a question when both people know feedback is coming makes the other person guess at the charge before hearing it. Placed third, it is a real invitation to correct the account, and it often turns out the cause was structural.',
        } },
      ],
    },
    {
      id: 'ml-4-l3',
      title: 'Receiving it',
      summary: 'A mentor who cannot take feedback has taught the learner not to give any.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'The fastest way to teach somebody that feedback is survivable is to take some in front of them without managing it.',
          'The hard part is the reflex to explain. Explaining is not defending, but from the outside they are indistinguishable, and the learner concludes that feedback to you comes back with a rebuttal attached.',
        ] },
        { kind: 'steps', title: 'What to do instead', items: [
          { label: 'Take the information first', text: '"Let me make sure I have it. You are saying the last two check-ins felt rushed and you did not get to the thing you came with." Repeat it back before responding to it.' },
          { label: 'Thank them for the specific thing', text: 'Not for the courage it took. For the content. "That is useful and I had not noticed it."' },
          { label: 'Say what you will do, once', text: 'One change, not a defence and not a plan of five items.' },
          { label: 'Leave the explanation out unless asked', text: 'If context genuinely matters, offer it later and separately, so it cannot function as a rebuttal in the moment.' },
        ] },
        { kind: 'tryit', title: 'Ask for one', text: [
          'At your next meeting, ask: "What is one thing I could do differently in how we use this half hour?"',
          'Then do the thing. A single visible change from feedback a learner gave you does more for the relationship than any assurance that you are open to it.',
        ] },
        { kind: 'check', check: {
          id: 'ml-4-c3',
          q: 'A learner tells a mentor that recent meetings felt rushed. The mentor immediately explains the scheduling pressure that caused it. What is the likely effect?',
          options: [
            'The learner appreciates the transparency and feels closer',
            'The explanation is indistinguishable from a defence from the outside, so the learner learns that feedback to this mentor comes back with a rebuttal',
            'No effect, since the explanation is true',
            'The learner will raise it again more forcefully',
          ],
          answer: 1,
          rationale: 'The explanation may be entirely accurate. What the learner observes is that their feedback was answered rather than absorbed, and the cost is to whether they offer any next time.',
        } },
      ],
    },
    {
      id: 'ml-4-l4',
      title: 'When it is not feedback',
      summary: 'Some things are not a development conversation and must not be handled as one.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Feedback assumes a gap that the person can close and that it is appropriate for you to be the one raising it. Some situations meet neither condition, and handling them as feedback is how serious things get absorbed into a one to one and never reach anybody who could act.',
        ] },
        { kind: 'list', title: 'Not feedback', items: [
          'Anything involving harm or risk of harm to a person, including a member, a young person, or the volunteer themselves. That is an escalation, and Course 5 is about how.',
          'A pattern you have already raised twice with no change. That is a performance or supervision matter, and continuing to feed it back privately is how it stays invisible.',
          'Conduct that breaches a policy: privacy, safeguarding, boundaries, discrimination. Policies exist so that these do not depend on one person\'s judgement in the moment.',
          'Something you were told in confidence by a third person, where you are not the right route. Handle the route first.',
        ] },
        { kind: 'check', check: {
          id: 'ml-4-c4',
          q: 'A mentor has raised the same issue twice with no change, and prepares to raise it a third time as feedback. What does the situation now require?',
          options: [
            'A fourth attempt with clearer wording',
            'Treating it as a supervision matter and involving whoever holds accountability, since repeated private feedback is keeping the pattern invisible',
            'Accepting that the person will not change',
            'Raising it with the learner\'s peers to build pressure',
          ],
          answer: 1,
          rationale: 'Twice is feedback. A third private attempt keeps a known unresolved pattern inside a relationship that has no authority to resolve it, which serves the mentor\'s comfort rather than anybody\'s development.',
          distractors: 'Involving peers is not escalation, it is pressure, and it damages the learner\'s standing without giving anybody accountable the information.',
        } },
        { kind: 'takeaways', items: [
          'Feedback is information about a gap, not a verdict on a person.',
          'Observation, consequence, question, ask. The question comes third for a reason.',
          'Take feedback without explaining, and change one visible thing.',
          'Harm, policy breaches and twice-raised patterns are not feedback conversations.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'ml-4-rewrite',
    title: 'Rewrite three pieces of feedback',
    minutes: 8,
    purpose:
      'The gap between a verdict and an observation is visible the moment you write both. This is the exercise that makes the four part structure automatic.',
    fields: [
      { id: 'rewrites', label: 'Three rewrites', help: 'For each: the verdict version you would have said, then the observation, consequence, question and ask.', multiline: true, repeat: 3, repeatLabel: 'Feedback' },
      { id: 'escalation', label: 'One thing that is not feedback', help: 'Something you have been treating as a development conversation that is actually a supervision, policy or safety matter. What is the right route for it?', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'National Association of Colleges and Employers, Career Readiness Competencies', use: 'Professionalism and communication as defined competencies, for framing feedback against a standard rather than a preference.' },
    { name: 'MENTOR National Mentoring Partnership, Elements of Effective Practice for Mentoring', use: 'Monitoring and support expectations, including when a mentoring concern belongs with programme staff.' },
  ],
};

// ── Course 5 ─────────────────────────────────────────────────────────────
//
// Safety critical. The rule this course teaches is that a mentor notices and hands over.
// It deliberately does not tell a learner whether they are a mandated reporter under
// California law, because that depends on their role and HMC is the one that tells them.
// It does not paraphrase the statute or list its categories.

const RISK_AND_ESCALATION: Course = {
  id: 'ml-5',
  num: 5,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Recognizing Risk + Escalating Concerns',
  promise:
    'Recognise the disclosures that leave the mentoring relationship, and hand them over the same day without making them worse.',
  about: [
    'A mentoring relationship that is working will eventually be told something serious. The purpose of this course is that the moment finds you already decided.',
    'One rule runs through all of it: a mentor notices and hands over. You do not assess how serious it is, you do not investigate, and you do not hold it alone until you are sure. Each of those is a judgement that belongs to somebody trained and accountable for making it.',
  ],
  objectives: [
    'Recognise the categories of disclosure that must leave the mentoring relationship.',
    'Act on the difference between immediate danger and same day escalation.',
    'State the limits of confidentiality before a disclosure rather than after.',
    'Avoid the four responses that make a disclosure harder to act on.',
  ],
  minutes: 30,
  prerequisites:
    'None. HMC assigns any additional safeguarding requirements by role, including where an assignment involves minors or sensitive access.',
  whoFor:
    'Every mentor, peer leader and group facilitator, before their first meeting rather than after it.',
  freshness:
    'Whether you personally are a mandated reporter under California law depends on your role, and HMC tells you which you are. Confirm your current status with your coordinator before you rely on anything here, and again if your role changes.',
  lessons: [
    {
      id: 'ml-5-l1',
      title: 'What you are watching for',
      summary: 'Four categories that leave the relationship, and the one that leaves it immediately.',
      minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'You are not screening anybody. You are noticing four categories, and each one has a route out of the mentoring relationship.',
        ] },
        { kind: 'steps', title: 'The four', items: [
          { label: 'Immediate danger to life', text: 'Someone is in danger right now, from themselves or another person. This does not wait for a coordinator, an email or a meeting. In the United States, 988 is the Suicide and Crisis Lifeline, reachable by call or text, and 911 is for immediate emergency response.' },
          { label: 'Harm or suspected harm to a child, an older adult, or a dependent adult', text: 'You do not decide whether it happened, whether it is serious enough, or whether there is another explanation. You report it through the route HMC has given you, the same day. The threshold for reporting is suspicion, not certainty, and the assessment is somebody else\'s job.' },
          { label: 'Risk to the person\'s wellbeing that is beyond mentoring', text: 'Untreated mental health difficulty, substance use, housing loss, an unsafe home. These are referrals, not mentoring topics, and HMC has routes for all of them.' },
          { label: 'Conduct or safeguarding concerns', text: 'Something a volunteer, a member of staff or a partner did. This goes to your coordinator, and if the concern involves your coordinator it goes above them. Every organisation needs that second route to exist and this one does.' },
        ] },
        { kind: 'concept', title: 'Suspicion, not certainty', text: [
          'The single most common reason a serious concern goes unreported by a well meaning person is that they wanted to be sure first. Waiting for certainty is how a concern sits with one person for three weeks.',
          'You are not the assessor. Handing over an uncertain concern is the correct outcome, and a concern that turns out to have an innocent explanation is not a false alarm, it is the system working.',
        ] },
        { kind: 'check', check: {
          id: 'ml-5-c1',
          q: 'A mentor has a concern about a young person\'s safety at home but is not certain anything is wrong. What does the role require?',
          options: [
            'Gather more information over the next few meetings to be sure before raising it',
            'Report the concern through the route HMC has given, the same day, because the threshold is suspicion and the assessment belongs to someone else',
            'Ask the young person directly what is happening at home',
            'Raise it only if the young person asks for help',
          ],
          answer: 1,
          rationale: 'Waiting for certainty is the most common way a serious concern stays with one untrained person for weeks. Suspicion is the threshold precisely because assessment is a different job, and gathering information yourself can compromise the account somebody trained will need.',
          distractors: 'Asking directly feels caring and is investigation. It can shape a disclosure before anybody qualified hears it.',
        } },
      ],
    },
    {
      id: 'ml-5-l2',
      title: 'Who to tell, and how fast',
      summary: 'Two speeds. Know which one you are in before you need to.',
      minutes: 6,
      blocks: [
        { kind: 'steps', title: 'Two speeds', items: [
          { label: 'Now, from where you are standing', text: 'Immediate danger to life. Call or text 988 for a suicide or mental health crisis, or 911 where there is immediate danger. Stay with the person if it is safe to do so. Tell your coordinator afterwards, not first.' },
          { label: 'The same day, through your route', text: 'Everything else in the four categories. Same day means today, not at the next scheduled meeting. Put it in writing to your coordinator, factually, in the person\'s own words where you have them.' },
        ] },
        { kind: 'fieldnote', title: 'Know your route before your first meeting', text: [
          'Write down now: the name of the person you escalate to, how you reach them out of hours, and who you go to if the concern involves them. If you cannot answer all three, ask before you meet anybody.',
          'Nobody works this out calmly at the moment they need it.',
        ] },
        { kind: 'concept', title: 'Same day means today', text: [
          'The phrase does most of the work in this course, so it is worth being exact about it. Same day means before you go to sleep, not at the next scheduled meeting, not once you have had a chance to think about it, and not after you have checked whether it happens again.',
          'The reason is not procedural. A concern held for a week is a concern that somebody trained could have acted on for a week, and every version of this failure that has ever been reviewed afterwards turns on the delay rather than the noticing.',
          'If you cannot reach your coordinator, you escalate to the route above them. An unreachable coordinator is not a reason to wait; it is the situation the second route exists for.',
        ] },
        { kind: 'concept', title: 'What to write', text: [
          'What was said or seen, in their words where you have them. When. Who else was present. What you did. What you have not done.',
          'Not your interpretation, not a theory about the cause, and no assessment of how serious it is. A factual record is what somebody accountable can act on; a narrative with your conclusions in it is something they have to unpick first.',
        ] },
        { kind: 'check', check: {
          id: 'ml-5-c2',
          q: 'A learner discloses something that indicates immediate danger to their life. What is the correct first action?',
          options: [
            'Email the coordinator and wait for guidance',
            'Act on the crisis now, using 988 or 911 as the situation requires, and inform the coordinator afterwards',
            'Ask the learner to promise to stay safe until the next meeting',
            'Refer them to a service and end the conversation',
          ],
          answer: 1,
          rationale: 'Immediate danger is the one category that does not route through the organisation first. A coordinator cannot act faster than a crisis line, and the notification to HMC follows rather than precedes the response.',
        } },
      ],
    },
    {
      id: 'ml-5-l3',
      title: 'Confidentiality and its limits',
      summary: 'Say the limit before the disclosure, not after it.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'A mentor who promises complete confidentiality has promised something they cannot keep, and the moment they cannot keep it is the moment the person is most exposed.',
          'The limit is stated in the first meeting, before there is anything to disclose. It takes one sentence and it protects both people.',
        ] },
        { kind: 'example', title: 'The sentence', text: [
          '"What you tell me stays with me, with one exception. If I think you or somebody else is at risk of being harmed, I have to pass that on to keep you safe. I would tell you I was doing it."',
          'Said in the first meeting it is unremarkable. Said after a disclosure it lands as a betrayal, and the person learns that telling somebody was a mistake.',
        ] },
        { kind: 'myths', items: [
          { myth: 'If I warn them about the limit they will not tell me anything.', reality: 'People disclose to those they believe will handle it properly. A stated limit reads as competence. What silences people is discovering the limit afterwards.' },
          { myth: 'Telling them I am escalating makes it worse.', reality: 'Except where telling them would increase the risk, saying it plainly keeps them informed about their own situation and preserves the relationship. Being escalated without being told is how people stop trusting institutions.' },
        ] },
        { kind: 'check', check: {
          id: 'ml-5-c3',
          q: 'When should a mentor state the limits of confidentiality?',
          options: [
            'When a disclosure makes it relevant',
            'In the first meeting, before there is anything to disclose',
            'Only if the learner asks',
            'In writing at the end of the programme',
          ],
          answer: 1,
          rationale: 'Stated first it reads as competence and costs nothing. Stated after a disclosure it lands as a betrayal at the moment the person is most exposed, and it teaches them that telling somebody was a mistake.',
        } },
      ],
    },
    {
      id: 'ml-5-l4',
      title: 'What not to do',
      summary: 'Four responses, all well intentioned, that make a disclosure harder to act on.',
      minutes: 6,
      blocks: [
        { kind: 'steps', title: 'Four to avoid', items: [
          { label: 'Do not investigate', text: 'No follow up questions to establish what really happened, no talking to anybody else to check. Investigation shapes an account somebody trained will need intact, and it can put a person at greater risk.' },
          { label: 'Do not promise an outcome', text: 'You do not know what will happen next. "I will make sure nothing happens to you" is a promise you cannot keep. "I am going to tell the person whose job this is, today" is one you can.' },
          { label: 'Do not hold it to protect them', text: 'Keeping a serious disclosure inside the relationship because escalating feels like a betrayal is the most sympathetic version of this failure and the most damaging.' },
          { label: 'Do not carry it alone afterwards', text: 'You are allowed support. Tell your coordinator what you need. A mentor who absorbs several of these without support stops noticing, which is the one thing the role actually requires of them.' },
        ] },
        { kind: 'case', title: 'The sympathetic failure', scenario: true, text: [
          'A peer leader is told something serious by a young person who ends with "please do not tell anyone". He agrees, because she trusted him and because he is not certain it is as bad as it sounds.',
          'Three weeks later it reaches a coordinator by another route. Nothing he did was malicious and every instinct was protective. The effects are that three weeks passed, that a trained person could have acted on the first day, and that the young person has now learned that disclosing produced nothing.',
          'The alternative was available and takes one sentence: "I am not going to keep this one to myself, because it is about you being safe. I am telling the person whose job this is today, and I will tell you that I have done it."',
        ] },
        { kind: 'check', check: {
          id: 'ml-5-c4',
          q: 'A young person makes a serious disclosure and asks the mentor not to tell anyone. What should the mentor do?',
          options: [
            'Agree, since the relationship depends on trust',
            'Agree for now and raise it if it happens again',
            'Explain that this one has to be passed on to keep them safe, escalate the same day, and tell them it has been done',
            'Escalate without telling them, to avoid damaging the relationship',
          ],
          answer: 2,
          rationale: 'The promise cannot be kept, so making it only delays the harm and teaches the young person that disclosure produced nothing. Escalating without saying so is how people stop trusting institutions; the honest version keeps them informed about their own situation.',
        } },
        { kind: 'takeaways', items: [
          'A mentor notices and hands over. Assessment and investigation belong to somebody else.',
          'The threshold is suspicion, not certainty.',
          'Immediate danger goes to 988 or 911 now. Everything else goes through your route the same day.',
          'State the limit of confidentiality in the first meeting, and tell the person when you act on it.',
          'Know your escalation route, your out of hours contact, and your second route, before your first meeting.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'ml-5-plan',
    title: 'Your escalation plan',
    minutes: 8,
    purpose:
      'Nobody works out a route calmly at the moment they need it. This is the page you write once and can find in ninety seconds.',
    fields: [
      { id: 'route', label: 'Your route', help: 'Who you escalate to, how you reach them out of hours, and who you go to if the concern involves them.', multiline: true },
      { id: 'status', label: 'Your reporting status', help: 'What has HMC told you about whether you are a mandated reporter in your role? If you do not know, write the date you will ask.', multiline: true },
      { id: 'sentence', label: 'Your confidentiality sentence', help: 'The words you will use in the first meeting. Write them as you will say them.', multiline: true },
      { id: 'support', label: 'Your own support', help: 'Who you tell when a disclosure has affected you, and what you need from them.', multiline: true },
    ],
    reference: {
      title: 'Numbers to know before you need them',
      items: [
        '988 Suicide and Crisis Lifeline. Call or text, any time, for a suicide or mental health crisis.',
        '911 for immediate danger requiring emergency response.',
        'Your HMC coordinator, for every concern that is not an immediate danger to life. Same day.',
        'The route above your coordinator, for a concern that involves them.',
      ],
    },
  },
  furtherLearning: [
    { name: '988 Suicide and Crisis Lifeline', use: 'What the line does, who answers, and what to expect when you call or text with somebody.' },
    { name: 'California Child Abuse and Neglect Reporting Act', use: 'The law that defines who is a mandated reporter in California and what reporting requires. Read it to understand the framework; confirm your own status with HMC.' },
    { name: 'Los Angeles County Department of Mental Health', use: 'County mental health access and crisis services, which is what a wellbeing concern beyond mentoring is referred into.' },
  ],
};

// ── Pathway assessment ───────────────────────────────────────────────────
//
// Parallel forms. Same ten constructs, different items, different correct positions,
// because the baseline is reviewed with rationales immediately after submission and those
// exact items therefore cannot carry the credential.

export const MENTOR_PRE: Check[] = [
  {
    id: 'ml-t1',
    q: 'What is the practical consequence of a mentoring relationship with no stated purpose?',
    options: [
      'It takes longer to build rapport',
      'It drifts toward whatever the mentor is most comfortable providing',
      'The learner will end it early',
      'Nothing, provided both people are committed',
    ],
    answer: 1,
    why: 'Drift is the normal failure and it is quiet. Both people report satisfaction while the learner\'s actual goal goes untouched.',
  },
  {
    id: 'ml-t2',
    q: 'Which of the three core mentor contributions is a learner least able to obtain elsewhere?',
    options: ['Encouragement', 'Written guidance', 'An introduction that carries your credibility', 'General information about the field'],
    answer: 2,
    why: 'Encouragement and information are widely available. Access that carries somebody else\'s credibility is not available at any price.',
  },
  {
    id: 'ml-t3',
    q: 'A mentor also approves the shifts of the person they mentor. What does the role require?',
    options: [
      'Ending the mentoring relationship',
      'Keeping the roles separate privately',
      'Naming the overlap out loud and being explicit about which role a given conversation is in',
      'Asking the learner not to discuss work',
    ],
    answer: 2,
    why: 'The overlap is usually unavoidable in a small organisation. The harm comes from it being unspoken, because the learner then assumes the assessing role and withholds.',
  },
  {
    id: 'ml-t4',
    q: 'What is the strongest practical argument for psychological safety?',
    options: [
      'It makes the relationship more pleasant',
      'Without it you receive an edited account and advise confidently on the wrong problem',
      'It is expected by most programmes',
      'It reduces the number of meetings needed',
    ],
    answer: 1,
    why: 'Safety is an information condition before it is a comfort condition. The failure it prevents is competent advice about a false premise.',
  },
  {
    id: 'ml-t5',
    q: 'Which most reliably distinguishes coaching from advising?',
    options: [
      'Coaching uses questions, advising uses statements',
      'Coaching is slower',
      'Where the answer sits: the learner\'s to find, or yours to offer',
      'Coaching suits beginners',
    ],
    answer: 2,
    why: 'Question form is a technique. What separates the modes is whose answer it is, and therefore who carries the consequence.',
  },
  {
    id: 'ml-t6',
    q: 'A learner has a decision due tomorrow and lacks information the mentor holds. Which mode fits?',
    options: ['Coaching', 'Advising', 'Supervising', 'Any, since mode is a matter of style'],
    answer: 1,
    why: 'The gap is information and there is no time to close it slowly. Advise now and coach the same ground later.',
  },
  {
    id: 'ml-t7',
    q: 'Which piece of feedback can be acted on?',
    options: [
      'You need to be more professional',
      'You have an attitude problem',
      'The last two team emails went to the whole group including the partner organisation, and one named a member',
      'You are not a team player',
    ],
    answer: 2,
    why: 'It is specific and checkable, and the required change is obvious. The others are characteristics, which can only be agreed with or denied.',
  },
  {
    id: 'ml-t8',
    q: 'In the four part feedback structure, why does the question come third?',
    options: [
      'To establish authority first',
      'Because asked first it reads as a trap, since the other person must guess what is coming',
      'People answer more honestly later in a conversation',
      'It shortens the conversation',
    ],
    answer: 1,
    why: 'Placed third it is a genuine invitation to correct the account, and it frequently reveals that the cause was structural rather than personal.',
  },
  {
    id: 'ml-t9',
    q: 'What is the threshold for escalating a safeguarding concern?',
    options: ['Certainty that harm occurred', 'Suspicion', 'A request from the person affected', 'A second corroborating observation'],
    answer: 1,
    why: 'Suspicion is the threshold precisely because assessment is a different job. Waiting for certainty is how a concern sits with one untrained person for weeks.',
  },
  {
    id: 'ml-t10',
    q: 'When should a mentor state the limits of confidentiality?',
    options: [
      'When a disclosure makes it relevant',
      'Only if asked',
      'In the first meeting, before there is anything to disclose',
      'At the end of the programme',
    ],
    answer: 2,
    why: 'Stated first it reads as competence. Stated after a disclosure it lands as a betrayal at the moment the person is most exposed.',
  },
];

export const MENTOR_POST: Check[] = [
  {
    id: 'ml-p1',
    q: 'Two people have met four times, both say it is going well, and neither can say what the relationship is for. What is the risk?',
    options: [
      'The mentor is being too passive',
      'The learner\'s actual goal goes unaddressed while both report satisfaction',
      'The relationship will end within a month',
      'There is no risk while both are engaged',
    ],
    answer: 1,
    why: 'This is drift, and its defining feature is that it feels fine from the inside. That is why a purpose sentence is the first act of mentoring.',
  },
  {
    id: 'ml-p2',
    q: 'A mentor has held a list of possible introductions for four months without making any. What has the learner lost?',
    options: [
      'Nothing, introductions should be earned',
      'Encouragement they could have received elsewhere',
      'The one contribution they could not have obtained without the mentor',
      'Time, but no opportunity',
    ],
    answer: 2,
    why: 'Access is the scarce contribution. Advice feels free to give and an introduction feels like spending capital, which gets the value backwards from the learner\'s side.',
  },
  {
    id: 'ml-p3',
    q: 'A learner asks a mentor to keep a serious disclosure to themselves. What is the correct response?',
    options: [
      'Agree, because the relationship depends on trust',
      'Agree for now and act if it recurs',
      'Escalate without telling them, to protect the relationship',
      'Explain it has to be passed on to keep them safe, escalate the same day, and tell them it is done',
    ],
    answer: 3,
    why: 'The promise cannot be kept, so making it only delays harm. Escalating silently is how people stop trusting institutions; the honest version keeps them informed about their own situation.',
  },
  {
    id: 'ml-p4',
    q: 'A learner asks for help with time management. Four weeks of good advice changes nothing, and the real obstacle turns out to be a caring responsibility they did not mention. What failed?',
    options: [
      'The advice was poor',
      'The learner was not committed',
      'The conditions for an accurate account had not been established, so competent advice was given on a false premise',
      'The mentor should have asked about their home life directly',
    ],
    answer: 2,
    why: 'Face saving is the default when nothing has signalled that the real version is safe to tell. The work was competent and the premise was wrong.',
  },
  {
    id: 'ml-p5',
    q: 'A mentor is consistently warm but has twice forgotten a small commitment. What happens to trust?',
    options: [
      'It holds, because warmth compensates',
      'It falls, because early trust rests on behavioural evidence and small reliability is most of the evidence available',
      'It rises, since the learner sees a busy professional',
      'Nothing until a significant promise is broken',
    ],
    answer: 1,
    why: 'Warmth is read as manner and a kept promise is read as fact. Early on, a learner has little else to go on.',
  },
  {
    id: 'ml-p6',
    q: 'A volunteer a mentor supervises is skipping a required safety step. Which mode does this call for?',
    options: ['Coaching', 'Advising', 'Supervising', 'Peer support'],
    answer: 2,
    why: 'Accountability for the standard sits with the supervisor, so the step is a requirement rather than a suggestion. Explain the reason afterwards, but do not make compliance wait for it.',
  },
  {
    id: 'ml-p7',
    q: 'A mentor can see a learner about to make a decision with a consequence the learner has not noticed, and stays silent to respect autonomy. What is wrong with that?',
    options: [
      'Nothing, autonomy takes priority',
      'The mentor should decide for them',
      'Withholding relevant information degrades the choice rather than preserving it, and the silence protects the mentor',
      'The concern should have been raised weeks earlier',
    ],
    answer: 2,
    why: 'Information does not remove a choice. Say it once, plainly, then leave the decision where it belongs.',
  },
  {
    id: 'ml-p8',
    q: 'A learner tells a mentor that recent meetings felt rushed, and the mentor explains the scheduling pressure. What has the learner learned?',
    options: [
      'That the mentor is transparent',
      'That feedback to this mentor comes back with a rebuttal',
      'Nothing, since the explanation was accurate',
      'That they should raise it more firmly',
    ],
    answer: 1,
    why: 'An explanation and a defence are indistinguishable from the outside. The cost is to whether they offer feedback again.',
  },
  {
    id: 'ml-p9',
    q: 'A mentor has raised the same issue twice with no change. What does the situation now require?',
    options: [
      'A clearer third attempt',
      'Involving whoever holds accountability, since repeated private feedback is keeping the pattern invisible',
      'Accepting the person will not change',
      'Raising it with the learner\'s peers',
    ],
    answer: 1,
    why: 'Twice is feedback. A third private attempt keeps a known unresolved pattern inside a relationship with no authority to resolve it.',
  },
  {
    id: 'ml-p10',
    q: 'A learner discloses immediate danger to their life. What comes first?',
    options: [
      'Email the coordinator and await guidance',
      'Ask them to promise to stay safe until the next meeting',
      'Act on the crisis now using 988 or 911, and inform the coordinator afterwards',
      'Give them a referral and end the conversation',
    ],
    answer: 2,
    why: 'Immediate danger is the one category that does not route through the organisation first. A coordinator cannot act faster than a crisis line.',
  },
];

export const MENTOR_LEADER_COURSES: Course[] = [
  ROLE_OF_A_MENTOR,
  TRUST_AND_SAFETY,
  COACHING_ADVISING_SUPERVISING,
  EFFECTIVE_FEEDBACK,
  RISK_AND_ESCALATION,
];
