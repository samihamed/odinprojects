$(document).ready(function(){
  countVoucher();
});

var value = 55;

function countVoucher(){
  $('.store').on('click', function(){
    value -= 5;
    alert("Merry Christmas! Du bekommst einen " + value + " Gutschein um das Wohnzimmer nach deinen Wünschen einzurichten!");
  })

}
