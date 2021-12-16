var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
var divArray = document.getElementsByClassName('carousel__cell');

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
    rotateFn + '(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function () {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function () {
  selectedIndex++;
  rotateCarousel();
});

var cellsRange = document.querySelector('.cells-range');
cellsRange.addEventListener('change', changeCarousel);
cellsRange.addEventListener('input', changeCarousel);



function changeCarousel() {
  cellCount = cellsRange.value;
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    if (i < cellCount) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

var orientationRadios = document.querySelectorAll('input[name="orientation"]');
(function () {
  for (var i = 0; i < orientationRadios.length; i++) {
    var radio = orientationRadios[i];
    radio.addEventListener('change', onOrientationChange);
  }
})();

function onOrientationChange() {
  var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  isHorizontal = checkedRadio.value == 'horizontal';
  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  changeCarousel();
}
onOrientationChange();

var rotatedAngle = document.querySelector('.carousel').style.transform;
var visibleCell;
var rollButton = document.querySelector('.roll');


function randomRoll (){
  selectedIndex += Math.floor(Math.random() * 150);
  rotateCarousel();
};



/*function determineWinner() {
  let reducedRotatedAngle = rotatedAngle % 360;
  switch (reducedRotatedAngle) {
    case (reducedRotatedAngle >= 0 && reducedRotatedAngle < theta):
      visibleCell = document.getElementById('carousel__cell__1')
      break
    case (reducedRotatedAngle >= theta && reducedRotatedAngle < 2 * theta):
      visibleCell = document.getElementById('carousel__cell__2')
      break
    case (reducedRotatedAngle >= theta * 2 && reducedRotatedAngle < 3 * theta):
      visibleCell = document.getElementById('carousel__cell__3')
      break
    case (reducedRotatedAngle >= theta * 3 && reducedRotatedAngle < 4 * theta):
      visibleCell = document.getElementById('carousel__cell__4')
      break
    case (reducedRotatedAngle >= theta * 4 && reducedRotatedAngle < 5 * theta):
      visibleCell = document.getElementById('carousel__cell__5')
      break
    case (reducedRotatedAngle >= theta * 5 && reducedRotatedAngle < 6 * theta):
      visibleCell = document.getElementById('carousel__cell__6')
      break
    case (reducedRotatedAngle >= theta * 6 && reducedRotatedAngle < 7 * theta):
      visibleCell = document.getElementById('carousel__cell__7')
      break
    case (reducedRotatedAngle >= theta * 7 && reducedRotatedAngle < 8 * theta):
      visibleCell = document.getElementById('carousel__cell__8')
      break
    case (reducedRotatedAngle >= theta * 8 && reducedRotatedAngle < 9 * theta):
      visibleCell = document.getElementById('carousel__cell__9')
      break
    case (reducedRotatedAngle >= theta * 9 && reducedRotatedAngle < 10 * theta):
      visibleCell = document.getElementById('carousel__cell__10')
      break
    case (reducedRotatedAngle >= theta * 10 && reducedRotatedAngle < 11 * theta):
      visibleCell = document.getElementById('carousel__cell__11')
      break
    case (reducedRotatedAngle >= theta * 11 && reducedRotatedAngle < 12 * theta):
      visibleCell = document.getElementById('carousel__cell__12')
      break
    case (reducedRotatedAngle >= theta * 12 && reducedRotatedAngle < 13 * theta):
      visibleCell = document.getElementById('carousel__cell__13')
      break
    case (reducedRotatedAngle >= theta * 13 && reducedRotatedAngle < 14 * theta):
      visibleCell = document.getElementById('carousel__cell__14')
      break
    case (reducedRotatedAngle >= theta * 14 && reducedRotatedAngle < 15 * theta):
      visibleCell = document.getElementById('carousel__cell__15')
      break
  }
  console.log(visibleCell)

  
}*/
 


function determineWinnerDiv() {
  var determineIdArray = selectedIndex % cellCount;
  var winnerDiv = divArray[determineIdArray];
  var contentWinnerDiv = winnerDiv.textContent;
  var winnerContainer = document.getElementById('winner__container');
  var winnerDisplay = document.getElementById('winner__display');
  var element = document.createElement("p");
  var div = document.createElement("div");
  if (winnerDisplay){
    var winnerDisplayParent = winnerDisplay.parentNode;
    winnerDisplayParent.remove();
    div.innerHTML = "<div id='winner__display'><p> Felicitation " + contentWinnerDiv + " ! <br /> Tu es le Grand Gagnant de la Semaine!</p></div>";
    div.appendChild(element);
    document.getElementById('winner__container').appendChild(div);
  }
  else{
    div.innerHTML = "<div id='winner__display'><p> Felicitation " + contentWinnerDiv + " ! <br /> Tu es le Grand Gagnant de la Semaine!</p></div>";
    div.appendChild(element);
    document.getElementById('winner__container').appendChild(div);
  };
};


rollButton.addEventListener('click', function (){
  randomRoll();
  setTimeout(determineWinnerDiv, 1500);
});

