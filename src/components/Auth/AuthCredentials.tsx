import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Button } from "../../ui";

export function AuthCredentials() {
  const context = useContext(AuthContext);

  return (
    <div>
      <p>Is user logged: {context.isLoggedIn ? "YES" : "NO"}</p>
      <Button>Toggle</Button>
    </div>
  );
}
