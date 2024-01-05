const emojis = [
    "😆",
    "😅",
    "🤣",
    "😂",
    "😀",
    "🤑",
    "🤨",
    "🙂",
    "😊",
    "😗",
    "😛",
    "😏",
    "🤥",
    "😴",
    "🥺",
    "😧",
    "😇",
    "😳",
    "🙃",
    "🥴",
    "🧐",
    "🤨",
    "😒",
    "🤔",
    "🤭",
    "🥰",
    "🤐",
    "🤔",
    "🤪",
    "😃",
    "😁",
    "😬",
];

const btn = document.querySelector("#emoji");
btn.addEventListener("mouseover", () => {
    let randNum = Math.floor(Math.random() * emojis.length);
    btn.innerHTML = emojis[randNum];
    console.log(emojis[randNum], randNum);
});
