import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import ChatListReducer from "../slices/chatList";

export const store = configureStore({
  reducer: {
    users: userReducer,
    chatList: ChatListReducer,
  },
});
