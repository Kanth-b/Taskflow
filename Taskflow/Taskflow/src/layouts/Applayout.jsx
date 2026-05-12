import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
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
