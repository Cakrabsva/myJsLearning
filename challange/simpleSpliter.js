/**
 * Kalian diminta untuk menggabungkan semua karakter yang ada dalam parameter str dan menghilangkan tanda koma (,)
 */


function split(str) {
    let result = ''
    for (let i = 0; i < str.length; i+=2) {
        result += str[i];
    };
    return result
};

console.log(split('a,b,c,d,e,f,g,h,i,j')) // 'abcdefghij'
console.log(split('1,2,3,4,5')) // '12345'