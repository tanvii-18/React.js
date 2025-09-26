import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Chatview from "./pages/chat-view/Chatview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/Chatview" element={<Chatview />} />
      </Routes>
    </>
  );
}

export default App;
