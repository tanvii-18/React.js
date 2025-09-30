import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Chatview from "./pages/Chat-Box/Chatview";
import ChatList from "./pages/Chat-Box/ChatList";
import MainChatView from "./pages/Chat-Box/MainChatView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/ChatView" element={<MainChatView />} />
        <Route path="/ChatList" element={<ChatList />} />
        <Route path="/MessageContainer" element={<Chatview />} />
        <Route
          path="*"
          element={
            <h2 className="text-red-700 text-3xl text-center mt-[5%] font-serif">
              404 not found !
            </h2>
          }
        />
      </Routes>
    </>
  );
}

export default App;
