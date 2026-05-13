import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className="task-item">
      <span className={`task-text ${task.completed ? "completed-task" : ""}`}>
        {task.text}
      </span>

      <div className="task-actions">
        <button className="task-btn" onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button className="task-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
