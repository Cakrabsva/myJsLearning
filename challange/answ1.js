
// Mengandung 8 karakter = length
// minimal satu huruf kapital = checking uppercase
// minimal 1 angka = isNumber

//pass to be checked
let password = "HAlo123";

//Requirement
let minlength = 8;
let minUppercase = 1;
let minIsNumber = 1;

//Password condition now
let passlength = password.length
let sumUppercase = password.match(/[A-Z]/g).length
let sumIsNumber = password.match(/\d/g).length

//conditional checking
if (passlength >= minlength &&
    sumUppercase >= minUppercase && 
    sumIsNumber >= minIsNumber 
 ) {
    console.log('Password Kuat')
} else {
    console.log('Password Lemah') 
};

// console.log(passlength)
// console.log(sumUppercase)
// console.log(sumIsNumber)