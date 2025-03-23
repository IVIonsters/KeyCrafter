import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast'
import PasswordDisplay from './PasswordDisplay';
import StrengthBar from './StrengthBar';
import CheckboxGroup from './CheckboxGroup';

function PasswordGenerator() {
  //Password and Length State
  const [passwordLength, setPasswordLength] = useState(12)
  const [password, setPassword] = useState('')

  //Character Options Props
  const [characters, setCharacters] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: true })

  //Strength State
  const [strength, setStrength] = useState('')
  const [characterCount, setCharacterCount] = useState('')

  // Character Options Handler
  const handleCharacterChange = (newCharacters) => {
    setCharacters(newCharacters)
  }

  // Strength Handler
  const strengthValue = useCallback(() => {
    if (passwordLength <= 12 && characterCount <= 2) {
      setStrength('weak')
    } else if (passwordLength >= 16 && characterCount >= 3) {
      setStrength('strong')
    } else {
      setStrength('medium')
    }
    // console.log(characterCount)
    return strength
  }, [passwordLength, characterCount, strength])

  //characterCount Hook
  useEffect(() => {
    if (characterCount !== '') {
      strengthValue();
    }
  }, [characterCount, strengthValue])

  function generatePassword() {
    // Character Variables
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";


    //Function Variables
    let charPool = ''
    let password = ''
    let count = 0


    // Character Pool Creation / Strength Count - Future Use 
    if (characters.lowercase === true) {
      charPool += lowercase
      count++
    } if (characters.uppercase === true) {
      charPool += uppercase
      count++
    } if (characters.numbers === true) {
      charPool += numbers
      count++
    } if (characters.symbols === true) {
      charPool += symbols
      count++
    }

    // Password Generation Statement
    if (passwordLength <= 6) {
      toast('Password Length To Short - Try Again with more characters')
      return
    } while (password.length < passwordLength) {
      password += charPool[Math.floor(Math.random() * charPool.length)]
    }
    // Set State Changes - Future Use
    setPassword(password)
    setCharacterCount(count)
  }

  //Generation Disable Check
  const isNoOptionSelected = !characters.uppercase && !characters.lowercase &&
    !characters.numbers && !characters.symbols;

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-6">
      {/* Password Display Section */}
      <div className="w-full">
        <PasswordDisplay
          displayPassword={password} />
      </div>

      {/* Strength Indicator */}
      <div className="w-full">
        <StrengthBar
          strengthValue={strength}
        />
      </div>

      {/* Options Section */}
      <div className="w-full space-y-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Password Options</h2>

        {/* Length Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="passwordLength" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password Length
            </label>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono dark:text-gray-300">
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
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />

          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>4</span>
            <span>32</span>
          </div>
        </div>

        {/* Character Options */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Character Types</h3>
          <CheckboxGroup
            options={characters}
            onCharacterChange={handleCharacterChange}
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          disabled={isNoOptionSelected}
          className={`w-full py-3 px-4 ${isNoOptionSelected ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-700 cursor-pointer'} text-white font-semibold rounded-lg shadow-md focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 focus:outline-none transition-all duration-300`}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;