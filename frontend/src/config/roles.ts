import type { UserRole } from "../types/role";

export interface RoleConfig {
  role: UserRole;

  dashboard: string;

menu: {
  label: string;
  path: string;
}[];

  widgets: string[];
}

export const ROLE_CONFIG: Record<UserRole, RoleConfig> = 
{
  admin: {
    role: "admin",
    dashboard: "Administrator Dashboard",
   menu: [
  { label: "Dashboard", path: "/" },
  { label: "Users", path: "/users" },
  { label: "Roles", path: "/roles" },
  { label: "Settings", path: "/settings" },
  { label: "Profile", path: "/profile" },
],
    widgets: [
      "Telemetry",
      "Users",
      "Roles",
      "Analytics",
    ],
  },

  developer: {
    role: "developer",
    dashboard: "Developer Dashboard",
   menu: [
  { label: "Dashboard", path: "/" },
  { label: "Telemetry", path: "/telemetry" },
  { label: "Logs", path: "/logs" },
  { label: "Settings", path: "/settings" },
  { label: "Profile", path: "/profile" },
],
    widgets: [
      "Telemetry",
      "System Logs",
      "API Status",
    ],
  },

  tester: {
    role: "tester",
    dashboard: "Tester Dashboard",
    menu: [
      "Dashboard",
      "Simulation",
      "Reports",
      "Profile",
    ],
    widgets: [
      "Telemetry",
      "Test Results",
    ],
  },

  operator: {
  role: "operator",
  dashboard: "Operator Dashboard",

  menu: [
    { label: "Dashboard", path: "/" },
    { label: "Machines", path: "/machines" },
    { label: "Alarms", path: "/alarms" },
    { label: "History", path: "/history" },
  ],

  widgets: [
    ...
    "Machine Status",]
},

  maintenance_engineer:{
    role: "maintenance_engineer",
    dashboard: "Maintenance Dashboard",
    menu: [
      "Dashboard",
      "Maintenance",
      "Diagnostics",
      "History",
    ],
    widgets: [
      "Machine Health",
      "Diagnostics",
    ],
  },

  supervisor: {
    role: "supervisor",
    dashboard: "Supervisor Dashboard",
    menu: [
      "Dashboard",
      "Production",
      "Reports",
    ],
    widgets: [
      "Production",
      "Analytics",
    ],
  },

  production_manager: {
    role: "production_manager",
    dashboard: "Production Dashboard",
    menu: [
      "Dashboard",
      "Production",
      "Reports",
    ],
    widgets: [
      "Production",
      "KPIs",
    ],
  },

  safety_officer: {
    role: "safety_officer",
    dashboard: "Safety Dashboard",
    menu: [
      "Dashboard",
      "Incidents",
      "Safety",
    ],
    widgets: [
      "Safety Alerts",
      "Incidents",
    ],
  },

  quality_engineer: {
    role: "quality_engineer",
    dashboard: "Quality Dashboard",
    menu: [
      "Dashboard",
      "Inspection",
      "Reports",
    ],
    widgets: [
      "Quality Metrics",
      "Inspection",
    ],
  },

  data_analyst: {
    role: "data_analyst",
    dashboard: "Analytics Dashboard",
    menu: [
      "Dashboard",
      "Analytics",
      "Reports",
    ],
    widgets: [
      "Analytics",
      "Charts",
    ],
  },
};