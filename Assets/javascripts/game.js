<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

$(document).ready(function() { 

    var randomNumber = getRandomNumber(10) 
    var guess;
    var guessCount = 0
    var correctGuess = false;

    function getRandomNumber(upper) {
        var num = Math.floor(Math.random() * upper) +1;
        return num; 
    }
    while(true){
        guess = prompt("I am thinking of a number between 1 and 10. What is it?");
        guessCount += 1;
        if (parseInt(guess) === randomNumber){ 
        correctGuess = true;
        break; 
    }
}
document.write('<h1> You Guessed the number!</h1>');
document.write('it took you' + guessCount + 'tries to guess the number' + randomNumber); 
