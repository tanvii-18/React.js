import { useState } from "react";
import { signUpUser } from "../../slices/userSlice";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signUpUser(name, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-[#262837] w-full max-w-sm p-7 rounded-2xl shadow-lg">
        <h2 className="text-white">Sign Up</h2>
        <form className="w-full" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-[#313447] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6687FF]"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-[#313447] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6687FF]"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 rounded-lg bg-[#313447] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6687FF]"
          />

          <button
            className="w-full h-12 bg-[#6687FF] hover:bg-[#506df5] transition rounded-2xl font-semibold text-amber-50 cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>

          {/* <p className="mt-4 text-center text-sm text-amber-50">
            Don’t have an account?{" "}
            <span className="hover:underline hover:text-[#6687FF] transition-all cursor-pointer">
              Sign up
            </span>
          </p> */}

          {/* {error && <p className="text-red-400 mt-2">{error}</p>} */}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
