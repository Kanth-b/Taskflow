import React from "react";
import { useState } from "react";

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  function handleSave() {
    if (editedText.trim() === "") {
      return;
    }
    onEdit(task.id, editedText);

    setIsEditing(false);
  }
  return (
    <li className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            }
          }}
          className="edit-input"
        />
      ) : (
        <p className={`task-text ${task.completed ? "completed-task" : ""}`}>
          {task.text}
        </p>
      )}

      <div className="task-actions">
        <button
          className="task-btn"
          onClick={() => onDelete(task.id)}
          disabled={isEditing}
        >
          Delete
        </button>

        {isEditing ? (
          <>
            <button className="task-btn complete-btn" onClick={handleSave}>
              Save
            </button>

            <button
              className="task-btn undo-btn"
              onClick={() => {
                setEditedText(task.text);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="task-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button
              className={`task-btn ${
                task.completed ? "undo-btn" : "complete-btn"
              }`}
              onClick={() => onToggle(task.id)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
