/**
 * 
 * FUNCTION
 * 
 */

let rawData = [];
function generateData (dataCount) {
    
    let randomData = 0;

    for (let i = 0; i < dataCount; i++) {
        randomData = Math.floor(Math.random() * 100) + 1
        rawData.push(randomData)
        randomData = 0
    };
};

let sumNumber = 0
function letsSum () {
    let i = 0
    while (i < rawData.length) {
        sumNumber += rawData[i]
        i++
    };
}

// generateData(10)
// letsSum()

// console.log(rawData, sumNumber)

let str = ["makan", "minum", "Putri", "cakra", "malas", "mandi"]

function aChecker (word) {
    let counter = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "A") {
            counter ++
        }
    };
    return counter;
};

for (let i = 0; i < str.length; i++) {
    //console.log(`Pada kata ${str[i]} terdapat ${aChecker(str[i])} huruf vokal a/A`)
};

/**
 * Modular Function
 * 
 * => penggunaan fungsi kepada fungsi yang lain (fungsi didalam fungsi)
 * => Main Function = fungsi yang menggunakan sub function
 * => Sub Function  = fungsi yang mendukung fungsi utama / Main seperated function
 * 
 * 
 */

let plats = "2154,5568,2132,4424,117,6523"


// SUB FUNCTION
function formatedToArray (str) {
    let formatedArray = [];
    let stringContainer = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ",") {
            formatedArray.push(Number(stringContainer));
            stringContainer = '';
        } else if (i === str.length-1) {
            stringContainer += str[i];
            formatedArray.push(Number(stringContainer));
        } else {
            stringContainer += str[i];
        };
    };
    return formatedArray;
};

// SUB FUNCTION
function reporting (evenPlat, oddPlat) {
     return outputMessage = `We have ${evenPlat} even plats and ${oddPlat} oddPlat`;
};

// MAIN FUNCTION
function findEvenOdd (str) {
    let platNumbers = formatedToArray(str)
    let oddPlat = 0;
    let evenPlat = 0;
    let reportStatement = ''

    for (let i = 0; i < platNumbers.length; i++) {
        if (platNumbers[i] % 2 === 0) {
            evenPlat++;
        } else {
            oddPlat++;
        };
    };
    reportStatement = reporting(evenPlat, oddPlat);
    return reportStatement;
};

console.log(findEvenOdd(plats));