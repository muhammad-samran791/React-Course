import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList((prevState) => [...prevState, newTodo]);
  };

  const taskCompleted = (id) => {
    setTodoList((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <main className="container">
        <ToastContainer />
        <h1 className="title">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          taskCompleted={taskCompleted}
          deleteTodo={deleteTodo}
        />
      </main>
    </>
  );
}

export default App;
