function logger() {
    console.log("My name is Indraja");
}
//invoking , calling or running the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3,4);
console.log(appleOrangeJuice);