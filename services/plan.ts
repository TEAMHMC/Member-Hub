import type { Assessment } from '../types';

// Deterministic care plan built from the member's OWN self-check answers.
// No AI fabrication, no mock data — every recommendation is grounded in the
// score the member selected, and maps to real HMC support pathways.

export interface PlanGoal {
  category: string;
  recommendation: string;
  suggestedGoal: string;
  urgency: 'Low' | 'Medium' | 'High';
}

type Band = { goal: string; rec: string };

// One entry per social determinant, indexed by severity 0-3.
const GUIDE: Record<string, { label: string; bands: [Band, Band, Band, Band] }> = {
  housing: {
    label: 'Housing',
    bands: [
      { goal: 'Keep my housing stable this month.', rec: 'You are stable. Save our housing resources in case anything changes.' },
      { goal: 'Understand my options before things get harder.', rec: 'Connect with a housing navigator to plan ahead and know your rights.' },
      { goal: 'Secure safe, stable housing.', rec: 'Request a housing referral. We can connect you to shelter and rapid-rehousing partners.' },
      { goal: 'Find somewhere safe to sleep tonight.', rec: 'Urgent: we will connect you to emergency shelter and crisis housing right away. Call 211 for immediate placement.' },
    ],
  },
  food: {
    label: 'Food Access',
    bands: [
      { goal: 'Keep enough food on hand each week.', rec: 'You are secure. Local pantries are here if that ever changes.' },
      { goal: 'Build a steady food supply.', rec: 'A CalFresh screening and a nearby pantry can stretch your budget.' },
      { goal: 'Make sure I do not skip meals.', rec: 'Request a food referral. We can connect you to pantries and meal programs this week.' },
      { goal: 'Get food today.', rec: 'Urgent: we will connect you to emergency food now. Call 211 for same-day groceries or meals.' },
    ],
  },
  mentalHealth: {
    label: 'Emotional Health',
    bands: [
      { goal: 'Keep protecting my emotional health.', rec: 'You are balanced. Try Calm Kit for a quick reset any time.' },
      { goal: 'Have a few tools for stressful days.', rec: 'Take the Check Yourself screening and try Calm Kit grounding when tension builds.' },
      { goal: 'Feel more like myself again.', rec: 'Complete the Check Yourself mental-health screening. We can connect you to counseling and peer support.' },
      { goal: 'Get support right now.', rec: 'Urgent: you deserve support today. Call or text 988 any time, and we will follow up with you.' },
    ],
  },
  healthcare: {
    label: 'Doctor Visits',
    bands: [
      { goal: 'Stay connected to my doctor.', rec: 'You are set. Keep up regular visits and screenings.' },
      { goal: 'Move from the ER to a regular doctor.', rec: 'We can help you find a primary care home so the ER is not your only option.' },
      { goal: 'Get covered and seen.', rec: 'Request a healthcare referral. We can help with Medi-Cal enrollment and low-cost clinics.' },
      { goal: 'Get care without fear.', rec: 'Urgent: we will connect you to a trusted, judgment-free clinic and help you get seen soon.' },
    ],
  },
  transportation: {
    label: 'Getting Around',
    bands: [
      { goal: 'Keep getting to my appointments.', rec: 'You are mobile. Save our transit resources just in case.' },
      { goal: 'Make appointments easier to reach.', rec: 'Ask about bus passes and ride programs for medical visits.' },
      { goal: 'Have a reliable way to my appointments.', rec: 'Request a transportation referral. Non-emergency medical transport may be available through Medi-Cal.' },
      { goal: 'Reach care when I cannot leave home.', rec: 'Urgent: we will look into in-home and mobile services and arranged transport for you.' },
    ],
  },
};

const URGENCY: Array<'Low' | 'Medium' | 'High'> = ['Low', 'Low', 'Medium', 'High'];

// Returns goals for every determinant with any elevated need (score >= 1),
// most urgent first. If nothing is elevated, returns a single affirming goal.
export function buildPlanFromScores(scores: Assessment): PlanGoal[] {
  const goals: PlanGoal[] = [];
  (Object.keys(GUIDE) as Array<keyof typeof GUIDE>).forEach((key) => {
    const score = Math.max(0, Math.min(3, (scores as any)[key] ?? 0));
    if (score < 1) return;
    const g = GUIDE[key];
    const band = g.bands[score];
    goals.push({
      category: g.label,
      recommendation: band.rec,
      suggestedGoal: band.goal,
      urgency: URGENCY[score],
    });
  });

  goals.sort((a, b) => {
    const order = { High: 0, Medium: 1, Low: 2 } as const;
    return order[a.urgency] - order[b.urgency];
  });

  if (goals.length === 0) {
    goals.push({
      category: 'Your wellness',
      recommendation: 'You are doing well across the areas we asked about. Keep exploring events and tools to stay strong.',
      suggestedGoal: 'Keep up the good momentum.',
      urgency: 'Low',
    });
  }
  return goals;
}
