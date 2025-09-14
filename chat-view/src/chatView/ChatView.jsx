import React from "react";
import "../chatView/chatview.css";

function ChatView() {
  return (
    <div className="flex gap-5">
      {/* <h1>Hello</h1> */}
      <div className="h-140 w-80 bg-amber-600 rounded-2xl"></div>
      <div className="h-140 w-80 bg-amber-500 rounded-2xl"></div>
    </div>
  );
}

export default ChatView;
