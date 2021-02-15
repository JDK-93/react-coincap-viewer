import React from "react";

import logo from "../logo.svg";
const NavBar = ({ history }) => {
  return (
    <div className="h-1/6 w-screen flex flex-row justify-start items-center p-4 bg-yellow-300">
      <img
        className="h-full"
        src={logo}
        alt="logo"
      />
      <h1 className="pl-8 text-center text-3xl font-semibold text-gray-700">
        Crypto Viewer
      </h1>
    </div>
  );
};
export default NavBar;
