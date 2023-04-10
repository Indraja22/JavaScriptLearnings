let age = 18;
// === : (strict version) comparison (strict does not do any type coercion) will check if type and value both match
if (age === 18) console.log("You became an adult");
age = '20';
if (age == 20) console.log("You became 20");

console.log("19" == 19); //javascript performs type coercion
console.log("19" === 19);

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool!");
} else if (favourite === 8) {
    console.log("Okay");
}else {
    console.log("Uncool");
}