/**
 * 
 * Ganjil Genap!
 * 
 * tentukan berapa plat ganjil dan berapa plat genapnya, jika salah satu kondisi tidak terpenuhi maka buatlah statementnya
 * 
 */

let platNumbers1 = '2431;3429;864;1309;1276';
let platNumbers2 = '2347;3429;1305';
let platNumbers3 = '864;1308;1276;1432';
let platNumbers4 = '';
let platNumbers5;

function ganjilGenap (platParam) {
    let formatedPlat = [];
    let platContainer = "";
    let messageBox = ""

    // pengecekan kondisi data plat untuk diproses lebih lanjut
    if (platParam === undefined) {
        messageBox = "Invalid data"
    } else if (platParam.length === 0) {
        messageBox = "Plat tidak ditemukan"
    } else {

        //pemrosesan data untuk diformat ke type number dan dimasukan kedalam variabel baru dengan data array yang sudah di format
        for (let i = 0; i < platParam.length; i++) {
            if (platParam[i] === ";") {
                formatedPlat.push(Number(platContainer))
                platContainer = "";
            } else if (i === platParam.length-1) {
                platContainer += platParam[i];
                formatedPlat.push(Number(platContainer));
            } else {
                platContainer += platParam[i];
            };
        };

        let platGanjil = 0;
        let platGenap = 0;
        
        //pengecekan jumlah plat ganjil dan genap
        for (let i = 0; i < formatedPlat.length; i++) {
            if (formatedPlat[i] % 2 === 0) {
                platGenap++;
            } else if (formatedPlat[i] % 2 !==0) {
                platGanjil++;
            };
        };

        //pengkondisian untuk kemudian ditampikan didalam message box
        if (platGanjil > 0 && platGenap > 0) {
            messageBox = `Ditemukan plat genap sebanya ${platGenap } dan plat ganjil sebanya ${platGanjil}`
        } else if (platGanjil > 0 && platGenap === 0) {
            messageBox = `Tidak ditemukan plat genap tetapi ditemukan plat ganjil sebanya ${platGanjil}`
        } else if (platGanjil === 0 && platGenap > 0) {
            messageBox = `Ditemukan plat genap sebanya ${platGenap } dan tidak ditemukanya plat ganjil`
        };
    };
    return messageBox
};

console.log(ganjilGenap(platNumbers1))
console.log(ganjilGenap(platNumbers2))
console.log(ganjilGenap(platNumbers3))
console.log(ganjilGenap(platNumbers4))
console.log(ganjilGenap())

// console.log(!platNumbers4)