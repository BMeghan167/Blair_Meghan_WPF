//Meghan Blair
//February 12, 2015
//Expressions Assignment

var taffy = [413, 297, 541];

var totalTaffy = taffy[0] + taffy[1] + taffy[2];

var taffyBought = prompt("How much taffy would you like to buy on Monday?");
var taffyBought2 = prompt("How much taffy would you like to buy on Wednesday?");
var taffyBought3 = prompt("How much taffy would you like to buy on Friday?");
console.log(taffyBought);
console.log(taffyBought2);
console.log(taffyBought3);

var yourTotal = taffyBought + taffyBought2 + taffyBought3;

var totalEnd = totalTaffy - yourTotal;

console.log(totalTaffy);
console.log(totalEnd);
console.log("The total amount of taffy at opening is" + " " + totalTaffy + "." +
"After your three purchases the total is" + " " + totalEnd + ".");

/* I changed 413 to 100 and got an answers of . So this will work for any other values. */

