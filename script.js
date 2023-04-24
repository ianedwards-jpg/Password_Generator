//Define Variables 
let chars = ''     //Create empty string for add parameters
let passLength = document.querySelector("#input_password_length")
const upChars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
const lowChars = "abcdefghijklmnopqrstuvwxyz"
const numChars = "0123456789"
const speChars = "!@#$%^&*?/"

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
    // console.log("passlength", passLength.value)
    var result = '';                                        //Created password string
    // For loop to create password
    for (var i = 0; i < Number(passLength.value); i++) {          //Change passLength string to numbers to let for loop function
        result += chars.charAt(                             //Add new random digits to result variable 
            Math.floor(Math.random() * chars.length)        //Define char string length so loop can use it 
        );
    }
    console.log("result", result)                                    // Log results to console

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
        console.log("uppercase")
    }

    if (lowCase) {
        chars += lowChars
        console.log("lowercase")

    }

    if (numCase) {
        chars += numChars
        console.log("numbers")

    }

    if (speCase) {
        chars += speChars
        console.log("specialCharacters")

    }                  

//Call writePassword function
    var password = createPass();                                //Define password variable as the result of writePassword function
    var passwordText = document.querySelector("#password");
    
// If Password does not contain things, do it again
    if (uppCase){
        let regex = new RegExp("(?=.*?[A-Z])") 
        if (! (regex.test(password)) ){
            createPass()
        }
    }

    if (lowCase) {
        let regex = new RegExp("(?=.*?[a-z])") 
        if (! (regex.test(password)) ){
            createPass()
        }
    }

    if (numCase) {
        let regex = new RegExp("(?=.*?[0-9])") 
        if (! (regex.test(password)) ){
            createPass()
        }
        
    }

    if (speCase) {
        let regex = new RegExp("(?=.*?[#?!@$%^&*-])") 
       if (! (regex.test(password)) ){
            createPass()
        }
    }
    // else {
        passwordText.value = password;                              //Password text is displayed in read-only section   
    // }             

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
