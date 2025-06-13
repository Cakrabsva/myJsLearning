"use strict"
/**
 * Notes:
 * 
 * Composition:
 * - Composition is a design principle where a class contains an instance of another class.
 * - Example: Vehicle has a Fuel object as a property (see: this.fuel = new Fuel(fuel)).
 * 
 * Aggregation:
 * - Aggregation is a special form of association where objects have their own lifecycle but can be part of another object.
 * - In JavaScript, aggregation can be shown by passing objects as parameters and storing references, not creating new ones.
 * 
 * Static:
 * - Static properties and methods belong to the class itself, not to instances.
 * - Example: static carModel and static honk() in Vehicle class.
 * - Accessed via Vehicle.carModel or Vehicle.honk(), not via an instance.
 * 
 * Factory Method:
 * - A factory method is a function that returns new instances of a class, often with some logic.
 * - Example:
 *   static createElectricCar(brand, speed) {
 *     return new Vehicle(brand, speed, 'Electric');
 *   }
 */

class Vehicle {
    constructor(brand, speed, fuel) {
        this.brand = brand
        this.speed = speed
        //this one called composition
        this.fuel = new Fuel (fuel)

    }

    //static property
    static carModel = ['Engine', 'Electric']

    //instance methode, 
    move () {
        return `this ${this.brand} Vehicle can run ar ${this.speed} km/h with ${this.fuel} fuel`
    }

    // static method
    static honk () {
        return "Hoonk... Honk..."
    }
}

class Fuel {
    constructor (type) {
        this.type = type
        this.whatFuel()
    }

    whatFuel () {
        if (this.type === 'Patrol') return this.price = 20
        if (this.type === 'Electric') return this.price = 0
    }
}


class ElectricCar extends Vehicle {
    constructor (brand, speed) {
        super(brand, speed, 'Electric')
    }
}

class EngineCar extends Vehicle {
    constructor (brand, speed) {
        super(brand, speed, 'Patrol')
    }
}

class CarFactory {
    static createCar (brand, speed, fuel) {
        if (fuel === 'Patrol') return new EngineCar (brand, speed)
        if (fuel === 'Electric') return new ElectricCar (brand, speed)
    }

    static bulkCreate (carDealer) {
        return carDealer.map((el) => {
            const {brand, speed, fuel} = el
            return this.createCar(brand,speed,fuel)
        })   
    }
}


const carDealer = [
    {
        brand: 'Honda',
        speed: 90,
        fuel: 'Patrol'
    },
    {
        brand: 'BYD',
        speed: 200,
        fuel: 'Electric'
    },
    {
        brand: 'Toyota',
        speed: 100,
        fuel: 'Patrol'
    },
    {
        brand: 'Wuling',
        speed: 180,
        fuel: 'Electric'
    },
    {
        brand: 'Mazda',
        speed: 180,
        fuel: 'Patrol'
    },
]

let myElectricCar = CarFactory.bulkCreate(carDealer)
console.log(myElectricCar)

