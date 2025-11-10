// src/components/Header.jsx
import React from "react";
import logo2 from "../assets/logo-colored.png";
import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";

export default function Header({ open, toggleMenu }) {
  return (
    <header className="flex justify-between items-center h-[60px] px-[60px]  sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <SlMenu
          onClick={toggleMenu}
          className="cursor-pointer text-2xl text-[#2a2185]"
        />
      </div>

      <div className="w-10 sm:hidden block">
        <img src={logo2} alt="Logo" />
      </div>
      <div className="relative hidden sm:block">
        <CiSearch className="absolute left-3 top-2 text-gray-500" />
        <input
          type="search"
          placeholder="Search here"
          className="border border-gray-300 outline-none pl-10 pr-4 py-1.5 w-[300px] text-[15px] rounded-[10px]"
        />
      </div>
      <div>
        <FaCircleUser className="w-[35px] h-[35px] text-[#2a2185]" />
      </div>
    </header>
  );
}
