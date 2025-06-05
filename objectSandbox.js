/** 
 * OBJECT LITERAL
 * 
 * => data struktural yang bisa menyimpan lebih dari 1 data untuk menggambarkan sebuah kondisi
 * 
 * => object digunakan untuk menggambarkan sebuah kondisi majemuk dengan lebih baik
 * 
 * => sturktur objek berisi: Key dan properti
 * => declare with {}
 * => delcare property = key:property
 * 
 * jika ingin memiliki key lebih dari 1 kata bungkus dengan ""
 * tidak boleh ada duplikat key
 * Objek tidak memiliki index
 */

// contoh object
let mobil = {

    brand: "Wuling air EV",
    type: "Long Range",
    color: "White",
    productionDate: "2024",
    dealer: "Wuling Jakarta Selatan"

}

//CRUD (create read update delete)

//create object
let motor ={

    brand: "CRF150L",
    type: "Trail",
    color: "Red Black",
    productionDate: "2024",
    dealer: "Honda Sakti Motor Cilandak",
    idFaktur: 6516842146832158
}
//create/insert new property
motor.otrPrice = 34000000
motor["Plat Number"] = "even"

//read
motor.otrPrice
motor["Plat Number"]

let platNumber = "Plat Number"
motor[platNumber]

//update
motor.color = "Orange Black"

//delete
delete motor.idFaktur

//how to loop Object
for (let key in motor) {
    //code here
}
