console.log("hello world");

function playSound(soundSrc) {
    const audio = new Audio(soundSrc);
    audio.play();
}
setInterval(() => {
    const clockElem = document.getElementById("clock");
    let date = new Date().toLocaleTimeString();
    clockElem.innerHTML = date;
}, 1000);
