import { createSlice } from "@reduxjs/toolkit";

const initialState =  JSON.parse(localStorage.getItem("todos")) || [];


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({
        title: action.payload,
        value: false,
      });
    },
    remove: (state, action) => {
      state.splice(action.payload, 1);
    },
    update: (state, action) => {
      const { index, title, value } = action.payload;
      if (state[index]) {
        state[index].title = title;
        state[index].value = value;
      }
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, update } = todoSlice.actions;
