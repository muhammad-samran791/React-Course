import React from "react";
import Todo from "./Todo";

function TodoList({ todoList, taskCompleted, deleteTodo }) {
  return (
    <div>
      {todoList.map((getTodo) => (
        <Todo
          {...getTodo}
          key={getTodo.id}
          taskCompleted={taskCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
