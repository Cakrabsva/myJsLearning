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