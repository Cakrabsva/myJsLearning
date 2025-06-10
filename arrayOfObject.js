/**
 * 
 * ARRAY OF OBJECT
 * 
 * Array of object memiliki pola data tertentu, sehingga kita bisa mengidentifikasi tiap objectnya tanpa harus kesulitan apakah object yang ada dalam array sama atau berbeda
 * 
 * pola dan ketentuan dalam array of object:
 * + Didalam Array of object hanya boleh ada object didalamnya.
 * + didalam object harus memiliki property yang sama (jumlah)
 * + stiap properti dalam object  harus memiliki tipe data yang sama dengan object yang lainya
 * 
 * 
 */

// Array of Object in Action

// * Create & read *
// + Create new array of object
let dataBase = [
    {
        id: 1,
        nama: 'kucing',
        jenis: 'peliharaan',
        makanan: ['wiskas', 'ikan asin']
    },
    {
        id: 2,
        nama: 'anjing',
        jenis: 'peliharaan',
        makanan: ['ayam', 'dog food']
    },
    {
        id: 3,
        nama: 'monyet',
        jenis: 'primata',
        makanan: ['pisang', 'kacang']
    },
    {
        id: 4,
        nama: 'gorila',
        jenis: 'primata',
        makanan: ['daging', 'buah']
    }
]

// + Inserting new object
dataBase.push({
    id: 5,
    nama: 'burung',
    jenis: 'peliharaan',
    makanan : ['pelet', 'biji - bijian']
})

// + inserting new property 
// (in all data object - remember terms and condition "all object data should have same number of property and same data type")
for (let i =0; i < dataBase.length; i ++ ) {
    let objData = dataBase[i]
    objData.exotic = true 
}

// + inset new object with increment id

dataBase.push({
    id: dataBase[dataBase.length-1].id + 1,
    nama: 'cicak',
    jenis: 'laknat',
    makanan: ['laron'],
    exotic: false
})

// + Read one particular object
// need identifier that can be difference from other object
for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    if(objData.nama === 'anjing') {
        //console.log(objData)
    }
}

// + Read some particular object
let primatas = []

for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    if(objData.jenis === 'primata') {
        primatas.push(objData)
    }
}

// console.log(primatas)
// console.log(dataBase)

// * update *
// update a property in a certain obeject
for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    if(objData.nama === 'gorila') {
        objData.makanan.push('ikan')
    }
}

// update certain property in selected object
for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    if(objData.jenis === 'peliharaan') {
        objData.exotic = false
    }
}

// console.log(dataBase)

// * Deleting

// soft delete
for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    objData.deleted = false

}

for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    if (objData.nama === 'gorila') {
        objData.deleted = true
    }
}

let tempData = []

for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    if (objData.deleted === false) {
        tempData.push(objData)
    }
}

console.log(tempData)

// hard delete
for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    if (objData.name === 'gorila') {
        delete objData
    }
}

// another hard delete
let newDB = []

for (let i = 0; i < dataBase.length; i ++) {
    let objData = dataBase[i]
    if (objData.nama !== 'gorila') {
        newDB.push(objData)
    }
}
