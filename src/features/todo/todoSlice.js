import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: {},
    lastIndex: 0,
  },
  reducers: {
    addTodo: (state, action) => {
      state.lastIndex++;
      const newTodo = {
        id: state.lastIndex,
        text: action.payload,
        completed: false,
        editabled: false,
      };
      state.todos[state.lastIndex] = newTodo;
    },
    remove: (state, action) => {
      delete state.todos[action.payload];
    },
    completed: (state, action) => {
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
    },
    edit: (state, action) => {
      state.todos[action.payload].editabled = true;
    },
    cancel: (state, action) => {
      state.todos[action.payload].editabled = false;
    },
    save: (state, action) => {
      state.todos[action.payload.id].text = action.payload.text;
      state.todos[action.payload.id].editabled = false;
    },
    removeCompleted: (state, action) => {
      const newTodos = Object.values(state.todos).filter(
        (todo) => !todo.completed
      );
      state.todos = newTodos;
    },
  },
});

export const {
  addTodo,
  remove,
  completed,
  edit,
  cancel,
  save,
  removeCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
