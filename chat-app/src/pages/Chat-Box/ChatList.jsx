import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../slices/userSlice";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ChatList = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);

  // State to hold logged-in user's UID
  const [currentUserId, setCurrentUserId] = useState(null);

  // Listen for Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUserId(user.uid);
    });
    return () => unsubscribe();
  }, []);

  // Fetch all users from Firestore
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Show loading while either fetching users or waiting for auth
  if (isLoading || currentUserId === null) return <p>Loading contacts...</p>;

  // Filter out the logged-in user
  const otherUsers = users.filter((user) => user.id !== currentUserId);

  return (
    <div className="w-80 bg-[rgba(55,57,72)] rounded-2xl m-2">
      <input type="text" placeholder="search here..." />

      <ul>
        {otherUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
