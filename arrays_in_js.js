const friends = ["Michael","Steven","Zoltan"];
console.log(friends);
console.log(typeof friends); //object

const years = new Array(1999,2000,2001);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[4]);//undefined
console.log(friends.length); //3
console.log(friends[friends.length -1]); 

friends[2] = "Jay";
console.log(friends);

firstName = "Indraja";
const indraja = [firstName,"Naik",2040-1995,"developer",friends];
console.log(indraja);
console.log(indraja.length);