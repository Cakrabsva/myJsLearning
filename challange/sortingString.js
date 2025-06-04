/**
 * Kalian diminta untuk menyortir (mengurutkan) tiap karakter yang ada pada str
 */

function sortirString (str) {
    let core = 'abcdefghijklmnopqrstuvwxyz123456789';
    let result = '';
    for (let i = 0; i < core.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (core[i] === str[j]) {
                result += core[i];
            };
        };
    };
    return result;
};

console.log(sortirString('aksjbfiwe')) // abefijksw
console.log(sortirString('127346918')) // 112346789