import React from "react";
import { ImCross } from "react-icons/im";

function Todo({ id, message, completed, taskCompleted, deleteTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => taskCompleted(id)}
      />
      <p className={completed ? "active" : ""}>{message}</p>
      <button onClick={() => deleteTodo(id)}>
        <ImCross />
      </button>
    </div>
  );
}

export default Todo;
