//Meghan Blair
//Functions Assignment
//March 26, 2015

var userPrompt = prompt("Would you like a ticket for the Florida Lottery or the Powerball?");

while (userPrompt === ""){
    prompt("You didn't tell me which ticket you want!");
}

var lotteryNumbers = flLottery(1, 53);

function flLottery(min, max){
    var flNumbers = Math.floor(Math.random() * (max - min) + min);
    return flNumbers;
}

console.log("The Florida Lottery Numbers are " + lotteryNumbers + lotteryNumbers + ".");

var powerBallNum = pbNumbers(1, 59, 1, 35);

function pbNumbers(min, max, min2, max2){
    var numbers = Math.floor(Math.random() * (max - min) + min);
    var ball = Math.floor(Math.random() * (max2 - min2) + min2);
    return numbers;
    return ball;
}

console.log("The numbers are " + powerBallNum + "and the Powerball is " + )