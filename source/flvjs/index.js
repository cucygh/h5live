var flvjs = window.flvjs
if (flvjs.isSupported()) {
  var videoElement = document.getElementById('videoElement')
  var flvPlayer = flvjs.createPlayer({
    type: 'flv',
    url: 'http://127.0.0.1:7001/live/movie.flv'
  })
  flvPlayer.attachMediaElement(videoElement)
  flvPlayer.load()
  flvPlayer.play()
}
