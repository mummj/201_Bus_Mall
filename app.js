'use strict'

// Global Variables

const sectionElm = document.getElementById('link');
const ulElm = document.getElementById('number_clicks');
const contentPicsElm = document.getElementById('pic_content');
const firstPicElement = document.getElementById('firstPic');
const secondPicElement = document.getElementById('secondPic');
const thirdPicElement = document.getElementById('thirdPic');
const firstPicH2Elm = document.getElementById('firstPicH2');
const secondPicH2Elm = document.getElementById('secondPicH2');
const thirdPicH2Elm = document.getElementById('thirdPicH2');

let counter = 0;


let firstPic = null;
let secondPic = null;
let thirdPic = null;

//constructor function
function Image(name, imgPath){
  this.name = name;
  this.imgPath = imgPath;
}

Image.allImages = [];

//prototype method
Image.prototype.renderImage = function(img, h2){
  img.src = this.imgPath;
  h2.textContent = this.name;
  this.clicks = 0;
  this.views++;
}

//global functions
function getThreeImages(){
  const cantUse = [firstPic, secondPic, thirdPic];
    while(cantUse.includes(firstPic)){
      let picOne = Math.floor(Math.random() * Image.allImages.length);
      firstPic = Image.allImages[picOne];
    }
      cantUse.push[firstPic]
    while(cantUse.includes(secondPic)){
      let picTwo = Math.floor(Math.random() * Image.allImages.length);
      secondPic = Image.allImages[picTwo];
    }
      cantUse.push[secondPic];
    while(cantUse.includes(thirdPic)){
      let picThree = Math.floor(Math.random() * Image.allImages.length);
      thirdPic = Image.allImages[picThree]; 
    }
    cantUse.push[thirdPic];
}

function renderImage(){
  firstPic.renderImage(firstPicElement, firstPicH2Elm);
  secondPic.renderImage(secondPicElement, secondPicH2Elm);
  thirdPic.renderImage(thirdPicElement, thirdPicH2Elm);
}

function makeItemChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  let imageNames = [];
  let imageClicks = [];

  for(let image of Image.allImages){
    imageNames.push(image.name);
    imageClicks.push(image.clicks);
  }

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: imageNames,
        datasets: [{
            label: '# of Votes',
            data: imageClicks,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

function remove(){
  document.getElementById('showResults').style.display = 'none';
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
  const imageClicked = e.target.id;
  if(imageClicked === 'firstPic' || imageClicked === 'secondPic' || imageClicked === 'thirdPic'){
    counter++;
      if(imageClicked === 'firstPic'){
        firstPic.clicks++;
    }
      if(imageClicked === 'secondPic'){
        secondPic.clicks++;
    } 
      if(imageClicked === 'thirdPic'){
        thirdPic.clicks++;
    }
    getThreeImages();
    renderImage();
  }
  if(counter === 10){
    contentPicsElm.removeEventListener('click', handleClick);
    let h3Elm = document.createElement('h3');
    sectionElm.appendChild(h3Elm);
    let button = document.createElement('button');
    button.textContent = 'Show Results';
    button.id = 'showResults';
    h3Elm.appendChild(button);
    button.onclick = results;
    function results(){
    renderCount();
    makeItemChart();
    remove();
    }
    }
} 

//listener

contentPicsElm.addEventListener('click', handleClick);


//call functions
Image.allImages.push(new Image('Banana', './assets/banana.jpg'));
Image.allImages.push(new Image('Bathroom', './assets/bathroom.jpg'));
Image.allImages.push(new Image('Boots', './assets/boots.jpg'));
Image.allImages.push(new Image('Breakfast', './assets/breakfast.jpg'));
Image.allImages.push(new Image('Bubblegum', './assets/bubblegum.jpg'));
Image.allImages.push(new Image('Chair', './assets/chair.jpg'));
Image.allImages.push(new Image('Cthulhu', './assets/cthulhu.jpg'));
Image.allImages.push(new Image('Dog-duck', './assets/dog-duck.jpg'));
Image.allImages.push(new Image('Dragon', './assets/dragon.jpg'));
Image.allImages.push(new Image('Pen', './assets/pen.jpg'));
Image.allImages.push(new Image('Pet-sweep', './assets/pet-sweep.jpg'));
Image.allImages.push(new Image('Scissors', './assets/scissors.jpg'));
Image.allImages.push(new Image('Shark', './assets/shark.jpg'));
Image.allImages.push(new Image('Sweep', './assets/sweep.png'));
Image.allImages.push(new Image('Tauntaun', './assets/tauntaun.jpg'));
Image.allImages.push(new Image('Unicorn', './assets/unicorn.jpg'));
Image.allImages.push(new Image('Water-can', './assets/water-can.jpg'));
Image.allImages.push(new Image('Wine-glass', './assets/wine-glass.jpg'));

getThreeImages();
renderImage();
