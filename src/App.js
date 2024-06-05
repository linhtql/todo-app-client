import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoText }]);
      setTodoText('');
    }
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={todoText}
            onChange={e => setTodoText(e.target.value)}
            placeholder="Enter a new todo..."
            className="input"
          />
          <button onClick={addTodo} className="add-button">Add Todo</button>
        </div>
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className="todo-item">
              {todo.text}
              <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
