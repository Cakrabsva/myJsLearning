/**
 * Kelompokkan paket-paket sesuai dengan kode pengirimannya.
 * Kalian akan mendapatkan 1 parameter berupa array of strings (lihat contoh di bawah).
 * ['budi-CGK', 'bella-SRG']
 * Perhatikan pada string tersebut kita mendapatkan nama penerima dan tujuannya.
 * 
 * List tujuan adalah sebagai berikut
 * 
 * | No | Kode Penerbangan | Nama Bandara    |
   |----|:----------------:|-----------------|
   | 1. |   CGK            |  Soekarno Hatta |
   | 2. |   SRG            |  Achmad Yani    |
   | 3. |   BDO            |  Husein S.      |
   | 4. |   JOG            |  Adisucipto     |
 * 

   Output yang diharapkan adalah sebagai berikut:
   {
    nama bandara: [array yang isinya nama-nama penerima]
   }
 */
let batch1 = ['budi-CGK', 'bella-SRG', 'john-CGK', 'sastro-JOG'];

function sendItAll(arr) {
  let objOutput = {};

  if (!arr) {
    return 'no batch detacted'
  }

  let extractedArr = extractData(arr);
  for (let i = 0; i < extractedArr.length; i ++) {
    let innerArr = extractedArr[i];

    if(objOutput[innerArr[1]] === undefined) {
      objOutput[innerArr[1]] = [];
      objOutput[innerArr[1]].push(innerArr[0]);
    } else {
      objOutput[innerArr[1]].push(innerArr[0]);
    }
  }
  return objOutput;
};

function extractData (mainArr) {
  let multiArr = [];
  let arr = [];
  let srt = '';

  if (!mainArr) {
    return '';
  } ;

  for (let i = 0; i < mainArr.length; i++) {
  let data = mainArr[i];
  for (let j = 0; j < data.length; j++) {
    if (data[j] === "-") {
      arr.push(srt);
      srt = "";
    } else if (j === data.length-1) {
      srt+=data[j];
      arr.push(srt);
      srt = ""
    } else {
      srt+=data[j];
    };
  };
  multiArr.push(arr);
  arr = [];
  };
  return multiArr;
};

// sendItAll(batch1)
// console.log(extractData(batch1))

// {
//     CGK: ['budi', 'john'],
//     SRG: ['bella'],
//     JOG: ['sastro']
// }
console.log(sendItAll(batch1));

console.log(sendItAll()) // no batch detected