/* eslint-disable no-unused-vars */
import react, { useState } from 'react';

function CheckboxGroup() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <label
        className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <input
          type="checkbox"
          id="includelowercase"
          className="h-4 w-4 rounded border-gray-300 accent-teal-500 focus:ring-teal-400"
          defaultChecked
        />
        <span className="text-gray-800 text-sm">Lowercase (a-z)</span>
      </label>

      <label
        className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <input
          type="checkbox"
          id="includeuppercase"
          className="h-4 w-4 rounded border-gray-300 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 text-sm">Uppercase (A-Z)</span>
      </label>

      <label
        className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <input
          type="checkbox"
          id="includenumbers"
          className="h-4 w-4 rounded border-gray-300 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 text-sm">Numbers (0-9)</span>
      </label>

      <label
        className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <input
          type="checkbox"
          id="includespecialcharacters"
          className="h-4 w-4 rounded border-gray-300 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 text-sm">Symbols (!@#$)</span>
      </label>
    </div>
  );
}

export default CheckboxGroup;