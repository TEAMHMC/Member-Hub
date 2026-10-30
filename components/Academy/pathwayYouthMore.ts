// Youth Mentorship + STEAM, the eight self-paced courses: health, the body, mind and brain, data,
// technology, design, people in healthcare, and a capstone. Written for middle-school readers, with a
// mentor beside them. Nothing here is medical advice. Courses that touch feelings and safety tell a
// young person to talk with a trusted adult and name 988. Because these learners are minors, the
// pathway stays closed until the safeguarding and consent steps and the content have been reviewed.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Where this comes from', items });
type L = { title: string; summary: string; minutes: number; blocks: Block[] };
const ck = (id: string, q: string, options: string[], answer: number, rationale: string, distractors: string): Block =>
  ({ kind: 'check', check: { id, q, options, answer, rationale, distractors } });

const yc = (o: {
  id: string; num: number; title: string; promise: string; about: string[]; objectives: string[];
  minutes: number; lessons: L[]; further: { name: string; use: string; url: string }[]; practical?: boolean;
  requirements?: { id: string; label: string; detail: string; kind: 'attend' | 'assignment' | 'practicum' | 'evaluation' }[];
}): Course => ({
  id: o.id, num: o.num, standard: 'v2', readingLevel: 'middle-school',
  delivery: o.practical ? 'practical' : 'self-paced',
  title: o.title, promise: o.promise, about: o.about, objectives: o.objectives, minutes: o.minutes,
  prerequisites: o.num === 1 ? 'None.' : 'The courses before this one, or your mentor says you are ready.',
  whoFor: 'Young people in grades 5 to 8 who want to explore health, science, and technology with a mentor.',
  freshness: 'This is for learning, not medical advice. If you or someone you know needs help, tell a trusted adult. You can also call or text 988.',
  ...(o.requirements ? { requirements: o.requirements } : {}),
  lessons: o.lessons.map((l, i) => ({ id: `${o.id}-l${i + 1}`, ...l })),
  checks: [], furtherLearning: o.further,
});

export const YS_HEALTH = yc({
  id: 'ys-1', num: 1, title: 'Health Starts Here',
  promise: 'Say what health means, name habits that help, and notice how your neighborhood affects health.',
  about: ['Health is more than not being sick. It is how your body, mind, and relationships are doing.', 'In this course you learn habits that help and how a community can make healthy choices easier.'],
  objectives: ['Say what health means in your own words.', 'Name habits that support health.', 'Give an example of how a place affects health.', 'Talk with your mentor about one change you could make.'],
  minutes: 9,
  lessons: [
    { title: 'What is health?', summary: 'Body, mind, and friends.', minutes: 3, blocks: [
      { kind: 'prose', text: ['The World Health Organization says health is a state of physical, mental, and social well-being. It is not only the absence of illness. A person can have a cold and still feel connected and hopeful. A person can feel well in the body and still feel lonely.'] },
      { kind: 'list', title: 'Three parts of health', items: ['Body: how you move, eat, and sleep.', 'Mind: how you think and feel.', 'Social: how you connect with family and friends.'] },
      ck('ys-1-c1', 'Which is part of health?', ['Only being free of sickness', 'Body, mind, and social well-being', 'Only exercise', 'Only food'], 1, 'Health includes body, mind, and relationships.', 'Health is bigger than any one part.'),
      ev(['World Health Organization, Constitution: health as physical, mental, and social well-being.', 'CDC, Healthy Schools: health and learning.', 'American Academy of Pediatrics, HealthyChildren.org.']),
    ] },
    { title: 'Habits that help', summary: 'Sleep, movement, food, and clean hands.', minutes: 3, blocks: [
      { kind: 'steps', title: 'Four habits', items: [
        { label: 'Sleep', text: 'Teens usually need 8 to 10 hours. Sleep helps your brain and your mood.' },
        { label: 'Move', text: 'Young people need about 60 minutes of active play or exercise most days.' },
        { label: 'Eat a mix of foods', text: 'Fruits, vegetables, grains, and protein give you energy.' },
        { label: 'Wash your hands', text: 'Soap and water for 20 seconds helps stop germs from spreading.' },
      ] },
      ck('ys-1-c2', 'How long should you wash your hands?', ['2 seconds', 'About 20 seconds', '1 second', 'It does not matter'], 1, 'Scrubbing about 20 seconds removes more germs.', 'A quick rinse does not do the job.'),
      ev(['American Academy of Sleep Medicine, recommended sleep for teens: 8 to 10 hours.', 'U.S. Department of Health and Human Services, Physical Activity Guidelines for Americans (2nd ed.): 60 minutes a day for children and teens.', 'CDC, Handwashing: Clean Hands Save Lives.']),
    ] },
    { title: 'Health in a neighborhood', summary: 'Places can help or make things harder.', minutes: 3, blocks: [
      { kind: 'prose', text: ['Where you live affects your health. Clean air, safe parks, grocery stores, and clinics make healthy choices easier. When those are missing, health can be harder, even when people work hard to stay well.'] },
      { kind: 'tryit', title: 'Talk with your mentor', text: ['Walk or think through your neighborhood. What helps health? What makes it harder? Pick one thing you would change and tell your mentor why.'] },
      ck('ys-1-c3', 'Why might a park help health?', ['It gives a place to move and play', 'It makes people sick', 'It has no effect', 'It costs a lot'], 0, 'A safe place to move supports exercise and mood.', 'Parks support health, not harm it.'),
      ev(['Healthy People 2030, Social Determinants of Health: where we live and play affects health.', 'CDC, Healthy Places.', 'American Academy of Pediatrics, HealthyChildren.org.']),
    ] },
  ],
  further: [
    { name: 'CDC: Healthy Schools', use: 'Health and learning.', url: 'https://www.cdc.gov' },
    { name: 'HealthyChildren.org', use: 'Health information from pediatricians.', url: 'https://www.healthychildren.org' },
    { name: 'Healthy People 2030', use: 'How places affect health.', url: 'https://health.gov' },
  ],
});

