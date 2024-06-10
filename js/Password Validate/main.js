// //1 uppercase
// //1 lower case
// //1 digit
// //1 symbol



// Define the isStrongPassword function
function isStrongPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    const isLengthValid = password.length >= 8;
  
    return hasUpperCase && hasLowerCase && hasDigit && hasSymbol && isLengthValid;
  }
  
  // Add an event listener to the password input field
  const passwordInput = document.getElementById("f3");
  passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    if (isStrongPassword(password)) {
      console.log("Password is strong.");
    } else {
      console.log("Password is not strong enough.");
    }
  });
  
