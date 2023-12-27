const guessElem = document.getElementById("guessField");
const mainBtn = document.getElementById("subt");
const resultContainer = document.getElementsByClassName("resultParas")[0];
const messages = document.getElementsByClassName("lowOrHi")[0];
const prevGuessesElem = document.getElementsByClassName("guesses")[0];
const remainGuess = document.getElementsByClassName("lastResult")[0];
const wrapper = document.getElementById("wrapper");

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
    let messageElem = document.createElement("span");
    messageElem.classList.add("red");
    messageElem.innerHTML = message;
    messages.appendChild(messageElem);
}

function endGame(winOrLoss) {
    playGame = false;
    remainGuess.innerHTML = 0;

    // messageElem.classList.add("");
    mainBtn.innerHTML = "Restart";
    mainBtn.classList.add("crimson");
    if (winOrLoss) {
        messages.classList.add("special");
        wrapper.style.background = `url("https://i.pinimg.com/originals/cb/49/3c/cb493c4687425553507c309c069f6d39.gif") `;
        messages.innerHTML = `<i class="red">Press Enter for new game</i><br>You Won <br> Guess is ${randomNum} <br> `;
    } else {
        messages.classList.add("special");
        messages.innerHTML = `<i style="color: #fff; font-size: 12px;">Press Enter for new game</i> <br> You lose <br> Guess is ${randomNum} <br>`;
    }
}

function newGame() {
    playGame = true;
    numOfGuess = 0;
    mainBtn.innerHTML = "Submit";
    mainBtn.classList.remove("crimson");
    randomNum = generateRandomNum();
    messages.innerHTML = "";
    messages.classList.remove("special");
    remainGuess.innerHTML = 10 - numOfGuess;
    wrapper.style.background = "none";
    while (prevGuessesElem.firstChild) {
        prevGuessesElem.removeChild(prevGuessesElem.firstChild);
    }
}

console.log(randomNum);
