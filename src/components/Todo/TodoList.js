import { useSelector } from "react-redux";
import style from "./style.module.css";
import TodoItem from "./TodoItem";

function TodoList({ show }) {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div className={style.todoList}>
      {Object.values(todos)
        .filter(
          (todo) =>
            (show === "active" && !todo.completed) ||
            (show === "completed" && todo.completed) ||
            show === "all"
        )
        .map((todo) => (
          <TodoItem key={`todo-item-${todo.id}`} {...todo} />
        ))}
    </div>
  );
}

export default TodoList;
