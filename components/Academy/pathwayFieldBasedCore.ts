// Field-Based Community Health — the written core.
//
// The pathway held one course, Care Navigation and Coverage, which is HMC approved copy in
// plain paragraphs. It stays exactly as it is: it is quoted policy language, it is tracked
// by the curriculum gate as v1 debt with its real numbers, and mechanically wrapping it in
// typed blocks would clear that line in the gate without adding any of the teaching
// structure the v2 standard exists to require. Tracked debt is the honest state.
//
// Four courses are added here. They are the four that everything else in field work rests
// on and that can be taught in text: what community health is and what equity means
// operationally, the determinants that produce what a volunteer sees at a table, the
// boundaries that protect both people, and field safety.
//
// Two deliberate limits, both about scope rather than length.
//
// Nothing here teaches a clinical judgement. Field safety covers hand hygiene, barrier
// precautions, sharps that a volunteer must not touch, and heat, because those are
// operational. It does not teach assessment, triage, wound care, or anything that would
// have a volunteer deciding how sick somebody is. Those belong to a licensed clinician and
// to the Clinical Exposure pathway once clinical governance has reviewed it.
//
// Nothing here is presented as a certification. California has no state community health
// worker certification and DHCS does not approve certificates, so the courses say what a
// completion is and what it is not, in the words the credential rules already use.

import type { Course, Check } from './catalog';

// ── Course 2 ─────────────────────────────────────────────────────────────
// Numbered after Care Navigation and Coverage, which holds num 1.

const COMMUNITY_HEALTH_EQUITY: Course = {
  id: 'fbch-2',
  num: 2,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Community Health + Health Equity',
  promise:
    'Say what community health work is, what equity means in a decision you actually make, and where your own role stops.',
  about: [
    'Community health is a job with a method, not a disposition. This course is about the method: meeting people where they are, working through trust rather than authority, and treating access as the thing being fixed.',
    'Equity is the part most often reduced to a value statement. Here it is treated as something that shows up in ordinary operational choices, because that is the only place it ever shows up.',
  ],
  objectives: [
    'Distinguish community health work from clinical care by what each is for.',
    'Apply the difference between equality and equity to a real scheduling or siting decision.',
    'Explain why trust is the operative asset in field work and what spends it.',
    'State what an HMC completion is and is not, without overstating your role.',
  ],
  minutes: 25,
  prerequisites: 'None. This is the entry point to the pathway.',
  whoFor:
    'Community health workers, promotoras, outreach volunteers, navigators, and anyone who will represent HMC in front of the public.',
  lessons: [
    {
      id: 'fbch-2-l1',
      title: 'What this work is for',
      summary: 'Clinical care treats what has happened. Community health changes whether it happens and whether anyone gets seen.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'A clinic treats the person in front of it. Community health work is concerned with everybody who did not arrive, and with the reasons they did not.',
          'That is the whole distinction, and it decides what counts as a good day. A good clinical day is a patient treated. A good community health day may be four people who now know where to go, one person who kept coverage they were about to lose, and nobody treated at all.',
        ] },
        { kind: 'steps', title: 'What the work consists of', items: [
          { label: 'Being where people already are', text: 'A table at a swap meet, a church hall, a street medicine shift. Access is not improved by better signage at a building people do not enter.' },
          { label: 'Working through trust', text: 'You have no authority and you need none. What you have is that somebody will tell you the truth about their situation, which a form will not get.' },
          { label: 'Removing the specific obstacle', text: 'Not health in general. The bus fare, the missing document, the appointment nobody explained, the letter in the wrong language.' },
          { label: 'Connecting, then confirming', text: 'A referral that nobody followed up is an intention. The follow up is the part that makes it work.' },
        ] },
        { kind: 'check', check: {
          id: 'fbch-2-c1',
          q: 'What distinguishes community health work from clinical care?',
          options: [
            'Community health work is less specialised',
            'Clinical care treats the person present; community health work is concerned with everybody who did not arrive and why',
            'Community health work happens outdoors',
            'Clinical care requires a licence and community health work does not',
          ],
          answer: 1,
          rationale: 'The distinction is what each is for, not where it happens or what it requires. It also decides what counts as a productive day, which is why a volunteer who measures themselves in people treated will conclude they achieved nothing.',
        } },
      ],
    },
    {
      id: 'fbch-2-l2',
      title: 'Equity in an actual decision',
      summary: 'Equality is the same for everyone. Equity is what it takes for the outcome to be the same.',
      minutes: 4,
      blocks: [
        { kind: 'vocab', items: [
          { term: 'Health equality', plain: 'Everyone is offered the same thing in the same way.' },
          { term: 'Health equity', plain: 'Everyone has what they need to reach the same outcome, which means some people are offered more, or differently.' },
          { term: 'Access barrier', plain: 'The specific thing between a person and the care they are entitled to. Usually mundane: hours, transport, language, documents, fear.' },
        ] },
        { kind: 'example', title: 'The same event, decided two ways', text: [
          'A free screening event is announced for a Tuesday at ten in the morning, at an office reachable by one bus line, in English, with a flyer online.',
          'That is equality. It is open to everybody on identical terms, and it will be attended overwhelmingly by people who do not work shifts, have a car, read English and were already on a mailing list.',
          'The equity version asks who is missing and changes the terms. Saturday morning rather than Tuesday, at the church hall two blocks from the bus interchange, with a bilingual volunteer at the table, and flyers handed out at the laundromat rather than posted online. Same event, same cost, different people in the room.',
        ] },
        { kind: 'why', text: [
          'Equity is not a statement of values in a grant application. It is a set of ordinary operational choices about time, place, language and route, and every one of them is made by somebody who may not realise they are making it.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-2-c2',
          q: 'A clinic offers the same appointment slots to everybody. Why might that be equal without being equitable?',
          options: [
            'Because equal treatment is never appropriate in health care',
            'Because identical terms produce different access, so the people who cannot use weekday daytime slots are effectively excluded',
            'Because appointments should be prioritised by need',
            'Because the clinic has not published its equity statement',
          ],
          answer: 1,
          rationale: 'Identical terms are not identical access. A weekday daytime slot is available to everyone and usable by a subset, and the subset is decided by shift work, transport and caring responsibilities rather than by need.',
        } },
      ],
    },
    {
      id: 'fbch-2-l3',
      title: 'Trust is the asset, and it is spendable',
      summary: 'What you have instead of authority, and the four things that spend it.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'A volunteer at a table has no power to require anything of anybody. Everything that happens there happens because a person chose to stop, chose to answer honestly, and chose to act afterwards. Trust is what makes those three choices likely, and it belongs to HMC collectively rather than to you personally.',
        ] },
        { kind: 'list', title: 'What spends it', items: [
          'Promising an outcome you do not control. "You will qualify" is the most expensive sentence available to a volunteer, and it costs the whole organisation, not the person who said it.',
          'Guessing rather than referring. A confident wrong answer from somebody in an HMC shirt is worse than no answer, because it will be acted on.',
          'Asking for information you do not need. Every unnecessary question, and especially anything touching immigration status, tells a person this is a place that collects rather than a place that helps.',
          'Not coming back. A pop-up that appears once and never again teaches a neighbourhood that outside help is temporary, and the next organisation pays for it.',
        ] },
        { kind: 'fieldnote', title: 'The sentence that keeps it', text: [
          '"I do not want to guess on something this important, so let me get you to somebody who does this every day."',
          'It is already in HMC\'s coverage training word for word, and it works for almost every question you cannot answer. Saying it is a successful interaction, not a failure.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-2-c3',
          q: 'Why is telling somebody they will qualify for a benefit the most costly thing a volunteer can say?',
          options: [
            'Because it is against HMC policy',
            'Because eligibility decisions are not the volunteer\'s to make, and the person acts on it, so the cost falls on them and on the organisation\'s standing rather than on the volunteer',
            'Because it takes too long to explain',
            'Because volunteers should avoid discussing benefits',
          ],
          answer: 1,
          rationale: 'The harm lands on the person who relied on it and on the trust the next volunteer needs. Only the county decides eligibility, and a confident wrong answer from somebody wearing the shirt is acted on as if it were authoritative.',
        } },
      ],
    },
    {
      id: 'fbch-2-l4',
      title: 'What your completion is, and is not',
      summary: 'Said plainly, because overstating it is the most common way this work causes harm.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'Completing this pathway produces an HMC educational record. It is worth having and it is not a licence, and both halves of that sentence matter.',
        ] },
        { kind: 'steps', title: 'Plainly', items: [
          { label: 'It is', text: 'Evidence that you completed HMC coursework, passed the assessments, and were signed off on the required practicals by a named supervisor. It is a real record with real hours behind it.' },
          { label: 'It is not a state certification', text: 'California has no state community health worker certification, and the Department of Health Care Services does not approve certificates. Anybody telling you otherwise is selling something.' },
          { label: 'It is not clinical scope', text: 'It does not authorise you to assess, diagnose, treat, determine eligibility, or enrol anybody in anything.' },
          { label: 'It is not employment', text: 'It is a qualification for HMC roles and a piece of evidence elsewhere. It is not a job and it is not a guarantee of one.' },
        ] },
        { kind: 'myths', items: [
          { myth: 'Understating it makes the training look weak.', reality: 'Precision is what makes it credible. A partner, a funder or a county programme checks these claims, and one overstatement discredits the whole record.' },
          { myth: 'Describing myself as certified is close enough.', reality: 'It is a specific claim about legal standing that is not true, and the person who repeats it to a member is the one who causes the harm.' },
        ] },
        { kind: 'check', check: {
          id: 'fbch-2-c4',
          q: 'A volunteer completes the pathway and describes themselves to a member as a certified community health worker. What is wrong with this?',
          options: [
            'Nothing, since the pathway was completed',
            'California has no state community health worker certification, so it is a claim about legal standing that is not true',
            'They should wait until they have more field hours',
            'Only the supervisor may use that description',
          ],
          answer: 1,
          rationale: 'The claim is not an exaggeration of degree, it is a statement about a legal status that does not exist in California. The completion is a real HMC educational record and describing it accurately is what keeps it worth something.',
        } },
        { kind: 'takeaways', items: [
          'Clinical care treats who arrived. This work is about everybody who did not.',
          'Equity is decided in ordinary choices about time, place, language and route.',
          'Trust is the asset, it belongs to HMC, and promising outcomes spends it.',
          'Your completion is an HMC educational record. It is not a certification, a scope, or a job.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'fbch-2-equity',
    title: 'Redesign one event for equity',
    minutes: 8,
    purpose:
      'Equity is operational or it is nothing. Doing it once on a real event is what moves it out of the values paragraph.',
    fields: [
      { id: 'event', label: 'The event', help: 'A real HMC event or one you have attended. When, where, in what language, advertised how.', multiline: true },
      { id: 'missing', label: 'Who could not use it', help: 'Name the groups the terms excluded, and the specific term that excluded each one.', multiline: true },
      { id: 'changes', label: 'Four changes', help: 'Time, place, language, route. What would you change, and what would it cost?', multiline: true },
      { id: 'sentence', label: 'Your referral sentence', help: 'The words you will use when asked something you must not answer. Write them as you will say them.', multiline: false },
    ],
  },
  furtherLearning: [
    { name: 'U.S. Department of Health and Human Services, Healthy People 2030', use: 'The national framework for health equity and the social determinants, and the definitions this course uses.' },
    { name: 'California Department of Health Care Services, Community Health Worker benefit', use: 'What the Medi-Cal CHW benefit covers and what it requires, which is where the certification question actually gets settled.' },
    { name: 'Los Angeles County Department of Public Health', use: 'County health data by Service Planning Area, for seeing the inequity in your own area rather than in general.' },
  ],
};

