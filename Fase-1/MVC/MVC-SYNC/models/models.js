'use strict'
import fs from 'fs'
import MovieFactory from './class.js'

class Model {
    //semua data yang keluar dari model harus instance
    static readData() {
        let data = fs.readFileSync('./movies.json', 'utf-8')
        let parsedData = JSON.parse(data)
        let instanceData = parsedData
        return instanceData = MovieFactory.bulkInstanceMovie(parsedData)
    }

    static addData (input) {
        let successMessage = 'Data berhasil ditambahkan'
        let data = this.readData()
        let lastData = data[data.length-1]
        let idIncrement = lastData.id +1
        let [title, genre, release_year] = input
        let instanceData = MovieFactory.instanceMoive(idIncrement, title, genre, +release_year)
        data.push(instanceData)
        data = JSON.stringify(data,null,4)
        fs.writeFileSync('./movies.json', data)
        return successMessage
    }

    static updateData (data) {
        let successMessage = "Data Berhasil Diubah!"
        let dataBase = this.readData()
        let [id, title, genre, release_year] = data
        let indexFound;
        

        dataBase.map((el, index) => { 
            if (el.id === +id) return indexFound =index
        })
        // dataBase[indexFound].title = title
        
        if (title) dataBase[indexFound].title = title
        if (genre) dataBase[indexFound].genre = genre
        if (release_year) dataBase[indexFound].release_year = +release_year

        fs.writeFileSync('./movies.json', JSON.stringify(dataBase, null, 4))
        return successMessage
    }

    static deleteData (input) {
        let successMessage = "Data telah berhasil di hapus"
        let dataBase = this.readData()
        let [id] = input
        let newDataBase = []

        newDataBase = dataBase.filter((el) => el.id !== +id)
        fs.writeFileSync('./movies.json', JSON.stringify(newDataBase, null, 4))
        return successMessage
    }
}
export default Model