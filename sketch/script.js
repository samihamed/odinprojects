$(document).ready(function(){
  startGrid();
});

var userInput = 10;

function startGrid(){
var numBlocks = userInput * userInput;
var boxDimension = 800/userInput;
function createGrid(numBlocks) {
  $('.container').find('.box').remove();
  if(userInput <= 50){
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
$('.box').on('mouseenter', function(){
  $(this).css({'background-color': 'black'})
});
$('.header').find('.count').text(userInput + ' * ' + userInput);
};

function resetGrid(){
  $('.container').find('.box').css({'background-color': 'white'});
};

function newGrid(){
  userInput = prompt('Pick a number between 1 and 25', 'please enter number');
  startGrid();
};
