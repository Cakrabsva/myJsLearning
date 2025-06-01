/*
Algoritma

    1. buat variabel tahun dan isi dengan angka sesuai tahun yang diinginkan
    2. buat perkondisian dan bungkus dalam sebuah function
*/

function findKabisat(tahun) {

    let kabisat = false

    if (tahun % 4 === 0 && tahun % 100 > 0 || tahun % 100 === 0){
        kabisat = true
    }

    return kabisat
}

let tahun = 2024

console.log(tahun % 4)
console.log(tahun % 100)
console.log(tahun % 400)

console.log(findKabisat(2025))