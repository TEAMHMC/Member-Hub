// Mental Health + Community Education.
//
// This is a MIGRATION, not new curriculum. Everything here is an existing HMC
// training that already runs in the Volunteer Portal. The rule from the
// Unstoppable migration spec is preserve, inventory, validate, structure,
// migrate, test, publish. Nothing below was written for the Academy.
//
// Sourced from TEAMHMC/hmc-volunteer-portal:
//   src/constants.ts        module ids, titles, durations, video embeds, tiers
//   src/components/TrainingAcademy.tsx   the assessment attached to each module
//   src/index.ts            the CEU certificate generator and its approval constants
//
// Three different users are served here and they are not interchangeable:
// the licensed professional earning CE, the person preparing to facilitate,
// and the community participant. They get different courses.

import type { Course } from './catalog';

// ── Continuing education ─────────────────────────────────────────────────
//
// IMPORTANT. The CE approval below is real and specific. It was granted for a
// named course, at 1.0 hour, by LACDMH's Quality Outcomes and Training
// Division, and the existing delivery is a scheduled session with an attendance
// record. Converting this to on-demand self-paced study is not a technical
// decision and must not be made here. Until LACDMH confirms in writing that the
// approval covers asynchronous delivery, this course stays session-based.

export const UNSTOPPABLE_CE: Course = {
  id: 'unstoppable-ce',
  num: 1,
  standard: 'v2',
  delivery: 'live',
  title: 'Unstoppable: The Power of Healing and Growth',
  promise:
    'Earn 1.0 continuing education hour in a disability-inclusive, culturally affirming framework for mental wellness.',
  about: [
    'This is HMC\'s approved continuing education course for licensed professionals. It is delivered as a scheduled session, virtually or in person, and is followed by an evaluation and a certificate that meets the requirements of the approving agency.',
    'The course presents the Unstoppable framework for mental wellness with an explicit focus on disability inclusion and cultural affirmation, drawn from the curriculum HMC already delivers in the community.',
  ],
  objectives: [
    'Describe the Unstoppable framework and the population needs it responds to.',
    'Apply disability-inclusive practice to a mental wellness setting.',
    'Identify culturally affirming approaches appropriate to your own practice context.',
  ],
  minutes: 60,
  prerequisites: 'An active professional license in one of the recognized boards. Your license number is required for the certificate.',
  whoFor:
    'Licensed professionals seeking continuing education: LCSW, LMFT, LPCC, LEP, registered nurses, CCAPP-credentialed professionals, and psychologists.',
  ce: {
    agency: 'Los Angeles County Department of Mental Health, Quality Outcomes and Training Division',
    hours: '1.0',
    approvedOn: 'February 27, 2026',
    boards: 'BBS (LCSW, LMFT, LPCC, LEP), BRN, CCAPP, Psychology',
    approvedTitle:
      'Unstoppable: The Power of Healing & Growth - A Disability-Inclusive, Culturally Affirming Framework for Mental Wellness',
    requires: [
      'Your name exactly as it appears on your license',
      'Your license type and license number',
      'Attendance at the full scheduled session',
      'Completion of the post-session evaluation',
    ],
    deliveryNote:
      'This approval covers the scheduled session format. Attendance is recorded per session, and the certificate is issued against that session date.',
  },
  sessions: [],
  lessons: [],
  checks: [],
};

// ── Facilitator training ─────────────────────────────────────────────────
//
// The real HMC sequence, migrated as-is. Both videos and both assessments
// already exist in the Volunteer Portal as blocking Tier 2 modules. This is
// deliberately NOT the generic Mentor and Leader pathway, which is a different
// credential for a different purpose.

