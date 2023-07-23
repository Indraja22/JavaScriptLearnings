console.log("Indraja");

let a = "Hello";

{
    console.log(a);
    let b = "World";
    var c = "Alibag";
}

// console.log(b); //b is not defined
console.log(c);

fruits = ['Apples','Mangoes','Grapes']

console.log("=========================");
fruits.map(fruit=>console.log(fruit));
console.log("=========================");
fruits.map(e=>{
    if(e !== 'Apples'){
        console.log(e);
    }
});
console.log("=========================");
const fruitsILove = fruits.filter(fruit => fruit !== 'Apples');
console.log(fruitsILove);
console.log("=========================");
const ages = [34,28,22,13,45,16,90,21,18,17,12,27];
const eligibleDrivers = ages.filter(age => (age > 18));
console.log(eligibleDrivers);
console.log("=========================");
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
  return sum += item;
}
console.log(sum);
console.log("=========================");
const numsArr = [40,30,20,10]
function mulByTen(item, index, arr) {
    arr[index] = item * 10;
  }
numsArr.forEach(mulByTen);
console.log(numsArr);
console.log("=========================");
const nums = [34,23,11,24];
const mulByTwo = nums.map(n => n*2);
console.log(mulByTwo);
console.log("=========================");
const message = ["Javascript ","is ","fun"];
const joinStrings = (accumulator, currentvalue) =>{
    return accumulator + currentvalue;
}
const fMessage = message.reduce(joinStrings);
console.log(fMessage);
console.log("=========================");
const summation = (accumulator, currentvalue) => {
    return accumulator + currentvalue;
}
// const sumNums = numbers.reduce(summation);
const sumNums = numbers.reduce((acc,currVal)=>acc+currVal);
console.log(sumNums);
console.log("=========================");
let cars = ["BMW","Audi","Mini"];
for(car of cars){
    console.log(car);
}
console.log("=========================");
for(i in cars){
    console.log(cars[i] + " " + i);
}
console.log("=========================");
const language = "Javascript";
for(w of language){
    console.log(w);
}
console.log("=========================");
x  = 5;
var x;
console.log(x);
// y = 10;
// let y;
// console.log(y); // Reference Error : Cannot access 'y' before initialization
console.log("=========================");
// carName = "BMW";
// const carName; // Syntax Error : 'const' declarations must be initialized.
let evenNumsArr = [];
const evenNums = () =>{
    for(let i =0;i<=100;i++){
        if(i%2==0){
            evenNumsArr.push(i)
        }
           
    }
    return evenNumsArr; 
};

console.log(evenNums());

const printName = name => console.log(`Hi ${name},`);
printName("Indraja");

const printName1 = name =>{
    return `Hi ${name}, How are you?`;
};
console.log(printName1("David"));

console.log("====== Object Destructuring in ES6 ======");
const college = {
    cname : 'DTU',
    established: '1941',
    isPrivate: false
}

let {cname, established, isPrivate} = college;
console.log(cname);
console.log(established);
console.log(isPrivate);
console.log("====== Array Destructuring in ES6 ======");
const arr = ["Mumbai","Chennai","Pune"];
let [city1,city2,city3] = arr;
console.log(city1);
console.log(city2);
console.log(city3);
console.log("====== Default parameters ES6 ======");
const sum1 = (a,b=1) =>{
    return a + b;
}
console.log(sum1(3));
console.log(sum1(3,9));
console.log("====== Rest parameter ES6 ======");
function sum2(...input){
    let sum=0;
    for(i of input){
        sum +=i;
    }
    return sum;
}
console.log(sum2(4,3,5));
console.log(sum2(3,3,5,9));
console.log(sum2(3));


