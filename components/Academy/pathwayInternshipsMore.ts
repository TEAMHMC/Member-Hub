// Internships + Fellowships, courses 5 to 11: research and evidence use, communication and documentation,
// team collaboration, professional feedback, and the three events that bracket a term: the midpoint
// review, the capstone presentation, and the final evaluation. The first four are self-paced. The last
// three are done with a supervisor, and the lessons tell a participant what to expect and how to prepare.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const IF_RESEARCH: Course = {
  id: 'if-5', num: 5, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Research + Evidence Use',
  promise: 'Find a reliable source, judge how strong it is, and use it in your project without overstating what it shows.',
  about: [
    'Most intern projects need an answer to a question: what works, how many, who is affected. The answer should rest on sources you can name and defend.',
    'This course covers finding sources, judging them, and writing what they say honestly.',
  ],
  objectives: [
    'Find reliable sources for a health or social services question.',
    'Judge a source by who wrote it, how, and when.',
    'Tell strong evidence from weak.',
    'Summarize a source accurately and cite it.',
  ],
  minutes: 16,
  prerequisites: 'Professional Orientation + Expectations first is recommended.',
  whoFor: 'Interns and fellows who will use research in a project or a report.',
  lessons: [
    {
      id: 'if-5-l1', title: 'Where to look', summary: 'Sources that are worth your time.', minutes: 4,
      blocks: [
        { kind: 'steps', title: 'Reliable starting points', items: [
          { label: 'Government health agencies', text: 'CDC, the National Institutes of Health, the California Department of Public Health, and the Los Angeles County Department of Public Health publish data and guidance.' },
          { label: 'Peer-reviewed journals', text: 'PubMed, run by the National Library of Medicine, searches articles that experts reviewed before publication.' },
          { label: 'Systematic reviews', text: 'The Community Guide and the Cochrane Library summarize many studies and say how strong the evidence is.' },
          { label: 'Your supervisor and a librarian', text: 'Ask. A librarian can save hours.' },
        ] },
        { kind: 'check', check: { id: 'if-5-c1', q: 'Which is the best place to start for a question about what works?', options: ['A social media post', 'A systematic review such as The Community Guide', 'A blog', 'An advertisement'], answer: 1, rationale: 'Systematic reviews gather and weigh many studies, so they are a strong starting point.', distractors: 'The others have no review process and may be selling something.' } },
        ev(['National Library of Medicine, PubMed: searching peer-reviewed biomedical literature.', 'The Community Guide (Community Preventive Services Task Force): reviews of what works in public health.', 'Greenhalgh, How to Read a Paper (6th ed., 2019): finding and appraising evidence.']),
      ],
    },
    {
      id: 'if-5-l2', title: 'Judging a source', summary: 'Who, how, and when.', minutes: 4,
      blocks: [
        { kind: 'list', title: 'Ask five questions', items: [
          'Currency: when was it published or updated, and does the topic change quickly?',
          'Relevance: does it fit your question and your population?',
          'Authority: who wrote it, and what are their credentials?',
          'Accuracy: is it supported by evidence and reviewed by others?',
          'Purpose: why does it exist? Is anyone paying for a particular answer?',
        ] },
        { kind: 'prose', text: [
          'This is the CRAAP test, developed at California State University, Chico. It is a checklist, not a score. A source can be old and still the best available. Say so.',
        ] },
        { kind: 'check', check: { id: 'if-5-c2', q: 'You find a statistic on a company\'s page selling a product. What should you do?', options: ['Use it', 'Check the original source and the company\'s purpose', 'Ignore it entirely', 'Round it'], answer: 1, rationale: 'Purpose matters. Trace the number to its original source before you use it.', distractors: 'Using it unchecked risks repeating a biased claim.' } },
        ev(['Meriam Library, California State University, Chico, "Evaluating Information: The CRAAP Test."', 'MedlinePlus, Evaluating Health Information: who runs the site, where the information comes from, and how recent it is.', 'Greenhalgh, How to Read a Paper (2019).']),
      ],
    },
    {
      id: 'if-5-l3', title: 'Strong and weak evidence', summary: 'What a study can and cannot show.', minutes: 4,
      blocks: [
        { kind: 'steps', title: 'A rough ladder', items: [
          { label: 'Systematic reviews of many studies', text: 'Usually the strongest summary.' },
          { label: 'Randomized controlled trials', text: 'Compare groups that differ only by chance, so they are strong for cause and effect.' },
          { label: 'Cohort and case-control studies', text: 'Follow or compare groups, and can show links but are open to other explanations.' },
          { label: 'Case reports and expert opinion', text: 'Useful for ideas, weak for proof.' },
        ] },
        { kind: 'prose', text: [
          'Match your words to the evidence. "Was associated with" is not "caused." One study is not "proved." A study of adults does not tell you about teenagers.',
        ] },
        { kind: 'check', check: { id: 'if-5-c3', q: 'A single small study finds a link. How should you write it?', options: ['"This proves it."', '"One small study found a link; more research is needed."', '"Everyone knows this."', '"It causes the outcome."'], answer: 1, rationale: 'State what the evidence shows and no more.', distractors: 'The other options overstate one study.' } },
        ev(['Greenhalgh, How to Read a Paper (2019).', 'CDC, Evidence-based public health: types of study design.', 'The Community Guide: how recommendations rate the strength of evidence.']),
      ],
    },
    {
      id: 'if-5-l4', title: 'A worked example', summary: 'From a question to a sentence you can defend.', minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Question from a supervisor: "Do community health workers help people with diabetes?" You search The Community Guide and find a recommendation based on a review of many studies.',
        ] },
        { kind: 'steps', title: 'What you write', items: [
          { label: 'The claim', text: '"The Community Preventive Services Task Force recommends community health worker interventions for diabetes prevention and management, based on a review of studies."' },
          { label: 'The limits', text: '"The evidence comes from varied programs, so results may differ in our setting."' },
          { label: 'The citation', text: 'The Community Guide page, with the date you read it.' },
        ] },
        { kind: 'check', check: { id: 'if-5-c4', q: 'Why add the limits sentence?', options: ['To lengthen the report', 'To keep the claim honest about what the evidence covers', 'To avoid the claim', 'It is a rule'], answer: 1, rationale: 'Naming limits keeps your claim accurate and builds trust in your work.', distractors: 'The aim is honesty, not length or avoidance.' } },
        ev(['The Community Guide: Community Health Workers, task force findings.', 'CDC, Framework for Program Evaluation in Public Health: credible evidence.', 'Greenhalgh, How to Read a Paper (2019).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'The Community Guide', use: 'Reviews of what works in public health.', url: 'https://thecommunityguide.org' },
    { name: 'PubMed', use: 'Search peer-reviewed biomedical articles.', url: 'https://pubmed.ncbi.nlm.nih.gov' },
    { name: 'MedlinePlus: Evaluating Health Information', use: 'A short guide to judging health sources.', url: 'https://medlineplus.gov' },
  ],
};

