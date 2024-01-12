const url = "https://api.thecatapi.com/v1/images/search";
const container = document.querySelector(".container");
let width;
const windowWidth = window.innerWidth;
if (windowWidth <= 510) {
    width = window.innerWidth - 20;
    container.style.width = `${width}px`;
} else {
    width = 500;
}

document.querySelector(".btn").addEventListener("click", getImg);
const catsContainer = document.getElementsByClassName("cats")[0];

async function getImg() {
    let response = await fetch(url);
    let data = await response.json();
    showImg(data[0].url);
}
let imgCount = 0;
function showImg(imgUrl) {
    const imgElement = document.createElement("img");
    imgElement.src = imgUrl;
    imgElement.alt = "Random Cat";
    imgElement.classList.add("random_cats");
    imgElement.style.width = `${width}`;

    catsContainer.appendChild(imgElement);
    imgCount = catsContainer.children.length - 1;
    catsContainer.style.transform = `translateX(-${width * imgCount}px)`;

    if (imgCount === 1) {
        createNavBtn();
        const navBtns = document.querySelectorAll(".nav-btn");
        navBtns.forEach((btn) => {
            btn.addEventListener("click", navigation, false);
        });
    }
}

function navigation(e) {
    let target = e.currentTarget;
    if (imgCount > 0 && target.classList.contains("prev")) {
        imgCount--;
        catsContainer.style.transform = `translateX(-${width * imgCount}px)`;
    } else if (
        imgCount < catsContainer.children.length - 1 &&
        target.classList.contains("next")
    ) {
        imgCount++;
        catsContainer.style.transform = `translateX(-${width * imgCount}px)`;
    }
}

function createNavBtn() {
    let prevBtn = document.createElement("div");
    let nextBtn = document.createElement("div");
    prevBtn.classList.add("prev", "nav-btn", "btn");
    nextBtn.classList.add("next", "nav-btn", "btn");
    prevBtn.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
    nextBtn.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;

    container.appendChild(nextBtn);
    container.appendChild(prevBtn);
}
// setInterval(getImg, 2000);
