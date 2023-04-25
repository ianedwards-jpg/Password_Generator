//Define Variables 
let chars = ''     //Create empty string for add parameters
let passLength = document.querySelector("#input_password_length")
let passwordText = document.querySelector("#password");
const upChars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
const lowChars = "abcdefghijklmnopqrstuvwxyz"
const numChars = "0123456789"
const speChars = "#?!@$%^&*-"

const uppCaseInput = document.querySelector("#include_uppercase")
const lowCaseInput = document.querySelector("#include_lowercase")
const numCaseInput = document.querySelector("#include_numbers")
const speCaseInput = document.querySelector("#include_special_chars")

// Assignment Code
const generateBtn = document.querySelector("#generate");
const clearBtn = document.querySelector("#clearForm");

// Create Password Function 
function createPass() {
    //// console.log("passlength", passLength.value)
    var result = '';                                        //Created password string
    // For loop to create password
    for (var i = 0; i < Number(passLength.value); i++) {    //Change passLength string to numbers to let for loop function
        result += chars.charAt(                             //Add new random digits to result variable 
            Math.floor(Math.random() * chars.length)        //Define char string length so loop can use it 
        );
    }
   console.log("createPass()", result)                                    // Log results to console

    return result;
}



// Write password to the #password input
function writePassword() {            

chars = ''
// Change variables to strings
const uppCase = uppCaseInput.checked
const lowCase = lowCaseInput.checked
const numCase = numCaseInput.checked
const speCase = speCaseInput.checked

    if (uppCase) {
        chars+= upChars
    }

    if (lowCase) {
        chars += lowChars
    }

    if (numCase) {
        chars += numChars
    }

    if (speCase) {
        chars += speChars
    }                  

//Call writePassword function
    var password = createPass();                                //Define password variable as the result of writePassword function
    
    
// Password validation functions based on user inputs

    const validateUpper = () => {
        if (uppCase){
            let regex = new RegExp("(?=.*?[A-Z])") 
            if(regex.test(password)){
                return true
            }
            else {
               // console.log("failUC")
                return false
            }
        }
    }
    const validateLower = () => {

        if (lowCase) {
            let regex = new RegExp("(?=.*?[a-z])") 
            if(regex.test(password)){
                return true
            }
            else {
                return false
            }
        }
    }
    const validateNumbers = () => {
        if (numCase) {
            let regex = new RegExp("(?=.*?[0-9])") 
            if(regex.test(password)){
                return true
            }
            else {
                return false
            }
        }
    }
    const validateSpecialChars = () => {
        if (speCase) {
            let regex = new RegExp("(?=.*?[#?!@$%^&*-])") 
            if(regex.test(password)){
                return true
            }
            else {
                return false
            }
        }
    }

// Set up logic to accept only passwords users specify
    const validatePassword = () => {
        if((validateUpper() === false)) {
            return false
        }
        else if ( (validateLower() === false)) { 
            return false
        }
        else if ( (validateNumbers() === false))  {
            return false
        }
        else if ( (validateSpecialChars() === false))  { 
            return false
        }
        else {
            return true
        }
    }
    

    const recursor = () => {
        if(validatePassword() === true) {
            console.log("succeeded")
            console.log("password", password)
            passwordText.value = password;  
        }
        else {
            console.log("failed")
           writePassword();
           console.log()
        }
    }

    recursor();
    
}

const clearForm = () => {
    uppCaseInput.checked = false;
    lowCaseInput.checked = false;
    numCaseInput.checked = false;
    speCaseInput.checked = false;
    passLength.value = 6;
    passwordText.value = '';  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener("click", clearForm);

