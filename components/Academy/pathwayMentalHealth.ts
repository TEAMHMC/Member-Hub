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
import { UNSTOPPABLE_MODULES, LACDMH_OBJECTIVES } from './unstoppableModules';
import { EXPERIENCE_SEGMENTS } from './unstoppableFacilitation';

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
  num: 2,
  standard: 'v2',
  delivery: 'live',
  title: 'Unstoppable: The Power of Healing and Growth',
  promise:
    'Earn 1.0 continuing education hour in a disability-inclusive, culturally affirming framework for mental wellness.',
  about: [
    'This is HMC\'s approved continuing education course for licensed professionals. It is delivered as a scheduled session, virtually or in person, and is followed by an evaluation and a certificate that meets the requirements of the approving agency.',
    'The course presents the Unstoppable framework for mental wellness with an explicit focus on disability inclusion and cultural affirmation, drawn from the curriculum HMC already delivers in the community.',
  ],
  /**
   * The County's objectives, not HMC's summary of them.
   *
   * These four are what the approval was granted against and what the post-training
   * evaluation rates, so they are reproduced exactly. The three that used to sit here were
   * a reasonable description of the course and were not the approved objectives, which
   * meant the Hub advertised one thing and the certificate attested another.
   */
  objectives: LACDMH_OBJECTIVES,
  minutes: 60,
  prerequisites: 'An active professional license in one of the recognized boards. Your license number is required for the certificate.',
  /**
   * Delivered virtually.
   *
   * The 2025 cohorts ran at a partner venue and the material still referenced it. HMC runs
   * these as scheduled virtual sessions now, and a learner reading a venue they cannot
   * attend is worse than reading nothing.
   */
  modality: 'virtual',
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
  /**
   * The five modules, as delivered.
   *
   * This course carried no lessons at all: a CE course whose content lived entirely in a
   * live session and a slide deck nobody outside the room could open. The approval is for
   * the scheduled session and that has not changed, so these are not a substitute for
   * attending. They are what is taught, written down, so a registrant can prepare and a
   * reviewer can read what the County approved.
   */
  lessons: UNSTOPPABLE_MODULES.map((m) => ({
    id: m.id,
    title: `Module ${m.num}: ${m.title}`,
    summary: m.summary,
    minutes: m.minutes,
    blocks: m.blocks,
  })),
  checks: [],
};

// ── The participant-facing session ───────────────────────────────────────
//
// The third audience, and the one that had nothing.
//
// The pathway served the licensed professional earning CE and the person preparing to
// facilitate. The community participant, who is who the whole programme is actually for,
// was listed as a planned course and did not exist. Meanwhile healthmatters.clinic sends
// people to the Hub to book exactly this.
//
// Migrated from the Unstoppable Experience Queue Cards. Free, open to anyone, no licence
// and no prerequisites, because that is what it is.

export const UNSTOPPABLE_EXPERIENCE: Course = {
  id: 'unstoppable-experience',
  num: 1,
  standard: 'v2',
  delivery: 'live',
  modality: 'virtual',
  title: 'The Unstoppable Experience',
  promise:
    'A live, monthly hour to pause, talk honestly about mental health with people who get it, and leave with something you can use.',
  about: [
    'A space to pause, reconnect, and reclaim your mental wellness. It is a mix of storytelling, reflection, interactive tools, and real conversations.',
    'Nobody lectures you. A host asks a question, the room answers out of its own life, and what people describe gets named and connected to real resources. Take what you need. Leave what does not serve you.',
    'Free, open to everyone, and held virtually so you can join from wherever you are. You can keep your camera off and stay quiet the whole time.',
  ],
  objectives: [
    'Name what you are carrying, in your own words, in a room where that is safe.',
    'Practise three tools you can use on your own afterwards: One Good Thing, box breathing, and the I Am, I Have, I Can affirmation.',
    'Leave knowing where to go next for support, locally and nationally.',
  ],
  minutes: 55,
  whoFor:
    'Anyone. No referral, no insurance, no diagnosis and no clinical history required. Adults and older youth welcome.',
  prerequisites: 'None. Turn up.',
  lessons: EXPERIENCE_SEGMENTS.map((seg) => ({
    id: seg.id,
    title: seg.title,
    summary: seg.summary,
    minutes: seg.minutes,
    blocks: seg.blocks,
  })),
  checks: [],
  requirements: [
    { id: 'attend-exp', kind: 'attend', label: 'Join a session', detail: 'Held virtually each month. Register for the next date and we will send you the link.' },
  ],
  sessions: [],
};

