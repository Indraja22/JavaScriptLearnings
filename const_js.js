const cars = ["Audi","BMW","Volvo"];
console.log(cars);
cars[0] = "Ferrari";
cars.push("Ducati")
console.log(cars);

cars = ["Porchse","Audi","Kia"];
console.log(cars); //TypeError : Assignment to constant variable
