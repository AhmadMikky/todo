import React, { useState } from "react";
import ImgHero from "./images/images.jpg"; // Adjust the path accordingly
import "./App.css"; // Import the CSS file

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    const newTodo = {
      title: todo,
      done: false,
      id: Math.random().toString(),
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const deleteItem = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${ImgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      }}
    >
       
      <div className="container">
        <div className="form">
          <input
            className="input"
            placeholder="Add New ToDo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addTodo} className="addButton">
            Add
          </button>
        </div>

        <div className="todoListContainer">
        {todos.map((item, index) => (
  <div
    key={item.id}
    style={{
      backgroundColor: index % 2 === 0 ? "#e0e0e0" : "#f0f0f0",
    }}
    className="todoContainer"  // Update class name
  >
    <div className="todo">
      <span>{item.title}</span>
    </div>
    <button onClick={() => deleteItem(item.id)} className="deleteButton">  {/* Update class name */}
      Delete
    </button>
  </div>
))}
        </div>
      </div>
    </div>
  );
};

export default App;
