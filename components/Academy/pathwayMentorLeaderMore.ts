// Mentor + Leader, courses 6 to 12: goal setting, inclusive mentorship, facilitating groups, supporting
// reflection, peer leadership, the mentor practice case, and the readiness review. The first five are
// self-paced. The practice case and the readiness review are done with a facilitator, and the lessons
// tell a participant what to expect and how to prepare.

import type { Course, Check } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const ML_GOALS: Course = {
  id: 'ml-6', num: 6, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Goal Setting + Development Planning',
  promise: 'Help a person name a goal that is theirs, break it into steps they will actually take, and check in without taking over.',
  about: [
    'A mentor does not set the goal. The mentee does. Your work is to help the goal become specific enough to act on and small enough to start this week.',
    'This course covers choosing goals, planning steps, and reviewing progress.',
  ],
  objectives: [
    'Help a mentee state a goal in their own words.',
    'Turn a goal into specific, dated steps.',
    'Plan for obstacles before they appear.',
    'Review progress without judging.',
  ],
  minutes: 18,
  prerequisites: 'The Role of a Mentor and Giving Effective Feedback first are recommended.',
  whoFor: 'Volunteers, coordinators, and staff who will mentor a student, a new volunteer, or a peer.',
  lessons: [
    {
      id: 'ml-6-l1', title: 'A goal that is theirs', summary: 'Questions that bring out the mentee\'s own aim.', minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'Research on goal setting by Edwin Locke and Gary Latham shows that specific, challenging goals lead to better performance than vague ones, and that people commit more to goals they helped choose. A mentor\'s job is to help the person find the goal, not hand one over.',
        ] },
        { kind: 'steps', title: 'Questions to ask', items: [
          { label: 'What do you want?', text: '"Six months from now, what would make you say this went well?"' },
          { label: 'Why does it matter?', text: '"What is important to you about that?" The answer is the fuel for the goal.' },
          { label: 'What is already working?', text: '"What have you done toward this so far?" Start from strengths.' },
        ] },
        { kind: 'check', check: { id: 'ml-6-c1', q: 'Who should set the goal in a mentoring relationship?', options: ['The mentor', 'The mentee, with the mentor\'s help in making it specific', 'The supervisor', 'The program'], answer: 1, rationale: 'People commit more to goals they choose. The mentor helps make the goal clear and doable.', distractors: 'A goal handed down is less likely to be pursued.' } },
        ev(['Locke and Latham, "Building a Practically Useful Theory of Goal Setting and Task Motivation," American Psychologist (2002): specific goals and commitment.', 'Miller and Rollnick, Motivational Interviewing, third edition (2013): drawing out the person\'s own reasons.', 'NIH National Research Mentoring Network, Entering Mentoring: aligning expectations and setting goals.']),
      ],
    },
    {
      id: 'ml-6-l2', title: 'From goal to steps', summary: 'Specific, small, and dated.', minutes: 5,
      blocks: [
        { kind: 'steps', title: 'A usable step is', items: [
          { label: 'Specific', text: '"Email two people I admire" instead of "network more."' },
          { label: 'Measurable', text: 'You can tell when it is done.' },
          { label: 'Achievable this week', text: 'Small enough to start now.' },
          { label: 'Dated', text: 'It has a day attached.' },
        ] },
        { kind: 'prose', text: [
          'Peter Gollwitzer\'s research on implementation intentions found that people are more likely to follow through when they say when and where they will act: "On Thursday after work, I will write the first paragraph." Ask for the if-then: "When will you do that, and what might get in the way?"',
        ] },
        { kind: 'check', check: { id: 'ml-6-c2', q: 'Which is the better step?', options: ['Get better at interviews', 'Practice answering three interview questions out loud on Thursday evening', 'Try harder', 'Think about it'], answer: 1, rationale: 'It is specific, measurable, and dated, which makes it easier to start.', distractors: 'The others are vague and give no moment to act.' } },
        ev(['Doran, "There\'s a S.M.A.R.T. way to write management\'s goals and objectives," Management Review (1981).', 'Gollwitzer, "Implementation Intentions: Strong Effects of Simple Plans," American Psychologist (1999).', 'Locke and Latham (2002).']),
      ],
    },
    {
      id: 'ml-6-l3', title: 'Obstacles and reviews', summary: 'Plan for what will get in the way, and check in kindly.', minutes: 4,
      blocks: [
        { kind: 'list', title: 'In a check-in', items: [
          'Start with what went well.',
          'Ask what got in the way, without blame.',
          'Adjust the step if it was too big, not the person.',
          'End with the next step and the next date.',
        ] },
        { kind: 'case', title: 'A missed step', scenario: true, text: [
          'Your mentee did not send the emails. Do you remind them they said they would?',
          'Answer: Ask what happened first. If the step was too big, shrink it: "Would one email be easier?" A missed step is information about the plan, not a verdict on the person.',
        ] },
        { kind: 'check', check: { id: 'ml-6-c3', q: 'A mentee missed their step. What is the best first question?', options: ['Why did you not do it?', 'What got in the way?', 'Do you still want this?', 'Who else could do it?'], answer: 1, rationale: 'What got in the way looks for the obstacle without blame, and leads to a better plan.', distractors: '"Why" can feel like blame, and the other options skip the obstacle.' } },
        ev(['Locke and Latham (2002): feedback and goal commitment.', 'Hattie and Timperley, "The Power of Feedback," Review of Educational Research (2007): feedback about progress and next steps.', 'NIH National Research Mentoring Network, Entering Mentoring.']),
      ],
    },
    {
      id: 'ml-6-l4', title: 'A worked example', summary: 'One goal taken from a wish to a first step.', minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Dana, a first-year student, says, "I want to get into public health." Her mentor does not suggest a plan. He asks questions and writes what she says.',
        ] },
        { kind: 'steps', title: 'What the page looks like', items: [
          { label: 'Goal in her words', text: '"Work on a team that helps people get care, after I graduate in two years."' },
          { label: 'Why it matters', text: '"My grandmother could not get an interpreter at her clinic."' },
          { label: 'First step', text: '"Ask my advisor which classes count, by Friday."' },
          { label: 'Obstacle and if-then', text: '"If I get nervous, I will send an email instead of going in person."' },
          { label: 'Next check-in', text: 'In two weeks, with a short note on what happened.' },
        ] },
        { kind: 'check', check: { id: 'ml-6-c4', q: 'In this example, who chose the goal and the first step?', options: ['The mentor', 'Dana, with her mentor asking questions', 'The advisor', 'The program'], answer: 1, rationale: 'The mentor asked and recorded. Dana chose, which is what makes follow-through likely.', distractors: 'A plan the mentor wrote would be his, not hers.' } },
        ev(['Locke and Latham, American Psychologist (2002).', 'Gollwitzer, American Psychologist (1999): if-then plans.', 'NIH National Research Mentoring Network, Entering Mentoring.']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'NIH National Research Mentoring Network: Entering Mentoring', use: 'A mentor training curriculum.', url: 'https://nrmnet.net' },
    { name: 'American Psychologist: Locke and Latham, Goal Setting Theory', use: 'The research on specific goals.', url: 'https://www.apa.org' },
    { name: 'Gollwitzer: Implementation Intentions', use: 'Why saying when and where helps.', url: 'https://www.apa.org' },
  ],
};

