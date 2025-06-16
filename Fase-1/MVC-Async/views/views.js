"use strict"

class View {
    static async displayData (instanceData) {
       console.table(instanceData)
    }

    static async displayInfo () {
        console.log(`
            node app.js read
            node app.js info
            node app.js add <movieTitle, movieGenre, movieReleaseYear >
            node app.js update <movieId, movieTitle, movieGenre, movieReleaseYear >
            node app.js delete <movieI>
        `)
    }

    static async displayAddedData(successMessage) {
        console.log(successMessage)
    }

    static async displayUpdatedData(successMessage) {
        console.log(successMessage)
    }

    static async displayDeletedData(successMessage) {
        console.log(successMessage)
    }

    static diplayErr (err) {
        console.log('Error broo', err)
    }
}

export default View