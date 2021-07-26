'use strict'

// Global Variables

let counter = 0;
const ulElm = document.getElementById('number_clicks');
const contentPicsElm = document.getElementById('pic_content');
const firstPicElement = document.getElementById('firstPic');
const secondPicElement = document.getElementById('secondPic');
const thirdPicElement = document.getElementById('thirdPic');
const firstPicH2Elm = document.getElementById('firstPicH2')
const secondPicH2Elm = document.getElementById('secondPicH2')
const thirdPicH2Elm = document.getElementById('thirdPicH2')

let firstPic = null;
let secondPic = null;
let thirdPic = null;

//constructor function
function Image(name, imgPath){
  this.name = name;
  this.imgPath = imgPath;
  this.clicks = 0;

  Image.allImages.push(this);
}

Image.allImages = [];

//prototype method
Image.prototype.renderImage = function(img, h2){
  img.src = this.imgPath;
  h2.textContent = this.name;
}

//global functions
function getThreeImages(){
  let leftPic = Math.floor(Math.random() * Image.allImages);
  firstPic = Image.allImages[leftPic];
  let middlePic = Math.floor(Math.random() * Image.allImages);
  secondPic = Image.allImages[middlePic];
  let rightPic = Math.floor(Math.random() * Image.allImages);
  thirdPic = Image.allImages[rightPic];
  while (rightPic === null || leftPic === middlePic || middlePic === rightPic){
    let leftPic = Math.floor(Math.random() * Image.allImages);
    firstPic = Image.allImages[leftPic];
  }
}

function renderImage(){
  firstPic.renderImage(firstPicElement, firstPicH2Elm);
  secondPic.renderImage(secondPicElement, secondPicH2Elm);
  thirdPic.renderImage(thirdPicElement, thirdPicH2Elm);
}

function renderCount(){
  ulElm.textContent = '';
  for (let img of Image.allImages){
      let liElm = document.createElement('li');
      liElm.textContent = `${img.name}: ${img.clicks}`;
      ulElm.appendChild(liElm);
  }
}

function handleClick(e){
  let imageClicked = e.target.id;
  if(imageClicked === 'firstPic' || imageClicked === 'secondPic' || imageClicked === 'thridPic'){
    counter++;
    if(imageClicked === 'firstPic'){
    firstPic.clicks++;
  }
    if(imageClicked === 'secondPic'){
    secondPic.clicks++;
  } 
    if(imageClicked === 'thridPic'){
    thridPic.clicks++;
  }
    getThreeImages();
    renderImage();
    renderCount();
}
}
if(counter == 10){
  contentPicsElm.removeEventLister('click', handleClick);
}
//listener

contentPicsElm.addEventListener('click', handleClick);


//call functions
new Image('Banana', './assets/banana.jpg');
new Image('Bathroom', './assets/bathroom.jpg');
new Image('boots', './assets/boots.jpg');
new Image('breakfast', './assets/breakfast.jpg');
new Image('bubblegum', './assets/bubblegum.jpg');
new Image('chair', './assets/chair.jpg');
new Image('cthulhu', './assets/cthulhu.jpg');
new Image('dog-duck', './assets/dog-duck.jpg');