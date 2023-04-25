//Define Variables 
let chars = ''     //Create empty string for add parameters
let passLength = document.querySelector("#input_password_length")
const upChars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
const lowChars = "abcdefghijklmnopqrstuvwxyz"
const numChars = "0123456789"
const speChars = "#?!@$%^&*-"

const uppCaseInput = document.querySelector("#include_uppercase")
const lowCaseInput = document.querySelector("#include_lowercase")
const numCaseInput = document.querySelector("#include_numbers")
const speCaseInput = document.querySelector("#include_special_chars")


//

// var passLength = prompt("Choose password length between 8-128 characters.");
// if (passLength >= 8 && passLength <= 128) {
//         var uppCase = confirm("Include uppercase characters?");
//         var lowCase = confirm("Include lowercase characters?");
//         var numCase = confirm("Include numerical characters?");
//         var speCase = confirm("Include special characters:'!,@,#,$,%,^,&,*,?,/'?");
//         }

// else {
//     alert("Insufficient Value.");
//     window.location.reload();
// }

// const verifyPasswordLength = () => {
//     let passLength = document.querySelector("#input_password_length")
//     if(passLength < 1) {
//         // Display error message: remove hidden property from error message class 
//         return
//     }
//     else {
        
//     }
// }

 


// Create Password Function 
function createPass() {
    //// console.log("passlength", passLength.value)
    var result = '';                                        //Created password string
    // For loop to create password
    for (var i = 0; i < Number(passLength.value); i++) {          //Change passLength string to numbers to let for loop function
        result += chars.charAt(                             //Add new random digits to result variable 
            Math.floor(Math.random() * chars.length)        //Define char string length so loop can use it 
        );
    }
   // console.log("result", result)                                    // Log results to console

    return result;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

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
       // console.log("uppercase")
    }

    if (lowCase) {
        chars += lowChars
       // console.log("lowercase")

    }

    if (numCase) {
        chars += numChars
       // console.log("numbers")

    }

    if (speCase) {
        chars += speChars
       // console.log("specialCharacters")

    }                  

//Call writePassword function
    var password = createPass();                                //Define password variable as the result of writePassword function
    var passwordText = document.querySelector("#password");
    
// If Password does not contain things, do it again

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
                //   // console.log("failLC")
                // createPass()
                return true
            }
            else {
               // console.log("failLC")
                return false
            }
        }
    }
    const validateNumbers = () => {
        if (numCase) {
            let regex = new RegExp("(?=.*?[0-9])") 
            if(regex.test(password)){
                //// console.log("failNC")
                // createPass()
                return true
            }
            else {
               // console.log("failNC")
                return false
            }
        }
    }
    const validateSpecialChars = () => {
        if (speCase) {
            let regex = new RegExp("(?=.*?[#?!@$%^&*-])") 
            if(regex.test(password)){
                //// console.log("failSC")
                // createPass()
                return true
            }
            else {
               // console.log("failSC")
                return false
            }
        }
    }

    // validateUpper()
    // validateLower()
    // validateNumbers()
    // validateSpecialChars()
    
    // if ( (validateUpper()) || (validateLower()) || (validateNumbers()) || (validateSpecialChars()) === false) {
    //    // console.log("Not True")
    // }



    const validatePassword = () => {
        if((validateUpper() === false)) {
            // createPass()
           // console.log("ValidateUpper")
            return false
        }
        else if ( (validateLower() === false)) { 
            // createPass()
           // console.log("ValidateLower")
            return false

        }
        else if ( (validateNumbers() === false))  {
            // createPass()
           // console.log("ValidateNumber")
            return false

        }
        else if ( (validateSpecialChars() === false))  { 
            // createPass()
           // console.log("ValidateSpecialChars")
            return false

        }
        else {
           // console.log("Worked")
            return true

        }
    }

   // console.log("ValidatePassword", validatePassword())

    

    const testRecursion = () => {
        if(validatePassword() === true) {
            console.log("succeeded")
            console.log("password", password)
        }
        else {
            console.log("failed")
           writePassword();
           console.log()
        }
    }

    testRecursion();

    // const counter = () => {
    //     console.log("counter")
    //     if(validatePassword() === false) {
    //         // createPass()
    //         // validatePassword()
    //         console.log("Ready to fail")
    //         counter();
    //     }
    //     else {
            
    //         console.log("Ready to go")

    //     }
    // }

    // counter();
    
    // const validatePassword2 = () => {
        
    // }


    // const passwordInterval = setInterval(validatePassword(), 500)


    // validatePassword()

    

    

    

    // const validatePassword = function(password) {   || validateLower() || validateNumbers() || validateSpecialChars()
    //     if (validateUpper() === true) {
    //         console.log("ValidatedUC")
    //         if (validateLower() === true) {
    //             console.log("ValidatedLC")
    //             if (validateNumbers() === true) {
    //                 console.log("ValidatedNC")
    //                 if (validateSpecialChars === true) {
    //                     console.log("Validated SC")
    //                     console.log("Display Password")
    
    //                     passwordText.value = password;                              //Password text is displayed in read-only section   
    
    //                 }
    //             }
    //         }
    //     }
    
    //     // else {
    //     //     chars = ''
    //     //     createPass()
    //     // }                 
        
    // }

    // validatePassword()

    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
