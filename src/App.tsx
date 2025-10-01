import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

function App() {
  return (
    <div className="p-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
