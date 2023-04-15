//Rest Operator

function addNumbers(a, b, c, ...other) {
  console.log(other);
  return a + b + c;
}

const result = addNumbers(3, 2, 5, 9, 10);
console.log(result);

//spread
var names = ["Paul", "Chris", "Jeff"];

function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}
getNames(...names);
