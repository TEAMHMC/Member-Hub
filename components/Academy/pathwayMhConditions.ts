// Community Mental Health Worker Pathway, Mental Health Core M2: Understanding Mental Health Conditions.
//
// A self-paced course (id chw_mh_conditions, 4 hours). It teaches a community health worker what the
// most common mental health conditions are, how they are described, how common they are, how they are
// treated, and what a worker can and cannot do. It does not teach diagnosis. It teaches recognition,
// respect, and referral.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources are
// National Institute of Mental Health pages and fact sheets on depression, bipolar disorder,
// schizophrenia, generalized anxiety disorder, panic disorder, social anxiety disorder, post-traumatic
// stress disorder, eating disorders, mental health medications, and the national statistics page; the
// World Health Organization's mental disorders fact sheet (dated September 11, 2026); and SAMHSA's core
// competencies for peer workers. The NIMH pages carry a notice about a change in federal terminology
// that is unrelated to their content, and the notice was ignored. The medications page was read only
// through its sections on antidepressants and anti-anxiety medications, and the course uses nothing
// beyond that. The NIMH statistics page gives 6.0 percent for serious mental illness in its text and
// 5.5 percent in the figure beneath it; the course teaches that discrepancy as a reason to check
// numbers. The scenes were written for this course and describe no real person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_CONDITIONS: Course = {
  id: 'chw_mh_conditions',
  num: 23,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Understanding Mental Health Conditions',
  promise:
    "Describe the most common mental health conditions in plain language, know how common they are and how they are treated, recognize when someone may need help, talk about conditions without stigma, and stay within your role.",
  about: [
    "This course gives you the working knowledge of mental health conditions that a community mental health worker needs. It covers what a mental disorder is, how common they are, and the conditions you are most likely to meet: depression, bipolar disorder, anxiety disorders, post-traumatic stress disorder, schizophrenia and psychosis, and eating disorders. It explains how each is described and treated, including the role of psychotherapy and medication.",
    "It rests on fact sheets from the National Institute of Mental Health, the institute's national statistics, the World Health Organization's fact sheet on mental disorders, and SAMHSA's competencies for peer workers. Where a page is a summary or has a limit, the lesson says so.",
    "It is Mental Health Core course 2 of HMC's community health worker pathway. It does not teach you to diagnose or treat anything, and it never asks you to advise anyone about a medication. It teaches you what you need to know so that you can listen well, recognize when to connect someone to help, and talk about these conditions in ways that reduce stigma.",
  ],
  objectives: [
    "Define a mental disorder as the World Health Organization does, and explain how common mental disorders are.",
    "Describe depression and bipolar disorder, their symptoms, and how they are treated.",
    "Describe anxiety disorders and PTSD, and tell a panic attack from panic disorder and stress from an anxiety disorder.",
    "Describe psychosis and schizophrenia, and correct common myths, including the myth about violence.",
    "Describe eating disorders and why they are serious and often hidden.",
    "Explain the role of psychotherapy and medication, and say what a worker may and may not say about medication.",
  ],
  minutes: 240,
  prerequisites: "None. Hope, Recovery, and Wellness and Trauma-Informed Practice are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people with their own lived experience of any of these conditions.",
  freshness:
    "The facts in this course were read on federal and international health pages on November 10, 2026. Medication information changes often, and the course leaves the details to the FDA, to prescribers, and to pharmacists. Check current sources before you quote a statistic.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhc-l1',
      title: 'What a mental health condition is, and how common they are',
      summary: 'Definitions, terms, numbers, causes, and why careful reading of numbers matters.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Before you can help someone, you need to know what you are talking about. Mental illness is surrounded by words that mean different things to different people, by numbers that get quoted without sources, and by old ideas that still shape how people feel about it. This lesson sets the ground. What the terms mean. How common these conditions are. What causes them. And how to read a number with care.",
        ] },
        { kind: 'concept', title: 'A definition', text: [
          "The World Health Organization defines a mental disorder as a clinically significant disturbance in a person's cognition, emotional regulation, or behavior. It says the disturbance is usually associated with distress or with impairment in important areas of functioning.",
          "Read the definition closely. Significant disturbance, meaning more than an ordinary bad day. Cognition, emotion, or behavior, meaning thinking, feeling, or acting. And distress or impairment, meaning that the person suffers, or cannot do what they need to do. A sad mood after a loss is not a disorder by itself. A mood that stays low, takes the person's ability to function, and does not lift is a different matter.",
          "The WHO notes that mental disorders may also be referred to as mental health conditions. It says the latter is a broader term that covers mental disorders, psychosocial disabilities, and other mental states associated with significant distress, impairment in functioning, or risk of self-harm. In this course, the terms mental health condition and mental disorder are used the way the sources use them. SAMHSA and NIMH use the term mental illness as well.",
        ] },
        { kind: 'concept', title: 'How common', text: [
          "The WHO reports that in 2023 nearly 1 in 7 people in the world, 1.2 billion, were living with a mental disorder, and that anxiety and depressive disorders were the most common. It reports 470 million people with an anxiety disorder, including 146 million children and adolescents, and 322 million with depression, including 43 million children and adolescents. It says that, while effective prevention and treatment exist, most people with mental disorders do not have access to effective care, and that many experience stigma, discrimination, and violations of human rights.",
          "For the United States, the National Institute of Mental Health reports on its statistics page, drawing on national survey data, that in 2022 there were an estimated 59.3 million adults with any mental illness. That was 23.1 percent of all adults. The prevalence was higher among women, at 26.4 percent, than men, at 19.7 percent, and highest among young adults aged 18 to 25, at 36.2 percent, compared with 29.4 percent for ages 26 to 49 and 13.9 percent for people 50 and older.",
          "The page reports that 15.4 million adults had serious mental illness, which it defines as a mental, behavioral, or emotional disorder resulting in serious functional impairment that substantially interferes with or limits one or more major life activities. The page's text gives this as 6.0 percent of adults. Among adults with any mental illness, about half, 50.6 percent, received mental health treatment in the past year. Among adults with serious mental illness, 66.7 percent did. The page notes that treatment includes inpatient or outpatient treatment or counseling, or use of prescription medication for mental health.",
          "The page reports differences by group. It shows lower rates of treatment among Hispanic or Latino adults, Black or African American adults, and Asian adults with any mental illness than among white adults. Differences in who gets treatment are one reason your work matters, and they connect to what you learned about equity and access.",
        ] },
        { kind: 'concept', title: 'Reading a number with care', text: [
          "The same NIMH page gives two numbers for serious mental illness among adults in 2022. The text says 6.0 percent. The figure beneath it, which shows the percent by group, lists 5.5 percent overall. They may reflect different tables or an update, and the page does not say.",
          "This is worth noticing. Statistics are made by people. Before you quote a number in a report, a grant, or a talk, find the original source, check the year, and note which figure you used. If two figures differ, say which one you chose and why. A worker who quotes numbers carefully earns trust.",
        ] },
        { kind: 'concept', title: 'What causes mental health conditions', text: [
          "The NIMH fact sheets repeat a consistent message. For depression, research suggests that genetic, biological, environmental, and psychological factors play a role. For generalized anxiety disorder, it describes a mix of genetics, brain chemistry, biology, and environment, and notes that external causes such as a traumatic event or a stressful environment may raise risk. For bipolar disorder, it notes that the exact cause is unknown, that genetics play a role but are not the only factor, and that people with a genetic risk may be more likely to develop the disorder after trauma or other stressful life events. For schizophrenia, it names genes, environment including poverty, stressful or dangerous surroundings, and exposure to viruses or nutritional problems before birth, and differences in brain structure and function.",
          "The pages say that mental disorders are not a choice or a character flaw. The eating disorder page states directly that eating disorders are not a choice. The depression page says it is an illness that can affect anyone regardless of age, sex, race or ethnicity, income, culture, or education.",
          "A consistent pattern in all of them is that no single cause explains a condition, and that biology, experience, and conditions of life all matter. This is the same picture you saw in the courses on social determinants and trauma.",
        ] },
        { kind: 'concept', title: 'Conditions often come together, and can look like other things', text: [
          "NIMH notes that depression can co-occur with other mental disorders or chronic illnesses, such as diabetes, cancer, heart disease, and chronic pain, and that depression and those conditions can make each other worse. It notes that some medications taken for an illness can cause side effects that contribute to depression symptoms. It notes that certain medical conditions, such as viruses or thyroid disorders, can cause the same symptoms as depression, which is why a provider does a physical exam and lab tests, and that thyroid disease can cause symptoms like those of bipolar disorder. It notes that the effects of some prescribed, recreational, or illicit drugs can mimic or worsen mood symptoms. And it notes that people with PTSD often have co-occurring conditions such as depression, substance use, or anxiety disorders.",
          "For a worker the lesson is humility. You cannot tell by looking what is behind a symptom. A person who seems depressed may have a medical problem, a medication effect, a substance use problem, trauma, or several of these at once. Sorting this out is the job of a licensed provider. Your job is to listen, to notice, to help the person get to a provider, and to make sure they are heard.",
        ] },
        { kind: 'concept', title: 'Your role', text: [
          "A mental health professional, such as a psychiatrist, psychologist, or clinical social worker, determines whether symptoms meet the criteria for a disorder. The NIMH PTSD page says this directly. Health care providers also diagnose the other conditions in this course. A community mental health worker does not diagnose and does not tell a person what condition they have.",
          "What you can do is describe what you notice without labeling, encourage a person to talk to a provider, help them prepare for the visit, help them get there, and stay in touch. NIMH advises that if you see signs of depression in someone you know, you should encourage them to seek help from a mental health professional. If a person is thinking about suicide, the NIMH pages direct people to call or text the 988 Suicide and Crisis Lifeline, or to call 911 in a life-threatening situation. You will study safety and crisis planning in a later course.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Mental disorder', plain: "A clinically significant disturbance in thinking, emotion regulation, or behavior, usually with distress or impairment, as the WHO defines it." },
          { term: 'Mental health condition', plain: "A broader term that includes mental disorders, psychosocial disabilities, and other states with significant distress or impairment." },
          { term: 'Any mental illness', plain: "In national surveys, a mental, behavioral, or emotional disorder of any severity, from no impairment to severe impairment." },
          { term: 'Serious mental illness', plain: "In national surveys, a mental, behavioral, or emotional disorder that results in serious functional impairment and substantially interferes with or limits one or more major life activities." },
          { term: 'Co-occurring', plain: "Two or more conditions at the same time, such as depression and a substance use problem." },
        ] },
        { kind: 'myths', items: [
          { myth: "Mental illness is rare.", reality: "The WHO reports nearly 1 in 7 people worldwide in 2023, and NIMH reports 23.1 percent of U.S. adults in 2022." },
          { myth: "Mental illness is a weakness or a choice.", reality: "NIMH describes genetic, biological, environmental, and psychological factors, and says eating disorders are not a choice." },
          { myth: "Most people with mental illness get treatment.", reality: "NIMH reports that about half of adults with any mental illness received treatment in the past year, and the WHO reports that most people worldwide lack access to effective care." },
          { myth: "A worker can tell what condition someone has by their symptoms.", reality: "Many conditions look alike, and medical problems and substances can cause similar symptoms. A licensed professional makes the assessment." },
        ] },
        { kind: 'case', title: 'Hearing a number', scenario: true, text: [
          "A worker prepares a short talk for a community group. She wants to say how many adults have a mental illness. She finds a figure on a website that says one in five. She checks it against the NIMH statistics page, which gives 23.1 percent for adults in 2022, and notes that the figure is for any mental illness, a broad category, and that serious mental illness is a smaller group at about 6 percent. She notes the year. In the talk she says, in 2022, about 23 percent of U.S. adults had some kind of mental illness in the past year, according to the National Institute of Mental Health. Then she says, about half of them got treatment. She does not say that most people with mental illness are dangerous or that it is rare. She has told the truth with the source and the year.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q1',
          q: "How does the World Health Organization define a mental disorder?",
          options: [
            "Any sadness or worry that lasts more than a day",
            "A clinically significant disturbance in cognition, emotional regulation, or behavior, usually with distress or impairment in functioning",
            "A weakness of character",
            "A condition that only a doctor can have",
          ],
          answer: 1,
          rationale: "The WHO defines a mental disorder as a clinically significant disturbance in cognition, emotional regulation, or behavior, usually associated with distress or impairment in important areas of functioning.",
          distractors: "The other answers either lower the threshold to ordinary feelings or describe stigma.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q2',
          q: "Two figures for the same statistic differ on a source page. What should you do before quoting it?",
          options: [
            "Pick the larger one",
            "Find the original source, check the year, and say which figure you used and why",
            "Round both to a single number and not mention it",
            "Avoid using any statistics",
          ],
          answer: 1,
          rationale: "When figures differ, go to the original source, note the year, and be clear about which number you used. This builds trust.",
          distractors: "The other answers hide the discrepancy or give up on evidence.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What did you believe about mental illness before you started this work? What has changed?",
          "Which statistic in this lesson surprised you, and where would you check it?",
        ] },
        { kind: 'takeaways', items: [
          "A mental disorder is a significant disturbance in thinking, emotion, or behavior with distress or impairment. Mental health conditions are common, and many people do not get care.",
          "Causes are a mix of biology, experience, and conditions of life. They are not a choice or a character flaw.",
          "You do not diagnose. You listen, notice, encourage, and connect. Check numbers before you quote them.",
        ] },
        ev([
          "World Health Organization. Mental disorders, fact sheet (dated September 11, 2026). The definition, the 2023 figures, and the statements on access and stigma.",
          "National Institute of Mental Health. Mental Illness statistics page. The 2022 figures for adults and treatment. The page gives 6.0 percent for serious mental illness in its text and 5.5 percent in its figure. The statistics derive from national survey data.",
          "National Institute of Mental Health. Fact sheets on depression, bipolar disorder, schizophrenia, generalized anxiety disorder, and PTSD. The statements on causes, mimicking conditions, co-occurring conditions, and diagnosis by a professional.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. The limits of a peer worker's role.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhc-l2',
      title: 'Depression and bipolar disorder',
      summary: 'Signs, types, how they look different across people and ages, and how they are treated.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Depression is among the most common mental disorders in the United States, and it is one of the conditions you will meet most often. Bipolar disorder is less common and is often missed or mistaken for something else. Knowing the difference, and knowing that both are treatable, is part of being a useful ally.",
        ] },
        { kind: 'concept', title: 'Depression', text: [
          "NIMH describes depression, which it also calls major depression, major depressive disorder, or clinical depression, as different from the sadness everyone feels at times. It can cause severe symptoms that affect how a person feels, thinks, and handles daily activities such as sleeping, eating, or working. It can affect anyone regardless of age, sex, race or ethnicity, income, culture, or education. It notes that women are diagnosed more often than men, and that men may be less likely to recognize, talk about, and seek help for negative feelings and so are at greater risk of being undiagnosed and undertreated.",
          "NIMH says depression is linked to increased health care costs and to other health conditions like heart disease and diabetes, and that it is a risk factor for suicidal thoughts and behaviors. It also notes that depression and chronic illnesses can make each other worse.",
        ] },
        { kind: 'concept', title: 'Types of depression', text: [
          "Major depression involves depressed mood or loss of interest, most of the time for at least two weeks, interfering with daily activities. Persistent depressive disorder, also called dysthymia, consists of less severe symptoms that last much longer, usually at least two years. Other types NIMH names include seasonal affective disorder, which comes and goes with the seasons, usually starting in late fall and early winter; depression with symptoms of psychosis, a severe form with delusions or hallucinations; and bipolar disorder, which involves depressive episodes together with manic or hypomanic episodes.",
          "NIMH also describes types tied to points in a woman's life, because pregnancy, the postpartum period, the menstrual cycle, and menopause involve physical and hormonal changes that can bring on a depressive episode in some people. Perinatal depression occurs during pregnancy or after childbirth and is more than the baby blues. Premenstrual dysphoric disorder is a more severe form of premenstrual syndrome. Perimenopausal depression can occur during the transition to menopause.",
        ] },
        { kind: 'concept', title: 'Signs and symptoms of depression', text: [
          "NIMH lists common signs and symptoms. A persistent sad, anxious, or empty mood. Feelings of hopelessness or pessimism. Irritability, frustration, or restlessness. Feelings of guilt, worthlessness, or helplessness. Loss of interest or pleasure in hobbies and activities. Fatigue, lack of energy, or feeling slowed down. Difficulty concentrating, remembering, or making decisions. Difficulty sleeping, waking too early, or oversleeping. Changes in appetite or unplanned weight changes. Aches and pains, headaches, cramps, or digestive problems without a clear physical cause that do not go away with treatment. And thoughts of death or suicide or suicide attempts.",
          "It also lists changes in behavior that can accompany depression. Increased anger or irritability. Feeling on edge. Becoming withdrawn or detached. Increased risky behavior and impulsivity. Increased use of alcohol or drugs. Isolating from family and friends. An inability to meet responsibilities. And problems with sexual desire and performance.",
          "NIMH states that not everyone who is depressed shows all these symptoms. Some people have only a few. To be diagnosed, a person must have symptoms most of the day, nearly every day, for at least two weeks, and one symptom must be depressed mood or loss of interest or pleasure. People with only a few symptoms may still benefit from treatment.",
        ] },
        { kind: 'concept', title: 'Depression does not look the same in everyone', text: [
          "NIMH describes variation. Children may be anxious or cranky, pretend to be sick, refuse to go to school, cling to a parent, or worry that a parent may die. Older children and teens may get into trouble at school, sulk, be easily frustrated, feel restless, or have low self-esteem. Young adults are more likely to be irritable. Middle-aged adults may report more depressive episodes and stomach problems. Older adults often feel sadness, grief, or less obvious symptoms, may report a lack of emotions rather than a sad mood, and are more likely to have other medical conditions or pain that contribute. Memory and thinking problems can be prominent in severe cases.",
          "It also notes differences between men and women. Men, as well as women, may show symptoms other than sadness, such as seeming angry or irritable, and some people show physical symptoms such as a racing heart, tightened chest, chronic headaches, or digestive issues. Many men are more likely to see a health care provider about physical symptoms than emotional ones. Increased use of alcohol or drugs can be a sign of depression in any person.",
          "The practical lesson is to listen beyond the word sad. A person who says they are angry all the time, or that their stomach hurts, or that they have no feelings at all, may be describing depression.",
        ] },
        { kind: 'concept', title: 'How depression is treated', text: [
          "NIMH says depression treatment typically involves psychotherapy, medication, or both, and that brain stimulation therapy may be an option if these do not reduce symptoms enough. Choosing a plan depends on the person's needs, preferences, and medical situation, in consultation with a professional. Finding the best treatment may take trial and error. For milder forms, psychotherapy is often tried first, with medication added if needed. People with moderate or severe depression usually get medication as part of the initial plan.",
          "Psychotherapy, also called talk therapy or counseling, takes place with a licensed, trained mental health professional, one-on-one or in a group, in person or by telehealth. Evidence-based therapies include cognitive behavioral therapy, in which people learn to challenge and change unhelpful thoughts and behaviors, and interpersonal therapy, which focuses on interpersonal and life events that affect mood.",
          "NIMH's medication page says antidepressants are commonly used to treat depression and sometimes other conditions such as anxiety, pain, and insomnia. They take time to work, usually 4 to 8 weeks, and problems with sleep, appetite, energy, and concentration often improve before mood lifts. It says giving a medication a chance to work is important before deciding whether it is right for you. Common side effects include upset stomach, headache, or sexual dysfunction, which are generally mild and tend to go away with time. It notes that in some cases children, teenagers, and young adults under 25 may experience an increase in suicidal thoughts or behavior when taking antidepressants, especially in the first few weeks or when the dose is changed, and that people of all ages taking antidepressants should be watched closely early on.",
          "Notice the weight of these statements for your role. Medication is a decision between the person and their prescriber. You may hear someone say they want to stop because of a side effect or because they feel better. You do not tell them to stop, to continue, or to change the dose. You encourage them to speak with their prescriber, and you offer to help them prepare what to say. NIMH's own pages say not to stop medication without talking to a health care provider.",
        ] },
        { kind: 'concept', title: 'Bipolar disorder', text: [
          "NIMH describes bipolar disorder as a mental illness that can be chronic or episodic. People sometimes use the older term manic depression. Everyone has ups and downs, but in bipolar disorder the range of mood changes can be extreme. People have manic episodes, with unusually elevated or irritable mood and a marked increase in activity, and depressive episodes. Some have hypomanic episodes, which are like manic episodes but less severe and interfere less with daily life. Symptoms most often start in late adolescence or early adulthood. Symptoms may come and go, but the disorder usually requires lifelong treatment and does not go away on its own. NIMH adds that proper treatment can lead to better functioning and improved quality of life.",
          "A manic episode can include feeling very up, high, or extremely irritable, feeling jumpy or wired, racing thoughts, decreased need for sleep, talking fast about many things, an excessive appetite for food, drinking, sex, or other pleasurable activities, feeling able to do many things at once, and feeling unusually important, talented, or powerful. A major depressive episode includes feeling very down or sad or anxious, feeling slowed down, trouble concentrating, trouble sleeping or sleeping too much, lack of interest in almost everything, feeling hopeless or worthless, and thinking about death or suicide. A mixed episode has both.",
          "NIMH describes three basic types. Bipolar I disorder involves manic episodes that last at least 7 days or are severe enough to need hospital care, usually with depressive episodes lasting at least two weeks. Four or more episodes within a year is called rapid cycling. Bipolar II disorder is a pattern of depressive and hypomanic episodes, and many people with it spend long periods in a low-grade depressive state. Cyclothymic disorder involves recurring hypomanic and depressive symptoms that are not intense or long enough to be episodes.",
        ] },
        { kind: 'concept', title: 'Why bipolar disorder is often missed', text: [
          "NIMH says some people have bipolar disorder for years before it is diagnosed. People with bipolar II may seek help only for depressive episodes, and hypomanic episodes may go unnoticed, particularly because hypomania can feel good and productive. Misdiagnosis can happen because some symptoms resemble other illnesses. For example, people with bipolar disorder who also have psychotic symptoms can be misdiagnosed with schizophrenia. NIMH says it is important to consider the course of the disorder over past days and weeks and not only the current symptoms.",
          "It also states that if subtle signs of bipolar disorder are missed and a depressive episode is treated with an antidepressant alone, without a mood stabilizer, a manic episode or rapid cycling may be triggered. This is a reason for careful evaluation by a professional. It is also a reason for you to share what you notice with the person, or with their provider if the person agrees, such as a period of very little sleep and unusual energy that came before the low.",
          "NIMH lists treatments: medications, mainly mood stabilizers such as lithium or valproate, and atypical antipsychotics, and psychotherapy including interpersonal and social rhythm therapy, family-focused therapy, and cognitive behavioral therapy. It says antidepressants are not used alone in bipolar disorder because they can trigger mania or rapid cycling. It advises reporting side effects right away and not stopping medication without talking to a provider.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Major depression', plain: "Depressed mood or loss of interest, most of the time for at least two weeks, interfering with daily activities." },
          { term: 'Persistent depressive disorder', plain: "Less severe depression symptoms that last at least two years." },
          { term: 'Mania', plain: "An episode of unusually elevated or irritable mood with a marked increase in activity or energy." },
          { term: 'Hypomania', plain: "A milder form of mania that interferes less with daily life." },
          { term: 'Psychotherapy', plain: "Talk therapy or counseling with a licensed professional." },
        ] },
        { kind: 'myths', items: [
          { myth: "Depression is just sadness, and people can snap out of it.", reality: "NIMH describes it as an illness with severe symptoms that affect thinking, feeling, and daily activities, with genetic, biological, environmental, and psychological factors." },
          { myth: "Depression always looks like crying.", reality: "NIMH describes irritability, anger, physical symptoms, a lack of emotion, and increased use of alcohol or drugs." },
          { myth: "Bipolar disorder is just mood swings.", reality: "NIMH describes distinct manic, hypomanic, and depressive episodes lasting days or weeks, with changes in energy and activity noticeable to others." },
          { myth: "If someone feels better on medication, they can stop it.", reality: "NIMH says not to stop medication without talking to a provider. The decision belongs to the person and prescriber." },
        ] },
        { kind: 'case', title: 'A quiet change', scenario: true, text: [
          "A man in his thirties tells a worker that he has been having stomach pain for months and that he is tired of being told it is stress. He mentions, almost in passing, that he has stopped seeing friends and is drinking more on weekends. He does not say he is sad. The worker asks, what has the last month been like for you? He says he feels flat. He says he has not enjoyed anything in a long time. The worker does not say he is depressed. She says, it sounds like you have been carrying a lot, and that a lot of what you are describing is something a doctor or counselor could help with. Would you like to talk about how to set up a visit? She offers to help him write down what he wants to tell the provider, including the stomach pain, the flat mood, and the drinking.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q3',
          q: "According to NIMH, how long must depression symptoms last for a diagnosis of major depression?",
          options: [
            "One day",
            "Most of the day, nearly every day, for at least 2 weeks",
            "Six months",
            "Only during the winter",
          ],
          answer: 1,
          rationale: "NIMH says a person must have symptoms most of the day, nearly every day, for at least 2 weeks, and one symptom must be depressed mood or loss of interest or pleasure.",
          distractors: "The other answers describe a much shorter or longer period, or a seasonal pattern that is only one type.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q4',
          q: "A person tells you they want to stop their antidepressant because they feel better. What is the best response?",
          options: [
            "Tell them to stop, since they feel fine",
            "Tell them to keep taking it no matter what",
            "Encourage them to talk with their prescriber before making any change, and offer to help them prepare what to say",
            "Suggest a lower dose",
          ],
          answer: 2,
          rationale: "Medication decisions belong to the person and the prescriber. NIMH advises not to stop medication without talking to a health care provider. A worker listens, encourages, and helps them prepare.",
          distractors: "The first, second, and fourth answers each advise on a medication, which is outside your role.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q5',
          q: "Why is bipolar disorder sometimes missed?",
          options: [
            "Because it is always obvious",
            "Because a person may seek help only for depressive episodes, hypomania may feel good and go unnoticed, and symptoms can resemble other illnesses",
            "Because only children have it",
            "Because it has no symptoms between episodes",
          ],
          answer: 1,
          rationale: "NIMH explains that people with bipolar II may seek help only for depression, hypomanic episodes may go unnoticed, and misdiagnosis can happen because symptoms resemble other illnesses.",
          distractors: "The other answers contradict the fact sheet.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What are the words people use to describe depression in the community you serve? How are they different from the clinical terms?",
          "What would you say if someone told you they were thinking about stopping a medicine?",
        ] },
        { kind: 'takeaways', items: [
          "Depression is an illness with a wide range of signs, and it does not always look like sadness. Bipolar disorder includes manic or hypomanic episodes as well as depression and is often missed.",
          "Both are treatable with psychotherapy, medication, or both. Treatment can take trial and error.",
          "Never advise on medication. Encourage people to speak with their prescriber and help them prepare.",
        ] },
        ev([
          "National Institute of Mental Health. Depression (fact sheet, reviewed December 2024 on the topic page) and Bipolar Disorder (fact sheet). The descriptions, types, symptoms, variation across groups, diagnosis, and treatments. Read in full.",
          "National Institute of Mental Health. Mental Health Medications. The statements on antidepressants, their timing, side effects, and the caution for people under 25. The page says it should not be used as a guide for medical decisions. The sections on mood stabilizers and antipsychotics were not read.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhc-l3',
      title: 'Anxiety disorders and post-traumatic stress disorder',
      summary: 'Generalized anxiety, panic, social anxiety, and PTSD, how they differ from stress, and how they are treated.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Anxiety disorders are the most common mental disorders in the world according to the WHO, and PTSD is more common than many people assume. Both are often hidden. People with anxiety may look fine, and people with PTSD may avoid anything that reminds them of what happened, including help. Knowing the differences between ordinary worry and a disorder helps you respond without overreacting or minimizing.",
        ] },
        { kind: 'concept', title: 'Stress and anxiety', text: [
          "NIMH explains the difference between normal stress and an anxiety disorder. Stress is the physical or mental response to an external cause, such as having a lot of homework or an illness. Anxiety is the body's reaction to stress and can occur even if there is no current threat. Occasional stress and anxiety are normal. If anxiety does not go away and begins to interfere with daily activities, a person may have an anxiety disorder.",
          "The WHO describes anxiety disorders as characterized by excessive fear and worry and related behavioral disturbances, with symptoms severe enough to cause significant distress or impairment. It lists generalized anxiety disorder, panic disorder, social anxiety disorder, separation anxiety disorder, and others. It reports that effective psychological treatment exists and that medicines may also be considered depending on age and severity.",
        ] },
        { kind: 'concept', title: 'Generalized anxiety disorder', text: [
          "NIMH describes generalized anxiety disorder as extreme worry or nervousness, more frequent or intense than the situation calls for, about health, money, school, work, family, and other things. It involves a persistent feeling of anxiety or dread that interferes with how a person lives. The feelings can last for months or years. It develops gradually and usually starts in early adulthood, although it can occur at any age. Women are more likely than men to be affected.",
          "People with it may worry excessively about everyday things, have trouble controlling worries, feel irritable or on edge, feel restless, have trouble concentrating, have trouble sleeping or feel fatigued, and have physical symptoms such as headaches, muscle aches, stomachaches, tension, trembling, sweating, lightheadedness, or shortness of breath. Adults are often highly nervous about job security, health, finances, the well-being of family members, being late, and household responsibilities. Children and teens often worry about school, activities, friendships, and the future, may strive for perfection, and may fear disappointing others. Symptoms fluctuate and are often worse in times of stress.",
        ] },
        { kind: 'concept', title: 'Panic attacks and panic disorder', text: [
          "NIMH defines panic disorder as frequent and unexpected panic attacks. A panic attack is a sudden wave of fear or discomfort or a sense of losing control even when there is no clear danger. Physical symptoms can feel like a heart attack, such as a pounding or racing heart, sweating, chills, trembling, difficulty breathing, weakness or dizziness, tingly or numb hands, chest pain, and stomach pain or nausea. A panic attack can last from a few minutes to an hour or longer.",
          "NIMH draws a clear line. A panic attack is a one-time or occasional episode of intense fear with physical and emotional symptoms, and an isolated panic attack is not a mental disorder. Panic disorder may be diagnosed when a person has recurrent and unexpected attacks along with ongoing worry about future attacks or changes in behavior to avoid them. It says panic attacks themselves are not life-threatening, and the physical symptoms usually resolve with time. It also notes that the fear of future attacks may lead people to avoid places where attacks occurred.",
          "For a worker, this is worth knowing, with caution. The symptoms of a panic attack can look like a heart attack, and a person with chest pain should be taken seriously. If you are unsure, call 911. If the person has had this before and knows it is a panic attack, you can stay with them, speak calmly, and let it pass. Practice guidance written for this course.",
        ] },
        { kind: 'concept', title: 'Social anxiety disorder', text: [
          "NIMH describes social anxiety disorder as symptoms of anxiety or fear in situations where a person may be scrutinized, evaluated, or judged, such as public speaking, meeting new people, dating, job interviews, answering in class, asking for help, or talking to a cashier. Eating or drinking in front of others or using a public restroom may also cause fear because of concerns about humiliation, judgment, or rejection. People may worry for weeks before a social situation and may avoid places or events.",
          "It may start in childhood or adolescence and resemble extreme shyness. Symptoms include blushing, sweating, trembling, a rapid heart rate, the mind going blank, nausea, a rigid posture or a very soft voice, difficulty with eye contact, and fear of negative judgment. NIMH notes that avoiding anxiety-causing situations may feel helpful in the short term but the anxiety is likely to remain without treatment.",
          "This matters for your work because asking for help is itself on NIMH's list of situations that can trigger social anxiety. A person who does not return calls, does not come into an office, or does not speak up in a group may not be uninterested. Meeting someone where they are, in a quiet place, with a trusted person, may help.",
        ] },
        { kind: 'concept', title: 'How anxiety disorders are treated', text: [
          "For generalized anxiety disorder and panic disorder, NIMH says treatment typically involves psychotherapy, medication, or both, chosen according to the person's needs, preferences, and medical situation. It says finding the best treatment may take trial and error. Cognitive behavioral therapy, which helps people become aware of automatic ways of thinking that are inaccurate or harmful, question them, and change self-defeating patterns, is called the gold standard choice for psychotherapy because it has been well studied. Acceptance and commitment therapy is another option for GAD. For panic disorder, a CBT method called exposure therapy focuses on confronting the fears and beliefs associated with panic symptoms to help people take part in activities they have been avoiding.",
          "NIMH's medication page says that many medications used to treat depression, including SSRIs and SNRIs, may also be used to treat anxiety, and that for panic disorder or social anxiety disorder providers typically start with SSRIs or other antidepressants because they have fewer side effects than other medications. It names benzodiazepines as another type of anti-anxiety medication used for some short-term anxiety symptoms.",
          "Your role is the same as with depression. You do not choose treatment or advise on medication. You can help someone name what they feel, find a provider, prepare for a visit, and keep going to appointments.",
        ] },
        { kind: 'concept', title: 'Post-traumatic stress disorder', text: [
          "NIMH explains that it is natural to feel afraid during and after a traumatic situation, that people experience a range of reactions after trauma, and that most will recover over time. Those who continue to have symptoms may be diagnosed with PTSD. Anyone can develop PTSD at any age, including combat veterans and people who have experienced or witnessed assault, abuse, an accident, a disaster, or other serious events. Learning that a relative or close friend experienced trauma can also cause it. NIMH reports, citing the National Center for PTSD, that about 6 of every 100 people will experience PTSD at some point in their lives.",
          "Symptoms usually begin within three months of the event, though sometimes later. To meet criteria, an adult must have symptoms for longer than one month, severe enough to interfere with daily life, and not due to medication, substance use, or other illness. They must have at least one re-experiencing symptom, one avoidance symptom, two arousal and reactivity symptoms, and two cognition and mood symptoms.",
          "Re-experiencing includes flashbacks, recurring memories or dreams, and distressing thoughts or physical signs of stress. Avoidance includes staying away from reminders and avoiding thoughts or feelings about the event. Arousal and reactivity includes being easily startled, feeling on edge, difficulty concentrating or sleeping, irritability and angry outbursts, and risky or destructive behavior. Cognition and mood symptoms include trouble remembering key features of the event, negative thoughts about oneself or the world, exaggerated blame, ongoing fear, anger, guilt, or shame, loss of interest, social isolation, and difficulty feeling positive emotions.",
          "NIMH states that people with PTSD often have co-occurring conditions such as depression, substance use, or anxiety disorders, and may have suicidal thoughts. It notes that some people, such as those in abusive relationships, may be living through ongoing trauma, and that treatment is then most effective when it addresses both the situation and the symptoms. Main treatments are psychotherapy, medications, or both, with an experienced mental health professional. Cognitive behavioral therapy for PTSD can include exposure therapy, in which people learn to manage fear by gradually and safely facing the trauma they experienced, and cognitive restructuring, which helps people make sense of what happened, including guilt or shame about something that is not their fault. It adds that support from family and friends can be an essential part of recovery.",
          "This ties directly to the Trauma-Informed Practice course. A worker does not ask about the details of a trauma or try to treat it. A worker creates safety and choice, believes the person, and helps them reach a professional with experience in PTSD.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Anxiety disorder', plain: "A condition with excessive fear and worry that causes significant distress or impairment." },
          { term: 'Panic attack', plain: "A sudden wave of intense fear with physical symptoms. One attack is not a disorder." },
          { term: 'Panic disorder', plain: "Recurrent unexpected panic attacks with ongoing worry or behavior change." },
          { term: 'PTSD', plain: "A disorder in which symptoms of re-experiencing, avoidance, arousal, and negative mood last more than a month after a traumatic event." },
          { term: 'Exposure therapy', plain: "A therapy in which a person gradually and safely faces feared situations or memories." },
        ] },
        { kind: 'myths', items: [
          { myth: "Anxiety is the same as stress.", reality: "NIMH says stress is a response to an external cause and anxiety can occur without a current threat. An anxiety disorder is anxiety that does not go away and interferes with daily activities." },
          { myth: "A panic attack means the person is going to die or go crazy.", reality: "NIMH says panic attacks themselves are not life-threatening and the physical symptoms usually resolve. Chest pain should still be taken seriously, and when in doubt call 911." },
          { myth: "Only veterans get PTSD.", reality: "NIMH says anyone can develop PTSD at any age, after a wide range of events." },
          { myth: "People with PTSD should talk about the trauma with anyone who will listen.", reality: "Treatment is with an experienced professional. A worker avoids asking for details and focuses on safety, choice, and connection." },
        ] },
        { kind: 'case', title: 'A person who stopped coming', scenario: true, text: [
          "A woman misses three group sessions. A worker calls and gets no answer. When they finally speak, she says she is sorry and that every time she plans to leave the house she gets a feeling that something bad will happen, and her heart pounds. She says it happened once on a bus and now she avoids buses. The worker does not say it is just nerves. She asks what would make getting to the next session easier. They agree on a ride and a meeting spot, and the worker offers to help her tell a provider about the attacks on the bus. She does not say she has panic disorder. She says it sounds frightening, and that there are treatments for what she describes.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q6',
          q: "According to NIMH, what is the difference between a panic attack and panic disorder?",
          options: [
            "There is none",
            "A panic attack is a one-time or occasional episode of intense fear, and panic disorder involves recurrent, unexpected attacks along with ongoing worry or behavior change",
            "A panic attack lasts a day and panic disorder lasts a week",
            "Panic attacks only happen in public",
          ],
          answer: 1,
          rationale: "NIMH says an isolated panic attack is not a mental disorder. Panic disorder may be diagnosed when attacks are recurrent and unexpected and accompanied by ongoing worry or changes in behavior.",
          distractors: "The other answers invent durations or places, or deny a difference.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q7',
          q: "Which statement about PTSD matches NIMH?",
          options: [
            "Only combat veterans develop it",
            "It always appears immediately after the event",
            "Anyone can develop it at any age, symptoms usually begin within three months but sometimes later, and a mental health professional determines whether criteria are met",
            "It cannot be treated",
          ],
          answer: 2,
          rationale: "NIMH says anyone can develop PTSD, symptoms usually begin within 3 months but sometimes emerge later, and a mental health professional can determine whether symptoms meet criteria. Psychotherapy and medication are treatments.",
          distractors: "The other answers are myths that the fact sheet contradicts.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What are situations people avoid in the community you serve, and could some of them reflect fear and not disinterest?",
          "How would you stay with someone who is having a panic attack, and when would you call 911?",
        ] },
        { kind: 'takeaways', items: [
          "Anxiety disorders involve fear and worry that do not go away and interfere with life. A single panic attack is not a disorder.",
          "PTSD can follow a wide range of events and involves four kinds of symptoms lasting more than a month. A professional determines whether criteria are met.",
          "All of these are treatable. Help people name what they feel, find a provider, and keep going. Do not ask for trauma details.",
        ] },
        ev([
          "National Institute of Mental Health. Fact sheets on generalized anxiety disorder, panic disorder, social anxiety disorder, and post-traumatic stress disorder. The definitions, symptoms, distinctions, and treatments. Read in part. The sections on risk factors for the anxiety disorders and the later parts of the PTSD sheet, including the medications section and the sections on children and teens, were not read in full.",
          "National Institute of Mental Health. Mental Health Medications. The statements on anti-anxiety medications.",
          "World Health Organization. Mental disorders, fact sheet (September 11, 2026). The description of anxiety disorders and their treatment.",
          "SAMHSA. Treatment Improvement Protocol 57, Trauma-Informed Care in Behavioral Health Services. Used from the trauma-informed practice course.",
          "The guidance for a person having a panic attack is practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhc-l4',
      title: 'Psychosis and schizophrenia',
      summary: 'What psychosis is, the three kinds of symptoms, the myth about violence, causes, and treatment.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "Schizophrenia is among the most misunderstood conditions in public life. It is also one of the conditions where a worker's attitude can matter a great deal. A person who hears voices or holds beliefs others find strange is still a person, with a past, preferences, and goals. Most people with schizophrenia are not violent. Many live full lives with the right support. This lesson gives you the facts.",
        ] },
        { kind: 'concept', title: 'What it is', text: [
          "NIMH describes schizophrenia as a serious mental illness that affects how a person thinks, feels, and behaves. People may appear to have lost touch with reality, which can be distressing for them and for their family and friends. Symptoms can make it hard to take part in usual activities, but NIMH says effective treatments are available and that treatment can help people remain in school, maintain employment, achieve independence, and enjoy personal relationships.",
          "People are usually diagnosed between ages 16 and 30, after the first episode of psychosis. NIMH says that starting treatment as soon as possible after the first episode is an important step toward recovery, and that gradual changes in thinking, mood, and social functioning often appear before the first episode. Schizophrenia is rare in younger children.",
        ] },
        { kind: 'concept', title: 'Three kinds of symptoms', text: [
          "NIMH says symptoms differ from person to person and generally fall into three categories: psychotic, negative, and cognitive.",
          "Psychotic symptoms are changes in the way a person thinks, acts, and experiences the world, with difficulty recognizing what is real. They include hallucinations, when a person sees, hears, smells, tastes, or feels things that are not there, with hearing voices being common. People may hear voices for a long time before others notice. They include delusions, strong beliefs that are not objectively true and may seem irrational to others, such as believing that people on the radio or television are sending special messages, or that they are in danger or that others are trying to hurt them. And they include thought disorder, ways of thinking that are unusual or illogical, such as trouble organizing thoughts and speech, stopping in the middle of a thought, jumping from topic to topic, or making up words. For some people the symptoms come and go. For others they become stable over time.",
          "Negative symptoms are a loss of motivation, a loss of interest or enjoyment in daily activities, withdrawal from social life, difficulty showing emotions, and difficulty functioning normally. They include trouble planning and sticking with routine activities such as grocery shopping, trouble anticipating pleasure, a dull voice and limited facial expression, avoiding social interaction, and very low energy. NIMH notes that negative symptoms are sometimes mistaken for depression or other conditions. In rare extreme cases a person may stop moving or talking for periods of time, called catatonia.",
          "Cognitive symptoms are problems with attention, concentration, and memory. They make it hard to follow a conversation, learn new things, or remember appointments. NIMH says a person's level of cognitive functioning is one of the best predictors of their day-to-day functioning.",
          "These help explain behavior that might look like not caring. A person who misses an appointment, does not return a call, or cannot fill out a form may be experiencing a symptom, not making a choice. That changes what you do. You make reminders simpler, you give instructions in small steps, and you reduce the load.",
        ] },
        { kind: 'concept', title: 'Violence: what the fact sheet says', text: [
          "NIMH states plainly that most people with schizophrenia are not violent. It says that overall, people with schizophrenia are more likely than those without the illness to be harmed by others. It says the risk of self-harm and violence to others is most significant when the illness is untreated or when it co-occurs with alcohol or substance misuse. It says that it is important to help people who are showing symptoms get treatment as quickly as possible.",
          "This corrects one of the most damaging beliefs about mental illness. A community health worker who repeats the idea that people with schizophrenia are dangerous contributes to the stigma that keeps people from seeking help. A worker who knows the facts can say so.",
          "NIMH also corrects another misunderstanding. Schizophrenia is not dissociative identity disorder, which used to be called multiple personality disorder. The two are different conditions.",
        ] },
        { kind: 'concept', title: 'Causes', text: [
          "NIMH says several factors may contribute. Genes: schizophrenia sometimes runs in families, many different genes may increase the chance, and no single gene causes it. Environment: a combination of genetic factors and environmental and life experiences, which may include poverty, stressful or dangerous surroundings, and exposure to viruses or nutritional problems before birth. And brain structure and function: subtle differences in the size of certain brain areas and in connections between areas, some of which may develop before birth.",
          "Note that poverty and dangerous surroundings are on the list. This is another place where social determinants and mental health meet.",
        ] },
        { kind: 'concept', title: 'Treatment and support', text: [
          "NIMH says current treatments focus on helping people manage symptoms, improve day-to-day functioning, and achieve personal life goals, such as completing education, pursuing a career, and having fulfilling relationships. Notice the language of goals, which is the language of recovery.",
          "Antipsychotic medication can make psychotic symptoms less intense and less frequent. It is usually taken daily as a pill or liquid, and some forms are given as an injection once or twice a month. People respond differently, many experience side effects such as weight gain, dry mouth, restlessness, and drowsiness, and some need to try several medications. A medication called clozapine, used when symptoms do not improve with usual antipsychotics, requires regular blood tests because of a dangerous side effect in 1 to 2 percent of patients. NIMH advises reporting side effects and not stopping a medication without first talking to a health care provider.",
          "Psychosocial treatments help people find solutions to everyday challenges while attending school, working, and forming relationships, and they are often used together with medication. Examples include cognitive behavioral therapy, behavioral skills training, supported employment, and cognitive remediation. NIMH says people who take part in regular psychosocial treatment are less likely to have symptoms recur or to be hospitalized. Family education and support programs help family and friends learn about symptoms and treatment and cope.",
          "NIMH describes coordinated specialty care, recovery-focused programs for people with first episode psychosis in which a team provides psychotherapy, medication, case management, employment and education services, and family education and support. It says that compared with typical care, coordinated specialty care is more effective in reducing symptoms, improving quality of life, and increasing involvement in work or school. It also describes assertive community treatment for people with schizophrenia who are at risk of repeated hospitalization or homelessness.",
          "For you this means that connecting someone to early, coordinated care matters, and that employment, education, and family support are part of treatment, not extras. This is also where peer support, which you studied in the first course, is valued.",
        ] },
        { kind: 'concept', title: 'Being with someone experiencing psychosis', text: [
          "Practice guidance written for this course, consistent with the principles of respect and trauma-informed practice. The Crisis courses later in the pathway and your program's procedures give more detail.",
          "Stay calm and kind. Speak simply and slowly. Do not argue about whether a voice or belief is real. You can acknowledge that it is real to the person, and that it must be frightening or confusing, without agreeing that it is true. Ask what would help. Reduce noise and crowding if you can. Do not laugh at, mimic, or whisper about the person. If the person is in danger or at risk of harming themselves or someone else, follow your program's procedure and call 911 or 988. Do not leave a person alone who may harm themselves.",
          "If a person is hearing voices and is not distressed, there may be no emergency. Many people live with voices. Ask about their experience and what helps.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Psychosis', plain: "A state in which a person has difficulty recognizing what is real, with hallucinations, delusions, or disorganized thinking." },
          { term: 'Hallucination', plain: "Seeing, hearing, smelling, tasting, or feeling something that is not there." },
          { term: 'Delusion', plain: "A strong belief that is not objectively true and may seem irrational to others." },
          { term: 'Negative symptoms', plain: "Loss of motivation, interest, emotional expression, and function." },
          { term: 'Coordinated specialty care', plain: "A team-based, recovery-focused program for people with a first episode of psychosis." },
        ] },
        { kind: 'myths', items: [
          { myth: "People with schizophrenia are violent.", reality: "NIMH says most people with schizophrenia are not violent and are more likely to be harmed by others. Risk is greatest when the illness is untreated or co-occurs with substance misuse." },
          { myth: "Schizophrenia means split personality.", reality: "NIMH says schizophrenia is not dissociative identity disorder." },
          { myth: "People with schizophrenia cannot work or have relationships.", reality: "NIMH says treatment can help people stay in school, maintain employment, achieve independence, and enjoy relationships." },
          { myth: "Missing appointments means not caring.", reality: "Negative and cognitive symptoms can make planning and remembering hard. Simplify and support." },
        ] },
        { kind: 'case', title: 'A missed appointment', scenario: true, text: [
          "A young man has missed two clinic visits. The clinic staff think he is not interested. A worker visits, and he tells her, slowly, that he gets up and means to go and then the day is gone. He says the voices are quieter now but he cannot get himself moving, and he does not remember what the appointment slip said. The worker does not decide he is lazy. She writes the time and place on a card in large letters, adds the bus number, and sets a text reminder for the night before and the morning of with his permission. She goes with him to the next visit. She tells the clinic that he has been trying and that cognitive and motivation symptoms may be in the way. The next visit happens.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q8',
          q: "According to NIMH, which statement about violence and schizophrenia is correct?",
          options: [
            "Most people with schizophrenia are violent",
            "Most people with schizophrenia are not violent, and are more likely than others to be harmed by others, with risk greatest when the illness is untreated or co-occurs with substance misuse",
            "Violence is a symptom of schizophrenia",
            "People with schizophrenia should be avoided",
          ],
          answer: 1,
          rationale: "NIMH states that most people with schizophrenia are not violent, that they are more likely to be harmed by others, and that risk of harm is most significant when the illness is untreated or co-occurs with alcohol or substance misuse.",
          distractors: "The other answers repeat the stigma that the fact sheet corrects.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q9',
          q: "A person says the television is sending them messages. What is the best response from a worker?",
          options: [
            "Argue that it is not real",
            "Laugh or change the subject",
            "Stay calm, acknowledge that it is real and frightening or confusing to them without agreeing it is true, and ask what would help",
            "Say you also hear the messages",
          ],
          answer: 2,
          rationale: "This is practice guidance consistent with respect and trauma-informed practice. Arguing escalates, mocking harms trust, and agreeing falsely is dishonest. Acknowledge their experience and ask what helps. If safety is at risk, follow your program's procedure.",
          distractors: "The other answers argue, dismiss, or pretend.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What have you heard about schizophrenia that you now know to be a myth?",
          "How would you simplify an appointment reminder for someone with memory and concentration difficulties?",
        ] },
        { kind: 'takeaways', items: [
          "Schizophrenia involves psychotic, negative, and cognitive symptoms. It is treatable, and early coordinated care helps.",
          "Most people with schizophrenia are not violent. Repeating the myth adds to stigma.",
          "Symptoms can explain missed appointments. Simplify, support, and stay connected.",
        ] },
        ev([
          "National Institute of Mental Health. Schizophrenia (fact sheet). The description, symptoms, violence, causes, and treatments. Read in part. The final section on assertive community treatment and the later sections were read only to the extent quoted.",
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The language of goals and strengths.",
          "The guidance on being with someone experiencing psychosis is practice guidance written for this course. It does not replace training in crisis response or your program's procedures.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhc-l5',
      title: 'Eating disorders and other conditions you may meet',
      summary: 'Eating disorders in detail, and the wider range of conditions beyond this course.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "One of them, anorexia nervosa, has an extremely high death rate compared with other mental disorders, according to the NIMH fact sheet you will read about here, and eating disorders are routinely overlooked. People of every body size can have one, and a person who looks healthy can be very ill. Because food and weight are everywhere in daily life, a worker will encounter them, often without realizing.",
        ] },
        { kind: 'concept', title: 'What eating disorders are', text: [
          "NIMH describes eating disorders as serious illnesses marked by severe disturbances to eating behaviors. Many people are concerned about health, weight, or appearance from time to time. In an eating disorder, a person becomes fixated or obsessed with weight loss, body weight or shape, and controlling food intake. NIMH states that eating disorders are not a choice, that they can adversely affect physical and mental health, and in some cases can be life-threatening. With treatment, people can recover.",
          "NIMH says eating disorders can affect people of all ages, racial and ethnic backgrounds, body weights, and sexes. Even people who appear healthy can have an eating disorder and be extremely ill. People can be underweight, average weight, or overweight. The exact cause is not fully understood, and research suggests a combination of genetic, biological, behavioral, psychological, and social factors.",
        ] },
        { kind: 'concept', title: 'Common types', text: [
          "NIMH names four common types. Anorexia nervosa, in which people severely avoid or restrict food because of a distorted self-image or an intense fear of gaining weight, and may see themselves as overweight even when dangerously underweight. Binge-eating disorder, in which people regularly lose control of their eating and eat unusually large amounts of food, and are often overweight or obese. Bulimia nervosa, in which people regularly binge eat and then engage in behaviors to prevent weight gain, such as forced vomiting or laxatives, and may be average weight or overweight. And avoidant restrictive food intake disorder, ARFID, in which people limit the amount and variety of food they eat because of anxiety or fear of the consequences of eating, such as choking or vomiting, or dislike of a food's appearance or texture, and are frequently underweight.",
          "NIMH advises that people showing any combination of these symptoms may have an eating disorder and should talk to a health care provider.",
        ] },
        { kind: 'concept', title: 'Signs and risks', text: [
          "For anorexia nervosa, NIMH lists extremely restricted eating, intense and excessive exercise, extreme thinness, a relentless pursuit of thinness and unwillingness to maintain a healthy weight, intense fear of gaining weight, distorted body image, and denial of the seriousness of low body weight. Over time it can lead to serious consequences including thinning of the bones, mild anemia, muscle wasting and weakness, severe constipation, low blood pressure, slowed breathing and pulse, damage to the heart, feeling tired all the time, infertility, brain damage, and multiple organ failure.",
          "NIMH states that anorexia nervosa can be fatal, with an extremely high death rate compared with other mental disorders, that people are at risk from medical complications of starvation, and that suicide is a leading cause of death for people diagnosed with it. The fact sheet directs readers who are struggling or having thoughts of suicide to call or text 988, and in life-threatening situations to call 911.",
          "The important lesson for a worker is that a person's weight does not tell you whether they have an eating disorder, and that you should never compliment weight loss or comment on a person's body as a way of encouraging or discouraging them. That last point is practice guidance written for this course, consistent with the NIMH statement that people of all body weights can be ill.",
        ] },
        { kind: 'concept', title: 'What a worker can do', text: [
          "Practice guidance written for this course. Avoid talking about weight, calories, or appearance. Do not label someone as having an eating disorder. If you are concerned, speak privately, describe what you have noticed with care, such as I have noticed you seem to be skipping meals and you have seemed tired, and ask how they are doing. Offer to help them see a provider. Keep in mind that a person with an eating disorder may deny that anything is wrong, which NIMH lists as a feature of anorexia, so do not argue. If a person seems physically unwell, faint, or unable to function, treat it as urgent and call for help.",
          "Food is also a social determinant. Some people skip meals because they cannot afford food, not because of an eating disorder. Ask before you assume. The Social Determinants course gave you the tools to ask about food access.",
        ] },
        { kind: 'concept', title: 'The wider landscape', text: [
          "This course covers the conditions that community workers meet most often. There are many more. NIMH's health topics list includes attention-deficit/hyperactivity disorder, autism, borderline personality disorder, obsessive-compulsive disorder, and others, and the WHO notes there are many different types of mental disorders. A worker is not expected to know them all. What a worker is expected to do is the same for each. Treat the person with respect. Do not diagnose. Listen to what they say they need. Help them reach the right professional. Help them keep going.",
          "If you meet a condition you do not know, do not guess. Look it up in a reliable source such as the NIMH or MedlinePlus, or ask your supervisor. Tell the person you are learning, and ask them what it is like for them. This is the cultural humility you practiced earlier, applied to health.",
        ] },
        { kind: 'concept', title: 'Substance use and mental health', text: [
          "Many of the NIMH pages note that substance use often co-occurs with these conditions and can mimic or worsen mood symptoms. The next course covers substance use, harm reduction, and co-occurring conditions in detail. For now, keep in mind that a person may have both, that treating one often helps the other, and that you should not assume which came first.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Anorexia nervosa', plain: "An eating disorder marked by severe food restriction and an intense fear of gaining weight." },
          { term: 'Bulimia nervosa', plain: "An eating disorder with binge eating followed by behaviors to prevent weight gain." },
          { term: 'Binge-eating disorder', plain: "An eating disorder with regular loss of control and eating unusually large amounts of food." },
          { term: 'ARFID', plain: "Avoidant restrictive food intake disorder, in which a person limits food because of fear of consequences or dislike of its characteristics." },
          { term: 'Co-occurring', plain: "Two or more conditions at the same time." },
        ] },
        { kind: 'myths', items: [
          { myth: "You can tell who has an eating disorder by how they look.", reality: "NIMH says people of all body weights can have one, and even people who appear healthy can be extremely ill." },
          { myth: "Eating disorders are a diet or a phase.", reality: "NIMH says they are serious illnesses, not a choice, and can be life-threatening." },
          { myth: "Only young women get eating disorders.", reality: "NIMH says they affect people of all ages, backgrounds, body weights, and sexes." },
          { myth: "Complimenting weight loss is harmless.", reality: "It can reinforce the disorder and is not appropriate. Avoid commenting on weight." },
        ] },
        { kind: 'case', title: 'A comment at the table', scenario: true, text: [
          "A worker notices that a teenager at the community meal moves food around the plate and says she already ate. Over several weeks her clothes hang looser and she is often tired. Another volunteer says, you look great, you've lost so much weight. The worker later speaks to the volunteer privately about not commenting on bodies. She finds a quiet time with the teenager and says, I've noticed you've seemed tired lately. How have things been? The teenager says fine. The worker says she is available if she wants to talk, and tells her about the school counselor and the clinic. She also tells her supervisor what she noticed, per program procedure. She does not mention weight or food.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q10',
          q: "According to NIMH, who can have an eating disorder?",
          options: [
            "Only underweight young women",
            "People of all ages, racial and ethnic backgrounds, body weights, and sexes, including people who appear healthy",
            "Only people who diet",
            "Only people who choose to",
          ],
          answer: 1,
          rationale: "NIMH says eating disorders can affect people of all ages, racial and ethnic backgrounds, body weights, and sexes, and that even people who appear healthy can be extremely ill. It also says they are not a choice.",
          distractors: "The other answers are myths that the fact sheet contradicts.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q11',
          q: "You are worried about a person who seems to be restricting food. What is the best approach?",
          options: [
            "Compliment their weight loss",
            "Tell them they have anorexia",
            "Speak privately, describe what you have noticed with care, ask how they are doing, and offer to help them reach a provider, without commenting on weight",
            "Ignore it",
          ],
          answer: 2,
          rationale: "A private, caring approach that describes what you have noticed, avoids weight talk and labels, and offers a path to a provider is respectful and within your role.",
          distractors: "The other answers reinforce the problem, diagnose, or do nothing.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What comments about weight or bodies have you heard at your workplace or in your community? What could you say instead?",
          "What condition do you know least about, and where would you learn more?",
        ] },
        { kind: 'takeaways', items: [
          "Eating disorders are serious, not a choice, and affect people of all weights and backgrounds. Do not judge by appearance.",
          "Speak privately and with care, avoid weight talk, and offer a path to a provider.",
          "When you meet a condition you do not know, do not guess. Look it up, ask your supervisor, and ask the person.",
        ] },
        ev([
          "National Institute of Mental Health. Eating Disorders (fact sheet). The description, types, signs of anorexia nervosa, and the statements on risk and mortality. Read in part. The sections on binge-eating disorder, bulimia nervosa, ARFID signs, and treatment were not read in full.",
          "World Health Organization. Mental disorders, fact sheet (September 11, 2026). The statement that there are many different types of mental disorders.",
          "The guidance on weight talk and on what a worker can do is practice guidance written for this course.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhc-l6',
      title: 'Treatment, medication, and your role',
      summary: 'How psychotherapy and medication work, what a worker may and may not say, and how to support someone in treatment.',
      minutes: 35,
      blocks: [
        { kind: 'why', text: [
          "People will ask you what to do, what a pill is for, whether therapy works, or whether they should stop their medicine. You will not be able to answer many of those questions, and you should not try. But you can help them find the answer, prepare for the conversation with the right person, and keep going. This lesson draws the line and shows what is on the safe side of it.",
        ] },
        { kind: 'concept', title: 'The main forms of treatment', text: [
          "Across the NIMH pages, the main treatments are consistent. Psychotherapy, also called talk therapy or counseling, with a licensed, trained professional. Medication prescribed by a health care provider. A combination of the two. And, for some conditions and in some situations, other approaches such as brain stimulation therapy for depression that does not respond sufficiently, and, for first episode psychosis, coordinated specialty care that combines therapy, medication, case management, employment and education support, and family education.",
          "The pages repeat that choosing a treatment depends on the person's needs, preferences, and medical situation, in consultation with a professional, and that finding the best treatment may take trial and error. They also say that therapy can be delivered in person or by telehealth and that a provider may add apps or other digital tools.",
          "The most-studied therapies named across the pages include cognitive behavioral therapy, called the gold standard choice for psychotherapy for anxiety disorders because it has been well studied, interpersonal therapy for depression, acceptance and commitment therapy for generalized anxiety, exposure therapy within CBT for panic disorder and PTSD, and family-focused therapy and interpersonal and social rhythm therapy for bipolar disorder. You do not need to remember the names. You need to know that these treatments are specific, studied, and delivered by trained professionals.",
        ] },
        { kind: 'concept', title: 'Medication, in plain terms', text: [
          "NIMH's medication page says medications can play an important role in treating mental disorders and conditions and are often used with other treatments such as psychotherapy. Medications can affect people in different ways, and it may take several tries to find the one that works best with the fewest side effects. It is important to work with a health care provider to develop a treatment plan.",
          "The page states that it provides basic information, is not a complete source, and should not be used as a guide when making medical decisions. It points readers to the FDA's Medication Guides for the latest information, warnings, and approved medications, and to MedlinePlus for information on drugs, including side effects and warnings.",
          "On timing, it says antidepressants take time, usually 4 to 8 weeks, and that some symptoms improve before mood lifts. On side effects, it describes common effects of antidepressants and says they are generally mild and tend to go away with time, and notes a rare but life-threatening condition called serotonin syndrome that can occur when antidepressants are combined with certain other medications or supplements, which is why prescribers consider all possible interactions. It also notes that younger people may experience increased suicidal thoughts early in treatment and should be watched closely. The other fact sheets add that clozapine requires regular blood tests, that antipsychotic medications commonly cause weight gain and drowsiness among other effects, and that people should report side effects to their provider.",
        ] },
        { kind: 'concept', title: 'What a worker may and may not say', text: [
          "This is a clear line, and it comes from your role, not from the sources alone. The sources repeat that medication decisions belong to the person and their provider.",
          "You may listen. You may ask how the medication is working for them and what it is like. You may ask whether they have told their prescriber. You may help them write down questions, side effects they are having, and what they want to say. You may help them get to appointments and fill prescriptions. You may share general information from a reliable source, such as the FDA Medication Guide, if they ask and your program allows. You may encourage them to speak with their prescriber or pharmacist before making any change.",
          "You may not tell a person to start, stop, increase, decrease, or skip a medication. You may not suggest a different medication or a supplement. You may not say a medication is not necessary, or that therapy alone is enough, or that a medication is dangerous or safe. You may not interpret lab results or side effects. If a person says they have already stopped, do not scold. Ask what led them to stop, encourage them to tell their prescriber soon, and say that they should not make changes without talking to a provider. If a person has severe symptoms or thoughts of harming themselves, follow your program's procedure and call 988 or 911.",
          "A good phrase is, that is a question for your prescriber, and I would like to help you ask it. Another is, I cannot advise on that, and here is who can.",
        ] },
        { kind: 'concept', title: 'Supporting someone in treatment', text: [
          "Practice guidance written for this course, consistent with the NIMH statements that support from family and friends is an essential part of recovery and that people should work with a professional.",
          "Help with the practical parts. Transportation, reminders, paperwork, insurance, and pharmacy are common reasons for dropped treatment. You are good at these.",
          "Help them prepare for visits. Suggest writing down symptoms, how long they have lasted, questions, and all medications and supplements they take. NIMH suggests taking notes on symptoms before a visit.",
          "Help them speak for themselves. Practice what they want to say. Offer to go with them if they want you there.",
          "Ask about side effects without leading. How has the medication been for you? A side effect that is not reported is a common reason people stop taking something.",
          "Normalize trial and error. Because NIMH says finding the right treatment may take several tries, you can tell people that a first treatment that does not work does not mean nothing will work.",
          "Respect the person's choices. Some people prefer therapy to medication, some the reverse, some neither. SAMHSA's recovery principles say there are many pathways. Offer information and options. Do not push.",
          "Keep confidentiality. What you know about a person's diagnosis and treatment is private information. Share it only as your program and the law allow, and with their permission.",
        ] },
        { kind: 'concept', title: 'When to get help right away', text: [
          "If a person says they are thinking about suicide, or about hurting someone, or if they seem to be in immediate danger, follow your program's procedure right away. You can call or text 988, the Suicide and Crisis Lifeline, or chat at 988lifeline.org, and call 911 in a life-threatening situation. The next course covers suicide prevention and safety planning in detail. If someone has chest pain, trouble breathing, signs of a serious medical emergency, or has taken too much of a medication or substance, call 911.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Psychotherapy', plain: "Talk therapy or counseling with a licensed, trained professional." },
          { term: 'Cognitive behavioral therapy', plain: "A therapy that helps people notice and change unhelpful thoughts and behaviors." },
          { term: 'Prescriber', plain: "A health care professional who can prescribe medication." },
          { term: 'Side effect', plain: "An unwanted effect of a medication." },
          { term: 'Medication Guide', plain: "FDA-prepared information about a prescription medicine, with warnings and side effects." },
        ] },
        { kind: 'myths', items: [
          { myth: "If a medication does not work right away, it never will.", reality: "NIMH says antidepressants usually take 4 to 8 weeks and that finding the right medication may take several tries." },
          { myth: "A worker can tell someone to stop a medication that is causing side effects.", reality: "Only the prescriber should change a medication. Help the person report the side effect." },
          { myth: "Therapy and medication are opposites.", reality: "NIMH says medications are often used with other treatments such as psychotherapy, and treatment is chosen according to the person's needs and preferences." },
          { myth: "If the person feels fine, the treatment is no longer needed.", reality: "For bipolar disorder NIMH says treatment is usually lifelong. For other conditions the decision to stop belongs to the person and prescriber." },
        ] },
        { kind: 'case', title: 'A question at the pharmacy', scenario: true, text: [
          "A woman tells a worker that she has been putting off picking up a prescription because she heard from a neighbor that the pill makes people gain weight and she is worried about it. The worker does not tell her to take it or to skip it. She says, that is a real worry, and it is worth telling the prescriber. Would it help to write down what you want to ask? They write: what are the side effects, what happens if I gain weight, are there other options, and what should I watch for. The worker offers to go with her to the pharmacy. She also reminds her that weight changes are something to bring up with the provider and not something to decide alone.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q12',
          q: "A person tells you a medication is giving them side effects and they want to stop it. What is the best response?",
          options: [
            "Tell them to stop right away",
            "Tell them side effects always go away",
            "Take the concern seriously, encourage them to tell their prescriber soon and not to stop on their own, and help them prepare what to say",
            "Suggest a different medication",
          ],
          answer: 2,
          rationale: "Medication decisions belong to the person and their prescriber. NIMH advises reporting side effects and not stopping medication without talking to a provider. A worker supports and prepares them.",
          distractors: "The other answers advise on medication, which is outside your role.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhc-q13',
          q: "Which of these is within a community mental health worker's role?",
          options: [
            "Telling someone what dose to take",
            "Helping someone write down questions for their prescriber and get to the appointment",
            "Telling someone their therapy is not working",
            "Interpreting someone's lab results",
          ],
          answer: 1,
          rationale: "Helping people prepare for and get to appointments and ask their own questions is within the role. Advising on dose, judging therapy, and interpreting results are not.",
          distractors: "The other answers are clinical judgments that belong to licensed professionals.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "When someone asks you whether a medicine is safe, what will you say?",
          "What practical help with treatment could you offer today?",
        ] },
        { kind: 'takeaways', items: [
          "Treatment is psychotherapy, medication, or both, chosen with a professional, and it can take trial and error.",
          "Never tell anyone to start, stop, or change a medication. Listen, help them prepare, and send the question to the prescriber.",
          "Support the practical parts of treatment, respect the person's choices, and keep information private.",
        ] },
        ev([
          "National Institute of Mental Health. Mental Health Medications (topic page). The statements on medications, the page's own caution, the antidepressant and anti-anxiety medication sections. Read in part.",
          "National Institute of Mental Health. Fact sheets on depression, bipolar disorder, schizophrenia, generalized anxiety disorder, panic disorder, and post-traumatic stress disorder. The treatments described and the statements on reporting side effects and not stopping medication without talking to a provider.",
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The principle of many pathways.",
          "The list of what a worker may and may not say is practice guidance written for this course, built on the role limits in the Professional Conduct course and the sources above. Your program's policy governs.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-mhc-practice',
    title: 'Your mental health conditions practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: plain-language explanations, your answers to hard questions, a fact check of a myth, and your words for encouraging someone to seek help.',
    fields: [
      { id: 'plain', label: 'Three conditions in plain language', help: 'Choose three conditions from this course. For each, write two or three sentences you could say to a neighbor who asked what it is. Use no jargon, do not diagnose, and include that treatment exists.', multiline: true },
      { id: 'questions', label: 'Your answers to hard questions', help: 'Write what you would say to each of these. Is my medicine safe. Can I stop my pills now that I feel better. Are people with schizophrenia dangerous. Is this just stress, or something more. Make sure none of your answers advises on medication or diagnoses.', multiline: true },
      { id: 'myth', label: 'A fact check', help: 'Pick a belief about mental illness you have heard at work or in your community. Write what you now know and the source. Note one statistic, the year, and where you would verify it.', multiline: true },
      { id: 'help', label: 'Encouraging someone to seek help', help: 'Write how you would start the conversation with someone you are worried about, without labeling them. Include what you would offer to do, who you would connect them to, and what you would do if they said they were thinking about suicide.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'World Health Organization: Mental disorders (fact sheet)', use: 'A global overview of mental disorders, their numbers, and access to care.', url: 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders' },
    { name: 'National Institute of Mental Health: Mental Illness statistics', use: 'U.S. prevalence and treatment figures from national surveys.', url: 'https://www.nimh.nih.gov/health/statistics/mental-illness' },
    { name: 'National Institute of Mental Health: Depression', use: 'Types, symptoms, diagnosis, and treatment of depression.', url: 'https://www.nimh.nih.gov/health/publications/depression' },
    { name: 'National Institute of Mental Health: Bipolar Disorder', use: 'Types, symptoms, diagnosis, and treatment of bipolar disorder.', url: 'https://www.nimh.nih.gov/health/publications/bipolar-disorder' },
    { name: 'National Institute of Mental Health: Generalized Anxiety Disorder', use: 'Symptoms and treatment of GAD.', url: 'https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad' },
    { name: 'National Institute of Mental Health: Panic Disorder', use: 'Panic attacks, panic disorder, and treatment.', url: 'https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms' },
    { name: 'National Institute of Mental Health: Social Anxiety Disorder', use: 'Symptoms and treatment of social anxiety disorder.', url: 'https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness' },
    { name: 'National Institute of Mental Health: Post-Traumatic Stress Disorder', use: 'Symptoms, who develops PTSD, and treatment.', url: 'https://www.nimh.nih.gov/health/publications/post-traumatic-stress-disorder-ptsd' },
    { name: 'National Institute of Mental Health: Schizophrenia', use: 'Symptoms, causes, and treatment, including coordinated specialty care.', url: 'https://www.nimh.nih.gov/health/publications/schizophrenia' },
    { name: 'National Institute of Mental Health: Eating Disorders', use: 'Types, signs, and risks of eating disorders.', url: 'https://www.nimh.nih.gov/health/publications/eating-disorders' },
    { name: 'National Institute of Mental Health: Mental Health Medications', use: 'Basic information about medications, with links to FDA Medication Guides.', url: 'https://www.nimh.nih.gov/health/topics/mental-health-medications' },
  ],
};
