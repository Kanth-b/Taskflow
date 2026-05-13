import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";

const Applayout = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Applayout;
