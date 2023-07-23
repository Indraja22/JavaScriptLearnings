// My First JavaScript Code
console.log("Hello")
let name;
console.log(name);
let myName = "Peter"; //string literal
console.log(myName)

let firstName,lastName;
console.log(firstName)

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let age =  28;
let isApproved = true;
let isShipped = false;
let nameP = undefined;
let selectColour = null; //clear value of variable
console.log(typeof(interestRate))
console.log(typeof(isApproved))
console.log(typeof(age))
console.log(typeof(name))
console.log(typeof(selectColour))

//Object

let person = {
    name : "Indraja",
    age : "28"
};

console.log(person);
console.log(person.name);
person.name = "Naik"
console.log(person.name)
person["name"] = "Mike"
console.log(person.name)

//Arrays
let selectedColours = ['Red','Blue'];
console.log(selectedColours);
console.log(selectedColours[1]);
console.log(selectedColours[0]);
selectedColours[2] = "Grey";
selectedColours[3] = "#5278";
console.log(selectedColours);
console.log(selectedColours);
console.log(typeof(selectedColours));
console.log(selectedColours.length);

//functions
function greet() {
    console.log("Hello World");
};

greet();

function greetMe(name, lastName) {
    console.log("Hello " + name + " " + lastName);
};

greetMe("Indraja","Naik");
greetMe("Mike","Smith");

function square(num) {
    return num * num;
};
console.log(square(4));