export const YS_BODY = yc({
  id: 'ys-2', num: 2, title: 'Inside the Human Body',
  promise: 'Explain how the heart, lungs, and brain work together, and how germs spread and the body fights them.',
  about: ['Your body is a team of systems. Learning how they work helps you take care of them.', 'You will also see how washing and vaccines help your body fight germs.'],
  objectives: ['Describe what the heart and lungs do.', 'Explain how the nervous system sends messages.', 'Explain how germs spread and how the body fights them.', 'Name ways to prevent spreading germs.'],
  minutes: 7,
  lessons: [
    { title: 'Heart and lungs', summary: 'Moving oxygen around.', minutes: 3, blocks: [
      { kind: 'prose', text: ['Your lungs take in oxygen from the air. Your heart pumps blood that carries oxygen to every part of your body. When you run, your heart beats faster and you breathe faster because your muscles need more oxygen.'] },
      { kind: 'tryit', title: 'Try it with your mentor', text: ['Sit quietly and find your pulse at your wrist for 15 seconds. Then do 30 jumping jacks and find it again. What changed? Why?'] },
      ck('ys-2-c1', 'What does the heart do?', ['Digests food', 'Pumps blood to carry oxygen', 'Thinks', 'Makes bone'], 1, 'The heart pumps blood that carries oxygen around the body.', 'Other organs do the other jobs.'),
      ev(['NIH, National Heart, Lung, and Blood Institute: How the heart works.', 'NIH, National Institute of General Medical Sciences: The Inside Story.', 'American Heart Association, Kids Heart Challenge resources.']),
    ] },
    { title: 'The nervous system', summary: 'How your body sends messages.', minutes: 2, blocks: [
      { kind: 'prose', text: ['Your brain, spinal cord, and nerves make up your nervous system. Nerves carry messages like "this is hot" to your brain and back to your hand in a split second. That is why you pull your hand away fast.'] },
      ck('ys-2-c2', 'What carries messages between the body and the brain?', ['Bones', 'Nerves', 'Skin', 'Blood sugar'], 1, 'Nerves carry electrical messages.', 'Bones and skin do other jobs.'),
      ev(['NIH, National Institute of Neurological Disorders and Stroke: Brain Basics.', 'NIMH, Brain Basics.', 'NIH, National Institute of General Medical Sciences: The Inside Story.']),
    ] },
    { title: 'Germs and defenses', summary: 'How germs spread and what helps.', minutes: 2, blocks: [
      { kind: 'steps', title: 'How to slow germs', items: [
        { label: 'Wash hands', text: 'Soap and water for about 20 seconds.' },
        { label: 'Cover coughs', text: 'Use your elbow, not your hands.' },
        { label: 'Stay home when sick', text: 'It protects others.' },
        { label: 'Vaccines', text: 'They teach your body to recognize a germ before it makes you sick.' },
      ] },
      ck('ys-2-c3', 'Why cover a cough with your elbow?', ['It looks polite only', 'It keeps germs off your hands and stops them spreading', 'It does nothing', 'It hurts germs'], 1, 'Germs travel on hands and droplets.', 'It is a real way to slow spread.'),
      ev(['CDC, How Germs Spread and Handwashing.', 'CDC, Vaccines: how they work.', 'NIH, National Institute of Allergy and Infectious Diseases: The Immune System.']),
    ] },
  ],
  further: [
    { name: 'NIH: The Inside Story', use: 'A guide to cells and the body.', url: 'https://nigms.nih.gov' },
    { name: 'CDC: Handwashing', use: 'Why and how to wash.', url: 'https://www.cdc.gov' },
    { name: 'NIMH: Brain Basics', use: 'How the brain works.', url: 'https://www.nimh.nih.gov' },
  ],
});

