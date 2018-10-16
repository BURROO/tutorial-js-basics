var frames = document.querySelectorAll('#container img');

window.onmousemove = function(){
  var previousFrame = document.querySelector('#container img.visible');
  if(previousFrame) previousFrame.classList.remove('visible');
  var iteration = Math.floor(event.clientX / window.innerWidth * frames.length)
  frames[iteration].classList.add('visible');
}
