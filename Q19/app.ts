// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestArr: string[] = ["Ahmed", "Ali", "Ayesha", "Rida", "Ammara"];

guestArr.map((item) => (
    console.log(`Dear ${item}, You are invited to a Dinner`)
));

console.log(`I am inviting ${guestArr.length} people to dinner.`);
 
    
