import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { AuthContext } from "./components/Auth/AuthContext";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="p-4">
      {/* <AuthContext> */}
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}
      >
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
