/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";


function PasswordDisplay({ displayPassword }) {

  return (
    <div className="space-y-3">
      <div className="relative">
        <input
          type="text"
          id="password"
          readOnly
          placeholder="your secure password"
          value={displayPassword}
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-mono text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <button
          id="toggleVisibility"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
          aria-label="Toggle password visibility"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      </div>

      <button
        id="copyBtn"
        className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}

export default PasswordDisplay;