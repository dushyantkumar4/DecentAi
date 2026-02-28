import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import { MyContaxt } from "./MyContaxt.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  const { showSidebar } = useContext(MyContaxt);
  return (
    <div className="flex w-full!">
      <div className={`absolute z-1000 lg:relative `}>
        {showSidebar && <Sidebar className="" />}
      </div>
      <div className="h-screen w-full flex flex-col justify-between">
        <Navbar/>
        <Outlet />
        <Footer/>
      </div>
      
    </div>
  );
};

export default Layout;
