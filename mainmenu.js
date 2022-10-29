var gza = "GZA_4thChamber.mp3";
let isGza = false;

function liquidSwords() {
  if (!isGza) {
    song.play();
    isGza = true;
  } else {
    song.pause();
    isGza = false;
  }
}
var rubiksdiv = document.getElementById("mymusic");

var song = document.getElementById("gza");

rubiksdiv.addEventListener("click", liquidSwords);
