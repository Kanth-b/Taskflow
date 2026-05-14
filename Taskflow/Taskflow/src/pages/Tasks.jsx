import React from "react";
import { useState } from "react";
import TaskList from "../components/tasks/TaskList";
import TaskInput from "../components/tasks/TaskInput";
import { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../App";

const Tasks = () => {
  const [taskInput, setTaskInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { tasks, setTasks, filter, setFilter } = useContext(TaskContext);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "active") {
        return task.completed === false;
      } else if (filter === "completed") {
        return task.completed;
      }
      return true;
    })
    .filter((task) => {
      return task.text.toLowerCase().includes(searchQuery.toLowerCase());
    });

  function handleAddTask() {
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);

    setTaskInput("");
  }
  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function handleToggleTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleAllClearTasks() {
    const deleteConfirm = confirm(
      "Do you really want to delete all the tasks?",
    );

    if (deleteConfirm) {
      setTasks([]);
    }
  }

  function handleEditTask(taskId, editedText) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              text: editedText,
            }
          : task,
      ),
    );
  }
  return (
    <div className="tasks-page">
      <h1 className="tasks-title">Tasks Page</h1>
      <TaskInput
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        onAddTask={handleAddTask}
      />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks..."
      />
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "active-filter" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={filter === "completed" ? "active-filter" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button className="clear-tasks" onClick={() => handleAllClearTasks()}>
          Clear All
        </button>
      </div>
      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <h2>No Tasks Found</h2>

          <p>Add a new task to get started.</p>
        </div>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
          onEdit={handleEditTask}
        />
      )}
    </div>
  );
};

export default Tasks;
