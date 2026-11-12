// Community Mental Health Worker Pathway, Mental Health Core M3: Substance Use, Harm Reduction, and
// Co-occurring Conditions.
//
// A self-paced course (id chw_mh_substance_use, 4 hours). It teaches a community health worker what
// substance use disorders are, what the main substances do and what withdrawal can involve, how
// addiction is treated, what harm reduction is and what the federal overdose toolkit says to do in an
// overdose, and how mental health and substance use conditions occur together. It does not teach
// treatment, and it never asks a worker to advise on a medication or a withdrawal.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources
// are SAMHSA's Treatment Improvement Protocol 35 (2019 update), SAMHSA's Treatment Improvement
// Protocol 42 on co-occurring disorders (2020 update), SAMHSA's Overdose Prevention and Response Toolkit
// (PEP23-03-00-001, read from a copy hosted by the National Center on Advancing Alcohol Research), the
// National Institute on Drug Abuse page on treatment and recovery from its Science of Addiction
// publication, NIDA's Words Matter page, the National Harm Reduction Coalition's principles of harm
// reduction, and SAMHSA's working definition of recovery. SAMHSA's own harm reduction pages returned
// not found on November 10, 2026, the Surgeon General's report site refused an automated request, and
// neither was bypassed. The course says plainly that federal sources differ on abstinence as a goal.
// The NIDA pages carry a notice about a change in federal terminology that is unrelated to their
// content, and the notice was ignored. The scenes were written for this course and describe no real
// person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_SUBSTANCE_USE: Course = {
  id: 'chw_mh_substance_use',
  num: 24,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Substance Use, Harm Reduction, and Co-occurring Conditions',
  promise:
    "Explain substance use disorder in plain language, know what the main substances do and when withdrawal is dangerous, describe how addiction is treated and why relapse is not failure, understand harm reduction and what to do in an overdose, and support people who have both a substance use and a mental health condition.",
  about: [
    "This course covers the part of behavioral health where the stakes are often highest and the stigma is often heaviest. It explains what substance use disorder is, what different substances do, how treatment and recovery work, what harm reduction means, how to recognize and respond to an overdose, and how substance use and mental health conditions occur together.",
    "It rests on SAMHSA's protocols on motivation for change and on co-occurring disorders, SAMHSA's overdose prevention and response toolkit, a National Institute on Drug Abuse publication on treatment and recovery and its page on language, the principles of the National Harm Reduction Coalition, and SAMHSA's working definition of recovery. Where federal sources differ, the lesson says so.",
    "It is Mental Health Core course 3 of HMC's community health worker pathway. It does not teach you to treat addiction or to manage withdrawal, and it does not ask you to advise anyone about a medication. It gives you the knowledge to listen without judgment, to respond to an emergency, and to connect people to care that fits them.",
  ],
  objectives: [
    "Define substance use, misuse, and substance use disorder, and explain why addiction is treated as a chronic condition.",
    "Describe the main classes of substances, what intoxication and withdrawal can look like, and when withdrawal needs medical care.",
    "Describe treatment, including medications and behavioral therapies, and explain why relapse is not the same as treatment failure.",
    "Explain harm reduction and how it relates to recovery, and describe the strategies the federal overdose toolkit lists.",
    "Recognize an overdose and name the steps for responding.",
    "Explain why mental health and substance use conditions often occur together and what integrated care means.",
  ],
  minutes: 240,
  prerequisites: "None. Hope, Recovery, and Wellness, Understanding Mental Health Conditions, and Motivational Interviewing are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people with their own lived experience of substance use or recovery.",
  freshness:
    "The facts in this course were read on federal and national organization pages on November 10, 2026. Drug supplies change quickly, and overdose guidance and local rules change too. Check the current toolkit and your program's procedures before you teach or act.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhs-l1',
      title: 'Substance use, misuse, and substance use disorder',
      summary: 'The terms the federal protocols use, what makes a disorder, the substance categories, and why language matters.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "People use alcohol and other drugs for many reasons, and most do not develop a disorder. Some do, and when they do, the consequences can be severe. If you understand the terms, you can talk with people in a way that is accurate and respectful, and you can tell when a situation calls for more than a listening ear.",
        ] },
        { kind: 'concept', title: 'Use, misuse, and disorder', text: [
          "SAMHSA's protocol on motivation for change gives definitions. Substance use is the use, even one time, of any of the substances it lists. Substance misuse is the use of any substance in a manner, situation, amount, or frequency that can cause harm to users or to those around them. For some substances or individuals, any use would be misuse, and its examples are underage drinking and injection drug use. Substance use disorder is a medical illness caused by repeated misuse of a substance or substances. A severe substance use disorder is commonly called an addiction.",
          "Those are three different things. Use is not misuse, and misuse is not a disorder. A worker who treats every drink or every drug as an addiction will lose the trust of the people who most need help.",
          "The protocol describes substance use disorders as characterized by clinically significant impairments in health, social function, and impaired control over substance use, diagnosed by assessing cognitive, behavioral, and psychological symptoms. They range from mild to severe and from temporary to chronic. They typically develop gradually with repeated misuse, leading to changes in brain circuits that govern reward, stress, and executive functions like decision making and self-control. Multiple factors influence whether and how quickly a person will develop one. These include the substance itself, the person's genetic vulnerability, and the amount, frequency, and duration of misuse.",
          "For alcohol, the protocol gives an example of the diagnostic standard. It says alcohol use disorder, under the diagnostic manual used in the United States, applies to a person who uses alcohol and experiences at least 2 of 11 symptoms in a 12-month period. Key aspects include loss of control, continued use despite adverse consequences, tolerance, and withdrawal, and the disorder covers a range of severity. A health professional makes the diagnosis. You do not.",
        ] },
        { kind: 'concept', title: 'The substances', text: [
          "The protocol lists categories of substances. Alcohol, including beer, wine, malt liquor, and distilled spirits. Illicit drugs, including cocaine and crack, heroin, hallucinogens such as LSD, PCP, ecstasy, peyote, mescaline, and psilocybin, methamphetamines, marijuana and hashish, and synthetic drugs such as K2, Spice, and bath salts. Prescription-type medications used for nonmedical purposes, including pain relievers such as fentanyl, codeine, oxycodone, hydrocodone, and tramadol, tranquilizers including benzodiazepines, stimulants including amphetamine and methylphenidate products, and sedatives. And over-the-counter drugs and other substances, such as cough and cold medicines and inhalants.",
          "The protocol adds a note on marijuana. As of the date of its note, in 2016, some states had legalized medical or retail use, and none of those permitted uses altered the federal status of marijuana as an illicit drug. Laws change, so check what applies in your setting. For your work the main point is that the same substance can be legal in one place, illegal in another, medically prescribed, and misused, and that legality does not decide whether a person is having a problem.",
        ] },
        { kind: 'concept', title: 'A chronic condition, not a moral failing', text: [
          "A National Institute on Drug Abuse publication on the science of addiction says that addiction is a treatable disorder. It says that, like treatment for other chronic diseases such as heart disease or asthma, addiction treatment is not a cure but a way of managing the condition, and it enables people to counteract addiction's disruptive effects on their brain and behavior and regain control of their lives.",
          "Another NIDA page on language says stigma about people with substance use disorder can include inaccurate thoughts that they are dangerous, incapable of managing treatment, or at fault for their condition. It says such stigma may stem from outdated beliefs that addiction is a moral failing instead of what is known about it, a chronic, treatable disease from which people can recover. It reports that feeling stigmatized can reduce willingness to seek treatment, and that stigmatizing language can shape how providers see people and what care they give.",
          "SAMHSA's protocol makes a related point about labels. It says there is no evidence that forcing a client to accept a label is helpful, and that diagnoses and labels like alcoholic or addict can evoke shame and discord in the relationship.",
        ] },
        { kind: 'concept', title: 'Language', text: [
          "You met NIDA's guidance on language in the first course of this core. For substance use, it recommends person-first language and letting individuals choose how they are described. It recommends person with substance use disorder rather than addict, person with opioid use disorder rather than user, person in recovery rather than former addict, and the terms use and misuse in place of abuse. For drug test results it recommends testing negative or positive in place of clean or dirty. It explains that the word abuse was found to have a high association with negative judgments and punishment.",
          "Practice guidance for this course. Use the person's own words with them and respectful language in notes and when talking about them. If a person calls themselves an addict, you need not correct them. If a coworker uses a slur, say something kind and short.",
        ] },
        { kind: 'concept', title: 'Ambivalence is normal', text: [
          "In the Motivational Interviewing course you learned that ambivalence about change is normal. SAMHSA's protocol makes the same point about substance use, noting that individuals with substance use disorders are often aware of the risks associated with their use but continue to use anyway, and that the tension between these feelings is ambivalence. If you read ambivalence as denial, you are likely to create discord.",
          "That has a practical meaning for you. You will meet people who do not see their substance use as a problem, people who see it as a problem but are not ready to change, and people who are ready. Each calls for a different conversation. Your skills in listening, reflecting, and asking permission apply here.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Substance use', plain: "The use, even once, of alcohol or other drugs." },
          { term: 'Substance misuse', plain: "Use in a manner, situation, amount, or frequency that can cause harm to the user or others." },
          { term: 'Substance use disorder', plain: "A medical illness caused by repeated misuse. It ranges from mild to severe." },
          { term: 'Addiction', plain: "The most severe form of a substance use disorder." },
          { term: 'Tolerance', plain: "The body adjusting to a substance so that more is needed for the same effect." },
        ] },
        { kind: 'myths', items: [
          { myth: "Anyone who uses drugs or alcohol is addicted.", reality: "The protocol separates use, misuse, and substance use disorder. A disorder involves impairment and loss of control over time." },
          { myth: "Addiction is a moral failing.", reality: "NIDA describes it as a chronic, treatable disease and says moral-failing beliefs are outdated." },
          { myth: "People must accept the label addict to get better.", reality: "SAMHSA's protocol says there is no evidence that forcing a label is helpful and that it tends to create discord." },
          { myth: "If a substance is legal, it is safe.", reality: "Alcohol is legal and can cause serious harm and a dangerous withdrawal. Legality does not measure risk." },
        ] },
        { kind: 'case', title: 'Drinking, and a label', scenario: true, text: [
          "A man tells a worker that he has a few beers most nights, that his wife is worried, and that he does not think he is an alcoholic. The worker does not argue about the label. She says, you have a few beers most nights, and your wife is worried. What do you make of her worry? He says he guesses she sees the way he is in the mornings. The worker reflects that he notices that too. She asks what he would like to be different. She does not say he has a disorder. She is staying curious, and she has used none of the words that would make him defensive.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q1',
          q: "According to SAMHSA's protocol, which statement correctly describes the difference between substance use and substance use disorder?",
          options: [
            "They are the same",
            "Substance use is use of a substance, even one time, and a substance use disorder is a medical illness caused by repeated misuse, ranging from mild to severe",
            "A substance use disorder is any use of alcohol",
            "Only illegal drugs can cause a disorder",
          ],
          answer: 1,
          rationale: "The protocol defines substance use as any use, even once, and substance use disorder as a medical illness caused by repeated misuse of a substance, ranging from mild to severe.",
          distractors: "The other answers equate use and disorder or limit disorder to illegal drugs.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q2',
          q: "Which approach to labels matches SAMHSA's protocol?",
          options: [
            "Insist that the person say they are an addict",
            "Do not argue about labels, stay curious, and use the person's own words",
            "Avoid talking about substance use",
            "Tell the person what they are",
          ],
          answer: 1,
          rationale: "The protocol says there is no evidence that forcing a label helps and that it tends to produce discord. Staying curious and not arguing preserves the relationship.",
          distractors: "The other answers push labels or avoid the subject.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What did you believe about addiction before you started this work? What has changed?",
          "What words do people use for substance use in the community you serve?",
        ] },
        { kind: 'takeaways', items: [
          "Use, misuse, and disorder are different things. A professional makes a diagnosis.",
          "Addiction is a chronic, treatable condition. Treatment manages it and is not a cure.",
          "Use respectful language, do not push labels, and treat ambivalence as normal.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 35, Enhancing Motivation for Change in Substance Use Disorder Treatment (2019 update), Chapter 1 and Chapter 3. The key terms, the definitions, the list of substance categories, the diagnostic standard for alcohol use disorder, the labeling trap, and ambivalence. Read in full.",
          "National Institute on Drug Abuse. Drugs, Brains, and Behavior: The Science of Addiction, Treatment and Recovery. The statement that addiction is a treatable disorder and treatment is a way of managing it.",
          "National Institute on Drug Abuse. Words Matter: Terms to Use and Avoid When Talking About Addiction. The definition of stigma, its effects, and the recommended terms.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhs-l2',
      title: 'What substances do, and when withdrawal is dangerous',
      summary: 'Intoxication and withdrawal by class of substance, and why mental symptoms can come from substances.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "You do not need to be a pharmacologist. You do need to know enough to recognize when someone is intoxicated, when someone is in withdrawal, when a symptom might be caused by a substance rather than a mental illness, and when to call for medical help. Some withdrawals can be deadly. A worker who knows this can save a life by not encouraging someone to stop suddenly on their own.",
        ] },
        { kind: 'concept', title: 'Where this comes from', text: [
          "SAMHSA's protocol on co-occurring disorders includes an exhibit that summarizes the psychiatric symptoms seen in intoxication and withdrawal for the main classes of substances. This lesson draws on it. The protocol is written for counselors, and it is a summary and not a medical guide. Treat it as background, not as instructions.",
          "The protocol explains why the topic matters. Substance use can cause symptoms that look like mental disorders, and withdrawal from some substances can cause mood and thinking changes that persist for weeks or months. Sorting out which came first is a task for a trained professional, which is why a good assessment looks at the whole history.",
        ] },
        { kind: 'concept', title: 'Alcohol', text: [
          "The protocol says that in most people moderate to heavy drinking is associated with euphoria, mood changes, decreased impulse control, and increased social confidence, and is often followed by next-day fatigue, nausea, and a low mood.",
          "On withdrawal, it describes agitation, anxiety, tremor, malaise, exaggerated reflexes, a mildly rapid heartbeat, increasing blood pressure, sweating, insomnia, nausea or vomiting, and perceptual distortions. It says more severe withdrawal is characterized by severe instability in vital signs, agitation, hallucinations, delusions, and often seizures. It also describes alcohol-induced delirium after high-dose drinking, with fluctuating mental status, confusion, and disorientation. After the acute phase of a few days, some people have continued mood instability, fatigue, insomnia, and hostility for weeks or months.",
          "What this means for you. Heavy, long-term drinking followed by sudden stopping can be dangerous. Seizures are listed among the signs of severe withdrawal. You do not tell a heavy drinker to stop cold turkey, and you do not manage someone's withdrawal. Encourage them to talk to a health professional before stopping, and if they show severe symptoms such as seizure, confusion, hallucinations, or a very fast heartbeat, call 911. That guidance is written for this course, and it follows from the protocol's description of severe withdrawal.",
        ] },
        { kind: 'concept', title: 'Sedatives, including benzodiazepines', text: [
          "The protocol says intoxication with sedatives like diazepam is similar to alcohol. Withdrawal is also similar to alcohol: mood instability with anxiety or depression, sleep disturbance, tremor, nausea or vomiting, and, in more severe cases, brief hallucinations or illusions and grand mal seizures. It describes a protracted withdrawal syndrome with anxiety, depression, odd sensations, muscle pain, dizziness, and impaired concentration. It says most symptoms resolve in weeks, but some have been reported to last a year or more.",
          "These medications are prescribed, which means a person may be taking them as directed and may stop them abruptly without realizing the risk. The same rule applies. Nobody should stop one on their own. The prescriber must be involved. This is a place where your role is to connect, not advise.",
        ] },
        { kind: 'concept', title: 'Opioids', text: [
          "The protocol says opioid intoxication is characterized by intense euphoria and well-being. Withdrawal can result in agitation, severe body aches, stomach and bowel symptoms, a low mood, and craving. Some people become acutely anxious and agitated while others become depressed. Anxiety, depression, and sleep problems can persist as a protracted withdrawal syndrome.",
          "SAMHSA's overdose toolkit adds that opioid withdrawal symptoms, which can include body aches, diarrhea, fast heart rate, fever, runny nose, sneezing, gooseflesh, sweating, yawning, nausea or vomiting, nervousness, restlessness, irritability, shivering, abdominal cramps, weakness, insomnia, craving, and increased blood pressure, are uncomfortable and can be quite miserable but are generally not life threatening. Contrast this with alcohol and sedatives. The toolkit and the protocol also make plain that opioid overdose is an emergency. You will study it in Lesson 5.",
        ] },
        { kind: 'concept', title: 'Stimulants', text: [
          "The protocol says that mild to moderate intoxication from cocaine, methamphetamine, or other stimulants is associated with euphoria, a sense of well-being, and perceived increased powers of thought, strength, and accomplishment. As more is used, attention, concentration, and function decrease. With cocaine and methamphetamine, doses are almost always beyond the functional window, and as the dose increases, so does the chance of impulsive, dangerous behavior.",
          "Withdrawal brings a crash in which a person is desperately fatigued, depressed, and craves more stimulant to relieve these symptoms, which is thought to be why people who misuse stimulants often binge for weeks or months and have a hard time stopping. Even after several weeks of abstinence, many people who are addicted to stimulants report a state marked by an absence of pleasure or by anxiety. The protocol adds that heavy, long-term amphetamine use appears to cause long-term changes in the functional structure of the brain, with long-term problems with concentration and memory and, at times, psychotic symptoms.",
          "The NIDA treatment page notes that for stimulants and cannabis, no medications are currently available to assist in treatment, and treatment consists of behavioral therapies.",
        ] },
        { kind: 'concept', title: 'Cannabis and hallucinogens', text: [
          "For cannabis, the protocol describes a high with euphoria, sedation, lethargy, impaired short-term memory, difficulty with complex mental processes, impaired judgment, distorted sensory perceptions, impaired motor performance, and the sensation that time is passing slowly. Occasionally a person has anxiety, which may be severe, or social withdrawal. Withdrawal after heavy or prolonged use may bring fatigue, yawning, difficulty concentrating, and rebound periods of increased appetite and sleepiness following initial loss of appetite and insomnia.",
          "For hallucinogens, it describes visual distortions and hallucinations, a distortion of time, feelings of depersonalization, and sometimes panic, paranoia, and delusional states. It says hallucinogen hallucinations are usually more visual, compared with the more auditory hallucinations of schizophrenia. PCP causes dissociative and delusional symptoms and may lead to violent behavior and amnesia of the intoxication.",
        ] },
        { kind: 'concept', title: 'When symptoms might be caused by a substance', text: [
          "The protocol uses the term substance-induced mental disorder for symptoms caused by substances. Alcohol can mimic hypomania and depression. Stimulants can bring euphoria and, with heavy long-term use, at times psychotic symptoms. Cannabis can bring anxiety. Hallucinogens can bring panic and paranoia. Withdrawal from many of these can bring depression or anxiety.",
          "This is why assessment is the work of a trained professional, who looks at the course of symptoms over time. It is why you should never tell a person that their mental illness is just drugs, or that their drug use is just mental illness. Either can be true, both can be true, and neither is for you to decide. The protocol adds that it will not always be clear whether a person's symptoms are independent or caused by long-term substance use or withdrawal, and that withholding treatment until that is determined is inhumane and unethical. People should be engaged in treatment that addresses their co-occurring conditions.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Intoxication', plain: "The effects of a substance while it is active in the body." },
          { term: 'Withdrawal', plain: "Physical and emotional symptoms when a person who is dependent reduces or stops a substance." },
          { term: 'Protracted withdrawal', plain: "Symptoms that continue for weeks or months after the acute phase." },
          { term: 'Delirium', plain: "A state of fluctuating, confused thinking and awareness." },
          { term: 'Substance-induced mental disorder', plain: "Mental symptoms caused by a substance or its withdrawal." },
        ] },
        { kind: 'myths', items: [
          { myth: "All withdrawal is the same.", reality: "The protocol describes severe alcohol and sedative withdrawal with seizures, while the toolkit says opioid withdrawal is generally not life threatening." },
          { myth: "A person who is drinking heavily should just quit, today.", reality: "Stopping suddenly after heavy use can bring severe withdrawal. The person should talk to a health professional first." },
          { myth: "Hearing voices means schizophrenia.", reality: "Substances can cause hallucinations and delusions. A professional looks at the whole course." },
          { myth: "If symptoms continue after stopping, it was never the substance.", reality: "The protocol describes protracted withdrawal lasting weeks or months." },
        ] },
        { kind: 'case', title: 'The shaky morning', scenario: true, text: [
          "A woman tells a worker that she has decided to quit drinking today, cold turkey, because her daughter is coming to stay. She has been drinking every day for years. Her hands are shaking as she speaks. The worker does not say it is a bad idea, and she does not say it is a good one. She says, I am glad you want to make this change for your daughter. Because you have been drinking daily for years, stopping all at once can be dangerous. I would like you to talk to a doctor today about how to do this safely. Can I help you find a place that can see you, or would you rather call together? She asks whether she has had seizures or hallucinations before. She tells her to call 911 if she has a seizure or becomes confused. She stays with her while she calls.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q3',
          q: "According to SAMHSA's protocol, which withdrawal can include seizures in its more severe forms?",
          options: [
            "Alcohol and sedatives",
            "Only cannabis",
            "Only nicotine",
            "None of them",
          ],
          answer: 0,
          rationale: "The protocol says severe alcohol withdrawal often includes seizures, and that sedative withdrawal can include grand mal seizures in more severe cases.",
          distractors: "The other answers contradict the protocol's description.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q4',
          q: "A person who drinks heavily every day says they will quit tomorrow, cold turkey. What is the best response?",
          options: [
            "Great, I'll check on you next week",
            "Tell them it is a bad idea and to keep drinking",
            "Support their goal, explain that stopping suddenly can be dangerous, encourage them to see a health professional today, and say when to call 911",
            "Give them medication advice",
          ],
          answer: 2,
          rationale: "You can support the person's goal and still say that stopping suddenly after heavy daily use can be dangerous, connect them to medical care, and name emergency signs. You do not manage withdrawal or advise on medication.",
          distractors: "The first leaves them at risk, the second discourages change, and the fourth is outside your role.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Which substances do you see most in the community you serve? What do you know about their risks?",
          "What would you say to someone who tells you they are going to stop a substance alone?",
        ] },
        { kind: 'takeaways', items: [
          "Substances differ in intoxication, withdrawal, and risk. Alcohol and sedative withdrawal can be dangerous. Opioid withdrawal is miserable but generally not life threatening, and opioid overdose is an emergency.",
          "Substances can cause symptoms that look like mental illness. Sorting this out is for a professional.",
          "Support the goal, connect the person to medical care, and name emergency signs. Do not manage withdrawal.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 42, Substance Use Disorder Treatment for People With Co-Occurring Disorders (2020 update), Chapter 4, Exhibit 4.17, Substance-Induced Mental Disorder Symptoms (by Substance). Read the exhibit for alcohol, cannabis, hallucinogens, opioids, sedatives, and stimulants. The protocol is written for counselors.",
          "SAMHSA. Overdose Prevention and Response Toolkit (PEP23-03-00-001). The statement that opioid withdrawal symptoms are uncomfortable and generally not life threatening.",
          "National Institute on Drug Abuse. Drugs, Brains, and Behavior: The Science of Addiction, Treatment and Recovery. The statement about stimulants and cannabis.",
          "The guidance on what to say to a heavy drinker who wants to stop suddenly is practice guidance written for this course, built on the protocol's description of severe withdrawal. It is not medical advice.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhs-l3',
      title: 'Treatment and recovery',
      summary: 'What treatment includes, medications and therapies, why relapse is not failure, and what a worker can do.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Many people believe addiction treatment means a thirty-day program and then a cure. The research tells a different story, and knowing it will change how you talk with people about getting help, about setbacks, and about medication.",
        ] },
        { kind: 'concept', title: 'Addiction is treatable, and it is managed over time', text: [
          "NIDA's publication on the science of addiction says that addiction is a treatable disorder, that research has produced methods that help people stop using drugs and resume productive lives, and that, like treatment for other chronic diseases, treatment is a way of managing the condition and not a cure. It says treatment enables people to counteract addiction's disruptive effects on their brain and behavior and regain control of their lives. It reports that brain imaging shows the brain's remarkable ability to recover, at least in part, after a long period without drugs.",
        ] },
        { kind: 'concept', title: 'Relapse is not failure', text: [
          "NIDA answers the question directly. Does relapse mean treatment has failed. No. The chronic nature of addiction means that for some people relapse, a return to drug use after an attempt to stop, can be part of the process. It says relapse rates for drug use are similar to rates for other chronic medical illnesses, such as high blood pressure and asthma, and that when people stop following their medical treatment plan, they are likely to relapse. It says relapse serves as a sign that treatment should be resumed, modified, or replaced, and that the person needs to speak with their doctor.",
          "SAMHSA's protocol on motivation for change prefers the terms recurrence or return to substance use over relapse, which can carry negative connotations. It describes recurrence in the stages of change model as a normal, not pathological, event, because many people cycle through the stages several times before achieving stable change, and it is a learning opportunity and not a failure.",
          "Both sources add a serious caution. NIDA says that while relapse is a normal part of recovery, for some drugs it can be very dangerous or even deadly. If a person uses as much as they did before quitting, they can easily overdose because their bodies are no longer adapted to the previous level. The overdose toolkit makes the same point about periods of not using, such as after a hospital stay, jail, or detox. This is why a setback needs a caring response and a safety conversation, not a lecture.",
        ] },
        { kind: 'concept', title: 'Medications for substance use disorders', text: [
          "NIDA says that, for addiction to opioids, medication should be the first line of treatment, usually combined with some form of behavioral therapy or counseling. Medications are also available to treat addiction to alcohol and nicotine. For stimulants and cannabis, no medications are currently available and treatment consists of behavioral therapies.",
          "It lists common medications. For opioids: methadone, buprenorphine, extended-release naltrexone, and lofexidine, which is used for withdrawal. For nicotine: nicotine replacement therapies, bupropion, and varenicline. For alcohol: naltrexone, disulfiram, and acamprosate. It explains that medications act at different stages: to treat withdrawal, to help people stay in treatment, and to prevent relapse.",
          "It adds that medications are used to help people detoxify from drugs, but that detoxification is not the same as treatment and is not sufficient to help a person recover. Detoxification alone without subsequent treatment generally leads to a return to drug use.",
          "SAMHSA's overdose toolkit says buprenorphine is an evidence-based, first-line treatment for opioid use disorder that can be prescribed by any DEA-registered practitioner in accordance with state law, that methadone is also highly effective and available only in special opioid treatment programs, and that injectable naltrexone is an FDA-approved medication that does not have the same withdrawal-relieving properties.",
          "Language matters here too. NIDA's page on language says the idea that medications for opioid use disorder merely substitute one drug for another is a misconception, and it recommends calling them medication for opioid use disorder. A worker who says someone is just swapping one drug for another is repeating a myth that keeps people out of effective care.",
          "As always, you do not recommend, start, or stop any of them. You help people ask about them and find providers who can prescribe them.",
        ] },
        { kind: 'concept', title: 'Behavioral therapies and mutual support', text: [
          "NIDA describes behavioral therapies as helping people modify their attitudes and behaviors related to drug use, handle stress and triggers, and stay in treatment longer. It lists cognitive-behavioral therapy, which helps people recognize, avoid, and cope with the situations in which they are most likely to use. Contingency management, which uses positive reinforcement such as rewards for remaining drug-free or attending counseling. Motivational enhancement therapy, which builds on people's readiness to change. Family therapy. And twelve-step facilitation, a therapy that prepares people to engage in twelve-step mutual support programs.",
          "It states that twelve-step programs like Alcoholics Anonymous are not medical treatments, but provide social and complementary support to those treatments. SAMHSA's co-occurring disorders protocol describes the mutual-support movement as widely recognized as an important part of treatment, built on personal responsibility, self-management, and helping one another. It also notes that some mutual-support programs are not very accepting of members who take psychiatric medication, and that a provider plays a role in making sure a client knows of the support systems available and is motivated to use them. That is a task you can do. Help people find groups that welcome them as they are. There are groups for people with co-occurring conditions, and many types of recovery support.",
        ] },
        { kind: 'concept', title: 'Treatment must address the whole person', text: [
          "NIDA says stopping drug use is just one part of a long and complex recovery process, and that treatment must address the whole person. Counselors can tailor services to medical, mental, social, occupational, family, and legal needs. This links directly to the four dimensions of recovery you studied, health, home, purpose, and community, and to your own work on housing, benefits, transportation, and jobs. The co-occurring protocol makes the same case. It says that solving financial, housing, occupational, and other everyday problems is often an important first step toward engagement in continuing treatment.",
        ] },
        { kind: 'concept', title: 'Two federal messages about goals', text: [
          "Federal sources do not all speak with one voice about the goal of recovery. SAMHSA's working definition of recovery states that abstinence from alcohol, illicit drugs, and non-prescribed medications is the goal for those with addictions, and also that recovery is non-linear, may involve setbacks, and is pursued on many pathways. SAMHSA's overdose toolkit describes harm reduction strategies that support people in achieving self-determined goals related to their drug use, which may or may not include abstinence. SAMHSA's protocol on motivation for change moves away from abstinence-only perspectives toward client-centered approaches that enhance motivation and reduce risk, and it says the person's change goal might be to cut back or to abstain and that the goal can shift as they try it.",
          "These fit together in practice. A person's long-term goal and the steps along the way are not always the same. Someone who is not ready to stop still deserves to stay alive and connected, and someone who sets an abstinence goal deserves support for it. You follow your program's policy, you listen to what the person wants, and you do not argue.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Medication for opioid use disorder', plain: "Medications such as methadone, buprenorphine, and extended-release naltrexone used as part of treatment for opioid use disorder." },
          { term: 'Detoxification', plain: "Medically managed withdrawal. NIDA says it is not by itself sufficient treatment." },
          { term: 'Relapse or recurrence', plain: "A return to substance use after a period of not using. Common and not a sign of failure." },
          { term: 'Contingency management', plain: "A behavioral therapy that uses rewards to reinforce treatment goals." },
          { term: 'Mutual support', plain: "Groups in which people in recovery support each other, such as twelve-step programs." },
        ] },
        { kind: 'myths', items: [
          { myth: "Addiction can be cured with willpower or one stay in a program.", reality: "NIDA says treatment is a way of managing a chronic condition, and relapse rates are similar to those for other chronic illnesses." },
          { myth: "Medication for opioid use disorder just swaps one drug for another.", reality: "NIDA calls that a misconception, and the toolkit identifies buprenorphine and methadone as effective treatments." },
          { myth: "Detox is treatment.", reality: "NIDA says detoxification is not treatment and alone generally leads to a return to drug use." },
          { myth: "A person who returns to use has failed.", reality: "NIDA says relapse is a sign to resume, modify, or change treatment. It can also be dangerous, so a safety conversation matters." },
        ] },
        { kind: 'case', title: 'After a setback', scenario: true, text: [
          "A man who had been sober for four months tells a worker, quietly, that he used last weekend. He says he feels like he blew it. The worker does not say that it is not a big deal, and she does not scold. She says, thank you for telling me. Four months is real, and a hard weekend does not erase it. Let's talk about what happened, and about what would help. She asks whether he has told his counselor, and he has not. She offers to help him make the call. She also asks whether he has naloxone, because after a break the body can react more strongly, and she helps him get a kit from the program. She does not tell him what treatment he needs. She keeps him connected.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q5',
          q: "According to NIDA, what does relapse mean?",
          options: [
            "Treatment has failed and should not be tried again",
            "It can be part of the process of a chronic condition, similar to other chronic illnesses, and is a sign to resume, modify, or try another treatment",
            "The person did not want to recover",
            "The person must start over from nothing",
          ],
          answer: 1,
          rationale: "NIDA says relapse is common, similar in rate to other chronic illnesses, and serves as a sign that treatment should be resumed, modified, or replaced.",
          distractors: "The other answers repeat common myths.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q6',
          q: "A person says medication for opioid use disorder is just trading one drug for another. What is the best response?",
          options: [
            "Agree",
            "Tell them medications are for weak people",
            "Acknowledge the concern, share that NIDA calls the swapping idea a misconception and that buprenorphine and methadone are effective treatments, and encourage them to ask a prescriber",
            "Tell them which medication to take",
          ],
          answer: 2,
          rationale: "You can share accurate information from a reliable source and encourage them to ask a prescriber, without recommending a medication.",
          distractors: "Agreeing repeats a myth, shaming harms trust, and recommending a medication is outside your role.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "How have you heard people talk about someone who returned to use? What could you say instead?",
          "What groups or supports in your community welcome people who take medication?",
        ] },
        { kind: 'takeaways', items: [
          "Addiction is a chronic, treatable condition. Treatment manages it. Relapse is common and a sign to adjust, not to give up.",
          "Medications and behavioral therapies work, and medication is first-line for opioid use disorder. Detox alone is not treatment.",
          "After a break from use, overdose risk is higher. Respond to a setback with care and a safety conversation.",
        ] },
        ev([
          "National Institute on Drug Abuse. Drugs, Brains, and Behavior: The Science of Addiction, Treatment and Recovery. The statements on treatment, relapse, medications, behavioral therapies, and the whole person. Read in full.",
          "SAMHSA. Overdose Prevention and Response Toolkit (PEP23-03-00-001). The statements on buprenorphine, methadone, and injectable naltrexone, and on harm reduction goals.",
          "SAMHSA. Treatment Improvement Protocol 42 (2020 update). The mutual-support section and the statement that solving everyday problems is a first step toward engagement.",
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 1. The terms recurrence and return to substance use, and the shift away from abstinence-only perspectives.",
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The statement on abstinence as the goal for addictions.",
          "National Institute on Drug Abuse. Words Matter. The statement that the idea that medications substitute one drug for another is a misconception.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhs-l4',
      title: 'Harm reduction',
      summary: 'What harm reduction is, its principles, the strategies in the federal overdose toolkit, and how to work within your program\'s policy.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Harm reduction is one of the most misunderstood ideas in behavioral health. Some people hear it as giving up on recovery. Others hear it as the only practical way to keep people alive. The truth is more useful than either. Harm reduction is a set of practices that reduce the damage substance use can do, and it works alongside treatment and recovery, not against them.",
        ] },
        { kind: 'concept', title: 'The principles', text: [
          "The National Harm Reduction Coalition, a national organization, describes harm reduction as a set of practical strategies and ideas aimed at reducing negative consequences associated with drug use, and also as a movement for social justice built on a belief in and respect for the rights of people who use drugs. It says harm reduction incorporates a spectrum of strategies that includes safer use, managed use, abstinence, meeting people where they are, and addressing conditions of use along with the use itself. It says there is no universal definition or formula.",
          "It lists eight principles it considers central. Harm reduction accepts that licit and illicit drug use is part of our world and works to minimize its harmful effects rather than ignore or condemn them. It understands drug use as a complex phenomenon that includes a continuum of behaviors from severe use to total abstinence, and recognizes that some ways of using drugs are clearly safer than others. It establishes the quality of individual and community life and well-being, not necessarily the end of all drug use, as the criteria for success. It calls for the non-judgmental, non-coercive provision of services. It ensures that people who use drugs have a real voice in creating programs and policies. It affirms people who use drugs as the primary agents of reducing the harms of their use. It recognizes that poverty, class, racism, social isolation, past trauma, sex-based discrimination, and other inequalities affect vulnerability to and capacity for dealing with drug-related harm. And it does not minimize or ignore the real and tragic harm and danger that can be associated with illicit drug use.",
          "Notice the last principle. Harm reduction is not saying that drug use is harmless. It is saying that people's lives matter whether or not they have stopped.",
        ] },
        { kind: 'concept', title: 'How the federal overdose toolkit describes it', text: [
          "SAMHSA's Overdose Prevention and Response Toolkit lists harm reduction strategies for people at risk of overdose, saying that such strategies can reduce the risk of overdose and support people in achieving self-determined goals related to their drug use, which may or may not include abstinence. It pairs risk factors with strategies.",
          "For someone who has had a recent period of not taking opioids, such as after an emergency department stay, jail, or detox, or who is starting to use again, the toolkit lists: never use drugs alone, and tell a friend or call 988 to talk about overdose risk with a professional or peer counselor. Start with the lowest possible amount. Use slowly and watch the effects. Test unregulated drugs for fentanyl. And note that stopping methadone or buprenorphine on release and returning to street drugs raises the risk.",
          "For anyone using any kind of drug, it lists: start low and go slow, do not use alone and use with a trusted person who is alert and can respond, stagger use in a group, avoid using opioids with alcohol or other depressant medications such as benzodiazepines or tranquilizers because the combination greatly increases risk, always carry an opioid overdose reversal medication such as naloxone and know the signs of overdose, use test strips or other drug checking to detect fentanyl and other drugs, and listen to your body by resting, eating, and hydrating.",
          "The toolkit also lists, for people changing their method of use, risks of crushing or altering opioids, and notes that sharing prescribed opioids puts others at risk. It states that drugs sold on the street are unregulated, so potency and contents are unknown, and that fentanyl is often found in counterfeit pills made to look like prescription drugs and may be added to other drugs such as methamphetamine or cocaine, so people may be exposed unknowingly. It reports that xylazine, a sedative approved for animals but not for humans, is increasingly added to the unregulated drug supply.",
        ] },
        { kind: 'concept', title: 'Where harm reduction meets recovery', text: [
          "You read in the last lesson that federal sources are not identical on goals. The distinction that helps a worker is between the long-term hope and the immediate safety. A person can hope to stop and be told, until then, how to stay alive. A person who is not ready to stop can still be offered naloxone, test strips, and a way to reach you. In the language of SAMHSA's protocol on motivation for change, meeting people where they are is not giving up. It is how you stay in the conversation.",
          "The Motivational Interviewing course gave you the skills. Keep asking what the person wants. Reflect their reasons for change. Do not argue. When they are ready, help with the next step. Until then, keep them connected and safe. Peers in recovery often do this best, because they know how it feels.",
        ] },
        { kind: 'concept', title: 'Your program\'s policy', text: [
          "Harm reduction practices differ across programs, funders, and laws. Some programs distribute naloxone and test strips. Some do not distribute supplies but do talk about safety. Some have rules about what workers may say or do. Before you hand anything to anyone or discuss using practices, learn your program's policy. If a person asks for something your program does not provide, tell them honestly and point them to where they can get it, as your policy allows.",
          "You should know what the law and your program say about supplies, about discussing illegal activity, and about what you must report. This is a topic for your supervisor. The Professional Conduct course covers scope and reporting.",
        ] },
        { kind: 'concept', title: 'What harm reduction is not', text: [
          "It is not encouraging drug use. It is not a refusal to offer treatment. It is not an exemption from your duty to respond to a crisis. It is not a rule that a worker should keep quiet about danger. If you are worried about a person, you can say so, kindly.",
          "The Coalition says harm reduction demands that interventions reflect specific individual and community needs. That fits the recovery principle that recovery occurs via many pathways.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Harm reduction', plain: "Practical strategies to reduce the negative consequences of drug use, including safer use, managed use, and abstinence, meeting people where they are." },
          { term: 'Drug checking', plain: "Using test strips or other equipment to detect substances such as fentanyl in a drug." },
          { term: 'Never use alone', plain: "A strategy of using only with someone who can respond to an overdose, or letting someone know to check in." },
          { term: 'Opioid overdose reversal medication', plain: "A medication such as naloxone or nalmefene that reverses the effects of an opioid overdose." },
          { term: 'Unregulated drug supply', plain: "Drugs sold without quality control, so their potency and contents are unknown." },
        ] },
        { kind: 'myths', items: [
          { myth: "Harm reduction means giving up on recovery.", reality: "The Coalition describes a spectrum that includes abstinence, and the toolkit says strategies support self-determined goals that may or may not include abstinence." },
          { myth: "Harm reduction says drugs are harmless.", reality: "The Coalition's last principle says it does not minimize the real and tragic harm that can be associated with illicit drug use." },
          { myth: "If I talk about safer use, I am encouraging use.", reality: "The toolkit's strategies aim to reduce the risk of overdose. Follow your program's policy about what workers may say." },
          { myth: "Street drugs are as safe as a pharmacy.", reality: "The toolkit says street drugs are unregulated, potency and contents are unknown, and fentanyl is often found in counterfeit pills." },
        ] },
        { kind: 'case', title: 'Staying in the conversation', scenario: true, text: [
          "A woman tells a worker that she has no plans to stop using, but she is scared after a friend died. The worker does not push treatment. She says, you are not ready to stop, and you want to be safer. She asks whether she has naloxone and whether she uses alone. The woman says she mostly uses alone. The worker, following her program's policy, explains that never using alone is one of the strategies in the federal toolkit, and mentions that you can call 988 to talk about overdose risk. She gives her the program's naloxone kit and tells her where to get fentanyl test strips. She ends by asking what would make her feel more ready to talk about treatment, and says she will check in on Thursday. The woman nods.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q7',
          q: "According to the National Harm Reduction Coalition, which statement describes harm reduction?",
          options: [
            "A way to encourage drug use",
            "A set of practical strategies to reduce negative consequences of drug use, which includes safer use, managed use, abstinence, and meeting people where they are",
            "A requirement that all people stop using immediately",
            "A medical treatment",
          ],
          answer: 1,
          rationale: "The Coalition describes a spectrum of strategies that includes safer use, managed use, abstinence, and meeting people where they are.",
          distractors: "The other answers misdescribe harm reduction.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q8',
          q: "Which of these is a strategy in SAMHSA's Overdose Prevention and Response Toolkit for reducing overdose risk?",
          options: [
            "Use alone so no one is bothered",
            "Mix opioids with alcohol to feel less",
            "Do not use alone, start low and go slow, avoid combining opioids with alcohol or sedatives, carry naloxone, and test for fentanyl",
            "Use more after a break to catch up",
          ],
          answer: 2,
          rationale: "The toolkit lists these as strategies, and warns that opioids combined with alcohol or other depressants greatly increase risk, and that risk is higher after a period of not using.",
          distractors: "The other answers describe behaviors that raise the risk.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What is your program's policy on supplies and on talking about safer use? What do you still need to ask?",
          "How would you explain the difference between harm reduction and giving up to a worried family member?",
        ] },
        { kind: 'takeaways', items: [
          "Harm reduction is a spectrum of strategies that includes abstinence, and it keeps people alive and connected until they are ready to change.",
          "The federal toolkit lists strategies including never using alone, starting low, avoiding mixing, carrying naloxone, and drug checking.",
          "Know your program's policy, stay in the conversation, and keep asking what the person wants.",
        ] },
        ev([
          "National Harm Reduction Coalition. Principles of Harm Reduction (page read November 10, 2026). The description, the spectrum of strategies, and the eight principles.",
          "SAMHSA. Overdose Prevention and Response Toolkit (PEP23-03-00-001). The risk factors and harm reduction strategies, and the statements on unregulated drugs, fentanyl, and xylazine. The toolkit text was read from a copy hosted by the National Center on Advancing Alcohol Research.",
          "SAMHSA. Treatment Improvement Protocol 35 (2019 update), Chapter 3. The shift away from abstinence-only perspectives and the point that the change goal may be to cut back or abstain.",
          "SAMHSA's own harm reduction pages could not be reached on November 10, 2026, and were not used.",
          "The guidance on working within your program's policy and the phrase meeting people where they are used in the case are practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhs-l5',
      title: 'Recognizing and responding to an overdose',
      summary: 'The signs, the steps, naloxone, breathing support, Good Samaritan laws, and what happens afterward.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "An overdose can happen anywhere and to anyone, including to people who do not use drugs but take a counterfeit pill, or to a person who has been sober and uses once. It can be reversed, but only if someone notices and acts within minutes. This lesson is background and awareness. It does not replace hands-on overdose response training, which your program provides.",
        ] },
        { kind: 'concept', title: 'Why it matters', text: [
          "SAMHSA's toolkit states that overdose deaths remain at historically high levels in the United States, and that the Centers for Disease Control and Prevention estimated that over 108,000 people died from overdose in 2022. Most of those deaths involved opioids. Illicitly manufactured fentanyl has been a significant driver, and other drugs in the illicit supply have become increasingly lethal and unpredictable. Overdose deaths involving illicit stimulants such as cocaine and methamphetamine, often in combination with opioids, have also risen. The toolkit notes that xylazine is increasingly added to the illicit drug supply.",
          "The toolkit says education and response tools have the greatest impact when focused on people who use drugs, because they are most likely to witness and respond to an overdose, and that anyone could witness one, on the street, at work, at home, in a clinic, or in a school. That is why the toolkit is written for everyone, and why you should know the basics.",
        ] },
        { kind: 'concept', title: 'Signs of an opioid overdose', text: [
          "The toolkit lists the signs. Unconsciousness or inability to awaken. Slow or shallow breathing or difficulty breathing, such as choking sounds or a gurgling or snoring noise from a person who cannot be awakened. Fingernails or lips turning blue or purple. For lighter-skinned people the skin tone may turn bluish purple, and for darker-skinned people it may turn pale, gray, or ashen. And pinpoint pupils or pupils that do not react to light.",
          "If an overdose is suspected, the toolkit says to try to wake the person by calling their name, and if that does not work, to rub your knuckles on their upper lip or the center of the chest. If the person does not respond, or you are not sure what to do, call 911.",
        ] },
        { kind: 'concept', title: 'The steps', text: [
          "The toolkit says an overdose needs immediate medical attention. When the call connects, all you have to say is that someone is unresponsive and not breathing, and give a specific address or description of the location. After calling 911, follow the dispatcher's instructions.",
          "Step 1: give an opioid overdose reversal medication such as naloxone as quickly as possible, then call 911. The toolkit says naloxone and nalmefene do not cause harm if given to someone who is not experiencing an opioid overdose. If the person does not start breathing or respond after 2 to 3 minutes, give a second dose, and continue every 2 to 3 minutes until breathing starts.",
          "Step 2: support the person's breathing. The toolkit says that when a person overdoses they stop breathing, which can quickly damage the brain and other organs, and that rescue breaths save lives. It says the goal of overdose reversal is to restore breathing, and that breathing is more important than waking up. If you do not have training in rescue breathing and chest compressions, follow the instructions of the 911 operator. When breathing returns, gently place the person in the recovery position, on their side with the top leg bent.",
          "Step 3: wait for emergency medical services to arrive. The toolkit says naloxone wears off after 30 to 90 minutes, and overdose symptoms may return, so the person should be encouraged to receive treatment from EMS and to go to an emergency department.",
          "The toolkit's summary of the steps is check for a response, give naloxone or another reversal medication, call 911 and support breathing with rescue breaths or the recovery position, and wait for EMS.",
        ] },
        { kind: 'concept', title: 'Naloxone', text: [
          "The toolkit explains that opioid overdose reversal medications are life-saving medications that reverse the effects of an acute opioid overdose and restore breathing. The best known is naloxone, which is FDA-approved and has been used for decades by emergency medical services and lay people. It can be given as a nasal spray or by injection into a muscle. Another approved medication, nalmefene, stays in the body longer.",
          "It answers questions. Is any naloxone better than none. Yes, give any available. Check expiration dates and replace it at regular intervals, but research indicates that naloxone past its expiration date does not cause harm. Can it treat any overdose. It reverses opioid overdose, including overdose caused by fentanyl, and the toolkit says to use it even if you are not sure what drugs someone took. It may be less effective if the person used several drugs, especially sedating ones such as alcohol or benzodiazepines, and xylazine may make reversal more challenging. The toolkit notes the 4 mg nasal spray is available over the counter in certain retail outlets, and says to ask a doctor, pharmacist, local health department, or a harm reduction program about getting naloxone.",
        ] },
        { kind: 'concept', title: 'Stigma and who gets naloxone', text: [
          "The toolkit says there is no type of person who experiences opioid use disorder or overdose, and that research has shown women, older people, and those without obvious signs of opioid use disorder are undertreated with naloxone and, as a result, have a higher death rate. Its advice is to use naloxone any time someone shows symptoms of overdose and not to let stigma stop you from saving a life.",
        ] },
        { kind: 'concept', title: 'Legal protection and afterward', text: [
          "The toolkit tells readers to know their rights and to learn their state's Good Samaritan laws, which provide limited immunity from certain civil or criminal consequences of drug use, or of helping in the event of an overdose. Limited means the protection has boundaries. Learn what your state's law covers. Your program can tell you.",
          "After reversal, the toolkit says a person who has developed physical dependence on opioids may start to breathe again but may also develop withdrawal symptoms, which are uncomfortable but generally not life threatening. It says to offer the person options for treatment, peer support, and harm reduction resources, and it names buprenorphine as an evidence-based first-line treatment that can relieve withdrawal symptoms. If the person receives prescription opioids for pain, it says to help them contact the prescriber.",
        ] },
        { kind: 'concept', title: 'Your role', text: [
          "Know your program's policy on carrying naloxone and responding. Complete the hands-on training your program offers. Know where naloxone is kept and who is trained. In an emergency, call 911 first or as directed by your training, and follow the dispatcher. Afterward, tell your supervisor, and take care of yourself. Witnessing an overdose is traumatic, and the Professional Conduct course covers support for you.",
          "Overdose can also come from stimulants and other drugs that naloxone does not reverse. If you are not sure, call 911.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Overdose', plain: "Using enough of a drug to cause life-threatening symptoms or death." },
          { term: 'Naloxone', plain: "An FDA-approved medication that reverses the effects of an opioid overdose and restores breathing." },
          { term: 'Rescue breathing', plain: "Giving breaths to a person who has stopped breathing." },
          { term: 'Recovery position', plain: "Lying on the side with the top leg bent, to keep the airway open." },
          { term: 'Good Samaritan law', plain: "A law that gives limited legal protection to people who seek help in an overdose." },
        ] },
        { kind: 'myths', items: [
          { myth: "Giving naloxone to someone who is not overdosing will hurt them.", reality: "The toolkit says naloxone and nalmefene do not cause harm if given to a person who is not experiencing an opioid overdose." },
          { myth: "After naloxone, the person is fine.", reality: "Naloxone wears off in 30 to 90 minutes and symptoms may return. The person needs emergency care." },
          { myth: "You can tell who overdoses by how they look.", reality: "The toolkit says there is no type, and that women, older people, and those without obvious signs are undertreated with naloxone." },
          { myth: "Waking the person is the goal.", reality: "The toolkit says the goal is to restore breathing, and breathing is more important than waking up." },
        ] },
        { kind: 'case', title: 'On the sidewalk', scenario: true, text: [
          "A worker at an outreach table sees a man slumped against a wall, who does not respond to his name. His lips look blue and he makes a snoring sound. She calls his name and rubs her knuckles on his chest. Nothing. She tells a coworker to call 911 and say that someone is unresponsive and not breathing, and to give the address. She gives naloxone from the program's kit, as she was trained. After two minutes there is no change and she gives a second dose, while her coworker follows the dispatcher's instructions. The man begins to breathe and she places him on his side. She stays until the paramedics arrive, tells them what she gave and when, and encourages him to go with them. Afterward she tells her supervisor and takes a break.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q9',
          q: "According to SAMHSA's toolkit, which are signs of an opioid overdose?",
          options: [
            "Talking quickly and sweating",
            "Unconsciousness or inability to awaken, slow or shallow breathing, blue or purple lips or nails, and pinpoint pupils",
            "Loud laughter",
            "Red cheeks and coughing",
          ],
          answer: 1,
          rationale: "The toolkit lists unconsciousness, slow or shallow breathing, blue or purple lips and nails (or pale or ashen skin in darker-skinned people), and pinpoint pupils.",
          distractors: "The other answers are not listed as signs of overdose.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q10',
          q: "A person has overdosed and you have given naloxone. They start breathing. What should happen next?",
          options: [
            "Leave, since they are fine",
            "Place them in the recovery position, stay until EMS arrives, and encourage emergency care because naloxone can wear off in 30 to 90 minutes",
            "Give them a drink",
            "Let them sleep it off",
          ],
          answer: 1,
          rationale: "The toolkit says naloxone wears off after 30 to 90 minutes, overdose symptoms may return, and the person should get emergency care. Place them in the recovery position once breathing returns.",
          distractors: "The other answers leave the person at risk.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q11',
          q: "According to the toolkit, what is the goal of overdose reversal?",
          options: [
            "To wake the person up as fast as possible",
            "To restore breathing, since breathing is more important than waking up",
            "To get the person to admit what they took",
            "To avoid calling 911",
          ],
          answer: 1,
          rationale: "The toolkit says the goal of overdose reversal is to restore breathing, and breathing is more important than waking up. It also says to call 911.",
          distractors: "The other answers misstate the goal or contradict the instruction to call 911.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Do you know where naloxone is kept in your program, and who is trained? If not, who can tell you?",
          "How would you take care of yourself after witnessing an overdose?",
        ] },
        { kind: 'takeaways', items: [
          "Know the signs: unresponsive, slow or shallow breathing, blue lips or nails, pinpoint pupils.",
          "Give naloxone, call 911, support breathing, and wait for EMS. Repeat naloxone every 2 to 3 minutes if there is no response.",
          "Naloxone wears off. The person needs emergency care. Know your state's Good Samaritan law and your program's policy.",
        ] },
        ev([
          "SAMHSA. Overdose Prevention and Response Toolkit (PEP23-03-00-001, 2023). The statistics, the signs of overdose, the response steps, the naloxone question and answer, the statements on stigma and Good Samaritan laws, and post-overdose considerations. Read in the sections quoted. The toolkit states that it complements, and does not replace, training.",
          "The role guidance is practice guidance written for this course. It does not replace hands-on training or your program's procedures.",
          "In an emergency, call 911. If you or someone you know needs support now, call or text 988.",
        ]),
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhs-l6',
      title: 'When mental health and substance use go together',
      summary: 'Why co-occurring conditions are common, what integrated care means, and how a worker can help.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "If you work with people who have a substance use problem, many of them will have a mental health condition too. If you work with people who have a mental health condition, many will also use substances in ways that cause problems. Services have often split these two apart, with different programs, different waiting lists, and different rules, and people have fallen between them. Knowing that they often go together is the first step to helping a person get care for both.",
        ] },
        { kind: 'concept', title: 'How common', text: [
          "SAMHSA's protocol on co-occurring disorders states that people with substance use disorders are more likely than those without to have co-occurring mental disorders, and that addiction counselors encounter clients with co-occurring disorders as a rule, not an exception. It names mental disorders likely to co-occur with addiction: depressive disorders, bipolar I disorder, post-traumatic stress disorder, personality disorders, anxiety disorders, schizophrenia and other psychotic disorders, ADHD, and eating and feeding disorders.",
          "The protocol's chapter on the topic says co-occurring disorders are burdensome conditions with significant physical, emotional, functional, social, and economic consequences for the people who live with them and their loved ones, and that they are complex and bidirectional and can wax and wane over time. In earlier lessons you saw the NIMH statement that people with PTSD often have co-occurring conditions such as depression, substance use, or anxiety. The pattern runs in both directions.",
          "The protocol says that, among the reasons for gaps in care, are a lack of awareness of and training in co-occurring disorders, and workforce factors such as labor shortages and burnout. It describes a domino effect. A lack of screening means a lack of assessment, which means a lack of diagnosis, which means a lack of treatment, which reduces a person's chance of long-term recovery from either or both disorders. That is a way of saying that noticing and asking matters.",
        ] },
        { kind: 'concept', title: 'Why they go together', text: [
          "The protocol does not give one cause. Substances can cause mental symptoms, and mental illness can lead people to use substances to cope. Shared risk factors, such as trauma, play a part. The protocol notes that people with co-occurring disorders are at elevated risk for self-harm, especially if they have a history of trauma, and that safety should be a priority. Earlier lessons showed that substance use can mimic or worsen psychiatric symptoms, and that psychiatric symptoms can lead to substance use.",
          "For you, it is enough to know that the two are tangled, that neither should be dismissed as the real problem, and that treating only one often leaves the other.",
        ] },
        { kind: 'concept', title: 'Integrated care', text: [
          "The protocol describes integrated treatment as a unified approach to a person's addiction, mental disorder, and related needs, and calls it the preferred model. It lists SAMHSA's practice principles. Mental illness and substance use disorders are both treated at the same time. Providers receive training in both. A stage-wise approach is tailored to the person's readiness for treatment. Motivational techniques are built into care, particularly at the stage of engagement. Addiction counseling helps develop healthier thoughts and behaviors. Multiple treatment formats are offered, including individual, group, family, and peer support. And medication is discussed in multidisciplinary teams, offered as appropriate, and monitored for safety, adherence, and response.",
          "It states that essential services for people with co-occurring disorders are person-centered, trauma-informed, culturally responsive, recovery-oriented, comprehensive, and continuously offered across all levels of care and the course of the disease. It states that there is no wrong door by which people arrive at treatment, and programs should have a range of interventions to help all clients. In practice that means a person who comes to a mental health clinic with a drinking problem, or an addiction program with depression, should not be sent away. Both should be addressed.",
          "In the protocol's practice principles, motivational interviewing is integrated into care at the engagement stage. That is the course you took.",
        ] },
        { kind: 'concept', title: 'Address real-life problems early', text: [
          "The protocol notes growing recognition that co-occurring disorders arise in a context of personal and social problems, and says approaches address specific life problems early in treatment, including case management to surmount bureaucratic hurdles or handle legal and family matters, housing-related support, and vocational services. It says that, for people in recovery from mental disorders or substance use disorders, work is valuable not only for economic reasons but because it can enhance self-efficacy, improve self-identity, offer a sense of belonging, and build relationships. It reports that a review of the effects of employment interventions for people with substance use disorders found that employment was associated with reduced substance use and more stable housing.",
          "It also says solving financial, housing, occupational, and other everyday problems is often an important first step toward engagement in continuing treatment. This is the work you are trained to do. A person who is homeless is not going to be able to focus on a counseling schedule. Helping them find housing is not a distraction from treatment. It is part of treatment.",
        ] },
        { kind: 'concept', title: 'Plan for impairments', text: [
          "The protocol says people with co-occurring disorders often have cognitive and other functional impairments that affect their ability to comprehend information or complete tasks, and that the way interventions are presented must fit. It says impairments often call for short, highly structured sessions focused on practical problems, with gradual pacing, visual aids, and repetition. Use this. Give instructions in small steps, write things down, repeat them, and check understanding with teach-back, as you learned in the education course.",
        ] },
        { kind: 'concept', title: 'Support systems', text: [
          "The protocol says support systems, including mutual support, family, peer providers, and the faith community, can play an invaluable role in recovery, particularly for people who have not had a consistently supportive environment for decades. It notes that in some cultures stigma about substance use or mental disorders is so great that a client and the entire family may be ostracized, and that some mutual-support programs are not very accepting of members who take psychiatric medication. It says a provider plays a role in making sure the client is aware of available support systems and motivated to use them.",
          "As a worker you can do that. Know which groups welcome people with co-occurring conditions, including groups designed for them, and which welcome people on medication. Offer a choice. Go with someone to their first meeting if they want.",
        ] },
        { kind: 'concept', title: 'Safety', text: [
          "The protocol says client safety should be a priority and providers need training to detect and respond to suicidal thoughts and behaviors in people with co-occurring disorders. If a person talks about wanting to die or hurting themselves or others, follow your program's procedure the same day and call or text 988, or call 911 in an emergency. The next course covers suicide prevention and safety planning in detail.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Co-occurring disorders', plain: "A substance use disorder and a mental disorder in the same person." },
          { term: 'Integrated treatment', plain: "Treating mental and substance use disorders together as one unified approach." },
          { term: 'Stage-wise treatment', plain: "Matching treatment to the person's readiness, such as engagement, active treatment, or relapse prevention." },
          { term: 'No wrong door', plain: "A person should be able to get help for both conditions wherever they arrive." },
          { term: 'Bidirectional', plain: "Each condition can influence the other." },
        ] },
        { kind: 'myths', items: [
          { myth: "A person has to get sober before getting mental health care.", reality: "The protocol says both are treated at the same time and calls integrated treatment the preferred model." },
          { myth: "A person with a mental illness who uses substances is just self-medicating, so only the mental illness matters.", reality: "The protocol says the conditions are complex and bidirectional, and both need attention." },
          { myth: "Co-occurring disorders are unusual.", reality: "The protocol says counselors encounter them as a rule, not an exception." },
          { myth: "Any recovery group is fine for everyone.", reality: "The protocol notes some groups are not very accepting of people who take psychiatric medication. Help people find a welcoming group." },
        ] },
        { kind: 'case', title: 'No wrong door', scenario: true, text: [
          "A man goes to a mental health clinic for depression and mentions that he drinks to sleep. The intake worker tells him to come back when he is sober. He does not come back. A worker later meets him at a food distribution and hears the story. She does not blame the clinic or the man. She asks what he wants. He says he wants to feel better and would like to drink less. She helps him find a program that treats both, and she goes with him to the first visit. She asks the program how to share what she learned about the earlier clinic visit, without naming him. The new program sees both conditions as one problem. Housing and a job are on the first plan, because he sleeps in a car.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q12',
          q: "According to SAMHSA's protocol, what is the preferred model of treatment for co-occurring disorders?",
          options: [
            "Treat the substance use first, and the mental health condition later",
            "Treat the mental health condition first, and the substance use later",
            "A unified, integrated approach that treats both at the same time",
            "Refer the person to two separate programs without coordination",
          ],
          answer: 2,
          rationale: "The protocol describes integrated treatment, a unified approach that treats mental illness and substance use disorders concurrently, as the preferred model.",
          distractors: "The other answers describe sequential or uncoordinated care, which the protocol identifies as a source of gaps.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhs-q13',
          q: "A person with depression and heavy drinking comes to your program. What is the best approach?",
          options: [
            "Tell them to come back when sober",
            "Tell them it is just depression",
            "Welcome them, ask what they want, help them find care that addresses both, and help with housing and other practical needs",
            "Tell them to stop drinking immediately",
          ],
          answer: 2,
          rationale: "No wrong door means a person should be helped wherever they arrive. Both conditions need attention, and solving everyday problems is often a first step toward engagement. Do not advise sudden cessation.",
          distractors: "The other answers turn the person away, dismiss one condition, or give advice that may be dangerous.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Have you seen someone sent away because they had two conditions? What would have helped?",
          "Which practical need, such as housing, work, or transportation, is most likely to keep people from engaging in the community you serve?",
        ] },
        { kind: 'takeaways', items: [
          "Co-occurring disorders are common. Both deserve attention, and integrated care is the preferred model.",
          "There is no wrong door. Help people wherever they arrive, and solve practical problems early.",
          "Simplify, repeat, and check understanding. Help people find welcoming support groups. Keep safety a priority.",
        ] },
        ev([
          "SAMHSA. Treatment Improvement Protocol 42, Substance Use Disorder Treatment for People With Co-Occurring Disorders (2020 update). The overall key messages, Chapter 1 key messages, Chapter 2 on guiding principles, the practice principles of integrated treatment (Exhibit 2.4), early attention to real-life problems, planning for impairments, and support systems. The protocol is written for counselors and is a very large document, of which these parts were read.",
          "National Institute of Mental Health. Post-Traumatic Stress Disorder. The statement on co-occurring conditions.",
          "The role guidance is practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-mhs-practice',
    title: 'Your substance use and co-occurring conditions practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: respectful words for talking about substance use, your plan for responding to an overdose, your safety conversation, and your plan for helping someone with two conditions.',
    fields: [
      { id: 'words', label: 'Your respectful words', help: 'Write five phrases you will use and five you will stop using when you talk about people who use substances, in conversation and in notes. Add one sentence you will say to a coworker who uses a stigmatizing word.', multiline: true },
      { id: 'overdose', label: 'Your overdose plan', help: 'Write the steps you would follow if you found someone unresponsive, in your own words, including who you would call, where naloxone is kept in your program, and what you would do afterward for the person and for yourself. Note what you still need to ask your supervisor.', multiline: true },
      { id: 'safety', label: 'A safety conversation', help: 'Write how you would talk with someone who is not ready to stop using, in a way that respects them and covers safety. Include what you would offer and what your program allows. Add how you would respond to someone who wants to stop suddenly after heavy daily drinking.', multiline: true },
      { id: 'cod', label: 'Two conditions, one plan', help: 'Imagine a person with depression and a substance use problem. Write what you would ask, what practical problems you would help with first, what groups or services you would look for, and how you would keep the person from falling between programs.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'SAMHSA: Overdose Prevention and Response Toolkit (PEP23-03-00-001)', use: 'Signs of overdose, response steps, naloxone, and harm reduction strategies.', url: 'https://www.samhsa.gov/resource/recovery/overdose-prevention-response-toolkit' },
    { name: 'SAMHSA: Treatment Improvement Protocol 42, Substance Use Disorder Treatment for People With Co-Occurring Disorders', use: 'Guidance on screening, assessment, integrated treatment, and special populations.', url: 'https://store.samhsa.gov/product/tip-42-substance-use-treatment-persons-co-occurring-disorders/pep20-02-01-004' },
    { name: 'SAMHSA: Treatment Improvement Protocol 35, Enhancing Motivation for Change in Substance Use Disorder Treatment', use: 'Motivational interviewing and the stages of change in substance use treatment.', url: 'https://store.samhsa.gov/sites/default/files/tip-35-pep19-02-01-003.pdf' },
    { name: 'National Institute on Drug Abuse: Drugs, Brains, and Behavior, Treatment and Recovery', use: 'Treatment, medications, behavioral therapies, and relapse.', url: 'https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/treatment-recovery' },
    { name: 'National Institute on Drug Abuse: Words Matter, Terms to Use and Avoid When Talking About Addiction', use: 'Person-first language and a table of terms.', url: 'https://nida.nih.gov/nidamed-medical-health-professionals/health-professions-education/words-matter-terms-to-use-avoid-when-talking-about-addiction' },
    { name: 'National Harm Reduction Coalition: Principles of Harm Reduction', use: 'The eight principles of harm reduction.', url: 'https://harmreduction.org/about-us/principles-of-harm-reduction/' },
    { name: 'SAMHSA: SAMHSA\'s Working Definition of Recovery, 10 Guiding Principles of Recovery', use: 'The federal definition of recovery and the statement on abstinence for addictions.', url: 'https://store.samhsa.gov/sites/default/files/d7/priv/pep12-recdef.pdf' },
  ],
};
