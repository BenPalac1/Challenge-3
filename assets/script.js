// Assignment code here
var valid = false;
var oneConfirmed = false;
var characterSets = {
  lowercaseChar: "abcdefghijklmnopqrstuvwxyz",
  uppercaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericChar: "1234567890",
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|"
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

    // start with empty string
     let pword = "";
    // log  user choices - done in the variables
    // generate password to match
      // correct length

      

      // if lowercase picked = include lowercase
      if(lowercase) {
        pword += characterSets.lowercaseChar;
        console.log(pword);
      }
      // if uppercase picked = include uppercase
      if(uppercase) {
        pword += characterSets.uppercaseChar;
        console.log(pword);
      }
      // if numeric picked = include numeric
      if(numeric) {
        pword += characterSets.numericChar;
        console.log(pword);
      }
      // if special picked = include special
      if(special) {
        pword += characterSets.specialChar;
        console.log(pword);
      }
      // random
      let randomP = "";
      for (let i = 0; i < length; i++) {
        randomP += pword[Math.floor(Math.random() * pword.length)];
      };
      return(randomP);

  }

  var password = generatePassword();

  // show user
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


