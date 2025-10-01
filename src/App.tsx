import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { AuthContext } from "./components/Auth/AuthContext";

function App() {
  return (
    <div className="p-4">
      {/* <AuthContext.Provider> */}
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
