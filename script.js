document.getElementById("start").addEventListener('click', getWord);
function playGame(word) {
    document.querySelector("#inputWord").value = "";
    alert("Guess the word!");
    let guess = "_".repeat(word.length);
    let livesCount = 3;
    let result = 0;

    document.querySelector(".log").textContent = guess;
    for (let i = 0; i < livesCount; i++) {
        let letter;
        let correctLetterArray = []; //serves as a container for indexes of letters
        
        if(result == 0){
            letter = prompt("Enter a letter");
        }
        

        if (word.includes(letter) && result == 0) {

            for (let f = 0; f < word.length; f++) {
                if (word[f] == letter) {
                    correctLetterArray.push(f);
                }
            }

            let tempGuess = guess.split(""); //separates string into an array of letters (tempGuess)

            for (k = 0; k < correctLetterArray.length; k++) {
                tempGuess[correctLetterArray[k]] = letter;
            }

            guess = tempGuess.join("");
            document.querySelector(".log").textContent = guess;

            if(guess == word){
                resetWonGame(result);
                result = 1;
            } 
            i--; //continues the game
        }else{
            --livesCount;
            if(livesCount == 0){
                resetLostGame(result);
                result = 1;
            } 
        }
    }
}

function resetLostGame(result){
    document.querySelector(".game-status").textContent = "Game over! You lost";
    result = 1;
}

function resetWonGame(result){
    document.querySelector(".game-status").textContent = "Game over! You won";
    result = 1;
}

function getWord() {
    // let word = prompt("Enter your word");
    let inputWordPlace = document.getElementById("inputWord");
    let word = inputWordPlace.value;
    console.log(inputWordPlace.value)
    if(inputWordPlace.value !== "" && inputWordPlace.value.length > 2)
    playGame(word);
}