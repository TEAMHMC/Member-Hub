/**
 * Where a CE seat is paid for.
 *
 * HMC takes payment through PayPal, which is already configured. This is the only
 * value in the Academy that has to be filled in by hand, and it is here rather than
 * buried in checkout code so a price change is a catalogue edit.
 */
export const PAYPAL_CEU_URL = 'https://www.paypal.com/ncp/payment/HMC-UNSTOPPABLE-CEU';

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
  /**
   * PAYPAL_CEU_URL below is the one thing here that is not yet real. The rest of this
   * course, including the approval, the hours and the certificate the portal already
   * generates against it, is. Point it at the HMC PayPal button for the CE seat and the
   * whole flow works; until then the Hub shows the price and says how to pay.
   */
  price: {
    amountUsd: 16,
    payUrl: PAYPAL_CEU_URL,
    note: 'Covers your seat and your CE certificate. Every other HMC course is free.',
  },
  /**
   * Fifty minutes for one credit hour.
   *
   * Not a number chosen here. Approval agencies set the ratio, and CDPH states it
   * explicitly for online continuing education: fifty minutes of active participation per
   * CE hour, with the participant unable to go straight to the exam. This course is
   * currently delivered as a scheduled live session where attendance is the record, so
   * the clock is belt and braces today. It becomes the requirement the moment any part of
   * it is offered on demand, and having it already there is what makes that possible
   * without rebuilding the course.
   */
  minMinutes: 50,
  sessions: [],
  retroEval: {
    conductedFor: 'Los Angeles County Department of Mental Health',
    intro: [
      'You are invited to participate in this evaluation conducted for the Los Angeles County Department of Mental Health. Your participation is voluntary and confidential.',
      'At the end of this program, we ask you to reflect on your knowledge and attitudes both before and after the workshops. Instead of completing a pre-test at the start, this method allows you to assess changes in your understanding more accurately, helping us measure the program\'s impact while reducing bias.',
    ],
    scale: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'],
    statements: [
      'I feel comfortable discussing topics related to mental health within the community.',
      'I understand the systemic challenges faced by individuals in accessing mental health services.',
      'I am aware of community resources available to support mental health within the community.',
      'I feel equipped to support individuals facing mental health challenges.',
      'I can identify signs and symptoms of depression and anxiety in children, youth, and adults.',
    ],
  },
  requirements: [
    { id: 'attend', kind: 'attend', label: 'Attend the full scheduled session', detail: 'Attendance is recorded per session and the certificate is issued against that date.' },
    { id: 'eval', kind: 'evaluation', label: 'Complete the post-session evaluation', detail: 'The retrospective questionnaire conducted for LACDMH.' },
  ],
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
    'Facilitator readiness requires more than watching both parts. Certification requires attending the training sessions, completing the facilitator homework, and leading or co-facilitating a community workshop using the Unstoppable Curriculum.',
  ],
  objectives: [
    'Explain what trauma-informed care means and why it matters with vulnerable populations.',
    'Apply a de-escalation technique and identify when to use it in community health work.',
    'Describe the boundaries of the community mental health worker role and when to escalate.',
  ],
  minutes: 51,
  prerequisites: 'HMC orientation. Facilitator readiness additionally requires program leadership approval.',
  whoFor:
    'Community health workers, medical students, educators, social workers, HMC volunteers, and anyone preparing to facilitate community mental health education.',
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
  requirements: [
    { id: 'register', kind: 'attend', label: 'Register for the training through Health Matters Clinic' },
    { id: 'sessions', kind: 'attend', label: 'Attend all required training sessions and participate in discussions', detail: 'Includes the introduction and facilitation techniques session, optional co-working review of community presentation slides and resources, and office hours with Dr. Bounds for final practice, questions and feedback.' },
    { id: 'homework', kind: 'assignment', label: 'Complete the facilitator homework', detail: 'Submitted by the published due date.' },
    { id: 'cofacilitate', kind: 'practicum', label: 'Lead or co-facilitate a community workshop using the Unstoppable Curriculum', detail: 'This is the applied requirement. Certification is issued after it is completed.' },
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
