// let arr = [3, 5, 8];
// let [a, b, c] = arr;
// console.log(a, b);
// console.log(c);
// console.log(c);
let { a, b } = { a: 1, b: 4 };
console.log(a, b);

//Spread operator

const arr = [3, 4, 5];
const obj1 = { ...arr };

console.log(obj1);
let obj2 = { name: "Harry", company: "mnc org", address: "xyz, country" };
console.log({ ...obj2, name: "John" });
