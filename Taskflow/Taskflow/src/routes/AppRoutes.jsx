import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "../layouts/Applayout";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
