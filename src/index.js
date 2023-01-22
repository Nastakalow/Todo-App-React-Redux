import ReactDOM from "react-dom/client";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodoList } from "./components/Todo";
import store from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <TodoList show={"all"} />,
      },
      {
        path: "active/",
        element: <TodoList show={"active"} />,
      },
      {
        path: "completed/",
        element: <TodoList show={"completed"} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
