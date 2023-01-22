import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  remove,
  completed,
  edit,
  cancel,
  save,
} from "../../features/todo/todoSlice";
import { useRef } from "react";

function TodoItem({ text, id }) {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const inpRef = useRef();

  const deleteTodo = () => {
    dispatch(remove(id));
  };

  const completedTodo = () => {
    dispatch(completed(id));
  };

  const editTodo = () => {
    dispatch(edit(id));
  };

  const saveEdit = () => {
    const text = inpRef.current.value;
    if (text.length > 14) {
      return;
    }

    dispatch(save({ text, id }));
  };

  const cancelEdit = () => {
    dispatch(cancel(id));
  };

  if (todos[id]?.editabled === true) {
    return (
      <>
        <div className={style.editItem}>
          <input
            ref={inpRef}
            className={style.editInput}
            type="text"
            placeholder="Edit..."
            defaultValue={text}
          />

          <div className={style.editItemBtnWrapper}>
            <button onClick={saveEdit} className={style.saveBtn}>
              Save
            </button>
            <button onClick={cancelEdit} className={style.cancelBtn}>
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={style.todoItem}>
      <h3
        className={`${style.todoText} ${
          todos[id]?.completed ? style.completed : ""
        }`}
      >
        {text}
      </h3>
      <div>
        <button
          onClick={completedTodo}
          className={`${style.completeBtn} ${
            todos[id]?.completed ? style.completed : ""
          }`}
        >
          Complete
        </button>
        <button
          onClick={editTodo}
          className={`${style.editBtn} ${
            todos[id]?.completed ? style.completed : ""
          }`}
        >
          Edit
        </button>
        <button
          onClick={deleteTodo}
          className={`${style.deleteBtn} ${
            todos[id]?.completed ? style.completed : ""
          }`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
