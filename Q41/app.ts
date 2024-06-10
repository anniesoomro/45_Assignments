// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let Magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(Magicians: string[]) {
    Magicians.forEach(Magicians =>
 {
    console.log(Magicians);
 });  
}
show_magicians(Magicians);