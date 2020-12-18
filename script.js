// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");
// var startBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Password variable value is: " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //ask for length
  var length = parseInt(prompt("How many characters will your password be?"));
  console.log("Length is " + length);
  
  // run a loop for length amount of times
  if(length >= 8 && length <= 128) {
    alert("You have chosen a password of " + length + " characters.")
  }
  else {
    alert("Characters needs to be between 8 and 128.");
    generatePassword();
  }
  
  var yesSpecialCharacters = confirm("Would you like use special characters?");
  console.log(yesSpecialCharacters);
  var yesNumericCharacters = confirm("Would you like to use numbers?");
  console.log(yesNumericCharacters);
  var yesLowerCaseCharacters = confirm("Would you like to use lower case letters?");
  console.log(yesLowerCaseCharacters);
  var yesUpperCaseCharacters = confirm("Would you like to use upper case letters?")
  console.log(yesUpperCaseCharacters);

 
  // We Create an ARRAY of VALUES to choose from - Based on what the USER wants
  var password = [];
  console.log(password);

  // IF/ELSE conditional TESTS to determine what values from each ARRAY should be included in the PASSWORD
  if(yesSpecialCharacters == true) {

    password.push(specialCharacters);
  } 

  if(yesNumericCharacters == true) {

    password.push(numericCharacters);
  }

  if(yesLowerCaseCharacters == true) {

    password.push(lowerCaseCharacters);
  }

  if(yesUpperCaseCharacters == true) {

    password.push(upperCaseCharacters);
  }

  console.log(password);
    // IF YES(true) --> how would I add to the password array? (What JavaSCRIPT ARRAY METHOD would we use? -> PUSH() )
    // IF NO(false) --> do NOT add them to the password variable array (DO NOTHING!!!)
    
   

  // return the password
  return password.join("");
}

// DEFINE A NEW FUNCTION 