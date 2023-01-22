import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeCompleted } from "../../features/todo/todoSlice";

function TodoAppControl() {
  const dispatch = useDispatch();

  const removeComplatedTodo = useCallback(() => {
    dispatch(removeCompleted());
  });

  return (
    <div className={style.controlWrapper}>
      <Link className={style.controlItem} to="/">
        All
      </Link>
      <Link className={style.controlItem} to="/active">
        Active
      </Link>
      <Link className={style.controlItem} to="/completed">
        Completed
      </Link>
      <button className={style.removeComplete} onClick={removeComplatedTodo}>
        Remove Completed Tasks
      </button>
    </div>
  );
}

export default TodoAppControl;
