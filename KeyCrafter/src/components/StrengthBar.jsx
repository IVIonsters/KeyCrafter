/* eslint-disable no-unused-vars */
import { useState } from 'react';

function StrengthBar() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm text-gray-700">
          Password Strength
        </p>
        <div className="flex items-center">
          <span id="strengthText" className="text-sm font-medium text-red-500">Weak</span>
          <span
            className="ml-1 text-xs text-gray-500 cursor-help"
            title="Strength is determined by password length and character variety"
          >
            ⓘ
          </span>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
      </div>
    </div>
  );
}

export default StrengthBar;