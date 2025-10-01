import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Button } from "../../ui";

export function AuthCredentials() {
  const context = useContext(AuthContext);

  const handleOnClick = () => {
    context.setIsLoggedIn((value) => !value);
  };

  return (
    <div>
      <p>Is user logged: {context.isLoggedIn ? "YES" : "NO"}</p>
      <Button onClick={handleOnClick}>Toggle</Button>
    </div>
  );
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
