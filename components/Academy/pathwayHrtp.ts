// Community Mental Health Worker Pathway.
//
// The four self-paced courses of HMC's 80-hour community health worker training that carry
// their instruction in text: the role, navigation, outreach, and evaluation. The live
// practice courses and the supervised field hours are delivered in cohorts and recorded in
// the volunteer portal, which is where the certificate is issued.

import type { Pathway } from './catalog';
import { CHW_ROLE_FIELD, CHW_NAVIGATION } from './pathwayHrtpCore1';
import { CHW_OUTREACH, CHW_EVALUATION } from './pathwayHrtpCore2';
import { CHW_REENTRY } from './pathwayHrtpCore3';

export const COMMUNITY_MENTAL_HEALTH_WORKER: Pathway = {
  family: 'Mental Health + Community Education',
  id: 'community-mental-health-worker',
  title: 'Community Mental Health Worker Pathway',
  level: 'Foundations',
  status: 'published',
  purpose:
    'Learn the foundations of community mental health and community health work: the role, how to connect people to services, how to reach them, how to keep honest records, and how to do community health work with people preparing to leave jail or prison.',
  format: 'Five courses. Four are at your own pace, about 11 hours, and the reentry course adds about 2 hours 40 minutes of lessons, two facilitated practice sessions, and one supervised contact. Each course ends with a practice file you keep.',
  credentialTitle: 'HMC Community Mental Health Worker Pathway Completion',
  credentialType: 'Course Completion',
  gates: [
    'Finish the five courses and the facilitated practice',
    'Pass the knowledge checks',
    'Complete the practice file in each course',
  ],
  guidedStart: 'Start with The Community Health Worker Role, then Service Coordination and Navigation.',
  courses: [CHW_ROLE_FIELD, CHW_NAVIGATION, CHW_OUTREACH, CHW_EVALUATION, CHW_REENTRY],
  plannedCourses: [],
  version: '1.0',
  effectiveDate: 'October 2026',
  nextReview: 'October 2027',
};
