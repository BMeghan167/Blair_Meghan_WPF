//Meghan Blair
//March 19,2015
//Conditionals Assignment

var conBudget = 400;
var nextPaycheck = 300;

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

if(conTicket + yourCosplay + yourSpending <= conBudget + nextPaycheck){
    console.log("You're good to go!");
}else{
    console.log("You might want to cut back somewhere!");
}