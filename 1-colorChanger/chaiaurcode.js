const buttons = document.querySelectorAll(".button");
const coolFactsAboutColors = {
    grey: {
        description:
            "Grey is often associated with elegance and sophistication. It adds a sense of timelessness to design.",
    },
    white: {
        description:
            "White symbolizes purity and simplicity. It is the color of new beginnings and a blank canvas for creativity.",
    },
    blue: {
        description: `Blue has a calming effect on the mind and is associated with trust and stability. It's the color of the vast sky and the deep ocean.`,
    },
    yellow: {
        description:
            "Yellow is a vibrant color that represents energy and positivity. It is the color of sunshine, warmth, and creativity.",
    },
};

function playSound(soundSrc) {
    const audio = new Audio(soundSrc);
    audio.play();
}

const discElem = document.getElementById("disc");
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // stop speking

        // Reset the border for all buttons
        buttons.forEach((b) => {
            b.style.border = "solid black 2px";
            b.innerHTML = "";
        });

        // Get the color from the clicked button's ID
        let color = e.target.id;

        // Remove the border from the clicked button
        e.target.style.border = "none";
        //show the text in uppercase
        e.target.innerHTML = color[0].toUpperCase() + color.slice(1);

        //* str.slice(1):
        //* The parameter (1) represents the starting index of the extraction.
        //* If no second parameter is provided, the extraction continues until the end of the string.
        //* So, str.slice(1) extracts characters starting from index 1 to the end of the string.

        // console.log(color[0].toUpperCase() + color.slice(1));
        let disc = coolFactsAboutColors[color].description;
        discElem.innerHTML = disc;

        speechSynthesis.cancel();
        speak(disc);
        // Set the background color of the body to the clicked button's color
        document.body.style.backgroundColor = color;
        playSound(`audios/${color}.mp3`);
    });
});

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 2.0;
    speech.pitch = 10.0;

    setTimeout(() => {
        speechSynthesis.speak(speech);
    }, 2000);
}

//project done