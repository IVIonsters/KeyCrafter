// Main Variables
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+';
const passwordLength = 14;

//variable to combine all characters
const addCharacters = upperCase + lowerCase + numbers + symbols;


// generate password function
function generatePassword() {
    let password='';
    //math.random to generate, math.floor to round down
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
  //for loop to generate password
    for (let i = 0; i < passwordLength; i++) {
        password += addCharacters[Math.floor(Math.random() * addCharacters.length)];
        console.log(password);
    }
    return password;
    
}