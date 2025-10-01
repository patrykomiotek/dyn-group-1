// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";
import { useAuthContext } from "./AuthContext";
import { Button } from "../../ui";

export function AuthCredentials() {
  const context = useAuthContext();

  const handleOnClick = () => {
    context.toggle();
  };

  return (
    <div>
      <p>Is user logged: {context.isLoggedIn ? "YES" : "NO"}</p>
      <Button onClick={handleOnClick}>Toggle</Button>
    </div>
  );
}
