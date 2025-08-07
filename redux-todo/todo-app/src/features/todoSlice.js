import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "wake up at 6AM !",
    value: true,
  },
];

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
      state.splice(action.payload,1);
    },
  },
});

export default todoSlice.reducer;
export const { add,remove } = todoSlice.actions;