export const ML_INCLUSIVE: Course = {
  id: 'ml-7', num: 7, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Inclusive Mentorship',
  promise: 'Mentor across differences of background, language, and experience without assuming, and make the relationship open to the person in front of you.',
  about: [
    'You will mentor people who are not like you. The task is not to know their world. It is to be curious about it and to remove barriers that have nothing to do with ability.',
    'This course covers assumptions, access, and fairness in the relationship.',
  ],
  objectives: [
    'Notice assumptions you bring to a mentoring relationship.',
    'Ask about preferences and needs instead of guessing.',
    'Remove practical barriers to participation.',
    'Share opportunities and credit fairly.',
  ],
  minutes: 16,
  prerequisites: 'The Role of a Mentor first is recommended.',
  whoFor: 'Anyone mentoring, running a group, or leading peers.',
  lessons: [
    {
      id: 'ml-7-l1', title: 'Assumptions and humility', summary: 'What you bring into the room.', minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Belinda Ragins\'s research on mentoring relationships across differences found that power and difference shape what mentors offer and what mentees feel able to ask. Mentors often favor people who remind them of themselves. Noticing that tendency is the first step to correcting it.',
        ] },
        { kind: 'list', title: 'Questions to ask yourself', items: [
          'Who do I offer introductions and opportunities to, and who do I not?',
          'What am I assuming about this person\'s goals, family, or time?',
          'Would I give this advice if the mentee were more like me?',
        ] },
        { kind: 'check', check: { id: 'ml-7-c1', q: 'What is a common risk in mentoring?', options: ['Favoring people who remind you of yourself', 'Giving too much credit', 'Meeting too often', 'Being too curious'], answer: 0, rationale: 'People tend to invest in those who feel familiar. Noticing it helps you offer opportunities fairly.', distractors: 'The other options are not common sources of unfairness.' } },
        ev(['Ragins, "Diversified Mentoring Relationships in Organizations: A Power Perspective," Academy of Management Review (1997).', 'Tervalon and Murray-García, "Cultural Humility Versus Cultural Competence," Journal of Health Care for the Poor and Underserved (1998).', 'U.S. HHS Office of Minority Health, National CLAS Standards (2013).']),
      ],
    },
    {
      id: 'ml-7-l2', title: 'Ask, do not guess', summary: 'Preferences, language, and needs.', minutes: 4,
      blocks: [
        { kind: 'steps', title: 'In the first meeting, ask', items: [
          { label: 'How do you like to be addressed?', text: 'Name, pronouns, and how you want to be introduced.' },
          { label: 'What language is easiest for you?', text: 'Offer an interpreter or materials in the language the person prefers.' },
          { label: 'What works for your schedule and access?', text: 'Time, place, transport, caregiving, and technology.' },
          { label: 'Is there anything that would make this easier?', text: 'Accommodations for a disability or a health need.' },
        ] },
        { kind: 'check', check: { id: 'ml-7-c2', q: 'Why ask about schedule and access early?', options: ['To test the mentee', 'Practical barriers, not ability, often decide who can take part', 'It is a form requirement', 'To save time later'], answer: 1, rationale: 'Many barriers are practical. Asking removes them early.', distractors: 'The aim is access, not testing.' } },
        ev(['U.S. HHS Office of Minority Health, National CLAS Standards (2013): language assistance and respectful care.', 'Americans with Disabilities Act: reasonable accommodations for people with disabilities.', 'NIH National Research Mentoring Network, Entering Mentoring: aligning expectations.']),
      ],
    },
    {
      id: 'ml-7-l3', title: 'Fair access and credit', summary: 'Introductions, opportunities, and recognition.', minutes: 4,
      blocks: [
        { kind: 'list', title: 'Habits', items: [
          'Offer introductions and opportunities based on goals, not familiarity.',
          'Give credit by name when your mentee contributes.',
          'Check who speaks in a group and invite quieter voices.',
          'Treat a mistake the same way whoever makes it.',
        ] },
        { kind: 'case', title: 'The introduction', scenario: true, text: [
          'You can introduce one mentee to a leader in the field. Two have asked. One shares your background. Which do you choose?',
          'Answer: Choose by goals and readiness, and be ready to explain why. Offer the other mentee a different introduction or a plan to get one.',
        ] },
        { kind: 'check', check: { id: 'ml-7-c3', q: 'How should you decide whom to introduce?', options: ['By who you know best', 'By goals and readiness, and be ready to say why', 'By who asks first', 'By who is most like you'], answer: 1, rationale: 'Clear criteria reduce bias and make the offer fair.', distractors: 'Familiarity and similarity are the biases to avoid.' } },
        ev(['Ragins (1997).', 'NIH National Research Mentoring Network, Entering Mentoring.', 'Tervalon and Murray-García (1998).']),
      ],
    },
    {
      id: 'ml-7-l4', title: 'A worked example', summary: 'Removing a barrier that looks like a lack of interest.', minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'A mentee, Marcus, misses two Tuesday meetings. His mentor could read it as low interest. Instead she asks, "Is Tuesday a hard time for you?" He works nights and sleeps until two.',
        ] },
        { kind: 'steps', title: 'What the mentor does', items: [
          { label: 'Asks, does not assume', text: 'She names the pattern kindly and asks what would work.' },
          { label: 'Changes the barrier', text: 'They move to Saturday mornings and sometimes meet by phone.' },
          { label: 'Shares the unwritten rules', text: 'She explains how people in the field usually find openings and what to ask in an informational interview, things nobody had told him.' },
          { label: 'Offers the same opportunities', text: 'She includes him in the next introduction, based on his goals.' },
        ] },
        { kind: 'check', check: { id: 'ml-7-c4', q: 'A mentee misses two meetings. What is the best first step?', options: ['Assume low interest', 'Ask what makes the time hard and adjust', 'End the mentoring', 'Report them'], answer: 1, rationale: 'Missed meetings often signal a practical barrier. Asking uncovers it and keeps the relationship open.', distractors: 'Assuming disinterest can lose a capable mentee.' } },
        ev(['Ragins, Academy of Management Review (1997).', 'U.S. HHS Office of Minority Health, National CLAS Standards (2013).', 'NIH National Research Mentoring Network, Entering Mentoring.']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'National CLAS Standards', use: 'Language access and respectful care.', url: 'https://thinkculturalhealth.hhs.gov' },
    { name: 'NIH National Research Mentoring Network', use: 'Mentor training resources.', url: 'https://nrmnet.net' },
    { name: 'U.S. Department of Justice: ADA Information', use: 'Rights and accommodations.', url: 'https://www.ada.gov' },
  ],
};

