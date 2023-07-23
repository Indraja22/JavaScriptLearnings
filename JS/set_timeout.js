// const greet = () => {
//     console.log("Hello Everyone!");
// }
// let intervalId = setTimeout(greet,4000);
// // console.log(intervalId);

// setTimeout(()=>{
//     console.log("Done!");
// },2000);
// console.log("I will appear first!");

// program to stop the setTimeout() method

let count = 0;

// function creation
function increaseCount(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);

//clearTimeout
clearTimeout(id); 
console.log('setTimeout is stopped.');

setTimeout((firstName)=>{
    console.log(`Hi ${firstName}`)
},8000,"Galfy");

let count1 = 0;
let id1 = setInterval(()=>{
    count1 +=1;
    if(count1 == 4){
        clearInterval(id1); 
    }
    console.log("Hello World!");
},1000);

