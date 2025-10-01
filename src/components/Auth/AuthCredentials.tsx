import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function AuthCredentials() {
  const context = useContext(AuthContext);

  return (
    <div>
      <p>Is user logged: {context.isLoggedIn ? "YES" : "NO"}</p>
    </div>
  );
}
