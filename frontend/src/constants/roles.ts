export const INDUSTRY_ROLES = [
  "Administrator",
  "Plant Manager",
  "Production Manager",
  "Supervisor",
  "Operator",
  "Maintenance Engineer",
  "Quality Engineer",
  "Safety Officer",
  "Developer",
  "Tester",
  "Data Analyst",
] as const;

export type IndustryRole = typeof INDUSTRY_ROLES[number];