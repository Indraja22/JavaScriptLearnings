//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1995));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years!`;    
}

console.log(yearsUntilRetirement(1995, "Jhon"));
console.log(yearsUntilRetirement(1990, "Elu"));
