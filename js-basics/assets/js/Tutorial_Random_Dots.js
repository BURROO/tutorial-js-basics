
var dots = document.querySelectorAll('.dots');

// Calculate Position
function calculateRandomPosition(element){

  var randomWidth  = Math.random() * 100;
  var randomHeight  = Math.random() * 100;

  element.style.left  = randomWidth + "%";
  element.style.top   = randomHeight + "%";
}

// Calculate Color
function calculateRandomColor(element){

  var redValue    = Math.random() * 255;
  var greenValue  = Math.random() * 255;
  var blueValue   = Math.random() * 255;

  element.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
  document.body.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}

// Calculate Size
function calculateRandomSize(element){
  var scaleFactor    = Math.random() * 20;
  element.style.transform = `scale(${scaleFactor}`;
}

// This event listens to any click within our document
// The Syntaxt for that is document.addEventListener('click', function(){ … });
document.addEventListener('mouseover', function (e) {
  // inside the function body we tell the program what to do
  // if the element we are clicking on has the class "dots" we trigger our functions on that target
	if (e.target.matches('.dots')) {
    calculateRandomPosition(e.target);
    calculateRandomColor(e.target);
    calculateRandomSize(e.target);
	}
});


//  initial randoms of dots, when document is loaded:
for (var i = 0; i < dots.length; i++) {
  calculateRandomPosition(dots[i]);
  calculateRandomColor(dots[i]);
  calculateRandomSize(dots[i]);
}
