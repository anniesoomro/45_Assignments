"use strict";
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just  printing each person's name, print a message to them.  The text of each  message should be the same ,  but each message should be personalized with the person's name. 
let names = ["Ayesha", "Zainab", "Mussarat", "Annie", "Amna"];
// console.log(names[0] + " " + message);
// console.log(names[1] + " " + message);
// console.log(names[2] + " " + message);
// console.log(names[3] + " " + message);
// console.log(names[4] + " " + message);
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, Dear ${names[i]} how are you?`);
}
