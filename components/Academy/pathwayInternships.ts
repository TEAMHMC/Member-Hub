// Internships + Fellowships.
//
// The pathway existed as eleven course titles and no content, so it rendered as "Not yet
// available" to anybody who opened it.
//
// Four courses are written here. They are the four that a learner can complete BEFORE a
// placement exists, which is the constraint that decided the selection: the pathway's own
// gates require a learning agreement, project work, a midpoint review, a capstone and a
// final supervisor evaluation, and none of those can be taught in a text course. What can
// be taught is what a learner should have settled before their first week, and that is
// what these four do.
//
// The remaining seven titles stay in plannedCourses. Several of them are not courses at
// all in any honest sense: "Midpoint Review", "Capstone Presentation" and "Final
// Evaluation + Career Reflection" are scheduled events with a supervisor in the room, and
// writing them as self-paced reading would misrepresent what they are.
//
// No pre or post test. The pathway's gates rest on a supervisor evaluation and an approved
// portfolio artifact, not on a knowledge score, and adding a test to make the pathway look
// like the others would put a number on the credential that the credential does not use.

import type { Course } from './catalog';

// ── Course 1 ─────────────────────────────────────────────────────────────

const PROFESSIONAL_ORIENTATION: Course = {
  id: 'if-1',
  num: 1,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Professional Orientation + Expectations',
  promise:
    'Arrive in week one knowing what is expected of you, what you are owed, and what to do when the work does not appear.',
  about: [
    'The most common way an internship disappoints is not conflict. It is a learner who waited to be given work, and a supervisor who assumed a self-starter, and eight weeks passing before either says so.',
    'This course is about the first two weeks, because that is where a placement is decided. It covers what to establish before you start, how to be useful before anybody trusts you with anything, and the specific move to make in week three if there is still nothing to do.',
  ],
  objectives: [
    'State what a learning agreement must contain before your first week.',
    'Distinguish what a placement owes you from what it does not.',
    'Be useful in the first fortnight without waiting to be assigned.',
    'Raise an absent-work problem in week three rather than week eight.',
  ],
  minutes: 27,
  prerequisites: 'None. Complete this before your placement begins rather than during it.',
  whoFor:
    'Interns, fellows, student placements, and anyone about to spend a term inside an organisation they do not know yet.',
  lessons: [
    {
      id: 'if-1-l1',
      title: 'What to settle before week one',
      summary: 'Six things that are cheap to agree in advance and expensive to raise in month two.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Almost every placement problem that becomes serious was cheap to prevent in a fifteen minute conversation nobody had.',
        ] },
        { kind: 'steps', title: 'Six things, in writing', items: [
          { label: 'Who your supervisor actually is', text: 'The named person accountable for your work, not the person who interviewed you and not the team generally. If two people think they are supervising you, neither is.' },
          { label: 'What you are here to produce', text: 'One or two outputs somebody would notice the absence of. "Support the team" is not an output and cannot be reviewed at the end.' },
          { label: 'When you meet, and for how long', text: 'A standing slot that exists in a calendar. A supervisor with an open door and no scheduled time will be genuinely available and you will still not speak for three weeks.' },
          { label: 'What you may and may not access', text: 'Which systems, which records, which meetings. Ask explicitly rather than infer from what you happen to be able to open.' },
          { label: 'Hours and where you work them', text: 'Days, times, remote or in person, and what happens when a class or a shift collides with it.' },
          { label: 'How this ends', text: 'What the final evaluation looks at, and what you need to have produced for the portfolio artifact. Knowing the end at the start changes what you do in week two.' },
        ] },
        { kind: 'why', text: [
          'Every one of these is easy to ask before you start, when asking reads as diligence. The same questions in week six read as a complaint about how the placement has been run.',
        ] },
        { kind: 'check', check: {
          id: 'if-1-c1',
          q: 'Why does a learning agreement need to name a single accountable supervisor rather than a team?',
          options: [
            'Because organisations require a named contact for records',
            'Because if two people believe they are supervising, neither is, and nobody owns the work not appearing',
            'Because a team cannot give feedback',
            'Because the learner should only speak to one person',
          ],
          answer: 1,
          rationale: 'Diffused supervision is the most common structural cause of an internship where nothing happens. Everybody assumes somebody else has assigned the work, and the learner has nobody to raise it with.',
        } },
      ],
    },
    {
      id: 'if-1-l2',
      title: 'What a placement owes you, and what it does not',
      summary: 'The distinction that prevents both resentment and passivity.',
      minutes: 5,
      blocks: [
        { kind: 'steps', title: 'Owed', items: [
          { label: 'Real work', text: 'Something that would have to be done by somebody if you were not there. An intern given only invented tasks has been given a seat, not a placement.' },
          { label: 'Supervision that happens', text: 'The scheduled conversation, taking place, with somebody who has looked at what you did.' },
          { label: 'Feedback before the end', text: 'A midpoint review exists so that the final evaluation is not the first time you hear something. Being told in the last week is not feedback, it is a verdict.' },
          { label: 'Safety and a clear scope', text: 'To know what you are not authorised to do, before the moment you are asked to do it.' },
        ] },
        { kind: 'steps', title: 'Not owed', items: [
          { label: 'A job at the end', text: 'Some placements lead to one. A placement that does not has not failed, and treating the outcome as promised sours the term you actually have.' },
          { label: 'Constant attention', text: 'Your supervisor has a job that is not you. Reliability under light supervision is one of the things being assessed.' },
          { label: 'Only interesting work', text: 'Every real role contains unglamorous necessary work. Doing it well and without complaint is most of a professional reputation at this stage.' },
        ] },
        { kind: 'myths', items: [
          { myth: 'If they are not giving me work, they do not want me here.', reality: 'Usually they are busy and have not built the habit of delegating to you yet. The remedy is to arrive with a proposal rather than to wait for an assignment.' },
          { myth: 'Asking for feedback looks needy.', reality: 'Asking once, specifically, about one piece of work reads as seriousness. It is the general request for "any feedback" that lands awkwardly, because it gives the supervisor nothing to answer.' },
        ] },
        { kind: 'check', check: {
          id: 'if-1-c2',
          q: 'Which is a placement genuinely obliged to provide?',
          options: [
            'A job offer if the intern performs well',
            'Work that would otherwise have to be done by somebody, and feedback before the final evaluation',
            'Continuous supervision throughout the working day',
            'Only tasks the intern finds interesting',
          ],
          answer: 1,
          rationale: 'Real work and feedback before the end are the substance of a placement. An offer is never owed, and continuous attention is neither owed nor desirable, since working reliably under light supervision is part of what is being assessed.',
        } },
      ],
    },
    {
      id: 'if-1-l3',
      title: 'Being useful before you are trusted',
      summary: 'What to do in the first fortnight, when nobody yet knows what you can handle.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Trust arrives in small increments and it arrives faster than most learners expect, provided the increments are visible. The first fortnight is about making them visible.',
        ] },
        { kind: 'list', title: 'The first fortnight', items: [
          'Learn the vocabulary. Every organisation has fifteen internal terms, and using them correctly by week two signals that you are paying attention more effectively than any amount of enthusiasm.',
          'Find the thing nobody has time for. There is always a list that has been on somebody\'s desk for a month. Volunteering for it is the fastest route to real work.',
          'Write down what you were told and refer back to it. A learner who does not need to be told twice is a learner who gets told bigger things.',
          'Close the loop out loud. "That is done, and here is where I put it." Supervisors are tracking many things and cannot see your progress without being shown.',
          'Ask a question that could not be answered by reading the document you were given. That is the question that demonstrates you read it.',
        ] },
        { kind: 'tryit', title: 'The proposal', text: [
          'By the end of week two, write three sentences: something you have noticed could be improved, what you would do about it, and how long you think it would take.',
          'Bring it to your supervision meeting. Most of the time it will be redirected rather than accepted, and the redirection is the point: you have moved from waiting to be assigned to being someone who brings proposals.',
        ] },
        { kind: 'check', check: {
          id: 'if-1-c3',
          q: 'An intern completes a task and files the output without saying anything, assuming the work speaks for itself. What is the cost?',
          options: [
            'None, since the work is done',
            'The supervisor is tracking many things and cannot see progress that is not shown, so the increment of trust does not happen',
            'The intern appears arrogant',
            'The work will probably be duplicated',
          ],
          answer: 1,
          rationale: 'Trust is built from visible increments. Unreported completed work is invisible, and an intern can do a term of good work and still be assessed as someone who needed chasing.',
        } },
      ],
    },
    {
      id: 'if-1-l4',
      title: 'When the work does not appear',
      summary: 'What to do in week three, and the exact wording that keeps it from being a complaint.',
      minutes: 6,
      blocks: [
        { kind: 'prose', text: [
          'Sometimes you do everything above and there is still nothing substantial. This happens for structural reasons: a supervisor on leave, a project delayed, a team that has never hosted a placement before. It is not a personal failure and it will not correct itself.',
          'Week three is the moment to say so. Early enough that the term can be redeemed, late enough that you have given it a fair run.',
        ] },
        { kind: 'example', title: 'The wording', text: [
          '"I want to make sure I am useful to you for the rest of the term. Right now I have about six hours a week that are not committed to anything. Two things I could take on are X and Y. Would either of those help, or is there something else you would rather I picked up?"',
          'It states the problem as spare capacity rather than as neglect, it arrives with options, and it ends with a question the supervisor can answer in one sentence. Every version of this that reads as a complaint about the placement makes the remaining weeks harder.',
        ] },
        { kind: 'concept', title: 'And if nothing changes', text: [
          'If the conversation happens and the position is the same two weeks later, that is the point to involve whoever placed you: your programme coordinator, your school, or HMC. That is not escalating against your supervisor. A placement with no work is a problem for the organisation as much as for you, and the person who arranged it is the only one who can fix a structural cause.',
        ] },
        { kind: 'check', check: {
          id: 'if-1-c4',
          q: 'Three weeks in, an intern has almost no substantial work. What is the right move?',
          options: [
            'Wait, since placements often take time to get going',
            'Raise it as spare capacity, with two concrete options, and ask which would help',
            'Report the supervisor to the programme immediately',
            'Fill the time with self-directed study and say nothing',
          ],
          answer: 1,
          rationale: 'Week three is early enough to redeem the term and late enough to be fair. Framing it as spare capacity with options gives the supervisor something to say yes to; framing it as neglect makes the remaining weeks harder for no gain.',
          distractors: 'Self-directed study is a reasonable use of an afternoon and a poor use of a term, and it hides the problem from the only people who could solve it.',
        } },
        { kind: 'takeaways', items: [
          'Settle the six things in writing before week one.',
          'You are owed real work, supervision that happens, and feedback before the end. Not an offer.',
          'Make your increments visible. Unreported work is invisible work.',
          'If there is no work by week three, say so as spare capacity with options, then involve whoever placed you if nothing changes.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'if-1-agreement',
    title: 'Your learning agreement, drafted',
    minutes: 8,
    purpose:
      'The pathway requires a learning agreement, and a learner who arrives with a draft gets a better one than a learner who waits to be handed a template. This is that draft.',
    fields: [
      { id: 'supervisor', label: 'Your supervisor', help: 'The one named person accountable for your work, and how you reach them.', multiline: false },
      { id: 'outputs', label: 'What you will produce', help: 'One or two outputs somebody would notice the absence of. Not "support the team".', multiline: true },
      { id: 'cadence', label: 'Supervision', help: 'The standing slot: day, time, length, and what happens when it collides with something.', multiline: true },
      { id: 'access', label: 'Access and scope', help: 'What you may use, which meetings you are in, and what you are explicitly not authorised to do.', multiline: true },
      { id: 'ending', label: 'How it ends', help: 'What the final evaluation looks at, and what the portfolio artifact needs to be.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'National Association of Colleges and Employers, Position Statement on U.S. Internships', use: 'The criteria that distinguish a genuine internship from unpaid labour, which is the standard a learning agreement should meet.' },
    { name: 'National Association of Colleges and Employers, Career Readiness Competencies', use: 'The named competencies a placement is an opportunity to evidence, and the language a final evaluation is likely to use.' },
  ],
};

// ── Course 2 ─────────────────────────────────────────────────────────────

const PROJECT_PLANNING: Course = {
  id: 'if-2',
  num: 2,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Project Planning + Milestones',
  promise:
    'Turn a vague assignment into a plan with dates, and notice you are behind while there is still time to act.',
  about: [
    'A placement project usually arrives as a sentence. "Have a look at our volunteer retention." What happens next decides whether there is anything to show at the end.',
    'This course is about converting that sentence into something with a shape: a question you are answering, the smallest useful version of it, milestones that are evidence rather than effort, and a weekly check that surfaces slippage early.',
  ],
  objectives: [
    'Convert an open assignment into a single answerable question.',
    'Define the smallest useful version of the work and deliver that first.',
    'Write milestones as evidence produced rather than time spent.',
    'Detect slippage in week two rather than week eight.',
  ],
  minutes: 24,
  prerequisites: 'None. Course 1 first is recommended.',
  whoFor: 'Interns and fellows holding a project, and anyone who has been handed an assignment as a sentence.',
  lessons: [
    {
      id: 'if-2-l1',
      title: 'From a sentence to a question',
      summary: 'The most useful hour of a project is the one that decides what it is asking.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'An assignment given as a topic can be worked on forever without ever being finished, because a topic has no answer. A question has an answer, and the moment you have one you can tell what is in scope.',
        ] },
        { kind: 'example', title: 'Three conversions', text: [
          'Topic: "Have a look at our volunteer retention." Question: "Of the volunteers who signed up in the last six months and never took a second shift, what happened between the first shift and the drop off?"',
          'Topic: "Help with our social media." Question: "Which three posts in the last year produced the most enquiries, and what did they have in common?"',
          'Topic: "Look into the referral backlog." Question: "How many referrals are older than seventy two hours right now, and what do the oldest twenty have in common?"',
          'Each question is narrower than the topic and each one can be finished. Narrower is the feature, not a compromise.',
        ] },
        { kind: 'concept', title: 'Confirm it, do not assume it', text: [
          'Take your question back to your supervisor in the first week. "Here is what I think you are asking. Have I got it right?"',
          'They will frequently adjust it, and an adjustment in week one costs nothing. The same adjustment in week six costs the five weeks in between.',
        ] },
        { kind: 'check', check: {
          id: 'if-2-c1',
          q: 'Why convert an assigned topic into a single question before starting?',
          options: [
            'It makes the work sound more rigorous',
            'A topic has no answer, so it can be worked on indefinitely without being finished, while a question defines what is in scope',
            'Supervisors prefer questions',
            'It shortens the project',
          ],
          answer: 1,
          rationale: 'The question is what makes completion possible and scope decidable. Without one, effort accumulates and nothing concludes, which is how a term ends with notes rather than a deliverable.',
        } },
      ],
    },
    {
      id: 'if-2-l2',
      title: 'The smallest useful version',
      summary: 'Deliver something complete in week three, then improve it.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Most placement projects that produce nothing were planned as one large thing due at the end. The end arrives, the thing is eighty per cent finished, and eighty per cent of a report is worth nothing to anybody.',
          'The alternative is to identify the smallest version that would be genuinely useful on its own, deliver that early, and then extend it. A three page memo answering the question with the data you already have beats a thirty page analysis that does not exist.',
        ] },
        { kind: 'steps', title: 'How to find it', items: [
          { label: 'Ask what decision this informs', text: 'If somebody is going to do something differently because of your work, the smallest useful version is whatever they need to make that decision. Everything else is enrichment.' },
          { label: 'Cut the scope, not the finish', text: 'Halve the number of cases, the time period or the questions. Do not halve the quality of the writing or leave the conclusion out. A short finished thing is a deliverable; a long unfinished thing is a draft.' },
          { label: 'Deliver it and say it is version one', text: 'Naming it version one invites the correction you want, and makes the extension a plan rather than a rescue.' },
        ] },
        { kind: 'fieldnote', title: 'What supervisors actually remember', text: [
          'At the end of a term a supervisor remembers whether things arrived. An intern who delivered three modest complete pieces is remembered as reliable; one who spent twelve weeks on an ambitious piece that arrived in the final week, however good, is remembered as a risk.',
        ] },
        { kind: 'check', check: {
          id: 'if-2-c2',
          q: 'When cutting a project down to its smallest useful version, what should not be cut?',
          options: [
            'The number of cases examined',
            'The time period covered',
            'The conclusion and the finish',
            'The number of questions asked',
          ],
          answer: 2,
          rationale: 'Scope can shrink without harm; completeness cannot. A short piece with a stated conclusion is a deliverable, while a broad piece with the conclusion missing is a draft, and drafts are worth nothing at the end of a term.',
        } },
      ],
    },
    {
      id: 'if-2-l3',
      title: 'Milestones that are evidence',
      summary: 'A milestone somebody else could verify, not a description of effort.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'A milestone is something that either exists or does not. "Research phase complete" is not a milestone, because nobody including you can tell whether it is true.',
        ] },
        { kind: 'steps', title: 'Rewritten', items: [
          { label: 'Not: research phase complete', text: 'But: a one page list of the twenty most recent drop-offs with the date of their first and last shift, in the shared folder.' },
          { label: 'Not: draft in progress', text: 'But: version one of the memo, three pages, with a conclusion, sent to my supervisor.' },
          { label: 'Not: stakeholder engagement', text: 'But: four conversations held, with notes, and the two things that came up in more than one of them written down.' },
        ] },
        { kind: 'why', text: [
          'The test is whether somebody who is not you could look and say yes or no. That is also what makes a midpoint review a real review rather than a conversation about how it is going.',
        ] },
        { kind: 'case', title: 'A midpoint review with nothing to review', scenario: true, text: [
          'A fellow arrives at her week six review with three milestones marked complete: literature reviewed, stakeholders engaged, analysis underway. Her supervisor asks to see the analysis. There is a spreadsheet with four tabs, none of which answers the question, because the question was never written down and the tabs each explore a different reading of it.',
          'Nobody was dishonest. Every milestone described real effort and each one was accurate about the effort. What none of them could do was fail, and a milestone that cannot fail cannot warn anybody.',
          'The same six weeks with verifiable milestones would have failed at week two, when the first list did not exist, and there were four weeks available to fix it.',
        ] },
        { kind: 'check', check: {
          id: 'if-2-c3',
          q: 'Which of these is a usable milestone?',
          options: [
            'Analysis substantially complete',
            'Made good progress on the data',
            'A one page list of the twenty most recent drop-offs, with first and last shift dates, in the shared folder',
            'Deepened understanding of the retention problem',
          ],
          answer: 2,
          rationale: 'It either exists or it does not, and somebody who is not the author can check. The other three describe effort, which cannot be verified and therefore cannot show slippage.',
        } },
      ],
    },
    {
      id: 'if-2-l4',
      title: 'Noticing you are behind',
      summary: 'A weekly five minute check, and what to do with what it tells you.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Slippage is almost never discovered. It is noticed, ignored for three weeks, and then discovered by somebody else. The weekly check exists to make it undeniable early.',
        ] },
        { kind: 'steps', title: 'Five minutes, once a week', items: [
          { label: 'What was due this week', text: 'From your own milestone list, not from memory.' },
          { label: 'What exists', text: 'Not what is in progress. What exists.' },
          { label: 'The gap, in days', text: 'Put a number on it. "A bit behind" survives indefinitely; "nine days behind" does not.' },
          { label: 'What you will change', text: 'Cut scope, ask for something, or move the date with your supervisor. Working harder is not a change and is the usual answer for the three weeks before somebody else notices.' },
        ] },
        { kind: 'concept', title: 'Telling your supervisor', text: [
          'Bring the number and the proposal together. "I am nine days behind on the memo. I can either drop the second data source and hold the date, or keep it and deliver a week later. I would drop the source."',
          'A supervisor who is told this in week four has a choice. One who finds out in week eleven has a problem, and the difference between the two is entirely about when.',
        ] },
        { kind: 'myths', items: [
          { myth: 'Telling my supervisor I am behind makes me look incapable.', reality: 'It makes you look like somebody who tracks their own work. What looks incapable is a deadline arriving with nothing behind it, and by then the supervisor has also lost the ability to help.' },
          { myth: 'I should have a solution before I raise it.', reality: 'Bring an option, not a solution. The trade between scope and time is the supervisor\'s to make, because they know what the work is for and you may not.' },
        ] },
        { kind: 'takeaways', items: [
          'Convert the topic to a question and confirm it in week one.',
          'Deliver the smallest complete version early, then extend it.',
          'Write milestones somebody else could verify.',
          'Put a number on the gap weekly, and bring a proposal with it.',
        ] },
      ],
    },
  ],
  checks: [
    {
      id: 'if-2-x1',
      q: 'An intern is two weeks behind and decides to work extra hours to catch up, without telling anybody. What is wrong with this?',
      options: [
        'Nothing, provided the work is delivered on time',
        'Working harder is not a change of plan, and the supervisor loses the chance to reduce scope or move the date while that is still cheap',
        'The intern should not work extra hours',
        'The intern should escalate to the programme coordinator',
      ],
      answer: 1,
      why: 'Extra effort is the default answer for the weeks before somebody else notices, and it usually fails. The supervisor is the person who can trade scope against time, and they can only do it while there is time left to trade.',
    },
  ],
  artifact: {
    id: 'if-2-plan',
    title: 'Your project plan',
    minutes: 8,
    purpose:
      'The question, the smallest useful version, and milestones written as evidence. This is the document a midpoint review can actually be held against.',
    fields: [
      { id: 'question', label: 'The question', help: 'One question with an answer. Narrow enough to finish.', multiline: true },
      { id: 'smallest', label: 'The smallest useful version', help: 'What you could deliver complete within three weeks that somebody would use.', multiline: true },
      { id: 'milestones', label: 'Four milestones', help: 'For each: what will exist, and the date. Somebody who is not you must be able to check it.', multiline: true, repeat: 4, repeatLabel: 'Milestone' },
      { id: 'check', label: 'Your weekly check', help: 'Which day, and where you will write the number down.', multiline: false },
    ],
  },
  furtherLearning: [
    { name: 'National Association of Colleges and Employers, Career Readiness Competencies', use: 'Critical thinking and professionalism as defined competencies, which is what a project plan evidences.' },
    { name: 'U.S. Government Accountability Office, project and programme management guidance', use: 'Public-sector practice on milestones as verifiable deliverables rather than descriptions of activity.' },
  ],
};

