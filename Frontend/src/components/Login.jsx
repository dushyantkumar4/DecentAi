import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <form action="" className="flex flex-col gap-10 items-center">
        <div className="flex items-center gap-5">
          <label htmlFor="email" className={`font-bold text-xl`}>Email</label>
          <input
            type="email"
            className={`py-2 px-3 rounded border-2 `}
            placeholder="enter email"
            name="email"
          />
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor="name" className={`font-bold text-xl`}>Name</label>
          <input
            type="text"
            className={`py-2 px-3 rounded border-2 `}
            placeholder="enter name"
            name="name"
          />
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor="password" className={`font-bold text-xl`}>Password</label>
          <input
            type="password"
            className={`py-2 px-3 rounded border-2 `}
            placeholder="enter password"
            name="password"
          />
        </div>
        {/* Button section  */}
        <div className="flex gap-5">
          <button
            type="button"
            className="text-black bg-white py-1.5 px-5 rounded-2xl font-semibold"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="text-black bg-white py-1.5 px-5 rounded-2xl font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
