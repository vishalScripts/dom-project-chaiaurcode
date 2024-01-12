const url = "https://api.thecatapi.com/v1/images/search";
const container = document.querySelector(".container");

document.querySelector(".btn").addEventListener("click", getImg);

async function getImg() {
    let response = await fetch(url);
    let data = await response.json();
    showImg(data[0].url);
}

function showImg(imgUrl) {
    const imgElement = document.createElement("img");
    imgElement.src = imgUrl;
    imgElement.alt = "Random Cat";
    imgElement.classList.add("random_cats");

    // Remove existing images before adding a new one
    container.innerHTML = "";

    container.appendChild(imgElement);
}
setInterval(getImg, 2000);
