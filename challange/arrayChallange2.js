/*
Untuk soal nomor 2, dilarang menjalankan kode di code editor. Kalian hanya boleh membaca dan menganalisa apa output dari sintaks berikut:

--- CODE

function ganjil(num) {
  return num % 2 === 1
} 

=> code diatas akan menghasilkan boolean

let nums = [
  [3, 6, 9],
  [12, 17, 81, 95],
  [4, 18, 102],
  [77]
]

=> kode diatas merupakan deklarasi variabel yang berisi array multidimesi kedalaman 2

let result = []

=> kode looping ini untuk mengakses data array didalam variabel 'nums'
for(let i = 0; i < nums.length; i++) {

=> kode looping ini untuk mengakse inner array 1
  for(let j = 0; j < nums[i].length; j++) {
    const num = nums[i][j]

    => kode dibawah ini merupakan pengkondisian berdasarkan function diatas untuk mencari angka ganjil, jika hasilnya thruty maka, variabel penampung 'result' akan menerima data berupa angka yang telah dikurangi dengan nilai 10, namun apabila falsy result akan menerima angka yang telah ditambahkan dengan nilai 5.
    if(ganjil(num)) {
      result.push(num - 10) // 3 = -7; 9 = -1; 17 = 7; 81 = 71; 95 = 85; 77 = 67;
    } else {
      result.push(num + 5) // 6 = 11; 12 = 17; 4 = 9; 18 = 21; 102 = 107; 
    }
  }
}

console.log(result)

*/

// Jawaban :
/**
 * Kesimpulanya code diatas akan membalikan atau memberikan output data array 1 dimensi didalam variabel 'result, berisi angka - angka yang telah di format (melalui proses perhitungan matematika sederhana) dan jumlah data tersebut sebanyak 11 data
 */
