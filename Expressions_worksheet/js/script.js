/**
 * Created by MetinBlah on 2/12/15.
 */
//Average Shopping Bill

var groceryMoney = [240.37, 170.56, 200.49, 110.32, 130.98]; //0,1,2,3,4 //array of amounts spent each week on groceries

var total = groceryMoney[0] + groceryMoney[1] + groceryMoney[2] + groceryMoney[3] + groceryMoney[4];
//variable created to add each number together and get a total from it

var average = total/5 //variable set to divide the total by 5 weeks to find an average

console.log(total); //print total in browser
console.log(average); //print average in browser
console.log("You have spent a total of" + " " + "$" + total + " " + "on groceries over 5 weeks." +
"Thats is an average of" + " " + "$" + average + " " + "per week.")
//prints phrase with both the total and average in it
