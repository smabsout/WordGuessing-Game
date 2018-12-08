//initializing alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// initializing words to be guessed
var words = ["playstation","xbox","technology","bootcamp","nintendo","cola","water","juice","zebra","dog","cat","sushi"];

var gameStarted = false;
var currentWord;
var hiddenWord;
var guessesLeft;
var lettersGuessed;
var wins = 0;
var losses = 0;
var getNewWord;
var wordinArray;
var correctGuesses;
var wordArray = [];
var underscoreArray=[];


function gameStart (){
    gameStarted = true;
    lettersGuessed[];
    correctGuesses =0;
    wordinArray = Math.floor(Math.random()*12);
    currentWord = words[wordinArray];
    guessesLeft = 20 - currentWord.length;
    hiddenWord = hiddenWord(currentWord);
    wordArray = currentWord.split('');
    underscoreArray = hiddenWord.split('');
    document.getElementById("currentWord").innerHTML = hiddenWord;
	document.getElementById("lettersGuessed").innerHTML = "--";
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

function hiddenWord (word){
    
}

