const jonas = {
    firstName : "Jonas", //properties
    lastName : 'Naik',
    birthYear : 1995,
    friends : ["Michael","Steven","Peter"],
    hasDriversLicense : true,
    job : "teacher",
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge : function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge : function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas["calcAge"](jonas["birthYear"]));
console.log(jonas.calcAge());
console.log(jonas.age);

const printText = `${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? "a" : "no"} driver's license`;
console.log(printText);