// ── Course 3 ─────────────────────────────────────────────────────────────

const ETHICS_AND_CONFIDENTIALITY: Course = {
  id: 'if-3',
  num: 3,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Ethics, Confidentiality + Organizational Responsibility',
  promise:
    'Know what you may look at, what you may repeat, and what to do the moment you realise you have seen something you should not have.',
  about: [
    'A placement gives a learner access before it gives them training. That is the ordinary condition of an internship and it is why this course exists early in the pathway rather than late.',
    'It is written around three rules that hold in a health organisation, a school, a council office or a law firm: access is not permission, the default is that you do not repeat it, and a mistake reported immediately is a small problem.',
  ],
  objectives: [
    'Apply the rule that being able to see something is not authorisation to look at it.',
    'Recognise the ways confidential information leaks without anybody intending it.',
    'Report your own error immediately, and know why the delay is the damaging part.',
    'Name what you may and may not say about the placement publicly.',
  ],
  minutes: 26,
  prerequisites:
    'None. Any placement involving health records, minors or sensitive systems carries additional HMC requirements assigned by role, and those are separate from this course.',
  whoFor:
    'Every intern and fellow, before their first day in a system that holds information about real people.',
  lessons: [
    {
      id: 'if-3-l1',
      title: 'Access is not permission',
      summary: 'The most common breach is curiosity by somebody with a valid login.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'A placement will usually give you more access than your work requires, because access is granted in blocks and roles are approximate. What you can open and what you are authorised to open are two different sets, and the difference is where almost every ordinary breach happens.',
          'The rule is that you look at what you need for the task in front of you, and nothing else. Not the neighbour who came to a clinic. Not the person you recognise on a list. Not yourself, in a records system, out of curiosity.',
        ] },
        { kind: 'vocab', items: [
          { term: 'Minimum necessary', plain: 'Looking at only the information you need for the specific task, even when your access would let you see much more.' },
          { term: 'Audit log', plain: 'The record of who looked at what and when. Most systems that hold information about people keep one, and it is usually reviewed only after a suspicion, which is a bad moment to be in it.' },
        ] },
        { kind: 'case', title: 'The ordinary version', scenario: true, text: [
          'An intern is cleaning up a spreadsheet of event attendance and recognises a name from her old school. She opens the record to see whether it is the same person. It is. She closes it, tells nobody, and does nothing with what she saw.',
          'Nothing was repeated, nothing was misused, and it is still a breach. The system recorded that a person with no work-related reason opened that record, and the organisation cannot distinguish her curiosity from something worse. That is the reason the rule is about looking rather than about repeating.',
        ] },
        { kind: 'check', check: {
          id: 'if-3-c1',
          q: 'An intern with valid system access opens a record out of curiosity, sees nothing remarkable, and tells no one. How should this be understood?',
          options: [
            'Not a breach, since nothing was disclosed or misused',
            'A breach, because authorisation covers the task and not the access, and the access log cannot distinguish curiosity from anything worse',
            'A breach only if the person is identifiable',
            'A minor matter to mention if it comes up',
          ],
          answer: 1,
          rationale: 'The rule attaches to looking, not to repeating. The organisation has a record of an unexplained access by somebody with no work reason for it, and from the outside that is indistinguishable from a serious event.',
        } },
      ],
    },
    {
      id: 'if-3-l2',
      title: 'How it leaks',
      summary: 'Five routes, none of which involve anybody deciding to disclose anything.',
      minutes: 5,
      blocks: [
        { kind: 'list', title: 'The ordinary routes', items: [
          'The anecdote with the details left in. A story told to a friend, with the age, the neighbourhood and the condition, about somebody who can be identified by any of the three together.',
          'The screenshot. Sent to ask a colleague a question, with a name still in the corner, into a channel that is not the one you thought.',
          'The document taken home. Saved to a personal drive to work on at the weekend, and still there two years later.',
          'The reply to all. A thread that acquired an external recipient four messages ago.',
          'The public post about the placement. Written with warmth about a moving day at work, describing one person closely enough that their own family would know them.',
        ] },
        { kind: 'concept', title: 'The identifiability test', text: [
          'Before you repeat anything about a person, ask whether somebody who knows them would recognise them from what you are about to say. Not whether you named them. A neighbourhood, an age, a job and a condition together identify a person as surely as a name does.',
          'If the answer is yes, or you are unsure, remove details until the answer is clearly no, or do not tell it.',
        ] },
        { kind: 'check', check: {
          id: 'if-3-c2',
          q: 'An intern describes a case publicly without naming anybody, but includes the neighbourhood, the person\'s approximate age, their occupation and their condition. Why is this still a problem?',
          options: [
            'Because internal information should never be discussed publicly in any form',
            'Because a combination of details identifies a person as effectively as a name to anybody who knows them',
            'Because the organisation has not approved the post',
            'It is not a problem, since no name was used',
          ],
          answer: 1,
          rationale: 'Identifiability is not about names. Four ordinary details in combination are usually enough for the person\'s own circle to recognise them, which is the audience that matters most to them.',
        } },
        { kind: 'tryit', title: 'Check your own', text: [
          'Think of something you have already told somebody about a placement, a job or a shift.',
          'Apply the test. Most people find one story that passes and one that does not, and the one that does not is usually the one they were most pleased to tell.',
        ] },
      ],
    },
    {
      id: 'if-3-l3',
      title: 'When you have made a mistake',
      summary: 'The delay is the damaging part, and it is the part you control.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'You will make one of these. Sent to the wrong person, left a document open, said something in a room you had not checked. What happens next is almost entirely up to you, and the variable that matters is time.',
          'A misdirected email reported in ten minutes can often be recalled, the recipient asked to delete it, and the whole thing closed the same day. The same email reported in a week may be a notifiable incident, and the reason is the delay rather than the error.',
        ] },
        { kind: 'steps', title: 'Immediately', items: [
          { label: 'Tell your supervisor now', text: 'Before you have worked out how bad it is, and before you have decided whether it matters. Assessing it is their job and they need the time.' },
          { label: 'Say exactly what happened', text: 'What went where, to whom, when, and what it contained. Not a softened version. A softened version leads to the wrong response being chosen.' },
          { label: 'Do not try to fix it quietly', text: 'Deleting, recalling or asking the recipient yourself before telling anybody removes information the organisation needs and turns an error into something that looks like concealment.' },
          { label: 'Write it down afterwards', text: 'What happened and what was done. You will be glad of it, and so will the next person who does the same thing.' },
        ] },
        { kind: 'myths', items: [
          { myth: 'Reporting it will end my placement.', reality: 'Prompt self-reporting of an ordinary error is treated as competence in every organisation worth being in. Concealment discovered later is the thing that ends placements.' },
          { myth: 'I should check how serious it is first.', reality: 'You are not the person who assesses that, and the checking is what consumes the window in which the error was still easy to contain.' },
        ] },
        { kind: 'check', check: {
          id: 'if-3-c3',
          q: 'An intern sends an internal document to the wrong external address. What should happen first?',
          options: [
            'Recall the message and check whether it was opened, then decide whether to report it',
            'Tell the supervisor immediately, with exactly what was sent, to whom, and when',
            'Wait to see whether the recipient responds',
            'Email the recipient asking them to delete it, then move on',
          ],
          answer: 1,
          rationale: 'The window in which this is containable is measured in minutes, and assessing severity is not the intern\'s job. Handling it privately first burns that window and makes an ordinary error look like concealment.',
        } },
      ],
    },
    {
      id: 'if-3-l4',
      title: 'What you may say about the placement',
      summary: 'You are a temporary representative of the organisation, and that has a shape.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'While you are there, people outside will read what you say as coming from the organisation, whether or not you intended it that way. That does not mean silence. It means knowing the three categories.',
        ] },
        { kind: 'steps', title: 'Three categories', items: [
          { label: 'Yours to say', text: 'What you are learning, what you are working on in general terms, what you find interesting about the field. Your own experience is yours.' },
          { label: 'Not yours to say', text: 'Anything about an identifiable person. Internal disagreements, funding difficulties, staffing problems. Anything a partner organisation told you in confidence. Numbers that have not been published.' },
          { label: 'Not yours to say yet', text: 'Work in progress, a finding before the organisation has seen it, a plan before it is announced. Not secret, just not yours to time.' },
        ] },
        { kind: 'fieldnote', title: 'Speaking for it', text: [
          'If a journalist, a partner, a funder or a member of the public asks you something you are not sure you should answer, the correct answer is available and short: "I am on a placement here, so let me put you to the right person." Nobody has ever thought less of that reply.',
        ] },
        { kind: 'check', check: {
          id: 'if-3-c4',
          q: 'A partner organisation asks an intern how a programme is performing. The intern has seen the numbers, which are not published. What should they do?',
          options: [
            'Share them, since the partner is entitled to know',
            'Give an approximate version to be helpful without being specific',
            'Say they are on a placement and refer the question to the right person',
            'Say they do not know',
          ],
          answer: 2,
          rationale: 'Unpublished numbers are not the intern\'s to time or to frame, and an approximation is worse than either silence or the real figure because it may be repeated as authoritative. Referring is short, accurate and costs nothing.',
          distractors: 'Saying they do not know is untrue, and untruths from a placement are how an organisation loses a partner\'s trust in it.',
        } },
        { kind: 'takeaways', items: [
          'Access is not permission. Look at what the task needs and nothing else.',
          'Identifiability is not about names. Four ordinary details together are enough.',
          'Report your own error before assessing it. The delay is the damaging part.',
          'Your experience is yours to talk about. The organisation\'s information is not.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'if-3-boundaries',
    title: 'Your access and disclosure boundaries',
    minutes: 6,
    purpose:
      'Written before your first day, this is the page you can check in ten seconds instead of guessing in the moment.',
    fields: [
      { id: 'access', label: 'What your task actually needs', help: 'Which systems and which records, for the work you have been given. Then note what your access would also let you open.', multiline: true },
      { id: 'report', label: 'Who you tell about a mistake', help: 'The named person, and how you reach them out of hours.', multiline: true },
      { id: 'story', label: 'The story you will not tell', help: 'Apply the identifiability test to something you have already told somebody. Write what you would remove.', multiline: true },
      { id: 'refer', label: 'Your referral sentence', help: 'The words you will use when asked something that is not yours to answer.', multiline: false },
    ],
  },
  furtherLearning: [
    { name: 'U.S. Department of Health and Human Services, Office for Civil Rights, HIPAA Privacy Rule', use: 'The minimum necessary standard and what counts as identifiable health information, for any placement touching health records.' },
    { name: 'California Office of the Attorney General, privacy enforcement', use: 'State privacy expectations and how breaches are treated in California.' },
  ],
};

