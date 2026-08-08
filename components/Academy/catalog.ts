// HMC Academy catalog — the learning content members see in the Member Hub.
//
// Content rules that apply to everything in this file:
//  - Nothing here diagnoses, treats, or promises a clinical outcome. Lessons
//    teach navigation, self-awareness, and how to use the HMC tools.
//  - Crisis routing is always 988 / 911, stated plainly wherever distress
//    could come up.
//  - Coverage lessons describe the Medi-Cal renewal process only as far as
//    DHCS publishes it, and always end in "confirm with the county".
//
// Structure mirrors a real learning platform: paths group courses, courses
// group lessons, lessons are the unit of completion. Progress is tracked per
// lesson id so a partially finished course resumes where the member left off.

export type LessonKind = 'read' | 'activity' | 'tool' | 'reflect';

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  kind: LessonKind;
  /** Paragraphs of lesson copy. Rendered in order. */
  body?: string[];
  /** Bullet takeaways shown in a highlighted block after the body. */
  takeaways?: string[];
  /** For `tool` lessons: the sibling HMC tool this lesson hands off to. */
  tool?: { label: string; url: string; blurb: string };
  /** For `reflect` lessons: the prompt the member writes against. */
  prompt?: string;
}

export interface Course {
  id: string;
  title: string;
  summary: string;
  category: Category;
  level: 'Foundations' | 'Practical' | 'Advanced';
  /** Health Credits awarded on completion. Mirrors the live credits ledger. */
  credits: number;
  badge: string;
  featured?: boolean;
  lessons: Lesson[];
}

export interface Path {
  id: string;
  title: string;
  tagline: string;
  description: string;
  courseIds: string[];
}

export type Category =
  | 'Getting Started'
  | 'Mental Wellness'
  | 'Coverage & Care'
  | 'Community Power';

export const CATEGORIES: Category[] = [
  'Getting Started',
  'Mental Wellness',
  'Coverage & Care',
  'Community Power',
];

// ── Courses ──────────────────────────────────────────────────────────────

