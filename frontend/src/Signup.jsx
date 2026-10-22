import React from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const userName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      userName: userName.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    axios
      .post("http://localhost:2042/signup", user)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Unable to connect to the server", err.message);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4 py-10">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl shadow-black/30">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-9 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl text-white ring-1 ring-white/25">
            ✦
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-blue-100">
            Join us and get started today
          </p>
        </div>

        <div className="px-8 py-8 sm:px-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Username
                </label>
                <input
                  ref={userName}
                  type="text"
                  placeholder="Choose a username"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

                {state && (
                  <p
                    className={`mt-1 text-xs font-medium ${
                      state.toLowerCase().includes("user already exists")
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {state}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  ref={email}
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  ref={password}
                  type="password"
                  placeholder="Create a password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:translate-y-0"
              >
                Create Account
              </button>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200"></div>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Already registered?
                </span>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>

              <button
                type="button"
                onClick={() => {
                  navigate("/login");
                }}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-semibold text-slate-700 transition duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Log In
              </button>
            </div>
          </form>
          {!state.includes("user already exists") && (
            <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-center text-sm font-medium text-green-700">
              {typeof state === "string"
                ? state
                : JSON.stringify(state, null, 2)}
            </div>
          )}
          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            Create your account and get started securely.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
