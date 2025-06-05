/**
 * Pada tugas ini kalian diminta untuk mencari hewan peliharaan pada array multidimensi pada parameter arr.
 * Expected output, tuliskan koordinat kalian menemukan hewan peliharaan tersebut. 
 */

function findMyPet(arr, pet) {
    let arrayLoc = 0;
    let dataLoc = 0;
    let message = '';

    for (let i = 0; i < arr.length; i++) {    
        let innerArray = arr[i];

        for (let j = 0; j < innerArray.length; j++) {
            if (innerArray[j] === pet) {
                dataLoc = j;
                arrayLoc = i;

                return message = `I can find my ${pet} on location ${arrayLoc}, ${dataLoc}`;
            };
        };
    };
}

let input1 = [
    ['dog', 'cat', 'fish']
]
console.log(findMyPet(input1, 'dog')) // "I can find my dog on location 0,0"

let input2 = [
    ['dog', 'cat', 'fish'],
    ['butterfly', 'tarantula'],
    ['cow', "pig"]
]
console.log(findMyPet(input2, 'tarantula')) // I can find my tarantula on location 1,1

let input3 = [
    [' ', ' ', 'fish'],
    [' ', 'cat', 'bird'],
    ['dog', ' ', 'mongoose'],
    [' ', 'fox', ' ']
]
console.log(findMyPet(input3, 'fox')) // I can find my fox on location 3,1