/**
 * How HMC actually facilitates the Unstoppable Experience.
 *
 * Migrated from the Unstoppable Experience Queue Cards, the deck a host runs the session
 * from. It is not a lecture plan. Every teaching moment is a question put to the room,
 * which is why the session works: people arrive with the material already in them, as
 * something that happened to them, and the facilitator's job is to make it safe to say out
 * loud and then attach it to what is known.
 *
 * The card format is reproduced rather than redesigned, because the shape is the method:
 *
 *   PROMPT (read aloud)          the question, asked exactly as written
 *   EXPAND THE CONVERSATION      where to go next, and what to offer if the room is quiet
 *   FACILITATION TIP             how to hold it, usually a validation to say out loud
 *   OPTIONAL STAT OR INSIGHT     evidence, offered only if it helps
 *   MODULE FOCUS                 which of the five modules the card is teaching
 *
 * The optional row is genuinely optional and that is a deliberate piece of the design. A
 * statistic offered to a room that is already telling its own story interrupts it. Offered
 * to a room that has gone quiet, it gives people something to react to. The card carries
 * both so the facilitator can read the room rather than the slide.
 */

import type { Block } from './blocks';

/** One Couch Session card, in the deck's own structure. */
export interface CouchCard {
  prompt: string;
  expand: string[];
  tip: string[];
  optional?: string[];
  moduleNum: number;
}

/** A segment of the live session, in running order. */
export interface ExperienceSegment {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  blocks: Block[];
}

