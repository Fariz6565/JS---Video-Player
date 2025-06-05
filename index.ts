const video = document.getElementById('video') as HTMLVideoElement;
const playPauseBtn = document.getElementById('play-pause') as HTMLButtonElement;
const volumeSlider = document.getElementById('volume') as HTMLInputElement;
const fullscreenBtn = document.getElementById('fullscreen') as HTMLButtonElement;
const playIcon = playPauseBtn.querySelector('i') as HTMLElement;
const fullscreenIcon = fullscreenBtn.querySelector('i') as HTMLElement;

function playpause(){
    if (video.paused){
        video.play();
        playIcon.className = `fas fa-pause`;
    }else{
        video.pause();
        playIcon.className = `fas fa-play`
    }
    
};
document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.code === "Space" && document.activeElement?.tagName !== 'INPUT') {
    // event.preventDefault();
    playpause();
  }
});
playPauseBtn.addEventListener("click", playpause);

function volumes(){
    video.volume = parseFloat(volumeSlider.value)
}
volumeSlider.addEventListener("click", volumes);


function fullekran(){
    if(!document.fullscreenElement){
        video.requestFullscreen();
        fullscreenIcon.className = `fas fa-compress`;
    }else {
        document.exitFullscreen();
        fullscreenIcon.className = `fas fa-expand`
    }
}
fullscreenBtn.addEventListener("click", fullekran)