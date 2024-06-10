"use strict";
// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let fruit = "Mango";
console.log("Is fruit == 'Mango'? I pridict True.");
console.log(fruit == 'Mango');
// Test2 Is fruit is not equal to "banana"?
console.log("Is fruit != 'banana'? I pridict true.");
console.log(fruit != 'banana');
let city = "New York";
// Test3: is city in lowercase equal to "new york"?
console.log("Is city.toLowerCase() == 'New York'? I pridict true.");
console.log(city.toLowerCase() == 'New York');
let x = 10;
let y = 20;
// Test4 Is x greater then y?
console.log("Is x > y ? I pridict false.");
console.log(x > y);
// Test5  Is y less then or equal to x?
console.log("Is y <= x ? I pridict false.");
console.log(y <= x);
let a = 15;
let b = 25;
// Test6 Is a greater then 10 and b less then 30?
console.log("Is a > 10 && b < 30? I pridict True.");
console.log(a > 10 && b < 30);
//  Test7 Is a greater then 20 or b less then 20 ?
console.log("Is a > 20 || b < 20? I pridict True .");
console.log(a > 20 || b < 20);
let colors = ["red", "blue", "black", "white"];
// Test8 Is "black" in the colors array?
console.log("Is 'black' in the colors array ? I pridict true.");
console.log(colors.includes("black"));
// Test9 Is "yellow" not in the colors array?
console.log("Is 'yellow' not in the colors array? I pridict false.");
console.log(colors.includes("yellow"));
