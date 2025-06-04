/**
 * Split V2 multidimensi array
 * 
 * ubah dataStudent menjadi multi dimensi Array
 * 
 * expected result:
 * [
  [ 'Cakra', 29, 'Bekerja', 'Married' ],
  [ 'Putri', 22, 'Bekerja', 'Married' ],
  [ 'Angel', 19, 'Pelajar', 'Single' ]
]
 */


let dataStudents = [
    'Cakra 29 Bekerja Married',
    'Putri 22 Bekerja Married',
    'Angel 19 Pelajar Single',
];

function extractData (data) {
    let formatedDataStudents = [];
    let studentContainer = [];
    let studentAtrb = '';

    for (let i = 0; i < data.length; i++) {
        
        let student = data[i];
        for(let j = 0; j < student.length; j++) {
 
            if (student[j] === " ") {

                if (studentContainer.length === 1) {
                    studentContainer.push(Number(studentAtrb));
                    studentAtrb = "";
                } else {
                    studentContainer.push(studentAtrb);
                    studentAtrb = "";
                };
            } else if (j === student.length - 1) {
                studentAtrb += student[j]
                studentContainer.push(studentAtrb);
                studentAtrb = "";
            } else {
                studentAtrb += student[j];
            };
        }
        formatedDataStudents.push(studentContainer);
        studentContainer = [];
    };
    return formatedDataStudents;
};

// extractData(dataStudents)
console.log(extractData(dataStudents));