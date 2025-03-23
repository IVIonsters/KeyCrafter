/* eslint-disable react/prop-types */
import toast, { Toaster } from 'react-hot-toast'
import { useState } from "react";


function PasswordDisplay({ displayPassword }) {

  // toast notifications
  const passwordCopied = () => toast('Password Copied To Clipboard');

  //Show / Hide State
  const [show, setShow] = useState('text')

  //handler for show state
  const handlePasswordDisplay = () => {
    if (show === 'text') {
      setShow('password')
    } else {
      setShow('text')
    }
  }

  // Copy password 
  const copyPassword = () => navigator.clipboard.writeText(displayPassword)
    .then(() => {
      // alert('Text Copied To Clipboard')
      console.log('Text Copied To clipboard ')
    })
    .catch(err => {
      console.error('Failed to Copy Text', err)
    })

  // Multiple onClick Handler
  const handleClick = () => {
    copyPassword();
    passwordCopied();
  }

  return (
    <div className="space-y-3">
      <div className="relative">
        <input
          type={show}
          id="password"
          readOnly
          placeholder="your secure password"
          value={displayPassword}
          className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 font-mono text-base focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500"
        />

        <div className="absolute inset-y-0 right-3 flex items-center">
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={show === 'text'}
              onChange={handlePasswordDisplay}
            />
            <div className="w-9 h-5 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-500"></div>
            <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">Show</span>
          </label>
        </div>
      </div>

      <button
        id="copyBtn"
        className="w-full py-2 px-4 bg-teal-500 dark:bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 dark:hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500 focus:outline-none transition-all duration-300"
        onClick={handleClick}
      >
        Copy to Clipboard
      </button>
      <Toaster />
    </div>
  );
}

export default PasswordDisplay;