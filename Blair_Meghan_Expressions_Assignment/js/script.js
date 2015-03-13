//Meghan Blair
//Expressions Assignment
//March 12, 2015

var movieTypes = [121, 93, 74]; //creating an array for the movie types the rental store carries

var horrorMovies = prompt("How many horror movies would you like to rent?"); //creating a variable from the users prompt of how many horror movies they want to rent
var comedyMovies = prompt("How many comedy movies would you like to rent?"); //creates a variable from the users input of comedy movies they rent
var actionMovies = prompt("Last question, I swear! \n How many action movies would you like to rent?"); //creates a variable from the users input of how many action movies they want to rent

var totalMovies = movieTypes[0] + movieTypes[1] + movieTypes[2];
console.log("There are a total of" + " " + totalMovies + " " + "movies.");
var yourTotal = Number(horrorMovies) + Number(comedyMovies) + Number(actionMovies);
console.log("You rented a total of" + " " + yourTotal + " " + "movies.");





