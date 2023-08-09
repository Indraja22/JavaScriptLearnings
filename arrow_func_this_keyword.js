const user = {
    username : "Jhon",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage();
console.log(this);

// function chai(){
//     let username = "Indraja";
//     console.log(this);
// }
// chai();

// arrow functions
const chai = () => {
    let username = "Indraja";
    console.log(this);
}
// chai();
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

//implicit return
const addFive = (num1) => num1 + 5;
console.log(addFive(5));

const myArray = [2,5,3,7,8];
const newArr = myArray.forEach((n) => n -2);
console.log(newArr)