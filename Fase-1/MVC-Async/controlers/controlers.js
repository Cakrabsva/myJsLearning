import Model from "../models/models.js"
import View from "../views/views.js"


class Controler {
    static async requestRead () {
        try {
            let instanceData = await Model.readData()
            View.displayData(instanceData)
        } catch (err) {
            View.diplayErr(err)
        }
    }

    static async requestInfo () {
        try {
            View.displayInfo()
        } catch (err) {
             View.diplayErr(err)
        }
        
    }
    
    static async requestAdd (input) {
        try {
            let editDataStatus = await Model.addData(input)
            View.displayAddedData(editDataStatus)
        } catch (err) {
            View.diplayErr(err)
        }
    }

    static async requestUpdate(input) {
        try {
            let updatedData = await Model.updateData(input)
            View.displayUpdatedData(updatedData)
        } catch (err) {
            View.diplayErr(err)
        }
        
    }
    
    static async requestDelete (input) {
        try {
            let deletedData = await Model.deleteData(input)
            View.displayDeletedData(deletedData)
        } catch (err) {
            View.diplayErr(err)
        }
        
    }
}

export default Controler