/**
 * Kalian diminta untuk mencari berapa banyak angka ganjil 
 */


function findOdd(str) {
    let counter = 0;
    let message = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 !== 0) {
            counter++;
        };
    };

    if (!counter) {
        message = `There are no odd numbers`;
    } else {
        message = `There are ${counter} odd numbers`;
    };
    
    return message;
}

console.log(findOdd('23456')) // 'There are 2 odd numbers'
console.log(findOdd('1115555')) // 'There are 7 odd numbers'
console.log(findOdd('2468')) // 'There are no odd numbers'