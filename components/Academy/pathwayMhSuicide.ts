// Community Mental Health Worker Pathway, Mental Health Core M4: Suicide Prevention, Safety, and Crisis
// Planning.
//
// A live practice course (id chw_mh_suicide_prevention, 5 hours). Three lessons are read before the
// sessions. Three scheduled sessions are practiced with a facilitator and a group. The stated 300
// minutes equal the lessons, the sessions, and the practice file. It builds on, and does not repeat,
// the five steps taught in the Intervention course (ask, keep them safe, be there, help them connect,
// follow up).
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources are
// the National Institute of Mental Health's suicide FAQ, the 988 Suicide and Crisis Lifeline's pages on
// what to expect, the Stanley-Brown Safety Planning Intervention site maintained by its developers, the
// Harvard Means Matter Campaign, the reportingonsuicide.org page on safe messaging (introduction only),
// the National Institute of Mental Health pages on depression and medications, SAMHSA's protocol on
// co-occurring disorders, and SAMHSA's core competencies for peer workers. The SAFE-T pocket card, the
// Suicide Prevention Resource Center's safety planning pages, and the NIMH warning signs brochure could
// not be reached, so the course does not rely on them. The 988 pages carry text about federal policy
// unrelated to what the service does, and that text was ignored.
//
// This course is not a suicide risk assessment course and does not teach a worker to rate risk. It
// teaches a worker to ask, to stay, to connect, to follow the program's procedure, and to take part
// in safety planning only as the program directs. Every practice scene is invented. Participants are
// told not to call 988 or 911 during practice.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_SUICIDE_PREVENTION: Course = {
  id: 'chw_mh_suicide_prevention',
  num: 25,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'live',
  title: 'Suicide Prevention, Safety, and Crisis Planning',
  promise:
    "Recognize risk factors and warning signs, ask about suicide directly and stay with the person, connect them to the 988 Lifeline, a clinician, or emergency help, understand how a safety plan and lethal means safety work, and look after yourself afterward.",
  about: [
    "This course is about the conversations that matter most. It covers who is at risk and what the warning signs are, how to ask someone directly about suicide, what to do next, what the 988 Lifeline does when someone contacts it, how safety planning and lethal means safety work, and how to follow up and take care of yourself.",
    "It rests on the National Institute of Mental Health's guidance on suicide, the 988 Lifeline's description of its service, the Stanley-Brown Safety Planning Intervention, the Harvard Means Matter Campaign, SAMHSA's protocol on co-occurring disorders, and SAMHSA's competencies for peer workers. It builds on the Intervention course, which taught five steps for helping a person in crisis.",
    "It is Mental Health Core course 4 of HMC's community health worker pathway. It is a live practice course. You read three lessons, then practice in three scheduled sessions, then complete a practice file. This course does not make you a clinician and does not ask you to judge how likely someone is to attempt suicide. Your job is to ask, stay, connect, and follow your program's procedure.",
  ],
  objectives: [
    "Describe the main risk factors and warning signs for suicide, and explain why most people with risk factors do not attempt suicide.",
    "Ask a person directly about suicide, listen without judgment, and respond without promising secrecy or leaving them alone.",
    "Describe what happens when a person calls, texts, or chats with the 988 Lifeline, and help a person connect.",
    "Describe the six steps of the Stanley-Brown safety plan and your role in safety planning.",
    "Explain why reducing access to lethal means saves lives, and how to raise it respectfully.",
    "Follow up after a crisis, document as your program requires, and look after yourself.",
  ],
  minutes: 300,
  prerequisites: "Intervention: Early Support, Crisis Response, and Recovery, and Trauma-Informed Practice. Motivational Interviewing and Understanding Mental Health Conditions are helpful.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management. This material may be hard for people who have lost someone to suicide or who have had thoughts of suicide themselves. Take breaks, step out if you need to, and tell your facilitator.",
  freshness:
    "The service details in this course were read on the 988 Lifeline's pages on November 10, 2026, and options and numbers can change. Check the current Lifeline page and your program's procedure before you teach or act. If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
  modality: 'virtual',
  requirements: [
    { id: 'su-lessons', label: 'Read the three lessons before the first session', kind: 'assignment' },
    { id: 'su-s1', label: 'Attend Session 1, Asking the Question', kind: 'attend' },
    { id: 'su-s2', label: 'Attend Session 2, Getting Help Now', kind: 'attend' },
    { id: 'su-s3', label: 'Attend Session 3, Safety Plans and Follow-up', kind: 'attend' },
    { id: 'su-practice', label: 'Complete and keep your practice file', kind: 'assignment' },
  ],
  sessions: [],
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-su-l1',
      title: 'Risk factors, warning signs, and what the research says about asking',
      summary: 'Who is at risk, what to watch and listen for, why asking is safe, and why means matter.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Most people who think about suicide do not die by it. Many who are in danger give signs to someone around them, often in words that are easy to miss or to explain away. A community worker is often that someone. Knowing the signs, and knowing that asking directly is safe, can change what happens next.",
          "This lesson gives you the facts. It does not ask you to predict who will attempt suicide. Nobody can do that. It asks you to notice, to ask, and to act.",
        ] },
        { kind: 'concept', title: 'Words that help', text: [
          "The National Institute of Mental Health defines suicide as when people harm themselves with the goal of ending their life, and they die as a result. A suicide attempt is when people harm themselves with the goal of ending their life, but they do not die. It advises avoiding the terms committing suicide, successful suicide, and failed suicide, because these terms often carry negative meanings.",
          "Use the phrases died by suicide and attempted suicide. In notes and in conversation, avoid language that treats suicide as a crime or an achievement. The NIDA guidance on language you studied in an earlier course applies in the same spirit.",
        ] },
        { kind: 'concept', title: 'Who is at risk', text: [
          "NIMH says people of all ages, sexes, and ethnicities can be at risk for suicide. It lists the main risk factors. A history of suicide attempts. Depression, other mental disorders, or substance use disorder. Chronic pain. A family history of a mental disorder or substance use. A family history of suicide. Exposure to family violence, including physical or sexual abuse. The presence of guns or other firearms in the home. Having recently been released from prison or jail. And exposure, directly or indirectly, to others' suicidal behavior, such as that of family members, peers, or celebrities.",
          "NIMH adds two cautions. First, most people who have risk factors for suicide will not attempt suicide, and it is difficult to tell who will act on suicidal thoughts. Second, risk factors are important to keep in mind, but someone who is showing warning signs may be at higher risk for danger and need immediate attention. It also says stressful life events, such as the loss of a loved one, legal troubles, or financial difficulties, and interpersonal stressors, such as shame, harassment, bullying, discrimination, or relationship troubles, may contribute to suicide risk, especially when they occur along with risk factors.",
          "Several of these are the daily business of community health work: a person coming home from jail, a person in debt or facing eviction, a person experiencing discrimination, a person with depression or a substance use problem. SAMHSA's protocol on co-occurring disorders adds that people with co-occurring mental and substance use disorders are at elevated risk for self-harm, especially if they have a history of trauma. You do not need to treat every such person as a crisis. You do need to keep the possibility in mind.",
        ] },
        { kind: 'concept', title: 'Warning signs', text: [
          "NIMH separates warning signs that someone may be at immediate risk for attempting suicide from other serious warning signs.",
          "Immediate warning signs include talking about wanting to die or wanting to kill themselves. Talking about feeling empty or hopeless or having no reason to live. Talking about feeling trapped or that there are no solutions. Feeling unbearable emotional or physical pain. Talking about being a burden to others. Withdrawing from family and friends. Giving away important possessions. Saying goodbye to friends and family. Putting affairs in order, such as making a will. Taking great risks that could lead to death, such as driving extremely fast. And talking or thinking about death often.",
          "Other serious warning signs include extreme mood swings, such as suddenly changing from very sad to very calm or happy. Making a plan or looking for ways to kill themselves, such as searching for lethal methods online, stockpiling pills, or buying a gun. Talking about great guilt or shame. Using alcohol or drugs more often. Acting anxious or agitated. Changing eating or sleeping habits. And showing rage or talking about seeking revenge.",
          "NIMH says that if you notice warning signs, especially a change in behavior or new, concerning behavior, you should get help as soon as possible.",
        ] },
        { kind: 'concept', title: 'Asking does not put the idea in someone\'s head', text: [
          "NIMH answers the most common fear directly. It says studies have shown that asking people about suicidal thoughts and behaviors does not cause or increase such thoughts, and that asking someone directly, for example, are you thinking of killing yourself, can be the best way to identify someone at risk.",
          "It also answers another common belief. Do people threaten suicide to get attention. NIMH says suicidal thoughts or actions are a sign of extreme distress and an indicator that someone needs help, that talking about wanting to die by suicide is not a typical response to stress, and that all talk of suicide should be taken seriously and requires immediate attention.",
          "The Intervention course gave you the same message. This is the reason: if you are worried and you do not ask, the person may carry the thought alone.",
        ] },
        { kind: 'concept', title: 'Why means matter', text: [
          "The Harvard Means Matter Campaign explains why reducing access to lethal means is a part of suicide prevention. It states that many suicide attempts occur with little planning during a short-term crisis, that intent is not the only thing that determines whether an attempter lives or dies, because the means also matter, and that 90 percent of attempters who survive do not go on to die by suicide later. It states that access to firearms is a risk factor, that firearms used in youth suicide usually belong to a parent, and that reducing access to lethal means saves lives.",
          "NIMH makes a similar point, saying that research has shown that increasing the safe storage of lethal means can help reduce suicide attempts and deaths by suicide.",
          "The Means Matter site says its approach is designed to be non-controversial, and it welcomes both gun owners and non-gun owners. That is the right tone for your work. You are not there to take anything from anyone. You are there to help create time and distance in a moment of crisis.",
        ] },
        { kind: 'concept', title: 'Medications and risk', text: [
          "Two cautions from NIMH that matter in conversations about treatment. NIMH's page on medications says that in some cases children, teenagers, and young adults under 25 may experience an increase in suicidal thoughts or behavior when taking antidepressants, especially in the first few weeks after starting the medication or when the dose is changed, and that people of all ages taking antidepressants should be watched closely, especially during the first weeks of treatment. NIMH's depression page identifies depression as a risk factor for suicidal thoughts and behaviors.",
          "This does not mean antidepressants should be avoided. Medication decisions are for the person and the prescriber. It means that when someone has just started or changed a medication, a worker who notices a change in mood or behavior should tell the person's prescriber or follow the program's procedure, and should not wait.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Risk factor', plain: "Something linked to higher chances of suicide in groups of people. Most people with risk factors never attempt suicide." },
          { term: 'Warning sign', plain: "Something a person says or does that suggests they may be thinking of suicide and need attention." },
          { term: 'Lethal means', plain: "The methods, such as firearms or medications, a person could use to end their life." },
          { term: 'Means reduction', plain: "Reducing a suicidal person's access to highly lethal means." },
          { term: 'Died by suicide', plain: "The respectful way to say that someone ended their life." },
        ] },
        { kind: 'myths', items: [
          { myth: "Asking about suicide will put the idea in a person's head.", reality: "NIMH says studies have shown that asking does not cause or increase suicidal thoughts and behaviors, and that asking directly can be the best way to identify someone at risk." },
          { myth: "People who talk about suicide are just seeking attention.", reality: "NIMH says it is a sign of extreme distress, and all talk of suicide should be taken seriously." },
          { myth: "If someone has risk factors, they will attempt suicide.", reality: "NIMH says most people with risk factors will not attempt suicide, and it is difficult to tell who will." },
          { myth: "Someone determined to die will find a way regardless.", reality: "The Means Matter Campaign says many attempts happen in a short crisis with little planning and that 90 percent of attempters who survive do not later die by suicide." },
        ] },
        { kind: 'case', title: 'A thing he said', scenario: true, text: [
          "A man who was released from jail three weeks ago tells a worker, in the middle of talking about a job application, that his family would be better off without him. The worker feels her stomach drop. She does not change the subject, and she does not say that is not true. She says, I want to make sure I understood. Are you thinking about suicide? He is quiet, and then he says he has been. She says, thank you for telling me. I am not going anywhere. The conversation that follows is the subject of the next lesson. What matters here is that she heard the signs, being a burden and being recently released, and she asked in plain words.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-su-q1',
          q: "According to NIMH, what do studies show about asking someone directly whether they are thinking about suicide?",
          options: [
            "It increases suicidal thoughts",
            "It does not cause or increase suicidal thoughts, and can be the best way to identify someone at risk",
            "It should be left to doctors",
            "It only works with teenagers",
          ],
          answer: 1,
          rationale: "NIMH says studies have shown that asking people about suicidal thoughts and behaviors does not cause or increase such thoughts, and that asking directly can be the best way to identify someone at risk.",
          distractors: "The other answers repeat common fears that the research does not support.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-su-q2',
          q: "Which of these is listed by NIMH as a warning sign that someone may be at immediate risk?",
          options: [
            "Talking about being a burden to others, giving away important possessions, or saying goodbye",
            "Sleeping late on a weekend",
            "Liking a hobby",
            "Feeling nervous before a test",
          ],
          answer: 0,
          rationale: "NIMH lists talking about being a burden, giving away possessions, and saying goodbye among warning signs of immediate risk.",
          distractors: "The other answers describe ordinary behavior.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What have you heard people say about suicide that you now know to be a myth?",
          "Which of the risk factors are most common among the people you serve, and what does that mean for how you listen?",
        ] },
        { kind: 'takeaways', items: [
          "Risk factors matter, and most people with them never attempt suicide. Warning signs, especially new or changed behavior, call for attention now.",
          "Asking directly is safe and may be the best way to find out. All talk of suicide is taken seriously.",
          "Means matter. Time and distance from lethal means save lives.",
        ] },
        ev([
          "National Institute of Mental Health. Frequently Asked Questions About Suicide (page read November 10, 2026). The definitions, the language to avoid, the risk factors, the warning signs, and the answers on asking and on attention-seeking.",
          "Harvard T.H. Chan School of Public Health, Means Matter Campaign (page read November 10, 2026). The statements on means reduction. The claim that 90 percent of attempters who survive do not go on to die by suicide is the campaign's statement on its site.",
          "National Institute of Mental Health. Mental Health Medications, and Depression. The caution for people under 25 on antidepressants and the statement that depression is a risk factor.",
          "SAMHSA. Treatment Improvement Protocol 42 (2020 update). The elevated risk of self-harm among people with co-occurring disorders.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-su-l2',
      title: 'Staying with someone and connecting them to help',
      summary: 'What to say, what to avoid, never promising secrecy, how 988 works, and what to do next.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "You asked, and the answer was yes. What you do in the next ten minutes matters. You do not need perfect words. You need to stay, to listen, to avoid a few things that can hurt, and to bring in help. This lesson gives you the pieces.",
        ] },
        { kind: 'concept', title: 'The five steps, in brief', text: [
          "The Intervention course taught five steps. Ask. Keep them safe. Be there. Help them connect. Follow up. This course adds practice and detail to each. If you have not taken that course recently, review it before the first session.",
        ] },
        { kind: 'concept', title: 'What NIMH says to do', text: [
          "NIMH advises that if someone tells you that they are going to kill themselves, you should not leave them alone. You should not promise that you will keep their suicidal thoughts a secret. You should tell a trusted friend, family member, or other trusted adult. You should call 911 if there is an immediate life-threatening situation. You can also contact the 988 Suicide and Crisis Lifeline. Family and friends are often the first to recognize the warning signs of suicide, and they can take the first step toward helping a loved one find mental health treatment.",
          "For a worker, tell a trusted adult means your supervisor or the person your program names, immediately. If you work alone in the field, know who to call. You will map this in Session 2.",
          "Do not promise secrecy even when asked. Saying I cannot keep this secret, because I care about you and your life is more important than the secret, is honest and kind. Many people expect this and are relieved.",
        ] },
        { kind: 'concept', title: 'Staying and listening', text: [
          "Be there. Sit down. Turn off distractions. Say what you notice and what you feel. Use the reflective listening you learned in the Motivational Interviewing course. Reflect the pain. That sounds like you have been in a lot of pain for a long time. Ask open questions. What has been going on. What has made it worse. What has kept you going. Let silence happen.",
          "Avoid the things that can hurt. Do not argue about whether the person should feel this way. Do not say you have so much to live for, or think of your family, or you would never do it, as the Intervention course also warned. Do not minimize it, offer quick fixes, or share your own story in a way that shifts the attention to you. Do not act shocked. Do not rush to hang up the conversation by passing the person to someone else before you have made sure they are heard.",
          "Ask about the next step with plain words. Have you thought about how you would do it. Do you have what you would need. Do you have a time in mind. These questions are part of the Intervention course's second step. They help you decide whether this is an emergency. If the person has a plan, has the means, and has a time, treat it as an emergency and call 911 or follow your program's procedure, and do not leave them alone. This is practice guidance written for this course. Your program's procedure may be more specific.",
        ] },
        { kind: 'concept', title: 'What happens when someone contacts 988', text: [
          "The 988 Suicide and Crisis Lifeline's website describes what to expect. When you call, text, or chat, the conversation is confidential, and the service offers care without judgment.",
          "By phone, first you hear a message offering service options: the Veterans Crisis Line by pressing 1, Spanish-language services by pressing 2, a service for LGBTQ+ youth by pressing 3, or your local 988 contact center. The page notes that the LGBTQ+ youth option has been restored, so check the current page for the options available. Then you wait, with hold music, to be connected to a live counselor. The counselor says hello and introduces themselves and asks if you are safe. After that the counselor listens, tries to understand how the problem is affecting you, provides support, and shares any resources that may be helpful.",
          "By text, you send a text to 988 and are given options to connect with a live counselor. Specialized services are available. The page says to text AYUDA to 988 for Spanish-language services, and PRIDE to 988 for specialized support for LGBTQ+ youth, and says veterans, service members, and their loved ones can text the Veterans Crisis Line at 838255. You accept the terms of service by texting Next, complete a brief survey while you wait, and then your counselor introduces themselves and asks if you are safe. By chat, you open a window on the Lifeline's site, answer a few short questions, accept the terms, and are connected to a counselor who does the same.",
          "NIMH describes the Lifeline as providing 24-hour, confidential support to anyone in suicidal crisis or emotional distress, by call or text to 988 and in English by chat at 988lifeline.org. The Lifeline's page says the service is available 24 hours a day, every day.",
        ] },
        { kind: 'concept', title: 'Helping a person connect', text: [
          "A warm handoff is better than a cold referral. Offer to be with the person while they call or text 988. Ask whether they would like to use speaker, or whether they would like you to start and hand over the phone. If they do not want to, offer to call a clinician, a crisis team, or a supervisor with them. Tell them what to expect, using the steps above, so there is no surprise. If you do not know what is available in your area, ask your program.",
          "If there is imminent danger, call 911. Give the address, say that someone is thinking of suicide and has the means, and follow the dispatcher's instructions. Stay with the person.",
          "Whatever happens, tell your supervisor as soon as you can. Document as your program requires, factually and without judgments. Write what the person said and what you did, using the principles from the Communication and Documentation course.",
        ] },
        { kind: 'concept', title: 'If it is on social media', text: [
          "NIMH advises that many social media sites have a process to get help for a person who posts suicidal messages, and points to the 988 Lifeline's page about safety and support on social media. If you see messages or live streaming content that suggests someone is actively engaging in suicidal behavior, you can contact the safety team at the social media company, and they will reach out to connect the person with the help they need. If you know the person and where they are, and you think they are in immediate danger, call 911.",
        ] },
        { kind: 'concept', title: 'Follow up', text: [
          "NIMH says that staying connected and following up with people who are at risk for suicide has been shown to help lower the risk of future suicide attempts. Contact after a crisis matters. Agree on when you will check in, and keep your word. A short message or call is enough. I was thinking of you. How are you doing today. Keep it simple, and do not wait for the person to reach out.",
        ] },
        { kind: 'concept', title: 'Safe messaging when you talk or teach', text: [
          "The reportingonsuicide.org site, which presents recommendations for media, notes that coverage of suicide can contribute to contagion, when reports lead to additional suicides, or can encourage help-seeking, and that the recommendations were developed by consensus among many suicide prevention organizations. Only the introduction of the page was read for this course.",
          "Practice guidance written for this course. When you talk about suicide in a group or teach about it, avoid describing methods or locations, avoid presenting suicide as a solution or as the result of one cause, and always include where to get help. Say 988 aloud and write it down.",
        ] },
        { kind: 'vocab', items: [
          { term: '988 Lifeline', plain: "A national service for people in suicidal crisis or emotional distress, available by call, text, or chat." },
          { term: 'Warm handoff', plain: "Connecting a person to help while you stay with them, instead of giving a number and leaving." },
          { term: 'Imminent danger', plain: "A situation in which a person may act on suicidal thoughts right now." },
          { term: 'Contagion', plain: "When exposure to a suicide leads to additional suicidal behavior." },
          { term: 'Follow-up', plain: "Contact after a crisis to check in and keep the person connected." },
        ] },
        { kind: 'myths', items: [
          { myth: "If someone asks me to keep it secret, I should respect that.", reality: "NIMH says do not promise to keep suicidal thoughts a secret. Tell a trusted adult, and in a worker's case your supervisor." },
          { myth: "Calling 988 is only for people about to act.", reality: "The Lifeline serves people in suicidal crisis or emotional distress. NIMH and the Lifeline describe it as for anyone in either." },
          { myth: "If I give the person the number, I have done my part.", reality: "A warm handoff, staying while they connect, and follow-up are better. Contact after a crisis helps lower risk." },
          { myth: "I should wait and see how the person is tomorrow.", reality: "NIMH says to get help as soon as possible when you notice warning signs, and not to leave someone alone who says they are going to kill themselves." },
        ] },
        { kind: 'case', title: 'After the answer was yes', scenario: true, text: [
          "The man says he has been thinking about suicide. The worker says, thank you for telling me. I am not going anywhere. She asks, have you thought about how you would do it? He says he has some pills at his sister's place where he is staying. She asks if he has thought about when. He says tonight, maybe. She says, I am worried about you, and I cannot keep this between us. I want to get you help right now. She asks if he would be willing to call 988 with her. He says okay. They call on speaker, and the counselor asks if he is safe. She stays. She calls her supervisor and follows the program's procedure for a crisis. She asks whether the pills could be given to his sister to hold, and whether his sister could come. Before she leaves she agrees on a call the next morning. She calls. The scene is invented.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-su-q3',
          q: "A person tells you they are going to kill themselves and asks you to keep it a secret. What does NIMH advise?",
          options: [
            "Keep the secret and check on them later",
            "Do not leave them alone, do not promise to keep it secret, tell a trusted person, and call 911 if there is an immediate life-threatening situation or contact the 988 Lifeline",
            "Tell them they should not feel that way",
            "Wait a few days",
          ],
          answer: 1,
          rationale: "NIMH advises not leaving the person alone, not promising secrecy, telling a trusted friend, family member, or other trusted adult, and calling 911 in an immediate life-threatening situation or contacting the 988 Lifeline.",
          distractors: "The other answers leave the person at risk or dismiss their feelings.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-su-q4',
          q: "According to the 988 Lifeline's page, what happens after a counselor answers?",
          options: [
            "The counselor ends the call",
            "The counselor introduces themselves and asks if you are safe, then listens, provides support, and shares resources that may help",
            "The counselor asks for your insurance",
            "The counselor refers you to a website only",
          ],
          answer: 1,
          rationale: "The page says the counselor says hello and introduces themselves, asks if you are safe, listens, helps you understand how the problem is affecting you, provides support, and shares resources.",
          distractors: "The other answers are not described on the page.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What words do you find hardest to say in a conversation like this? What would help?",
          "Who would you call first in your program, and do you have their number saved?",
        ] },
        { kind: 'takeaways', items: [
          "Stay, listen, and do not promise secrecy. Avoid the phrases that dismiss or minimize.",
          "988 offers confidential support by call, text, or chat. A warm handoff is better than giving a number.",
          "Call 911 for immediate danger, tell your supervisor, document factually, and follow up.",
        ] },
        ev([
          "National Institute of Mental Health. Frequently Asked Questions About Suicide. What to do if someone tells you they will kill themselves, social media, and the value of follow-up.",
          "988 Suicide and Crisis Lifeline. What to Expect (page read November 10, 2026). The call, text, and chat steps. The page carries unrelated policy text, which was ignored. Options and numbers can change.",
          "reportingonsuicide.org. Media recommendations page (introduction only was read).",
          "The suggestions about staying, listening, and the questions about plan and means are practice guidance written for this course, consistent with the Intervention course. Your program's procedure governs.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-su-l3',
      title: 'Safety plans, lethal means, and crisis planning',
      summary: 'The six steps of a safety plan, how to raise lethal means safety, and how plans fit into recovery.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "A crisis passes. What helps in the next one is a plan made when the person is calmer. A safety plan is a short, written list of warning signs, things to do, people to contact, and steps to make the environment safer. It is made with the person, in their words. This lesson explains how it works and what part you may play.",
        ] },
        { kind: 'concept', title: 'The Stanley-Brown Safety Planning Intervention', text: [
          "The Stanley-Brown Safety Planning Intervention is described by its developers as a brief, collaborative intervention between a clinician and a suicidal individual that aims to reduce acute risk. Its purpose is to give people who have experienced a suicidal crisis a specific set of coping strategies and resources to use in order to decrease the risk of suicidal behavior. The developers say it is more than completing the form. It includes conducting a risk assessment and getting a description of a recent suicidal crisis to identify warning signs, explaining the rationale for a plan, developing the plan collaboratively, completing its steps, explaining how to use it, discussing where it will be kept and who will have it and what may get in the way, and conducting a follow-up review.",
          "NIMH notes that research has shown that creating a safety plan or crisis response plan, with specific instructions for what to do and how to get help when having thoughts about suicide, can help reduce a person's risk of acting on suicidal thoughts.",
          "Notice the word clinician. The intervention is designed for clinicians, and the risk assessment is a clinical task. A community health worker does not do the whole intervention. Whether you help a person write a plan, or help them find a clinician who will, depends on your program. The next sections describe the steps so that you understand them, can explain them, and can support a plan that a clinician has made.",
        ] },
        { kind: 'concept', title: 'The steps of the plan', text: [
          "The developers' site lists the steps. Step 1: recognize warning signs of an impending suicidal crisis. One of the most effective ways of averting a crisis is to address the problem before it fully emerges, and warning signs, which may be thoughts, emotions, or behaviors, serve as a reminder to retrieve and follow the plan.",
          "Step 2: use internal coping strategies. The person identifies what they can do, without the help of another person, if they become suicidal again. These activities distract the person and allow time for the thoughts to subside.",
          "Step 3: use social contacts as a means of distraction. These can be of two types: socializing with other people in a natural social environment, or going to healthy social settings. The person does not need to tell anyone they are in crisis.",
          "Step 4: contact family members or friends who may help resolve the crisis. This is distinguished from the previous step because the person explicitly tells others they are in crisis and need support.",
          "Step 5: contact professionals or professional services, such as treating mental health providers, emergency departments, and crisis hotlines trained to help during a suicidal crisis. This is where 988 appears on a plan.",
          "Step 6: make the environment safer by reducing the potential use of lethal means. The developers say that even if no specific plan is identified, a key component is eliminating or limiting access to any potential lethal means in the environment to allow time to pass so that suicide risk subsides.",
          "A seventh item, identifying reasons for living, is listed as optional.",
          "The steps move from what a person can do alone, to people who can help, to professionals, to the environment. Each is written in the person's own words, so that the plan sounds like them and not like a form.",
        ] },
        { kind: 'concept', title: 'Making the plan usable', text: [
          "The developers say the intervention includes explaining how to use the plan and discussing where it will be kept, who it will be shared with, how likely it is to be used, and what barriers might get in the way. A plan in a drawer does not help. Help the person think about where they will have it when they need it. A photo on their phone, a card in a wallet, a copy with a trusted person. Ask who else should know. Ask what might stop them from using it, and talk through it.",
          "The developers also describe a follow-up review to see whether the plan helped and whether it needs revising. Plans change as life changes. Offer to review the plan when you check in.",
        ] },
        { kind: 'concept', title: 'Lethal means safety, respectfully', text: [
          "The Means Matter Campaign describes a lethal means counseling approach that is designed to be non-controversial and respectful of gun owners and non-gun owners alike. It notes that families and friends who are concerned about someone can help, and that clinicians should consider addressing firearm safety with a patient or with their family. It also points to ways to bring up storing guns off-site.",
          "Practice guidance written for this course. You do not search a home, and you do not take anything. You ask, with care. Is there anything in the home that you would use to hurt yourself. Would you be willing to let someone you trust hold it for a while. Could the pills be kept somewhere else, or in smaller amounts. Frame it as creating time. Many attempts happen in a short crisis, and putting time and distance in the way gives the crisis a chance to pass. Involve the person, and the people who live with them, and follow your program's guidance. Never put yourself in danger.",
          "Step 6 of the plan, and the Intervention course's second step, both address this. Medications are among the most common means in a home. A worker can ask whether someone else could hold them, or whether a pharmacist can help with smaller supplies, without advising on the medication itself.",
        ] },
        { kind: 'concept', title: 'Crisis planning for people with serious mental illness', text: [
          "A safety plan is built for suicidal crisis. Some people also benefit from a wider crisis plan about what to do in other crises, for example in a psychotic episode or a manic episode, including what helps, who to call, what to avoid, which hospital or team they prefer, and who should be told. SAMHSA's core competencies for peer workers include assisting peers in developing advance directives and other crisis prevention tools, and taking action to address distress or a crisis using knowledge of local resources and treatment. The Medi-Cal peer support competencies include safety and crisis planning as the thirteenth of seventeen.",
          "What goes into a plan like this belongs to the person. Ask what has helped before. Ask what has made things worse. Ask who they trust to speak for them. Write it down in their words, and share it with the people they choose. The details of legal advance directives are matters for your program and for legal and clinical advisors.",
        ] },
        { kind: 'concept', title: 'After a crisis, and caring for yourself', text: [
          "Follow up is part of the plan. Agree on when you will contact the person, and do it. The NIMH FAQ says that staying connected and following up has been shown to help lower the risk of future attempts.",
          "Helping in a crisis can be frightening and exhausting. Tell your supervisor. Take time. Talk to someone you trust, within the limits of confidentiality. If the person died, or the crisis was severe, you may feel grief, guilt, or numbness, and you may need more support than a break. The Professional Conduct course covers self-care and secondary stress. If you are having thoughts of suicide yourself, call or text 988 now. You deserve the same help you offer.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Safety plan', plain: "A short written plan, made with the person, listing warning signs, coping strategies, people and professionals to contact, and steps to make the environment safer." },
          { term: 'Internal coping strategies', plain: "Things a person can do on their own to get through a crisis." },
          { term: 'Lethal means counseling', plain: "A respectful conversation about reducing access to means for suicide." },
          { term: 'Advance directive', plain: "A document stating a person's preferences for care in a future crisis." },
          { term: 'Postvention', plain: "Support offered after a suicide or a crisis." },
        ] },
        { kind: 'myths', items: [
          { myth: "A safety plan is a contract promising not to die.", reality: "The Stanley-Brown plan is a set of coping strategies and resources, made collaboratively. It is not a promise." },
          { myth: "A worker can write a safety plan alone.", reality: "The intervention is designed for clinicians. A worker helps only as the program directs, and supports plans clinicians make." },
          { myth: "Asking about firearms or pills is intrusive and will anger the person.", reality: "The Means Matter approach is designed to be respectful and non-controversial, and it saves lives." },
          { myth: "Once the plan is written, the work is done.", reality: "The developers include explaining how to use it and a follow-up review. Plans need to be accessible and revised." },
        ] },
        { kind: 'case', title: 'A plan in his own words', scenario: true, text: [
          "A clinician and a young woman, with a worker present at her request, write a plan after a crisis. Her warning signs are not sleeping for two nights and thinking everyone is better off without her. Her coping strategies are a walk to the end of her street, a playlist, and holding her cat. The places she goes to be around people are the library and her aunt's kitchen. The people she will tell are her aunt and her friend. The professionals are her counselor, and 988. For the last step, she and her aunt agree that her aunt will hold her pills and give her one week's supply at a time. She takes a photo of the plan. The worker's part is to go with her to the pharmacy, and to call in two days, as agreed. The scene is invented.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-su-q5',
          q: "Which is one of the steps of the Stanley-Brown safety plan?",
          options: [
            "Signing a promise not to attempt suicide",
            "Recognizing warning signs, using internal coping strategies, using social contacts for distraction, contacting family or friends, contacting professionals, and making the environment safer",
            "Taking medication",
            "Telling the person to stop thinking about it",
          ],
          answer: 1,
          rationale: "The developers list these steps, with identifying reasons for living as optional.",
          distractors: "The plan is a set of coping strategies and resources, not a promise, and it does not prescribe medication.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-su-q6',
          q: "A person tells you that there are pills in their home that they have thought about using. What is the best approach to lethal means?",
          options: [
            "Search the home and take them",
            "Say nothing, since it is not your business",
            "Ask with care whether someone they trust could hold the pills for a while, involve the person and those they live with, follow your program's guidance, and keep yourself safe",
            "Tell them to throw away all their medication",
          ],
          answer: 2,
          rationale: "Means safety is a respectful conversation that creates time and distance. A worker does not search or take, and does not advise on medication.",
          distractors: "The other answers either overstep, do nothing, or give medication advice.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What are three things you would put in your own plan for a hard time?",
          "How do you take care of yourself after a hard conversation? Is it enough?",
        ] },
        { kind: 'takeaways', items: [
          "A safety plan has warning signs, coping strategies, social contacts, family and friends, professionals, and lethal means safety. It is made with the person, in their words.",
          "A worker supports safety plans as the program directs. The intervention is designed for clinicians.",
          "Raise means safety respectfully, follow up as agreed, and look after yourself.",
        ] },
        ev([
          "Stanley-Brown Safety Planning Intervention, site maintained by the developers (page read November 10, 2026). The description, the tasks, and the steps.",
          "National Institute of Mental Health. Frequently Asked Questions About Suicide. The statements on safety plans, safe storage of lethal means, and follow-up.",
          "Harvard T.H. Chan School of Public Health, Means Matter Campaign. The lethal means counseling approach.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. The competency on advance directives and crisis prevention tools. The Medi-Cal peer competencies were read from a CalMHSA request for qualifications quoting DHCS BHIN 21-041, and should be verified against the BHIN.",
          "The suggestions about asking about means and the plan's use are practice guidance written for this course. Your program's procedure governs.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 1 ─────────────────────────────────────────────────────────
    {
      id: 'chw-su-s1',
      title: 'Session 1, Asking the Question',
      summary: 'A live practice session. Practice asking directly, listening, and avoiding the phrases that hurt.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "Asking the question is a skill, and it gets easier with practice. This session gives you a safe place to say the words aloud, to hear them, and to notice what happens in your body when you do.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "This topic may be personal. You may step out, pass, or take a break at any time without explanation. We use invented scenes only. Please do not share a personal story of your own or anyone else's. If you are having thoughts of suicide, tell the facilitator or call or text 988 now. Do not call 988 or 911 during practice. What is said in the room stays in the room. If a round feels like too much, say pause and the round stops without question.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Welcome and agreements, 5 minutes', text: "Introductions, agreements, and the pause rule. The facilitator names support resources." },
          { label: 'Signs and risk factors, 10 minutes', text: "The facilitator reads short statements. The group sorts each into a warning sign of immediate risk, another serious warning sign, a risk factor, or ordinary. The group notes that most people with risk factors do not attempt suicide." },
          { label: 'Say and do not say, 10 minutes', text: "In pairs, participants read a list of phrases and rewrite the ones that dismiss or minimize into something that stays with the person." },
          { label: 'Ask the question, 25 minutes', text: "In triads, one person plays someone who has said something concerning, one is the worker, and one is the observer. Three rounds of about seven minutes. The worker asks the question in plain words, listens, reflects, says they cannot keep it secret, and says what happens next. The observer uses the checklist." },
          { label: 'Debrief, 5 minutes', text: "What was hardest to say? What helped?" },
          { label: 'Close, 5 minutes', text: "One breath, one word for how you are leaving, and the support resources again." },
        ] },
        { kind: 'list', title: 'Statements to sort', items: [
          "I just feel like everyone would be better off without me.",
          "I got laid off, and the rent is due.",
          "I gave my dog away yesterday, and I wrote a letter to my daughter.",
          "I have not slept in three days and I keep thinking about ways to end it.",
          "I was released last month and I have no one.",
          "I am tired.",
        ] },
        { kind: 'list', title: 'Phrases to rewrite', items: [
          "You have so much to live for.",
          "Think of your family.",
          "You would never really do it.",
          "Everyone feels like this sometimes.",
          "You just need to think positive.",
        ] },
        { kind: 'list', title: 'Observer checklist', items: [
          "Did the worker ask directly, in plain words?",
          "Did the worker listen and reflect before moving on?",
          "Did the worker avoid phrases that dismiss or minimize?",
          "Did the worker say they could not keep it secret, kindly?",
          "Did the worker say what would happen next and stay present?",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "What happened in your body when you said the question aloud?",
          "Which phrase do you most often catch yourself wanting to say, and what could you say instead?",
        ] },
        { kind: 'takeaways', items: [
          "Ask in plain words. Listen. Reflect. Stay.",
          "Do not minimize, argue, or promise secrecy.",
          "Say what happens next, and stay present.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite, chiefly the NIMH suicide FAQ. The statements and scenes were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 2 ─────────────────────────────────────────────────────────
    {
      id: 'chw-su-s2',
      title: 'Session 2, Getting Help Now',
      summary: 'A live practice session. Practice the warm handoff to 988, map your program\'s procedure, and practice documentation.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "In a real crisis you will not have time to look things up. This session helps you know in advance who you will call, how you will bring in help, and what you will write afterward.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements from Session 1 apply. Do not call 988 or 911 during practice. Use mock calls only. If a round feels like too much, say pause.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A brief check-in and the pause rule." },
          { label: 'What 988 does, 10 minutes', text: "The facilitator walks through the call, text, and chat steps from the Lifeline's page. In pairs, participants rehearse how they would explain 988 to a person in two or three sentences, including that it is confidential." },
          { label: 'The warm handoff, 20 minutes', text: "In triads, one person plays someone in distress, one is the worker, and one is the observer. The worker offers to connect the person to 988 and stays while a mock call or text is made with the facilitator's script, and then calls a supervisor. Three rounds of about six minutes." },
          { label: 'Your procedure map, 10 minutes', text: "Each participant fills in a map. Who is my supervisor. How do I reach them, and who is the back-up. What is the after-hours number. When do I call 911. Where does my program say I document. Participants compare maps and note gaps to bring to their supervisor." },
          { label: 'Document it, 10 minutes', text: "In pairs, participants write a short factual note about a practice scene, using the person's words, what the worker did, who was told, and the follow-up plan, with no labels or guesses." },
          { label: 'Close, 5 minutes', text: "One thing you will ask your supervisor this week." },
        ] },
        { kind: 'list', title: 'Procedure map', items: [
          "Who do I call first, and what is their number?",
          "Who is the back-up if they do not answer?",
          "What is the after-hours contact?",
          "When do I call 911 instead?",
          "Where and when do I document?",
          "Who else needs to be told, and who must not be told?",
        ] },
        { kind: 'list', title: 'What a note includes', items: [
          "The date, time, and place.",
          "What the person said, in their words.",
          "What you asked and what they answered.",
          "What you did, including who you called.",
          "The follow-up plan and the time you agreed on.",
          "No labels, guesses, or opinions.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which gap in your procedure map worries you most? Who will you ask?",
          "What would make it easier for you to stay calm on the phone?",
        ] },
        { kind: 'takeaways', items: [
          "Know who you will call before you need to.",
          "A warm handoff means staying while the person connects.",
          "Write what happened, factually, as your program requires.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite, chiefly the 988 Lifeline's description of its service. The scenes were written for this course and describe no real person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Session 3 ─────────────────────────────────────────────────────────
    {
      id: 'chw-su-s3',
      title: 'Session 3, Safety Plans and Follow-up',
      summary: 'A live practice session. Walk through a sample safety plan, practice a lethal means conversation, practice follow-up, and plan your own care.',
      minutes: 60,
      blocks: [
        { kind: 'why', text: [
          "A plan is only useful if it sounds like the person and can be found in the moment. This session lets you practice building one on paper, using an invented person, and practice the conversations around it.",
        ] },
        { kind: 'concept', title: 'Agreements for the room', text: [
          "The same agreements apply. Use the invented person on the card, not yourself or anyone you know. A real safety plan is made with a clinician and the person it belongs to, and this is practice. If a round feels like too much, say pause.",
        ] },
        { kind: 'steps', title: 'Agenda', items: [
          { label: 'Check-in, 5 minutes', text: "A brief check-in and a review of one thing from Session 2." },
          { label: 'A plan on paper, 25 minutes', text: "In pairs, participants receive a card describing an invented person. They fill in the six steps in the person's voice: warning signs, internal coping strategies, social contacts for distraction, family or friends to ask, professionals including 988, and making the environment safer. They add where the plan will be kept and who will have a copy, and one barrier to using it." },
          { label: 'The means conversation, 10 minutes', text: "In pairs, practice asking about means with care and offering the person options for putting time and distance in place. The observer notes whether the worker asked, listened, and offered choices." },
          { label: 'Follow-up practice, 10 minutes', text: "In pairs, practice a short check-in call the next day, using plain words and a plan for the next contact." },
          { label: 'Your own care, 5 minutes', text: "Each participant writes who they will talk to after a hard day, what they will do to recover, and the sign that tells them they need more support." },
          { label: 'Debrief and close, 5 minutes', text: "What surprised you? One word for how you are leaving, and the support resources again." },
        ] },
        { kind: 'list', title: 'The six steps, for the plan on paper', items: [
          "Warning signs that a crisis may be starting.",
          "Things I can do by myself to get through.",
          "People and places that help me feel better.",
          "People I can ask for help.",
          "Professionals and services I can contact, including 988.",
          "Making my space safer.",
        ] },
        { kind: 'list', title: 'Follow-up call, short script', items: [
          "I was thinking about you. How are you doing today?",
          "Is the plan somewhere you can find it?",
          "What has helped since we talked?",
          "I will call you again on Thursday. Is that okay?",
          "If things get harder before then, you can call or text 988 at any time.",
        ] },
        { kind: 'reflect', title: 'After the session', prompts: [
          "Which step of the plan would be hardest for a person to fill in? How could you help?",
          "What is in your own plan for taking care of yourself?",
        ] },
        { kind: 'takeaways', items: [
          "A plan uses the person's words and is easy to find.",
          "Raise means safety with care, offering choices.",
          "Follow up as agreed, and take care of yourself.",
        ] },
        ev([
          "The agenda is practice design written for this course from the three lessons and the sources they cite, chiefly the Stanley-Brown Safety Planning Intervention site and the Means Matter Campaign. The person on the card is invented. A real safety plan is made with a clinician and the person.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-su-practice',
    title: 'Your suicide prevention practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: your words for asking, your procedure map, a sample safety plan in an invented voice, and your own plan for after a hard day.',
    fields: [
      { id: 'ask', label: 'Your words for asking', help: 'Write how you would ask the question in your own voice, three things you would say to stay with the person, one thing you will not say, and how you would explain that you cannot keep it secret.', multiline: true },
      { id: 'procedure', label: 'Your procedure map', help: 'Write who you would call first, the back-up, the after-hours contact, when you would call 911, where you document, and who must be told. Add the gaps you will bring to your supervisor.', multiline: true },
      { id: 'plan', label: 'A sample safety plan', help: 'For an invented person, fill in the six steps in their voice, where the plan would be kept, who would have a copy, one barrier to using it, and when you would follow up.', multiline: true },
      { id: 'care', label: 'Your own care', help: 'Write who you will talk to after a hard day, what you will do to recover, what you will ask your program for, and the sign that tells you it is time to get more support.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis, or chat at 988lifeline.org',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'National Institute of Mental Health: Frequently Asked Questions About Suicide', use: 'Risk factors, warning signs, what to do, and what research shows.', url: 'https://www.nimh.nih.gov/health/publications/suicide-faq' },
    { name: '988 Suicide and Crisis Lifeline: What to Expect', use: 'What happens when you call, text, or chat.', url: 'https://988lifeline.org/what-to-expect/' },
    { name: 'Stanley-Brown Safety Planning Intervention', use: 'The developers\' description of the six steps of the safety plan.', url: 'https://suicidesafetyplan.com/' },
    { name: 'Means Matter Campaign, Harvard T.H. Chan School of Public Health', use: 'Why reducing access to lethal means saves lives, and how to raise it.', url: 'https://means-matter.hsph.harvard.edu/' },
    { name: 'SAMHSA: Treatment Improvement Protocol 42, Substance Use Disorder Treatment for People With Co-Occurring Disorders', use: 'Self-harm risk and safety in people with co-occurring disorders.', url: 'https://store.samhsa.gov/product/tip-42-substance-use-treatment-persons-co-occurring-disorders/pep20-02-01-004' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'The competencies on crisis prevention tools and advance directives.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
  ],
};
