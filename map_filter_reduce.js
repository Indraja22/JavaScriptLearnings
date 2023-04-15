// const arr = [5, 1, 3, 2, 6];
// function double(x) {
//   return x * 2;
// }
// const output = arr.map(double);
// console.log(output);

// const binary = arr.map((x) => x.toString(2));
// console.log(binary);

// const arr2 = [4, 3, 5, 7, 9, 2, 8];
// const out = arr2.filter((x) => x % 2 === 0);
// console.log(out);

// console.log(arr.filter((x) => x > 4));

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));
// const maxOut = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);

// console.log(maxOut);

const users = [
  { firstName: "James", lastName: "Trumph", age: 22 },
  { firstName: "John", lastName: "Goldy", age: 28 },
  { firstName: "Elisa", lastName: "Moldy", age: 29 },
  { firstName: "Hennry", lastName: "Phili", age: 22 },
];

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);

const out = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(out);

const ageLessThan = users.filter((x) => x.age < 25).map((x) => x.firstName);
console.log(ageLessThan);

const firstNameWithReduce = users.reduce(function (acc, curr) {
  arr = [];
  if (curr.age < 25) {
    acc = curr.firstName;
    console.log(acc);
    arr.push(acc);
  }
  return arr;
}, {});
console.log(arr);
