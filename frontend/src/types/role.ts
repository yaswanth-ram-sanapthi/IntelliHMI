/**
 * All supported user roles in IntelliHMI.
 * This file acts as the single source of truth
 * for role definitions across the application.
 */

export type UserRole =
  | "admin"
  | "developer"
  | "tester"
  | "operator"
  | "maintenance_engineer"
  | "supervisor"
  | "production_manager"
  | "safety_officer"
  | "quality_engineer"
  | "data_analyst";

/**
 * Human-readable labels for each role.
 * Used in the UI wherever roles need to be displayed.
 */

export const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Administrator",
  developer: "Developer",
  tester: "Tester",
  operator: "Operator",
  maintenance_engineer: "Maintenance Engineer",
  supervisor: "Supervisor",
  production_manager: "Production Manager",
  safety_officer: "Safety Officer",
  quality_engineer: "Quality Engineer",
  data_analyst: "Data Analyst",
};