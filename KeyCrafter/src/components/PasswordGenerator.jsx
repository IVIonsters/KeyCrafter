/* eslint-disable no-unused-vars */
import react from 'react';

function passwordGenerator() {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor="passwordLength"
          className="block text-sm font-semibold text-gray-800"
        >
          Password Length:
        </label>
        <input
          type="number"
          value="12"
          id="passwordLength"
          className="w-full p-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
        />
      </div>
      <button
        id="generateBtn"
        className="w-full py-2 px-4 bg-emerald-400 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-400 focus:outline-none transform hover:scale-105 transition-transform duration-300"
      // style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6)"
      >
        Generate Password
      </button>
    </>
  )
}

export default passwordGenerator;