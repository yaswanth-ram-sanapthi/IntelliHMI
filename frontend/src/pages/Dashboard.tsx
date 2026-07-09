import TelemetryCard from "../components/TelemetryCard/TelemetryCard";
import { currentUser } from "../data/currentUser";
import { DASHBOARD_WIDGETS } from "../config/dashboard";
import { WIDGET_REGISTRY } from "../config/widgetRegistry";

export default function Dashboard() {
  const widgets = DASHBOARD_WIDGETS[currentUser.role];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {widgets.map((widget) => {
          const WidgetComponent = WIDGET_REGISTRY[widget];

          if (!WidgetComponent) return null;

          if (
            widget === "Temperature" ||
            widget === "Pressure" ||
            widget === "Voltage" ||
            widget === "Current" ||
            widget === "RPM" ||
            widget === "Status"
          ) {
            return (
              <TelemetryCard
                key={widget}
                title={widget}
                value="--"
              />
            );
          }

          return <WidgetComponent key={widget} />;
        })}
      </div>
    </div>
  );
}