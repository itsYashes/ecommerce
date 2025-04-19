import React from "react";
import { assets } from "../assets/assets";

const NavBar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img src={assets.logo} alt="Admin logo" className="w-[max(10%,80px)]" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full tex-sm sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
