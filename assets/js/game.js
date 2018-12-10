window.onload = function () {
    startGame();
}
var words = ["BootStrap", "JavaScript", "Ninendo", "Playstation", "Xbox", "Tokyo", "Paris", "Rome", "Beirut", "Houston", "Austin", "Cola", "Fanta", "Sprite"];
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");



//Setting Global Variables
var activeWord;
var activeLetters = [];
var guessedLetters = [];
var incorrect;
var wins = 0;
var losses = 0;

//starting the round
function startGame() {
    var wordContainer = document.getElementById("word"); //Selecting word
    wordContainer.innerHTML = "";
    document.getElementById("guessed").innerHTML = '';

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("gameover").removeAttribute('style');
    document.getElementById("won").removeAttribute('style');

    activeWord = words[Math.floor(Math.random() * words.length)].toLowerCase(); //getting word from array and making it lowercase
    activeLetters = activeWord.split(""); //Splitting word up into an array of letters
    guessedLetters = []; //Guessed words go here!
    incorrect = 10; //Number of incorrect guesses

    document.getElementById("incorrect").innerHTML = incorrect;

    console.log(activeWord);
    //Making tiles for each letter

    for (i = 0; i < activeLetters.length; i++) {
        var tile = document.createElement("tile");
        tile.className = activeLetters[i] + ' nope';
        if (activeLetters[i] == " ") {
            tile.className = "space"; //Making spaces visible by default
        } 
        tile.innerHTML = "<b>" + activeLetters[i] + "</b>";
        wordContainer.appendChild(tile); //Adding tiles to word
    }
}

function evalLetter() {
    if (incorrect > 0) {
        var event = window.event;
        var inputLetter = event.key;

        if (alphabet.indexOf(inputLetter) > -1) { //alphabet checker

            //Checking to see if the inputted letter has been used during this round
            var used = guessedLetters.indexOf(inputLetter);

            //If letter has not been used
            if (used === -1) {
                guessedLetters.push(inputLetter);
                //Update the guessed div
                var guessed = guessedLetters.join(" ");
                document.getElementById("guessed").innerHTML = guessed;

                //If the letter is correct then show the tile
                if (activeLetters.indexOf(inputLetter) > -1) {
                    var span = document.getElementsByClassName(inputLetter);

                    for (i = 0; i < span.length; i++) {
                        var classes = inputLetter + " yep";
                        span[i].className = classes;
                    } 

                    // Check if user has won entire round
                    var remainingLetters = document.getElementsByClassName("nope");
                    if (remainingLetters.length == 0) {
                        wins = wins + 1;
                        document.getElementById("wins").innerHTML = wins;

                        //Show the Game Over div
                        document.getElementById("won").style.display = "block";
                        countDown();

                    }

                }
                else {
                    incorrect = incorrect - 1;
                    document.getElementById("incorrect").innerHTML = incorrect;
                    if (incorrect == 0) {
                        //GameOver
                        document.getElementById("gameover").style.display = "block";
                        losses = losses + 1;
                        document.getElementById("losses").innerHTML = losses;
                        countDown();

                    }
                }

            }
        }
    }
}

//counter function to start another round! 

function countDown() {
    var counter = 10;
    var countDown = document.getElementById("countDown");
    countDown.innerHTML = "The next round will start in 10 seconds.";
    var id;

    id = setInterval(function () {
        counter--;
        if (counter < 0) {
            countDown.innerHTML = '';
            startGame();
            clearInterval(id);
        } else {
            countDown.innerHTML = "The next round will start in " + counter.toString() + " seconds.";
        }
    }, 1000);
}
