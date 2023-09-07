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

//USING BREAK STATEMENT

const favMovie = "avatar";
let guess = prompt("Guess my Favorite movie: ");

while(guess != favMovie) {
    if(guess == "quit") {
        console.log("You Quit");
        break;
    }
    guess = prompt("Wrong guess! Please Try again.");
}

if(guess == favMovie) {
    console.log("Congrats! You guessed it right!");
}