// ── Facilitator training ─────────────────────────────────────────────────
//
// The real HMC sequence, migrated as-is. Both videos and both assessments
// already exist in the Volunteer Portal as blocking Tier 2 modules. This is
// deliberately NOT the generic Mentor and Leader pathway, which is a different
// credential for a different purpose.

export const CMHW_FACILITATOR: Course = {
  id: 'cmhw-facilitator',
  num: 3,
  standard: 'v2',
  /**
   * Self-paced, because the training itself is two recordings.
   *
   * This was 'blended', which in the Academy means part of it happens at a scheduled time,
   * and it does not. Dr. Bounds recorded both parts and they are watched on demand. What is
   * scheduled is what comes after the watching: the homework, and the workshop a candidate
   * co-facilitates. Calling the whole course blended told people to wait for a date that
   * was never coming for the part they could start today.
   */
  delivery: 'self-paced',
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
  // 52 + 28 watching, plus 8 reading what certification takes. This said 51, built from a
  // 23-minute Part 1 that does not exist; the recording is 52 minutes. A learner planning
  // an evening around it was being told it was less than half its real length.
  minutes: 88,
  prerequisites: 'None to start watching. Certification additionally requires program leadership approval.',
  whoFor:
    'Community health workers, medical students, educators, social workers, HMC volunteers, and anyone preparing to facilitate community mental health education.',
  lessons: [
    {
      id: 'cmhw-l1',
      title: 'Community Mental Health Worker Training, Part 1',
      summary:
        'Foundations of community mental health work, trauma-informed principles, and working with vulnerable populations.',
      minutes: 52,
      blocks: [
        {
          kind: 'why',
          text: [
            'Trauma shapes how people respond to help, to authority, and to being asked personal questions. Understanding that changes how you open a conversation at a table, a shelter, or a street outreach shift.',
          ],
        },
        {
          kind: 'video',
          title: 'Community Mental Health Worker Training, Part 1',
          embed: 'https://www.youtube.com/embed/xEoJ4FmBUG8',
          watchUrl: 'https://youtu.be/xEoJ4FmBUG8',
          minutes: 52,
          presenter: 'Dr. Dawn Bounds, PhD, PMHNP-BC, FAAN',
          text: [
            'Watch whenever suits you, and come back to it. Nothing here is scheduled.',
          ],
        },
        {
          kind: 'fieldnote',
          title: 'If you have already done this in the volunteer portal',
          text: [
            'This is the same recording and the same knowledge check. A volunteer who has completed it there does not repeat it here.',
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
          kind: 'video',
          title: 'Community Mental Health Worker Training, Part 2',
          embed: 'https://www.youtube.com/embed/FCDOH6KNep4',
          watchUrl: 'https://youtu.be/FCDOH6KNep4',
          minutes: 28,
          presenter: 'Dr. Dawn Bounds, PhD, PMHNP-BC, FAAN',
        },
      ],
    },
    {
      id: 'cmhw-l3',
      title: 'Getting certified',
      summary: 'What the certification is, who it is open to, and the five steps to hold it.',
      minutes: 8,
      blocks: [
        {
          kind: 'prose',
          text: [
            'The Community Mental Health Education and Facilitation Certification is for people who want to lead mental health discussions and workshops, not only attend them.',
            'It is grounded in trauma-informed practice, and it was co-developed and co-delivered with Dr. Dawn Bounds of the CYFER Lab at UC Irvine.',
          ],
        },
        {
          kind: 'list',
          title: 'Who it is open to',
          items: [
            'Community health workers',
            'Medical students',
            'Educators',
            'Social workers',
            'HMC volunteers',
            'Anyone interested in mental health facilitation and education, at HMC or any other community organisation',
          ],
        },
        {
          kind: 'list',
          title: 'What you will learn',
          items: [
            'Understanding mental health across populations, with a particular focus on the intersectionality of race, disability and mental health.',
            'Addressing systemic barriers to care, particularly for historically marginalised groups.',
            'Building community and family support systems, and strategies for fostering a supportive network for healing and wellbeing.',
            'Connecting individuals to mental health resources and advocacy opportunities.',
          ],
        },
        {
          kind: 'steps',
          title: 'How to get certified',
          items: [
            { label: 'Register', text: 'Register for the training through Health Matters Clinic.' },
            { label: 'Watch both parts', text: 'Both recordings above, on demand. Watch them in your own time.' },
            { label: 'Complete the facilitator homework', text: 'Submitted by the published due date.' },
            { label: 'Lead or co-facilitate a community workshop', text: 'Using the Unstoppable curriculum. This is the applied requirement.' },
            { label: 'Receive your certification', text: 'Issued on successful completion.' },
          ],
        },
        {
          kind: 'concept',
          title: 'Who teaches it',
          text: [
            'Instructor: Dawn Bounds, PhD, PMHNP-BC, FAAN. Director of the CYFER Lab, Centering Youth and Families for Empowerment and Resilience. Board Certified Psychiatric-Mental Health Nurse Practitioner. Sue and Bill Gross School of Nursing, University of California, Irvine.',
            'Planners: Erica Robinson, Executive Director, Health Matters Clinic. Jenny Fotang, THRIVE Project Coordinator, CYFER Lab. Brianna Johnston, BA, THRIVE Project Coordinator, CYFER Lab.',
            'The training is developed and delivered by a team of educators, community health workers and mental health professionals who bring knowledge in mental health education, community engagement, trauma-informed care, and lived experience.',
          ],
        },
        {
          kind: 'takeaways',
          items: [
            'Both training parts are recordings. Nothing about starting this is scheduled.',
            'What is scheduled is the workshop you co-facilitate, which is the applied requirement and the last step before the certificate.',
            'The certificate recognises you as prepared to lead this work, and it is free.',
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
    { id: 'sessions', kind: 'assignment', label: 'Watch both training parts', detail: 'Recorded by Dr. Bounds and available on demand. 80 minutes in total, in whatever sittings suit you.' },
    { id: 'homework', kind: 'assignment', label: 'Complete the facilitator homework', detail: 'Submitted by the published due date.' },
    { id: 'cofacilitate', kind: 'practicum', label: 'Lead or co-facilitate a community workshop using the Unstoppable Curriculum', detail: 'This is the applied requirement. Certification is issued after it is completed.' },
  ],
  /**
   * Where a facilitator goes after the recordings.
   *
   * Required of a self-paced v2 course, and it earns its place here: somebody preparing to
   * hold a room on this material will be asked questions the two recordings do not answer,
   * and the honest response to most of them is a good source rather than an opinion.
   */
  furtherLearning: [
    { name: 'CYFER Lab, University of California, Irvine', use: 'Dr. Bounds\'s lab, Centering Youth and Families for Empowerment and Resilience. The research this certification was co-developed against.', url: 'https://sites.uci.edu/cyferlab/' },
    { name: 'SAMHSA, Practical Guide for Implementing a Trauma-Informed Approach', use: 'The trauma-informed principles this training is grounded in, written for people delivering services rather than for clinicians.', url: 'https://www.samhsa.gov/resource/dbhis/practical-guide-implementing-trauma-informed-approach' },
    { name: 'National Alliance on Mental Illness (NAMI)', use: 'Peer-led support groups and education programmes to refer participants to, and the source for the misdiagnosis findings taught in Module 1.', url: 'https://www.nami.org/' },
    { name: 'Los Angeles County Department of Mental Health', use: 'The ACCESS line and local district clinics, which is what a participant most often needs at the end of a workshop.', url: 'https://dmh.lacounty.gov/get-help-now/' },
    { name: 'Disability Rights California', use: 'Legal advocacy for disabled people facing discrimination, for the barriers raised in Module 3 that are not a clinical problem.', url: 'https://www.disabilityrightsca.org/' },
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

/**
 * Order is the order somebody meets them.
 *
 * The Experience first, because it is free, needs nothing, and is how almost everybody
 * arrives. Then the CE course for licensed professionals, then the certification for the
 * people who decide they want to run it themselves. That is the actual path HMC sees
 * people take, and the pathway now shows it.
 */
export const MENTAL_HEALTH_COURSES: Course[] = [UNSTOPPABLE_EXPERIENCE, UNSTOPPABLE_CE, CMHW_FACILITATOR];
