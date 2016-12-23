$(document).ready(function(){
  startGrid();
});

var userInput = 10;

function newGrid(){
  userInput = prompt('Pick a number between 1 and 25', 'please enter number');
  startGrid();
};

function startGrid(){
var numBlocks = userInput * userInput;
function createGrid(numBlocks) {
  $('.container').find('.box').remove();
  if(userInput <= 25){
  for (i = 0; i <= numBlocks; i++) {
    var boxDimension = 800/userInput;
    $('.box').css({'width': boxDimension + 'px', 'height': boxDimension + 'px'}).on('mouseenter', function(){
      $(this).css({'background-color': 'black'});
    });
    $('.container').append("<div class='box'></div>");
  }}
  else {
    alert(userInput + ' is too big. Here is 10*10 instead');
    userInput = 10;
    numBlocks = userInput * userInput;
    createGrid(numBlocks);
  }};
createGrid(numBlocks);
};

function resetGrid(){
  $('.container').find('.box').css({'background-color': 'white'});
};
