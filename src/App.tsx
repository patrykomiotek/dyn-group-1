import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { AuthProvider } from "./components/Auth/AuthCredentials";

function App() {
  return (
    <div className="p-4">
      {/* <AuthContext> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
