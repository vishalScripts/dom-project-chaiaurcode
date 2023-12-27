const guessElem = document.getElementById("guessField");
const mainBtn = document.getElementById("subt");
const resultContainer = document.getElementsByClassName("resultParas")[0];
const messages = document.getElementsByClassName("lowOrHi")[0];
const prevGuessesElem = document.getElementsByClassName("guesses")[0];
const remainGuess = document.getElementsByClassName("lastResult")[0];

let randomNum = generateRandomNum();

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

mainBtn.addEventListener("click", (e) => {
    e.preventDefault();

    submit();
});
guessElem.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        submit();
    }
});

function submit() {
    if (playGame) {
        mainBtn.innerHTML = "Submit";
        let guess = guessElem.value;
        validateGuess(guess);
    } else {
        newGame();
    }
}

function generateRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function validateGuess(guess) {
    if (guess > 100 || guess < 1 || isNaN(guess)) {
        // console.log("help!");
        displayMessage("Enter a valid number!");
    } else {
        checkGuess(guess);
        guessElem.value = "";
    }
}

function checkGuess(guess) {
    if (numOfGuess < 10) {
        if (guess > randomNum) {
            messages.innerHTML = `Your number (${guess}) is greater than the actual guess`;
            displayGuess(guess);
        } else if (guess < randomNum) {
            messages.innerHTML = `Your number (${guess}) is less than the actual guess`;
            displayGuess(guess);
        } else {
            endGame(true);
        }
    } else {
        endGame(false);
    }
    numOfGuess++;
}

function displayGuess(guess) {
    prevGuess.push(guess);
    // Clear previous content in the container
    prevGuessesElem.innerHTML = "";

    // Create and append paragraphs for each guess
    for (let i = 0; i < prevGuess.length; i++) {
        let paragraph = document.createElement("span");
        paragraph.innerHTML = `${prevGuess[i]},`;
        prevGuessesElem.appendChild(paragraph);
    }
    remainGuess.innerHTML = 10 - numOfGuess;
}

function displayMessage(message) {
    messages.innerHTML = message;
}

function endGame(winOrLoss) {
    playGame = false;
    remainGuess.innerHTML = 0;

    // messageElem.classList.add("");
    mainBtn.innerHTML = "Restart";
    mainBtn.classList.add("crimson");
    if (winOrLoss) {
        messages.innerHTML = `You Won <br> Guess is ${randomNum}`;
    } else {
        messages.innerHTML = `You lose <br> Guess is ${randomNum}`;
    }
}

function newGame() {
    playGame = true;
    numOfGuess = 0;
    mainBtn.innerHTML = "Submit";
    mainBtn.classList.remove("crimson");
    randomNum = generateRandomNum();
    messages.innerHTML = "";
    remainGuess.innerHTML = 10 - numOfGuess;
    while (prevGuessesElem.firstChild) {
        prevGuessesElem.removeChild(prevGuessesElem.firstChild);
    }
}
