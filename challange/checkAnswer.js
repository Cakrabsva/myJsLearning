/**
 * Kalian diminta untuk membantu sekolah dalam menilai pekerjaan siswa-siswanya.
 * Di sini kalian mendapatkan 2 parameter yang answers (jawaban siswa) dan key (kunci jawaban).
 * Length dari answers dan key selalu sama yaitu 20.
 * Untuk setiap jawaban yang benar, poin bertambah sebanyak 10
 * Untuk setiap jawaban yang salah, poin akan berkurang sebanyak 5
 * Untuk setiap jawaban yang tidak ada isinya, tidak ada pengurangan atau penambahan poin
 * Setelah kalian mendapatkan total poin, hitunglah nilai mereka dengan rumus:
 * ((total nilai yang didapat)/(total nilai yang bisa diraih))*100
 * note: hasilnya persetage
 * 
 * expected output:
 * `Siswa ini mendapatkan nilai <persentase nilai>%`
 * 
 */


function checkAnswers(answers, key) {
    let studentAnswers = extractData(answers)
    let keyAnswers = extractData(key)
    let correctAnswPoint = 10;
    let falseAnswPoint = -5
    let countQuestion = key.length 
    let maxPoint = countQuestion*correctAnswPoint
    let totalPoint = 0
    let score = 0
    let output = ''

    for (let i = 0; i < countQuestion; i++) {
        if (studentAnswers[i]) {
            if (studentAnswers[i] === keyAnswers[i]) {
                totalPoint += correctAnswPoint;
            } else if (studentAnswers[i] !== keyAnswers[i]) {
                totalPoint += falseAnswPoint;
            };
        };
    };
    
    score = Math.round((totalPoint/maxPoint)*100);
    output = `Siswa ini mendapatkan nilai ${score}%`;
    
    return output
    
};

function extractData (multiArr) {
    let extractedOutput = [];

    for (let i = 0; i < multiArr.length; i++) {

        let innerArr = multiArr[i];
        for (let j = 0; j < innerArr.length; j++) {
            if (innerArr[j]) {
                    extractedOutput.push(innerArr[j]);
            } else if (j === innerArr.length-1 && extractedOutput.length < i+1) {
                    extractedOutput.push('')
            };
        };
    };
        return extractedOutput
}; 

let studentAnswer = [
    ['', 'b', '', ''],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', '', '', 'd'],
    ['', '', '', 'd'],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', 'c', ''],
    ['a', '', '', ''],
    ['', '', '', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['a', '', '', ''],
]

let keyAnswer = [
    ['', 'b', '', ''],
    ['', '', 'c', ''],
    ['', '', '', 'd'],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['', '', 'c', ''],
    ['', '', '', 'd'],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['a', '', '', ''],
    ['', '', '', 'd'],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', '', 'c', ''],
]

console.log(checkAnswers(studentAnswer, keyAnswer))