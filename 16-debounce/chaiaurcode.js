// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️
const debounce = function (func, delay) {
    let timeoutId;
    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
};

const debounceHandleInput = debounce(getData, 500);

const input = document.getElementById("user-input");
const card = document.getElementById("user-card");
input.addEventListener("input", () => {
    debounceHandleInput(input.value);
});

async function getData(query) {
    try {
        let response = await fetch(`https://randomuser.me/api/?seed=${query}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        showData(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

function showData(data) {
    const user = data.results[0];
    console.log(user);

    card.style.display = "block";
    card.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="User Image" />
        <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <p><span class="white">Email:</span> ${user.email}</p>
        <p><span class="white">Gender:</span> ${user.gender}</p>
        <p><span class="white">Phone:</span> ${user.phone}</p>
        <p><span class="white">Location:</span> ${user.location.city}, ${user.location.country}</p>
        <div class="circle"></div>
    `;
}

card.addEventListener("mousemove", (event) => {
    const boundingRect = card.getBoundingClientRect();

    const mouseX = event.clientX - boundingRect.left;
    const mouseY = event.clientY - boundingRect.top;

    const circle = document.getElementsByClassName("circle")[0];
    circle.style.top = `${mouseY}px`;
    circle.style.left = `${mouseX}px`;

    console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
});
