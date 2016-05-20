" use strict ";

var display = document.getElementById("display");

function oneToTen (){
  var toPrint = "oneToTen()\n***Output***\n";
  for (var i = 0; i < 11; i++) {
    toPrint += (i + "\n");
  }
  display.innerHTML = (toPrint);
}
function oddNumbers (){
  var toPrint = "oddNumbers()\n***Output***\n";
  for (var i = 1; i < 20; i++) {
if(i%2!=0){
    toPrint += (i + "\n");
}
  }
  display.innerHTML = (toPrint);
}
function squares (){
  var toPrint = "squares()\n***Output***\n";
  for (var i = 1; i < 11; i++) {
    toPrint += ((i*i) + "\n");
  }
  display.innerHTML = (toPrint);
}
function random4 (){
  var toPrint = "random4()\n***Output***\n";
  for (var i = 0; i < 4; i++) {
    toPrint += (Math.floor(Math.random(10)*(100-1)+1) + "\n");
  }
  display.innerHTML = (toPrint);
}
function evenNumbers (n){
  var toPrint = "even()\n***Output***\n";
  for (var i = 0; i < n; i++) {
if(i%2==0){
    toPrint += i + "\n";
  }
}
  display.innerHTML = (toPrint);
}
function powers (n){
  var toPrint = "even()\n***Output***\n";
  for (var i = 1; i <= n; i++) {
    toPrint += Math.pow(2,i) + "\n";
}
  display.innerHTML = (toPrint);
}
function areWeThereYet(){
while (true) {
  display.innerHTML = ("Arewethereyet");
  var answer = prompt("Arewethereyet");
  if (answer == "yes") {
    display.innerHTML = ("Yes");
    break;
  }
}
}
function triangle(){
  var toPrint = "even()\n***Output***\n";
  for (var i = 1; i < 6; i++) {

    for (var j=1; j<=i; j++) {
     toPrint += ("*");
   }
  toPrint += "\n";
  }
  display.innerHTML = toPrint;
}
function tableSquare(){
  var toPrint = "even()\n***Output***\n";
for (var i = 1; i < 5; i++) {
  toPrint += "|";
  for (var j = 1; j < 5; j++) {
    toPrint += (i*j)+"|";
  }
  toPrint += "\n";
}
display.innerHTML = toPrint;
}
function tableSquares(n){
  var toPrint = "even()\n***Output***\n";
for (var i = 1; i <= n; i++) {
  toPrint += "|";
  for (var j = 1; j <= n; j++) {
    toPrint += (i*j)+"|";
  }
  toPrint += "\n";
}
display.innerHTML = toPrint;
}
