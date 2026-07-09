import type { UserRole } from "../types/role";

export const DASHBOARD_WIDGETS: Record<UserRole, string[]> = {
  admin: [
    "Telemetry",
    "User Management",
    "Analytics",
    "Role Management",
  ],

  developer: [
    "Telemetry",
    "System Logs",
    "API Status",
  ],

  tester: [
    "Telemetry",
    "Test Results",
    "Simulation",
  ],

  operator: [
    "Temperature",
    "Pressure",
    "Machine Status",
    "Alarm Panel",
  ],

  maintenance_engineer: [
    "Machine Health",
    "Diagnostics",
    "Maintenance Schedule",
  ],

  supervisor: [
    "Production",
    "Analytics",
    "Reports",
  ],

  production_manager: [
    "Production",
    "KPIs",
    "Efficiency",
  ],

  safety_officer: [
    "Safety Alerts",
    "Incidents",
  ],

  quality_engineer: [
    "Quality Metrics",
    "Inspection",
  ],

  data_analyst: [
    "Analytics",
    "Charts",
    "Reports",
  ],
};