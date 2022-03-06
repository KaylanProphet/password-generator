// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var symbolsArray = [
  '@',
  '%',
  '+',
  '!',
  '#',
  '$',
  '^',
  '?',
];

// Array of numeric characters to be included in password
var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


// this function is going to take our users input
function generatePassword() {
 var userInput = window.prompt('What do you want the length for your password to be?')

 var passwordLength = parseInt(userInput)

 if (isNaN(passwordLength)) {
   window.alert('Please provide an actual number')
   return
 }
   
 if (passwordLength <8 || passwordLength > 128) {
  window.alert ('Password length must be between 8 and 128 characters')
  return
 }

 var userWantsNumbers = window.confirm('Would you like numbers in your password?')
 var userWantsSymbols = window.confirm('Would you like symbols in your password?')
 var userWantsLowercase = window.confirm('Would you like lowerase letters in your password?')
 var userWantsUppercase = window.confirm('Would you like uppercase in your password?')

 var numberList = ["0","1","2","3","4","5","6","7","8","9"]
 var symbolList = ["!"."@","#","$","%","&","?"]
 var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

 var optionsCart = [numberList]

 if(userWantsNumbers === true) {}
 optionsCart.push(numberList)

  for (let i = 0; i < length; i++) {
    const element = getRandomChar(chosenChar)
    finalPass.push(element)
  }

  return finalPass.join(',')
} 

function getRandomChar(arr){
  var randomIndex = Math.floor(arr.length * Math.random())
  var randomChar = arr[randomIndex]
  return randomChar;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
