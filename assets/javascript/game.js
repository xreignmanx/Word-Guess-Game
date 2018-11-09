    // Set global variables

// Set variables for the computers choices?/
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    //  Set variables for gameplay
    var wins = 0;
    var losses = 0;
    var userGuess = 9;
    var guessSel = [];

    // Set command for key functions

    var winsText = document.getElementById("wins")
    var lossesText = document.getElementById("losses")
    var userGuessText = document.getElementById("userGuess")
    var guessSelText = document.getElementById("guessSel")


  // Set random computer choice
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    document.onkeyup = function(event) {

    var userGuess = event.key;

  

        
    // "If" commands for win
    
        if (userGuess === computerGuess) {
                wins++;
                winsText.textContent = "Wins: " + wins;
                userGuess = 9;
            }
    // If statement for loss

        if (userGuess !== computerGuess) {
                losses++;
                userGuess --;
                lossesText.textContent = "losses: " + wins;
                 }
    // "If" statements to support guess depreciation
            
        if (userGuess === 0) {


    
            }

        }


           

