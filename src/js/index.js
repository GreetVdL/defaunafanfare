import "../css/style.scss";
// import images
import background from "url:../images/background.png";
import eend from "url:../images/eend.jpg?width=500";
import geit from "url:../images/geit.jpg?width=500";
import haan from "url:../images/haan.jpg?width=500";
import hond from "url:../images/hond.jpg?width=500";
import kat from "url:../images/kat.jpg?width=500";
import kikker from "url:../images/kikker.jpg?width=500";
import kip from "url:../images/kip.jpg?width=500";
import koe from "url:../images/koe.jpg?width=500";
import paard from "url:../images/paard.jpg?width=500";
import schaap from "url:../images/schaap.jpg?width=500";
import stier from "url:../images/stier.jpg?width=500";
import uil from "url:../images/uil.jpg?width=500";
import varken from "url:../images/varken.jpg?width=500";
import vogel from "url:../images/vogel.jpg?width=500";

// Preload images

const images = [
  background,
  eend,
  geit,
  haan,
  hond,
  kat,
  kikker,
  kip,
  koe,
  paard,
  schaap,
  stier,
  uil,
  varken,
  vogel,
];

images.forEach(function (img) {
  new Image().src = img;
});

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
