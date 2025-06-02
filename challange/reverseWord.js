/**
 * Reverse word
 * 
 * Declare a new variable named "word" for storing any word
 * Loop for each character in variable "word and add it into variable "newWord with reversed version of the word
 * Display the new word with the reversed word in your terminal
 */

let word = "Reactreduxvue";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
};
console.log(reversedWord);