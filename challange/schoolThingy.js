/**
 * Pada tugas ini kalian diminta untuk menghitung berapa poin yang didapatkan oleh student dan hadiah apa saja yang bisa dia dapatkan pada suatu sekolah.
 * Poin didapatkan dengan mengerjakan challenge, exam dan rocket.
 * Di sini kalian akan mendapatkan 3 function
 * 
 * 1. Function schoolThingy
 *   - adalah function utama yang akan menghasilkan object student dengan properti nama, total point, recommended prizes
 * 2. Function getRewards
 *   - adalah function yang akan menghasilkan rekomendasi hadiah yang dapat diambil student DIMULAI DARI YANG PALING MAHAL
 * 3. Function getPoints
 *   - adalah function yang akan menghitung berapa poin yang dimiliki oleh student
 * 
 * Expected output:
 * 
 *  {
        name: "Skyler",
        totalPoints: 1450,
        recommendedPrizes: "tempat pensil"
    }

 * Penjelasan kenapa cuma tempat pensil, karena poinnya tidak cukup untuk hadiah selanjutnya di kategori 1000
 * 
 */

function getPoints(taskDone) {
    let taskPointBreakDown = {
        challenge: 0,
        exam: 0,
        rocket:0
    }
    
    let tasks = {
        challenge: 800,
        exam: 750,
        rocket: 100
    };
    
    for (let keyTaskDone in taskDone) {
        for (let keyTask in tasks) {
            if (keyTaskDone === keyTask) {
                let sumTaskDone = taskDone[keyTaskDone]
                let taskScore =  tasks[keyTask]

                taskPointBreakDown[keyTaskDone] = sumTaskDone * taskScore
            } 
        }
    }

    let totalPoints = 
        taskPointBreakDown.challenge +
        taskPointBreakDown.exam +
        taskPointBreakDown.rocket 
    return totalPoints
};

function getRewards(totalPoints) {
    let recommendedPrizes = []
    let recommendedPrize = ''

    let prizes = [
        [1000, "tempat pensil", "1 pak pulpen", "canvas kecil"],
        [3000, "novel angels and demons", "novel harry potter"],
        [6000, "free lunch for 1 week voucher"]
    ];
    
    if (totalPoints >= prizes[0][0] && totalPoints < prizes[1][0]) {
        let posiblePrizes = Math.round(totalPoints/1000)

        if (posiblePrizes > 1) {
            for (let i = 1; i < posiblePrizes+1; i++) {
                recommendedPrizes.push(prizes[0][i])
            }
        } else {
            recommendedPrize += prizes[0][posiblePrizes]
            return recommendedPrize
        }

    } else if (totalPoints >= prizes[1][0] && totalPoints < prizes[2][0]) {
        let posiblePrizes = Math.round(totalPoints/3000)

        if (posiblePrizes > 1) {
            for (let i = 1; i < posiblePrizes+1; i++) {
                recommendedPrizes.push(prizes[1][i])
            }
        } else {
            recommendedPrize += prizes[1][posiblePrizes]
            return recommendedPrize
        }
        
    } else if (totalPoints >= prizes[2][0]) {
        let posiblePrizes = Math.round(totalPoints/6000)

        if (posiblePrizes > 1) {
            for (let i = 1; i < posiblePrizes+1; i++) {
                recommendedPrizes.push(prizes[2][i])
            }
        } else {
            recommendedPrize += prizes[2][posiblePrizes]
            return recommendedPrize
        }
    } else {
        return recommendedPrize = "So sorry but you don't have enough point to redeem"
    }
    return recommendedPrizes
};

function getTaskDone (studentTasks) {
    let taskDone = {}
    let tasks = studentTasks.tasks

    for (let i = 0; i < tasks.length; i++) {
        let taskName = tasks[i]
        let initialTaskName = ''

        for (let j = 0; j < taskName.length; j++) {
            let taskNameChar = taskName[j]
            
            if (taskNameChar === "-") {
                if (taskDone[initialTaskName] === undefined) {
                    taskDone[initialTaskName] = 1
                } else {
                    taskDone[initialTaskName]++
                }
                break
            } else {
                initialTaskName += taskNameChar
            }
        }
    }
    return taskDone
}

function schoolThingy(studentData) {
    let taskDone = getTaskDone(studentData)
    let totalPoints = getPoints (taskDone)
    let recommendedPrizes = getRewards(totalPoints)
    let studentName = studentData.name
    let output = {
        name: studentData.name,
        totalPoints: totalPoints,
        recommendedPrizes: recommendedPrizes
    }
    return output
}

let studentJohn = {
    name: "John",
    tasks: [
        "challenge-001",
        "challenge-002",
        "challenge-003",
        "exam-04",
        "challenge-004",
        "challenge-005",
        "challenge-006",
        "challenge-007",
        "rocket-001"
    ]
}

let studentSkyler = {
    name: "Skyler",
    tasks: [
        "challenge-001",
        "challenge-002",
        "challenge-003",
        "exam-04"
    ]
}

console.log(schoolThingy(studentJohn))
console.log(schoolThingy(studentSkyler))

