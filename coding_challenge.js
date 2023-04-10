const massJohn = 95;
const massMark = 78;
const heightMark = 1.69;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
console.log(BMIMark);
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIJohn);

const markHeigherBMI = BMIMark > BMIJohn;
console.log(markHeigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Marks BMI (${BMIMark}) is higer than Johns BMI (${BMIJohn})`);
}else {
    console.log(`Marks BMI (${BMIMark}) is lower than Johns BMI (${BMIJohn})`);
}