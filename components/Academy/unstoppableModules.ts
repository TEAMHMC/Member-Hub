/**
 * The five Unstoppable modules, as HMC already delivers them.
 *
 * This is a MIGRATION of existing HMC curriculum, not new writing. Every claim, statistic,
 * clinical criterion and activity below is taken from material HMC has already delivered
 * and had approved:
 *
 *   UNSTOPPABLE Workshop Staff & Volunteer Checklist (© 2025 Health Matters Clinic)
 *     the workshop deck: module slides, learning objectives, activities, the retrospective
 *     post-then-pre questionnaire
 *   HMC Training and Curriculum Portfolio, CFCI Year 5 mapping (September 8, 2026)
 *     the authoritative record of the CE approval, the exact approved title, the trainers
 *     of record, the four LACDMH-required objectives and the published evaluation movement
 *   Unstoppable Experience Queue Cards
 *     the facilitation method, in facilitator.ts
 *
 * Two rules held throughout.
 *
 * Clinical content is reproduced, never restated. The DSM-5 criteria for Major Depressive
 * Disorder and Generalized Anxiety Disorder are quoted as the deck quotes them, including
 * the thresholds. Paraphrasing a diagnostic criterion is how a threshold moves by accident,
 * and a learner who takes a paraphrase into a conversation with a member is carrying
 * something HMC never approved.
 *
 * Attribution stays attached to the claim it supports. Where the deck names a source, the
 * source is on the same block as the statistic rather than collected at the end, because a
 * figure that arrives without its source is a figure somebody will repeat without it.
 */

import type { Block } from './blocks';

export interface UnstoppableModule {
  id: string;
  num: number;
  title: string;
  /** One line, for the module list on the course page. */
  summary: string;
  minutes: number;
  blocks: Block[];
}

