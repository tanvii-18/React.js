import React, { useState } from "react";
import "../App.css";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    toast("🎉Successful Login!");
  };

  return (
    <div className="login">
      <h1>LogIn</h1>
      <div className="details">
        <label htmlFor="Email">Email : </label>
        <input
          type="email"
          placeholder="enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="Password">Password : </label>
        <input
          type="password"
          placeholder="enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
