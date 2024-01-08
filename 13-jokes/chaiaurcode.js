const url = "https://api.chucknorris.io/jokes/random";

// handle this endpoint with XMLHttpRequest

// handle this endpoint with promises
const getJoke = async function () {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("404 url not found!!");
        }
        let jokeData = await response.json();
        await erase(); // Wait for erase to complete before displaying the new joke
        await displayJoke(jokeData);
    } catch (error) {
        displayJoke(null, error);
    }
};

const displayJokeElem = document.getElementById("display-joke");
const btn = document.getElementById("getJoke");

let charIndex = displayJokeElem.innerHTML.length;

async function displayJoke(joke, error) {
    charIndex = 0;
    if (joke) {
        await type(joke.value);
    } else {
        displayJokeElem.innerHTML = error;
    }
}

btn.addEventListener("click", getJoke);

async function type(sentence) {
    return new Promise((resolve) => {
        const typeInterval = setInterval(() => {
            if (charIndex < sentence.length) {
                displayJokeElem.innerHTML += sentence.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                resolve();
            }
        }, 10);
    });
}

async function erase() {
    return new Promise((resolve) => {
        const eraseInterval = setInterval(() => {
            if (charIndex > 0) {
                displayJokeElem.innerHTML = displayJokeElem.innerHTML.slice(
                    0,
                    charIndex - 1
                );
                charIndex--;
            } else {
                clearInterval(eraseInterval);
                resolve();
            }
        }, 1);
    });
}