export const UNSTOPPABLE_MODULES: UnstoppableModule[] = [
  {
    id: 'unstoppable-m1',
    num: 1,
    title: 'Understanding Mental Health in Black Individuals with Disabilities',
    summary:
      'How stress works in the body, what depression and anxiety actually look like, and why they are so often missed in Black patients.',
    minutes: 12,
    blocks: [
      {
        kind: 'why',
        text: [
          'Understanding how stress works gives you the advantage of being aware of your own stress and knowing how to take action when needed.',
          'That is the whole of this module in one sentence. Everything after it is detail: what the signs are, what they are called, and why they are so often read as something else in Black patients.',
        ],
      },
      {
        kind: 'concept',
        title: 'Mental health in the Black community, by the numbers',
        text: [
          'The CDC estimates that in 2019, 2.8 percent of adults experienced severe symptoms of depression, 4.2 percent experienced moderate symptoms, and 11.5 percent experienced mild symptoms in the past two weeks.',
          'The percentage of adults who experienced any symptoms of depression was highest among those aged 18 to 29 at 21.0 percent, followed by those aged 45 to 64 and 65 and over at 18.4 percent each, and lastly those aged 30 to 44 at 16.8 percent.',
        ],
      },
      { kind: 'source', text: 'Prevalence figures above: Centers for Disease Control and Prevention.', ref: { name: 'Centers for Disease Control and Prevention', use: 'Depression symptom prevalence by severity and age band' } },
      {
        kind: 'list',
        title: 'Mood disorders',
        items: [
          'Disruptive Mood Dysregulation Disorder',
          'Major Depressive Disorder',
          'Persistent Depressive Disorder (Dysthymia)',
          'Premenstrual Dysphoric Disorder',
          'Substance or Medication-Induced Depressive Disorder',
          'Depressive Disorder Due to Another Medical Condition',
          'Unspecified Depressive Disorder',
        ],
      },
      {
        kind: 'concept',
        title: 'Major Depressive Disorder (DSM-5)',
        text: [
          'Five or more of the following symptoms have been present during the same 2-week period and represent a change from previous functioning; at least one of the symptoms is either (1) depressed mood or (2) loss of interest or pleasure.',
          'Depressed mood most of the day, nearly every day, as indicated by either subjective report (for example, feels sad, empty, hopeless) or observation made by others (for example, appears tearful). In children and adolescents, this can be irritable mood.',
          'Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day.',
          'Significant weight loss when not dieting or weight gain (a change of more than 5 percent of body weight in a month), or decrease or increase in appetite nearly every day. In children, consider failure to make expected weight gain.',
          'Insomnia or hypersomnia nearly every day.',
          'Psychomotor agitation or retardation nearly every day, observable by others, not merely subjective feelings of restlessness or being slowed down.',
          'Fatigue or loss of energy nearly every day.',
          'Feelings of worthlessness or excessive or inappropriate guilt, which may be delusional, nearly every day, not merely self-reproach or guilt about being sick.',
          'Diminished ability to think or concentrate, or indecisiveness, nearly every day.',
          'Recurrent thoughts of death (not just fear of dying), recurrent suicidal ideation without a specific plan, or a suicide attempt or a specific plan for committing suicide.',
        ],
      },
      { kind: 'source', text: 'Criteria quoted from the DSM-5 as reproduced in the approved Unstoppable workshop deck. Reproduce them as written; do not paraphrase a diagnostic threshold.', ref: { name: 'DSM-5', use: 'Diagnostic criteria for Major Depressive Disorder' } },
      {
        kind: 'concept',
        title: 'Generalized Anxiety Disorder (DSM-5)',
        text: [
          'Excessive anxiety and worry, that is apprehensive expectation, occurring more days than not for at least 6 months, about a number of events or activities such as work or school performance.',
          'The individual finds it difficult to control the worry.',
          'The anxiety and worry are associated with three or more of the following six symptoms, with at least some symptoms having been present for more days than not for the past 6 months. Only one item is required in children.',
          'Restlessness or feeling keyed up or on edge. Being easily fatigued. Difficulty concentrating or mind going blank. Irritability. Muscle tension. Sleep disturbance, meaning difficulty falling or staying asleep, or restless, unsatisfying sleep.',
        ],
      },
      {
        kind: 'concept',
        title: 'Somatic symptoms, and why the diagnosis gets missed',
        text: [
          'Symptoms may present physically, for example headaches or fatigue, rather than emotionally, leading to missed diagnoses. Somatic symptoms accounted for 70 percent of depression scores in Black individuals.',
          'Symptoms may be misread due to cultural differences. Somatic expressions of mental health are often misunderstood by providers lacking cultural competence, and culturally insensitive care can lead to a misdiagnosis.',
          'Black individuals are more likely to receive a misdiagnosis of schizophrenia when expressing symptoms related to mood disorders.',
        ],
      },
      { kind: 'source', text: 'Misdiagnosis finding: National Alliance on Mental Illness.', ref: { name: 'National Alliance on Mental Illness (NAMI)' } },
      {
        kind: 'takeaways',
        items: [
          'Depression is not one condition. Seven distinct depressive disorders sit under the same everyday word.',
          'In Black patients the presentation is more often physical than emotional, which is precisely why it gets missed.',
          'A missed diagnosis and a wrong diagnosis are different harms. Both are more likely here, and the wrong one is frequently schizophrenia.',
        ],
      },
      {
        kind: 'check',
        check: {
          id: 'unst-m1-c1',
          q: 'A Black man in his forties tells a provider he has had headaches and exhaustion for months, with no mention of mood. What does this module say is most likely happening?',
          options: [
            'He is describing a physical problem, so a mental health assessment is not indicated',
            'He may be presenting depression somatically, which accounts for most depression scores in Black individuals and is a common route to a missed diagnosis',
            'He is minimizing symptoms because of stigma and should be asked directly whether he is depressed before anything else',
            'He most likely has an anxiety disorder, since fatigue is one of the six GAD symptoms',
          ],
          answer: 1,
          rationale:
            'Somatic symptoms accounted for 70 percent of depression scores in Black individuals. Physical presentation is not the absence of a mood disorder, it is one of the ways a mood disorder shows up, and reading it as purely physical is how the diagnosis is missed.',
          distractors:
            'Fatigue does appear in the GAD criteria, but a single shared symptom does not make the case, and treating physical complaints as ruling mental health out is the exact error this module is about.',
        },
      },
    ],
  },

  {
    id: 'unstoppable-m2',
    num: 2,
    title: 'The Intersectionality of Race, Disability, and Mental Health',
    summary:
      'Why mistrust is rational, and two named coping patterns that carry real cost: Superwoman Schema and John Henryism.',
    minutes: 12,
    blocks: [
      {
        kind: 'why',
        text: [
          'Mistrust continues for good reason. This module does not ask anyone to get past their mistrust. It explains where it comes from, and then looks at what people do to survive in spite of it.',
        ],
      },
      {
        kind: 'concept',
        title: 'Historical context',
        text: [
          'The history is not background. It is the reason a present-day offer of care is met with caution, and a facilitator who treats that caution as ignorance will lose the room.',
        ],
      },
      { kind: 'source', text: 'Tuskegee and its continuing shadow over vaccination efforts.', ref: { name: 'NPR', use: 'In Tuskegee, painful history shadows efforts to vaccinate African Americans', url: 'https://www.npr.org/2021/02/16/967011614/in-tuskegee-painful-history-shadows-efforts-to-vaccinate-african-americans' } },
      {
        kind: 'concept',
        title: 'Superwoman Schema',
        text: [
          'A coping strategy in Black women, often in response to stress and adversity.',
          'Its key characteristics are an obligation to present an image of strength, resistance to being vulnerable and dependent, a deep drive to succeed despite limited resources, and an obligation to help others.',
        ],
      },
      {
        kind: 'source',
        text: 'Superwoman Schema.',
        ref: {
          name: 'Woods-Giscombe et al. (2016), Journal of Best Practices in Health Professions Diversity 9(1); McDaniel, Akinwunmi, Brenya, Kidane and Nydegger (2023), Ethnicity & Health 28(6), 874-894',
          use: 'Superwoman schema, stigma, spirituality and culturally sensitive providers',
        },
      },
      {
        kind: 'concept',
        title: 'John Henryism: high-effort coping and its impact',
        text: [
          'A stressor such as racism or financial hardship meets cultural reinforcement, the expectation to be strong.',
          'That produces coping behaviours: overworking to prove worth, a push-through mindset.',
          'Those behaviours carry health risks: burnout, anxiety, depression.',
          'The protective factor in the same model is having people validate your feelings. That is not a small detail. It is the thing a support system is actually for, and it is what Module 4 builds.',
        ],
      },
      {
        kind: 'activity',
        title: 'The Privilege Walk',
        text: [
          'Delivered live in the workshop. Participants respond to a series of statements by stepping forward or back, then look at where everyone ends up standing relative to where they began.',
          'Running it virtually: participants mark their own position privately rather than moving in a room, and the debrief carries the weight. The point was never the walking, it is the conversation about what put people where they are.',
        ],
      },
      {
        kind: 'reflect',
        title: 'Before you facilitate this module',
        prompts: [
          'Which of the two coping patterns above do you recognise in yourself?',
          'What would it take for you to be the person who validates somebody else’s feelings, rather than admiring how much they are carrying?',
        ],
      },
      {
        kind: 'check',
        check: {
          id: 'unst-m2-c1',
          q: 'In the John Henryism model taught here, what is named as the protective factor?',
          options: [
            'A push-through mindset, which converts stress into achievement',
            'Cultural reinforcement of strength, which builds resilience over time',
            'Having people validate your feelings',
            'Removing the stressor, since the model is driven by racism and financial hardship',
          ],
          answer: 2,
          rationale:
            'The model runs stressor, cultural reinforcement, coping behaviours, health risks, with validation as the protective factor set against them. It is the one element in the chain a community can supply directly, which is why Module 4 exists.',
          distractors:
            'Removing the stressor is not offered as the protective factor, and framing it that way tells a facilitator that nothing can help until racism ends.',
        },
      },
    ],
  },

  {
    id: 'unstoppable-m3',
    num: 3,
    title: 'Systemic Barriers to Mental Health Care for Black Disabled Individuals',
    summary:
      'What actually stands between a person and care, including financial and accessibility barriers, worked through with the room rather than presented to it.',
    minutes: 10,
    blocks: [
      {
        kind: 'why',
        text: [
          'This module is deliberately the least lecture-shaped of the five. The barriers are ones participants have lived, and the approved design is a participant problem-solving discussion rather than a list read aloud.',
        ],
      },
      {
        kind: 'concept',
        title: 'Barriers to care',
        text: [
          'The workshop treats financial and accessibility barriers as their own subsection, because they are the two that most often stop a person who has already decided to seek help.',
          'A facilitator’s job here is to surface what the room is carrying, not to complete a slide.',
        ],
      },
      {
        kind: 'activity',
        title: 'Interactive discussion',
        text: [
          'Participants name the barriers they have hit, then work on them together. The facilitator holds the structure and does not supply the answers.',
          'The Couch Session cards in the facilitator guide carry the prompts, the follow-up questions and the optional statistics for this module.',
        ],
      },
      {
        kind: 'fieldnote',
        title: 'Facilitating a problem-solving discussion, not a vent',
        text: [
          'The difference is whether the room leaves with something it can act on. Name the barrier, ask who has got past it and how, and write down what worked.',
          'If nobody has got past it, say so plainly. A barrier nobody in the room has beaten is exactly the kind Module 5 routes to advocacy.',
        ],
      },
      {
        kind: 'takeaways',
        items: [
          'Financial and accessibility barriers get their own treatment because they stop people who have already decided to seek help.',
          'This module is run as a discussion. A facilitator who lectures through it has delivered something other than the approved curriculum.',
          'A barrier nobody can get past is an advocacy item, not a personal failure.',
        ],
      },
    ],
  },

  {
    id: 'unstoppable-m4',
    num: 4,
    title: 'Building Family and Community Support Systems',
    summary:
      'What a safe space actually requires, who the trusted networks are, and a role play that is harder than it looks.',
    minutes: 14,
    blocks: [
      {
        kind: 'concept',
        title: 'Why community matters',
        text: [
          'A strong community fosters a sense of belonging, facilitates resource sharing and mutual support, celebrates individual and collective achievements, and strengthens emotional wellbeing.',
        ],
      },
      {
        kind: 'steps',
        title: 'Creating a safe space',
        items: [
          { label: 'Start with empathy, not advice', text: 'Focus on listening without judgement or trying to fix someone immediately. Sometimes being heard is the healing.' },
          { label: 'Honor cultural values while challenging harmful norms', text: 'Both halves of that sentence matter. Honoring the culture is not the same as accepting every norm inside it.' },
          { label: 'Create dedicated spaces and times to talk', text: 'Family dinners, walks, car rides. The setting does more work than the script does.' },
        ],
      },
      {
        kind: 'list',
        title: 'Identifying trusted support networks',
        items: [
          'Mental health support',
          'Health care providers',
          'Employer benefit programs',
          'Community mental health centers',
          'Support groups',
          'Helplines',
        ],
      },
      {
        kind: 'concept',
        title: 'The role of the church',
        text: [
          'Churches serve as trusted safe havens in many Black communities, and faith can play a central role in emotional relief.',
          'Mental health stigma and distrust of traditional services remain major barriers in Black communities, but churches can reach people who may not otherwise seek treatment.',
        ],
      },
      {
        kind: 'list',
        title: 'Coping strategies for families',
        items: [
          'Mindfulness: techniques to encourage emotional regulation and reduce stress.',
          'Journaling: a reflective tool for individuals and families to process emotions and track mental health progress.',
          'Peer support: the value of seeking out peer support groups and online forums for additional guidance.',
        ],
      },
      {
        kind: 'case',
        title: 'Role playing exercise',
        scenario: true,
        text: [
          'Your niece was 27 years old when she found out she was pregnant. Although the pregnancy was unexpected, she was excited. She was even happier when she learned she was having a girl after being an aunt to seven boys. She sang to her daughter, wrote to her daily in a journal and felt overwhelming joy any time she kicked.',
          'A few months after she delivered, she expressed starting to feel less like herself. She stopped putting effort into her appearance, she lost interest in things she normally enjoyed, and she started dropping off her child frequently because she did not want to be around her. She expressed feeling guilty and anxious, and cried frequently.',
          'Role play with a partner what you might say to your niece.',
        ],
      },
      {
        kind: 'fieldnote',
        title: 'What this role play is testing',
        text: [
          'Most people reach for reassurance, and reassurance is advice wearing a kind face. Re-read the first line of the safe space steps.',
          'Run it in pairs and swap. Hearing your own words said back to you is the part that changes how people do it next time.',
        ],
      },
      {
        kind: 'check',
        check: {
          id: 'unst-m4-c1',
          q: 'In the role play, your niece says she feels guilty and does not want to be around her baby. Which opening best matches what this module teaches?',
          options: [
            'Tell her this is normal for new mothers and that it will pass',
            'Tell her she needs to see a doctor, and offer to book the appointment today',
            'Tell her you heard her, ask her to say more about how long it has felt this way, and stay with the answer',
            'Remind her how much she wanted this baby and how loved the child is',
          ],
          answer: 2,
          rationale:
            'Start with empathy, not advice. Focus on listening without judgement or trying to fix someone immediately. Sometimes being heard is the healing.',
          distractors:
            'Reassurance and reminders of how much she wanted the baby both close the conversation down and can deepen guilt. A referral may well be right, and it lands better after she has been heard than instead of it.',
        },
      },
    ],
  },

  {
    id: 'unstoppable-m5',
    num: 5,
    title: 'Community Resources and Advocacy',
    summary:
      'The national and local organisations to route people to, including those built specifically for Black communities.',
    minutes: 8,
    blocks: [
      {
        kind: 'list',
        title: 'National and local resources',
        items: [
          'NAMI, the National Alliance on Mental Illness: free peer-led support groups and educational programs.',
          'Mental Health America (MHA): culturally tailored self-help resources.',
          'LACDMH, the Los Angeles County Department of Mental Health: services and programs available for Los Angeles County residents.',
          'Disability Rights California and the NAACP Mental Health Initiative: legal advocacy resources for Black disabled individuals facing discrimination.',
        ],
      },
      {
        kind: 'list',
        title: 'Built for Black communities',
        items: [
          'NAMI Sharing Hope',
          'Black Emotional and Mental Health Collective (BEAM)',
          'Black Men Heal',
          'Black Mental Health Alliance',
          'Brother You Are on My Mind',
          'Ourselves Black',
        ],
      },
      {
        kind: 'tryit',
        title: 'Before you facilitate, find the local version',
        text: [
          'The list above is the one on the slide. It is national, and the person in front of you needs the branch, the clinic or the group they can actually reach this week.',
          'HMC’s own directory holds vetted LA County organisations by need, area and who they serve. Search it for the two or three you expect to be asked for most, and know their numbers before the session.',
        ],
      },
      {
        kind: 'takeaways',
        items: [
          'Module 5 is the one participants write down. Have the local numbers to hand, not just the national names.',
          'Legal advocacy is on this list for a reason: some of what surfaces in Module 3 is discrimination, and discrimination has a remedy that is not therapy.',
        ],
      },
    ],
  },
];

