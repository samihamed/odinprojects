function rodMode(){
  var theRod = alert("Let's get it on!!!");
  if (theRod){
    var Rod = true;
  } else {
    var Rod = false;
  };
  var ofs = 0;
  var el = document.getElementById('imp');

  window.setInterval(function(){
    el.style.background = 'rgba(254,0,0,'+Math.abs(Math.sin(ofs))+')';
    ofs += 0.01;
}, 10);
}


function changeImage() {
  if (document.getElementById("kiabking").src == "kiabking.png")
  {
      document.getElementById("kiabking").src = "placeholder.png";
  } else {
      document.getElementById("kiabking").src = "kiabking.png";
  }
}

function chBackcolor(color) {
   document.body.style.background = color;
}

function lottery(){
  var lotteryResult = Math.floor(Math.random() * 11);

  switch (lotteryResult) {
    case 0:
    var winner = "Employee 1";
    break;
    case 1:
    var winner = "Employee 2";
    break;
    case 2:
    var winner = "Employee 3";
    break;
    case 3:
    var winner = "Employee 4";
    break;
    case 4:
    var winner = "Employee 5";
    break;
    case 5:
    var winner = "Employee 6";
    break;
    case 6:
    var winner = "Employee 7";
    break;
    case 7:
    var winner = "Employee 8";
    break;
    case 8:
    var winner = "Employee 9";
    break;
    case 9:
    var winner = "Employee 10";
    break;
    case 10:
    var winner = "Employee 11";
    break;
    default:
    var winner = "No winner";
  }
    var announceWinner = alert(winner + " won this month's lottery! Congrats!");
}
