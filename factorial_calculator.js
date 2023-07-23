const factorial_calculator = (n) => {
    fact = 1;
    for(let i = 1;i<=n;i++){
        fact = fact * i;
    }
    return fact;
};

console.log(factorial_calculator(4));
console.log(factorial_calculator(5));
console.log(factorial_calculator(6));
console.log(factorial_calculator(8));