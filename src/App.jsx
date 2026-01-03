import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import MyContextProvider from "./MyContextProvider";
import { router } from "./router";


const App = () => {
  return (
    <div className="font-sans text-[#ececec] bg-[#212121]">
      <MyContextProvider>
        <RouterProvider router={router} />
      </MyContextProvider>
    </div>
  );
};

export default App;
