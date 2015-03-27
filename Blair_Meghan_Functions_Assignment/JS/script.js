//Meghan Blair
//Functions Assignment
//March 26, 2015

var userPrompt = prompt("Would you like a ticket for the Florida Lottery or the Powerball?");

while (userPrompt === ""){
    prompt("You didn't tell me which ticket you want!");
}

var lotteryNumbers = flLottery();

if(userPrompt === "Florida Lottery"){
    function flLottery(){
        var flNumbers = Math.floor(Math.random() * 52);
        return flNumbers;
    }
}

console.log(lotteryNumbers);