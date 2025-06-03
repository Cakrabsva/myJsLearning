/**
 * 
 * LOOPING
 * 
 */

//for digunakan untuk pengulangan dimana sudah diketahui jumlah pengulanganya;
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
