const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  const tip = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(`Tips : ${tips} | Totals : ${totals}`);

let sum = 0;
const calcAverage = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  return avg;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));

if (x === 23) console.log("Hi");
console.log(27);
