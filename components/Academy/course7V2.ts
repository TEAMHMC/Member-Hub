// Health Careers Exploration, Course 7 — v2 guided curriculum.
//
// Converted from the v1 course, which stated 45 minutes against 122 words.
// Promise, objectives, the original knowledge check and the v1 skills-check
// activity are preserved; the activity becomes the carried-forward artifact.
//
// The worked outreach messages here are templates a learner adapts, not scripts
// to send verbatim. That distinction is stated in the course, because a message
// that is obviously a template is the specific thing this course warns against.

import type { Course } from './catalog';
import type { Block } from './blocks';

// ── Lesson 1 ─────────────────────────────────────────────────────────────

const LESSON_1: Block[] = [
  {
    kind: 'why',
    text: [
      'You will be asked "so what do you do?" or "tell me about yourself" more times than you expect: at a clinic front desk, in an elevator, at a career fair, at the start of every interview. Most learners answer badly, not because they lack material but because they have never decided what the answer is.',
      'A prepared introduction is thirty seconds of thinking done once instead of badly under pressure fifty times.',
    ],
  },
  {
    kind: 'concept',
    title: 'Four elements',
    text: [
      'A concise professional introduction contains your name, what you are studying or exploring, the area you are interested in, and why you are speaking with this person. That last element is the one people omit, and it is the one that makes a conversation rather than an announcement.',
    ],
  },
  {
    kind: 'example',
    title: 'The four elements in use',
    text: [
      '"I\'m Jordan, a community-college student exploring public health and nursing. I\'ve been volunteering in community outreach and I\'m trying to understand how nurses move between hospital and community settings. I\'d love to hear about your path."',
      'Name. What they are studying. The specific interest. And a reason for talking to this person in particular, which also hands them an easy opening: people like being asked about their own path.',
      'Notice what is absent. No apology for being early in the process, no list of everything they have ever done, and no request. It is short enough to say without rushing and specific enough that the other person can respond to something.',
    ],
  },
  {
    kind: 'myths',
    items: [
      {
        myth: 'I should not introduce myself as a student, it sounds unimpressive.',
        reality:
          'Being early in a path is not a weakness to conceal, and concealing it produces vagueness. Professionals respond well to a clear "I am exploring this and trying to understand X."',
      },
      {
        myth: 'A longer introduction shows more.',
        reality:
          'A long introduction transfers the work of finding the point to the listener. Fifty words that land beat two hundred that do not.',
      },
      {
        myth: 'I need a polished elevator pitch before I talk to anyone.',
        reality:
          'You need a first version. It improves by being used, and the fourth time you say it out loud it will be noticeably better than the first.',
      },
    ],
  },
  {
    kind: 'tryit',
    title: 'Write and say it',
    text: [
      'Write your fifty-word introduction using the four elements. Then say it out loud, timed. If it runs past about twenty seconds, cut the middle.',
      'Say it aloud three more times. The goal is not memorization; it is that the shape becomes familiar enough to adapt on the spot.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce7-c1',
      q: 'Which element of a professional introduction do learners most often omit, and why does it matter?',
      options: [
        'Their name, which makes the introduction impersonal',
        'Why they are speaking with this person specifically, which is what turns an announcement into a conversation',
        'Their grade point average, which establishes credibility',
        'A list of all their prior experience, which demonstrates depth',
      ],
      answer: 1,
      rationale:
        'Without a reason for talking to this person, an introduction gives the listener nothing to respond to. Naming why you sought them out gives them an obvious way in, usually their own experience.',
      distractors:
        'Almost nobody forgets their name. Academic figures belong on an application rather than in an introduction, and a full history is the opposite of concise.',
    },
  },
];

// ── Lesson 2 ─────────────────────────────────────────────────────────────

