import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

// create chat between users
export const createChat = createAsyncThunk(
  "chat/createChat",
  async ({ otherUserId, chatId }) => {
    const currentUserId = auth.currentUser.uid;

    // add to current user's userChats
    await setDoc(doc(db, "users", currentUserId, "userChats", chatId), {
      participantId: otherUserId,
      lastMessage: "",
      timestamp: serverTimestamp(),
    });

    // add to other user's userChats
    await setDoc(doc(db, "users", otherUserId, "userChats", chatId), {
      participantId: currentUserId,
      lastMessage: "",
      timestamp: serverTimestamp(),
    });

    // create main chat
    await setDoc(doc(db, "chats", chatId), {
      participants: [currentUserId, otherUserId],
      createdAt: serverTimestamp(),
    });

    return { chatId, otherUserId };
  }
);

// fetch chat list
export const fetchChatList = createAsyncThunk(
  "chat/fetchChatList",
  async () => {
    const userId = auth.currentUser.uid;
    const chatsRef = collection(db, "users", userId, "userChats");
    const q = query(chatsRef, orderBy("timestamp", "desc"), limit(5));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.chatList.push(action.payload);
        state.isLoading = false;
      })
      .addCase(createChat.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      .addCase(fetchChatList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChatList.fulfilled, (state, action) => {
        state.chatList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchChatList.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default chatSlice.reducer;
