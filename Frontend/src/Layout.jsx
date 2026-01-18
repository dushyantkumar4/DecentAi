import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import { MyContaxt } from "./MyContaxt.jsx";

const Layout = () => {
  const { showSidebar } = useContext(MyContaxt);
  return (
    <div className="flex w-full">
      <div className={`absolute z-1000 lg:relative `}>{showSidebar && <Sidebar className="" />}</div>

      <Outlet />
    </div>
  );
};

export default Layout;
