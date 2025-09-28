import { useState } from "react";
import { signUpUser } from "../../slices/userSlice";
import { Link } from "react-router-dom";

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
    <div className="h-screen w-screen bg-[#1C1F2C] flex flex-col justify-center items-center px-4">
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold text-amber-50 tracking-wide">
          Thread<span className="text-[#6687FF]">ly</span>
        </h1>
        <p className="font-light text-[0.1rem] text-gray-400 mt-1">
          Where every chat finds its thread.
        </p>
      </div>

      {/* <h2 className="text-3xl font-semibold text-amber-50 mt-10 m-5 ">
        Sign Up
      </h2> */}
      <div className="bg-[#262837] w-full max-w-sm p-7 rounded-2xl shadow-lg">
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

          <p className="mt-4 text-center text-sm text-amber-50">
            Already have an account?{" "}
            <Link to="/">
              <span className="hover:underline hover:text-[#6687FF] transition-all cursor-pointer">
                Sign In
              </span>
            </Link>
          </p>

          {/* {error && <p className="text-red-400 mt-2">{error}</p>} */}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
