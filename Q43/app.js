"use strict";
// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let Magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`Great ${magicians}`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let greatMagicians = make_great([...Magicians]);
//Creating  a copy of the original array
show_magicians(Magicians);
console.log("......");
show_magicians(greatMagicians);
