const words = ['Tiger', 'Rabbit', 'Jaguar', 'Beaver', 'Falcon', 'Penguin', 'Koala', 'Otter', 'Panther', 'Giraffe', 'Dolphin', 'Parrot', 'Gorilla', 'Cheetah', 'Mantis', 'Ferret', 'Rabbit', 'Turtle', 'Lemur', 'Skunk'];


let chosenWord;
let displayedLetters;
let remainingTries;

function startGame() {
    chosenWord = getRandomWord();
    displayedLetters = getRandomLetters(chosenWord, 3);
    remainingTries = 5;

    alert(`Guess the word: ${displayedLetters.join(" ")}`);
    promptUser();
}

function promptUser() {
    const guess = prompt(`Remaining tries: ${remainingTries}\nEnter your guess:`);

    if (guess === null) {
        endGame("Game canceled");
    } else {
        checkGuess(guess.toLowerCase());
    }
}

function checkGuess(guess) {
    if (guess === chosenWord) {
        endGame("Congratulations! You guessed the word!");
    } else {
        remainingTries--;

        if (remainingTries > 0) {
            alert(`Incorrect guess. Try again.\nRemaining tries: ${remainingTries}`);
            promptUser();
        } else {
            endGame(`Sorry, you ran out of tries. The word was "${chosenWord}".`);
        }
    }
}

function endGame(message) {
    document.getElementById("result-message").textContent = message;
    document.getElementById("result-modal").style.display = "block";
}

function resetGame() {
    document.getElementById("result-modal").style.display = "none";
    startGame();
}

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function getRandomLetters(word, count) {
    const shuffled = word.split("").sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}
