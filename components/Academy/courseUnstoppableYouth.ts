import type { Course } from './catalog';

/**
 * Unstoppable Youth, a course being written in the Hub.
 *
 * This is a skeleton, not curriculum. It exists so the course has an id and a shape, which
 * is what lets it appear in the Hub's editor. Everything a learner would read is written
 * there by the course's authors, reviewed by a Clinical Reviewer, and only then released.
 * Nothing below makes a claim, and every line a person has to write is marked
 * [PLACEHOLDER] so it cannot be mistaken for finished copy.
 *
 * The working title is a placeholder too. Rename it from the editor or the catalogue
 * before release.
 *
 * What it deliberately does not carry. It is modeled on Unstoppable Continuing Education
 * (UNSTOPPABLE_CE) but has none of that course's continuing education approval. That approval
 * was granted by LACDMH for one named course at 1.0 hour in a live session, so there is no
 * `ce` block, no County objectives, no live delivery and no price here. If this course ever
 * seeks its own approval, that is added then and not assumed now.
 *
 * Structure follows the HMC Academy Written Guided Curriculum Standard v2.0. The lessons
 * are the standard's own stages, so authors fill in a known shape instead of inventing one.
 * Minutes are 0 until the authors have written enough to time.
 */
export const UNSTOPPABLE_YOUTH: Course = {
  standard: 'v1',
  delivery: 'self-paced',
  id: 'unstoppable-youth',
  num: 1,
  title: 'Unstoppable Youth',
  promise: '[PLACEHOLDER] One sentence on what a young learner will be able to do by the end.',
  about: [
    '[PLACEHOLDER] Say what this course is and who it is for, in plain language.',
  ],
  objectives: [
    '[PLACEHOLDER] Write each objective as something a learner can show they can do.',
  ],
  minutes: 0,
  prerequisites: '[PLACEHOLDER] Say what a learner needs before starting, or write None.',
  whoFor: '[PLACEHOLDER] Confirm the age range and audience.',
  lessons: [
    {
      id: 'uy-1',
      title: 'Orientation and opening case',
      summary: '[PLACEHOLDER] Why this topic matters, and a realistic situation that makes a learner want to know more.',
      minutes: 0,
      body: [
        '[PLACEHOLDER] Say why this topic matters and what the learner will produce or be able to do.',
        '[PLACEHOLDER] Open with a realistic situation, a decision, or a common misconception. Label any made up case as an instructional scenario.',
      ],
    },
    {
      id: 'uy-2',
      title: 'Lesson 1',
      summary: '[PLACEHOLDER] One line on what this lesson teaches.',
      minutes: 0,
      body: [
        '[PLACEHOLDER] Explain the idea in your own words, with an example and a counterexample. Cite the source for every claim a learner could act on.',
      ],
    },
    {
      id: 'uy-3',
      title: 'Lesson 2',
      summary: '[PLACEHOLDER] One line on what this lesson teaches.',
      minutes: 0,
      body: [
        '[PLACEHOLDER] Explain the idea in your own words, with an example and a counterexample. Cite the source for every claim a learner could act on.',
      ],
    },
    {
      id: 'uy-4',
      title: 'Lesson 3',
      summary: '[PLACEHOLDER] One line on what this lesson teaches.',
      minutes: 0,
      body: [
        '[PLACEHOLDER] Explain the idea in your own words, with an example and a counterexample. Cite the source for every claim a learner could act on.',
      ],
    },
    {
      id: 'uy-5',
      title: 'Guided application',
      summary: '[PLACEHOLDER] Something the learner does with what they learned.',
      minutes: 0,
      body: [
        '[PLACEHOLDER] Give the learner an activity they can complete on this page, with everything they need included, and show one strong example.',
      ],
    },
    {
      id: 'uy-6',
      title: 'Reflection and key takeaways',
      summary: '[PLACEHOLDER] What stays with the learner after the details fade.',
      minutes: 0,
      body: [
        '[PLACEHOLDER] Ask what changed in the learner\'s understanding, where they could use it next, and what one action they will take.',
        '[PLACEHOLDER] Write three to six short takeaways, then list the sources and further reading.',
      ],
    },
  ],
  checks: [],
};
