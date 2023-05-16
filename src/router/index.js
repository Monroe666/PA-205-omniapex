import { Suspense, lazy } from "react";
import Layout from "../components/Layout";
import Sign from "../pages/Sign";

import NotFound from "../components/NotFound";
const Home = lazy(() => import("../pages/Home.js"));
const Video = lazy(() => import("../pages/Video.js"));
const Post = lazy(() => import("../pages/Post.js"));
const Social = lazy(() => import("../pages/Social.js"));
const VideoPlay = lazy(() => import("../pages/VideoPlay.js"));
const UserProfile = lazy(() => import("../pages/UserProfile.js"));
const Messaging = lazy(() => import("../pages/Messaging.js"));
const Album = lazy(() => import("../pages/Albums.js"));

const LayoutComponent = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Layout />
    </Suspense>
  );
};

export const routers = [
  { path: "/sign", element: <Sign />, auth: true },
  {
    path: "/",
    element: <LayoutComponent />,
    auth: false,
    children: [
      { path: "/", element: <Home />, auth: false },
      { path: "/home", element: <Home />, auth: false },
      { path: "/video", element: <Video />, auth: false },
      { path: "/videoPlay", element: <VideoPlay />, auth: false },
      { path: "/post", element: <Post />, auth: false },
      { path: "/social", element: <Social />, auth: false },
      { path: "/userprofile", element: <UserProfile />, auth: false },
      { path: "/messaging", element: <Messaging />, auth: false },
      { path: "/album", element: <Album />, auth: false },
      { path: "*", element: <NotFound />, auth: false },
    ],
  },
];