//Meghan Blair
//March 19,2015
//Conditionals Assignment

var conBudget = 400; //This will set a variable for your convention budget at $400
var nextPaycheck = 300; //This will set a variable for your next paycheck at $300 that is also of use to you for the convention
var rentPaid = true; //This is a boolean that will add to a conditional below

var conTicket = prompt("How much is your ticket?"); //variable set by asking the user how much their convention ticket is
var yourCosplay = prompt("How much will you spend on your cosplay?"); //asking the user how much they are spending on their costume and setting their answer to a variable
var yourSpending = prompt("How much do you want to spend at Colossalcon?"); //this variable is set when the user is asked how much they are going to spend at the actual convention

//this else if statement will validate the first two prompts. I couldn't figure out how to do all three in one statment so I will try to figure that out next week
if(conTicket === ""){
    prompt("You forgot to tell me how much your ticket is!"); //this will be the new prompt for finding out the price for the ticket
}else if(yourCosplay === ""){
    prompt("You forgot to tell me how much your cosplay is going to cost!"); //this will be the new prompt for finding out how much the cosplay will cost
}else{
    console.log("Keep going!"); //this is the "otherwise" if the other two aren't blank
}

//this if statement is the second one used to validate the third prompt
if(yourSpending === ""){
    prompt("Your forgot to tell me how much you're spending at the convention!"); //this is the new prompt asking how much the user will spend at the con
}else{
    console.log("You're doing good!"); //the otherwise is the spending amount isn't blank
}

//this ternary statement will use a logical operator of && to tell whether the statement is true or false
(Number(conTicket) + Number(yourCosplay) + Number(yourSpending) <= conBudget + nextPaycheck && rentPaid) ? console.log("Everything is okay! You can go to Colossalcon with no worries!") : console.log("Uh oh... you might want to take a step back.");
//if the statement is true then, "Everything is okay! You can go to Colossalcon with no worries!" will print. If it is false then, "Uh oh... you might want to take a step back." this statement will print in the console.