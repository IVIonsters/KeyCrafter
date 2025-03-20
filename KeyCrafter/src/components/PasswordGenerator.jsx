/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PasswordDisplay from './PasswordDisplay';
import StrengthBar from './StrengthBar';
import CheckboxGroup from './CheckboxGroup';

function PasswordGenerator() {
  //Password and Length State
  const [passwordLength, setPasswordLength] = useState(12)
  const [password, setPassword] = useState('')

  //Character Options Props
  const [characters, setCharacters] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: true })

  function generatePassword() {
    // Character Variables
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";


    //Function Variables
    let charPool = ''
    let password = ''

    //Generation Disable Check - Future Use


    // Character Pool Creation / Strength Count - Future Use 
    if (characters.lowercase === true) {
      charPool += lowercase
    } if (characters.uppercase === true) {
      charPool += uppercase
    } if (characters.numbers === true) {
      charPool += numbers
    } if (characters.symbols === true) {
      charPool += symbols
    }
    // Dedubg CharPool
    // console.log(charPool)


    // Password Generation Statement
    if (passwordLength < 6) {
      alert('please create a longer password')
    } while (password.length < passwordLength) {
      password += charPool[Math.floor(Math.random() * charPool.length)]
    }
    // Debug Logs
    // console.log(password)

    // Set State Changes - Future Use
    setPassword(password)

  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-6">
      {/* Password Display Section */}
      <div className="w-full">
        <PasswordDisplay
          displayPassword={password} />
      </div>

      {/* Strength Indicator */}
      <div className="w-full">
        <StrengthBar />
      </div>

      {/* Options Section */}
      <div className="w-full space-y-5">
        <h2 className="text-xl font-semibold text-gray-800">Password Options</h2>

        {/* Length Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="passwordLength" className="text-sm font-medium text-gray-700">
              Password Length
            </label>
            <span className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
              {passwordLength}
            </span>
          </div>

          <input
            type="range"
            min="4"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            id="passwordLength"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />

          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>4</span>
            <span>32</span>
          </div>
        </div>

        {/* Character Options */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Character Types</h3>
          <CheckboxGroup />
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all duration-300"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;