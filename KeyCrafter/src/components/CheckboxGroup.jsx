/* eslint-disable no-unused-vars */
import react, { useState } from 'react';

function CheckboxGroup() {
  return (
    <div className="space-y-2 w-full">
      <label
        className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
      >
        <input
          type="checkbox"
          id="includelowerCase"
          className="charOption h-5 w-5 rounded border-gray-300 accent-teal-500 focus:ring-teal-400"
          defaultChecked
        />
        <span className="text-gray-800 font-medium">Lowercase</span>
      </label>
      <label
        className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
      >
        <input
          type="checkbox"
          id="includeupperCase"
          className="charOption h-5 w-5 rounded border-gray-300 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 font-medium">Uppercase</span>
      </label>
      <label
        className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
      >
        <input
          type="checkbox"
          id="includenumbers"
          className="charOption h-5 w-5 rounded border-gray-300 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 font-medium">Numbers</span>
      </label>
      <label
        className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
      >
        <input
          type="checkbox"
          id="includespecialCharacters"
          className="charOption h-5 w-5 rounded border-gray-300 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 font-medium">Special Characters</span>
      </label>
    </div>
  );
}

export default CheckboxGroup;