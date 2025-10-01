import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import ChatListReducer from "../slices/chatList";
import chatSliceReducer from "../slices/userChat";

export const store = configureStore({
  reducer: {
    users: userReducer,
    chatList: ChatListReducer,
    userChat: chatSliceReducer,
  },
});
