String.prototype.capitalize = function () {
    return `${this.charAt(0).toUpperCase()}${this.slice(1)}`;
};
const input = document.getElementById("input-field");
const output = document.getElementById("output-field");

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = input.value;
        switch (checkClass(btn)) {
            case "uppercase":
                value = value.toUpperCase();
                output.innerHTML = value;
                break;
            case "lowercase":
                value = value.toLowerCase();
                output.innerHTML = value;
                break;
            case "capitalize":
                value = value.capitalize();
                output.innerHTML = value;
                break;
            case "bold":
                output.innerHTML = `<b>${value}</b>`;
                break;
            case "italic":
                output.innerHTML = `<i>${value}</i>`;
                break;
            case "underline":
                output.innerHTML = `<u>${value}</u>`;
                break;
        }
    });
});

function checkClass(btn) {
    let cls = "default";
    if (btn.classList.contains("uppercase")) {
        cls = "uppercase";
    } else if (btn.classList.contains("lowercase")) {
        cls = "lowercase";
    } else if (btn.classList.contains("capitalize")) {
        cls = "capitalize";
    } else if (btn.classList.contains("bold")) {
        cls = "bold";
    } else if (btn.classList.contains("italic")) {
        cls = "italic";
    } else if (btn.classList.contains("underline")) {
        cls = "underline";
    }
    return cls;
}
