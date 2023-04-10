//conversion - when we explicitly convert one type to another
const inputYear = "1995";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number("Jo"));
console.log(typeof(NaN)); //Number
console.log(String(23));

//type coercion - implicit and done by javascript
console.log("I'm " + "23" + " years old");
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; //11
n = n - 1; //10
console.log(n); //10
console.log(2 + 3 + 4 + '5');//95
console.log('2' + 3 + 4 + '5');//2345
console.log('2' + 3 + 4 - 5);//229
console.log('2' + 3 + 4 * 5);//2320
console.log('1' + 5);//15
console.log(5 + '1');//51
