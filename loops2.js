const coding = ["JavaScript","Java","Python","CPP"];

const values = coding.forEach((item) =>{
    console.log(item);
})

const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.filter(num => num > 4);
console.log(newNums);

const newNum  = [];
myNums.forEach((num)=>{
    if(num > 4){
        newNum.push(num);
    }
})

console.log(newNum);
