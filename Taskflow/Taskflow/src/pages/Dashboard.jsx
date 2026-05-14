import React from "react";
import { useContext } from "react";
import { TaskContext } from "../App";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const { tasks ,setFilter } = useContext(TaskContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const recentTasks = [...tasks].reverse().slice(0, 5);
  return (
    <div>
      <div className="dashboard-page">
        <h1>Dashboard</h1>
        <div className="stats-grid">
          <div className="stat-card" onClick={()=>{navigate("/tasks"); setFilter("all") }}>
            <h2>Total Tasks</h2>
            <p>{totalTasks}</p>
          </div>
          <div className="stat-card" onClick={()=>{navigate("/tasks"); setFilter("active") }}>
            <h2>Pending Tasks</h2>
            <p>{pendingTasks}</p>
          </div>
          <div className="stat-card" onClick={()=>{navigate("/tasks"); setFilter("completed") }}>
            <h2>Completed Tasks</h2>
            <p>{completedTasks}</p>
          </div>
        </div>
        <div className="recent-tasks">
          <h2>Recent Tasks</h2>
          {recentTasks.length === 0 ? (
            <p>No Recent Tasks Found</p>
          ) : (
            recentTasks.map((task) => (
              <li key={task.id} className="recent-task-item">
                <span>{task.text}</span>
              </li>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
