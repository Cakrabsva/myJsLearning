/*
Algoritma
    1. buat function
    3. buat variabel gretings untuk menampung stiring
    4. silahkan buat perkondisian sesuai dengan ketentuan.
*/


function greetingsProgram (waktu) {
    
    let greeting = ""

    if (waktu >=5 && waktu <= 11) {
        greeting = "Selamat Pagi"
    }
    else if (waktu >= 12 && waktu <= 15) {
        greeting = "Selamat siang"
    }
    else if (waktu >= 16 && waktu <= 18) {
        greeting = "Selamat sore"
    }
    else if (
        waktu >= 19 && waktu <= 24 || 
        waktu >= 1 && waktu <= 4
    ) {
        greeting = "Selamat malam"
    }
    return greeting
}

console.log(greetingsProgram(16))