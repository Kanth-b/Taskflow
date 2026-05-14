import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "../layouts/Applayout";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
