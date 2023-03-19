document.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio();
    audio.src = '/music/music.mp3'; // 更改文件名稱
    audio.loop = true;
    audio.play();
  });