// Community Mental Health Worker Pathway, self-paced courses 13 and 15.
//
// Same rules as pathwayHrtpCore1.ts: the ids are the certificate's own, nothing here is a
// certification, and no phone number other than 911, 988 and 211 is printed.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

// ── Course 13 ────────────────────────────────────────────────────────────

export const CHW_OUTREACH: Course = {
  id: 'chw_outreach',
  num: 13,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Outreach, Case Finding, and Follow-Up',
  promise:
    'Approach someone with consent, find people who are not looking for you, keep contact without pressure, and keep your resource listings true.',
  about: [
    'Outreach is the first contact. How it goes decides whether the person ever comes back. This course covers how to approach, where to look, how to follow up, and how to stay safe.',
    'Practice is done with a partner or in class. Real field contact happens only on supervised shifts.',
  ],
  objectives: [
    'Approach someone, introduce the role, and ask for consent.',
    'Plan where and when to find people, including people leaving jail or prison.',
    'Keep a contact log and follow-up plan.',
    'Keep a resource directory accurate.',
  ],
  minutes: 180,
  prerequisites: 'The Community Health Worker Role course is recommended first.',
  whoFor:
    'Community health workers, outreach workers, peer specialists, navigators, and volunteers who meet people where they are.',
  freshness:
    'Where services and programs operate changes often. Confirm locations, hours, and rules before you plan a route.',
  lessons: [
    {
      id: 'chw-out-l1',
      title: 'Engagement basics',
      summary: 'Approach, introduce, ask, offer, accept no.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'Most people do not look for an outreach worker. You are asking for a few minutes of trust from a stranger. The first thirty seconds decide whether you get them.',
        ] },
        { kind: 'concept', title: 'Five moves', text: [
          'Approach slowly, at the person\'s level, with your hands visible. Introduce yourself by name and say who you work with. Ask whether they would like to talk. Offer something small and useful, such as water, a snack, or information they can take with them. Accept a no without argument and leave the door open.',
          'Consent is not a form here. It is the person\'s choice to talk to you at all. If they say no, thank them and move on.',
        ] },
        { kind: 'example', title: 'What it sounds like', text: [
          '"Hi, I am Dana. I work with Health Matters Clinic. We have water and a list of places for food and showers. Would you like some, or want to talk for a minute?" If the answer is no: "No problem. I will be here Thursdays. Take this card if you want it."',
        ] },
        { kind: 'concept', title: 'Time is part of the work', text: [
          'Engaging some people takes months or even years of steady effort. A worker who comes back, on schedule, and does what they said they would do, builds trust that a single visit cannot.',
        ] },
        { kind: 'list', title: 'What to avoid', items: [
          'Starting with questions about their situation before they know who you are.',
          'Offering help they did not ask for or promising what you cannot deliver.',
          'Standing between the person and an exit, or touching without asking.',
          'Taking photos or writing notes in front of someone without their agreement.',
        ] },
        { kind: 'takeaways', items: [
          'Approach, introduce, ask, offer, accept no.',
          'Trust is built by showing up again.',
        ] },
        {"kind":"vocab","items":[{"term":"Outreach","plain":"Going to where people are to offer information and services, instead of waiting for them to come."},{"term":"Engagement","plain":"A relationship in which the person chooses to keep talking with you."},{"term":"Case finding","plain":"Looking for people who need help and are not getting it."}]},
        {"kind":"case","title":"Three first contacts","scenario":true,"text":["Situation 1: A woman is sitting at a bus stop with two bags, looking at her phone. What do you do?","Answer: Greet her from a respectful distance, introduce yourself, and offer water and a resource card. If she does not look up, say you will be back Thursday and leave.","Situation 2: A man says, \"I have heard it all before. Leave me alone.\" What do you do?","Answer: Thank him, say you will not bother him, and leave a card within reach if he wants it. A calm first no can become a yes in a month.","Situation 3: A young person asks you for money. What do you do?","Answer: Say kindly that you do not give money, and offer what you do have, such as food, a snack bag, or a connection to a program. Tell your lead."]},
        {"kind":"myths","items":[{"myth":"If someone says no, outreach has failed.","reality":"A respectful no is the beginning of trust. Many people accept help after several contacts."},{"myth":"People who are unhoused do not want help.","reality":"Most want a way out of their situation but have been let down by systems before. They are careful, not unwilling."}]},
        {"kind":"case","title":"Trust built over six weeks","scenario":false,"text":["Week 1: Dana and a partner stop by a bus stop on Thursdays. They hand out water and cards. One man declines and says nothing more. Week 2: they return at the same time. He takes a card without a word. Week 3: he nods. Week 4: he asks where the closest laundromat is. They give him the address and a card with a quarter roll for the machines, if their program allows it.","Week 5: he asks about getting an ID. They explain the steps and offer to go with him. Week 6: they go together. He says later that he decided to trust them because they did not push, and because they came back each Thursday.","Nothing in those six weeks was dramatic. The work was consistency, and the willingness to hear a no."]},
        ev([
          'SAMHSA and USICH, Lessons Learned from SAMHSA\'s Expert Panel on the Role of Outreach and Engagement (2016): engaging some people can take months or years of persistent, proactive effort.',
          'California HCAI, CHW/P/R Training Program Best Practices Framework: outreach is one of the 11 core competencies, with case finding, recruitment, and follow-up.',
          'SAMHSA, Projects for Assistance in Transition from Homelessness (PATH): the program emphasizes active outreach and engagement before services are offered.',
          'Community Preventive Services Task Force, The Community Guide: outreach by community health workers is part of the interventions it recommends.',
        ]),
      ],
    },
    {
      id: 'chw-out-l2',
      title: 'Safety in the field',
      summary: 'Pairs, check-ins, exits, and when to leave.',
      minutes: 20,
      blocks: [
        { kind: 'why', text: [
          'Safety is a skill, not a mood. Workers who plan for it do the job longer and with more confidence.',
        ] },
        { kind: 'steps', title: 'Before you go', items: [
          { label: 'Pair', text: 'Work in pairs, with a lead who knows the site. Never go alone to a new location.' },
          { label: 'Tell', text: 'Tell your lead where you are and when you will check in.' },
          { label: 'Know', text: 'Know the exits, the nearest phone signal, and the plan for an emergency.' },
          { label: 'Carry', text: 'Carry ID, a charged phone, and the resources you plan to offer. Leave valuables behind.' },
        ] },
        { kind: 'steps', title: 'While you work', items: [
          { label: 'Read', text: 'Notice the space, the people, and your own feeling. If something feels wrong, trust it.' },
          { label: 'Space', text: 'Keep a respectful distance and an open path out.' },
          { label: 'Calm', text: 'Speak calmly and slowly. If someone is upset, lower your voice and offer space.' },
          { label: 'Leave', text: 'Leave if the situation feels unsafe. Tell your lead. You do not owe an explanation to anyone at the scene.' },
        ] },
        { kind: 'concept', title: 'Health and safety basics', text: [
          'Wash or sanitize your hands often. Never touch needles or sharps; mark the spot and tell your lead. In heat, drink water and take shade breaks. If someone is unresponsive, call 911 first and follow your training.',
          'Review HMC\'s Field Safety Protocols module. Your lead\'s instructions at a site always come first.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c13-q1',
          q: 'What do you do first when approaching someone you do not know?',
          options: [
            'Start with questions about their situation',
            'Offer help they did not ask for',
            'Stand between them and the exit',
            'Introduce yourself, say what you offer, and ask whether they would like to talk',
          ],
          answer: 3,
          rationale: 'Consent and respect for space come before any offer.',
          distractors: 'Questions, unrequested help, and blocking an exit all take away the person\'s choice.',
        } },
        { kind: 'takeaways', items: [
          'Pair up, tell your lead, know your exits.',
          'Leaving is always allowed.',
        ] },
        {"kind":"case","title":"Three safety scenarios","scenario":true,"text":["Scenario 1: Two people are arguing loudly near the table. What do you do?","Answer: Move back, tell your partner, and let the lead decide. Do not step between them. Resume if it calms.","Scenario 2: A person appears unwell in the heat: confused, very hot, not sweating. What do you do?","Answer: Call 911 and your lead. Move the person to shade if you can do so safely, give water if they are awake and able to swallow, and stay with them.","Scenario 3: You see a needle on the ground at the site. What do you do?","Answer: Do not touch it. Mark the spot, tell your lead, and move people away. Your program will use its sharps disposal procedure."]},
        {"kind":"list","title":"Heat, smoke, and cold: climate-related risks","items":["Heat: watch for headache, confusion, dizziness, nausea, and very hot skin. Encourage water, shade, and cooling spaces.","Smoke and poor air: encourage people to move indoors to a clean air space, and know where the nearest one is.","Cold and rain: watch for shivering, slurred speech, and wet clothing. Offer dry layers and shelter information.","Emergency alerts: check local alerts before you head out, and plan where people can go if conditions change."]},
        {"kind":"concept","title":"Settings change the risks","text":["At a shelter or meal site, staff know the space and the people. Ask them what to watch for, and follow their rules. In an encampment, enter slowly, announce yourself, and never walk into a tent. At a clinic or hospital, respect privacy rules and the staff's direction. On a home visit, tell your lead the address and time, and leave if you feel unsafe. On a release day at a facility, follow the facility's rules and your program's plan.","In every setting, you represent your program. Dress simply, carry ID, and be easy to identify."]},
        ev([
          'California HCAI Framework: professional skills and conduct, including personal safety and boundaries, is a core competency.',
          'SAMHSA and USICH, Lessons Learned from SAMHSA\'s Expert Panel on the Role of Outreach and Engagement (2016): recommends formal training on evidence-based practices where resources allow.',
          'National Health Care for the Homeless Council: outreach and engagement resources for workers serving people experiencing homelessness.',
          'Your program\'s field safety protocol and your lead\'s instructions take precedence over this course.',
        ]),
      ],
    },
    {
      id: 'chw-out-l3',
      title: 'Case finding',
      summary: 'Where to look, when, and how to reach people leaving jail or prison.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'Case finding means finding the people who most need help and are least likely to ask. The best sources are the places and people they already trust.',
        ] },
        { kind: 'concept', title: 'Where people are', text: [
          'Look where people already go: meal sites, shelters, clinics, libraries, bus stops, laundromats, parks, and housing and reentry programs. Ask partners and trusted neighbors who is not being reached. Go at the times people are there, and come back at the same time each week.',
        ] },
        { kind: 'concept', title: 'People leaving jail or prison', text: [
          'People leaving incarceration are one of the groups the State has built Medi-Cal services around. Where programs allow, community workers can meet people before release, which is called in-reach, and again on the day of release. Both give you a chance to confirm that coverage is active and that a first appointment is set.',
          'Ask the facility and your employer what in-reach is permitted and what record you must keep. The rules differ by facility and by program.',
        ] },
        { kind: 'concept', title: 'Plan a route', text: [
          'A weekly plan has a place, a day, a time, a partner, and a goal for each stop. Keep it short enough that you can do it every week. Consistency matters more than coverage.',
        ] },
        { kind: 'reflect', title: 'Your map', prompts: [
          'Where in your community do people go when they do not want to be found?',
          'Who could introduce you there?',
        ] },
        { kind: 'takeaways', items: [
          'Go to the places and people already trusted.',
          'Come back on a regular schedule.',
          'In-reach before release is one way to reach people at the moment they need help most.',
        ] },
        {"kind":"example","title":"A weekly route plan","text":["Monday 10 to 12: a meal site, with a partner, to meet people at the end of the line and ask the staff who is not coming in.","Wednesday 1 to 3: a library, to speak with a librarian who knows regulars and to leave cards.","Thursday 9 to 11: the same bus stop as last week, because people there have started to recognize the team.","Friday: follow-up calls and notes. Do not plan more than you can do every week."]},
        {"kind":"steps","title":"Day of release","items":[{"label":"Before","text":"Confirm with the program and the facility whether you may be present and what they need from you."},{"label":"Meet","text":"Meet the person at the agreed place and time. Bring water, a snack, a phone charger, and the plan."},{"label":"Coverage","text":"Check that Medi-Cal is active, and write down the plan for the first health visit."},{"label":"Next","text":"Confirm where the person will sleep tonight and any check-in they must make."},{"label":"Record","text":"Write the facts, set the follow-up date, and tell your supervisor."}]},
        {"kind":"case","title":"A two-week plan","scenario":false,"text":["A program serves people leaving a county jail. Week 1: the worker confirms with program staff which days people are released, what the facility allows, and who the contact is. Week 2: she attends a release day with a partner, meets two people, confirms their coverage, and sets first appointments.","She adds a follow-up call for the next day and a visit for the next week. She keeps her notes brief and factual. At the end of two weeks she tells her lead what worked, what the facility asked her to change, and what she would do differently. That is a plan a team can learn from."]},
        {"kind":"myths","items":[{"myth":"The best place to find people is wherever the most people are.","reality":"Large crowds are easy to find and often already served. Quiet places, such as laundromats, libraries, and small meal programs, often reach people who are missed."},{"myth":"If I visit once and no one needs anything, the spot is not useful.","reality":"People watch before they approach. A spot can take weeks to become useful. Stay on a schedule long enough to be known."}]},
        ev([
          'California HCAI Framework: outreach skills include case finding, recruitment, follow-up, and field outreach.',
          'California DHCS, CalAIM Justice-Involved Reentry Initiative: pre-release Medi-Cal services and connection to community-based providers, including community health workers and peer support specialists.',
          'SAMHSA and USICH, Lessons Learned from SAMHSA\'s Expert Panel on the Role of Outreach and Engagement (2016): use diverse outreach methods beyond street contact, such as drop-in centers and meal programs.',
        ]),
      ],
    },
    {
      id: 'chw-out-l4',
      title: 'Follow-up and records',
      summary: 'A contact log, the three-attempt rule, and consent for calls and texts.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'A contact you do not follow up on is wasted trust. A record you do not keep is a promise nobody can check.',
        ] },
        { kind: 'list', title: 'A contact log should hold', items: [
          'The date, time, and place.',
          'What the person asked for and what you offered.',
          'How and when they agreed to be contacted, and whether a message is safe to leave.',
          'The next step and the date.',
        ] },
        { kind: 'concept', title: 'The three-attempt rule', text: [
          'Try to reach a person up to three times, at different times and in different ways, over a reasonable period. Record each try. After three, stop and tell your lead. Do not keep contacting someone who has not agreed to it.',
        ] },
        { kind: 'concept', title: 'Privacy', text: [
          'Share only what the person agrees to share. Do not leave detailed voicemails or texts that could identify a service. Records belong in the approved system, not in a personal notebook or phone.',
        ] },
        { kind: 'takeaways', items: [
          'Log every contact, with consent and a next step.',
          'Three tries, then stop and tell your lead.',
        ] },
        {"kind":"example","title":"A good entry and a weak one","text":["Good: \"Oct 12, 10:15 a.m., 6th and Main. Spoke with a man about 50, no name given. He asked about a shower. I gave him the list. He agreed I could check in Thursday at the same place. No phone. Next step: Thursday.\"","Weak: \"Talked to a guy, seemed high, wants stuff.\"","The first shows what happened, what was agreed, and what is next. The second has a label and no plan."]},
        {"kind":"list","title":"Consent language that works","items":["\"Is it okay if I write a few notes so that I remember what we talked about?\"","\"May I check in with you again? How would you like me to reach you?\"","\"Is it safe to leave a message, and what should I say?\""]},
        {"kind":"concept","title":"What people tell you","text":["People may tell you things that are private, painful, or serious. Keep what you hear private, except where your supervisor has told you that something must be shared. Ask your supervisor, before you start, which situations you are required to report, and how. If someone tells you about a risk to a child, an older adult, a dependent adult, or themselves, tell your supervisor right away.","You do not have to decide what is reportable by yourself. That is the point of a supervisor."]},
        ev([
          'California HCAI Framework: documentation and follow-up are part of communication and service coordination.',
          'California DHCS CHW Billing FAQ: records must support the services provided and the time spent.',
          'SAMHSA and USICH, Lessons Learned from SAMHSA\'s Expert Panel on the Role of Outreach and Engagement (2016): overcoming barriers to engagement can take months or even years of persistent effort.',
        ]),
      ],
    },
    {
      id: 'chw-out-l5',
      title: 'Keeping the directory true',
      summary: 'Why a resource list has to be checked, and how.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'A resource directory is only useful if it is true. A wrong listing sends a person across town to a closed door. Checking listings is part of outreach.',
        ] },
        { kind: 'steps', title: 'How to verify a listing', items: [
          { label: 'Contact', text: 'Call or check the agency\'s own page. Ask to speak with someone, not just a recording.' },
          { label: 'Confirm', text: 'Confirm the address, days and hours, who is eligible, what to bring, and any cost.' },
          { label: 'Date', text: 'Record the date you confirmed it and who you spoke to.' },
          { label: 'Update', text: 'Correct the directory and tell your lead if something changed.' },
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c13-q2',
          q: 'A person says no. What now?',
          options: [
            'Insist once more',
            'Respect it, leave an easy way to reach you, and try again another day',
            'Remove them from your list',
            'Tell others they are refusing help',
          ],
          answer: 1,
          rationale: 'A respectful no keeps the door open.',
          distractors: 'Insisting, dropping the person, or labeling them all damage the trust you are building.',
        } },
        { kind: 'check', check: {
          id: 'hrtp-c13-q3',
          q: 'Why log every follow-up attempt?',
          options: [
            'To prove you were busy',
            'Because it is optional',
            'So the team knows what was tried, the outcome, and what to do next',
            'To rank clients by difficulty',
          ],
          answer: 2,
          rationale: 'Records protect the person and keep care continuous when more than one worker is involved.',
          distractors: 'Logs are not a measure of effort or a ranking.',
        } },
        {"kind":"example","title":"A verification call","text":["\"Hello, this is Dana from Health Matters Clinic. I am confirming the information we have for your food pantry so that we send people at the right time. Are you still open Tuesdays and Thursdays, 10 to 1? Do people need ID or proof of address? Is there a limit on visits? Who should we ask for? Thank you.\"","If you cannot reach anyone after two tries on different days, mark the listing as unconfirmed and tell your lead. Do not send people to a listing you could not confirm."]},
        {"kind":"list","title":"What a good directory listing holds","items":["The agency name and the name of a contact person.","Address, with the nearest bus line or landmark.","Days and hours, and any hours that change by season.","Who is eligible, what to bring, and any limit on visits.","The date it was last confirmed and by whom."]},
        {"kind":"concept","title":"When a listing is wrong","text":["Mark it as unconfirmed right away so no one is sent there. Tell your lead, and ask the agency for the correct information. Update the listing, with the date, once you have confirmed it. If an agency has closed, say so, and look for the closest alternative so that the people who depend on it are not left without a place to go."]},
        ev([
          'California HCAI Framework: maintaining accurate resource directories is part of outreach and service coordination.',
          '211 Los Angeles County: a model of a resource database that is checked and updated against agency information.',
          'AHRQ Care Coordination Measures Atlas: coordination depends on accurate information about community resources.',
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c13-practice',
    title: 'Your outreach practice file',
    minutes: 110,
    purpose: 'Three pieces of practice you can reuse in the field: opening lines, a weekly route plan, and a verified set of listings.',
    fields: [
      { id: 'openers', label: 'Three opening lines and a 60-second explanation', help: 'Write three ways to open a conversation and a short explanation of who you are and what you offer. Say one aloud to a partner and write what you would change.', multiline: true, repeat: 3, repeatLabel: 'Opening line' },
      { id: 'route', label: 'A weekly route plan', help: 'For one week, list each stop: place, day, time, partner, and goal. Mark where people leaving jail or prison could be reached, if your program serves them.', multiline: true },
      { id: 'listings', label: 'Verify five listings', help: 'Confirm five Resource Directory listings by phone or web. For each, record the agency, who you spoke to, what you confirmed, what changed, and the date.', multiline: true, repeat: 5, repeatLabel: 'Listing' },
      {"id":"safety","label":"Write your safety plan","help":"Write what you will do before you go, how you will check in with your lead, how you will know to leave, and what you will do in an emergency.","multiline":true},
    ],
  },
  furtherLearning: [
    { name: 'SAMHSA and USICH: Outreach and Engagement Fact Sheet', use: 'Evidence-informed outreach and engagement practices.', url: 'https://endhomelessness.org/wp-content/uploads/2024/10/Outreach_and_Engagement_Fact_Sheet_SAMHSA_USICH.pdf' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'The outreach competency and how training should teach it.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'California DHCS: Justice-Involved Initiative', use: 'How pre-release services connect to community providers.', url: 'https://www.dhcs.ca.gov/CalAIM/Justice-Involved-Initiative' },
    { name: '211 Los Angeles County', use: 'A resource database to search and compare with your own listings.', url: 'https://211la.org' },
  ],
};

// ── Course 15 ────────────────────────────────────────────────────────────

export const CHW_EVALUATION: Course = {
  id: 'chw_evaluation',
  num: 15,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Evaluation and Research Basics',
  promise:
    'Tell outputs from outcomes, count accurately, keep honest records that protect people and your job, and read a small table without overclaiming.',
  about: [
    'Programs are funded, and workers are hired, because someone can show that the work helps. This course teaches how a worker contributes to that honestly.',
    'It also explains the numbers a County-funded program reports.',
  ],
  objectives: [
    'Tell outputs from outcomes.',
    'Count and categorize simply and accurately.',
    'Describe consent, privacy, and honest reporting, and why your records protect your job.',
    'Read a small before-and-after table without overclaiming.',
  ],
  minutes: 120,
  prerequisites: 'None.',
  whoFor:
    'Community health workers, peer specialists, outreach workers, and anyone who records what they do.',
  lessons: [
    {
      id: 'chw-eval-l1',
      title: 'Why we measure',
      summary: 'Outputs are what we did. Outcomes are what changed.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'Funders, health plans, and employers ask one question: did it help? Evaluation is how a program answers with something other than a story. Your records are the raw material.',
        ] },
        { kind: 'concept', title: 'Outputs and outcomes', text: [
          'An output is what a program did: 200 flyers handed out, four events held, twelve people trained. An outcome is what changed for people: eight of ten people referred are now enrolled in coverage. Outputs show effort. Outcomes show results.',
        ] },
        { kind: 'concept', title: 'Six steps, in plain words', text: [
          'A widely used public health framework describes evaluation as steps that repeat: involve the people affected, describe the program, decide what to measure, gather credible evidence, draw careful conclusions, and make sure the findings are used. It also names four standards: useful, feasible, ethical, and accurate.',
        ] },
        { kind: 'example', title: 'What you add', text: [
          'You do not run the evaluation. You make it possible. A worker who logs each contact accurately, on the day it happens, with the right category, gives the program something it can learn from and defend.',
        ] },
        { kind: 'takeaways', items: [
          'Outputs are activity. Outcomes are change.',
          'Accurate daily records make evaluation possible.',
        ] },
        {"kind":"tryit","title":"Sort these","text":["Write O for output or C for outcome next to each line. 1: We made 340 calls. 2: Seventy percent of people we referred kept their clinic appointment. 3: We held 12 workshops. 4: Participants report they can now find a clinic on their own. 5: We enrolled 44 people.","Answers: 1 O, 2 C, 3 O, 4 C, 5 O. Notice how often a count of activity sounds like success. Ask what changed for the person."]},
        {"kind":"concept","title":"Why small programs should still measure","text":["A small program does not need a research team. It needs a few measures that matter, defined in advance, recorded the same way each time, and looked at on a schedule. A worker who learns to do this is valuable to any employer."]},
        {"kind":"case","title":"A program year in numbers","scenario":false,"text":["A small program reports: 1,200 flyers, 60 events, 400 contacts, 120 referrals, 70 people now enrolled in coverage, 45 of those still enrolled six months later.","The first four numbers are outputs. They show effort. The last two are outcomes. They show that people got coverage and kept it. If the program wants funding, it should lead with the last two and use the first four to show how it got there. If it wants to improve, it should ask why only 45 of 70 kept coverage, and what the staff could do about it."]},
        {"kind":"list","title":"Questions an evaluator asks","items":["Who is this program for, and did it reach them?","What did it do, and how much of it was delivered?","What changed for the people it served?","How do we know, and what else could explain it?","What should we change?"]},
        ev([
          'Centers for Disease Control and Prevention, Framework for Program Evaluation in Public Health, MMWR 1999;48(RR-11), updated in MMWR 2024;73(RR-6): the steps and standards of public health evaluation.',
          'California HCAI Framework: evaluation and research is one of the 11 core competencies, and programs should survey participants 6 to 12 months after training.',
          'Community Preventive Services Task Force, The Community Guide: recommendations rest on systematic reviews of many studies, not single stories.',
        ]),
      ],
    },
    {
      id: 'chw-eval-l2',
      title: 'Counting and categorizing',
      summary: 'Tally sheets, categories, and checking your own counts.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'Counting looks easy until two people count the same thing differently. A shared category list fixes that.',
        ] },
        { kind: 'steps', title: 'Four habits', items: [
          { label: 'Define', text: 'Write down what each category means before you count.' },
          { label: 'Record', text: 'Record at the time, not from memory at the end of the week.' },
          { label: 'Check', text: 'Compare your counts with a partner\'s on a sample. Where you differ, fix the definition.' },
          { label: 'Keep', text: 'Keep the sheet or the entry. A count you cannot trace is not a count.' },
        ] },
        { kind: 'tryit', title: 'Practice', text: [
          'The practice file in this course has a list of 30 invented encounters. Count them by type and by outcome, then compare with a partner.',
        ] },
        { kind: 'takeaways', items: [
          'Define, record, check, keep.',
        ] },
        {"kind":"example","title":"A worked tally","text":["A worker tallies ten encounters from a week. Types: outreach 4, referral 3, education 2, follow-up 1. Outcomes: connected 5, pending 3, no contact 2.","Check: 4 plus 3 plus 2 plus 1 equals 10. 5 plus 3 plus 2 equals 10. Both totals match, so the tally is consistent. If one did not, the worker would go back to the entries and look for a missing or double-counted encounter."]},
        {"kind":"list","title":"Common counting mistakes","items":["Counting one person four times as four people. Decide whether you are counting contacts or individuals.","Changing categories halfway through the month.","Counting a plan as a result. A referral made is not a referral completed.","Rounding up. Report the real number."]},
        {"kind":"concept","title":"Who is missing from your count","text":["Your counts show only the people you reach. People you never meet, people who do not return, and people who decline are not in the data. A program that serves the easiest to reach can look more successful than one that works with those who are hardest to reach.","You cannot fix this alone, but you can help by recording attempts and declines as well as successes. Those numbers tell the program who it is missing."]},
        {"kind":"steps","title":"Asking a good survey question","items":[{"label":"One idea","text":"Ask about one thing at a time. \"Was the class clear and useful?\" asks two things."},{"label":"Plain words","text":"Use words the person uses. Avoid jargon."},{"label":"Fair choices","text":"Offer answers that cover the range, including a way to say no or not sure."},{"label":"Try it","text":"Ask two people to read it back to you before you use it widely."}]},
        {"kind":"concept","title":"Following up later","text":["Programs learn most when they ask people again after some time has passed. California's training framework suggests surveying participants six to twelve months after training. A later question, such as \"Are you still working in this field?\", tells a program more than a smile on the last day of class."]},
        ev([
          'California HCAI Framework: basic evaluation and research methods are part of the core competencies.',
          'CDC, Program Evaluation Framework, 2024 (MMWR Recomm Rep 2024;73(RR-6)): credible evidence depends on well-defined measures and accurate data.',
          'Kangovi S, et al. Health Affairs 2020;39(2):207-213: the findings depended on carefully counted visits and admissions.',
        ]),
      ],
    },
    {
      id: 'chw-eval-l3',
      title: 'Honest records that protect people and your job',
      summary: 'Consent, privacy, accuracy, and why your notes keep your position funded.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'A record can help a person or harm them. It can also decide whether your employer can keep paying for your position. The same habits cover both: be accurate, be private, and never inflate.',
        ] },
        { kind: 'concept', title: 'Consent and privacy', text: [
          'Tell people what you are recording and why, and record only what you need. Share information only as the person agrees or as the law requires. Keep records in the approved system. Do not take pictures of documents or screens with a personal phone unless your program allows it.',
        ] },
        { kind: 'concept', title: 'Never inflate', text: [
          'Report what happened, not what would look good. If you counted something wrongly, correct it openly and tell your supervisor. Honest numbers that are modest protect a program and the people it serves. Inflated numbers can lose a contract and, in billing, can be treated as fraud.',
        ] },
        { kind: 'concept', title: 'Records your position depends on', text: [
          'Health plans and the State pay for community health worker services. They expect each record to show who delivered the service, who received it, the date, what was done, and how long it took. The record has to support the time that is billed. Services in the Medi-Cal community health worker benefit are also tied to a written plan of care.',
          'This is why you write your note the same day, in facts, with the real time. It protects the person, your employer, and you.',
        ] },
        { kind: 'fieldnote', title: 'If you find a mistake', text: [
          'Correct it, note the correction with the date, and tell your supervisor. A visible correction is a sign of a program people can trust. A hidden one is a problem.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c15-q1',
          q: 'A record contains an error you made last week. What do you do?',
          options: [
            'Leave it, because it is small',
            'Delete the record',
            'Wait for someone to notice',
            'Correct it, note the correction, and tell your supervisor',
          ],
          answer: 3,
          rationale: 'Honest records are corrected openly and the correction is visible.',
          distractors: 'Leaving, deleting, or waiting each hides the mistake.',
        } },
        { kind: 'takeaways', items: [
          'Record only what you need, with consent and privacy.',
          'Never inflate. Correct mistakes openly.',
          'Your note supports the person and your position.',
        ] },
        {"kind":"case","title":"Two notes about the same visit","scenario":false,"text":["Note A: \"Oct 14, 2:00 to 2:40 p.m. Visit with Mr. Lee at his apartment, with his consent. Reviewed his plan to get to his specialist on Oct 21. Arranged a ride with the clinic. He asked for help reading a pharmacy letter. I read it aloud and told him to bring it to the nurse. Next: check in Oct 20.\"","Note B: \"Saw Mr. Lee. Went fine. Helped him with stuff.\"","Note A shows who, when, how long, what was done, and what is next. It protects Mr. Lee and the worker, and the program can rely on it. Note B could not."]},
        {"kind":"list","title":"What a plan of care usually shows","items":["The person's goals in their own words.","The services needed to reach them.","How often and for how long each will happen.","Who is responsible for each step.","When the plan will be reviewed."]},
        {"kind":"case","title":"Pressure to report more","scenario":true,"text":["It is the end of the month. Your supervisor says the program is two short of its target and asks whether you could count two phone calls as completed referrals. You know neither person was connected. What do you do?","Answer: Say, politely, that you can count only what was completed, and that you would be happy to keep working on those two. Offer to tell the program lead what is getting in the way. If you are asked again, or you are told to change a record, tell the next person up in your program, and write down what was asked. Honest numbers protect the program, the people it serves, and you."]},
        ev([
          'California DHCS CHW Billing FAQ and Medi-Cal community health worker guidance: documentation must support the service and the time billed, and services are tied to a plan of care.',
          'CDC, Program Evaluation Framework, 2024 (MMWR Recomm Rep 2024;73(RR-6)): the federal evaluation standards it applies include ethics and rigor.',
          'California HCAI Framework: professional skills and conduct includes ethics and confidentiality.',
        ]),
      ],
    },
    {
      id: 'chw-eval-l4',
      title: 'Reading a small table',
      summary: 'What a before-and-after table shows and does not show.',
      minutes: 15,
      blocks: [
        { kind: 'why', text: [
          'Small tables are easy to over-read. A quick check protects you from claiming more than the numbers can carry.',
        ] },
        { kind: 'concept', title: 'Three questions to ask', text: [
          'How many people are in it? A change in six people may be luck. What was compared? A before-and-after table cannot say what would have happened without the program. What is missing? Ask who dropped out and what was left out.',
        ] },
        { kind: 'example', title: 'A small example', text: [
          'Six participants rated their confidence from 1 to 5 before and after a course. Before: 2, 2, 3, 3, 2, 3. After: 4, 3, 4, 4, 3, 4. Every rating rose.',
          'Fair statement: all six rated themselves higher, which suggests a pattern. It does not prove the course caused it, and six people is too few to say it applies to everyone.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c15-q2',
          q: 'With only six people in a before-and-after table, what is a fair statement?',
          options: [
            'The program works',
            'The program fails',
            'It suggests a pattern, but the group is too small to be sure',
            'The result applies to everyone',
          ],
          answer: 2,
          rationale: 'Small numbers limit what you can claim. Report what you saw and say what it cannot show.',
          distractors: 'Claiming success, failure, or generality goes beyond the evidence.',
        } },
        { kind: 'takeaways', items: [
          'Ask how many, compared with what, and what is missing.',
        ] },
        {"kind":"example","title":"A second table, with a gap","text":["Twenty people signed up for a class. Twelve finished. Of the twelve, eleven passed a final check. The program reports: \"Eleven of twelve passed, a 92 percent pass rate.\"","Question: what is missing? The eight who left. A fairer report says: \"Of twenty who signed up, twelve finished and eleven passed the check. We are learning why eight left.\" Reporting only the finishers can make a program look better than it is."]},
        {"kind":"tryit","title":"Write a fair sentence","text":["Take any small set of numbers from your own work. Write one sentence that says what it shows, and one that says what it cannot show."]},
        {"kind":"concept","title":"Three ways to say it fairly","text":["Say what you saw: \"Eleven of twelve who finished passed the check.\" Say what you do not know: \"We do not yet know why eight people left.\" Say what you will do next: \"We will call each of them to ask what would have helped.\"","A fair report has all three. A report with only the first can mislead. A report with only the second sounds helpless. A report with all three shows that a program is paying attention and is willing to learn."]},
        ev([
          'CDC, Program Evaluation Framework, 2024 (MMWR Recomm Rep 2024;73(RR-6)): draw conclusions that are justified by the evidence gathered.',
          'Community Preventive Services Task Force: recommendations rest on many studies, not a single small group.',
          'California HCAI Framework: assessment methods include before-and-after testing and self-rated learning, and results should be read with care.',
        ]),
      ],
    },
    {
      id: 'chw-eval-l5',
      title: 'This program\'s measures',
      summary: 'The indicators a County-funded program reports.',
      minutes: 10,
      blocks: [
        { kind: 'why', text: [
          'A County-funded training program reports the same indicators for every participant. Knowing them shows you how your own work counts.',
        ] },
        { kind: 'list', title: 'The core indicators', items: [
          'Enrolled: a participant counts after the first week of training.',
          'Graduated: the participant completed the program.',
          'Placed: the participant is in full-time, unsubsidized employment.',
          'Retained: the participant is still working at 30, 60, and 90 days.',
          'Skill gain: the participant reports more competence at the end than at the start.',
        ] },
        { kind: 'concept', title: 'Where you fit', text: [
          'Your attendance, your practice file, your field log, and your own reports of what changed are the data behind these numbers. They are also yours: a documented record you can use in an interview.',
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c15-q3',
          q: 'Which is an outcome?',
          options: [
            'We handed out 200 flyers',
            'We held four tabling events',
            'We trained 12 volunteers',
            'Eight of ten people referred are now enrolled in coverage',
          ],
          answer: 3,
          rationale: 'An outcome is a change in people\'s circumstances. The others count activity.',
          distractors: 'Flyers, events, and trainings are outputs.',
        } },
        { kind: 'takeaways', items: [
          'Enrolled, graduated, placed, retained, and skill gain.',
          'Your records are the data behind them.',
        ] },
        {"kind":"list","title":"How your work connects to each indicator","items":["Enrolled: you attend the first week and complete the intake.","Graduated: you attend, practice, pass the checks, and complete your field hours.","Placed: you document your experience and prepare for interviews.","Retained: you use your support network in the first 90 days.","Skill gain: you complete the self-assessment honestly at the start, middle, and end."]},
        {"kind":"reflect","title":"Your measure","prompts":["What is one thing you want to be able to show an employer about your work in six months?","What record would you need to keep to show it?"]},
        {"kind":"concept","title":"How the numbers are used","text":["A program looks at the indicators to see where people are leaving, where they are succeeding, and what to change. If many drop out in week three, the program may change the schedule or add support. If few are placed, it may talk to more employers.","This is why honest, timely records matter to you. They are how the program learns to help the next person better."]},
        ev([
          'California HCAI Framework: programs should assess participants in several ways and follow up 6 to 12 months after training.',
          'CDC, Program Evaluation Framework, 2024 (MMWR Recomm Rep 2024;73(RR-6)): engage stakeholders and agree on what will be measured.',
          'Kangovi S, et al. Health Affairs 2020;39(2):207-213: an example of measuring outcomes and cost for a community health worker program.',
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c15-practice',
    title: 'Your evaluation practice file',
    minutes: 60,
    purpose: 'Two short pieces of practice that you keep: a counted tally sheet and a plain-language reading of a small table.',
    fields: [
      { id: 'tally', label: 'Count the 30 invented encounters', help: 'Count them by type (outreach, referral, education, follow-up) and by outcome (connected, pending, no contact). Write your counts and compare with a partner. Write where you differed and why.', multiline: true },
      { id: 'table', label: 'Read a small table', help: 'Using the example in the reading, or one your instructor gives you, write what it shows, what it cannot show, and what you would want to know next.', multiline: true },
      {"id":"fair","label":"Write a fair sentence","help":"Take a small set of numbers from your own work. Write one sentence that says what it shows and one that says what it cannot show. Then sort five statements from your program into outputs and outcomes.","multiline":true},
    ],
    reference: { title: '30 invented encounters (type, outcome)', items: [
      'Outreach, connected', 'Outreach, no contact', 'Referral, connected', 'Referral, pending', 'Education, connected',
      'Follow-up, connected', 'Outreach, connected', 'Referral, connected', 'Referral, no contact', 'Education, connected',
      'Follow-up, pending', 'Outreach, pending', 'Referral, connected', 'Outreach, connected', 'Education, pending',
      'Follow-up, connected', 'Referral, connected', 'Outreach, no contact', 'Education, connected', 'Follow-up, no contact',
      'Referral, pending', 'Outreach, connected', 'Education, connected', 'Follow-up, connected', 'Referral, connected',
      'Outreach, pending', 'Referral, no contact', 'Education, connected', 'Follow-up, pending', 'Outreach, connected',
    ] },
  },
  furtherLearning: [
    { name: 'CDC: Framework for Program Evaluation in Public Health (MMWR 2024, RR-6)', use: 'The current six-step framework and its standards.', url: 'https://stacks.cdc.gov/view/cdc/169950' },
    { name: 'California HCAI: CHW/P/R Training Program Best Practices Framework', use: 'The evaluation and research competency and how training programs assess learning.', url: 'https://hcai.ca.gov/workforce/initiatives/chwpr/training-program-best-practices-framework/' },
    { name: 'The Community Guide: Community Health Workers', use: 'Recommendations and the systematic reviews behind them.', url: 'https://thecommunityguide.org/content/community-health-workers' },
  ],
};
