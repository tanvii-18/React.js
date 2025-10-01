import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

export const deleteMessage = createAsyncThunk(
  "chat/deleteMessage",
  async ({ chatId, messageId }) => {
    await deleteDoc(doc(db, "chats", chatId, "messages", messageId));
    return { chatId, messageId };
  }
);

// Create chat between two users
export const createChat = createAsyncThunk(
  "chat/createChat",
  async ({ otherUserId, chatId }) => {
    const currentUserId = auth.currentUser.uid;

    await setDoc(doc(db, "users", currentUserId, "userChats", chatId), {
      participantId: otherUserId,
      lastMessage: "",
      timestamp: serverTimestamp(),
    });

    await setDoc(doc(db, "users", otherUserId, "userChats", chatId), {
      participantId: currentUserId,
      lastMessage: "",
      timestamp: serverTimestamp(),
    });

    await setDoc(doc(db, "chats", chatId), {
      participants: [currentUserId, otherUserId],
      createdAt: serverTimestamp(),
    });

    return { chatId, otherUserId };
  }
);

// Fetch chat list of current user
export const fetchChatList = createAsyncThunk(
  "chat/fetchChatList",
  async () => {
    const userId = auth.currentUser.uid;
    const chatsRef = collection(db, "users", userId, "userChats");
    const q = query(chatsRef, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
);

// Real-time messages listener
export const listenToMessages = (chatId) => (dispatch) => {
  const messagesRef = collection(db, "chats", chatId, "messages");
  const q = query(messagesRef, orderBy("timestamp", "asc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch(setMessages(messages));
  });

  return unsubscribe; // needed to clean up listener
};

// Send message
export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async ({ chatId, text }) => {
    const currentUserId = auth.currentUser.uid;

    const messagesRef = collection(db, "chats", chatId, "messages");
    const newMsg = {
      senderId: currentUserId,
      text,
      timestamp: serverTimestamp(),
    };

    await addDoc(messagesRef, newMsg);

    // Update lastMessage in userChats for both participants
    const chatDocCurrentUser = doc(
      db,
      "users",
      currentUserId,
      "userChats",
      chatId
    );
    const chatDocOtherUser = doc(
      db,
      "users",
      newMsg.participantId,
      "userChats",
      chatId
    );

    await setDoc(
      chatDocCurrentUser,
      { lastMessage: text, timestamp: serverTimestamp() },
      { merge: true }
    );
    // Optional: do same for other participant

    return { chatId, ...newMsg };
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatList: [],
    activeChatId: null,
    messages: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setActiveChat: (state, action) => {
      state.activeChatId = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChat.fulfilled, (state, action) => {
        state.chatList.push(action.payload);
      })
      .addCase(createChat.rejected, (state, action) => {
        state.error = action.error.message;
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
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.messages = state.messages.filter(
          (msg) => msg.id !== action.payload.messageId
        );
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setActiveChat, setMessages } = chatSlice.actions;
export default chatSlice.reducer;
