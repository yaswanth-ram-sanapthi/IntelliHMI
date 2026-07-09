export interface DashboardWidget {
  id: string;

  title: string;

  component: string;

  size: "small" | "medium" | "large";
}   