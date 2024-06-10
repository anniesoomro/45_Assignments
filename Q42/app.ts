// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

 let Magicians: string[] = ["Alice", "David", "Chris"];

 function show_magicians(Magicians: string[]) {
       Magicians.forEach(Magicians =>
 {
  console.log(Magicians);
 });  
}
 
 function make_great(Magicians:string[]):void {
    for(let i = 0; i < Magicians.length; i++) {
        Magicians[i] = "The Great" + Magicians[i];
    }
 }
 function show_Magicians(Magicians: string[]): void {
    console.log("Magicians:");
    Magicians.forEach(Magicians => {
        console.log(Magicians);
    });
}
make_great(Magicians);
show_Magicians(Magicians);


    
