const validateUpper = () => {
    if (uppCase){
        let regex = new RegExp("(?=.*?[A-Z])") 
        if (! (regex.test(password)) ){
            // console.log("failUC")
        }
        else {
            return true
        }
    }
}
const validateLower = () => {

    if (lowCase) {
        let regex = new RegExp("(?=.*?[a-z])") 
        if (! (regex.test(password)) ){
        //    console.log("failLC")
            // createPass()
        }
        else {
            return true
        }
    }
}
const validateNumbers = () => {
    if (numCase) {
        let regex = new RegExp("(?=.*?[0-9])") 
        if (! (regex.test(password)) ){
            // console.log("failNC")
            // createPass()
        }
        else {
            return true
        }
    }
}
const validateSpecialChars = () => {
    if (speCase) {
        let regex = new RegExp("(?=.*?[#?!@$%^&*-])") 
       if (! (regex.test(password)) ){
            // console.log("failSC")
            // createPass()
        }
        else {
            return true
        }
    }
}


// if(regex.test(password)){{}
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

// passwordText.value = password;  