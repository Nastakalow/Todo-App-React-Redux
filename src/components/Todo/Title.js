import style from "./style.module.css";

function Title({ children }) {
  return <h1 className={style.title}>{children}</h1>;
}

export default Title;
