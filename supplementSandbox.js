// namen function
function namedFunction (a, b) {

};

//Annonymous function
const func1 = function (a, b) {

}; 

//annon - arrow func
const func = (a, b) => {

};

//annon - single line arrow function
const func3 =  (a,b) => a + b;

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment object
let { firstName, age } = person;

// allias and set defaul value
let { firstName:nama, age:umur, city:kota = 'Jakarta' } = person;
// console.log(nama, umur, kota) // john 50 jakarta

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment Array
// let [fruit1, fruit2] = fruits; // Banana, orange
let [fruit1, ,fruit3] = fruits;  //Banana, Apple

//======================================
// combining array
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year)

/* 
    [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'May'
    ]
*/

for (let month of year) {
    // console.log(month)
}; //  ^ will return each string of const year


let word = 'PutriRizky'

for (let str of word) {
    // console.log(str)
}; //will return everu character in let word (P, u, t, r, ...)

//=======================================

/*
we already know that Math max/min use for, and it need parameters, but if you want to assign parrameters in array you need to use spread operator 
*/
const numbers = [23,55,21,87,56];

let incorrectWay = Math.min(numbers); //NaN
let minValue = Math.min(...numbers); //21
let maxValue = Math.max(...numbers); //87

// console.log(incorrectWay, minValue, maxValue)

// another used of spread opperator
function namedFunction (...numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i ++) {
        result += numbers[i]
    }
    return result
};

//with this method, the parameters can be dinamic.
// console.log(namedFunction(1, 2, 3)) // 6

//default value of function

function greetings(name, greet = 'Bonjour') {
    // console.log(`${greet}, ${name}`)
} //default value param position always in the last
greetings('Putri')


// this method to check is there any "Hello" in let text, not only word event it can check per character
let text = 'Hello world, welcome to the universe'
// console.log(text.includes('Hello')) //true
// console.log(text.startsWith('Hello')) // true
// console.log(text.endsWith('Hello')) // false

const newArray = Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

//Array find()
const number = [4, 9, 16, 25, 29];
let first = number.find((numbs => numbs > 18))
console.log(first) //25

// Array find Index
let indx = number.findIndex((indxnumb => indxnumb % 2 === 0))
console.log(indx) //0

//array for each

number.forEach((el, indexedDB, Array) => {
        console.log(el)
})

