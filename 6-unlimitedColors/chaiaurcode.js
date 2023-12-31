const starBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
let intervalId;
function generateColor() {
    const hexCharacters = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];

    intervalId = setInterval(() => {
        let str = "";
        for (let i = 0; i < 6; i++) {
            str += hexCharacters[randomNumber()];
        }
        changeBg(str);
        // console.log(str);
        // console.log(randomNumber());
    }, 100);
    starBtn.disabled = true;
    starBtn.classList.add("disabled");
    stopBtn.disabled = false;
    stopBtn.classList.remove("disabled");
}
function randomNumber() {
    return Math.floor(Math.random() * 16);
}

function stopColorChange() {
    clearInterval(intervalId);
    starBtn.disabled = false;
    starBtn.classList.remove("disabled")
    stopBtn.disabled = true;
    stopBtn.classList.add("disabled");
}

const colorBox = document.getElementsByClassName("color")[0];
const colorBoxContainer =
    document.getElementsByClassName("colorBox-container")[0];
function changeBg(color) {
    colorBox.value = `#${color}`;
    document.body.style.background = `#${color}`;
}
colorBoxContainer.addEventListener("click", () => {
    const tooltip = document.getElementsByClassName("tooltip")[0];
    tooltip.classList.add("tooltip-visible");
    setTimeout(() => {
        tooltip.classList.remove("tooltip-visible");
    }, 1000);

    console.log("coppied");
    colorBox.select();
    document.execCommand("copy");
});
// generateColor();

starBtn.addEventListener("click", generateColor);
stopBtn.addEventListener("click", stopColorChange);
