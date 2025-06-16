'use strict'
import { promises as fs } from 'fs'
import MovieFactory from './class.js'

class Model {
   
    static async readData() {
        let data  = await fs.readFile('./movies.json', 'utf-8')
        let parsedData = JSON.parse(data)
        //semua data yang keluar dari model harus instance
        let instanceData = MovieFactory.bulkInstanceMovie(parsedData)
        return instanceData 
    }

    static async addData (input) {
        if (input.length > 3) {
            throw new Error('Too many arguments for add command');
        } else {
            let successMessage = 'Data berhasil ditambahkan'
            let data = await this.readData()
            let lastData = data[data.length-1]
            let idIncrement = lastData.id +1
            let [title, genre, release_year] = input
            let instanceData = MovieFactory.instanceMoive(idIncrement, title, genre, +release_year)
            data.push(instanceData)
            data = JSON.stringify(data,null,4)
            await fs.writeFile('./movies.json', data)
            return successMessage
        }
    }

    static async updateData (data) {
        let successMessage = "Data Berhasil Diubah!"
        let dataBase = await this.readData()
        let [id, title, genre, release_year] = data
        let indexFound;
        
        dataBase.map((el, index) => { 
            if (el.id === +id) return indexFound = index
        })
        // dataBase[indexFound].title = title
        
        if (title) dataBase[indexFound].title = title
        if (genre) dataBase[indexFound].genre = genre
        if (release_year) dataBase[indexFound].release_year = +release_year

        await fs.writeFile('./movies.json', JSON.stringify(dataBase, null, 4))
        return successMessage
    }

    static async deleteData (input) {
        let successMessage = "Data telah berhasil di hapus"
        let dataBase = await this.readData()
        let [id] = input
        let newDataBase = []

        newDataBase = dataBase.filter((el) => el.id !== +id)
        await fs.writeFile('./movies.json', JSON.stringify(newDataBase, null, 4))
        return successMessage
    }
}
export default Model