const LESSON_2: Block[] = [
  {
    kind: 'why',
    text: [
      'The most common outreach mistake is asking for the biggest thing first. A stranger who receives "can you get me a placement" has been handed a decision they have no basis to make, and the easiest answer is silence.',
      'Asking for information instead is a request almost anyone can say yes to, and it is genuinely what you need at this stage.',
    ],
  },
  {
    kind: 'concept',
    title: 'What makes a first message answerable',
    text: [
      'Three properties. Specific: it is clear you chose this person rather than pasted a list. Respectful: it asks for a bounded amount of time. Easy to answer: the questions cannot be resolved by ten seconds on a website, but also do not require an essay.',
      'Together those turn your message from a demand into an invitation, and they are the difference between a reply rate near zero and one that is quite good.',
    ],
  },
  {
    kind: 'example',
    title: 'Two messages, same person',
    text: [
      'Weak: "Hi, I am a student interested in health care. I am looking for shadowing or internship opportunities and any advice you can offer. My resume is attached. Please let me know if you have anything available."',
      'Stronger: "Dear Ms. Ortiz, I\'m Jordan Ellis, a community-college student exploring public health and nursing. I read that your team runs the mobile clinic in South LA, and I\'ve been volunteering with community outreach and trying to understand how nurses move between hospital and community roles. Would you have fifteen minutes in the next few weeks for me to ask about your path? I\'m happy to work around your schedule, and I don\'t need anything beyond the conversation."',
      'The second names why this person. It asks for fifteen minutes rather than an open commitment. It says explicitly that no favor is being requested, which removes the reason people avoid replying. And it can be answered with one word.',
      'It is also clearly written for one recipient. That is the point, and it is why it cannot be sent to thirty people.',
    ],
  },
  {
    kind: 'concept',
    title: 'Questions worth asking',
    text: [
      'Prepare five, and make them things a website cannot answer. Ask about decisions, surprises and tradeoffs rather than facts.',
      'Good: what surprised you most in your first year. What do you wish you had known before choosing this path. What part of the work do people outside it not see. How did you decide between the two settings you have worked in. What would you look for in someone joining your team.',
      'Weak: what does a nurse do, what degree do you need, how much does it pay. Those are Course 1 and Course 3 questions, and asking them signals you did not prepare.',
    ],
  },
  {
    kind: 'steps',
    title: 'After the conversation',
    items: [
      { label: 'Send a thank-you within 24 hours', text: 'Three or four sentences. Name one specific thing you took from the conversation, which shows you were listening and makes the note memorable.' },
      { label: 'Write your notes the same day', text: 'What you learned, what surprised you, what it changes about your shortlist. This is the same discipline as Course 4 reflections, for the same reason.' },
      { label: 'Do the thing you said you would', text: 'If you said you would look at a program or contact someone they named, do it. This is the entire basis on which a one-time conversation becomes a relationship.' },
      { label: 'Follow up once, later', text: 'Months later, a short note saying what you did with their advice. This is rare, it is welcome, and it is how people remember you.' },
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce-7-c1',
      q: 'What makes a first outreach message more likely to get a reply?',
      options: [
        'Asking directly for a job or placement',
        'Being specific about why you chose the person, requesting a short amount of time, and asking questions a website cannot answer',
        'Sending the same message to as many people as possible',
        'Attaching a full resume with no message',
      ],
      answer: 1,
      rationale:
        'Ask for information before asking for opportunity. Specific, respectful and easy to answer is the standard, and it makes saying yes a small decision rather than a large one.',
      distractors:
        'Leading with a request for a placement asks a stranger to vouch for someone they do not know. Mass-sending is visible to recipients and lowers replies. A resume with no message leaves the reader to work out what you want.',
    },
  },
];

// ── Lesson 3 ─────────────────────────────────────────────────────────────

const LESSON_3: Block[] = [
  {
    kind: 'why',
    text: [
      'Mentorship is genuinely valuable and frequently misunderstood in a way that harms the learner. Treating a mentor as an oracle produces a learner who cannot make decisions without permission, and a mentor who quietly disengages.',
    ],
  },
  {
    kind: 'concept',
    title: 'What good mentorship supports',
    text: [
      'Effective mentors support reflection, learning, networks and professional development. They ask questions that help you think, share experience that gives you context, introduce you to people, and tell you things about the profession you would not otherwise learn.',
      'They should not control your decisions, and they should not be your only source of support. A mentor who tells you which program to attend has moved from guiding to deciding, and the person who lives with that decision is you.',
      'The healthier model is several people who each help with something: one who knows the field, one who knows the application process, one who has your background, one who will tell you when you are wrong. Expecting all of that from one person is the most common way mentorship disappoints.',
    ],
  },
  {
    kind: 'case',
    title: 'When a mentor is wrong',
    scenario: true,
    text: [
      'A learner\'s mentor, an experienced nurse, tells her not to bother with the community health role she is considering, because "that is not real nursing and you will get bored."',
      'The mentor is offering a genuine view formed by their own path. It is also a view about a setting they have never worked in, and the learner has spent two courses verifying that community health roles have their own requirements, credentials and career structure.',
      'The useful response is neither to obey nor to dismiss. She can ask what specifically the mentor saw that formed that view, and she can go get another data point: an informational interview with someone doing the work. If three community health practitioners tell her the same thing, that is a finding. If they do not, she has learned something about the limits of one person\'s experience.',
      'A mentor being wrong about something is not a failure of the relationship. Treating one person\'s experience as the whole field is.',
    ],
  },
  {
    kind: 'concept',
    title: 'Being worth mentoring',
    text: [
      'Mentorship is a relationship with obligations flowing both directions, and the learner\'s side is straightforward: come with specific questions rather than "any advice?", do what you say you will do, report back on what happened, and respect the boundaries of their time.',
      'Reporting back is the one people skip and the one that matters most. A mentor who hears what came of their advice is receiving evidence that their time produced something, and that is what makes them willing to give more of it.',
    ],
  },
  {
    kind: 'reflect',
    title: 'Map your support',
    prompts: [
      'Who currently helps you with this path? List everyone, including people you would not call mentors.',
      'Which of the four kinds is missing: knows the field, knows the process, shares your background, will tell you when you are wrong?',
      'Is there a decision you are currently waiting for someone else to make for you? What would it take to make it yourself and then check your reasoning with them?',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'hce7-c3',
      q: 'A mentor advises against a career direction the learner has researched carefully. What is the appropriate response?',
      options: [
        'Follow the advice, since the mentor has more experience',
        'End the mentoring relationship, since the mentor does not support them',
        'Ask what specifically formed that view, then seek additional perspectives from people working in that setting',
        'Stop researching the direction and avoid mentioning it again',
      ],
      answer: 2,
      rationale:
        'A mentor offers experience, not a verdict. Understanding what formed the view, and then widening the evidence base, treats their input seriously without treating one person\'s experience as the entire field.',
      distractors:
        'Deferring automatically hands over a decision the learner will live with. Ending the relationship discards a useful perspective over one disagreement. Hiding the interest keeps the relationship at the cost of its usefulness.',
    },
  },
  {
    kind: 'takeaways',
    items: [
      'A professional introduction has four elements, and the one people omit is why they are talking to this person.',
      'Ask for information before asking for opportunity. It is a smaller request and it is what you actually need now.',
      'Specific, respectful, and easy to answer are what produce replies. A message that could be sent to thirty people reads that way.',
      'Prepare five questions a website cannot answer. Ask about decisions, surprises and tradeoffs.',
      'Thank people within a day, do what you said you would, and follow up later with what came of it.',
      'Mentors guide; they do not decide. Build several relationships rather than expecting everything from one.',
    ],
  },
];

