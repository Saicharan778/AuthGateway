import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4 py-10">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white text-center shadow-2xl shadow-black/30">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5 12 4 4L19 6"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Successfully Logged In!
          </h1>

          <p className="mt-3 text-sm leading-6 text-blue-100">
            Welcome back! You have successfully accessed your account.
          </p>
        </div>

        <div className="px-8 py-9 sm:px-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="h-7 w-7 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.1a7.5 7.5 0 0 1 15 0A17.9 17.9 0 0 1 12 21.75c-2.7 0-5.25-.6-7.5-1.65Z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-slate-800">
            You're all set!
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Your account is ready. Enjoy exploring the application.
          </p>

          <div className="mt-7 rounded-xl border border-green-100 bg-green-50 px-4 py-3">
            <p className="text-sm font-medium text-green-700">
              ✓ Authentication successful
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-semibold text-slate-700 transition duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 active:scale-[0.98]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Go Back
          </button>

          <p className="mt-7 text-xs text-slate-400">
            Thank you for being here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
