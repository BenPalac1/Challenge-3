// Assignment code here
var valid = false;
var oneConfirmed = false;
var characterSets = {
  lowercaseChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercaseChar: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numericChar: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialChar: ["\"", " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var length = parseInt(window.prompt("How many characters would you like your password to be? No less than 8. No more than 128. :)"));

  while (!valid) {
      if (length < 8 || length > 128 ) {
        length = parseInt(window.prompt("Please choose a number between 8 and 128."));
      }
      else {
        valid = true;
      };
  };
  
  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");

  while (!oneConfirmed) {
    if (!lowercase && !uppercase && !numeric && !special) {
      window.alert("You must select at least one character type. Please try again and seleck 'OK' for one of the following 4 questions.");

      var lowercase = confirm("Do you want to include lowercase characters?");
      var uppercase = confirm("Do you want to include uppercase characters?");
      var numeric = confirm("Do you want to include numeric characters?");
      var special = confirm("Do you want to include special characters?");
    }
    else {
      oneConfirmed = true;
    };
  };

  function generatePassword() {
    console.log(length, lowercase, uppercase, numeric, special);
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