// ── Course ───────────────────────────────────────────────────────────────

export const COURSE_7_V2: Course = {
  id: 'hce-7',
  num: 7,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Professional Communication, Networking + Mentorship',
  promise:
    'Introduce yourself professionally and request an informational conversation that someone will actually say yes to.',
  about: [
    'Professional relationships expand access to information, feedback, opportunity and belonging. Networking is not collecting contacts; it is building respectful relationships over time.',
    'Mentorship works best when expectations, goals and boundaries are clear, and when a learner has several sources of support rather than one.',
  ],
  objectives: [
    'Introduce yourself professionally.',
    'Request an informational conversation appropriately.',
    'Prepare thoughtful questions.',
    'Use mentorship responsibly.',
  ],
  minutes: 46,
  prerequisites: 'None.',
  whoFor: 'Learners preparing to contact professionals, request informational interviews, or work with a mentor.',
  lessons: [
    {
      id: 'hce7-l1',
      title: 'A professional introduction',
      summary: 'Four elements of a professional introduction, with an example you can adapt.',
      minutes: 11,
      blocks: LESSON_1,
    },
    {
      id: 'hce7-l2',
      title: 'Ask for information before asking for opportunity',
      summary: 'What makes a first outreach specific, respectful and easy for someone to say yes to.',
      minutes: 12,
      blocks: LESSON_2,
    },
    {
      id: 'hce7-l3',
      title: 'Mentors are guides, not decision-makers',
      summary: 'What good mentorship supports, and what it should never replace.',
      minutes: 11,
      blocks: LESSON_3,
    },
  ],
  checks: [],
  artifact: {
    id: 'outreach-kit',
    minutes: 12,
    title: 'Your introduction, outreach message and questions',
    purpose:
      'The seventh section of your roadmap, and the most immediately usable. These are drafts you send, not exercises. Course 8 uses them for the network plan, and the people you reach here are the ones who will tell you whether your shortlist survives contact with the actual work.',
    fields: [
      {
        id: 'intro',
        label: 'Your fifty-word introduction',
        help: 'Name, what you are studying or exploring, your specific interest, and why you are speaking with this person. Say it out loud before you write the final version.',
        multiline: true,
      },
      {
        id: 'outreach',
        label: 'Your outreach message',
        help: 'Addressed to a real person you could actually send this to. Specific about why them, bounded in time, and clear that you are asking for a conversation rather than a favor.',
        multiline: true,
      },
      {
        id: 'questions',
        label: 'Five questions',
        help: 'Things a website cannot answer. Aim at decisions, surprises and tradeoffs rather than facts you could look up.',
        multiline: true,
      },
      {
        id: 'thanks',
        label: 'Your follow-up note',
        help: 'Three or four sentences naming one specific thing you took from the conversation. Write the template now so you are not composing it under time pressure later.',
        multiline: true,
      },
      {
        id: 'support',
        label: 'Your support map',
        help: 'Who helps you with this path, and which of the four kinds is missing: knows the field, knows the process, shares your background, will tell you when you are wrong.',
        multiline: true,
      },
    ],
  },
  furtherLearning: [
    {
      name: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook',
      use: 'Read the occupation entry before an informational interview so your questions go beyond what is already published.',
      url: 'https://www.bls.gov/ooh/',
    },
  ],
};
