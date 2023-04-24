import React from "react";
import { Outlet } from "react-router-dom";
import Navibar from "../../fragments/Navibar";
import Music from "../../fragments/Music";
import TopNav from "../../fragments/TopNav";

const LayoutPage = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <Navibar />
        <Music />
        <TopNav />
      </div>
      <Outlet />
    </div>
  );
};
export default LayoutPage;
