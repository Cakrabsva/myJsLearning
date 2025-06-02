/**
 * Filtered Word
 * 
 * Declare a new vsriable named "word" for storing any word
 * Loop for each character in variable "word" and check wheter the character is valid
 * 
 * Glossary
 *  Removed Character = "!", "@", "#", "$"
 * 
 * if there is any character matched with the glosaary above then remove the character
 * if the character is " " (white space) replace it with "_" (underscore)
 * Display the new word with the filtered word in your terminal
 * 
 */

let word = "#! L@ve J@v@$cript. S@ Much";
let newWord = ""; //_Lve_Jvcrpt._S_Much
let flag = false;

for (let i = 0; i < word.length; i++) {
//Buat kondisi pengubah flag menjadi false apabila ditemukan karakter2 glossary
    if (
            word[i] === "#" ||
            word[i] === "!" ||
            word[i] === "@" ||
            word[i] === "$"
        ) {
            flag = true;
    } else {
        flag = false;
    };


// Hanya ketika flag falsy, maka ambil karakter dan masukan kedalam variabel baru, namun jika ditemukan white space perlu di replace dengan underscore
    if (!flag) {
        if (word[i] === " ") {
            newWord += "_"
        } else {
            newWord += word[i]
        };
    };  
};

console.log(newWord)
