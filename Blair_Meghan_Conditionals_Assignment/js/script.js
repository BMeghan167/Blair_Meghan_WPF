//Meghan Blair
//February 19, 2015
//Conditionals Assignment

var stockTotal = 12; //This is the variable I have set no matter how many purses each person buys
var sarahPurse = prompt("How many purses did Sarah purchase?"); //This will prompt the user to give an amount of purses that Sarah will buy
var sallyPurse = prompt("How many purses did Sally purchase?"); //This will prompt for an amount for Sally
var susanPurse = prompt("How many purses did Susan purchase?"); //This will prompt for an amount for Susan

//Below, a conditional statement to validate the prompt for Sarah
if(sarahPurse <= ""){
    console.log("You didn't tell me how many Sarah bought!");
}
if(sallyPurse <= ""){ //This conditional will validate the prompt for Sally
    console.log("You didn't tell me how many Sally bought!");
}
if(susanPurse <= ""){ //This conditional will validate the prompt for Susan
    console.log("You didn't tell me how many Susan bought!");
}

if(Number(sarahPurse) && Number(sallyPurse) <= stockTotal){ //This conditional will use a Logical Operator to use the values for Sarah and Sally to see if they are less than the given stock total
    console.log("Sarah and Sally will get their purse!");
}else if(Number(susanPurse) > stockTotal) { //this else if statement will check to see if the amount from susan is greater than the stock total
    console.log("Susan won't get her purse!");
}else{ //and this else is for the otherwise of sarah and sally getting too many purses
    console.log("Sorry you'll have to wait!");
}

//Now we will use a ternary conditional statement to find how how many purses Sarah, Sally, and Susan want total and if it is less than or equal to the stock total
var totalPurse;
 totalPurse = (Number(sarahPurse) + Number(sallyPurse) + Number(susanPurse) <= stockTotal) ? "Everyone will get their purses!" : "Oh no! You will have to wait for restocking!";


