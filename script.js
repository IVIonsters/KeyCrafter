
// Password Character Options
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*()";

// validate charPool function
function passwordValidation() {
  let charPool = "";
  const charOptions = document.querySelectorAll(".charOption");
  let passwordLength = parseInt(document.getElementById("passwordLength").value, 10);

  // Use .filter() to calculate diversityCount
  let diversityCount = Array.from(charOptions).filter(option => option.checked).length;

  // Dynamically build charPool
  charOptions.forEach(option => {
    if (option.checked) {
      if (option.id === "includelowerCase") charPool += lowerCase;
      if (option.id === "includeupperCase") charPool += upperCase;
      if (option.id === "includenumbers") charPool += numbers;
      if (option.id === "includespecialCharacters") charPool += specialCharacters;
    }
  });

  // Validate charPool and length
  if (charPool === "") {
    alert("Please select at least one character type");
    return null;
  }

  if (passwordLength < 8 || passwordLength > 32 || isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 32");
    return null;
  }

  return { charPool, passwordLength, diversityCount };
}


// Function to generate password
function generatePassword() {
  // check validation
  const validationResult = passwordValidation();
  if (!validationResult) return;

  // destructure the values from the validationResult
  const { charPool, passwordLength } = validationResult;
  let password = "";

  // create last character pool to avoid repeating characters
  let lastChar = "";

  // loop to generate each character of the password
  for (let i = 0; i < passwordLength; i++) {
    let newChar = "";
    do {
      if (newChar === lastChar) {
        console.log("repeating character");
      }
      // generate a random index from the lowerCase string
      let randomIndex = Math.floor(Math.random() * charPool.length);
      newChar = charPool[randomIndex];
    } while (newChar === lastChar); {
      // add the new character to the password
      password += newChar;
      lastChar = newChar;
    }

  }
  // log the password to the console
  // console.log(password);
  // console.log(charPool);
  return password;
}

// function to generate password strength
function passwordStrength() {
  const validationResult = passwordValidation();
  if (!validationResult) return;

  const { passwordLength, diversityCount } = validationResult;
  const strengthBar = document.getElementById("strengthBar");
  const strengthText = document.getElementById("strengthText");

  let passwordStrength = "Weak";
  let progressValue = 25;
  let color = "#f87171"; // Tailwind Red-400 as default for Weak

  if (passwordLength >= 12 && diversityCount === 4) {
    passwordStrength = "Very Strong";
    progressValue = 100;
    color = "#2563eb"; // Tailwind Blue-600
  } else if (passwordLength >= 12 && diversityCount === 3) {
    passwordStrength = "Strong";
    progressValue = 75;
    color = "#10b981"; // Tailwind Green-500
  } else if (passwordLength >= 12 && diversityCount === 2) {
    passwordStrength = "Moderate";
    progressValue = 50;
    color = "#facc15"; // Tailwind Yellow-400
  }

  // Update progress bar value
  strengthBar.value = progressValue;

  // Dynamically set CSS variable for the color
  strengthBar.style.setProperty("--tw-bg-color", color);

  // Update strength text
  strengthText.textContent = passwordStrength;

  return passwordStrength;
}


// Add event listener to generate button
document.getElementById("generateBtn").addEventListener("click", function () {
  // generate and display password
  let generatedPassword = generatePassword();
  document.getElementById("password").textContent = generatedPassword;
  document.getElementById("strengthText").textContent = passwordStrength();
})

// Add event listener to copy button
document.getElementById('copyBtn').addEventListener('click', function () {
  // grab the password text
  document.getElementById("password").textContent;
  navigator.clipboard.writeText(document.getElementById("password").textContent);
  alert("Password copied to clipboard");
})

