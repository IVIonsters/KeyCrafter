/* eslint-disable no-unused-vars */
import react from 'react';

function passwordDisplay() {
  return (
    <>
      <button
        id="copyBtn"
        className="w-full py-2 px-4 bg-teal-400 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-500 focus:ring-2 focus:ring-teal-400 focus:outline-none transform hover:scale-105 transition-transform duration-300"
      // style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6)"
      >
        Copy to Clipboard
      </button>
      <p
        id="password"
        className="w-full p-3 mt-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-mono text-sm"
      >
        Your Secure Password
      </p>
    </>
  )
}

export default passwordDisplay;