export const IF_COMMUNICATION: Course = {
  id: 'if-6', num: 6, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Communication + Documentation',
  promise: 'Write and speak clearly at work: emails people answer, updates they can use, and notes someone else can follow.',
  about: [
    'Much of an internship is communication. A clear email, a short status update, and a good set of meeting notes make you easy to work with.',
    'This course covers professional email, updates, and notes.',
  ],
  objectives: [
    'Write an email with a clear ask and a clear deadline.',
    'Give a short status update in a standard format.',
    'Take meeting notes that capture decisions and actions.',
    'Use plain language.',
  ],
  minutes: 12,
  prerequisites: 'Professional Orientation + Expectations first is recommended.',
  whoFor: 'Interns and fellows.',
  lessons: [
    {
      id: 'if-6-l1', title: 'Email that gets answered', summary: 'Subject, ask, deadline.', minutes: 3,
      blocks: [
        { kind: 'steps', title: 'A good work email', items: [
          { label: 'A specific subject', text: '"Question: review of outreach flyer by Thursday" instead of "Hello."' },
          { label: 'The ask in the first lines', text: 'Say what you need and by when.' },
          { label: 'Short paragraphs and a close', text: 'Give only the context needed, and thank the reader.' },
          { label: 'Check before you send', text: 'Read it as the recipient. Is the ask clear? Are attachments attached?' },
        ] },
        { kind: 'check', check: { id: 'if-6-c1', q: 'Which subject line is best?', options: ['Hi', 'Question: review of outreach flyer by Thursday', 'Urgent!!!', 'Flyer'], answer: 1, rationale: 'It states the topic, the ask, and the deadline.', distractors: 'The others give no ask or deadline.' } },
        ev(['plainlanguage.gov, Federal Plain Language Guidelines: lead with the main point and write short sentences.', 'U.S. Plain Writing Act of 2010: clear communication for the public.', 'Haig, Sutton, and Whittington, "SBAR: A Shared Mental Model for Improving Communication Between Clinicians," Joint Commission Journal on Quality and Patient Safety (2006).']),
      ],
    },
    {
      id: 'if-6-l2', title: 'Status updates', summary: 'A short format a supervisor can use.', minutes: 3,
      blocks: [
        { kind: 'steps', title: 'Four lines', items: [
          { label: 'Done', text: 'What you finished since the last update.' },
          { label: 'Next', text: 'What you will do before the next one.' },
          { label: 'Blocked', text: 'Anything stopping you, and what you need.' },
          { label: 'Question', text: 'One decision you need from your supervisor.' },
        ] },
        { kind: 'prose', text: [
          'The SBAR format, used in health care, works the same way: situation, background, assessment, recommendation. Give the situation first and end with what you propose.',
        ] },
        { kind: 'check', check: { id: 'if-6-c2', q: 'What should an update include when you are stuck?', options: ['Nothing', 'What is blocked and what you need', 'An apology', 'A long story'], answer: 1, rationale: 'Naming the blocker and the need lets your supervisor help quickly.', distractors: 'Silence or long stories delay help.' } },
        ev(['Haig et al. (2006): SBAR.', 'plainlanguage.gov, Federal Plain Language Guidelines.', 'California HCAI, CHW/P/R Training Program Best Practices Framework: professional skills and conduct.']),
      ],
    },
    {
      id: 'if-6-l3', title: 'Meeting notes', summary: 'Decisions, actions, owners, dates.', minutes: 3,
      blocks: [
        { kind: 'list', title: 'Capture', items: [
          'Date, attendees, and purpose.',
          'Decisions made, in one line each.',
          'Actions with an owner and a date.',
          'Open questions.',
        ] },
        { kind: 'prose', text: [
          'Send notes within a day. If you are unsure what was decided, ask before the meeting ends: "Let me read back what I have."',
        ] },
        { kind: 'check', check: { id: 'if-6-c3', q: 'What matters most in meeting notes?', options: ['Every word said', 'Decisions and actions with owners and dates', 'Opinions', 'Names only'], answer: 1, rationale: 'Notes should let someone act, not replay the meeting.', distractors: 'A transcript is not useful, and opinions do not move work forward.' } },
        ev(['plainlanguage.gov, Federal Plain Language Guidelines.', 'Katzenbach and Smith, The Wisdom of Teams (1993): clear accountability.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
      ],
    },
    {
      id: 'if-6-l4', title: 'A worked example', summary: 'The same message, before and after.', minutes: 3,
      blocks: [
        { kind: 'steps', title: 'Before and after', items: [
          { label: 'Before', text: '"Hi, I was wondering if maybe you could possibly take a look at the thing when you have time?"' },
          { label: 'After', text: '"Subject: Review of outreach flyer by Thursday. Could you review the attached flyer by Thursday noon? I need to send it to print Friday. Thank you."' },
        ] },
        { kind: 'prose', text: [
          'The second message states the topic, the ask, the deadline, and the reason. It takes the reader ten seconds.',
        ] },
        { kind: 'check', check: { id: 'if-6-c4', q: 'What does the improved message add?', options: ['Length', 'A clear ask, a deadline, and a reason', 'Formality', 'An apology'], answer: 1, rationale: 'The reader knows what to do, by when, and why.', distractors: 'Clarity, not length or formality, is what helps.' } },
        ev(['plainlanguage.gov, Federal Plain Language Guidelines.', 'U.S. Plain Writing Act of 2010.', 'Haig et al. (2006).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'plainlanguage.gov', use: 'Federal plain language guidelines.', url: 'https://www.plainlanguage.gov' },
    { name: 'AHRQ: SBAR Technique', use: 'A short communication format from health care.', url: 'https://www.ahrq.gov' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Professional skills and conduct.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
  ],
};

export const IF_TEAM: Course = {
  id: 'if-7', num: 7, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Team Collaboration',
  promise: 'Work well with colleagues who have different roles: ask for help, hand work off clearly, and disagree without harm.',
  about: [
    'Interns usually join a team that already works a certain way. Fitting in is not the goal. Contributing is.',
    'This course covers asking for help, handoffs, and disagreement.',
  ],
  objectives: [
    'Ask for help in a way that respects other people\'s time.',
    'Hand off work so the next person can continue.',
    'Raise a concern or disagree respectfully.',
    'Recognize how teams develop.',
  ],
  minutes: 13,
  prerequisites: 'Professional Orientation + Expectations first is recommended.',
  whoFor: 'Interns and fellows.',
  lessons: [
    {
      id: 'if-7-l1', title: 'Asking for help', summary: 'Try first, then ask well.', minutes: 4,
      blocks: [
        { kind: 'steps', title: 'A good ask', items: [
          { label: 'Try first', text: 'Spend a set time, such as fifteen minutes, before you ask.' },
          { label: 'Say what you tried', text: '"I looked in the shared folder and the guide, and could not find the template."' },
          { label: 'Ask one specific question', text: '"Where do I find the current template?"' },
          { label: 'Say thank you and close the loop', text: 'Tell them how it turned out.' },
        ] },
        { kind: 'check', check: { id: 'if-7-c1', q: 'What makes a good request for help?', options: ['A vague question', 'What you tried and one specific question', 'Waiting until it is late', 'Asking several people the same thing'], answer: 1, rationale: 'A specific question after trying shows respect for the other person\'s time.', distractors: 'Vague questions and delays slow everyone.' } },
        ev(['Edmondson, "Psychological Safety and Learning Behavior in Work Teams," Administrative Science Quarterly (1999): asking for help as a learning behavior.', 'Katzenbach and Smith, The Wisdom of Teams (1993).', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
      ],
    },
    {
      id: 'if-7-l2', title: 'Handoffs', summary: 'Leave work so someone else can pick it up.', minutes: 3,
      blocks: [
        { kind: 'list', title: 'A handoff includes', items: [
          'What is done and what is not.',
          'Where the files and notes are.',
          'The next step and its deadline.',
          'Who to ask if there is a problem.',
        ] },
        { kind: 'prose', text: [
          'In health care, handoffs are a known point of error. Structured formats such as SBAR reduce mistakes. Use the same idea for project work.',
        ] },
        { kind: 'check', check: { id: 'if-7-c2', q: 'What should a handoff say first?', options: ['A joke', 'What is done, what is not, and what comes next', 'Nothing', 'A list of excuses'], answer: 1, rationale: 'The next person needs the status and the next step.', distractors: 'The others do not help someone continue the work.' } },
        ev(['Haig et al., SBAR, Joint Commission Journal on Quality and Patient Safety (2006).', 'Katzenbach and Smith (1993).', 'Edmondson (1999).']),
      ],
    },
    {
      id: 'if-7-l3', title: 'Disagreeing well', summary: 'Raise a concern without making it personal.', minutes: 3,
      blocks: [
        { kind: 'steps', title: 'How to raise it', items: [
          { label: 'Pick the right time and place', text: 'Privately, if it is about a person; in the meeting, if it is about the work.' },
          { label: 'Describe, do not accuse', text: '"The draft says 40 percent, and the source says 14 percent." Not "You got it wrong."' },
          { label: 'Ask a question', text: '"Can you help me understand where 40 came from?"' },
          { label: 'Agree on the next step', text: 'Accept the decision once it is made, or take it to your supervisor.' },
        ] },
        { kind: 'check', check: { id: 'if-7-c3', q: 'You think a number in a draft is wrong. What do you say?', options: ['"You are wrong."', '"The draft says 40 percent and the source says 14. Can you help me understand?"', 'Nothing', '"Everyone will notice."'], answer: 1, rationale: 'Describe the facts and ask a question. It keeps the focus on the work.', distractors: 'Accusations and silence both fail the team.' } },
        ev(['Edmondson (1999).', 'Tuckman, "Developmental Sequence in Small Groups," Psychological Bulletin (1965).', 'Katzenbach and Smith (1993).']),
      ],
    },
    {
      id: 'if-7-l4', title: 'A worked example', summary: 'A handoff that works.', minutes: 3,
      blocks: [
        { kind: 'prose', text: [
          'You are leaving on Friday and a colleague will finish a survey summary. Your handoff note:',
        ] },
        { kind: 'steps', title: 'The note', items: [
          { label: 'Done', text: 'Cleaned the data and wrote sections one and two.' },
          { label: 'Not done', text: 'Section three needs the final counts from the clinic.' },
          { label: 'Where', text: 'Shared folder, project name, latest version dated Thursday.' },
          { label: 'Next', text: 'Get the counts by Monday and finish section three by Wednesday.' },
          { label: 'Ask', text: 'Questions to the supervisor, who knows where the clinic data is.' },
        ] },
        { kind: 'check', check: { id: 'if-7-c4', q: 'What does the note let a colleague do?', options: ['Guess', 'Pick up the work without asking you', 'Redo it from scratch', 'Skip section three'], answer: 1, rationale: 'A clear handoff lets someone continue without waiting for you.', distractors: 'A weak handoff forces guesses and delays.' } },
        ev(['Haig et al. (2006).', 'Katzenbach and Smith (1993).', 'Edmondson (1999).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'Edmondson: Psychological Safety and Learning Behavior in Work Teams', use: 'Why speaking up helps teams.', url: 'https://journals.sagepub.com' },
    { name: 'AHRQ: TeamSTEPPS', use: 'Team communication tools from health care.', url: 'https://www.ahrq.gov' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Professional skills and conduct.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
  ],
};

export const IF_FEEDBACK: Course = {
  id: 'if-8', num: 8, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Professional Feedback + Growth',
  promise: 'Ask for feedback, take it in without getting defensive, and turn it into the next thing you do.',
  about: [
    'Feedback is how interns grow. It is easier to hear when you ask for it, when you know what to listen for, and when you decide what to do with it.',
    'This course covers asking, receiving, and acting on feedback.',
  ],
  objectives: [
    'Ask for specific feedback.',
    'Receive feedback without defending.',
    'Sort feedback into what to act on now, later, and not at all.',
    'Turn feedback into a growth goal.',
  ],
  minutes: 11,
  prerequisites: 'Professional Orientation + Expectations first is recommended.',
  whoFor: 'Interns and fellows.',
  lessons: [
    {
      id: 'if-8-l1', title: 'Asking for feedback', summary: 'Specific questions get usable answers.', minutes: 3,
      blocks: [
        { kind: 'steps', title: 'Ask well', items: [
          { label: 'Be specific', text: '"What is one thing I could do to make my updates more useful?" not "Any feedback?"' },
          { label: 'Ask the right person', text: 'Someone who saw the work.' },
          { label: 'Ask early', text: 'Before the work is final, when changes are easy.' },
          { label: 'Ask regularly', text: 'Short and often beats one big review.' },
        ] },
        { kind: 'check', check: { id: 'if-8-c1', q: 'Which request is better?', options: ['"Any feedback?"', '"What is one thing I could do to make my updates more useful?"', '"Was it good?"', '"Do you like it?"'], answer: 1, rationale: 'A specific question gets a specific answer you can use.', distractors: 'General questions get general answers.' } },
        ev(['Stone and Heen, Thanks for the Feedback (2014): asking for specific feedback.', 'Hattie and Timperley, "The Power of Feedback," Review of Educational Research (2007).', 'California HCAI, CHW/P/R Training Program Best Practices Framework: supervision and feedback.']),
      ],
    },
    {
      id: 'if-8-l2', title: 'Receiving it', summary: 'Listen first, decide later.', minutes: 3,
      blocks: [
        { kind: 'list', title: 'When you hear it', items: [
          'Listen to the end without explaining.',
          'Ask a question to understand: "Can you give an example?"',
          'Say thank you.',
          'Take time before you respond or decide.',
        ] },
        { kind: 'prose', text: [
          'Stone and Heen describe three triggers that make feedback hard to hear: the truth seems wrong, the giver seems wrong, or it threatens who you think you are. Noticing the trigger helps you hear the content.',
        ] },
        { kind: 'check', check: { id: 'if-8-c2', q: 'You disagree with feedback. What first?', options: ['Argue', 'Ask for an example, and take time to think', 'Ignore it', 'Complain'], answer: 1, rationale: 'An example helps you see what the giver saw, and time lets you decide calmly.', distractors: 'Arguing or ignoring closes the door.' } },
        ev(['Stone and Heen, Thanks for the Feedback (2014): three triggers.', 'Hattie and Timperley (2007).', 'Miller and Rollnick, Motivational Interviewing (2013): reflective listening.']),
      ],
    },
    {
      id: 'if-8-l3', title: 'Acting on it', summary: 'From comment to goal.', minutes: 3,
      blocks: [
        { kind: 'steps', title: 'Sort it', items: [
          { label: 'Do now', text: 'Quick fixes that clearly help.' },
          { label: 'Plan', text: 'Bigger changes that need practice. Make them a goal with a step and a date.' },
          { label: 'Park', text: 'Feedback that conflicts with other advice. Ask your supervisor.' },
        ] },
        { kind: 'check', check: { id: 'if-8-c3', q: 'You get feedback that conflicts with other advice. What do you do?', options: ['Pick one silently', 'Ask your supervisor which to follow', 'Ignore both', 'Argue'], answer: 1, rationale: 'Conflicting advice is a question for your supervisor.', distractors: 'Silent choices can surprise people later.' } },
        ev(['Hattie and Timperley (2007).', 'Locke and Latham, American Psychologist (2002): goals and feedback.', 'Stone and Heen (2014).']),
      ],
    },
    {
      id: 'if-8-l4', title: 'A worked example', summary: 'From a comment to a step.', minutes: 2,
      blocks: [
        { kind: 'steps', title: 'The conversation', items: [
          { label: 'Feedback', text: '"Your reports are accurate but long."' },
          { label: 'Question', text: '"Could you show me a report that was the right length?"' },
          { label: 'Goal', text: '"Cut my weekly update to one page."' },
          { label: 'Step', text: 'Use the four-line format this Friday, and ask for a review.' },
        ] },
        { kind: 'check', check: { id: 'if-8-c4', q: 'What turned the comment into progress?', options: ['Agreeing with everything', 'An example, a goal, and a dated step', 'Silence', 'A long reply'], answer: 1, rationale: 'The example clarified the standard, and the goal and step made it doable.', distractors: 'Agreement without a plan changes nothing.' } },
        ev(['Hattie and Timperley (2007).', 'Stone and Heen (2014).', 'Locke and Latham (2002).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'Hattie and Timperley: The Power of Feedback', use: 'The research on what makes feedback work.', url: 'https://journals.sagepub.com' },
    { name: 'Stone and Heen: Thanks for the Feedback', use: 'A book on receiving feedback.', url: 'https://www.penguinrandomhouse.com' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Supervision and feedback.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
  ],
};

const eventCourse = (o: {
  id: string; num: number; title: string; promise: string; about: string[]; objectives: string[];
  minutes: number; prerequisites: string; whoFor: string;
  requirements: { id: string; label: string; detail: string; kind: 'attend' | 'assignment' | 'practicum' | 'evaluation' }[];
  lessons: { title: string; summary: string; minutes: number; blocks: Block[] }[];
}): Course => ({
  id: o.id, num: o.num, standard: 'v2', readingLevel: 'adult', delivery: 'practical', modality: 'in-person',
  title: o.title, promise: o.promise, about: o.about, objectives: o.objectives, minutes: o.minutes,
  prerequisites: o.prerequisites, whoFor: o.whoFor, requirements: o.requirements,
  lessons: o.lessons.map((l, i) => ({ id: `${o.id}-l${i + 1}`, title: l.title, summary: l.summary, minutes: l.minutes, blocks: l.blocks })),
  checks: [],
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Supervision and professional conduct.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'The Community Guide', use: 'Evidence for community health work.', url: 'https://thecommunityguide.org' },
    { name: 'plainlanguage.gov', use: 'Clear writing and speaking.', url: 'https://www.plainlanguage.gov' },
  ],
});

export const IF_MIDPOINT = eventCourse({
  id: 'if-9', num: 9, title: 'Midpoint Review',
  promise: 'Sit down with your supervisor halfway through your term, look at your progress honestly, and adjust the plan.',
  about: ['The midpoint review is a scheduled conversation with your supervisor. You bring a short progress summary, and together you decide what to keep, change, or add for the second half.', 'It is a check-in, not a test.'],
  objectives: ['Summarize your progress against your learning agreement.', 'Name what is going well and what is stuck.', 'Ask for the support you need.', 'Agree on changes for the second half.'],
  minutes: 30, prerequisites: 'A signed learning agreement and about half of your term completed.',
  whoFor: 'Interns and fellows at the middle of a term.',
  requirements: [
    { id: 'mid-summary', kind: 'assignment', label: 'Submit a one-page progress summary', detail: 'Goals, what you have done, evidence, blockers, and what you want to do next.' },
    { id: 'mid-meet', kind: 'attend', label: 'Meet with your supervisor', detail: 'A scheduled 30-minute conversation about progress, feedback, and the second half.' },
    { id: 'mid-update', kind: 'evaluation', label: 'Update your learning agreement', detail: 'Record any changes you and your supervisor agree on.' },
  ],
  lessons: [
    { title: 'What the review is', summary: 'Purpose, format, and how to prepare.', minutes: 10, blocks: [
      { kind: 'steps', title: 'The format', items: [
        { label: 'Before', text: 'Send your summary at least two days ahead.' },
        { label: 'In the meeting', text: 'You lead with what you have done and learned. Your supervisor gives feedback and asks questions.' },
        { label: 'After', text: 'You update your learning agreement and send a short note of what was agreed.' },
      ] },
      { kind: 'check', check: { id: 'if-9-c1', q: 'What is the purpose of the midpoint review?', options: ['To grade you', 'To check progress honestly and adjust the plan', 'To end the placement', 'To compare you with others'], answer: 1, rationale: 'The review helps the second half go well. It is a check-in.', distractors: 'It is not a test or a comparison.' } },
      ev(['Hattie and Timperley, "The Power of Feedback," Review of Educational Research (2007).', 'Locke and Latham, American Psychologist (2002): goals and progress.', 'California HCAI, CHW/P/R Training Program Best Practices Framework: supervision.']),
    ] },
    { title: 'Writing the summary', summary: 'One page, honest, and evidence-based.', minutes: 10, blocks: [
      { kind: 'list', title: 'Include', items: ['Your goals from the learning agreement.', 'What you have done, with evidence.', 'What you have learned.', 'What is stuck and what you need.', 'What you propose for the second half.'] },
      { kind: 'check', check: { id: 'if-9-c2', q: 'What should a progress summary rest on?', options: ['Impressions', 'Evidence of what you did and learned', 'Promises', 'Opinions of others'], answer: 1, rationale: 'Evidence makes the conversation concrete.', distractors: 'Impressions and promises are harder to discuss.' } },
      ev(['Locke and Latham (2002).', 'Gibbs, Learning by Doing (1988): reflecting on experience.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
    ] },
    { title: 'After the review', summary: 'Turning the conversation into a plan.', minutes: 10, blocks: [
      { kind: 'steps', title: 'Within two days', items: [
        { label: 'Write what was agreed', text: 'Changes to goals, new steps, and dates.' },
        { label: 'Update the learning agreement', text: 'So it reflects the second half.' },
        { label: 'Thank your supervisor', text: 'And say what you will do first.' },
      ] },
      { kind: 'reflect', title: 'After the review', prompts: ['What was the most useful thing you heard?', 'What will you do first?'] },
      ev(['Hattie and Timperley (2007).', 'Locke and Latham (2002).', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
    ] },
  ],
});

export const IF_CAPSTONE = eventCourse({
  id: 'if-10', num: 10, title: 'Capstone Presentation',
  promise: 'Present your project to your supervisor and colleagues: what you set out to do, what you did, what you found, and what comes next.',
  about: ['The capstone is a short presentation at the end of your term. You show the work, explain what it means, and answer questions.', 'It is also how your team learns from what you did.'],
  objectives: ['Organize a short presentation around a clear question.', 'Show evidence and state its limits.', 'Answer questions honestly, including "I do not know."', 'Leave your team with a next step.'],
  minutes: 30, prerequisites: 'The professional core courses and a nearly finished project.',
  whoFor: 'Interns and fellows near the end of a term.',
  requirements: [
    { id: 'cap-slides', kind: 'assignment', label: 'Prepare your presentation', detail: 'Ten minutes with a few slides or a one-page handout.' },
    { id: 'cap-present', kind: 'attend', label: 'Present to your supervisor and team', detail: 'A scheduled session with time for questions.' },
    { id: 'cap-rubric', kind: 'evaluation', label: 'Supervisor review against the rubric', detail: 'Your supervisor scores the presentation and gives written feedback.' },
  ],
  lessons: [
    { title: 'Shaping the story', summary: 'Question, work, finding, next step.', minutes: 10, blocks: [
      { kind: 'steps', title: 'Four parts', items: [
        { label: 'The question', text: 'What you set out to learn or do, and why it matters.' },
        { label: 'The work', text: 'What you did, briefly.' },
        { label: 'The finding', text: 'What you learned, with the evidence and its limits.' },
        { label: 'The next step', text: 'What the team could do with it.' },
      ] },
      { kind: 'check', check: { id: 'if-10-c1', q: 'What should a capstone end with?', options: ['An apology', 'A clear next step for the team', 'A long list of thanks', 'More questions only'], answer: 1, rationale: 'A next step makes the work useful beyond your term.', distractors: 'Apologies and open questions leave the audience with nothing to do.' } },
      ev(['plainlanguage.gov, Federal Plain Language Guidelines: organize around the reader\'s needs.', 'CDC, Framework for Program Evaluation in Public Health: sharing lessons learned.', 'Greenhalgh, How to Read a Paper (2019): stating limits.']),
    ] },
    { title: 'Slides and delivery', summary: 'Less on the slide, more in your voice.', minutes: 10, blocks: [
      { kind: 'list', title: 'Habits', items: ['One idea per slide, with large text.', 'Show one chart or example, not a table of everything.', 'Practice out loud and time yourself.', 'Look at the audience, not the screen.', 'Cut what you cannot say in ten minutes.'] },
      { kind: 'check', check: { id: 'if-10-c2', q: 'How many ideas per slide?', options: ['As many as fit', 'One', 'Five', 'None'], answer: 1, rationale: 'One idea per slide keeps attention on what you are saying.', distractors: 'Crowded slides compete with your voice.' } },
      ev(['plainlanguage.gov, Federal Plain Language Guidelines.', 'Haig et al., SBAR (2006): lead with the situation and end with a recommendation.', 'California HCAI, CHW/P/R Training Program Best Practices Framework: professional skills.']),
    ] },
    { title: 'Questions', summary: 'Answer honestly and keep it short.', minutes: 10, blocks: [
      { kind: 'steps', title: 'When you are asked', items: [
        { label: 'Listen to the whole question', text: 'Repeat it if the room is large.' },
        { label: 'Answer what was asked', text: 'In a few sentences.' },
        { label: 'Say "I do not know"', text: 'Then say how you would find out.' },
        { label: 'Do not argue', text: 'Thank the person and move on.' },
      ] },
      { kind: 'reflect', title: 'Before you present', prompts: ['What is the one thing you want your team to remember?', 'What question are you worried about, and how will you answer it?'] },
      ev(['Greenhalgh (2019): stating limits.', 'Hattie and Timperley (2007): feedback and next steps.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
    ] },
  ],
});

export const IF_FINAL = eventCourse({
  id: 'if-11', num: 11, title: 'Final Evaluation + Career Reflection',
  promise: 'Close your term with your supervisor\'s evaluation, a reflection on what you learned, and a plan for your next step.',
  about: ['The final evaluation is a conversation and a written review. Your supervisor evaluates your work against your learning agreement, and you reflect on what you learned and where you want to go.', 'You finish with a portfolio item and a next-step plan.'],
  objectives: ['Receive your supervisor\'s evaluation and respond.', 'Reflect on what you learned and what surprised you.', 'Choose a portfolio artifact that shows your work.', 'Write a next-step plan with dates.'],
  minutes: 30, prerequisites: 'The midpoint review and the capstone presentation.',
  whoFor: 'Interns and fellows at the end of a term.',
  requirements: [
    { id: 'fin-eval', kind: 'evaluation', label: 'Supervisor final evaluation', detail: 'A written evaluation against your learning agreement and a conversation about it.' },
    { id: 'fin-reflect', kind: 'assignment', label: 'Write your career reflection', detail: 'One to two pages: what you learned, what surprised you, and what you want next.' },
    { id: 'fin-artifact', kind: 'assignment', label: 'Submit your portfolio artifact', detail: 'One piece of work with a short note on what it shows. Remove private information.' },
  ],
  lessons: [
    { title: 'The evaluation', summary: 'What it covers and how to take it in.', minutes: 10, blocks: [
      { kind: 'list', title: 'It covers', items: ['Your goals and what you accomplished.', 'Your skills and growth.', 'How you worked with others.', 'Where to grow next.'] },
      { kind: 'check', check: { id: 'if-11-c1', q: 'You disagree with part of the evaluation. What do you do?', options: ['Argue', 'Ask for examples, add your own evidence, and take time to think', 'Ignore it', 'Complain to others'], answer: 1, rationale: 'Examples and evidence move the conversation forward.', distractors: 'Arguing or ignoring leaves the issue unresolved.' } },
      ev(['Stone and Heen, Thanks for the Feedback (2014).', 'Hattie and Timperley, "The Power of Feedback" (2007).', 'California HCAI, CHW/P/R Training Program Best Practices Framework: supervision.']),
    ] },
    { title: 'Reflecting on your term', summary: 'What you learned and where you go next.', minutes: 10, blocks: [
      { kind: 'steps', title: 'Questions', items: [
        { label: 'What did you do?', text: 'Name the main pieces of work.' },
        { label: 'What did you learn?', text: 'Skills, and things about yourself.' },
        { label: 'What surprised you?', text: 'Anything you expected differently.' },
        { label: 'What next?', text: 'A role, a course, or a project, with a first step and a date.' },
      ] },
      { kind: 'check', check: { id: 'if-11-c2', q: 'What should a reflection include?', options: ['Only praise', 'What you learned, what surprised you, and a next step', 'A list of tasks', 'Complaints'], answer: 1, rationale: 'Reflection turns experience into learning and a plan.', distractors: 'A task list or praise alone does not show learning.' } },
      ev(['Kolb, Experiential Learning (1984).', 'Schön, The Reflective Practitioner (1983).', 'Gibbs, Learning by Doing (1988).']),
    ] },
    { title: 'Your portfolio and next step', summary: 'Choose one piece and plan what comes next.', minutes: 10, blocks: [
      { kind: 'list', title: 'Choose', items: ['One piece of work that shows a skill.', 'A short note on what it shows.', 'Private information removed.', 'Permission for any work that is not only yours.'] },
      { kind: 'reflect', title: 'Next', prompts: ['What is your first step after this term, and by when?', 'Who will you ask for a reference?'] },
      ev(['Schön (1983).', 'U.S. HHS, HIPAA Privacy Rule: remove identifying information.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
    ] },
  ],
});

export const IF_MORE_COURSES: Course[] = [IF_RESEARCH, IF_COMMUNICATION, IF_TEAM, IF_FEEDBACK, IF_MIDPOINT, IF_CAPSTONE, IF_FINAL];
