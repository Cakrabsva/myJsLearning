/**
 * Belajar object
 * Di sini kalian diminta untuk mengelompokkan properti dari jenis mahluk hidup yang ada pada parameter arr.
 * Jadikan dia sebagai object. Mahluk hidup yang ada dapat berubah-ubah. 
 */

let arr1 = [
    ['tangan', 'manusia'],
    ['belalai', 'gajah'],
    ['gading', 'gajah'],
    ['kaki', 'manusia'],
    ['taring', 'macan'],
    ['paruh', 'burung'],
    ['cakar',  'macan'],
    ['sayap', 'burung']
]

function addProperty(arr) {
    let outputObject = {};


    for (let i = 0; i < arr.length; i ++) {
        
        let data = arr[i]
        if (outputObject[data[1]] === undefined) {
            outputObject[data[1]] = [];
            outputObject[data[1]].push(data[0]);
        } else {
            outputObject[data[1]].push(data[0]);
        };
    };
    return outputObject;
};



console.log(addProperty(arr1)) 
// {
//     manusia: ['tangan', 'kaki'],
//     gajah: ['belalai', 'gading'],
//     macan: ['taring', 'cakar'],
//     burung: ['paruh', "sayap"]
// }