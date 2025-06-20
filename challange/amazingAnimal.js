/**
 * ! Release 0
 * Buatlah sebuah class bernama Animal dan memiliki properti sebagi berikut:
 * > name (nama hewan)
 * > age (umur hewan)
 * > type (jenis hewan)
 * > favouriteFoods (makanan kesukaan hewan)
 * > totalLegs (jumlah kaki hewan)
 * 
 * expected output:
 *      const ruruTheCat = new Animal ()
 *      console.log(ruruTheCat)
 * 
 *          Animal {
 * 
 *              name:'Ruru',
 *              age: 1
 *              type: 'Cat'
 *              favouriteFoods: ['Salmon', 'Tuna', 'Chicken']
 *              totalLegs: 4
 *          }
 * 
 *      uruTheCat.name = 'Ruru The Cat'
 *      console.log(ruruTheCat)
 * 
 *          Animal {
 * 
 *              name:'Ruru The Cat',
 *              age: 1
 *              type: 'Cat'
 *              favouriteFoods: ['Salmon', 'Tuna', 'Chicken']
 *              totalLegs: 4
 *          }
 * 
 * ! Release 1
 * 1. Buatlah instance method 'move' and 'getInformation'
 * 
 * expected Oputput:
 *      ruruThecat.move() //I'm Walking and running with my 4 legs
 * 
 * 2. Buatlah instance method 'getInformation'
 * 
 * expected Oputput:
 *      ruruTheCat.getInformation("Anyeong haseo~", "Chassing Birds") // Anyeong haseo~ my name is Ruru The Cat, I'm 1 years old, and offcourse I'm a cat, my Favourite food are Salmon, Tuna, Chicken. I love chasing birds with my 4 cutipie legs'
 * 
 * ! Release 2
 * 1. Buatlah properti default dan dinamis
 *      const ruruTheCat = new Animal ('Ruru', 1, 'Cat', ['Salmon', 'Tuna', 'Chicken'], 4)
 * const charlieTheDog = new Animal ('Charlie', 2, 'Dog', ['Meat', 'Cake', 'Chicken'], 4)
 * 
 * 
 * 
 */

// Release 0 - Done
class Animal  {
    constructor (name='Ruru', age=1, type='Cat', favouriteFoods=['Salmon', 'Tuna', 'Chicken'], totalLegs=4) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.favouriteFoods = favouriteFoods
        this.totalLegs = totalLegs;
    }
    move () {
        let message = `I'm Walking and running with ${this.totalLegs} legs`
        return message
    }

    getInformation (greetings, hobby) {
       

        let message = `${greetings} my name is ${this.name}, I'm ${this.age} years old, and offcourse I'm a ${this.type}, my Favourite food are ${this.favouriteFoods}. ${this.move()} and I love ${hobby} with my ${this.totalLegs} cutipie legs `
        return message
    }
}

const ruruTheCat = new Animal()
console.log(ruruTheCat)
ruruTheCat.name = 'Ruru The Cat'
console.log(ruruTheCat)

//Release 1 - Done
console.log(ruruTheCat.move())
console.log(ruruTheCat.getInformation("Anyeong Haseoo~", "Chasing birds"))

//Release 2 - Done
const charlieTheDog = new Animal('Charlie', 2, 'Dog', ['Meat', 'Cake', 'Chicken'], 4)
console.log(charlieTheDog)
console.log(charlieTheDog.move())
console.log(charlieTheDog.getInformation("Swadikhaarp~", "Chasing Cats"))
console.log({ruruTheCat, charlieTheDog})
