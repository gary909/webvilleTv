var position = 0;
var playlist;
var video;

window.onload = function() {
    playlist = ["video/preroll.mp4", "video/areyoupopular.mp4", "video/destinationearth.mp4"];
    video = document.getElementById("video");
    video.addEventListener("ended", nextVideo, false);

    video.src = playlist[position];
    video.onload();
    video.play();
}