// Evidence and standards for the lessons written before every lesson carried its own list.
//
// Every training statement in the Academy rests on at least three sources a learner or a reviewer can
// check. The lessons below were written earlier and carry their sources at course level only, so the
// lesson-level lists are added here and attached once when the catalogue loads.

import type { Pathway } from './catalog';
import type { Block } from './blocks';

const HCAI = 'California HCAI, CHW/P/R Training Program Best Practices Framework: the 11 core competencies, live practice for relationship skills, and supervised field work.';
const MILLER = 'Miller and Rollnick, Motivational Interviewing: Helping People Change, third edition (2013): open questions, reflections, and summaries.';
const CLAS = 'U.S. HHS Office of Minority Health, National CLAS Standards (2013): culturally and linguistically appropriate services, including language assistance.';
const TRAUMA = 'SAMHSA, TIP 57, Trauma-Informed Care in Behavioral Health Services: safety, trustworthiness, and choice in every contact.';
const BLS = 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook: what health occupations do and how workers qualify.';
const DCA = 'California Department of Consumer Affairs, health-profession boards: licensure is granted to an individual by a government board.';
const CHECKLIST = 'California DHCS, Medi-Cal Community Health Worker Minimum Qualification Checklist: certificates of completion are not reviewed, issued, or approved by any State agency, and the supervising provider decides whether a certificate meets Medi-Cal policy.';
const TEAMSTEPPS = 'AHRQ, TeamSTEPPS: teamwork and communication in health care.';
const IOM = 'Institute of Medicine, Crossing the Quality Chasm (2001): six aims for quality care.';
const ISMP = 'Institute for Safe Medication Practices, List of Error-Prone Abbreviations.';
const JC = 'The Joint Commission, Official "Do Not Use" List of Abbreviations.';
const NLM = 'National Library of Medicine, MedlinePlus Medical Dictionary: word parts and definitions.';
const OPENSTAX = 'OpenStax, Anatomy and Physiology 2e, Chapter 1: An Introduction to the Human Body, including anatomical terminology.';
const IOM_ME = 'Institute of Medicine, Preventing Medication Errors (2006): medication errors and how to reduce them.';
const AHRQ_HL = 'AHRQ, Health Literacy Universal Precautions Toolkit: plain language and the teach-back method.';
const NGSS = 'Next Generation Science Standards: the science and engineering practices and the core ideas for grades 5 to 8.';
const NGSS_ETS = 'Next Generation Science Standards, Engineering Design: defining problems and optimizing solutions.';
const CSFW = 'K-12 Computer Science Framework (2016): computing concepts and practices by grade band.';
const HEALTHIT = 'HealthIT.gov, What is an electronic health record, and What is telehealth?';
const NIGMS = 'NIH, National Institute of General Medical Sciences: The Inside Story, a guide to cells and the body.';
const FDA_DEV = 'U.S. Food and Drug Administration, Medical Devices: how health devices are regulated and what they do.';
const NIBIB = 'NIH, National Institute of Biomedical Imaging and Bioengineering: biomedical engineering and the devices it produces.';
const MEDLINE_ELEC = 'National Library of Medicine, MedlinePlus: Fluid and Electrolyte Balance.';
const NAS_WATER = 'National Academies, Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate (2005): how much water people need.';
const IDEO = 'IDEO, Human-Centered Design Toolkit.';
const HCAI_WF = 'California HCAI, Health Workforce Initiatives: careers in health in California.';
const NLINE = '988 Suicide and Crisis Lifeline: call or text 988.';

const EV: Record<string, string[]> = {
  'ces-1-l1': [HCAI, BLS, IOM, TEAMSTEPPS],
  'ces-1-l2': [DCA, CHECKLIST, BLS],
  'ces-1-l3': [DCA, HCAI, BLS],
  'ces-1-l4': [HCAI, CHECKLIST, TEAMSTEPPS],
  'ces-2-l1': [NLM, OPENSTAX, JC],
  'ces-2-l2': [OPENSTAX, NLM, JC],
  'ces-2-l3': [JC, ISMP, IOM_ME],
  'ces-3-l1': [MILLER, TRAUMA, HCAI],
  'ces-3-l2': [AHRQ_HL, CLAS, MILLER],
  'ces-3-l3': [CLAS, AHRQ_HL, HCAI],
  'ces-3-l4': [NLINE, TRAUMA, HCAI],
  'stem-w1': [NGSS, CSFW, NGSS_ETS],
  'stem-w2': [NGSS, HEALTHIT, NIGMS],
  'stem-w3': [NGSS, HEALTHIT, FDA_DEV],
  'stem-w4': [NGSS_ETS, NIBIB, FDA_DEV],
  'stem-w5': [MEDLINE_ELEC, NAS_WATER, IDEO],
  'stem-w6': [NGSS_ETS, HCAI_WF, BLS],
};

const FURTHER: Record<string, { name: string; use: string; url: string }[]> = {
  'stem-collab-camp': [
    { name: 'Next Generation Science Standards', use: 'The science and engineering practices behind the weekly kits.', url: 'https://www.nextgenscience.org' },
    { name: 'IDEO: Human-Centered Design Toolkit', use: 'Designing with and for people.', url: 'https://www.designkit.org' },
    { name: 'California HCAI: Health Workforce Initiatives', use: 'Careers in California health care.', url: 'https://hcai.ca.gov' },
  ],
};

export const applyEvidence = (pathways: Pathway[]): void => {
  for (const p of pathways) {
    for (const c of p.courses) {
      if (FURTHER[c.id] && !(c.furtherLearning && c.furtherLearning.length)) c.furtherLearning = FURTHER[c.id];
      for (const l of c.lessons) {
        const items = EV[l.id];
        if (!items || !l.blocks) continue;
        if (l.blocks.some((b: Block) => b.kind === 'list' && /Evidence and standards/.test((b as { title?: string }).title || ''))) continue;
        l.blocks.push({ kind: 'list', title: 'Evidence and standards behind this lesson', items });
      }
    }
  }
};
