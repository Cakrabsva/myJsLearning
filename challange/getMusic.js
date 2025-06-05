/**
 * Kamu diminta untuk membantu toko musik memberikan musik-musik yang sesuai dengan genre yang diberikan oleh user.
 * Perhatikan tiap test case untuk mendapatkan semuan semua hasil yang diinginkan
 * 
 * expected output:
 * 
 * 
 * 
 */

function musicStore(genreInput) {
    let dbMusic = [
        ["metal", "dream theater", "deadsquad", "avantasia"],
        ["jazz", "t-square", "snarky puppy", "cassiopea"],
        ["rock", "guns and roses", "rolling stones", "van halen"],
        ["pop", "peterpants", "armedi", "es teh dua gelas"]
    ]

    let musicByGenre = []

    // Checking apakah inputan sesuai dengan daftar music sesuai genre
    for (let i = 0; i < dbMusic.length; i ++) {
        let dbMusicGenre = dbMusic[i][0]

        //jika memang sesuai gendre maka balikan gendre dan list music sebagai output
        if (genreInput === dbMusicGenre) {
            musicByGenre = dbMusic[i]
            return musicByGenre
        }
    }
}


function getMusic(user) {

    //deklarasi semua kebutuhan variabel
    let outputRecommentMusic = []
    let userGenres = []
    let dataStr = ''
    let errorMessage = ''

    //handling error apabila tidak ada inputan data
    if (!user) {
        return errorMessage = "Invalid input"
    }

    //melakukan ekstrasi genre favourite dari user untuk memudahkan di proses berikutnya, output berupa array
    let genres = user.genres
    for (let i = 0; i < genres.length; i ++) {
        if (genres[i] === ",") {
            userGenres.push(dataStr)
            dataStr = ""
        } else if (i === genres.length-1) {
            dataStr += genres[i]
            userGenres.push(dataStr)
            dataStr = ""
        } else {
            dataStr += genres[i]
        }
    }

    // melakukan pencocokan genre user dengan database music melalui fungsing music store untuk mendapatkan rekomendasi music. output akan berupa multidimensi array
    for (let i = 0; i < userGenres.length; i++) {
        let dataMusic = musicStore(userGenres[i])

        //error handling apabila genre user tidak ditemukan didalam database music
        if (!dataMusic) {
            return errorMessage = 'there is no kind of music in this holy place'
        } else {
            outputRecommentMusic.push(dataMusic)
        }

    }
    return outputRecommentMusic
}


let profile = {
    name: "Andrean",
    genres: "metal,jazz"
}
let profile2 = {
    name: "Andrean",
    genres: "pop"
}
let profile3 = {
    name: "Andrean",
    genres: "dangdut"
}



// console.log(getMusic()) // invalid input

console.log(getMusic(profile))
console.log(getMusic(profile2))
console.log(getMusic(profile3))
console.log(getMusic())