export const YS_MIND = yc({
  id: 'ys-3', num: 3, title: 'Mind + Brain',
  promise: 'Explain how the brain handles feelings and stress, name ways to cope, and know how to ask for help.',
  about: ['Your brain handles thoughts and feelings. Everyone has hard feelings sometimes. Knowing what to do helps.', 'If you ever feel unsafe or hopeless, tell a trusted adult. You can also call or text 988 any time.'],
  objectives: ['Describe how the brain handles feelings.', 'Name ways to cope with stress.', 'Say why asking for help is a strength.', 'Name who you can talk to.'],
  minutes: 8,
  lessons: [
    { title: 'Feelings and the brain', summary: 'Every feeling has a job.', minutes: 3, blocks: [
      { kind: 'prose', text: ['Feelings like worry, anger, and joy come from your brain. They are signals. Fear can warn you of danger. Sadness can tell you something matters. A feeling is not good or bad. What you do next matters.'] },
      ck('ys-3-c1', 'What is a feeling?', ['A mistake', 'A signal from your brain', 'A weakness', 'A choice'], 1, 'Feelings are signals. They are normal.', 'Feeling something is not a flaw.'),
      ev(['NIMH, Brain Basics and Children and Mental Health.', 'American Academy of Pediatrics, HealthyChildren.org: Emotions.', 'CDC, Children\'s Mental Health.']),
    ] },
    { title: 'Stress and coping', summary: 'Things that help.', minutes: 3, blocks: [
      { kind: 'steps', title: 'Ways to cope', items: [
        { label: 'Breathe slowly', text: 'In for four counts, out for six. It calms the body.' },
        { label: 'Move', text: 'A walk or a game can ease tension.' },
        { label: 'Talk', text: 'Tell a person you trust.' },
        { label: 'Rest', text: 'Sleep helps your brain handle stress.' },
      ] },
      { kind: 'tryit', title: 'Try it', text: ['Try slow breathing for one minute. Notice how you feel. Which coping tool would you try on a hard day?'] },
      ck('ys-3-c2', 'Which helps when you feel stressed?', ['Keeping it all inside', 'Slow breathing, moving, resting, or talking to someone', 'Ignoring it forever', 'Hurting yourself'], 1, 'These are healthy ways to cope.', 'Keeping it in or harming yourself makes things worse.'),
      ev(['NIMH, Caring for Your Mental Health.', 'CDC, Coping with Stress.', 'American Academy of Pediatrics, HealthyChildren.org.']),
    ] },
    { title: 'Asking for help', summary: 'Who to tell and what to say.', minutes: 2, blocks: [
      { kind: 'prose', text: ['Asking for help is brave. If you feel very sad, scared, or unsafe, tell a parent, teacher, school counselor, or mentor. You can say, "I need to talk about something hard." If you ever think about hurting yourself, tell an adult right away or call or text 988. If someone is in danger, call 911.'] },
      ck('ys-3-c3', 'What should you do if you feel very unsafe or hopeless?', ['Keep it secret', 'Tell a trusted adult or call or text 988', 'Wait it out alone', 'Post about it'], 1, 'Telling a trusted adult or calling 988 gets help fast.', 'Keeping it secret leaves you alone with it.'),
      ev(['988 Suicide and Crisis Lifeline: call or text 988, including for young people.', 'NIMH, Child and Adolescent Mental Health.', 'American Academy of Pediatrics, HealthyChildren.org.']),
    ] },
  ],
  further: [
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988.', url: 'https://988lifeline.org' },
    { name: 'NIMH: Brain Basics', use: 'How the brain works.', url: 'https://www.nimh.nih.gov' },
    { name: 'HealthyChildren.org', use: 'Emotions and coping.', url: 'https://www.healthychildren.org' },
  ],
});

