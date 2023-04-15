const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const printToConsole = `${john.calcBMI() > mark.calcBMI ? john.fullName : mark.fullName}'s BMI (${john.calcBMI()
> mark.calcBMI() ? john.calcBMI() : mark.calcBMI()}) is higher than ${john.calcBMI() > mark.calcBMI ? mark.fullName : john.fullName}'s
BMI (${john.calcBMI()
    > mark.calcBMI() ? mark.calcBMI() : john.calcBMI()})`;

console.log(printToConsole);    
