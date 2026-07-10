import {
  createContext,
  useState,
  ReactNode,
} from "react";

import type { User } from "../services/authService";

/* -------------------- Context Type -------------------- */

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

/* -------------------- Auth Context -------------------- */

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* -------------------- Provider Props -------------------- */

interface AuthProviderProps {
  children: ReactNode;
}

/* -------------------- Auth Provider -------------------- */

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};