export const COURSES: Course[] = [
  {
    id: 'hmc-101',
    title: 'Member Hub 101',
    summary:
      'What Health Matters Clinic is, what your membership actually gets you, and how to move through the Hub without getting lost.',
    category: 'Getting Started',
    level: 'Foundations',
    credits: 50,
    badge: 'Hub Navigator',
    featured: true,
    lessons: [
      {
        id: 'hmc-101-1',
        title: 'What Health Matters Clinic is',
        minutes: 4,
        kind: 'read',
        body: [
          'Health Matters Clinic is a Los Angeles nonprofit that brings preventive health to the places people already are. There is no waiting room. The work happens at pop-up clinics, health fairs, street outreach, and community events across LA County.',
          'What that means in practice: free screenings, a real person to talk to about what you are dealing with, and a path to the services you qualify for. Services are offered regardless of insurance status, immigration status, gender identity, housing status, or ability to pay.',
          'HMC provides screenings, health education, and navigation. A screening is a snapshot, not a diagnosis. If something on a screening needs attention, the job of the team is to get you connected to a provider who can evaluate it properly.',
        ],
        takeaways: [
          'HMC is mobile and community-based, not a walk-in building.',
          'Screenings identify things worth checking. They are not diagnoses.',
          'Cost, coverage, and status are not barriers to being served.',
        ],
      },
      {
        id: 'hmc-101-2',
        title: 'How the Hub is organized',
        minutes: 3,
        kind: 'read',
        body: [
          'The Hub has five places you will actually use. Home shows your next step, chosen for you based on what you have told us. Snapshot is the wellbeing self-check. Playbook is the plan built from that self-check. Events lists what is happening near you. Resources searches the directory of vetted LA County services.',
          'The Academy, where you are now, is the part that explains the rest. Courses are short on purpose. Most lessons run under five minutes, and your place is saved when you leave.',
          'Nothing in the Hub requires you to finish anything in order. If the only thing you do today is find one event near you, that is a complete visit.',
        ],
        takeaways: [
          'Home always shows one clear next step.',
          'Your Playbook is generated from your own Snapshot answers.',
          'Lesson progress saves automatically. Leave and come back.',
        ],
      },
      {
        id: 'hmc-101-3',
        title: 'Your privacy, in plain language',
        minutes: 4,
        kind: 'read',
        body: [
          'You control what you share. The Snapshot asks about housing, food, emotional health, care access, and transportation because those five things predict health outcomes more than almost anything measured in a clinic. You can skip any of them.',
          'HMC does not sell member information. Nothing you enter in the Hub is shared with a landlord, an employer, an insurer, or any immigration authority. Screening results are discussed with you privately, never announced in a public space.',
          'When you ask to be connected to support, a referral is created and a real HMC team member sees your name, contact details, and the reason you asked. That is the only time a staff person receives your information, and it only happens when you tap the button that says so.',
        ],
        takeaways: [
          'Every question in the Snapshot can be skipped.',
          'A referral is only created when you explicitly ask for one.',
          'Information is never shared with immigration, employers, or landlords.',
        ],
      },
      {
        id: 'hmc-101-4',
        title: 'Take your Wellbeing Snapshot',
        minutes: 5,
        kind: 'tool',
        body: [
          'The Snapshot is five questions about the parts of life that shape health. It takes about three minutes and it is the input that builds your Playbook.',
          'Answer honestly rather than optimistically. The plan is only as useful as what you put into it, and nothing you select here triggers a call to anyone.',
        ],
        tool: {
          label: 'Open my Snapshot',
          url: '#tab:check-yourself',
          blurb: 'Five questions. About three minutes. Builds your Playbook.',
        },
      },
    ],
  },
  {
    id: 'credits-101',
    title: 'Health Credits, Explained',
    summary:
      'How Health Credits are earned, what they recognize, and why HMC rewards showing up for your own health.',
    category: 'Getting Started',
    level: 'Foundations',
    credits: 25,
    badge: 'Credit Holder',
    lessons: [
      {
        id: 'credits-101-1',
        title: 'What a Health Credit is',
        minutes: 3,
        kind: 'read',
        body: [
          'Health Credits are HMC recognition for the work of taking care of yourself and your community. You earn them by completing a Snapshot, finishing an Academy course, attending an event, or volunteering at one.',
          'Credits are not currency and they are not insurance. They are a record that you showed up. Your balance is visible on your profile and it follows your member account across the HMC tools.',
        ],
        takeaways: [
          'Credits are earned through participation, not purchased.',
          'Your balance lives on your profile and updates automatically.',
        ],
      },
      {
        id: 'credits-101-2',
        title: 'Volunteering as a pathway',
        minutes: 4,
        kind: 'read',
        body: [
          'HMC treats volunteering as a health behavior, not just a donation of time. People who volunteer report lower isolation and stronger social connection, and social connection is one of the strongest predictors of long-term health.',
          'There is a practical side too. Volunteering at an HMC event puts you next to people whose job is navigation. Many members first learned they qualified for coverage while working a check-in table.',
          'If you want to move from member to volunteer, the volunteer portal handles applications, training, and shift signup. It is a separate system with its own account.',
        ],
        takeaways: [
          'Volunteering counts toward credits and toward connection.',
          'The volunteer portal is a separate signup from your member account.',
        ],
      },
    ],
  },
  {
    id: 'wellness-foundations',
    title: 'Unstoppable: Wellness Foundations',
    summary:
      'The core of the HMC Unstoppable curriculum. Stress, nervous system basics, and the daily practices that hold up when life does not cooperate.',
    category: 'Mental Wellness',
    level: 'Foundations',
    credits: 100,
    badge: 'Unstoppable Foundations',
    featured: true,
    lessons: [
      {
        id: 'wf-1',
        title: 'Stress is information, not failure',
        minutes: 5,
        kind: 'read',
        body: [
          'Stress is your body allocating resources to a threat. The heart rate climbs, breathing shortens, attention narrows. That response is doing its job. The problem is not that it turns on, it is that for a lot of people in Los Angeles it never fully turns off.',
          'Chronic activation is what wears things down over time. It shows up as sleep that does not restore, a short fuse, a stomach that will not settle, and a sense of running on a system that has no idle.',
          'The reframe that makes the rest of this course usable: the goal is not to eliminate stress. The goal is to get better at coming back down. Recovery is the trainable skill.',
        ],
        takeaways: [
          'The stress response is functional. Staying in it is the problem.',
          'Recovery, not elimination, is the skill worth building.',
        ],
      },
      {
        id: 'wf-2',
        title: 'The two-minute reset',
        minutes: 4,
        kind: 'activity',
        body: [
          'Slow exhales are the fastest lever most people have on their own nervous system. A longer out-breath than in-breath shifts the body toward the recovery side of the system, and it works in a parking lot, a bus seat, or a bathroom stall.',
          'Try it now. Breathe in through the nose for a count of four. Breathe out through the mouth for a count of six. Repeat for two minutes. If counting makes you tense, drop the count and just make the exhale longer than the inhale.',
          'Two notes. If you feel lightheaded, stop and breathe normally. And if slowing down makes you feel more anxious rather than less, that is common for people carrying trauma. Move instead: walk, stretch, push against a wall. The point is discharge, not stillness.',
        ],
        takeaways: [
          'Longer exhale than inhale. That is the whole mechanic.',
          'If stillness increases anxiety, use movement instead.',
        ],
      },
      {
        id: 'wf-3',
        title: 'Sleep is the multiplier',
        minutes: 5,
        kind: 'read',
        body: [
          'Nothing else in this course works well on four hours of sleep. Sleep is when memory consolidates, when the immune system does maintenance, and when emotional regulation gets restocked. Short sleep makes every other stressor land harder.',
          'The three changes with the best return: a consistent wake time, light in your eyes early in the day, and a wind-down that does not involve a bright screen in the last half hour. Consistent wake time matters more than consistent bedtime because it is the one you can actually control.',
          'If you sleep in an environment you do not control, a shared room, a shelter, a car, standard sleep advice can feel useless. Focus on what is portable: an eye mask, earplugs, a fixed wake time, and getting outside in the morning light.',
        ],
        takeaways: [
          'Fix the wake time first. Bedtime follows.',
          'Morning light is the cheapest sleep intervention there is.',
          'Portable fixes matter more than ideal conditions.',
        ],
      },
      {
        id: 'wf-4',
        title: 'Naming what you are carrying',
        minutes: 4,
        kind: 'reflect',
        body: [
          'Putting a specific name to a feeling reduces its intensity. Vague dread is harder to work with than "I am worried about rent on the fifth". Specificity turns a mood into a problem, and problems have handles.',
          'Write one sentence below. No one else reads it. It stays on this device.',
        ],
        prompt:
          'What is the heaviest thing you are carrying this week, in one sentence?',
      },
      {
        id: 'wf-5',
        title: 'Where to go when it is more than a bad week',
        minutes: 3,
        kind: 'read',
        body: [
          'Self-management has a ceiling. If low mood, anxiety, or hopelessness has lasted more than two weeks and is interfering with sleep, work, or relationships, that is the point to bring in a person rather than a practice.',
          'Check Yourself is a free, private mental health self-check that gives you plain-language results you can hand to a provider. It uses standard screening questions and takes about three minutes.',
          'If you are thinking about hurting yourself, do not work through a course. Call or text 988 for the Suicide and Crisis Lifeline, any time, free, in English or Spanish. If someone is in immediate danger, call 911.',
        ],
        takeaways: [
          'Two weeks of interference is the signal to involve a person.',
          '988 is free, 24/7, call or text, English or Spanish.',
        ],
      },
    ],
  },
  {
    id: 'calm-practice',
    title: 'Building a Calm Practice',
    summary:
      'A short, practical course on making recovery a habit, using the Calm Kit coaching tool as your daily anchor.',
    category: 'Mental Wellness',
    level: 'Practical',
    credits: 75,
    badge: 'Daily Practice',
    lessons: [
      {
        id: 'cp-1',
        title: 'Why small and daily beats big and rare',
        minutes: 4,
        kind: 'read',
        body: [
          'A ninety-minute practice you do twice a year changes nothing. Four minutes you actually do most days changes your baseline. Consistency is the active ingredient, and consistency is mostly a design problem rather than a willpower problem.',
          'Design it so the practice attaches to something already in your day. After you park. Before you unlock your phone in the morning. While the coffee is going. Habits that hang off an existing anchor survive; habits that need a new slot in the day usually do not.',
        ],
        takeaways: [
          'Attach the practice to something you already do.',
          'Four minutes most days beats ninety minutes twice a year.',
        ],
      },
      {
        id: 'cp-2',
        title: 'Run a session in Calm Kit',
        minutes: 6,
        kind: 'tool',
        body: [
          'Calm Kit is the HMC coaching tool. It runs guided sessions you can do anywhere, and it is built to work on a phone with a weak connection.',
          'Do one session now, then come back and finish the course. Pick the shortest one available. The goal today is to have done it once, not to have done it well.',
        ],
        tool: {
          label: 'Open Calm Kit',
          url: 'https://calmkit.healthmatters.clinic',
          blurb: 'Guided coaching sessions. Works on a phone, offline-friendly.',
        },
      },
      {
        id: 'cp-3',
        title: 'When you miss a day',
        minutes: 3,
        kind: 'read',
        body: [
          'You will miss days. The people who keep a practice are not the ones who never miss, they are the ones who treat a miss as neutral information rather than proof of a character flaw.',
          'The rule that works: never miss twice. One skipped day is a day. Two becomes a pattern, and patterns are what you are actually managing.',
        ],
        takeaways: ['Never miss twice. That is the entire maintenance rule.'],
      },
    ],
  },
  {
    id: 'keep-la-covered',
    title: 'Keep LA Covered: Medi-Cal Renewal',
    summary:
      'How Medi-Cal renewal works, what causes people to lose coverage they still qualify for, and how to fix it if it already happened.',
    category: 'Coverage & Care',
    level: 'Practical',
    credits: 100,
    badge: 'Coverage Ready',
    featured: true,
    lessons: [
      {
        id: 'klc-1',
        title: 'Renewal is annual, and it is mostly paperwork',
        minutes: 5,
        kind: 'read',
        body: [
          'Medi-Cal is not permanent once granted. Every member goes through a renewal, also called redetermination, on a yearly cycle. The county checks whether you still qualify based on income and household information.',
          'Many people are renewed automatically when the county can confirm eligibility from data it already has. If it cannot, you get a renewal packet in the mail with a deadline, and it has to come back completed.',
          'The single biggest reason people lose coverage they still qualify for is not income. It is mail. A packet goes to an old address, no one responds, and the case closes for a procedural reason rather than an eligibility one.',
        ],
        takeaways: [
          'Renewal happens once a year, every year.',
          'Most coverage losses are procedural, not eligibility-based.',
        ],
      },
      {
        id: 'klc-2',
        title: 'The address problem',
        minutes: 4,
        kind: 'read',
        body: [
          'If the county does not have your current address, phone number, and email, the renewal system cannot reach you. For anyone who has moved, been between housing, or is staying with family, this is the highest-value thing to fix.',
          'In Los Angeles County, contact information for Medi-Cal is updated through the Department of Public Social Services. You can update it by phone, online through the state benefits portal, or in person at a DPSS office. Do it before the renewal packet is due, not after.',
          'If you are unhoused or your housing is unstable, ask about a mailing address alternative when you call. Case workers have options for this, and using one is far better than missing the packet.',
        ],
        takeaways: [
          'Updating your address is the highest-leverage 10 minutes available.',
          'Ask about mailing alternatives if your housing is unstable.',
        ],
      },
      {
        id: 'klc-3',
        title: 'If your coverage already ended',
        minutes: 5,
        kind: 'read',
        body: [
          'Losing coverage for a procedural reason is often reversible. California allows a window after a case closes during which you can return the requested information and have coverage restored without starting a brand new application. Call the county as soon as you notice, and ask specifically whether your case can be reopened.',
          'If you no longer qualify for Medi-Cal, you are usually eligible for a special enrollment period through Covered California, which is the state marketplace where plans are sold with income-based subsidies.',
          'Do not assume you are ineligible because of immigration status. California has expanded full-scope Medi-Cal to income-eligible residents across age groups regardless of immigration status. Enrolling in Medi-Cal is not a public charge concern. Verify the current rules with the county rather than with rumor.',
        ],
        takeaways: [
          'Ask directly whether the case can be reopened, not just refiled.',
          'Losing Medi-Cal opens a Covered California enrollment window.',
          'Immigration status is not automatically disqualifying in California.',
        ],
      },
      {
        id: 'klc-4',
        title: 'Find help near you',
        minutes: 3,
        kind: 'tool',
        body: [
          'You do not have to do this alone. The Resource Directory lists LA County organizations that provide free enrollment help, including community clinics and certified enrollment counselors.',
          'Search the directory for enrollment help, then call before you go so you know what documents to bring.',
        ],
        tool: {
          label: 'Search the Resource Directory',
          url: 'https://www.healthmatters.clinic/resources/resourcedirectory?q=medi-cal%20enrollment',
          blurb: 'Vetted LA County organizations offering free enrollment help.',
        },
      },
    ],
  },
  {
    id: 'appointment-ready',
    title: 'Getting What You Need From a Provider',
    summary:
      'How to prepare for a medical appointment so the short time you get actually produces something useful.',
    category: 'Coverage & Care',
    level: 'Practical',
    credits: 75,
    badge: 'Prepared Patient',
    lessons: [
      {
        id: 'ar-1',
        title: 'The three-question method',
        minutes: 4,
        kind: 'read',
        body: [
          'Most primary care visits run about fifteen minutes, and a lot of that is administrative. Walking in with written questions is the difference between leaving informed and leaving confused.',
          'Three questions cover almost every situation. What is my main problem? What do I need to do about it? Why is it important that I do this?',
          'Write them down before you go and hand the paper over if talking is hard. Nothing about that is unusual and clinicians generally welcome it.',
        ],
        takeaways: [
          'What is my main problem, what do I do, and why does it matter.',
          'Bring the questions written down. Hand them over if needed.',
        ],
      },
      {
        id: 'ar-2',
        title: 'Say it back',
        minutes: 3,
        kind: 'read',
        body: [
          'Before you leave, repeat the plan in your own words. "So I take this twice a day with food, and I come back in three weeks if the swelling has not gone down." This catches misunderstandings while you can still fix them.',
          'If you did not follow something, say you did not follow it. Asking a clinician to say it again in plainer language is a normal request, not a burden.',
        ],
        takeaways: ['Repeat the plan out loud before you leave the room.'],
      },
      {
        id: 'ar-3',
        title: 'Bring your Snapshot',
        minutes: 3,
        kind: 'read',
        body: [
          'Your Wellbeing Snapshot covers housing, food, transportation, care access, and emotional health. Those are the things that determine whether a treatment plan is realistic for you, and they are the things most likely to go unmentioned in a fifteen-minute visit.',
          'If transportation is the reason you miss appointments, that is medically relevant information, not an excuse. Say it. Many systems have solutions for it that patients never learn about because no one asks.',
        ],
        takeaways: [
          'Barriers to following a plan are clinically relevant. Say them out loud.',
        ],
      },
    ],
  },
  {
    id: 'community-power',
    title: 'Take Action LA: Community Advocate',
    summary:
      'How local health decisions get made in LA County, and how a member becomes someone with a say in them.',
    category: 'Community Power',
    level: 'Advanced',
    credits: 125,
    badge: 'Community Advocate',
    lessons: [
      {
        id: 'cpw-1',
        title: 'Who decides what in LA County health',
        minutes: 5,
        kind: 'read',
        body: [
          'Los Angeles County health services are shaped by a small number of bodies that most residents never interact with. The Board of Supervisors sets county budget priorities. The Department of Public Health and the Department of Health Services run programs. The Department of Mental Health funds and oversees behavioral health services, including the prevention and early intervention work that funds community programs like this one.',
          'These bodies hold public meetings with public comment periods. Comment slots are short, usually one to two minutes, and they are chronically underused by the people most affected by the decisions being made.',
        ],
        takeaways: [
          'Public comment is a real, underused channel.',
          'County departments, not the state, run most of what you touch locally.',
        ],
      },
      {
        id: 'cpw-2',
        title: 'What a two-minute comment should contain',
        minutes: 4,
        kind: 'read',
        body: [
          'An effective comment does three things in order. It names who you are and where you live. It tells one specific story rather than a general complaint. It ends with a specific ask.',
          'Specific beats comprehensive. "I waited six weeks for an appointment at the clinic on Vermont and I want that wait reported publicly every quarter" lands harder than a broad statement about access being difficult.',
          'Write it out and read it. Nobody expects performance. They expect a resident who showed up.',
        ],
        takeaways: [
          'Who you are, one specific story, one specific ask.',
          'Reading from a page is completely normal.',
        ],
      },
      {
        id: 'cpw-3',
        title: 'Show up with HMC',
        minutes: 3,
        kind: 'tool',
        body: [
          'The fastest way in is to attend something. HMC runs health fairs, wellness meetups, and street outreach across LA County, and the calendar is public.',
          'Find one event, put it in your calendar, and bring one person with you.',
        ],
        tool: {
          label: 'Browse upcoming events',
          url: '#tab:events',
          blurb: 'Health fairs, wellness meetups, and outreach across LA County.',
        },
      },
    ],
  },
];

