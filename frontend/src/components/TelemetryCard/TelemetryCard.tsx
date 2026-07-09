import { Activity } from "lucide-react";

interface TelemetryCardProps {
  title: string;
  value: string;
}

export default function TelemetryCard({
  title,
  value,
}: TelemetryCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-cyan-500 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-slate-300 font-medium">
          {title}
        </h3>

        <Activity
          size={22}
          className="text-cyan-400"
        />
      </div>

      {/* Value */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-white">
          {value}
        </h2>
      </div>

      {/* Status */}
      <div className="mt-5 flex items-center justify-between">

        <span className="text-sm text-slate-400">
          Status
        </span>

        <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
          Normal
        </span>

      </div>

    </div>
  );
}