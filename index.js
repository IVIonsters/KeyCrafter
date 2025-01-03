// Main Variables
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";
let passwordLength = document.getElementById("passwordLength").value;

// Variable to combine all characters
const addCharacters = upperCase + lowerCase + numbers + symbols;

// DOM elements
const passwordOne = document.getElementById("passwordOne");

// Update password length when slider changes
document.getElementById("passwordLength").addEventListener("input", function() {
  passwordLength = this.value;
  document.getElementById("sliderValue").textContent = passwordLength;
});

// Generate password function
function generatePassword() {
  let password = ""; // Reset password variable
  let addCharacters = ""; // Reset addCharacters variable

  // Check which options are selected
  if (document.getElementById("includeUpperCase").checked) {
    addCharacters += upperCase;
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
  }
  if (document.getElementById("includeLowerCase").checked) {
    addCharacters += lowerCase;
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  if (document.getElementById("includeNumbers").checked) {
    addCharacters += numbers;
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (document.getElementById("includeSymbols").checked) {
    addCharacters += symbols;
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  // For loop to generate password
  for (let i = password.length; i < passwordLength; i++) {
    password += addCharacters[Math.floor(Math.random() * addCharacters.length)];
  }
  passwordOne.textContent = password; // Update the DOM element
  return password;
}


// Copy password function
function copyPassword() {
  // Create a temporary input element
  const tempInput = document.createElement("input");
  // Set its value to the password
  tempInput.value = passwordOne.textContent;
  // Append it to the body
  document.body.appendChild(tempInput);
  // Select the input value
  tempInput.select();
  // Copy the selected value
  navigator.clipboard.writeText(tempInput.value);
  // Remove the temporary input element
  document.body.removeChild(tempInput);
  // Log to console and alert user
  console.log("Password copied to clipboard");
}

// Event to copy password
const copyButton = document.getElementById("copy");
if (copyButton) {
  copyButton.removeEventListener("click", copyPassword); // Remove any existing event listener
  copyButton.addEventListener("click", copyPassword); // Add the event listener
}