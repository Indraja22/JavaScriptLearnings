const person = {name:"Harry",age:"27",company:"T-Mobile"};
console.log(person);
person.age = "28";
person.name = "Jeff";
person.country = "USA";
console.log(person);
person = {name:"Jolly",age:"27",company:"Mint Mobile"};
console.log(person); //TypeError : Assignment to constant variable