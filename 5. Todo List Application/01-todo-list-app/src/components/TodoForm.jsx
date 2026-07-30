import React, { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const newTodo = {
    id: uuidv4(),
    message: todo,
    completed: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      message: todo,
      completed: false,
    };
    if (todo.trim() !== "") {
      addTodo(newTodo);
    } else {
      toast.error("Please fill this input field");
    }
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
