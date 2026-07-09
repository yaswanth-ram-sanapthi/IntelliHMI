import { NavLink } from "react-router-dom";
import { currentUser } from "../data/currentUser";
import { ROLE_CONFIG } from "../config/roles";

export default function Sidebar() {
  const roleConfig = ROLE_CONFIG[currentUser.role];

  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-slate-700">
        <h2 className="text-2xl font-bold text-cyan-400">
          IntelliHMI
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-4 gap-2">
        {roleConfig.menu.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-600 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}