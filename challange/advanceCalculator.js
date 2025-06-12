/**
 * 
 * Adavance Calculator
 * > fungsing penjumlahan
 * > funsi pengurangan
 * > fungsi perkalian
 * > fungsi pembagian
 * > fungsi pangkat 2, 3 dst
 * > fungsi akar pangkat 2
 * > fungsi hitung keliling lingkaran
 * 
 * make sure it can be chaining
 * 
 */

class Calculator {
    constructor (input = 0) {
        this.input = input
        this.pi = 3.14
        this.result;
    }

    penjumlahan (input) {
        if (!this.result) {
            this.result =this.input + input
        } else {
            this.result+=input
        }
        return this
    }

    pengurangan (input) {
        if (!this.result) {
            this.result = this.input - input
        } else {
            this.result-=input
        }
        return this
    }

    perkalian (input) {
        if (!this.result) {
            this.result = this.input * input
        } else {
            this.result*=input
        }
        return this
    }

    pembagian (input) {
        if (input === 0) {
            this.result = 'Cannot Devide by 0'
        } else {
            if (!this.result) {
                this.result = this.input / input
            } else {
                this.result/=input
            }
        }
        return this
    }
    pangkat (pangkat) {
        if (!this.result) {
           this.result = ('please input your num first')
        } else {
            let staticResult = this.result
            for (let i = 0; i < pangkat-1; i ++) {
                this.result*=staticResult
            }
        }
        return this
    }
    akarPangkat (akarPangkat) {
        let counter = 1
        let pangkat = akarPangkat

        if (!this.result) {
            this.result = ('please input your num first')
        } else {
            while (pangkat < this.result) {
                counter++
                pangkat *= akarPangkat
            }
            
            if (pangkat === this.result) {
                this.result = counter
            } else {
                let i = 0
                do {
                    counter = (counter + this.result/counter)/akarPangkat
                    i++

                    if(i === 2) {
                        this.result = counter
                    }
                } while (i<2)
            }
        }
        return this
    }
    
    keliligLingkaran (input) {
        this.result = 2*this.pi*input
    }
}

let calculator = new Calculator()
calculator
    .penjumlahan(10)
    .penjumlahan(10)
    .pengurangan(5)
    .perkalian(2)
    .pembagian(10)
    .pangkat(3)
    .akarPangkat(3)
console.log(calculator.result)

calculator.keliligLingkaran(10)
console.log(calculator.result)