// ── Course 3 ─────────────────────────────────────────────────────────────

const SOCIAL_DETERMINANTS: Course = {
  id: 'fbch-3',
  num: 3,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Social Determinants of Health',
  promise:
    'Recognise the conditions producing what you see at a table, and act on the one that is actually in the way.',
  about: [
    'Most of what determines somebody\'s health happens outside a clinic. This is not a slogan; it is the reason a community health role exists at all, and it is directly useful at a table.',
    'The practical value is diagnostic. Somebody who has missed three appointments has a reason, and the reason is usually a condition rather than a choice. Finding it is most of the work.',
  ],
  objectives: [
    'Name the five domains of social determinants and give a local example of each.',
    'Identify the operative barrier behind a presenting problem.',
    'Ask about conditions without interrogating, and know what not to ask.',
    'Act within your role on what you find, and hand over what is not yours.',
  ],
  minutes: 22,
  prerequisites: 'None. Course 2 first is recommended.',
  whoFor: 'Outreach volunteers, navigators, promotoras, and anybody who will be told why somebody has not been seen.',
  lessons: [
    {
      id: 'fbch-3-l1',
      title: 'The five domains',
      summary: 'Where health is actually decided, with a Los Angeles example for each.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Healthy People 2030 groups the social determinants of health into five domains. The grouping is worth knowing because it stops the conversation collapsing into either poverty in general or personal responsibility.',
        ] },
        { kind: 'steps', title: 'Five domains', items: [
          { label: 'Economic stability', text: 'Income, employment, food security, housing stability. In practice: a shift worker who loses pay for every appointment attended, so appointments lose.' },
          { label: 'Education access and quality', text: 'Literacy, language, early childhood education, higher education. In practice: a renewal packet written at a reading level its recipient cannot use, in a language they do not read.' },
          { label: 'Health care access and quality', text: 'Coverage, a usual source of care, provider availability, health literacy. In practice: coverage that exists on paper with no provider within an hour who is taking new patients.' },
          { label: 'Neighbourhood and built environment', text: 'Housing quality, transport, air, water, safety. In practice: a clinic two bus transfers away, which is ninety minutes each way with a child.' },
          { label: 'Social and community context', text: 'Support networks, discrimination, incarceration, civic participation. In practice: somebody who will not give an address because of who they think will receive it.' },
        ] },
        { kind: 'check', check: {
          id: 'fbch-3-c1',
          q: 'A member has Medi-Cal coverage but has not seen a doctor in three years because the nearest clinic taking new patients is two bus transfers away. Which domain is operative?',
          options: [
            'Economic stability',
            'Health care access and quality only',
            'Neighbourhood and built environment, since transport is the barrier and coverage is not the problem',
            'Social and community context',
          ],
          answer: 2,
          rationale: 'Coverage is present, so the coverage domain is not where the obstacle sits. Naming the operative domain matters because it decides what would actually help: a transport benefit or a closer provider, not enrolment assistance.',
        } },
      ],
    },
    {
      id: 'fbch-3-l2',
      title: 'The problem behind the problem',
      summary: 'What somebody presents with is rarely the thing in the way.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'People present with what they think you can help with, or with what is least embarrassing to say. The operative barrier is usually one layer down.',
        ] },
        { kind: 'steps', title: 'Common pairs', items: [
          { label: 'Presents as: keeps missing appointments', text: 'Often: unpaid time off, no childcare, or a transport cost that has to compete with food this week.' },
          { label: 'Presents as: not interested in a screening', text: 'Often: a previous experience of being treated badly, or a fear about what a result would mean for work or status.' },
          { label: 'Presents as: did not fill the prescription', text: 'Often: cost, no pharmacy within reach, or nobody explained what it was for.' },
          { label: 'Presents as: does not want to give an address', text: 'Often: no stable address, an unsafe household, or fear of who receives the mail. Never push on this one.' },
        ] },
        { kind: 'case', title: 'One question, four weeks saved', scenario: true, text: [
          'A navigator spends a month reminding a member about appointments, with better reminders each time. Nothing changes.',
          'At the fourth conversation she asks what happens at work when he goes to an appointment. He loses four hours of pay, and four hours is the electricity bill.',
          'No reminder was ever going to fix that. What fixed it was an early-morning slot at a different site, which existed the whole time and which nobody had offered because nobody had asked the question.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-3-c2',
          q: 'A member has missed three appointments. What is the most useful next step?',
          options: [
            'Improve the reminders',
            'Ask what happens for them on the day of an appointment',
            'Explain why the appointments matter',
            'Offer to attend with them',
          ],
          answer: 1,
          rationale: 'Missed appointments are a symptom. Asking what the day actually costs surfaces the unpaid hours, the childcare or the fare, and the fix for those is a different slot or a benefit rather than a better reminder.',
        } },
      ],
    },
    {
      id: 'fbch-3-l3',
      title: 'Asking without interrogating',
      summary: 'How to find the condition, and the questions that are never yours to ask.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Screening questionnaires for social needs exist and are useful in a clinic with consent and a record. At a table you are having a conversation, and the difference matters both ethically and practically: an interview produces guarded answers.',
        ] },
        { kind: 'steps', title: 'Four openings', items: [
          { label: 'Ask about the day, not the category', text: '"What would getting to an appointment look like for you?" rather than "do you have transport problems?" People answer the concrete version.' },
          { label: 'Offer rather than ask', text: '"Some people find the bus fare is the thing that makes this hard. Is that you?" Naming it first makes it ordinary rather than a confession.' },
          { label: 'Ask one thing, then stop', text: 'One question, then leave a silence. The instinct is to fill it with a second question, which turns a conversation into a form.' },
          { label: 'Accept the answer you get', text: 'If they do not want to say, that is the end of it. A person deciding not to tell you something has made a reasonable judgement about a stranger.' },
        ] },
        { kind: 'list', title: 'Never yours to ask', items: [
          'Immigration status. Do not ask, do not record, do not speculate, and do not let a form you are helping with go anywhere near it.',
          'Anything about a specific diagnosis, medication or clinical detail, unless the person is volunteering it and it is relevant to the referral you are making.',
          'Household income to a figure. You are not determining eligibility and you never will be.',
          'Anything you would not be able to justify needing if asked afterwards. That is the whole test.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-3-c3',
          q: 'What is the test for whether a question is appropriate at an outreach table?',
          options: [
            'Whether the person seems comfortable answering it',
            'Whether you could justify needing the answer if asked afterwards',
            'Whether it appears on a standard screening form',
            'Whether the answer would be useful to the organisation',
          ],
          answer: 1,
          rationale: 'Need is the standard, not comfort or availability on a form. Useful to the organisation is the wrong test entirely, because it justifies collecting anything, and a table that collects rather than helps loses the trust the work depends on.',
        } },
      ],
    },
    {
      id: 'fbch-3-l4',
      title: 'Acting on what you find',
      summary: 'Three things you can do, and the line where it stops being yours.',
      minutes: 4,
      blocks: [
        { kind: 'steps', title: 'Yours to do', items: [
          { label: 'Remove the specific obstacle if it is small', text: 'A bus token, a phone number saved in their phone, a form filled in the right language, an appointment moved to a time that works.' },
          { label: 'Refer, with a name and a number', text: 'Not a category. Not "there are food banks". A specific organisation, a phone number, and if possible a person, entered in their phone before they leave.' },
          { label: 'Log it so it exists', text: 'A referral nobody recorded is a conversation. Logging is what allows somebody to follow up, and follow up is the difference between a referral and an intention.' },
        ] },
        { kind: 'steps', title: 'Not yours', items: [
          { label: 'Deciding eligibility', text: 'For anything. Only the county, the plan or the programme decides.' },
          { label: 'Clinical judgement', text: 'How serious a symptom is, whether somebody needs to be seen today, what a result means. Refer.' },
          { label: 'Holding a safety concern', text: 'Anything indicating harm to a child, an older adult, a dependent adult, or immediate danger to anybody goes to your coordinator the same day, and to 988 or 911 where there is immediate danger. You notice and hand over.' },
        ] },
        { kind: 'check', check: {
          id: 'fbch-3-c4',
          q: 'Which is the difference between a referral and an intention?',
          options: [
            'A referral is written down and can be followed up',
            'A referral is made by a supervisor',
            'A referral requires the member\'s consent',
            'A referral names a category of service',
          ],
          answer: 0,
          rationale: 'An unlogged referral cannot be followed up by anybody, so it depends entirely on the member acting alone with what they remember. Consent matters and is a separate requirement; naming a category rather than an organisation is the weaker version of the same failure.',
        } },
        { kind: 'takeaways', items: [
          'Five domains: economic, education, health care access, neighbourhood, social context.',
          'What somebody presents with is rarely the barrier. Ask what the day costs them.',
          'Ask what you could justify needing. Never immigration status.',
          'A referral is logged, named and numbered. Otherwise it is an intention.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'fbch-3-barrier',
    title: 'Trace one barrier to its domain',
    minutes: 6,
    purpose:
      'The diagnostic habit is the whole value of this course, and it forms by being done once on a real situation rather than a hypothetical one.',
    fields: [
      { id: 'presented', label: 'What was presented', help: 'A real situation you have seen or been told about. What did the person say the problem was?', multiline: true },
      { id: 'operative', label: 'The operative barrier and its domain', help: 'What was actually in the way, and which of the five domains it belongs to.', multiline: true },
      { id: 'question', label: 'The question that would have found it', help: 'Written as you would ask it at a table, about the day rather than the category.', multiline: true },
      { id: 'action', label: 'What was yours to do', help: 'What you could remove or refer, and what you had to hand over.', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'U.S. Department of Health and Human Services, Healthy People 2030', use: 'The five domains as defined nationally, and the evidence base behind each.' },
    { name: 'Los Angeles County Department of Public Health', use: 'Local health and social data by Service Planning Area, for the version of this that is about your own area.' },
    { name: 'Los Angeles County Department of Public Social Services', use: 'The benefits a barrier in the economic domain is most often referred into.' },
  ],
};

// ── Course 4 ─────────────────────────────────────────────────────────────

const BOUNDARIES_ETHICS_PRIVACY: Course = {
  id: 'fbch-4',
  num: 4,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Professional Boundaries + Ethics + Privacy',
  promise:
    'Hold a boundary in the moment it is tested, and know what you may write down, repeat, or photograph.',
  about: [
    'Field work puts a volunteer in somebody\'s life at a difficult moment, with no desk between them. The boundaries that are obvious in a clinic have to be held deliberately at a table, on a pavement, in a car park.',
    'Every scenario in this course is one that happens, and every one is a volunteer trying to help. That is what makes them worth rehearsing before they arrive.',
  ],
  objectives: [
    'Hold the four boundaries that are tested most often in field work.',
    'Decide what to do when a member offers money, a gift, a lift, or a friendship.',
    'Apply HMC\'s privacy rules to a photograph, a story and a form.',
    'Recognise a dual relationship and say what to do about it.',
  ],
  minutes: 25,
  prerequisites: 'None. Complete before your first field shift, not after it.',
  whoFor: 'Every volunteer working in the field, at a table, or on a street medicine shift.',
  lessons: [
    {
      id: 'fbch-4-l1',
      title: 'The four boundaries tested most',
      summary: 'Money, transport, personal contact, and time. Each with the sentence that holds it.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'These four come up constantly, they are always offered or requested kindly, and a volunteer who has not decided in advance will decide badly under social pressure. Each has a sentence, and the sentence is short on purpose.',
        ] },
        { kind: 'steps', title: 'Four, with the words', items: [
          { label: 'Money', text: 'You do not give money and you do not take it. Not a loan, not bus fare from your own pocket, not a gift afterwards. "I am not able to do that one, and it is not about you. What I can do is get you to somebody who has actual funds for this."' },
          { label: 'Transport', text: 'You do not drive a member anywhere in your own vehicle unless HMC has authorised it for that shift. This protects you at least as much as them. "I cannot give you a ride, but let me sort out how you get there."' },
          { label: 'Personal contact', text: 'Your own phone number, your address, your social media. Contact runs through HMC channels. "Everything goes through the office number so that whoever is on shift can help you, not only me."' },
          { label: 'Time outside the role', text: 'Helping on your own time, visiting, running an errand. It feels generous and it makes you the service. "I am only able to do this through HMC, because that way it does not stop when I am not here."' },
        ] },
        { kind: 'why', text: [
          'Each boundary protects the member as much as the volunteer. A person whose support depends on one individual loses it the week that individual has flu, moves, or burns out. Boundaries are what make help survive the person providing it.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-4-c1',
          q: 'A member needs to get to an appointment and a volunteer could easily drive them. Why should they not?',
          options: [
            'Because it would take too long',
            'Because it is outside what HMC has authorised for that shift, and unauthorised transport carries liability for both of them while making the help dependent on one person',
            'Because the member might not be grateful',
            'Because volunteers should not interact with members outside events',
          ],
          answer: 1,
          rationale: 'The reason is both liability and durability. Help that depends on one volunteer\'s car ends the week that volunteer is unavailable, and the boundary is what makes the offer survive them.',
        } },
      ],
    },
    {
      id: 'fbch-4-l2',
      title: 'When it is offered kindly',
      summary: 'Gifts, food, invitations, and the culturally loaded refusal.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'The difficult version is not a request. It is a gift, offered by somebody with very little, as a matter of dignity. Refusing flatly can be a genuine insult and can undo the relationship you have built.',
        ] },
        { kind: 'steps', title: 'How to hold it without wounding', items: [
          { label: 'Food and drink at the moment', text: 'Accepting a cup of coffee or a plate at a community event is usually right, and refusing it can be the ruder act. Use judgement about what it costs them and never let it become expected.' },
          { label: 'Money or valuables', text: 'Never, and say why in terms of yourself rather than of them. "They do not let us take anything, and I would be in trouble. It means a lot that you offered."' },
          { label: 'Redirect the impulse', text: 'People want to give something back. Give them a real route: volunteering, telling a neighbour about the event, filling in the feedback card. That accepts the gesture and keeps the boundary.' },
          { label: 'Tell your coordinator', text: 'Not to report anybody. So that a pattern is visible, and so that you are not the only person who knows.' },
        ] },
        { kind: 'myths', items: [
          { myth: 'Refusing a gift is always the professional choice.', reality: 'A flat refusal can be a real insult and can cost the relationship. The judgement is about value and expectation, and the way you refuse matters as much as whether you do.' },
          { myth: 'Accepting something small commits me to nothing.', reality: 'It commits you to nothing and it can create an expectation on their side, which is why the redirect matters. Naming a way to give back settles it.' },
        ] },
        { kind: 'check', check: {
          id: 'fbch-4-c2',
          q: 'A member with very little insists on giving a volunteer twenty dollars after a successful referral. What is the best response?',
          options: [
            'Accept it to avoid causing offence',
            'Refuse firmly and explain that accepting gifts is unprofessional',
            'Decline in terms of the rules rather than of them, thank them for the gesture, and offer a real way to give back',
            'Accept it and pass it to the organisation',
          ],
          answer: 2,
          rationale: 'Money is never acceptable, and how it is declined decides whether the relationship survives. Framing it as a rule about the volunteer rather than a judgement about the giver, then naming a real way to give back, keeps both the boundary and the dignity.',
        } },
      ],
    },
    {
      id: 'fbch-4-l3',
      title: 'Privacy in the field',
      summary: 'What you may photograph, write down, and repeat.',
      minutes: 5,
      blocks: [
        { kind: 'steps', title: 'Photographs', items: [
          { label: 'No identifiable person without consent', text: 'A photograph of a crowd at an event is one thing. A photograph of somebody at an intake table is a record of them receiving help, and it needs their explicit, unpressured agreement.' },
          { label: 'Never of a document, a form or a screen', text: 'That includes the shot you take to remember a phone number. It is a copy of somebody\'s information on your personal device.' },
          { label: 'Nothing at a street medicine shift', text: 'Being unhoused is not a photo opportunity and consent obtained in that setting is rarely meaningfully free.' },
        ] },
        { kind: 'steps', title: 'Writing and repeating', items: [
          { label: 'Log through HMC, not on your phone', text: 'Notes about a member belong in the system, not in your own notes app, not in a text to another volunteer.' },
          { label: 'Apply the identifiability test before telling any story', text: 'Would somebody who knows them recognise them from what you are about to say? A neighbourhood, an age, a job and a situation together identify a person as surely as a name.' },
          { label: 'Never in a group chat', text: 'Volunteer group chats are the most common leak in every organisation of this kind. Anything about an individual goes through the log.' },
        ] },
        { kind: 'case', title: 'The post that meant well', scenario: true, text: [
          'A volunteer posts about a moving afternoon at a street medicine shift. No name. She mentions the block, that he is a veteran in his sixties, that he has been sleeping there about two years, and what he said about his daughter.',
          'Everybody on that block knows exactly who it is. So does his daughter, who did not know where he was.',
          'Nothing was disclosed in the sense the volunteer would have recognised. The post was warm and it was about the organisation doing good. It also told a neighbourhood, and one family, something that was his to tell.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-4-c3',
          q: 'A volunteer wants to photograph a member at an intake table to show the event was well attended. What is required?',
          options: [
            'Nothing, since the event is a public one',
            'Their explicit and unpressured consent, because the photograph records them receiving help',
            'Approval from the shift lead',
            'Only that no document is visible in the frame',
          ],
          answer: 1,
          rationale: 'A picture of somebody at an intake table is a record of that person receiving assistance, which is information about them. Consent has to be explicit and it has to be free, which is difficult to obtain in a setting where somebody is asking for help.',
        } },
      ],
    },
    {
      id: 'fbch-4-l4',
      title: 'Dual relationships',
      summary: 'When the person at your table is your neighbour, your cousin, or somebody you know.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'HMC volunteers work in their own neighbourhoods, which is a large part of why the work succeeds and guarantees that sooner or later the person in front of you is somebody you know.',
          'This is not misconduct and it does not have to be avoided. It has to be handled, and handled the same way every time.',
        ] },
        { kind: 'steps', title: 'What to do', items: [
          { label: 'Say it out loud, to them', text: '"We know each other, so tell me if you would rather talk to one of my colleagues. Either is completely fine." Say it before anything sensitive is discussed, not after.' },
          { label: 'Offer the handoff genuinely', text: 'Not as a formality. Make it easy to take, and do not be visibly relieved or offended either way.' },
          { label: 'Tell your coordinator', text: 'A short note. It protects you if anything is questioned later and it lets the shift be staffed differently next time.' },
          { label: 'Never discuss it outside the log', text: 'The one you know is the one whose story you are most likely to repeat, because it is the one you have context for. That is exactly the risk.' },
        ] },
        { kind: 'check', check: {
          id: 'fbch-4-c4',
          q: 'A volunteer recognises the next person at the intake table as a neighbour. What should they do?',
          options: [
            'Continue, since knowing them will help build trust',
            'Quietly hand the person to a colleague without explanation',
            'Name it, offer a colleague genuinely, let the member choose, and tell the coordinator',
            'Refuse to assist and end the interaction',
          ],
          answer: 2,
          rationale: 'The member gets to decide, which requires that they be told. A silent handoff removes their choice and can read as rejection, and continuing without naming it leaves them with no way to ask for somebody else.',
        } },
        { kind: 'takeaways', items: [
          'Money, transport, personal contact and time outside the role. Have the sentence ready.',
          'A gift refused badly can cost the relationship. Decline in terms of the rules and redirect the impulse.',
          'No identifiable photographs, nothing on your own device, nothing in a group chat.',
          'A dual relationship is named out loud, handed off genuinely, and logged.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'fbch-4-sentences',
    title: 'Your boundary sentences',
    minutes: 6,
    purpose:
      'Under social pressure people use whatever words they already have. This exercise is about having them.',
    fields: [
      { id: 'money', label: 'Money', help: 'What you will say when money is offered, and when it is asked for.', multiline: true },
      { id: 'transport', label: 'Transport and personal contact', help: 'Your words for a lift, and for somebody asking for your number.', multiline: true },
      { id: 'known', label: 'Somebody you know', help: 'The sentence you will use when the person at the table is a neighbour.', multiline: true },
      { id: 'story', label: 'The story you will not tell', help: 'Apply the identifiability test to something you have already told somebody. What would you remove?', multiline: true },
    ],
  },
  furtherLearning: [
    { name: 'U.S. Department of Health and Human Services, Office for Civil Rights, HIPAA Privacy Rule', use: 'What identifiable health information is, and the minimum necessary standard behind the rule about what you may write down.' },
    { name: 'National Association of Community Health Workers', use: 'The professional identity and ethical expectations of the CHW role, from the field\'s own association.' },
  ],
};

