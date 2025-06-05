
// Excercise 1
let fruits = ['pisang', 'salak', 'jambu', 'durian', 'pisang', 'pisang', 'jambu']

let fruitsObj = {} 

for (let i = 0; i < fruits.length; i ++) {
    let fruit = fruits[i];

    if (fruitsObj[fruit] === undefined) {
        fruitsObj[fruit] = 1;
    } else {
        fruitsObj[fruit]++;
    };
};

//excercise 2

let randomWords = 'cakra'
//find duplicate words

function grouping (str) {
    let outputObj = {}

    for (let i = 0; i < str.length; i++) {
        let alphabet = str[i]

        if (outputObj[alphabet] === undefined) {
            outputObj[alphabet] = 1
        } else {
            outputObj[alphabet]++
        };
    };
    return outputObj
};

function findDuplicate (obj) {
    let objectAlph = grouping(obj)
    let duplicate = []

    for (let key in objectAlph) {
        if (objectAlph[key] > 1) {
            duplicate.push(key)
        }
    };
    return duplicate
};

// console.log(grouping(randomWords))
console.log(findDuplicate(randomWords))