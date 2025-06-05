/**
 * Kalian diminta untuk mencari karakter yang sama pada string yang diberikan.
 * Expected output dalam bentuk string. 
 */

function findSameOne(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let counter = 0;
    let result = ''

    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(alphabet[i] === str[j]) {
                counter++
            };   
        };
        if (counter > 1) {
            result += alphabet[i]
            counter = 0
        };
        counter = 0
    };
    return result 
};

console.log(findSameOne('aabbcc')) // abc
console.log(findSameOne('javascript')) // a
console.log(findSameOne('i love you')) // o
console.log(findSameOne('there are more')) // er