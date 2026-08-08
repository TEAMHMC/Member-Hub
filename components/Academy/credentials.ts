// Credential catalog content for the Academy credentials page.
//
// Every claim on that page has to be defensible, so this file carries the
// governance detail from "HMC Academy | Credential, Transcript + Equivalency
// Rules" v1.0: what each credential means, the evidence required, what it
// explicitly does not authorize, expiration behavior, and verification.
//
// The "does not authorize" lines are not legal boilerplate. They are the core
// principle of the rules document: a credential must describe only what HMC
// can substantiate.

import type { CredentialType, Level } from './catalog';

export interface Persona {
  id: string;
  title: string;
  audience: string;
  description: string;
  pathwayIds: string[];
}

export interface CredentialSpec {
  pathwayId: string;
  /** Exact credential title. Naming rules forbid Certified, Licensed, etc. */
  title: string;
  type: CredentialType;
  level: Level;
  proves: string;
  forWhom: string;
  /** Evidence gates, in the order the rules document lists them. */
  evidence: string[];
  assessment: string;
  applied: string;
  signOff: string;
  expires: string;
  /** The privileges this credential does not confer. */
  doesNotAuthorize: string[];
  available: boolean;
}

export const PERSONAS: Persona[] = [
  {
    id: 'explorer',
    title: 'Explorer',
    audience: 'Youth, students, career changers, and people underrepresented in the health professions',
    description:
      'For learners deciding whether a health career fits, and what route into one is realistic for them. No prior experience or prerequisites.',
    pathwayIds: ['health-careers-exploration', 'youth-steam'],
  },
  {
    id: 'community-health',
    title: 'Community Health Practitioner',
    audience: 'Community health workers, promotoras, navigators, outreach and street-medicine volunteers',
    description:
      'For people doing the field work: outreach, navigation, prevention, harm reduction, and resource coordination. Combines academic content with supervised practicum and competency sign-off.',
    pathwayIds: ['field-based-community-health'],
  },
  {
    id: 'clinical-learner',
    title: 'Clinical Learner',
    audience: 'Pre-health, nursing, medical, PA and public-health students, plus licensed professionals new to field medicine',
    description:
      'For health-professions learners who need structured clinical exposure, simulation, and team-based care experience without exceeding learner scope.',
    pathwayIds: ['clinical-exposure-simulation'],
  },
  {
    id: 'fellow',
    title: 'Intern and Fellow',
    audience: 'Higher-engagement participants on a defined term with a supervisor and a learning agreement',
    description:
      'For sustained, supervised, project-based placements tied to learning objectives, a midpoint review, and a portfolio outcome.',
    pathwayIds: ['internships-fellowships'],
  },
  {
    id: 'mentor',
    title: 'Mentor and Leader',
    audience: 'Experienced participants and professionals who will mentor, facilitate, or lead teams',
    description:
      'For people moving from doing the work to developing others. Completion recognizes readiness; it does not by itself create assignment authority.',
    pathwayIds: ['mentor-leader'],
  },
];

