import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoList";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
