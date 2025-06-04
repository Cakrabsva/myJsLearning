let studentsData = [
    ['Cakra', 29, false],
    ['Putri', 22, false],
    ['Angel', 19, false],
    ['Julkiplih', 45, true]
];

function filterAge (students) {
    let youngStudents = []

    for (let i = 0; i < students.length; i ++) {
        if (students[i][1] < 30) {
            youngStudents.push(students[i][0]);
        }
    };
    return youngStudents;
};

console.log(filterAge(studentsData))