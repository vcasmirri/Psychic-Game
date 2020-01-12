// Initial variables & starting values

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var guessesMade = document.getElementById("guessesMade");
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;

// Triggers game on key up and stores user's and computer's guesses

document.onkeyup = function(event) {
var userGuess = event.key.toUpperCase();
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// Defines parameters for winning, increases win counter, resets Guesses Left/Made
if ((userGuess === computerGuess) && (event.keyCode >= 65 && event.keyCode <= 90)) {
    winCounter++;
    wins.textContent = "Wins: " + winCounter;
    guessCounter = 9;
    guessesLeft.textContent = "Guesses Left: 9";
    guessesMade.textContent = "Guesses Made:";
}

// Defines parameters for losing, increases loss counter, reduces Guesses Left, adds to Guesses Made
else if (event.keyCode >= 65 && event.keyCode <= 90) {
    guessCounter--;
    guessesLeft.textContent = "Guesses Left: " + guessCounter;
    guessesMade.textContent += userGuess;
    //code for storing guesses made here
    if (guessCounter === 0) {
        lossCounter++;
        losses.textContent = "Losses: " + lossCounter;
        guessCounter = 9;
        guessesLeft.textContent = "Guesses Left: 9";
        guessesMade.textContent = "Guesses Made:";
    }
}

else {
    alert("That's not a letter!");
}
}



// console.log("U: " + userGuess + " C: " + computerGuess ". You Won!");