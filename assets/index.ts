import MediaPlayer from "@starlord25/mediaplayer";
import AutoPlay from "@starlord25/mediaplayer";
import AutoPause from "@starlord25/mediaplayer";
import Ads from "@starlord25/mediaplayer";

const video = document.querySelector("video");
const player = new MediaPlayer({
  media: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(new URL('/sw.js', import.meta.url)).catch((error) => {
    console.log(error.message);
  });
}
