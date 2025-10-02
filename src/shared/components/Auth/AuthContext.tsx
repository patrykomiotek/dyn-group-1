// React Context Hook Pattern
import { createContext, useContext, useState } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  toggle: () => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggle = () => setIsLoggedIn((value) => !value);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return { isLoggedIn, toggle, login, logout };
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside AuthProvider");
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, toggle, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggle, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
