getWord();
function playGame(word) {
  alert("Guess the word!");
  let guess = "_".repeat(word.length);

  for (let i = 0; i < 3; i++) {
    let letter = prompt("Enter a letter");
    let correctLetterArray = [];
    if (word.includes(letter)) {
      for (let f = 0; f < word.length; f++) {
        if (word[f] == letter) {
          correctLetterArray.push(f);
        }
      }
      console.log(correctLetterArray);
      alert("There is letter " + letter);
      let tempGuess = guess.split(""); //separates string into an array of letters (tempGuess)
      for (k = 0; k < correctLetterArray.length - 1; k++) {
          
      }
      tempGuess[word.indexOf(letter)] = letter;
      guess = tempGuess.join("");
      console.log(guess);
    }
  }
}
function getWord() {
  let word = prompt("Enter your word");
  playGame(word);
}
