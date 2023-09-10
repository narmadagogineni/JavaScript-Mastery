//Guessinig the random game

const max = prompt("Enter the max range of number you want to play: ");

const rand = Math.floor(Math.random() * max) + 1;
// console.log(rand);
let guess = prompt("Guess the number: ")
while(true) {
    if(guess == "quit") {
        alert("Quitting the game");
        break;
    }

    if(guess == rand) {
        alert('You got it right! Congrats!!', rand);
        console.log('You got it right! Congrats!!, The random number was', rand);
        break;
    } else if(guess < rand) {
        guess = prompt("Hint: Enter a larger number!");
    } else if(guess > rand) {
        guess = prompt("Hint: Enter a smaller number!");
    }

}

