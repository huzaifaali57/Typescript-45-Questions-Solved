"use strict";
let car = 'pagani';
let bike = "ktm";
let num1 = 10;
let num2 = 2;
console.log("Test 1 :", car == "bmw"); //Prediction False
console.log("Test 2 :", bike == car); //Prediction False
console.log("Test 3 :", bike == "hayabusa"); //Prediction False
console.log("Test 4 :", car.length == bike.length); //Prediction False
console.log("Test 5 :", car.toUpperCase() == bike.toLowerCase()); //Prediction False
console.log("Test 6 :", car == "pagani"); //Prediction True
console.log("Test 7 :", bike == "ktm"); //Prediction True
console.log("Test 8 :", bike.toUpperCase() == "KTM"); //Prediction True
console.log("Test 9 :", car.length == 6); //Prediction True
console.log("Test 10 :", car.toUpperCase() == "PAGANI"); //Prediction True
console.log("\n\tMore Test\t\n");
console.log("Test the Equality and Inequality");
console.log(car != bike); //Prediction True
console.log(car == bike); //Prediction False
console.log("\nTest using Lower-case Function");
console.log(car == "PAGANI".toLowerCase()); //Prediction True
console.log(car.toLowerCase() == "PAGANI"); //Prediction False
console.log("\nTest Equality and Inequality with numbers");
console.log(num1 != num2); //Prediction True
console.log(num1 == num2); //Prediction False
console.log("\nTest Greater than and Less than with numbers");
console.log(num1 > num2); //Prediction True
console.log(num1 < num2); //Prediction False
console.log("\nTest Greater than and Equal to with numbers");
console.log(num1 >= num2); //Prediction True
console.log(num2 >= num1); //Prediction False
console.log("\nTest Less than and Equal to with numbers");
console.log(num1 <= num2); //Prediction False
console.log(num2 <= num1); //Prediction True
console.log("\nTest Using AND Operator");
console.log(num1 != num2 && num1 > num2); //Prediction True
console.log(num1 == num2 && num1 > num2); //Prediction False
console.log("\nTest Using OR Operator");
console.log(num1 != num2 || num1 < num2); //Prediction True
console.log(num1 == num2 || num1 <= num2); //Prediction False
console.log("\nTest whether element is in the array");
let places = ["miami", "quebec", "china"];
console.log(places.includes("miami")); //Prediction True
console.log("\nTest whether element is not in the array");
console.log(places.includes("india")); //Prediction False