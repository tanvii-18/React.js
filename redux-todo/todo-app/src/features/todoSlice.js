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
        console.log("addded",action)
      state.push({ title: "go to gym", value: false });
    },
  },
});

export default todoSlice.reducer;
export const { add } = todoSlice.actions;
