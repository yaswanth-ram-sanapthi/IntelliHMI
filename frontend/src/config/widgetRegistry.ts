import TelemetryCard from "../components/TelemetryCard/TelemetryCard";
import AlarmCard from "../components/widgets/AlarmCard";
import MachineStatusCard from "../components/widgets/MachineStatusCard";
import LogCard from "../components/widgets/LogCard";
import AnalyticsCard from "../components/widgets/AnalyticsCard";
import TestResultCard from "../components/widgets/TestResultCard";
import UserManagementCard from "../components/widgets/UserManagementCard";

export const WIDGET_REGISTRY = {
  Temperature: TelemetryCard,
  Voltage: TelemetryCard,
  Pressure: TelemetryCard,
  Current: TelemetryCard,
  RPM: TelemetryCard,
  Status: TelemetryCard,

  "Machine Status": MachineStatusCard,
  "Alarm Panel": AlarmCard,

  "System Logs": LogCard,
  Analytics: AnalyticsCard,

  "Test Results": TestResultCard,

  "User Management": UserManagementCard,
};