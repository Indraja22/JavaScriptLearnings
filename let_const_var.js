//var : old way
//let, const : ES6
//let - variables that can change later
//const - variables not supposed to change at any point, cannot be reassigned.Immutable variable.

// mutate the variable
let age = 27;
age = 28;

const birthYear = 1995;

var job = "Programmer";
job = "teacher";
console.log(job);

//not good practice
lastName = "Jonas";
console.log(lastName);