export const EXPERIENCE_SEGMENTS: ExperienceSegment[] = [
  {
    id: 'unst-exp-intro',
    title: 'Intro',
    minutes: 5,
    summary: 'Welcome, what the session is, and permission to take only what you need.',
    blocks: [
      {
        kind: 'prose',
        text: [
          'Welcome to The Unstoppable Experience, your space to pause, reconnect, and reclaim your mental wellness.',
          'Tonight is about you. We created this space to talk openly about mental health, learn practical tools for healing, and remind ourselves that we are not alone.',
          'Whether this is your first time joining or you have been with us before, this is your moment to reflect, connect with community, and leave feeling more grounded, more empowered, and maybe even a little lighter.',
          'Expect a mix of storytelling, reflection, interactive tools, and real conversations. Take what you need. Leave what does not serve you. And remember, you belong here.',
        ],
      },
      {
        kind: 'fieldnote',
        title: 'Read this one aloud, as written',
        text: [
          'The welcome is doing more work than it looks like. "Take what you need, leave what does not serve you" is what makes it safe for somebody to stay silent for an hour, and people who are allowed to stay silent are the ones who eventually speak.',
        ],
      },
    ],
  },

  {
    id: 'unst-exp-about',
    title: 'About us',
    minutes: 4,
    summary: 'Who HMC is, said as a partner rather than an expert.',
    blocks: [
      {
        kind: 'prose',
        text: [
          'Before we dive in, here is a little about who we are and why we are here with you today.',
          'Health Matters Clinic is a nonprofit bringing mobile health outreach, mental health education, and pop-up wellness programs directly to LA communities.',
          'We believe in helping and healing, and meeting people where they are, whether that is on the street, in schools, or at events like this one.',
          'Our team is made up of volunteers and community partners who care deeply about equity, dignity, and access to care.',
        ],
      },
      {
        kind: 'fieldnote',
        title: 'Facilitation tip',
        text: [
          'Keep it conversational and grounded.',
          'Option to add: "We are not here as experts, we are here as partners."',
        ],
      },
      {
        kind: 'reflect',
        title: 'Optional activity',
        prompts: [
          'Have you ever had health or wellness support come to you, outside of a clinic or hospital? What did that feel like?',
        ],
      },
    ],
  },

  {
    id: 'unst-exp-mindset',
    title: 'Mindset reset',
    minutes: 10,
    summary: 'Three short activities that settle the room and get everyone speaking once.',
    blocks: [
      {
        kind: 'activity',
        title: 'One Good Thing',
        text: [
          'Let us go around and share our name, why you showed up today, and one good thing that happened to you recently or something you are grateful for.',
        ],
      },
      {
        kind: 'activity',
        title: 'Box Breathing',
        text: [
          'Breathe in for 4 seconds. Hold for 4 seconds. Breathe out for 4 seconds. Hold for 4 seconds.',
        ],
      },
      {
        kind: 'activity',
        title: '"I Am, I Have, I Can" resilience affirmation',
        text: [
          'Participants silently or aloud complete: I am, naming a strength or identity. I have, naming a support or skill. I can, naming a positive action or possibility.',
          'This reinforces internal and external resources without being overly vulnerable.',
        ],
      },
      {
        kind: 'fieldnote',
        title: 'Why this runs before anything hard',
        text: [
          'One Good Thing gets every person to speak once, early, about something easy. A room where everybody has already used their voice is a very different room when Module 3 comes up.',
          'The affirmation is designed to build people up without asking them to disclose. That is the line the whole session walks.',
        ],
      },
    ],
  },

  {
    id: 'unst-exp-laugh',
    title: 'Laugh therapy',
    minutes: 6,
    summary: 'Deliberate, unfunny laughter. It works, and the facilitator has to go first.',
    blocks: [
      {
        kind: 'prose',
        text: [
          'Let us try something a little different. No jokes, no punchlines, just laughter.',
          'Laughter is healing, even if it is totally fake at first. So we are going to laugh, on purpose.',
        ],
      },
      {
        kind: 'activity',
        title: 'Laughter exercise',
        text: [
          'Say: "If you are on camera, look at someone’s square, or your own, and just start laughing. Yes, really." "It might feel weird at first. That is the point. Let it be weird. Let it be fun."',
          'Encourage: "Add a snort, a wheeze, or your best evil villain cackle. Just keep the sound going for 30 seconds. Let us see where it takes us."',
          'Close with a grounding moment: "Take a slow, deep breath in, and out. That is joy in motion."',
        ],
      },
      {
        kind: 'fieldnote',
        title: 'Facilitation tip',
        text: [
          'Model it. Laugh first. Big, awkward, joyful. People will follow your lead.',
          'Reassure: "This is a safe space to be goofy, awkward, and free. No pressure to be funny, just present."',
        ],
      },
      {
        kind: 'source',
        text: 'Optional insight: laughter lowers stress hormones and boosts feel-good chemicals, even when it is fake. In group settings, laughter increases social connection and reduces anxiety.',
      },
    ],
  },

  {
    id: 'unst-exp-couch',
    title: 'Couch session',
    minutes: 30,
    summary:
      'The heart of it. A prompt is read, the room answers, and the facilitator attaches what is said to the five modules.',
    blocks: [
      {
        kind: 'why',
        text: [
          'This is where the education actually happens, and it happens in the wrong direction from a classroom. The facilitator asks. The room answers out of its own life. The facilitator names what has just been described and offers the evidence for it.',
          'Nobody is taught at. People arrive already holding the curriculum as lived experience, and the session gives it a name, a context and a next step.',
        ],
      },
      {
        kind: 'concept',
        title: 'What is on every card',
        text: [
          'Prompt, read aloud exactly as written. Expand the conversation, with follow-up questions and something to offer if the room is quiet. A facilitation tip, usually a validation to say out loud. An optional statistic or insight. And the module the card is teaching.',
          'The optional row is genuinely optional. Offered to a room already telling its own story, a statistic interrupts it. Offered to a room that has gone quiet, it gives people something to react to.',
        ],
      },
      {
        kind: 'example',
        title: 'A card, in full, for Module 1',
        text: [
          'Prompt: "How do you define disability? Have you noticed how some disabilities are visible, while others are not?"',
          'Expand: Ask what comes to mind when people hear the word disability, and whether they think of what they can see or what might be invisible. Invite sharing about assumptions made based on whether a disability is visible. If needed, share that the ADA defines disability broadly, including physical, mental and emotional conditions, many of which are not immediately obvious.',
          'Facilitation tip: Affirm that invisible disabilities like chronic pain, mental health conditions or learning differences are just as valid as visible ones. Encourage respect for all experiences and call out stigma that arises from misunderstanding.',
          'Optional insight: About 1 in 4 adults in the US live with a disability, many of which are invisible. Invisible disabilities often face more stigma and misunderstanding.',
        ],
      },
      {
        kind: 'example',
        title: 'A card for Module 3, where the room does the work',
        text: [
          'Prompt: "What stops people from getting mental health care, even when they want or need it?"',
          'Expand: Ask them to think about money, transportation, provider bias, or even fear, and what shows up most often for them or their community. Offer an example if it helps: sometimes just not finding a therapist who gets you is enough to stop someone from trying again.',
          'Facilitation tip: Validate. "These are not personal failures, they are structural barriers. Let us call them what they are."',
          'Optional insight: Black individuals are more likely to experience misdiagnosis, underdiagnosis and delayed treatment, especially when disability is involved.',
        ],
      },
      {
        kind: 'fieldnote',
        title: 'The move that makes this work',
        text: [
          'Say the validation out loud. It is written on the card because it is the thing facilitators skip, and it is the thing that turns a list of complaints into a room full of people who have just learned the word "structural".',
          'You do not need to get through every card. You need the room talking and the module named.',
        ],
      },
      {
        kind: 'reflect',
        title: 'Practice before you host',
        prompts: [
          'Read one prompt aloud, then stay silent for ten full seconds. Notice how long that feels, and do it anyway.',
          'Which card would you most want to skip? That is usually the one your community most needs.',
        ],
      },
    ],
  },
];
