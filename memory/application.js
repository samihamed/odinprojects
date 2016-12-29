$(document).ready(function(){
  createGame();
});

function createGame() {
  var numCards = 16;
  var height = 200;
  var width = 200;
  for (i = 0; i <= numCards; i++) {
  $('.box').css({'height':height+'px', 'width': width+'px'});
  $('#container').append("<div class='box'></div>");
  }
  $('.box').on('click', function() {
    $(this).slideToggle();
  })
};