export const YS_DATA = yc({
  id: 'ys-4', num: 4, title: 'Data Can Tell a Story',
  promise: 'Collect simple data, show it in a chart, and say what it does and does not tell you.',
  about: ['Data is information we can count or measure. Health workers use data to see what a community needs.', 'You will ask a question, count, and make a chart. You will also learn to keep other people\'s information private.'],
  objectives: ['Ask a question you can answer with data.', 'Make a simple chart.', 'Say what the chart shows and what it does not.', 'Keep people\'s information private.'],
  minutes: 7,
  lessons: [
    { title: 'A question you can count', summary: 'Start with something you can measure.', minutes: 3, blocks: [
      { kind: 'prose', text: ['A good data question can be answered with numbers. "How many students walk to school?" works. "Is school good?" is too big. Pick a question, decide who you will ask, and decide how you will count.'] },
      { kind: 'tryit', title: 'Try it', text: ['Write a question about your class that you can count, such as how many hours of sleep students got. Decide how you will ask without asking for names.'] },
      ck('ys-4-c1', 'Which is a good data question?', ['Is school fun?', 'How many students in our class walk to school?', 'Why is everything hard?', 'What is best?'], 1, 'It can be answered by counting, which is what makes it a data question.', 'The others are too big or too vague.'),
      ev(['Next Generation Science Standards, Science and Engineering Practices: Analyzing and Interpreting Data.', 'CDC, Data and Statistics: how health data is used.', 'American Statistical Association, GAISE College Report: statistical thinking.']),
    ] },
    { title: 'Charts that tell the truth', summary: 'Bar charts and honest labels.', minutes: 2, blocks: [
      { kind: 'steps', title: 'A good chart has', items: [
        { label: 'A title', text: 'It says what the chart shows.' },
        { label: 'Labels', text: 'Each axis has a name and units.' },
        { label: 'A fair scale', text: 'Start the bars at zero so differences are not exaggerated.' },
        { label: 'A short sentence', text: 'Say what you learned.' },
      ] },
      ck('ys-4-c2', 'Why start a bar chart at zero?', ['It looks nicer', 'So differences are not made to look bigger than they are', 'It is a rule for art', 'It does not matter'], 1, 'A cut-off axis can mislead.', 'Honest charts matter.'),
      ev(['Next Generation Science Standards: Analyzing and Interpreting Data.', 'CDC, Visualizing Data.', 'American Statistical Association, GAISE report.']),
    ] },
    { title: 'What data can and cannot tell you', summary: 'Be careful and be kind.', minutes: 2, blocks: [
      { kind: 'list', title: 'Careful thinking', items: ['A small group may not represent everyone.', 'Two things happening together do not always mean one causes the other.', 'Never share names or private details. Report counts only.', 'Ask permission before you collect anything.'] },
      ck('ys-4-c3', 'You want to share your class survey. What do you share?', ['Everyone\'s names and answers', 'Totals only, with no names', 'Nothing ever', 'Private details'], 1, 'Share counts, not people\'s details.', 'Privacy protects people.'),
      ev(['Next Generation Science Standards: Engaging in Argument from Evidence.', 'U.S. HHS, HIPAA Privacy Rule: protecting health information.', 'Federal Trade Commission, COPPA: protecting children\'s information online.']),
    ] },
  ],
  further: [
    { name: 'CDC: Data and Statistics', use: 'How health data is used.', url: 'https://www.cdc.gov' },
    { name: 'NGSS: Science and Engineering Practices', use: 'The practices behind this course.', url: 'https://www.nextgenscience.org' },
    { name: 'Federal Trade Commission: Protecting Kids Online', use: 'Privacy for young people.', url: 'https://www.ftc.gov' },
  ],
});

