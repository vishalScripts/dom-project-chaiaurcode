const cursor = document.querySelector(".cursor");
// an array of 10 colors in hex value
const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array
document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    cursor.style.left = `${clientX}px`;
    cursor.style.top = `${clientY}px`;
    //! cursor.style.background = colors[Math.floor(Math.random() * colors.length)];
    cursor.style.background = generateColor();
    // console.log(generateColor());

    const currentWidth = parseFloat(cursor.style.width) || 20;
    const currentHeight = parseFloat(cursor.style.height) || 20;

    cursor.style.width = `${currentWidth + 0.5}px`;
    cursor.style.height = `${currentHeight + 0.5}px`;
});

function generateColor() {
    let color = "#";
    const letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * letters.length);
        color += letters[randomNum];
    }
    return color;
}
