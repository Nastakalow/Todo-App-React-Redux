import style from "./style.module.css";

function TodoApp({ children }) {
  return <div className={style.container}>{children}</div>;
}

export default TodoApp;