export const YS_TECH = yc({
  id: 'ys-5', num: 5, title: 'Technology + Health',
  promise: 'Describe how technology helps health, and use it safely.',
  about: ['Thermometers, apps, and video visits are all technology that helps health. Used well, technology saves time and reaches people.', 'You will also learn how to stay safe and private online.'],
  objectives: ['Name tools that help health.', 'Explain how a tool turns something into a number.', 'Describe how to protect your information online.', 'Explain how screens affect sleep.'],
  minutes: 7,
  lessons: [
    { title: 'Tools that help', summary: 'From thermometers to video visits.', minutes: 3, blocks: [
      { kind: 'steps', title: 'Examples', items: [
        { label: 'Thermometer', text: 'Turns body heat into a number.' },
        { label: 'Fitness band', text: 'Counts steps and estimates heart rate. It is a guide, not a doctor.' },
        { label: 'Video visit', text: 'Lets a doctor see a patient far away.' },
        { label: 'Health apps', text: 'Remind people to take medicine or track sleep.' },
      ] },
      ck('ys-5-c1', 'What does a thermometer do?', ['Turns body heat into a number', 'Cures fever', 'Measures height', 'Counts steps'], 0, 'It senses temperature and shows it.', 'It measures, it does not treat.'),
      ev(['NIH, National Institute of Biomedical Imaging and Bioengineering: Telehealth and wearable devices.', 'CDC, Telehealth.', 'American Academy of Pediatrics, HealthyChildren.org.']),
    ] },
    { title: 'Staying safe online', summary: 'Keep your private information private.', minutes: 2, blocks: [
      { kind: 'list', title: 'Habits', items: ['Do not share your full name, address, school, or photos with people you do not know.', 'Use strong passwords and keep them to yourself.', 'Ask a parent or guardian before you use an app.', 'Tell a trusted adult if someone makes you uncomfortable online.'] },
      ck('ys-5-c2', 'Someone you do not know asks for your address online. What do you do?', ['Send it', 'Do not share it and tell a trusted adult', 'Send half of it', 'Ignore your parents'], 1, 'Private information stays private, and an adult can help.', 'Sharing puts you at risk.'),
      ev(['Federal Trade Commission, Protecting Kids Online and COPPA.', 'Common Sense Media, Digital Citizenship curriculum.', 'CISA, Stay Safe Online guidance for families.']),
    ] },
    { title: 'Screens and sleep', summary: 'Why bedtime matters.', minutes: 2, blocks: [
      { kind: 'prose', text: ['Bright screens close to bedtime can make it harder to fall asleep. The American Academy of Pediatrics suggests keeping screens out of bedrooms at night and turning them off before bed.'] },
      { kind: 'tryit', title: 'Talk with your mentor', text: ['Where do you charge your phone at night? What would you try for a week?'] },
      ck('ys-5-c3', 'What helps sleep?', ['Scrolling in bed', 'Turning off screens before bed', 'Bright light', 'Late snacks'], 1, 'Less screen light helps your body wind down.', 'The others make sleep harder.'),
      ev(['American Academy of Pediatrics, Family Media Plan.', 'American Academy of Sleep Medicine, Sleep and teens.', 'CDC, Sleep and Sleep Disorders.']),
    ] },
  ],
  further: [
    { name: 'FTC: Protecting Kids Online', use: 'Privacy and safety for young people.', url: 'https://www.ftc.gov' },
    { name: 'AAP: Family Media Plan', use: 'A plan for screens.', url: 'https://www.healthychildren.org' },
    { name: 'CDC: Telehealth', use: 'How health care reaches people remotely.', url: 'https://www.cdc.gov' },
  ],
});

