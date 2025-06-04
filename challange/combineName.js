/**
 * Kalian diminta untuk menggabungkan nama depan dan nama belakang pada function combineName
 * Lihat tiap test case untuk mengetahui hasil yang diharapkan 
 */

function combineName (firstName, lastName) {
    let combined = '';

    if(!firstName || !lastName) {
        return combine = "Invalid Input";
    } else {
        combined = `${firstName} ${lastName}`;
    };
    return combined;
}

console.log(combineName('John', "Doe")) // Doe, John
console.log(combineName('Dell', "Monroe")) // Monroe, Dell
console.log(combineName('Filbert', "Michael")) // Michael, Filbert
console.log(combineName('')) // Invalid Input
console.log(combineName()) // Invalid Input
