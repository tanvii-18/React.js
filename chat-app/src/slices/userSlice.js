import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

// todo : sign up user

export const signUpUser = async (username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      username: username,
      email: email,
      id: userCredential.user.uid,
    });

    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};

// todo : sign in user

export const signInUser = createAsyncThunk(
  "users/signIn",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      email: userCredential.user.email,
      id: userCredential.user.uid,
    };
    return user;
  }
);

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map((doc) => doc.data());
  console.log("pass");
  return users;
});

const initialState = {
  currentUsers: {},
  users: [],
  isLoading: true,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error = "user didn't fetched !";
      state.isLoading = false;
    });

    // sign-in
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.currentUsers = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signInUser.rejected, (state) => {
      state.error = "user didn't fetched !";
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
