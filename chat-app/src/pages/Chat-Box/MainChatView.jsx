import ChatList from "./ChatList";
import Chatview from "./Chatview";

function MainChatView() {
  return (
    <div className=" h-screen w-full">
      <div className="flex justify-center h-130 w-210 m-auto bg-[#313447] rounded-2xl">
        <ChatList />
        <Chatview />
      </div>
    </div>
  );
}

export default MainChatView;
