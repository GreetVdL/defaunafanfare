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