export const CREDENTIALS: CredentialSpec[] = [
  {
    pathwayId: 'health-careers-exploration',
    title: 'HMC Health Careers Exploration — Pathway Completion',
    type: 'Course Completion',
    level: 'Discover',
    proves:
      'The learner can map the health-professions ecosystem, verify education and licensure requirements against authoritative sources, and produce a realistic personal pathway plan.',
    forWhom: 'Youth, college students, career changers, and individuals underrepresented in the health professions.',
    evidence: [
      'Enrollment in the published pathway version',
      'All 8 courses and required activities complete',
      'Pathway post-test at 80% or higher',
      'Career roadmap scored at 15 of 20 or higher against the capstone rubric',
    ],
    assessment: 'Pre-test baseline, embedded knowledge checks, 10-question post-test at 80%',
    applied: 'Capstone roadmap, rubric scored',
    signOff: 'Not required',
    expires: 'Does not expire',
    doesNotAuthorize: [
      'Professional certification or licensure',
      'Admission eligibility to any program',
      'Clinical scope of any kind',
    ],
    available: true,
  },
  {
    pathwayId: 'youth-steam',
    title: 'HMC Youth Mentorship + STEAM — Pathway Completion',
    type: 'Course Completion',
    level: 'Discover',
    proves:
      'The young person explored health, science, technology and community problem-solving through projects and mentoring, and completed a capstone build.',
    forWhom: 'Young people in mentorship and STEAM programming, with appropriate consent and safeguarding in place.',
    evidence: [
      '8 courses complete',
      'Post-test at 80% or higher',
      'Capstone at or above threshold',
      'Youth account, consent and safeguarding requirements satisfied',
    ],
    assessment: 'Post-test at 80%',
    applied: 'Capstone project',
    signOff: 'Not required',
    expires: 'Does not expire',
    doesNotAuthorize: [
      'Clinical or research activity involving participants',
      'Unsupervised service assignments',
    ],
    available: false,
  },
  {
    pathwayId: 'field-based-community-health',
    title: 'HMC Field-Based Community Health — Applied Pathway Completion',
    type: 'Applied Pathway Completion',
    level: 'Foundations',
    proves:
      'The learner completed community health academic content and demonstrated the required field competencies under supervision in real HMC service settings.',
    forWhom: 'Community health workers, promotoras, navigators, and field-based outreach volunteers.',
    evidence: [
      'Shared Foundations or approved equivalency',
      '8 pathway courses complete',
      'Post-test at 80% or higher',
      'Integrated case lab pass',
      'All role-required practicals',
      'Assigned practicum or service requirement complete',
      'Supervisor readiness sign-off',
    ],
    assessment: 'Post-test at 80%, integrated case lab',
    applied: 'Required practicals plus supervised practicum hours',
    signOff: 'Supervisor readiness sign-off required',
    expires: 'Academic content does not expire. Specific safety and clinical competencies can expire on the clinical governance schedule.',
    doesNotAuthorize: [
      'A California or Medi-Cal CHW certificate',
      'Medi-Cal billing qualification',
      'Independent clinical practice',
    ],
    available: false,
  },
  {
    pathwayId: 'clinical-exposure-simulation',
    title: 'HMC Clinical + Community Health Experience — Pathway Completion',
    type: 'Applied Pathway Completion',
    level: 'Applied',
    proves:
      'The learner completed structured clinical exposure, simulation cases, and a practical competency review within an authorized learner scope.',
    forWhom: 'Pre-health, nursing, medical, PA and public-health students, and licensed professionals seeking field-medicine exposure.',
    evidence: [
      'Shared Foundations or approved equivalency',
      '8 pathway courses complete',
      'Post-test at 80% or higher',
      'Required simulations complete',
      'Assigned practical competency review',
      'Reflection and debrief submitted',
    ],
    assessment: 'Post-test at 80%, simulation case performance',
    applied: 'Simulation lab plus practical competency review',
    signOff: 'Authorized reviewer approval required',
    expires: 'Device and procedure competencies renew on the clinical governance schedule.',
    doesNotAuthorize: [
      'Independent clinical authority',
      'Diagnosis, prescribing, or treatment',
      'Any activity beyond the learner scope defined by license and HMC protocol',
    ],
    available: false,
  },
  {
    pathwayId: 'internships-fellowships',
    title: 'HMC [Concentration] Internship or Fellowship — Completion',
    type: 'Fellowship / Internship Completion',
    level: 'Advanced',
    proves:
      'The participant completed a defined supervised placement, an approved capstone or project, and a final evaluation.',
    forWhom: 'Participants on a defined term with a supervisor, a learning agreement, and weekly assignments.',
    evidence: [
      'Professional core complete',
      'Signed learning agreement',
      'Required project or placement work complete',
      'Midpoint review',
      'Capstone at threshold',
      'Final supervisor evaluation',
      'Approved portfolio artifact',
    ],
    assessment: 'Capstone presentation and final evaluation',
    applied: 'Full placement hours with weekly supervision',
    signOff: 'Supervisor final evaluation required',
    expires: 'Does not expire',
    doesNotAuthorize: [
      'Employment or a guarantee of placement',
      'Supervisory authority over other participants',
    ],
    available: false,
  },
  {
    pathwayId: 'mentor-leader',
    title: 'HMC Mentor + Peer Leader — Pathway Completion',
    type: 'Course Completion',
    level: 'Leadership',
    proves:
      'The participant completed mentor and peer-leadership content and passed a mentor practice case.',
    forWhom: 'Experienced participants and professionals preparing to mentor, facilitate, or coordinate teams.',
    evidence: [
      '8 courses complete',
      'Post-test at 80% or higher',
      'Mentor practice case pass',
      'Readiness acknowledgement',
      'Additional eligibility checks where the assignment involves minors, supervision, or sensitive access',
    ],
    assessment: 'Post-test at 80%, mentor practice case',
    applied: 'Mentor practice case',
    signOff: 'Readiness acknowledgement',
    expires: 'Does not expire',
    doesNotAuthorize: [
      'Assignment authority. Completion alone does not assign a mentor to a learner.',
      'Supervision of minors without the separate eligibility checks',
    ],
    available: false,
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const CREDENTIAL_FAQ: Faq[] = [
  {
    q: 'Is an HMC credential a professional certification or a license?',
    a: 'No. A credential describes only what HMC can substantiate. Course completion is not licensure, board certification, clinical scope, Medi-Cal billing eligibility, research authorization, or permission to supervise. Those privileges require separate authority. HMC does not use the words Certified, Licensed, Board Certified, or State Certified in any credential title unless it becomes an approved issuer for that credential.',
  },
  {
    q: 'How is a credential verified by an employer or school?',
    a: 'Every issued credential carries a certificate ID and a public verification link. Verification returns the status (valid, expired, revoked, or superseded), the learner display name, credential title, issuer, and issue date. It never exposes assessment scores, other course history, service records, or contact information.',
  },
  {
    q: 'What does the platform record about my learning?',
    a: 'Enrollment date, guided start or cohort, pre-test score, lesson completion, embedded knowledge-check results, applied assignment status, skills-check status, post-test score, the change from pre to post, completion date, credential status, practical hours where applicable, and mentor or supervisor validation where applicable.',
  },
  {
    q: 'Who can see my learner record?',
    a: 'You see your own complete record. Authorized HMC staff see the internal transcript under permission. A shareable transcript is generated by you and contains only what you choose to include. Public verification exposes one credential and nothing else. Partner or school reporting is limited to what an agreement and privacy rules authorize.',
  },
  {
    q: 'How are learning records kept separate from health records?',
    a: 'Academy learning records are maintained separately from clinical and client records. Participation in Academy education does not create a clinician-patient relationship unless that is explicitly stated in a separate service context.',
  },
  {
    q: 'Do I have to retake content I have already learned elsewhere?',
    a: 'Not necessarily. HMC recognizes four equivalency types: exact HMC equivalency, superseded HMC versions, reviewed external credentials, and competency-based equivalency verified by an authorized reviewer. External training does not receive equivalency automatically because the title sounds similar. When a new version changes material content, HMC may require only a delta update module rather than a full retake.',
  },
  {
    q: 'Can a credential be taken away?',
    a: 'A credential is revoked if it was issued in error, evidence was falsified, the underlying competency was invalidated, or an approving body requires it. It is superseded when a newer version intentionally replaces it or a time-limited competency is renewed. Historical records are never deleted; a dated status change is recorded and public verification reflects the current status.',
  },
  {
    q: 'Do credentials expire?',
    a: 'Academic completions do not expire by default. Expiration applies where law or an approving board requires renewal, where a clinical device or procedure skill requires periodic reassessment, where a research authorization is tied to a specific study, or where content has become materially outdated.',
  },
  {
    q: 'Are Academy hours the same as volunteer service hours?',
    a: 'No. The hours ledger keeps categories distinct: training, practicum, field service, project, internship or fellowship, mentoring, research, and meeting. A certificate never implies that time spent in a course equals approved continuing education or volunteer service.',
  },
  {
    q: 'What does it cost?',
    a: 'Nothing. Academy pathways, assessments, and completion records are free to learners.',
  },
];
