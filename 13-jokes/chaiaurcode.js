const url = "https://api.chucknorris.io/jokes/random";

//*-=-=-=-=-=|| handle this endpoint with XMLHttpRequest ||
const getJoke = async function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            displayJoke(response);
        }
    };
    xhr.send();
};

//*-=-=-=-=-=||handle this endpoint with promises ||
/*
const getJoke = async function () {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("404 url not found!!");
        }
        let jokeData = await response.json();
        await displayJoke(jokeData);
    } catch (error) {
        displayJoke(null, error);
    }
};
*/

const displayJokeElem = document.getElementById("display-joke");
const btn = document.getElementById("getJoke");

let charIndex = displayJokeElem.innerHTML.length;

async function displayJoke(joke, error) {
    await erase();
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
