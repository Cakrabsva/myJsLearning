// 1. Buatlah sebuah variabel dengan nama "groups"

// 2. Isi variable tersebut dengan array yang memiliki 3 array :
// - ['jennie', 'lisa', 'jisoo', 'rose']
// - ['jennie', 'lisa', 'jisoo', 'rose']
// - ['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong']

// 3. Cetak element array pertama (['jennie', 'lisa', 'jisoo', 'rose'])

// 4. Cetak element array ketiga (['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong'])

// 5. Ganti element ketiga dari array menjadi:
// - ['irene', 'joy', 'wendy', 'yeri', 'seulgi']

// 6. Cetak ("wendy")

// 7. Gunakan property length untuk mencetak jumlah element di array index kedua

// 8. Gunakan loop for untuk mencetak nilai groups di console secara berurutan
// output:

/*

['jennie', 'lisa', 'jisoo', 'rose']
['winter', 'karina', 'giselle', 'ningning']
['irene', 'joy', 'wendy', 'yeri', 'seulgi']

*/

// 8. Gunakan loop for untuk mencetak nama member di console secara berurutan

/*

'jennie'
'lisa'
'jisoo'
'rose'
'winter'
'karina'
'giselle'
'ningning'
'irene'
'joy'
'wendy'
'yeri'
'seulgi'

*/

// Number 1 & 2
let groups = [
    ['jennie', 'lisa', 'jisoo', 'rose'],
    ['jennie', 'lisa', 'jisoo', 'rose'],
    ['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong']
];

//Number 3
console.log(groups[0]);

//Number 4
console.log(groups[2]);

//Number 5
groups.pop();
groups.push(['irene', 'joy', 'wendy', 'yeri', 'seulgi']);

//Number 6
console.log(groups[2][2]);

//Number 7
console.log(groups[1].length);

//Number 8
for (let i = 0; i < groups.length; i++) {
    console.log(groups[i])
};

//Number 9
for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < groups[i].length; j++) {
        console.log(groups[i][j])
    };
};