export const CMHW_FACILITATOR: Course = {
  id: 'cmhw-facilitator',
  num: 2,
  standard: 'v2',
  delivery: 'blended',
  title: 'Community Mental Health Worker and Facilitator Training',
  promise:
    'Complete HMC\'s existing two-part community mental health training and the facilitator readiness sequence.',
  about: [
    'This is the training HMC already requires of community mental health workers, migrated so members and volunteers take the same canonical course rather than separate copies that drift apart.',
    'Part 1 covers foundations of community mental health work, trauma-informed principles, and working with vulnerable populations. Part 2 covers applied engagement, de-escalation, communication skills, and field-based mental health work.',
    'Facilitator readiness requires more than watching both parts. The practice, observation and sign-off sequence is set by HMC program leadership and is recorded against your enrollment.',
  ],
  objectives: [
    'Explain what trauma-informed care means and why it matters with vulnerable populations.',
    'Apply a de-escalation technique and identify when to use it in community health work.',
    'Describe the boundaries of the community mental health worker role and when to escalate.',
  ],
  minutes: 51,
  prerequisites: 'HMC orientation. Facilitator readiness additionally requires program leadership approval.',
  whoFor:
    'Community mental health workers, and volunteers or staff preparing to facilitate HMC community mental health education and Unstoppable programming.',
  lessons: [
    {
      id: 'cmhw-l1',
      title: 'Community Mental Health Worker Training, Part 1',
      summary:
        'Foundations of community mental health work, trauma-informed principles, and working with vulnerable populations.',
      minutes: 23,
      blocks: [
        {
          kind: 'why',
          text: [
            'Trauma shapes how people respond to help, to authority, and to being asked personal questions. Understanding that changes how you open a conversation at a table, a shelter, or a street outreach shift.',
          ],
        },
        {
          kind: 'prose',
          text: [
            'This is the existing HMC training video. It runs about 23 minutes. The knowledge check that follows is the same one used in the Volunteer Portal, so a volunteer who has already completed it does not repeat it.',
          ],
        },
      ],
    },
    {
      id: 'cmhw-l2',
      title: 'Community Mental Health Worker Training, Part 2',
      summary:
        'Applied engagement, de-escalation, communication skills, and field-based mental health work.',
      minutes: 28,
      blocks: [
        {
          kind: 'why',
          text: [
            'De-escalation is the difference between a hard moment resolving safely and it becoming an incident. It is a practiced skill, not a personality trait.',
          ],
        },
        {
          kind: 'prose',
          text: [
            'The second existing HMC training video, about 28 minutes, followed by its applied assessment.',
          ],
        },
      ],
    },
  ],
  checks: [
    {
      id: 'cmhw-c1',
      q: 'Which best describes trauma-informed care in community health work?',
      options: [
        'Asking every participant directly about their trauma history so you can respond appropriately',
        'Recognizing that trauma affects behavior and health, and building safety, trust and choice into how you engage',
        'Referring anyone with a trauma history to clinical care before providing any other service',
        'Avoiding difficult topics entirely so participants are not upset',
      ],
      answer: 1,
      why: 'Trauma-informed practice is about safety, trust and empowerment in how you engage. It does not require eliciting trauma histories, and it does not mean avoiding hard subjects.',
    },
    {
      id: 'cmhw-c2',
      q: 'A participant becomes agitated at an outreach table. What reflects sound de-escalation?',
      options: [
        'Match their volume so they know you are taking it seriously',
        'Tell them to calm down before you can help',
        'Lower your voice, give them space and time, listen for what they actually need, and involve your shift lead if it continues',
        'End the conversation immediately and move to the next person',
      ],
      answer: 2,
      why: 'De-escalation reduces tension through tone, space, active listening and cultural humility. Escalating your own volume or dismissing the person reliably makes it worse.',
    },
  ],
  artifact: {
    id: 'facilitator-readiness',
    title: 'Facilitator readiness record',
    purpose:
      'What you practiced, who observed it, and what program leadership approved. This is the evidence behind a facilitator record.',
    fields: [
      {
        id: 'practice',
        label: 'Practice and co-facilitation',
        help: 'Which sessions you co-facilitated or observed, when, and with whom.',
        multiline: true,
      },
      {
        id: 'debrief',
        label: 'Debrief and feedback received',
        help: 'What feedback you were given, and what you would change next time.',
        multiline: true,
      },
    ],
  },
};

export const MENTAL_HEALTH_COURSES: Course[] = [UNSTOPPABLE_CE, CMHW_FACILITATOR];