export const YS_DESIGN = yc({
  id: 'ys-6', num: 6, title: 'Designing for People',
  promise: 'Use the engineering design process to solve a health problem for real people, and test it with them.',
  about: ['Engineers and health workers build things that help real people. The best ones start by listening.', 'You will use a simple design cycle: ask, imagine, plan, build, test, and improve.'],
  objectives: ['Name the steps of the design process.', 'Describe a problem from a user\'s point of view.', 'Test an idea with the people it is for.', 'Improve an idea after feedback.'],
  minutes: 7,
  lessons: [
    { title: 'Start with a person', summary: 'Ask before you build.', minutes: 3, blocks: [
      { kind: 'prose', text: ['A design starts with a person and a problem. Ask what is hard for them and why. The Next Generation Science Standards call this defining the problem with criteria and constraints: what must the design do, and what limits it?'] },
      { kind: 'tryit', title: 'Try it', text: ['Pick a person, such as a grandparent who has trouble reading small print on a medicine bottle. Write the problem in one sentence from their view.'] },
      ck('ys-6-c1', 'What is the first step of design?', ['Build right away', 'Understand the person and the problem', 'Choose a color', 'Sell it'], 1, 'Good designs start with the user\'s need.', 'Building first often misses the real problem.'),
      ev(['Next Generation Science Standards, Engineering Design: defining and delimiting problems.', 'Stanford d.school, Design Thinking: empathize and define.', 'IDEO, Human-Centered Design Toolkit.']),
    ] },
    { title: 'Imagine, plan, build', summary: 'Many ideas, one plan.', minutes: 2, blocks: [
      { kind: 'steps', title: 'The middle steps', items: [
        { label: 'Imagine', text: 'Come up with many ideas. Do not judge yet.' },
        { label: 'Plan', text: 'Pick one and sketch it.' },
        { label: 'Build', text: 'Make a simple model with paper or cardboard.' },
      ] },
      ck('ys-6-c2', 'Why imagine many ideas?', ['To waste time', 'The best idea often comes after many', 'Rules say so', 'To avoid choosing'], 1, 'More ideas give you better choices.', 'Choosing early can miss better ones.'),
      ev(['NGSS, Engineering Design: developing possible solutions.', 'IDEO, Human-Centered Design Toolkit.', 'Stanford d.school, Design Thinking.']),
    ] },
    { title: 'Test and improve', summary: 'Ask people what works.', minutes: 2, blocks: [
      { kind: 'prose', text: ['Test your model with the person you designed it for. Watch, listen, and do not defend. Ask what worked and what did not. Then change it. Engineers do this many times.'] },
      ck('ys-6-c3', 'Your user says the design is hard to use. What do you do?', ['Argue', 'Thank them and improve it', 'Stop', 'Hide it'], 1, 'Feedback is how designs get better.', 'Defending a design does not help the user.'),
      ev(['NGSS, Engineering Design: optimizing the design solution.', 'IDEO, Human-Centered Design Toolkit.', 'Stanford d.school, Design Thinking: prototype and test.']),
    ] },
  ],
  further: [
    { name: 'NGSS: Engineering Design', use: 'The design practices.', url: 'https://www.nextgenscience.org' },
    { name: 'IDEO: Human-Centered Design Toolkit', use: 'How to design with people.', url: 'https://www.designkit.org' },
    { name: 'Stanford d.school: Design Thinking Resources', use: 'The design process.', url: 'https://dschool.stanford.edu' },
  ],
});

