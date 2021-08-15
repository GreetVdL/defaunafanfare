import "../css/style.scss";

// function to make the animals make their sound on corresponding keypress

function keypressForSound(e) {
  const playedAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const pressedKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!playedAudio) return;

  pressedKey.classList.add("playing");
  playedAudio.currentTime = 0;
  playedAudio.play();

  playedAudio.onended = function () {
    pressedKey.classList.remove("playing");
  };
}

// function to make the animals make their sound when clicked

function clickForSound() {
  const animalButtons = document.querySelectorAll(".animal");
  animalButtons.forEach((animalButton, i) => {
    animalButton.addEventListener("click", (e) => {
      const nthOfType = i + 1;
      const audioToPlay = document.querySelector(
        `audio:nth-of-type(${nthOfType})`
      );
      audioToPlay.currentTime = 0;
      audioToPlay.play();
      animalButton.classList.add("playing");
      audioToPlay.onended = function () {
        animalButton.classList.remove("playing");
      };
    });
  });
}

// call keypress function when a key has been pressed

window.addEventListener("keydown", keypressForSound);

// call click function

clickForSound();
