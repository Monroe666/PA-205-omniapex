import { Suspense, lazy } from "react";
import Layout from "../components/Layout";
import Sign from "../pages/Sign";

import NotFound from "../components/NotFound";
const Home = lazy(() => import("../pages/Home.js"));
const Video = lazy(() => import("../pages/Video.js"));
const Post = lazy(() => import("../pages/Post.js"));
const Social = lazy(() => import("../pages/Social.js"));

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
      { path: "/post", element: <Post />, auth: true },
      { path: "/social", element: <Social />, auth: true },
      { path: "*", element: <NotFound />, auth: true },
    ],
  },
];