export const ML_FACILITATION: Course = {
  id: 'ml-8', num: 8, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Facilitating Groups + Learning',
  promise: 'Run a group session where adults take part, learn something they can use, and feel respected.',
  about: [
    'Facilitating is not lecturing. It is designing a session and then guiding the room so people learn from the material and from each other.',
    'This course covers how adults learn, how to open and run a session, and how to handle common problems.',
  ],
  objectives: [
    'Describe how adults learn best.',
    'Open a session with ground rules and a clear purpose.',
    'Use questions and activities to involve everyone.',
    'Handle a dominant voice, a silent room, and a derailing comment.',
  ],
  minutes: 17,
  prerequisites: 'None.',
  whoFor: 'Mentors, coordinators, and peer leaders who will lead sessions or workshops.',
  lessons: [
    {
      id: 'ml-8-l1', title: 'How adults learn', summary: 'Relevance, experience, and respect.', minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'Malcolm Knowles described adults as learners who want to know why they are learning something, bring experience that is a resource, and want to apply it to real problems. Jane Vella adds that adults learn best when they are treated as decision makers and when learning is dialogue, not monologue.',
        ] },
        { kind: 'steps', title: 'What that means', items: [
          { label: 'Say why it matters', text: 'Start with the problem the session helps solve.' },
          { label: 'Use their experience', text: 'Ask what they already know before you teach.' },
          { label: 'Practice, do not only listen', text: 'Give people something to try within ten minutes.' },
          { label: 'Respect their time', text: 'Start and end on time.' },
        ] },
        { kind: 'check', check: { id: 'ml-8-c1', q: 'Which opening fits how adults learn?', options: ['A long lecture on theory', 'Naming the problem the session helps solve and asking what people already know', 'Reading slides aloud', 'Beginning with a test'], answer: 1, rationale: 'Adults want relevance and bring experience. Starting there engages them.', distractors: 'Lectures and tests do not use what the learners know.' } },
        ev(['Knowles, Holton, and Swanson, The Adult Learner (multiple editions): principles of adult learning.', 'Vella, Learning to Listen, Learning to Teach (2002): dialogue-based education.', 'California HCAI, CHW/P/R Training Program Best Practices Framework: live practice for relationship skills.']),
      ],
    },
    {
      id: 'ml-8-l2', title: 'Opening and running a session', summary: 'Ground rules, questions, and activities.', minutes: 4,
      blocks: [
        { kind: 'steps', title: 'A simple structure', items: [
          { label: 'Open', text: 'Welcome, purpose, agenda, and ground rules the group agrees to.' },
          { label: 'Teach in small pieces', text: 'Ten minutes of input, then an activity or discussion.' },
          { label: 'Ask good questions', text: 'Open questions that invite experience: "When has this come up for you?"' },
          { label: 'Close', text: 'Summarize, name one next step per person, and ask for feedback.' },
        ] },
        { kind: 'list', title: 'Ground rules that help', items: [
          'What we share here stays here; what we learn leaves with us.',
          'One person speaks at a time.',
          'Everyone may pass.',
          'Disagree with ideas, not people.',
        ] },
        { kind: 'check', check: { id: 'ml-8-c2', q: 'Why let the group agree on ground rules?', options: ['To waste time', 'People keep rules they helped make', 'It is required by law', 'To avoid teaching'], answer: 1, rationale: 'Shared ownership of the rules makes them easier to keep.', distractors: 'The aim is a safe, respectful space.' } },
        ev(['Knowles, Holton, and Swanson, The Adult Learner.', 'Vella, Learning to Listen, Learning to Teach (2002).', 'Brookfield, The Skillful Teacher (2015): discussion methods and classroom climate.']),
      ],
    },
    {
      id: 'ml-8-l3', title: 'Common problems', summary: 'The dominant voice, the silent room, and the derail.', minutes: 4,
      blocks: [
        { kind: 'steps', title: 'What to do', items: [
          { label: 'The dominant voice', text: 'Thank them, then say, "Let us hear from someone who has not spoken yet." Use small groups so quieter people talk first.' },
          { label: 'The silent room', text: 'Wait longer than feels comfortable. Ask people to jot an answer, then share with a neighbor.' },
          { label: 'The derailing comment', text: 'Acknowledge it, return to the purpose, and offer to talk after: "That matters. Let us come back to it at the end."' },
          { label: 'A harmful comment', text: 'Stop it plainly and kindly: "That language is hurtful. Let us use different words." Follow your program\'s steps if it continues.' },
        ] },
        { kind: 'check', check: { id: 'ml-8-c3', q: 'One person keeps dominating the discussion. What helps?', options: ['Let them continue', 'Use small groups and invite someone who has not spoken', 'Ask them to leave', 'End the session'], answer: 1, rationale: 'Small groups and direct invitations spread the talk without shaming anyone.', distractors: 'Removing or ignoring the person does not solve the pattern.' } },
        ev(['Brookfield, The Skillful Teacher (2015).', 'Vella (2002).', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
      ],
    },
    {
      id: 'ml-8-l4', title: 'A worked example', summary: 'A 30-minute session plan with times.', minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Topic: how to talk with a neighbor about getting a flu shot. Thirty minutes, ten people.',
        ] },
        { kind: 'steps', title: 'The plan', items: [
          { label: '0 to 5 minutes: open', text: 'Welcome, purpose, ground rules the group agrees to, and one question: "When has someone talked to you about your health in a way that helped?"' },
          { label: '5 to 15 minutes: teach and show', text: 'Ten minutes of input on listening first and open questions, with one short demonstration.' },
          { label: '15 to 25 minutes: practice', text: 'Pairs practice for five minutes each, with one observation to look for.' },
          { label: '25 to 30 minutes: close', text: 'Each person names one thing they will try this week. Collect feedback on one sticky note.' },
        ] },
        { kind: 'check', check: { id: 'ml-8-c4', q: 'In this plan, how much of the time is practice?', options: ['None', 'About a third', 'Most of it', 'All of it'], answer: 1, rationale: 'Ten of thirty minutes is practice, which fits how adults learn: input in small pieces, then trying it.', distractors: 'A session that is all talk or all practice misses the balance.' } },
        ev(['Knowles, Holton, and Swanson, The Adult Learner.', 'Vella, Learning to Listen, Learning to Teach (2002).', 'Brookfield, The Skillful Teacher (2015).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Why live practice matters.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'The Community Guide: Community Health Workers', use: 'Training and supervision in effective programs.', url: 'https://thecommunityguide.org/content/community-health-workers' },
    { name: 'NIH National Research Mentoring Network', use: 'Facilitation resources for mentors.', url: 'https://nrmnet.net' },
  ],
};

export const ML_REFLECTION: Course = {
  id: 'ml-9', num: 9, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Supporting Reflection + Portfolio Development',
  promise: 'Help a mentee turn experience into learning they can name, and into a portfolio that shows it.',
  about: [
    'Experience does not teach by itself. Reflection does. A mentor helps a person look back on what happened and decide what to do next.',
    'This course covers reflective questions and how a portfolio records growth.',
  ],
  objectives: [
    'Use a simple cycle to guide reflection.',
    'Ask questions that move from description to meaning.',
    'Help a mentee choose evidence for a portfolio.',
    'Avoid turning reflection into criticism.',
  ],
  minutes: 13,
  prerequisites: 'Giving Effective Feedback first is recommended.',
  whoFor: 'Mentors and supervisors who help people learn from their work.',
  lessons: [
    {
      id: 'ml-9-l1', title: 'Why reflection', summary: 'Learning from experience, on purpose.', minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'David Kolb described learning as a cycle: doing something, reflecting on it, drawing a lesson, and trying again. Donald Schön showed that skilled practitioners learn by reflecting on their work while and after they do it. Without reflection, people repeat a year of experience as one year repeated.',
        ] },
        { kind: 'steps', title: 'A simple cycle, adapted from Gibbs', items: [
          { label: 'What happened?', text: 'Describe it plainly.' },
          { label: 'What did you think and feel?', text: 'Notice reactions.' },
          { label: 'What worked and what did not?', text: 'Name both.' },
          { label: 'What did you learn?', text: 'State it in a sentence.' },
          { label: 'What will you do next time?', text: 'Choose a step.' },
        ] },
        { kind: 'check', check: { id: 'ml-9-c1', q: 'What turns experience into learning?', options: ['More experience', 'Reflection on what happened and what to do next', 'A certificate', 'Time alone'], answer: 1, rationale: 'Reflection connects experience to lessons and plans.', distractors: 'Experience alone can repeat the same mistakes.' } },
        ev(['Kolb, Experiential Learning (1984): the experiential learning cycle.', 'Schön, The Reflective Practitioner (1983): reflection in and on action.', 'Gibbs, Learning by Doing (1988): a reflective cycle for structured debriefing.']),
      ],
    },
    {
      id: 'ml-9-l2', title: 'Questions that deepen', summary: 'From what happened to what it means.', minutes: 3,
      blocks: [
        { kind: 'list', title: 'Questions', items: [
          'What stood out to you?',
          'What surprised you?',
          'What would you do the same, and what differently?',
          'What did you learn about yourself?',
          'Who could help you with the next step?',
        ] },
        { kind: 'prose', text: [
          'Ask one question, then wait. Avoid turning reflection into a review of what the person did wrong. The aim is understanding, not a verdict.',
        ] },
        { kind: 'check', check: { id: 'ml-9-c2', q: 'Which is a reflective question?', options: ['Why did you do that?', 'What stood out to you about that conversation?', 'You should have listened more.', 'Was that your best effort?'], answer: 1, rationale: 'Open, neutral questions invite the person to notice and make meaning.', distractors: 'The others judge or close the conversation.' } },
        ev(['Schön (1983).', 'Gibbs (1988).', 'Miller and Rollnick, Motivational Interviewing, third edition (2013): open questions and reflections.']),
      ],
    },
    {
      id: 'ml-9-l3', title: 'Building a portfolio', summary: 'Evidence of growth, not a scrapbook.', minutes: 3,
      blocks: [
        { kind: 'steps', title: 'A portfolio holds', items: [
          { label: 'Evidence', text: 'Work samples, signed logs, certificates, and feedback.' },
          { label: 'A short reflection with each item', text: 'What it shows and what the person learned.' },
          { label: 'A summary', text: 'One page on skills, growth, and goals.' },
        ] },
        { kind: 'list', title: 'Choosing items', items: [
          'Pick work that shows a skill, not everything.',
          'Include something that shows growth over time.',
          'Remove names and private information.',
          'Ask permission before including others\' work.',
        ] },
        { kind: 'check', check: { id: 'ml-9-c3', q: 'What belongs in a portfolio?', options: ['Everything the person ever did', 'Selected evidence with a short reflection on what it shows', 'Only certificates', 'Private details of the people served'], answer: 1, rationale: 'A portfolio selects evidence and explains what it shows.', distractors: 'Private details must be removed, and certificates alone do not show skill.' } },
        ev(['Schön (1983).', 'Kolb (1984).', 'U.S. HHS, HIPAA Privacy Rule: remove identifying information from any record you share.']),
      ],
    },
    {
      id: 'ml-9-l4', title: 'A worked example', summary: 'Reflecting on a hard shift.', minutes: 3,
      blocks: [
        { kind: 'prose', text: [
          'After a hard outreach shift, a volunteer says, "I felt useless." The mentor walks through the cycle with questions.',
        ] },
        { kind: 'steps', title: 'The conversation', items: [
          { label: 'What happened?', text: '"A man asked about housing and I did not know the answer."' },
          { label: 'What did you do?', text: '"I told him I would find out and called my lead."' },
          { label: 'What worked?', text: '"He waited, and the lead had a number."' },
          { label: 'What did you learn?', text: '"Saying I do not know and getting help was the right call."' },
          { label: 'Next time?', text: '"Keep the resource card in my pocket."' },
        ] },
        { kind: 'check', check: { id: 'ml-9-c4', q: 'What did the volunteer gain from the reflection?', options: ['Proof they were useless', 'A lesson and a next step', 'A reprimand', 'Nothing'], answer: 1, rationale: 'Reflection turned a feeling into a lesson and a plan.', distractors: 'Reflection is not a verdict. It finds what to keep and what to change.' } },
        ev(['Gibbs, Learning by Doing (1988).', 'Schön, The Reflective Practitioner (1983).', 'Kolb, Experiential Learning (1984).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'Gibbs: Learning by Doing', use: 'A reflective cycle for debriefing.', url: 'https://www.brookes.ac.uk' },
    { name: 'U.S. HHS: HIPAA Privacy Rule', use: 'Protecting private information in a portfolio.', url: 'https://www.hhs.gov' },
    { name: 'NIH National Research Mentoring Network', use: 'Mentor training resources.', url: 'https://nrmnet.net' },
  ],
};

export const ML_PEER_LEADERSHIP: Course = {
  id: 'ml-10', num: 10, standard: 'v2', readingLevel: 'adult', delivery: 'self-paced',
  title: 'Peer Leadership + Team Coordination',
  promise: 'Lead people who are your equals: run a meeting, share the work, and handle a disagreement without losing the team.',
  about: [
    'Peer leaders have no authority except trust. Teams work when people feel safe to speak up, know their roles, and can disagree without damage.',
    'This course covers meetings, roles, and conflict.',
  ],
  objectives: [
    'Run a short, useful meeting.',
    'Assign roles and share the work fairly.',
    'Create conditions where people speak up.',
    'Handle a disagreement between team members.',
  ],
  minutes: 13,
  prerequisites: 'Facilitating Groups + Learning first is recommended.',
  whoFor: 'Coordinators, leads, and peer leaders.',
  lessons: [
    {
      id: 'ml-10-l1', title: 'Meetings that work', summary: 'Purpose, agenda, decisions, and follow-up.', minutes: 4,
      blocks: [
        { kind: 'steps', title: 'A useful meeting', items: [
          { label: 'Purpose', text: 'Say what the meeting is for in one sentence.' },
          { label: 'Agenda', text: 'Share it ahead of time, with times.' },
          { label: 'Decisions', text: 'Name each decision and who made it.' },
          { label: 'Follow-up', text: 'Send notes within a day with owners and dates.' },
        ] },
        { kind: 'check', check: { id: 'ml-10-c1', q: 'What makes a meeting useful?', options: ['A long agenda', 'A clear purpose, decisions, and follow-up with owners and dates', 'Many attendees', 'No notes'], answer: 1, rationale: 'A clear purpose and recorded next steps turn talk into action.', distractors: 'Length and attendance do not make a meeting useful.' } },
        ev(['Edmondson, "Psychological Safety and Learning Behavior in Work Teams," Administrative Science Quarterly (1999).', 'Katzenbach and Smith, The Wisdom of Teams (1993): clear purpose and accountability.', 'California HCAI, CHW/P/R Training Program Best Practices Framework: supervision and team practice.']),
      ],
    },
    {
      id: 'ml-10-l2', title: 'Roles and sharing the work', summary: 'Who does what, and how to avoid doing it all.', minutes: 3,
      blocks: [
        { kind: 'list', title: 'Habits', items: [
          'Name each role and who holds it.',
          'Match tasks to skills and interest, and rotate the dull ones.',
          'Ask for a yes, not a hint. "Can you take the sign-in table on Saturday?"',
          'Check in on progress without hovering.',
        ] },
        { kind: 'check', check: { id: 'ml-10-c2', q: 'You keep ending up doing everything. What helps?', options: ['Do it faster', 'Name roles, ask for specific commitments, and check in', 'Complain', 'Quit'], answer: 1, rationale: 'Clear roles and specific requests share the work.', distractors: 'Doing it all leads to burnout and does not build the team.' } },
        ev(['Katzenbach and Smith (1993).', 'Edmondson (1999).', 'Tuckman, "Developmental Sequence in Small Groups," Psychological Bulletin (1965): stages of team development.']),
      ],
    },
    {
      id: 'ml-10-l3', title: 'Speaking up and disagreeing', summary: 'Safety and fairness when people differ.', minutes: 3,
      blocks: [
        { kind: 'prose', text: [
          'Amy Edmondson found that teams learn and perform better when members believe they will not be punished for asking a question or admitting a mistake. As a leader, you build that by asking for input, thanking people who raise problems, and admitting your own errors.',
        ] },
        { kind: 'steps', title: 'When two people disagree', items: [
          { label: 'Hear each side separately', text: 'Listen without taking sides.' },
          { label: 'Name the shared goal', text: '"You both want the event to run well."' },
          { label: 'Focus on the issue', text: 'Separate the problem from the person.' },
          { label: 'Agree on a next step', text: 'Write it down. Escalate to your supervisor if it does not settle or if someone feels unsafe.' },
        ] },
        { kind: 'check', check: { id: 'ml-10-c3', q: 'Two teammates disagree. What first?', options: ['Take a side', 'Hear each side, then name the shared goal', 'Ignore it', 'Tell them to stop'], answer: 1, rationale: 'Listening and naming a shared goal lower the stakes and open a path.', distractors: 'Taking sides or ignoring the problem makes it worse.' } },
        ev(['Edmondson (1999).', 'Tuckman (1965).', 'Katzenbach and Smith (1993).']),
      ],
    },
    {
      id: 'ml-10-l4', title: 'A worked example', summary: 'A 20-minute meeting, from agenda to notes.', minutes: 3,
      blocks: [
        { kind: 'prose', text: [
          'Purpose: decide who covers which table at Saturday\'s health fair. Twenty minutes, six people.',
        ] },
        { kind: 'steps', title: 'The meeting', items: [
          { label: 'Agenda sent the day before', text: 'Tables, shifts, supplies, and questions, with times.' },
          { label: 'Decisions named', text: '"Maria takes sign-in, Ahmed takes the blood pressure table, Lena brings water."' },
          { label: 'One concern raised', text: 'A new volunteer asks about a question she is unsure of. The lead thanks her and adds a ten-minute briefing.' },
          { label: 'Notes within a day', text: 'Who does what, by when, and the number to call if plans change.' },
        ] },
        { kind: 'check', check: { id: 'ml-10-c4', q: 'What made this meeting work?', options: ['Its length', 'A clear purpose, named decisions, a safe place to raise a concern, and quick notes', 'Many speakers', 'No agenda'], answer: 1, rationale: 'Purpose, decisions, safety to speak, and follow-up are the pieces that turn a meeting into action.', distractors: 'Length and attendance do not determine whether a meeting works.' } },
        ev(['Edmondson, Administrative Science Quarterly (1999).', 'Katzenbach and Smith, The Wisdom of Teams (1993).', 'Tuckman, Psychological Bulletin (1965).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'Edmondson: Psychological Safety and Learning Behavior in Work Teams', use: 'The research behind speaking up.', url: 'https://journals.sagepub.com' },
    { name: 'NIH National Research Mentoring Network', use: 'Mentor and leader resources.', url: 'https://nrmnet.net' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Supervision and teamwork.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
  ],
};

export const ML_PRACTICE_CASE: Course = {
  id: 'ml-11', num: 11, standard: 'v2', readingLevel: 'adult', delivery: 'practical', modality: 'in-person',
  title: 'Mentor Practice Case',
  promise: 'Practice a full mentoring conversation on a realistic case and get specific feedback before you mentor for real.',
  about: [
    'The practice case is a facilitated session where you play the mentor, the mentee, and the observer in turn. You use goal setting, listening, feedback, and escalation.',
    'Sessions are listed on this page when they are scheduled.',
  ],
  objectives: [
    'Run a mentoring conversation from opening to next steps.',
    'Use open questions, feedback, and goal setting.',
    'Recognize a concern that needs escalation.',
    'Give and receive feedback on your practice.',
  ],
  minutes: 45,
  prerequisites: 'Courses 1 to 10 of this pathway.',
  whoFor: 'Participants who have finished the written courses and are about to begin mentoring.',
  requirements: [
    { id: 'case-attend', kind: 'attend', label: 'Attend the facilitated practice session', detail: 'Two hours with a facilitator. Role play and feedback in groups of three.' },
    { id: 'case-plan', kind: 'assignment', label: 'Write a mentoring plan for the case', detail: 'Goals, steps, a check-in schedule, and one concern that would need escalation.' },
    { id: 'case-review', kind: 'evaluation', label: 'Facilitator review', detail: 'The facilitator reviews your plan against the rubric.' },
  ],
  lessons: [
    {
      id: 'ml-11-l1', title: 'How the session works', summary: 'Roles, rounds, and what to bring.', minutes: 15,
      blocks: [
        { kind: 'steps', title: 'The format', items: [
          { label: 'Brief', text: 'The facilitator introduces the case and the rubric.' },
          { label: 'Rounds of three', text: 'One mentor, one mentee, one observer. You rotate.' },
          { label: 'Feedback', text: 'The observer names what worked and one thing to try. The mentee says what helped.' },
          { label: 'Plan', text: 'You write a short mentoring plan for the case.' },
        ] },
        { kind: 'check', check: { id: 'ml-11-c1', q: 'Why rotate roles?', options: ['To save time', 'Playing the mentee shows how your words land', 'It is required by law', 'To give everyone a break'], answer: 1, rationale: 'Experiencing the mentee role builds understanding of how advice and questions feel.', distractors: 'The aim is empathy and skill.' } },
        ev(['California HCAI, CHW/P/R Training Program Best Practices Framework: skills are learned through live practice.', 'NIH National Research Mentoring Network, Entering Mentoring.', 'Miller and Rollnick, Motivational Interviewing, third edition (2013).']),
      ],
    },
    {
      id: 'ml-11-l2', title: 'The mentoring plan', summary: 'A page another mentor could follow.', minutes: 15,
      blocks: [
        { kind: 'list', title: 'A plan includes', items: [
          'The mentee\'s goal in their words.',
          'Two or three steps with dates.',
          'How and when you will check in.',
          'What you will not do, and who handles it.',
          'A concern that would need escalation, and who you would tell.',
        ] },
        { kind: 'check', check: { id: 'ml-11-c2', q: 'What should every plan include?', options: ['A guarantee of results', 'A concern that would need escalation, and who you would tell', 'The mentee\'s private history', 'A list of rules'], answer: 1, rationale: 'Knowing when to escalate and to whom is part of safe mentoring.', distractors: 'Guarantees and private history do not belong in a plan.' } },
        ev(['NIH National Research Mentoring Network, Entering Mentoring: setting expectations and boundaries.', 'Locke and Latham, American Psychologist (2002): specific goals.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
      ],
    },
    {
      id: 'ml-11-l3', title: 'The rubric', summary: 'What the facilitator looks for.', minutes: 15,
      blocks: [
        { kind: 'list', title: 'The rubric', items: [
          'Listens before advising and uses open questions.',
          'Helps the mentee set a specific goal and next step.',
          'Gives feedback that is specific and kind.',
          'Respects boundaries and recognizes when to escalate.',
          'Includes everyone fairly.',
        ] },
        { kind: 'reflect', title: 'After the session', prompts: ['What is one thing you did well?', 'What will you try differently with a real mentee?'] },
        ev(['Hattie and Timperley, "The Power of Feedback," Review of Educational Research (2007).', 'NIH National Research Mentoring Network, Entering Mentoring.', 'California HCAI, CHW/P/R Training Program Best Practices Framework.']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'NIH National Research Mentoring Network: Entering Mentoring', use: 'The mentor training curriculum.', url: 'https://nrmnet.net' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Why practice and supervision matter.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988 in a crisis.', url: 'https://988lifeline.org' },
  ],
};

const ML_EXAM: Check[] = [
  { id: 'ml-12-q1', q: 'Who sets the goal in a mentoring relationship?', options: ['The mentor', 'The mentee, with help making it specific', 'The supervisor', 'The program'], answer: 1, why: 'People commit more to goals they choose. The mentor helps make them clear and doable.' },
  { id: 'ml-12-q2', q: 'A mentee missed their step. What first?', options: ['Ask why they did not do it', 'Ask what got in the way', 'Remind them of their promise', 'Drop the goal'], answer: 1, why: 'Asking what got in the way finds the obstacle without blame.' },
  { id: 'ml-12-q3', q: 'What is a common risk in mentoring?', options: ['Favoring people who remind you of yourself', 'Giving too much credit', 'Meeting too often', 'Being curious'], answer: 0, why: 'Noticing the tendency to favor the familiar helps you offer opportunities fairly.' },
  { id: 'ml-12-q4', q: 'Which opening fits how adults learn?', options: ['A long lecture', 'Naming the problem the session solves and asking what people know', 'Reading slides aloud', 'A test'], answer: 1, why: 'Adults want relevance and bring experience.' },
  { id: 'ml-12-q5', q: 'One participant dominates a discussion. What helps?', options: ['Let them continue', 'Use small groups and invite someone who has not spoken', 'Ask them to leave', 'End the session'], answer: 1, why: 'Small groups and direct invitations spread the talk without shaming anyone.' },
  { id: 'ml-12-q6', q: 'Which is a reflective question?', options: ['Why did you do that?', 'What stood out to you about that conversation?', 'You should have listened more.', 'Was that your best effort?'], answer: 1, why: 'Open, neutral questions invite the person to make meaning.' },
  { id: 'ml-12-q7', q: 'Two teammates disagree. What first?', options: ['Take a side', 'Hear each side, then name the shared goal', 'Ignore it', 'Tell them to stop'], answer: 1, why: 'Listening and naming a shared goal lower the stakes.' },
  { id: 'ml-12-q8', q: 'A mentee tells you they are thinking about ending their life. What do you do?', options: ['Promise to keep it secret', 'Stay with them, ask directly, connect them to 988 or 911, and tell your supervisor', 'Change the subject', 'Tell them to think positive'], answer: 1, why: 'Safety limits confidentiality. Stay, ask, connect to crisis help, and tell your supervisor.' },
  { id: 'ml-12-q9', q: 'A mentee asks you for a loan. What do you do?', options: ['Lend the money', 'Kindly decline, explain the boundary, and tell your supervisor', 'Lend a small amount', 'Ignore the request'], answer: 1, why: 'Boundaries protect both people. Tell your supervisor so the request is on record.' },
  { id: 'ml-12-q10', q: 'What belongs in a portfolio?', options: ['Everything', 'Selected evidence with a short reflection and no private details', 'Only certificates', 'Details of people served'], answer: 1, why: 'A portfolio selects evidence and explains what it shows, with identifying information removed.' },
];

export const ML_READINESS: Course = {
  id: 'ml-12', num: 12, standard: 'v2', readingLevel: 'adult', delivery: 'practical', modality: 'in-person',
  title: 'Mentor / Leader Readiness Review',
  promise: 'Confirm that you are ready to mentor or lead: pass the knowledge check, acknowledge your responsibilities, and complete any extra checks your role needs.',
  about: [
    'Readiness has three parts: a knowledge check, an acknowledgement of what the role requires, and any extra checks for work with young people or sensitive information.',
    'The knowledge check can be retaken.',
  ],
  objectives: [
    'Pass the knowledge check at 80 percent or higher.',
    'Acknowledge the responsibilities and limits of the role.',
    'Complete the screening and training your program requires for your role.',
    'Receive confirmation that you are ready to begin.',
  ],
  minutes: 30,
  prerequisites: 'Courses 1 to 11 of this pathway.',
  whoFor: 'Participants about to begin mentoring or leading.',
  exam: { questions: ML_EXAM, passPercent: 80 },
  requirements: [
    { id: 'ready-exam', kind: 'assignment', label: 'Pass the knowledge check at 80 percent or higher', detail: 'Ten questions. You may retake it.' },
    { id: 'ready-ack', kind: 'assignment', label: 'Read and acknowledge the responsibilities of the role', detail: 'Boundaries, confidentiality, escalation, and what to do when you are unsure.' },
    { id: 'ready-checks', kind: 'evaluation', label: 'Complete the extra checks for your role', detail: 'If you will work with young people or sensitive information, complete the screening and training your program requires before you begin.' },
  ],
  lessons: [
    {
      id: 'ml-12-l1', title: 'What readiness means', summary: 'The three parts.', minutes: 10,
      blocks: [
        { kind: 'steps', title: 'Three parts', items: [
          { label: 'Knowledge check', text: 'Ten questions on goals, fairness, facilitation, reflection, teamwork, and safety. You need 80 percent.' },
          { label: 'Acknowledgement', text: 'You confirm you understand your boundaries, privacy duties, and when to escalate.' },
          { label: 'Extra checks', text: 'If your role involves young people or sensitive information, your program sets screening and training you complete before you begin.' },
        ] },
        { kind: 'check', check: { id: 'ml-12-c1', q: 'Who decides the extra checks for your role?', options: ['You', 'Your program, based on who you will work with', 'The mentee', 'No one'], answer: 1, rationale: 'Programs set the checks that protect the people you will serve.', distractors: 'Safety checks are not optional or self-decided.' } },
        ev(['California HCAI, CHW/P/R Training Program Best Practices Framework: supervision and professional conduct.', 'NIH National Research Mentoring Network, Entering Mentoring: boundaries and responsibilities.', 'U.S. HHS, HIPAA Privacy Rule: protecting private information.']),
      ],
    },
    {
      id: 'ml-12-l2', title: 'Boundaries and escalation', summary: 'What you do and when you tell someone.', minutes: 10,
      blocks: [
        { kind: 'list', title: 'Remember', items: [
          'Keep the relationship about the mentee\'s goals.',
          'Do not lend money, give gifts, or share personal contact details beyond what your program allows.',
          'Tell your supervisor right away if someone may be in danger, if you suspect abuse or neglect, or if you are unsure whether you can keep something private.',
          'Call 988 for a mental health crisis and 911 for immediate danger.',
        ] },
        { kind: 'check', check: { id: 'ml-12-c2', q: 'You are unsure whether you can keep something private. What do you do?', options: ['Keep it secret', 'Tell your supervisor', 'Post about it', 'Ignore it'], answer: 1, rationale: 'When unsure, ask your supervisor. Safety and the law can limit confidentiality.', distractors: 'Guessing about privacy puts people at risk.' } },
        ev(['NIH National Research Mentoring Network, Entering Mentoring.', 'SAMHSA, 988 Suicide and Crisis Lifeline: call or text 988.', 'California Penal Code section 11165.7: mandated reporters of child abuse and neglect.']),
      ],
    },
    {
      id: 'ml-12-l3', title: 'How to prepare', summary: 'Before the check.', minutes: 10,
      blocks: [
        { kind: 'list', title: 'Before you begin', items: [
          'Retake any lesson check you missed.',
          'Review your practice case plan and the feedback you received.',
          'Write down your supervisor\'s number and the escalation steps.',
          'Ask your program what screening your role requires.',
        ] },
        { kind: 'reflect', title: 'Before you start', prompts: ['What are you most looking forward to?', 'Which boundary will be hardest for you to keep, and who can help?'] },
        ev(['California HCAI, CHW/P/R Training Program Best Practices Framework.', 'NIH National Research Mentoring Network, Entering Mentoring.', 'Schön, The Reflective Practitioner (1983).']),
      ],
    },
  ],
  checks: [],
  furtherLearning: [
    { name: 'NIH National Research Mentoring Network', use: 'Mentor training resources.', url: 'https://nrmnet.net' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988.', url: 'https://988lifeline.org' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'Professional conduct and supervision.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
  ],
};

export const ML_MORE_COURSES: Course[] = [ML_GOALS, ML_INCLUSIVE, ML_FACILITATION, ML_REFLECTION, ML_PEER_LEADERSHIP, ML_PRACTICE_CASE, ML_READINESS];
