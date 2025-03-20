/* eslint-disable no-unused-vars */
import { useState } from 'react';

function PasswordGenerator() {

  function generatePassword() {
    // Character Variables
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";


    //Function Variables
    let charPool = 'abcdefghijklmnopqrstuvwxyz'
    let password = ''
    let passwordLength = '12'

    //Generation Disable Check - Future Use


    // Character Pool Creation / Strength Count - Future Use 


    // Password Generation Statement
    if (passwordLength < 6) {
      alert('please create a longer password')
    } while (password.length < passwordLength) {
      password += charPool[Math.floor(Math.random() * charPool.length)]
      console.log(password)
    }

    // Set State Changes - Future Use


  }


  return (
    <div className="w-full">
      <label
        htmlFor="passwordLength"
        className="flex justify-between items-center text-sm font-semibold text-gray-800"
      >
        <span>Password Length</span>
        <output className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">12</output>
      </label>
      <input
        type="range"
        min="4"
        max="64"
        defaultValue="12"
        id="passwordLength"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-teal-500"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>4</span>
        <span>64</span>
      </div>
    </div>
  );
}

export default PasswordGenerator;