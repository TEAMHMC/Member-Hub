// Community Mental Health Worker Pathway, Foundations course 3: Social Determinants and Health Equity.
//
// This is the certificate's own course 3 (id chw_sdoh_equity, 3 hours). The id matches the
// certificate on purpose: the Academy posts every completed course to the portal, and the portal
// credits a learner only for ids it recognizes.
//
// Every statement of fact in this course was taken from a source that was opened and read on
// November 10, 2026, and each lesson ends with the sources it rests on. The course uses the
// definitions the sources themselves give, names where a source is a summary or a news release,
// and does not state statistics about Los Angeles that no source read for it provides.
//
// The course is written to teach a community health worker how to see, name, and respond to the
// conditions that shape health, with respect for the people whose lives it describes. It does not
// assign blame to individuals or to groups.

import type { Course } from './catalog';
import type { Block } from './blocks';

const ev = (items: string[]): Block => ({ kind: 'list', title: 'Evidence and standards behind this lesson', items });

export const CHW_SDOH_EQUITY: Course = {
  id: 'chw_sdoh_equity',
  num: 3,
  standard: 'v2',
  readingLevel: 'adult',
  delivery: 'self-paced',
  title: 'Social Determinants and Health Equity',
  promise:
    "Explain how housing, income, food, neighborhood, and discrimination shape health; use the terms disparity, inequity, and equity the way the field defines them; read a community's conditions with a public tool; ask about social needs with respect; and turn what you see into action.",
  about: [
    "This course covers why two people with the same illness can have very different chances of getting well, and what a community health worker can do about it. It teaches the language of social determinants of health and health equity, the evidence behind it, a California tool for reading neighborhood conditions, and a simple way to ask about and respond to social needs.",
    "It rests on the federal Healthy People 2030 definition of social determinants of health, a peer-reviewed article that defines health disparities and health equity, the World Health Organization's Commission on Social Determinants of Health, the National Academies report Communities in Action, the federal Accountable Health Communities model, and a peer-reviewed description of the California Healthy Places Index.",
    "It is Foundations course 3 of HMC's community health worker certificate. It does not teach you to fix housing or income for anyone. It teaches you to see clearly, speak accurately, and connect people to what exists.",
  ],
  objectives: [
    "Define social determinants of health and name the five domains used by Healthy People 2030.",
    "Explain the difference between a health difference, a health disparity, a health inequity, and health equity.",
    "Describe how structural factors and the unequal distribution of power and resources produce health inequities, without blaming individuals.",
    "Look up a community's conditions in the California Healthy Places Index and describe what the score does and does not tell you.",
    "Ask about health-related social needs with respect, make a referral, and close the loop.",
    "Name three kinds of action, from one person to the system, and say where your own role fits.",
  ],
  minutes: 180,
  prerequisites: "None. Take The Community Health Worker Role, History, and Field first if you can.",
  whoFor:
    "People working or training in community health, peer support, outreach, or case management, including people who have lived the conditions this course describes.",
  freshness:
    "The definitions in this course were read in their published form on November 10, 2026. Federal websites are being revised and some pages carry notices about restored earlier versions. Where a definition matters to a grant, a report, or a policy, check the current text of the source before you quote it.",
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sdoh-l1',
      title: 'What shapes health',
      summary: 'The definition of social determinants of health, its five domains, and why care alone is not the whole story.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "A clinic can treat a person's asthma and send them home to a building with mold. A doctor can tell someone to eat more vegetables and the nearest grocery store is a bus ride away. A nurse can explain how to manage blood pressure to someone who just lost their job and is skipping meals. In each case the care was good and the person is still not well.",
          "Social determinants of health is the name for the conditions that sit behind those stories. If you know the term and what it covers, you can explain to a skeptical person why your work, which often looks like helping with a form or a bus pass, is health work.",
        ] },
        { kind: 'concept', title: 'The definition', text: [
          "The federal Healthy People 2030 initiative defines social determinants of health as the conditions in the environments where people are born, live, learn, work, play, worship, and age that affect a wide range of health, functioning, and quality-of-life outcomes and risks.",
          "Notice what the definition does. It places health in places and conditions, not only in bodies and choices. It lists ordinary settings, a home, a school, a job, a place of worship. And it says these conditions affect risks as well as outcomes, which means they work before anyone is sick.",
          "Healthy People 2030 gives examples. Safe housing, transportation, and neighborhoods. Education, job opportunities, and income. Access to nutritious foods and physical activity opportunities. Discrimination and violence. Polluted air and water. Language and literacy skills.",
        ] },
        { kind: 'concept', title: 'The five domains', text: [
          "Healthy People 2030 groups these conditions into five domains. Economic stability. Education access and quality. Health care access and quality. Neighborhood and built environment. Social and community context.",
          "Economic stability covers income, employment, and the ability to meet basic needs. Education access and quality covers schooling and the skills it builds, including language and literacy. Health care access and quality is the one domain that is about the health system itself. Neighborhood and built environment covers housing, transportation, safety, and the air and water around people. Social and community context covers relationships, community support, and experiences of discrimination.",
          "The use of these domains is that they give you a checklist for listening. When a person says they cannot keep their appointments, you can ask which domain the barrier sits in. A ride is a neighborhood problem. A work schedule is an economic one. A fear of being treated badly is a social and community one. Naming the domain points you to the right resource.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Social determinants of health', plain: "The conditions in the places where people are born, live, learn, work, play, worship, and age that shape health." },
          { term: 'Upstream', plain: "Causes that sit before illness, such as housing, income, and schooling, rather than the care a person gets after they are sick." },
          { term: 'Domain', plain: "One of the five groups the conditions are sorted into." },
          { term: 'Health disparity', plain: "A health difference linked to disadvantage. The next lesson gives the exact definition." },
        ] },
        { kind: 'concept', title: 'Why "just promote healthy choices" is not enough', text: [
          "Healthy People 2030 gives a plain example. People who do not have access to grocery stores with healthy foods are less likely to have good nutrition. That raises their risk of conditions like heart disease, diabetes, and obesity, and even lowers life expectancy compared with people who do have access. It then says that just promoting healthy choices will not eliminate these and other health disparities. Public health organizations and their partners in sectors like education, transportation, and housing need to take action to improve the conditions in people's environments.",
          "The same idea appears in the National Academies report Communities in Action. It states that some aspects of a person's health depend on individual behaviors and choices, and that health is also shaped by community-wide factors. Its committee concluded that social, economic, environmental, and structural factors, and their unequal distribution, matter more than health care alone in shaping health disparities.",
          "This does not mean choices do not matter. It means that choices are made inside conditions. When you meet someone who is not following a plan, the first question is not what is wrong with them. It is what is in the way.",
        ] },
        { kind: 'concept', title: 'Nine determinants, a second list', text: [
          "The National Academies committee names nine determinants of health that drive health inequities in the United States. Income and wealth, housing, health systems and services, employment, education, transportation, social environment, public safety, and physical environment.",
          "You do not need to memorize two lists. Use whichever helps in the moment. The five domains are good for sorting a person's story. The nine determinants are good for naming what a neighborhood might be missing.",
        ] },
        { kind: 'case', title: 'The inhaler on the shelf', scenario: true, text: [
          "A mother named Teresa tells a community health worker that her son's asthma is getting worse. His doctor prescribed an inhaler and she fills it every month. She also mentions, almost in passing, that the apartment has a leak under the sink and a dark patch that comes back after she cleans it. The landlord says he will fix it.",
          "The community health worker does not tell Teresa what to do about the leak. She writes down what she heard, asks whether Teresa is comfortable talking to a tenants' rights group, and brings the question to her supervisor about who in the program handles housing referrals. She also reminds Teresa to tell her son's doctor about the leak, because it is relevant to his care. The inhaler is care. The leak is a determinant. Both belong in the plan.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c3-q1',
          q: "Which of these is a domain of social determinants of health in Healthy People 2030?",
          options: [
            "Genetic risk",
            "Neighborhood and built environment",
            "Personal willpower",
            "Insurance premiums",
          ],
          answer: 1,
          rationale: "The five domains are economic stability, education access and quality, health care access and quality, neighborhood and built environment, and social and community context.",
          distractors: "Genetic risk and willpower are individual factors, and insurance premiums are a detail of coverage, not a domain.",
        } },
        { kind: 'reflect', title: 'Your own conditions', prompts: [
          "Pick one thing that has made it easier or harder for you to stay healthy. Which of the five domains does it belong to?",
          "Think of a client or neighbor who is described as not following the plan. What might be in the way?",
        ] },
        { kind: 'takeaways', items: [
          "Social determinants are the conditions in the places where people live, learn, work, play, worship, and age.",
          "The five domains give you a way to listen, and the conditions matter before anyone is sick.",
          "Choices are made inside conditions. Ask what is in the way.",
        ] },
        ev([
          "Healthy People 2030, Office of Disease Prevention and Health Promotion, U.S. Department of Health and Human Services. Social Determinants of Health. The definition, the five domains, the examples, and the statement that promoting healthy choices alone will not eliminate disparities. The page carries a court-ordered notice that it was restored to its version of January 29, 2025.",
          "National Academies of Sciences, Engineering, and Medicine. Communities in Action: Pathways to Health Equity (2017), report highlights and news release. The statement that community-wide factors shape health, the committee's conclusion about social, economic, environmental, and structural factors, and the nine determinants.",
        ]),
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sdoh-l2',
      title: 'Difference, disparity, inequity, equity',
      summary: 'Four terms people use loosely, and the precise meaning each has in the field.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "These words get used as if they mean the same thing. They do not. If you tell a funder, a supervisor, or a neighbor that a difference is a disparity, you are making a claim about fairness. If you cannot say why, someone will ask, and the work loses credibility.",
          "This lesson gives you the definitions as the field's own sources state them. It also shows why the field insists on being exact.",
        ] },
        { kind: 'concept', title: 'Not every difference is a disparity', text: [
          "A peer-reviewed article by Paula Braveman, a physician and professor at the University of California, San Francisco, argues that the terms health disparity and health equity need explicit definitions. She notes that the term health disparity was coined in the United States around 1990 to mean a specific kind of difference, worse health among socially disadvantaged people, and in particular members of disadvantaged racial and ethnic groups and economically disadvantaged people within any racial or ethnic group.",
          "Her examples of differences that are not health disparities are worse health among the elderly compared with young adults, a higher rate of arm injuries among professional tennis players than in the general population, and, hypothetically, a higher rate of a particular disease among millionaires than among others. They may be real and worth studying. They are not what the field means by disparity, because they are not about disadvantage.",
          "She also says that some health differences are important for a society to address but are not disparities. If the health of an entire population were getting worse over time, or if a serious outbreak hit an affluent community and not others, those would merit attention for other reasons.",
        ] },
        { kind: 'concept', title: 'The definitions', text: [
          "Healthy People 2020 defined a health disparity as a particular type of health difference that is closely linked with economic, social, or environmental disadvantage. Braveman quotes the definition and adds that health disparities adversely affect groups of people who have systematically experienced greater social or economic obstacles to health based on characteristics that include racial or ethnic group, religion, socioeconomic status, gender, age, mental health, cognitive, sensory, or physical disability, sexual orientation or gender identity, geographic location, or other characteristics historically linked to discrimination or exclusion.",
          "She defines economic disadvantage as a lack of material resources and opportunities, such as low income or lack of wealth. Social disadvantage is broader. It includes economic disadvantage and also refers to a person's relative position in a social order that can be stratified by economic resources and by race, ethnicity, religion, gender, sexual orientation, and disability. Environmental disadvantage means residing in a neighborhood where there is concentrated poverty or the social disadvantages that often accompany it.",
          "Health equity, in her words, is the principle underlying a commitment to reduce, and ultimately eliminate, disparities in health and in its determinants, including social determinants. Pursuing health equity means striving for the highest possible standard of health for all people and giving special attention to the needs of those at greatest risk of poor health, based on social conditions.",
        ] },
        { kind: 'concept', title: 'Inequity, in the National Academies definition', text: [
          "The National Academies report Communities in Action defines health equity as the state in which everyone has the chance to attain their full health potential and no one is disadvantaged from achieving this potential because of social position or any other defined circumstance. It defines health inequities as systematic differences in the opportunities groups have to achieve optimal health, leading to unfair and avoidable differences in health outcomes.",
          "The word inequity carries a judgment that the difference is unfair and avoidable. That is why a community health worker should use it carefully and with evidence. When a neighborhood has a much lower life expectancy than the one next to it, and the reasons are conditions people did not choose, the term fits.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Health difference', plain: "Any gap in health between groups. It may or may not be linked to disadvantage." },
          { term: 'Health disparity', plain: "A health difference closely linked with economic, social, or environmental disadvantage." },
          { term: 'Health inequity', plain: "A systematic difference in opportunities to be healthy that leads to unfair and avoidable differences in outcomes." },
          { term: 'Health equity', plain: "Everyone having the chance to reach their full health potential, with no one disadvantaged by social position or other circumstance." },
        ] },
        { kind: 'concept', title: 'Why the field insists on precision', text: [
          "Braveman gives two reasons. First, vague definitions could let resources be directed away from the people the terms were meant to protect. She notes that if the terms remain vague, socially and economically advantaged groups could co-opt them and advocate for resources to address their own health needs.",
          "Second, the definitions rest on evidence and on ethics. She points to a massive body of evidence linking economic and social disadvantage with avoidable illness, disability, suffering, and premature death, to the fact that such disadvantage can be reduced by social policies such as minimum wage laws, progressive taxation, and laws barring discrimination, and to principles from ethics and human rights. Health is needed for functioning in every sphere of life, so the resources needed to be healthy should be distributed according to need and not treated as luxury goods.",
          "For your work this means two things. Use the precise term when you can back it up. And remember that the whole concern is fairness, a fair chance to be healthy.",
        ] },
        { kind: 'myths', items: [
          { myth: "Any difference in health between two groups is a health disparity.", reality: "The field uses disparity for differences linked with disadvantage. A difference between older and younger adults is not a disparity." },
          { myth: "Health equity means everyone gets the same thing.", reality: "The definitions in this lesson describe everyone having a fair chance to reach their full health potential, with special attention to those at greatest risk of poor health." },
          { myth: "A disparity is caused by the choices of the people who have it.", reality: "The definitions tie disparities to economic, social, or environmental disadvantage and describe inequities as unfair and avoidable differences in opportunity." },
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c3-q2',
          q: "According to Braveman, which of these is NOT a health disparity?",
          options: [
            "Worse health among economically disadvantaged people compared with advantaged people",
            "Worse health among older adults compared with young adults",
            "Worse health among members of a group that has faced discrimination",
            "Worse health in a neighborhood of concentrated poverty",
          ],
          answer: 1,
          rationale: "Braveman lists worse health among the elderly compared with young adults as an example of a health difference that is not a health disparity, because it is not linked to disadvantage.",
          distractors: "The other three describe differences linked to economic, social, or environmental disadvantage.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c3-q3',
          q: "In the National Academies definition, what makes a health difference an inequity?",
          options: [
            "It is large",
            "It is systematic and leads to unfair and avoidable differences in outcomes",
            "It appears in more than one county",
            "It is reported in the news",
          ],
          answer: 1,
          rationale: "The report defines health inequities as systematic differences in the opportunities groups have to achieve optimal health, leading to unfair and avoidable differences in health outcomes.",
          distractors: "Size, geography, and news coverage do not make a difference an inequity. The definition turns on fairness and avoidability.",
        } },
        { kind: 'takeaways', items: [
          "A health disparity is a health difference linked with economic, social, or environmental disadvantage.",
          "Health equity means a fair chance for everyone to reach their full health potential, with special attention to those at greatest risk.",
          "Be exact. The terms carry a claim about fairness, and the evidence has to carry it.",
        ] },
        ev([
          "Braveman P, Health disparities and health equity: the issue is justice. Peer-reviewed article, University of California, San Francisco, Center on Social Disparities in Health; available in PubMed Central as PMC3863701. The definitions, the examples of differences that are not disparities, and the reasons for precision.",
          "National Academies of Sciences, Engineering, and Medicine. Communities in Action: Pathways to Health Equity (2017), report highlights. The definitions of health equity and health inequities.",
        ]),
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sdoh-l3',
      title: 'How inequities are produced',
      summary: 'Root causes, structure, and power, and how to describe them without blaming the people who live with them.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "People who hear that some neighborhoods are less healthy often ask, why. The answers they have heard are usually about behavior. The research points somewhere else, and a community health worker who can explain it clearly helps change the story people tell about themselves and each other.",
          "This is also a lesson about tone. You will meet people who have been blamed for their health, by others and by themselves. How you explain the causes can add to that or lift it.",
        ] },
        { kind: 'concept', title: 'Two clusters of root causes', text: [
          "The National Academies committee that wrote Communities in Action organized the root causes of health inequity into two clusters. The first is a set of intrapersonal, interpersonal, institutional, and systemic mechanisms, also called structural inequities, that organize the distribution of power and resources differently across lines of race, gender, class, sexual orientation, gender expression, and other dimensions of identity. The second is the unequal allocation of power and resources, including goods, services, and societal attention, which shows up in unequal social, economic, and environmental conditions. Those conditions are the determinants of health.",
          "The report states that health inequities are the result of more than individual choice or random occurrence. They are the result of the historic and ongoing interplay of inequitable structures, policies, and norms that shape lives. Its news release puts the same point differently, that the burdens of poor health and the benefits of good health are inequitably distributed due to factors that range from poverty and inadequate housing to structural racism and discrimination.",
          "The committee also notes that research shows where one lives is a greater predictor of one's health than individual characteristics or behaviors.",
        ] },
        { kind: 'concept', title: 'The World Health Organization\'s view', text: [
          "The World Health Organization set up the Commission on Social Determinants of Health in March 2005 to support countries and global health partners in addressing the social factors that lead to ill health and health inequities. The Commission delivered its final report in July 2008. Its overarching recommendations were three. Improve daily living conditions. Tackle the inequitable distribution of power, money, and resources. Measure and understand the problem and assess the impact of action.",
          "Read the second recommendation again. The Commission names the distribution of power, money, and resources as something to tackle, alongside daily living conditions. The National Academies report, written about the United States, also puts weight on the unequal allocation of power and resources.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Structural inequity', plain: "Unfair patterns built into institutions, policies, and norms, that organize power and resources differently for different groups." },
          { term: 'Root cause', plain: "The underlying reason a problem exists, as opposed to a symptom or a trigger." },
          { term: 'Place', plain: "Where a person lives. The National Academies report says it predicts health more than individual characteristics or behaviors." },
          { term: 'Distribution of power and resources', plain: "Who has money, goods, services, and a say in decisions, and who does not." },
        ] },
        { kind: 'steps', title: 'A way to explain this without blame', items: [
          { label: 'Start with what people want', text: "Almost everyone wants to be well and to look after their family. Begin there." },
          { label: 'Name the conditions', text: "Describe the housing, income, transportation, or neighborhood in the way. Use the person's own words." },
          { label: 'Show that it is not only them', text: "Say that many people in the same situation face the same thing, and that researchers have found it is tied to conditions and not just to choices." },
          { label: 'Keep the person in charge', text: "Ask what they want to do. Offer options. Avoid telling them how to feel about it." },
          { label: 'Do not overpromise', text: "Say what you can do and what you cannot. Naming a structural cause is not the same as solving it." },
        ] },
        { kind: 'concept', title: 'What this means for how you talk', text: [
          "There are two ways to get this wrong. One is to describe an entire neighborhood by its problems, as if the people in it were the problem. The California Healthy Places Index, which you will meet in the next lesson, was built with what its authors call a positive asset frame for exactly this reason.",
          "The other is to wave away the person's own agency. The National Academies report says community action is a necessary and essential ingredient in promoting health equity, and that communities have the power to take steps. People are not only affected by conditions. They change them.",
          "Hold both. Conditions are unequal and unfair. People are capable and active. Your job sits in the middle, helping a person use what they have and helping the community press for what it needs.",
        ] },
        { kind: 'case', title: 'Two ways to say it', scenario: true, text: [
          "At a health fair, a man named Curtis tells a community health worker that his father died young of diabetes and he is afraid the same thing will happen to him. He says people at his church tell him it is because he does not take care of himself.",
          "The worker says that the research she has read ties the risk of conditions like diabetes partly to things like whether there is a grocery store with healthy food nearby, and that many people in the same situation face the same obstacles. She does not say it is not his responsibility. She asks what he would like to try, offers to help him find the screening table at the fair, and gives him the number for the program she works with. She did not blame him and she did not tell him nothing could be done.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c3-q4',
          q: "Which statement best matches the National Academies report on the causes of health inequities?",
          options: [
            "They result from individual choices alone",
            "They are random and cannot be explained",
            "They result from more than individual choice, including the historic and ongoing interplay of inequitable structures, policies, and norms",
            "They result only from lack of access to health care",
          ],
          answer: 2,
          rationale: "The report says health inequities are the result of more than individual choice or random occurrence, and arise from inequitable structures, policies, and norms that shape lives.",
          distractors: "The first two reject the report's finding. The last treats a single determinant as the whole story, but the report names nine determinants, and health care is only one.",
        } },
        { kind: 'reflect', title: 'Your own explanation', prompts: [
          "Think of an explanation for a health problem that you have heard that blames the person. How would you say it differently?",
          "What is one strength you see in the community you serve that a data table would not show?",
        ] },
        { kind: 'takeaways', items: [
          "Health inequities come from the distribution of power and resources and from structures and policies, not from individual choice alone.",
          "The World Health Organization's Commission and the National Academies reached the same conclusion from different places.",
          "Explain causes without blame, keep the person in charge, and name both unfair conditions and community strength.",
        ] },
        ev([
          "National Academies of Sciences, Engineering, and Medicine. Communities in Action: Pathways to Health Equity (2017), report highlights and news release. The two clusters of root causes, the statement that inequities are more than individual choice or random occurrence, the finding about place, and community action as an essential ingredient.",
          "World Health Organization. Commission on Social Determinants of Health, 2005-2008. Its purpose, the date of the final report, and the three overarching recommendations.",
          "Maizlish N, et al. Healthy Places Index, Public Health Reports, 2019, PMC6598140. The authors' description of a positive asset frame.",
        ]),
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sdoh-l4',
      title: 'Reading a community\'s conditions',
      summary: 'What the California Healthy Places Index is, how its score works, and what it can and cannot tell you.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "You will be asked where services are needed most. You will be asked whether the people you meet are typical of the neighborhood. A funder or a partner will ask for data. And you will want to know what is already strong in the place you work.",
          "California has a public tool built for these questions. It is not a verdict on a place or its people, and this lesson shows how to use it without turning it into one.",
        ] },
        { kind: 'concept', title: 'What the Healthy Places Index is', text: [
          "The California Healthy Places Index, known as the HPI, was developed by the Public Health Alliance of Southern California in partnership with the Virginia Commonwealth University Center on Society and Health. A peer-reviewed article in the journal Public Health Reports describes it as a composite index of community well-being for California built from publicly available census-tract data on place-based factors linked to health.",
          "The article says the index arose from a need identified by state and local health departments and community-based organizations for an index rooted in the social determinants of health and a positive asset-based frame, to support place-based policy making and program targeting. It was designed to be geographically granular, validated against life expectancy at birth, and linked to policy actions.",
          "A census tract is a small geographic area, smaller than a city. The article describes the index as geographically granular, which means a score describes a neighborhood and not a whole city.",
        ] },
        { kind: 'concept', title: 'How the score works', text: [
          "The article reports that the HPI has 25 indicators across eight domains. The domains line up with the social determinants of health and with policy action areas. They are economic resources, education, housing, transportation, clean environment, neighborhood conditions, social resources, and health care access.",
          "The indicators are weighted, and the weights come from how strongly each is associated with life expectancy at the tract level. The article reports that the economy and education domains were highly influential, together making up 50 percent of the total weights. It reports that the overall HPI was strongly associated with life expectancy at birth, with a correlation of 0.58.",
          "The index is shown as a percentile ranking. A higher score means healthier community conditions compared with other tracts in California. It is a ranking of conditions. It is not a prediction of any one person's health, and it is not an estimate of life expectancy itself.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Census tract', plain: "A small geographic area used for local statistics, much smaller than a city." },
          { term: 'Composite index', plain: "A single score built by combining many measures." },
          { term: 'Percentile', plain: "A ranking. A score at the 30th percentile is higher than 30 percent of places." },
          { term: 'Positive asset frame', plain: "Describing a community by its strengths and assets as well as its needs." },
          { term: 'Correlation', plain: "A measure of how strongly two things move together. It does not by itself show that one causes the other." },
        ] },
        { kind: 'concept', title: 'Why the choice of index matters', text: [
          "The article compares the HPI with other indexes and makes a point worth knowing. It reports that a pollution-oriented index did not capture one-third of the most disadvantaged quartile of census tracts, representing about 3 million Californians. It reports that the overlap of the HPI's most disadvantaged quartile was greater with indexes of economic deprivation.",
          "The authors conclude that the framing of an index and choices like how domains are weighted have substantial consequences for which populations get prioritized. For you, the lesson is simple. A map is a set of choices. Ask what it measures, and what it leaves out, before you use it to say where help should go.",
        ] },
        { kind: 'steps', title: 'Using a conditions tool well', items: [
          { label: 'Start with what you know', text: "Write what you see in the neighborhood first. Strengths, gaps, who lives and works there." },
          { label: 'Look up the tract', text: "Find the score and the domains. Note which are lowest and which are strongest." },
          { label: 'Check it against people', text: "Ask residents whether it matches their experience. Tools are a start, not a final word." },
          { label: 'Use it to point, not to label', text: "Say conditions in this area rank lower on housing or transportation. Do not say this is a bad neighborhood." },
          { label: 'Write down the date and version', text: "Tools update. Record which version you used." },
        ] },
        { kind: 'tryit', title: 'Try it on your own neighborhood', text: [
          "Open the California Healthy Places Index online, search for the address of a place you know well, and read the overall percentile and the domain scores. Then write three sentences. One about what the tool shows. One about what it misses. One about what you would ask a neighbor to learn more. You will use this in your practice file.",
        ] },
        { kind: 'case', title: 'The grant request', scenario: true, text: [
          "A program manager asks a community health worker named Lucia to help justify opening a Saturday clinic in a neighborhood where she works. Lucia looks up the tract and finds a low score in the transportation and housing domains. She also finds that the neighborhood has strong social resources, with active churches, a tenant association, and a youth soccer league.",
          "In her notes she writes both. She says the data points to transportation and housing as barriers and that the neighborhood has strong organizations that could be partners. She also asks three residents what hours would work. The proposal that results does not describe the neighborhood as a problem. It describes a place with real barriers and real strengths.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c3-q5',
          q: "What does a higher Healthy Places Index score mean?",
          options: [
            "A person in that area will live longer",
            "Community conditions are healthier compared with other California census tracts",
            "The area has no health problems",
            "The area has more clinics",
          ],
          answer: 1,
          rationale: "The index is a percentile ranking of community conditions. It is not a prediction for any person and not a direct estimate of life expectancy.",
          distractors: "The index is built from many place-based factors, not just clinics, and it does not say an area has no problems or predict any individual's outcome.",
        } },
        { kind: 'reflect', title: 'Your own map', prompts: [
          "What would a tool miss about the neighborhood you know best?",
          "Whom would you ask to check a score against lived experience?",
        ] },
        { kind: 'takeaways', items: [
          "The Healthy Places Index ranks California census tracts on place-based conditions linked to health, and it is validated against life expectancy.",
          "A higher score means healthier conditions compared with other tracts. It is not a prediction for a person.",
          "Every index is a set of choices. Ask what it measures, check it against residents, and name strengths as well as needs.",
        ] },
        ev([
          "Maizlish N, Delaney T, Dowling H, Chapman DA, Sabo R, Woolf S, Orndahl C, Hill L, Snellings L. California Healthy Places Index: Frames Matter. Public Health Reports, 2019, PMC6598140. The purpose, the 25 indicators across eight domains, the weighting, the correlation of 0.58 with life expectancy at birth, the comparison with a pollution-oriented index, and the positive asset frame. The Healthy Places Index website itself returned a not-found page to an automated request, so the peer-reviewed article was used instead.",
        ]),
      ],
    },

    // ── Lesson 5 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sdoh-l5',
      title: 'Asking about social needs, and closing the loop',
      summary: 'Screen, refer, navigate, and follow up, using the federal model for connecting clinics and community services.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "Knowing about determinants is not the same as helping someone. A person who tells you they are afraid of losing their housing does not need a lecture about structural causes. They need to be heard, they need to know what can be done, and they need someone to follow up.",
          "The federal government tested a model for exactly this, and it gives you a clear sequence to follow.",
        ] },
        { kind: 'concept', title: 'Health-related social needs', text: [
          "The Centers for Medicare and Medicaid Services describes health-related social needs, using examples such as food insecurity and inadequate or unstable housing. Its Accountable Health Communities Model rested on emerging evidence that addressing these needs through stronger links between clinics and community services can improve health outcomes.",
          "The agency says unmet health-related social needs may increase the risk of developing chronic conditions and may reduce an individual's ability to manage them. That is the clinical reason your work matters to a clinic. It is also the human reason. A person cannot manage a condition well while worrying about where to sleep.",
        ] },
        { kind: 'concept', title: 'Screen, refer, navigate, align', text: [
          "The model promoted collaboration between clinics and community organizations through four activities. Screening community-dwelling beneficiaries to identify certain unmet health-related social needs. Referring them to increase awareness of community services. Providing navigation services to assist high-risk beneficiaries with accessing those services. And encouraging alignment between clinical and community services to make sure community services are available and able to respond to the needs identified.",
          "The model funded what it called community bridge organizations to test approaches for linking people with services. It describes systematic screening, with referrals to community services that may address the needs identified. It lists the kinds of services as including housing, food, violence intervention programs, utilities, and transportation.",
          "A community health worker often is the bridge. You may do the screening, the referral, and the navigation in one conversation. Know which step you are in.",
        ] },
        { kind: 'steps', title: 'A respectful conversation about needs', items: [
          { label: 'Explain why you are asking', text: "Say that you ask everyone, that it is to connect them to help, and that they can skip any question." },
          { label: 'Ask plainly', text: "Use simple questions about housing, food, transportation, utilities, and safety. Do not guess or assume." },
          { label: 'Listen first', text: "Let the person say what matters most. Their priority comes before your list." },
          { label: 'Offer, do not push', text: "Name one or two options and ask what they would like to try." },
          { label: 'Get consent for each step', text: "Before you share a name or call a service, ask. Tell the person what you will share and with whom." },
          { label: 'Close the loop', text: "Agree on a day to check back, then do it. Ask whether the service helped. Write down the result." },
        ] },
        { kind: 'list', title: 'Questions that keep a conversation respectful', items: [
          "Is it okay if I ask a few questions about things that can affect your health, like housing and food?",
          "In the past few months, has there been a time when you worried about having a place to stay?",
          "In the past few months, has food run out before you had money to buy more?",
          "Is there anything that makes it hard for you to get to appointments?",
          "What matters most to you right now?",
          "Would you like help with any of this today, or would you rather think about it?",
        ] },
        { kind: 'concept', title: 'Your limits and your records', text: [
          "Asking about social needs means collecting sensitive information. Keep it to what you need to help. Record what the person agreed to share, and share it only with the people involved in the referral. The Professional Conduct course covers the privacy and reporting rules, and your program may have its own approved form.",
          "Do not promise results. A referral is not a guarantee. A waiting list may be long, an office may be closed, a rule may change. Tell the person what could go wrong and what you will do if it does.",
          "Keep your local resource list current. A phone number that no longer works is worse than none, because it costs a person their trust and a day of hope. Check the numbers and hours you give out. When you find one that is wrong, tell your supervisor.",
        ] },
        { kind: 'case', title: 'The loop that stayed open', scenario: true, text: [
          "A community health worker named Imani meets Mr. Duarte, 58, at a senior center. He says he skips doses of his heart medicine to make it last because of what his rent takes. She explains why she asks and offers a short list of services. He chooses a food pantry near his building and a call to a program that helps seniors with rent.",
          "Imani gets his consent, makes the calls with him, and writes down what each office said. She sets a day to call him back. On that day he says the pantry helped but the rent program put him on a waitlist. She does not say it will work out. She asks what else would help in the meantime, tells him she will check the waitlist status with him next week, and mentions his medicine to his clinic with his permission so someone can talk to him about it. The loop is closed on one need and open on another, and she records both.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c3-q6',
          q: "Which sequence matches the activities of the federal Accountable Health Communities model?",
          options: [
            "Diagnose, treat, discharge",
            "Screen, refer, navigate, and align clinical and community services",
            "Enroll, bill, collect",
            "Advertise, recruit, retain",
          ],
          answer: 1,
          rationale: "The model promoted screening for unmet health-related social needs, referral to community services, navigation for high-risk beneficiaries, and alignment between clinical and community services.",
          distractors: "The other sequences describe clinical care, billing, or marketing, not the model's activities.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c3-q7',
          q: "You refer a client to a food pantry. What does closing the loop mean?",
          options: [
            "Giving them the pantry's address",
            "Agreeing on a day to check back, asking whether the service helped, and writing down the result",
            "Telling them the pantry will certainly help",
            "Entering the referral in a database and moving on",
          ],
          answer: 1,
          rationale: "A referral is finished only when you know whether the person connected with the service and whether it helped.",
          distractors: "Giving an address, promising results, or logging and moving on leave the loop open.",
        } },
        { kind: 'reflect', title: 'Your own practice', prompts: [
          "Which of the six questions would be hardest for you to ask? What would help?",
          "Which resource on your list do you trust least? How will you check it?",
        ] },
        { kind: 'takeaways', items: [
          "Unmet health-related social needs can raise the risk of chronic conditions and make them harder to manage.",
          "Screen, refer, navigate, and follow up. Ask with respect and get consent for each step.",
          "Close the loop. A referral is finished when you know it worked or what to do next.",
        ] },
        ev([
          "Centers for Medicare and Medicaid Services, Center for Medicare and Medicaid Innovation. Accountable Health Communities Model. Health-related social needs, the background evidence, the activities of screening, referral, navigation, and alignment, the community bridge organizations, and the kinds of services listed.",
          "The conversation steps and sample questions are practice guidance written for this course from the model's described activities, and are meant to be adapted to your program's own approved screening form.",
        ]),
      ],
    },

    // ── Lesson 6 ──────────────────────────────────────────────────────────
    {
      id: 'chw-sdoh-l6',
      title: 'From one person to the system',
      summary: 'Three levels of action, what the evidence says works, and where a community health worker\'s role sits.',
      minutes: 25,
      blocks: [
        { kind: 'why', text: [
          "After a few weeks of this work you will notice that you are helping the same kinds of problems again and again. The same landlord. The same bus line. The same office with a three-hour wait. It is natural to wonder whether the help is making a difference or only keeping people afloat.",
          "Both are real. This lesson shows how the sources describe action at three levels, so you can see your own work as part of a larger effort and know what to do with what you notice.",
        ] },
        { kind: 'concept', title: 'Three levels', text: [
          "The World Health Organization's Commission described three overarching recommendations that map onto three levels of action. Improving daily living conditions is about the conditions a person meets today. Tackling the inequitable distribution of power, money, and resources is about the structures that set those conditions. Measuring and understanding the problem and assessing the impact of action is about learning what works.",
          "For a community health worker, these become three kinds of work. Helping an individual meet a need today. Helping a community organize, speak, and push for change over time. And collecting and sharing what you see, so decisions rest on facts.",
        ] },
        { kind: 'concept', title: 'What the National Academies found about community action', text: [
          "The National Academies report highlights nine examples of community-based solutions. It describes them as community-driven, multi-sectoral, informed by evidence, and targeting a social, economic, or environmental determinant of health. It identifies cross-cutting elements that show promise, including creating a shared vision and building trust in the community, leadership development, building a diverse network of partners through relationship building and mutual accountability, governing processes that include authentic community leadership, fostering creativity, leveraging resources, and training and commissioning technical expertise where necessary.",
          "It also says that the power of community actors is necessary and essential to promoting health equity but is not in itself sufficient. Communities operate in the context of federal and state policies. The committee recommends that all government agencies that plan around land use, housing, transportation, and other areas that affect populations at high risk of health inequity consider the intended and unintended health effects of all policies. It names six policy areas with high relevance to community-driven solutions, which are taxation and income inequality, housing and urban planning, education, civil rights, health, and criminal justice policy.",
          "Its conclusion is that system-level changes are needed to reduce poverty, eliminate structural racism, improve income equality, increase educational opportunity, and fix the laws and policies that perpetuate structural inequities, and that residents and community-based organizations, in partnership with businesses, government, and anchor and faith-based institutions, all have the power to help promote health equity.",
        ] },
        { kind: 'vocab', items: [
          { term: 'Community-based solution', plain: "An action, policy, program, or law driven by the community and its members to affect local factors that influence health." },
          { term: 'Multi-sectoral', plain: "Involving more than one sector, such as health, housing, schools, and transportation." },
          { term: 'Authentic community leadership', plain: "Residents who make decisions, not only people who are consulted." },
          { term: 'Mutual accountability', plain: "Partners holding each other to what they agreed, in both directions." },
        ] },
        { kind: 'steps', title: 'What you can do at each level', items: [
          { label: 'With one person', text: "Listen, screen, refer, and follow up. Keep the person in charge." },
          { label: 'With a group', text: "Bring neighbors who share a problem together. Help them find a shared goal, and make sure those most affected lead." },
          { label: 'With your organization', text: "Write down patterns without names and bring them to your supervisor. Ask whether they reach the partners and funders who can act." },
          { label: 'With the wider system', text: "Take part in meetings, give testimony when your organization supports it, and share what you learn. The Advocacy and Capacity Building courses go deeper." },
        ] },
        { kind: 'concept', title: 'Your role and its limits', text: [
          "The sources agree that the work of changing structures takes many actors. Community health workers are one. You are not responsible for fixing housing policy, and you should not carry that weight alone. You are responsible for doing your part well, noticing patterns, and passing them on accurately.",
          "Keep the person's story private when you speak about patterns. Use the facts and the number of people, never names. If you are asked to speak publicly about your work, check with your supervisor first about what your organization allows.",
        ] },
        { kind: 'case', title: 'The bus line', scenario: true, text: [
          "A community health worker named Omar notices that eight of the people he has helped over two months missed a clinic appointment because a single bus line stopped running early. He writes a one-page note with no names, the line, the times, and the number of people affected, and gives it to his supervisor.",
          "His supervisor brings it to a partner meeting. A resident who attends says she has complained about it too. Together they draft a request to the transit agency with the support of three organizations. The change is not guaranteed. But the problem is now documented and the request is signed by people who live with it. Omar did not run the campaign. He noticed, wrote it down, and passed it on.",
        ] },
        { kind: 'check', check: {
          id: 'hrtp-c3-q8',
          q: "According to the National Academies report, what is true of community action to promote health equity?",
          options: [
            "It is unnecessary if health care is good",
            "It is necessary and essential, but not in itself sufficient, because communities operate within federal and state policies",
            "It should be led by outside experts rather than residents",
            "It only works if it targets individual behavior",
          ],
          answer: 1,
          rationale: "The report says the power of community actors is necessary and essential but not sufficient, and it stresses authentic community leadership and supportive policy.",
          distractors: "The other statements contradict the report's emphasis on community leadership and on social, economic, and environmental determinants.",
        } },
        { kind: 'check', check: {
          id: 'hrtp-c3-q9',
          q: "You have helped eight people who all missed appointments because of the same bus schedule. What is the best next step?",
          options: [
            "Do nothing, since each person was helped",
            "Write down the pattern without names and bring it to your supervisor",
            "Post the names of the eight people so others can see the problem",
            "Tell each person the bus company is at fault",
          ],
          answer: 1,
          rationale: "Documenting a pattern without names and passing it to your supervisor protects privacy and gives your organization and partners something they can act on.",
          distractors: "Doing nothing leaves the pattern invisible. Posting names breaks privacy, and blaming a company without facts is not accurate.",
        } },
        { kind: 'reflect', title: 'Your own pattern', prompts: [
          "What problem have you seen more than once in your own community? Who might be able to act on it?",
          "What would you want residents to decide, rather than be consulted about?",
        ] },
        { kind: 'takeaways', items: [
          "Action happens at three levels. Meeting needs today, changing the structures that set them, and measuring what works.",
          "Community action is necessary and essential, but it works alongside policy and needs authentic community leadership.",
          "Notice patterns, write them down without names, and pass them on. That is your part.",
        ] },
        ev([
          "World Health Organization. Commission on Social Determinants of Health, 2005-2008. The three overarching recommendations.",
          "National Academies of Sciences, Engineering, and Medicine. Communities in Action: Pathways to Health Equity (2017), report highlights. The nine examples, the cross-cutting elements, the six policy areas, the statement about the limits of community action, and the conclusion.",
          "Centers for Medicare and Medicaid Services. Accountable Health Communities Model. The alignment activity, linking clinical and community services.",
        ]),
      ],
    },
  ],
  checks: [],
  artifact: {
    id: 'hrtp-c3-practice',
    title: 'Your conditions and equity practice file',
    minutes: 30,
    purpose: 'Five short pieces that you keep: your own determinants map, a conditions read of a real neighborhood, your wording for a respectful screening conversation, a no-blame explanation, and a pattern note you could bring to a supervisor.',
    fields: [
      { id: 'map', label: 'Your determinants map', help: 'For each of the five Healthy People 2030 domains, write one condition that has affected your own health or your family\'s, positive or negative.', multiline: true },
      { id: 'tract', label: 'A neighborhood read', help: 'Use the California Healthy Places Index on a neighborhood you know. Write the overall percentile, the lowest and highest domains, one thing the tool shows, one thing it misses, and one question you would ask a neighbor.', multiline: true },
      { id: 'screen', label: 'Your screening words', help: 'Write how you would introduce the questions, the two questions you find hardest, and how you would ask them in your own words. Include how you would tell the person they can skip any question.', multiline: true },
      { id: 'explain', label: 'A no-blame explanation', help: 'Write what you would say, in four or five sentences, to someone who says their community is unhealthy because people do not take care of themselves.', multiline: true },
      { id: 'pattern', label: 'A pattern note', help: 'Write a one-page note, with no names, describing a pattern you have seen. Include what happens, how many people, over what time, and what you think could change it. Name who you would give it to.', multiline: true },
    ],
    reference: { title: 'The five Healthy People 2030 domains', items: [
      'Economic stability',
      'Education access and quality',
      'Health care access and quality',
      'Neighborhood and built environment',
      'Social and community context',
    ] },
  },
  furtherLearning: [
    { name: 'Healthy People 2030: Social Determinants of Health', use: 'The definition, the five domains, and examples from the federal health objectives.', url: 'https://odphp.health.gov/healthypeople/priority-areas/social-determinants-health' },
    { name: 'Braveman P: Health disparities and health equity, the issue is justice', use: 'Definitions of health disparity and health equity and the reasons for being precise.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3863701/' },
    { name: 'World Health Organization: Commission on Social Determinants of Health', use: 'The Commission\'s purpose and its three overarching recommendations.', url: 'https://www.who.int/initiatives/action-on-the-social-determinants-of-health-for-advancing-equity/world-report-on-social-determinants-of-health-equity/commission-on-social-determinants-of-health' },
    { name: 'National Academies: Communities in Action, Pathways to Health Equity (report highlights)', use: 'Root causes of health inequity and examples of community-driven solutions.', url: 'https://www.nap.edu/resource/24624/coh-report-highlights.pdf' },
    { name: 'Centers for Medicare and Medicaid Services: Accountable Health Communities Model', use: 'The model for screening, referral, and navigation for health-related social needs.', url: 'https://www.cms.gov/priorities/innovation/innovation-models/ahcm' },
    { name: 'Maizlish N, et al: California Healthy Places Index, Frames Matter', use: 'How the Healthy Places Index was built and validated.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6598140' },
  ],
};
