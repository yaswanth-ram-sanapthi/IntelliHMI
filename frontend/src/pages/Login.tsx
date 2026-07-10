import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { authenticateUser } from "../services/authService";

const Login = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    employeeId: "",
    password: "",
  });

  const handleLogin = () => {
    if (!validateForm()) {
      return;
    }

    const user = authenticateUser(employeeId, password);

    if (!user) {
      alert("Invalid Employee ID or Password");
      return;
    }

    alert(`Welcome ${user.name}!`);

    console.log(user);
  };
  const validateForm = () => {
    const newErrors = {
      employeeId: "",
      password: "",
    };

    let isValid = true;

    if (!employeeId.trim()) {
      newErrors.employeeId = "Employee ID is required";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
        {/* Branding */}
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white shadow-lg">
            ⚙
          </div>

          <h2 className="mt-4 text-2xl font-bold text-white">IntelliHMI</h2>

          <p className="mt-1 text-sm text-slate-400">
            Industrial Monitoring Platform
          </p>
        </div>

        {/* Welcome */}
        <h1 className="mt-8 text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Sign in to continue to IntelliHMI
        </p>

        {/* Employee ID */}
        <div className="mt-8">
          <label
            htmlFor="employeeId"
            className="block text-sm font-medium text-slate-300"
          >
            Employee ID
          </label>
          <input
            id="employeeId"
            type="text"
            placeholder="Enter your Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          {errors.employeeId && (
            <p className="mt-2 text-sm text-red-400">{errors.employeeId}</p>
          )}
        </div>

        {/* Password */}
        <div className="mt-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-300"
          >
            Password
          </label>

          <div className="relative mt-2">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 pr-12 text-white placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-sm text-red-400">{errors.password}</p>
          )}
        </div>
        {/* Remember Me & Forgot Password */}
        <div className="mt-6 flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-slate-600 bg-slate-700 accent-blue-600"
            />
            Remember Me
          </label>

          <button
            type="button"
            className="text-sm text-blue-400 transition hover:text-blue-300"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign In Button */}
        <div className="mt-8">
          <button
            type="button"
           onClick={handleLogin}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
          {/* Divider */}
          <div className="my-8 border-t border-slate-700"></div>

          {/* New Employee */}
          <div className="text-center">
            <p className="text-sm text-slate-400">New Employee?</p>

            <button
              type="button"
              className="mt-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
