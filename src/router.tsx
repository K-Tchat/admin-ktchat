import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout.tsx";
import { Dashboard } from "./pages/user/dashboard.tsx";
import { NotFoundPage } from "./pages/errors/404.tsx";
import { ProtectedLayout } from "./layouts/protcted-layout.tsx";

export const paths = {
  // * Empty route
  EMPTY: "",
  NONE: "*",

  // * Main route
  HOME: "/",

  // * Auth routes
  AUTH: "/auth",
  LOGIN: "/auth/login",

  // * User routes
  DASH: "/dashboard",
} as const;

export const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <MainLayout />,
    children: [
      {
        path: paths.EMPTY,
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={paths.DASH} />,
          },
          {
            path: paths.DASH,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: paths.AUTH,
        children: [
          {
            index: true,
            element: <Navigate to={paths.LOGIN} />,
          },
          {
            path: paths.LOGIN,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: paths.NONE,
        element: <NotFoundPage />,
      },
    ],
  },
]);
