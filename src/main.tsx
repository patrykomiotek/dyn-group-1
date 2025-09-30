import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

const htmlRoot = document.getElementById("root")!;

createRoot(htmlRoot).render(
  <StrictMode>
    <App />
  </StrictMode>
);
