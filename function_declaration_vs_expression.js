//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1995);
console.log(age1);

//function expression
//anonymous function
const calcAge2 =  function (birthYear) {
    return 2040 - birthYear;
}

const age2 = calcAge2(1995);
console.log(age2);

