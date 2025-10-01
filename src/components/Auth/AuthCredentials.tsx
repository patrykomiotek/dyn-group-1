import { useContext } from "react";
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
