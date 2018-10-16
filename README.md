# Javascript Basics

This guide is intended for beginners in Javascript that open a code editor for the first time and for the sake of simplicity might lack of 100% accuracy and complete.

For Javascript References Check

Detailed List and Mini Tutorials for basic to advanced Javascript

https://www.w3schools.com/js/default.asp

If you can't find a solution online

https://stackoverflow.com

Check if you can / should use (Browser Compability)

https://caniuse.com/

## Comments

```
// double slash start a single line comment;
// it will not be interpreted by the computer
```
```
/*
  this is a multi line comment:

  In Javascript almost everything is stored in a variable.
  Think of a Variable as a container for storing things.
  A Variable can usualle by redefined
*/
```

## Strings
Wrapped in double quotes or single quotes

```
var string = "Welcome to this Tutorial!";
var string = 'Welcome to this Tutorial!';
```

We can also combine strings:
This is called "String Concatentation

```
var strong = "Welcome " + "to " + "this " + "Tutorial ";
```

## Number

```
var number = 3;
var anotherNumber = 5 / 2 * -3; // any math that results in a number; -7.5 in this case
```

## Bolean
A Bolean is either true or false (truthy or falsy)

```
var bolean = true; // sets a possitive value
var bolean = false; // changes to negative value
```

## Array
[] – Think of it as a list that can be extended
Items inside an array are wrapped inside [] and separated by commas
```
var array = ['apple', 'banana', 'broccoli'];
```
The items inside the array itself can be any type like:
strings, numbers, boleans or even arrays themselfs:

```
var array = ['string', 21, false, ['another', 'array'] ]
```
If we want to access any items inside the array, we can do that like this:
the index starts at 0, meaning you get the first item starting at 0, second with 1
this is confusing at first, but there is a reason for that
```
console.log(array[0]) // 'apple'
console.log(array[1]) // 'banana'
console.log(array[2]) // 'broccoli'
```


## Object 
In a Object any Value is stored in a "key", think of it as a variable inside the Object
Remember in the array we access listitems by number, in the object we use the key word

```
var object = {};

var object = { key: 'value'};
```

important: The key doesn't have to be a string, therefore doesn't have to wrapped in ''
```
object = { apple: 'red', banana: 'yellow' broccoli: 'green' }
```

A more human readable way of writing objects:
```
object = {
  apple: 'red',
  banana: 'yellow'
  broccoli: 'green'
}
```

We can now access the elements inside the object with dotconnotation:
```
console.log( object.apple );
console.log( object.banana );
console.log( object.broccoli );
```

Also our objects can contain anything and can have substructures:
```
var object = {
  array: ['this', 'is', 'an', 'array'],
  number: 352352,
  bolean: true,
  string: "another String :)",
  object: {
    or: 'even',
    an: 'object',
    itself: 'WOOW!'
  }
}
```

## Functions 
Functions are used for action, to do any task you want them to

```
var counter = 0;
```

Defining the function:

```
function increaseByOne(){
  counter = counter + 1;
}
```
Call the function:
```
increaseByOne(); // counter = 1
```

Call the function again:
```
increaseByOne(); // counter = 2
```


## If / Else Statements
If or if / else or if / elseif / else  Statements
We use Bolean, to decide what to do

Functions are me powerful if we can set some rules
```
var bolean = true;

if(bolean){
  // if the bolean is true, executed this code block
  // if the bolean is false, ignore everything in here
}
```
```
if(bolean){
  // if the bolean is true, execute this code
}else{
  // if the bolean is false, execute this code
}
```
```
var anotherBolean = false;

if(bolean){
  // if this bolean is true; executed this separat
  // if false, moveon to the elseif
}else if(anotherBolean){
  // if anotherBolean is true; executed this separat
  // if false, move on and execute the else code block
}else{

}
```

Bolean update: A Bolean doesn't have to be defined as true or false, it can also result in true or false
For example we can use OPERATORS to evaluate if something is false or true:
In Javascript we use = to define a variable, we use == to check if something is EQUAL

```
var bolean = 10000 == 3;  // false
var bolean = 2*3 == 6;    // true
```

