"use strict"

class Employee {
    #corporateSaving
    #id

    constructor (name, position, baseSalary, corporateSaving=0, department) {
        this.name = {
            firstName:name, 
            lastName: 'Bilisairo'
        };
        this.#id = 'B2132SIE216584'
        this.position = position;
        this.baseSalary = baseSalary
        this.#corporateSaving = corporateSaving
        this.department = department
    }

    takeHomePay () {
        let tunjangan = this.position === 'manager' ? 1000000 : 500000
        let tax = this.baseSalary * 0.1
        let bonus = this.position === 'manager' ? this.baseSalary : this.baseSalary * 0.5
        return this.baseSalary + tunjangan + bonus - tax
    }

    get corporateSaving () {
        return this.#corporateSaving
        // .toLocaleString("id-ID", {
        //     style: "currency",
        //     currency: "IDR"
        // })
    }

    set corporateSaving (value) {
        if (typeof value !== 'number') {
            throw new Error ("data format inconsistence")
        }
        this.#corporateSaving = value
    }

    get id () {
        return this.#id.slice(0, -2) + 'xxx'
    }
}

class MarketingDepartment extends Employee {
    constructor (name, position, baseSalary, corporateSaving=0) {
        super (name, position, baseSalary, corporateSaving, 'Marketing')
    }

    takeHomePay () {
        super.takeHomePay()
    }
    
}

const cakra = new Employee ('cakra', 'manager', 5000000,1_000_000,'marketing')
const marketing = new MarketingDepartment ('cakra', 'manager', 5000000,1_000_000,'marketing')

console.log(cakra)
console.log(cakra.corporateSaving)
console.log(cakra.id)
console.log(cakra.takeHomePay())

cakra.corporateSaving += 500000

console.log(cakra.corporateSaving)
console.log(cakra.name.firstName)

console.log(marketing)

