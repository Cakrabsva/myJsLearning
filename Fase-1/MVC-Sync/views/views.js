"use strict"

class View {
    static displayData (instanceData) {
       console.table(instanceData)
    }

    static displayInfo () {
        console.log(`
            node app.js read
            node app.js info
            node app.js add
            node app.js update
            node app.js delete
        `)
    }

    static displayAddedData(successMessage) {
        console.log(successMessage)
    }

    static displayUpdatedData(successMessage) {
        console.log(successMessage)
    }

    static displayDeletedData(successMessage) {
        console.log(successMessage)
    }
}

export default View