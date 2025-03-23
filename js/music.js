
// 音乐文件列表
const songs = [
      "../music/haikuotiankong-00k.mp3",
      "../music/Orm-TrueLove.mp3",
      "../music/kunmeimikuozhai-zhouzhou.mp3"
];

// 获取 audio 元素
const audio = document.getElementById("background-music");

// 当前播放的音乐索引
let currentSongIndex = 0;

// 设置第一首音乐
audio.src = songs[currentSongIndex];

// 监听音乐播放结束事件
audio.addEventListener("ended", function () {
    // 切换到下一首音乐
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play(); // 播放下一首
});

// 开始播放
audio.play();