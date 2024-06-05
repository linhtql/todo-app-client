import React, { useEffect, useState } from "react";
import "./App.css";
import client from "./utils/axiosConfig";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    client
      .get("/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTodo = () => {
    if (todoText.trim()) {
      client
        .post("/todos", { id: Date.now(), text: todoText })
        .then((res) => setTodos([...todos, res.data]))
        .catch((err) => console.error(err));
      setTodoText("");
    }
  };

  const deleteTodo = (id) => {
    client
      .delete(`todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Enter a new todo..."
            className="input"
          />
          <button onClick={addTodo} className="add-button">
            Add Todo
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo._id} className="todo-item">
              {todo.text}
              <button
                onClick={() => deleteTodo(todo._id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
