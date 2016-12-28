$(document).ready(function(){
  startGrid();
});

var userInput = 10;
var rainbow = false;
var fade = false;

function startGrid(){
var numBlocks = userInput * userInput;
var boxDimension = 800/userInput;
function createGrid(numBlocks) {
  $('.container').find('.box').remove();
  if(userInput <= 25){
  for (i = 0; i <= numBlocks; i++) {
    $('.box').css({'width': boxDimension + 'px', 'height': boxDimension + 'px'});
    $('.container').append("<div class='box'></div>");
  }}
  else {
    alert(userInput + ' is too big. Here is 10*10 instead');
    userInput = 10;
    startGrid();
  }};
createGrid(numBlocks);
$('.header').find('.count').text(userInput + ' * ' + userInput);
$('.box').on('mouseenter', function(){
  $(this).css({'background-color': 'black'})
});
};

function resetGrid(){
  $('.container').find('.box').css({'background-color': 'white'});
};

function newGrid(){
  userInput = prompt('Pick a number between 1 and 25', 'please enter number');
  startGrid();
};

function rainbowMode() {
  if (rainbow === false){
    rainbow = true;
    $('.box').on('mouseenter', function(){
      $(this).css({'background-color': '#'+Math.floor(Math.random()*16777215).toString(16)})
    });
  }
  else if (rainbow === true){
    rainbow = false;
    $('.box').on('mouseenter', function(){
      $(this).css({'background-color': 'black'})
    });
  }
  else {
    alert('sorry');
  }
};

function fadeMode() {
  if (fade === false) {
    fade = true;
    $('.box').hover(function() {
      $(this).css({'background-color': 'black'});
    }, function() {
      $(this).fadeTo('fast', 0.5, function(){
        $(this).css({'background-color': 'white'});
      });
    });
  }
  else if (fade === true){
    fade = false;
    $('.container').find('.box').on('mouseleave', function(){
      $(this).css({'background-color': 'black'});
    });
  }
  else {
      alert('sorry');
  }
};
