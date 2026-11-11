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
import { CHW_MH_CONFLICT_RESOLUTION } from './pathwayMhConflict';
import { CHW_MH_WORK_DIGITAL } from './pathwayMhWork';
import { CHW_SPEC_STREET_MEDICINE } from './pathwaySpecStreet';
import { CHW_SPEC_BEHAVIORAL_HEALTH } from './pathwaySpecBehavioral';
import { CHW_SPEC_NAVIGATION } from './pathwaySpecNavigation';
import { CHW_FIELDWORK_OBSERVED, CHW_FIELDWORK_SUPERVISED, CHW_CASE_CONFERENCE } from './pathwayFieldwork';
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
  chooseOneOf: ['chw_spec_street_medicine', 'chw_spec_behavioral_health', 'chw_spec_navigation'],
  purpose:
    'Learn the foundations of community mental health and community health work: the role, how to connect people to services, how to reach them, how to keep honest records, how to do community health work with people preparing to leave jail or prison, and the three jobs of a community mental health worker: educate, prevent, and intervene. It adds mental health core courses, 24 hours of supervised fieldwork, and one specialty track, for 120 hours in all.',
  format:
    'The pathway is 120 hours in four parts, and each course ends with a practice file you keep. Foundations is fifteen courses, about 48 hours, on the role, coverage, equity, communication, trauma-informed practice, motivational interviewing, cultural humility, navigation, assessment, health education, advocacy, capacity building, outreach, conduct, and evaluation. The Mental Health Core is thirteen courses, about 40 hours, on recovery, conditions, substance use, suicide prevention, peer practice, children and older adults, the system and access, conflict resolution, work and digital skills, reentry, and the three jobs of educating, preventing, and intervening. Supervised Fieldwork is 24 hours, with 8 hours of observed practice, 12 hours of supervised service delivery, and a 4 hour live case conference. The Specialty Track is 8 hours, and you choose one of three, Street Medicine and Outreach, Behavioral Health and Crisis Response, or Coverage and Benefits Navigation. Some courses are at your own pace, some add live practice sessions, the specialty tracks combine reading with four practice sessions, and fieldwork is done on shift with a supervisor.',
  credentialTitle: 'HMC Community Mental Health Worker Pathway Completion',
  credentialType: 'Course Completion',
  gates: [
    'Finish the thirty-two courses of your path, which are the fifteen Foundations courses, the thirteen Mental Health Core courses, the three fieldwork courses, and one specialty track, along with the facilitated practice and the supervised fieldwork hours',
    'Pass the final quiz with 80% or more',
    'Complete the practice file in each course',
  ],
  guidedStart: 'Start with Foundations, beginning with The Community Health Worker Role and then Service Coordination and Navigation. The Mental Health Core follows. Begin fieldwork when your supervisor confirms you are ready, and choose your specialty track near the end.',
  courses: [CHW_ROLE_FIELD, CHW_PUBLIC_HEALTH_SYSTEMS, CHW_SDOH_EQUITY, CHW_COMMUNICATION, CHW_TRAUMA_INFORMED, CHW_MOTIVATIONAL_INTERVIEWING, CHW_CULTURAL_HUMILITY, CHW_NAVIGATION, CHW_ASSESSMENT, CHW_EDUCATION_FACILITATION, CHW_ADVOCACY, CHW_CAPACITY_BUILDING, CHW_OUTREACH, CHW_PROFESSIONAL_CONDUCT, CHW_EVALUATION, CHW_REENTRY, MH_EDUCATION, MH_PREVENTION, MH_INTERVENTION, CHW_MH_RECOVERY_WELLNESS, CHW_MH_CONDITIONS, CHW_MH_SUBSTANCE_USE, CHW_MH_SUICIDE_PREVENTION, CHW_MH_PEER_PRACTICE, CHW_MH_LIFESPAN, CHW_MH_SYSTEM_ACCESS, CHW_MH_CONFLICT_RESOLUTION, CHW_MH_WORK_DIGITAL, CHW_FIELDWORK_OBSERVED, CHW_FIELDWORK_SUPERVISED, CHW_CASE_CONFERENCE, CHW_SPEC_STREET_MEDICINE, CHW_SPEC_BEHAVIORAL_HEALTH, CHW_SPEC_NAVIGATION],
  preTest: CHWP_PRE,
  postTest: CHWP_POST,
  plannedCourses: [],
  version: '1.0',
  effectiveDate: 'October 2026',
  nextReview: 'October 2027',
};
