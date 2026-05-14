import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { createContext, useState } from "react";

export const TaskContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");
  return (
    <>
      <TaskContext.Provider value={{ tasks, setTasks, filter, setFilter }}>
        <AppRoutes />
      </TaskContext.Provider>
      ;
    </>
  );
};

export default App;
