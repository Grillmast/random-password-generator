// Special characters for the function created
const generateButton = document.getElementById('generateBtn');
var characterLength = 8;
var choiceArr = [];

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special = ['!','@','#','$','%','^','&','*','(',')','<','>','?'];

// Write password 
function writePassword() {
    var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateButton.addEventListener('click', writePassword);

function generatePassword() {
var password = "";
for(var i = 0; i < characterLength; i++) {
var randomIndex = Math.floor(Math.random() * choiceArr.length);
password = password + choiceArr[randomIndex];
}
return password;
}

function getPrompts() {
    choiceArr = [];
    characterLength = parseInt(prompt("How many characters whould you like your password to be? Note it can have no less than 8 and no more than 128 characters."));

    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Input must be a number, remember it has to be between 8 - 128.")
        return false;
    }
    if (confirm("Would you like lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerCase);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upperCase);
    }
    if (confirm("Would you like numbers in your password?")) {
        choiceArr = choiceArr.concat(number);
    }
    if (confirm("Would you like special characters in your password?")) {
        choiceArr = choiceArr.concat(special);
    }
    return true;
}