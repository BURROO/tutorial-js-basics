// Types in Javascript

// double slash start a single line comment;
// it will not be interpreted by the computer

/*
  this is a multi line comment:

  In Javascript almost everything is stored in a variable.
  Think of a Variable of a container storing things.
  A Variable can be overwriten
*/
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//  Type: string _ Wrapped in double quotes or single quotes
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var string = "Welcome to this Tutorial!";
var string = 'Welcome to this Tutorial!';
// We can also combine strings
var strong = "Welcome " + "to " + "this " + "Tutorial ";

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Type: Number
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var number = 3;
var anotherNumber = 5 / 2 * -3; // any math that results in a number; -7.5 in this case

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Type: Bolean (true / false)
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var bolean = true; // sets a possitive value
var bolean = false; // changes to negative value

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Type: Array[] – Think of it as a list that can be extended
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Items inside an array are wrapped inside [] and separated by commas
var array = ['apple', 'banana', 'broccoli'];
// The items inside the array itself can be any type like:
// strings, numbers, boleans or even arrays themselfs:
// var array = ['string', 21, false, ['another', 'array'] ]

// If we want to access any items inside the array, we can do that like this:
// the index starts at 0, meaning you get the first item starting at 0, second with 1
// this is confusing at first, but there is a reason for that
console.log(array[0]) // 'apple'
console.log(array[1]) // 'banana'
console.log(array[2]) // 'broccoli'


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Type: Objects {} – Think of it as a list that can be extended
// In a Object any Value is stored in a "key", think of it as a variable inside the Object
// Remember in the array we access listitems by number, in the object we use the key word
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

var object = {};

var object = { key: 'value'};
// important: The key doesn't have to be a string, therefore doesn't have to wrapped in ''
object = { apple: 'red', banana: 'yellow' broccoli: 'green' }

// A more human readable way of writing objects:
object = {
  apple: 'red',
  banana: 'yellow'
  broccoli: 'green'
}

// We can now access the elements inside the object with dotconnotation:
console.log( object.apple );
console.log( object.banana );
console.log( object.broccoli );

// Also our objects can contain anything and can have substructures:
/*
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
*/

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Type: function() {}
// Functions are used for action, to do any task you want them to
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

var counter = 0;

// defining the function
function increaseByOne(){
  counter = counter + 1;
}

// call the function;
increaseByOne(); // counter = 1

// call the function again;
increaseByOne(); // counter = 2


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// if or if / elseif / else or if / elseif / else Statements - Use Bolean, to decide what to do
// Functions are more powerful if we can set some rules
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

var bolean = true;

if(bolean){
  // if the bolean is true, executed this code block
  // if the bolean is false, ignore everything in here
}

if(bolean){
  // if the bolean is true, execute this code
}else{
  // if the bolean is false, execute this code
}

var anotherBolean = false;

if(bolean){
  // if this bolean is true; executed this separat
  // if false, moveon to the elseif
}else if(anotherBolean){
  // if anotherBolean is true; executed this separat
  // if false, move on and execute the else code block
}else{

}

// Bolean update: A Bolean doesn't have to be defined as true or false, it can also result in true or false
// For example we can use OPERATORS to evaluate if something is false or true:
// In Javascript we use = to define a variable, we use == to check if something is EQUAL

var bolean = 10000 == 3;  // false
var bolean = 2*3 == 6;    // true

// or we can use these <, >, <=, >= –– remember? ;)
var bolean = 10 > 1; // true
var bolean = 9 >= 3*3; // true
var bolean = -10 >= 10; // false

// we can als reverse and check if something is NOT equal to something:
var bolean = 3 != 9; // true

// Praxis example:
var doIhaveAnyCookiesLeft = 100 - 11*10;

if(doIhaveAnyCookiesLeft >= 0){
  // console.log('Give a way remaining cookies');
}else{
  // console.log('You owe cookies!');
}


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// For Loops – We can automatically loop through each item of any array,
// without knowing how many items we are dealing with
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// if we have an array with 3 elements, our code inside the for loop will be executed 3 times
var array = ['contains',3,'items']
// our Iterator (i) will count our iteration:

for (var i = 0; i < array.length; i++) {
  console.log(i); // will log 0, then 1, then 3.
}

/*
  lets look at the first line:
  1. the for keyword tells the program that we want to use a Loops
  2. var i = 0; we are setting a variable and set it to 0. Thas is where we want to start at
  3. we can get the lenght of an array like this array.lenght, in our case that will result in a value of 2 (because we start at 0!)
     i < array.lenght; we want our loop to stop once the Iterator reaches the number of the length of our array
     the danger of loops is, that they never stop (infinity loop) which can make your program crash,
     therefore we want to set the limit
  4. i++ is another writing for i = i + 1; We basically increase i by once
  5. Our Statement is:
       - i starts at 0
       - i should be smaller than the length of our array
       - if that is the case increase i
*/

// Any Idea how we can log the values of each item instead logging the iteration of the array?

for (var i = 0; i < array.length; i++) {
  console.log(array[i]); // will log 'contains', then 3, then 'items'
}
