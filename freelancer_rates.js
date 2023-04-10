function dayRate(hourlyRate){
    dayRateOfFreelancer = hourlyRate * 8
    return dayRateOfFreelancer
}

dayRateOfFreelancer = dayRate(90)
console.log(dayRateOfFreelancer)

function daysInBudget(budgetAmount,hourlyRate){
    let numberOfDaysToExhaustBudget = budgetAmount/hourlyRate
    numberOfDaysToExhaustBudget = Math.floor(numberOfDaysToExhaustBudget)
    return `It would take the freelancer ${numberOfDaysToExhaustBudget} days to exhaust the budget.`
}
console.log(daysInBudget(20000,dayRateOfFreelancer))
