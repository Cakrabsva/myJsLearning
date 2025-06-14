import Model from "../models/models.js"
import View from "../views/views.js"


class Controler {
    static requestRead () {
        let instanceData = Model.readData()
        View.displayData(instanceData)
    }

    static requestInfo () {
        View.displayInfo()
    }
    
    static requestAdd (input) {
        let addedData = Model.addData(input)
        View.displayAddedData(addedData)
    }

    static requestUpdate(input) {
        let updatedData = Model.updateData(input)
        View.displayUpdatedData(updatedData)
    }
    
    static requestDelete (input) {
        let deletedData = Model.deleteData(input)
        View.displayDeletedData(deletedData)
    }
}

export default Controler