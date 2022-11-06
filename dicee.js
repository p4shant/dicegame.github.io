var dice1 = Math.floor(Math.random()*7);
var dice1img = "images/dice" + dice1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" ,dice1img);

var dice2 = Math.floor(Math.random()*7);
var dice2img = "images/dice" + dice2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" ,dice2img);


if(dice1>dice2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(dice2>dice1){
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
