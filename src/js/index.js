import "../css/style.scss";
// import images
import background from "url:../images/background.png";
import eend from "url:../images/eend.jpg";
import geit from "url:../images/geit.jpg";
import haan from "url:../images/haan.jpg";
import hond from "url:../images/hond.jpg";
import kat from "url:../images/kat.jpg";
import kikker from "url:../images/kikker.jpg";
import kip from "url:../images/kip.jpg";
import koe from "url:../images/koe.jpg";
import paard from "url:../images/paard.jpg";
import schaap from "url:../images/schaap.jpg";
import stier from "url:../images/stier.jpg";
import uil from "url:../images/uil.jpg";
import varken from "url:../images/varken.jpg";
import vogel from "url:../images/vogel.jpg";

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

// function to make animals make sound on corresponding keypress

function keypressForSound(e) {
  const playedAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const pressedKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!playedAudio) return;

  pressedKey.classList.add("playing");
  playedAudio.currentTime = 0;
  playedAudio.play();

  playedAudio.onended = function () {
    pressedKey.classList.remove("playing");
    console.log("audio now ended");
  };
}

// function to make animals make sound when clicked

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
