/*
Seorang pengunjung website dibahasakan dalam java script memiliki atribut, nama, birthMonth, dan memebership, untuk membership hanya dibatasi oleh 3 kategori ini: "VIP Member", "Reguler Member", "Non Member"

Saat ini website sedang bagi - bagi voucher bagi yang berulang tahun pada bulan januari dengan mengisi formulir, namun ada beberapa ketentuan yang harus dipenuhi agar bisa mendapatkan voucher

1. Jika nama kosong, maka tampilkan pada console "Nama tidak boleh kosong", dan perogram selesai.
2. Jika pendaftar berulangtahun di bulan januari dan VIP member maka tampilkan pesan "Selamat [Nama]!. Kamu berhak menerima voucher ulang tahun sebesar 50%!"
3. Jika pendaftar berulangtahun di bulan januari dan Reguler member maka tampilkan pesan "Selamat [Nama]!. Kamu berhak menerima voucher ulang tahun sebesar 30%!"
4. Jika pendaftar adalah member VIP atau Reguler tetapi tidak berulang tahun di bulan januari maka tampilkan "Maaf [name], voucher discount ini hanya untuk yang lahir di bulan januari saja."
5. jika pendaftar adalah BUKAN member VIP dan BUKAN reguler member maka tampilkan "Selamat Datang di Bilikiplik! untuk mendapatkan voucher ulang tahun mohon untuk mendaftarkan diri terlebih dahulu ya!"

*/

let memberName = "Angel";
let birthMonth = "January";
let membership = "Non Member";

if (!memberName) {
    console.log("Nama tidak boleh kosong")
} else {
    if (birthMonth === "January") {
        if (membership === "VIP member") {
            console.log(`Selamat ${memberName}!. Kamu berhak menerima voucher ulang tahun sebesar 50%!`)
        } else if (membership === "Reguler Member") {
            console.log(`Selamat ${memberName}!. Kamu berhak menerima voucher ulang tahun sebesar 30%!`)
        } else {
            console.log(`Maaf ${memberName}!. Program ini khusus member, silahkan mendaftar terlebih dahulu`)
        }
    } else {
        if (membership === "VIP member" || membership === "Reguler Member") {
            console.log(`Maaf ${memberName}, voucher discount ini hanya untuk yang lahir di bulan januari saja.`)
        } else {
            console.log(`Selamat Datang ${memberName} di Bilikiplik! untuk mendapatkan voucher ulang tahun mohon untuk mendaftarkan diri terlebih dahulu ya!`)
        }
    }
}