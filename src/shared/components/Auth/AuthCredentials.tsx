import { useCallback, useMemo } from "react";
// import { AuthContext } from "./AuthContext";
import { useAuthContext } from "./AuthContext";
import { Button } from "../../ui";

export function AuthCredentials() {
  const context = useAuthContext(); // state cell (AuthProvider)

  const memoizedValue = useMemo(() => {
    // some complicated calculations
    // etc. passing arguments and calculate value
    return 4;
  }, []);

  const handleOnClick = useCallback(() => {
    context.toggle();
  }, []);

  return (
    <div>
      <p>Is user logged: {context.isLoggedIn ? "YES" : "NO"}</p>
      <Button onClick={handleOnClick}>Toggle</Button>
    </div>
  );
}
