//Meghan Blair
//March 19,2015
//Conditionals Assignment

var conBudget = 400; //This will set a variable for your convention budget at $400
var nextPaycheck = 300; //This will set a variable for your next paycheck at $300 that is also of use to you for the convention
var rentPaid = true; //This is a boolean that will add to a conditional below

var conTicket = prompt("How much is your ticket?");
var yourCosplay = prompt("How much will you spend on your cosplay?");
var yourSpending = prompt("How much do you want to spend at Colossalcon?");

if(conTicket === ""){
    prompt("You forgot to tell me how much your ticket is!");
    if(yourCosplay === ""){
        prompt("You forgot to tell me how much your cosplay is going to cost!");
    }
    if(yourSpending === ""){
        prompt("Your forgot to tell me how much you're spending at the convention!");
    }
}else{
    console.log("Keep going!");
}

if(Number(conTicket) + Number(yourCosplay) + Number(yourSpending) <= conBudget + nextPaycheck){
    console.log("You have enough money!");
}else if(rentPaid){
    console.log("No worries! Your bills are paid!");
}else{
    console.log("You might want to cut back somewhere!");
}

