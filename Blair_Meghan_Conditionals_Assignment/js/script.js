//Meghan Blair
//February 19, 2015
//Conditionals Assignment

var stockTotal = 12;
var sarahPurse = prompt("How many purses did Sarah purchase?");
var sallyPurse = prompt("How many purses did Sally purchase?");
var susanPurse = prompt("How many purses did Susan purchase?");

if(sarahPurse <= ""){
    console.log("You didn't tell me how many Sarah bought!");
}
if(sallyPurse <= ""){
    console.log("You didn't tell me how many Sally bought!");
}
if(susanPurse <= ""){
    console.log("You didn't tell me how many Susan bought!");
}

//var totalPurse = sarahPurse + sallyPurse + susanPurse;

if(sarahPurse <= stockTotal){
    console.log("Sarah will get her purse!");
}else if(sallyPurse <= stockTotal) {
    console.log("Sally will get her purse!");
}else if(susanPurse <= stockTotal) {
    console.log("Susan will get her purse!");
}else{
    console.log("You have to wait for restocking!");
}