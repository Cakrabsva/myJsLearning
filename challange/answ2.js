/*
 Algoritma:

 1. buat variabel total belanja dengan isi number
 2. Buat variabel isMember dan isi dengan boolean
 3. buat variable untuk tampungan score isi dengan nilai 0
 4. buat pengkondisian sesuai ketentuan, setiap ketentuan yang terpenuhi tambahkan score 1
*/

let totalBelanja = 550000;
let isMember = true;
let score = 0


//isStatement simple
if (totalBelanja >= 500000) {
    score += 1
}

if (isMember) {
    score += 1
}


if (score >= 2) {
    console.log("Discount 20%")
    score = 0
} else if (score === 1) {
    console.log("Discount 10%")
    score = 0
} else {
    console.log("Tidak ada discount")
}

//function

function discCalculator (totalBelanja, isMember) {

    let decision = "";
    if (totalBelanja >= 500000) {score += 1};

    if (isMember) {score += 1};


    if (score >= 2) {
        decision = "Discount 20%"
    } else if (score === 1) {
        decision = "Discount 10%"
    } else {
        decision = "Tidak ada discount"
    };

    score = 0;
    return decision
}

console.log(discCalculator(300, false))