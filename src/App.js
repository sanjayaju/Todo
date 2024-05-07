import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [removedTodos, setRemovedTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, { id: Date.now(), Text: todo, status: false }]);
      setTodo(""); // Clear input field after adding todo
    }
  };

  const handleToggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    const removedTodo = todos.find((todo) => todo.id === id);
    setRemovedTodos([...removedTodos, removedTodo]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleRemoveCompleted = () => {
    const completed = todos.filter((todo) => todo.status);
    setCompletedTodos([...completedTodos, ...completed]);
    setTodos(todos.filter((todo) => !todo.status));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={() => handleToggleStatus(obj.id)}
                checked={obj.status}
                type="checkbox"
              />
              <p>{obj.Text}</p>
            </div>
            <div className="right">
              <i onClick={() => handleDeleteTodo(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleRemoveCompleted}>Remove Completed</button>
      <div>
        <h2>Completed Todos</h2>
        {completedTodos.map((todo) => (
          <p key={todo.id}>{todo.Text}</p>
        ))}
      </div>
      <div>
        <h2>Removed Todos</h2>
        {removedTodos.map((todo) => (
          <p key={todo.id}>{todo.Text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
