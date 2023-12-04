const buttons = document.querySelectorAll('.button');

function playSound(soundSrc) {
  const audio = new Audio(soundSrc);
  audio.play();
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Reset the border for all buttons
    buttons.forEach((b) => {
      b.style.border = 'solid black 2px';
    });

    // Get the color from the clicked button's ID
    let color = e.target.id;

    // Remove the border from the clicked button
    e.target.style.border = 'none';

    // Set the background color of the body to the clicked button's color
    document.body.style.backgroundColor = color;
    playSound(
      'file:///C:/Users/HP/Downloads/mixkit-arcade-game-jump-coin-216.wav'
    );
  });
});
