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

let word = "#! L@ve J@v@$cript. S@ Muchhhh";
let newWord = ""; //_Lve_Jvcrpt._S_Much

for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
        case "#":
            break;
        case "!":
            break;
        case "@":
            break;
        case "$":
            break;
        case " ":
            newWord += "_";
            break;
        default:
            newWord += word[i];
    };
};

console.log(newWord)
