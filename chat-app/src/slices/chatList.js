// chatList.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

// fetch chat list of logged-in user (last 5 chats)
export const fetchChatList = createAsyncThunk(
  "users/fetchChatList",
  async () => {
    const userId = auth.currentUser.uid;
    const chatsRef = collection(db, "users", userId, "chats");
    const q = query(chatsRef, orderBy("timestamp", "desc"), limit(5));
    const snapshot = await getDocs(q);

    const chatUsers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return chatUsers;
  }
);

const chatListSlice = createSlice({
  name: "users",
  initialState: {
    currentUsers: {},
    users: [],
    chatList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChatList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchChatList.fulfilled, (state, action) => {
      state.chatList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchChatList.rejected, (state) => {
      state.error = "Chat list couldn't fetch!";
      state.isLoading = false;
    });
  },
});

export default chatListSlice.reducer;
