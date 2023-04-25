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


if(regex.test(password)){{}