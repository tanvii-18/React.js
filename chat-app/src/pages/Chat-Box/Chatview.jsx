import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const ChatView = ({ userId }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // 🔹 Real-time listener
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Send message
  const sendMessage = async () => {
    if (!message.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: message,
      senderId: userId,
      timestamp: serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div className="w-130">
      <div className="">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${
              msg.senderId === userId ? "sent" : "received"
            }`}
          >
            <strong
              className={msg.senderId === userId ? "you-label" : "sender-label"}
            >
              {msg.senderId === userId ? "You" : msg.senderId}
            </strong>

            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatView;
