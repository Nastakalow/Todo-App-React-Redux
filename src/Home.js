import { TodoApp, Title, AddTodo, TodoAppControl } from "./components/Todo";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <TodoApp>
      <Title>Todo App</Title>

      <AddTodo />

      <Outlet />

      <TodoAppControl />
    </TodoApp>
  );
}

export default Home;
