let rep = 1
while (rep <= 10){
    console.log(`${rep} 🏋🏻‍♀️`);
    rep ++; 
}

let dice = Math.trunc(Math.random() * 6) +1;
// console.log(dice);

while (dice !== 6){
    dice = Math.trunc(Math.random() * 6) +1;
    console.log(`From While : ${dice}`);
}