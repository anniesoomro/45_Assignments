 // 13. Your own Array: Think of your favorite  mode of transportation, such as a motorcycle or a car,and make a list that stores several examples. Use your list to print a series of statements about these items, such as "I would like to own a Honda motorcycle."

let vehicles: string[] = ["Audi", "Honda motorcycle", "Civic", "Cultus", "Mehran"];

  

  for (let i=0; i < vehicles.length; i++) {
    console.log(`i would like to own a ${vehicles[i]}`);
  }