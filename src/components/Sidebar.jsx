// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-icon.png";
import {
  IoHomeOutline,
  IoDiamondOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { MdAnimation, MdOutlineCurrencyExchange } from "react-icons/md";
import { PiPackageBold, PiHandWithdraw } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiVipCrownLine, RiVipLine, RiContactsLine } from "react-icons/ri";
import { CiGift } from "react-icons/ci";
import { TbHomeMove } from "react-icons/tb";
import { LuBadgePercent } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Sidebar({ open, toggleMenu, isMobile }) {
  return (
    <>
      {/* === Sidebar (only visible when open) === */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#2a2185] text-white z-50 transition-all duration-300 
          ${
            isMobile
              ? open
                ? "translate-x-0 w-[280px]"
                : "-translate-x-full w-0 overflow-hidden"
              : open
              ? "w-[280px]"
              : "w-0 overflow-hidden"
          }
        `}
      >
        {/* === Logo Section === */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-[30px]" />
            <h1 className="text-[15px] font-semibold">Admin Dashboard</h1>
          </div>

          {/* Close button (mobile only) */}
          {isMobile && (
            <button onClick={toggleMenu} className="text-white text-xl">
              ✖
            </button>
          )}
        </div>

        {/* === Sidebar Links === */}
        <ul className="flex flex-col p-2 mt-2 inter">
          <SidebarItem
            to="/dashboard"
            icon={<IoHomeOutline />}
            label="Dashboard"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/user"
            icon={<HiOutlineUserGroup />}
            label="Users"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/viiip"
            icon={<RiVipCrownLine />}
            label="VVIP Package"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/vip"
            icon={<RiVipLine />}
            label="VIP Package"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/diamond"
            icon={<IoDiamondOutline />}
            label="Diamond"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/gift"
            icon={<CiGift />}
            label="Gift"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/agency"
            icon={<TbHomeMove />}
            label="Agency"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/moderator"
            icon={<RiContactsLine />}
            label="Moderator"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/percentage"
            icon={<LuBadgePercent />}
            label="Percentage"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/exchange"
            icon={<MdOutlineCurrencyExchange />}
            label="Exchange Rate"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/animation"
            icon={<MdAnimation />}
            label="Animation"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/room"
            icon={<MdAnimation />}
            label="Room Image"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/bannarimage"
            icon={<MdAnimation />}
            label="Banner Image"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/packagephar"
            icon={<PiPackageBold />}
            label="Package Purchase"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/withdrew"
            icon={<PiHandWithdraw />}
            label="Withdraw Requests"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/userchat"
            icon={<IoChatbubblesOutline />}
            label="User Chat"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
          <SidebarItem
            to="/notification"
            icon={<IoIosNotificationsOutline />}
            label="Notification"
            toggleMenu={toggleMenu}
            isMobile={isMobile}
          />
        </ul>
      </aside>

      {/* === Overlay for mobile === */}
      {isMobile && open && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}
    </>
  );
}

/* === SidebarItem Component === */
function SidebarItem({ to, icon, label, isMobile, toggleMenu }) {
  return (
    <li>
      <NavLink
        to={to}
        end
        onClick={() => {
          if (isMobile) toggleMenu(); // Auto-close on mobile
        }}
        className={({ isActive }) =>
          `flex items-center gap-4 py-2.5 px-4 rounded-md transition-all
          ${
            isActive
              ? "bg-white text-[#2a2185]"
              : "hover:bg-white hover:text-[#2a2185]"
          }`
        }
      >
        <span className="text-[20px]">{icon}</span>
        <span className="text-[15px]">{label}</span>
      </NavLink>
    </li>
  );
}
