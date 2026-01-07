import React from "react";
import img from "../../public/logo.png";

const Sidebar = () => {
  return (
    <section className=" md:flex flex-col w-70 h-screen justify-between  bg-[#171717] text-[#b4b4b4] hidden ">
      <div className="flex flex-col justify-around w-full">
        {/* header  */}
        <button className="flex items-center justify-between px-2 py-1.5 m-2 border border-[rgba(255,255,255,0.5)] bg-transparent rounded-[5px] hover:bg-[rgb(180,180,180,0.05)] cursor-pointer">
          <img
            src={img}
            alt=""
            className="w-9 h-7 hover:shadow-lg hover:shadow-purple-600"
          />
          <span className="hover:shadow-lg hover:shadow-purple-600">
            <i className="fa-regular fa-pen-to-square text-xl text-white bg-[rgb(255,255,255,0.005)]"></i>
          </span>
        </button>

        {/* history */}
        <ul className="p-2 w-full m-2">
          <li className="cursor-pointer p-1 mb-0.5 relative hover:bg-[rgb(180,180,180,0.05)] rounded-lg">
            one
          </li>
          <li className="cursor-pointer px-0.5 py-1 relative hover:bg-[rgb(180,180,180,0.05)] rounded-lg">
            history
          </li>
          <li className="cursor-pointer px-0.5 py-1 relative hover:bg-[rgb(180,180,180,0.05)] rounded-lg">
            third
          </li>
        </ul>
      </div>

      {/* sign  */}
      <div className="hover:text-shadow-lg hover:text-shadow-purple-600 p-2.5 border-t text-center border-[rgb(255,255,255,0.5)] text-white ">
        By DecentAi <i className="fa-solid fa-heart"></i>
      </div>
    </section>
  );
};

export default Sidebar;
