// STEM + Health camp, Weeks 2 through 6.
//
// Written to the same rules as Week 1, which are not stylistic preferences:
//
//   Reading level     California middle school. Short sentences, one idea at a
//                     time, every technical word defined the first time it is
//                     used and then actually used again.
//   Materials         Paper and pencil only. There are no kits, so nothing here
//                     depends on equipment a site may not have.
//   Template, not log This is how to run the week anywhere. It names no site,
//                     no date, no field trip and no individual student.
//   Health link       Every week connects its science to a health career, so
//                     the science is not abstract and the career is not a poster.
//
// Weeks map to the subject pairings in CAMP_WEEKS. NGSS performance
// expectations are deliberately not claimed here; that mapping is a curriculum
// decision for HMC and its education partners, not something to assert in code.

import type { Block } from './blocks';

// ── Week 2 ───────────────────────────────────────────────────────────────

export const WEEK2_BLOCKS: Block[] = [
  {
    kind: 'why',
    text: [
      'You are made of cells. So is a blade of grass, a mushroom, and the bacteria that gave someone in your class a sore throat last winter. Cells are the smallest piece of a living thing that is still alive.',
      'This week is about how living things grow and change, and about what happens to the information a doctor collects about your body. Both matter. One keeps you alive. The other decides whether the person treating you knows what happened to you last year.',
    ],
  },
  {
    kind: 'vocab',
    items: [
      { term: 'Cell', plain: 'The smallest living unit. Your body has trillions of them, and different kinds do different jobs.' },
      { term: 'Organ', plain: 'A group of tissues working together on one job. Your heart, lungs, skin and stomach are organs.' },
      { term: 'Body system', plain: 'A group of organs that work together. Your lungs, windpipe and diaphragm together make the respiratory system.' },
      { term: 'Microbe', plain: 'A living thing too small to see without a microscope. Some make you sick. Many are helpful and live in your body right now.' },
      { term: 'Health record', plain: 'The written history of your care. What you came in for, what was found, what was done, and what medicine you take.' },
    ],
  },
  {
    kind: 'concept',
    title: 'Growth means more cells, not bigger ones',
    text: [
      'When you got taller this year, your cells did not stretch. Your body made more of them. A cell divides into two, then those divide again. That is how a cut closes, how a bone gets longer, and how a seed becomes a plant.',
      'This also explains something about being sick. Bacteria grow the same way, by dividing. One becomes two, two become four. That is why an infection that seemed small on Monday can be serious by Wednesday, and why a doctor cares how long you have had a symptom.',
    ],
  },
  {
    kind: 'example',
    title: 'Worked example: how fast is fast',
    text: [
      'Imagine one bacterium that divides every 30 minutes. After 30 minutes there are 2. After an hour, 4. After 90 minutes, 8.',
      'Keep going and after five hours there are more than 1,000. After ten hours, over a million. Nothing changed about how fast one cell divides. The number just kept doubling.',
      'Now think about a person who waits three days before telling anyone their cut hurts. Nothing dramatic happened on any single day. The doubling did all the work quietly.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w2-c1',
      q: 'A student grew two inches this year. What happened in their body?',
      options: [
        'Their cells stretched to make them taller',
        'Their body made many new cells by dividing existing ones',
        'They gained cells from the food they ate directly',
        'Their organs moved further apart',
      ],
      answer: 1,
      rationale:
        'Growth happens when cells divide and make more cells. The same process closes a cut and lengthens a bone.',
      distractors:
        'Cells do not stretch to make you taller. Food gives your body the raw material and energy to build new cells, but you do not absorb cells from food. And organs do not simply spread out.',
    },
  },
  {
    kind: 'concept',
    title: 'Where your health information goes',
    text: [
      'Every time you see a doctor, someone writes down what happened. That writing is your health record, and it is now almost always stored on a computer rather than on paper.',
      'People whose job is health information technology build and take care of those systems. They decide how a record is organized, who is allowed to open it, and how a hospital in one city can safely send your record to a clinic in another.',
      'This is not paperwork. If you show up unconscious in an emergency room, the record is what tells the team you are allergic to a medicine. Someone had to make sure that fact was written down, stored correctly, and findable in under a minute.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'Why this matters in your community',
    text: [
      'People who move often, change clinics, or are seen at several different places end up with their history split across systems that do not talk to each other. A doctor then treats you without knowing half of what happened to you.',
      'That is a technology problem and a fairness problem at the same time. It hits hardest the people who move most, which is often families with the least stable housing.',
    ],
  },
  {
    kind: 'activity',
    title: 'Try it: design a record',
    materials: 'Paper and pencil only.',
    text: [
      'Imagine you are building the health record system for a clinic. You get ten lines. That is all.',
      'Write the ten pieces of information you would keep about a patient. Think about what an emergency doctor would need if the patient could not speak.',
      'Now trade with a partner. Look at their ten and find one thing they kept that you did not, and one thing you kept that they did not.',
      'Last question, and it is the real one: is there anything on your list you would not want a stranger to see? Who should be allowed to open it?',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w2-c2',
      q: 'Why does it matter that a health record can be found quickly?',
      options: [
        'Because clinics are graded on how fast they type',
        'Because a patient who cannot speak may have allergies or conditions the care team must know before treating them',
        'Because records take up space',
        'Because patients like to read their own records',
      ],
      answer: 1,
      rationale:
        'In an emergency the record can be the only source of information about a patient. Speed and accuracy are part of the care itself, not paperwork around it.',
      distractors:
        'Clinics are not graded on typing speed. Storage space and patient access both matter, but neither is why speed is urgent.',
    },
  },
  {
    kind: 'reflect',
    title: 'Before you finish',
    prompts: [
      'Name one body system and one job it does.',
      'What is one piece of information about you that a doctor would need in an emergency?',
      'If a person is seen at three different clinics, what problem could that cause?',
    ],
  },
  {
    kind: 'takeaways',
    items: [
      'Living things grow by making more cells, not bigger ones.',
      'Bacteria grow by doubling, which is why an infection can get serious quickly.',
      'A health record is the written history of your care, and it is part of your treatment.',
      'Health information technology is the job of making sure the right person can find the right record fast, and no one else can.',
    ],
  },
];

// ── Week 3 ───────────────────────────────────────────────────────────────

export const WEEK3_BLOCKS: Block[] = [
  {
    kind: 'why',
    text: [
      'Nothing moves unless something pushes or pulls it. That is true for a basketball, a wheelchair, an ambulance, and the blood inside you right now.',
      'This week is about forces, and about the small connected devices that measure a body and send what they find to someone who can act on it.',
    ],
  },
  {
    kind: 'vocab',
    items: [
      { term: 'Force', plain: 'A push or a pull. Forces make things start moving, stop moving, or change direction.' },
      { term: 'Gravity', plain: 'The force that pulls things toward the Earth. It is why a dropped pencil falls.' },
      { term: 'Friction', plain: 'The force that slows things down when two surfaces rub together. It is why you can walk without sliding.' },
      { term: 'Sensor', plain: 'A device that measures something real, like heat, movement or heartbeat, and turns it into a number.' },
      { term: 'Data', plain: 'Information stored as numbers or facts. A list of your heart rate every minute is data.' },
    ],
  },
  {
    kind: 'concept',
    title: 'Forces come in pairs and they add up',
    text: [
      'When you push on a wall, the wall pushes back on you with the same strength. That is always true, and it is why you do not fall through the floor.',
      'Most of the time more than one force acts at once. A ball you throw has your push moving it forward, gravity pulling it down, and air pushing against it. The path it takes is what you get when all three combine.',
      'This is why a wheelchair is harder to push on carpet than on tile. You are pushing the same, but friction is pushing back harder.',
    ],
  },
  {
    kind: 'example',
    title: 'Worked example: the ramp',
    text: [
      'A ramp lets you move something heavy up to a doorway without lifting it straight up. You still do the same total work, but you spread it over a longer distance, so at any moment you push less hard.',
      'This is why building codes limit how steep a ramp can be. A steep ramp is shorter, which sounds better, but it means more force at every moment, and someone pushing their own wheelchair may not be able to make it.',
      'Physics decided that rule. Someone had to know it to write the code, and someone has to know it to notice when a building got it wrong.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w3-c1',
      q: 'Why is a longer, gentler ramp easier to go up than a short steep one?',
      options: [
        'Because it takes less total work',
        'Because the same work is spread over more distance, so less force is needed at any moment',
        'Because gravity is weaker on a gentle slope',
        'Because friction disappears on a long ramp',
      ],
      answer: 1,
      rationale:
        'A ramp trades distance for force. You travel further but push less hard at any one moment, which is what makes it possible for a person to do it themselves.',
      distractors:
        'The total work is about the same. Gravity does not change with the slope, and friction does not disappear; it is still there the whole way up.',
    },
  },
  {
    kind: 'concept',
    title: 'Devices that watch a body',
    text: [
      'A sensor turns something real into a number. A thermometer turns heat into degrees. A pulse oximeter, the clip that goes on a finger, shines light through your skin and turns what comes out the other side into a number for how much oxygen your blood is carrying.',
      'When those devices connect to a network, they can send that number somewhere automatically. A person with a heart condition can wear a monitor at home, and if their heart rhythm changes, a clinic knows without them having to notice anything or travel anywhere.',
      'People who build and manage these devices work in a field sometimes called the internet of medical things. The science is physics and electronics. The purpose is that someone gets help before their situation becomes an emergency.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'Why this matters in your community',
    text: [
      'Home monitoring helps most when getting to a clinic is hard: no car, no time off work, no one to watch younger siblings. Those are exactly the households where a health problem is most likely to be caught late.',
      'A device that works only with fast home internet, or that costs money every month, will not reach those families. Whether the technology helps depends on choices someone makes while designing it.',
    ],
  },
  {
    kind: 'activity',
    title: 'Try it: what would you measure',
    materials: 'Paper and pencil only.',
    text: [
      'Pick one person you might want to keep track of: an athlete, a newborn, someone recovering from surgery, or an older person living alone.',
      'Write down three things you would measure about them, and for each one, why it would tell you something useful.',
      'Now write what number would mean "call someone right now." Be specific.',
      'Last, write one way your system could be wrong. Every sensor can be wrong, and knowing how is part of designing it.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w3-c2',
      q: 'What does a sensor actually do?',
      options: [
        'It decides whether a patient is healthy',
        'It measures something real and turns it into a number',
        'It replaces the need for a doctor',
        'It stores medical records',
      ],
      answer: 1,
      rationale:
        'A sensor measures and reports. Deciding what a number means is a judgment made by a person, using the number as one piece of information.',
      distractors:
        'Sensors do not diagnose and do not replace clinicians. Storing records is a different job, done by the systems from Week 2.',
    },
  },
  {
    kind: 'reflect',
    title: 'Before you finish',
    prompts: [
      'Name two forces acting on you right now.',
      'What is one thing a sensor could measure about a person that you cannot see by looking at them?',
      'Who might be left out if a health device needs fast home internet?',
    ],
  },
  {
    kind: 'takeaways',
    items: [
      'A force is a push or a pull, and usually several act at once.',
      'A ramp trades distance for force, which is why gentle ramps are usable and steep ones are not.',
      'A sensor turns something real into a number. It measures; it does not decide.',
      'Connected devices can get someone help before a problem becomes an emergency, but only if the design accounts for who will actually use them.',
    ],
  },
];

// ── Week 4 ───────────────────────────────────────────────────────────────

export const WEEK4_BLOCKS: Block[] = [
  {
    kind: 'why',
    text: [
      'Your heart is beating right now because of electricity. Not from a wall, from your own body. Small electrical signals tell heart muscle when to squeeze, in an order, over and over, for your whole life.',
      'This week is about electricity and magnets, and about how a diagnosis is actually reached, which is less like guessing and more like ruling things out.',
    ],
  },
  {
    kind: 'vocab',
    items: [
      { term: 'Electric current', plain: 'The flow of electric charge, usually through a wire or through something wet, like the inside of a body.' },
      { term: 'Circuit', plain: 'A complete loop that current can travel around. Break the loop anywhere and the flow stops.' },
      { term: 'Conductor', plain: 'A material current moves through easily. Metal and salty water are good conductors.' },
      { term: 'Insulator', plain: 'A material current does not move through easily. Rubber and plastic are insulators, which is why wires are coated.' },
      { term: 'Diagnosis', plain: 'The conclusion about what is causing a person\'s symptoms, reached by gathering evidence.' },
    ],
  },
  {
    kind: 'concept',
    title: 'A circuit has to be a complete loop',
    text: [
      'Electricity does not just leave a battery and stop. It goes out one end, through whatever you connected, and back into the other end. If the loop is broken anywhere, nothing flows at all.',
      'This is why a light switch works. Flipping it does not create electricity. It closes a gap in the loop, and flipping it back opens the gap again.',
      'Your body conducts electricity because it is mostly salty water. That is useful for machines that measure you, and it is why an electrical injury is dangerous: your body will happily complete a circuit it was never meant to be part of.',
    ],
  },
  {
    kind: 'example',
    title: 'Worked example: reading a heart',
    text: [
      'An electrocardiogram, usually called an ECG or EKG, is a machine that reads the electrical signals your heart makes. Sticky pads go on your skin, and because your body conducts, the machine can pick up signals made inside your chest without going in.',
      'The result is a line with a repeating shape. A trained person reads that shape and can tell whether the signal is traveling through the heart in the right order and at the right speed.',
      'Nothing was cut open. The whole test works because your body is a conductor and someone understood what that made possible.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w4-c1',
      q: 'An ECG machine can read a heart\'s electrical signals from pads on the skin. Why does this work?',
      options: [
        'Because the machine sends electricity into the heart',
        'Because the body is mostly salty water and conducts the signals the heart makes to the skin',
        'Because skin produces its own heart signal',
        'Because magnets pull the signal out of the chest',
      ],
      answer: 1,
      rationale:
        'The heart makes its own electrical signals, and the body conducts them outward. The machine listens rather than sends.',
      distractors:
        'The machine does not put current into you during a standard ECG. Skin does not generate heart signals, and magnets are not what is happening here.',
    },
  },
  {
    kind: 'concept',
    title: 'How a diagnosis is actually reached',
    text: [
      'On television someone looks at a patient and names the disease. That is not how it works. A real diagnosis is built by narrowing.',
      'It starts with the story: what happened, when it started, what makes it better or worse. Then the examination, which is the careful observing from Week 1. Then tests, chosen to separate the remaining possibilities rather than to check everything.',
      'A good clinician keeps a list of what it could be, and each piece of evidence removes something from the list. The last thing standing, checked against the evidence, is the diagnosis. If new evidence does not fit, the list opens again.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'Why this matters in your community',
    text: [
      'Diagnosis depends on the story the patient tells. If someone is rushed, or is speaking a language the clinician does not share, or is not believed, the story comes out incomplete, and everything built on it is shakier.',
      'This is why interpreters, community health workers and people who take time with patients change outcomes. They are not being nice. They are improving the evidence.',
    ],
  },
  {
    kind: 'activity',
    title: 'Try it: narrow it down',
    materials: 'Paper and pencil only.',
    text: [
      'A student has a headache. Write down five things that could be causing it. Do not look anything up; use what you already know.',
      'Now write one question you could ask that would remove at least two things from your list. A good question splits the list, rather than checking one item.',
      'Write a second question that splits what is left.',
      'How many questions did it take to get to one or two possibilities? That is the skill. Not knowing the answer, but knowing what to ask next.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w4-c2',
      q: 'What makes a good diagnostic question?',
      options: [
        'It confirms what the clinician already suspects',
        'It splits the list of possibilities, ruling several out at once',
        'It is the most detailed question available',
        'It asks the patient what they think they have',
      ],
      answer: 1,
      rationale:
        'Diagnosis works by narrowing. A question that eliminates several possibilities makes far more progress than one that checks a single guess.',
      distractors:
        'Looking only for confirmation is how people miss things. Detail is not the same as usefulness, and while a patient\'s own view is worth hearing, it is one input rather than the method.',
    },
  },
  {
    kind: 'reflect',
    title: 'Before you finish',
    prompts: [
      'Why does a broken wire stop a light from working, even if the battery is full?',
      'Name one reason a patient\'s story might come out incomplete.',
      'What is the difference between guessing an answer and narrowing to one?',
    ],
  },
  {
    kind: 'takeaways',
    items: [
      'Current only flows around a complete loop. Break the loop anywhere and it stops.',
      'Your body conducts electricity, which is what lets machines read your heart from the outside.',
      'A diagnosis is built by narrowing a list, not by recognizing an answer.',
      'The quality of a diagnosis depends on the quality of the patient\'s story, which is why being listened to is part of medical care.',
    ],
  },
];

// ── Week 5 ───────────────────────────────────────────────────────────────

export const WEEK5_BLOCKS: Block[] = [
  {
    kind: 'why',
    text: [
      'You are mostly water. Not partly, mostly. And the water in you is not plain, it has salts dissolved in it, in amounts your body works constantly to keep steady.',
      'This week is about fluids and balance, and about designing something a person would actually use, which is harder and more interesting than it sounds.',
    ],
  },
  {
    kind: 'vocab',
    items: [
      { term: 'Fluid', plain: 'Anything that flows. Water and air are both fluids.' },
      { term: 'Dissolve', plain: 'When a substance spreads out evenly into a liquid and seems to disappear, like salt in water. It is still there.' },
      { term: 'Electrolyte', plain: 'A salt dissolved in your body\'s water, such as sodium or potassium. Your nerves and muscles need them to work.' },
      { term: 'Dehydration', plain: 'When your body has lost more water than it took in.' },
      { term: 'Prototype', plain: 'A first rough version of something you built to test whether the idea works.' },
    ],
  },
  {
    kind: 'concept',
    title: 'Balance is something your body works at',
    text: [
      'Your body keeps its water and salt levels inside a narrow range. Sweat, breathe, or cry and you lose both. Drink and eat and you take them back in. Your kidneys adjust what leaves so the amount staying is about right.',
      'When the balance goes wrong, you feel it fast. Too little water and you get a headache, feel tired, and stop thinking clearly. That is not weakness; your brain cells are literally working in the wrong conditions.',
      'This is why someone with bad vomiting or diarrhea can become seriously ill quickly, especially a small child. They are losing water and electrolytes faster than they can take them in.',
    ],
  },
  {
    kind: 'example',
    title: 'Worked example: why plain water is not always enough',
    text: [
      'A person has been vomiting all day. They are losing water and salts together. If they drink only plain water, they replace the water but not the salts, and the balance is still off.',
      'Oral rehydration solution is water with specific amounts of salt and sugar mixed in. The sugar is not for energy; it helps the intestine absorb the sodium, and the water follows.',
      'That mixture is cheap, is made from things most households have, and has saved an enormous number of children\'s lives worldwide. It is not a high-technology invention. It is a well-designed one.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w5-c1',
      q: 'Why does oral rehydration solution contain salt and sugar rather than being plain water?',
      options: [
        'To make it taste better so people drink more',
        'Because someone losing fluids loses salts too, and the sugar helps the body absorb the sodium and water',
        'Because sugar kills the germs causing the illness',
        'Because plain water is unsafe to drink when ill',
      ],
      answer: 1,
      rationale:
        'Fluid loss takes electrolytes with it, so replacing water alone leaves the balance wrong. The sugar assists absorption rather than providing energy.',
      distractors:
        'Taste is a minor consideration. Sugar does not kill germs, and plain water is safe; it is just not sufficient by itself.',
    },
  },
  {
    kind: 'concept',
    title: 'Designing for the person who will use it',
    text: [
      'Product design starts with the person, not the product. Who will use this? Where are they? What do they already have? What will go wrong when they are tired or in a hurry?',
      'A design that works perfectly in a laboratory and fails in a kitchen has failed. Oral rehydration solution succeeded because it could be made with clean water, salt and sugar, by a caregiver, at home, at night.',
      'Designers build a prototype, watch a real person use it, and change it. Then again. The first version is never the good one, and expecting it to be is the most common mistake.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'Why this matters in your community',
    text: [
      'Think about what a health product assumes: that you have a refrigerator, a car to pick it up, a phone to set reminders, someone who reads the language on the label.',
      'Every assumption quietly excludes someone. The best designers name their assumptions out loud so they can decide which ones they are willing to make.',
    ],
  },
  {
    kind: 'activity',
    title: 'Try it: design for someone specific',
    materials: 'Paper and pencil only.',
    text: [
      'Pick a real person you know, or a specific person you can imagine clearly. An older neighbor, a younger cousin, a parent working two jobs.',
      'Design something simple that would help them stay hydrated. Draw it or describe it in five sentences.',
      'Now list three things you assumed they have. Electricity? A sink? Time? Reading in English?',
      'Change your design so one of those assumptions is no longer needed. That change is the actual work of design.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w5-c2',
      q: 'A team designs a health device that requires a smartphone app and daily charging. What is the design risk?',
      options: [
        'It will be too expensive to manufacture',
        'It assumes a phone, reliable power and comfort with apps, which excludes some of the people who need it most',
        'It will be difficult to patent',
        'There is no risk if the device works correctly',
      ],
      answer: 1,
      rationale:
        'Every requirement is an assumption about the user. A device that works only for people with phones, power and digital confidence will miss households where health needs are often greatest.',
      distractors:
        'Cost and patents are real business concerns but are not the design risk here. And a device that works technically can still fail completely in the hands of the people it was for.',
    },
  },
  {
    kind: 'reflect',
    title: 'Before you finish',
    prompts: [
      'Name two ways your body loses water in a normal day.',
      'Why can a small child get seriously ill from vomiting faster than an adult?',
      'What is one assumption a product you use every day makes about you?',
    ],
  },
  {
    kind: 'takeaways',
    items: [
      'Your body constantly works to hold water and salts in a narrow range.',
      'Losing fluids means losing electrolytes, so replacing water alone is not enough.',
      'Oral rehydration solution is a simple, well-designed idea that has saved enormous numbers of lives.',
      'Design starts with a specific person and their real conditions. Naming your assumptions is how you find who you are leaving out.',
    ],
  },
];

// ── Week 6 ───────────────────────────────────────────────────────────────

export const WEEK6_BLOCKS: Block[] = [
  {
    kind: 'why',
    text: [
      'Everything you have used this camp was invented by someone. The ramp, the pulse clip, the rehydration mixture, the record system. None of it existed until a person noticed a problem and built something.',
      'This week you build your own thing, and you meet the fact that this could be a job. Not someday and not for other people. These are real occupations with real routes into them.',
    ],
  },
  {
    kind: 'vocab',
    items: [
      { term: 'Invention', plain: 'Something new that someone made. It does not have to be complicated to count.' },
      { term: 'Iteration', plain: 'Making a version, testing it, and making a better version. Doing it again on purpose.' },
      { term: 'Makerspace', plain: 'A place with tools and materials where people build things and help each other build things.' },
      { term: 'Career pathway', plain: 'The route from where you are now to a job: the school, training or credential it takes.' },
    ],
  },
  {
    kind: 'concept',
    title: 'Inventions are usually small and specific',
    text: [
      'People imagine an inventor as someone who thinks of something enormous nobody has considered. Almost all real inventions are smaller: someone saw one thing going wrong repeatedly and fixed that one thing.',
      'A nurse who got tired of losing track of which patients needed turning made a chart. A parent whose child would not take medicine mixed it into something else. A technician who kept mixing up two similar bottles put a colored band on one.',
      'Every one of those changed outcomes. None required a laboratory. What they required was someone paying attention to a problem other people had accepted.',
    ],
  },
  {
    kind: 'example',
    title: 'Worked example: from annoyance to invention',
    text: [
      'Start with an annoyance: at a health fair, people fill out the same form three times at three tables.',
      'Ask why. Each table keeps its own records, and nobody built a way to share.',
      'Now the ideas. One form at the entrance and a number people carry. A card with the basics already filled in. A volunteer at the door who writes it once for everyone.',
      'Build the roughest possible version. Draw the card on paper. Try it with five people. You will find something you did not expect, probably that people do not want to write their name at all until they know who is asking.',
      'That discovery is the invention working. You learned it in twenty minutes on paper instead of after building something real.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w6-c1',
      q: 'Why is building a rough paper version before a real one a good idea?',
      options: [
        'Because it is cheaper to make and looks more professional',
        'Because testing it with real people reveals problems early, while changing the design is still easy',
        'Because paper versions are what judges expect at a science fair',
        'Because it proves the idea will work',
      ],
      answer: 1,
      rationale:
        'A rough version exists to be tested. Finding a problem on paper costs twenty minutes; finding the same problem after building the real thing costs far more.',
      distractors:
        'Rough prototypes do not look professional, and that is fine. They also do not prove an idea works; they help you find out where it does not.',
    },
  },
  {
    kind: 'concept',
    title: 'These are jobs',
    text: [
      'Every week of this camp connects to work people are paid to do. Week 1, observation and laboratory science. Week 2, health information technology. Week 3, biomedical devices and engineering. Week 4, diagnosis and clinical care. Week 5, product design and public health.',
      'The routes in are different lengths. Some of these jobs are entered with a certificate or a two-year degree. Others take longer. What none of them require is deciding today.',
      'What helps is knowing the routes exist, and knowing that the person who ends up in one of them usually got there because someone showed them it was possible.',
    ],
  },
  {
    kind: 'fieldnote',
    title: 'Why this matters in your community',
    text: [
      'Many of the health problems in a neighborhood are best understood by people who live there. A person who has waited for a bus to a clinic across the city knows something about access that no one else on the design team knows.',
      'That knowledge is worth something professionally. Bring it with you rather than leaving it at the door.',
    ],
  },
  {
    kind: 'activity',
    title: 'Try it: build and show',
    materials: 'Paper and pencil only.',
    text: [
      'Pick a problem you have actually seen. Something small and real, in your school, home or neighborhood.',
      'Write it in one sentence, starting with the person: "People who... have trouble with..."',
      'Draw or describe your rough version. Then find two people, show them, and write down what they said, especially anything that surprised you.',
      'Make one change based on what you heard. Then prepare to present three things: the problem, your version, and the one thing you changed and why.',
      'That last part is the most important. Anyone can present an idea. Presenting what you learned and changed is what makes it real work.',
    ],
  },
  {
    kind: 'check',
    check: {
      id: 'stem-w6-c2',
      q: 'When presenting a project, why does explaining what you changed matter?',
      options: [
        'It shows you tested the idea with people and improved it, which is how real design works',
        'It fills time in the presentation',
        'It shows the first version was a failure',
        'It is required by science fair rules',
      ],
      answer: 0,
      rationale:
        'Design is iteration. Showing what you learned and changed is evidence you tested the idea rather than just imagined it, and that is the part that makes it real work.',
      distractors:
        'A first version needing changes is expected, not a failure. And this is about how design actually works, not about rules or filling time.',
    },
  },
  {
    kind: 'reflect',
    title: 'Before you finish',
    prompts: [
      'Which week of this camp did you find most interesting, and what specifically about it?',
      'Name one job connected to that week.',
      'What is one problem in your own neighborhood that someone should be working on?',
    ],
  },
  {
    kind: 'takeaways',
    items: [
      'Most inventions are small and specific. Someone noticed one thing going wrong and fixed that one thing.',
      'Build the roughest version first and test it with real people. Finding problems early is the point.',
      'Every subject in this camp connects to real jobs, and the routes in are different lengths.',
      'What you know from your own life is professionally useful. Bring it with you.',
    ],
  },
];
