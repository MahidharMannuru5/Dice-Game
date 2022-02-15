
function RD()
{
var x=Math.floor(Math.random()*6+1);
var y=Math.floor(Math.random()*6+1);

var a="images/dice"+x+".png";

document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
var b="images/dice"+y+".png";
document.querySelectorAll("img")[1].setAttribute("src", b);
}
function RD2()
{
  var p=Math.floor(Math.random()*6+1);
  var q="images/dice"+p+".png";
  document.querySelectorAll("img")[2].setAttribute("src",q );
}
