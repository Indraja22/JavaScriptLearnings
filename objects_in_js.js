const jonas = {
    firstName : "Jonas", //properties
    lastName : 'Naik',
    friends : ["Michael","Steven","Peter"]
};
console.log(jonas);
console.log(jonas.firstName);
console.log(jonas["firstName"]);
jonas.location = "Portugal";
jonas['twitter'] = "@jonasSS";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas['friends'].length}, and his best friend is ${jonas['friends'][0]}`);