import React from "react";
import "../chatView/chatview.css";

function ChatView() {
  return (
    <div className="flex justify-center gap-5 my-4">
      {/* <h1>Hello</h1> */}
      <div className="h-130 w-80 rounded-2xl bg-[radial-gradient(circle_at_bottom_center,rgba(26,16,61,0.6)_20%,rgba(90,7,168,0.4)_60%,rgba(26,16,61,0.6)_90%)]">
        Box1
      </div>
      <div className="h-130 w-80 rounded-2xl bg-[radial-gradient(circle_at_bottom_center,rgba(26,16,61,0.6)_20%,rgba(90,7,168,0.4)_60%,rgba(26,16,61,0.6)_90%)]">
        Box2
      </div>
    </div>
  );
}

export default ChatView;
