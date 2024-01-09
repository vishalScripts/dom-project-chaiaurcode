const url = "https://api.chucknorris.io/jokes/random";
let blocked = false;

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
                } else {
                    displayJoke(null, "Error fetching joke");
                }
                blocked = false; // Move it outside the if-else block
            }
        };
        xhr.send();
    }
};

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
        } catch (error) {
            displayJoke(null, error);
        } finally {
            blocked = false; // Ensure that 'blocked' is reset even if an error occurs
        }
    }
};

const displayJokeElem = document.getElementById("display-joke");
const btn = document.getElementById("getJoke");

let charIndex = 0;

async function displayJoke(joke, error) {
    if (joke) {
        charIndex = 0;
        await type(joke.value);
    } else {
        displayJokeElem.innerHTML = error;
    }
}

btn.addEventListener("click", () => {
    getJokeByFetch();
    getJokeByXHR();
});

let typing = false;
async function type(sentence) {
    if (!typing) {
        displayJokeElem.innerHTML = "";
        typing = true;
        return new Promise((resolve) => {
            const typeInterval = setInterval(() => {
                if (charIndex < sentence.length) {
                    displayJokeElem.innerHTML += sentence.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    typing = false;
                    resolve();
                }
            }, sentence.length / 100);
        });
    }
}
