const url = "https://api.chucknorris.io/jokes/random";
let requestId = 0;
let blocked = false;

//*-=-=-=-=-=|| handle this endpoint with XMLHttpRequest ||
const getJokeByXHR = async function () {
    if (!blocked) {
        blocked = true;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let response = JSON.parse(xhr.responseText);
                    displayJoke(response);
                    blocked = false;
                } else {
                    displayJoke(null, "Error fetching joke");
                }
            }
        };
        xhr.send();
    }
};
//*-=-=-=-=-=||handle this endpoint with promises ||
/*
 */
const getJokeByFetch = async function () {
    if (!blocked) {
        blocked = true;
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error("404 url not found!!");
            }
            let jokeData = await response.json();

            await displayJoke(jokeData);

            blocked = false;
        } catch (error) {
            displayJoke(null, error);
        }
    }
};

const displayJokeElem = document.getElementById("display-joke");
const btn = document.getElementById("getJoke");

let charIndex = displayJokeElem.innerHTML.length;

async function displayJoke(joke, error) {
    if (joke) {
        charIndex = 0;
        displayJokeElem.innerHTML = joke.value;
    } else {
        displayJokeElem.innerHTML = error;
    }
}

btn.addEventListener("click", () => {
    getJokeByFetch();
    getJokeByXHR();
});

// handle the case of race condition
