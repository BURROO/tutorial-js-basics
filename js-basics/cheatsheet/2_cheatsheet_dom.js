// DOM – Document Object Model

// with the DOM we can access Elements from our HTML Document and manipulate them

// we can get single Elements by Id
var element = document.getElementById('element');

// or multiple Elements by Class
var elements = document.getElementsByClassName('elements');

// NOTE: Single Elements are always easier to use
// Multiple Elements will be stored in a array, meaning most certainly you'll need to use a loop to mainpulate them


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//  CSS Manipulation
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

/*
in CSS we define things like this:

.elements{
  height: 200px;
  width: 300px;
  background-color: red;
  …
  …
}
*/

// In the DOM we can access the styling of an HTML Element like this:
element.style;

element.style.color = 'red'; // this will set the elements color to red and overwrites predefined CSS styling

// we can basically use the same styling names as defined in css, except in javascript we are useing "camelCase" for multiplewords instead of a hyphen, meaning
// CSS Propert — background-color — becomes — backgroundColor :
element.style.backgroundColor = 'red';
element.style.backgroundColor = 'rgb(255, 0, 0)';

// for multipl elements we have to use a loops
// for iterating DOM Elements we can almost always use the same method
for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = 'red';
}

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//  Adding and Removing Classes
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// A more effective way instead of adding ,multiple stylings, could be adding and removing CSS classes, that have their styling defined already
// Every HTML element can have unlimited classes, these are stored in element.classList
// we can add: element.classList.add('newClass'); or remove: element.classList.remove('oldClass');

// if we have a predefined class in css:
/*
  .red{
    color: red;
    background-color: red
  }
*/

element.classList.add('red');
element.classList.remove('red');

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//  Click, Mousevoer, etc. – Event Listener
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// we want to change the color of the element on Click

element.onclick = function(){
  element.classList.add('red');
}

// or we can use an if/else statement "onmouseover" to
// 1. check if the elements already has class "red" – element.classList.contains("red");
// 2. if it has class red; remove it  – element.classList.remove("red");
// 3. else add class 'red'; – element.classList.add("red");

element.onmouseover = function(){
  if(element.classList.contains('red')){
    element.classList.remove("red");
  }else{
    element.classList.add("red");
  }
}
