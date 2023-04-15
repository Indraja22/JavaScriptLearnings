//for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifiting weights repetition ${rep} 🏋🏻‍♀️`); 
}

const jonasArray = ['Jonas',"Titmann",2040-1995,
"teacher",["Michael","Peter","Steven"]
,true];
const types = [];

for (let i=0;i<jonasArray.length;i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1995, 2007, 1970, 2010];
const ages = [];
for (let i=0;i<years.length;i++){
    ages.push(2023 - years[i]);
}
console.log(ages);
//continue and break
console.log("--- ONLY STRINGS ---")
for (let i=0;i<jonasArray.length;i++) {
    if (typeof jonasArray[i] !== "string") continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK ---")
for (let i=0;i<jonasArray.length;i++) {
    if (typeof jonasArray[i] === "number") break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
//looping backwards
console.log("---LOOPING BACKWARDS---")
const jonas = ["Jonas","Naik",2040-1995,"teacher",["Mark","John","Jacob"]];
for(let i=jonas.length-1;i>= 0;i--){
    console.log(i, jonas[i]);
}

//loop inside loop
console.log("--- loop within loop ---");
for(let exercise= 1; exercise < 4;exercise ++){
    console.log(`---- Starting exercise ${exercise} ----`);
    for(let rep =1;rep <=5 ; rep++){
        console.log(`Exercise ${exercise} : Lifting weights repetition ${rep} 🏋🏻‍♀️`);
    }
}










