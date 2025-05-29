import React, { useState } from 'react';
import './ToDo.css';
import ToDoItems from './ToDoItems';

const ToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { 
        id: Date.now(), 
        task: inputValue, 
        completed: false 
      }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className="todo-add">
        <input 
          type="text" 
          placeholder='Add your Task' 
          className='todo-input'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className='todo-add-btn' onClick={addTodo}>ADD</div>
      </div>
      <div className='todo-list'>
        {todos.length === 0 ? (
          <div className="no-tasks">No tasks yet. Add one above!</div>
        ) : (
          todos.map(todo => (
            <ToDoItems 
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              onDelete={() => deleteTodo(todo.id)}
              onToggle={() => toggleTodo(todo.id)}
            />
          ))
        )}
      </div>
      {todos.length > 0 && (
        <div className="task-counter">
          {todos.filter(todo => !todo.completed).length} of {todos.length} tasks remaining
        </div>
      )}
    </div>
  );
};

export default ToDo;
