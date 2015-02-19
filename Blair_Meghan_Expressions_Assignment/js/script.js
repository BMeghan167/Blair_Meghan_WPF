//Meghan Blair
//February 12, 2015
//Expressions Assignment

var taffy = [413, 297, 541]; //created an array to make a total amount of candy

var totalTaffy = taffy[0] + taffy[1] + taffy[2]; //added each number from the array to get a total

var taffyBought = prompt("How much taffy would you like to buy on Monday?"); //prompts the user to give an amount for the first given
var taffyBought2 = prompt("How much taffy would you like to buy on Wednesday?"); //prompts the user to give a second amount
var taffyBought3 = prompt("How much taffy would you like to buy on Friday?"); //prompts the user to give a final amount
console.log(taffyBought); //prints the amount given by the user
console.log(taffyBought2); //prints the second amount given by the user
console.log(taffyBought3); //prints the third amount given by the user

var totalEnd = totalTaffy - (Number(taffyBought) + Number(taffyBought2) + Number(taffyBought3)); //gives you a final total by adding the amounts given by the user and then subtracting them from the beginning total of taffy

console.log(totalTaffy); //prints the total amount of taffy
console.log(totalEnd); //prints the final total after taking away the amounts given by the user
console.log("The total amount of taffy at opening is" + " " + totalTaffy + "." + " " +
"After your three purchases the total is" + " " + totalEnd + "."); //prints a clarified phrase explaining the totals

/* I changed 413 to 100 and got a totalTaffy of 938. So this will work for any other values. */

