// browserRouter - /registration, /sign-up
// hashRouter - /#registration
// memoryRouter - /
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { Layout } from "./components/Layout/Layout";

type Route = Record<
  string,
  {
    path: string;
    title: string;
  }
>;

export const Route: Route = {
  HOME: {
    path: "/",
    title: "Home",
  },
  REGISTRATION: {
    path: "/registration",
    title: "Registration",
  },
};

export const router = createBrowserRouter([
  {
    path: Route.HOME.path, // "/"",
    element: <Layout />,
    children: [
      {
        path: Route.HOME.path,
        element: <HomePage />,
      },
      {
        path: Route.REGISTRATION.path,
        element: <RegistrationPage />,
      },
    ],
  },
]);
