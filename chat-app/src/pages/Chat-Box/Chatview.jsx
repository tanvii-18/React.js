import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listenToMessages,
  sendMessage,
  deleteMessage,
} from "../../slices/userChat";
import { auth } from "../../firebase/firebase";

function ChatView() {
  const dispatch = useDispatch();
  const { activeChatId, messages, isLoading } = useSelector(
    (state) => state.userChat
  );
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Listen to messages in real-time
  useEffect(() => {
    let unsubscribe;
    if (activeChatId) {
      unsubscribe = dispatch(listenToMessages(activeChatId));
    }
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [activeChatId, dispatch]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && activeChatId) {
      dispatch(sendMessage({ chatId: activeChatId, text: newMessage }));
      setNewMessage("");
    }
  };

  const handleDeleteMessage = (messageId) => {
    if (activeChatId) {
      dispatch(deleteMessage({ chatId: activeChatId, messageId }));
    }
  };

  if (!activeChatId) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a user to start chatting
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full border-l border-gray-300">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded-lg max-w-xs ${
                msg.senderId === auth.currentUser.uid
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 text-black"
              } relative`} // relative to position delete button
            >
              {msg.text}

              {/* Show delete button only for sender */}
              {msg.senderId === auth.currentUser.uid && (
                <button
                  onClick={() => handleDeleteMessage(msg.id)}
                  className="absolute top-0 right-0 text-xs text-red-500 px-1"
                  title="Delete message"
                >
                  ✕
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No messages yet.</p>
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center p-2 border-t"
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatView;
