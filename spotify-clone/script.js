console.log("lets write js");
let songs;
let currfolder;
let currentsong = new Audio();
//sec to min 
const secondTomin = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  seconds = Math.floor(seconds);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedSecs = secs < 10 ? "0" + secs : secs;
  return `${mins}:${formattedSecs}`;
};

async function getSongs(folder) {
  currfolder = folder;
  let a = await fetch(`/${folder}/`);
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }
   // Show all the songs in the playlist
  let songUL = document
    .querySelector(".songlist")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `<li><img class="invert" src="music.svg" alt="" /><div class="info"><div>${song.replaceAll("%20", " ")}</div><div>Neha</div></div><div class="playnow"><span>PlayNow </span><img src="play.svg" class="invert" alt=""></div></li>`;
  }
  // Attach an event listener to each song
  Array.from(
    document.querySelector(".songlist").getElementsByTagName("li"),
  ).forEach((e) => {
    e.addEventListener("click", () => {
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });
 return songs; 
}
const playMusic = (track, pause = false) => {
  currentsong.src = `/${currfolder}/` + track;
  if (!pause) {
    currentsong.play();
    current.src = "pause.svg";
  }
  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00/00:00";
};

async function main() {
   // Get the list of all the songs
   await getSongs("spotify-clone/ncs");
  playMusic(songs[0], true);
 // Attach an event listener to play, next and previous
  current.addEventListener("click", () => {
  if (currentsong.paused) {
    currentsong.play();
    current.src = "pause.svg";
  } else {
    currentsong.pause();
    current.src = "play.svg";
  }
});
 // Listen for timeupdate event
currentsong.addEventListener("timeupdate", () => {
  document.querySelector(".songtime").innerHTML =
    `${secondTomin(currentsong.currentTime)}/${secondTomin(currentsong.duration)}`;
  document.querySelector(".circle").style.left =
    (currentsong.currentTime / currentsong.duration) * 100 + "%";
});
 // Add an event listener to seekbar
document.querySelector(".seekbar").addEventListener("click", (e) => {
  let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  document.querySelector(".circle").style.left = percent + "%";
  currentsong.currentTime = (currentsong.duration * percent) / 100;
});
// Add an event listener for hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".left").style.left = "0";
});
 // Add an event listener for close button
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-120%";
});
 // Add an event listener to previous
previous.addEventListener("click", () => {
  currentsong.pause();
  let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
  if (index - 1 >= 0) {
    playMusic(songs[index - 1]);
  }
});
 // Add an event listener to next
next.addEventListener("click", () => {
  currentsong.pause();
  let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
  if (index + 1 < songs.length) {
    playMusic(songs[index + 1]);
  }
});
 // Add an event to volume
document
  .querySelector(".range")
  .getElementsByTagName("input")[0]
  .addEventListener("change", (e) => {
    currentsong.volume = parseInt(e.target.value) / 100;
  });
}

main();
