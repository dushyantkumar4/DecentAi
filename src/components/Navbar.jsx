import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 ">
      <div className="hover:text-shadow-lg hover:text-shadow-purple-600 font-semibold cursor-pointer text-lg">
        DecentAi <i className="fa-solid fa-chevron-down"></i>
      </div>

      <div className="flex gap-10 items-center">
        <NavLink to={"#"} className="hover:shadow-lg hover:shadow-purple-600">
          <i className="fa-solid fa-arrow-up-from-bracket text-xl hover:text-shadow-lg hover:text-shadow-purple-600 bg-[rgb(255,255,255,0.005)]"></i>
        </NavLink>
        <NavLink to={"#"} className=" 
        bg-purple-600 rounded-full p-0.5 hover:shadow-lg hover:shadow-purple-600">
          <i className="fa-solid fa-user text-xl hover:text-shadow-lg hover:text-shadow-purple-600  bg-[rgb(255,255,255,0.005)]"></i>
        </NavLink>
        <NavLink to={"#"} className="hover:shadow-lg hover:shadow-purple-600">
          <i className="fa-solid fa-ellipsis-vertical text-xl hover:text-shadow-lg hover:text-shadow-purple-600 bg-[rgb(255,255,255,0.005)]"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
