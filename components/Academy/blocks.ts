// Learner-facing content blocks, per "HMC Academy | Written Guided Curriculum
// Standard v2.0" (August 8, 2026).
//
// The standard names a component library and requires that written content not
// read as a wall of text. These are those components. A lesson is a sequence of
// blocks, so a course can teach rather than merely name a topic.
//
// Governance metadata deliberately does not appear here. Version numbers,
// evidence-review dates, reviewer names and internal source codes are audit
// records, not learner content. The one exception the standard allows is a
// freshness note where currency materially affects what the learner must do.

export interface SourceRef {
  /** Recognizable authority name, e.g. "U.S. Bureau of Labor Statistics". */
  name: string;
  /** What a learner would use it for. */
  use?: string;
  url?: string;
}

export interface KnowledgeCheck {
  id: string;
  q: string;
  options: string[];
  answer: number;
  rationale: string;
  /** Why tempting alternatives are wrong, where useful. */
  distractors?: string;
  source?: string;
}

export type Block =
  | { kind: 'prose'; text: string[] }
  | { kind: 'why'; text: string[] }
  | { kind: 'case'; title: string; scenario: boolean; text: string[] }
  | { kind: 'concept'; title: string; text: string[] }
  | { kind: 'example'; title: string; text: string[] }
  | { kind: 'myths'; items: { myth: string; reality: string }[] }
  | { kind: 'source'; text: string; ref?: SourceRef }
  | { kind: 'fieldnote'; title: string; text: string[] }
  | { kind: 'tryit'; title: string; text: string[] }
  | { kind: 'reflect'; title: string; prompts: string[] }
  | { kind: 'check'; check: KnowledgeCheck }
  | { kind: 'takeaways'; items: string[] }
  | { kind: 'steps'; title?: string; items: { label: string; text: string }[] }
  | { kind: 'list'; title?: string; items: string[] };
