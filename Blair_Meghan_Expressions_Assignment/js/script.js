//Meghan Blair
//Expressions Assignment
//March 12, 2015

var movieTypes = [121, 93, 74]; //creating an array for the movie types the rental store carries

var horrorMovies = prompt("How many horror movies would you like to rent?"); //creating a variable from the users prompt of how many horror movies they want to rent
var comedyMovies = prompt("How many comedy movies would you like to rent?"); //creates a variable from the users input of comedy movies they rent
var actionMovies = prompt("Last question, I swear! \n How many action movies would you like to rent?"); //creates a variable from the users input of how many action movies they want to rent

var totalMovies = movieTypes[0] + movieTypes[1] + movieTypes[2]; //creates a variable for the total amount of movies the rental store has by adding the array amounts together
console.log("There are a total of" + " " + totalMovies + " " + "movies."); //this line prints the result of the equation above using strings
var yourTotal = Number(horrorMovies) + Number(comedyMovies) + Number(actionMovies); //this line creates a variable of how many movies the user has rented total so it can be used to subtract from the totalMovies variable later
console.log("You rented a total of" + " " + yourTotal + " " + "movies."); //this is printing the result of how many movies the user is renting using strings

var newMovieTotal = totalMovies -= yourTotal; //this new variable is going to be how many movies are left after the user rents theirs by subtracting yourTotal from totalMovies
console.log("The total of movies the store owner has left after you pick your movies is" + " " + newMovieTotal + "."); //this line prints the final total of movies after the user has rented theirs using strings

/*Even if you change the number of movies rented, the answer will be the same.*/








