
function RD()
{
var x=Math.floor(Math.random()*6+1);
var y=Math.floor(Math.random()*6+1);

var a="C:\Users\LENOVO\OneDrive\Desktop\Dice\Dice-Game\images\dice"+x+".png";

document.querySelectorAll("img")[0].setAttribute("src", "C:/Users/LENOVO/OneDrive/Desktop/Dice/Dice-Game/images/dice1.png");
var b="C:/Users/LENOVO/OneDrive/Desktop/Dice/Dice-Game/images/dice"+y+".png";
document.querySelectorAll("img")[1].setAttribute("src", b);
}
function RD2()
{
  var p=Math.floor(Math.random()*6+1);
  var q="C:/Users/LENOVO/OneDrive/Desktop/Dice/Dice-Game/images/dice"+p+".png";
  document.querySelectorAll("img")[2].setAttribute("src",q );
}