export const YS_CAREERS = yc({
  id: 'ys-7', num: 7, title: 'Meet the People Behind Healthcare',
  promise: 'Learn about many jobs in health, and ask people who do them how they got there.',
  about: ['Health care is more than doctors and nurses. Lab techs, community health workers, pharmacists, engineers, and data analysts all help.', 'You will learn how to ask someone about their job.'],
  objectives: ['Name several health careers.', 'Describe what each one does.', 'Write good questions for an interview.', 'Say one step you could take toward a career.'],
  minutes: 8,
  lessons: [
    { title: 'Many jobs, one goal', summary: 'People who help health.', minutes: 3, blocks: [
      { kind: 'steps', title: 'A few examples', items: [
        { label: 'Nurse', text: 'Cares for patients and teaches them about their health.' },
        { label: 'Community health worker', text: 'Helps neighbors find care and services.' },
        { label: 'Pharmacist', text: 'Makes sure medicines are safe and used correctly.' },
        { label: 'Lab technician', text: 'Runs tests that help doctors find answers.' },
        { label: 'Biomedical engineer', text: 'Designs devices such as pacemakers and prosthetics.' },
        { label: 'Data analyst', text: 'Finds patterns in health information.' },
      ] },
      ck('ys-7-c1', 'Who helps neighbors find care and services?', ['A lab technician', 'A community health worker', 'A pharmacist', 'An engineer'], 1, 'Community health workers connect people to care.', 'The others do different jobs.'),
      ev(['U.S. Bureau of Labor Statistics, Occupational Outlook Handbook: healthcare occupations.', 'California HCAI, Health Workforce Initiatives: careers in health.', 'HMC Health Careers Exploration pathway.']),
    ] },
    { title: 'Ask a question', summary: 'How to interview someone.', minutes: 3, blocks: [
      { kind: 'list', title: 'Good questions', items: ['What does a normal day look like?', 'What do you like most? What is hard?', 'What did you study, and what helped you most?', 'What would you tell someone my age?'] },
      { kind: 'tryit', title: 'Try it', text: ['With your mentor, write four questions and pick one person to ask. Ask a parent or guardian before you contact someone.'] },
      ck('ys-7-c2', 'Which is the better interview question?', ['Yes or no questions only', 'What does a normal day look like?', 'How much money do you make?', 'Are you smart?'], 1, 'Open questions get stories.', 'Yes or no and personal questions give little.'),
      ev(['U.S. Bureau of Labor Statistics, Occupational Outlook Handbook.', 'Miller and Rollnick, Motivational Interviewing (2013): open questions.', 'American Academy of Pediatrics, HealthyChildren.org.']),
    ] },
    { title: 'A first step', summary: 'What you can do now.', minutes: 2, blocks: [
      { kind: 'list', title: 'Steps you can take', items: ['Take a class that interests you.', 'Join a club or volunteer where age allows.', 'Talk with a mentor about options.', 'Keep notes on what you enjoy.'] },
      { kind: 'tryit', title: 'Your step', text: ['Choose one step and tell your mentor when you will take it.'] },
      ck('ys-7-c3', 'What can you do now to explore a career?', ['Nothing until adulthood', 'Talk with people and try activities that interest you', 'Choose only one job', 'Skip school'], 1, 'Exploring now builds knowledge and options.', 'You do not have to choose yet.'),
      ev(['U.S. Bureau of Labor Statistics, Occupational Outlook Handbook.', 'California HCAI, Health Workforce Initiatives.', 'NIH, Office of Science Education: careers in science.']),
    ] },
  ],
  further: [
    { name: 'BLS: Occupational Outlook Handbook', use: 'Descriptions of health careers.', url: 'https://www.bls.gov/ooh/' },
    { name: 'California HCAI: Health Workforce Initiatives', use: 'Careers in California health care.', url: 'https://hcai.ca.gov' },
    { name: 'NIH: Office of Science Education', use: 'Careers in science.', url: 'https://www.nih.gov' },
  ],
});

