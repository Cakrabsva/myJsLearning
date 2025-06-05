/**
 * 
 * Pengelompokan Angka
 * 
 * ketentuan:
 * + diutamakan untuk kelipatan 3
 * + sisanya jika genap masukan kelompok genap, jika ganjil masuk ganjil
 * 
 * ketentuan urutan
 * + baris array 1 => angka genap
 * + baris array 2 => angka ganjil
 * + baris array 3 => kelipatan 3
 * 
 * 
 * 
 * 
 */

function groupNumber (arr) {
    let output = []
    let modulusThreeNumbers = findModulusThree(arr);
    let evenNumbers = [];
    let oddNumbers = [];

    for(let i = 0; i < arr.length; i ++) {

        let flag = false
        for(let j = 0; j < modulusThreeNumbers.length; j ++) {
            if (arr[i] === modulusThreeNumbers[j]) {
                flag = true
            };
        };

        if (!flag) {
            if (arr[i] % 2 === 0) {
                evenNumbers.push(arr[i]);
            } else {
                oddNumbers.push(arr[i]);
            };
        }
    };

    output.push(evenNumbers)
    output.push(oddNumbers)
    output.push(modulusThreeNumbers)
    return output
}

function findModulusThree (mainArr) {
    let output = []

    for (let i = 0; i < mainArr.length; i++) {
        if (mainArr[i] % 3 === 0) {
            output.push(mainArr[i])
        }
    }
    return output
};

console.log(groupNumber([2, 4, 6]))
console.log(groupNumber([1,2,3,4,5,6,7,8,9]))
console.log(groupNumber([100, 151, 122, 111, 99]))
console.log(groupNumber([]))
