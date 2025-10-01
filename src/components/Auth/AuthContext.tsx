import { createContext, useState } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  toggle: () => void;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggle = () => setIsLoggedIn((value) => !value);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return { isLoggedIn, toggle, login, logout };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, toggle, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggle, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
