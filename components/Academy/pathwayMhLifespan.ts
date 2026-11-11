// Community Mental Health Worker Pathway, Mental Health Core M6: Children, Youth, Families, and Older
// Adults.
//
// A self-paced course (id chw_mh_lifespan, 2 hours). It teaches a community health worker what is
// different about mental health at the two ends of life and in families, and what a worker does and does
// not do. It does not teach assessment or treatment, and it does not replace the Professional Conduct
// course on mandated reporting.
//
// Every statement of fact was taken from a source opened and read on November 10, 2026. The sources are
// the World Health Organization's fact sheets on adolescent mental health and on the mental health of
// older adults, the National Institute of Mental Health's publication on children and mental health and
// its statistics page, NIMH's depression fact sheet for the variation in depression across ages,
// SAMHSA's working definition of recovery, the National Institute on Aging's caregiving page (the
// landing page only), SAMHSA's protocol on co-occurring disorders, the IPS Employment Center's
// presentation (for involving families only as the person identifies), and SAMHSA's core competencies
// for peer workers. The NIMH adolescent figures come from a survey conducted from 2001 to 2004, and the
// course says so. The National Institute on Aging pages on mental and emotional health could not be read
// in full. NIH pages carry a notice about a change in federal terminology that is unrelated to their
// content, and the notice was ignored. The scenes were written for this course and describe no real
// person.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_MH_LIFESPAN: Course = {
  id: 'chw_mh_lifespan',
  num: 27,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Children, Youth, Families, and Older Adults',
  promise:
    "Recognize how mental health concerns look in children, teenagers, and older adults, work with families and caregivers with respect for the person's wishes, know when to bring in a parent, a school, a clinician, or a report, and stay within your role.",
  about: [
    "This course covers three groups that a community mental health worker meets again and again: children and teenagers, the families and caregivers around them, and older adults. The conditions are the ones you have already studied. What changes is how they show up, who is involved, and what the rules and risks are.",
    "It rests on the World Health Organization's fact sheets on adolescent mental health and on the mental health of older adults, the National Institute of Mental Health's guidance on children, the National Institute on Aging's caregiving resources, and SAMHSA's recovery principles and peer competencies.",
    "It is Mental Health Core course 6 of HMC's community health worker pathway. It does not teach assessment, and it does not replace your program's rules for working with minors or the Professional Conduct course on when a report is required.",
  ],
  objectives: [
    "Describe how common mental health conditions are among adolescents, what raises and lowers risk, and what signs in children and teens call for attention.",
    "Explain how parents, schools, and clinicians fit together in helping a child, and where a worker's role stops.",
    "Describe the role of families and caregivers in recovery, and involve them only as the person wishes and the rules allow.",
    "Describe mental health conditions among older adults, including isolation, loneliness, abuse, and underrecognition.",
    "Name the ways a worker can reduce isolation and support older adults and their carers.",
    "Know when a situation calls for your supervisor, a clinician, or a mandated report.",
  ],
  minutes: 120,
  prerequisites: "None. Understanding Mental Health Conditions and Suicide Prevention, Safety, and Crisis Planning are helpful to take first.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management who work with children, teenagers, families, or older adults.",
  freshness:
    "The facts in this course were read on international and federal health pages on November 10, 2026. Some figures come from older surveys, and the lessons say which. Rules for working with minors and for reporting abuse are set by law and by your program, so check them before you act.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhl-l1',
      title: 'Children and teenagers',
      summary: 'How common conditions are, what raises risk, what signs call for attention, and how parents, schools, and clinicians fit together.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Most mental health conditions begin before adulthood, and many adults say they wish they had been helped sooner. A child who is struggling cannot usually find a clinic or ask for help alone. Adults notice, or they do not. A worker who knows what to look for, and who knows how to bring in the right adults, can change a young person's path.",
        ] },
        { kind: 'concept', title: 'How common', text: [
          "The World Health Organization reports that globally one in seven 10 to 19-year-olds, 14.3 percent, experiences a mental health condition, accounting for 15 percent of the global burden of disease in this age group, and that these conditions remain largely unrecognized and untreated. It reports that depression, anxiety, and behavioral disorders are among the leading causes of illness and disability among adolescents, and that suicide is the third leading cause of death among 15 to 29-year-olds.",
          "It gives rates by condition. Anxiety disorders are the most prevalent, estimated at 4.1 percent of 10 to 14-year-olds and 5.3 percent of 15 to 19-year-olds. Depression is estimated at 1.3 percent of 10 to 14-year-olds and 3.4 percent of 15 to 19-year-olds. ADHD occurs among 2.7 percent of 10 to 14-year-olds and 2.2 percent of 15 to 19-year-olds, and conduct disorder among 3.3 percent and 1.8 percent. Eating disorders commonly emerge during adolescence and young adulthood. Conditions with psychosis most often emerge in late adolescence or early adulthood.",
          "NIMH's statistics page gives a higher figure for a different measure. It reports that, based on a national survey of 13 to 18-year-olds, an estimated 49.5 percent had any mental disorder at some point in their lifetime, and that of those, 22.2 percent had severe impairment or distress. Read the label. That survey was conducted from 2001 to 2004, it measures a lifetime and not a single year, and it used the diagnostic criteria of that time. The two sources measure different things, and neither is a count of how many young people need help today. Quote the source and year.",
        ] },
        { kind: 'concept', title: 'What raises and lowers risk', text: [
          "The WHO describes adolescence as a unique and formative time. Physical, emotional, and social changes, including exposure to poverty, abuse, or violence, can make adolescents vulnerable. It says the more risk factors an adolescent is exposed to, the greater the potential impact on mental health. It names factors that contribute to stress: exposure to adversity, pressure to conform with peers, and exploration of identity. It names the quality of home life and relationships with peers as important determinants, and it names violence, especially sexual violence and bullying, harsh parenting, and severe socioeconomic problems as recognized risks.",
          "It says some adolescents are at greater risk because of their living conditions, stigma, discrimination, exclusion, or lack of access to services. It lists adolescents living in humanitarian and fragile settings, those with chronic illness, autism, intellectual disability, or other neurological conditions, pregnant adolescents and adolescent parents, orphans, and adolescents from minority ethnic or sexual backgrounds or other discriminated groups.",
          "On the protective side, the WHO says adolescence is a crucial period for developing habits important for mental well-being, such as healthy sleep, regular exercise, coping and problem-solving skills, interpersonal skills, and managing emotions. It says protective and supportive environments in the family, at school, and in the community are important. Its recommendations for prevention include strengthening the capacity to regulate emotions, building resilience, and promoting supportive social environments and networks.",
          "These risk and protective factors are the same ones you studied under social determinants and trauma. A young person's mental health is shaped by their home, school, and neighborhood as much as by anything inside them.",
        ] },
        { kind: 'concept', title: 'Signs that call for attention', text: [
          "NIMH's publication on children and mental health begins with a reassurance. All children are sad, anxious, irritable, or aggressive at times, and many find it hard to sit still or pay attention. In most cases these are typical developmental phases, though such behaviors may also indicate a more serious problem. It advises considering help if a child's behavior or emotions last for weeks or longer, cause distress for the child or family, or interfere with functioning at school, at home, or with friends. It says that if a child's behavior is unsafe, or if a child talks about wanting to hurt themselves or someone else, to seek help immediately.",
          "It lists signs, divided into younger and older children. Examples for younger children: frequent tantrums or irritability much of the time, often seeming fearful or worried, frequent stomachaches or headaches with no known medical cause, being in constant motion and unable to sit quietly, sleeping too much or too little, frequent nightmares, not being interested in playing with other children, struggling academically or a recent decline in grades, and repeating actions or checking things many times out of fear that something bad may happen. For older children and teens: losing interest in things they used to enjoy, low energy, sleeping too much or too little, periods of highly elevated energy requiring much less sleep, spending more and more time alone, dieting or exercising excessively or fearing weight gain, self-harm such as cutting or burning, smoking, drinking, or using drugs, risky or destructive behavior, thoughts of suicide, and saying that someone is trying to control their mind or hearing things others cannot.",
          "NIMH's depression fact sheet adds that in children depression may look like anxiety or crankiness, pretending to be sick, refusing to go to school, clinging to a parent, or worry that a parent may die, and that older children and teens may get into trouble at school, sulk, or be easily frustrated. The WHO notes that depression and anxiety share symptoms, including rapid and unexpected changes in mood, and can profoundly affect school attendance and schoolwork.",
          "Compare this with the signs of suicide risk in the earlier course. Self-harm, thoughts of suicide, and talking about wanting to die need an immediate response. Call or text 988, or call 911 in a life-threatening situation.",
        ] },
        { kind: 'concept', title: 'How the adults around a child fit together', text: [
          "NIMH advises parents who are concerned to start by talking with others who frequently interact with the child, such as the teacher, and then with the child's pediatrician or health care provider, who can refer to a mental health professional with experience evaluating and treating children. It says a comprehensive evaluation usually includes a parent interview about developmental history, temperament, relationships, medical history, and prior treatment, information from the child's school, and, if needed, an interview and observation of the child.",
          "It describes treatment options: psychotherapy, which for children often involves parents, teaches the child skills to practice at home or school, and tracks progress over time. Medications, depending on the diagnosis, often together with psychotherapy. Family counseling. And support for parents, such as individual or group sessions with training and the chance to talk with other parents, including coaching on working with schools to get classroom accommodations. It says children who have behavioral or emotional challenges that interfere with school may benefit from accommodations under laws that prevent discrimination against children with disabilities, and that a first step may be to ask the school whether an individualized education program is appropriate.",
          "The WHO says that meeting the needs of adolescents with mental health conditions means avoiding institutionalization and over-medicalization, prioritizing non-pharmacological approaches, and respecting children's rights.",
        ] },
        { kind: 'concept', title: 'Your role with a minor', text: [
          "Practice guidance for this course. A child's parents or guardians are usually the people who consent to services, and your program has rules about working with minors, about consent, and about what you can discuss with whom. Learn them before you work with anyone under 18. When a young person talks to you, listen without judgment and take what they say seriously. Tell them honestly what you can keep private and what you cannot. If a child or teen tells you about abuse, neglect, or a risk to their safety or someone else's, you are likely a mandated reporter. The Professional Conduct course covers this. Follow your program's procedure the same day.",
          "Help parents find the next step. Offer to go with a parent to the pediatrician or school meeting. Help them write down what they have noticed and for how long, as NIMH suggests describing behavior to the provider. Do not diagnose a child, and do not tell a parent what is wrong. Never advise on a child's medication.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Adolescent', plain: "A young person between the ages of 10 and 19, in the World Health Organization's usage." },
          { term: 'Developmental phase', plain: "A typical stage in growing up that may include moods and behaviors that look worrying but pass." },
          { term: 'Accommodation', plain: "A change at school that helps a child with a disability or condition take part, such as extra time on tests." },
          { term: 'Individualized education program', plain: "A school plan that describes supports for a child with a disability." },
          { term: 'Mandated reporter', plain: "A person who is required by law to report suspected abuse or neglect." },
        ] },
        { kind: 'myths', items: [
          { myth: "Teenagers are just moody. It's a phase.", reality: "Many behaviors are typical, and NIMH says to consider help if behavior or emotions last for weeks or longer, cause distress, or interfere with functioning." },
          { myth: "Children do not get depression or anxiety.", reality: "The WHO reports that anxiety and depression are among the most common conditions in adolescents, and NIMH lists anxiety, depression, ADHD, eating disorders, and PTSD among conditions that can begin in childhood." },
          { myth: "Asking a teenager about suicide will give them the idea.", reality: "NIMH reports that studies show asking does not cause or increase suicidal thoughts. Ask in plain words and follow your program's procedure." },
          { myth: "A child with a mental health problem needs medication.", reality: "NIMH lists psychotherapy first among the options, often with parent involvement, and the WHO urges prioritizing non-pharmacological approaches. Medication is a decision for the family and clinician." },
        ] },
        { kind: 'case', title: 'A note from school', scenario: true, text: [
          "A mother tells a worker that her 12-year-old has stopped wanting to go to school. He complains of stomachaches, no doctor has found a cause, and his grades are slipping. She says he used to love soccer. The worker does not say he is depressed. She says, you have noticed this for a few weeks and it is worrying you. She asks whether the school has said anything. She suggests that the pediatrician is a good first stop and that the teacher may have noticed things too. She offers to help the mother write down what she has seen, how long, and what changed, and to go with her to the visit if she would like. She tells her about 988 and says that if her son ever says he wants to hurt himself, she should call right away. She does not talk to the boy without his mother's permission.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhl-q1',
          q: "According to NIMH, when should a parent consider seeking help for a child's behavior or emotions?",
          options: [
            "Only when the child has been in trouble at school",
            "If the behavior or emotions last for weeks or longer, cause distress to the child or family, or interfere with functioning at school, at home, or with friends",
            "Only when a teacher says so",
            "Never, because it is a phase",
          ],
          answer: 1,
          rationale: "NIMH advises considering help if behavior or emotions last for weeks or longer, cause distress, or interfere with functioning, and to seek help immediately if the behavior is unsafe or the child talks about hurting themselves or someone else.",
          distractors: "The other answers ignore the criteria NIMH gives.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhl-q2',
          q: "A 15-year-old you work with tells you someone at home is hurting them. What is the best response?",
          options: [
            "Promise to keep it secret",
            "Tell them to work it out with their family",
            "Listen, thank them for telling you, be honest that you may have to tell others to keep them safe, and follow your program's procedure the same day, since you are likely a mandated reporter",
            "Wait to see if it happens again",
          ],
          answer: 2,
          rationale: "A worker listens, is honest about confidentiality limits, and follows the procedure for reporting. The Professional Conduct course covers when a report is required.",
          distractors: "The other answers promise secrecy that cannot be kept or leave the young person unprotected.",
        } },
        { kind: 'reflect', title: 'Your own view', prompts: [
          "What signs have you noticed in children or teens in your work that you might have explained away?",
          "What are your program's rules for working with a minor, and what do you still need to ask?",
        ] },
        { kind: 'takeaways', items: [
          "About one in seven adolescents worldwide has a mental health condition, and most go unrecognized. Home, school, and neighborhood shape risk.",
          "Consider help when behavior or emotions last for weeks, cause distress, or interfere with life. Unsafe behavior or talk of self-harm needs help right away.",
          "Parents, schools, pediatricians, and clinicians work together. Learn your program's rules for minors and for reporting.",
        ] },
        ev([
          "World Health Organization. Adolescent mental health (fact sheet, read November 10, 2026). The prevalence figures, determinants, groups at greater risk, and the principles for treatment.",
          "National Institute of Mental Health. Children and Mental Health: Is This Just a Stage? The signs, the evaluation, and the treatments. Read in the sections quoted.",
          "National Institute of Mental Health. Mental Illness statistics page. The adolescent figures, from a survey conducted from 2001 to 2004, and the lifetime measure.",
          "National Institute of Mental Health. Depression fact sheet. The variation across ages.",
          "The guidance on working with minors and parents is practice guidance written for this course. Your program's rules and the law govern.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhl-l2',
      title: 'Families and caregivers',
      summary: 'The role of families in recovery, the strain on caregivers, and how to involve families with the person\'s permission.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Behind most people you serve is a family, in whatever form that takes. Parents, partners, children, siblings, grandparents, chosen family, neighbors. They are often the first to notice, the ones who call, and the ones who carry the weight. They can be a source of strength, and sometimes of conflict or harm. Knowing how to work with them respectfully is part of the job.",
        ] },
        { kind: 'concept', title: 'Families in recovery', text: [
          "SAMHSA's recovery principles state that an important factor in recovery is the presence and involvement of people who believe in the person's ability to recover, who offer hope, support, and encouragement, and who also suggest strategies and resources for change. It lists family members among them. It says recovery involves individual, family, and community strengths and responsibility, and that families and significant others have responsibilities to support their loved ones, especially for children and youth in recovery.",
          "The same document says that peer support for families is very important for children with behavioral health problems and can play a supportive role for youth in recovery, and that the role of peers for children and youth may be slightly different than for adults. It notes that for children, who may not have the legal or developmental capacity to set their own course, recovery pathways can be enabled by creating a supportive environment. SAMHSA's peer competencies refer to family peer support workers, who share their experiences of self-care and of supporting a family member who is living with a behavioral health condition.",
          "NIMH's guidance on children describes support for parents as part of treatment, including training and the opportunity to talk with other parents. Its schizophrenia fact sheet describes family education programs that help family and friends learn about symptoms and treatment and cope with their own distress.",
        ] },
        { kind: 'concept', title: 'The strain on families', text: [
          "SAMHSA's protocol on co-occurring disorders notes that in some cultures the stigma surrounding substance use or mental disorders is so great that the client, and even the entire family, may be ostracized by the community. The NIMH PTSD page notes that learning that a relative or close friend experienced trauma can cause PTSD. The WHO notes that many older adults take on caring responsibilities for spouses with chronic conditions, such as dementia, which can be overwhelming and affect their own mental health.",
          "The National Institute on Aging's caregiving page says millions of Americans take care of a friend or family member with a serious health condition, and that being a caregiver can be a labor of love and can also be stressful, and it offers resources on becoming an effective caregiver while also taking care of yourself. It includes resources for grandfamilies and kinship families caring for young relatives. Only the landing page of this resource was read for this course.",
          "What this means for your work is that families need support too. A parent who is exhausted, a spouse who is afraid, and a grandparent raising a grandchild are doing hard work. Ask how they are. Offer information about support groups for families and about respite and caregiver services your program knows of. Do not assume a family member is the problem or is the answer.",
        ] },
        { kind: 'concept', title: 'Involving family, with permission', text: [
          "The peer worker competencies list coordinating efforts with peers' family members and other natural supports. The IPS Employment Center's presentation, in describing employment support, says to offer to collaborate with families as the person identifies, to hold family meetings with the client to discuss good job matches or supports, and not to discuss clinical issues, and to avoid putting stress on the family. SAMHSA's principle that recovery is person-driven says people should be supported in speaking for themselves.",
          "Together these give a clear rule of practice. Ask the person before you involve their family. Ask who they consider family. Ask what they want the family to know, and what they do not. Get their permission, and follow your program's consent and privacy rules, before sharing anything. This is a point where cultural humility matters. Some families expect to be involved in decisions, and some people want their privacy from family. Ask, and respect what you hear.",
          "For a minor, the rules differ, and parents or guardians usually have a role. Your program tells you how that works, and how a young person's own wishes are heard.",
          "When a family member calls you with worries about someone, you can listen. You can say you are not able to confirm whether you work with a person unless you have their permission, and still offer general information and resources. This is practice guidance written for this course. Your program's confidentiality policy governs.",
        ] },
        { kind: 'concept', title: 'When families are not safe', text: [
          "Not every family is a source of support. NIMH lists exposure to family violence, including physical or sexual abuse, as a risk factor for suicide. The WHO names violence, harsh parenting, and abuse among risks for adolescents, and it reports that abuse of older adults is often perpetrated by their own carers. If a person tells you a family member is hurting them, or you see signs of it, safety comes first. Follow your program's procedure, and the rules on reporting. Do not confront a family member alone. Do not promise confidentiality you cannot keep.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Family peer support', plain: "Support from someone who has experience of caring for a family member with a behavioral health condition." },
          { term: 'Natural supports', plain: "Family, friends, and community members who support a person outside of paid services." },
          { term: 'Caregiver', plain: "A person who cares for a family member or friend with a health condition." },
          { term: 'Kinship family', plain: "A family in which relatives other than parents, such as grandparents, raise a child." },
          { term: 'Release of information', plain: "A person's written permission for you to share specified information with specified people." },
        ] },
        { kind: 'myths', items: [
          { myth: "Families should always be involved in an adult's care.", reality: "The competencies and the IPS principles say to involve families as the person identifies. Ask first." },
          { myth: "Families cause mental illness.", reality: "NIMH describes a mix of genetic, biological, environmental, and psychological factors. Families can be a source of support, stress, or harm, and most are doing their best." },
          { myth: "Caregivers are fine as long as the patient is okay.", reality: "NIA and WHO describe the stress of caregiving, and the WHO describes carer support as a way to protect both carer and the person cared for." },
          { myth: "A family member who calls is entitled to know everything.", reality: "Confidentiality rules apply. You may listen, and you may not share without permission." },
        ] },
        { kind: 'case', title: 'A call from a sister', scenario: true, text: [
          "A woman calls a worker and says her brother has stopped answering the phone, and she is afraid. She asks whether he has been coming to the program. The worker says, I can hear how worried you are. I am not able to say whether I work with someone without their permission, but I can tell you what I can do. I can listen, I can give you the 988 number in case you ever fear for his safety, and I can tell you about a family support group. If you would like to share your phone number, I can pass on a message that you called and he can decide what to do. The woman cries a little and says thank you. The worker writes down the call and tells her supervisor. She has not confirmed anything and she has not turned the woman away.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhl-q3',
          q: "An adult you support is struggling. Their sister wants you to talk with the family about it. What is the best first step?",
          options: [
            "Call the whole family together",
            "Share everything with the sister, since she is worried",
            "Ask the person who they consider family, what they want shared, and get their permission before involving anyone",
            "Refuse to speak with any family member",
          ],
          answer: 2,
          rationale: "The peer competencies and the IPS principles describe involving families as the person identifies, and confidentiality rules require permission before sharing.",
          distractors: "The other answers either share without permission or shut the family out.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhl-q4',
          q: "According to the WHO and NIA, which of these is true about caregivers?",
          options: [
            "Caregiving is always rewarding and never stressful",
            "Caregiving can be a labor of love and can also be stressful and overwhelming, so caregivers need support too",
            "Only professionals experience caregiving stress",
            "Caregivers should be ignored in planning",
          ],
          answer: 1,
          rationale: "NIA says caregiving can be both a labor of love and stressful, and the WHO describes caring for a spouse with a chronic illness as potentially overwhelming and affecting the carer's own mental health.",
          distractors: "The other answers deny caregiver strain.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "How do you ask a person who they consider family?",
          "What support do you know of in your area for parents and other caregivers?",
        ] },
        { kind: 'takeaways', items: [
          "Families can be a source of hope and support, and they are under strain too. Support for families is part of recovery work.",
          "Involve family as the person identifies, with permission. Keep confidentiality.",
          "If a family is not safe, put safety first and follow your program's procedure and reporting rules.",
        ] },
        ev([
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The principles on relationships and on strengths and responsibility, and the statements about children, youth, and families.",
          "SAMHSA. Core Competencies for Peer Workers in Behavioral Health Services. Family peer support and coordination with family members and natural supports.",
          "IPS Employment Center. Individual Placement and Support Practice Principles (January 28, 2026). Involving families as the person identifies.",
          "National Institute on Aging. Caregiving (landing page only). The resources listed.",
          "World Health Organization. Mental health of older adults (fact sheet). The strain on carers and the statements about abuse.",
          "National Institute of Mental Health. Children and Mental Health. Support for parents. Frequently Asked Questions About Suicide. Family violence as a risk factor.",
          "The guidance on involving family and on calls from family members is practice guidance written for this course.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-mhl-l3',
      title: 'Older adults',
      summary: 'Common conditions, isolation and loneliness, abuse, ageism, and what a worker can do.',
      minutes: 30,
      blocks: [
        { kind: 'why', text: [
          "Older adults are often missing from conversations about mental health. Depression is mistaken for normal aging. Loneliness is accepted as inevitable. Abuse stays hidden. A worker who visits an older person at home, or who sits at a table at a senior center, may be the only one who notices.",
        ] },
        { kind: 'concept', title: 'How common, and who is at risk', text: [
          "The World Health Organization reports that in 2023 an estimated 14.75 percent of adults aged 70 and over lived with a mental disorder, most commonly anxiety or depression. Mental disorders account for 6.8 percent of the total years lived with disability among those 70 and older. Around one sixth of deaths from suicide, 16.6 percent, are among people aged 70 or over. It says mental health conditions among older people are often underrecognized and undertreated, and that stigma can make people reluctant to seek help.",
          "It says that at older ages mental health is shaped by physical and social environments and by the cumulative effects of earlier life experiences and stressors specific to aging, including bereavement, reduced income or sense of purpose at retirement, and decline in functional ability. It notes that older adults are often subject to ageism, which can seriously affect mental health. Many older adults have chronic conditions, pain, or dementia, and as people age they are more likely to experience several conditions at the same time. Some are at greater risk because of harsh living conditions, poor physical health, or lack of access to quality support.",
          "NIMH's depression fact sheet adds that older adults often feel sadness, grief, or less obvious symptoms, may report a lack of emotions rather than a depressed mood, are more likely to have other medical conditions or pain that can cause or contribute to depression, and may have prominent memory and thinking problems in severe cases. In other words, depression in an older person may not look like sadness, and may be mistaken for dementia or normal aging. Do not assume.",
        ] },
        { kind: 'concept', title: 'Isolation, loneliness, and abuse', text: [
          "The WHO says that social isolation and loneliness, which affect about a quarter of older people, are key risk factors for mental health conditions in later life. It says that abuse, including physical, verbal, psychological, sexual, and financial abuse and neglect, affects one in six older adults and is often perpetrated by their own carers, and that abuse can lead to depression and anxiety.",
          "These are not distant facts. A worker who visits a home may see a person who has not spoken to anyone in days, a person whose caregiver speaks for them, a person who is afraid to ask for help, or a person whose money is being taken. Notice, ask gently and privately, and follow your program's procedure. Reports of abuse of older or dependent adults are required in many circumstances. The Professional Conduct course covers when a report is required, and your supervisor will know what applies. Do not confront a suspected abuser, and do not promise confidentiality.",
        ] },
        { kind: 'concept', title: 'What helps', text: [
          "The WHO describes mental health promotion and prevention for older adults as supporting healthy aging, creating physical and social environments that support well-being and let people do what is important to them even as capacity declines. Its key strategies include reducing financial insecurity and income inequality, ensuring safe and accessible housing, public buildings, and transport, providing social support for older adults and their carers, supporting healthy behaviors, and targeting programs at those who live alone, live in remote areas, or have chronic conditions.",
          "It says social connection is particularly important, and that meaningful social activities can significantly improve mental health, life satisfaction, and quality of life and can reduce depressive symptoms. It lists befriending initiatives, community and support groups, social skills training, creative arts groups, leisure and education services, and volunteering programs. It lists protection from ageism and abuse through anti-discrimination policies, education, and intergenerational activities, and carer support such as respite care, advice, education, financial support, and psychological interventions.",
          "On care, the WHO says prompt recognition and treatment is essential, following standards for integrated, community-based care that addresses both long-term care needs and declines in capacity, together with education and support for carers. It says a mix of mental health interventions is usually recommended along with other supports for health, personal care, and social needs.",
          "Much of that is the ordinary work of a community worker. Help someone get to the senior center. Connect them with a volunteer visitor. Help with transportation, housing, and benefits. Ask what they used to enjoy. Help them find a role as a volunteer, a grandparent, a mentor, or a member of a group. Meaningful roles are part of recovery, as you saw in the first course.",
        ] },
        { kind: 'concept', title: 'Dementia, grief, and suicide risk', text: [
          "The WHO notes that dementia is a common concern in later life. It affects mental health, for example by sparking symptoms of psychosis and depression, and requires access to quality mental health care. A person with memory loss needs patience, simple instructions, and often a family member or caregiver to be involved with their permission or their legal representative's.",
          "Grief and bereavement are named risk factors. Do not tell a grieving older person to move on. Listen. Ask about their loss. The suicide rate figure above is a reminder to ask directly if you are worried. The earlier course on suicide prevention applies. Older adults may not use the language of suicide, and may say they are tired of living or a burden.",
        ] },
        { kind: 'concept', title: 'Respecting the person', text: [
          "Ageism, assuming that old means frail, confused, or unproductive, can seriously affect mental health. Speak to the older person, not around them. Do not use baby talk. Ask what they prefer. Offer choices. Adjust for hearing, vision, and mobility, for example by sitting where they can see your face and speaking clearly without shouting. Allow time. Honor their right to make their own decisions, including ones you disagree with, unless there is a safety concern that your program has procedures for. SAMHSA's principle that recovery is person-driven does not stop at any age.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Ageism', plain: "Stereotyping or discriminating against people because of their age." },
          { term: 'Isolation', plain: "Having few social contacts. Loneliness is the feeling of being alone." },
          { term: 'Abuse of older adults', plain: "Physical, verbal, psychological, sexual, or financial abuse, or neglect." },
          { term: 'Respite care', plain: "Short-term care that gives a caregiver a break." },
          { term: 'Bereavement', plain: "The loss of someone close and the grief that follows." },
        ] },
        { kind: 'myths', items: [
          { myth: "Depression is a normal part of getting old.", reality: "The WHO describes depression and anxiety in older adults as underrecognized and undertreated. NIMH says symptoms may be less obvious, but they are treatable." },
          { myth: "Older people do not die by suicide.", reality: "The WHO reports that around a sixth of suicide deaths globally are among people aged 70 or over." },
          { myth: "Abuse is rare, and strangers do it.", reality: "The WHO reports that one in six older adults experiences abuse, often by their own carers." },
          { myth: "Older people do not want to be involved in anything.", reality: "The WHO reports that meaningful social activities improve mental health and quality of life, and many older adults volunteer and work." },
        ] },
        { kind: 'case', title: 'The quiet apartment', scenario: true, text: [
          "A worker visits a man in his late seventies whose wife died last spring. His apartment is tidy and very quiet. He says he is fine, that he does not go out much, and that the days are long. He says his nephew handles his checkbook. The worker does not tell him to cheer up. She asks him about his wife. He talks for twenty minutes. She asks what he used to enjoy, and he mentions chess. She says there is a chess table at the senior center on Thursdays and asks if he would like to go once with her. She notices that he seems unsure about his money and that he glances at the phone when she asks about his nephew. She writes down what she saw and heard without conclusions, tells her supervisor, and follows the program's procedure. She does not confront the nephew. She asks the man whether anyone has told him he can talk to someone about his money, and offers the contact for a legal aid or elder services office.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-mhl-q5',
          q: "According to the WHO, which is a key risk factor for mental health conditions in later life?",
          options: [
            "Owning a home",
            "Social isolation and loneliness, which affect about a quarter of older people",
            "Volunteering",
            "Having grandchildren",
          ],
          answer: 1,
          rationale: "The WHO identifies social isolation and loneliness as key risk factors, affecting about a quarter of older people. Meaningful social activities and volunteering are protective.",
          distractors: "The other answers are not described as risk factors.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-mhl-q6',
          q: "During a home visit you notice signs that an older person may be being financially exploited by a relative. What is the best response?",
          options: [
            "Confront the relative",
            "Ignore it, because it is a family matter",
            "Ask the person gently and privately, write down factually what you saw and heard, tell your supervisor, and follow your program's procedure and reporting rules",
            "Promise the person you will tell no one",
          ],
          answer: 2,
          rationale: "The WHO reports that abuse is common and often committed by carers. A worker notices, asks privately, documents factually, and follows the program's procedure and reporting rules, without confronting the suspected abuser or promising confidentiality.",
          distractors: "The other answers risk the person's safety or promise secrecy that cannot be kept.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "What are older adults in your community doing to stay connected, and who is left out?",
          "What would you do if you suspected an older person was being harmed? Do you know the procedure?",
        ] },
        { kind: 'takeaways', items: [
          "Mental health conditions in older adults are common, underrecognized, and treatable. Depression may not look like sadness.",
          "Isolation, loneliness, bereavement, and abuse are major risks. Social connection and meaningful roles help.",
          "Notice, ask privately, document factually, tell your supervisor, and follow reporting rules. Respect the person's choices.",
        ] },
        ev([
          "World Health Organization. Mental health of older adults (fact sheet, read November 10, 2026). The figures, risk factors, abuse, promotion and prevention, and care. The figures are for 2023 and for people aged 70 and over.",
          "National Institute of Mental Health. Depression fact sheet. Depression in older adults.",
          "SAMHSA. SAMHSA's Working Definition of Recovery (2012). The person-driven principle.",
          "The suggestions about visiting, respecting older adults, and responding to suspected abuse are practice guidance written for this course. Your program's procedure and the law govern.",
          "If you or someone you know needs support now, call or text 988. In an emergency, call 911.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-mhl-practice',
    title: 'Your children, families, and older adults practice file',
    minutes: 30,
    purpose: 'Four short pieces that you keep: what you will say to a worried parent, how you will involve a family with permission, how you will connect an older person to others, and your procedure for concerns about safety.',
    fields: [
      { id: 'parent', label: 'A worried parent', help: 'Write what you would say to a parent who says their child has changed. Include what you would ask, what you would not say, who you would suggest they speak with first, and how you would offer to help them prepare.', multiline: true },
      { id: 'family', label: 'Involving family', help: 'Write the questions you would ask an adult about their family, how you would ask permission, and what you would say to a relative who calls you with worries.', multiline: true },
      { id: 'older', label: 'Connecting an older adult', help: 'Choose an invented older person. Write three questions you would ask, two activities or groups you would offer, and how you would respect their choices.', multiline: true },
      { id: 'safety', label: 'Safety and reporting', help: 'Write what you would do if a young person or an older person told you they were being hurt. Include who you would call in your program, what you would write down, what you would say to the person about confidentiality, and what you would not do.', multiline: true },
    ],
    reference: { title: 'Support', items: [
      '988, call or text, for support in a crisis',
      '911 for an emergency',
      'Your supervisor, for anything that is beyond your role or that you are unsure how to handle',
    ] },
  },
  furtherLearning: [
    { name: 'World Health Organization: Adolescent mental health (fact sheet)', use: 'Prevalence, determinants, and prevention for adolescents.', url: 'https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health' },
    { name: 'World Health Organization: Mental health of older adults (fact sheet)', use: 'Prevalence, risk factors, abuse, and promotion for older adults.', url: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-of-older-adults' },
    { name: 'National Institute of Mental Health: Children and Mental Health, Is This Just a Stage?', use: 'Signs, evaluation, and treatment in children.', url: 'https://www.nimh.nih.gov/health/publications/children-and-mental-health' },
    { name: 'National Institute of Mental Health: Mental Illness statistics', use: 'U.S. figures, with the year and the measure noted.', url: 'https://www.nimh.nih.gov/health/statistics/mental-illness' },
    { name: 'National Institute on Aging: Caregiving', use: 'Resources for caregivers, including grandfamilies and kinship families.', url: 'https://www.nia.nih.gov/health/caregiving' },
    { name: 'SAMHSA: SAMHSA\'s Working Definition of Recovery, 10 Guiding Principles of Recovery', use: 'The principles on families and on recovery for children and youth.', url: 'https://store.samhsa.gov/sites/default/files/d7/priv/pep12-recdef.pdf' },
    { name: 'SAMHSA: Core Competencies for Peer Workers in Behavioral Health Services', use: 'Family peer support and coordination with natural supports.', url: 'https://www.samhsa.gov/sites/default/files/core-competencies-peer-workers-behavioral-health-services.pdf' },
  ],
};
