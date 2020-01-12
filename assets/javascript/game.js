var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var guessesMade = document.getElementById("guessesMade");
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;

document.onkeyup = function(event) {
var userGuess = event.key.toUpperCase();
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
if ((userGuess === computerGuess) && (event.keyCode >= 65 && event.keyCode <= 90)) {
    winCounter++;
    wins.textContent = "Wins: " + winCounter;
    guessCounter = 9;
    guessesLeft.textContent = "Guesses Left: 9";
    guessesMade.textContent = "Guesses Made:";
}




}