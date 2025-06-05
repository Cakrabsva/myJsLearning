/**
 * 
 * DERET GEOMETRI
 * 
 * tentukanlah apakah data yang diberikan merupakan deret geometri atau bukan.
 * expected output = boolean
 * 
 */

function deretGeometri (arr) {
    let ratio = deretRatio(arr);
    let answer = true;
    
    for (let i = 0; i < arr.length-1; i ++) {
        let number = arr[i+1]/arr[i]

        if ( number !== ratio) {
            answer = false
            return answer
        }
    };
    return answer
};

function deretRatio (mainArr) {
    let result = mainArr[1] / mainArr[0]
    return result
}



console.log(deretGeometri([1, 3, 9, 27, 81])) //true
console.log(deretGeometri([2, 4, 8, 16, 32])) //true
console.log(deretGeometri([2, 4, 6, 8]))//false
console.log(deretGeometri([2, 6, 18, 54]))//true
console.log(deretGeometri([1, 2, 3, 4, 7, 9]))//false