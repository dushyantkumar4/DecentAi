import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center p-3 shadow-lg">
        <div className="hover:text-shadow-lg hover:text-shadow-purple-600 font-semibold cursor-pointer text-lg">
          DecentAi <i className="fa-solid fa-chevron-down"></i>
        </div>

        <div className="flex gap-10 items-center">
          <NavLink to={"#"} className="hover:shadow-lg hover:shadow-purple-600">
            <i className="fa-solid fa-arrow-up-from-bracket text-xl hover:text-shadow-lg hover:text-shadow-purple-600 bg-[rgb(255,255,255,0.005)]"></i>
          </NavLink>
          <NavLink
            to={"#"}
            className=" 
        bg-purple-600 rounded-full p-0.5 hover:shadow-lg hover:shadow-purple-600"
          >
            <i className="fa-solid fa-user text-xl hover:text-shadow-lg hover:text-shadow-purple-600  bg-[rgb(255,255,255,0.005)]"></i>
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to={"#"}
            className="hover:shadow-lg hover:shadow-purple-600"
          >
            <i className="fa-solid fa-ellipsis-vertical text-xl hover:text-shadow-lg hover:text-shadow-purple-600 bg-[rgb(255,255,255,0.005)]"></i>
          </NavLink>
        </div>
      </div>
      <div className="place-self-end">
        {isOpen && (
          <div className="absolute top-16 right-10 w-37 bg-[#323232] rounded-md px-2 py-1 text-left z-1000 shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
            <div className="cursor-pointer hover:bg-[rgba(180,180,180,0.1)] hover:rounded-md my-[0.3rem] text-[0.9rem] py-2 px-[0.2rem]">
              <i className="fa-solid fa-gear"></i> Settings
            </div>
            <div className="cursor-pointer hover:bg-[rgba(180,180,180,0.1)] hover:rounded-md my-[0.3rem] text-[0.9rem] py-2 px-[0.2rem]">
              <i className="fa-solid fa-cloud-arrow-up"></i> Upgrade plan
            </div>
            <div className="cursor-pointer hover:bg-[rgba(180,180,180,0.1)] hover:rounded-md my-[0.3rem] text-[0.9rem] py-2 px-[0.2rem]">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
