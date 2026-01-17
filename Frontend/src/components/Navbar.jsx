import { useState, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { MyContaxt } from "../MyContaxt";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showSidebar, setShowSidebar } = useContext(MyContaxt);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center p-3 shadow-lg">
        {/* Name  */}
        <div className="hover:text-shadow-lg hover:text-shadow-purple-600 font-semibold cursor-pointer text-lg">
          DecentAi <i className="fa-solid fa-chevron-down"></i>
        </div>
        {/* nav Links */}
        <div className="relative" ref={dropdownRef}>
          <div className="flex gap-10 items-center">
            <NavLink
              to={"#"}
              className="hover:shadow-lg hover:shadow-purple-600"
            >
              <i className="fa-solid fa-arrow-up-from-bracket navlink-item"></i>
            </NavLink>
            <NavLink
              to={"#"}
              className=" 
        bg-purple-600 rounded-full p-0.5 hover:shadow-lg hover:shadow-purple-600"
            >
              <i className="fa-solid fa-user navlink-item"></i>
            </NavLink>
            <button
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className="hover:shadow-lg hover:shadow-purple-600"
            >
              <i className="fa-solid fa-ellipsis-vertical navlink-item"></i>
            </button>
          </div>
          {/* menu bar  */}

          {isOpen && (
            <div className="absolute top-16 right-10 w-37 bg-[#323232] rounded-md px-2 py-1 text-left z-1000 shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSidebar((prev) => !prev);
                }}
                className="menu-item"
              >
                <i className="fa-solid fa-bars"></i> Menu
              </div>
              <div className="menu-item">
                <i className="fa-solid fa-gear"></i> Settings
              </div>
              <div className="menu-item">
                <i className="fa-solid fa-cloud-arrow-up"></i> Upgrade plan
              </div>
              <div className="menu-item">
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
