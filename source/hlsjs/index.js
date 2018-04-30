var Hls = window.Hls
var video = document.querySelector('video')
var btn = document.querySelector('.btn')
var player = document.querySelector('.player')
// var url = 'http://127.0.0.1:7002/live/movie.m3u8'
var url = 'http://live.streamingfast.net/osmflivech4.m3u8'
if (Hls.isSupported()) {
  var hls = new Hls()
  hls.loadSource(url)
  hls.attachMedia(video)
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    // video.play()
  })
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = url
  video.addEventListener('canplay', function () {
    // video.play()
  })
}

btn.addEventListener('click', function () {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
})

video.addEventListener('click', function () {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
})

video.addEventListener('play', function () {
  player.className = 'player'
})

video.addEventListener('pause', function () {
  player.className = 'player pause'
})
