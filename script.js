// Assignment code here
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar ='!@#$%^&*()_+={}[]|?/><:';
//prompt password length
function promptLength () {
  var passwordLen = prompt('How many characters would you like your password to be? Can only be 8 to 128 character.'
  );

  //validate number 8 to 128
  if (passwordLen < 8 || passwordLen > 128 || passwordLen === null){
    window.alert('Password character amount must be between 8 and 126 characters!');
    return promptLength();
  }
console.log(passwordLen);
  //return valid number
  return passwordLen;
};

//prompt series fro character types
function promptCharacterSelection () {
  var criteria= '';
  var specialChar ='!@#$%^&*()_+={}[]|?/><:';
  //pasword criteria
  var lowerCase = confirm("Do you want lower case letters?");
      upperCase = confirm('Do you want upper case letters?');
      numbersChar = confirm('Do you want numbers?');
      speChar = confirm('Do you want special characters?');

    //criteria prompts
    if(lowerCase === true){
      criteria += alphabetLower
    }
    if(upperCase === true){
      criteria += alphabetUpper
    }
    if(numbersChar === true){
      criteria += numberChar
    }
    if(speChar === true){
      criteria += specialChar
    }
  //must chose one criteria to generate password
  if (!lowerCase && !upperCase && !numbersChar && !speChar) {
    alert("Must at least choose one character criteria!")
    return promptCharacterSelection();
  }

  console.log(lowerCase,upperCase,numbersChar,speChar);
  return criteria;
};

function generatePassword (){
  var passwordLen = promptLength();
  var criteria = promptCharacterSelection();
  
  var password = "";
  
  for (let i = 0; i < passwordLen; i++){
    password += criteria.charAt(Math.floor(Math.random() * criteria.length));
  }

  console.log(password);
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordTextString = generatePassword.toString();

  document.getElementById("password").value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
