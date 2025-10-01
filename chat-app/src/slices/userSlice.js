import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

// ---------------------- SIGN UP ----------------------
export const signUpUser = async (username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      username,
      email,
      id: userCredential.user.uid,
    });

    return {
      username,
      email,
      id: userCredential.user.uid,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ---------------------- SIGN IN ----------------------
export const signInUser = createAsyncThunk(
  "users/signIn",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      email: userCredential.user.email,
      id: userCredential.user.uid,
    };
  }
);

// ---------------------- FETCH ALL USERS ----------------------
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const usersRef = collection(db, "users");
  const snapshot = await getDocs(usersRef);

  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return users;
});

// ---------------------- FETCH CHAT LIST ----------------------
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

// ---------------------- SLICE ----------------------
const initialState = {
  currentUsers: {},
  users: [],
  chatList: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch users
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message || "Failed to fetch users";
      state.isLoading = false;
    });

    // sign-in
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.currentUsers = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.error = action.error.message || "Sign in failed";
      state.isLoading = false;
    });

    // fetch chat list
    builder.addCase(fetchChatList.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchChatList.fulfilled, (state, action) => {
      state.chatList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchChatList.rejected, (state, action) => {
      state.error = action.error.message || "Failed to fetch chat list";
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
