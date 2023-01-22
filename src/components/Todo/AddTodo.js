import style from "./style.module.css";
import { useCallback } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

function AddTodo() {
  const inpRef = useRef();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    const text = inpRef.current.value;
    if (text.length > 14) {
      return;
    }
    dispatch(addTodo(text));
    inpRef.current.value = "";
  });

  return (
    <>
      <div className={style.addTodoWrapper}>
        <input
          ref={inpRef}
          className={style.addInput}
          type="text"
          placeholder="Add todo..."
        />
        <button onClick={onClick} className={style.addButton}>
          Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
