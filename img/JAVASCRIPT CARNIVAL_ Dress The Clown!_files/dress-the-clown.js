  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// console.log("Dress The Clown!")

// set variables
const clownHead = document.getElementById('head')
const clownBody = document.getElementById('body')
const clownShoes = document.getElementById('shoes')

let clownCloth = [clownHead, clownBody, clownShoes]

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

let clothIndex = 0
let dressingIndex = 0

let clothWord = 'head'

let dressingPartDiv = document.getElementById('dressingPart')

// change dressing part
function changeDressingPart () {
  switch (dressingIndex) {
    case 0:
      clothIndex = headIndex
      clothWord = 'head'
      displayDressingPart()
      break;
    case 1:
      clothIndex = bodyIndex
      clothWord = 'body'
      displayDressingPart()
      break;
    case 2:
      clothIndex = shoesIndex
      clothWord = 'shoes'
      displayDressingPart()
      break;
  }
}

function storeDressingIndex () {
  switch (dressingIndex) {
    case 0:
      headIndex = clothIndex
      break;
    case 1:
      bodyIndex = clothIndex
       break;
    case 2:
      shoesIndex = clothIndex
      break;
  }
}

// change clown cloth
function changeClownCloth (x) {
  x = dressingIndex
  clownCloth.crossOrigin = 'anonymous'
  let clothSrc = `http://127.0.0.1:5500/dress-the-clown/images/${clothWord}${clothIndex}.png`
  clownCloth[x].src = clothSrc
}

// cloth index range
function reduceClothIndex () {
  if (clothIndex === 0) {
    clothIndex = 5
  } else {
    clothIndex = clothIndex - 1
  }     
}

function increaseClothIndex () {
  if (clothIndex === 5) {
    clothIndex = 0
  } else {
    clothIndex = clothIndex + 1
  }    
}

// arrow keys set up (right ==> head; )
document.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'ArrowLeft':
      // toggle left for clothing
      reduceClothIndex()
      changeClownCloth()
      storeDressingIndex()
      break;
    case 'ArrowUp':
      // toggle increase for dressing parts
      if (dressingIndex === 2) {
        dressingIndex = 0
      } else {
        dressingIndex = dressingIndex + 1
      }    
      changeDressingPart()
      break;
    case 'ArrowRight':
      //toggle right for clothing
      increaseClothIndex()
      changeClownCloth()
      storeDressingIndex()
      // clownHead.onload = drawImages;
      // clownBody.onload = drawImages;
      // clownShoes.onload = drawImages;
      
      break;
    case 'ArrowDown':
      // toggle increase for dressing parts
      if (dressingIndex === 0) {
        dressingIndex = 2
      } else {
        dressingIndex = dressingIndex - 1
      }    
      changeDressingPart()
      break;
  }
})

// show player which part they're dressing
dressingPartDiv.innerHTML = 'Use the up and down arrow key to decide which part you want to dress!'
function displayDressingPart () {
  dressingPartDiv.innerHTML = `You're dressing the ${clothWord}.`
}

// capture screen

let canvas = document.querySelector('canvas');
canvas.width = 400;
canvas.height = 650;

let c = canvas.getContext('2d');

function drawImages() {
  let x = c.drawImage(this, 0, 0, this.width, this.height);
}

c.clearRect(0, 0, canvas.width, canvas.height);
clownHead.onload = drawImages;
clownBody.onload = drawImages;
clownShoes.onload = drawImages;


document.getElementById("saveClown").addEventListener("click", function() {

    var anchorTag = document.createElement("a");

    document.body.appendChild(anchorTag);
    anchorTag.download = "filename.jpg";
    anchorTag.href = canvas.toDataURL();
    anchorTag.target = '_blank';
    anchorTag.click();
})