export const YS_CAPSTONE = yc({
  id: 'ys-8', num: 8, title: 'Build Something That Matters: Capstone',
  practical: true,
  promise: 'Pick a health question in your community, design something that helps, and show it to others.',
  about: ['The capstone brings the course together. You pick a problem, use data and design, and share your idea.', 'You work with a mentor and with permission from a parent or guardian.'],
  objectives: ['Choose a community health question.', 'Use data and design to work on it.', 'Test your idea with the people it is for.', 'Present what you did and learned.'],
  minutes: 45,
  requirements: [
    { id: 'cap-plan', kind: 'assignment', label: 'Write your plan with your mentor', detail: 'The question, who it is for, and how you will test it.' },
    { id: 'cap-build', kind: 'practicum', label: 'Build and test your idea', detail: 'Make a model, poster, or plan, and test it with the people it is for.' },
    { id: 'cap-present', kind: 'attend', label: 'Present to your mentor and group', detail: 'Five minutes: what you asked, what you made, what you learned.' },
  ],
  lessons: [
    { title: 'Choose your question', summary: 'Something real and something you can do.', minutes: 15, blocks: [
      { kind: 'list', title: 'A good capstone question', items: ['Matters to people you know.', 'Can be worked on with what you have.', 'Does not need private information.', 'Is small enough to finish.'] },
      ck('ys-8-c1', 'Which is a good capstone question?', ['How do we fix all of health?', 'How can we make handwashing easier at school?', 'What is everyone\'s medical history?', 'Why is everything hard?'], 1, 'It is real, small, and safe.', 'The others are too big or private.'),
      ev(['NGSS, Engineering Design: defining a problem.', 'CDC, Handwashing in Schools.', 'Federal Trade Commission, Protecting Kids Online.']),
    ] },
    { title: 'Plan, build, and test', summary: 'Use what you learned.', minutes: 15, blocks: [
      { kind: 'steps', title: 'Steps', items: [
        { label: 'Plan', text: 'Write the question, who it is for, and how you will know it helps.' },
        { label: 'Build', text: 'Make a simple model.' },
        { label: 'Test', text: 'Ask the people it is for, and change it.' },
        { label: 'Count', text: 'Use a small count or survey with no names.' },
      ] },
      ck('ys-8-c2', 'What do you do after people test your idea?', ['Ignore feedback', 'Improve it using what you heard', 'Stop', 'Hide it'], 1, 'Testing and improving is how designs get good.', 'Ignoring feedback wastes the test.'),
      ev(['NGSS, Engineering Design: optimizing the design solution.', 'IDEO, Human-Centered Design Toolkit.', 'NGSS: Analyzing and Interpreting Data.']),
    ] },
    { title: 'Share it', summary: 'Five minutes that tell your story.', minutes: 15, blocks: [
      { kind: 'steps', title: 'Your presentation', items: [
        { label: 'The question', text: 'What you wanted to help with.' },
        { label: 'What you made', text: 'Show it.' },
        { label: 'What you learned', text: 'What worked and what you changed.' },
        { label: 'Next step', text: 'What someone could do next.' },
      ] },
      { kind: 'reflect', title: 'After you present', prompts: ['What are you proud of?', 'What would you do differently?'] },
      ev(['NGSS, Obtaining, Evaluating, and Communicating Information.', 'IDEO, Human-Centered Design Toolkit.', 'American Academy of Pediatrics, HealthyChildren.org.']),
    ] },
  ],
  further: [
    { name: 'NGSS: Science and Engineering Practices', use: 'The practices used in the capstone.', url: 'https://www.nextgenscience.org' },
    { name: 'IDEO: Human-Centered Design Toolkit', use: 'Designing with people.', url: 'https://www.designkit.org' },
    { name: '988 Suicide and Crisis Lifeline', use: 'Call or text 988.', url: 'https://988lifeline.org' },
  ],
});

export const YS_MORE_COURSES: Course[] = [YS_HEALTH, YS_BODY, YS_MIND, YS_DATA, YS_TECH, YS_DESIGN, YS_CAREERS, YS_CAPSTONE];
