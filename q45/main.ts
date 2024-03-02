function carInfo(manufacturer: string, model: string, ...options: [string, any][]) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Calling the function with required information and additional details
let myCar = carInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);

console.log(myCar);