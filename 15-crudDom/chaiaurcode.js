const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

// Load existing data from local storage
bookList.innerHTML = localStorage.getItem("data");
attachDeleteListeners(); // Attach event listeners after loading existing data

btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (title.value == "" || author.value == "" || year.value == "") {
        alert("Please fil the input correctly");
        return;
    }

    const newRow = document.createElement("section");
    const titleCell = document.createElement("div");
    const authorCell = document.createElement("div");
    const yearCell = document.createElement("div");
    const dltBtn = document.createElement("span");
    dltBtn.classList.add("dlt-btn");

    titleCell.textContent = title.value;
    authorCell.textContent = author.value;
    yearCell.textContent = year.value;
    dltBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(yearCell);
    newRow.appendChild(dltBtn);
    bookList.appendChild(newRow);
    dltBtn.addEventListener("click", dlt);

    title.value = "";
    author.value = "";
    year.value = "";
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("data", bookList.innerHTML);
}
function dlt(e) {
    let target = e.currentTarget;
    target.parentNode.remove();
    updateLocalStorage();
}

function attachDeleteListeners() {
    // Attach event listeners to delete buttons
    // cause after refreshing the website eventListeners are deleted
    const deleteButtons = document.querySelectorAll(".dlt-btn");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", dlt);
    });
}