// ── Paths ────────────────────────────────────────────────────────────────

export const PATHS: Path[] = [
  {
    id: 'path-new-member',
    title: 'New Member Basecamp',
    tagline: 'Start here',
    description:
      'The 20 minutes that make everything else in the Hub make sense. What HMC is, how your information is handled, and how to get your first plan.',
    courseIds: ['hmc-101', 'credits-101'],
  },
  {
    id: 'path-wellness',
    title: 'Unstoppable Wellness',
    tagline: 'Mental health, practically',
    description:
      'The HMC Unstoppable curriculum, adapted for self-paced learning. Stress, sleep, daily practice, and knowing when to bring in a person.',
    courseIds: ['wellness-foundations', 'calm-practice'],
  },
  {
    id: 'path-coverage',
    title: 'Coverage and Care Navigator',
    tagline: 'Keep what you qualify for',
    description:
      'Keep your Medi-Cal, get it back if it lapsed, and make the appointments you do get actually count.',
    courseIds: ['keep-la-covered', 'appointment-ready'],
  },
  {
    id: 'path-advocate',
    title: 'Community Advocate',
    tagline: 'From served to serving',
    description:
      'For members who want a say in how health works in their neighborhood, not just access to it.',
    courseIds: ['community-power', 'credits-101'],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────

export const courseById = (id: string): Course | undefined =>
  COURSES.find((c) => c.id === id);

export const courseMinutes = (c: Course): number =>
  c.lessons.reduce((sum, l) => sum + l.minutes, 0);

export const totalLessons = (c: Course): number => c.lessons.length;

export const CATEGORY_ACCENT: Record<Category, { text: string; bg: string; ring: string }> = {
  'Getting Started': { text: 'text-[#233DFF]', bg: 'bg-blue-50', ring: 'ring-[#233DFF]/15' },
  'Mental Wellness': { text: 'text-[#FF6F91]', bg: 'bg-pink-50', ring: 'ring-[#FF6F91]/15' },
  'Coverage & Care': { text: 'text-[#FF6E40]', bg: 'bg-orange-50', ring: 'ring-[#FF6E40]/15' },
  'Community Power': { text: 'text-[#8B6D00]', bg: 'bg-amber-50', ring: 'ring-amber-300/20' },
};