// ── Course 4 ─────────────────────────────────────────────────────────────

const PORTFOLIO_AND_IMPACT: Course = {
  id: 'if-4',
  num: 4,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Portfolio + Impact Documentation',
  promise:
    'Leave with evidence of what you did that somebody who was not there can evaluate.',
  about: [
    'The pathway requires an approved portfolio artifact, and most learners assemble it in the final week from memory. What they produce is a description of activity, because the evidence that would have supported a claim was not kept.',
    'This course is about collecting as you go and writing claims that survive a stranger reading them.',
  ],
  objectives: [
    'Distinguish a claim about impact from a description of activity.',
    'Collect the evidence for a claim while it still exists.',
    'Write a portfolio entry in a form a reviewer can evaluate.',
    'Describe work accurately, including your own part in it.',
  ],
  minutes: 24,
  prerequisites: 'None. Start it in week one, not week eleven.',
  whoFor: 'Interns and fellows, and anyone who will be asked what they actually did.',
  lessons: [
    {
      id: 'if-4-l1',
      title: 'Activity is not impact',
      summary: 'What changed, not what you spent time on.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'Hours are not an outcome. "Completed a 240 hour fellowship" tells a reader how long you were present and nothing about what happened while you were.',
          'An impact claim names what is different now. It does not have to be large. Most real ones are not.',
        ] },
        { kind: 'example', title: 'Rewritten', text: [
          'Activity: "Supported the volunteer onboarding process." Impact: "Rewrote the onboarding checklist after sitting through four onboardings and finding that three of the eleven steps were being skipped every time. The revised version is now the one in use."',
          'Activity: "Assisted with data entry for the resource directory." Impact: "Called 60 of the directory\'s 207 organisations to confirm their phone numbers and found 11 that could not be reached. All 11 are now flagged for follow up."',
          'Activity: "Attended weekly team meetings." Impact: not everything is impact, and this one is not. Leave it out rather than inflate it.',
        ] },
        { kind: 'why', text: [
          'The second version is also more use to you. It gives an interviewer something to ask about, and a reference something specific to confirm.',
        ] },
        { kind: 'steps', title: 'Four things that count as impact, none of them large', items: [
          { label: 'Something exists that did not', text: 'A checklist, a script, a list, a template, a set of confirmed phone numbers. Small artifacts that are still in use after you leave are the most durable evidence a placement produces.' },
          { label: 'Something is now known that was not', text: 'A count nobody had, a pattern nobody had looked for, a reason behind a problem people had been guessing about.' },
          { label: 'Something takes less time or goes wrong less often', text: 'A process with a step removed, a form that stopped producing errors, a handoff that stopped being missed.' },
          { label: 'Somebody was reached who would not have been', text: 'In community work this is frequently the real one, and it is frequently the hardest to evidence. A number with its date and source is what makes it a claim rather than an impression.' },
        ] },
        { kind: 'check', check: {
          id: 'if-4-c1',
          q: 'What makes an impact claim different from a description of activity?',
          options: [
            'Impact claims are longer and more detailed',
            'Impact claims name what is different now, rather than what the person spent time on',
            'Impact claims use numbers',
            'Impact claims are written by the supervisor',
          ],
          answer: 1,
          rationale: 'The distinction is what changed, not length or the presence of a figure. Numbers help when they exist, and a claim with none can still name a state that is now different.',
        } },
      ],
    },
    {
      id: 'if-4-l2',
      title: 'Collect it while it exists',
      summary: 'Most portfolio evidence is gone by the final week.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'The evidence for your best claim is usually a number you saw once, a document you edited, or an email somebody sent you. In week eleven the number has changed, the document has been revised by three people and the email is buried.',
        ] },
        { kind: 'steps', title: 'A folder and ten minutes a week', items: [
          { label: 'The before state', text: 'Whatever you are about to change, record what it looks like now. A screenshot, a copy of the old document, the count before you started. This is the single most commonly missing piece.' },
          { label: 'Your own version', text: 'Keep a copy of what you produced, dated, before anybody else edits it. Not to claim sole credit, but so that your part is identifiable.' },
          { label: 'What people said', text: 'When somebody writes "this is much clearer, thanks", keep it. Two sentences from the person who used your work is stronger evidence than a paragraph of your own description.' },
          { label: 'The number, with its date', text: 'Any figure you cite needs the date you took it and where from, or you will not be able to defend it and should not use it.' },
        ] },
        { kind: 'concept', title: 'What not to keep', text: [
          'Nothing identifying a person. Redact before you save, not later, and never save a record, a screenshot with a name in it, or a document about an individual to a personal folder.',
          'If your best piece of work cannot be evidenced without identifiable information, describe it in general terms and let your supervisor confirm it. A reference that says "she rebuilt our intake process" from a named supervisor is worth more than a document you should not be holding.',
        ] },
        { kind: 'check', check: {
          id: 'if-4-c2',
          q: 'Which piece of portfolio evidence is most commonly missing by the end of a placement?',
          options: [
            'A copy of the final deliverable',
            'The record of what the situation looked like before the work was done',
            'The supervisor\'s contact details',
            'A description of the tasks performed',
          ],
          answer: 1,
          rationale: 'The before state is the half of an improvement claim that stops existing the moment the work succeeds. Nobody thinks to capture it in week two, and it cannot be reconstructed in week eleven.',
        } },
      ],
    },
    {
      id: 'if-4-l3',
      title: 'Writing it so somebody can evaluate it',
      summary: 'Four sentences, and the honesty about your own part that makes them credible.',
      minutes: 6,
      blocks: [
        { kind: 'steps', title: 'The four sentences', items: [
          { label: 'The situation', text: 'What was true before, with the number or the state, and where you got it.' },
          { label: 'What you did', text: 'Your own action, in the first person, distinguishing what you did from what the team did.' },
          { label: 'What changed', text: 'The state now, and how you know.' },
          { label: 'What you would do differently', text: 'One sentence. A reviewer reads this as judgement rather than as weakness, and its absence reads as somebody who has not thought about it.' },
        ] },
        { kind: 'concept', title: 'Accuracy about your own part', text: [
          'Say observed when you observed, assisted when you assisted, and led when you led. This is a professional habit and the field cares about it more than almost anything else at this stage.',
          'The reason is practical rather than moral. Overstatement is discovered in the follow-up question, and the discovery costs you the credibility of everything else on the page. A modest accurate claim survives being asked about.',
        ] },
        { kind: 'myths', items: [
          { myth: 'A portfolio should show only successes.', reality: 'A reviewer is assessing judgement. A piece of work that did not achieve what it aimed at, described accurately with what you learned, evidences more than a list of things that went well.' },
          { myth: 'Modest claims will be overlooked.', reality: 'Specific claims are remembered. It is the inflated ones that are forgotten, because they sound like everybody else\'s.' },
        ] },
        { kind: 'check', check: {
          id: 'if-4-c3',
          q: 'Why does accurately distinguishing observed, assisted and led matter in a portfolio?',
          options: [
            'Because programmes require standard language',
            'Because overstatement is discovered in the follow-up question, and the discovery discredits everything else on the page',
            'Because leading is valued more highly',
            'Because supervisors check every entry',
          ],
          answer: 1,
          rationale: 'The cost of overstatement is not the sentence itself but what it does to the credibility of the rest. A modest accurate claim survives being asked about, which is the only test that matters.',
        } },
        { kind: 'fieldnote', title: 'The follow-up question', text: [
          'Everything you write will be read by somebody who may ask one question about it. Before you submit an entry, ask yourself what that question would be and whether you can answer it.',
          'For "I improved the onboarding process" the question is "how do you know it improved?" If the answer is that it felt better, rewrite the claim to what you can actually support. That takes ten seconds per entry and is the whole of the difference between a portfolio that survives an interview and one that does not.',
        ] },
        { kind: 'takeaways', items: [
          'Impact names what is different now. Hours are not an outcome.',
          'Capture the before state in week two. It stops existing when the work succeeds.',
          'Situation, action, change, and what you would do differently.',
          'Observed, assisted, led. Say the accurate one.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'if-4-portfolio',
    title: 'Two portfolio entries',
    minutes: 8,
    purpose:
      'The pathway requires an approved portfolio artifact. Two entries written in the four sentence form, with the evidence named, is what an approval can be given against.',
    fields: [
      { id: 'entries', label: 'Two entries', help: 'For each: the situation with its source, what you did, what changed and how you know, and one thing you would do differently.', multiline: true, repeat: 2, repeatLabel: 'Entry' },
      { id: 'evidence', label: 'Where the evidence is', help: 'For each entry, what you kept and where. Note anything you had to describe in general terms because it could not be kept.', multiline: true },
      { id: 'role', label: 'Your part, accurately', help: 'For each entry: observed, assisted, or led. If it was mixed, say which parts were which.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'National Association of Colleges and Employers, Career Readiness Competencies', use: 'The competency language a portfolio entry can be written against, and what employers say they are looking for evidence of.' },
    { name: 'Association of American Medical Colleges, guidance on describing experiences in applications', use: 'Why accurate description of your own role matters in a health-professions application, and how overstatement is detected.' },
  ],
};

export const INTERNSHIP_COURSES: Course[] = [
  PROFESSIONAL_ORIENTATION,
  PROJECT_PLANNING,
  ETHICS_AND_CONFIDENTIALITY,
  PORTFOLIO_AND_IMPACT,
];