/**
 * What the County requires the training to teach, and what the evaluation rates.
 *
 * These four are not HMC's own summary of the course. They are the objectives the approval
 * was granted against, and they are the items rated in the post-training evaluation, so
 * they are reproduced exactly rather than rewritten to match the module titles.
 */
export const LACDMH_OBJECTIVES: string[] = [
  'Racial trauma, systemic inequity and ableism as drivers of disparity.',
  'Culturally responsive engagement strategies that increase psychological safety.',
  'Systemic barriers to access.',
  'At least one community-based resilience-focused intervention framework and its application.',
];

/**
 * Published movement on the retrospective post-then-pre instrument, County-sealed.
 *
 * Percentages are "strongly agree". A wrong pair, awareness of community resources 56 to
 * 95, has circulated in drafts and appears in no version of the report. The correct pair is
 * 21 to 58 and it is below. Anything quoting this course's outcomes quotes these numbers.
 */
export const UNSTOPPABLE_OUTCOMES: { measure: string; before: number; after: number }[] = [
  { measure: 'Comfort discussing mental health in the Black community', before: 28, after: 69 },
  { measure: 'Understanding systemic challenges', before: 28, after: 69 },
  { measure: 'Identifying symptoms in Black youth and adults', before: 15, after: 57 },
  { measure: 'Awareness of community resources', before: 21, after: 58 },
  { measure: 'Feeling equipped to support others', before: 22, after: 53 },
];
