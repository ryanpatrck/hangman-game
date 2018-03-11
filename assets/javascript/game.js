// GLOBAL VARIABLES
// ---------------------------------
// Arrays and variables for holding data
var wordOptions = [ "iron man", "hulk", "thor", "captain america", "black widow", "hawkeye", "scarlet witch", "war machine", "falcon","ant man","black panther","spiderman","winter soldier", "dr strange"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var BlanksAndSuccesses = []; // i_ _ _ _ __ 
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
//----------------------------------------------------------------------
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)]
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 9;
    wrongLetters = [];
    BlanksAndSuccesses = [];

    //Populate blanks and successes with right number of blanks.
    for (var i=0; i<numBlanks; i++) {
        BlanksAndSuccesses.push("_");
    }

    //Change HTML to reflect round conditions
    document.getElementById("Word").innerHTML = BlanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    // testing/debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(BlanksAndSuccesses);
}

function checkLetters (letter) {
    //Check if letter exists in code at all

    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        
        }
    }

    // Check where in word letter exists, then populate out blanksandsuccesses array
    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
            BlanksAndSuccesses [i] = letter;
        }
         // letter wasn't found
        else {
            wrongLetters.push(letter);
            guessesLeft--
        }
    }
    // Testing and Debugging
    console.log(BlanksAndSuccesses);
}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft);
    //Update the HTML to the most recent counter slots
   document.getElementById("numGuesses").innerHTML = guessesLeft;
   document.getElementById("Word").innerHTML = BlanksAndSuccesses.join(" ");
   document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    // Check if user won
    if (lettersinWord.toString() == BlanksAndSuccesses.toString()) {
        winCount ++;
        alert("You Won!");

        // Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    // Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost!")

        startGame();
    }
}

  
    
// MAIN PROCESS
//---------------

//Initiates the code the first time
startGame();

// Register keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    
    //Testing/ Debugging
    console.log(letterGuessed);

}
    

