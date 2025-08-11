import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});


store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todo));
});

export default store;
