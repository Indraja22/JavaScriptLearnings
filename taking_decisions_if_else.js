const age = 12;
const isOldEnough = 18;

if (age > isOldEnough) {
    console.log("You can drive!🚗");
} else {
    const yearsLeft = isOldEnough - age
    console.log(`Cannot Driver Yet! Wait another ${yearsLeft} years`);
}

const birthYear = 1995;
let century;
if (birthYear < 2000) {
     century = 20;
} else {
     century = 21;
}

console.log(`Born in ${century}th Century`);