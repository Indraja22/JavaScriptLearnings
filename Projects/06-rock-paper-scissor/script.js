const options = document.querySelectorAll('p');
const result =  document.querySelector('.result');

options.forEach((option)=>{
    option.addEventListener('click',playGame);
    // console.log(option);
});

function playGame(e){
    const playerChoice = e.target.alt;
    // console.log(playerChoice);
    // console.log(e.target);
    const compChoice = computerChoice();
    determineWinner(playerChoice,compChoice);
}


const computerChoice = () =>{
    const choices = ["rock","paper","scissor"]
    const compChoiceIndex =  Math.floor(Math.random() * choices.length);
    return choices[compChoiceIndex];
}

const determineWinner = (userChoice, compChoice) => {
    if(userChoice === compChoice){
        result.innerHTML = "There is a tie!";
    }
    else if((userChoice === 'rock' && compChoice === 'paper') || 
    (userChoice === 'scissor' && compChoice === 'paper') || (userChoice === 'rock' && compChoice === 'scissor')){
        result.innerHTML = `<h2>User Choice : ${userChoice}, Computer Choice : ${compChoice}. User Wins!🎊<h2>`;
    }else{
        result.innerHTML = `<h2>User Choice : ${userChoice}, Computer Choice : ${compChoice}. Computer Wins!<h2>`;
    }   
    
}

