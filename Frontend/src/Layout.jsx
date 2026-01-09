import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";

const Layout = () => {
  return (
    <div className="flex gap-5 w-full">
      <Sidebar className="" />
      <Outlet />
    </div>
  );
};

export default Layout;
