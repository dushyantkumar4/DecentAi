import { useState, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { MyContaxt } from "../MyContaxt";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(MyContaxt);
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
      <div className="flex justify-between items-center p-3 shadow-lg rounded-md">
        {/* Name  */}
        <div className="hover:text-shadow-lg hover:text-shadow-purple-600 font-semibold cursor-pointer text-lg">
          DecentAi <i className="fa-solid fa-chevron-down"></i>
        </div>
        {/* nav Links */}
        <div className="relative" ref={dropdownRef}>
          <div className="flex gap-10 items-center">
            <button onClick={() => setTheme((prev) => !prev)}>
              {theme === true ? (
                <i className="cursor-pointer fa-solid fa-circle-half-stroke hover:text-shadow-lg hover:text-shadow-purple-600 hover:shadow-lg hover:shadow-purple-600"></i>
              ) : (
                <i className="cursor-pointer fa-regular fa-moon hover:text-shadow-lg hover:text-shadow-purple-600"></i>
              )}
            </button>
            <NavLink to={"#"} className="">
              <i
                className={`fa-solid fa-arrow-up-from-bracket navlink-item hover:text-shadow-purple-600 bg-transparent ${theme && "hover:shadow-lg hover:shadow-purple-600"}`}
              ></i>
            </NavLink>
            <NavLink
              to={"#"}
              className=" 
        bg-purple-600 rounded-full p-0.5 hover:shadow-lg hover:shadow-purple-600"
            >
              <i className="fa-solid fa-user navlink-item text-white"></i>
            </NavLink>
            <button
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className=""
            >
              <i
                className={`cursor-pointer fa-solid fa-ellipsis-vertical navlink-item hover:text-shadow-lg hover:text-shadow-purple-600 bg-transparent ${theme && "hover:shadow-lg hover:shadow-purple-600"}`}
              ></i>
            </button>
          </div>
          {/* menu bar  */}

          {isOpen && (
            <div
              className={`absolute top-16 right-10 w-37 ${theme === true ? "bg-[#323232]" : "bg-white"}  rounded-md px-2 py-1 text-left z-1000 shadow-[0px_2px_8px_rgba(0,0,0,0.1)]`}
            >
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
