alert("Guess the word!");

function playGame(word){
    let guess = "_".repeat(word.length);
    
    for (let i = 0; i < 3; i++) {
        let letter = prompt("Enter a letter");
        if (word.includes(letter)) {
            alert("There is letter " + letter);
            let tempGuess = guess.split(""); //separates string into an array of letters (tempGuess) 
            tempGuess[word.indexOf(letter)] = letter;
            guess = tempGuess.join(""); 
            console.log(guess);
        }
    }
}
function getWord(){
    let word = prompt("Enter your word");
    playGame(word);
}