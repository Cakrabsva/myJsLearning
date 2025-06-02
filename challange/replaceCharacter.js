/**
 * Replace Character
 * 
 * Declare a new variable named "word" for storing any word
 * Loop for each character in variable "word" and replace any vowel character inside the variable
 * 
 * Glossary:
 * "a" or "A" = 4
 * "i" or "I" = 1
 * "u" or "U" = 
 * "e" or "E" = 3
 * "o" or "O" = 0
 * 
 * Display the new word with the replaced character in your terminal
 * 
 */

let word = "ReActRedUxvueDIsplAy";
let newWord = "";

for (let i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === 'A') {
        newWord += "4";
    } else if (word[i] === "i" || word[i] === 'I') {
        newWord += "1";
    } else if (word[i] === "e" || word[i] === 'E') {
        newWord += "3";
    } else if (word[i] === "o" || word[i] === 'O') {
        newWord += "0";
    } else {
        newWord += word[i];
    };
};

console.log(newWord)