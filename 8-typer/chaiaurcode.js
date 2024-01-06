const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird", "OverPowerd"];
let charIndex = 0;
let wordIndex = 0;
function type() {
    console.table("wordIndex", wordIndex);
    if (charIndex < words[wordIndex].length) {
        typedTextSpan.innerHTML += words[wordIndex].charAt(charIndex);
        // console.log(words[wordIndex]);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, 150);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 100);
    }
}

type();
