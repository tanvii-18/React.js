import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../slices/userSlice";
import { createChat, setActiveChat } from "../../slices/userChat";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ChatList = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);

  const [currentUserId, setCurrentUserId] = useState(null);

  // ✅ Listen for Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUserId(user.uid);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Fetch all users from Firestore
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading || currentUserId === null) return <p>Loading contacts...</p>;

  // ✅ Filter out the logged-in user
  const otherUsers = users.filter((user) => user.id !== currentUserId);

  // ✅ When user clicks, create or open chat
  const handleSelectUser = (otherUserId) => {
    const chatId = [currentUserId, otherUserId].sort().join("_"); // unique chat id
    dispatch(createChat({ otherUserId, chatId }));
    dispatch(setActiveChat(chatId));
  };

  return (
    <div className="w-80 bg-[rgba(55,57,72)] rounded-2xl m-2">
      <input
        type="text"
        placeholder="search here..."
        className="w-full p-2 mb-2 rounded-md"
      />

      <ul>
        {otherUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => handleSelectUser(user.id)}
            className="cursor-pointer hover:bg-gray-700 p-2 rounded-md"
          >
            <strong>{user.username}</strong>
            <p className="text-sm text-gray-400">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
