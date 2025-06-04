/**
 * Kalian diminta untuk memeriksa apakah tipe data pada param1 dan param2 sama atau tidak 
 */

function isItTrue(param1, param2) {
    let checker = true

    if (typeof(param1) === typeof(param2)) {
        return checker
    } else {
        return !checker
    }
};

console.log(isItTrue('ab', 'cd')) // true
console.log(isItTrue(1, 32)) // true
console.log(isItTrue(true, false)) // true
console.log(isItTrue("0", 0)) // false
