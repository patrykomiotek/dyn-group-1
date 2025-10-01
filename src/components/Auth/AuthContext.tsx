import { createContext } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
}

const defaultValue: AuthContextProps = {
  isLoggedIn: false,
};

export const AuthContext = createContext(defaultValue);
