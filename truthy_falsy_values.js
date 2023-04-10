// 5 falsy values in JavaScript: 0, '', null, undefined, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));

const money = 100; //100 is a number and truthy value
// const money = 0; => 0 is a Falsy value 
if (money) {
    console.log(`Don't spend it all`);
}else {
    console.log(`You Should Get A Job!`);
}

let height; //undefined, hence falsy value is returned
if (height) {
    console.log("Yay!!Height is defined!");
}else {
    console.log("Please define height!");
}