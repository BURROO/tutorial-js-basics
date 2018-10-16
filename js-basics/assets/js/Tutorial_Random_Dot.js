
// Defining Variables (anything can be stored in a variable)
// Defining Functions (a function should be commited to execute a specific task)

// Our Element is now stored in the var "dot" and accessable anywhere
var dot = document.getElementById('dot');

// calculate a random position for our dot
function calculateRandomPosition(){
  // Calculate a random number between zero and 100
  var randomLeft  = Math.random() * 100;
  var randomTop = Math.random() * 100;
  // setting the position of the dot with left and top
  // 1. with dot.style we can access CSS properties
  // 2. We have to add the "%" sign, otherwise the size gets calculated in pixel
  dot.style.left  = randomLeft + "%";
  dot.style.top   = randomTop + "%";

  // An alternative way of doing that is this:
  // dot.style.left  = `${randomWidth}%`;
  // dot.style.top   = `${randomHeight}%`;
}

function calculateRandomColor(){
  // RGB consists of 3 values between 0 and 255
  // we are setting random values from 0 - 255 for red, green and yellow
  var redValue    = Math.random() * 255;
  var greenValue  = Math.random() * 255;
  var blueValue   = Math.random() * 255;

  // CSS Syntax for a rgb color (in this case red) looks like – background-color: rgb(255, 0, 0);
  // to use our randomValues we have to set it up like this:
  dot.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
  // dot.style.backgroundColor = "rgb("+ redValue + ", "+ greenValue + ", "+ blueValue + " )";
}

function calculateRandomSize(){
  // RGB consists of 3 values between 0 and 255
  // we allow the circle to get up to five times the original size
  var scaleFactor    = Math.random() * 20;

  // CSS Syntax for scaling (in this case twice the original size) looks like this;  transform: scale(2);
  dot.style.transform = `scale(${scaleFactor}`;
}

// We can add our function to any events, "click", "mouseover", "mouseleave", …

dot.addEventListener('mouseover', function(){
  calculateRandomPosition();
  calculateRandomColor();
  calculateRandomSize();
});
