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

    let regMap = [
        {exp: uppCase, name: "uppCase", value: "(?=.*?[A-Z])" },
        {exp: lowCase, name: "lowCase", value: "(?=.*?[a-z])" } , 
        {exp: numCase, name: "numCase", value: "(?=.*?[0-9])" }  ,
        {exp: speCase, name: "speCase", value: "(?=.*?[#?!@$%^&*-])" }
    ]

    const regValidator = () => {
        let results = []
        let checker = results => results.every(v => v === true);


        regMap.forEach(element =>  {
            if(element.exp === true) {

                console.log("element", element.name)

                let regex = new RegExp(element.value) 
                
                // console.log("regex", regex)
                    if(regex.test(password)){
                        console.log("true", element.name)
                        results.push(true)
                    }
                    else {
                        console.log("false", element.name)
                        results.push(false)
                        // console.log(false)
                    }
            } 
        });

        console.log("results", results)

        if (checker(results) === true) {
            console.log("checkertrue")
            return true
        }
        else {
            console.log("checkerfalse")
            return false
        }
    }

// Set up logic to accept only passwords users specify
    // const validatePassword = () => {
    //     if((regValidator() === false)) {
    //         return false
    //     }
    //     else {
    //         return true
    //     }
    // }
    

    const recursor = () => {
        if(regValidator() === true) {
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

