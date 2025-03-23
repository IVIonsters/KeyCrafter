/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

function StrengthBar({ strengthValue }) {

  //Bar Visuals
  const strengthClasses = {
    weak: "bg-red-500 w-1/4",
    medium: "bg-yellow-500 w-1/2",
    strong: "bg-green-500 w-full"
  }

  //Display Text
  const strengthText = {
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong'
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm font-medium text-gray-700">
          Password Strength
        </p>
        <div className="flex items-center">
          <span id="strengthText" className="text-sm font-medium">{strengthText[strengthValue]}</span>
          <span
            className="ml-1 text-xs text-gray-500 cursor-help"
            title="Strength is determined by password length and character variety"
          >
            ⓘ
          </span>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div className={`${strengthClasses[strengthValue]} h-2.5 rounded-full`}></div>
      </div>
    </div>
  );
}

export default StrengthBar;