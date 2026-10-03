//Generate a random number between 1 and 500
let randomNumber : number = (Math.random()*100)+1;
const submit = document.querySelector('#subt') as HTMLButtonElement;
const userInput = document.querySelector('#guessField') as HTMLInputElement;
const guessSlot = document.querySelector('.guesses') as HTMLDivElement;
const remaining = document.querySelector('.lastResult') as HTMLDivElement;
const startOver = document.querySelector('.resultParas') as HTMLDivElement;
const lowOrHi = document.querySelector('.lowOrHi') as HTMLDivElement;
const p = document.createElement('p');
let previousGuesses : number[] = [];
let numGuesses : number = 1;
let playGame : boolean= true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        //Grab guess from user
        const guess = Number(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess:number){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 500!')
    } else {
        //Keep record of number of attempted guesses
        previousGuesses.push(guess);
        //Check to see if game is over
        if (numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
        //Display previous guessed numbers
        displayGuesses(guess);
        //Check guess and display if wrong
        checkGuess(guess);
        }
    }
}

function checkGuess(guess:number){
    //Display clue if guess is too high or too low
    if (guess === randomNumber){
        displayMessage(`You guessed correctly!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again!`);
    } else if (guess > randomNumber) {
        displayMessage(`Too High! Try again!`);
    }
}

function displayGuesses(guess:number){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message:String){
        lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    //Clear user input
    userInput.value = '';
    //Disable user input button
    userInput.setAttribute('disabled', '');
    //Display Start new Game Button
          p.classList.add('button');
          p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame') as HTMLButtonElement;
    newGameButton.addEventListener('click', function(){
        //Pick a new random number
        randomNumber = (Math.random()*100)+1;
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
