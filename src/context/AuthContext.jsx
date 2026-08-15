import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("nexora_user");
    return saved ? JSON.parse(saved) : { name: "Shubham", email: "shubham@example.com" };
  });

  const login = (nextUser = { name: "Shubham", email: "shubham@example.com" }) => {
    localStorage.setItem("nexora_token", "demo-token");
    localStorage.setItem("nexora_user", JSON.stringify(nextUser));
    setUser(nextUser);
  };

  const logout = () => {
    localStorage.removeItem("nexora_token");
    localStorage.removeItem("nexora_user");
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout, isAuthenticated: Boolean(user) }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}