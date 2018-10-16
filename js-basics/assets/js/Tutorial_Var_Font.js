
var type = document.getElementById('type');
console.log(type);


function getMouseX(){
  return Math.floor(event.clientX / window.innerWidth * 100);
}

function getMouseY(){
  return Math.floor(event.clientY / window.innerHeight * 100);
}

function getMouseXY(){
  return Math.floor(event.clientY / window.innerHeight * 100) + Math.floor(event.clientY / window.innerHeight * 100) / 2 ;
}

// function getMouseYX(){
//   return Math.floor(window.innerHeight / event.clientY* 100);
// }

function getRandomValue(){
  return Math.floor(Math.random() * 100);
}

var slanted = false;

function getSwitch(){
  if(slanted){
    console.log(slanted)
    slanted = false;
    type.style.color = 'white';
    document.body.style.backgroundColor = 'black';
    return 0;
  }else{
    console.log(slanted)
    slanted = true;
    type.style.color = 'black';
    document.body.style.backgroundColor = 'white';
    return 100;
  }
}


// we define our settings for our Font ahead
// we want to be able to access them from anywhere and update them

var fontSettings = {
  wght: 0,
  SRIF: 0,
  EGYP: 0,
  slnt: 0
}

function handleFontVariationSettings(){
  fontSettings.wght = getMouseX();
  fontSettings.SRIF = getMouseY();
  fontSettings.EGYP = getMouseXY();
  fontSettings.slnt = getMouseXY();
  // fontSettings.EGYP = getRandomValue();


  type.style.fontVariationSettings = `"wght" ${fontSettings.wght}, "SRIF" ${fontSettings.SRIF}, "EGYP" ${fontSettings.EGYP}, "slnt" ${fontSettings.slnt}`;
}


document.addEventListener('mousemove', function(){
  handleFontVariationSettings();
});

// type.addEventListener('mouseenter', function(){
//   // fontSettings.EGYP = getRandomValue();
//   // fontSettings.slnt = getRandomValue();
//   fontSettings.slnt = getSwitch();
// });
