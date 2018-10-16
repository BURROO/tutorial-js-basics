var frames = document.querySelectorAll('#container img');

window.onmousemove = function(){
  // remove the visible class from previous frames
  // 1. get element by searching for img with the visible class
  var previousFrame = document.querySelector('#container img.visible');
  // 2. remove .visible class
  // to avoid an error on the first iteration, we have to add an if statement to check if the element exists
  if(previousFrame){
    previousFrame.classList.remove('visible');
  }
  // 3. Set a variable that gets the calculated iteration
  var iteration = Math.floor(event.clientX / window.innerWidth * 28)
  // 4. Use the iteration to select the right element within the array
  frames[iteration].classList.add('visible');

}