Or we can use these <, >, <=, >=

```
var bolean = 10 > 1; // true
var bolean = 9 >= 3*3; // true
var bolean = -10 >= 10; // false
```
we can als reverse and check if something is NOT equal to something:
```
var bolean = 3 != 9; // true
```
Praxis example:
```
var doIhaveAnyCookiesLeft = 100 - 11*10;

if(doIhaveAnyCookiesLeft >= 0){
  // console.log('Give a way remaining cookies');
}else{
  // console.log('You owe cookies!');
}
```

## Loops
For Loops – We can automatically loop through each item of any array, without knowing how many items we are dealing with

If we have an array with 3 elements, our code inside the for loop will be executed 3 times
```
var array = ['contains',3,'items']
```

Our Iterator (i) will count our iteration:
```
for (var i = 0; i < array.length; i++) {
  console.log(i); // will log 0, then 1, then 3.
}
```

lets look at the first line:
1. the for keyword tells the program that we want to use a Loops
2. ```var i = 0;``` we are setting a variable and set it to ```0```. Thas is where we want to start at
3. we can get the lenght of an array like this array.lenght, in our case that will result in a value of ```2``` (because we start at 0!)
    ```i < array.lenght;``` we want our loop to stop once the Iterator reaches the number of the length of our array
    the danger of loops is, that they never stop (infinity loop) which can make your program crash,
    therefore we want to set the limit
4. ```i++``` is another writing ```for i = i + 1```; We basically increase i by once
5. Our Statement is:
      - i starts at ```0```
      - i should be smaller than the length of our array
      - if that is the case increase ```i```


Any Idea how we can log the values of each item instead logging the iteration of the array?
```
for (var i = 0; i < array.length; i++) {
  console.log(array[i]); // will log 'contains', then 3, then 'items'
}
```


# Javascript DOM Basics

DOM – Document Object Model

with the DOM we can access Elements from our HTML Document and manipulate them

we can get single Elements by Id
```
var element = document.getElementById('element');
```
or multiple Elements by Class
```
var elements = document.getElementsByClassName('elements');
```

NOTE: Single Elements are always easier to use
 Multiple Elements will be stored in a array, meaning most certainly you'll need to use a loop to mainpulate them


## CSS Manipulation

in CSS we define things like this:
```
.elements{
  height: 200px;
  width: 300px;
  background-color: red;
  …
  …
}
```

In the DOM we can access the styling of an HTML Element like this:
```
element.style;
```

this will set the elements color to red and overwrites predefined CSS styling
```
lement.style.color = 'red'; // this will set the elements color to red and overwrites predefined CSS styling
```
we can basically use the same styling names as defined in css, except in javascript we are useing "camelCase" for multiplewords instead of a hyphen, meaning
CSS Propert — background-color — becomes — backgroundColor :
```
element.style.backgroundColor = 'red';
element.style.backgroundColor = 'rgb(255, 0, 0)';
```

for multipl elements we have to use a loops
for iterating DOM Elements we can almost always use the same method
```
for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = 'red';
}
```
## Adding and Removing Classes

A more effective way instead of adding ,multiple stylings, could be adding and removing CSS classes, that have their styling defined already
Every HTML element can have unlimited classes, these are stored in element.classList
we can add: element.classList.add('newClass'); or remove: element.classList.remove('oldClass');

if we have a predefined class in css:
``` 
.red{
  color: red;
  background-color: red
}
``` 
we can add / remove them with javascript
``` 
element.classList.add('red');
element.classList.remove('red');
``` 

## Click, Mousevoer, etc. – Event Listener

we want to change the color of the element on Click

```
element.onclick = function(){
  element.classList.add('red');
}
```

or we can use an if/else statement "onmouseover" to
1. check if the elements already has class "red" – element.classList.contains("red");
2. if it has class red; remove it  – element.classList.remove("red");
3. else add class 'red'; – element.classList.add("red");

```
element.onmouseover = function(){
  if(element.classList.contains('red')){
    element.classList.remove("red");
  }else{
    element.classList.add("red");
  }
}
```