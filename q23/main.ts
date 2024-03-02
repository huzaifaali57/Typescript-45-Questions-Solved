let car = 'pagani'
let bike = "ktm"

console.log("Test 1 :",car == "bmw") //Prediction False

console.log("Test 2 :",bike == car)  //Prediction False

console.log("Test 3 :",bike == "hayabusa") //Prediction False

console.log("Test 4 :",car.length == bike.length) //Prediction False

console.log("Test 5 :",car.toUpperCase() == bike.toLowerCase()) //Prediction False

console.log("Test 6 :",car == "pagani") //Prediction True

console.log("Test 7 :",bike == "ktm")  //Prediction True

console.log("Test 8 :",bike.toUpperCase() == "KTM") //Prediction True

console.log("Test 9 :",car.length == 6) //Prediction True

console.log("Test 10 :",car.toUpperCase() == "PAGANI") //Prediction True