// ── Course 5 ─────────────────────────────────────────────────────────────
//
// Operational safety only. Nothing here teaches assessment, triage or care.

const FIELD_SAFETY: Course = {
  id: 'fbch-5',
  num: 5,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Field Safety + Infection Prevention',
  promise:
    'Work a field shift without becoming a casualty, and know the four things you must never handle.',
  about: [
    'This is the operational half of field safety: your own protection, the barriers between you and infection, the hazards a street or a car park actually contains, and heat.',
    'It teaches nothing clinical. It will not tell you how sick somebody is, what a symptom means, or what to do for a wound. Those are a clinician\'s decisions and this course is explicit about handing them over, because the most common way a volunteer causes harm in the field is by helping past their scope.',
  ],
  objectives: [
    'Perform hand hygiene and use barrier protection correctly on a field shift.',
    'Name the four things a volunteer must never handle and what to do instead.',
    'Assess your own safety before entering or staying in a location.',
    'Recognise heat illness risk in yourself and others, and act by escalating.',
  ],
  minutes: 24,
  prerequisites:
    'None for the knowledge. Field work additionally requires an approved HMC role, a supervisor, and any role-specific requirements HMC assigns.',
  whoFor: 'Volunteers on outreach, pop-up, health fair and street medicine support shifts.',
  freshness:
    'Infection prevention practice follows current CDC and Los Angeles County Department of Public Health guidance, which changes. HMC shift protocol is what you follow on the day, and it is the version to check before a shift rather than this course.',
  lessons: [
    {
      id: 'fbch-5-l1',
      title: 'Hands and barriers',
      summary: 'The two measures that do most of the work, done properly.',
      minutes: 4,
      blocks: [
        { kind: 'prose', text: [
          'Hand hygiene is the single most effective infection prevention measure available to you, and the most commonly done badly. Barrier protection is second and is frequently used in a way that makes things worse.',
        ] },
        { kind: 'steps', title: 'Hands', items: [
          { label: 'When', text: 'Before and after any contact with a person, after touching shared surfaces or equipment, after removing gloves, before eating, and after using a restroom. After removing gloves is the one people skip.' },
          { label: 'How', text: 'Soap and water where hands are visibly soiled, for the full twenty seconds. Alcohol-based sanitiser otherwise, enough to keep hands wet for the whole rub, covering the backs, between fingers and thumbs.' },
          { label: 'Nails and jewellery', text: 'Short nails, minimal rings. Both hold what handwashing is meant to remove.' },
        ] },
        { kind: 'steps', title: 'Barriers', items: [
          { label: 'Gloves are for a task, not for a shift', text: 'A pair worn for two hours across many contacts is a way to move contamination around efficiently. New pair per task, hand hygiene after removal.' },
          { label: 'Do not touch your face', text: 'The commonest self-contamination route. Gloves do not change this, they make people less careful about it.' },
          { label: 'Masks and eye protection when HMC protocol says', text: 'Which is set by the shift and the current county guidance, not by preference. If the protocol says it, it is not optional; if it does not, ask rather than improvise.' },
        ] },
        { kind: 'check', check: {
          id: 'fbch-5-c1',
          q: 'A volunteer wears the same pair of gloves through several contacts across two hours. What is the effect?',
          options: [
            'Adequate protection, since a barrier is present',
            'It moves contamination between people and surfaces efficiently, which is worse than no gloves used with hand hygiene',
            'It is acceptable if the gloves are not visibly soiled',
            'It protects the volunteer but not the members',
          ],
          answer: 1,
          rationale: 'Gloves protect for the task they were put on for. Worn across many contacts they become the transfer mechanism, and they also reduce hand hygiene because the volunteer feels protected. New pair per task, hands cleaned after removal.',
        } },
      ],
    },
    {
      id: 'fbch-5-l2',
      title: 'The four you never handle',
      summary: 'Sharps, body fluids, medication, and anybody else\'s belongings.',
      minutes: 5,
      blocks: [
        { kind: 'steps', title: 'Never', items: [
          { label: 'Sharps', text: 'Needles, syringes, lancets, broken glass, anything that could puncture. You do not pick it up, move it, sweep it, or put it in a bag. You mark the spot, keep people away from it, and tell the clinical lead or the shift lead, who has a container and the training to use it.' },
          { label: 'Blood and body fluids', text: 'Not with gloves, not with a paper towel. Keep people back and get the person on the shift whose role covers it. If you are exposed, wash the area immediately with soap and water and report it the same hour, not at the end of the shift.' },
          { label: 'Medication', text: 'You do not hand somebody a pill, hold their medication, or advise on it. Including something as ordinary as a painkiller from your own bag. It is somebody else\'s clinical decision every time.' },
          { label: 'Somebody else\'s belongings', text: 'Especially on a street medicine shift. Do not move, tidy, or discard anything. Those belongings may be everything a person owns, and moving them can end their trust in the whole organisation.' },
        ] },
        { kind: 'why', text: [
          'Every one of these has an ordinary version where handling it seems obviously helpful. That is why the rule is absolute rather than a judgement: the moment it becomes a judgement, it becomes a judgement made in a hurry by somebody who is trying to help.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-5-c2',
          q: 'A volunteer sees a used needle on the ground near the intake table, where people are walking. What should they do?',
          options: [
            'Carefully pick it up with gloves and dispose of it',
            'Sweep it to the side away from foot traffic',
            'Mark the spot, keep people away from it, and tell the clinical or shift lead who has a sharps container',
            'Photograph it and report it at the end of the shift',
          ],
          answer: 2,
          rationale: 'A volunteer never handles a sharp, including with gloves and including to move it somewhere safer. Containing the area and getting the person with the container and the training is the entire correct action, and it takes less time than the alternatives.',
          distractors: 'Waiting until the end of the shift leaves a puncture hazard in a walkway for hours.',
        } },
      ],
    },
    {
      id: 'fbch-5-l3',
      title: 'Your own safety',
      summary: 'Before you enter, while you are there, and the permission to leave.',
      minutes: 4,
      blocks: [
        { kind: 'steps', title: 'Before', items: [
          { label: 'Never alone', text: 'Field shifts are worked in pairs or teams. If you find yourself alone, that is a reason to stop and call your lead, not a reason to carry on carefully.' },
          { label: 'Somebody knows where you are', text: 'Your lead knows the location, the team, and when you expect to finish.' },
          { label: 'Phone charged, exit known', text: 'Look at how you would leave before you need to. In a building, in an encampment, at a table with one entrance.' },
        ] },
        { kind: 'steps', title: 'While you are there', items: [
          { label: 'Keep an exit behind you', text: 'Do not let yourself be positioned with people between you and the way out. This costs nothing and is the single most useful habit in this lesson.' },
          { label: 'Watch the environment as well as the person', text: 'Dogs, traffic, other people arriving, changes in tone nearby. Most field incidents come from the surroundings rather than the person you are talking to.' },
          { label: 'Do not enter a dwelling or a tent', text: 'Talk at the entrance. This is HMC protocol and it is not a judgement about anybody.' },
        ] },
        { kind: 'concept', title: 'You are allowed to leave', text: [
          'If a situation feels unsafe, you disengage and leave. You do not need to be able to justify it, you do not need your partner to agree, and you are never required to explain to the person why you are going.',
          '"I need to step away, I will come back to you" is enough. Nobody at HMC will ask you to defend that decision afterwards, and any culture that would is one worth leaving.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-5-c3',
          q: 'A volunteer feels unsafe during a field interaction but cannot point to anything specific. What should they do?',
          options: [
            'Continue, since a specific threat has not been identified',
            'Ask their partner whether they feel the same before deciding',
            'Disengage and leave, without needing to justify the decision',
            'Finish the current conversation and then withdraw',
          ],
          answer: 2,
          rationale: 'Requiring a volunteer to articulate a threat before withdrawing means they will stay through the period where withdrawing was still easy. The judgement is theirs alone and it is not reviewed afterwards.',
        } },
      ],
    },
    {
      id: 'fbch-5-l4',
      title: 'Heat',
      summary: 'The hazard most likely to actually hurt somebody on an HMC shift.',
      minutes: 5,
      blocks: [
        { kind: 'prose', text: [
          'In Los Angeles, heat is the field hazard most likely to injure a volunteer or a member, and it does it gradually enough that people work through the early part of it.',
        ] },
        { kind: 'steps', title: 'For yourself and your team', items: [
          { label: 'Water before thirst, shade on a schedule', text: 'Thirst arrives after the deficit. Drink on a timer and take shade breaks as a rota rather than when somebody feels bad, because the person who most needs one is the least likely to ask.' },
          { label: 'Watch your partner, not yourself', text: 'Early heat illness impairs the judgement you would use to notice it. Pairs work because each person is watching the other.' },
          { label: 'Escalate, do not assess', text: 'If somebody is unwell in the heat, get them out of it, get them water if they are fully alert and able to drink, and get the clinical lead or emergency services. Do not attempt to judge how serious it is. Confusion, a lack of sweating in the heat, or somebody who cannot stay alert is an emergency call, not a shade break.' },
        ] },
        { kind: 'concept', title: 'Members are at higher risk than you', text: [
          'Somebody queuing in the sun may have been outside all day, may be on medication that affects heat tolerance, and may not have had water. The line itself is a hazard, and shade and water for the queue is part of running a table rather than a courtesy.',
        ] },
        { kind: 'check', check: {
          id: 'fbch-5-c4',
          q: 'On a hot shift, a member becomes confused and has stopped sweating. What should the volunteer do?',
          options: [
            'Move them to shade and monitor them for improvement',
            'Give them water and sit with them until they feel better',
            'Get them out of the heat and call for emergency medical help, without attempting to judge severity',
            'Ask whether they have a medical condition and act accordingly',
          ],
          answer: 2,
          rationale: 'Confusion and absent sweating in the heat are signs that require emergency medical help, and a volunteer is not the person who assesses severity. Monitoring for improvement is the version of this that loses time, and offering water to somebody who is confused carries its own risk.',
        } },
        { kind: 'takeaways', items: [
          'Hand hygiene after removing gloves. New gloves per task.',
          'Sharps, fluids, medication and belongings: never handled, always escalated.',
          'Never alone, keep an exit behind you, do not enter a dwelling, and you may always leave.',
          'Heat: drink on a timer, watch your partner, escalate rather than assess.',
        ] },
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'fbch-5-shift',
    title: 'Your shift safety card',
    minutes: 6,
    purpose:
      'Written before a shift and checkable in thirty seconds. Every item is something people improvise when they have not written it down.',
    fields: [
      { id: 'contacts', label: 'Who you call', help: 'Your shift lead, the clinical lead if there is one, and how you reach each on the day.', multiline: true },
      { id: 'exposure', label: 'If you are exposed', help: 'What you do in the first minute after a splash or a puncture, and who you tell within the hour.', multiline: true },
      { id: 'leave', label: 'Your disengagement line', help: 'The words you will use to step away from a situation that feels unsafe.', multiline: false },
      { id: 'heat', label: 'Heat plan', help: 'Your shade rota, your water timing, and who is watching whom.', multiline: true },
    ],
    reference: {
      title: 'Fixed rules that do not depend on the shift',
      items: [
        'Never handle sharps, body fluids, medication, or anybody else\'s belongings.',
        'Never enter a dwelling, tent or vehicle. Talk at the entrance.',
        'Never work a field shift alone.',
        'Hand hygiene after removing gloves, every time.',
        'You may always leave, and you do not have to justify it.',
        '911 for a medical emergency. 988 for a suicide or mental health crisis.',
      ],
    },
  },
  furtherLearning: [
    { name: 'Centers for Disease Control and Prevention, hand hygiene and standard precautions guidance', use: 'The current national practice behind the hand hygiene and barrier sections.' },
    { name: 'Los Angeles County Department of Public Health', use: 'Local guidance, including heat advisories and current infection prevention requirements for community settings.' },
    { name: 'California Division of Occupational Safety and Health, heat illness prevention', use: 'The state standard for outdoor work in heat, which is the framework HMC shift protocol follows.' },
  ],
};

// ── Pathway assessment ───────────────────────────────────────────────────
//
// Ten constructs across the four written courses. Parallel forms, since the baseline is
// reviewed with rationales immediately and those items therefore cannot carry a credential.
// Care Navigation and Coverage is deliberately not examined here: it is quoted policy with
// dates that change, and a post-test item citing a 2027 date would go stale in the gate's
// blind spot.

export const FBCH_PRE: Check[] = [
  {
    id: 'fbch-t1',
    q: 'What distinguishes community health work from clinical care?',
    options: [
      'It is less specialised',
      'Clinical care treats the person present; community health work is concerned with everybody who did not arrive and why',
      'It happens outside a building',
      'It does not require training',
    ],
    answer: 1,
    why: 'The distinction is what each is for. It also decides what counts as a productive day, which is why a volunteer measuring themselves in people treated will wrongly conclude they achieved nothing.',
  },
  {
    id: 'fbch-t2',
    q: 'A screening event is held on a Tuesday morning, in English, at a site on one bus line. Why is this equal without being equitable?',
    options: [
      'Because equal treatment is never appropriate',
      'Because identical terms produce different access, so shift workers, non-English readers and people without cars are effectively excluded',
      'Because screenings should be prioritised by need',
      'Because the event was not advertised widely enough',
    ],
    answer: 1,
    why: 'Identical terms are not identical access. Who can use a weekday daytime slot is decided by shift work, transport and language rather than by need.',
  },
  {
    id: 'fbch-t3',
    q: 'Which sentence is the most expensive thing a volunteer can say?',
    options: [
      '"I do not know."',
      '"You will qualify."',
      '"Let me get you to somebody who does this every day."',
      '"I am not able to do that one."',
    ],
    answer: 1,
    why: 'Eligibility is not the volunteer\'s to determine and the person acts on it. The cost falls on them and on the organisation\'s standing, not on the volunteer who said it.',
  },
  {
    id: 'fbch-t4',
    q: 'A member has coverage but has not been seen in three years because the nearest clinic accepting patients is two bus transfers away. Which determinant domain is operative?',
    options: ['Economic stability', 'Health care access and quality', 'Neighbourhood and built environment', 'Social and community context'],
    answer: 2,
    why: 'Coverage is present, so the barrier is transport. Naming the right domain decides what would help: a transport benefit or a closer provider, not enrolment assistance.',
  },
  {
    id: 'fbch-t5',
    q: 'A member has missed three appointments. What is the most useful next step?',
    options: [
      'Improve the reminders',
      'Explain why the appointments matter',
      'Ask what happens for them on the day of an appointment',
      'Offer to attend with them',
    ],
    answer: 2,
    why: 'Missed appointments are a symptom. Asking what the day costs surfaces unpaid hours, childcare or fare, and those are fixed by a different slot or a benefit rather than a better reminder.',
  },
  {
    id: 'fbch-t6',
    q: 'What is the test for whether a question is appropriate at an outreach table?',
    options: [
      'Whether the person seems comfortable answering',
      'Whether you could justify needing the answer if asked afterwards',
      'Whether it is on a standard screening form',
      'Whether the answer is useful to the organisation',
    ],
    answer: 1,
    why: 'Need is the standard. Useful to the organisation is the wrong test entirely, because it justifies collecting anything, and a table that collects rather than helps loses the trust the work depends on.',
  },
  {
    id: 'fbch-t7',
    q: 'A member offers a volunteer twenty dollars after a successful referral. What is the best response?',
    options: [
      'Accept it to avoid offence',
      'Refuse firmly and explain that gifts are unprofessional',
      'Accept it and pass it to the organisation',
      'Decline in terms of the rules rather than of them, thank them, and offer a real way to give back',
    ],
    answer: 3,
    why: 'Money is never acceptable, and how it is declined decides whether the relationship survives. Framing it as a rule about yourself and redirecting the impulse keeps both the boundary and their dignity.',
  },
  {
    id: 'fbch-t8',
    q: 'A volunteer recognises the next person at the table as a neighbour. What should they do?',
    options: [
      'Continue, since knowing them builds trust',
      'Quietly pass them to a colleague',
      'Name it, genuinely offer a colleague, let the member choose, and tell the coordinator',
      'Decline to assist',
    ],
    answer: 2,
    why: 'The member decides, which requires being told. A silent handoff removes their choice and can read as rejection.',
  },
  {
    id: 'fbch-t9',
    q: 'A used needle is on the ground near the intake table. What does a volunteer do?',
    options: [
      'Pick it up carefully with gloves',
      'Sweep it away from foot traffic',
      'Report it at the end of the shift',
      'Mark the spot, keep people away, and get the lead who has a sharps container',
    ],
    answer: 3,
    why: 'A volunteer never handles a sharp, including with gloves and including to move it somewhere safer. Containing the area and fetching the trained person is the whole correct action.',
  },
  {
    id: 'fbch-t10',
    q: 'On a hot shift a member becomes confused and has stopped sweating. What should a volunteer do?',
    options: [
      'Move them to shade and watch for improvement',
      'Get them out of the heat and call for emergency medical help, without judging severity',
      'Give water and sit with them',
      'Ask about medical conditions and act accordingly',
    ],
    answer: 1,
    why: 'These signs require emergency help, and a volunteer does not assess severity. Watching for improvement is the version that loses time.',
  },
];

export const FBCH_POST: Check[] = [
  {
    id: 'fbch-p1',
    q: 'A volunteer finishes a shift where nobody was treated, four people learned where to go, and one kept coverage they were about to lose. How should that shift be understood?',
    options: [
      'Unproductive, since no care was delivered',
      'Productive, because access and continuity are what this work is for',
      'Neutral, pending follow-up data',
      'Productive only if the referrals are later confirmed',
    ],
    answer: 1,
    why: 'A good community health day is often nobody treated. Measuring the work in people treated is the error that leads volunteers to conclude the shift achieved nothing.',
  },
  {
    id: 'fbch-p2',
    q: 'A team wants the same screening event to reach people it has been missing. Which change set reflects equity rather than equality?',
    options: [
      'Advertise the same event more widely',
      'Add a second identical Tuesday session',
      'Move it to Saturday at a site by the bus interchange, staff it bilingually, and hand flyers out locally',
      'Ask attendees to bring a friend',
    ],
    answer: 2,
    why: 'Equity changes the terms rather than the volume. Time, place, language and route are the operational choices that decide who is in the room.',
  },
  {
    id: 'fbch-p3',
    q: 'Which of these spends trust that belongs to HMC rather than to the individual volunteer?',
    options: [
      'Saying you do not want to guess and offering a referral',
      'Giving a confident answer about eligibility that turns out to be wrong',
      'Declining to accept a gift',
      'Logging a referral in the system',
    ],
    answer: 1,
    why: 'A confident wrong answer from somebody in an HMC shirt is acted on as authoritative, and the cost lands on the person who relied on it and on the next volunteer at the next table.',
  },
  {
    id: 'fbch-p4',
    q: 'A member says they are not interested in a screening. What is most often underneath that?',
    options: [
      'A genuine lack of concern about their health',
      'A previous experience of being treated badly, or fear about what a result would mean',
      'Not understanding what a screening is',
      'A scheduling conflict',
    ],
    answer: 1,
    why: 'People present with what is least costly to say. Refusal is frequently about a prior experience or a fear about consequences, and neither is addressed by explaining the screening again.',
  },
  {
    id: 'fbch-p5',
    q: 'Which question belongs at an outreach table?',
    options: [
      'What is your immigration status?',
      'What is your household income?',
      'What would getting to an appointment look like for you?',
      'What medications are you taking?',
    ],
    answer: 2,
    why: 'It is concrete, it is about the day rather than a category, and the answer is something the volunteer can act on. The other three are either never appropriate or outside the role.',
  },
  {
    id: 'fbch-p6',
    q: 'What makes a referral different from an intention?',
    options: [
      'It is logged, named and numbered, so somebody can follow it up',
      'It is made by a supervisor',
      'It names a category of service',
      'It is offered in writing to the member',
    ],
    answer: 0,
    why: 'An unlogged referral depends entirely on the member acting alone from memory. Logging is what makes follow-up possible, and follow-up is what makes it work.',
  },
  {
    id: 'fbch-p7',
    q: 'A member needs a lift to an appointment and a volunteer could easily provide one. Why should they not?',
    options: [
      'The member may be ungrateful',
      'Volunteers should not interact with members between events',
      'It would take too long',
      'It is outside what HMC authorised, and it makes the help depend on one person who will eventually be unavailable',
    ],
    answer: 3,
    why: 'Liability and durability. Help resting on one volunteer\'s car ends the week that volunteer is unavailable, which is the member\'s loss.',
  },
  {
    id: 'fbch-p8',
    q: 'A volunteer posts warmly about a street medicine shift with no name, but includes the block, an approximate age, military service and a family detail. What is the problem?',
    options: [
      'Nothing, since no name was given',
      'The combination identifies the person to everybody who knows them, including family who may not have known where he was',
      'The organisation had not approved the post',
      'Street medicine shifts should never be mentioned publicly',
    ],
    answer: 1,
    why: 'Identifiability is not about names. Four ordinary details together identify a person to the audience that matters most to them, and the information was his to share.',
  },
  {
    id: 'fbch-p9',
    q: 'A volunteer has worn one pair of gloves across several contacts over two hours. What is the effect?',
    options: [
      'Adequate, since a barrier was present',
      'Acceptable while the gloves are not visibly soiled',
      'It transfers contamination between people and surfaces, and reduces hand hygiene because the volunteer feels protected',
      'It protects the volunteer but not members',
    ],
    answer: 2,
    why: 'Gloves protect for the task they were put on for. Across many contacts they become the transfer mechanism, which is why the rule is a new pair per task with hand hygiene after removal.',
  },
  {
    id: 'fbch-p10',
    q: 'A volunteer feels unsafe in a field interaction but cannot identify a specific threat. What should they do?',
    options: [
      'Disengage and leave, without needing to justify it',
      'Continue, since no threat has been identified',
      'Check whether their partner feels the same first',
      'Complete the conversation and then withdraw',
    ],
    answer: 0,
    why: 'Requiring a volunteer to articulate a threat before withdrawing keeps them there through the period when leaving was still easy. The judgement is theirs and it is not reviewed afterwards.',
  },
];

export const FBCH_CORE_COURSES: Course[] = [
  COMMUNITY_HEALTH_EQUITY,
  SOCIAL_DETERMINANTS,
  BOUNDARIES_ETHICS_PRIVACY,
  FIELD_SAFETY,
];
