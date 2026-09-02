import { useReducer } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

const reducer = (todos, action) => {
  if (action.type === "COMPLETED") {
    return todos.map((todo) => {
      return { ...todo, completed: !todo.completed };
    });
  } else {
    return todos;
  }
};
const initialTodos = [
  { id: "1", title: "I Am Web Dewoloper", completed: true },
  { id: "2", title: "I Tech Programing", completed: false },
  { id: "3", title: "I Am Ride a Bike", completed: true },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handelCompleted = () => {
    dispatch({
      type: "COMPLETED",
    });
  };

  return (
    <>
      <TodoForm />
      <TodoList todos={todos} handelCompleted={handelCompleted} />
    </>
  );
}

export default App;
