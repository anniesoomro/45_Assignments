"use strict";
// 13. Your own Array: Think of your favorite  mode of transportation, such as a motorcycle or a car,and make a list that stores several examples. Use your list to print a series of statements about these items, such as "I would like to own a Honda motorcycle."
let vehicles = ["Audi", "Honda motorcycle", "Civic", "Cultus", "Mehran"];
// console.log("I would like to own a" + " " + vehicles[0]);
// console.log("I would like to own a" + " " + vehicles[1]);
// console.log("I would like to own a" + " " + vehicles[2]);
// console.log("I would like to own a" + " " + vehicles[3]);
// console.log("I would like to own a" + " " + vehicles[4]);
for (let i = 0; i < vehicles.length; i++) {
    console.log(`i would like to own a ${vehicles[i]}`);
}
