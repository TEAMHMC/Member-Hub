
export enum UserRole {
  CLIENT = 'client',
  STAFF = 'staff',
  ADMIN = 'admin',
  VOLUNTEER = 'volunteer'
}

export enum ApplicationStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected'
}

export enum ReferralStatus {
  INITIATED = 'Initiated',
  PENDING = 'Pending',
  CONFIRMED = 'Confirmed',
  CONNECTED = 'Connected',
  EXPIRED = 'Expired'
}

export enum ContactPreference {
  SMS = 'SMS',
  EMAIL = 'Email',
  PHONE = 'Phone'
}

/**
 * How the person came to HMC, which determines what the Hub shows them.
 *  - 'care'    met through a health fair, screening, or outreach encounter
 *  - 'learner' self-registered for the Academy only, no care relationship
 *  - 'both'    a care participant who also enrolled in a learning pathway
 *
 * A 'learner' account intentionally has no screening, playbook, or results
 * surface. Per the Academy credential rules, participation in education does
 * not create a clinician-patient relationship, and learning records are kept
 * separate from clinical records.
 */
export type Audience = 'care' | 'learner' | 'both';

export interface User {
  id: string;
  audience?: Audience;
  phone: string;
  role: UserRole | null;
  firstName: string;
  lastName: string;
  email: string;
  zipCode?: string;
  dob?: string;
  genderIdentity?: string;
  pronouns?: string;
  primaryLanguage?: 'English' | 'Spanish' | 'Mandarin' | 'Tagalog';
  isVeteran?: boolean;
  isLgbtq?: boolean;
  housingStatus?: 'Stable' | 'Unstable' | 'Sober Living' | 'Shelter' | 'Street';
  foodSecurity?: 'Secure' | 'Mild Insecurity' | 'Critical';
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  // Personal Progress
  xp: number;
  level: number;
  badges: string[];
  wellnessPoints?: number;
  // Engagement
  lastActive?: string;
  contactPreference?: ContactPreference;
  // Volunteer specific properties
  applicationStatus?: ApplicationStatus;
  orientationComplete?: boolean;
  hoursLogged: number;
  shiftsRegistered: number;
}

export interface Shift {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  capacity: number;
  currentSignups: number;
  rolesRequired: string[];
  status: 'Open' | 'Filled' | 'Completed';
  minXp?: number;
  description?: string;
}

export interface Resource {
  id: string;
  name: string;
  category: 'Housing' | 'Food' | 'Mental Health' | 'Healthcare' | 'Transportation' | 'Education' | 'Employment' | 'Safety' | 'Community Connection' | 'HIV / Sexual Health';
  zipCodes: string[];
  acceptsUninsured: boolean;
  phone: string;
  description: string;
  rating: number;
  website?: string;
  address?: string;
}

export interface ServiceEncounter {
  id: string;
  date: string;
  type: string;
  provider: string;
  metrics?: {
    bloodPressure?: string;
    glucose?: string;
    weight?: string;
    bmi?: string;
    temperature?: string;
    heartRate?: string;
  };
  notes?: string;
  outcome?: string;
}

export interface Referral {
  id: string;
  clientId: string;
  clientName: string;
  clientPhone: string;
  resourceName: string;
  status: ReferralStatus;
  createdAt: string;
  deadline72h: string;
  notes?: string;
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface Assessment {
  housing: number;
  food: number;
  transportation: number;
  healthcare: number;
  mentalHealth: number;
  employment: number;
  safety: number;
  connection: number;
  overallScore?: number;
}
