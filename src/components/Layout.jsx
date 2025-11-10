import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setOpen(false);
      } else {
        setIsMobile(false);
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={open} toggleMenu={toggleMenu} isMobile={isMobile} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isMobile ? "ml-0" : open ? "ml-[280px]" : "ml-20"
        }`}
      >
        <Header open={open} toggleMenu={toggleMenu} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
