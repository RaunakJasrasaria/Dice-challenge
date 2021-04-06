var randomnumber1 = Math.random();
var randomnumber2 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6) + 1;
randomnumber2 = Math.floor(randomnumber2 * 6) + 1;

var randomDice1 = "images/dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src", randomDice1);

var randomDice2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "Player1 wins";
}else if (randomnumber1<randomnumber2) {
  document.querySelector("h1").innerHTML = "Player2 wins";
}else{
  document.querySelector("h1").innerHTML = "Draw";
}
