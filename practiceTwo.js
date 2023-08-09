//Callback Functions

//Write a function called multiplyByTwo that takes a number as input and returns the result of multiplying
// that number by 2. Use a callback function to display the result.
const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(90));

//Array Filter Using Callbacks
const arr = [9,3,99,22,14,18,28,46,34,11,19,20];

const filterEvenNums = arr.filter((n)=>n%2==0);
const filterArray = (arr,filterEvenNums);
console.log(filterArray);


