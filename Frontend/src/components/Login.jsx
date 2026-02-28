import React, { useContext } from "react";
import { MyContaxt } from "../MyContaxt";

const Login = () => {
  const { register, setRegister, theme } = useContext(MyContaxt);
  return (
    <>
      <div className="flex justify-center items-center w-full mt-10">
        <form
          action=""
          className="flex p-10 rounded-lg flex-col gap-10  shadow-lg shadow-purple-600 "
        >
          {register ? (
            <div className="flex items-center justify-between gap-5">
              <label htmlFor="email" className={`font-bold text-xl`}>
                Email
              </label>
              <input
                type="email"
                className={`py-2 px-3 rounded border-2  ${theme ? "placeholder:text-gray-300" : "placeholder:text-black/60"} `}
                placeholder="enter email"
                name="email"
              />
            </div>
          ) : (
            <></>
          )}

          <div className="flex items-center justify-between gap-5">
            <label htmlFor="name" className={`font-bold text-xl`}>
              Name
            </label>
            <input
              type="text"
              className={`py-2 px-3 rounded border-2  ${theme ? "placeholder:text-gray-300" : "placeholder:text-black/60"} `}
              placeholder="enter name"
              name="name"
            />
          </div>
          <div className="flex items-center justify-between gap-5">
            <label htmlFor="password" className={`font-bold text-xl`}>
              Password
            </label>
            <input
              type="password"
              className={`py-2 px-3 rounded border-2  ${theme ? "placeholder:text-gray-300" : "placeholder:text-black/60"} `}
              placeholder="enter password"
              name="password"
            />
          </div>
          {/* Button section  */}
          <div className="flex gap-5">
            <button
              type="button"
              className={`py-1.5 px-5 rounded-2xl font-semibold hover:shadow-md hover:shadow-purple-600 cursor-pointer shadow-md
            hover:text-shadow-lg hover:text-shadow-purple-600  ${theme ? "bg-white text-black " : " bg-gray-200 text-black"}`}
              onClick={() => {
                setRegister(true);
              }}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={`py-1.5 px-5 rounded-2xl font-semibold hover:shadow-md hover:shadow-purple-600 cursor-pointer shadow-md
            hover:text-shadow-lg hover:text-shadow-purple-600  ${theme ? "bg-white text-black " : " bg-gray-200 text-black"}`}
              onClick={() => {
                setRegister(false);
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
