import React from 'react';
import './ToDoItems.css';

const ToDoItems = ({ task, onDelete, onToggle, completed }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input 
          type="checkbox" 
          checked={completed}
          onChange={onToggle}
          className="todo-checkbox"
        />
        <span className="todo-text">
          {task}
        </span>
      </div>
      <button 
        onClick={onDelete}
        className="todo-delete-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItems;