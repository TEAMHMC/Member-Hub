// Community Mental Health Worker Pathway.
//
// The eight self-paced courses of HMC's 80-hour community health worker training that carry
// their instruction in text: the role, public health and coverage, social determinants and equity, navigation, assessment, outreach, professional conduct, and evaluation. The live
// practice courses and the supervised field hours are delivered in cohorts and recorded in
// the volunteer portal, which is where the certificate is issued.

import type { Pathway } from './catalog';
import { CHW_ROLE_FIELD, CHW_NAVIGATION } from './pathwayHrtpCore1';
import { CHW_OUTREACH, CHW_EVALUATION } from './pathwayHrtpCore2';
import { CHW_PROFESSIONAL_CONDUCT } from './pathwayHrtpConduct';
import { CHW_PUBLIC_HEALTH_SYSTEMS } from './pathwayHrtpCoverage';
import { CHW_SDOH_EQUITY } from './pathwayHrtpEquity';
import { CHW_ASSESSMENT } from './pathwayHrtpAssessment2';
import { CHW_COMMUNICATION } from './pathwayHrtpCommunication';
import { CHW_TRAUMA_INFORMED } from './pathwayHrtpTrauma';
import { CHW_MOTIVATIONAL_INTERVIEWING } from './pathwayHrtpMotivational';
import { CHW_CULTURAL_HUMILITY } from './pathwayHrtpHumility';
import { CHW_EDUCATION_FACILITATION } from './pathwayHrtpFacilitation';
import { CHW_ADVOCACY } from './pathwayHrtpAdvocacy';
import { CHW_CAPACITY_BUILDING } from './pathwayHrtpCapacity';
import { CHW_MH_RECOVERY_WELLNESS } from './pathwayMhRecovery';
import { CHW_MH_CONDITIONS } from './pathwayMhConditions';
import { CHW_MH_SUBSTANCE_USE } from './pathwayMhSubstance';
import { CHW_MH_SUICIDE_PREVENTION } from './pathwayMhSuicide';
import { CHW_MH_PEER_PRACTICE } from './pathwayMhPeerPractice';
import { CHW_MH_LIFESPAN } from './pathwayMhLifespan';
import { CHW_MH_SYSTEM_ACCESS } from './pathwayMhSystem';
import { CHW_REENTRY } from './pathwayHrtpCore3';
import { MH_EDUCATION } from './pathwayHrtpEducation';
import { MH_PREVENTION } from './pathwayHrtpPrevention';
import { MH_INTERVENTION } from './pathwayHrtpIntervention';
import { CHWP_PRE, CHWP_POST } from './pathwayHrtpAssessment';

export const COMMUNITY_MENTAL_HEALTH_WORKER: Pathway = {
  family: 'Mental Health + Community Education',
  id: 'community-mental-health-worker',
  title: 'Community Mental Health Worker Pathway',
  level: 'Foundations',
  status: 'published',
  purpose:
    'Learn the foundations of community mental health and community health work: the role, how to connect people to services, how to reach them, how to keep honest records, how to do community health work with people preparing to leave jail or prison, and the three jobs of a community mental health worker: educate, prevent, and intervene.',
  format: 'Twenty-six courses, each ending with a practice file you keep. The role, public health and coverage, social determinants and equity, navigation, assessment, outreach, professional conduct, and evaluation courses are at your own pace, about 24 hours. The communication, trauma-informed practice, motivational interviewing, cultural humility, health education and facilitation, advocacy, and capacity building courses, the reentry course, and the three mental health courses on education, prevention, and intervention add lessons at your own pace plus facilitated practice sessions, and the reentry course adds one supervised contact.',
  credentialTitle: 'HMC Community Mental Health Worker Pathway Completion',
  credentialType: 'Course Completion',
  gates: [
    'Finish the twenty-six courses and the facilitated practice',
    'Pass the final quiz with 80% or more',
    'Complete the practice file in each course',
  ],
  guidedStart: 'Start with The Community Health Worker Role, then Service Coordination and Navigation. The Mental Health Education, Prevention, and Intervention courses follow.',
  courses: [CHW_ROLE_FIELD, CHW_PUBLIC_HEALTH_SYSTEMS, CHW_SDOH_EQUITY, CHW_COMMUNICATION, CHW_TRAUMA_INFORMED, CHW_MOTIVATIONAL_INTERVIEWING, CHW_CULTURAL_HUMILITY, CHW_NAVIGATION, CHW_ASSESSMENT, CHW_EDUCATION_FACILITATION, CHW_ADVOCACY, CHW_CAPACITY_BUILDING, CHW_OUTREACH, CHW_PROFESSIONAL_CONDUCT, CHW_EVALUATION, CHW_REENTRY, MH_EDUCATION, MH_PREVENTION, MH_INTERVENTION, CHW_MH_RECOVERY_WELLNESS, CHW_MH_CONDITIONS, CHW_MH_SUBSTANCE_USE, CHW_MH_SUICIDE_PREVENTION, CHW_MH_PEER_PRACTICE, CHW_MH_LIFESPAN, CHW_MH_SYSTEM_ACCESS],
  preTest: CHWP_PRE,
  postTest: CHWP_POST,
  plannedCourses: [],
  version: '1.0',
  effectiveDate: 'October 2026',
  nextReview: 'October 2027',
};
