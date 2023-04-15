// logiction x() {
//   console.log("Namaste");
// }

// logiction y() {
//   x();
// }
const radius = [3, 2, 1, 4];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return Math.PI * radius * 2;
};

const diameter = (radius) => {
  return radius * 2;
};

Array.prototype.calculate = function (logic) {
  // const calculate = (arr, logic) => {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
console.log(radius.map(area));

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
