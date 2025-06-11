/**
 * 
 * LOOPING
 * 
 */

//for digunakan untuk pengulangan dimana sudah diketahui jumlah pengulanganya;
let myNumber = [1,2,3,4,5,6]
for (let i = 0; i < myNumber.length; i++) {
    if (myNumber[i] % 2 === 0) {
        //console.log(`${myNumber[i]} adalah angka genap`);
    } else {
        //console.log(`${myNumber[i]} adalah angka ganjil`);
    };
};

let i = 0;
while (i < 3) {
    //console.log("ini dari while");
    i++; //ini memang harus diakhir dan jangan lupa
};

//while digunakan untuk looping yang tidak beraturan atau belum tahu kapan harus berenti, dan hanya berkenti ketika sebuah kondisi telah terpenuhi;
let winner = false;
while (!winner) {
    let gachaNumber = Math.floor(Math.random()*10)+1;
    if (gachaNumber === 10) {
        winner = true;
        //console.log(`Congratulations you got ${gachaNumber}`);
    } else {
        //console.log(`Sorry your number is ${gachaNumber}, please try again!`);
    };
};

let j = 0;
do {
    //console.log("ini dari Do...While")
    j++
} while (j < 3);


//================ Looping Forms =================

const polaris = [1,2,3,4,5,6]

// form 1 - Regular for looping
for (let i = 0; i < polaris.length; i ++) {
    let data = polaris[i]
    console.log(data)
}

//form 2 - for-of Looping
for (let data of polaris) {
    console.log(data)
}

//form 3 - map looping
let data = polaris.map((el) => {console.log(el)})