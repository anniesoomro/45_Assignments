"use strict";
// 22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Define an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7];
//Access an element with an out of range index to produce an error
console.log(numbers[10]);
//To correct the error,lets access an element witin the range of array
console.log("corrected value:", numbers[4]);
