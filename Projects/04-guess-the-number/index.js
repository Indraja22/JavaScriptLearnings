// const form = document.querySelector('.form');
// const guessField = document.querySelector('#guessField');
// const subt = document.querySelector('#subt');
// const previousGusses = document.querySelector('.guesses');
// const remaniningGusses = document.querySelector('.lastResult');
// const lowOrHigh = document.querySelector('.lowOrHi');
// let remGuess =  10;
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let preGuess = [];
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//    let userGuess = parseInt(guessField.value);
   
//    if(userGuess === randomNumber){
//     lowOrHigh.innerHTML = `<h4>You have gussed it right! ${userGuess}</h4>`
//    }else if(userGuess > randomNumber){
//     lowOrHigh.innerHTML = `<h4>Too High</h4>`
//     previousGusses.innerHTML = userGuess;
//     remGuess--;
//     remaniningGusses.innerHTML = remGuess;
//    }
//    else if(userGuess < randomNumber){
//     lowOrHigh.innerHTML = `<h4>Too Low</h4>`
//     previousGusses.innerHTML = userGuess;
//     remGuess--;
//     remaniningGusses.innerHTML = remGuess;
//    }
//    guessField.value = '';
// })

let randomNumber =  parseInt(Math.random() * 100 + 1);
const submit =  document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number!");
    } else if(guess < 1){
        alert("Please enter a valid number!");
    } else if(guess > 100){
        alert("Please enter a number less than or equal to 100!");
    }else {
        prevGuess.push(guess);
        if (numGuess > 10){
            // playGame = false;
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is too low!`);
    }else if(guess > randomNumber){
        displayMessage(`Number is too high!`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess}`
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}