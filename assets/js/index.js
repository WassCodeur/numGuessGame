// numGuessGame
let numberGenerated = Math.floor(Math.random() * 100) + 1;
let attempts = 10; // number of attempts

// Get elements from the DOM
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
const feedback = document.getElementById('feedback');
const attemptsCount = document.getElementById('attemptsCount');

// handle events
guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts--; // decrease the number of attempts
    attemptsCount.textContent = attempts; //update the number of attempts

    // check if the user has guessed the correct number
    if (userGuess === numberGenerated) {
        feedback.textContent = "Win";
        guessButton.disabled = true; 
    } else if (attempts === 0) { 
        feedback.textContent = `Lost the good number was: ${numberGenerated}.`;
        guessButton.disabled = true; 
    } else if (userGuess < numberGenerated) { 
        feedback.textContent = "Too low! Try a higher number.";
    } else { 
        feedback.textContent = "Too high! Try a lower number.";
    }
}


function resetGame() {
    numberGenerated = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    attemptsCount.textContent = attempts;
    feedback.textContent = ""; 
    guessInput.value = "";
    guessButton.disabled = false;
}
