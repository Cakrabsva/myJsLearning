/**
 * 
 * Call Back and Async
 * 
 * Callback is a function that used as a arguments in other function
 *
 * usage:
 * 1. handle dinamic function/command
 * 2. hanldle async method
 */

//callback function example
const numbers = [1,2,3,4,5];
let filteredNumber = numbers.filter((el) => el % 2 === 0);

//tis also called call back method because function filteredPolaris used another function in its parameters to run
const polaris = [1,2,3,4,5,6]

function filteredPolaris (polarisNumber, func) {
    let result = []

    for (let i = 0; i < polarisNumber.length; i ++) {
        if (func(polarisNumber[i])) {
            result.push(polarisNumber[i])
        }
    }
    return result
}

let filteredPolarisnumber = filteredPolaris(polaris, (number) => number % 2 === 0)
console.log(filteredPolarisnumber)

//======== ASYNC concept ========

/**
 * Async means, program will run even the previous command still not ecexuted yet
 * 
 */

//example

//