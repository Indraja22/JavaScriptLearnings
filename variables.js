var a = 10;
let n;
let m = 27;
const p=1;
{
    let c = 20;
    const d = 40;
    var f = 80;
    a = 800;
    var a = 100;
    n = 108;
    x = 33;
    let m = 28;
    console.log(m);
}
//if you put a number in quotes rest of the numbers would be treated as string and concatenated.
let v = "4" + "4" + 6 + 6 + "4"
let q = 4 + 5 + "1" + "6" + 5
console.log(v);
console.log(q);
console.log(m);

// console.log(c); //ReferenceError: c is not defined
// console.log(d); //ReferenceError: c is not defined
console.log(n); //undefined
console.log(f); //80
console.log(a); //100
console.log(p); //TypeError: Assignment to constant variable.
console.log(x); //TypeError: Assignment to constant variable.

























// let age = 72;



// console.log(age)

// let x = 19;
// x = x + 10;
// console.log(x)

// let avgRating = 30;

// const hens = 5;
// // hens = hens + 10;
// // console.log(hens)
// //TypeError: Assignment to constant variable.
// const peopleCount  = 9;

// var games = 10;
// console.log(games)

// const rating = 7.5
// // rating = 9;
// // console.log(rating)

