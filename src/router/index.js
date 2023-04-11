import { Suspense, lazy } from "react";
import Layout from "../components/Layout";
import Sign from "../pages/Sign";

import NotFound from "../components/NotFound";
const Home = lazy(() => import("../pages/Home.js"));
const Video = lazy(() => import("../pages/Video.js"));

const LayoutComponent = ({ children }) => {
  return (
    <Suspense fallback={""}>
      <Layout />
    </Suspense>
  );
};

export const routers = [
  { path: "/sign", element: <Sign />, auth: false },
  {
    path: "/",
    element: <LayoutComponent />,
    auth: true,
    children: [
      { path: "/home", element: <Home />, auth: true },
      { path: "/video", element: <Video />, auth: true },
      { path: "*", element: <NotFound />, auth: true },
    ],
  },
];