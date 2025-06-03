/**
 * 
 * ARRAY
 * ============
 * 
 * Push = menambahkan data dalam array di paling belakang
 * Pop = mengeluarkan data paling belakang
 * unshift = menambahkan data paling depan
 * shift = mengeluarkan data paling depan
 * splice = menambahkan data di tengah2 data
 * 
 * untuk mendeklarasikan string dalam array menggunakan ''
 * untuk menuliskan variable berisikan array sebaiknya menggunakan plural word 
 * 
 */

let residences = ['Cakra', 'Putri', 'Golden Retriver', 'Jenny', 'Someone']

residences.push('Lion Star') // ['Cakra', 'Putri', 'Golden Retriver', 'Jenny', 'Someone', 'lion Star']

residences.pop() //['Cakra', 'Putri', 'Golden Retriver', 'Jenny', 'Someone']

let lastResidence = residences.pop()//"lion Star"
let firstResidence = residences[0] //Cakra
let countResidence = residences.length // 5
let arrayChecking = Array.isArray(residences) //true



let 