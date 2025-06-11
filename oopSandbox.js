/**
 * 
 * OOP (Object oriented programming)
 * 
 */

const person1 = {
    name: "cakra",
    age: '29',
    sex: 'male',
    city: 'Jakarta'
}

const person2 = {
    nama: "putri",
    umur: '22',
    jenisKelamin: 'female',
    kota: 'Jakarta'
}

// data above is inconsistance, we have to standarize by declare a class

const couple = {person1, person2}

// console.table(couple)

/**
 * declaring class rules
 * 
 * 1. use english only
 * 2. Singular
 * 3. PascalCase
 * 
 */

class Person {
    name;
    age;
    sex;
    city;

    //constructor is a special method/function proses that otomatically run when instantiation
    //everytime class been call, consturctur will follow 'run'
    constructor (name, age, sex, city) {
        this.name = name
        this.age = age
        this.sex = sex
        this.city = city

        //we can call instance in constructor
        this.introduction()
    }

    //instance method
    introduction () {
        let intro = "Helloo my name is "
        // console.log(`${intro}${this.name}`)

        //'return thi's to send back object so it can be chaining
        return this
    }
}

const cakra = new Person (person1.name, person1.age, person1.sex, person1.city)
const putri = new Person (person2.nama, person2.umur, person2.jenisKelamin,person2.kota)

cakra.introduction()
// console.table([cakra, putri])


//method chaining
const numbers = [1,2,3,4,5] //expected output = '20-40

// we can chaining method as much as we need 
let result = numbers
.filter((el, idx, arr) => el % 2 === 0)
.map((el) => el * 10)
.join('-')

console.log(result)