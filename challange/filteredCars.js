let cars = ['BMW', 'Ford', 'Volvo', 'Fiat', 'Toyota', 'Suzuki', 'Honda', 'BYD', 'CHerry', 'Tank', 'Denza', 'Mercedes', 'Ferrary', 'Bugati'];

function filterCars (cars, initial) {
    let carsFiltered = []

    for (let i = 0; i < cars.length; i++) {
        if (cars[i][0] === initial) {
            carsFiltered.push(cars[i]);
        };
    };
    return carsFiltered;
};

let functionFilterCars = filterCars(cars, "H");

if(functionFilterCars.length === 0) {
    console.log("There is no such a car initial");
} else {
    console.log(functionFilterCars);
};