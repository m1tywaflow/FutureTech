import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
export const ROUTER_PATHS = {
  HOME: "/",
  ABOUT: "/about",
  EVENT: "/event",
};
const AppLayout = lazy(() => import("./App"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
