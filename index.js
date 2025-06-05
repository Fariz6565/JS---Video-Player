var video = document.getElementById('video');
var playPauseBtn = document.getElementById('play-pause');
var volumeSlider = document.getElementById('volume');
var fullscreenBtn = document.getElementById('fullscreen');
var playIcon = playPauseBtn.querySelector('i');
var fullscreenIcon = fullscreenBtn.querySelector('i');
function playpause() {
    if (video.paused) {
        video.play();
        playIcon.className = "fas fa-pause";
    }
    else {
        video.pause();
        playIcon.className = "fas fa-play";
    }
}
;
document.addEventListener("keydown", function (event) {
    var _a;
    if (event.code === "Space" && ((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== 'INPUT') {
        // event.preventDefault();
        playpause();
    }
});
playPauseBtn.addEventListener("click", playpause);
function volumes() {
    video.volume = parseFloat(volumeSlider.value);
}
volumeSlider.addEventListener("click", volumes);
function fullekran() {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
        fullscreenIcon.className = "fas fa-compress";
    }
    else {
        document.exitFullscreen();
        fullscreenIcon.className = "fas fa-expand";
    }
}
fullscreenBtn.addEventListener("click", fullekran);
