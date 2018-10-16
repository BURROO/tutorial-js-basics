var video = document.querySelector('#container video');

window.onmousemove = function(){
  var position = video.duration / window.innerWidth * event.clientX;
  console.log(Math.floor(position * 1000000) / 1000000)
  // video.currentTime = Math.floor(position);
  video.currentTime = Math.floor(position * 1000000) / 1000000;
  // video.currentTime = position;
  // console.log(video.currentTime);
}

window.addEventListener('scroll', function(){
  // var position = video.duration / document.body.offsetHeight * document.body.scrollTop;
    var position = video.duration / document.body.offsetHeight * pageYOffset;
  video.currentTime = position;
  // video.currentTime = Math.floor(position);
  console.log(video.currentTime);
});





window.onclick = function(){
  video.play()
  // setInterval(
  //   function(){
  //     // console.log(video.currentTime);
  //   },
  //   200
  // )
}

var videoDuration = video.duration;

// setInterval(
//   function(){
//     video.currentTime = videoDuration / document.body.offsetHeight * pageYOffset;
//   }, 20
// )
