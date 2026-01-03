import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";

const Layout = () => {
  return (
    <div className="w-full">
      <div className="flex gap-5 w-full">
        <Sidebar className=""/>
        <ChatWindow className=""/>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
