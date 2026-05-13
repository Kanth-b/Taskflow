import React from "react";

const TaskInput = ({ taskInput, setTaskInput, onAddTask }) => {
  return (
    <div className="task-input-container">
      <input
        className="search-input"
        className="task-input"
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button className="add-task-btn" onClick={onAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
