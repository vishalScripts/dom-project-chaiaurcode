const baseURL = "https://source.unsplash.com/all/300x300";
// this url gives an image. Use this and NO API calls

const container = document.querySelector(".content");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    if (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    console.log("working");
    let imgElem = document.createElement("img");
    imgElem.setAttribute("src", baseURL);
    container.appendChild(imgElem);
    // container.style.background = `url(${baseURL})`;
});
