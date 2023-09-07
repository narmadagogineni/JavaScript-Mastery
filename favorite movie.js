// Guess my fav movie

const favMovie = "avatar";
let guess = prompt("Guess my favorite movie: ");

while((guess != favMovie) && (guess != "quit")) {
    guess = prompt("Wrong guess! Please try again..");
}

if(guess == "avatar") {
    console.log("Congrats! You guessed it right");
} else {
    console.log("You Quit!");
}
