import { useLocation } from "react-router-dom";
import { currentUser } from "../data/currentUser";
import { ROLE_CONFIG } from "../config/roles";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/users": "Users",
  "/roles": "Roles",
  "/settings": "Settings",
  "/profile": "Profile",
};

export default function Navbar() {
  const location = useLocation();

  const currentPage =
    pageTitles[location.pathname] || "IntelliHMI";
    const roleConfig = ROLE_CONFIG[currentUser.role];

  return (
    <header className="h-16 bg-slate-800 border-b border-slate-700 px-6 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold">
             {roleConfig.dashboard}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Notification */}
        <button className="text-xl hover:text-cyan-400 transition-colors">
          🔔
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
         <div className="w-9 h-9 rounded-full bg-cyan-600 flex items-center justify-center font-semibold">
            {currentUser.name.charAt(0).toUpperCase()}
         </div>

          <span className="text-slate-200">
             {currentUser.name}
        </span>
        </div>

      </div>

    </header>
  );
}