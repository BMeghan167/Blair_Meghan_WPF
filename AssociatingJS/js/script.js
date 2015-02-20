//Conditional Logic - Ternary Operators

var gpa = 48;

//if the gpa is over the min 2.0 score, the student can gradate

/*if(gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}*/

//(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!");

var age = 11
var book;

//if child is under 10, they get green eggs and ham, otherwise, they get the time machine
/*if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);*/
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
