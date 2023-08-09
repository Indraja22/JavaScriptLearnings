const myNums = [1,2,3,4];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} , currVal : ${currVal}`)
//     return acc + currVal;
// },0);

const myTotal = myNums.reduce((acc, curr) => acc + curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "Python course",
        price : 999
    },
    {
        itemName : "Mobile Dev",
        price : 4999
    },
    {
        itemName : "Web Dev",
        price : 5999
    }
]

let priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price),0);
console.log(priceToPay);
