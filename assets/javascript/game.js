//random words
var words = [
    "Claw-ful", "Fur-midable", "Purr-fect", "Fur-tunate", "Claw-ver", "Purr-haps", "Paw-sibility", "Fur-end", "Purr-ty", "Litter-ate", "Un-fur-tunate", "Cat-atonic", "Hiss-terical", "Litter-ally", "Hiss-tory", "Paw-don me", "Fur-miliar", "Paw-some", "Cat-titude", "Fur-ever", "A-paw-ling", "Cat-astrophe", "Radi-claw", "In-fur-ior", "Purr-ceive", "Purr-sue", "Meow-sician", "Paw-lease", "Purr-suasion", "Paw-sitive"
];
//start point of numbers to display for the following 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersYouGuessesWrong = [];
//once key is pressed the following actions take place and the following text is posted. In html formatting will not apply. 
document.onkeyup = function (event) {

    var userGuess = event.key;
    // var word returns a random selection from words  
    var word = words[Math.floor(Math.random() * words.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"];

    // blanks are displayed to indicate the amount of letters. 
    var answer = [];

    for (var i = 0; i < word.length; i++) {
        answer[i] = "_";
    }
    var remainingLetters = word.length;

    if (options.indexOf(userGuess) > -1) {

        while (remainingLetters > 0) {
            answer.join(" ");

            if (guess === null) {
                break;
            } else if (lettersYouGuessesWrong.includes(userGuess)) {
                alert("You already chose " + userGuess + ". Please pick another letter.");
            } else {
                // Update the game state with the guess
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answer[j] = guess;
                        remainingLetters--;
                        guessesLeft--;
                        lettersYouGuessesWrong.push(userGuess);
                    }}

                    if (guessesLeft === 0) {
                        guessesLeft = 9;
                        losses++;
                        lettersYouGuessesWrong = [];
                    }


                    var html =
                        "<p>Press any key A-Z or - (dash) to guess this word!</p>" +
                        "<p>" + word.join(" ") + "</p>" +
                        "<p>Wins: " + wins + "</p>" +
                        "<p>Losses: " + losses + "</p>" +
                        "<p>Guesses Left: " + guessesLeft + "</p>" +
                        "<p>Your Guesses so far: " + lettersYouGuessesWrong.join(", ") + "</p>";

                    document.querySelector("#game").innerHTML = html;

                }
            }
        }
    } 

// //Empty variables to store values later
// var randomWord = "";
// var lettersOfWord = []
// var blanks = 0;
// var blanksAndCorrect = [];
// var wrongGuess = [];

// //Counter Variables
// var wins = 0;
// var losses = 0;
// var guessesRemaining = 9;

// Game()

// document.onkeyup = function (event) {

//     randomWord = words[Math.floor(Math.random() * words.length)];

//     lettersOfWord = randomWord.split("");

//     blanks = lettersOfWord.length;

//     for (var i = 0; i < blanks; i++) {
//         blanksAndCorrect.push("_");
//     }
	
//     var guesses = String.fromCharCode(event.keyCode).toLowerCase();
   
//     checkLetters(guesses);
	
// 	function checkLetters(letter) {
//     var letterInWord = false;
   
//     for (var i = 0; i < blanks; i++) {
//         if (randomWord[i] == letter) {
//             letterInWord = true;
//         }
//     }

//     if (letterInWord) {
  
//         for (var i = 0; i < blanks; i++) {
//             if (randomWord[i] == letter) {
//                 blanksAndCorrect[i] = letter;
//             }
//         }
//     }
	
//     else {
//         wrongGuess.push(letter);
//         guessesRemaining--;
//     }
// }
 
//     complete();
	
// 	function complete() {

//     if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
//         wins++;
//         aud()
//         guessesRemaining = 9;
// 		wrongGuess = [];
// 		blanksAndCorrect = [];
//         document.getElementById("winstracker").innerHTML = " " + wins;
		
//     } else if (guessesRemaining === 0) {
//         losses++;
//             guessesRemaining = 9;
// 		wrongGuess = [];
// 		blanksAndCorrect = [];
//         document.getElementById("image").src = "./assets/images/try-again.png"
//         document.getElementById("losstracker").innerHTML = " " + losses;
//     }
	
//     document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
//     document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
//     document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
// 	document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");


