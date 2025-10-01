import { createContext, type Dispatch, type SetStateAction } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: AuthContextProps = {
  isLoggedIn: false,
  setIsLoggedIn: () => null,
};

export const AuthContext = createContext(defaultValue);
