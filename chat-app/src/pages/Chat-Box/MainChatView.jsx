import ChatList from "./ChatList";
import Chatview from "./Chatview";

function MainChatView() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      {/* Main Box */}
      <div className="flex h-[450px] w-[70%] bg-[#313447] rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Sidebar - Chat List */}
        <div className="w-[300px] border-r border-gray-600">
          <ChatList />
        </div>

        {/* Right Side - Chat View */}
        <div className="flex-1">
          <Chatview />
        </div>
      </div>
    </div>
  );
}

export default MainChatView;
