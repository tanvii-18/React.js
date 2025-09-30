import ChatList from "./ChatList";
import Chatview from "./Chatview";

function MainChatView() {
  return (
    <div className=" h-screen w-full">
      <div className="flex justify-center h-120 w-200 m-auto bg-[#313447]">
        <ChatList />
        <Chatview />
      </div>
    </div>
  );
}

export default MainChatView;
