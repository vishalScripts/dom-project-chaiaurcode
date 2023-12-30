console.log("Project 5");
const allKeysArray = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",

    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[",
    "]",
    "\\",

    "CapsLock",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ";",
    "'",
    "Enter",

    "Shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ",",
    ".",
    "/",
    "Broken",

    "Control",
    "Meta",
    "Alt",
    "Space",
    "Alt",
    "Fn",
    "Control",
];
insertKeys(allKeysArray);

let sound = false;

var audio = document.getElementById("myAudio");
const soundBtn = document.getElementById("sound");

soundBtn.addEventListener("click", () => {
    const soundIcon = document.getElementById("soundIcon");
    if (sound) {
        soundIcon.classList.remove("fa-volume-high");
        soundIcon.classList.add("fa-volume-xmark");
        sound = false;
    } else {
        soundIcon.classList.remove("fa-volume-xmark");
        soundIcon.classList.add("fa-volume-high");
        sound = true;
    }
});

function playSound() {
    audio.play();
}
function stopSound() {
    audio.pause();
    audio.currentTime = 0;
}

function insertKeys(keys) {
    const keysContainer =
        document.getElementsByClassName("keyboard-container")[0];
    for (let i = 0; i < keys.length; i++) {
        let keyElem = document.createElement("div");
        keyElem.setAttribute("id", `key-${keys[i].toLowerCase()}`);
        keyElem.setAttribute("class", "key");
        if (keys[i] === "Control") {
            keyElem.innerHTML = "ctrl";
        } else if (keys[i] === "Meta") {
            keyElem.innerHTML = "Win";
        } else {
            keyElem.innerHTML = keys[i];
        }
        // console.log(keyElem);
        keysContainer.appendChild(keyElem);
    }
}

const allKeys = document.querySelectorAll(".key");
const insert = document.getElementById("insert");
document.addEventListener("keydown", (e) => {
    // allKeys.forEach((key) => {
    //     // if (key.classList.contains("red")) {
    //     //     key.classList.remove("red");
    //     //     // key.style.opacity = 0.2;
    //     // }
    // });
    if (sound) {
        playSound();
    }
    let key = e.key;
    // console.log(key);
    let keyElem = document.getElementById(`key-${key.toLowerCase()}`);
    if (keyElem) {
        // insert.innerHTML = `${key}, `;
        printKey(key);
        keyElem.style.opacity = 1;
        keyElem.style.background = "red";
        setTimeout(() => {
            keyElem.style.background = "green";
        }, 200);
        // console.log(keyElem);
    }
});

document.addEventListener("keyup", stopSound);
function printKey(key) {
    let keyElem = document.createElement("div");
    keyElem.setAttribute("class", "key");
    keyElem.innerHTML = key;
    insert.appendChild(keyElem);
}
