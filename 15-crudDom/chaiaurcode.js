const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (title.value == "" || author.value == "" || year.value == "") {
        alert("Plese enter the input");
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

    dltBtn.addEventListener("click", (e) => {
        let target = e.currentTarget;
        target.parentNode.remove();
    });

    title.value = "";
    author.value = "";
    year.value = "";
});
