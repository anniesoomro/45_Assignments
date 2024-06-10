"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// . Start with your program from exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// . Add one new guest to the begining of your array.
// . Add one new guest to the middle of your array. use append() to add one new guest to the end of your list.  Print a new set of invitation messages, one for each person in your list.
let GuestArr = ["Ahmed", "Ali", "Ayesha", "Rida", "Ammara"];
let canNotAttend = "Ammara";
let newGuest = "Zainab";
GuestArr[GuestArr.indexOf(canNotAttend)] = newGuest;
console.log(GuestArr);
GuestArr.map((item) => (console.log(`Dear ${item}, i found a bigger dinner table`)));
let GuestBegin = "Manahil";
GuestArr.unshift(GuestBegin);
let middleGuest = "Amna";
let middleIndex = GuestArr.length / 2;
GuestArr.splice(middleIndex, 0, middleGuest);
GuestArr.push("Fatima");
for (let i = 0; i < GuestArr.length; i++) {
    console.log(`Dear ${GuestArr[i]} : \n you are invited to dinner! \n`);
}
